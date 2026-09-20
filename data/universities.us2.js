/* ============================================================
   United States — additional university records (batch added
   September 2026). Same rules as data/universities.us.js:
   every figure comes from the official page listed in `sources`,
   and anything a university does not publish stays `null`.

   The question that decides most international applications is
   money, so each record states two things explicitly:
     - whether admission is need-blind or need-aware for
       international applicants;
     - whether the university meets their full demonstrated need.
   A "full scholarship route" is only claimed where the official
   source says need is met in full for international students.
   ============================================================ */
window.UNIPATH.universities.push(
{
  id: 'brown-university',
  name: 'Brown University',
  country: 'us',
  city: 'Providence',
  region: 'Rhode Island',
  founded: 1764,
  type: 'Private research university',
  brand: { c1: '#4E3629', c2: '#2a1d16', initials: 'BR' },
  description: 'An Ivy League university in Rhode Island, known for the Open Curriculum: there are no general education requirements, so students design their own course of study. From the 2024–25 admission cycle Brown reads first-year international applications need-blind and meets their full demonstrated need.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','engineering','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','engineering','mathematics','biology','psychology','arts','education'],
  programNote: 'The Open Curriculum has no distribution requirements. Brown has no undergraduate business degree; economics and applied mathematics are the usual routes. Engineering is offered as a ScB.',
  links: {
    website: 'https://www.brown.edu/',
    admissions: 'https://admission.brown.edu/first-year',
    internationalAdmissions: 'https://admission.brown.edu/international',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://finaid.brown.edu/',
    financialAid: 'https://admission.brown.edu/international/financial-aid',
    programs: 'https://bulletin.brown.edu/',
    cost: 'https://finaid.brown.edu/estimate-cost-aid/cost'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Binding; 11:59 p.m. applicant’s local time' },
      { name: 'Regular Decision', date: '5 January', note: '11:59 p.m. applicant’s local time' }
    ],
    applicationFee: { amount: 80, currency: 'USD', waiver: 'Fee waiver available in place of the $80 non-refundable fee' },
    documents: ['Common Application with Brown’s writing supplement', 'School transcript and school report', 'Teacher recommendations'],
    recommendations: 'Two teacher recommendations and a counsellor report',
    essay: 'Common Application essay plus Brown’s supplemental questions',
    interview: null,
    notes: ['International applicants must submit the CSS Profile to be considered for any Brown aid.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Brown does not publish a minimum score on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Brown’s international applicant pages for the current English requirement before applying.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Brown reinstated the SAT/ACT requirement for first-year applicants.' },
    act: { policy: 'required', note: 'SAT or ACT is required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications such as A-Levels and the IB are accepted alongside school transcripts.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$74,568 tuition',
    items: [
      { label: 'Tuition', amount: 74568 },
      { label: 'Standard room', amount: 10710 },
      { label: 'Standard board', amount: 8754 },
      { label: 'Undergraduate student resources fee', amount: 1136 },
      { label: 'Health services fee', amount: 1296 },
      { label: 'Student activities fee', amount: 442 },
      { label: 'Student recreation fee', amount: 110 }
    ],
    billedSubtotal: 97016,
    totalText: 'About $97,016 in billed charges before books, travel and personal expenses',
    note: 'Figures approved by the Brown Corporation for 2026–27. Students receiving aid pay far less.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Aid is assessed, not competed for: admitted students who apply on time have 100% of demonstrated need met.',
      howToApply: 'Submit the CSS Profile by the published deadlines at the same time as the admission application.',
      note: 'Brown states that from the 2024–25 admission cycle (class of 2029) first-year international applicants are read need-blind, and that it meets 100% of demonstrated need for the international students it admits.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: true,
      forms: ['CSS Profile'],
      deadlines: 'By the published financial aid deadlines for your admission round',
      note: 'Students admitted before autumn 2025 remain under the previous need-aware policy. Aid materials must still be submitted on time to receive scholarship assistance.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Need-blind admission for international undergraduates', url: 'https://president.brown.edu/president/need-blind-admission-international-undergraduates' },
    { label: 'Financial aid for international applicants', url: 'https://admission.brown.edu/international/financial-aid' },
    { label: 'Undergraduate tuition and fees', url: 'https://sfs.brown.edu/tuition-and-fees/undergraduate' },
    { label: 'First-year application checklist', url: 'https://admission.brown.edu/first-year/application-checklist' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'dartmouth-college',
  name: 'Dartmouth College',
  country: 'us',
  city: 'Hanover',
  region: 'New Hampshire',
  founded: 1769,
  type: 'Private research university',
  brand: { c1: '#00693E', c2: '#003c23', initials: 'D' },
  description: 'The smallest Ivy League school, in rural New Hampshire, built around undergraduate teaching and a year-round "D-Plan" of four ten-week terms. It is one of the few universities in the world that is need-blind for every applicant, whatever their citizenship, and meets full need without loans.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','engineering','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','engineering','mathematics','biology','psychology','arts'],
  programNote: 'Dartmouth has no undergraduate business major; economics is the usual route. Engineering is offered through Thayer School, and the D-Plan lets students take terms off for internships.',
  links: {
    website: 'https://home.dartmouth.edu/',
    admissions: 'https://admissions.dartmouth.edu/apply-dartmouth',
    internationalAdmissions: 'https://financialaid.dartmouth.edu/apply-aid/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://financialaid.dartmouth.edu/',
    financialAid: 'https://financialaid.dartmouth.edu/apply-aid/international-students',
    programs: 'https://home.dartmouth.edu/academics',
    cost: 'https://financialaid.dartmouth.edu/cost-attendance/cost-attendance-2026-2027'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Binding; decisions in mid-December' },
      { name: 'Regular Decision', date: '1 January', note: 'Decisions in late March or early April' }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiver: 'Fee waivers available' },
    documents: ['Common Application', 'School transcript and counsellor report', 'Teacher recommendations', 'Standardized test results'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Dartmouth’s supplemental questions',
    interview: null,
    notes: []
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Applicants at schools outside the US must submit SAT or ACT results, three AP results, or predicted/final IB, A-Level or equivalent national exam results.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Dartmouth reactivated the SAT/ACT requirement from the class of 2029; scores across sittings are superscored.' },
    act: { policy: 'required', note: 'SAT or ACT required.' },
    otherTests: 'Applicants at schools outside the US may instead submit three AP results, or predicted or final IB, A-Level or equivalent national examination results.',
    internationalQualifications: 'IB, A-Levels and national leaving examinations are accepted in place of the SAT/ACT for applicants outside the US.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$98,427 total budget',
    items: [
      { label: 'Tuition', amount: 71697 },
      { label: 'Fees', amount: 2157 },
      { label: 'Housing', amount: 13032 },
      { label: 'Food', amount: 8496 },
      { label: 'Books, course materials and supplies', amount: 1005 },
      { label: 'Personal expenses', amount: 2040 },
      { label: 'Health insurance', amount: 5216 },
      { label: 'Computer (entering students)', amount: 1700 }
    ],
    billedSubtotal: 95382,
    totalText: '$98,427 total budget, plus health insurance and a computer allowance for new students',
    note: 'Dartmouth’s published 2026–27 budget for the three-term year. Travel is added at a minimum of $250.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'No separate competition: every admitted student who applies for aid has their full demonstrated need met.',
      howToApply: 'Apply for aid at the same time as admission; Dartmouth’s no-loan policy means need is met with scholarship, grant and work.',
      note: 'Dartmouth is need-blind for all applicants regardless of citizenship and meets 100% of demonstrated need with no loans. Families with income up to $65,000 and typical assets have no parent contribution; families up to $125,000 are guaranteed a full-tuition scholarship — both apply regardless of citizenship.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: true,
      forms: ['CSS Profile'],
      deadlines: 'Same as the admission round',
      note: 'Dartmouth extended need-blind admission to all international citizens from the class of 2026.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Universal need-blind admissions policy', url: 'https://admissions.dartmouth.edu/apply-dartmouth/universal-need-blind-policy' },
    { label: 'International students — financial aid', url: 'https://financialaid.dartmouth.edu/apply-aid/international-students' },
    { label: 'Cost of attendance 2026–2027', url: 'https://financialaid.dartmouth.edu/cost-attendance/cost-attendance-2026-2027' },
    { label: 'Standardized testing requirement for applicants outside the US', url: 'https://admissions.dartmouth.edu/apply-dartmouth/standardized-testing-requirement-applicants-attending-schools-outside-us' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'columbia-university',
  name: 'Columbia University',
  country: 'us',
  city: 'New York',
  region: 'New York',
  founded: 1754,
  type: 'Private research university',
  brand: { c1: '#B9D9EB', c2: '#0b3d63', initials: 'CU' },
  description: 'An Ivy League university in Manhattan with a required Core Curriculum of classic texts, science and art. International applicants are read need-aware — the amount of aid requested is part of the decision — but every admitted student’s full demonstrated need is met, with no loans.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','engineering','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','engineering','mathematics','biology','psychology','arts'],
  programNote: 'Applicants choose between Columbia College (liberal arts) and Columbia Engineering. The Core Curriculum takes about a third of the degree. There is no undergraduate business major.',
  links: {
    website: 'https://www.columbia.edu/',
    admissions: 'https://undergrad.admissions.columbia.edu/apply/firstyear',
    internationalAdmissions: 'https://undergrad.admissions.columbia.edu/apply/international/aid',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://cc-seas.financialaid.columbia.edu/',
    financialAid: 'https://undergrad.admissions.columbia.edu/apply/international/aid',
    programs: 'https://bulletin.columbia.edu/columbia-college/',
    cost: 'https://undergrad.admissions.columbia.edu/affordability/cost'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Binding' },
      { name: 'Regular Decision', date: '1 January', note: 'Decisions by early April' }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiver: 'Fee waivers available through the application' },
    documents: ['Common Application with Columbia-specific questions', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Two teacher recommendations and a counsellor recommendation',
    essay: 'Common Application essay plus Columbia’s short-answer questions',
    interview: null,
    notes: [
      'International applicants must indicate on the admission application that they will apply for aid. Those admitted without requesting aid cannot apply for it later, even if circumstances change.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Columbia’s international applicant pages for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Columbia has kept a test-optional policy for first-year applicants; confirm for your entry year.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International curricula are assessed in their own context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$72,800 tuition',
    items: [
      { label: 'Tuition (two terms at $36,400)', amount: 72800 },
      { label: 'Columbia College student fees (both terms)', amount: 956 },
      { label: 'One-time document fee (first registration)', amount: 105 },
      { label: 'One-time transcript and orientation fees (new students)', amount: 730 },
      { label: 'Housing, food, books and personal expenses', text: 'Added on top; see Columbia’s cost estimator' }
    ],
    billedSubtotal: null,
    totalText: '$72,800 tuition plus fees, housing, food and personal expenses',
    note: 'Columbia publishes tuition per term and gives a full cost estimate through its own tool; the average aid award for international recipients is $79,375.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Admission is need-aware for international applicants, so requesting a large amount of aid can affect the decision. Once admitted, need is met in full.',
      howToApply: 'Indicate the intention to apply for aid on the admission application and submit the CSS Profile.',
      note: 'Columbia meets 100% of demonstrated need for all admitted students regardless of citizenship and includes no loans in aid packages. International students are not eligible for US federal aid, so all of their aid comes from Columbia’s own funds.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile'],
      deadlines: 'Same round as the admission application',
      note: 'The average award for international aid recipients is $79,375, usually a Columbia grant plus a work-study job.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International financial aid', url: 'https://undergrad.admissions.columbia.edu/apply/international/aid' },
    { label: 'Cost and aid', url: 'https://undergrad.admissions.columbia.edu/affordability/cost' },
    { label: 'Fees, expenses and financial aid (Columbia College bulletin)', url: 'https://bulletin.columbia.edu/columbia-college/fees-expenses-financial-aid/' },
    { label: 'Application fees and fee waivers', url: 'https://undergrad.admissions.columbia.edu/apply/process/application-fees' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'university-of-pennsylvania',
  name: 'University of Pennsylvania',
  shortName: 'Penn',
  country: 'us',
  city: 'Philadelphia',
  region: 'Pennsylvania',
  founded: 1740,
  type: 'Private research university',
  brand: { c1: '#011F5B', c2: '#990000', initials: 'PENN' },
  description: 'An Ivy League university in Philadelphia and the only one with an undergraduate business school, Wharton. International applicants are read need-aware, but those admitted with aid have 100% of demonstrated need met with grants and work — never loans.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','humanities','social-sciences','computer-science','engineering','mathematics','biology','psychology','arts','medicine','education'],
  englishTaughtPrograms: ['business','economics','humanities','social-sciences','computer-science','engineering','mathematics','biology','psychology','arts','medicine','education'],
  programNote: 'Applicants apply to one of four undergraduate schools: Arts and Sciences, Engineering, Nursing or Wharton (business). The Health & Medicine tag reflects the undergraduate nursing degree; medicine (MD) is graduate study.',
  links: {
    website: 'https://www.upenn.edu/',
    admissions: 'https://admissions.upenn.edu/how-to-apply/first-year-applicants',
    internationalAdmissions: 'https://admissions.upenn.edu/affording-penn/international-aid',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://srfs.upenn.edu/financial-aid',
    financialAid: 'https://admissions.upenn.edu/affording-penn/international-aid',
    programs: 'https://catalog.upenn.edu/undergraduate/',
    cost: 'https://srfs.upenn.edu/costs-budgeting/undergraduate-cost-attendance'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Binding; decisions in December' },
      { name: 'Regular Decision', date: '5 January', note: 'Decisions by 1 April' }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiver: 'Fee waiver can be requested through the Common or Coalition Application' },
    documents: ['Common or Coalition Application with Penn’s supplement', 'School transcript and reports', 'Teacher recommendations', 'SAT or ACT scores'],
    recommendations: 'Two teacher recommendations and a counsellor recommendation',
    essay: 'Personal essay plus Penn-specific questions',
    interview: 'An optional alumni interview may be offered',
    notes: [
      'International students must request financial aid when they apply. Aid cannot be requested later, and the first-year decision applies for all four years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Penn’s testing page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Penn requires the SAT or ACT; applicants facing hardship can request a waiver in the application. For Early Decision the last accepted sittings are October (ACT) or November (SAT); for Regular Decision, December.' },
    act: { policy: 'required', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted; check Penn’s testing page for country-specific guidance.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$94,582 total charges',
    items: [
      { label: 'Tuition', amount: 65670 },
      { label: 'Fees', amount: 8308 },
      { label: 'Housing', amount: 13644 },
      { label: 'Meal plan', amount: 6960 }
    ],
    billedSubtotal: 94582,
    totalText: '$94,582 for tuition, fees, room and board',
    note: 'Charges approved by the Penn Trustees for 2026–27, a 3.8% increase. Books, travel and personal expenses are additional.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Penn is need-aware for international applicants, so the amount of aid requested is part of the admission decision.',
      howToApply: 'Request aid at the time of application; admitted international aid recipients receive grants and work-study covering 100% of demonstrated need.',
      note: 'Penn states that international students admitted as financial aid recipients receive aid covering 100% of demonstrated need with grants and work-study, and that no loans are included. Students not admitted with aid cannot apply for it later.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile'],
      deadlines: 'Same round as the admission application',
      note: 'Penn is need-blind only for citizens and permanent residents of the United States, Canada and Mexico.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International aid', url: 'https://admissions.upenn.edu/affording-penn/international-aid' },
    { label: 'Undergraduate cost of attendance', url: 'https://srfs.upenn.edu/costs-budgeting/undergraduate-cost-attendance' },
    { label: 'Penn Trustees approve 2026–2027 undergraduate charges', url: 'https://penntoday.upenn.edu/news/penn-trustees-approve-2026-2027-undergraduate-charges-and-financial-aid-budget' },
    { label: 'Testing', url: 'https://admissions.upenn.edu/how-to-apply/preparing-your-application/testing' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'cornell-university',
  name: 'Cornell University',
  country: 'us',
  city: 'Ithaca',
  region: 'New York',
  founded: 1865,
  type: 'Private research university with state contract colleges',
  brand: { c1: '#B31B1B', c2: '#6b0f0f', initials: 'CU' },
  description: 'The largest Ivy League university, in upstate New York, with an unusually wide range of undergraduate degrees — from engineering and computing to agriculture, hotel administration and industrial relations. International applicants are read need-aware, but admitted students have their full need met.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','business','economics','humanities','social-sciences','mathematics','biology','psychology','arts','education','medicine'],
  englishTaughtPrograms: ['engineering','computer-science','business','economics','humanities','social-sciences','mathematics','biology','psychology','arts','education','medicine'],
  programNote: 'Applicants apply to one of Cornell’s undergraduate colleges, and requirements differ between them. Four "contract colleges" (Agriculture and Life Sciences, Human Ecology, Industrial and Labor Relations, and part of Veterinary Medicine) charge lower tuition to New York residents but the full rate to everyone else.',
  links: {
    website: 'https://www.cornell.edu/',
    admissions: 'https://admissions.cornell.edu/how-to-apply/first-year-applicants',
    internationalAdmissions: 'https://admissions.cornell.edu/how-to-apply/first-year-international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://finaid.cornell.edu/',
    financialAid: 'https://finaid.cornell.edu/first-year-and-transfer-students-international',
    programs: 'https://courses.cornell.edu/',
    cost: 'https://finaid.cornell.edu/cost-to-attend'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Binding; decisions in mid-December' },
      { name: 'Regular Decision', date: '2 January', note: 'Decisions in early April' }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiver: 'Fee waiver available for applicants for whom the fee is a burden and who apply for financial aid' },
    documents: ['Common Application with Cornell’s college-specific questions', 'School transcript and reports', 'Teacher recommendations', 'English proficiency evidence'],
    recommendations: 'Teacher and counsellor recommendations; some colleges ask for a specific subject teacher',
    essay: 'Common Application essay plus Cornell’s college-specific writing supplement',
    interview: null,
    notes: ['International applicants complete the CSS Profile as soon as possible after 1 October of the year before entry.']
  },
  english: {
    ielts: { min: 7.5, recommended: null, note: 'IELTS Academic 7.5 is listed as the minimum competitive score.' },
    toefl: { min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }, { period: 'post2026', min: 5, recommended: 5.5 }], note: 'TOEFL iBT 100 for tests before January 2026; 5.0 minimum and 5.5 recommended on the new scale from January 2026.' },
    duolingo: { min: 130, recommended: null, note: 'Duolingo English Test 130 is listed as the minimum competitive score.' },
    waiver: 'Not required for US citizens and permanent residents, native English speakers, or applicants taught in English throughout secondary school.',
    note: 'Cambridge C1 Advanced and C2 Proficiency are also accepted. Unofficial scores may be submitted with the application; official scores are required on enrolment.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Cornell’s testing policy differs by college and entry year — check the policy for your college.' },
    act: { policy: 'optional', note: 'Same as the SAT; confirm with your college.' },
    otherTests: null,
    internationalQualifications: 'International curricula are assessed in context; some colleges ask for specific subject preparation.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$73,946 tuition (endowed colleges)',
    items: [
      { label: 'Tuition — endowed colleges and all non-New York students', amount: 73946 },
      { label: 'Tuition — New York residents in the contract colleges (for comparison)', amount: 49816 },
      { label: 'Average housing and dining', amount: 21348 }
    ],
    billedSubtotal: 95294,
    totalText: 'About $95,294 in tuition, housing and dining before books, travel and personal expenses',
    note: 'Rates approved by the Cornell Board of Trustees for 2026–27. International students pay the endowed rate in every college.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Need-aware admission for international applicants; aid offers can include reasonable student loans depending on family income.',
      howToApply: 'File the CSS Profile with the admission application.',
      note: 'Cornell meets 100% of admitted international undergraduates’ demonstrated need with Cornell grants, an annual work-study award and, depending on income, reasonable student loans — so a package is not always loan-free.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile'],
      deadlines: 'Complete the CSS Profile as soon as possible after 1 October; check the exact deadline for your round',
      note: 'Cornell states admission decisions for international applicants are need-aware.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'First-year and transfer students — international', url: 'https://finaid.cornell.edu/first-year-and-transfer-students-international' },
    { label: 'First-year international applicants', url: 'https://admissions.cornell.edu/how-to-apply/first-year-international-applicants' },
    { label: 'Cost to attend', url: 'https://finaid.cornell.edu/cost-to-attend' },
    { label: 'Board of Trustees approves 2026-27 budget parameters', url: 'https://news.cornell.edu/stories/2026/03/board-trustees-approves-2026-27-budget-parameters' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'stanford-university',
  name: 'Stanford University',
  country: 'us',
  city: 'Stanford',
  region: 'California',
  founded: 1885,
  type: 'Private research university',
  brand: { c1: '#8C1515', c2: '#4d0b0b', initials: 'SU' },
  description: 'A private research university in Silicon Valley, strongest in engineering, computer science and entrepreneurship. Aid resources for international students are limited and requesting aid is part of the admission decision, but Stanford says it meets the full need of every admitted student, whatever their citizenship.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['computer-science','engineering','mathematics','economics','humanities','social-sciences','biology','psychology','arts','education'],
  englishTaughtPrograms: ['computer-science','engineering','mathematics','economics','humanities','social-sciences','biology','psychology','arts','education'],
  programNote: 'Stanford has no undergraduate business degree; Management Science and Engineering and Economics are the usual routes. Undergraduates choose from about 65 majors and can change freely in the first two years.',
  links: {
    website: 'https://www.stanford.edu/',
    admissions: 'https://admission.stanford.edu/apply/first-year/',
    internationalAdmissions: 'https://admission.stanford.edu/apply/international/index.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://financialaid.stanford.edu/undergrad/',
    financialAid: 'https://financialaid.stanford.edu/undergrad/how/international.html',
    programs: 'https://bulletin.stanford.edu/',
    cost: 'https://studentservices.stanford.edu/tuition-rates/2026-2027-undergraduate-tuition-rates'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Restrictive Early Action', date: '1 November', note: 'Non-binding but restricts other early applications' },
      { name: 'Regular Decision', date: '5 January', note: null }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Fee waivers are available through the Common Application; the fee amount was not confirmed on the pages consulted.' },
    documents: ['Common Application with Stanford questions', 'School transcript and school report', 'Teacher recommendations', 'SAT or ACT scores'],
    recommendations: 'Two teacher recommendations and a counsellor report',
    essay: 'Common Application essay plus the Stanford questions',
    interview: null,
    notes: ['International applicants who may need aid must say so on the admission application — the request is part of the decision.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed: Stanford’s admission pages could not be read from here (the site blocked automated access).' },
    toefl: { min: null, recommended: null, note: 'Not confirmed — check Stanford’s international applicant page.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed.' },
    waiver: null,
    note: 'Stanford’s admission website blocks automated readers, so its English requirements could not be verified here. Check the official page before applying.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Stanford requires the SAT or ACT; scores may be self-reported at application.' },
    act: { policy: 'required', note: 'SAT or ACT required.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$67,731 tuition',
    items: [
      { label: 'Tuition (full-time, 12–20 units a quarter)', amount: 67731 },
      { label: 'Standard room and board', amount: 22944 },
      { label: 'Tuition per quarter', amount: 22577 }
    ],
    billedSubtotal: 90675,
    totalText: 'About $90,675 for tuition, room and board before books, travel and personal expenses',
    note: 'Stanford held tuition flat for 2026–27. Families receiving aid pay less; the university publishes a full student budget separately.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Stanford says aid resources for international citizens are limited and that requesting aid is a factor in the admission decision, so the route is narrow.',
      howToApply: 'Indicate the need for aid on the admission application; admitted students with eligibility are funded from institutional money.',
      note: 'Stanford states that aid is based on demonstrated need and that it meets the full need of all admitted students regardless of citizenship, while noting that resources for international citizens are limited.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['International Student Application for Financial Assistance'],
      deadlines: 'Same round as the admission application',
      note: 'Stanford is need-blind only for US citizens, permanent residents, undocumented and eligible non-citizen students.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://financialaid.stanford.edu/undergrad/how/international.html' },
    { label: 'International applicants', url: 'https://admission.stanford.edu/apply/international/index.html' },
    { label: '2026–2027 undergraduate tuition rates', url: 'https://studentservices.stanford.edu/tuition-rates/2026-2027-undergraduate-tuition-rates' },
    { label: 'Stanford holds undergraduate tuition steady for 2026-27', url: 'https://news.stanford.edu/stories/2026/02/undergraduate-tuition-rates-2026-2027' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'amherst-college',
  name: 'Amherst College',
  country: 'us',
  city: 'Amherst',
  region: 'Massachusetts',
  founded: 1821,
  type: 'Private liberal arts college',
  brand: { c1: '#3F1F69', c2: '#22103a', initials: 'AC' },
  description: 'A small liberal arts college in Massachusetts with an open curriculum and no required courses outside the major. It is one of the few colleges in the United States that admits international students without regard to financial need and then meets that need in full.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','mathematics','computer-science','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','mathematics','computer-science','biology','psychology','arts'],
  programNote: 'Amherst has about 40 majors and no distribution requirements. Students may also take courses at the other Five College campuses, including UMass Amherst.',
  links: {
    website: 'https://www.amherst.edu/',
    admissions: 'https://www.amherst.edu/admission/apply/firstyear',
    internationalAdmissions: 'https://www.amherst.edu/admission/apply/international',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.amherst.edu/offices/financialaid/international_students',
    financialAid: 'https://www.amherst.edu/offices/financialaid/international_students',
    programs: 'https://www.amherst.edu/academiclife/departments',
    cost: 'https://www.amherst.edu/tuition'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', entryTerm: 'Autumn 2027', dateISO: '2026-11-09', date: '9 November 2026', note: 'Financial aid application due 13 November 2026' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-05', date: '5 January 2027', note: 'Financial aid application due 15 January 2027' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Fee waivers are granted automatically to applicants who meet the College Board criteria in the Common Application profile.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Amherst’s supplement',
    interview: null,
    notes: []
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Amherst’s international applicant page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Amherst is test-optional and accepts self-reported scores; admitted students who enrol must later send official reports for any scores they submitted.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$96,360 comprehensive fee',
    items: [
      { label: 'Tuition (two semesters at $37,665)', amount: 75330 },
      { label: 'Housing (two semesters at $5,490)', amount: 10980 },
      { label: 'Meals (two semesters at $4,670)', amount: 9340 },
      { label: 'Student activities fee (two semesters at $355)', amount: 710 }
    ],
    billedSubtotal: 96360,
    totalText: '$96,360 comprehensive fee for the year',
    note: 'Amherst publishes the comprehensive fee per semester ($48,180); books, travel and personal expenses are additional. Aid recipients pay far less.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Admission itself is highly selective, but aid is not a separate competition: need is met in full with no gap.',
      howToApply: 'Apply for aid alongside the admission application by the financial aid deadline for your round.',
      note: 'Amherst states that it admits international students without regard to their level of financial need or their request for aid, and meets 100% of calculated need for admitted international students who apply for aid, with no unmet gap.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: true,
      forms: ['CSS Profile'],
      deadlines: '13 November 2026 (Early Decision) or 15 January 2027 (Regular Decision)',
      note: 'Amherst’s aid is entirely need-based; there are no merit scholarships.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://www.amherst.edu/offices/financialaid/international_students' },
    { label: 'Calendar and deadlines', url: 'https://www.amherst.edu/admission/apply/firstyear/calendar_deadlines' },
    { label: 'Fees for the 2026-27 academic year', url: 'https://www.amherst.edu/offices/financialaid/forms_links/fees_2026-2027_academic_year' },
    { label: 'Standardized testing policy', url: 'https://www.amherst.edu/admission/apply/firstyear/testing' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'bowdoin-college',
  name: 'Bowdoin College',
  country: 'us',
  city: 'Brunswick',
  region: 'Maine',
  founded: 1794,
  type: 'Private liberal arts college',
  brand: { c1: '#000000', c2: '#1f1f1f', initials: 'BC' },
  description: 'A liberal arts college on the coast of Maine, known for its food, its outing club and a no-loan aid policy. Bowdoin is need-blind for international first-year applicants and meets the full calculated need of everyone it admits without loans.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','mathematics','computer-science','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','mathematics','computer-science','biology','psychology','arts'],
  programNote: 'Bowdoin offers about 40 majors in the liberal arts and sciences; there is no undergraduate business or engineering degree, though engineering is available through dual-degree partnerships.',
  links: {
    website: 'https://www.bowdoin.edu/',
    admissions: 'https://www.bowdoin.edu/admissions/apply/',
    internationalAdmissions: 'https://www.bowdoin.edu/admissions/apply/international-students/index.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.bowdoin.edu/student-aid/',
    financialAid: 'https://www.bowdoin.edu/student-aid/understanding-your-aid/international.html',
    programs: 'https://www.bowdoin.edu/academics/',
    cost: 'https://www.bowdoin.edu/student-aid/cost-of-attendance/index.html'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; financial aid application due the same day' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding; financial aid application due 1 January' },
      { name: 'Regular Decision', date: '5 January', note: null }
    ],
    applicationFee: { amount: 70, currency: 'USD', waiver: 'The $70 fee is waived automatically for applicants for financial aid and first-generation applicants' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Bowdoin’s supplement',
    interview: null,
    notes: [
      'International applicants do not submit aid materials until after they are admitted, and then have seven days to send everything.',
      'Waitlisted and transfer applicants are considered need-aware, and international transfer students are not eligible for Bowdoin aid.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Bowdoin’s international student page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Bowdoin does not require the SAT or ACT; the application asks whether you want submitted scores to be considered.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,400 comprehensive fee',
    items: [
      { label: 'Tuition and fees', amount: 74968 },
      { label: 'Housing and food', amount: 20432 },
      { label: 'Books, supplies and personal expenses (estimate)', amount: 2500 },
      { label: 'Student health plan', amount: 4442 }
    ],
    billedSubtotal: 95400,
    totalText: '$95,400 comprehensive fee, plus about $2,500 in personal costs and the health plan if you need it',
    note: 'Bowdoin’s comprehensive fee covers tuition, the student activities fee, housing and the 21-meal food plan.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Need is met for everyone admitted; the difficulty is admission itself.',
      howToApply: 'Apply for admission; international applicants submit aid materials within seven days of an admission offer.',
      note: 'Bowdoin states it is need-blind for all first-year applicants including international students, and meets full calculated need without loans. Awards combine Bowdoin scholarship with a $2,400 campus job expectation.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: true,
      forms: ['Submitted after admission, on Bowdoin’s instructions'],
      deadlines: 'Within seven days of the admission offer for international students',
      note: 'The need-blind policy does not extend to waitlisted or transfer applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Bowdoin expands need-blind admissions to international students', url: 'https://www.bowdoin.edu/news/2022/07/bowdoin-college-expands-need-blind-admissions-policy-to-include-international-students.html' },
    { label: 'Understanding your aid — international students', url: 'https://www.bowdoin.edu/student-aid/understanding-your-aid/international.html' },
    { label: 'Cost of attendance', url: 'https://www.bowdoin.edu/student-aid/cost-of-attendance/index.html' },
    { label: 'Application dates and deadlines', url: 'https://www.bowdoin.edu/admissions/apply/dates-deadlines/index.html' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'university-of-notre-dame',
  name: 'University of Notre Dame',
  country: 'us',
  city: 'Notre Dame',
  region: 'Indiana',
  founded: 1842,
  type: 'Private Catholic research university',
  brand: { c1: '#0C2340', c2: '#C99700', initials: 'ND' },
  description: 'A Catholic research university in Indiana with a strong residential college life. In 2024 it extended need-blind admission to international applicants and dropped loans from aid offers, so it is one of the few large private universities that treats international and domestic aid the same way.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','engineering','computer-science','humanities','social-sciences','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['business','economics','engineering','computer-science','humanities','social-sciences','mathematics','biology','psychology','arts','education'],
  programNote: 'Notre Dame has four undergraduate colleges — Arts and Letters, Science, Engineering and the Mendoza College of Business — plus the School of Architecture. First-year students enter a shared first-year programme before declaring a major.',
  links: {
    website: 'https://www.nd.edu/',
    admissions: 'https://admissions.nd.edu/apply/',
    internationalAdmissions: 'https://admissions.nd.edu/apply/resources-for/international-applicants/application-information/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://financialaid.nd.edu/',
    financialAid: 'https://financialaid.nd.edu/apply-or-renew/international-students/',
    programs: 'https://www.nd.edu/academics/',
    cost: 'https://studentaccounts.nd.edu/rates/undergraduate-programs/'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Restrictive Early Action', date: '1 November', note: 'Non-binding, but you may not apply Early Decision elsewhere; decisions mid-December' },
      { name: 'Regular Decision', date: '4 January', note: null }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiver: 'Fee waiver option available' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendation', 'CSS Profile for aid applicants'],
    recommendations: 'A counsellor and a teacher recommendation',
    essay: 'Notre Dame writing supplement in addition to the personal essay',
    interview: null,
    notes: ['International applicants who want need-based aid must complete the CSS Profile, available from 1 October.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Notre Dame’s international applicant pages for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Test-optional through the 2026–27 cycle; Notre Dame has said testing will be required again from the 2027–28 admissions cycle.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$88,786 basic fee for on-campus students',
    items: [
      { label: 'Basic fee, on campus (two semesters at $44,393)', amount: 88786 },
      { label: 'Tuition and fees, off campus (two semesters at $34,897)', amount: 69794 }
    ],
    billedSubtotal: 88786,
    totalText: '$88,786 a year on campus, covering tuition, fees, housing and food',
    note: 'Notre Dame publishes rates per semester. From 2026–27 families earning under $150,000 receive need-based aid covering tuition, and most families under $60,000 have tuition, fees, housing and food covered.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Aid is assessed rather than competed for, and loans are no longer part of first-year offers.',
      howToApply: 'Submit the CSS Profile with the admission application.',
      note: 'Notre Dame states it meets 100% of demonstrated need for all undergraduates, domestic and international, and that its need-blind policy now covers international applicants. Students from families earning under about $60,000 typically have tuition, fees, housing and food covered.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: true,
      forms: ['CSS Profile'],
      deadlines: 'With the admission application; the CSS Profile opens on 1 October',
      note: 'Student loans are not part of aid offers for first-year and transfer students entering from autumn 2025.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International undergraduate students — financial aid', url: 'https://financialaid.nd.edu/apply-or-renew/international-students/' },
    { label: 'Pathways to Notre Dame (need-blind for international students, no-loan policy)', url: 'https://financialaid.nd.edu/contact/frequently-asked-questions/pathways-to-notre-dame/' },
    { label: 'Undergraduate rates 2026–27', url: 'https://studentaccounts.nd.edu/rates/undergraduate-programs/' },
    { label: 'Restrictive Early Action and Regular Decision', url: 'https://admissions.nd.edu/apply/early-action-regular-decision/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'williams-college',
  name: 'Williams College',
  country: 'us',
  city: 'Williamstown',
  region: 'Massachusetts',
  founded: 1793,
  type: 'Private liberal arts college',
  brand: { c1: '#4B2E83', c2: '#2a1a4a', initials: 'WC' },
  description: 'A small liberal arts college in the Berkshires, famous for its tutorial system of two students and one professor. Admission is need-aware for international applicants, but its aid packages are unusually complete: they meet full need for four years and include textbooks and one flight home a year.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','mathematics','computer-science','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','mathematics','computer-science','biology','psychology','arts'],
  programNote: 'Williams teaches about 25 subject areas plus its signature Oxford-style tutorials, and runs a January "Winter Study" term. There is no undergraduate business or engineering degree.',
  links: {
    website: 'https://www.williams.edu/',
    admissions: 'https://www.williams.edu/admission-aid/apply-overview/',
    internationalAdmissions: 'https://www.williams.edu/admission-aid/apply/international/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.williams.edu/admission-aid/financial-aid/',
    financialAid: 'https://www.williams.edu/admission-aid/financial-aid/international/',
    programs: 'https://www.williams.edu/academics/',
    cost: 'https://www.williams.edu/admission-aid/tuition-aid/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision — financial aid application', date: '15 November 2025', note: 'Deadline published for the 2025–26 cycle' },
      { name: 'Regular Decision — financial aid application', date: '5 January 2026', note: 'Deadline published for the 2025–26 cycle' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus the Williams supplement',
    interview: null,
    notes: [
      'International applicants must tick "yes" to applying for financial aid on the admission application — no other aid materials are sent at that stage.',
      'International students who do not apply for aid when they apply for admission can never receive Williams aid later.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check the Williams international applicant page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted — check the Williams testing policy for your entry year.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: null,
    currency: 'USD',
    headline: 'Not confirmed — see the Williams tuition page',
    items: [
      { label: 'Comprehensive fee', text: 'Published on the Williams tuition and aid page; the current figure was not confirmed here' },
      { label: 'Average aid award for international students', amount: 90000 }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — check the official tuition page',
    note: 'Williams states that aid awards for international students average more than $90,000 a year and that about 70% of its international students receive aid.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Need-aware admission for international applicants, and about 70% of enrolled international students hold aid.',
      howToApply: 'Indicate the intent to apply for aid on the admission application; if admitted, follow the instructions sent with the offer.',
      note: 'Williams states that its international awards meet 100% of demonstrated need, are guaranteed for four years and include free textbooks, lab and art supplies, music lessons, storage and one round-trip flight home each year.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Indicate intent on the admission application; documents requested after admission'],
      deadlines: 'Financial aid application deadlines follow the admission round',
      note: 'Williams says plainly that it is not need-blind for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Financial aid instructions for international applicants', url: 'https://www.williams.edu/admission-aid/financial-aid/international/' },
    { label: 'Requirements and deadlines', url: 'https://www.williams.edu/admission-aid/tuition-aid/requirements-and-deadlines/' },
    { label: 'Additional information for international applicants', url: 'https://www.williams.edu/admission-aid/apply/international/' }
  ],
  lastVerified: '2026-09-20'
}
);

/* ---- Batch added 20 September 2026: ten more US private universities
   and colleges. Same rule: the aid line for international students is
   stated explicitly, and anything unpublished stays null. ---- */
window.UNIPATH.universities.push(
{
  id: 'duke-university',
  name: 'Duke University',
  country: 'us',
  city: 'Durham',
  region: 'North Carolina',
  founded: 1838,
  type: 'Private research university',
  brand: { c1: '#012169', c2: '#00539B', initials: 'DU' },
  description: 'A private research university in North Carolina with strong engineering, public policy and medicine, and a famous basketball culture. Duke funds only about 20–25 international students a year on full need-based aid, and applicants who ask for that aid are read in a much more competitive pool.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','education','medicine'],
  englishTaughtPrograms: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','education','medicine'],
  programNote: 'Applicants choose Trinity College of Arts & Sciences or the Pratt School of Engineering. There is no undergraduate business degree; economics and public policy are the usual routes. The Health & Medicine tag covers pre-health study, not an undergraduate medical degree.',
  links: {
    website: 'https://www.duke.edu/',
    admissions: 'https://admissions.duke.edu/apply/',
    internationalAdmissions: 'https://admissions.duke.edu/apply/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://financialaid.duke.edu/',
    financialAid: 'https://financialaid.duke.edu/international-students/',
    programs: 'https://trinity.duke.edu/undergraduate',
    cost: 'https://admissions.duke.edu/financial-support/'
  },
  admissions: {
    platforms: ['Common Application', 'QuestBridge Application'],
    deadlines: [
      { name: 'Early Decision', entryTerm: 'Autumn 2027', dateISO: '2026-11-02', date: '2 November 2026', note: 'Binding' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: null }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiver: 'A fee waiver request can be sent with the Common Application in place of the $85 fee' },
    documents: ['Common Application with the Duke supplement', 'School transcript and School Report', 'Teacher recommendations'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Duke’s supplemental questions',
    interview: 'An optional alumni interview may be offered',
    notes: [
      'International applicants must ask for financial aid in the first-year application: those admitted without it can never receive Duke aid as undergraduates.',
      'There is no need-based or merit aid for international transfer students.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No English test is required; IELTS Academic is accepted if you choose to send it.' },
    toefl: { min: null, recommended: null, note: 'Accepted but not required, and no minimum is published.' },
    duolingo: { min: null, recommended: null, note: 'Accepted but not required, and no minimum is published.' },
    waiver: 'No English proficiency score is required of any applicant.',
    note: 'Duke writes that it does not require English proficiency scores but is happy to consider them; Cambridge C1/C2, the Duolingo English Test, IELTS Academic, PTE Academic and TOEFL are all accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Duke is test-optional for first-year and transfer applicants in the 2026–27 cycle, and states that applying without scores is not a disadvantage.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Transcripts from any national system are accepted with an official translation; school reports must come directly from the school.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$98,549 total cost',
    items: [
      { label: 'Tuition', amount: 70265 },
      { label: 'Fees', amount: 2907 },
      { label: 'Housing', amount: 10910 },
      { label: 'Food', amount: 10075 },
      { label: 'Books and supplies', amount: 536 },
      { label: 'Personal expenses', amount: 3274 },
      { label: 'Transportation (within the US)', amount: 582 }
    ],
    billedSubtotal: 94157,
    totalText: '$98,549 in total, of which $94,157 is billed by Duke',
    note: 'International travel costs more than the published transportation allowance, which assumes travel inside the United States.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Very narrow: Duke says the admit rate for foreign citizens seeking aid is usually less than half the overall rate, and only about 20–25 international students a year enrol with full need met.',
      howToApply: 'Tick the financial aid interest box in the first-year application and submit the CSS Profile by the deadline for your round.',
      note: 'Duke states that it admits US citizens, permanent residents and "a limited number of international students" without regard to financial circumstance and meets 100% of each admitted student’s demonstrated need for eight semesters. Packages are not loan-free: the expected loan runs from $0 for families under $65,000 to about $5,000 above $85,001.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile'],
      deadlines: 'With the admission round; the CSS Profile is due 3 November for Early Decision',
      note: 'Aid awards for international students are made for four years and renew automatically.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — Karsh Office of Undergraduate Financial Support', url: 'https://financialaid.duke.edu/international-students/' },
    { label: 'Awarding and policy', url: 'https://financialaid.duke.edu/forms-resources/awarding-policy/' },
    { label: 'Financial support — cost of attendance', url: 'https://admissions.duke.edu/financial-support/' },
    { label: 'Apply — deadlines, fee and testing policy', url: 'https://admissions.duke.edu/apply/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'vanderbilt-university',
  name: 'Vanderbilt University',
  country: 'us',
  city: 'Nashville',
  region: 'Tennessee',
  founded: 1873,
  type: 'Private research university',
  brand: { c1: '#866D4B', c2: '#000000', initials: 'VU' },
  description: 'A private research university in Nashville with a compact, park-like campus and an unusually strong undergraduate education school. A limited number of international first-years receive renewable need-based aid that meets their full need with grants and no loans — but asking for it is part of the admission decision.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','education','medicine'],
  englishTaughtPrograms: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','education','medicine'],
  programNote: 'Applicants choose one of four undergraduate schools: Arts and Science, Engineering, Peabody College of education and human development, or Blair School of Music. Health & Medicine covers pre-health study rather than a medical degree.',
  links: {
    website: 'https://www.vanderbilt.edu/',
    admissions: 'https://admissions.vanderbilt.edu/apply/first-year-process/',
    internationalAdmissions: 'https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admissions.vanderbilt.edu/affordability/opportunity-vanderbilt/',
    financialAid: 'https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/',
    programs: 'https://www.vanderbilt.edu/academics/',
    cost: 'https://admissions.vanderbilt.edu/affordability/'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding; decisions by 15 December. Aid application due the same day' },
      { name: 'Early Decision II', date: '1 January', note: 'Binding; decisions by 15 February. Aid application due the same day' },
      { name: 'Regular Decision', date: '1 January', note: 'Decisions by 1 April; aid application due 1 February' }
    ],
    applicationFee: { amount: 50, currency: 'USD', waiver: 'Vanderbilt accepts every fee waiver request submitted through the Common or Coalition Application' },
    documents: ['Common or Coalition Application', 'Official secondary school transcript', 'Counsellor letter', 'Two academic teacher letters', 'CSS Profile or ISFAA for aid applicants'],
    recommendations: 'A counsellor letter and two academic teacher letters',
    essay: 'Personal essay and short answer responses',
    interview: 'Students schooled outside the US may schedule a video interview with InitialView',
    notes: [
      'All application materials must be in English; translations must come from the school or a certified translator, never the applicant.',
      'No need-based aid is available to international transfer applicants.'
    ]
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'IELTS 7.0 is Vanderbilt’s recommended minimum score.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'post2026', min: null, recommended: 5 }], note: 'The published chart gives a recommended TOEFL iBT score of 5 on the 1–6 scale; TOEFL Essentials 10.5.' },
    duolingo: { min: null, recommended: 130, note: 'Duolingo English Test 130 is the recommended minimum.' },
    waiver: 'Not required if your first language or language of instruction is English, or if you score above 26 on ACT English or above 630 on SAT Evidence-Based Reading and Writing.',
    note: 'Cambridge C1 Advanced or C2 Proficiency 185 and LanguageCert 75 are also accepted. English scores are not superscored and must come directly from the testing agency or a school official.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Testing is optional for autumn 2027 and autumn 2028 entry; Vanderbilt has said scores will be required again for autumn 2029.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: 'Credit is given for scores of 4 or 5 on Advanced Placement exams and 6 or 7 on International Baccalaureate exams, depending on the subject.',
    internationalQualifications: 'International curricula are accepted; transcripts must be officially translated.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$96,896 in direct costs',
    items: [
      { label: 'Tuition', amount: 69822 },
      { label: 'Housing', amount: 15170 },
      { label: 'Food', amount: 8520 },
      { label: 'Student support fee', amount: 3384 },
      { label: 'Books, course materials and supplies', amount: 1100 },
      { label: 'Personal expenses', amount: 1998 }
    ],
    billedSubtotal: 96896,
    totalText: 'About $99,994 in total, of which $96,896 is billed by Vanderbilt',
    note: 'Transportation varies by home country and is added on top.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Only a limited number of international first-years are funded, and they are compared with each other on academics, leadership and need.',
      howToApply: 'Say on the admission application that you are seeking need-based assistance and submit the CSS Profile or the ISFAA by your round’s deadline.',
      note: 'Vanderbilt states that international students with demonstrated need who are admitted have 100% of that need met with grants and scholarships and that packages do not include loans. Opportunity Vanderbilt’s need-blind promise covers US citizens and eligible non-citizens only.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'ISFAA (International Student Financial Aid Application)'],
      deadlines: '1 November 2026 (ED I), 1 January 2027 (ED II), 1 February 2027 (Regular Decision)',
      note: 'Vanderbilt states plainly: "If you indicate on your application for admission that you are seeking need-based assistance, the admission decision will be made on a need-aware basis."'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International costs and finances', url: 'https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/' },
    { label: 'Affordability — estimated costs 2026-27', url: 'https://admissions.vanderbilt.edu/affordability/' },
    { label: 'First-year application process', url: 'https://admissions.vanderbilt.edu/apply/first-year-process/' },
    { label: 'International students — Office of Financial Aid', url: 'https://www.vanderbilt.edu/financialaid/undergraduate/international/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'rice-university',
  name: 'Rice University',
  country: 'us',
  city: 'Houston',
  region: 'Texas',
  founded: 1912,
  type: 'Private research university',
  brand: { c1: '#00205B', c2: '#7C7E7F', initials: 'RU' },
  description: 'A small private research university in Houston, organised around residential colleges and known for engineering, architecture and music. International applicants are read need-aware and the number funded is limited, but those who receive aid have 100% of their need met with Rice grants.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','business'],
  englishTaughtPrograms: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','business'],
  programNote: 'Rice has schools of engineering, natural sciences, social sciences, humanities, architecture, music and business, and every undergraduate belongs to one of eleven residential colleges. Architecture applicants submit a portfolio.',
  links: {
    website: 'https://www.rice.edu/',
    admissions: 'https://admission.rice.edu/apply',
    internationalAdmissions: 'https://admission.rice.edu/apply/first-year-international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://financialaid.rice.edu/',
    financialAid: 'https://financialaid.rice.edu/apply-aid/international-students',
    programs: 'https://ga.rice.edu/',
    cost: 'https://financialaid.rice.edu/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding' },
      { name: 'Early Decision II', date: '4 January', note: 'Binding' },
      { name: 'Regular Decision', date: '4 January', note: null }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiver: 'International applicants cannot request a fee waiver for the $75 fee' },
    documents: ['Common Application and the Rice writing supplement', 'Official school transcript in English', 'Counsellor and two teacher recommendations', 'Evidence of English proficiency', 'International Student Financial Statement'],
    recommendations: 'A school counsellor letter and two teacher letters',
    essay: 'Common Application essay plus the Rice writing supplement',
    interview: null,
    notes: ['Architecture applicants submit a portfolio.']
  },
  english: {
    ielts: { min: 7, recommended: null, note: 'IELTS 7 is the published minimum.' },
    toefl: { min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }, { period: 'post2026', min: 5, recommended: null }], note: 'TOEFL iBT 100 before 21 January 2026, or 5.0 on the scale used from that date.' },
    duolingo: { min: 130, recommended: null, note: 'Duolingo English Test 130 is the published minimum.' },
    waiver: 'Two years of full-time study in English also satisfies the requirement.',
    note: 'Cambridge C1 Advanced or C2 Proficiency 185 is accepted as well.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Rice recommends sending SAT or ACT scores if you have them, but applicants without scores receive full consideration. Scores are superscored across sittings.' },
    act: { policy: 'optional', note: 'Same as the SAT; no preference between the two tests.' },
    otherTests: null,
    internationalQualifications: 'Transcripts in other languages must be accompanied by a certified English translation.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$71,140 tuition',
    items: [
      { label: 'Tuition (first, second and third years)', amount: 71140 },
      { label: 'Room and board', amount: 20530 },
      { label: 'Mandatory fees', amount: 984 }
    ],
    billedSubtotal: 92654,
    totalText: 'About $92,654 in tuition, fees, room and board before books, travel and personal expenses',
    note: 'Rice set these rates while reaffirming its promise of full-need, loan-free aid.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Rice funds a limited number of international first-years and reads their applications need-aware.',
      howToApply: 'Request aid with the admission application and file the documents Rice lists for international applicants.',
      note: 'Rice states that international students who receive need-based aid have 100% of demonstrated need met with institutional grant aid, but are not eligible for The Rice Investment, its published tuition guarantee for US families. Students admitted without requesting aid cannot apply in later years.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Documents listed on Rice’s international aid page'],
      deadlines: 'With the admission round',
      note: 'Rice writes that its international policy "for both admission and financial aid is need aware".'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — Office of Financial Aid', url: 'https://financialaid.rice.edu/apply-aid/international-students' },
    { label: 'First-year international applicants', url: 'https://admission.rice.edu/apply/first-year-international-applicants' },
    { label: 'Rice sets 2026-27 undergraduate tuition', url: 'https://news.rice.edu/news/2026/rice-sets-2026-27-undergraduate-tuition-while-reaffirming-commitment-full-need-loan-free' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'northwestern-university',
  name: 'Northwestern University',
  country: 'us',
  city: 'Evanston',
  region: 'Illinois',
  founded: 1851,
  type: 'Private research university',
  brand: { c1: '#4E2A84', c2: '#2d1750', initials: 'NU' },
  description: 'A private research university on Lake Michigan just north of Chicago, known for journalism, communication, engineering and its quarter system. A small group of international first-years receives need-based aid each year; admission for them is need-aware, but every admitted student’s full need is met for four years.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','education','medicine'],
  englishTaughtPrograms: ['engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','education','medicine'],
  programNote: 'Applicants apply to one of six undergraduate schools, including Medill (journalism), the School of Communication and the Bienen School of Music. Health & Medicine covers pre-health study, not a medical degree.',
  links: {
    website: 'https://www.northwestern.edu/',
    admissions: 'https://admissions.northwestern.edu/apply/',
    internationalAdmissions: 'https://admissions.northwestern.edu/apply/identities/international.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://undergradaid.northwestern.edu/',
    financialAid: 'https://admissions.northwestern.edu/tuition-aid/international-student-aid/',
    programs: 'https://catalogs.northwestern.edu/undergraduate/',
    cost: 'https://www.northwestern.edu/sfs/tuition/undergraduate/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Binding; decisions in mid-December' },
      { name: 'Regular Decision', date: '4 January', note: null }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiver: 'A fee waiver can be requested instead of the $75 fee' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendation', 'English proficiency score where required'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Northwestern’s supplemental questions',
    interview: null,
    notes: ['International applicants who may need aid must ask for it in the admission application; those admitted without aid cannot apply in later years.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Required where English is not your first language and your schooling was not in English; no minimum score is published.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum published. The TOEFL ITP Plus for China is not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum published.' },
    waiver: 'Not required if English is your first language or your secondary schooling was in English.',
    note: 'Northwestern names the TOEFL iBT, IELTS (including IELTS Indicator) and the Duolingo English Test as accepted evidence.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Northwestern does not require the SAT or ACT from first-year or transfer applicants; scores may be sent but are not required.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Applications are read in the context of the applicant’s own school system.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$71,802 tuition',
    items: [
      { label: 'Tuition', amount: 71802 },
      { label: 'Standard room and board', amount: 22941 },
      { label: 'Fees', amount: 1260 }
    ],
    billedSubtotal: 96003,
    totalText: 'About $96,003 for tuition, fees, room and board before books, travel and personal expenses',
    note: 'Northwestern says most families earning under $70,000 pay nothing, and that over 55% of students receive university aid.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Northwestern says its acceptance rate for international applicants requesting aid is lower than for those who do not, and only a small group is funded each year.',
      howToApply: 'Ask for aid in the admission application and file the CSS Profile or the ISAFA.',
      note: 'Northwestern guarantees to meet 100% of all admitted first-year students’ demonstrated need for all four years, and issues four-year awards to international students so families can plan ahead.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'ISAFA (International Student Application for Financial Assistance)'],
      deadlines: 'With the admission round',
      note: 'Northwestern states: "We are need-aware for international students, meaning that a request for financial aid consideration and the amount of financial aid you require may factor into your admission decision."'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants — applying for financial aid', url: 'https://admissions.northwestern.edu/apply/identities/international.html' },
    { label: 'International student aid', url: 'https://admissions.northwestern.edu/tuition-aid/international-student-aid/' },
    { label: 'Northwestern sets tuition and fees for 2026-2027', url: 'https://news.northwestern.edu/stories/2026/05/northwestern-sets-tuition-and-fees-for-2026-2027-academic-year' },
    { label: 'Undergraduate financial aid — aid commitment', url: 'https://undergradaid.northwestern.edu/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'university-of-chicago',
  name: 'University of Chicago',
  country: 'us',
  city: 'Chicago',
  region: 'Illinois',
  founded: 1890,
  type: 'Private research university',
  brand: { c1: '#800000', c2: '#4d0000', initials: 'UC' },
  description: 'A private research university on the South Side of Chicago, built around a demanding Core curriculum and famous for economics and the social sciences. International first-years can receive both need-based aid — met in full and loan-free — and partial-tuition merit scholarships, but only if they apply for aid when they apply for admission.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['economics','social-sciences','humanities','computer-science','mathematics','biology','psychology','arts','engineering'],
  englishTaughtPrograms: ['economics','social-sciences','humanities','computer-science','mathematics','biology','psychology','arts','engineering'],
  programNote: 'Every undergraduate takes the Core, about a third of the degree. There is no undergraduate business or law degree; economics and public policy are the usual routes, and molecular engineering is the engineering option.',
  links: {
    website: 'https://www.uchicago.edu/',
    admissions: 'https://collegeadmissions.uchicago.edu/apply/',
    internationalAdmissions: 'https://collegeadmissions.uchicago.edu/apply/international-applicants/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://collegeadmissions.uchicago.edu/financial-support/international-financial-aid/',
    financialAid: 'https://collegeadmissions.uchicago.edu/financial-support/international-financial-aid/',
    programs: 'https://college.uchicago.edu/academics',
    cost: 'https://financialaid.uchicago.edu/undergraduate/how-aid-works/undergraduate-costs/'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application', 'UChicago Application'],
    deadlines: [
      { name: 'Early Action', entryTerm: 'Autumn 2027', dateISO: '2026-11-02', date: '2 November 2026', note: 'Non-binding' },
      { name: 'Early Decision I', entryTerm: 'Autumn 2027', dateISO: '2026-11-02', date: '2 November 2026', note: 'Binding' },
      { name: 'Early Decision II', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: 'Binding' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: null }
    ],
    applicationFee: { amount: 90, currency: 'USD', waiver: 'Fee waivers are available; the fee was $90 for autumn 2026 entry' },
    documents: ['Application with the UChicago supplement', 'School transcript and reports', 'Teacher recommendations', 'Student Financial Aid Worksheet for international aid applicants'],
    recommendations: 'Two teacher recommendations and a counsellor report',
    essay: 'Personal essay plus UChicago’s well-known extended essay prompts',
    interview: null,
    notes: [
      'International aid applicants submit UChicago’s own Student Financial Aid Worksheet — not the CSS Profile or FAFSA.',
      'International students who do not apply for aid with their admission application can never receive it during their four years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum is published; English scores are optional.' },
    toefl: { min: null, recommended: null, note: 'No minimum is published; English scores are optional.' },
    duolingo: { min: null, recommended: null, note: 'No minimum is published; English scores are optional.' },
    waiver: 'No formal exam is required if your application already shows strong command of English.',
    note: 'UChicago admits only students who show "a superior level of English language competence" but lets applicants choose which, if any, exam to send, and accepts self-reported scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'UChicago was the first highly selective US university to make testing optional, and applies a "no harm" rule: a submitted score is used only if it helps.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Applications are read in the context of the school and country where the applicant studied.'
  },
  costs: {
    academicYear: '2025–2026',
    currency: 'USD',
    headline: '$98,301 total (2025–26)',
    items: [
      { label: 'Tuition', amount: 71325 },
      { label: 'Student services fee and UPASS', amount: 1941 },
      { label: 'Housing and food', amount: 20835 },
      { label: 'Student health insurance (if not waived)', amount: 4998 }
    ],
    billedSubtotal: 94101,
    totalText: '$98,301–$98,676 for 2025–26, the most recent year published on the pages consulted',
    note: 'The 2026–27 figures are published by the Bursar, whose site could not be read from here. From autumn 2027 UChicago has announced free tuition for families earning under $250,000 and free housing and food under $125,000; the announcement does not say whether international students are included.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: true, books: true },
      renewable: true,
      competitiveness: 'Aid is calculated from need rather than won in a competition, but the university does not publish how many international students it funds.',
      howToApply: 'Apply for aid at the same time as admission and submit UChicago’s Student Financial Aid Worksheet with income and asset documents.',
      note: 'UChicago states: "We are committed to meeting 100% of your demonstrated need with a loan-free financial aid package if you are admitted and applied for funding." Packages are built on the full cost of enrolling, including tuition, housing, health insurance, a meal plan, books and personal expenses.'
    },
    merit: [
      {
        name: 'Merit scholarships for international students',
        amount: 'Partial tuition, as a single award or a renewable annual award',
        internationalEligible: true,
        criteria: 'Academic and extracurricular achievement, leadership and community commitment; every first-year applicant is considered automatically.',
        note: 'Merit awards are decided independently of financial circumstances, so anyone who may need help must also apply for need-based aid. International transfer students are not eligible.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['UChicago Student Financial Aid Worksheet', 'Income and asset documentation'],
      deadlines: 'With the admission application',
      note: 'The pages consulted do not say whether admission is need-blind or need-aware for international applicants. Financial aid is not available to international transfer students.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International financial aid', url: 'https://collegeadmissions.uchicago.edu/financial-support/international-financial-aid/' },
    { label: 'International applicants', url: 'https://collegeadmissions.uchicago.edu/apply/international-applicants/' },
    { label: 'College historical cost of attendance', url: 'https://csl.uchicago.edu/college-historical-cost-of-attendance/' },
    { label: 'UChicago will offer free tuition for families with incomes below $250,000', url: 'https://news.uchicago.edu/story/uchicago-will-offer-free-tuition-families-incomes-below-250000-greatly-expanding' },
    { label: 'UChicago launches test-optional admissions process', url: 'https://college.uchicago.edu/news/academic-stories/uchicago-launches-test-optional-admissions-process-expanded-financial-aid' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'johns-hopkins-university',
  name: 'Johns Hopkins University',
  country: 'us',
  city: 'Baltimore',
  region: 'Maryland',
  founded: 1876,
  type: 'Private research university',
  brand: { c1: '#002D72', c2: '#68ACE5', initials: 'JHU' },
  description: 'America’s first research university, in Baltimore, strongest in public health, biomedical engineering, international studies and medicine. About one international student in ten receives aid; admission for aid applicants is need-aware, but those admitted have their full need met without loans.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','biology','medicine','social-sciences','humanities','economics','mathematics','psychology','arts','education'],
  englishTaughtPrograms: ['engineering','computer-science','biology','medicine','social-sciences','humanities','economics','mathematics','psychology','arts','education'],
  programNote: 'Undergraduates study in the Krieger School of Arts and Sciences or the Whiting School of Engineering, with public health and biomedical engineering among the best-known majors. Health & Medicine covers those undergraduate routes, not the MD.',
  links: {
    website: 'https://www.jhu.edu/',
    admissions: 'https://apply.jhu.edu/how-to-apply/',
    internationalAdmissions: 'https://apply.jhu.edu/international-applicants/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://sfs.jhu.edu/',
    financialAid: 'https://apply.jhu.edu/international-applicants/',
    programs: 'https://e-catalogue.jhu.edu/',
    cost: 'https://apply.jhu.edu/tuition-aid/estimate-your-college-costs/'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition on Scoir'],
    deadlines: [
      { name: 'Early Decision I', entryTerm: 'Autumn 2027', dateISO: '2026-11-01', date: '1 November 2026', note: 'Binding; aid application due 15 November; decisions 11 December' },
      { name: 'Early Decision II', entryTerm: 'Autumn 2027', dateISO: '2027-01-02', date: '2 January 2027', note: 'Binding; aid application due 15 January; decisions 12 February' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-02', date: '2 January 2027', note: 'Aid application due 15 January; decisions 24 March' }
    ],
    applicationFee: { amount: 70, currency: 'USD', waiver: 'Fee waivers through the Common Application or Coalition on Scoir, or by Hopkins’ own request form' },
    documents: ['Common or Coalition application', 'Hopkins supplemental essay (350 words)', 'School transcript and secondary school report', 'Two teacher evaluations', 'SAT or ACT scores', 'Mid-year school report'],
    recommendations: 'Two teacher evaluations from different academic subjects plus a counsellor report',
    essay: 'Personal essay plus a 350-word Hopkins supplement',
    interview: null,
    notes: ['International applicants who may need aid must say so on the application and submit the CSS Profile and the Certification of Finances.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Recommended for applicants whose primary language is not English; no minimum score is published.' },
    toefl: { min: null, recommended: null, note: 'Recommended; no minimum published.' },
    duolingo: { min: null, recommended: null, note: 'Recommended; no minimum published.' },
    waiver: null,
    note: 'Hopkins recommends the TOEFL, IELTS, Duolingo English Test or a Cambridge English exam for applicants whose primary language is not English, without publishing minimum scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Standardized testing is required. Scores may be self-reported at application; admitted students send official reports before enrolling.' },
    act: { policy: 'required', note: 'SAT or ACT required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: 'About $95,000 in total',
    items: [
      { label: 'Billed by Hopkins: tuition, fees, housing and meal plan', text: 'Published in the detailed breakdown on the Student Financial Support site' },
      { label: 'Estimated books, supplies, travel and personal expenses', text: 'Included in the $95,000 total' }
    ],
    billedSubtotal: null,
    totalText: 'About $95,000 for the year, billed costs plus estimated personal expenses',
    note: 'Hopkins publishes the total on its admissions site and the item-by-item breakdown separately.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Aid for international students is limited — Hopkins says about 10% of its international students receive it — and asking for it makes admission harder.',
      howToApply: 'Indicate the aid request on the application and submit the CSS Profile and Certification of Finances by the deadline for your round.',
      note: 'Hopkins promises to meet 100% of demonstrated need without loans for admitted international students, while stating that it is "need-aware for international citizens ... that apply for financial aid".'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'Certification of Finances'],
      deadlines: '15 November 2026 (ED I) or 15 January 2027 (ED II and Regular Decision)',
      note: 'Merit scholarships exist but are limited for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://apply.jhu.edu/international-applicants/' },
    { label: 'Application deadlines and requirements', url: 'https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/' },
    { label: 'Estimate your college costs', url: 'https://apply.jhu.edu/tuition-aid/estimate-your-college-costs/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'washington-university-in-st-louis',
  name: 'Washington University in St. Louis',
  shortName: 'WashU',
  country: 'us',
  city: 'St. Louis',
  region: 'Missouri',
  founded: 1853,
  type: 'Private research university',
  brand: { c1: '#A51417', c2: '#007360', initials: 'WU' },
  description: 'A private research university in St. Louis with strong design, business, engineering and pre-medical programmes. Its need-blind promise covers domestic first-years only, but WashU says it meets 100% of demonstrated need — with no loans — for international students too.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','medicine','education'],
  englishTaughtPrograms: ['business','engineering','computer-science','economics','social-sciences','humanities','mathematics','biology','psychology','arts','medicine','education'],
  programNote: 'Undergraduates study across Arts & Sciences, the McKelvey School of Engineering, the Olin Business School and the Sam Fox School of Design & Visual Arts, and can combine majors between them. Health & Medicine covers pre-health study, not the MD.',
  links: {
    website: 'https://washu.edu/',
    admissions: 'https://admissions.washu.edu/how-to-apply/',
    internationalAdmissions: 'https://admissions.washu.edu/how-to-apply/english-testing-requirements/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://financialaid.wustl.edu/',
    financialAid: 'https://financialaid.wustl.edu/common-questions/',
    programs: 'https://bulletin.wustl.edu/undergrad/',
    cost: 'https://students.wustl.edu/financial-aid-international-students/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', entryTerm: 'Autumn 2027', dateISO: '2026-11-02', date: '2 November 2026', note: 'Binding; aid documents due 17 November; decisions 11 December' },
      { name: 'Early Decision II', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: 'Binding; aid documents due 11 January; decisions 12 February' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: 'Aid documents due 1 February; decisions 1 April' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'WashU publishes a fee waiver request; the fee amount was not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus WashU’s supplemental questions',
    interview: null,
    notes: [
      'Scholarship applications are due 16 December for priority consideration.',
      'International transfer applicants are not eligible for financial aid.'
    ]
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'IELTS Academic 7.0 is the recommended competitive score.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'A TOEFL of 100 is recommended for tests before 21 January 2026, and 5.0 on the scale used from that date.' },
    duolingo: { min: null, recommended: 130, note: 'Duolingo English Test 130 is the recommended competitive score.' },
    waiver: 'Students with three or more years of study in an English-medium school and strong results may be exempt; online-only schools usually do not qualify.',
    note: 'From autumn 2027 entry, SAT or ACT scores are no longer accepted in place of an English proficiency test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'WashU’s SAT/ACT policy for first-year applicants was not confirmed on the pages consulted; what is confirmed is that from autumn 2027 those scores cannot replace an English proficiency test.' },
    act: { policy: 'optional', note: 'See the SAT note.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$105,183 for visa purposes',
    items: [
      { label: 'Tuition, fees and student health insurance', amount: 75645 },
      { label: 'Living expenses for 12 months (minimum)', amount: 29538 }
    ],
    billedSubtotal: 75645,
    totalText: '$105,183 a year — the figure WashU uses for visa documents',
    note: 'The living-expense figure covers twelve months, not just the academic year.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: true, books: null },
      renewable: true,
      competitiveness: 'Admission for international applicants is need-aware, so asking for a large award makes the decision harder.',
      howToApply: 'Submit the CSS Profile by the deadline for your admission round.',
      note: 'WashU states that it meets 100% of demonstrated financial need for all admitted students with no-loan aid offers, and that its need-blind policy applies to domestic first-year applicants but not to international applicants, transfers or waitlisted students.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile'],
      deadlines: '17 November 2026 (ED I), 11 January 2027 (ED II), 1 February 2027 (Regular Decision)',
      note: 'Aid offers to international students renew automatically on the information provided at application.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Financial aid common questions', url: 'https://financialaid.wustl.edu/common-questions/' },
    { label: 'Financial aid for international students', url: 'https://students.wustl.edu/financial-aid-international-students/' },
    { label: 'Application dates and deadlines', url: 'https://admissions.washu.edu/how-to-apply/application-deadlines/' },
    { label: 'English testing requirements', url: 'https://admissions.washu.edu/how-to-apply/english-testing-requirements/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'emory-university',
  name: 'Emory University',
  country: 'us',
  city: 'Atlanta',
  region: 'Georgia',
  founded: 1836,
  type: 'Private research university',
  brand: { c1: '#012169', c2: '#F2A900', initials: 'EU' },
  description: 'A private research university in Atlanta with strong business, nursing and public health, and a partner liberal arts campus at Oxford College. Its headline aid promises — Emory Advantage and Advantage Plus — are for domestic students only; internationals compete for a limited number of need-based packages and merit scholarships.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','social-sciences','humanities','computer-science','mathematics','biology','psychology','arts','medicine','education'],
  englishTaughtPrograms: ['business','economics','social-sciences','humanities','computer-science','mathematics','biology','psychology','arts','medicine','education'],
  programNote: 'Applicants can apply to Emory College, to Oxford College (a two-year liberal arts start on a separate campus), or to both with one application. Business and nursing are entered after the first years of study.',
  links: {
    website: 'https://www.emory.edu/',
    admissions: 'https://apply.emory.edu/apply/index.html',
    internationalAdmissions: 'https://apply.emory.edu/apply/international-applicants.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://studentaid.emory.edu/undergraduate/types/grants-scholarships/emory-grants/index.html',
    financialAid: 'https://studentaid.emory.edu/undergraduate/apply/new-students/international.html',
    programs: 'https://catalog.college.emory.edu/',
    cost: 'https://studentaid.emory.edu/_includes/documents/sections/undergraduate/apply/cost-of-attendance-worksheet.pdf'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding; financial aid deadline 2 December; decisions by 15 December' },
      { name: 'Early Decision II', date: '1 January', note: 'Binding; financial aid deadline 6 January; decisions by 15 February' },
      { name: 'Regular Decision', date: '1 January', note: 'Financial aid deadline 10 February; decisions by 1 April' }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiver: 'A fee waiver can be requested instead of the $75 fee' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendation', 'CSS Profile and IDOC documents for aid applicants'],
    recommendations: 'Counsellor and teacher recommendations',
    essay: 'Personal essay plus Emory’s supplemental questions',
    interview: null,
    notes: [
      'Emory advises international applicants who need financial aid to apply under Regular Decision.',
      'The Emory University Scholar Programs deadline is 15 November, with decisions by 1 March.',
      'Only students who apply for and receive aid in their first year can receive it in later years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Required where English is not your first language; no minimum is published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    waiver: null,
    note: 'Emory says applicants whose first language is not English "must show you’re able to succeed academically in a rigorous, English-speaking classroom" and points to its TOEFL, IELTS and Duolingo requirements page.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted — check Emory’s testing policy for your entry year.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$97,948 total (estimated)',
    items: [
      { label: 'Tuition', amount: 70300 },
      { label: 'Fees', amount: 1148 },
      { label: 'Housing', amount: 13222 },
      { label: 'Food', amount: 9184 },
      { label: 'Travel', amount: 1100 },
      { label: 'Personal expenses', amount: 1620 },
      { label: 'Books', amount: 1286 }
    ],
    billedSubtotal: 93854,
    totalText: '$97,948 estimated for the year, of which $93,854 is billed by Emory',
    note: 'The published total does not include Emory’s health insurance requirement; students without comparable cover are enrolled in the university plan.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: true, basis: 'need-based',
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Need-based packages go to "a select group of international students" each year, and Emory does not publish how much of their need it meets.',
      howToApply: 'Answer "yes" to the financial aid question on the Common or Coalition Application, submit the CSS Profile before 5 February and send tax documents to IDOC.',
      note: 'Emory Advantage and Emory Advantage Plus — the promises of tuition-free study under $200,000 of income and 100% of need met — apply to domestic students only. Emory does not publish a full-need commitment for international students.'
    },
    merit: [
      {
        name: 'Emory University Scholar Programs',
        amount: 'Partial to full merit scholarships',
        internationalEligible: true,
        criteria: 'Academic and personal achievement; highly competitive with limited funding.',
        note: 'Emory offers these merit scholarships to a limited number of international students each year; the deadline is 15 November.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: null, needBlindInternational: null,
      forms: ['CSS Profile', 'IDOC tax documents'],
      deadlines: 'CSS Profile before 5 February; IDOC documents before 11 February',
      note: 'The pages consulted do not state whether admission is need-blind or need-aware for international applicants, and do not promise to meet their full need.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate aid for international students', url: 'https://studentaid.emory.edu/undergraduate/apply/new-students/international.html' },
    { label: 'International applicants', url: 'https://apply.emory.edu/apply/international-applicants.html' },
    { label: 'Plans and deadlines', url: 'https://apply.emory.edu/apply/first-year/plans-deadlines/index.html' },
    { label: 'Cost of attendance worksheet 2026-2027', url: 'https://studentaid.emory.edu/_includes/documents/sections/undergraduate/apply/cost-of-attendance-worksheet.pdf' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'tufts-university',
  name: 'Tufts University',
  country: 'us',
  city: 'Medford',
  region: 'Massachusetts',
  founded: 1852,
  type: 'Private research university',
  brand: { c1: '#3E8EDE', c2: '#502D7F', initials: 'TU' },
  description: 'A mid-sized research university outside Boston, known for international relations at the Fletcher tradition, engineering and a joint programme with the School of the Museum of Fine Arts. Tufts meets the full demonstrated need of every admitted student regardless of citizenship — but international students must ask for aid when they apply.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['social-sciences','humanities','economics','engineering','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['social-sciences','humanities','economics','engineering','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Applicants choose the School of Arts and Sciences, the School of Engineering, or the five-year BFA+BA programme with the School of the Museum of Fine Arts. International relations is among the best-known majors.',
  links: {
    website: 'https://www.tufts.edu/',
    admissions: 'https://admissions.tufts.edu/apply/first-year-students/',
    internationalAdmissions: 'https://admissions.tufts.edu/tuition-and-aid/applying-for-aid/international-student-aid/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admissions.tufts.edu/tuition-and-aid/types-of-aid/',
    financialAid: 'https://admissions.tufts.edu/tuition-and-aid/applying-for-aid/international-student-aid/',
    programs: 'https://www.tufts.edu/academics',
    cost: 'https://students.tufts.edu/financial-services/undergrad-aid/award-letter/undergraduate-cost-attendance'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition on Scoir', 'QuestBridge Application'],
    deadlines: [
      { name: 'Early Decision I', entryTerm: 'Autumn 2027', dateISO: '2026-11-02', date: '2 November 2026', note: 'Binding; decisions in mid-December' },
      { name: 'Early Decision II', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: 'Binding; decisions in early February' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: 'Decisions by 1 April' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Tufts waives the admission application fee for international citizens seeking need-based aid' },
    documents: ['Common Application, Coalition on Scoir or QuestBridge application', 'School transcript', 'Letters of recommendation', 'ISFAA or CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Tufts’ supplemental questions',
    interview: null,
    notes: [
      'International applicants must tick the financial aid box when they submit: aid is not available to those who did not request it at application.',
      'Admitted international students submit the CSS Profile within five to seven days of their decision.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Required where English is not your primary language; no minimum is published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    waiver: 'Not required for students who have spent at least three years in a school where the language of instruction is English.',
    note: 'Tufts accepts the IELTS, TOEFL, PTE Academic and the Duolingo English Test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Tufts considers standardized testing only when it is submitted, so scores are not required.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$97,152 for first-years',
    items: [
      { label: 'Tuition', amount: 74862 },
      { label: 'Housing (first-years on campus)', amount: 11220 },
      { label: 'Food', amount: 9374 },
      { label: 'Fees', amount: 1696 },
      { label: 'Books and supplies', amount: 1000 },
      { label: 'Personal expenses', amount: 1846 }
    ],
    billedSubtotal: 97152,
    totalText: '$97,152 billed by Tufts, plus about $2,846 in books and personal expenses and travel from home',
    note: 'The Tufts Tuition Pact — free tuition below $150,000 of family income — applies to US students only.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Tufts does not publish how many international students it funds; what it does promise is that anyone admitted has their full need met.',
      howToApply: 'Indicate the aid request on the application, file the free ISFAA or the CSS Profile, and send the CSS Profile within a week of an admission offer.',
      note: 'Tufts states: "Tufts proudly meets 100% of the demonstrated financial need of every admitted student, regardless of citizenship." Aid is impossible to obtain later for international students who did not request it at application.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['ISFAA (free)', 'CSS Profile'],
      deadlines: 'With the admission application; CSS Profile within 5–7 days of an admission decision',
      note: 'The pages consulted do not say whether admission is need-blind or need-aware for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Financial aid for international students', url: 'https://admissions.tufts.edu/tuition-and-aid/applying-for-aid/international-student-aid/' },
    { label: 'Undergraduate cost of attendance 2026-27', url: 'https://students.tufts.edu/financial-services/undergrad-aid/award-letter/undergraduate-cost-attendance' },
    { label: 'First-year applicants — deadlines', url: 'https://admissions.tufts.edu/apply/first-year-students/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'university-of-richmond',
  name: 'University of Richmond',
  country: 'us',
  city: 'Richmond',
  region: 'Virginia',
  founded: 1830,
  type: 'Private liberal arts university',
  brand: { c1: '#00355F', c2: '#9A3324', initials: 'UR' },
  description: 'A small private university in Virginia that combines a liberal arts college with schools of business and leadership studies. Admission is need-aware for applicants who are not US citizens, but Richmond commits to meeting the full demonstrated need of everyone it admits, and its merit scholarships are open regardless of citizenship.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','social-sciences','humanities','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['business','economics','social-sciences','humanities','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Richmond teaches the liberal arts alongside the Robins School of Business and the Jepson School of Leadership Studies, one of the few undergraduate leadership schools in the United States.',
  links: {
    website: 'https://www.richmond.edu/',
    admissions: 'https://admission.richmond.edu/process/index.html',
    internationalAdmissions: 'https://admission.richmond.edu/process/international/index.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://financialaid.richmond.edu/types-of-aid/need-based/index.html',
    financialAid: 'https://financialaid.richmond.edu/applying/international.html',
    programs: 'https://www.richmond.edu/academics/',
    cost: 'https://financialaid.richmond.edu/applying/cost.html'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding' },
      { name: 'Early Action', date: '1 November', note: 'Non-binding; decisions in mid-January' },
      { name: 'Early Decision II', date: '1 January', note: 'Binding' },
      { name: 'Regular Decision', date: '1 January', note: 'Decisions in mid-March; reply by 1 May' }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'Richmond waives the application fee for international students and other applicants living abroad' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Certification of Financial Responsibility', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus the Richmond supplement',
    interview: null,
    notes: [
      'Every applicant who is not a US citizen or permanent resident must submit Richmond’s Certification of Financial Responsibility.',
      'International students who want to be considered for all forms of assistance are advised to apply by the 1 December Richmond Scholars deadline.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Required where English is not your native language; no minimum is published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    waiver: 'Richmond lists university-approved waivers of the English requirement on its English proficiency policy page.',
    note: 'Students whose native language is not English submit official TOEFL, IELTS or Duolingo results unless they meet a published waiver.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Richmond has adopted a test-optional admission path for first-year students entering in 2027.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Richmond evaluates translated transcripts from national curricula as well as AP, IB and A-Levels.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$92,320 total cost',
    items: [
      { label: 'Tuition', amount: 70725 },
      { label: 'Housing', amount: 8705 },
      { label: 'Food', amount: 10110 },
      { label: 'Books and supplies', amount: 1000 },
      { label: 'Personal expenses', amount: 1710 }
    ],
    billedSubtotal: 89540,
    totalText: '$92,320 in total, of which $89,540 is billed by the university',
    note: 'Richmond also publishes a lower figure, $79,985, for students living with their parents.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Need-aware admission for non-US citizens: strong Early Decision applicants may be admitted with aid, while others are deferred to Regular Decision so that Richmond can still meet their full need if it admits them.',
      howToApply: 'Apply for aid when you apply for admission, and submit the Certification of Financial Responsibility with the CSS Profile.',
      note: 'Richmond states that it is "committed to providing financial aid awards that meet every admitted student’s full demonstrated need" and that the Office of Admission is need-aware for applicants who are not US citizens or permanent residents.'
    },
    merit: [
      {
        name: 'Richmond Scholars and other university merit scholarships',
        amount: 'Not published on the pages consulted',
        internationalEligible: true,
        criteria: 'Academic and personal achievement; applications are due 1 December.',
        note: 'Richmond states that all applicants, regardless of citizenship, may compete for university-funded merit scholarships.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Certification of Financial Responsibility', 'CSS Profile'],
      deadlines: 'With the admission round; apply as early as possible',
      note: 'Need-based aid for non-US citizens is limited, and Richmond says the earlier you apply, the stronger your chances of receiving it.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International admission', url: 'https://admission.richmond.edu/process/international/index.html' },
    { label: 'International students and non-U.S. citizens — financial aid', url: 'https://financialaid.richmond.edu/applying/international.html' },
    { label: 'Cost of attendance 2026-27', url: 'https://financialaid.richmond.edu/applying/cost.html' }
  ],
  lastVerified: '2026-09-20'
}
);
