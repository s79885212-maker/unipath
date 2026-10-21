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
/* United States expansion (October 2026): 110 records grow to 200 in batches.
   US_NOW is raised with each batch; the other countries must not change. */
var US_NOW = 200, US_TARGET = 200;
/* Canada (October 2026): 50 universities added in batches of ten. */
var CA_NOW = 50, CA_TARGET = 50;
ok(byCountry.us === US_NOW && US_NOW <= US_TARGET, US_NOW + ' United States records (target ' + US_TARGET + ')', 'found ' + byCountry.us);
ok(byCountry.ca === CA_NOW && CA_NOW <= CA_TARGET, CA_NOW + ' Canadian records (target ' + CA_TARGET + ')', 'found ' + byCountry.ca);
ok(DB.universities.length === US_NOW + 120 + CA_NOW, (US_NOW + 120 + CA_NOW) + ' institutions in all', 'found ' + DB.universities.length);
ok(byCountry.uk === 30 && byCountry.de === 30 && byCountry.jp === 30 && byCountry.kr === 30,
  '30 / 30 / 30 / 30 in the other countries', JSON.stringify(byCountry));
var ids = {}; var dup = [];
DB.universities.forEach(function (u) { if (ids[u.id]) dup.push(u.id); ids[u.id] = true; });
ok(!dup.length, 'ids are unique', dup.join(', '));
var names = {}, dupNames = [];
DB.universities.forEach(function (u) { var k = u.name.toLowerCase(); if (names[k]) dupNames.push(u.name); names[k] = true; });
ok(!dupNames.length, 'names are unique', dupNames.join(', '));
ok(DB.universities.every(function (u) { return u.links && /^https:\/\//.test(u.links.website || ''); }), 'every record links to an official https site');

/* A former or everyday name finds its own record first, and never a second one. */
(function () {
  var first = function (q) { var r = U.search(q, 5); return r.length ? r[0].id : null; };
  var want = { 'UMN': 'university-of-minnesota-twin-cities', 'IUPUI': 'indiana-university-indianapolis', 'Eugene Lang': 'the-new-school',
               'Marist College': 'marist-university', 'SCAD': 'savannah-college-of-art-and-design', 'WVU': 'west-virginia-university', 'UMass': 'umass-amherst' };
  var wrong = Object.keys(want).filter(function (q) { return first(q) !== want[q]; }).map(function (q) { return q + ' → ' + first(q); });
  ok(!wrong.length, 'old and everyday names rank their own record first', wrong.join('; '));
  ok(!U.uniById('wheaton-college-massachusetts') && !U.uniById('hampshire-college') && U.uniById('anderson-university-indiana') && U.uniById('adelphi-university'),
    'the two replaced candidates have no record; their reserve replacements do');
})();

/* ---------------- United States expansion ---------------- */
group('United States expansion');
(function () {
  /* The first 110 United States records are the original ones; the expansion follows them. */
  var added = DB.universities.filter(function (u) { return u.country === 'us'; }).slice(110);
  ok(added.length === US_NOW - 110 && added.every(function (u) { return u.country === 'us'; }), 'every record added in the expansion is a United States record', added.length + ' added');
  var noSrc = added.filter(function (u) { return !(u.sources && u.sources.length) || !/^\d{4}-\d{2}-\d{2}$/.test(u.lastVerified || '') || !(u.verification && u.verification.checked && u.verification.checked.length); });
  ok(!noSrc.length, 'every added record lists its official sources, what was checked and when', noSrc.map(function (u) { return u.id; }).join(', '));
  var offDomain = added.filter(function (u) { return !/^https:\/\/[^/]+\.edu\//.test(u.links.website); });
  ok(!offDomain.length, 'every added record links to an official .edu site', offDomain.map(function (u) { return u.id; }).join(', '));
  var undatedRound = [];
  added.forEach(function (u) { U.roundsOf(u).forEach(function (d) { if (d.status === 'confirmed' && (!d.source || !d.verified)) undatedRound.push(u.id + ':' + d.name); }); });
  ok(!undatedRound.length, 'every confirmed date of an added record carries its source and check date', undatedRound.join('; '));
  var costNoSrc = added.filter(function (u) { return U.costStatus(u) !== 'not-checked' && !(u.costs.source && u.costs.verified); });
  ok(!costNoSrc.length, 'every cost of an added record carries its source and check date', costNoSrc.map(function (u) { return u.id; }).join(', '));
  /* A need-based promise is not a full ride: the label says so unless the
     record itemises tuition, housing and meals as covered. */
  var needAsRide = added.filter(function (u) { var f = U.fullRide(u); return f.available === true && f.basis === 'need-based' && U.awardKind(u) === 'full-ride'; });
  ok(!needAsRide.length, 'no added record presents need-based aid as a full ride', needAsRide.map(function (u) { return u.id; }).join(', '));
  var ds = U.uniById('deep-springs-college');
  ok(ds && ds.degrees.indexOf('bachelor') < 0 && ds.degrees.indexOf('associate') > -1, 'Deep Springs is recorded as a two-year route, not as a bachelor’s degree');
  ok(U.uniById('bard-college') && U.uniById('bard-college-berlin') && U.uniById('bard-college').country === 'us' && U.uniById('bard-college-berlin').country === 'de', 'Bard College and Bard College Berlin are separate records');
  var noPhoto = added.filter(function (u) { return !(u.photos && u.photos.main); }).map(function (u) { return u.id; });
  console.log('   added records without a photo: ' + (noPhoto.length ? noPhoto.join(', ') : 'none'));
})();

/* ---------------- cost arithmetic ---------------- */
group('cost arithmetic');
var arith = [], subtotal = [];
DB.universities.forEach(function (u) {
  U.costArithmetic(u).forEach(function (m) { arith.push(u.id + ': ' + m); });
  /* Without marked groups, a numeric billed subtotal must still be the sum of
     some of the numeric lines listed with it. */
  var c = u.costs || {}, items = c.items || [];
  if (typeof c.billedSubtotal !== 'number' || items.some(function (i) { return i.group; })) return;
  var nums = items.filter(function (i) { return typeof i.amount === 'number'; }).map(function (i) { return i.amount; });
  if (!nums.length || nums.length > 16) return;
  var hit = false;
  for (var m = 1; m < (1 << nums.length) && !hit; m++) {
    var sum = 0;
    for (var k = 0; k < nums.length; k++) if (m >> k & 1) sum += nums[k];
    if (sum === c.billedSubtotal) hit = true;
  }
  if (!hit) subtotal.push(u.id + ' (' + c.billedSubtotal + ')');
});
ok(!arith.length, 'breakdowns with marked lines add up to their subtotal and published budget', arith.join('; '));
ok(!subtotal.length, 'every billed subtotal is the sum of lines listed with it', subtotal.join(', '));
(function () {
  var h = U.uniById('harvard-university'), w = U.budgetWithExtras(h);
  ok(U.costExtras(h).length === 1 && U.costExtras(h)[0].amount === 4954, 'Harvard: health insurance is a required cost outside the published total');
  ok(w && w.min === 100088 && w.max === 105088, 'Harvard: published total plus insurance is 100,088–105,088', JSON.stringify(w));
  ok(!/health insurance/i.test(U.costIncludes(h).split('.')[0]), 'Harvard: the published total is not described as including health insurance', U.costIncludes(h));
  var k = U.uniById('kenyon-college');
  ok(k.costs.items.filter(function (i) { return i.group === 'billed'; }).reduce(function (a, i) { return a + i.amount; }, 0) === 93090, 'Kenyon: the four 2026–27 charges add up to 93,090');
  ok(k.costs.conflict && k.costs.conflict.sources.length === 2, 'Kenyon: the two official full-cost totals are both shown');
  var bk = U.uniById('uc-berkeley');
  ok(bk.costs.billedSubtotal === 86190 && bk.costs.breakdown.budget === 93944, 'UC Berkeley: nonresident direct costs 86,190 and total 93,944');
  /* Cards name the figure they show. */
  ok(U.cardCost(U.uniById('bard-college-berlin')).label === 'Comprehensive fee', 'Bard College Berlin: the card says "Comprehensive fee", not "Tuition"', U.cardCost(U.uniById('bard-college-berlin')).label);
  ok(U.cardCost(U.uniById('johns-hopkins-university')).label === 'Full yearly budget', 'Johns Hopkins: the card says "Full yearly budget"');
  ok(U.cardCost(bk).label === 'Tuition and fees', 'UC Berkeley: tuition with fees is labelled as such');
  var mislabelled = DB.universities.filter(function (u) { var c = U.cardCost(u); return c.label === 'Tuition' && c.kind !== 'tuition'; });
  ok(!mislabelled.length, 'no card shows a non-tuition figure under "Tuition"', mislabelled.map(function (u) { return u.id; }).join(', '));
})();

/* ---------------- one model for dates ---------------- */
group('dates shown in several sections');
(function () {
  var aid = U.roundsOf(U.uniById('harvard-university')).filter(function (d) { return d.kind === 'aid'; });
  ok(aid.length === 2 && aid.every(function (d) { return d.status === 'confirmed' && d.source; }), 'Harvard: two confirmed financial aid dates in the rounds');
})();

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
var badBasis = Object.keys(ac).filter(function (k) { return ['total', 'billed', 'tuition'].indexOf(ac[k].basis) < 0 || !ids[k]; });
var zeroTotal = Object.keys(ac).filter(function (k) { return ac[k].basis !== 'tuition' && ac[k].max === 0; });
ok(!zeroTotal.length, 'no yearly cost of zero is recorded as a full cost or as the university’s charges', zeroTotal.join(', '));
ok(!badBasis.length, 'every yearly cost says whether it is tuition only, the university’s charges or a full cost', badBasis.join(', '));

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
ok(Object.keys(adt).every(function (id) { var u = U.uniById(id); return u && u.scholarships && u.scholarships.fullRide && /^https?:/.test(adt[id].detailsSource) && adt[id].detailsVerified; }), 'award conditions belong to a record and carry their source and check date');

var nd = DB.awardNotDescribed || [];
ok(nd.every(function (id) { var u = U.uniById(id); return u && U.fullRide(u).status === 'not-published' && U.fullRide(u).note; }), 'an award marked “not described on the pages read” belongs to a record and keeps the note that explains it');
var awardCounts = { listed: 0, none: 0, 'not-described': 0, 'not-checked': 0 };
DB.universities.forEach(function (u) { var fr = U.fullRide(u); awardCounts[fr.available === true ? 'listed' : fr.available === false ? 'none' : fr.status === 'not-published' ? 'not-described' : 'not-checked']++; });
console.log('   largest award: ' + JSON.stringify(awardCounts));

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
  function page(id) { main.innerHTML = ''; P.renderProfile(U.uniById(id)); return main.innerHTML; }
  var hv = page('harvard-university');
  var aidCard = hv.slice(hv.indexOf('Need-based financial aid'));
  ok(/Financial aid deadlines[\s\S]{0,400}1 November 2026/.test(aidCard), 'Harvard: the aid section shows the confirmed dates from the rounds, not "Not checked"');
  ok(hv.indexOf('Required costs not included in the published total') > -1 && hv.indexOf('$100,088') > -1, 'Harvard: insurance is listed apart and the sum with it is labelled as calculated');
  var rangeRows = DB.universities.filter(function (u) {
    return (u.costs && u.costs.items || []).some(function (i) { return typeof i.min === 'number' && typeof i.max === 'number' && !('amount' in i); });
  });
  var we = page('western-university');
  ok(rangeRows.length > 0 && /C\$48,000–C\$64,400/.test(we),
    'a cost line given as a range shows both ends instead of "Not checked" (Western: C$48,000–C$64,400)', rangeRows.length + ' records with range lines');
  var be = page('berea-college');
  ok(be.indexOf('What an admitted international student pays') > -1, 'Berea: the cost section says what an admitted student pays');
  ok(be.indexOf('winning one is not guaranteed') < 0, 'Berea: the competitive-scholarship text is not used for guaranteed aid');
  ok(be.indexOf('for the averages the university reports') < 0 && be.indexOf('the average GPA the university reports is shown') < 0, 'Berea: no pointer to an average GPA that is not published');
  /* The pointer to statistics appears only where the figure exists. */
  var wrongPointer = DB.universities.filter(function (u) {
    var o = (u.stats && u.stats.official) || {};
    if (o.gpa && typeof o.gpa.average === 'number') return false;
    return page(u.id).indexOf('the average GPA the university reports is shown') > -1;
  });
  ok(!wrongPointer.length, 'no profile points to an average GPA it does not have', wrongPointer.map(function (u) { return u.id; }).slice(0, 5).join(', '));
  var tk = page('university-of-tokyo'), tku = U.uniById('university-of-tokyo');
  ok(tku.routes && tku.routes.length === 3 && tku.routes.map(function (r) { return r.status; }).join() === 'open,closed,transfer', 'Tokyo: College of Design, PEAK and GSC are three routes with their own status');
  ok(tk.indexOf('Closed to new applicants') > -1 && tk.indexOf('Transfer route — not entry from school') > -1, 'Tokyo: PEAK is marked closed and GSC as a transfer route');
  ok(!/PEAK/.test(JSON.stringify(tku.scholarships)) || /not offered to College of Design/.test(JSON.stringify(tku.scholarships)), 'Tokyo: PEAK scholarships are not listed as awards for College of Design applicants');
  ok(!/MEXT/.test(JSON.stringify([tku.scholarships.fullRide, tku.scholarships.merit])), 'Tokyo: the largest award is the College of Design scholarship, not the PEAK MEXT offer');
  ok(!/PEAK/.test(tku.admissions.interview), 'Tokyo: the interview text describes the current route');
  var ky = page('kenyon-college');
  ok(ky.indexOf('Official sources differ') > -1 && ky.indexOf('$93,090') > -1, 'Kenyon: the comprehensive fee and the conflict between sources are shown');
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
(function () {
  var c = function (v) { return M.checkField('m-gpa', v); };
  ok(c('0').value === 0 && !c('0').invalid, 'GPA 0 is accepted');
  ok(c('3.5').value === 3.5 && !c('3.5').invalid, 'GPA 3.5 is accepted');
  ok(c('4.0').value === 4 && !c('4.0').invalid, 'GPA 4.0 is accepted');
  ok(c('4.1').value === null && c('4.1').invalid, 'GPA 4.1 is rejected and not used');
  ok(c('4.9').value === null && c('4.9').invalid, 'GPA 4.9 is rejected and not used');
  ok(c('-1').value === null && c('-1').invalid, 'a negative GPA is rejected and not used');
  ok(c('').value === null && !c('').invalid, 'an empty GPA field is simply not entered');
  ok(M.checkField('m-sat', '1700').invalid && M.checkField('m-ielts', '9.5').invalid, 'SAT and IELTS outside their scales are rejected the same way');
  var hv = M.evaluate(U.uniById('harvard-university'), { ielts: null, sat: null, gpa: 3.9, budget: null, currency: 'USD' });
  var txt = hv.checks.map(function (x) { return x.text; }).join(' | ');
  ok(/direct GPA comparison is not possible/i.test(txt) && !/average of admitted students/.test(txt), 'Harvard: a GPA above 4.0 with no stated scale is not compared', txt);
  ok(hv.checks.every(function (x) { return !(x.basis === 'statistic' && /GPA/.test(x.text)); }), 'an incomparable GPA never counts as a statistic met or missed');
  var noScale = DB.universities.filter(function (u) { var g = ((u.stats || {}).official || {}).gpa; return g && typeof g.average === 'number' && !g.cohort; });
  ok(!noScale.length, 'every published GPA average names the students it describes', noScale.map(function (u) { return u.id; }).join(', '));
  /* The match table and the profiles describe the same money. */
  var acAll = DB.match.annualCost, wrongTotal = [], wrongBilled = [];
  Object.keys(acAll).forEach(function (id) {
    var c = acAll[id], u = U.uniById(id); if (!u || c.label) return;
    var r = U.budgetRange(u), b = (u.costs || {}).breakdown || {};
    /* A two-semester sum stands for twice the published semester budget (rounded to the dollar). */
    var twice = c.calc === 'two-semesters' && U.costPeriod(u) === 'semester' && r && Math.round(2 * r.min) === c.min && Math.round(2 * r.max) === c.max;
    if (c.basis === 'total' && !twice && !(r && r.min === c.min && r.max === c.max) && id !== 'kenyon-college') wrongTotal.push(id);
    if (c.basis === 'billed' && c.min === c.max && typeof b.billed === 'number' && b.billed !== c.min) wrongBilled.push(id);
  });
  ok(!wrongTotal.length, 'a "full cost" in the match table is the full budget published in the profile', wrongTotal.join(', '));
  ok(!wrongBilled.length, 'a "billed" figure in the match table is the billed amount in the profile', wrongBilled.join(', '));
  var am = M.evaluate(U.uniById('amherst-college'), { ielts: null, sat: null, gpa: null, budget: 200000, currency: 'USD' }).budget;
  ok(am.status === 'fits-billed' && /Billed by the university a year/.test(am.text), 'a comprehensive fee inside the budget is not called the full cost', am.status + ' / ' + am.text);
  /* Sources that disagree are never a "depends on programme" range. */
  var kc = U.uniById('kenyon-college'), kin = function (b) { return M.evaluate(kc, { ielts: null, sat: null, gpa: null, budget: b, currency: 'USD' }).budget; };
  var mid = kin(96000);
  ok(mid.status === 'conflict', 'Kenyon: a budget between the two official totals is a source conflict, not "depends on programme"', mid.status);
  ok(/\$95,890/.test(mid.html) && /\$96,940/.test(mid.html) && /2026–27/.test(mid.html) && /2025–26/.test(mid.html) &&
     /factbook/.test(mid.html) && /tuition-costs/.test(mid.html), 'Kenyon: both sums, their years and both links are shown', mid.html);
  ok(kin(95889).status === 'over' && kin(95890).status === 'conflict' && kin(96939).status === 'conflict' && kin(96940).status === 'fits', 'Kenyon: below both figures is over, at or above both is within, in between is a conflict');
  var falseRange = DB.universities.filter(function (u) {
    var c = M.costOf(u); if (!c || !c.conflict) return false;
    return [c.min, (c.min + c.max) / 2, c.max - 1].some(function (b) { return M.evaluate(u, { ielts: null, sat: null, gpa: null, budget: b, currency: c.currency }).budget.status === 'maybe'; });
  });
  ok(!falseRange.length, 'no record with conflicting sources is shown as "depends on programme"', falseRange.map(function (u) { return u.id; }).join(', '));
  /* Budget: a required cost outside the published total is counted. */
  var b1 = M.evaluate(U.uniById('harvard-university'), { ielts: null, sat: null, gpa: null, budget: 101000, currency: 'USD' }).budget;
  var b2 = M.evaluate(U.uniById('harvard-university'), { ielts: null, sat: null, gpa: null, budget: 106000, currency: 'USD' }).budget;
  ok(b1.status === 'fits-no-extras' && b2.status === 'fits', 'Harvard: $101,000 covers the published total but not the insurance; $106,000 covers both', b1.status + ' / ' + b2.status);
})();
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
var offCommons = [];
DB.universities.forEach(function (u) {
  ((u.photos && u.photos.gallery) || []).forEach(function (x) {
    var commons = /^https:\/\/commons\.wikimedia\.org\//.test(x.page);
    if (commons ? x.source : !(x.source && /^©/.test(x.license))) offCommons.push(u.id);
  });
});
ok(!offCommons.length, 'a photo not from Wikimedia Commons names its source and carries a © notice (Capilano: from the university’s own page)', offCommons.join(', '));
console.log('   without a photo (placeholder shown): ' + DB.universities.filter(function (u) { return !((u.photos && u.photos.gallery) || []).length; }).map(function (u) { return u.id; }).join(', '));

/* ---------------- corrections after the expansion (v111) ----------------
   These check what a visitor is told, not how the code gets there. */
group('corrections after the expansion');
(function () {
  var added = function () { return DB.universities.filter(function (u) { return u.country === 'us'; }).slice(110); };
  var bud = function (id, b) { return M.evaluate(U.uniById(id), { ielts: null, sat: null, gpa: null, budget: b, currency: 'USD' }).budget; };
  /* Guaranteed aid that covers the main costs is never a yearly cost of zero. */
  ['deep-springs-college', 'berea-college'].forEach(function (id) {
    var st = [0, 1, 1000, 2000, 5000000].map(function (b) { return bud(id, b).status; });
    ok(st.every(function (x) { return x === 'core-covered'; }), id + ': budgets of 0, 1, 1,000, 2,000 and 5,000,000 USD are all “main costs covered — sufficiency not determined”', st.join(','));
    ok(bud(id, null).status === 'none' && /not determined/.test(bud(id, null).text), id + ': with no budget entered the text still says sufficiency is not determined');
    ok(U.cardCost(U.uniById(id)).kind === 'covered' && !/\$0|No tuition/.test(U.cardCost(U.uniById(id)).text), id + ': the card does not show a cost of zero');
  });
  ok(/2,200/.test(bud('berea-college', 0).html) && /One-off deposit/.test(bud('berea-college', 0).html), 'Berea: the one-off $2,200 deposit stays in the match result, apart from yearly costs');
  ok(/Books, travel and incidental/.test(bud('deep-springs-college', 0).html), 'Deep Springs: books, travel and incidental expenses are named as remaining, with no amount');
  var everFits = DB.universities.filter(function (u) { return bud(u.id, 0).status === 'fits'; }).map(function (u) { return u.id; });
  ok(!everFits.length, 'a budget of 0 is never “full cost within budget” for any institution', everFits.join(', '));
  /* An ordinary record with a published full budget still behaves as before. */
  var ro = U.uniById('rollins-college'), rb = U.budgetAmount(ro);
  ok(bud('rollins-college', rb).status === 'fits' && bud('rollins-college', rb - 1).status === 'over' && bud('rollins-college', 0).status === 'over',
    'Rollins: the published full budget fits exactly, one dollar less does not, zero does not');
  ok(bud('west-virginia-university', 40000).status === 'fits-tuition' && bud('anderson-university-indiana', 60000).status === 'fits-billed',
    'tuition-only and billed-only figures inside a budget are not called a full cost');

  /* Reed: what each award rests on, and what the IELTS figure is. */
  var reed = U.uniById('reed-college');
  var names = function (l) { return l.map(function (a) { return a.name; }).join(' | '); };
  ok(!/UWC|Continental/.test(names(U.meritList(reed))) && /UWC/.test(names(U.otherAwards(reed))) && /Continental/.test(names(U.otherAwards(reed))),
    'Reed: the UWC Davis–Reed Match and the Continental programme are not listed as merit scholarships', names(U.meritList(reed)));
  var uwc = U.otherAwards(reed).filter(function (a) { return /UWC/.test(a.name); })[0];
  ok(uwc && uwc.basis === 'partnership' && /United World Colleges only/.test(uwc.eligibility) && /30,000/.test(uwc.amount), 'Reed: the UWC award is a partner programme for admitted UWC students, $30,000 a year');
  ok(U.otherAwards(reed).filter(function (a) { return /Continental/.test(a.name); })[0].basis === 'unknown', 'Reed: the basis of the Continental programme stays unknown');
  var meritOpt = U.optionById('scholarship', 'merit');
  ok(meritOpt && !meritOpt.test(reed), 'Reed is not returned by the “Merit scholarships” filter');
  ok(U.ieltsLabel(reed) === '7+ average' && U.recInfo(reed.english.ielts).kind === 'statistic', 'Reed: IELTS 7+ is shown as an average, not as a competitive level', U.ieltsLabel(reed));
  var chk = function (score) { return M.evaluate(reed, { ielts: score, sat: null, gpa: null, budget: null, currency: 'USD' }).checks.filter(function (c) { return /IELTS/.test(c.text); })[0]; };
  ok(chk(6).basis === 'statistic' && chk(6).level !== 'hard' && !/minimum of|requirement met|meets/.test(chk(6).text.replace('not a minimum', '')) && /average/.test(chk(6).text),
    'Reed: an IELTS below the average is compared with a statistic, never with a minimum', chk(6).text);
  ok(chk(8).basis === 'statistic' && /not a requirement met/.test(chk(8).text), 'Reed: an IELTS above the average is not called a requirement met', chk(8).text);
  var noBasis = [];
  added().forEach(function (u) {
    U.awardsAll(u).forEach(function (a) { if (!U.AWARD_BASIS[a.basis]) noBasis.push(u.id + ':' + a.name); });
    ['ielts', 'toefl', 'duolingo'].forEach(function (k) { var t = (u.english || {})[k]; if (t && U.has(t.recommended) && !t.recBasis) noBasis.push(u.id + ':' + k); });
  });
  ok(!noBasis.length, 'every award and every non-minimum English score of the 90 added records says what it rests on', noBasis.slice(0, 6).join('; '));

  /* "Not checked" is not the subject area "Other". */
  var fakeOther = DB.universities.filter(function (u) { return !U.programsChecked(u) && (u.programs || []).length; }).map(function (u) { return u.id; });
  ok(!fakeOther.length, 'a record whose majors were not read carries no field tag at all', fakeOther.join(', '));
  var onlyOther = added().filter(function (u) { return (u.programs || []).join() === 'other'; }).map(function (u) { return u.id; });
  ok(!onlyOther.length, 'no added record has “Other” as its only field', onlyOther.join(', '));
  /* Fields read from the official lists of majors (v112). */
  var csOpt = U.optionById('field', 'computer-science');
  var rit = U.uniById('rochester-institute-of-technology'), az = U.uniById('university-of-arizona');
  ok(csOpt.test(rit, {}) && /Computer Science BS/.test(rit.programEvidence['computer-science'].program) && /^https:\/\/www\.rit\.edu\//.test(rit.programEvidence['computer-science'].url),
    'RIT is found under Computer Science, with the named programme and its official page');
  ok(csOpt.test(az, {}) && !U.programsPartial(az) && /cs\.arizona\.edu/.test(az.programEvidence['computer-science'].url) && az.programs.length === 13,
    'Arizona is found under Computer Science, and every field now names a programme from its full degree search');
  ok(U.applyFilters([rit], { field: ['computer-science'], language: ['english-yes'], degree: ['bachelor'] }).length === 1 &&
     U.applyFilters([rit], { field: ['law'] }).length === 0, 'field, language and degree filters work together for RIT; a field it does not have excludes it');
  var badEv = [];
  DB.universities.forEach(function (u) {
    if (u.programsBasis !== 'evidence') return;
    (u.programs || []).forEach(function (t) {
      var e = (u.programEvidence || {})[t];
      if (!e || !e.program || !/^https:\/\//.test(e.url || '') || !e.checked || e.level !== 'bachelor') badEv.push(u.id + ':' + t);
    });
    Object.keys(u.programEvidence || {}).forEach(function (t) { if ((u.programs || []).indexOf(t) < 0) badEv.push(u.id + ':extra ' + t); });
    var inEnglish = (u.programs || []).filter(function (t) { var e = (u.programEvidence || {})[t]; return !e || /English/.test(e.language || 'English'); });
    if ((u.englishTaughtPrograms || []).join() !== inEnglish.join()) badEv.push(u.id + ':english list differs');
  });
  ok(!badEv.length, 'every field tag written from an official list names its programme, level, page and check date', badEv.slice(0, 6).join('; '));
  var evN = DB.universities.filter(function (u) { return u.programsBasis === 'evidence'; }).length;
  var dropped117 = [['olin-college-of-engineering', 'computer-science', 'concentration'], ['scripps-college', 'computer-science', 'minor'],
    ['spelman-college', 'business', 'minor'], ['ohio-wesleyan-university', 'law', 'not-listed'], ['illinois-institute-of-technology', 'economics', 'minor']];
  ok(evN >= 55 && dropped117.every(function (d) {
       var u = U.uniById(d[0]);
       return u.programs.indexOf(d[1]) < 0 && u.fieldNotes && u.fieldNotes[d[1]] && u.fieldNotes[d[1]].kind === d[2];
     }), 'v117: 38 more records name a programme per field; a field shown only as a minor, a concentration or pre-law is taken off with its reason', 'evidence records: ' + evN);
  var ch = U.uniById('chapman-university'), bab = U.uniById('babson-college');
  ok(U.applyFilters([ch], { field: ['psychology'] }).length === 1 && ch.programEvidence.psychology.program === 'BA Psychology' &&
     bab.programsBasis === 'concentrations' && /concentrations/.test(bab.links.programs),
    'fields found on a read list are added only with a named programme (Chapman); Babson’s areas are concentrations of its one degree');
  var ag = U.uniById('agnes-scott-college');
  ok(ag.programs.indexOf('computer-science') < 0 && ag.programs.indexOf('engineering') < 0, 'Agnes Scott: dual-degree routes with other institutions are not counted as its own fields');
  /* Costs read for v112: a period, a year and a category travel with every figure. */
  var perSem = ['goucher-college', 'lesley-university', 'the-new-school'].filter(function (id) { var u = U.uniById(id); return !(U.costPeriod(u) === 'semester' && /per semester/.test(U.cardCost(u).text) && U.cardCost(u).suffix === ''); });
  ok(!perSem.length, 'a charge published per semester is shown per semester on the card, not as a yearly figure', perSem.join(', '));
  var gb = bud('goucher-college', 80000);
  ok(gb.status === 'fits-billed' && /calculated by UniPath/.test(gb.text), 'Goucher: the two-semester sum used for the budget is marked as calculated, and is not called a full cost', gb.status + ' / ' + gb.text);
  ok(/sum of the lines/.test(bud('mcdaniel-college', 80000).text), 'McDaniel: a sum of lines is not presented as the college’s own total');
  var md = bud('university-of-maryland', 100000), dl = bud('dillard-university', 100000);
  ok(md.status === 'unknown' && /earlier year/.test(md.text) && /2025–2026/.test(md.text) && dl.status === 'unknown' && /earlier year/.test(dl.text),
    'a figure of a previous cycle is shown as such and never compared with a budget (Maryland, Dillard)', md.text);
  ok(!DB.match.annualCost['university-of-maryland'] && !DB.match.annualCost['dillard-university'], 'previous-cycle figures are not in the match table');
  var tm = bud('texas-a-and-m-university', 70000);
  ok(U.costPeriod(U.uniById('texas-a-and-m-university')) === 'semester' && tm.status === 'fits' && /calculated by UniPath/.test(tm.text),
    'Texas A&M: the calculator’s semester figures stay per semester; the two-semester sum is marked as calculated', tm.status + ' / ' + tm.text);
  var mar = U.uniById('marist-university'), xl = U.uniById('xavier-university-of-louisiana');
  ok(U.budgetAmount(mar) === 76875 && U.billedAmount(mar) === 72040 && bud('marist-university', 76875).status === 'fits', 'Marist: the 2026–27 cost of attendance and its billable part are as printed');
  var xb = bud('xavier-university-of-louisiana', 50000);
  ok(U.costPeriod(xl) === 'semester' && /per semester/.test(U.cardCost(xl).text) && xb.status === 'fits-billed' && /calculated by UniPath/.test(xb.text),
    'Xavier of Louisiana: charges stay per semester; the two-semester sum is marked as calculated', xb.status + ' / ' + xb.text);
  var bare = added().filter(function (u) { var c = u.costs || {}; return (c.items || []).length && !(c.academicYear && c.studentCategory && c.source && c.verified); }).map(function (u) { return u.id; });
  /* Deep Springs has no year by nature (aid, not a price list); the others are
     records whose page gave figures without naming the academic year — a gap
     the profiles state. The list may only shrink. */
  var noYearKnown = ['deep-springs-college', 'american-university'];
  var bareNew = bare.filter(function (id) { return noYearKnown.indexOf(id) < 0; });
  ok(!bareNew.length, 'every cost breakdown of an added record names its year, student category, source and check date (known gaps apart)', bareNew.join(', '));
  console.log('   cost figures without a named academic year: ' + bare.filter(function (id) { return id !== 'deep-springs-college'; }).join(', '));
  var slc = U.uniById('sarah-lawrence-college'), les = U.uniById('lesley-university');
  ok(slc.admissions.deadlines.filter(function (d) { return d.entryYear === '2027' && d.status === 'confirmed' && d.dateISO; }).length === 4 &&
     les.admissions.deadlines.every(function (d) { return d.status === 'previous-cycle' && d.verified === '2026-10-21'; }),
    '12.6: Sarah Lawrence’s four rounds for autumn 2027 are confirmed (2025 tax returns on the aid page); Lesley, re-checked on 21 October 2026, still shows fall 2026 only');
  ok(['university-of-cincinnati', 'university-of-arizona', 'xavier-university'].every(function (id) { return U.uniById(id).costs.academicYear === '2026–2027'; }),
    'Cincinnati, Arizona and Xavier: cost figures now name 2026–2027 from the universities’ own cost pages');
  var kc2 = bud('kenyon-college', 96000);
  ok(kc2.status === 'conflict' && /needs checking/.test(kc2.text), 'Kenyon: a budget between the two official totals is still a source conflict');
  /* Dates and test policies (v113). */
  var noRounds = added().filter(function (u) { return !U.roundsOf(u).length; }).map(function (u) { return u.id; });
  ok(!noRounds.length, 'every added record has at least one application round or a confirmed rolling route', noRounds.join(', '));
  var wpi = U.roundsOf(U.uniById('worcester-polytechnic-institute'));
  ok(wpi.length === 5 && wpi.filter(function (d) { return d.binding === true; }).length === 2 && wpi.every(function (d) { return d.source && d.verified && d.note; }),
    'WPI: five rounds, two of them binding, each with its source and the note that the page prints no year');
  var noReason = added().filter(function (u) {
    var t = (u.academics || {}).sat || {};
    return !(t.policy && t.source && t.verified) && !(U.has(t.note) && /Not checked|disagree|do not settle|Not confirmed/.test(t.note));
  }).map(function (u) { return u.id; });
  ok(!noReason.length, 'an SAT/ACT policy is either stated with its page and date, or left unknown with the reason', noReason.join(', '));
  var bare26 = ['ursinus-college', 'anderson-university-indiana', 'cornell-college', 'the-new-school', 'savannah-college-of-art-and-design'].filter(function (id) {
    var t = U.uniById(id).academics.sat; return t.policy || !/^Not checked:/.test(t.note) || !t.source; });
  ok(!bare26.length, 'the five records whose test policy could not be read say “Not checked”, why, and where to look', bare26.join(', '));
  ok(U.uniById('american-university').academics.sat.policy === 'optional' && U.roundsOf(U.uniById('american-university')).length === 4, 'American: test policy and all four rounds read once the site opened');
  ok(U.uniById('lesley-university').academics.sat.policy === 'not-used' && U.uniById('rensselaer-polytechnic-institute').academics.sat.cycle === 'autumn 2027',
    'Lesley does not use test scores for admission; RPI’s test-optional policy names its cycle');
  /* Field tags that had come from a pre-law track, a dual-degree route or a graduate school (v114). */
  var has = function (id, tag) { return U.uniById(id).programs.indexOf(tag) > -1; };
  ok(!has('spelman-college', 'engineering') && !has('washington-and-jefferson-college', 'engineering') && !has('southern-methodist-university', 'law') &&
     !has('illinois-institute-of-technology', 'law') && !has('santa-clara-university', 'education') && has('morehouse-college', 'computer-science'),
    'a dual-degree route, a pre-law track and a graduate school are not shown as fields of study');
  ok(U.programsPartial(U.uniById('fairfield-university')) && !U.programsPartial(U.uniById('rochester-institute-of-technology')),
    'records whose full list of majors was not read are marked as partly read');
  /* v118: the remaining lists, read through catalogues or in a browser window. */
  var v118 = ['elmira-college', 'hobart-and-william-smith-colleges', 'occidental-college', 'westminster-college-pennsylvania', 'providence-college',
    'illinois-wesleyan-university', 'lake-forest-college', 'southern-methodist-university', 'loyola-university-chicago', 'seattle-university', 'ithaca-college',
    'xavier-university-of-louisiana', 'university-of-washington', 'santa-clara-university', 'texas-a-and-m-university', 'ursinus-college',
    'anderson-university-indiana', 'depaul-university', 'willamette-university', 'umass-amherst', 'university-of-minnesota-twin-cities', 'endicott-college',
    'allegheny-college', 'bentley-university', 'xavier-university', 'muhlenberg-college', 'villanova-university', 'university-of-iowa', 'lesley-university',
    'the-new-school', 'savannah-college-of-art-and-design'];
  var kw = v118.filter(function (id) { return U.uniById(id).programsBasis !== 'evidence'; });
  ok(v118.length === 31 && !kw.length && U.uniById('fairfield-university').programsBasis !== 'evidence',
    'v118: 31 more records name a programme per field; Fairfield (list behind a browser check) stays partly read', kw.join(', '));
  var tam = U.uniById('texas-a-and-m-university'), uw = U.uniById('university-of-washington'), oxy = U.uniById('occidental-college');
  ok(!U.programsPartial(tam) && tam.programEvidence.law.program === 'Society, Ethics, and Law - BA' && /catalog\.tamu\.edu/.test(tam.programEvidence.law.url) &&
     /capacity-constrained/.test(uw.programNote) && oxy.programs.indexOf('business') < 0 && oxy.fieldNotes.business.kind === 'not-listed',
    'Texas A&M fields come from its 2026–2027 catalogue; UW warns that majors are capacity-constrained; “Business at Oxy” is not a major');
  var noStatus = DB.universities.filter(function (u) { return !(u.programs || []).length && U.programsChecked(u); }).map(function (u) { return u.id; });
  ok(!noStatus.length, 'a record without field tags says that its list of majors was not checked', noStatus.join(', '));
})();

/* ---------------- Canada (October 2026) ---------------- */
group('Canada');
(function () {
  var ca = DB.universities.filter(function (u) { return u.country === 'ca'; });
  var bad = [];
  ca.forEach(function (u) {
    var c = u.costs || {}, f = (u.admissions || {}).applicationFee || {};
    if (c.currency !== 'CAD') bad.push(u.id + ': costs not in CAD');
    if (f.amount != null && f.currency !== 'CAD') bad.push(u.id + ': fee not in CAD');
    var a = (DB.match.annualCost || {})[u.id];
    if (a && a.currency !== 'CAD') bad.push(u.id + ': yearly figure not in CAD');
    (u.admissions.deadlines || []).forEach(function (d) {
      if (/^(ED|ED2|EA|REA|RD)$/.test(d.kind || '')) bad.push(u.id + ': US round type ' + d.kind);
      if (!d.source || !d.verified) bad.push(u.id + ': undated source for ' + d.name);
    });
    if ((u.programs || []).indexOf('other') > -1) bad.push(u.id + ': tag "other"');
    if (!u.sources || u.sources.length < 3) bad.push(u.id + ': fewer than three sources');
    if (/Ontario/.test(String(u.region)) && !/OUAC/.test(JSON.stringify(u.admissions.platforms))) bad.push(u.id + ': Ontario record without OUAC');
  });
  ok(!bad.length, 'every Canadian record keeps CAD, Canadian round names, sourced dates and its sources', bad.slice(0, 6).join('; '));
  var names = {};
  ca.forEach(function (u) { [u.name].concat(u.aliases || []).forEach(function (n) { var k = n.toLowerCase(); names[k] = (names[k] || []).concat(u.id); }); });
  var clash = Object.keys(names).filter(function (k) { return names[k].length > 1 && names[k].some(function (a, i, s) { return s.indexOf(a) !== i ? false : s.length > 1 && s[0] !== s[1]; }); });
  ok(!clash.length, 'no two Canadian records share a name or alias (campuses are one record)', clash.join(', '));
  var udem = U.uniById('universite-de-montreal');
  ok(udem.englishTaught === false && !U.ieltsMin(udem) && /French/.test(JSON.stringify(udem.english.note)) && udem.academics.sat.policy === 'not-applicable',
    'Université de Montréal: French-language, no IELTS minimum is invented, SAT/ACT not part of the route');
  ok(U.search('universite de montreal')[0] && U.search('universite de montreal')[0].id === 'universite-de-montreal' && U.search('Montreal').some(function (u) { return u.id === 'mcgill-university'; }),
    'search ignores accents: “universite de montreal” finds Université de Montréal');
  var mg = U.uniById('mcgill-university');
  ok(U.satPolicy(mg) === 'conditional' && !U.satNotRequired(mg), 'McGill: SAT/ACT only for a U.S. diploma is its own state, not test-optional');
  var ev = function (id, budget, cur) { return M.evaluate(U.uniById(id), { ielts: null, sat: null, gpa: null, budget: budget, currency: cur }).budget; };
  var cad = ev('university-of-alberta', 39232.8, 'CAD'), usd = ev('university-of-alberta', 39232.8, 'USD');
  ok(/C\$39,233/.test(cad.text) && !/C\$/.test(usd.text) && /\$27,/.test(usd.text) && cad.status !== usd.status,
    'a CAD budget is compared with CAD tuition as is; a USD budget is set against the cost converted at the dated ECB rate, never read as CAD', cad.text + ' | ' + usd.text);
  var ut = U.uniById('university-of-toronto');
  ok(ut.scholarships.fullRide.available === true && /nomination deadline has passed/.test(ut.scholarships.fullRide.note) &&
     ev('university-of-toronto', 50000, 'CAD').status !== 'core-covered',
    'Toronto: the Pearson Scholarship is shown with its passed nomination date and is never subtracted from the cost');
  var we = U.uniById('western-university');
  ok(we.costs.status === 'previous-cycle' && !(DB.match.annualCost || {})['western-university'],
    'Western: costs from 2025–26 are marked as an earlier cycle and are not compared with a budget');
  var lv = U.uniById('universite-laval');
  ok(lv.englishTaught === false && !U.ieltsMin(lv) && lv.frenchRequirement && lv.costs.breakdown.period === 'semester' &&
     (DB.match.annualCost || {})['universite-laval'].calc === 'two-semesters',
    'Université Laval: French-language, French requirement recorded, per-term fee kept per term and the yearly figure marked as calculated');
  var yk = U.uniById('york-university'), gu = U.uniById('university-of-guelph');
  ok(U.satPolicy(yk) === 'conditional' && gu.costs.status === 'previous-cycle' && !(DB.match.annualCost || {})['university-of-guelph'],
    'York: SAT/ACT only for some school systems; Guelph: 2025–26 estimates kept out of the budget comparison');
  var uv = U.uniById('university-of-victoria');
  ok(uv && uv.verified !== null && (DB.match.annualCost || {})['university-of-victoria'] && uv.scholarships.merit[0].amount.indexOf('15,000') > -1 && DB.universities.filter(function (u) { return u.country === 'ca'; }).length === 50,
    'University of Victoria is added once its site answered (19 October 2026): Canada now has all 50 listed universities');
  var feeNow = { 'dalhousie-university': 70, 'simon-fraser-university': 130, 'university-of-manitoba': 130, 'mount-allison-university': 125, 'saint-marys-university': 100,
    'bishops-university': 75, 'mount-saint-vincent-university': 80, 'mount-royal-university': 100, 'laurentian-university': 156 };
  var feeBad = Object.keys(feeNow).filter(function (id) { var f = U.uniById(id).admissions.applicationFee; return f.amount !== feeNow[id] || f.verified !== '2026-10-20' || !/^https:/.test(f.source); });
  var engBad = ['st-francis-xavier-university', 'university-of-lethbridge', 'thompson-rivers-university'].filter(function (id) {
    var u = U.uniById(id); return U.ieltsMin(u) !== 6.5 || !u.english.source || u.verification.unconfirmed.some(function (x) { return /English/.test(x); }); });
  ok(!feeBad.length && !engBad.length, 'gaps filled on 20 October 2026: application fees of nine universities and English minimums of StFX, Lethbridge and TRU, each with its page', feeBad.concat(engBad).join(', '));
  var satNow = { 'university-of-british-columbia': 'conditional', 'university-of-manitoba': 'not-used', 'trent-university': 'accepted', 'queens-university': 'optional', 'university-of-victoria': 'optional', 'st-francis-xavier-university': 'optional' };
  var satBad = Object.keys(satNow).filter(function (id) { var s = U.uniById(id).academics.sat; return s.policy !== satNow[id] || s.verified !== '2026-10-20' || !/^https:/.test(s.source); });
  ok(!satBad.length && U.satNotRequired(U.uniById('university-of-manitoba')) && !U.satNotRequired(U.uniById('trent-university')),
    'SAT/ACT policies read on 20 October 2026 keep the university’s wording: UBC differs by campus, Manitoba does not use them, Trent recommends them (never treated as not required)', satBad.join(', '));
  var uzNow = ['universite-de-montreal', 'university-of-waterloo', 'university-of-calgary', 'universite-laval', 'trent-university', 'lakehead-university',
    'ontario-tech-university', 'university-of-victoria', 'laurentian-university', 'mount-royal-university', 'university-of-winnipeg'];
  var uzBad = uzNow.filter(function (id) { var u = U.uniById(id); return !/^Uzbekistan: /.test(u.academics.internationalQualifications || '') || u.verification.unconfirmed.indexOf('requirements for Uzbekistan') > -1; });
  ok(!uzBad.length && /pages differ/.test(U.uniById('universite-laval').academics.internationalQualifications),
    'requirements for Uzbekistan read on 20 October 2026 for 11 universities; Laval’s French and English pages differ and both are shown', uzBad.join(', '));
  var wi = U.uniById('university-of-windsor'), sx = U.uniById('st-francis-xavier-university'), rg = U.uniById('university-of-regina');
  ok(U.ieltsMin(wi) === 6.5 && wi.english.verified === '2026-10-21' && sx.admissions.applicationFee.amount === 40 && /2026–2027 Academic Calendar/.test(sx.admissions.applicationFee.note) &&
     rg.academics.sat.policy === 'optional' && /home-based/.test(rg.academics.sat.label),
    'from the PDFs read on 21 October 2026: Windsor English (Senate policy), StFX fee C$40 (2026–27 calendar), Regina SAT/ACT not required except for home-based learners');
  var wc = U.uniById('university-of-windsor');
  ok(wc.costs.academicYear === '2026–2027' && U.costPeriod(wc) === 'semester' && (DB.match.annualCost || {})['university-of-windsor'].calc === 'two-semesters' &&
     !/Estimated Total/.test(wc.costs.headline),
    'Windsor: per-term tuition from the fee estimator stays per term; the yearly figure is marked as calculated and the estimator’s all-fees total is not called a total');
  var ruBox = { window: {} }; vm.createContext(ruBox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/i18n/ru.js'), 'utf8'), ruBox);
  var noRuCity = DB.universities.filter(function (u) { return u.city && !ruBox.window.UNIPATH_I18N.ru[u.city]; }).map(function (u) { return u.city; });
  ok(noRuCity.length === 0, 'every university city has a Russian name', noRuCity.join(', '));
  var first = function (q) { var r = U.search(q); return r[0] && r[0].id; };
  ok(first('Ryerson') === 'toronto-metropolitan-university' && first('UOIT') === 'ontario-tech-university' && first('MUN') === 'memorial-university-of-newfoundland',
    'former names find the current record: Ryerson → TMU, UOIT → Ontario Tech, MUN → Memorial', [first('Ryerson'), first('UOIT'), first('MUN')].join(', '));
  var tr = U.uniById('trent-university'), unb = U.uniById('university-of-new-brunswick');
  ok(tr.admissions.deadlines.some(function (d) { return d.kind === 'regular' && d.status === 'not-confirmed'; }) && unb.costs.status === 'previous-cycle' &&
     !(DB.match.annualCost || {})['university-of-new-brunswick'] && U.satPolicy(U.uniById('memorial-university-of-newfoundland')) === 'conditional',
    'Trent: deadlines from a page not yet updated stay unconfirmed; UNB: no fee table, nothing compared; Memorial: SAT/ACT only for some schools');
  var fr = ['universite-du-quebec-a-montreal', 'universite-de-sherbrooke', 'universite-de-moncton'].map(U.uniById);
  ok(fr.every(function (u) { return u.englishTaught === false && !U.ieltsMin(u) && u.frenchRequirement && u.academics.sat.policy === 'not-applicable'; }) &&
     U.uniById('universite-de-sherbrooke').costs.breakdown.period === 'semester' && U.uniById('laurentian-university').frenchRequirement.level === 'B2',
    'UQAM, Sherbrooke and Moncton: French-language with a French requirement and no invented IELTS; Sherbrooke per-term fees stay per term; Laurentian’s French programmes ask for B2');
  var ms = U.uniById('mount-saint-vincent-university'), bi = U.uniById('bishops-university');
  ok(ms.costs.status === 'conflict' && ms.costs.conflict && !(DB.match.annualCost || {})['mount-saint-vincent-university'] &&
     typeof bi.costs.billedSubtotal !== 'number' && /not the sum/.test(bi.costs.totalText),
    'MSVU: a copied-looking international figure is shown as a source conflict and not compared; Bishop’s: a printed total that is not the sum of its lines is not used as the total');
})();


console.log('\n' + passed + ' passed, ' + failed + ' failed');
/* Exit with a status only when run directly; tests/links.js loads this file for the data. */
if (require.main === module) process.exit(failed ? 1 : 0);
