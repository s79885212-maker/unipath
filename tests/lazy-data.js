/* Records loaded country by country (assets/js/data-loader.js, November 2026):
   the published site fetches data/universities.*.js and the layers only for the
   pages that need them. These checks keep that loading as true as loading all. */
'use strict';
module.exports = function (ok) {
  var fs = require('fs'), path = require('path'), vm = require('vm');
  var ROOT = path.join(__dirname, '..');
  var index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  var tags = (index.match(/<script src="data\/[^"]+"[^>]*>/g) || []).filter(function (t) { return !/i18n/.test(t); });
  var file = function (t) { return /src="(data\/[^"?]+)/.exec(t)[1]; };
  var lazy = tags.filter(function (t) { return /type="text\/x-unipath-data"/.test(t); }).map(file);
  var eager = tags.filter(function (t) { return !/type=/.test(t); }).map(file);
  var all = tags.map(file);

  ok(eager.join() === 'data/registry.js,data/countries.js,data/country.es.js,data/country.fr.js,data/country.it.js' &&
     lazy.length === all.length - eager.length &&
     lazy.every(function (f) { return /^data\/(universities\.[a-z0-9]+|photos|admission-profiles|degrees|test-policy|english-details|requirements|award-details|news|match)\.js$/.test(f); }),
    'Only the registry and country descriptions load with the page; records and layers wait for data-loader', eager.join());
  var loaderAt = index.indexOf('assets/js/data-loader.js'), lastLazy = index.lastIndexOf('type="text/x-unipath-data"');
  ok(loaderAt > lastLazy && loaderAt < index.indexOf('<script src="assets/js/i18n.js') && loaderAt < index.indexOf('<script src="assets/js/app.js'),
    'data-loader.js follows the last record tag and comes before the application');

  function box() {
    var b = { console: console, document: { querySelector: function () { return null; } } };
    b.window = b; vm.createContext(b); return b;
  }
  function run(b, f) { vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), b, { filename: f }); }
  function fingerprint(b) {
    return JSON.stringify(b.UNIPATH.universities.slice().sort(function (x, y) { return x.id < y.id ? -1 : 1; }));
  }
  /* All at once, in index.html order — as before. */
  var A = box(); all.forEach(function (f) { run(A, f); }); A.UNIPATH.applyLayers();
  /* Japan first, then the United States, then the rest — as a visitor might. */
  var B = box(); eager.forEach(function (f) { run(B, f); });
  var layers = lazy.filter(function (f) { return !/universities\./.test(f); });
  var uni = lazy.filter(function (f) { return /universities\./.test(f); });
  var batches = [uni.filter(function (f) { return /\.jp\.js$/.test(f); }),
                 uni.filter(function (f) { return /\.us\d*\.js$/.test(f); })];
  batches.push(uni.filter(function (f) { return batches[0].indexOf(f) < 0 && batches[1].indexOf(f) < 0; }));
  batches[0] = batches[0].concat(layers);
  batches.forEach(function (list) { list.forEach(function (f) { run(B, f); }); B.UNIPATH.applyLayers(); });
  ok(A.UNIPATH.universities.length === B.UNIPATH.universities.length && fingerprint(A) === fingerprint(B),
    'Records loaded country by country are identical to records loaded all at once');

  /* The summary the build writes for the home, countries and about pages. */
  var S = require('../tools/data_summary.js').summarize(ROOT);
  var byCountry = {};
  A.UNIPATH.universities.forEach(function (u) { byCountry[u.country] = (byCountry[u.country] || 0) + 1; });
  ok(S.total === A.UNIPATH.universities.length && JSON.stringify(S.byCountry) === JSON.stringify(byCountry) &&
     Object.keys(S.idCountry).length === S.total && S.stats.unis === S.total &&
     uni.every(function (f) { return S.fileCountry[f]; }) && layers.every(function (f) { return !S.fileCountry[f]; }),
    'data/summary.js counts every record, maps each record file to one country and leaves layers to all');
};
