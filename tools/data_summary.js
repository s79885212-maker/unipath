/* UniAtlas — writes data/summary.js for the published site.
   Usage: node tools/data_summary.js <repo root> <dist folder>
   The home, countries and about pages show counts without loading the
   university records (see assets/js/data-loader.js). This script loads the
   records exactly as the site does — the data files of index.html, then
   assets/js/app.js and views.js — and saves:
     total, byCountry   the counts on the country cards and in the footer;
     stats              the figures of the home and about pages (views.js stats());
     fileCountry        which country each data/universities.*.js holds;
     idCountry          which country each university id belongs to.
   A file holding records of more than one country stops the build: the
   loader fetches whole files by country. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

function summarize(ROOT) {
  const sandbox = {
    console, setTimeout, Intl, Date, JSON, Math,
    CustomEvent: function (name) { this.type = name; },
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    location: { search: '', hash: '', pathname: '/', origin: 'https://example.test', protocol: 'https:' },
    document: {
      documentElement: { setAttribute() {}, getAttribute: () => null, classList: { add() {}, remove() {} } },
      querySelector: () => null, querySelectorAll: () => [], getElementById: () => null,
      addEventListener() {}, dispatchEvent() {}, createElement: () => ({ setAttribute() {}, style: {} }), title: ''
    },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    addEventListener() {}
  };
  sandbox.window = sandbox; sandbox.global = sandbox;
  vm.createContext(sandbox);
  const run = (rel) => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), sandbox, { filename: rel });
  const index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const files = [...index.matchAll(/<script src="(data\/[^"?]+\.js)/g)].map(m => m[1]).filter(f => !/i18n/.test(f));
  const fileCountry = {};
  for (const f of files) {
    const before = sandbox.UNIPATH ? sandbox.UNIPATH.universities.length : 0;
    run(f);
    const added = sandbox.UNIPATH.universities.slice(before);
    const codes = [...new Set(added.map(u => u.country))];
    if (codes.length > 1) throw new Error(f + ' holds records of ' + codes.join(', ') + ': one country per file');
    if (codes.length === 1) fileCountry[f] = codes[0];
  }
  run('assets/js/app.js');
  run('assets/js/views.js');
  const DB = sandbox.UNIPATH;
  const byCountry = {}, idCountry = {};
  DB.universities.forEach(u => { byCountry[u.country] = (byCountry[u.country] || 0) + 1; idCountry[u.id] = u.country; });
  return { total: DB.universities.length, byCountry, stats: sandbox.UPViews.stats(), fileCountry, idCountry };
}

if (require.main === module) {
  const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..'));
  const DIST = path.resolve(process.argv[3] || path.join(ROOT, 'dist'));
  const s = summarize(ROOT);
  const out = '/* Written by tools/data_summary.js at build time — do not edit. */\n' +
    'window.UNIPATH.summary = ' + JSON.stringify(s) + ';\n';
  fs.writeFileSync(path.join(DIST, 'data', 'summary.js'), out);
  console.log('data_summary: ' + s.total + ' universities, ' + Object.keys(s.fileCountry).length + ' record files, ' +
    (Buffer.byteLength(out) / 1024).toFixed(0) + ' KB');
}
module.exports = { summarize };
