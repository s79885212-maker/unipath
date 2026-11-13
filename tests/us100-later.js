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
  const csudh = U.uniById('cal-state-dominguez-hills');
  const csudhDates = U.roundsOf(csudh);
  ok(csudh.admissions.applicationFee.amount === 70 &&
     csudhDates.length === 2 && csudhDates.some(round => round.kind === 'documents') &&
     csudhDates.every(round => round.status === 'annual-rule' && !round.dateISO),
    'CSUDH fee and annual application/document deadlines preserve their scope');
  if (batches.includes(4)) {
    const uni = U.uniById('university-of-northern-iowa');
    const augie = U.uniById('augustana-university-south-dakota');
    ok(uni.academics.internationalQualifications.includes('4 (B)') &&
       uni.sources.some(source => source.url.endsWith('/country-specific-requirements/uzbekistan')) &&
       uni.academics.gpa === null,
      'Northern Iowa preserves the Uzbekistan qualification and local grade without treating it as a US GPA');
    ok(augie.costs.status === 'previous-cycle' && augie.costs.academicYear === '2026–2027' &&
       !DB.match.annualCost[augie.id] && U.awardKind(augie) !== 'full-ride',
      'Augustana prior-year I-20 estimate and variable scholarship stay outside full-budget matches');
    const photoIds = ['creighton-university', 'drake-university', 'saint-louis-university'];
    ok(photoIds.every(id => {
      const photo = U.uniById(id).photos.gallery[0];
      return photo && photo.artist && photo.licenseUrl && /^https:\/\/commons\.wikimedia\.org\//.test(photo.page) &&
        ['1.jpg', 'thumb.jpg'].every(file => fs.existsSync(path.join(__dirname, '../assets/img/universities', id, file)));
    }), 'three reviewed campus photos include main image, thumbnail and Commons attribution');
    const ue = U.uniById('university-of-evansville');
    ok(M.evaluate(ue, { budget: 50000, currency: 'USD' }).budget.status === 'over' &&
       M.evaluate(ue, { budget: 70894, currency: 'USD' }).budget.status === 'fits',
      'Evansville uses its published full cost before competitive merit aid');
  }
};
