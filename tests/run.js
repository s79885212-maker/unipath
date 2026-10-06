/* UniPath — checks for the data and for the logic of statuses, deadlines and
   the match page. Run with:  node tests/run.js
   The site's own scripts are loaded unchanged into a small sandbox. */
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');
var ROOT = path.join(__dirname, '..');

var store = {};
var sandbox = {
  console: console,
  setTimeout: setTimeout,
  Intl: Intl, Date: Date, JSON: JSON, Math: Math,
  CustomEvent: function (name) { this.type = name; },
  localStorage: {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
    setItem: function (k, v) { store[k] = String(v); },
    removeItem: function (k) { delete store[k]; }
  },
  location: { search: '', hash: '', pathname: '/', origin: 'https://example.test', protocol: 'https:' },
  document: {
    documentElement: { setAttribute: function () {}, getAttribute: function () { return null; }, classList: { add: function () {}, remove: function () {} } },
    querySelector: function () { return null; }, querySelectorAll: function () { return []; },
    getElementById: function () { return null; }, addEventListener: function () {}, dispatchEvent: function () {},
    createElement: function () { return { setAttribute: function () {}, style: {} }; }, title: ''
  },
  matchMedia: function () { return { matches: false, addEventListener: function () {} }; },
  addEventListener: function () {}
};
sandbox.window = sandbox; sandbox.global = sandbox;
vm.createContext(sandbox);
function load(rel) { vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), sandbox, { filename: rel }); }

