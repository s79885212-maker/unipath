/* ============================================================
   Data for the "Find my match" page.

   annualCost — one comparable yearly figure per university, taken
   from the costs already published in its profile (data/universities.*.js
   and data/admission-profiles.js). Update it together with the profile.
     basis: 'total'   → full cost of attendance for a year
            'tuition' → tuition (and compulsory fees) only; living costs extra
     min/max: range when the price depends on the programme
     example: true → the only published figure is one programme's fee
   A university missing here has no published yearly figure; the page
   says so rather than guessing.

   rates — European Central Bank euro reference rates (1 EUR = x),
   used only to put different currencies side by side approximately.
   ============================================================ */
window.UNIPATH.match = {
  rates: {
    date: '2026-09-18',
    source: 'European Central Bank euro reference rates',
    url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html',
    perEUR: { EUR: 1, USD: 1.1460, GBP: 0.85880, JPY: 180.94, KRW: 1590.76 }
  },
  annualCost: {
    /* United States — cost of attendance for 2026–27 */
    'harvard-university':      { currency: 'USD', basis: 'total', min: 95134, max: 100134 },
    'mit':                     { currency: 'USD', basis: 'total', min: 92760, max: 92760 },
    'yale-university':         { currency: 'USD', basis: 'total', min: 97985, max: 97985 },
    'arizona-state-university':{ currency: 'USD', basis: 'total', min: 69906, max: 69906 },
    'berea-college':           { currency: 'USD', basis: 'total', min: 1000, max: 1000, note: 'Tuition, housing, food and fees are covered; this is the personal-expenses figure' },
    'uc-berkeley':             { currency: 'USD', basis: 'total', min: 101598, max: 101598 },
    'princeton-university':    { currency: 'USD', basis: 'total', min: 90574, max: 90574, note: 'Average before aid' },
    'brown-university':        { currency: 'USD', basis: 'total', min: 97016, max: 97016, note: 'Billed charges; books, travel and personal expenses extra' },
    'dartmouth-college':       { currency: 'USD', basis: 'total', min: 98427, max: 98427 },
    'columbia-university':     { currency: 'USD', basis: 'tuition', min: 72800, max: 72800 },
    'university-of-pennsylvania': { currency: 'USD', basis: 'total', min: 94582, max: 94582 },
    'cornell-university':      { currency: 'USD', basis: 'total', min: 95294, max: 95294, note: 'Tuition plus average housing and dining' },
    'stanford-university':     { currency: 'USD', basis: 'total', min: 90675, max: 90675, note: 'Tuition plus standard room and board' },
    'amherst-college':         { currency: 'USD', basis: 'total', min: 96360, max: 96360 },
    'bowdoin-college':         { currency: 'USD', basis: 'total', min: 95400, max: 95400 },
    'university-of-notre-dame':{ currency: 'USD', basis: 'total', min: 88786, max: 88786, note: 'Basic fee for students living on campus' },
    /* Japan — tuition (and compulsory fees) per year */
    'university-of-tokyo':     { currency: 'JPY', basis: 'tuition', min: 642960, max: 642960 },
    'waseda-university':       { currency: 'JPY', basis: 'tuition', min: 1200000, max: 1800000 },
    'sophia-university':       { currency: 'JPY', basis: 'tuition', min: 1442000, max: 1668650 },
    'international-christian-university': { currency: 'JPY', basis: 'tuition', min: 1521000, max: 1521000 },
    'ritsumeikan-apu':         { currency: 'JPY', basis: 'tuition', min: 1455000, max: 1655000, note: 'Before any tuition-reduction scholarship' },
    'tohoku-university':       { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800 },
    /* South Korea — tuition per year (two semesters) */
    'seoul-national-university': { currency: 'KRW', basis: 'tuition', min: 4900000, max: 6000000 },
    'kaist':                   { currency: 'KRW', basis: 'tuition', min: 0, max: 0, note: 'Tuition is covered for every admitted international student' },
    'yonsei-university':       { currency: 'KRW', basis: 'tuition', min: 16516000, max: 16516000 },
    'korea-university':        { currency: 'KRW', basis: 'tuition', min: 11600000, max: 15600000 },
    'hanyang-university':      { currency: 'KRW', basis: 'tuition', min: 10600000, max: 15600000 },
    'ewha-womans-university':  { currency: 'KRW', basis: 'tuition', min: 9300000, max: 12900000 },
    /* United Kingdom — international tuition per year */
    'university-of-oxford':    { currency: 'GBP', basis: 'tuition', min: 39620, max: 66580 },
    'university-of-cambridge': { currency: 'GBP', basis: 'tuition', min: 30798, max: 70554, note: 'Plus a College fee' },
    'university-college-london': { currency: 'GBP', basis: 'tuition', min: 48600, max: 48600, example: true },
    'kings-college-london':    { currency: 'GBP', basis: 'tuition', min: 42900, max: 42900, example: true },
    'university-of-manchester':{ currency: 'GBP', basis: 'tuition', min: 37800, max: 37800, example: true },
    'university-of-warwick':   { currency: 'GBP', basis: 'tuition', min: 21950, max: 37310 },
    /* Germany */
    'technical-university-of-munich': { currency: 'EUR', basis: 'tuition', min: 4000, max: 6000 },
    'fau-erlangen-nurnberg':   { currency: 'EUR', basis: 'tuition', min: 2000, max: 6000, note: 'From summer semester 2027' },
    'university-of-freiburg':  { currency: 'EUR', basis: 'tuition', min: 3000, max: 3000 },
    'university-of-cologne':   { currency: 'EUR', basis: 'tuition', min: 0, max: 0 },
    'leuphana-university-luneburg': { currency: 'EUR', basis: 'tuition', min: 0, max: 0 },
    'rhine-waal-university':   { currency: 'EUR', basis: 'tuition', min: 0, max: 0 },
    'constructor-university':  { currency: 'EUR', basis: 'total', min: 29654, max: 29654, note: '2025–26 figures' },
    'frankfurt-school':        { currency: 'EUR', basis: 'total', min: 39120, max: 39120 }
  }
};
