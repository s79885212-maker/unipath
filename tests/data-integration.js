'use strict';
module.exports = function (env) {
  var fs = require('fs'), path = require('path'), vm = require('vm');
  var U = env.U, DB = env.DB, ok = env.ok;
  var box = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../data/i18n/ru.js'), 'utf8'), box);
  var proposed = JSON.parse(fs.readFileSync(path.join(__dirname, '../research/claude-v159-ru.json'), 'utf8'));
  var missed = Object.keys(proposed).filter(function (key) { return box.window.UNIPATH_I18N.ru[key] !== proposed[key]; });
  ok(missed.length === 0, 'all handed-over Russian translations survive integration with technical translations', missed.join('; '));
  var ca = DB.universities.filter(function (u) { return u.country === 'ca'; });
  var invalidEnglish = [];
  ca.forEach(function (u) { U.englishPrograms(u).forEach(function (field) {
    var e = (u.programEvidence || {})[field];
    if (!e || e.level !== 'bachelor' || !/English/.test(e.language || '') || !/^https:\/\//.test(e.url || '')) invalidEnglish.push(u.id + ':' + field);
  }); });
  ok(invalidEnglish.length === 0, 'Canadian English field filters retain named bachelor evidence and exclude French-only or unknown-language entries', invalidEnglish.join('; '));
  var viu = U.uniById('vancouver-island-university');
  var award = U.awardsAll(viu).filter(function (a) { return a.id === 'international-entrance'; })[0];
  var dates = U.awardDates(viu, award);
  ok(dates.length === 1 && U.roundStatus(dates[0]) === 'confirmed' && dates[0].dateISO === '2027-02-28' && !dates[0].timezone &&
    !U.awardDates(viu, Object.assign({}, award, { id: 'unrelated-award' })).length,
    'VIU international entrance award keeps its own Fall 2027 date without inventing a timezone or leaking to unrelated awards');
  var domestic = [{ id: 'queens-university', name: /Major Admission|Chancellor/ }, { id: 'bishops-university', name: /Goldbloom/ }];
  ok(domestic.every(function (x) { return !U.awardsAll(U.uniById(x.id)).some(function (a) { return x.name.test(a.name || ''); }); }),
    'domestic-only Queen’s and Bishop’s awards are absent from international award cards');
};
