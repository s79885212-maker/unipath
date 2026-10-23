/* Pack a dictionary for the published site:
     node tools/i18n_pack.js <data/i18n/ru.js> <assets/js/i18n.js> <out.js>
   Plain keys become keyHash(normalised key) in UNIPATH_I18N.<lang>H (the same
   function the browser uses, taken from assets/js/i18n.js); keys with {0}/{#0}
   placeholders stay in UNIPATH_I18N.<lang>. Fails on a fingerprint collision. */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path');
const [src, i18nJs, out] = process.argv.slice(2);
const lang = path.basename(src, '.js');

const box = {
  location: { search: '' }, navigator: { language: 'en' }, localStorage: { getItem: () => null, setItem() {} },
  document: { documentElement: { setAttribute() {} }, querySelector: () => null, body: null },
  MutationObserver: function () { this.observe = () => {}; }, Set, Map
};
box.window = box; vm.createContext(box);
vm.runInContext(fs.readFileSync(src, 'utf8'), box);
vm.runInContext(fs.readFileSync(i18nJs, 'utf8'), box);
const dict = box.UNIPATH_I18N[lang], keyHash = box.I18N.keyHash;
const norm = s => String(s).replace(/\s+/g, ' ').trim();

const plain = {}, packed = {}, owner = {};
let n = 0;
for (const k of Object.keys(dict)) {
  const key = norm(k);
  if (/\{#?\d+\}/.test(key)) { plain[k] = dict[k]; continue; }
  const h = keyHash(key);
  if (owner[h] !== undefined && owner[h] !== key) throw new Error('fingerprint collision: ' + JSON.stringify([owner[h], key]));
  owner[h] = key; packed[h] = dict[k]; n++;
}
const text = '/* UniPath ' + lang + ' dictionary, packed for the published site by tools/i18n_pack.js from data/i18n/' + lang + '.js. */\n' +
  'window.UNIPATH_I18N = window.UNIPATH_I18N || {};\n' +
  'window.UNIPATH_I18N.' + lang + ' = ' + JSON.stringify(plain) + ';\n' +
  'window.UNIPATH_I18N.' + lang + 'H = ' + JSON.stringify(packed) + ';\n';
fs.writeFileSync(out, text);
console.log('i18n_pack: ' + lang + ' ' + n + ' packed, ' + Object.keys(plain).length + ' templates, ' +
  (fs.statSync(src).size / 1048576).toFixed(2) + ' MB -> ' + (Buffer.byteLength(text) / 1048576).toFixed(2) + ' MB');
