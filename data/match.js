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

    /* Added 2026-09-23 with the new universities — only where an annual figure
       is confirmed on the university's own pages. */
    'university-of-bristol':   { currency: 'GBP', basis: 'tuition', min: 25500, max: 33400, note: 'Most courses; medicine, dentistry and veterinary science cost more' },
    'university-of-glasgow':   { currency: 'GBP', basis: 'tuition', min: 28275, max: 33708 },
    'university-of-st-andrews':{ currency: 'GBP', basis: 'tuition', min: 33250, max: 33250 },
    'university-of-sheffield': { currency: 'GBP', basis: 'tuition', min: 27650, max: 34670 },
    'university-of-aberdeen':  { currency: 'GBP', basis: 'tuition', min: 18800, max: 24800, note: 'The lower figure is the self-funded rate after the Aberdeen Global Scholarship' },
    'bard-college-berlin':     { currency: 'EUR', basis: 'total', min: 27500, max: 38250, note: 'Comprehensive fee; the higher figure includes housing and weekday meals' },
    'berlin-international-university': { currency: 'EUR', basis: 'tuition', min: 8100, max: 8940 },
    'munich-business-school':  { currency: 'EUR', basis: 'tuition', min: 12840, max: 12840, note: '€44,940 across the whole programme' },
    'ebs-universitaet':        { currency: 'EUR', basis: 'tuition', min: 18160, max: 18160, note: '€54,480 across six semesters' },
    'whu-otto-beisheim':       { currency: 'EUR', basis: 'tuition', min: 18200, max: 18200 },
    'karlshochschule':         { currency: 'EUR', basis: 'tuition', min: 6600, max: 9000, note: 'Lower figure is the EU rate' },
    'macromedia-university':   { currency: 'EUR', basis: 'tuition', min: 12000, max: 12000 },
    'reutlingen-university':   { currency: 'EUR', basis: 'tuition', min: 3399, max: 3399, note: 'Non-EU tuition plus semester fees' },
    'deggendorf-institute-of-technology': { currency: 'EUR', basis: 'tuition', min: 1000, max: 1000, note: 'Service fee for non-EU students; no tuition' },
    'hof-university':          { currency: 'EUR', basis: 'tuition', min: 250, max: 250, note: 'Semester contributions only' },
    'neu-ulm-university':      { currency: 'EUR', basis: 'tuition', min: 0, max: 0, note: 'No tuition in Bavaria; semester fee only' },
    'anhalt-university':       { currency: 'EUR', basis: 'tuition', min: 0, max: 0, note: 'No tuition for a first degree' },
    'stralsund-university':    { currency: 'EUR', basis: 'tuition', min: 0, max: 0, note: 'No tuition; semester contribution only' },
    'institute-of-science-tokyo': { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800, note: 'Standard national-university rate' },
    'nagoya-university':       { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800, note: 'Standard national-university rate' },
    'kyushu-university':       { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800, note: 'Standard national-university rate' },
    'osaka-university':        { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800, note: 'Standard national-university rate' },
    'hokkaido-university':     { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800, note: 'Standard national-university rate' },
    'university-of-tsukuba':   { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800 },
    'okayama-university':      { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800 },
    'hitotsubashi-university': { currency: 'JPY', basis: 'tuition', min: 535800, max: 535800, note: 'Standard national-university rate' },
    'ritsumeikan-university':  { currency: 'JPY', basis: 'tuition', min: 1439200, max: 1439200 },
    'temple-university-japan': { currency: 'JPY', basis: 'total', min: 3500000, max: 3500000, note: 'University estimate including living costs for two semesters' },
    'miyazaki-international-college': { currency: 'JPY', basis: 'tuition', min: 680000, max: 680000, note: 'Published 2022–23 figures, before international waivers' },
    'gist':                    { currency: 'KRW', basis: 'tuition', min: 7214000, max: 7214000, note: 'Fully supported for admitted international students' },

    /* Added 2026-09-24 after confirming the figure on the university's own pages. */
    'lse':                     { currency: 'GBP', basis: 'tuition', min: 30400, max: 41900, note: '2027/28 Overseas rate, fixed at the year-of-entry level' },
    'university-of-nottingham':{ currency: 'GBP', basis: 'tuition', min: 26200, max: 34800, note: '2027/28; medicine and veterinary medicine cost more' },
    'akita-international-university': { currency: 'JPY', basis: 'tuition', min: 896000, max: 896000, note: 'From April 2027 enrolment' },
    'rikkyo-university':       { currency: 'JPY', basis: 'tuition', min: 1903500, max: 1903500, note: 'GLAP tuition and other fees' },
    'doshisha-university':     { currency: 'JPY', basis: 'tuition', min: 1194000, max: 1194000, note: 'ILA tuition and facilities fee for 2027 entry' },
    'kyoto-university-advanced-science': { currency: 'JPY', basis: 'tuition', min: 2045000, max: 2045000, note: 'School fees from the 2027 academic year' },
    'tokyo-international-university': { currency: 'JPY', basis: 'tuition', min: 1420000, max: 1720000, note: 'E-Track tuition plus the operations fee, by major' },
    'handong-global-university': { currency: 'KRW', basis: 'tuition', min: 6342000, max: 8136000, note: 'Two semesters at the Fall 2025 rates, by area of study' },
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
    'duke-university':         { currency: 'USD', basis: 'total', min: 98549, max: 98549 },
    'vanderbilt-university':   { currency: 'USD', basis: 'total', min: 99994, max: 99994 },
    'rice-university':         { currency: 'USD', basis: 'total', min: 92654, max: 92654, note: 'Tuition, fees, room and board' },
    'northwestern-university': { currency: 'USD', basis: 'total', min: 96003, max: 96003, note: 'Tuition, fees, room and board' },
    'university-of-chicago':   { currency: 'USD', basis: 'total', min: 98301, max: 98676, note: '2025-26 figures, the latest published' },
    'johns-hopkins-university':{ currency: 'USD', basis: 'total', min: 95000, max: 95000 },
    'washington-university-in-st-louis': { currency: 'USD', basis: 'total', min: 105183, max: 105183, note: 'The figure WashU uses for visa documents; living costs cover 12 months' },
    'emory-university':        { currency: 'USD', basis: 'total', min: 97948, max: 97948 },
    'tufts-university':        { currency: 'USD', basis: 'total', min: 97152, max: 99998 },
    'university-of-richmond':  { currency: 'USD', basis: 'total', min: 92320, max: 92320 },
    'swarthmore-college':      { currency: 'USD', basis: 'total', min: 95770, max: 95770, note: 'Billed charges; travel and personal expenses extra' },
    'pomona-college':          { currency: 'USD', basis: 'total', min: 95670, max: 95670 },
    'wellesley-college':       { currency: 'USD', basis: 'total', min: 96136, max: 98186 },
    'middlebury-college':      { currency: 'USD', basis: 'total', min: 94386, max: 94386 },
    'colby-college':           { currency: 'USD', basis: 'total', min: 95270, max: 98270 },
    'davidson-college':        { currency: 'USD', basis: 'total', min: 95995, max: 98795, note: 'International first-year budget; health insurance adds $2,800' },
    'grinnell-college':        { currency: 'USD', basis: 'total', min: 93338, max: 94338 },
    'vassar-college':          { currency: 'USD', basis: 'total', min: 96960, max: 96960 },
    'hamilton-college':        { currency: 'USD', basis: 'total', min: 95250, max: 98850 },
    'haverford-college':       { currency: 'USD', basis: 'total', min: 100026, max: 100026 },
    'caltech':                 { currency: 'USD', basis: 'total', min: 98622, max: 98622 },
    'carnegie-mellon-university': { currency: 'USD', basis: 'total', min: 89352, max: 92445, note: 'Tuition, housing and meals; health insurance adds $3,093' },
    'georgetown-university':   { currency: 'USD', basis: 'tuition', min: 74731, max: 74731, note: 'Tuition and fees; housing and food extra' },
    'university-of-southern-california': { currency: 'USD', basis: 'tuition', min: 81523, max: 81523, note: 'Tuition, fees and insurance; housing and food extra' },
    'boston-university':       { currency: 'USD', basis: 'total', min: 98419, max: 98419 },
    'boston-college':          { currency: 'USD', basis: 'total', min: 95258, max: 95258 },
    'case-western-reserve-university': { currency: 'USD', basis: 'total', min: 93435, max: 93435, note: 'Billed charges; books, travel and personal expenses extra' },
    'university-of-rochester': { currency: 'USD', basis: 'total', min: 93076, max: 93076, note: 'Tuition, housing and food' },
    'tulane-university':       { currency: 'USD', basis: 'total', min: 95674, max: 99055, note: 'Upper figure includes student health insurance' },
    'mount-holyoke-college':   { currency: 'USD', basis: 'total', min: 92774, max: 93046 },
    'bryn-mawr-college':       { currency: 'USD', basis: 'total', min: 97547, max: 97547 },
    'barnard-college':         { currency: 'USD', basis: 'total', min: 98850, max: 100050, note: 'Billed costs; upper figure adds books' },
    'bates-college':           { currency: 'USD', basis: 'total', min: 94560, max: 94560 },
    'wesleyan-university':     { currency: 'USD', basis: 'total', min: 98330, max: 100780 },
    'washington-and-lee-university': { currency: 'USD', basis: 'total', min: 99880, max: 99880 },
    'carleton-college':        { currency: 'USD', basis: 'total', min: 99580, max: 99580, note: '2025-26 figure, the latest published' },
    'oberlin-college':         { currency: 'USD', basis: 'total', min: 90000, max: 90000, note: '2025-26 expected support, the latest published' },
    'kenyon-college':          { currency: 'USD', basis: 'total', min: 93090, max: 96940 },
    'denison-university':      { currency: 'USD', basis: 'total', min: 92900, max: 92900, note: '2025-26 figure, the latest published' },
    'franklin-and-marshall-college': { currency: 'USD', basis: 'total', min: 97041, max: 97041 },
    'lehigh-university':       { currency: 'USD', basis: 'total', min: 93400, max: 93400 },
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
