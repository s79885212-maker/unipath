'use strict';

const fs = require('node:fs');
const path = require('node:path');

module.exports = function ({ U, M, DB, ok }) {
  const us = DB.universities.filter(u => u.country === 'us');
  const batches = us.length === 350 ? [3, 4] : [3];
  for (const batch of batches) {
    const rows = fs.readFileSync(path.join(__dirname, '../research/us100-batch' + batch + '-profiles.tsv'), 'utf8')
      .trim().split(/\r?\n/).slice(1).map(row => row.split('\t'));
    const schools = us.slice(300 + (batch - 3) * 25, 325 + (batch - 3) * 25);
    ok(rows.length === 25 && schools.length === 25 && schools.every((u, i) => u.id === rows[i][0]),
      'US batch ' + batch + ' contains the 25 reviewed candidates in order');
    ok(schools.every(u => u.programsStatus === 'partial' && u.programs.length > 0 &&
      u.programs.every(field => U.optionById('field', field).test(u, {}) &&
        u.programEvidence[field].program && /^https:\/\//.test(u.programEvidence[field].url) &&
        u.programEvidence[field].checked === u.lastVerified && U.englishPrograms(u).includes(field))),
      'US batch ' + batch + ' filters use dated evidence for a named undergraduate program');
    ok(schools.every(u => U.awardKind(u) !== 'full-ride' &&
      (u.id === 'university-of-evansville' || [0, 100000].every(budget =>
        M.evaluate(u, { budget, currency: 'USD' }).budget.status === 'unknown'))),
      'US batch ' + batch + ' partial aid and unknown costs do not qualify for full coverage');
  }
  if (batches.includes(4)) {
    const ue = U.uniById('university-of-evansville');
    ok(M.evaluate(ue, { budget: 50000, currency: 'USD' }).budget.status === 'over' &&
       M.evaluate(ue, { budget: 70894, currency: 'USD' }).budget.status === 'fits',
      'Evansville uses its published full cost before competitive merit aid');
  }
};
