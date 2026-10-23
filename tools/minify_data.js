/* Smaller data files for the published site:
     node tools/minify_data.js <site root> <dist dir>
   Each data file listed in index.html loses its line indentation and blank lines.
   The result is checked: all files, original and trimmed, are run as the browser
   runs them and the data they build must be identical (JSON of window.UNIPATH and
   of every other global they set; functions compared without their indentation).
   A file with a backquote outside block comments (a template literal could span
   lines) is never trimmed. If anything differs, the originals are kept. */
'use strict';
const vm = require('vm'), fs = require('fs'), path = require('path');
const [ROOT, DIST] = process.argv.slice(2);
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const files = [...idx.matchAll(/<script src="(data\/[^"?]+\.js)/g)].map(m => m[1]);

const trim = s => /`/.test(s.replace(/\/\*[\s\S]*?\*\//g, '')) ? s : s.split('\n').map(l => l.trim()).filter(l => l).join('\n') + '\n';
function run(read) {
  const stub = () => ({ setAttribute() {}, getAttribute() { return null; }, classList: { add() {}, remove() {} }, style: {} });
  const box = { location: { search: '' }, navigator: { language: 'en' }, localStorage: { getItem: () => null, setItem() {} },
    document: { documentElement: stub(), querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, addEventListener() {}, createElement: stub },
    addEventListener() {}, setTimeout() {}, CustomEvent: function () {} };
  box.window = box; vm.createContext(box);
  const before = new Set(Object.keys(box));
  files.forEach(f => vm.runInContext(read(f), box, { filename: f }));
  const out = {};
  Object.keys(box).filter(k => !before.has(k)).sort().forEach(k => { out[k] = box[k]; });
  return JSON.stringify(out, (k, v) => typeof v === 'function' ? 'fn:' + v.toString().replace(/\s+/g, ' ') : v);
}
const orig = {}, small = {};
files.forEach(f => { orig[f] = fs.readFileSync(path.join(ROOT, f), 'utf8'); small[f] = trim(orig[f]); });
const a = run(f => orig[f]), b = run(f => small[f]);
if (a !== b) { console.log('minify_data: trimmed data differs from the original — originals kept'); process.exit(0); }
let from = 0, to = 0;
files.forEach(f => { fs.writeFileSync(path.join(DIST, f), small[f]); from += Buffer.byteLength(orig[f]); to += Buffer.byteLength(small[f]); });
console.log('minify_data: ' + files.length + ' files, ' + (from / 1048576).toFixed(2) + ' MB -> ' + (to / 1048576).toFixed(2) + ' MB, data identical');
