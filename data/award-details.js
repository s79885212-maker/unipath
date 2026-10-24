/* UniPath — conditions of the largest award, read on the award's own official
   page: whether the award itself asks for a test score, and what renewal
   depends on. Each entry names the page and the day it was read. Merged into
   scholarships.fullRide by UNIPATH.applyLayers (data/registry.js). An award
   without an entry has not had these conditions checked. */
window.UNIPATH.awardDetails = {
  'university-of-alabama': {
    testRequirement: 'Official ACT or SAT scores are needed: Alabama awards its automatic merit scholarships on standardized test scores and GPA.',
    renewalConditions: 'Value of tuition for up to four years or eight semesters.',
    detailsSource: 'https://afford.ua.edu/scholarships/international/', detailsVerified: '2026-10-06' },
  'tulane-university': {
    testRequirement: 'Not required, but Tulane says submitting scores is preferred and may strengthen scholarship consideration.',
    renewalConditions: 'Tulane says most of its scholarships are renewable for four years; each award sets its own criteria.',
    detailsSource: 'https://admission.tulane.edu/tuition-aid/merit-scholarships', detailsVerified: '2026-10-06' },
  'washington-and-lee-university': {
    testRequirement: 'Not required: W&L reviews test scores if supplied, together with the supplemental Johnson Scholarship application and an additional personal statement.',
    detailsSource: 'https://www.wlu.edu/admissions/the-johnson-scholarship', detailsVerified: '2026-10-06' },
  'centre-college': {
    renewalConditions: 'Centre states that all merit, premier and special-interest scholarships renew annually.',
    detailsSource: 'https://www.centre.edu/admission-aid/scholarships-fellowships', detailsVerified: '2026-10-06' },
  'ritsumeikan-apu': {
    renewalConditions: 'Renewal requires passing a review of academic performance and earning the required number of credits each semester.',
    detailsSource: 'https://admissions.apu.ac.jp/costs_scholarships/before_enrollment/', detailsVerified: '2026-10-06' },
  'tokyo-international-university': {
    renewalConditions: 'Valid for up to four years for first-year entrants while the student keeps to the academic requirements and conduct the university sets.',
    detailsSource: 'https://www.tiu.ac.jp/etrack/admissions/reductions/', detailsVerified: '2026-10-06' },
  'st-olaf-college': {
    renewalConditions: 'Not stated on the page read.',
    detailsSource: 'https://wp.stolaf.edu/financialaid/international-student-information/', detailsVerified: '2026-10-06' },
  'ajou-university': {
    tiers: 'Ajou Global Scholarship 1 to 4 for entering students: a tuition waiver of 100%, 70%, 50% or 30% for one semester, tied to TOPIK level 6, 5, 4 or 3, or to IELTS 8.0, 7.0, 6.5 or 5.5 (TOEFL iBT 100, 90, 80 or 75).',
    detailsSource: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/scholarship.do', detailsVerified: '2026-10-07' },
  'incheon-national-university': {
    tiers: 'Merit scholarship for new international students: 70%, 50% or 30% of tuition with TOPIK level 6, 5 or 4, IELTS 7.0, 6.5 or 6.0, or TOEFL iBT 94, 87 or 82. For enrolled students the share follows the previous semester’s GPA, up to 100% of tuition at 4.2 or above.',
    detailsSource: 'https://www.inu.ac.kr/inuengl/8528/subview.do', detailsVerified: '2026-10-07' }
};
/* Records where the official aid pages were read and no award covering full
   tuition or more is described for international students. This is a result,
   not a gap: it is shown as "not described on the pages read", while a record
   whose pages were never read stays "not checked". The reason is in each
   record's own scholarship note. */
window.UNIPATH.awardNotDescribed = [
  'umass-amherst', 'university-of-minnesota-twin-cities', 'university-of-oregon', 'university-of-oklahoma', 'west-virginia-university', 'anderson-university-indiana',
  'gonzaga-university', 'cornell-college', 'the-new-school', 'savannah-college-of-art-and-design',
  'university-of-san-diego', 'ursinus-college', 'willamette-university', 'wofford-college', 'xavier-university', 'xavier-university-of-louisiana', 'rochester-institute-of-technology',
  'stony-brook-university', 'temple-university', 'texas-a-and-m-university', 'university-of-arizona', 'university-of-iowa', 'university-of-denver', 'university-of-maryland',
  'southern-methodist-university',
  'agnes-scott-college', 'allegheny-college', 'bentley-university', 'iowa-state-university', 'lake-forest-college', 'muhlenberg-college', 'pitzer-college', 'santa-clara-university', 'seattle-university', 'spelman-college',
  'rensselaer-polytechnic-institute', 'scripps-college', 'st-johns-college', 'sweet-briar-college', 'villanova-university', 'washington-and-jefferson-college', 'westminster-college-pennsylvania',
  'goucher-college', 'indiana-university-indianapolis', 'ithaca-college', 'lesley-university', 'loyola-university-chicago', 'marist-university', 'mcdaniel-college', 'morehouse-college', 'occidental-college', 'ohio-wesleyan-university',
  'fairfield-university', 'olin-college-of-engineering', 'adelphi-university', 'hendrix-college', 'hobart-and-william-smith-colleges', 'howard-university', 'illinois-institute-of-technology',
  'chapman-university', 'depaul-university', 'dillard-university', 'drew-university', 'eckerd-college', 'elmira-college', 'endicott-college',
  'bennington-college', 'sarah-lawrence-college',
  "new-york-university", "arizona-state-university", "emory-university", "georgetown-university",
  "case-western-reserve-university", "lehigh-university", "union-college", "dickinson-college",
  "gettysburg-college", "bucknell-university", "sewanee-university-of-the-south", "college-of-wooster",
  "knox-college", "earlham-college", "drexel-university", "texas-christian-university",
  "pepperdine-university", "trinity-university", "furman-university", "uc-san-diego",
  "university-of-florida", "florida-state-university", "de-anza-college", "sinclair-community-college",
  "sophia-university", "international-christian-university", "osaka-university", "korea-university",
  "university-of-cambridge", "university-of-edinburgh", "university-of-strathclyde",
  "ajou-university"
];
