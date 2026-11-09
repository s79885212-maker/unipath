/* Regressions found by the release check of 9 November 2026. */
'use strict';
module.exports = function (ok) {
  var fs = require('fs'), vm = require('vm'), path = require('path');
  var ROOT = path.join(__dirname, '..');
  var index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  var dataScripts = (index.match(/<script[^>]+src="([^"]+)"/g) || [])
    .map(function (s) { return /src="([^"?]+)/.exec(s)[1]; })
    .filter(function (s) { return /^data\//.test(s) && !/i18n/.test(s); });

  /* A static profile page (/unipath/university/<id>/) declares the site root in
     <meta name="unipath-root">. Every photo path, including photos stored in the
     record itself (the 50 USA profiles of November 2026), must start from that
     root; a relative path would resolve under /university/<id>/ and return 404. */
  (function () {
    var meta = { getAttribute: function () { return '/unipath/'; } };
    var box = { console: console, document: { querySelector: function (sel) { return /unipath-root/.test(sel) ? meta : null; } } };
    box.window = box; vm.createContext(box);
    dataScripts.forEach(function (rel) { vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), box, { filename: rel }); });
    box.UNIPATH.applyLayers();
    var bad = [], missing = [], withPhoto = 0;
    box.UNIPATH.universities.forEach(function (u) {
      var p = u.photos;
      if (!p || !p.main) return;
      withPhoto++;
      var paths = [p.main, p.thumb].concat((p.gallery || []).map(function (g) { return g.src; }));
      paths.forEach(function (src) {
        if (!src || /^https?:/.test(src)) return;
        if (src.indexOf('/unipath/') !== 0) { bad.push(u.id + ': ' + src); return; }
        if (!fs.existsSync(path.join(ROOT, src.slice('/unipath/'.length)))) missing.push(u.id + ': ' + src);
      });
    });
    ok(withPhoto >= 400 && !bad.length, 'on a static page every photo path, in photos.js or in the record, starts at the site root (' + withPhoto + ' profiles)', bad.slice(0, 5).join('; '));
    ok(!missing.length, 'every root-based photo path names a file in the repository', missing.slice(0, 5).join('; '));
  })();

  /* The labels the compare and save buttons switch to after a click have Russian. */
  (function () {
    var box = { window: {} }; box.window = box; vm.createContext(box);
    vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/i18n/ru.js'), 'utf8'), box);
    var ru = box.UNIPATH_I18N.ru;
    var app = fs.readFileSync(path.join(ROOT, 'assets/js/app.js'), 'utf8');
    var labels = [];
    (app.match(/textContent = (?:on|saved) \? '[^']+' : '[^']+'/g) || []).forEach(function (m) {
      (m.match(/'[^']+'/g) || []).forEach(function (q) { if (/[A-Za-z]/.test(q)) labels.push(q.slice(1, -1)); });
    });
    var untranslated = labels.filter(function (l) { return !Object.prototype.hasOwnProperty.call(ru, l); });
    ok(labels.length >= 4 && !untranslated.length, 'compare and save button labels shown after a click have Russian translations', untranslated.join(' | '));
  })();
};