var index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
var scripts = (index.match(/<script[^>]+src="([^"]+)"/g) || []).map(function (s) { return /src="([^"?]+)/.exec(s)[1]; });
scripts.filter(function (s) { return /^data\//.test(s) && !/i18n/.test(s); }).forEach(load);
load('assets/js/app.js');
load('assets/js/match.js');

var U = sandbox.UP, DB = sandbox.UNIPATH, M = sandbox.UPMatch;
module.exports = { U: U, DB: DB, M: M };
var failed = 0, passed = 0;
function ok(cond, name, detail) {
  if (cond) { passed++; return; }
  failed++; console.log('FAIL  ' + name + (detail ? '\n      ' + detail : ''));
}
function group(name) { console.log('— ' + name); }

/* ---------------- database shape ---------------- */
group('database');
var byCountry = {};
DB.universities.forEach(function (u) { byCountry[u.country] = (byCountry[u.country] || 0) + 1; });
ok(DB.universities.length === 230, '230 institutions', 'found ' + DB.universities.length);
ok(byCountry.us === 110 && byCountry.uk === 30 && byCountry.de === 30 && byCountry.jp === 30 && byCountry.kr === 30,
  '110 / 30 / 30 / 30 / 30 by country', JSON.stringify(byCountry));
var ids = {}; var dup = [];
DB.universities.forEach(function (u) { if (ids[u.id]) dup.push(u.id); ids[u.id] = true; });
ok(!dup.length, 'ids are unique', dup.join(', '));
var names = {}, dupNames = [];
DB.universities.forEach(function (u) { var k = u.name.toLowerCase(); if (names[k]) dupNames.push(u.name); names[k] = true; });
ok(!dupNames.length, 'names are unique', dupNames.join(', '));
ok(DB.universities.every(function (u) { return u.links && /^https:\/\//.test(u.links.website || ''); }), 'every record links to an official https site');

/* ---------------- deadlines ---------------- */
group('deadlines and statuses');
var OTHER = ['opens', 'documents', 'portfolio', 'test', 'interview', 'aid', 'scholarship', 'decision', 'reply', 'notice'];
var badKinds = [], noSource = [], badStatus = [], oldConfirmed = [];
DB.universities.forEach(function (u) {
  U.roundsOf(u).forEach(function (d) {
    if (d.kind && !U.APPLICATION_KINDS.hasOwnProperty(d.kind) && OTHER.indexOf(d.kind) < 0) badKinds.push(u.id + ':' + d.kind);
    if (['confirmed', 'not-confirmed', 'previous-cycle'].indexOf(d.status) < 0) badStatus.push(u.id + ':' + d.name);
    if (d.status === 'confirmed' && (!d.source || !d.verified)) noSource.push(u.id + ':' + d.name);
    /* A confirmed application round must belong to the 2027 entry cycle or later. */
    var y = /(20\d\d)/.exec(String(d.entryYear || ''));
    if (d.status === 'confirmed' && U.isApplicationDeadline(d) && y && +y[1] < 2027) oldConfirmed.push(u.id + ':' + d.name + ' (' + d.entryYear + ')');
  });
});
ok(!badKinds.length, 'every deadline kind is a known application or other-date kind', badKinds.join(', '));
ok(!badStatus.length, 'every round has an explicit status', badStatus.slice(0, 5).join(', '));
ok(!noSource.length, 'every confirmed round has a source and a check date', noSource.slice(0, 5).join(', '));
ok(!oldConfirmed.length, 'no round of an earlier cycle is marked confirmed', oldConfirmed.slice(0, 5).join(', '));

var prevUsed = [];
DB.universities.forEach(function (u) {
  var n = U.nextDeadline(u, 'all');
  if (n.state === 'upcoming' && n.round.status !== 'confirmed') prevUsed.push(u.id);
});
ok(!prevUsed.length, '"next deadline" only ever uses a confirmed round', prevUsed.join(', '));

ok(U.roundState({ status: 'previous-cycle', dateISO: '2099-01-01', kind: 'RD' }) === 'unknown', 'a previous-cycle date is never "upcoming"');
ok(U.roundState({ status: 'not-confirmed', dateISO: '2099-01-01', kind: 'RD' }) === 'unknown', 'an unconfirmed date is never "upcoming"');
ok(U.roundState({ status: 'confirmed', dateISO: '2001-01-01', kind: 'RD' }) === 'closed', 'a confirmed past date is closed');
ok(U.roundState({ status: 'confirmed', dateISO: '2099-01-01', kind: 'RD' }) === 'upcoming', 'a confirmed future date is upcoming');
ok(U.isApplicationDeadline({ kind: 'round-4' }) && U.isApplicationDeadline({ kind: 'regular' }) && !U.isApplicationDeadline({ kind: 'opens' }),
  'numbered rounds and regular deadlines are application deadlines; openings are not');

/* intakes */
ok(U.seasonsOf('Autumn', 'us').join() === 'fall' && U.seasonsOf('September', 'jp').join() === 'fall', 'Autumn and September are the fall intake');
ok(U.seasonsOf('Winter', 'de').join() === 'fall' && U.seasonsOf('Winter', 'us').join() === 'winter', 'a German winter semester is the fall intake; a US winter session is not');
ok(U.seasonsOf('Spring or Fall', 'kr').sort().join() === 'fall,spring', 'a round for two intakes belongs to both');
ok(U.intakesOf({ entryTerm: 'Spring', entryYear: '2027' }, { country: 'kr' }).join() === 'spring-2027', 'intake key');
ok(U.intakesOf({ entryTerm: 'Spring' }, { country: 'kr' }).length === 0, 'a round with no stated year belongs to no intake');
var fake = { id: 'x', country: 'kr', admissions: { deadlines: [
  { name: 'Spring round', kind: 'round-1', entryTerm: 'Spring', entryYear: '2027', dateISO: '2099-01-10', date: '10 January 2099', status: 'confirmed', source: 's', verified: 'v' },
  { name: 'Fall round', kind: 'round-1', entryTerm: 'Fall', entryYear: '2027', dateISO: '2099-05-10', date: '10 May 2099', status: 'confirmed', source: 's', verified: 'v' },
  { name: 'Old', kind: 'round-1', entryTerm: 'Fall', entryYear: '2026', dateISO: '2099-03-01', status: 'previous-cycle' }
] } };
ok(U.nextDeadline(fake, 'all').round.name === 'Spring round', 'any intake: the nearest confirmed round');
ok(U.nextDeadline(fake, 'fall-2027').round.name === 'Fall round', 'fall intake: the spring date is not offered');
ok(U.nextDeadline(fake, 'spring-2027').round.name === 'Spring round', 'spring intake: the spring date');
ok(U.nextDeadline(fake, 'winter-2027').state === 'none', 'an intake with no round is reported as none, not guessed');
ok(U.intakeList().length > 0 && U.intakeList().every(function (k) { return /^(winter|spring|summer|fall)-20\d\d$/.test(k); }), 'intake list is built from the data', U.intakeList().join(', '));

/* ---------------- fees and costs ---------------- */
group('fees and costs');
ok(U.feeLabel({ admissions: { applicationFee: { amount: null, currency: 'USD' } } }).indexOf('No application fee') < 0, 'an unknown fee is never shown as free');
ok(U.feeLabel({ admissions: { applicationFee: { amount: 0, currency: 'USD' } } }) === 'No application fee', 'a confirmed zero fee is shown as free');
ok(U.feeLabel({ admissions: {} }).indexOf('Not checked') > -1, 'a missing fee says not checked');
ok(U.feeStatus({ admissions: { applicationFee: { amount: null, status: 'not-published' } } }) === 'not-published', 'a fee the source does not state can be marked not published');
ok(U.costStatus({ costs: { breakdown: { published: false }, headline: 'Tuition published in the admission guide' } }) === 'not-checked',
  'figures that were not captured are "not checked", never "not published"');
ok(U.costStatus({ costs: { status: 'not-published', breakdown: { published: false } } }) === 'not-published', 'only an explicit status says the source does not publish a figure');
ok(U.costStatus({ costs: { currency: 'USD', breakdown: { tuition: 100 } } }) === 'confirmed', 'a recorded figure is confirmed');
ok(U.cardTuition(U.uniById('brandeis-university')).text !== 'Not published', 'Brandeis: an unread cost page is not shown as "Not published"', U.cardTuition(U.uniById('brandeis-university')).text);
var allStatuses = ['confirmed', 'not-checked', 'not-published', 'not-applicable', 'previous-cycle', 'conflict'];
ok(allStatuses.every(function (k) { return !!U.STATUS[k]; }), 'the six data statuses exist');
var badCostStatus = DB.universities.filter(function (u) { return u.costs && u.costs.status && !U.STATUS[u.costs.status]; }).map(function (u) { return u.id; });
ok(!badCostStatus.length, 'every explicit cost status is one of the six', badCostStatus.join(', '));
var zeroNoNote = DB.universities.filter(function (u) { var f = u.admissions && u.admissions.applicationFee; return f && f.amount === 0 && !f.note; }).map(function (u) { return u.id; });
ok(!zeroNoNote.length, 'every $0 application fee carries the statement it rests on', zeroNoNote.join(', '));
var badFee = DB.universities.filter(function (u) { var f = u.admissions && u.admissions.applicationFee; return f && f.amount !== null && f.amount !== undefined && (typeof f.amount !== 'number' || f.amount < 0 || !f.currency); }).map(function (u) { return u.id; });
ok(!badFee.length, 'fee amounts are numbers with a currency', badFee.join(', '));
var costNoCur = DB.universities.filter(function (u) { return u.costs && (U.tuitionAmount(u) !== null || U.billedAmount(u) !== null || U.budgetAmount(u) !== null) && !U.costCurrency(u); }).map(function (u) { return u.id; });
ok(!costNoCur.length, 'every numeric cost has a currency', costNoCur.join(', '));
var ac = (DB.match && DB.match.annualCost) || {};
var badBasis = Object.keys(ac).filter(function (k) { return ['total', 'tuition'].indexOf(ac[k].basis) < 0 || !ids[k]; });
ok(!badBasis.length, 'every yearly cost says whether it is tuition only or a full cost', badBasis.join(', '));

/* ---------------- scholarships ---------------- */
group('scholarships');
var wrongRide = DB.universities.filter(function (u) {
  if (U.awardKind(u) !== 'full-ride') return false;
  var c = U.fullRide(u).covers || {};
  return !(c.tuition === true && c.housing === true && c.meals === true);
}).map(function (u) { return u.id; });
ok(!wrongRide.length, 'an award is called a full ride only where tuition, housing and meals are all stated as covered', wrongRide.join(', '));
ok(U.awardKind({ scholarships: { fullRide: { available: true, covers: { tuition: true, housing: false, meals: false } } } }) === 'full-tuition', 'tuition-only is labelled full tuition, not a full ride');
ok(U.awardKind({ scholarships: { fullRide: { available: true, covers: { tuition: true, housing: false, stipend: true } } } }) === 'tuition-stipend', 'tuition plus a stipend is its own category');
ok(U.awardKind({ scholarships: { fullRide: { available: true, covers: {} } } }) === 'full-funding', 'full funding without an itemised list is not called a full ride');
ok(U.awardKind({ scholarships: { needBased: { meetsFullNeed: true } } }) === null, 'meeting full need alone is not an award kind');
ok(U.awardKind(U.uniById('ritsumeikan-apu')) === 'full-tuition' && U.awardKind(U.uniById('tokyo-international-university')) === 'full-tuition', 'APU and TIU tuition reductions are full tuition only');
var kinds = {}; DB.universities.forEach(function (u) { var k = U.awardKind(u) || 'none'; kinds[k] = (kinds[k] || 0) + 1; });
console.log('   award kinds: ' + JSON.stringify(kinds));

/* ---------------- SAT policy and statistics ---------------- */
group('SAT policy and statistics');
var badStats = [];
DB.universities.forEach(function (u) {
  var s = u.stats && u.stats.official && u.stats.official.sat; if (!s) return;
  ['composite', 'rw', 'math'].forEach(function (k) {
    var a = s[k]; if (!a) return;
    if (!Array.isArray(a) || a.length !== 3 || (a[0] !== null && a[2] !== null && a[0] > a[2])) badStats.push(u.id + ':' + k);
  });
  if (['admitted', 'enrolled'].indexOf(s.cohort) < 0) badStats.push(u.id + ':cohort');
  if (!u.stats.source || !u.stats.source.url) badStats.push(u.id + ':source');
  if (!u.stats.term) badStats.push(u.id + ':term');
});
ok(!badStats.length, 'SAT statistics are 25/50/75 triples with a cohort, a year and a source', badStats.slice(0, 8).join(', '));
ok(U.satPolicy({}) === 'unknown' && !U.satNotRequired({}), 'an unknown policy is never read as test-optional');
ok(U.satPolicy({ academics: { sat: { policy: 'not-applicable' } } }) === 'not-applicable' && !U.satNotRequired({ academics: { sat: { policy: 'not-applicable' } } }), '"not part of this route" is not test-optional');

/* A round whose name says "spring 2027" must be filed under the spring 2027
   intake, so that someone looking at autumn entry is not shown it. */
var wrongIntake = [], confirmedUndated = [];
DB.universities.forEach(function (u) {
  U.roundsOf(u).forEach(function (d) {
    var m = /\b(spring|summer|winter)\b[ -]+(20\d\d)\b/i.exec(d.name || '');
    if (m && !/\band\b|\bor\b|\//i.test(d.name) && (String(d.entryTerm).toLowerCase() !== m[1].toLowerCase() || String(d.entryYear) !== m[2])) wrongIntake.push(u.id + ': ' + d.name + ' → ' + d.entryTerm + ' ' + d.entryYear);
    if (d.status === 'confirmed' && (!d.source || !d.verified)) confirmedUndated.push(u.id + ': ' + d.name);
  });
});
ok(wrongIntake.length === 0, 'a round named for a season is filed under that intake', wrongIntake.slice(0, 5).join('; '));
ok(confirmedUndated.length === 0, 'a confirmed round carries its source and check date', confirmedUndated.slice(0, 5).join('; '));
var counts = { confirmed: 0, 'not-confirmed': 0, 'previous-cycle': 0 };
DB.universities.forEach(function (u) { U.roundsOf(u).forEach(function (d) { counts[d.status]++; }); });
console.log('   deadline entries: ' + JSON.stringify(counts));

var tpc = DB.testPolicyCycle || {};
ok(Object.keys(tpc).every(function (id) { var u = U.uniById(id); return u && u.academics.sat.cycle === tpc[id].cycle && /^https?:/.test(tpc[id].source) && tpc[id].verified; }), 'a recorded policy cycle belongs to a record and carries its source and check date');
ok(U.uniById('princeton-university').academics.sat.next && U.uniById('university-of-alabama').academics.sat.exception, 'announced changes and exceptions to a test policy are kept apart from the policy itself');
console.log('   SAT/ACT policy page re-read: ' + Object.keys(tpc).length + ' (cycle named on ' + Object.keys(tpc).filter(function (k) { return tpc[k].cycle; }).length + ') of ' + DB.universities.filter(function (u) { return u.country === 'us'; }).length + ' US records');

var edt = DB.englishDetails || {};
ok(Object.keys(edt).every(function (id) { var u = U.uniById(id); return u && /^https?:/.test(edt[id].detailsSource) && edt[id].detailsVerified && u.english.detailsSource === edt[id].detailsSource; }), 'English-test details belong to a record and carry their source and check date');
console.log('   English-test versions or conditions recorded for ' + Object.keys(edt).length + ' records');

var adt = DB.awardDetails || {};
ok(Object.keys(adt).every(function (id) { var u = U.uniById(id); return u && U.fullRide(u).available === true && /^https?:/.test(adt[id].detailsSource) && adt[id].detailsVerified; }), 'award conditions belong to a listed award and carry their source and check date');

/* ---------------- every profile renders ---------------- */
group('profile rendering');
(function () {
  var main = { innerHTML: '' };
  var doc = sandbox.document;
  var oldGet = doc.getElementById, oldQ = doc.querySelector, oldQA = doc.querySelectorAll;
  doc.getElementById = function (id) { return id === 'main' ? main : null; };
  doc.querySelector = function () { return null; };
  doc.querySelectorAll = function () { return []; };
  sandbox.scrollTo = function () {};
  sandbox.navigator = {};
  try { load('assets/js/pages.js'); } catch (e) { ok(false, 'the page module loads', String(e)); return; }
  var P = sandbox.UPPages || sandbox.Pages || (sandbox.UP && sandbox.UP.pages);
  if (!P || !P.renderProfile) { ok(false, 'the profile renderer is reachable from the tests', Object.keys(sandbox).filter(function (k) { return /page/i.test(k); }).join(',')); return; }
  var broken = [];
  DB.universities.forEach(function (u) {
    main.innerHTML = '';
    try { P.renderProfile(u); if (main.innerHTML.length < 2000) broken.push(u.id + ' (empty)'); }
    catch (e) { broken.push(u.id + ': ' + e.message); }
  });
  ok(broken.length === 0, 'all ' + DB.universities.length + ' profiles render without an error', broken.slice(0, 4).join('; '));
  doc.getElementById = oldGet; doc.querySelector = oldQ; doc.querySelectorAll = oldQA;
})();

/* ---------------- fields of study ---------------- */
group('fields of study');
var withDegrees = DB.universities.filter(function (u) { return u.degreesByArea; });
console.log('   degrees table read for ' + withDegrees.length + ' institutions');
ok(withDegrees.length === Object.keys(DB.degreesByArea).length, 'every degrees table belongs to a record', withDegrees.length + ' / ' + Object.keys(DB.degreesByArea).length);
ok(withDegrees.every(function (u) { return u.degreesByArea.source && /^https?:/.test(u.degreesByArea.source.url) && /^\d{4}-\d{2}-\d{2}$/.test(u.degreesByArea.checked) && /^\d{4}–\d{4}$/.test(u.degreesByArea.period); }), 'a degrees table carries its source, period and check date');
ok(withDegrees.every(function (u) {
  if (u.degreesByArea.unit !== 'percent') return true;
  var t = 0; Object.keys(u.degreesByArea.areas).forEach(function (k) { t += u.degreesByArea.areas[k]; });
  return t >= 97.9 && t <= 102.1;
}), 'percentages in a degrees table add up to 100 within rounding');
ok(withDegrees.every(function (u) { return Object.keys(u.degreesByArea.areas).every(function (k) { return DB.degreeAreas[k]; }); }), 'every area in a table is a named Common Data Set category');
ok(withDegrees.every(function (u) {
  return u.programs.every(function (t) { var c = U.fieldCheck(u, t); return c.status === 'degrees' || c.status === 'major' || c.status === 'not-reported'; });
}), 'with a table read, every remaining tag is backed by degrees or by a listed major');
ok(Object.keys(DB.fieldNotes).every(function (id) { return Object.keys(DB.fieldNotes[id]).every(function (t) { var n = DB.fieldNotes[id][t]; return U.FIELD_NOTE_KIND[n.kind] && /^https?:/.test(n.url) && n.checked; }); }), 'a note on a field names its kind, official page and check date');
var kenyon = U.uniById('kenyon-college'), dickinson = U.uniById('dickinson-college'), bc = U.uniById('boston-college');
ok(kenyon.programs.indexOf('computer-science') < 0 && kenyon.fieldsDropped.indexOf('computer-science') > -1, 'a concentration is not a field tag (Kenyon computing)');
ok(dickinson.programs.indexOf('engineering') < 0, 'a tag with no degrees and no confirmed major is taken off (Dickinson engineering)');
ok(bc.programs.indexOf('engineering') > -1 && U.fieldCheck(bc, 'engineering').status === 'major', 'a new major with no degrees yet keeps its tag and says so (Boston College engineering)');
ok(U.fieldCheck(U.uniById('harvard-university'), 'economics').status === 'not-reported', 'economics is shown as not reported separately');
ok(U.fieldCheck(U.uniById('brown-university'), 'engineering').status === 'not-checked', 'no table read means not checked, not confirmed');
var usAll = DB.universities.filter(function (u) { return u.country === 'us'; });
var sig = {}; usAll.forEach(function (u) { var k = u.programs.slice().sort().join(','); sig[k] = (sig[k] || 0) + 1; });
console.log('   distinct tag sets among US records: ' + Object.keys(sig).length);

/* ---------------- community colleges ---------------- */
group('community colleges');
var cc = DB.universities.filter(U.isCommunityCollege);
ok(cc.length === 5, 'five community colleges', String(cc.length));
var sinclair = U.uniById('sinclair-community-college');
ok(U.degreesOf(sinclair).indexOf('bachelor') > -1 && U.bachelorPrograms(sinclair).length >= 2, 'Sinclair lists its bachelor’s programmes');
ok(cc.every(function (u) { return U.bachelorPrograms(u).length === 0 || (u.bachelorSource && u.bachelorChecked); }), 'bachelor’s programmes at a college carry a source and a check date');
ok(cc.every(function (u) { return !/not a bachelor/i.test(U.ccSummary(u)) || U.degreesOf(u).indexOf('bachelor') < 0; }), 'no college with bachelor’s programmes is described as awarding none');
ok(U.bachelorIntlText({ bachelorIntl: undefined }).indexOf('does not say') > -1, 'a programme’s existence is not read as open to F-1 students');

/* ---------------- match ---------------- */
group('match');
var input = { ielts: 8, sat: 1500, gpa: null, budget: null, currency: 'USD', country: '', field: '', englishOnly: false };
var cats = { match: 0, reach: 0, below: 0, unknown: 0 }, estimate = [], okNoBasis = [], gpaNotFlagged = [];
DB.universities.forEach(function (u) {
  var r = M.evaluate(u, input);
  cats[r.category]++;
  r.checks.forEach(function (c) {
    if (/UniPath estimate/i.test(c.text)) estimate.push(u.id);
    if (c.level === 'ok' && !c.basis) okNoBasis.push(u.id + ': ' + c.text);
  });
  if (!r.unchecked.some(function (x) { return /GPA/.test(x); })) gpaNotFlagged.push(u.id);
});
ok(!estimate.length, 'no comparison uses a UniPath estimate', estimate.slice(0, 5).join(', '));
ok(!okNoBasis.length, 'every positive comparison names its basis (minimum, recommendation or statistic)', okNoBasis.slice(0, 3).join(' | '));
ok(!gpaNotFlagged.length, 'a missing GPA is always listed as not checked', gpaNotFlagged.slice(0, 5).join(', '));
var src = fs.readFileSync(path.join(ROOT, 'assets/js/match.js'), 'utf8');
ok(!/You meet the published requirements/.test(src), 'the match page does not claim that requirements are met');
ok(!/\d+\s?% (chance|probability)/i.test(src), 'no admission probability is shown');
var onlyStat = M.evaluate({ id: 't', country: 'us', academics: { sat: { policy: 'optional' } }, stats: { official: { sat: { composite: [1400, 1450, 1500], cohort: 'enrolled' } } } }, input);
ok(onlyStat.checks.some(function (c) { return c.basis === 'statistic' && c.level === 'ok'; }) && !onlyStat.bases.minimum,
  'falling inside the SAT range is recorded as a statistic, not as a requirement met');
var below = M.evaluate({ id: 't', country: 'uk', english: { ielts: { min: 8.5 } } }, input);
ok(below.category === 'below', 'a score under an official minimum is reported as below it');
var nothing = M.evaluate({ id: 't', country: 'jp' }, input);
ok(nothing.category === 'unknown', 'with no official figure the result is "not enough data", not a match');
var needsSat = M.evaluate({ id: 't', country: 'us', academics: { sat: { policy: 'required' } } }, { ielts: 8, sat: null, gpa: null, budget: null, currency: 'USD' });
ok(needsSat.category !== 'match', 'a required test that was not entered is not treated as met');
console.log('   IELTS 8 + SAT 1500, no GPA → ' + JSON.stringify(cats));


/* ---------------- photos ---------------- */
group('photos');
var missingFiles = [], noCredit = [];
DB.universities.forEach(function (u) {
  var g = (u.photos && u.photos.gallery) || [];
  g.forEach(function (x) {
    if (!fs.existsSync(path.join(ROOT, x.src))) missingFiles.push(x.src);
    if (!x.title || !x.artist || !x.license || !x.page) noCredit.push(u.id);
  });
  if (g.length && !fs.existsSync(path.join(ROOT, u.photos.thumb))) missingFiles.push(u.photos.thumb);
});
ok(!missingFiles.length, 'every listed photo and thumbnail exists on disk', missingFiles.slice(0, 5).join(', '));
ok(!noCredit.length, 'every photo has a title, author, licence and source page', noCredit.slice(0, 5).join(', '));
console.log('   without a photo (placeholder shown): ' + DB.universities.filter(function (u) { return !((u.photos && u.photos.gallery) || []).length; }).map(function (u) { return u.id; }).join(', '));

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed ? 1 : 0);
