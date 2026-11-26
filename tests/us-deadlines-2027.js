'use strict';
/* US first-year deadlines added in November 2026 (tools/claude_us_deadlines2027.py). */
module.exports = function ({ U, DB, ok }) {
  var fs = require('fs'), path = require('path');
  var src = fs.readFileSync(path.join(__dirname, '../tools/claude_us_deadlines2027_data.py'), 'utf8');
  var ids = []; src.replace(/U\('([a-z0-9-]+)'/g, function (_, id) { ids.push(id); });
  src.replace(/for uid in \(([^)]*)\)/g, function (_, list) { list.replace(/'([a-z0-9-]+)'/g, function (__, id) { ids.push(id); }); });
  var bad = [];
  ids.forEach(function (id) {
    var u = U.uniById(id);
    if (!u || u.country !== 'us') { bad.push(id + ': no US profile'); return; }
    var rounds = U.roundsOf(u);
    if (!rounds.length) bad.push(id + ': no deadlines');
    rounds.forEach(function (d) {
      if (d.verified !== '2026-11-26' && !d.awardId) return;
      if (d.status === 'confirmed' && U.roundStatus(d) !== 'confirmed') bad.push(id + ': ' + d.name + ' lacks cycle evidence');
      if (d.status === 'annual-rule' && (d.dateISO || d.entryYear || U.roundState(d) !== 'unknown')) bad.push(id + ': ' + d.name + ' annual rule carries a year');
      if (!/^https:\/\//.test(d.source || '')) bad.push(id + ': ' + d.name + ' no source');
    });
  });
  ok(ids.length >= 25 && !bad.length, 'US deadlines (Nov 2026): every listed profile has sourced dates; Fall 2027 only with quoted evidence, undated rules stay without a year' + (bad.length ? ' — ' + bad.join('; ') : ''));
};
