'use strict';

module.exports = function ({ U, M, DB, ok }) {
  const expected = [
    "thomas-aquinas-college",
    "saint-anselm-college",
    "principia-college",
    "lycoming-college",
    "saint-marys-college-california",
    "university-of-redlands",
    "university-of-washington-bothell",
    "st-edwards-university",
    "dominican-university-of-california",
    "university-of-washington-tacoma",
    "point-loma-nazarene-university",
    "new-mexico-tech",
    "university-of-dallas",
    "cal-state-monterey-bay",
    "stanislaus-state",
    "st-marys-university-texas",
    "westminster-university-utah",
    "chico-state",
    "cal-state-northridge",
    "cal-state-san-bernardino",
    "cal-state-san-marcos",
    "western-washington-university",
    "sonoma-state-university",
    "cal-state-east-bay",
    "cal-state-bakersfield"
  ];
  const batch = DB.universities.filter(u => u.country === 'us').slice(275, 300);
  ok(JSON.stringify(batch.map(u => u.id)) === JSON.stringify(expected),
    'USA expansion batch 2 includes the approved 25 profiles in order');
  ok(batch.every(u => u.programsStatus === 'partial' && u.programs.every(field => {
    const evidence = u.programEvidence[field];
    return evidence.program && /^https:\/\//.test(evidence.url) && evidence.checked === u.lastVerified;
  })), 'batch 2 links each field to a named bachelor program with a check date');
  const reviewed = require('../research/us100-batch2-programs.json');
  const targetFields = ['economics', 'business', 'computer-science', 'data-science', 'engineering'];
  ok(batch.every(u => {
    const confirmed = reviewed[u.id].confirmed;
    return targetFields.every(field => Boolean(confirmed[field]) === u.programs.includes(field) &&
      Boolean(confirmed[field]) === U.englishPrograms(u).includes(field));
  }), 'only confirmed bachelor fields from the targeted review are available to the filters');
  const get = U.uniById;
  const school = get('cal-state-bakersfield');
  ok(U.roundsOf(school).filter(d => d.status === 'confirmed' && d.dateISO === '2027-06-01').length === 2 &&
     U.roundsOf(school).some(d => d.kind === 'documents') &&
     U.roundsOf(get('cal-state-east-bay')).every(d => d.status === 'annual-rule' && !d.dateISO),
    'Bakersfield application and document dates are confirmed separately; East Bay dates remain annual rules');
  const aid = get('cal-state-monterey-bay');
  const tac = get('thomas-aquinas-college');
  const lycoming = get('lycoming-college');
  const wwu = get('western-washington-university');
  ok(U.awardKind(aid) === null && aid.scholarships.merit[0].firstYearEligible === null &&
     U.awardKind(tac) === null && tac.scholarships.needBased.availableToInternational &&
     tac.scholarships.needBased.meetsFullNeed === null,
    'the Monterey Bay surcharge grant and limited Thomas Aquinas need aid do not imply full funding');
  ok(M.evaluate(get('lycoming-college'), { budget: 100000, currency: 'USD' }).budget.status === 'unknown',
    'Lycoming previous-cycle costs with mandatory insurance unpriced are not compared');
  ok(batch.every(u => U.awardKind(u) !== 'full-ride') &&
     lycoming.scholarships.needBased.availableToInternational === false &&
     wwu.scholarships.merit[0].deadlineScope === 'no-separate-application' &&
     /Western’s own admission application/.test(wwu.scholarships.merit[0].application),
    'batch 2 aid does not imply full ride and Western IAA preserves its own admission application requirement');
  ok([0, 100000].every(budget => batch.every(u => M.evaluate(u, { budget, currency: 'USD' }).budget.status !== 'fits')),
    'unverified and previous-cycle batch 2 costs never produce a full-cost match');
};
