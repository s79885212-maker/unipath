'use strict';
module.exports = function (env) {
  var U = env.U, M = env.M, DB = env.DB, ok = env.ok;
  var badEvidence = [], badLinks = [];
  DB.universities.forEach(function (u) {
    U.roundsOf(u).forEach(function (d) {
      if (d.cycleEvidence && d.status === 'confirmed' && U.roundStatus(d) !== 'confirmed') badEvidence.push(u.id + ':' + d.name);
      if (d.awardId && !U.awardsAll(u).concat([U.fullRide(u)]).some(function (a) { return U.awardDates(u, a).indexOf(d) > -1; })) badLinks.push(u.id + ':' + d.awardId);
    });
  });
  ok(!badEvidence.length, 'new cycle evidence satisfies the display contract', badEvidence.join('; '));
  ok(!badLinks.length, 'new award date references resolve to an award, category and intake', badLinks.join('; '));
  function evidence(d) {
    return Object.assign({}, d, { entryTerm: d.entryTerm || 'Fall', entryYear: d.entryYear || '2099',
      cycleEvidence: { basis: 'page-context', entryTerm: d.entryTerm || 'Fall', entryYear: d.entryYear || '2099',
        source: 'https://university.example/admissions', verified: '2026-10-24', quote: 'Applications for the named intake' } });
  }
  var future = { status: 'confirmed', kind: 'admission', dateISO: '2099-03-01', verified: '2026-10-24' };
  ok(U.roundState(future) === 'unknown', 'a year and check date alone never establish the intake');
  ok(U.roundStatus(evidence(future)) === 'confirmed' && U.roundState(evidence(future)) === 'upcoming',
    'official page context can confirm a cycle even when the printed date line has no year');
  var annual = evidence(Object.assign({}, future, { status: 'annual-rule' }));
  ok(U.roundStatus(annual) === 'annual-rule' && U.roundState(annual) === 'unknown', 'annual rules are distinct and never upcoming');
  var wrong = evidence(future); wrong.cycleEvidence.entryYear = '2098';
  ok(U.roundState(wrong) === 'unknown', 'evidence for a different cycle does not confirm a deadline');
  var unsupported = evidence(future); unsupported.cycleEvidence.quote = null;
  ok(U.roundStatus(unsupported) === 'not-confirmed', 'a source and reading date without the cycle evidence are insufficient');
  ok(U.deadlineEnd({ dateISO: '2099-02-31' }) === null && U.deadlineEnd({ dateISO: '2099-03-01junk' }) === null,
    'invalid calendar dates and trailing garbage cannot become upcoming cutoffs');
  ok(!U.deadlineEnd({ dateISO: '2099-03-01', time: '12:00', timezone: 'local time' }).precise,
    'a visitor local zone is never substituted for the university zone');
  ok(U.roundConditions({ kind: 'scholarship', binding: false }).length === 0 &&
    U.roundConditions({ kind: 'ED', binding: true }).length === 1, 'binding enrolment conditions apply to admission only');
  var award = { id: 'entrance', category: 'merit', entryTerm: 'Fall', entryYear: '2099' };
  var nomination = evidence({ kind: 'nomination', status: 'confirmed', dateISO: '2001-01-01',
    awardId: 'entrance', awardCategory: 'merit', entryTerm: 'Fall', entryYear: '2099' });
  var scholarship = Object.assign({}, nomination, { kind: 'scholarship', dateISO: '2099-03-01' });
  var uni = { admissions: { deadlines: [nomination, scholarship,
    Object.assign({}, scholarship, { awardId: 'different' }), Object.assign({}, scholarship, { awardCategory: 'need' }),
    Object.assign({}, scholarship, { entryYear: '2098' }), Object.assign({}, scholarship, { kind: 'deposit' })] } };
  ok(U.awardDates(uni, award).length === 2 && !U.awardDates(uni, { name: 'entrance' }).length,
    'award dates match identity, category and intake, never name similarity or arbitrary aid');
  ok(U.roundState(nomination) === 'closed' && U.roundState(scholarship) === 'upcoming', 'closed nomination and future scholarship remain independent');
  ok(!U.firstDeadline(uni), 'nomination, scholarship and deposit never become an admission deadline');
  var html = U.awardDeadlineHtml(uni, award);
  ok(/Closed/.test(html) && /Upcoming/.test(html), 'award cards use the same date and state renderer as the timeline');
  var acadia = U.uniById('acadia-university');
  var additional = U.awardsAll(acadia).filter(function (a) { return a.id === 'additional-entrance'; })[0];
  var annualDates = U.awardDates(acadia, additional);
  ok(annualDates.length === 1 && U.roundStatus(annualDates[0]) === 'annual-rule' &&
    annualDates[0].dateISO === null && annualDates[0].entryYear === null && !U.firstDeadline(acadia),
    'Acadia: additional award links to the yearless March rule without claiming a 2027 deadline');
  ok(!U.awardDates(acadia, U.awardsAll(acadia)[0]).length &&
    !U.awardDates(acadia, Object.assign({}, additional, { entryYear: '2027' })).length &&
    !U.awardDates(acadia, Object.assign({}, additional, { category: 'need' })).length,
    'Acadia: the March rule never leaks into the automatic initial offer, another category or a named intake');
  var american = U.uniById('american-university');
  ok(american.costs.academicYear === '2026–2027' && U.budgetRange(american).min === 87374 &&
    U.budgetWithExtras(american).min === 90133 && U.costExtras(american)[0].amount === 2759 &&
    M.evaluate(american, { ielts: null, sat: null, gpa: null, budget: 87374, currency: 'USD' }).budget.status === 'fits-no-extras',
    'American: the published 2026–27 total stays distinct from required insurance and the calculated combined budget');
  var egl = U.awardsAll(american).filter(function (a) { return a.id === 'au-egls'; })[0];
  ok(U.fullRide(american).covers.insurance === false && U.awardDates(american, egl).length === 1 &&
    U.roundStatus(U.awardDates(american, egl)[0]) === 'confirmed' && !U.costAfterAid(american) &&
    M.evaluate(american, { ielts: null, sat: null, gpa: null, budget: 4000, currency: 'USD' }).budget.status === 'over',
    'AU EGL: the linked 2027 scholarship never turns competitive maximum aid into a guaranteed $4,000 budget');
  var ufvActual = U.uniById('university-of-the-fraser-valley');
  var sfuActual = U.uniById('simon-fraser-university');
  var usesActual = U.awardsAll(sfuActual).filter(function (a) { return a.id === 'uses-international'; })[0];
  ok(usesActual && U.awardDates(sfuActual, usesActual).length === 2 &&
    U.awardDates(sfuActual, usesActual).every(function (d) { return U.roundStatus(d) === 'confirmed'; }) &&
    U.fullRide(sfuActual).available === null && !U.costAfterAid(sfuActual) &&
    sfuActual.scholarships.needBased.availableToInternational === true && sfuActual.scholarships.needBased.meetsFullNeed === null,
    'SFU: international USES dates stay separate from general admission; competitive cash and limited need support do not establish full coverage');
  ok(U.applyFilters([ufvActual], { field: ['computer-science'] }).length === 1 &&
    !U.applyFilters([ufvActual], { field: ['computer-science'], language: ['english-yes'] }).length &&
    U.fieldUnverified(ufvActual, ['engineering'], false) && U.programsPartial(ufvActual),
    'UFV: confirmed Computing Science matches strictly, its unverified language does not, and unreviewed fields remain uncertain');
  var mru = U.uniById('mount-royal-university');
  ok(U.roundsOf(mru).every(function (d) { return U.roundStatus(d) === 'confirmed'; }) &&
    U.roundsOf(mru).some(function (d) { return d.kind === 'documents' && d.dateISO === '2027-05-15' && !U.isApplicationDeadline(d); }),
    'Mount Royal: explicit Fall 2027 evidence establishes the cycle and keeps documents separate from the application');
  var toronto = U.uniById('university-of-toronto'), pearson = U.awardDates(toronto, U.fullRide(toronto));
  var atCheck = Date.UTC(2026, 9, 24, 12);
  ok(pearson.length === 3 && pearson.every(function (d) { return U.roundStatus(d) === 'confirmed'; }) &&
    pearson.some(function (d) { return d.kind === 'nomination' && U.deadlinePassed(d, atCheck); }) &&
    pearson.some(function (d) { return d.kind === 'scholarship' && !U.deadlinePassed(d, atCheck); }),
    'Pearson: at the audit date the confirmed nomination is closed while the separate scholarship form is still ahead');
  ok(pearson.some(function (d) { return d.kind === 'admission'; }) && pearson.every(function (d) { return !U.isApplicationDeadline(d); }) &&
    U.isApplicationDeadline({ kind: 'regular' }),
    'the Pearson-specific admission prerequisite never replaces the university-wide admission deadline');
  var ubc = U.uniById('university-of-british-columbia');
  ok(U.roundsOf(ubc).every(function (d) { return U.roundStatus(d) === 'confirmed'; }) &&
    U.awardDates(ubc, U.fullRide(ubc)).map(function (d) { return d.kind; }).join() === 'scholarship,documents',
    'UBC: International Scholars award and documents link to that award only, with verified 2027 context');
  ok(/link not verified/.test(U.awardDeadlineHtml(acadia, Object.assign({}, additional, { id: null }))), 'an unlinked Acadia-style award explains the missing relation instead of contradicting the date table');
  ok(/no separate scholarship application/.test(U.awardDeadlineHtml(acadia, U.awardsAll(acadia)[0])),
    'Acadia automatic initial offer explains that no separate application is required');
  ok(U.fieldUnverified({ programsStatus: 'partial', programs: ['business'] }, ['engineering'], false) &&
    !U.fieldUnverified({ programsStatus: 'partial', programs: ['business'] }, ['business'], false),
    'partial programme coverage distinguishes confirmed matches from unchecked fields');
  var ufv = Object.assign({}, U.uniById('university-of-the-fraser-valley'), { programs: [], programsStatus: 'not-checked' });
  ok(ufv && U.fieldUnverified(ufv, ['business'], false) && !U.applyFilters([ufv], { field: ['business'] }).length,
    'UFV: an empty unchecked list is explained but never admitted to the strict field filter');
  var french = { programs: ['business'], englishTaught: false, englishTaughtPrograms: [] };
  ok(!U.applyFilters([french], { field: ['business'], language: ['english-yes'] }).length,
    'a French field cannot match an English field via a university-wide flag');
  function budget(id, b, currency) { return M.evaluate(U.uniById(id), { ielts: null, sat: null, gpa: null, budget: b, currency: currency || 'USD' }).budget; }
  var unbcCost = DB.match.annualCost['university-of-northern-british-columbia'];
  var guelphCost = U.uniById('university-of-guelph').costs;
  var guelphWithin = budget('university-of-guelph', 70000, 'CAD');
  try {
    guelphCost.status = 'previous-cycle';
    ok(guelphWithin.status === 'fits-tuition' && /Cohort 2026/.test(guelphWithin.text) && budget('university-of-guelph', 70000, 'CAD').status === 'unknown',
      'Guelph: current two-semester tuition never promises the full budget, and previous-cycle costs remain incomparable');
  } finally { guelphCost.status = 'confirmed'; }
  var unbcResult = budget('university-of-northern-british-columbia', 31204.5, 'CAD');
  ok(unbcCost && unbcResult.status === 'fits-tuition' && /2026–27/.test(unbcResult.text) && /30 credits/.test(unbcResult.text) && /calculated by UniPath/.test(unbcResult.text),
    'UNBC: sourced 30-credit calculation is labelled and can cover tuition only, never the full budget');
  try {
    DB.match.annualCost['university-of-northern-british-columbia'] = Object.assign({}, unbcCost, { workloadSource: null });
    var missingWorkload = budget('university-of-northern-british-columbia', 100000, 'CAD');
    DB.match.annualCost['university-of-northern-british-columbia'] = Object.assign({}, unbcCost, { min: 1040.15, max: 1040.15 });
    var creditAsYear = budget('university-of-northern-british-columbia', 2000, 'CAD');
    ok(missingWorkload.status === 'unknown' && creditAsYear.status === 'unknown',
      'a missing workload source or one credit presented as a year never gives a positive budget match');
  } finally { DB.match.annualCost['university-of-northern-british-columbia'] = unbcCost; }
  ok([null, 0, 1, 96000, 5000000].every(function (b) { return budget('kenyon-college', b).status === 'conflict'; }),
    'Kenyon: official source conflict remains visible with blank, zero, low and high budgets');
  ok(['deep-springs-college', 'berea-college'].every(function (id) {
    return budget(id, 5000000).status === 'core-covered' && budget(id, null).status === 'none';
  }), 'Deep Springs and Berea retain unknown residual expenses even with a large budget');
  var saved = DB.match.annualCost['rollins-college'], rates = DB.match.rates;
  ok(M.checkField('m-budget', '').value === null && M.checkField('m-budget', '0').value === 0,
    'blank budget and zero are distinct inputs');
  try {
    var earlier = Object.assign({}, U.uniById('rollins-college'), { costs: { status: 'previous-cycle' } });
    ok(M.evaluate(earlier, { ielts: null, sat: null, gpa: null, budget: 5000000, currency: 'USD' }).budget.status === 'unknown',
      'a previous-cycle profile cannot become a budget match through a stale annualCost entry');
    DB.match.annualCost['rollins-college'] = { min: 100, max: 100, currency: 'USD', basis: 'tuition', period: 'credit' };
    ok(budget('rollins-college', 1000).status === 'unknown', 'a per-credit fee is never compared as a yearly price');
    DB.match.annualCost['rollins-college'] = { min: 100, max: NaN, currency: 'USD', basis: 'total' };
    ok(budget('rollins-college', 1000).status === 'unknown', 'a malformed upper cost cannot become a positive budget match');
    DB.match.annualCost['rollins-college'] = { min: 100, max: 200, currency: 'CAD', basis: 'tuition' };
    DB.match.rates = { perEUR: { CAD: 1, USD: Infinity } };
    ok(budget('rollins-college', 1000).status === 'unknown', 'an unavailable or nonfinite exchange rate cannot produce a positive match');
    DB.match.rates = {};
    ok(budget('rollins-college', 200, 'CAD').status === 'fits-tuition', 'same-currency comparison needs no exchange rate and never promises housing');
  } finally { DB.match.annualCost['rollins-college'] = saved; DB.match.rates = rates; }
  var pearsonCoverage = U.fullRide(U.uniById('university-of-toronto')).covers;
  ok(pearsonCoverage.housing === true && pearsonCoverage.meals === null &&
    U.awardKind(U.uniById('university-of-toronto')) === 'full-tuition' &&
    U.awardLabel(U.uniById('university-of-toronto')) === 'Full tuition covered',
    'Pearson tuition badge does not deny confirmed housing or invent meals coverage');
  var pe = U.uniById('university-of-prince-edward-island');
  function peBudget(field, b) { return M.evaluate(pe, { ielts: null, sat: null, gpa: null, budget: b, currency: 'CAD', field: field }).budget; }
  ok(peBudget('business', 17848).status === 'fits-tuition' && peBudget('business', 17847).status === 'over' &&
    peBudget('', 17848).text.indexOf('one programme') > -1,
    'UPEI published Business core tuition is comparable only as a programme example, never a full budget');
  ok(peBudget('engineering', 1000000).status === 'unknown' && peBudget('medicine', null).status === 'unknown',
    'a large or empty budget cannot turn another faculty price into a match for the selected field');
  var peScope = DB.match.annualCost[pe.id].scopeFields;
  try {
    DB.match.annualCost[pe.id].scopeFields = ['unknown-field'];
    ok(M.costOf(pe) === null, 'a scoped example with an unrecognised field cannot be compared');
  } finally { DB.match.annualCost[pe.id].scopeFields = peScope; }
  var satUnknown = { academics: { sat: { policy: 'unknown' } } };
  ok(U.satPolicy(satUnknown) !== 'optional' && !U.gpaComparable({ average: 3.5, scale: 5, weighting: 'unweighted' }) &&
    !U.gpaComparable({ average: 3.5, scale: 4, weighting: 'weighted' }), 'unknown SAT and incompatible GPA never become comparable requirements');
  var doc = env.sandbox.document, get = doc.getElementById, listen = doc.addEventListener;
  var boxes = { 'news-list': { innerHTML: '' }, 'news-filter': { innerHTML: '' }, 'news-cycle': { innerHTML: '' } }, clicks = [], news = DB.news;
  var session = env.sandbox.sessionStorage, newsState = null;
  try {
    env.sandbox.sessionStorage = { getItem: function () { return newsState; }, setItem: function (k, v) { newsState = v; } };
    DB.news = (news || []).filter(function (n) { return n.country !== 'ca'; });
    doc.getElementById = function (id) { return boxes[id] || null; };
    doc.addEventListener = function (name, fn) { if (name === 'click') clicks.push(fn); };
    env.load('assets/js/news.js'); env.sandbox.UPNews.render({ innerHTML: '' });
    ok(JSON.parse(newsState).cycle === 'all', 'a fresh news session keeps all cycles even when a standing rule has no cycle field');
    ok(DB.countries.every(function (c) { return boxes['news-filter'].innerHTML.indexOf('data-news-country="' + c.code + '"') > -1; }),
      'all six country news filters exist, even with no local announcements');
    clicks[0]({ target: { closest: function () { return { getAttribute: function () { return 'ca'; } }; } } });
    ok(/aria-pressed="true" data-news-country="ca"/.test(boxes['news-filter'].innerHTML) &&
      /No confirmed country-specific updates/.test(boxes['news-list'].innerHTML),
      'Canada news filter selects accessibly and distinguishes absent local news from global updates');
    DB.news.push({ country: 'ca', cycle: '2027', title: 'Canadian news fixture', org: 'Test fixture', state: 'informational',
      verified: '2026-10-24', url: 'https://university.example/news', summary: 'Test fixture only' });
    env.sandbox.UPNews.render({ innerHTML: '' });
    ok(/Canadian news fixture/.test(boxes['news-list'].innerHTML) && !/No confirmed country-specific updates/.test(boxes['news-list'].innerHTML),
      'a later Canadian announcement automatically appears under Canada without a code change');
    env.load('assets/js/news.js'); env.sandbox.UPNews.render({ innerHTML: '' });
    ok(/aria-pressed="true" data-news-country="ca"/.test(boxes['news-filter'].innerHTML), 'news filter survives a page reload within the session');
  } finally { doc.getElementById = get; doc.addEventListener = listen; DB.news = news; env.sandbox.sessionStorage = session; }
};
