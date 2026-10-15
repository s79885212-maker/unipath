/* ============================================================
   Data for the "Find my match" page.

   annualCost — one comparable yearly figure per university, taken
   from the costs already published in its profile (data/universities.*.js
   and data/admission-profiles.js). Update it together with the profile.
     basis: 'total'   → the full yearly budget (cost of attendance) the
                        university publishes; the profile must carry the
                        same budget, and the tests check that it does
            'billed'  → what the university itself charges for a year:
                        tuition, fees and, where stated, housing and food.
                        Books, travel, personal costs and insurance are extra
            'tuition' → tuition (and compulsory fees) only; living costs extra
     min/max: range when the price depends on the programme
     example: true → the only published figure is one programme's fee
     A university whose main costs are covered by aid every admitted
     student receives (Berea, Deep Springs) has NO row here: a cost of zero
     is not a published figure. The match page reads what is covered and what
     remains from the profile (costs.afterAid) and never calls a budget
     sufficient for it.
     calc: the figure is not printed by the university as it stands —
           'two-semesters' = twice the published flat full-time charge of one
           semester; 'lines' = the sum of the lines of a table that prints no
           total. The match page says so next to the figure.
     Required costs a university leaves OUT of its published total (for
     example compulsory health insurance) are not repeated here: the match
     page reads them from the profile (costs.extras) and adds them before a
     budget is called sufficient.
   A university missing here has no published yearly figure; the page
   says so rather than guessing.

   rates — European Central Bank euro reference rates (1 EUR = x),
   used only to put different currencies side by side approximately.
   ============================================================ */
