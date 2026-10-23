/* Pack a dictionary for the published site:
     node tools/i18n_pack.js <site root> <lang> <out dir>
   • Plain keys become keyHash(normalised key) — the same function the browser
     uses, taken from assets/js/i18n.js; keys with {0}/{#0} placeholders stay.
   • Texts longer than 30 characters that occur only in the records of one
     country go to a file of their own, <lang>.<country>.js, which the site loads when a page of that
     country needs it (and in the background after the first page). Shared
     data, the site's own wording and texts found nowhere stay in <lang>.js,
     loaded at start.
   Fails on a fingerprint collision. */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path');
const [ROOT, lang, OUT] = process.argv.slice(2);

const stub = () => ({ setAttribute() {}, getAttribute() { return null; }, classList: { add() {}, remove() {} }, style: {} });
const box = {
  console, location: { search: '' }, navigator: { language: 'en' }, localStorage: { getItem: () => null, setItem() {} },
  document: { documentElement: stub(), querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, addEventListener() {}, createElement: stub, body: null },
  addEventListener() {}, matchMedia: () => ({ matches: false, addEventListener() {} }), setTimeout() {}, CustomEvent: function () {},
  MutationObserver: function () { this.observe = () => {}; }
};
box.window = box; vm.createContext(box);
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const scripts = [...idx.matchAll(/<script src="([^"?]+)/g)].map(m => m[1]);
scripts.filter(s => s.startsWith('data/')).forEach(s => vm.runInContext(fs.readFileSync(path.join(ROOT, s), 'utf8'), box));
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/i18n', lang + '.js'), 'utf8'), box);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/js/i18n.js'), 'utf8'), box);
const dict = box.UNIPATH_I18N[lang], keyHash = box.I18N.keyHash, D = box.UNIPATH;
const norm = s => String(s).replace(/\s+/g, ' ').trim();

/* Which countries' records each text occurs in ('*' = shared data, not one university). */
const uniCountry = {}; D.universities.forEach(u => { uniCountry[u.id] = u.country; });
const where = new Map(), seen = new Set();
const add = (s, c) => { s = norm(s); if (!s) return; let w = where.get(s); if (!w) where.set(s, w = new Set()); w.add(c); };
function walk(o, c) {
  if (o == null) return;
  if (typeof o === 'string') { add(o, c); return; }
  if (typeof o !== 'object' || seen.has(o)) return;
  seen.add(o);
  if (Array.isArray(o)) { o.forEach(x => walk(x, x && x.id && uniCountry[x.id] ? uniCountry[x.id] : c)); return; }
  for (const k in o) { add(k, c); walk(o[k], uniCountry[k] || c); }
}
for (const k in D) if (k !== 'universities') walk(D[k], '*');
D.universities.forEach(u => walk(u, u.country));
const code = scripts.filter(s => s.startsWith('assets/')).map(s => fs.readFileSync(path.join(ROOT, s), 'utf8')).join('\n');

const plain = {}, files = { '': {} }, owner = {};
for (const k of Object.keys(dict)) {
  const key = norm(k);
  if (/\{#?\d+\}/.test(key)) { plain[k] = dict[k]; continue; }
  const h = keyHash(key);
  if (owner[h] !== undefined && owner[h] !== key) throw new Error('fingerprint collision: ' + JSON.stringify([owner[h], key]));
  owner[h] = key;
  const w = where.get(key);
  /* Short texts (city names, types, labels) stay at start: search suggestions show them at once. */
  const cc = key.length > 30 && w && w.size === 1 && !w.has('*') && !code.includes(k) ? [...w][0] : '';
  (files[cc] = files[cc] || {})[h] = dict[k];
}
const chunks = Object.keys(files).filter(c => c).sort();
const head = '/* UniPath ' + lang + ' dictionary, packed for the published site by tools/i18n_pack.js from data/i18n/' + lang + '.js. */\n';
fs.mkdirSync(OUT, { recursive: true });
const core = head + 'window.UNIPATH_I18N = window.UNIPATH_I18N || {};\n' +
  'window.UNIPATH_I18N.' + lang + ' = ' + JSON.stringify(plain) + ';\n' +
  'window.UNIPATH_I18N.' + lang + 'H = ' + JSON.stringify(files['']) + ';\n' +
  'window.UNIPATH_I18N.' + lang + 'Chunks = ' + JSON.stringify(chunks) + ';\n';
fs.writeFileSync(path.join(OUT, lang + '.js'), core);
const sizes = [lang + '.js ' + (Buffer.byteLength(core) / 1024).toFixed(0) + ' KB'];
for (const c of chunks) {
  const t = head + 'window.UNIPATH_I18N_ADD(' + JSON.stringify(lang) + ', ' + JSON.stringify(c) + ', ' + JSON.stringify(files[c]) + ');\n';
  fs.writeFileSync(path.join(OUT, lang + '.' + c + '.js'), t);
  sizes.push(c + ' ' + (Buffer.byteLength(t) / 1024).toFixed(0) + ' KB');
}
console.log('i18n_pack: ' + lang + ' from ' + (fs.statSync(path.join(ROOT, 'data/i18n', lang + '.js')).size / 1024).toFixed(0) + ' KB → ' + sizes.join(', '));
