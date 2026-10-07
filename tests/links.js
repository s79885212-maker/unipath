/* UniPath — checks every internal link of the built site.
   Run after the build:  python3 build-artifact.py && node tests/links.js
   - every relative href/src in dist/**.html must point to a file that exists;
   - every "#/university/<id>" and "university/<id>/" link must name a record;
   - every "#/<route>" link in the pages and scripts must be a route the
     router handles. */
'use strict';
var fs = require('fs'), path = require('path');
var ROOT = path.join(__dirname, '..'), DIST = path.join(ROOT, 'dist');
if (!fs.existsSync(DIST)) { console.log('dist/ not found — run python3 build-artifact.py first'); process.exit(1); }
var T = require('./run.js');
var ids = {}; T.DB.universities.forEach(function (u) { ids[u.id] = 1; });
var countries = {}; (T.DB.countries || []).forEach(function (c) { countries[c.code || c.id] = 1; });
var ROUTES = { '': 1, countries: 1, universities: 1, university: 1, match: 1, compare: 1, saved: 1, news: 1, scholarships: 1, about: 1, country: 1 };

function walk(dir, out) {
  fs.readdirSync(dir).forEach(function (f) {
    var p = path.join(dir, f), st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out); else if (/\.html$/.test(f)) out.push(p);
  });
  return out;
}
var pages = walk(DIST, []), broken = [], badId = [], badRoute = [], checked = 0;
function hash(h, where) {
  var parts = h.replace(/^#\/?/, '').split('?')[0].split('/');
  if (!ROUTES.hasOwnProperty(parts[0])) badRoute.push(where + ' → ' + h);
  if (parts[0] === 'university' && parts[1] && !/[{}$+'" ]/.test(parts[1]) && !ids[decodeURIComponent(parts[1])]) badId.push(where + ' → ' + h);
}
pages.forEach(function (file) {
  var html = fs.readFileSync(file, 'utf8'), rel = path.relative(DIST, file), re = /(?:href|src)="([^"]+)"/g, m;
  while ((m = re.exec(html))) {
    var link = m[1].replace(/&amp;/g, '&');
    if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(link)) continue;
    if (/['+\n{}]/.test(link)) continue;   /* a string being built inside an inline script, not a link */
    checked++;
    var hashAt = link.indexOf('#');
    var target = hashAt < 0 ? link : link.slice(0, hashAt), frag = hashAt < 0 ? '' : link.slice(hashAt);
    if (/^#\//.test(frag)) hash(frag, rel);
    target = target.split('?')[0];
    if (!target) continue;
    var p = target.charAt(0) === '/' ? path.join(DIST, target.replace(/^\/unipath\//, '/')) : path.join(path.dirname(file), target);
    if (/\/$/.test(target) || (fs.existsSync(p) && fs.statSync(p).isDirectory())) p = path.join(p, 'index.html');
    if (!fs.existsSync(p)) broken.push(rel + ' → ' + link);
    var um = /(?:^|\/)university\/([^\/]+)\/?$/.exec(target.replace(/index\.html$/, ''));
    if (um && !ids[decodeURIComponent(um[1])]) badId.push(rel + ' → ' + link);
  }
});
/* hash routes written in the scripts themselves */
['assets/js/app.js', 'assets/js/pages.js', 'assets/js/views.js', 'assets/js/news.js', 'assets/js/match.js', 'assets/js/router.js'].forEach(function (f) {
  var src = fs.readFileSync(path.join(ROOT, f), 'utf8'), re = /["'](#\/[a-z-]*)(?=[\/?"'])/g, m;
  while ((m = re.exec(src))) { checked++; hash(m[1], f); }
});
function report(list, label) {
  if (!list.length) { console.log('ok    ' + label); return 0; }
  console.log('FAIL  ' + label + ' (' + list.length + ')'); list.slice(0, 12).forEach(function (x) { console.log('      ' + x); }); return 1;
}
console.log(pages.length + ' pages, ' + checked + ' internal links checked');
var failed = report(broken, 'every relative link points to an existing file') +
  report(badId, 'every university link names an existing record') +
  report(badRoute, 'every hash route is one the router handles');
process.exit(failed ? 1 : 0);
