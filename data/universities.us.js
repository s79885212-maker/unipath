/* ============================================================
   United States — university records
   Every figure below was read from the official university page
   listed in `sources`. Fields we could not confirm are `null`
   and render as "Not confirmed — check official source".
   ============================================================ */
window.UNIPATH.universities.push(
{
  id: 'harvard-university',
  name: 'Harvard University',
  country: 'us',
  city: 'Cambridge',
  region: 'Massachusetts',
  founded: 1636,
  type: 'Private research university',
  brand: { c1: '#A51C30', c2: '#5c0f1c', initials: 'H' },
  description: 'The oldest university in the United States and one of the best-funded. For international applicants the decisive fact is financial: Harvard evaluates applications without regard to ability to pay and offers international students exactly the same need-based aid as U.S. students.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts'],
  englishTaughtPrograms: ['economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts'],
  programNote: 'Harvard College offers roughly 50 undergraduate concentrations across arts and humanities, social sciences, sciences and engineering. There is no undergraduate business major; economics and applied mathematics are the usual routes into business careers.',
  links: {
    website: 'https://www.harvard.edu/',
    admissions: 'https://college.harvard.edu/admissions',
    internationalAdmissions: 'https://college.harvard.edu/admissions/apply/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://college.harvard.edu/financial-aid',
    financialAid: 'https://college.harvard.edu/financial-aid/how-aid-works',
    programs: 'https://college.harvard.edu/academics/fields-study',
    cost: 'https://college.harvard.edu/financial-aid/how-aid-works/cost-attendance'
  },
  admissions: {
    platforms: ['Common Application (required)', 'Printable paper forms also accepted'],
    deadlines: [
      { name: 'Restrictive Early Action', kind: 'REA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', time: '23:59', timezone: 'applicant’s local time', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding, but restricted: you may not apply early to other private US universities. SAT/ACT results are needed by the end of November. Decisions are released in mid-December.', status: 'confirmed', source: 'https://college.harvard.edu/admissions/apply/application-timeline', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', time: '23:59', timezone: 'applicant’s local time', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions are released at the end of March.', status: 'confirmed', source: 'https://college.harvard.edu/admissions/apply/application-timeline', verified: '2026-09-23', note: null },
      { name: 'Financial aid application — Early Action', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'Early Action applicants asking for aid', conditions: 'Submitting by this date gives aid information when decisions are released in mid-December.', status: 'confirmed', source: 'https://college.harvard.edu/admissions/apply/application-timeline', verified: '2026-09-23', note: null },
      { name: 'Financial aid application — Regular Decision', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-02-01', date: '1 February 2027', binding: false, appliesTo: 'Regular Decision applicants asking for aid', conditions: 'Aid information arrives in late March with the decision.', status: 'confirmed', source: 'https://college.harvard.edu/admissions/apply/application-timeline', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 95, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waiver available on request' },
    documents: [
      'Common Application with personal essay and activities list',
      'Harvard College Questions for the Common Application, including five required short-answer questions',
      'Secondary school transcript and school report',
      'Midyear and final school reports'
    ],
    recommendations: 'Two teacher recommendations, plus the school counsellor / school report',
    essay: 'Common Application personal essay plus five required Harvard short-answer questions',
    interview: null,
    notes: []
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'Harvard does not publish a minimum English test score on its first-year requirements page. Confirm current expectations with the international applicants page before applying.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'SAT or ACT is required.' },
    act: { policy: 'required', note: 'SAT or ACT is required.' },
    otherTests: 'Where the SAT/ACT is genuinely inaccessible, Harvard states the requirement can be met with AP results, IB actual or predicted scores, GCSE/A-Level actual or predicted results, or national leaving-exam results or predictions.',
    internationalQualifications: 'National leaving examinations, A-Levels and IB are explicitly accepted as evidence in place of the SAT/ACT when those tests are not accessible.'
  },
  costs: {
    breakdown: { tuition: 62226, billed: 91634, budget: 95134, budgetText: "$95,134–$100,134", includes: "tuition, fees, housing and food; the full budget adds books, personal expenses, health insurance and travel" },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,134–$100,134 total',
    items: [
      { label: 'Tuition', amount: 62226 },
      { label: 'Fees', amount: 6216 },
      { label: 'Housing', amount: 14250 },
      { label: 'Food', amount: 8942 },
      { label: 'Books', amount: 1000 },
      { label: 'Personal expenses', amount: 2500 },
      { label: 'Travel (varies)', text: '$0 – $5,000' },
      { label: 'Student health insurance (waivable if covered elsewhere)', amount: 4954 }
    ],
    billedSubtotal: 91634,
    totalText: '$95,134 – $100,134',
    note: 'Billed costs (tuition, fees, housing, food) come to $91,634. Health insurance is charged separately unless you are covered by a comparable plan. Families receiving aid pay far less than these figures.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Admission is the hard part — aid is automatic once admitted and assessed as having need. Families earning under $100,000 with typical assets have a zero expected parent contribution.',
      howToApply: 'Apply for financial aid alongside the admission application. There is no separate scholarship competition.',
      note: 'Harvard awards no merit scholarships at all. A "full ride" here means a need-based aid package that reduces the family contribution to zero — it is not a named award.'
    },
    merit: [],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: true,
      needBlindInternational: true,
      forms: ['CSS Profile', 'FAFSA (U.S. citizens and eligible non-citizens)', 'IDOC'],
      deadlines: null,
      note: 'Harvard states: "International students are eligible for exactly the same aid as American students," that aid is based on need and not merit, that "we meet 100 percent of our students\' demonstrated financial need," and that a family\'s need never affects the admission decision. Families earning under $100,000 pay nothing toward the parent contribution; families earning up to $200,000 have at least full tuition covered.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'First-year application requirements', url: 'https://college.harvard.edu/admissions/apply/first-year-applicants' },
    { label: 'How aid works', url: 'https://college.harvard.edu/financial-aid/how-aid-works' },
    { label: 'Cost of attendance 2026–27', url: 'https://college.harvard.edu/financial-aid/how-aid-works/cost-attendance' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'mit',
  name: 'Massachusetts Institute of Technology',
  shortName: 'MIT',
  country: 'us',
  city: 'Cambridge',
  region: 'Massachusetts',
  founded: 1861,
  type: 'Private research university',
  brand: { c1: '#8A8B8C', c2: '#3d4142', initials: 'MIT' },
  description: 'The reference point for science and engineering education worldwide. MIT runs its own application portal rather than the Common Application, still requires the SAT or ACT, and meets 100% of demonstrated financial need.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['computer-science','engineering','mathematics','economics','business','biology','social-sciences','humanities','arts'],
  englishTaughtPrograms: ['computer-science','engineering','mathematics','economics','business','biology','social-sciences','humanities','arts'],
  programNote: 'Undergraduate majors are numbered by course (Course 6 is EECS, Course 15 is Management). Management Science at Sloan is the undergraduate business route.',
  links: {
    website: 'https://www.mit.edu/',
    admissions: 'https://mitadmissions.org/apply/firstyear/',
    internationalAdmissions: 'https://mitadmissions.org/apply/firstyear/international/',
    applicationPortal: 'https://apply.mitadmissions.org/',
    scholarships: 'https://sfs.mit.edu/undergraduate-students/types-of-aid/mit-scholarship/',
    financialAid: 'https://mitadmissions.org/afford/',
    programs: 'https://catalog.mit.edu/degree-charts/',
    cost: 'https://sfs.mit.edu/undergraduate-students/the-cost-of-attendance/coa/'
  },
  admissions: {
    platforms: ['MIT\'s own application portal (apply.mitadmissions.org)'],
    deadlines: [
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. MIT uses its own application portal, not the Common App. Required tests must be taken before 30 November.', status: 'confirmed', source: 'https://mitadmissions.org/apply/firstyear/deadlines-requirements/', verified: '2026-09-23', note: null },
      { name: 'Regular Action', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Required tests must be taken before 31 December.', status: 'confirmed', source: 'https://mitadmissions.org/apply/firstyear/deadlines-requirements/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waiver available' },
    documents: ['MIT application', 'Secondary school report and transcript', 'Two teacher evaluations'],
    recommendations: 'Two teacher letters — MIT recommends one from a maths or science teacher and one from a humanities, social science or language teacher',
    essay: 'MIT uses its own set of short essay responses rather than one long personal statement',
    interview: 'You may be contacted for an interview with an MIT Educational Counselor. If MIT cannot offer you one, the interview is waived and the application is not disadvantaged.',
    notes: ['MIT does not accept the Common Application.']
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'MIT states that English proficiency exams are "strongly recommended for certain non-native English speakers" but does not publish minimum scores on the deadlines and requirements page. Regular Action applicants must complete any English test by 31 January.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'MIT requires the SAT or ACT.' },
    act: { policy: 'required', note: 'MIT requires the SAT or ACT.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { tuition: 66720, budget: 92760, includes: "tuition, the student life fee, housing, food, books and personal expenses" },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$92,760 total',
    items: [
      { label: 'Tuition', amount: 66720 },
      { label: 'Student life fee', amount: 420 },
      { label: 'Housing', amount: 14090 },
      { label: 'Food', amount: 8104 },
      { label: 'Books, course materials, supplies & equipment', amount: 930 },
      { label: 'Personal expenses', amount: 2496 }
    ],
    billedSubtotal: null,
    totalText: '$92,760',
    note: 'Students are automatically enrolled in and charged for the MIT Student Health Insurance Plan; MIT does not itemise that figure inside this cost-of-attendance table.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Aid is assessed, not competed for: every admitted student who applies for aid receives what their family is assessed to need. Families earning under $100,000 with typical assets have a $0 parental contribution; families under $200,000 have full tuition paid.',
      howToApply: 'Apply for financial aid and complete the CSS Profile; you are then automatically considered for an MIT Scholarship.',
      note: 'MIT states that it is need-blind and full-need, and that its goal is "to admit and enroll the best students from around the world regardless of their financial circumstances". Aid meets 100% of each admitted student\'s demonstrated need and is "based entirely upon your family\'s demonstrated financial need—not any measure of merit." The size of the package depends on what the family is assessed to need, so admitted students do not all receive the same amount, and housing, food, insurance and books are covered only to the extent the package reaches them.'
    },
    merit: [],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: true,
      needBlindInternational: true,
      forms: ['CSS Profile'],
      deadlines: null,
      note: 'MIT states: "We are proud to be one of the very few institutions in the United States that are need-blind and full-need", "We offer aid that meets 100% of your demonstrated financial need", and "Our goal is to admit and enroll the best students from around the world regardless of their financial circumstances." Aid is need-based only — MIT gives no merit scholarships — and the amount is calculated from each family\'s demonstrated need.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'First-year deadlines & requirements', url: 'https://mitadmissions.org/apply/firstyear/deadlines-requirements/' },
    { label: 'Cost of attendance 2026–27', url: 'https://sfs.mit.edu/undergraduate-students/the-cost-of-attendance/coa/' },
    { label: 'Affording MIT', url: 'https://mitadmissions.org/afford/' },
    { label: 'Access and affordability (need-blind, full-need)', url: 'https://mitadmissions.org/afford/cost-aid-basics/access-affordability/' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'yale-university',
  name: 'Yale University',
  country: 'us',
  city: 'New Haven',
  region: 'Connecticut',
  founded: 1701,
  type: 'Private research university',
  brand: { c1: '#00356B', c2: '#001b38', initials: 'Y' },
  description: 'Yale is need-blind for every applicant in the world and meets 100% of demonstrated need without loans. From the 2026–27 entering class, families earning under $100,000 with typical assets are expected to pay nothing at all.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts'],
  englishTaughtPrograms: ['economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts'],
  programNote: 'Yale College offers about 80 undergraduate majors. There is no undergraduate business degree; Economics is the largest major and the usual route into business careers.',
  links: {
    website: 'https://www.yale.edu/',
    admissions: 'https://admissions.yale.edu/',
    internationalAdmissions: 'https://admissions.yale.edu/international',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admissions.yale.edu/affordability',
    financialAid: 'https://finaid.yale.edu/',
    programs: 'https://admissions.yale.edu/majors',
    cost: 'https://finaid.yale.edu/coa'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application on SCOIR', 'QuestBridge Application'],
    deadlines: [
      { name: 'Single-Choice Early Action', kind: 'REA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding, but you may not apply Early Action or Early Decision elsewhere, with the exceptions Yale lists. Decisions come in mid-December, including possible deferral to Regular Decision.', status: 'confirmed', source: 'https://admissions.yale.edu/timelines', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-02', date: '2 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions come in late March; admitted students reply by 1 May.', status: 'confirmed', source: 'https://admissions.yale.edu/timelines', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: null, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Yale does not issue its own fee waivers, but applying for free is straightforward through the eligibility criteria of your chosen application platform. U.S. military veterans and active-duty service members receive automatic waivers.' },
    documents: ['Application with essays', 'School Report with official transcript covering all completed secondary school courses', 'Mid-Year Report with first-marking-period senior grades'],
    recommendations: 'Three letters: two teachers in core academic subjects (languages, maths, sciences, social studies) plus one school counsellor or administrator',
    essay: 'Application essays plus Yale-specific short answers',
    interview: null,
    notes: []
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: 'Required only if you are a non-native English speaker graduating from a secondary school where English is not the language of instruction.',
    note: 'Yale requires an English proficiency test result from non-native speakers whose school did not teach in English, but does not publish a minimum score on its instructions page.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Applicants self-report scores from the ACT or SAT.' },
    act: { policy: 'required', note: 'Applicants self-report scores from the ACT or SAT.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { tuition: 72500, budget: 97985, includes: "tuition, the activity fee, housing, food, books and personal expenses; travel is estimated individually" },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$97,985 total',
    items: [
      { label: 'Tuition', amount: 72500 },
      { label: 'Student activity fee', amount: 185 },
      { label: 'Housing', amount: 12080 },
      { label: 'Food', amount: 9520 },
      { label: 'Books, course materials, supplies & equipment', amount: 1000 },
      { label: 'Personal expenses', amount: 2700 },
      { label: 'Travel', text: 'Estimated individually — not a fixed figure' }
    ],
    billedSubtotal: null,
    totalText: '$97,985 (excluding travel)',
    note: 'Yale notes that billed expenses — tuition, fees, housing and food — are fixed, while travel is estimated per student. Health insurance is not listed inside this cost-of-attendance breakdown. Families receiving aid do not pay the full cost of attendance.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Not a competition — every admitted student with sufficient assessed need receives it. For students entering in 2026–27, families with typical assets and incomes under $100,000 have all expected costs eliminated.',
      howToApply: 'Apply for financial aid with the admission application. There is no separate scholarship form.',
      note: 'Yale awards no merit or athletic scholarships — every dollar of undergraduate aid is need-based. Aid offers for international students include allowances for housing, meals and travel home twice a year, and take into account the difference between the U.S. economy and your home country\'s.'
    },
    merit: [],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: true,
      needBlindInternational: true,
      forms: ['CSS Profile', 'FAFSA (where applicable)'],
      deadlines: null,
      note: 'Yale states that a family\'s ability to pay is not a factor in admission "for any student, anywhere in the world", and that aid offers meet 100% of demonstrated need "regardless of a student\'s citizenship or immigration status", without loans. From 2026–27, families under $200,000 receive need-based scholarships that meet or exceed tuition.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Application instructions & requirements', url: 'https://admissions.yale.edu/instructions' },
    { label: 'Deadlines and application platforms', url: 'https://admissions.yale.edu/timelines' },
    { label: 'Cost of attendance', url: 'https://finaid.yale.edu/coa' },
    { label: 'International students', url: 'https://admissions.yale.edu/international' },
    { label: 'Affordability / need-based aid', url: 'https://admissions.yale.edu/affordability' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'new-york-university',
  name: 'New York University',
  shortName: 'NYU',
  country: 'us',
  city: 'New York City',
  region: 'New York',
  founded: 1831,
  type: 'Private research university',
  brand: { c1: '#57068C', c2: '#2d0449', initials: 'NYU' },
  description: 'A large private university spread through Manhattan with one of the biggest international student populations in the United States. NYU states that first-year students admitted to the New York campus have 100% of demonstrated need met regardless of citizenship, provided they apply for aid on time.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','medicine'],
  englishTaughtPrograms: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','medicine'],
  programNote: 'NYU admits to a specific school or college — Stern (business), Tandon (engineering), Tisch (arts), CAS (arts & science) and others — so requirements and competitiveness differ by school. The Health & Medicine tag reflects the Bachelor of Science in Nursing at NYU Rory Meyers College of Nursing; medicine (MD) is graduate study in the United States.',
  links: {
    website: 'https://www.nyu.edu/',
    admissions: 'https://www.nyu.edu/admissions/undergraduate-admissions.html',
    internationalAdmissions: 'https://www.nyu.edu/admissions/undergraduate-admissions/how-to-apply/international-applicants.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.nyu.edu/admissions/financial-aid-and-scholarships.html',
    financialAid: 'https://www.nyu.edu/admissions/financial-aid-and-scholarships/applying-as-a-prospective-undergraduate-student/first-year-applicants.html',
    programs: 'https://www.nyu.edu/academics/degree-programs.html',
    cost: 'https://www.nyu.edu/admissions/financial-aid-and-scholarships.html'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. CSS Profile for aid by 10 November.', status: 'not-confirmed', source: 'https://www.nyu.edu/admissions/undergraduate-admissions/how-to-apply/all-freshmen-applicants.html', verified: '2026-09-23', note: 'The ED I date was not restated on the pages read for this cycle.' },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. CSS Profile for aid by 10 January.', status: 'confirmed', source: 'https://www.nyu.edu/admissions/undergraduate-admissions/how-to-apply/all-freshmen-applicants.html', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Testing is optional for this cycle. CSS Profile for aid by 1 February.', status: 'confirmed', source: 'https://www.nyu.edu/admissions/undergraduate-admissions/how-to-apply/all-freshmen-applicants.html', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers available through the Common Application' },
    documents: ['Common Application', 'Secondary school transcript', 'School report'],
    recommendations: null,
    essay: 'Common Application essay plus NYU supplement',
    interview: null,
    notes: ['Deadlines above were published for the 2025–2026 application cycle; confirm the current cycle before applying.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS Academic accepted; NYU publishes no minimum.' },
    toefl: { min: null, recommended: 100, note: 'NYU states it has no minimum score, but that competitive applicants score 100 or above on the TOEFL iBT taken on or before 20 January 2026. For tests taken on or after 21 January 2026 under the revised scale, competitive applicants score 5 or above overall and in subscores.' },
    duolingo: { min: null, recommended: null, note: 'Duolingo English Test accepted; NYU publishes no minimum.' },
    waiver: 'You must submit English testing if English is not your first language, if you took coursework in another language (excluding world-language courses), if you took English Language Support coursework (ESL, ELL, IB English B), or if you were in a bilingual curriculum. Results must be less than two years old.',
    note: 'English language testing is an explicit exception to NYU\'s test-optional policy — it can still be required even though the SAT/ACT is not.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'NYU was test-optional for the 2025–2026 application cycle for every school and programme.' },
    act: { policy: 'optional', note: 'NYU was test-optional for the 2025–2026 application cycle for every school and programme.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { published: false },
    academicYear: null,
    currency: 'USD',
    headline: null,
    items: [],
    totalText: null,
    note: 'NYU\'s itemised cost of attendance was not captured from an official page during verification. Use the official financial aid site for current figures.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: null,
      basis: 'need-based',
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: 'Submit the CSS Profile by the financial aid deadline.',
      note: 'NYU does not advertise a named full-ride award for international students. Under "The NYU Promise", families with income under $100,000 and typical assets do not pay tuition — that is a tuition-level benefit, not a confirmed full ride, so do not assume housing and food are covered.'
    },
    merit: [],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: true,
      needBlindInternational: null,
      forms: ['CSS Profile'],
      deadlines: null,
      note: 'NYU states that all students admitted as first-year undergraduates to the New York campus who apply for aid by the deadlines will have 100% of demonstrated need met, regardless of citizenship — including international and undocumented students. Need-based scholarships are available to non-U.S. citizens applying as first-years; the CSS Profile is mandatory. Transfer students and second-bachelor\'s students are not eligible for NYU institutional aid.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'First-year applicants', url: 'https://www.nyu.edu/admissions/undergraduate-admissions/how-to-apply/all-freshmen-applicants.html' },
    { label: 'English language testing', url: 'https://www.nyu.edu/admissions/undergraduate-admissions/how-to-apply/standardized-tests/english-language-testing.html' },
    { label: 'Financial aid — first-year applicants', url: 'https://www.nyu.edu/admissions/financial-aid-and-scholarships/applying-as-a-prospective-undergraduate-student/first-year-applicants.html' },
    { label: 'The NYU Promise', url: 'https://www.nyu.edu/admissions/financial-aid-and-scholarships/applying-as-a-prospective-undergraduate-student/first-year-applicants/the-nyu-promise.html' },
    { label: 'Nursing (BS), traditional 4-year', url: 'https://bulletins.nyu.edu/undergraduate/nursing/programs/nursing-traditional-4-year-bs/' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'university-of-michigan',
  name: 'University of Michigan–Ann Arbor',
  shortName: 'U-M',
  country: 'us',
  city: 'Ann Arbor',
  region: 'Michigan',
  founded: 1817,
  type: 'Public research university',
  brand: { c1: '#00274C', c2: '#001529', initials: 'UM' },
  description: 'One of the strongest public research universities in the world, with top-ranked engineering, business and computer science. Be clear-eyed about the money: U-M states that international students on temporary visas are not eligible for financial aid and are expected to pay the full cost of attendance.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','medicine','education'],
  englishTaughtPrograms: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','medicine','education'],
  programNote: 'Ross School of Business and the College of Engineering admit directly from high school, which makes them noticeably more competitive than general admission to LSA. The Health & Medicine tag reflects the Bachelor of Science in Nursing (BSN) at the U-M School of Nursing; medicine (MD) is graduate study in the United States.',
  links: {
    website: 'https://umich.edu/',
    admissions: 'https://admissions.umich.edu/',
    internationalAdmissions: 'https://admissions.umich.edu/i-am/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://finaid.umich.edu/types-of-aid/scholarships',
    financialAid: 'https://finaid.umich.edu/',
    programs: 'https://admissions.umich.edu/academics-majors',
    cost: 'https://admissions.umich.edu/costs-aid/costs'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions by 24 December.', status: 'confirmed', source: 'https://admissions.umich.edu/apply/first-year-applicants/requirements-deadlines', verified: '2026-09-23', note: null },
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding; decisions by 29 January.', status: 'confirmed', source: 'https://admissions.umich.edu/apply/first-year-applicants/requirements-deadlines', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-02-01', date: '1 February 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding; decisions can run into early April. Michigan is test-optional for this cycle.', status: 'not-confirmed', source: 'https://admissions.umich.edu/apply/first-year-applicants/requirements-deadlines', verified: '2026-09-23', note: 'The Regular Decision date was not restated on the pages read for this cycle.' },
    ],
    applicationFee: { amount: null, currency: 'USD', waiverAvailableToInternational: null, waiver: null },
    documents: ['Common Application', 'Secondary school transcript', 'School report'],
    recommendations: null,
    essay: 'Common Application essay plus U-M supplemental essays',
    interview: null,
    notes: []
  },
  english: {
    ielts: { min: 7.0, recommended: null, note: 'IELTS or IELTS Indicator in the 7.0 range, with section scores of 6.5 or above.' },
    toefl: { min: 100, recommended: null, note: 'TOEFL iBT (including Home Edition) in the 100 range, with section scores of 23+ in listening and reading and 21+ in speaking and writing.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the page consulted.' },
    waiver: 'Required if English is your second language.',
    note: 'U-M also accepts ECPE, CAE/CPE, PTE Academic and MET. The English requirement is separate from the test-optional SAT/ACT policy — being test-optional does not remove it.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'U-M states an applicant will not be disadvantaged if they do not submit an ACT/SAT score.' },
    act: { policy: 'optional', note: 'U-M states an applicant will not be disadvantaged if they do not submit an ACT/SAT score.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { published: false },
    academicYear: null,
    currency: 'USD',
    headline: null,
    items: [],
    totalText: null,
    note: 'U-M publishes non-resident cost of attendance annually; 2026–27 rates are released in July 2026. The official costs page blocked automated verification, so no figure is reproduced here — check the official link.'
  },
  scholarships: {
    fullRide: {
      available: false,
      internationalEligible: false,
      basis: null,
      covers: { tuition: false, housing: false, meals: false, insurance: false, books: false },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'U-M states that international students on temporary visas are not eligible for financial aid and are expected to pay the full cost of attendance. Do not plan on a full ride here.'
    },
    merit: [],
    needBased: {
      availableToInternational: false,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Need-based aid, including the Go Blue Guarantee, is for Michigan residents and eligible U.S. students. International students on temporary visas are expected to fund the full cost themselves.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Requirements & deadlines', url: 'https://admissions.umich.edu/apply/first-year-applicants/requirements-deadlines' },
    { label: 'Exams & visas (English requirements)', url: 'https://admissions.umich.edu/apply/international-applicants/exams-visas' },
    { label: 'International students', url: 'https://admissions.umich.edu/i-am/international-students' },
    { label: 'Costs', url: 'https://admissions.umich.edu/costs-aid/costs' },
    { label: 'School of Nursing — BSN first-year entry', url: 'https://nursing.umich.edu/admissions-aid/admission-requirements/bachelor-science-nursing-bsn-first-year-entry' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'arizona-state-university',
  name: 'Arizona State University',
  shortName: 'ASU',
  country: 'us',
  city: 'Tempe',
  region: 'Arizona',
  founded: 1885,
  type: 'Public research university',
  brand: { c1: '#8C1D40', c2: '#4c0f22', initials: 'ASU' },
  description: 'A very large public university with an unusually open admissions policy for a research institution — a 3.0 GPA meets the published academic requirement — plus automatic merit scholarship consideration for international students. A realistic option for strong-but-not-elite applicants.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','medicine','education'],
  englishTaughtPrograms: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','medicine','education'],
  programNote: 'ASU offers more than 350 undergraduate degree programmes across its campuses. Some programmes set higher admission or English requirements than the university minimum and may consider ACT/SAT scores. The Health & Medicine tag reflects the Nursing BSN at ASU\'s Edson College of Nursing and Health Innovation; medicine (MD) is graduate study in the United States.',
  links: {
    website: 'https://www.asu.edu/',
    admissions: 'https://admission.asu.edu/',
    internationalAdmissions: 'https://admission.asu.edu/apply/international/first-year',
    applicationPortal: 'https://admission.asu.edu/apply',
    scholarships: 'https://admission.asu.edu/cost-aid/international',
    financialAid: 'https://admission.asu.edu/cost-aid/international',
    programs: 'https://degrees.apps.asu.edu/',
    cost: 'https://admission.asu.edu/cost-aid/international'
  },
  admissions: {
    platforms: ['ASU application', 'Common Application'],
    deadlines: [
      { name: 'Priority application deadline', kind: 'priority', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'International first-year applicants', conditions: 'ASU publishes this as the priority date for the following intake; the enrolment deposit follows on 1 December.', status: 'confirmed', source: 'https://admission.asu.edu/apply/international/first-year', verified: '2026-09-23', note: null },
      { name: 'Enrolment deposit', kind: 'reply', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'Admitted students', conditions: 'Deposit date tied to the priority round.', status: 'confirmed', source: 'https://admission.asu.edu/apply/international/first-year', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 90, currency: 'USD', waiverAvailableToInternational: null, waiver: null },
    documents: ['Secondary school transcripts', 'Proof of English proficiency', 'Financial documentation for the I-20'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['The international non-resident application fee is $90 and is non-refundable ($75 for ASU Online programmes).', 'ASU admits on a rolling basis rather than a single national deadline — check the current term deadline on the official page.']
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'Overall band score of at least 6.0 on the Academic test.' },
    toefl: { min: 61, recommended: null, note: 'Minimum 61 on the TOEFL iBT for general-requirement programmes.' },
    duolingo: { min: 95, recommended: null, note: 'General required score of 95 for undergraduate admission.' },
    waiver: 'Completion of ASU\'s Global Launch English and academic preparation courses also satisfies the requirement.',
    note: 'ASU also accepts PTE. Some programmes set higher English requirements than these university-wide minimums.'
  },
  academics: {
    gpa: { min: 3.0, scale: 4.0, note: 'International first-year students must have a 3.00 GPA ("B" or better, where A = 4.00) from secondary school.' },
    sat: { policy: 'optional', note: 'Not required university-wide, but some programmes may consider a minimum ACT or SAT score.' },
    act: { policy: 'optional', note: 'Not required university-wide, but some programmes may consider a minimum ACT or SAT score.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { tuition: 39062, budget: 69906, includes: "base tuition, surcharges and college fees, housing and meals, books, travel, personal expenses, health insurance and the international student fee" },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$69,906 total',
    items: [
      { label: 'Base tuition', amount: 39062 },
      { label: 'Tuition surcharge', amount: 350 },
      { label: 'Advanced Technology fee', amount: 200 },
      { label: 'Undergraduate college fees (maximum)', amount: 2190 },
      { label: 'Student-initiated fees', amount: 807 },
      { label: 'On-campus housing and meals', amount: 18819 },
      { label: 'Books and course materials', amount: 1320 },
      { label: 'Travel', amount: 1650 },
      { label: 'Personal expenses', amount: 2343 },
      { label: 'Health insurance', amount: 2765 },
      { label: 'International student fee', amount: 400 }
    ],
    billedSubtotal: null,
    totalText: '$69,906',
    note: 'Figures are ASU\'s published estimate for international undergraduate students. College fees vary by major — $2,190 is the maximum.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: null,
      basis: 'merit',
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'ASU does not publish a named full-ride award for international undergraduates on its international cost and aid page. Treat any "full ride" claim about ASU with caution until confirmed by the university.'
    },
    merit: [
      {
        name: 'New American University (NAMU) Scholarship',
        amount: null,
        eligibility: 'International first-year and transfer F-1 students who demonstrate high academic achievement',
        deadline: null,
        application: 'Automatic — you are considered when you apply for admission, with no separate application',
        renewable: null,
        note: 'ASU describes this as a merit-based scholarship that "helps with college expenses" but does not publish the dollar amounts on the international cost and aid page.'
      },
      {
        name: 'College and departmental scholarships',
        amount: null,
        eligibility: 'Varies by college and department',
        deadline: null,
        application: 'Varies — check with the specific college',
        renewable: null,
        note: 'ASU states award amounts and criteria vary.'
      }
    ],
    needBased: {
      availableToInternational: false,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'ASU states that international students do not qualify for federal and state financial aid unless they are an eligible non-citizen. Merit scholarships and departmental awards are the realistic routes.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International first-year student admission', url: 'https://admission.asu.edu/apply/international/first-year' },
    { label: 'English language proficiency admission', url: 'https://admission.asu.edu/apply/international/undergrad/english-proficiency' },
    { label: 'International student cost of college', url: 'https://admission.asu.edu/cost-aid/international' },
    { label: 'Nursing, BSN', url: 'https://degrees.asu.edu/bachelors/major/ASU00/NUNURDBSN/nursing' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'university-of-alabama',
  name: 'The University of Alabama',
  shortName: 'UA',
  country: 'us',
  city: 'Tuscaloosa',
  region: 'Alabama',
  founded: 1831,
  type: 'Public research university',
  brand: { c1: '#9E1B32', c2: '#520d1a', initials: 'UA' },
  description: 'The clearest published merit scholarship ladder of any large U.S. public university, and international students are on exactly the same table as out-of-state Americans. If you can score well on the ACT or SAT, this is one of the most predictable ways to cut U.S. tuition.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','education','medicine'],
  englishTaughtPrograms: ['business','economics','computer-science','engineering','psychology','biology','mathematics','social-sciences','humanities','arts','education','medicine'],
  programNote: 'UA offers a broad range of bachelor\'s degrees; the Culverhouse College of Business and the College of Engineering are the largest draws for international applicants. The Health & Medicine tag reflects the Bachelor of Science in Nursing at UA\'s Capstone College of Nursing; medicine (MD) is graduate study in the United States.',
  links: {
    website: 'https://www.ua.edu/',
    admissions: 'https://admissions.ua.edu/',
    internationalAdmissions: 'https://admissions.ua.edu/international/freshman/',
    applicationPortal: 'https://admissions.ua.edu/apply/',
    scholarships: 'https://afford.ua.edu/scholarships/international/',
    financialAid: 'https://afford.ua.edu/',
    programs: 'https://catalog.ua.edu/undergraduate/',
    cost: 'https://afford.ua.edu/'
  },
  admissions: {
    platforms: ['UA application', 'Common Application'],
    deadlines: [
      { name: 'Priority deadline — summer and autumn 2027 entry', kind: 'priority', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-04', date: '4 December 2026', binding: false, appliesTo: 'First-year applicants, including international students', conditions: 'Alabama states that the application and official score reports must arrive by this date for priority scholarship consideration; GPA is counted through the end of junior year. Later applicants are considered for scholarships only if funds remain.', status: 'confirmed', source: 'https://admissions.ua.edu/apply/', verified: '2026-09-23', note: null },
      { name: 'Priority deadline — spring 2027 entry', kind: 'priority', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: false, appliesTo: 'Applicants for the spring semester', conditions: 'Separate, earlier intake.', status: 'confirmed', source: 'https://admissions.ua.edu/apply/', verified: '2026-09-23', note: null },
      { name: 'Automatic merit scholarship notification', kind: 'scholarship', entryTerm: 'Autumn', entryYear: '2027', date: 'February 2027', binding: false, appliesTo: 'Admitted first-year students entering in summer or autumn', conditions: 'Alabama states that automatic merit scholarship information is released in early February.', status: 'not-confirmed', source: 'https://afford.ua.edu/scholarships/oos-international-freshman/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: null, currency: 'USD', waiverAvailableToInternational: null, waiver: null },
    documents: [
      'Official high school transcripts evaluated by a NACES member agency',
      'Visa/immigration documents (PR card, current visa, or F-1/J-1 visa support materials)',
      'Proof of English proficiency, or a conditional admission application',
      'SAT or ACT scores where required'
    ],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Scholarship deadlines and admission deadlines are the same dates — miss them and you lose automatic scholarship consideration.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'A writing sub-score of 6.0 or higher avoids being placed into English language support courses.' },
    toefl: { min: null, recommended: null, note: 'A TOEFL Essentials writing sub-score of 8.5 or higher avoids English language support courses. Low sub-scores on the TOEFL iBT also trigger support coursework.' },
    duolingo: { min: 110, recommended: null, note: 'An overall Duolingo score of 110 or higher (post-July 2019 scale) avoids English language support courses.' },
    waiver: 'Students who meet academic and financial requirements but not the English requirement may apply for conditional admission and start in the English Language Institute.',
    note: 'UA publishes these as thresholds for avoiding mandatory English support classes rather than as flat admission cut-offs. A PTE writing sub-score of 51 or higher has the same effect.'
  },
  academics: {
    gpa: { min: 3.0, scale: 4.0, note: 'UA considers applicants with a cumulative GPA of 3.0 on a 4.0 scale for admission.' },
    sat: { policy: 'optional', note: 'Not required for admission unless your GPA is below 3.0 (for 2027 entry) — but required to be considered for automatic merit scholarships.' },
    act: { policy: 'optional', note: 'Not required for admission unless your GPA is below 3.0 (for 2027 entry) — but required to be considered for automatic merit scholarships.' },
    otherTests: null,
    internationalQualifications: 'Transcripts must be evaluated by a NACES member credential evaluation agency.'
  },
  costs: {
    breakdown: { published: false },
    academicYear: null,
    currency: 'USD',
    headline: null,
    items: [],
    totalText: null,
    note: 'UA\'s itemised cost of attendance was not captured from an official page during verification. Check the official affordability site for current tuition and fees.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: true, meals: false, insurance: false, books: null },
      renewable: true,
      competitiveness: 'Requires a 4.0+ GPA together with a 36 ACT or 1600 SAT — an extremely narrow band, but it is an automatic award rather than a competition: hit the numbers and you receive it.',
      howToApply: 'Automatic. Apply for admission by the deadline and have official ACT/SAT scores sent by the testing agency.',
      note: 'The Presidential Elite Scholar award covers the value of tuition for up to four years (eight semesters), the first year of on-campus housing at the regular room rate, a $1,500 per year supplemental scholarship for four years, and a $2,000 one-time allowance for research or international study after one year at UA. It does not include meals or health insurance, so it is close to but not literally a full ride.'
    },
    merit: [
      { name: 'Crimson Legends Scholarship', amount: '$6,000 per year', eligibility: 'GPA 3.50+ with ACT 25–26 or SAT 1200–1250', deadline: '2 November (spring) / 4 December (summer & fall)', application: 'Automatic with admission application', renewable: null, note: 'Values are identical for out-of-state and international students.' },
      { name: 'Capstone Scholarship', amount: '$8,000 per year', eligibility: 'GPA 3.50+ with ACT 27 or SAT 1260–1290', deadline: '2 November (spring) / 4 December (summer & fall)', application: 'Automatic with admission application', renewable: null, note: null },
      { name: 'Collegiate Scholarship', amount: '$10,000 per year', eligibility: 'GPA 3.50+ with ACT 28 or SAT 1300–1320', deadline: '2 November (spring) / 4 December (summer & fall)', application: 'Automatic with admission application', renewable: null, note: null },
      { name: 'Foundation in Excellence Scholarship', amount: '$15,000 per year', eligibility: 'GPA 3.50+ with ACT 29 or SAT 1330–1350', deadline: '2 November (spring) / 4 December (summer & fall)', application: 'Automatic with admission application', renewable: null, note: null },
      { name: 'UA Scholar', amount: '$24,000 per year', eligibility: 'GPA 3.50+ with ACT 30–31 or SAT 1360–1410', deadline: '2 November (spring) / 4 December (summer & fall)', application: 'Automatic with admission application', renewable: null, note: null },
      { name: 'Presidential Scholarship', amount: '$28,000 per year', eligibility: 'GPA 3.50+ with ACT 32–36 or SAT 1420–1600', deadline: '2 November (spring) / 4 December (summer & fall)', application: 'Automatic with admission application', renewable: null, note: null },
      { name: 'Presidential Elite Scholar', amount: 'Value of tuition for up to 4 years, plus first-year housing, $1,500/year supplement and a $2,000 research/study-abroad allowance', eligibility: 'GPA 4.0+ with ACT 36 or SAT 1600', deadline: '2 November (spring) / 4 December (summer & fall)', application: 'Automatic with admission application', renewable: true, note: 'The most valuable tier on UA\'s published table.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'UA\'s automatic awards are merit-based. Need-based aid policy for international students was not confirmed on the pages consulted.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International freshman scholarships', url: 'https://afford.ua.edu/scholarships/international/' },
    { label: 'International freshman admissions', url: 'https://admissions.ua.edu/international/freshman/' },
    { label: 'English language proficiency policy', url: 'https://admissions.ua.edu/international/english-language-proficiency/' },
    { label: 'Capstone College of Nursing — BSN', url: 'https://nursing.ua.edu/academics/undergraduate/bsn/' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'berea-college',
  name: 'Berea College',
  country: 'us',
  city: 'Berea',
  region: 'Kentucky',
  founded: 1855,
  type: 'Private liberal arts college (federally recognised Work College)',
  brand: { c1: '#1E5631', c2: '#0d2b18', initials: 'BC' },
  description: 'Berea charges no tuition to anyone and states it is the only U.S. college that funds 100% of its enrolled international students. Admitted international students receive aid covering tuition, housing, food and fees. The catch is scale: roughly forty new international students are admitted each year.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','computer-science','psychology','biology','mathematics','social-sciences','humanities','arts','education','engineering'],
  englishTaughtPrograms: ['business','economics','computer-science','psychology','biology','mathematics','social-sciences','humanities','arts','education','engineering'],
  programNote: 'A small liberal arts college with around 30 undergraduate majors. Every student works a campus job as part of the Work College model.',
  links: {
    website: 'https://www.berea.edu/',
    admissions: 'https://www.berea.edu/admissions',
    internationalAdmissions: 'https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs',
    applicationPortal: 'https://www.berea.edu/admissions/admission-information/apply',
    scholarships: 'https://www.berea.edu/admissions/no-tuition-promise/',
    financialAid: 'https://www.berea.edu/student-financial-aid',
    programs: 'https://www.berea.edu/academics',
    cost: 'https://www.berea.edu/student-financial-aid/cost-of-attendance'
  },
  admissions: {
    platforms: ['Berea College application'],
    deadlines: [
      { name: 'International application deadline', kind: 'intake', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-30', date: '30 November 2026', binding: false, appliesTo: 'International applicants', conditions: 'All parts of the application must arrive by this date; decisions are released no later than 31 March. Berea states that admitted international students receive aid covering 100% of tuition, housing, food and fees.', status: 'confirmed', source: 'https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'Berea does not charge an application fee' },
    documents: ['Secondary school transcript', 'Evidence of financial need', 'English proficiency evidence'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Berea admits about 40 or fewer new international students each year, so competition for places is severe even though the aid is guaranteed.', 'Admission is need-based in the opposite direction from most colleges: Berea admits students with limited financial resources.']
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'Berea\'s English proficiency thresholds were not captured from an official page during verification. Check the international applicant information page.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { tuition: 0, includes: "no student pays tuition; aid also covers housing, food and fees" },
    academicYear: null,
    currency: 'USD',
    headline: 'No tuition — aid covers tuition, housing, food and fees',
    items: [
      { label: 'Tuition', text: 'Covered — no student pays tuition' },
      { label: 'Housing, food and fees (international students)', text: 'Covered by aid and scholarships' },
      { label: 'Enrolment deposit', amount: 2200, note: 'One-off, payable on acceptance; can be used toward expenses across four years. Additional aid is available for students who cannot pay it.' },
      { label: 'Personal expenses (student\'s own savings)', amount: 1000, note: 'Berea asks international students to save about $1,000 per year toward personal costs' }
    ],
    totalText: 'Tuition, housing, food and fees covered',
    note: 'Berea states that all admitted international students receive financial aid and scholarships covering 100% of tuition, housing, food and fees.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Guaranteed once admitted — but admission is the bottleneck, with about 40 or fewer new international students per year against applications from around the world.',
      howToApply: 'Apply for admission; the funding follows admission automatically.',
      note: 'Berea states it is "the only school in the United States that provides 100% funding to 100% of enrolled international students," and that admitted international students receive aid covering 100% of tuition, housing, food and fees. Students still contribute a $2,200 deposit and are asked to save about $1,000 a year for personal expenses. Health insurance and books are not explicitly listed as covered.'
    },
    merit: [
      { name: 'Berea College Tuition Promise Scholarship', amount: 'Full tuition', eligibility: 'All admitted students', deadline: null, application: 'Automatic with admission', renewable: true, note: 'Berea states this scholarship, combined with grants and scholarships, guarantees that a student will never pay tuition from personal income.' }
    ],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: true,
      needBlindInternational: false,
      forms: [],
      deadlines: null,
      note: 'Berea is a Work College: every student works a campus job of at least 10 hours per week, earning money toward books, housing and meals. International students are guaranteed a paid on-campus job during the year, and summer work is also made available. Around 120 international students from 70+ countries are enrolled in a typical year.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Student financial aid', url: 'https://www.berea.edu/student-financial-aid' },
    { label: 'International applicant information', url: 'https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs' },
    { label: 'No Tuition Promise', url: 'https://www.berea.edu/admissions/no-tuition-promise/' },
    { label: 'Economics and Business — majors and minors', url: 'https://www.berea.edu/academics/departments-programs/economics-and-business/eco-bus-majors-and-minors' }
  ],
  lastVerified: '2026-09-18'
}
,

{
  id: 'uc-berkeley',
  name: 'University of California, Berkeley',
  shortName: 'UC Berkeley',
  country: 'us',
  city: 'Berkeley',
  region: 'California',
  founded: 1868,
  type: 'Public research university',
  brand: { c1: '#003262', c2: '#001832', initials: 'CAL' },
  description: 'The oldest campus of the University of California and the strongest public university in the country by most measures. Berkeley is unusual among elite US universities in ignoring SAT and ACT scores entirely — and equally unusual in offering international students almost no need-based aid.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['computer-science','engineering','business','economics','mathematics','biology','social-sciences','humanities','psychology','arts','law','education'],
  englishTaughtPrograms: ['computer-science','engineering','business','economics','mathematics','biology','social-sciences','humanities','psychology','arts','law','education'],
  programNote: 'Berkeley admits to a college — Letters and Science, Engineering, Chemistry, Environmental Design, Business or Natural Resources — and some majors, notably Computer Science and Haas business, are capped and far harder to enter than the university as a whole. The Law & Policy tag reflects Berkeley\'s undergraduate Legal Studies major (BA), taught under the supervision of the law school; law as a professional degree (JD) is graduate study.',
  links: {
    website: 'https://www.berkeley.edu/',
    admissions: 'https://admissions.berkeley.edu/',
    internationalAdmissions: 'https://admissions.berkeley.edu/requirements-for-international-students/',
    applicationPortal: 'https://apply.universityofcalifornia.edu/',
    scholarships: 'https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/international-student-scholarships/',
    financialAid: 'https://financialaid.berkeley.edu/apply-now/international-students/',
    programs: 'https://guide.berkeley.edu/undergraduate/degree-programs/',
    cost: 'https://financialaid.berkeley.edu/how-aid-works/student-budgets-cost-of-attendance/'
  },
  admissions: {
    platforms: ['UC Application (shared by all nine UC campuses)'],
    deadlines: [
      { name: 'UC application filing period', kind: 'intake', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-30', date: '1–30 November 2026', binding: false, appliesTo: 'All freshman applicants to any UC campus', conditions: 'One UC application covers all nine campuses. You can start work on it from 1 August; the filing period is 1–30 November.', status: 'confirmed', source: 'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/', verified: '2026-09-23', note: null },
      { name: 'Admission decisions', kind: 'decision', entryTerm: 'Autumn', entryYear: '2027', date: 'March 2027', binding: false, appliesTo: 'Freshman applicants', conditions: 'UC campuses release freshman decisions in March.', status: 'not-confirmed', source: 'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/', verified: '2026-09-23', note: null },
      { name: 'Statement of Intent to Register', kind: 'reply', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-05-01', date: '1 May 2027', binding: false, appliesTo: 'Admitted students', conditions: 'Deadline to accept an offer.', status: 'not-confirmed', source: 'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 95, currency: 'USD', waiverAvailableToInternational: null, waiver: 'International applicants pay $95 per campus; those already enrolled at a US institution may qualify for the $80 fee. UC does not describe fee waivers for international applicants.' },
    documents: [
      'UC Application, completed once for all campuses',
      'Official academic records from every institution attended, showing dates, courses, grades and any diploma',
      'External exam results such as IGCSE/GCSE reported on the International Exams page of the application',
      'Certificate of secondary school completion allowing university entry in your own country'
    ],
    recommendations: 'None — UC states you should not submit letters of recommendation with the application',
    essay: 'Personal insight questions within the UC Application',
    interview: 'No admission interview. The optional InitialView interview is only additional evidence.',
    notes: [
      'International students on a visa can never be classified as California residents for tuition, so the nonresident rate applies for the whole degree.'
    ]
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'IELTS 6.5 or better satisfies the requirement.' },
    toefl: { min: 90, recommended: null, note: 'TOEFL 90 or better satisfies the requirement.' },
    duolingo: { min: 115, recommended: null, note: 'Duolingo English Test 115 or better is accepted.' },
    waiver: 'Three or more years of instruction in English satisfies the requirement. Mixed-language instruction does not count.',
    note: 'Berkeley also accepts an SAT Writing and Language score of 31+ or an ACT English and Language Arts score of 24+ as evidence of English proficiency. Proficiency must be demonstrated by 31 January.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Berkeley lists the SAT only as one way to evidence English proficiency, not as part of the admission decision.' },
    act: { policy: 'not-used', note: 'Listed only as evidence of English proficiency (ACT English and Language Arts 24+).' },
    otherTests: 'International applicants must report external examination results such as IGCSE/GCSE, and must hold qualifications such as A-Levels, the French Baccalaureate, IGCSE or ATAR where their own curriculum requires them.',
    internationalQualifications: 'You must finish secondary school and earn the certificate of completion that would admit you to a university in your own country.'
  },
  costs: {
    breakdown: { tuition: 57484, budget: 101598, includes: "tuition and fees including nonresident supplemental tuition, housing, meals, health insurance, books, personal expenses and transport" },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$101,598 total for a nonresident',
    items: [
      { label: 'Tuition and fees', amount: 18214 },
      { label: 'Nonresident supplemental tuition', amount: 39270 },
      { label: 'Housing (residence hall)', amount: 16640 },
      { label: 'Meal plan', amount: 7000 },
      { label: 'Student health insurance plan', amount: 5066 },
      { label: 'Personal expenses, books, food and transport', amount: 7754 }
    ],
    billedSubtotal: 93844,
    totalText: '$101,598',
    note: 'These are Berkeley\'s published figures for a nonresident student living in a residence hall. Direct costs billed by the university come to $93,844; the rest covers books, extra food, transport and personal spending. International students pay the nonresident supplemental tuition for all four years.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: true, housing: null, meals: null, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Extremely narrow. The only Berkeley award that reaches the full cost of attendance for international students is the Swaniker Scholars Program, which requires nomination by ALX or African Leadership Academy.',
      howToApply: 'You cannot apply directly — candidates must be nominated by ALX or ALA. All other admitted international students are automatically considered for the scholarships they are eligible for.',
      note: 'The Swaniker Scholars Program covers "up to the full cost of attendance for four years" for talented students from across the African continent. For everyone else, Berkeley states plainly that international students are ineligible for federal, state and need-based university aid.'
    },
    merit: [
      { name: 'Regents\' and Chancellor\'s Scholarship', amount: 'A monetary award plus additional benefits; Berkeley does not publish the amount on the international scholarships page', eligibility: 'Exceptional admitted students showing creativity, leadership, service and strong convictions', deadline: null, application: 'All admitted international students are automatically considered', renewable: null, note: 'Berkeley calls this its most prestigious undergraduate scholarship.' },
      { name: 'Robinson International Scholars Program', amount: 'Need-based scholarship for up to four years, plus full Regents\' and Chancellor\'s benefits', eligibility: 'International students who are refugees or stateless people from Sub-Saharan African and developing nations, or who graduated from secondary school in such a country', deadline: null, application: 'Automatic consideration on admission', renewable: true, note: null },
      { name: 'International Leaders Scholarship at UC Berkeley', amount: 'Financial assistance for up to four years, plus full Regents\' and Chancellor\'s benefits', eligibility: 'Talented international students showing academic excellence and leadership; priority for students resident in Peru', deadline: null, application: 'Automatic consideration on admission', renewable: true, note: null },
      { name: 'Swaniker Scholars Program at UC Berkeley', amount: 'Up to the full cost of attendance for four years', eligibility: 'Students from across the African continent who are ALX Pathway participants or African Leadership Academy graduates', deadline: null, application: 'By nomination from ALX or ALA only', renewable: true, note: 'Need-based, and includes the full Regents\' and Chancellor\'s benefits.' }
    ],
    needBased: {
      availableToInternational: false,
      meetsFullNeed: false,
      needBlindInternational: false,
      forms: [],
      deadlines: null,
      note: 'Berkeley states: "International students are ineligible for federal, state, and need-based university financial aid." Only US citizens, eligible non-citizens and AB 540 students can receive it. Plan on paying the full nonresident cost unless you win one of the named scholarships above.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Requirements for international students', url: 'https://admissions.berkeley.edu/requirements-for-international-students/' },
    { label: 'Student budgets (cost of attendance)', url: 'https://financialaid.berkeley.edu/how-aid-works/student-budgets-cost-of-attendance/' },
    { label: 'Financial aid for international students', url: 'https://financialaid.berkeley.edu/apply-now/international-students/' },
    { label: 'Scholarship opportunities for international students', url: 'https://financialaid.berkeley.edu/types-of-aid-at-berkeley/scholarships/regents-and-chancellors-scholarship/international-student-scholarships/' },
    { label: 'UC — applying for admission as an international applicant', url: 'https://admission.universityofcalifornia.edu/admission-requirements/international-applicants/applying-for-admission/' },
    { label: 'UC — dates and deadlines 2026–27 (fall 2027 entry)', url: 'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-first-year/dates-and-deadlines.html' },
    { label: 'Legal Studies undergraduate program', url: 'https://jsp-ls.berkeley.edu/legal-studies' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'princeton-university',
  name: 'Princeton University',
  country: 'us',
  city: 'Princeton',
  region: 'New Jersey',
  founded: 1746,
  type: 'Private research university',
  brand: { c1: '#E77500', c2: '#8a4600', initials: 'P' },
  description: 'A small, undergraduate-focused Ivy League university in New Jersey. Princeton applies exactly the same financial aid policy to international students as to Americans: admission is need-blind, every admitted student\'s full demonstrated need is met with grants, and there are no loans in aid packages.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','economics','mathematics','humanities','social-sciences','biology','psychology','arts'],
  englishTaughtPrograms: ['engineering','computer-science','economics','mathematics','humanities','social-sciences','biology','psychology','arts'],
  programNote: 'Princeton has no business, law or medical school for undergraduates; economics and the School of Public and International Affairs are the usual routes towards those careers. Every undergraduate writes a senior thesis.',
  links: {
    website: 'https://www.princeton.edu/',
    admissions: 'https://admission.princeton.edu/apply',
    internationalAdmissions: 'https://admission.princeton.edu/how-apply/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admission.princeton.edu/cost-aid',
    financialAid: 'https://admission.princeton.edu/cost-aid',
    programs: 'https://www.princeton.edu/academics/areas-study',
    cost: 'https://admission.princeton.edu/cost-aid'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Single-Choice Early Action', kind: 'REA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'A non-binding process: you may not apply to early programmes at other private US institutions. The graded written paper is due the same day; the optional arts supplement by 6 November. Decisions in mid-December.', status: 'confirmed', source: 'https://admission.princeton.edu/apply/first-year-application-dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'The graded written paper is due the same day; the optional arts supplement by 8 January. Decisions in late March.', status: 'confirmed', source: 'https://admission.princeton.edu/apply/first-year-application-dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Financial aid application — Early Action', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-09', date: '9 November 2026', binding: false, appliesTo: 'Early Action applicants asking for aid', status: 'confirmed', source: 'https://admission.princeton.edu/apply/first-year-application-dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Financial aid application — Regular Decision', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-02-01', date: '1 February 2027', binding: false, appliesTo: 'Regular Decision applicants asking for aid', status: 'confirmed', source: 'https://admission.princeton.edu/apply/first-year-application-dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Reply deadline', kind: 'reply', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-05-01', date: '1 May 2027', binding: false, appliesTo: 'Admitted students', conditions: 'Candidate response to accept the offer.', status: 'confirmed', source: 'https://admission.princeton.edu/apply/first-year-application-dates-deadlines', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: null, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Princeton offers its own fee waiver to low-income applicants and to anyone serving or who has served in the US military, with no counsellor approval needed. Waivers through the Common Application, ACT, College Board and NACAC are also accepted.' },
    documents: [
      'Common Application with the Princeton-specific questions',
      'A graded written paper, preferably in English or history, written in English and not translated',
      'Official transcript and School Report form',
      'Midyear School Report'
    ],
    recommendations: 'Two teacher recommendations from core academic subjects, plus a counsellor recommendation',
    essay: 'Common Application personal essay plus the Princeton-specific questions',
    interview: 'An optional alumni interview may be offered',
    notes: [
      'Requesting a fee waiver does not disadvantage an application.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS Academic is accepted, but Princeton does not publish a minimum score.' },
    toefl: { min: null, recommended: null, note: 'TOEFL is accepted; no minimum score is published.' },
    duolingo: { min: null, recommended: null, note: 'The Duolingo English Test is accepted; no minimum score is published.' },
    waiver: 'No test is required if English is your native language, or if you have spent at least three years at a secondary school where English is the main language of instruction.',
    note: 'A test is required only when English is not your native language and your school does not teach primarily in English. Pearson PTE Academic is also accepted. Princeton publishes no minimum scores at all — treat strong scores as expected rather than optional.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Test-optional for students entering in fall 2026 and fall 2027. Princeton has said testing will be required again for fall 2028 entry.' },
    act: { policy: 'optional', note: 'Same policy as the SAT: optional for fall 2026 and fall 2027 entry, required from fall 2028.' },
    otherTests: 'SAT Subject Tests may be reported but are optional.',
    internationalQualifications: 'Transcripts are assessed within the context of your own education system. School reports and recommendations may be in another language if officially translated — the graded written paper may not.'
  },
  costs: {
    breakdown: { tuition: 68140, billed: 90574, includes: "tuition, fees, housing and food (average)" },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$90,574 average total',
    items: [
      { label: 'Tuition', amount: 68140 },
      { label: 'Average total of tuition, fees, housing and food', amount: 90574 },
      { label: 'Average net cost paid by aid recipients', amount: 7574 }
    ],
    billedSubtotal: null,
    totalText: '$90,574 on average before aid — about $7,574 for students who receive aid',
    note: 'Princeton publishes the average total charge rather than a long itemised list on its cost and aid page. The figure most students actually pay is far lower: the university reports an average net cost of $7,574 for aid recipients.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Admission is the hard part. Once admitted, aid is assessed on need alone and is not a separate competition.',
      howToApply: 'Apply for financial aid alongside the admission application — by 9 November for Single-Choice Early Action, or 1 February for Regular Decision.',
      note: 'Princeton states it "applies the same financial aid policy to international students", meets 100% of demonstrated need with grant aid, and replaces student loans with grants that are never repaid. On its published example table a family earning $150,000 with typical assets contributes $0.'
    },
    merit: [],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: true,
      needBlindInternational: true,
      forms: ['Princeton Financial Aid Application', 'CSS Profile or equivalent documentation'],
      deadlines: '9 November for Single-Choice Early Action; 1 February for Regular Decision',
      note: 'Princeton states that admission is need-blind and there is no disadvantage for aid applicants. Its published contribution examples — $0 at $150,000 of income, $12,500 at $200,000, $37,500 at $300,000 — apply to families with assets under $175,000 living in the United States with one child in college, so an international family\'s result can differ.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Cost and aid', url: 'https://admission.princeton.edu/cost-aid' },
    { label: 'Application checklist', url: 'https://admission.princeton.edu/apply/application-checklist' },
    { label: 'First-year application dates and deadlines', url: 'https://admission.princeton.edu/apply/first-year-application-dates-deadlines' },
    { label: 'International students', url: 'https://admission.princeton.edu/how-apply/international-students' }
  ],
  lastVerified: '2026-09-18'
}
);