window.UNIPATH.match = {
  rates: {
    date: '2026-10-14',
    source: 'European Central Bank euro reference rates',
    url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html',
    perEUR: { EUR: 1, USD: 1.1195, CAD: 1.5918, GBP: 0.84385, JPY: 177.39, KRW: 1496.54 }
  },
  annualCost: {

    /* Canada, October 2026 */
    'university-of-toronto': { currency: 'CAD', basis: 'tuition', min: 50490, max: 72860, note: 'Tuition 2026–27 by programme (Music to Engineering); fees, UHIP, housing and food extra' },
    'university-of-british-columbia': { currency: 'CAD', basis: 'tuition', min: 48779.8, max: 66678.3, note: 'Vancouver tuition 2026/27 for a first-year course load; fees, insurance, housing and food extra' },
    'mcgill-university': { currency: 'CAD', basis: 'tuition', min: 57646.94, max: 75395.74, note: 'Tuition, required fees and international health insurance 2026–27 (B.A. to B.Com.); housing and food extra' },
    'university-of-alberta': { currency: 'CAD', basis: 'tuition', min: 39232.8, max: 49952.4, note: 'Guaranteed Fall 2026 tuition (BA to engineering); fees, housing and food extra' },
    'mcmaster-university': { currency: 'CAD', basis: 'tuition', min: 45158.4, max: 69353.54, note: 'University estimate of 2026/27 tuition by programme; ancillary fees, housing and food extra' },
    'universite-de-montreal': { currency: 'CAD', basis: 'tuition', min: 30772.8, max: 30772.8, note: 'Tuition 2026–27 for 30 credits, before other fees and before any exemption' },
    'university-of-waterloo': { currency: 'CAD', basis: 'tuition', min: 51000, max: 75000, note: 'University estimate of 2026–27 tuition and incidental fees by programme; housing and food extra' },
    'university-of-ottawa': { currency: 'CAD', calc: 'two-semesters', basis: 'tuition', min: 43335.08, max: 63164.3, note: 'Two terms at the 2026–27 per-term rates — calculated by UniPath, not printed by the university; before the C$15,000 entrance scholarship' },
    'university-of-calgary': { currency: 'CAD', basis: 'total', min: 43081.8, max: 52582.8, note: 'University estimator, two terms 2026–27: tuition, general fees, residence and meal plan (Arts to Engineering); books extra' },
    'texas-a-and-m-university': { currency: 'USD', calc: 'two-semesters', basis: 'total', min: 60215, max: 62272 },
    'marist-university': { currency: 'USD', basis: 'total', min: 76875, max: 76875 },
    'xavier-university-of-louisiana': { currency: 'USD', calc: 'two-semesters', basis: 'billed', min: 41427, max: 43492 },
    'drew-university': { currency: 'USD', basis: 'tuition', min: 49550, max: 49550 },
    'goucher-college': { currency: 'USD', calc: 'two-semesters', basis: 'billed', min: 75660, max: 75660, note: 'Two semesters at the published full-time rates — calculated by UniPath, not printed by the university' },
    'lesley-university': { currency: 'USD', calc: 'two-semesters', basis: 'billed', min: 59820, max: 59820, note: 'Two semesters at the published full-time rates — calculated by UniPath, not printed by the university' },
    'mcdaniel-college': { currency: 'USD', calc: 'lines', basis: 'total', min: 77079, max: 77079, note: 'The sum of the lines of the first-year on-campus column; the page prints no total' },
    'morehouse-college': { currency: 'USD', basis: 'total', min: 59430, max: 59430 },
    'worcester-polytechnic-institute': { currency: 'USD', basis: 'total', min: 87570, max: 87570 },
    'santa-clara-university': { currency: 'USD', basis: 'total', min: 92556, max: 92556 },
    'southern-methodist-university': { currency: 'USD', basis: 'total', min: 96388, max: 96388 },
    'stony-brook-university': { currency: 'USD', basis: 'total', min: 58799, max: 58799 },
    'temple-university': { currency: 'USD', basis: 'total', min: 64384, max: 73552, note: 'Two colleges printed as examples; other colleges have their own rates' },
    'the-new-school': { currency: 'USD', calc: 'two-semesters', basis: 'tuition', min: 63806, max: 63806, note: 'Two semesters at the published full-time rates — calculated by UniPath, not printed by the university' },

    /* United States expansion, October 2026 */
    'rollins-college': { currency: 'USD', basis: 'total', min: 87820, max: 87820 },
    'umass-amherst': { currency: 'USD', basis: 'total', min: 69465, max: 69465 },
    'university-of-minnesota-twin-cities': { currency: 'USD', basis: 'total', min: 67085, max: 67085 },
    'university-of-oregon': { currency: 'USD', basis: 'total', min: 71256, max: 71256 },
    'university-of-oklahoma': { currency: 'USD', basis: 'total', min: 56311, max: 56311 },
    'west-virginia-university': { currency: 'USD', basis: 'tuition', min: 32256, max: 32256 },
    'anderson-university-indiana': { currency: 'USD', basis: 'billed', min: 52620, max: 52620 },

    /* United States expansion, October 2026 */
    'gonzaga-university': { currency: 'USD', basis: 'billed', min: 76670, max: 76670 },
    'cornell-college': { currency: 'USD', basis: 'total', min: 73578, max: 74778 },
    'savannah-college-of-art-and-design': { currency: 'USD', basis: 'total', min: 68691, max: 68691 },
    'american-university': { currency: 'USD', basis: 'total', min: 87374, max: 87374, note: 'The minimum an international applicant must declare; the page does not name the academic year' },

    /* United States expansion, October 2026 */
    'university-of-san-diego': { currency: 'USD', basis: 'billed', min: 88557, max: 88557 },
    'university-of-washington': { currency: 'USD', basis: 'total', min: 67800, max: 67800, note: 'Non-resident estimate; the page does not name the academic year' },
    'ursinus-college': { currency: 'USD', basis: 'billed', min: 80178, max: 80178 },
    'willamette-university': { currency: 'USD', basis: 'billed', min: 74812, max: 74812 },
    'wofford-college': { currency: 'USD', basis: 'billed', min: 78125, max: 78125 },
    'xavier-university': { currency: 'USD', basis: 'total', min: 74530, max: 74530, note: 'The page does not name the academic year' },
    'hofstra-university': { currency: 'USD', basis: 'billed', min: 81008, max: 81008, note: 'Example based on 2025–26 rates' },
    'rochester-institute-of-technology': { currency: 'USD', basis: 'total', min: 84868, max: 84868 },

    /* United States expansion, October 2026 */
    'st-lawrence-university': { currency: 'USD', basis: 'billed', min: 87965, max: 87965 },
    'university-of-arizona': { currency: 'USD', basis: 'total', min: 67770, max: 67770, note: 'Non-resident estimate; the page does not name the academic year' },
    'university-of-iowa': { currency: 'USD', basis: 'total', min: 53042, max: 53042, note: 'International students, Liberal Arts & Sciences; other colleges cost up to $56,916' },
    'unc-chapel-hill': { currency: 'USD', basis: 'tuition', min: 49593, max: 49593 },
    'university-of-denver': { currency: 'USD', basis: 'total', min: 91526, max: 91526 },

    /* United States expansion, October 2026 */
    'agnes-scott-college': { currency: 'USD', basis: 'billed', min: 67935, max: 67935 },
    'allegheny-college': { currency: 'USD', basis: 'billed', min: 74664, max: 74664 },
    'bentley-university': { currency: 'USD', basis: 'total', min: 94270, max: 94270, note: 'First-year international students, with the required health insurance' },
    'illinois-wesleyan-university': { currency: 'USD', basis: 'total', min: 78514, max: 78514, note: '2025–26 projected budget, the latest published' },
    'iowa-state-university': { currency: 'USD', basis: 'total', min: 50960, max: 50960, note: 'The required medical insurance plan is not in this total' },
    'lake-forest-college': { currency: 'USD', basis: 'billed', min: 74702, max: 74702 },
    'muhlenberg-college': { currency: 'USD', basis: 'total', min: 87696, max: 87696 },
    'pitzer-college': { currency: 'USD', basis: 'total', min: 96706, max: 96706 },
    'seattle-university': { currency: 'USD', basis: 'total', min: 82726, max: 82726, note: 'The page does not name the academic year' },
    'spelman-college': { currency: 'USD', basis: 'total', min: 61683, max: 61683 },

    /* United States expansion, October 2026 */
    'providence-college': { currency: 'USD', basis: 'billed', min: 88170, max: 88170 },
    'rensselaer-polytechnic-institute': { currency: 'USD', basis: 'total', min: 90076, max: 90076 },
    'scripps-college': { currency: 'USD', basis: 'total', min: 97574, max: 98574 },
    'st-johns-college': { currency: 'USD', basis: 'billed', min: 62022, max: 62582, note: 'Annapolis $62,022, Santa Fe $62,582' },
    'sweet-briar-college': { currency: 'USD', basis: 'billed', min: 48300, max: 48300 },
    'university-of-cincinnati': { currency: 'USD', basis: 'total', min: 50830, max: 50830, note: 'The page does not name the academic year' },
    'villanova-university': { currency: 'USD', basis: 'total', min: 96886, max: 96886 },
    'washington-and-jefferson-college': { currency: 'USD', basis: 'billed', min: 47038, max: 47038 },
    'westminster-college-pennsylvania': { currency: 'USD', basis: 'billed', min: 56210, max: 56210 },

    /* United States expansion, October 2026 */
    'indiana-university-indianapolis': { currency: 'USD', basis: 'total', min: 56258, max: 56258, note: 'Nine months, international student estimate with health insurance' },
    'ithaca-college': { currency: 'USD', basis: 'total', min: 83020, max: 83020 },
    'loyola-university-chicago': { currency: 'USD', basis: 'billed', min: 77082, max: 77082 },
    'loyola-university-maryland': { currency: 'USD', basis: 'billed', min: 81440, max: 81440 },
    'occidental-college': { currency: 'USD', basis: 'total', min: 95365, max: 95365, note: 'Travel and health insurance ($4,062 unless waived) are not in this total' },
    'ohio-wesleyan-university': { currency: 'USD', basis: 'billed', min: 71922, max: 71922 },

    /* United States expansion, October 2026 */
    'fairfield-university': { currency: 'USD', basis: 'billed', min: 82945, max: 82945 },
    'olin-college-of-engineering': { currency: 'USD', basis: 'total', min: 97088, max: 97088, note: 'Before the $10,000 Olin Tuition Scholarship every admitted student receives' },
    'georgia-institute-of-technology': { currency: 'USD', basis: 'total', min: 56194, max: 56194, note: 'Estimate for 2027–2028, out-of-country rate' },
    'adelphi-university': { currency: 'USD', basis: 'tuition', min: 52110, max: 52110 },
    'harvey-mudd-college': { currency: 'USD', basis: 'total', min: 104512, max: 104512, note: 'Transportation and the required health insurance plan are not in this total' },
    'hendrix-college': { currency: 'USD', basis: 'total', min: 61880, max: 61880 },
    'hobart-and-william-smith-colleges': { currency: 'USD', basis: 'billed', min: 87082, max: 87082 },
    'howard-university': { currency: 'USD', basis: 'total', min: 66182, max: 66182 },
    'illinois-institute-of-technology': { currency: 'USD', basis: 'billed', min: 73596, max: 73596 },

    /* United States expansion, October 2026 */
    'babson-college': { currency: 'USD', basis: 'total', min: 86966, max: 86966 },
    'berklee-college-of-music': { currency: 'USD', basis: 'total', min: 85817, max: 85817 },
    'chapman-university': { currency: 'USD', basis: 'total', min: 94376, max: 94376 },
    'william-and-mary': { currency: 'USD', basis: 'total', min: 75652, max: 75652, note: 'Out-of-state rate' },
    'depaul-university': { currency: 'USD', basis: 'tuition', min: 48180, max: 48180 },
    'depauw-university': { currency: 'USD', basis: 'billed', min: 80120, max: 80120 },
    'eckerd-college': { currency: 'USD', basis: 'billed', min: 70668, max: 70668 },
    'elmira-college': { currency: 'USD', basis: 'billed', min: 55530, max: 55530 },
    'endicott-college': { currency: 'USD', basis: 'total', min: 66582, max: 66582 },

    /* United States expansion, October 2026 */
    'bard-college': { currency: 'USD', basis: 'billed', min: 93472, max: 93472 },
    'bennington-college': { currency: 'USD', basis: 'billed', min: 95500, max: 95500, note: 'International students, with the health insurance estimate' },
    'claremont-mckenna-college': { currency: 'USD', basis: 'total', min: 101990, max: 101990 },
    'kalamazoo-college': { currency: 'USD', basis: 'billed', min: 80111, max: 80111 },
    'reed-college': { currency: 'USD', basis: 'total', min: 92198, max: 93948, note: '2025–26 figures, the latest published' },
    'sarah-lawrence-college': { currency: 'USD', basis: 'total', min: 102364, max: 102364, note: 'International students; health insurance is included in this total' },

    /* Added 2026-09-23 with the new universities — only where an annual figure
       is confirmed on the university's own pages. */
    'university-of-bristol':   { currency: 'GBP', basis: 'tuition', min: 25500, max: 33400, note: 'Most courses; medicine, dentistry and veterinary science cost more' },
    'university-of-glasgow':   { currency: 'GBP', basis: 'tuition', min: 28275, max: 33708 },
    'university-of-st-andrews':{ currency: 'GBP', basis: 'tuition', min: 33250, max: 33250 },
    'university-of-sheffield': { currency: 'GBP', basis: 'tuition', min: 27650, max: 34670 },
    'university-of-aberdeen':  { currency: 'GBP', basis: 'tuition', min: 24800, max: 24800, note: 'Published tuition before the Aberdeen Global Scholarship; no award is subtracted here' },
    'bard-college-berlin':     { currency: 'EUR', basis: 'billed', min: 27500, max: 38250, note: 'Comprehensive fee; the higher figure includes housing and weekday meals' },
    'berlin-international-university': { currency: 'EUR', basis: 'tuition', min: 8380, max: 9280, note: 'Non-EU rate, two semesters; a one-time €750 registration fee and the transportation ticket are extra' },
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
    'queens-university-belfast': { currency: 'GBP', basis: 'tuition', min: 24600, max: 28500, note: '2027/28 classroom and laboratory fee rates; pre-clinical medicine is £39,990' },
    'university-of-exeter':    { currency: 'GBP', basis: 'tuition', min: 25700, max: 32150, note: 'Autumn 2027 subject-area rates; BMBS Medicine is £49,300' },
    'university-of-bath':      { currency: 'GBP', basis: 'tuition', min: 26150, max: 32950, note: '2027 fee bands' },
    'university-of-southampton': { currency: 'GBP', basis: 'tuition', min: 26800, max: 35900, note: 'Published course fee table; the clinical years of medicine are £64,900' },
    'university-of-liverpool': { currency: 'GBP', basis: 'tuition', min: 27000, max: 27000, note: 'BSc Economics example; each course is priced separately' },
    'queen-mary-university-of-london': { currency: 'GBP', basis: 'tuition', min: 30950, max: 30950, note: 'BSc Economics example for September 2027; each course is priced separately' },
    'newcastle-university':    { currency: 'GBP', basis: 'tuition', min: 25750, max: 25750, note: 'BSc Economics example for 2027 entry; each course is priced separately' },
    'university-of-leeds':     { currency: 'GBP', basis: 'tuition', min: 29000, max: 29000, note: 'BSc Economics example for 2027/28; each course is priced separately' },
    'lancaster-university':    { currency: 'GBP', basis: 'tuition', min: 27100, max: 27100, note: 'BSc Economics example for 2027/28; each course is priced separately' },
    'cardiff-university':      { currency: 'GBP', basis: 'tuition', min: 25450, max: 25450, note: 'BSc Economics example for 2027 entry; each course is priced separately' },
    'iu-international-university': { currency: 'EUR', basis: 'tuition', min: 6273, max: 8500, note: 'Programme price spread over three years; the lower figure applies with the advertised discounts' },
    'srh-berlin-university':   { currency: 'EUR', basis: 'tuition', min: 9000, max: 10200, note: 'EU monthly rate versus the non-EU per-semester rate in Berlin' },
    'university-of-europe-applied-sciences': { currency: 'EUR', basis: 'tuition', min: 6662, max: 6662, note: 'Published starting rate for bachelor programmes' },
    'gisma-university':        { currency: 'EUR', basis: 'tuition', min: 13825, max: 13825, note: '2026 intakes, per year' },
    'escp-berlin':             { currency: 'EUR', basis: 'tuition', min: 20800, max: 26800, note: 'Tuition plus the annual service and registration fee; the higher figure is the non-European rate for 2027' },
    'berlin-school-business-innovation': { currency: 'EUR', basis: 'tuition', min: 10425, max: 10425, note: 'Published list price before the advertised discounts' },
    'postech':                 { currency: 'KRW', basis: 'tuition', min: 0, max: 0, note: 'Full tuition waiver for every student admitted through International Admissions' },
    'unist':                   { currency: 'KRW', basis: 'tuition', min: 0, max: 0, note: 'Fully waived for new international students; published tuition is ₩3,316,500 a semester for engineering' },
    'kyung-hee-university':    { currency: 'KRW', basis: 'tuition', min: 9954800, max: 13436800, note: 'Two semesters at the 2026 Fall rates printed in the Spring 2027 guide (\u20a94,977,400\u2013\u20a96,718,400 each); 2027 rates are not confirmed' },
    'chonnam-national-university': { currency: 'KRW', basis: 'tuition', min: 3674000, max: 4872000, note: 'Two semesters of tuition by college (\u20a91,837,000\u2013\u20a92,436,000 each); the table does not state its year' },
    'dgist':                   { currency: 'KRW', basis: 'tuition', min: 0, max: 0, note: 'Fully waived for all international students; published tuition is ₩7,934,000 a year' },
    'ajou-university':         { currency: 'KRW', basis: 'tuition', min: 7496000, max: 9832000, note: 'Two semesters at the published per-college rates, before any scholarship' },
    /* United States — added with the October 2026 expansion */
    'union-college': { currency: 'USD', basis: 'billed', min: 92610, max: 92610, note: 'Billed charges; books, travel and personal expenses extra' },
    'skidmore-college': { currency: 'USD', basis: 'billed', min: 93260, max: 93260, note: 'Billed charges; books, travel and personal expenses extra' },
    'trinity-college-hartford': { currency: 'USD', basis: 'total', min: 98480, max: 98480, note: 'Travel and loan fees are extra' },
    'connecticut-college': { currency: 'USD', basis: 'total', min: 94800, max: 94800 },
    'dickinson-college': { currency: 'USD', basis: 'total', min: 93706, max: 93706 },
    'gettysburg-college': { currency: 'USD', basis: 'total', min: 92810, max: 92810 },
    'bucknell-university': { currency: 'USD', basis: 'total', min: 97716, max: 97716 },
    'college-of-the-holy-cross': { currency: 'USD', basis: 'billed', min: 91740, max: 91740, note: 'Billed charges; books, travel and personal expenses extra' },
    /* From section G1 of the 2025–26 Common Data Sets (charges for 2026–2027) */
    'williams-college': { currency: 'USD', basis: 'billed', min: 95960, max: 95960, note: 'Tuition, required fees and on-campus food and housing; books, travel and personal expenses extra' },
    'brandeis-university': { currency: 'USD', basis: 'billed', min: 94388, max: 94388, note: 'Tuition, required fees and on-campus food and housing; books, travel and personal expenses extra' },
    'smith-college': { currency: 'USD', basis: 'billed', min: 95288, max: 95288, note: 'Tuition, required fees and on-campus food and housing; books, travel and personal expenses extra' },
    'colgate-university': { currency: 'USD', basis: 'billed', min: 92838, max: 92838, note: 'Tuition, required fees and on-campus food and housing; books, travel and personal expenses extra' },
    'macalester-college': { currency: 'USD', basis: 'billed', min: 87338, max: 87338, note: 'Tuition, required fees and on-campus food and housing; books, travel and personal expenses extra' },
    'lafayette-college': { currency: 'USD', basis: 'billed', min: 92492, max: 92492, note: 'Tuition, required fees and on-campus food and housing; books, travel and personal expenses extra' },
    'university-of-miami': { currency: 'USD', basis: 'billed', min: 94700, max: 94700, note: 'Tuition, required fees and on-campus food and housing; books, travel and personal expenses extra' },
    'rhodes-college': { currency: 'USD', basis: 'billed', min: 77856, max: 77856, note: 'Billed charges; books, travel and personal expenses extra' },
    'sewanee-university-of-the-south': { currency: 'USD', basis: 'billed', min: 78210, max: 78210, note: 'Comprehensive fee; international students should budget roughly $6,000 more' },
    'centre-college': { currency: 'USD', basis: 'billed', min: 73990, max: 73990, note: 'Billed charges; books, travel and personal expenses extra' },
    'college-of-wooster': { currency: 'USD', basis: 'billed', min: 82340, max: 82340, note: 'Billed charges; books, travel and personal expenses extra' },
    'st-olaf-college': { currency: 'USD', basis: 'billed', min: 81200, max: 81200, note: 'Billed charges; books, travel and personal expenses extra' },
    'knox-college': { currency: 'USD', basis: 'total', min: 78217, max: 78217 },
    'beloit-college': { currency: 'USD', basis: 'total', min: 83620, max: 83620 },
    'lawrence-university': { currency: 'USD', basis: 'billed', min: 75558, max: 75558, note: 'Billed charges; books, travel and personal expenses extra' },
    'earlham-college': { currency: 'USD', basis: 'billed', min: 73526, max: 73526, note: 'Billed charges; books, travel and personal expenses extra' },
    'whitman-college': { currency: 'USD', basis: 'total', min: 86620, max: 86620 },
    'soka-university-of-america': { currency: 'USD', basis: 'total', min: 63674, max: 63674 },
    'clark-university': { currency: 'USD', basis: 'billed', min: 77570, max: 77570, note: 'Billed charges; books, travel and personal expenses extra' },
    'northeastern-university': { currency: 'USD', basis: 'total', min: 98322, max: 98322 },
    'drexel-university': { currency: 'USD', basis: 'billed', min: 84896, max: 84896, note: 'Billed charges; books, travel and personal expenses extra' },
    'syracuse-university': { currency: 'USD', basis: 'total', min: 100526, max: 100526 },
    'texas-christian-university': { currency: 'USD', basis: 'billed', min: 86090, max: 86090, note: 'Estimated direct costs; travel and personal expenses extra' },
    'pepperdine-university': { currency: 'USD', basis: 'total', min: 99258, max: 99258 },
    'colorado-college': { currency: 'USD', basis: 'total', min: 97990, max: 97990, note: 'Health insurance is extra' },
    'trinity-university': { currency: 'USD', basis: 'total', min: 77846, max: 77846 },
    'fordham-university': { currency: 'USD', basis: 'total', min: 102188, max: 102188, note: 'Rose Hill, living on campus' },
    'furman-university': { currency: 'USD', basis: 'total', min: 84926, max: 84926 },
    'ucla': { currency: 'USD', basis: 'total', min: 84770, max: 84770, note: 'Nonresident, living in residence halls' },
    'university-of-virginia': { currency: 'USD', basis: 'total', min: 83286, max: 84976, note: 'First-year non-Virginian, College of Arts and Sciences' },
    'university-of-florida': { currency: 'USD', basis: 'total', min: 54010, max: 54010, note: 'Out-of-state budget' },
    'florida-state-university': { currency: 'USD', basis: 'total', min: 43916, max: 43916, note: 'Out-of-state, on campus' },
    'michigan-state-university': { currency: 'USD', basis: 'total', min: 70725, max: 70725, note: 'International first-year estimate at 2025–26 rates' },
    'purdue-university': { currency: 'USD', basis: 'billed', min: 48838, max: 48838, note: 'International tuition, fees, housing and food; books and personal expenses extra' },
    'ohio-state-university': { currency: 'USD', basis: 'total', min: 68054, max: 68054, note: 'International, living on campus' },
    'foothill-college': { currency: 'USD', basis: 'total', min: 27189, max: 27189, note: 'Three quarters, including housing and insurance' },
    'de-anza-college': { currency: 'USD', basis: 'total', min: 27189, max: 27189, note: 'Three quarters, including housing and insurance' },
    'santa-monica-college': { currency: 'USD', basis: 'total', min: 34000, max: 34000, note: 'The college’s own estimate for two semesters' },
    'sinclair-community-college': { currency: 'USD', basis: 'total', min: 17500, max: 17500, note: 'The college’s own estimate; the bank document must show $20,000' },
    'green-river-college': { currency: 'USD', basis: 'total', min: 23475, max: 23475, note: 'Three terms, including living expenses' },
    /* Added with the October 2026 expansion — tuition only */
    'university-of-sussex': { currency: 'GBP', basis: 'tuition', min: 24200, max: 24200, note: 'BSc Economics example for September 2027; each course is priced separately' },
    'university-of-strathclyde': { currency: 'GBP', basis: 'tuition', min: 23200, max: 23200, note: 'BA Economics example for 2027/28; each course is priced separately' },
    'technische-hochschule-ingolstadt': { currency: 'EUR', basis: 'tuition', min: 1600, max: 1600, note: 'Two semesters at €800 for students from outside the EU/EEA; the student union fee is extra' },
    'kuehne-logistics-university': { currency: 'EUR', basis: 'tuition', min: 15800, max: 17700, note: 'Two semesters; the higher figure is the intensive track' },
    'dongseo-university': { currency: 'KRW', basis: 'tuition', min: 8333000, max: 8333000, note: 'First year for the English-track majors open to first-year applicants (engineering and arts fields): first semester plus one later semester' },
    'suny-korea': { currency: 'USD', basis: 'tuition', min: 23550, max: 23550, note: 'Two semesters at the Fall 2026 rate of $11,775 for students from outside New York State; course fees and the dormitory are extra' },
    'yamanashi-gakuin-university': { currency: 'JPY', basis: 'tuition', min: 1696000, max: 1896000, note: 'Tuition and facility fee; the higher figure is the first year with the enrolment fee. Residence hall and meals add about ¥1,000,000 a year' },
    /* United States — cost of attendance for 2026–27 */
    'harvard-university':      { currency: 'USD', basis: 'total', min: 95134, max: 100134 },
    'new-york-university':     { currency: 'USD', basis: 'total', min: 100998, max: 100998, note: 'College of Arts & Science estimate; tuition varies by school' },
    'university-of-alabama':   { currency: 'USD', basis: 'total', min: 60400, max: 60400, note: 'Out-of-state, on campus' },
    'university-of-michigan':  { currency: 'USD', basis: 'total', min: 89394, max: 89394, note: 'International first-year; tuition varies by programme and year' },
    'mit':                     { currency: 'USD', basis: 'total', min: 92760, max: 92760 },
    'yale-university':         { currency: 'USD', basis: 'total', min: 97985, max: 97985 },
    'arizona-state-university':{ currency: 'USD', basis: 'total', min: 69906, max: 69906 },
    'uc-berkeley':             { currency: 'USD', basis: 'total', min: 93944, max: 93944, note: 'New nonresident student in a residence hall: the published resident total plus the nonresident supplemental tuition' },
    'princeton-university':    { currency: 'USD', basis: 'billed', min: 90574, max: 90574, note: 'Average before aid' },
    'brown-university':        { currency: 'USD', basis: 'billed', min: 97016, max: 97016, note: 'Billed charges; books, travel and personal expenses extra' },
    'dartmouth-college':       { currency: 'USD', basis: 'total', min: 98427, max: 98427 },
    'columbia-university':     { currency: 'USD', basis: 'tuition', min: 72800, max: 72800 },
    'university-of-pennsylvania': { currency: 'USD', basis: 'billed', min: 94582, max: 94582 },
    'cornell-university':      { currency: 'USD', basis: 'billed', min: 95294, max: 95294, note: 'Tuition plus average housing and dining' },
    'stanford-university':     { currency: 'USD', basis: 'billed', min: 90675, max: 90675, note: 'Tuition plus standard room and board' },
    'amherst-college':         { currency: 'USD', basis: 'billed', min: 96360, max: 96360 },
    'bowdoin-college':         { currency: 'USD', basis: 'billed', min: 95400, max: 95400 },
    'university-of-notre-dame':{ currency: 'USD', basis: 'billed', min: 88786, max: 88786, note: 'Basic fee for students living on campus' },
    'duke-university':         { currency: 'USD', basis: 'total', min: 98549, max: 98549 },
    'vanderbilt-university':   { currency: 'USD', basis: 'total', min: 99994, max: 99994 },
    'rice-university':         { currency: 'USD', basis: 'billed', min: 92654, max: 92654, note: 'Tuition, fees, room and board' },
    'northwestern-university': { currency: 'USD', basis: 'billed', min: 96003, max: 96003, note: 'Tuition, fees, room and board' },
    'university-of-chicago':   { currency: 'USD', basis: 'total', min: 103821, max: 103821 },
    'johns-hopkins-university':{ currency: 'USD', basis: 'total', min: 95000, max: 95000 },
    'washington-university-in-st-louis': { currency: 'USD', basis: 'total', min: 105183, max: 105183, note: 'The figure WashU uses for visa documents; living costs cover 12 months' },
    'emory-university':        { currency: 'USD', basis: 'total', min: 97948, max: 97948 },
    'tufts-university':        { currency: 'USD', basis: 'billed', min: 97152, max: 97152 },
    'university-of-richmond':  { currency: 'USD', basis: 'total', min: 92320, max: 92320 },
    'swarthmore-college':      { currency: 'USD', basis: 'billed', min: 95770, max: 95770, note: 'Billed charges; travel and personal expenses extra' },
    'pomona-college':          { currency: 'USD', basis: 'billed', min: 95670, max: 95670 },
    'wellesley-college':       { currency: 'USD', basis: 'billed', min: 96136, max: 96136 },
    'middlebury-college':      { currency: 'USD', basis: 'billed', min: 94386, max: 94386 },
    'colby-college':           { currency: 'USD', basis: 'billed', min: 95270, max: 95270 },
    'davidson-college':        { currency: 'USD', basis: 'total', min: 95995, max: 95995 },
    'grinnell-college':        { currency: 'USD', basis: 'total', min: 94338, max: 94338 },
    'vassar-college':          { currency: 'USD', basis: 'billed', min: 96960, max: 96960 },
    'hamilton-college':        { currency: 'USD', basis: 'billed', min: 95250, max: 95250 },
    'haverford-college':       { currency: 'USD', basis: 'total', min: 100026, max: 100026 },
    'caltech':                 { currency: 'USD', basis: 'total', min: 98622, max: 98622 },
    'carnegie-mellon-university': { currency: 'USD', basis: 'billed', min: 89352, max: 89352 },
    'georgetown-university':   { currency: 'USD', basis: 'tuition', min: 74731, max: 74731, note: 'Tuition and fees; housing and food extra' },
    'university-of-southern-california': { currency: 'USD', basis: 'tuition', min: 81523, max: 81523, note: 'Tuition, fees and insurance; housing and food extra' },
    'boston-university':       { currency: 'USD', basis: 'total', min: 98419, max: 98419 },
    'boston-college':          { currency: 'USD', basis: 'total', min: 95258, max: 95258 },
    'case-western-reserve-university': { currency: 'USD', basis: 'billed', min: 93435, max: 93435, note: 'Billed charges; books, travel and personal expenses extra' },
    'university-of-rochester': { currency: 'USD', basis: 'billed', min: 93076, max: 93076, note: 'Tuition, housing and food' },
    'tulane-university':       { currency: 'USD', basis: 'billed', min: 95674, max: 95674 },
    'mount-holyoke-college':   { currency: 'USD', basis: 'billed', min: 93046, max: 93046 },
    'bryn-mawr-college':       { currency: 'USD', basis: 'total', min: 97547, max: 97547 },
    'barnard-college':         { currency: 'USD', basis: 'billed', min: 98850, max: 98850 },
    'bates-college':           { currency: 'USD', basis: 'billed', min: 94560, max: 94560 },
    'wesleyan-university':     { currency: 'USD', basis: 'billed', min: 98330, max: 98330 },
    'washington-and-lee-university': { currency: 'USD', basis: 'total', min: 99880, max: 99880 },
    'carleton-college':        { currency: 'USD', basis: 'total', min: 99580, max: 99580, note: '2025-26 figure, the latest published' },
    'oberlin-college':         { currency: 'USD', basis: 'total', min: 90000, max: 90000, note: '2025-26 expected support, the latest published' },
    'kenyon-college':          { currency: 'USD', basis: 'total', min: 95890, max: 96940, note: 'Two official full-cost figures for 2026–27 ($95,890 in the Factbook, $96,940 on the Tuition & Costs page); the comprehensive fee itself is $93,090' },
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
    'constructor-university':  { currency: 'EUR', basis: 'tuition', min: 23850, max: 23850, note: 'Two semesters of €11,925 for 2027/2028; fees, the one-time enrolment fee, housing and meals are extra' },
    'frankfurt-school':        { currency: 'EUR', basis: 'total', min: 39120, max: 39120 }
  }
};
