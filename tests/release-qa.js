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

  /* The 50 USA profiles of November 2026 were written with spaces missing around numbers
     and between words ("IELTS6.5", "Fall2027", "Открылся1946как"); tools/us50_text_spacing.py
     restores them. Every displayed English string and its Russian translation stays spaced. */
  (function () {
    var box = { window: {} }; box.window = box; vm.createContext(box);
    ['data/registry.js', 'data/universities.us3.js', 'data/i18n/ru.js'].forEach(function (rel) {
      vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), box, { filename: rel });
    });
    var ids = JSON.parse(fs.readFileSync(path.join(ROOT, 'research/us-expansion-50-targets.json'), 'utf8')).map(function (t) { return t.id; });
    var ru = box.UNIPATH_I18N.ru;
    var skip = /^(id|source|url|page|licenseUrl|src|main|thumb|website|apply|dateISO|period|status|basis|level|verified|checked|lastVerified|programsBasis|programsStatus|institutionKind|policy|kind|c1|c2|initials|currency|entryTerm|entryYear|country|access|category|artist)$/;
    var GLUE = /[A-Za-z]{2}[0-9]|[0-9][A-Za-z]{3}|[а-яё][A-Za-z0-9]|[A-Za-z0-9][а-яё]|\b(?:in|to|for|from|by|as|and|or|the)[0-9]/;
    var hits = [], strings = 0;
    function check(lang, s) { var m = s.replace(/https?:\/\/\S+/g, '').match(GLUE); if (m) hits.push(lang + ' "' + m[0] + '"'); }
    function walk(o, key, parent) {
      if (typeof o === 'string') {
        if (skip.test(key) || parent === 'links' || parent === 'brand' || /^https?:/.test(o)) return;
        strings++; check('EN', o); if (ru[o]) check('RU', ru[o]);
      } else if (Array.isArray(o)) o.forEach(function (v) { walk(v, key, parent); });
      else if (o && typeof o === 'object') for (var k in o) walk(o[k], k, key);
    }
    var recs = box.UNIPATH.universities.filter(function (u) { return ids.indexOf(u.id) > -1; });
    recs.forEach(function (u) { walk(u, '', ''); });
    ok(recs.length === 50 && strings > 4000 && !hits.length, 'texts of the 50 new USA profiles and their Russian keep the spaces around numbers and between words (' + strings + ' strings)', hits.slice(0, 8).join('; '));
  })();
  /* UK 2027/28 batch 1: IELTS profiles hold direct entry only; Foundation/pathway levels stay in
     notes and separately labelled cost lines, so the match page never reads them as a degree threshold. */
  (function () {
    var box = { console: console, document: { querySelector: function () { return null; } } };
    box.window = box; vm.createContext(box);
    dataScripts.forEach(function (rel) { vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), box, { filename: rel }); });
    var ids = JSON.parse(fs.readFileSync(path.join(ROOT, 'research/claude-uk-batch1-2027.json'), 'utf8')).ids;
    var recs = ids.map(function (id) { return box.UNIPATH.universities.filter(function (u) { return u.id === id; })[0]; });
    var bad = [];
    recs.forEach(function (u, i) {
      if (!u) { bad.push(ids[i] + ': missing'); return; }
      var t = u.english.ielts, ac = box.UNIPATH.match.annualCost[u.id];
      if (u.country !== 'uk' || t.min !== null || !t.varies) bad.push(u.id + ': ielts shape');
      if (!t.profiles.length || !t.profiles.every(function (p) { return p.overall >= 6 && /direct entry/.test(p.scope) && p.source && p.verified; })) bad.push(u.id + ': profile');
      if (u.costs.academicYear !== '2027–2028' || !ac || ac.min !== u.costs.breakdown.tuition || ac.basis !== 'tuition') bad.push(u.id + ': cost');
      if (!/Uzbek/.test(u.academics.internationalQualifications)) bad.push(u.id + ': Uzbekistan');
      if (!u.admissions.notes.some(function (n) { return /Foundation route|Pathway route/.test(n); })) bad.push(u.id + ': route');
      (u.scholarships.merit || []).forEach(function (a) { if (a.internationalEligible !== true || !a.source || !a.verified) bad.push(u.id + ': award ' + a.id); });
    });
    ok(recs.length === 5 && !bad.length, 'UK 2027/28 batch: direct-entry IELTS only in profiles, Foundation kept apart, 2027/28 fee matches annualCost, Uzbek rule and sourced awards', bad.join('; '));
  })();
};
