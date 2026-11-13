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
  const risd = U.uniById('rhode-island-school-of-design');
  const stockton = U.uniById('stockton-university');
  ok(U.roundsOf(risd).some(round => round.dateISO === '2027-01-20' &&
       round.status === 'confirmed' && round.cycleEvidence.basis === 'page-context') &&
     stockton.admissions.applicationFee.amount === 50 && U.ieltsMin(stockton) === 6.5,
    'RISD preserves the documented 2027 cycle and Stockton uses the international applicant requirements');
  if (batches.includes(4)) {
    const fees = require('../research/us100-fees.json');
    ok(fees.every(item => {
      const fee = U.uniById(item.id).admissions.applicationFee;
      return fee.amount === item.amount && fee.source === item.source &&
        fee.verified === item.verified && Boolean(item.evidence);
    }), 'reviewed international first-year fees retain the correct amount and source');
    const towson = U.uniById('towson-university');
    const manhattan = U.uniById('manhattan-university');
    ok(U.roundsOf(towson).some(round => round.dateISO === '2027-06-01' && round.status === 'confirmed') &&
       U.roundsOf(manhattan).some(round => round.dateISO === '2027-03-01' && /priority/.test(round.name)),
      'Towson international deadline and Manhattan priority date preserve their scope');
    const berry = U.uniById('berry-college');
    ok(berry.scholarships.needBased.availableToInternational === false &&
       U.awardKind(berry) !== 'full-ride' &&
       M.evaluate(U.uniById('stockton-university'), { budget: 100000, currency: 'USD' }).budget.status === 'unknown',
      'Berry merit remains separate from need aid and Stockton prior-cycle costs do not match budgets');
    const jcu = U.uniById('john-carroll-university');
    ok(U.roundsOf(jcu).some(round => round.dateISO === '2027-04-15' &&
         round.status === 'confirmed' && round.cycleEvidence.basis === 'page-context') &&
       U.satPolicy(jcu) === 'conditional' && jcu.admissions.applicationFee.amount === 0,
      'John Carroll uses the international deadline and a conditional SAT/ACT policy');
    const uni = U.uniById('university-of-northern-iowa');
    const augie = U.uniById('augustana-university-south-dakota');
    ok(uni.academics.internationalQualifications.includes('4 (B)') &&
       uni.sources.some(source => source.url.endsWith('/country-specific-requirements/uzbekistan')) &&
       uni.academics.gpa === null,
      'Northern Iowa preserves the Uzbekistan qualification and local grade without treating it as a US GPA');
    ok(augie.costs.status === 'previous-cycle' && augie.costs.academicYear === '2026–2027' &&
       !DB.match.annualCost[augie.id] && U.awardKind(augie) !== 'full-ride',
      'Augustana prior-year I-20 estimate and variable scholarship stay outside full-budget matches');
    const photoIds = us.slice(250).filter(u => u.photos.gallery.length).map(u => u.id);
    ok(photoIds.length >= 90 && photoIds.every(id => {
      const photo = U.uniById(id).photos.gallery[0];
      return photo && photo.artist && (photo.license === 'Public domain' || photo.licenseUrl) && /^https:\/\/commons\.wikimedia\.org\//.test(photo.page) &&
        ['1.jpg', 'thumb.jpg'].every(file => fs.existsSync(path.join(__dirname, '../assets/img/universities', id, file)));
    }), 'reviewed campus photos include main image, thumbnail and Commons attribution');
    const ue = U.uniById('university-of-evansville');
    ok(M.evaluate(ue, { budget: 50000, currency: 'USD' }).budget.status === 'over' &&
       M.evaluate(ue, { budget: 70894, currency: 'USD' }).budget.status === 'fits',
      'Evansville uses its published full cost before competitive merit aid');
  }
};
