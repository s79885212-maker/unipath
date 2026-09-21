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

/* ---- Batch added 20 September 2026: ten liberal arts colleges.
   None of them is need-blind for international applicants; what
   differs is how much of the need they meet and how the aid is
   requested. ---- */
window.UNIPATH.universities.push(
{
  id: 'swarthmore-college',
  name: 'Swarthmore College',
  country: 'us',
  city: 'Swarthmore',
  region: 'Pennsylvania',
  founded: 1864,
  type: 'Private liberal arts college',
  brand: { c1: '#8B0000', c2: '#5c0000', initials: 'SC' },
  description: 'A liberal arts college outside Philadelphia with an unusual engineering degree and an Oxford-style honours programme. Admission is need-aware for international citizens, but Swarthmore meets their full institutionally-determined need without loans — the average award for international students in the class of 2030 was over $93,000.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','engineering','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','engineering','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Swarthmore is one of the few liberal arts colleges with its own engineering degree, and students may also take courses at Haverford, Bryn Mawr and the University of Pennsylvania.',
  links: {
    website: 'https://www.swarthmore.edu/',
    admissions: 'https://www.swarthmore.edu/admissions-aid/application-materials-deadlines',
    internationalAdmissions: 'https://www.swarthmore.edu/financial-aid/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.swarthmore.edu/financial-aid',
    financialAid: 'https://www.swarthmore.edu/financial-aid/international-students',
    programs: 'https://www.swarthmore.edu/academics',
    cost: 'https://www.swarthmore.edu/student-accounts-office/tuition-housing-food-fees'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition on Scoir', 'QuestBridge Application'],
    deadlines: [
      { name: 'Fall Early Decision', date: '15 November', note: 'Binding; decisions in mid-December' },
      { name: 'Winter Early Decision', date: '4 January', note: 'Binding; decisions in mid-February' },
      { name: 'Regular Decision', date: '4 January', note: null }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Fee waivers are decided by Swarthmore, the Common Application, NACAC, the College Board or the ACT; anyone with financial need can check eligibility through SwatPass.' },
    documents: ['Common Application, Coalition on Scoir or QuestBridge application', 'Swarthmore short answer', 'School transcript and reports', 'Two academic teacher recommendations'],
    recommendations: 'Two academic-subject teacher recommendations and a counsellor report',
    essay: 'Personal essay plus Swarthmore’s short answer',
    interview: 'Optional',
    notes: [
      'Applicants at schools outside the US, whatever their citizenship, must submit a Swarthmore Video Response, an English proficiency exam result or an InitialView interview.',
      'International applicants send their financial aid documents only after they are admitted, within seven days of the offer.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Accepted as proof of English; no minimum score is published.' },
    toefl: { min: null, recommended: null, note: 'Accepted as proof of English; no minimum score is published.' },
    duolingo: { min: null, recommended: null, note: 'Accepted as proof of English; no minimum score is published.' },
    waiver: 'A Swarthmore Video Response or an InitialView interview can be submitted instead of an English exam.',
    note: 'The requirement applies to everyone applying from a school outside the United States, regardless of citizenship.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Test scores are optional and applicants who do not submit them are not penalised; self-reported scores are accepted.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,770 total charges',
    items: [
      { label: 'Tuition', amount: 72722 },
      { label: 'Housing', amount: 11676 },
      { label: 'Food', amount: 10890 },
      { label: 'Student activities fee', amount: 482 }
    ],
    billedSubtotal: 95770,
    totalText: '$95,770 billed by the College, before travel and personal expenses',
    note: 'The average financial aid award in 2025–26 was $75,268, and aid decisions are loan-free.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Admission is need-aware for international citizens, so a large aid request makes an already selective process harder.',
      howToApply: 'Tick the financial aid box on the admission application, then send all aid documents within seven days of an admission offer.',
      note: 'Swarthmore states that it meets 100% of institutionally-determined need for admitted international students who applied for aid — up to and including full tuition, an $800 book allowance, fees, housing, food and some personal expenses — and includes no loans. The average aid decision for international students admitted to the class of 2030 was more than $93,000.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Submitted after admission, on Swarthmore’s instructions'],
      deadlines: 'Within seven days of the admission offer',
      note: 'Permanent residents, dual US citizens, DACA and undocumented students and those in the asylee or refugee process graduating from a US high school are read need-blind instead.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://www.swarthmore.edu/financial-aid/international-students' },
    { label: 'Tuition, housing, food and fees', url: 'https://www.swarthmore.edu/student-accounts-office/tuition-housing-food-fees' },
    { label: 'Application materials and deadlines', url: 'https://www.swarthmore.edu/admissions-aid/application-materials-deadlines' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'pomona-college',
  name: 'Pomona College',
  country: 'us',
  city: 'Claremont',
  region: 'California',
  founded: 1887,
  type: 'Private liberal arts college',
  brand: { c1: '#0057B8', c2: '#F5A800', initials: 'PC' },
  description: 'The founding member of the Claremont Colleges in southern California, where students share classes across five neighbouring campuses. Pomona gives no merit or athletic scholarships at all: aid is purely need-based, admission for international applicants is need-aware, and the full need of every admitted international student is met.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','engineering'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','engineering'],
  programNote: 'Students can take courses across the five undergraduate Claremont Colleges, including engineering at Harvey Mudd, so the range is wider than the size of Pomona alone suggests.',
  links: {
    website: 'https://www.pomona.edu/',
    admissions: 'https://www.pomona.edu/admissions/apply',
    internationalAdmissions: 'https://www.pomona.edu/admissions/apply/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.pomona.edu/financial-aid',
    financialAid: 'https://www.pomona.edu/financial-aid/applying-for-aid/international-aid',
    programs: 'https://www.pomona.edu/academics',
    cost: 'https://www.pomona.edu/administration/finance-office/student-accounts/tuition-and-costs'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition on Scoir', 'QuestBridge Application'],
    deadlines: [
      { name: 'Early Decision I — financial aid', date: '15 November', note: 'Published on Pomona’s financial aid deadline table' },
      { name: 'Early Decision II — financial aid', date: '15 January', note: 'Published on Pomona’s financial aid deadline table' },
      { name: 'Regular Decision — financial aid', date: '15 January', note: 'Published on Pomona’s financial aid deadline table' }
    ],
    applicationFee: { amount: 80, currency: 'USD', waiver: 'The $80 fee is waived for aid applicants who complete the Pomona Access Pass form' },
    documents: ['Common, Coalition or QuestBridge application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile and IDOC documents for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Pomona’s supplemental questions',
    interview: null,
    notes: [
      'International applicants may apply in any round and follow the same deadlines as everyone else.',
      'Because the admissions committee takes financial need into account, international applicants who will need help must apply for aid at the same time as admission.'
    ]
  },
  english: {
    ielts: { min: 7, recommended: null, note: 'Pomona’s published international testing profile gives a minimum IELTS of 7.' },
    toefl: { min: 5, recommended: null, scales: [{ period: 'post2026', min: 5, recommended: null }], note: 'The published minimum TOEFL is 5, the score on the scale used from 2026.' },
    duolingo: { min: 130, recommended: null, note: 'The published minimum Duolingo English Test score is 130.' },
    waiver: 'Required only for applicants from schools where English is not the primary language of instruction.',
    note: 'Pomona publishes these as its international testing profile minimums.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'All applicants may self-report SAT or ACT scores, and scores are one factor among grades, curriculum, recommendations and essays.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,670 comprehensive charge',
    items: [
      { label: 'Tuition', amount: 71660 },
      { label: 'Fees', amount: 420 },
      { label: 'Housing and food', amount: 23590 }
    ],
    billedSubtotal: 95670,
    totalText: '$95,670 for tuition, fees, housing and food',
    note: 'Books, travel and personal expenses are additional.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Need-aware admission for international applicants; 41% of Pomona’s international students receive need-based aid.',
      howToApply: 'Apply for aid with the admission application and submit the CSS Profile and IDOC documents.',
      note: 'Pomona states that every admitted student with demonstrated need is offered a package meeting 100% of that need, that it does not use loans to meet need, and that it meets the full need of every admitted international student. The average award for international students is nearly $74,000 a year.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'IDOC tax documents'],
      deadlines: '15 November (ED I) or 15 January (ED II and Regular Decision)',
      note: 'Pomona gives no merit or athletic scholarships; all of its aid is need-based.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://www.pomona.edu/admissions/apply/international-applicants' },
    { label: 'International student aid', url: 'https://www.pomona.edu/financial-aid/applying-for-aid/international-aid' },
    { label: 'Tuition and costs for 2026-27', url: 'https://www.pomona.edu/administration/finance-office/student-accounts/tuition-and-costs' },
    { label: 'Financial aid application materials and deadlines', url: 'https://www.pomona.edu/financial-aid/applying-aid/application-materials-and-deadlines' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'wellesley-college',
  name: 'Wellesley College',
  country: 'us',
  city: 'Wellesley',
  region: 'Massachusetts',
  founded: 1870,
  type: 'Private liberal arts college for women',
  brand: { c1: '#0142A5', c2: '#002a6b', initials: 'WC' },
  description: 'A women’s liberal arts college outside Boston with a long record of educating international students. Admission is need-sensitive for international citizens — so the competition among them is sharp — but Wellesley meets the full calculated need of every student it enrols, American or not.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Wellesley admits women and students assigned female at birth who identify as women or as non-binary; it also runs cross-registration with MIT, Babson and Olin, including engineering courses.',
  links: {
    website: 'https://www.wellesley.edu/',
    admissions: 'https://www.wellesley.edu/admission-aid/apply',
    internationalAdmissions: 'https://www.wellesley.edu/admission-aid/apply/first-year-applicants/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.wellesley.edu/admission-aid/student-financial-services',
    financialAid: 'https://www.wellesley.edu/admission-aid/student-financial-services/understanding-financial-aid/apply-for-aid/international-students',
    programs: 'https://www.wellesley.edu/academics',
    cost: 'https://www.wellesley.edu/admission/cost'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding' },
      { name: 'Early Decision II', date: '1 January', note: 'Binding' },
      { name: 'Regular Decision', date: '8 January', note: null }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'There is no fee to apply to Wellesley' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Financial aid documents for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Wellesley’s supplemental questions',
    interview: null,
    notes: [
      'International citizens who might need aid at any point in four years must apply for it with their admission application; applications for aid are not accepted from international students after admission decisions.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'No minimum score is published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Recommended for students from schools where the curriculum is not taught in English; no minimum published.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Wellesley recommends, rather than requires, an English test for applicants from non-English-language curricula.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted — check Wellesley’s testing policy for your entry year.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$96,136 comprehensive fee',
    items: [
      { label: 'Tuition', amount: 72570 },
      { label: 'Housing', amount: 12020 },
      { label: 'Meals', amount: 11186 },
      { label: 'Student activity fee', amount: 360 },
      { label: 'Books', amount: 800 },
      { label: 'Personal expenses', amount: 1250 }
    ],
    billedSubtotal: 96136,
    totalText: '$96,136 billed directly, plus about $2,050 in books and personal expenses and travel from home',
    note: 'Massachusetts requires health insurance; students without comparable cover buy the college plan.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Wellesley says admission is need-sensitive for international citizens and therefore highly competitive for those applying for aid.',
      howToApply: 'Apply for aid with the admission application in whichever round you choose.',
      note: 'Wellesley states that it meets the full calculated need of every US and international student who attends the College, that its aid focuses on grants and minimises loans, and that the average grant in 2025–26 was $70,519.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Financial aid application submitted with the admission application'],
      deadlines: 'With the admission round',
      note: 'The Wellesley Tuition Promise — free tuition below $200,000 of family income from autumn 2027 — applies to US students.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://www.wellesley.edu/admission-aid/student-financial-services/understanding-financial-aid/apply-for-aid/international-students' },
    { label: 'Cost of attendance and payment', url: 'https://www.wellesley.edu/admission/cost' },
    { label: 'Wellesley announces free tuition for families with incomes of $200,000 or less', url: 'https://www.wellesley.edu/news/wellesley-free-tuition-income-200k-or-less-fall-2027' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'middlebury-college',
  name: 'Middlebury College',
  country: 'us',
  city: 'Middlebury',
  region: 'Vermont',
  founded: 1800,
  type: 'Private liberal arts college',
  brand: { c1: '#0D395F', c2: '#0b2b47', initials: 'MC' },
  description: 'A liberal arts college in rural Vermont, best known for languages, environmental studies and international studies. Middlebury describes its international admission as need-blind only as far as its resources allow, and covers 100% of demonstrated need for all four years of those it admits with aid.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Middlebury’s language schools and Schools Abroad are central to the college; many undergraduates study a language intensively or spend a year abroad.',
  links: {
    website: 'https://www.middlebury.edu/college/',
    admissions: 'https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines',
    internationalAdmissions: 'https://www.middlebury.edu/college/admissions/affordability',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.middlebury.edu/student-financial-services',
    financialAid: 'https://www.middlebury.edu/student-financial-services/apply-aid/first-year-and-transfer-students',
    programs: 'https://www.middlebury.edu/college/academics',
    cost: 'https://www.middlebury.edu/student-financial-services/tuition-fees-and-payment/tuition-and-fees'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '2 November', note: 'Binding' },
      { name: 'Early Decision II', date: '4 January', note: 'Binding' },
      { name: 'Regular Decision', date: '5 January', note: null }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'From the 2026–27 application cycle Middlebury’s application is free' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Middlebury’s supplemental questions',
    interview: null,
    notes: ['Middlebury does not accept the ISFAA or a paper CSS Profile from international applicants: the CSS Profile must be filed electronically.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Middlebury’s application instructions for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$94,386 in tuition, housing, food and fees',
    items: [
      { label: 'Tuition', amount: 72924 },
      { label: 'On-campus housing and meal plan', amount: 20920 },
      { label: 'Student activity fee', amount: 542 }
    ],
    billedSubtotal: 94386,
    totalText: '$94,386 before books, travel and personal expenses',
    note: 'Middlebury requires full-time students to hold health insurance and offers its own plan to those without cover.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Middlebury says it follows a need-blind policy for international students only "to the extent that financial resources allow", so the number funded is limited.',
      howToApply: 'File the CSS Profile electronically with the admission application.',
      note: 'Middlebury states that a financial aid offer covers 100% of demonstrated need for all four years of undergraduate study.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['CSS Profile (electronic only)'],
      deadlines: 'With the admission round',
      note: 'Middlebury’s wording — need-blind as far as resources allow — is not a full need-blind promise for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Financial aid — Middlebury College admissions', url: 'https://www.middlebury.edu/college/admissions/affordability' },
    { label: 'First-year and transfer students — applying for aid', url: 'https://www.middlebury.edu/student-financial-services/apply-aid/first-year-and-transfer-students' },
    { label: 'Tuition and fees 2026–2027', url: 'https://www.middlebury.edu/student-financial-services/tuition-fees-and-payment/tuition-and-fees' },
    { label: 'Application instructions and deadlines', url: 'https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'colby-college',
  name: 'Colby College',
  country: 'us',
  city: 'Waterville',
  region: 'Maine',
  founded: 1813,
  type: 'Private liberal arts college',
  brand: { c1: '#002878', c2: '#001a4d', initials: 'CC' },
  description: 'A liberal arts college in Maine where more than one student in ten is not a US citizen. Admission takes financial need into account, but Colby meets 100% of demonstrated need for every admitted student, international students included, with grants and campus work rather than loans.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Colby teaches the liberal arts and sciences, with environmental studies and global studies among its best-known programmes; there is no undergraduate business or engineering degree.',
  links: {
    website: 'https://www.colby.edu/',
    admissions: 'https://afa.colby.edu/apply/',
    internationalAdmissions: 'https://afa.colby.edu/apply/requirements/international-applicants/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://afa.colby.edu/cost-and-aid/',
    financialAid: 'https://afa.colby.edu/apply/requirements/international-applicants/',
    programs: 'https://www.colby.edu/academics/',
    cost: 'https://afa.colby.edu/cost-and-aid/tuition-and-fees/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; international CSS Profile due the same day' },
      { name: 'Early Decision II', date: '2 January', note: 'Binding; international CSS Profile due 4 January' },
      { name: 'Regular Decision', date: '4 January', note: 'International CSS Profile due 15 January' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Colby’s supplement',
    interview: 'Video interviews are optional; Colby accepts Duolingo, Vericant and InitialView',
    notes: ['All application materials must be submitted in English, whatever your language of instruction.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS Academic accepted; no minimum score is published.' },
    toefl: { min: null, recommended: null, note: 'TOEFL iBT or Home Edition accepted and superscored; MyBest scores are accepted. No minimum is published.' },
    duolingo: { min: null, recommended: null, note: 'Duolingo English Test accepted; no minimum published.' },
    waiver: 'Not required if English is your first language or your current language of instruction.',
    note: 'Scores may be self-reported on the application or sent as a PDF to the admissions office.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted — check Colby’s testing policy for your entry year.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,270 comprehensive fee',
    items: [
      { label: 'Tuition and fees', amount: 75790 },
      { label: 'Housing and meals', amount: 19480 },
      { label: 'Books and personal expenses', amount: 1700 },
      { label: 'Travel', text: '$50–$1,300 depending on where you travel from' }
    ],
    billedSubtotal: 95270,
    totalText: '$95,270 comprehensive fee plus about $1,700 in books and personal expenses and travel',
    note: 'International travel typically costs more than the published allowance.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Colby is need-aware in admissions, so the size of the aid request is part of the decision.',
      howToApply: 'File the international CSS Profile by the deadline for your round.',
      note: 'Colby states that it meets 100% of demonstrated need for all admitted students, including international students, and that packages are built from grants and campus employment rather than loans.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile (code 3280)', 'Non-Custodial Parent CSS Profile where applicable'],
      deadlines: '15 November (ED I), 4 January (ED II), 15 January (Regular Decision)',
      note: 'Colby offers a CSS Profile fee waiver to families for whom the filing fee is a burden.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://afa.colby.edu/apply/requirements/international-applicants/' },
    { label: 'Tuition and fees', url: 'https://afa.colby.edu/cost-and-aid/tuition-and-fees/' },
    { label: 'Dates and deadlines', url: 'https://afa.colby.edu/apply/dates-and-deadlines/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'davidson-college',
  name: 'Davidson College',
  country: 'us',
  city: 'Davidson',
  region: 'North Carolina',
  founded: 1837,
  type: 'Private liberal arts college',
  brand: { c1: '#000000', c2: '#A6192E', initials: 'DC' },
  description: 'A liberal arts college near Charlotte with an honour code strong enough that students take unproctored exams. Through the Davidson Trust it meets 100% of calculated need without loans — for international students too, though their applications are read with financial circumstances in view.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Davidson teaches only undergraduates, with well-known programmes in political science, economics and pre-medical study.',
  links: {
    website: 'https://www.davidson.edu/',
    admissions: 'https://www.davidson.edu/admission-and-financial-aid/apply',
    internationalAdmissions: 'https://www.davidson.edu/admission-and-financial-aid/apply/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.davidson.edu/about/mission-and-values/davidson-trust',
    financialAid: 'https://www.davidson.edu/admission-and-financial-aid/financial-aid/applying-aid/international-students',
    programs: 'https://www.davidson.edu/academics',
    cost: 'https://www.davidson.edu/admission-and-financial-aid/cost-attendance'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; notification 12 December' },
      { name: 'Early Decision II', date: '4 January', note: 'Binding; notification by 30 January' },
      { name: 'Regular Decision', date: '11 January', note: 'Notification by 1 April' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Financial aid forms for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Davidson’s supplement',
    interview: null,
    notes: [
      'Aid for international students is limited and competitive, and must be requested at the time of the admission application.',
      'Applications for aid from international students are not accepted after admission, for the whole of their time at Davidson.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Davidson’s international applicant page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,995 for international first-years',
    items: [
      { label: 'Tuition', amount: 73090 },
      { label: 'Required fees', amount: 650 },
      { label: 'Orientation fee (first year only)', amount: 250 },
      { label: 'Housing', amount: 9220 },
      { label: 'Food', amount: 9560 },
      { label: 'Books, course materials and supplies', amount: 825 },
      { label: 'Transportation (international students)', amount: 1000 },
      { label: 'Personal expenses', amount: 1400 },
      { label: 'Health insurance', amount: 2800 }
    ],
    billedSubtotal: 92770,
    totalText: '$95,995 for an international first-year, of which $92,770 is billed; health insurance adds $2,800',
    note: 'Davidson publishes separate budgets for domestic and international students; the difference is the travel allowance.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Davidson says aid for international students is limited and competitive and that it is aware of financial circumstances when reading their applications.',
      howToApply: 'Apply for aid at the same time as admission and meet every published deadline.',
      note: 'Through the Davidson Trust the college meets 100% of calculated need, with grants and student employment and no loans in the package. The new simplified pricing — free tuition up to $175,000 of income from autumn 2027 — is for US citizens and full US residents only.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Financial aid application submitted with the admission application'],
      deadlines: 'With the admission round',
      note: 'Recruited athletes are the stated exception to the full-need policy, as they may receive athletic funding instead.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://www.davidson.edu/admission-and-financial-aid/financial-aid/applying-aid/international-students' },
    { label: 'Cost of attendance 2026-2027', url: 'https://www.davidson.edu/admission-and-financial-aid/cost-attendance' },
    { label: 'Davidson College goes tuition-free for families earning up to $175K', url: 'https://www.davidson.edu/news/2026/07/06/davidson-college-goes-tuition-free-for-low-middle-income-families' },
    { label: 'Admission and aid timeline', url: 'https://www.davidson.edu/admission-and-financial-aid/admission-aid-timeline' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'grinnell-college',
  name: 'Grinnell College',
  country: 'us',
  city: 'Grinnell',
  region: 'Iowa',
  founded: 1846,
  type: 'Private liberal arts college',
  brand: { c1: '#B02F2C', c2: '#7a1f1d', initials: 'GC' },
  description: 'A liberal arts college in Iowa with an open curriculum and an unusually international student body — one student in five comes from outside the United States. Admission for them is need-aware, but Grinnell meets 100% of institutionally determined need without loans and considers international applicants for merit scholarships of up to $28,000.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Grinnell’s only required course is a first-year tutorial: everything else is chosen with an adviser, and there are no distribution requirements.',
  links: {
    website: 'https://www.grinnell.edu/',
    admissions: 'https://www.grinnell.edu/admission/apply/first-year/requirements',
    internationalAdmissions: 'https://www.grinnell.edu/admission/apply/international',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.grinnell.edu/admission/financial-aid',
    financialAid: 'https://www.grinnell.edu/admission/apply/tips/intl-aid',
    programs: 'https://www.grinnell.edu/academics',
    cost: 'https://www.grinnell.edu/admission/financial-aid/cost-attendance'
  },
  admissions: {
    platforms: ['Common Application', 'QuestBridge Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; financial aid forms due the same day; decisions mid-to-late December' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding; financial aid forms due the same day; decisions early February' },
      { name: 'Regular Decision', date: '15 January', note: 'Financial aid forms due the same day; decisions late March or early April' }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'Grinnell charges no application fee' },
    documents: ['Common Application (no supplement required)', 'Two teacher evaluations', 'Counsellor recommendation and secondary school report', 'Official school transcript', 'CSS Profile or ISFAA for aid applicants'],
    recommendations: 'Two teacher evaluations plus a counsellor recommendation',
    essay: 'The Common Application essay; Grinnell requires no supplement',
    interview: null,
    notes: ['An application from a student seeking aid is not considered complete — or read for admission — until the CSS Profile or ISFAA is submitted.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    waiver: 'Required only if your native language is not English or your school did not teach primarily in English.',
    note: 'Grinnell lists the TOEFL, IELTS and Duolingo English Test as accepted for autumn 2027 entry.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Scores are not required, but applicants must say by the deadline whether they will submit them and cannot change that choice later. Grinnell superscores.' },
    act: { policy: 'optional', note: 'Same as the SAT; the science section is not required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$93,338 and up',
    items: [
      { label: 'Tuition (required books and course materials included)', amount: 73582 },
      { label: 'Activity fee', amount: 572 },
      { label: 'Housing (basic room)', amount: 8316 },
      { label: 'Food (full meal plan)', amount: 9468 },
      { label: 'Personal expenses', amount: 1100 },
      { label: 'Transportation (students from outside the US)', amount: 1300 }
    ],
    billedSubtotal: 91938,
    totalText: 'From $93,338 a year; Grinnell budgets $1,300 of travel for students from outside the US',
    note: 'Required books and course materials are included in tuition. Student health insurance costs $2,769 for 2026–27.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Grinnell states that competition for aid grows tougher as the applicant’s demonstrated need increases.',
      howToApply: 'Submit the CSS Profile or Grinnell’s ISFAA by the same deadline as the Common Application.',
      note: 'Grinnell is need-blind for domestic applicants only. For international students it is need-aware, but commits to meeting 100% of institutionally determined need for all admitted international students who apply for aid on time, with grants rather than loans.'
    },
    merit: [
      {
        name: 'Merit scholarships for international students',
        amount: 'Up to $28,000 a year',
        internationalEligible: true,
        criteria: 'Academic and co-curricular achievement; awarded regardless of financial need profile.',
        note: 'Grinnell describes this process as extremely competitive.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'ISFAA (in the Grinnell applicant portal)'],
      deadlines: 'Same as the admission deadline for your round',
      note: '68% of Grinnell students receive need-based aid, with an average grant of $69,834.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants — financial aid policy', url: 'https://www.grinnell.edu/admission/apply/international' },
    { label: 'Financial aid and cost of attendance', url: 'https://www.grinnell.edu/admission/financial-aid' },
    { label: 'Cost of attendance 2026–27', url: 'https://www.grinnell.edu/admission/financial-aid/cost-attendance' },
    { label: 'Requirements and deadlines', url: 'https://www.grinnell.edu/admission/apply/first-year/requirements' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'vassar-college',
  name: 'Vassar College',
  country: 'us',
  city: 'Poughkeepsie',
  region: 'New York',
  founded: 1861,
  type: 'Private liberal arts college',
  brand: { c1: '#8D1B3D', c2: '#5e1228', initials: 'VC' },
  description: 'A liberal arts college in the Hudson Valley with an open curriculum and strong arts and drama. Vassar is open about not being need-blind for international applicants, but it offers them significant need-based aid and meets 100% of the demonstrated need of those it admits, for all four years.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Vassar has no core curriculum beyond a first-year writing seminar and a quantitative and foreign-language requirement, and is known for drama, film and art history.',
  links: {
    website: 'https://www.vassar.edu/',
    admissions: 'https://www.vassar.edu/admission/apply',
    internationalAdmissions: 'https://www.vassar.edu/admission/apply/international/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.vassar.edu/admission/financial-aid/',
    financialAid: 'https://offices.vassar.edu/student-financial-services/financial-aid/',
    programs: 'https://www.vassar.edu/academics',
    cost: 'https://www.vassar.edu/admission/financial-aid/tuition/'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Early Decision I — financial aid', date: '15 November', note: 'Published on Vassar’s international financial aid schedule' },
      { name: 'Early Decision II — financial aid', date: '1 January', note: 'Published on Vassar’s international financial aid schedule' },
      { name: 'Regular Decision — financial aid', date: '1 February', note: 'Published on Vassar’s international financial aid schedule' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'A fee waiver can be requested on the Common Application or the Coalition Application' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendations', 'Financial aid forms for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Vassar’s supplement',
    interview: null,
    notes: ['International students who want aid must apply for it at the same time as admission.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Vassar’s international applicant page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$96,960 in direct costs',
    items: [
      { label: 'Tuition', amount: 76140 },
      { label: 'On-campus housing and food', amount: 19800 },
      { label: 'Mandatory fees', amount: 1020 },
      { label: 'Health insurance', amount: 3591 },
      { label: 'Books, supplies, personal expenses and transportation', amount: 2250 }
    ],
    billedSubtotal: 96960,
    totalText: 'About $96,960 billed, plus health insurance and roughly $2,250 of personal costs',
    note: 'Vassar publishes the health insurance premium separately; students with comparable cover may waive it.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Vassar states plainly that it is not need-blind in the evaluation of international students.',
      howToApply: 'Apply for aid at the same time as admission and meet the financial aid deadline for your round.',
      note: 'Vassar says it offers significant need-based aid to international first-year applicants and, if it admits them, meets 100% of demonstrated need for all four years.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Financial aid forms listed on Vassar’s international aid schedule'],
      deadlines: '15 November (ED I), 1 January (ED II), 1 February (Regular Decision)',
      note: 'Aid cannot be requested after admission.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://www.vassar.edu/admission/apply/international/' },
    { label: 'Prospective international students 2026-2027 (financial aid)', url: 'https://offices.vassar.edu/student-financial-services/wp-content/uploads/sites/57/2025/09/Prospective_Intl_2627.pdf' },
    { label: 'Tuition and fees', url: 'https://www.vassar.edu/admission/financial-aid/tuition/' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'hamilton-college',
  name: 'Hamilton College',
  country: 'us',
  city: 'Clinton',
  region: 'New York',
  founded: 1812,
  type: 'Private liberal arts college',
  brand: { c1: '#002D62', c2: '#001d40', initials: 'HC' },
  description: 'A liberal arts college in upstate New York with an open curriculum and a strong emphasis on writing and speaking. It is need-blind for Americans but not for international applicants — and it warns that an unrealistic statement of what a family can pay can cost an applicant their place.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Hamilton has no distribution requirements: students design their own course of study with an adviser, and every student writes extensively across subjects.',
  links: {
    website: 'https://www.hamilton.edu/',
    admissions: 'https://www.hamilton.edu/admission/apply',
    internationalAdmissions: 'https://www.hamilton.edu/admission/finaid/international',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.hamilton.edu/admission/finaid/types-of-aid',
    financialAid: 'https://www.hamilton.edu/admission/finaid/international',
    programs: 'https://www.hamilton.edu/academics',
    cost: 'https://www.hamilton.edu/admission/tuition'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding' },
      { name: 'Early Decision II', date: '4 January', note: 'Binding' },
      { name: 'Regular Decision', date: '4 January', note: null }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Certification of Finances (all international applicants)', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Hamilton’s supplement',
    interview: null,
    notes: [
      'Every international applicant must submit the Certification of Finances, whether or not they are applying for aid.',
      'Aid applications are not accepted after admission decisions: students who do not apply or qualify then are ineligible for all four years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Hamilton’s application details page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,250 comprehensive fee',
    items: [
      { label: 'Tuition', amount: 75210 },
      { label: 'Housing', amount: 10540 },
      { label: 'Food', amount: 8750 },
      { label: 'Student activity fee', amount: 750 },
      { label: 'Books and supplies', amount: 800 },
      { label: 'Personal expenses (up to)', amount: 1000 },
      { label: 'Travel allocation (up to)', amount: 1800 }
    ],
    billedSubtotal: 95250,
    totalText: '$95,250 comprehensive fee, plus up to about $3,600 in books, personal expenses and travel',
    note: 'Hamilton builds aid packages on the full budget, including the indirect costs.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Hamilton is not need-blind for non-US citizens, so a family’s ability to pay can decide an international application.',
      howToApply: 'Apply for aid with the admission application, submit the Certification of Finances and, where required, the CSS Profile.',
      note: 'Hamilton promises to meet the full demonstrated need of its students for all four years, including international students who applied for aid at the time of admission. Awards usually combine a Hamilton College Scholarship with campus employment.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Certification of Finances', 'CSS Profile'],
      deadlines: 'With the admission round',
      note: 'Hamilton advises international applicants to be honest about what their family can contribute: understating it may jeopardise admission.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Financial aid — international students', url: 'https://www.hamilton.edu/admission/finaid/international' },
    { label: 'Cost', url: 'https://www.hamilton.edu/admission/tuition' },
    { label: 'Apply — application details', url: 'https://www.hamilton.edu/admission/apply/details' }
  ],
  lastVerified: '2026-09-20'
},

{
  id: 'haverford-college',
  name: 'Haverford College',
  country: 'us',
  city: 'Haverford',
  region: 'Pennsylvania',
  founded: 1833,
  type: 'Private liberal arts college',
  brand: { c1: '#8C1D40', c2: '#5c1229', initials: 'HC' },
  description: 'A small Quaker-founded liberal arts college near Philadelphia, run day to day by a student honour code. Haverford funds only a limited number of international students each year, but it says it meets the full demonstrated need of every admitted student, international students included.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Haverford shares courses and libraries with Bryn Mawr and Swarthmore, so students can take subjects the college does not teach itself.',
  links: {
    website: 'https://www.haverford.edu/',
    admissions: 'https://www.haverford.edu/admission/applying',
    internationalAdmissions: 'https://www.haverford.edu/admission/applying/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.haverford.edu/financial-aid',
    financialAid: 'https://www.haverford.edu/financial-aid/international-applicants',
    programs: 'https://catalog.haverford.edu/',
    cost: 'https://www.haverford.edu/financial-aid/cost-of-attendance'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; financial aid application due the same day' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding; financial aid application due the same day' },
      { name: 'Regular Decision', date: '10 January', note: 'Financial aid application due the same day' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'A school counsellor can request a fee waiver in a letter with the application' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile or Haverford’s International Student Financial Aid Application'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Haverford’s supplement',
    interview: null,
    notes: [
      'International students who do not receive aid in their first year cannot receive it later, and cannot enter as transfer students with aid.',
      'Aid does not cover international travel or living costs outside term.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Haverford’s international students page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$100,026 total for first-years',
    items: [
      { label: 'Tuition', amount: 74930 },
      { label: 'Student government fee', amount: 552 },
      { label: 'Housing', amount: 12458 },
      { label: 'Food', amount: 8096 },
      { label: 'Orientation fee (first-year students only)', amount: 311 },
      { label: 'Books and supplies', amount: 1340 },
      { label: 'Personal expenses', amount: 1864 },
      { label: 'Additional meals', amount: 405 }
    ],
    billedSubtotal: 96347,
    totalText: '$100,026 in total for a first-year student, of which $96,347 is billed by the College',
    note: 'The student health insurance plan costs $2,330 for 2026–27 if you need it.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Haverford funds a limited number of international students in each entering class, so the route is narrow even though need is met in full.',
      howToApply: 'File the CSS Profile — or Haverford’s own International Student Financial Aid Application — by the deadline for your round.',
      note: 'Haverford states that it meets the full demonstrated financial need of all admitted students, including international students, transfers and students admitted from the waiting list. Families earning under $60,000 have no loans in the package; above that, loans run from $1,500 to $3,000 a year.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['CSS Profile', 'Haverford International Student Financial Aid Application'],
      deadlines: '15 November (ED I), 5 January (ED II), 10 January (Regular Decision)',
      note: 'The pages consulted do not say whether admission is need-blind or need-aware for international applicants; all Haverford aid is need-based.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants — financial aid', url: 'https://www.haverford.edu/financial-aid/international-applicants' },
    { label: 'Tuition and aid', url: 'https://www.haverford.edu/admission/tuition-and-aid' },
    { label: 'Cost of attendance', url: 'https://www.haverford.edu/financial-aid/cost-of-attendance' }
  ],
  lastVerified: '2026-09-20'
}
);

/* ---- Batch added 21 September 2026: ten research universities with
   very different answers for international students — from full need
   met (Caltech) to no need-based aid at all (Carnegie Mellon, USC,
   Boston University, Boston College). ---- */
window.UNIPATH.universities.push(
{
  id: 'caltech',
  name: 'California Institute of Technology',
  shortName: 'Caltech',
  country: 'us',
  city: 'Pasadena',
  region: 'California',
  founded: 1891,
  type: 'Private research university',
  brand: { c1: '#FF6C0C', c2: '#b34a06', initials: 'CT' },
  description: 'A very small science and engineering university in Pasadena, with about a thousand undergraduates and a demanding shared core in maths and physics. International applicants are read need-aware because aid money for them is limited, but every admitted student’s full demonstrated need is met.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','mathematics','biology','economics','humanities','social-sciences'],
  englishTaughtPrograms: ['engineering','computer-science','mathematics','biology','economics','humanities','social-sciences'],
  programNote: 'Every Caltech student takes a core of calculus, physics, chemistry and biology. Degrees are overwhelmingly in science and engineering; humanities and social sciences exist but are small.',
  links: {
    website: 'https://www.caltech.edu/',
    admissions: 'https://www.admissions.caltech.edu/apply/first-year-applicants',
    internationalAdmissions: 'https://www.admissions.caltech.edu/apply/first-year-applicants/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.finaid.caltech.edu/',
    financialAid: 'https://www.finaid.caltech.edu/Applying/international-students',
    programs: 'https://www.catalog.caltech.edu/',
    cost: 'https://www.finaid.caltech.edu/costs'
  },
  admissions: {
    platforms: ['Common Application', 'QuestBridge Application'],
    deadlines: [
      { name: 'Restrictive Early Action', entryTerm: 'Autumn 2027', dateISO: '2026-11-01', date: '1 November 2026', note: 'Decisions in mid-December' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-04', date: '4 January 2027', note: 'Decisions in mid-March; reply by 1 May 2027' }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiver: 'Aid applicants for whom the $85 fee is a hardship can have it waived; QuestBridge applicants are never charged' },
    documents: ['Common Application with Caltech’s supplemental essays', 'School transcript and reports', 'Two teacher recommendations (maths or science and humanities or social science)', 'SAT or ACT scores', 'English proficiency score where required'],
    recommendations: 'A maths or science teacher and a humanities or social science teacher, plus a counsellor',
    essay: 'Personal essay plus Caltech’s supplemental essays',
    interview: null,
    notes: [
      'Applicants must have taken calculus, physics and chemistry; IB applicants need Higher Level Maths and A-Level applicants need A-Level Maths.',
      'International applicants who might ever need aid must apply for it with the admission application; aid cannot be requested later.'
    ]
  },
  english: {
    ielts: { min: 7, recommended: null, note: 'IELTS 7 overall, with at least 7 in each area.' },
    toefl: { min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }, { period: 'post2026', min: 5, recommended: null }], note: 'TOEFL 100 (at least 25 in each area) before 21 January 2026; 5 overall and 5 in each area from that date.' },
    duolingo: { min: 130, recommended: null, note: 'Duolingo English Test 130 overall and in each area.' },
    waiver: 'Not required if your native language is English or English is the main language of instruction at your school; strongly recommended for non-native speakers even then.',
    note: 'The English exam must be taken before the application deadline. Caltech also accepts InitialView interviews as supporting evidence.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'For autumn 2027 entry Caltech requires the SAT or ACT. Scores of 780–800 and 750–770 are reported to readers only as score bands, and there is no minimum.' },
    act: { policy: 'required', note: 'SAT or ACT required; ACT 35–36 and 33–34 are banded the same way.' },
    otherTests: null,
    internationalQualifications: 'IB students need Higher Level Maths and A-Level students need A-Level Maths; students in India must complete both Class X and XII board exams.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$98,622 total cost',
    items: [
      { label: 'Tuition', amount: 68574 },
      { label: 'Fees', amount: 2655 },
      { label: 'Housing', amount: 12711 },
      { label: 'Food and meals', amount: 9285 },
      { label: 'Books, course materials, supplies and equipment', amount: 1428 },
      { label: 'Personal expenses', amount: 3969 },
      { label: 'Student health insurance (if not waived)', amount: 5388 }
    ],
    billedSubtotal: 93225,
    totalText: '$98,622 for the nine-month year, of which $93,225 is billed by Caltech; health insurance is extra',
    note: 'Aid recipients who join the Caltech health plan can have its cost added to their budget and covered by grant.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: true, books: true },
      renewable: true,
      competitiveness: 'Need-aware for international applicants because the total aid budget for them is limited.',
      howToApply: 'Apply for aid with the admission application; international students submit the CSS Profile by 1 February.',
      note: 'Caltech states that it meets 100% of demonstrated financial need, and that its aid covers the full cost of attendance — tuition, housing, dining, books, fees and personal expenses. International students who do not apply for or receive aid in their first year cannot apply later.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'International Financial Aid Statement of Intent'],
      deadlines: 'CSS Profile by 1 February before the year of entry',
      note: 'Caltech says the limited international aid budget "may result in financial need being a factor" in admission.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://www.admissions.caltech.edu/apply/first-year-applicants/international-applicants' },
    { label: 'On-campus cost of attendance 2026-27', url: 'https://www.finaid.caltech.edu/costs' },
    { label: 'Standardized tests', url: 'https://www.admissions.caltech.edu/apply/first-year-applicants/standardized-tests' },
    { label: 'Applying as an international student — financial aid', url: 'https://www.finaid.caltech.edu/Applying/international-students' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'carnegie-mellon-university',
  name: 'Carnegie Mellon University',
  country: 'us',
  city: 'Pittsburgh',
  region: 'Pennsylvania',
  founded: 1900,
  type: 'Private research university',
  brand: { c1: '#C41230', c2: '#7a0b1e', initials: 'CMU' },
  description: 'A private research university in Pittsburgh, world-famous for computer science, robotics and engineering, as well as drama and design. For most international undergraduates there is no financial aid at all: Carnegie Mellon asks them to plan to pay the full cost of attendance.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['computer-science','engineering','business','economics','mathematics','arts','humanities','social-sciences','biology','psychology'],
  englishTaughtPrograms: ['computer-science','engineering','business','economics','mathematics','arts','humanities','social-sciences','biology','psychology'],
  programNote: 'Applicants apply to one college, such as the School of Computer Science, the College of Engineering, the Tepper School of Business or the College of Fine Arts. Drama, music and design have their own portfolio or audition requirements and earlier deadlines.',
  links: {
    website: 'https://www.cmu.edu/',
    admissions: 'https://www.cmu.edu/admission/admission/application-plans-deadlines',
    internationalAdmissions: 'https://www.cmu.edu/admission/admission/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.cmu.edu/sfs/financial-aid/international/index.html',
    financialAid: 'https://www.cmu.edu/sfs/financial-aid/international/index.html',
    programs: 'https://coursecatalog.web.cmu.edu/',
    cost: 'https://www.cmu.edu/sfs/tuition/undergraduate/index.html'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', date: '2 November', note: 'Binding; decisions by 15 December. Not available for Drama, Music or BXA Design' },
      { name: 'Regular Decision', date: '4 January', note: 'Decisions by 1 April; Drama and Music applicants apply by 1 December' }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiver: null },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendation', 'English proficiency score for non-native speakers', 'Portfolio or audition for arts programmes'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Carnegie Mellon’s short-answer questions',
    interview: 'An InitialView or Vericant interview is recommended, not required, for non-native English speakers',
    notes: ['Applicants may apply to only one college within the university.']
  },
  english: {
    ielts: { min: 7.5, recommended: null, note: 'IELTS Academic 7.5 overall with at least 7.5 in each band.' },
    toefl: { min: 5, recommended: null, scales: [{ period: 'post2026', min: 5, recommended: null }], note: 'TOEFL iBT 5 overall and in each section for tests from 21 January 2026; TOEFL Essentials 11.' },
    duolingo: { min: 135, recommended: null, note: 'Duolingo English Test 135 overall and in all four subscores.' },
    waiver: null,
    note: 'Cambridge English 191 overall and in each skill is also accepted. Scores must be no more than two years old at the time of application.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted — check Carnegie Mellon’s standardized testing page for your entry year.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$69,702 tuition',
    items: [
      { label: 'Tuition', amount: 69702 },
      { label: 'Standard double room', amount: 11700 },
      { label: 'First-year meal plan', amount: 7950 },
      { label: 'Student health insurance', amount: 3093 }
    ],
    billedSubtotal: 89352,
    totalText: 'About $89,352 for tuition, housing and meals, plus health insurance, fees, books and travel',
    note: 'International students must show they can pay the full cost of attendance.'
  },
  scholarships: {
    fullRide: {
      available: false, internationalEligible: false, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Carnegie Mellon states: "Carnegie Mellon doesn’t offer financial aid to international students" and that they "must plan to pay the total cost of attendance". The exceptions it lists are DACA students, two Behring Foundation scholarships a year for students from Brazil in computer science or electrical and computer engineering, and the separate Qatar campus.'
    },
    merit: [],
    needBased: {
      availableToInternational: false, meetsFullNeed: null, needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'No institutional need-based aid for international undergraduates at the Pittsburgh campus.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://www.cmu.edu/admission/admission/international-applicants' },
    { label: 'International student funding opportunities', url: 'https://www.cmu.edu/sfs/financial-aid/international/index.html' },
    { label: 'Application plans and deadlines', url: 'https://www.cmu.edu/admission/admission/application-plans-deadlines' },
    { label: '2026-2027 undergraduate tuition', url: 'https://www.cmu.edu/sfs/tuition/undergraduate/index.html' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'georgetown-university',
  name: 'Georgetown University',
  country: 'us',
  city: 'Washington',
  region: 'District of Columbia',
  founded: 1789,
  type: 'Private Jesuit research university',
  brand: { c1: '#041E42', c2: '#63666A', initials: 'GU' },
  description: 'The oldest Catholic and Jesuit university in the United States, in Washington, D.C., best known for its School of Foreign Service, politics and business. Aid for international students is described by the university itself as extremely limited, and those who do not receive it in the first year never will.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['social-sciences','business','economics','humanities','law','biology','medicine','mathematics','computer-science','psychology'],
  englishTaughtPrograms: ['social-sciences','business','economics','humanities','law','biology','medicine','mathematics','computer-science','psychology'],
  programNote: 'Applicants choose one undergraduate school: the College of Arts & Sciences, the Walsh School of Foreign Service, the McDonough School of Business, the School of Nursing or the School of Health. The Law & Policy tag reflects foreign service and government study, not a law degree.',
  links: {
    website: 'https://www.georgetown.edu/',
    admissions: 'https://uadmissions.georgetown.edu/apply/first-year-applicants/',
    internationalAdmissions: 'https://uadmissions.georgetown.edu/apply/international-applicants/',
    applicationPortal: 'https://uadmissions.georgetown.edu/applicant-portal/',
    scholarships: 'https://finaid.georgetown.edu/undergrad/international-students/',
    financialAid: 'https://finaid.georgetown.edu/undergrad/international-students/',
    programs: 'https://bulletin.georgetown.edu/',
    cost: 'https://studentaccounts.georgetown.edu/tuition/undergraduate/'
  },
  admissions: {
    platforms: ['Georgetown Application'],
    deadlines: [
      { name: 'Early Action', date: '1 November', note: 'Non-binding, but you may not apply Early Decision elsewhere; decisions by 15 December' },
      { name: 'Regular Decision', date: '1 January', note: 'Decisions by 1 April' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Georgetown accepts fee waiver requests from any applicant, international applicants included, for whom the fee is a significant burden' },
    documents: ['Georgetown Application (not the Common Application)', 'Georgetown Writing Supplement: two short and two long essays', 'Academic credentials for all four years of secondary school', 'SAT or ACT scores', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Two short and two long essays in the Georgetown Writing Supplement',
    interview: 'Alumni interviews are part of the process where available',
    notes: ['Georgetown uses its own application rather than the Common Application.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Georgetown’s standardized test requirements for international applicants.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Georgetown requires SAT or ACT scores and highly recommends AP scores.' },
    act: { policy: 'required', note: 'SAT or ACT required; the ACT Science section is highly recommended, especially for science majors.' },
    otherTests: 'AP exam scores are highly recommended.',
    internationalQualifications: 'Credentials in other languages need English translations accompanied by the originals.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$74,520 tuition',
    items: [
      { label: 'Tuition and mandatory fees (two semesters at $37,260)', amount: 74520 },
      { label: 'Student activity fee (two semesters at $105.50)', amount: 211 },
      { label: 'Student health insurance', amount: 4450 },
      { label: 'Housing and food', text: 'Published separately in the full cost of attendance' }
    ],
    billedSubtotal: null,
    totalText: '$74,520 tuition plus housing, food, fees and insurance',
    note: 'Georgetown raised tuition by 4.75% for 2026–27.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: true, basis: 'need-based',
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Georgetown describes financial aid for international students as "extremely limited".',
      howToApply: 'Indicate the intent to apply for aid on the admission application and submit the CSS Profile.',
      note: 'Admitted international students who asked for aid are considered for "a very limited number of need-based scholarships". Anyone who does not receive a scholarship in the first year will not be offered one later. Georgetown does not publish a full-need commitment for international students.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: null, needBlindInternational: null,
      forms: ['CSS Profile'],
      deadlines: 'With the admission application; aid decisions arrive by the first week of April',
      note: 'The pages consulted do not state whether admission is need-blind or need-aware for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://finaid.georgetown.edu/undergrad/international-students/' },
    { label: 'First-year applicants', url: 'https://uadmissions.georgetown.edu/apply/first-year-applicants/' },
    { label: 'Undergraduate tuition and fees 2026-2027', url: 'https://studentaccounts.georgetown.edu/tuition/undergraduate/' },
    { label: 'Announcing 2026-2027 tuition rates', url: 'https://www.georgetown.edu/news/announcing-fall-2026-spring-2027-tuition-rates-2/' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'university-of-southern-california',
  name: 'University of Southern California',
  shortName: 'USC',
  country: 'us',
  city: 'Los Angeles',
  region: 'California',
  founded: 1880,
  type: 'Private research university',
  brand: { c1: '#990000', c2: '#FFCC00', initials: 'USC' },
  description: 'A large private research university in Los Angeles, known for film, business, engineering and communication. USC does not give need-based aid to international students; they can compete for merit scholarships, but none covers the full cost of attendance.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','engineering','computer-science','arts','economics','social-sciences','humanities','biology','psychology','medicine','education','law','mathematics'],
  englishTaughtPrograms: ['business','engineering','computer-science','arts','economics','social-sciences','humanities','biology','psychology','medicine','education','law','mathematics'],
  programNote: 'USC has more than twenty schools, including the School of Cinematic Arts, Marshall (business), Viterbi (engineering) and Annenberg (communication). The Law & Policy tag reflects undergraduate programmes in law, history and culture and public policy.',
  links: {
    website: 'https://www.usc.edu/',
    admissions: 'https://admission.usc.edu/',
    internationalAdmissions: 'https://admission.usc.edu/prospective-students/how-to-apply/international-students/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admission.usc.edu/cost-and-financial-aid/scholarships/',
    financialAid: 'https://admission.usc.edu/prospective-students/how-to-apply/international-students/',
    programs: 'https://catalogue.usc.edu/',
    cost: 'https://financialaid.usc.edu/undergraduate-financial-aid/cost-of-attendance/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Merit scholarship consideration', date: '1 December', note: 'Apply by this date to be considered for USC merit scholarships' },
      { name: 'Regular Decision', date: '15 January', note: 'Final first-year deadline' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application with USC questions', 'Official records from all secondary schools, with certified English translations', 'External exam results or predictions (IB, A-Levels, national exams)', 'Financial Statement of Personal or Family Support', 'Copy of passport', 'English proficiency score'],
    recommendations: 'Counsellor and teacher recommendations',
    essay: 'Common Application essay plus USC’s supplement',
    interview: null,
    notes: [
      'International applicants upload the Financial Statement of Personal or Family Support within two weeks of their deadline, proving funds for at least the first year; bank documents must be dated August 2026 or later.',
      'USC does not work with, and is not represented by, recruitment agents.'
    ]
  },
  english: {
    ielts: { min: 7, recommended: null, note: 'IELTS (or IELTS Indicator) 7 is the recommended minimum.' },
    toefl: { min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }, { period: 'post2026', min: 5, recommended: null }], note: 'TOEFL 100 with at least 20 in each section before 21 January 2026; 5 overall with at least 4 in each section from that date. TOEFL ITP Plus for China is not accepted.' },
    duolingo: { min: null, recommended: null, note: 'The Duolingo English Test is not on USC’s published list of approved exams.' },
    waiver: 'USC grants no waivers: every international applicant whose native language is not English must submit an approved exam.',
    note: 'Also accepted: Cambridge C1 Advanced 185 (169 in each skill), PTE 68, SAT Evidence-Based Reading and Writing 650 or ACT English 27.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'USC is test-optional for first-year applicants entering in 2027–28; scores that are sent are considered.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'USC publishes expectations for many national systems in its International Qualifications tool.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$75,384 tuition',
    items: [
      { label: 'Tuition (12–18 units, two semesters)', amount: 75384 },
      { label: 'Student health service fee', amount: 1440 },
      { label: 'Mandatory health insurance', amount: 3777 },
      { label: 'Student programming, aid and transportation fees', amount: 452 },
      { label: 'New student fee (first semester only)', amount: 450 },
      { label: 'Housing, meals, books and living costs', text: 'Published in USC’s cost of attendance' }
    ],
    billedSubtotal: null,
    totalText: '$75,384 tuition plus about $6,100 in fees and insurance, before housing and living costs',
    note: 'International applicants must document funds for the full cost of attendance.'
  },
  scholarships: {
    fullRide: {
      available: false, internationalEligible: false, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'USC states that it does not offer need-based aid to international applicants and that no USC merit scholarship covers the full cost of attendance.'
    },
    merit: [
      {
        name: 'USC Merit Scholarships',
        amount: 'Partial; none covers the full cost of attendance',
        internationalEligible: true,
        criteria: 'Holistic review of the whole application; there are no minimum requirements, but selection is highly competitive.',
        note: 'Apply by 1 December to be considered. International applicants cannot rely on a merit award to show they can pay.'
      }
    ],
    needBased: {
      availableToInternational: false, meetsFullNeed: null, needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'No need-based aid for international students.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — undergraduate admission', url: 'https://admission.usc.edu/prospective-students/how-to-apply/international-students/' },
    { label: 'Scholarships', url: 'https://admission.usc.edu/cost-and-financial-aid/scholarships/' },
    { label: 'Cost of attendance', url: 'https://financialaid.usc.edu/undergraduate-financial-aid/cost-of-attendance/' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'boston-university',
  name: 'Boston University',
  country: 'us',
  city: 'Boston',
  region: 'Massachusetts',
  founded: 1839,
  type: 'Private research university',
  brand: { c1: '#CC0000', c2: '#8a0000', initials: 'BU' },
  description: 'A large private research university stretched along the Charles River in Boston, with strong communication, business, engineering and health programmes. International students cannot receive BU need-based aid, but they compete for merit awards, including the Trustee Scholarship, BU’s top award.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','engineering','computer-science','economics','social-sciences','humanities','arts','biology','psychology','medicine','education','mathematics'],
  englishTaughtPrograms: ['business','engineering','computer-science','economics','social-sciences','humanities','arts','biology','psychology','medicine','education','mathematics'],
  programNote: 'BU has ten undergraduate schools and colleges, including Questrom (business), the College of Communication and Sargent College of health sciences.',
  links: {
    website: 'https://www.bu.edu/',
    admissions: 'https://www.bu.edu/admissions/apply/',
    internationalAdmissions: 'https://www.bu.edu/finaid/undergraduate-students/international/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.bu.edu/admissions/tuition-aid/scholarships-financial-aid/first-year-merit/',
    financialAid: 'https://www.bu.edu/finaid/undergraduate-students/international/',
    programs: 'https://www.bu.edu/academics/',
    cost: 'https://www.bu.edu/admissions/tuition-aid/tuition/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Merit scholarship consideration', date: '1 December', note: 'International applicants must apply for admission by this date to be considered for merit scholarships' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus BU’s supplement',
    interview: null,
    notes: ['BU’s full Early Decision and Regular Decision dates are on its deadlines page; only the 1 December merit deadline was confirmed here.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check BU’s international applicant pages for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$98,419 total cost',
    items: [
      { label: 'Tuition', amount: 73024 },
      { label: 'Housing (depending on accommodation)', amount: 13170 },
      { label: 'Food (most dining plans)', amount: 7570 },
      { label: 'Fees', amount: 1570 },
      { label: 'Books and supplies', amount: 1000 },
      { label: 'Personal expenses', amount: 1455 },
      { label: 'Local transportation', amount: 630 }
    ],
    billedSubtotal: 95334,
    totalText: '$98,419 in total, of which $95,334 is billed by BU',
    note: 'Massachusetts requires health insurance for students enrolled at least three-quarters time.'
  },
  scholarships: {
    fullRide: {
      available: false, internationalEligible: false, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'BU states that international students are not eligible for need-based aid from the university, the state or the federal government. Its promise to meet 100% of need applies to US citizens and permanent residents.'
    },
    merit: [
      {
        name: 'Trustee Scholarship and Presidential Scholarship',
        amount: 'Merit awards; the Trustee Scholarship is BU’s top award',
        internationalEligible: true,
        criteria: 'Outstanding academic records; competitive. Apply for admission by 1 December.',
        note: 'Trustee Scholars must keep a 3.00 GPA each year and live in BU housing on the Charles River or Fenway campus.'
      }
    ],
    needBased: {
      availableToInternational: false, meetsFullNeed: null, needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'No need-based aid for international students.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial assistance', url: 'https://www.bu.edu/finaid/undergraduate-students/international/' },
    { label: 'Cost of attendance 2026/2027', url: 'https://www.bu.edu/admissions/tuition-aid/tuition/' },
    { label: 'Merit scholarships for first-year students', url: 'https://www.bu.edu/admissions/tuition-aid/scholarships-financial-aid/first-year-merit/' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'boston-college',
  name: 'Boston College',
  country: 'us',
  city: 'Chestnut Hill',
  region: 'Massachusetts',
  founded: 1863,
  type: 'Private Jesuit research university',
  brand: { c1: '#8A100B', c2: '#BC9B6A', initials: 'BC' },
  description: 'A Jesuit university just outside Boston, strong in business, economics and the humanities. It is need-blind for Americans, but it is unable to provide need-based aid to international citizens, who should be ready to pay the full cost.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','humanities','social-sciences','biology','psychology','education','medicine','mathematics','computer-science','engineering'],
  englishTaughtPrograms: ['business','economics','humanities','social-sciences','biology','psychology','education','medicine','mathematics','computer-science','engineering'],
  programNote: 'Undergraduates study in the Morrissey College of Arts and Sciences, the Carroll School of Management, the Lynch School of Education and Human Development, the Connell School of Nursing or the newer Schiller Institute programmes, including engineering.',
  links: {
    website: 'https://www.bc.edu/',
    admissions: 'https://www.bc.edu/bc-web/admission/apply.html',
    internationalAdmissions: 'https://www.bc.edu/bc-web/admission/apply/international.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.bc.edu/bc-web/admission/affordability.html',
    financialAid: 'https://www.bc.edu/bc-web/admission/apply/international.html',
    programs: 'https://www.bc.edu/bc-web/academics.html',
    cost: 'https://www.bc.edu/bc-web/offices/student-services/billing-student-accounts/tuition-fees.html'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding; decisions by 15 December' },
      { name: 'Early Decision II', date: '4 January', note: 'Binding; decisions by 15 February' },
      { name: 'Regular Decision', date: '4 January', note: 'Decisions by 1 April; reply by 1 May' }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiver: 'Fee waivers through the Common Application are for US citizens and permanent residents' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'English proficiency score for international applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Boston College’s supplement',
    interview: null,
    notes: ['Students at national schools in China may submit an InitialView interview instead, due 15 November (ED I) or 15 January (ED II and Regular Decision).']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Required of international applicants; no minimum is published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Required of international applicants; no minimum is published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum is published on the pages consulted.' },
    waiver: null,
    note: 'All applicants who are not US citizens or permanent residents submit TOEFL, IELTS or Duolingo results.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Boston College is test-optional; scores that are sent are reviewed.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$95,258 total cost',
    items: [
      { label: 'Tuition', amount: 75070 },
      { label: 'Housing, food, fees and other costs', text: 'Included in the $95,258 total' }
    ],
    billedSubtotal: null,
    totalText: '$95,258 cost of attendance for the year',
    note: 'The Board of Trustees set tuition at $75,070 for 2026–27.'
  },
  scholarships: {
    fullRide: {
      available: false, internationalEligible: false, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Boston College states that it is unable to provide need-based aid to international citizens, who should be prepared to finance the full cost of a BC education.'
    },
    merit: [],
    needBased: {
      availableToInternational: false, meetsFullNeed: null, needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'BC’s need-blind admission and full-need promise apply to US citizens and permanent residents.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://www.bc.edu/bc-web/admission/apply/international.html' },
    { label: 'Apply — deadlines and fee', url: 'https://www.bc.edu/bc-web/admission/apply.html' },
    { label: 'Trustees set tuition for 2026-2027', url: 'https://www.bc.edu/bc-web/sites/bc-news/articles/2026/spring/trustees-set-tuition-for-2026-2027.html' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'brandeis-university',
  name: 'Brandeis University',
  country: 'us',
  city: 'Waltham',
  region: 'Massachusetts',
  founded: 1948,
  type: 'Private research university',
  brand: { c1: '#003478', c2: '#00224f', initials: 'BU' },
  description: 'A small research university near Boston, founded by the American Jewish community and open to all. Its Wien International Scholarship Program has funded hundreds of students from around the world and meets the full demonstrated need of each recipient.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Brandeis combines a liberal arts college with a research university; business is taught as an undergraduate major through the International Business School.',
  links: {
    website: 'https://www.brandeis.edu/',
    admissions: 'https://www.brandeis.edu/admissions/apply/application-process/first-year.html',
    internationalAdmissions: 'https://www.brandeis.edu/student-financial-services/financial-aid/apply/international-students.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.brandeis.edu/student-financial-services/financial-aid/scholarships/international.html',
    financialAid: 'https://www.brandeis.edu/student-financial-services/financial-aid/apply/international-students.html',
    programs: 'https://www.brandeis.edu/academics/',
    cost: 'https://www.brandeis.edu/admissions/affordability/tuition.html'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding' },
      { name: 'Early Decision II', date: '1 January', note: 'Binding' },
      { name: 'Regular Decision', date: '1 January', note: null }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile (code 3092) for aid applicants', 'Income and asset documents on request'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Brandeis’ supplement',
    interview: null,
    notes: [
      'There is no separate application for the Wien International Scholarship: every international applicant who applies for aid is considered.',
      'Financial aid is not available to international students who do not receive it on admission.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Brandeis’ international applicant pages for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'Documents in other languages need certified translations from a consulate, embassy or school official.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: 'Not confirmed — see Brandeis’ tuition page',
    items: [
      { label: 'Tuition, housing and meals', text: 'Published on Brandeis’ tuition page and net cost calculator; the figures could not be read here' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — check the official tuition page',
    note: 'Brandeis publishes average first-year costs on its admissions site.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Brandeis says competition for international aid is strong; the Wien Scholarship goes to exceptional applicants with strong academics and community involvement.',
      howToApply: 'Indicate the intent to apply for aid and submit the CSS Profile before admission.',
      note: 'Brandeis states that the Wien International Scholarship meets the full demonstrated financial need of each recipient, is renewable for up to eight semesters on continued need, and requires scholars to live on campus. International students must reapply for aid each year.'
    },
    merit: [
      {
        name: 'Davis United World College Scholars Program',
        amount: 'Need-based award for graduates of United World Colleges',
        internationalEligible: true,
        criteria: 'Graduates of a United World College.',
        note: 'Listed by Brandeis among its international student scholarships.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: null, needBlindInternational: null,
      forms: ['CSS Profile (code 3092)', 'Non-custodial CSS Profile where applicable'],
      deadlines: 'By the published priority filing dates, before admission',
      note: 'Full need is promised to Wien Scholars; the pages consulted do not promise it for every international aid recipient, and do not state whether admission is need-aware.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — how to apply for aid', url: 'https://www.brandeis.edu/student-financial-services/financial-aid/apply/international-students.html' },
    { label: 'International student scholarships', url: 'https://www.brandeis.edu/student-financial-services/financial-aid/scholarships/international.html' },
    { label: 'Wien International Scholarship Program', url: 'https://www.brandeis.edu/isso/programs/wien/index.html' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'case-western-reserve-university',
  name: 'Case Western Reserve University',
  shortName: 'CWRU',
  country: 'us',
  city: 'Cleveland',
  region: 'Ohio',
  founded: 1826,
  type: 'Private research university',
  brand: { c1: '#0A304E', c2: '#626262', initials: 'CWRU' },
  description: 'A private research university in Cleveland, strongest in engineering, nursing, biomedical science and pre-medical study. About one undergraduate in five is an international citizen; limited need-based aid is available to them, alongside merit scholarships that go up to full tuition.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','biology','medicine','business','economics','mathematics','humanities','social-sciences','psychology','arts'],
  englishTaughtPrograms: ['engineering','computer-science','biology','medicine','business','economics','mathematics','humanities','social-sciences','psychology','arts'],
  programNote: 'CWRU has undergraduate programmes in engineering, sciences, nursing, management and the arts, and a 3/2 engineering route; the Health & Medicine tag reflects nursing and pre-health study.',
  links: {
    website: 'https://case.edu/',
    admissions: 'https://case.edu/admission/apply',
    internationalAdmissions: 'https://case.edu/admission/apply/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://case.edu/admission/tuition-aid/scholarships',
    financialAid: 'https://case.edu/financialaid/undergraduates/international-students',
    programs: 'https://bulletin.case.edu/',
    cost: 'https://case.edu/financialaid/undergraduates/estimated-costs-attendance-2026-27'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition on Scoir'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application or Coalition on Scoir', 'School transcript and reports, with English translations', 'Recommendations with English translations', 'English language exam score for non-native speakers', 'CSS Profile (code 1105) for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay; scholarship competitions have their own essay prompt',
    interview: null,
    notes: ['International applicants follow the same deadlines as domestic students; the dates were not confirmed on the pages consulted.']
  },
  english: {
    ielts: { min: 7, recommended: null, note: 'IELTS 7 is the published minimum.' },
    toefl: { min: 90, recommended: null, scales: [{ period: 'pre2026', min: 90, recommended: null }, { period: 'post2026', min: 4.5, recommended: null }], note: 'TOEFL iBT 90 (paper 577) for tests up to 20 January 2026; 4.5 on the scale used from 21 January 2026.' },
    duolingo: { min: 115, recommended: null, note: 'Duolingo English Test 115 is the published minimum.' },
    waiver: 'Waived automatically after two years at an English-medium school, SAT Evidence-Based Reading and Writing 630+, or ACT English 26+.',
    note: 'PTE Academic 61 is also accepted. Self-reported scores are fine at application; enrolling students confirm them with official reports.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted; records and recommendations need English translations.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$91,979 in tuition, housing and meals',
    items: [
      { label: 'Tuition', amount: 71410 },
      { label: 'Housing', amount: 11969 },
      { label: 'Unlimited meal plan', amount: 8600 },
      { label: 'Required fees', amount: 696 },
      { label: 'Matriculation fee (new students)', amount: 760 }
    ],
    billedSubtotal: 93435,
    totalText: 'About $93,435 in billed charges for a first-year student, before books, travel and personal expenses',
    note: 'Nursing students pay an additional $1,450 in fees.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: true, basis: 'merit',
      covers: { tuition: true, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: 'A select number of full-tuition awards are decided through essay-based scholarship competitions.',
      howToApply: 'Apply to the scholarship competitions listed by the Office of Undergraduate Admission, in addition to the application.',
      note: 'CWRU says it offers a limited amount of need-based aid to international first-year applicants, and scholarships including full-tuition awards. A full-cost award for international students is not described on the pages consulted.'
    },
    merit: [
      {
        name: 'CWRU scholarship competitions',
        amount: 'Up to full tuition',
        internationalEligible: true,
        criteria: 'Additional information and an essay; open to first-time, first-year international applicants.',
        note: 'All undergraduates are also considered automatically for several merit scholarships.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: null, needBlindInternational: null,
      forms: ['CSS Profile (code 1105)'],
      deadlines: 'With the admission application',
      note: 'CWRU’s general statement that it meets 100% of demonstrated need is not repeated on its international aid page, which describes a "limited amount" of need-based aid.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://case.edu/financialaid/undergraduates/international-students' },
    { label: 'International applicants — English proficiency and scholarships', url: 'https://case.edu/admission/apply/international-students' },
    { label: 'Estimated costs of attendance 2026-27', url: 'https://case.edu/financialaid/undergraduates/estimated-costs-attendance-2026-27' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'university-of-rochester',
  name: 'University of Rochester',
  country: 'us',
  city: 'Rochester',
  region: 'New York',
  founded: 1850,
  type: 'Private research university',
  brand: { c1: '#021BC3', c2: '#FFD82B', initials: 'UR' },
  description: 'A private research university in upstate New York with an open curriculum and the Eastman School of Music. It is need-aware for international applicants and funds only a small number with need-based aid, but promises to meet the full need of those it admits and gives merit scholarships to most admitted students.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','biology','medicine','economics','business','social-sciences','humanities','mathematics','psychology','arts'],
  englishTaughtPrograms: ['engineering','computer-science','biology','medicine','economics','business','social-sciences','humanities','mathematics','psychology','arts'],
  programNote: 'Rochester has no required core courses: students pick a major and two "clusters" of related courses in the other broad areas. Music is taught at the Eastman School.',
  links: {
    website: 'https://www.rochester.edu/',
    admissions: 'https://admissions.rochester.edu/applying/first-year-students/',
    internationalAdmissions: 'https://admissions.rochester.edu/applying/international-students/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.rochester.edu/financial-aid/scholarships/',
    financialAid: 'https://www.rochester.edu/financial-aid/international-undergraduates/',
    programs: 'https://www.rochester.edu/college/',
    cost: 'https://www.rochester.edu/financial-aid/undergraduate-tuition-expenses/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding' }
    ],
    applicationFee: { amount: 50, currency: 'USD', waiver: 'Application Fee Waiver Request Form for applicants facing hardship' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for international aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Rochester’s supplement',
    interview: null,
    notes: [
      'International aid applicants submit the CSS Profile by 1 November, 12:00 am Eastern Time.',
      'The Regular Decision date was not confirmed on the pages consulted.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Rochester’s international students page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Rochester is test-optional; self-reported scores are accepted, and admitted students who enrol send official reports.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$93,076 in tuition, housing and food',
    items: [
      { label: 'Tuition', amount: 71750 },
      { label: 'Housing and food', amount: 21326 }
    ],
    billedSubtotal: 93076,
    totalText: '$93,076 for tuition, housing and food, before fees, books and travel',
    note: 'Tuition rose 3.9% and housing and food 4.2% for 2026–27.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Rochester is need-aware for non-US citizens and says only a small number of international applicants will qualify for need-based aid.',
      howToApply: 'Submit the CSS Profile by 1 November with your application.',
      note: 'Rochester states it is committed to meeting the full demonstrated need of all admitted students regardless of citizenship, using a combination of merit and need-based aid.'
    },
    merit: [
      {
        name: 'University of Rochester merit scholarships',
        amount: 'Average about $20,000 a year',
        internationalEligible: true,
        criteria: 'All applicants are considered automatically, regardless of citizenship; no extra documents are needed.',
        note: 'About 75% of students admitted for 2026–27 received a merit scholarship.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile'],
      deadlines: '1 November',
      note: 'Rochester has bought a limited number of CSS Profile fee waivers; first-year applicants request one by 15 January.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International undergraduates — financial aid', url: 'https://www.rochester.edu/financial-aid/international-undergraduates/' },
    { label: 'First-year students — deadlines, fee and testing', url: 'https://admissions.rochester.edu/applying/first-year-students/' },
    { label: 'Tuition and financial aid rates set for 2026–27', url: 'https://www.rochester.edu/newscenter/tuition-financial-aid-rates-set-for-2026-27-academic-year/' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'tulane-university',
  name: 'Tulane University',
  country: 'us',
  city: 'New Orleans',
  region: 'Louisiana',
  founded: 1834,
  type: 'Private research university',
  brand: { c1: '#006747', c2: '#418FDE', initials: 'TU' },
  description: 'A private research university in New Orleans, known for public health, business and a service-learning requirement. Need-based aid for international students is capped at $30,000 a year, but its Global Scholarships can cover full tuition or even the full cost of attendance.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','social-sciences','humanities','biology','medicine','engineering','computer-science','mathematics','psychology','arts','law'],
  englishTaughtPrograms: ['business','economics','social-sciences','humanities','biology','medicine','engineering','computer-science','mathematics','psychology','arts','law'],
  programNote: 'Undergraduates enter Newcomb-Tulane College and can major across the Freeman School of Business, the School of Science and Engineering, public health and architecture. The Law & Policy tag reflects undergraduate legal studies, not a law degree.',
  links: {
    website: 'https://tulane.edu/',
    admissions: 'https://admission.tulane.edu/',
    internationalAdmissions: 'https://tulane.edu/admission-aid/international-admission',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admission.tulane.edu/tuition-aid/merit-scholarships',
    financialAid: 'https://admission.tulane.edu/international/aid',
    programs: 'https://catalog.tulane.edu/',
    cost: 'https://admission.tulane.edu/tuition-aid/cost'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Binding' },
      { name: 'Early Action', date: '10 November', note: 'Non-binding; apply early to be competitive for merit scholarships' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'CSS Profile for need-based aid', 'Tulane Declaration & Certification of Finances'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Tulane’s supplement',
    interview: 'Video interview invitations are sent by 31 March',
    notes: [
      'Tulane recommends completing the CSS Profile by 15 February; need-based aid must be reapplied for every year.',
      'Applicants in the top 20% academically are the most competitive for Global Scholarships.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Tulane’s international admission page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$75,136 in tuition and mandatory fees',
    items: [
      { label: 'Tuition', amount: 70622 },
      { label: 'Academic support, health centre, activity and recreation fees', amount: 4514 },
      { label: 'Housing (weighted first-year average)', amount: 11758 },
      { label: 'Dining plan (first-year minimum)', amount: 8780 },
      { label: 'Tulane Student Health Insurance Plan', amount: 3381 },
      { label: 'New student orientation fee (one-time)', amount: 300 }
    ],
    billedSubtotal: 95674,
    totalText: 'About $95,674 for tuition, fees, housing and dining, plus health insurance',
    note: 'Non-US citizens are enrolled in Tulane’s student health insurance plan.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'merit',
      covers: { tuition: true, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: 'Global Scholarships are competitive; applicants in the top 20% academically are the strongest candidates.',
      howToApply: 'Apply Early Decision or Early Action to be competitive; all applicants are considered for partial merit awards through the Common Application.',
      note: 'Tulane says its Global Scholarships "may cover your full tuition and fees or may even cover your full cost of attendance".'
    },
    merit: [
      {
        name: 'Tulane Global Scholarships and merit awards',
        amount: 'From $1,000 up to full tuition or the full cost of attendance',
        internationalEligible: true,
        criteria: 'Academic record; early applicants are the most competitive.',
        note: 'Every Common Application is considered for partial merit scholarships.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: false, needBlindInternational: null,
      forms: ['CSS Profile', 'Tulane Declaration & Certification of Finances'],
      deadlines: 'CSS Profile recommended by 15 February',
      note: 'Need-based aid for international students is capped at $30,000 a year and is not given to those who already hold at least that much in merit scholarship.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International student financial aid', url: 'https://admission.tulane.edu/international/aid' },
    { label: 'Newcomb-Tulane College tuition and fees 2026-2027', url: 'https://studentaccounts.tulane.edu/sites/default/files/2026-03/2026-2027_NTC_COSTS_20260319.pdf' },
    { label: 'Merit scholarships', url: 'https://admission.tulane.edu/tuition-aid/merit-scholarships' }
  ],
  lastVerified: '2026-09-21'
}
);

/* ---- Batch added 21 September 2026: nine more colleges from the
   requested list (four women's colleges, Bates, Wesleyan, Washington
   and Lee, Colgate and Carleton). ---- */
window.UNIPATH.universities.push(
{
  id: 'smith-college',
  name: 'Smith College',
  country: 'us',
  city: 'Northampton',
  region: 'Massachusetts',
  founded: 1871,
  type: 'Private liberal arts college for women',
  brand: { c1: '#004F9F', c2: '#F2A900', initials: 'SC' },
  description: 'One of the largest women’s colleges in the United States, in western Massachusetts, with an open curriculum and its own engineering programme. Smith meets the full documented need of every admitted student who applies on time, without loans — and from autumn 2026 tuition is free for eligible families earning up to $150,000, international students included.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','engineering','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','engineering','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Smith has no required courses outside the major and offers an engineering degree, which is rare for a liberal arts college. Students can also take courses at the other Five College campuses.',
  links: {
    website: 'https://www.smith.edu/',
    admissions: 'https://www.smith.edu/admission-aid/apply-smith/first-year-applicants',
    internationalAdmissions: 'https://www.smith.edu/admission-aid/tuition-aid-applicants/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.smith.edu/thenext150',
    financialAid: 'https://www.smith.edu/admission-aid/tuition-aid-applicants/international-applicants',
    programs: 'https://www.smith.edu/academics',
    cost: 'https://www.smith.edu/admission-aid/tuition-aid-applicants'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition on Scoir'],
    deadlines: [
      { name: 'Early Decision I — financial aid', date: '15 November', note: 'CSS Profile due for Early Decision I applicants' }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'There is no application fee' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendations', 'Midyear report', 'CSS Profile and translated income documents for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: [
      'Smith offers Early Decision I, Early Decision II and Regular Decision; only the Early Decision I financial aid date was confirmed here.',
      'International students who do not apply for aid before admission can never receive Smith aid.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    waiver: 'Not required if English is your first language, or if you studied at an English-medium school throughout secondary school.',
    note: 'International citizens whose first language is not English submit the TOEFL, IELTS, PTE or Duolingo English Test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Smith has been test-optional since 2009.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International applicants may be asked for national or international exam results.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: 'Not confirmed — see Smith’s cost pages',
    items: [
      { label: 'Tuition, housing and food', text: 'Set each January by the Board of Trustees; the 2026–27 figures were not confirmed here' },
      { label: 'Non-billed costs: books, personal expenses and SEVIS fee (estimate)', amount: 4060 }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — check the official cost page',
    note: 'Smith meets full need with a loan-free package, so the sticker price matters less for aid recipients.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Smith says the pool of international aid applicants is highly competitive and that support varies widely with family circumstances.',
      howToApply: 'Submit the CSS Profile and income documents by the deadline for your round, before any admission decision.',
      note: 'Smith states it will meet the full documented need of all admitted students who apply by the deadlines, with loans replaced by grants. Under the Next 150 Pledge, tuition is free from autumn 2026 for domestic and international undergraduates from families earning up to $150,000 with typical assets.'
    },
    merit: [
      {
        name: 'Smith merit awards',
        amount: 'Not published on the pages consulted',
        internationalEligible: null,
        criteria: 'All applicants for admission are considered automatically; there is no separate form.',
        note: 'Smith describes these as a limited number of awards based on merit rather than need.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['CSS Profile (code 3762)', 'Translated income documents'],
      deadlines: '15 November for Early Decision I; later rounds on Smith’s aid page',
      note: 'An international student’s family contribution stays the same each year; Smith adjusts its grant to keep it stable. The pages consulted do not state whether admission is need-aware for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Financial aid for international students', url: 'https://www.smith.edu/admission-aid/tuition-aid-applicants/international-applicants' },
    { label: 'The Next 150 Pledge', url: 'https://www.smith.edu/thenext150' },
    { label: 'First-year applicants', url: 'https://www.smith.edu/admission-aid/apply-smith/first-year-applicants' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'mount-holyoke-college',
  name: 'Mount Holyoke College',
  country: 'us',
  city: 'South Hadley',
  region: 'Massachusetts',
  founded: 1837,
  type: 'Private liberal arts college for women',
  brand: { c1: '#003B71', c2: '#00264a', initials: 'MHC' },
  description: 'The oldest of the women’s colleges known as the Seven Sisters, in western Massachusetts, with a large international community. Mount Holyoke promises to meet the demonstrated need of every admitted student; for international students the package usually combines a grant, a fixed-interest loan and a campus job.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Mount Holyoke is part of the Five College Consortium, so students can take courses at Amherst, Smith, Hampshire and UMass Amherst.',
  links: {
    website: 'https://www.mtholyoke.edu/',
    admissions: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year',
    internationalAdmissions: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-process/international-admission',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/affording-mount-holyoke/financial-aid',
    financialAid: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/affording-mount-holyoke/financial-aid',
    programs: 'https://www.mtholyoke.edu/academics',
    cost: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/affording-mount-holyoke/tuition-and-fees'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; notification in late December. Financial aid due the same day' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding; notification in late January. Financial aid due the same day' },
      { name: 'Regular Decision', date: '15 January', note: 'Notification in mid-March. Financial aid due the same day' }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'There is no application fee for any option' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['International students who do not apply for aid when they apply for admission are never eligible for need-based aid at Mount Holyoke.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Mount Holyoke’s international admission page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Submitting SAT and ACT results is optional.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$92,774 comprehensive fee',
    items: [
      { label: 'Tuition', amount: 71178 },
      { label: 'Housing', amount: 10836 },
      { label: 'Food', amount: 10760 }
    ],
    billedSubtotal: 92774,
    totalText: '$92,774 comprehensive fee; Mount Holyoke’s estimated cost of attendance is $93,046',
    note: 'Books, travel and personal expenses are additional.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Aid for international students is awarded on need as shown on the CSS Profile; the pages consulted do not state how admission treats the request.',
      howToApply: 'Apply for aid with the admission application and submit the CSS Profile by the same deadline.',
      note: 'Mount Holyoke promises to meet the demonstrated need of each admitted student. International packages typically combine a need-based grant, a fixed-interest student loan and campus employment, and the family contribution set in the first year stays the same until graduation.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['CSS Profile'],
      deadlines: 'Same as the admission deadline for your round',
      note: 'International packages usually include a loan, so they are not loan-free.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International admission FAQ', url: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-process/international-admission/international-admission-faq' },
    { label: 'Financial aid', url: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/affording-mount-holyoke/financial-aid' },
    { label: 'Tuition and fees', url: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/affording-mount-holyoke/tuition-and-fees' },
    { label: 'Application deadlines for undergraduates', url: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-deadlines-undergraduates' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'bryn-mawr-college',
  name: 'Bryn Mawr College',
  country: 'us',
  city: 'Bryn Mawr',
  region: 'Pennsylvania',
  founded: 1885,
  type: 'Private liberal arts college for women',
  brand: { c1: '#4B2682', c2: '#2e1650', initials: 'BMC' },
  description: 'A women’s liberal arts college outside Philadelphia, linked with Haverford, Swarthmore and the University of Pennsylvania. Bryn Mawr says openly that it is need-aware, because its aid budget is limited, but it meets the full calculated need of every student it admits. International students are not eligible for its merit aid.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Students can take courses at Haverford, Swarthmore and the University of Pennsylvania.',
  links: {
    website: 'https://www.brynmawr.edu/',
    admissions: 'https://www.brynmawr.edu/admissions-aid/apply/first-year-students',
    internationalAdmissions: 'https://www.brynmawr.edu/admissions-aid/apply/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.brynmawr.edu/admissions-aid/financial-aid',
    financialAid: 'https://www.brynmawr.edu/admissions-aid/financial-aid/international-first-year-applicants',
    programs: 'https://www.brynmawr.edu/academics',
    cost: 'https://www.brynmawr.edu/admissions-aid/financial-aid/tuition-fees-costs'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; financial aid application due at the same time' },
      { name: 'Early Decision II', date: '1 January', note: 'Binding; financial aid application due at the same time' },
      { name: 'Regular Decision', date: '15 January', note: 'Financial aid application due at the same time' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application with the Bryn Mawr Writing Supplement', 'Official transcripts and national exam results (IB, A-Level, etc.)', 'Counsellor recommendation and two teacher recommendations', 'Evidence of English proficiency', 'Mid-year grade report', 'Declaration of Finances form', 'CSS Profile for aid applicants'],
    recommendations: 'A school counsellor and two teachers',
    essay: 'Common Application essay plus the Bryn Mawr Writing Supplement',
    interview: null,
    notes: [
      'Every non-US citizen or permanent resident submits the Declaration of Finances.',
      'Aid must be requested with the admission application; it cannot be requested in later years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Evidence of English proficiency is required; no minimum score is published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Bryn Mawr’s international students page for accepted tests.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'National exams such as the IB and A-Levels are submitted with the transcript.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$97,547 total cost (estimated)',
    items: [
      { label: 'Tuition', amount: 71290 },
      { label: 'Food and housing', amount: 21440 },
      { label: 'College fee', amount: 1120 },
      { label: 'Student Government Association dues', amount: 441 },
      { label: 'Books and supplies', amount: 1000 },
      { label: 'Miscellaneous expenses', amount: 1000 }
    ],
    billedSubtotal: 94291,
    totalText: '$97,547 estimated cost of attendance, before travel',
    note: 'Bryn Mawr’s Beacon Initiative — free tuition below $175,000 of income — is for US families.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Bryn Mawr is need-aware: the amount of aid requested can affect the admission decision, because its resources are limited.',
      howToApply: 'Submit the CSS Profile and verification documents with the admission application.',
      note: 'Bryn Mawr states that it meets the full calculated need of all admitted students. Aid for international students may combine grants, loans and campus employment, and international students are not eligible for merit aid.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'Additional verification documents', 'Declaration of Finances'],
      deadlines: 'Same as the admission deadline for your round',
      note: 'The average aid package for a need-eligible student is over $70,000.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — admissions', url: 'https://www.brynmawr.edu/admissions-aid/apply/international-students' },
    { label: 'Tuition, fees and costs 2026-2027', url: 'https://www.brynmawr.edu/admissions-aid/financial-aid/tuition-fees-costs' },
    { label: 'Apply for aid: international first-year applicants', url: 'https://www.brynmawr.edu/admissions-aid/financial-aid/international-first-year-applicants' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'barnard-college',
  name: 'Barnard College',
  country: 'us',
  city: 'New York',
  region: 'New York',
  founded: 1889,
  type: 'Private liberal arts college for women, affiliated with Columbia University',
  brand: { c1: '#0A2240', c2: '#062043', initials: 'BC' },
  description: 'A women’s liberal arts college in Manhattan that shares classes, libraries and a degree-granting relationship with Columbia University. Barnard is need-blind for US citizens but need-aware for everyone else, and funds only a small number of international first-years each year — though it meets 100% of the need of those it admits.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','education'],
  programNote: 'Barnard students take many classes at Columbia and receive a Columbia University degree, while living in Barnard’s own college community.',
  links: {
    website: 'https://barnard.edu/',
    admissions: 'https://barnard.edu/admissions/the-application-process',
    internationalAdmissions: 'https://barnard.edu/admissions/internationalstudents',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://barnard.edu/finaid',
    financialAid: 'https://barnard.edu/finaid/apply-for-aid',
    programs: 'https://catalog.barnard.edu/',
    cost: 'https://barnard.edu/finaid/cost-of-attendance'
  },
  admissions: {
    platforms: ['Common Application', 'QuestBridge Application'],
    deadlines: [
      { name: 'Early Decision', date: '1 November', note: 'Date used in the previous cycle; confirm for your entry year' },
      { name: 'Regular Decision', date: '1 January', note: 'Date used in the previous cycle; confirm for your entry year' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and national exam results', 'Teacher recommendations', 'English proficiency evidence', 'Financial aid documents through the Barnard applicant portal'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Barnard’s supplement',
    interview: 'InitialView and Vericant interviews are accepted from international students',
    notes: [
      'International students must apply for aid at the time of admission to be eligible in later years.',
      'Barnard does not use the College Board’s IDOC service: documents go through its own applicant portal.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Barnard lists a TOEFL requirement and addresses MyBest scores; no minimum was confirmed here.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Barnard publishes an English language proficiency requirement for international applicants; check the official page for the accepted tests and scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted — check Barnard’s standardized testing requirement.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'Transcripts and national exam results are required.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$98,850 in direct costs',
    items: [
      { label: 'Tuition', amount: 73120 },
      { label: 'Fees', amount: 2472 },
      { label: 'Housing', amount: 14054 },
      { label: 'Meals', amount: 9204 },
      { label: 'Books and supplies', amount: 1200 }
    ],
    billedSubtotal: 98850,
    totalText: 'About $98,850 billed by Barnard for a resident student, plus books, travel and personal expenses',
    note: 'The average Barnard aid award is $68,562.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Barnard awards a small number of need-based scholarships to international students in each first-year class, and is need-aware for them.',
      howToApply: 'Apply for aid with the admission application and submit the documents through the Barnard applicant portal.',
      note: 'Barnard states it will meet 100% of the financial need of admitted students, with a combination of grant, loan and job opportunities.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'Documents requested through the Barnard applicant portal'],
      deadlines: 'With the admission application',
      note: 'Barnard is need-blind for US citizens and permanent residents and need-aware for everyone else.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://barnard.edu/admissions/internationalstudents' },
    { label: 'Cost of attendance 2026-2027', url: 'https://barnard.edu/finaid/cost-of-attendance' },
    { label: 'Apply for aid', url: 'https://barnard.edu/finaid/apply-for-aid' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'bates-college',
  name: 'Bates College',
  country: 'us',
  city: 'Lewiston',
  region: 'Maine',
  founded: 1855,
  type: 'Private liberal arts college',
  brand: { c1: '#881124', c2: '#5a0b18', initials: 'BC' },
  description: 'A liberal arts college in Maine that has made testing optional since 1984 and charges no application fee. Bates is need-aware for international students but meets 100% of demonstrated need for those admitted — with grants and campus work, and no loans for non-US citizens.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','engineering'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts','engineering'],
  programNote: 'Bates teaches the liberal arts and sciences and has added an engineering major; almost every student writes a senior thesis.',
  links: {
    website: 'https://www.bates.edu/',
    admissions: 'https://www.bates.edu/admission/apply/application-options/',
    internationalAdmissions: 'https://www.bates.edu/admission/apply/international-students/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.bates.edu/financial-services/financial-aid/international-undergraduates/',
    financialAid: 'https://www.bates.edu/financial-services/financial-aid/international-undergraduates/',
    programs: 'https://www.bates.edu/academics/',
    cost: 'https://www.bates.edu/financial-services/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; notification by 20 December' },
      { name: 'Early Decision II', date: '10 January', note: 'Binding; notification by 15 February' },
      { name: 'Regular Decision', date: '10 January', note: 'Notification by 1 April; reply by 1 May' }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'It is free for any student to apply to Bates' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Official English proficiency score where required', 'Bates International Student Application for Financial Aid (BISAFA) for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: 'InitialView or Vericant interviews are encouraged but not required',
    notes: ['Bates does not accept appeals from international students who try to apply for aid after being admitted, without exception.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Accepted; no minimum score is published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum score is published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum score is published on the pages consulted.' },
    waiver: 'Not required if English is your native language or your secondary schooling was mainly in English.',
    note: 'Bates requires official English scores — it does not accept self-reported ones.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Submitting the SAT or ACT has been optional at Bates since 1984; official and self-reported scores are accepted.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$94,560 comprehensive fee',
    items: [
      { label: 'Comprehensive fee: tuition, room, board and fees', amount: 94560 }
    ],
    billedSubtotal: 94560,
    totalText: '$94,560 single comprehensive fee, before books, travel and personal expenses',
    note: 'Bates charges one fee covering tuition, room, board and fees.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Bates is need-aware for international students, so financial need can occasionally affect the admission decision.',
      howToApply: 'Submit the BISAFA through the Bates application portal as part of the admission application.',
      note: 'Bates states it meets 100% of demonstrated need for admitted students who qualify, regardless of citizenship. For non-US citizens aid comes as a grant plus on-campus work of up to 20 hours a week, and never includes loans; it runs for up to eight semesters.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Bates International Student Application for Financial Aid (BISAFA)'],
      deadlines: 'With the admission application, before the decision is released',
      note: 'The BISAFA sets financial need for all four years at Bates.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — financial aid', url: 'https://www.bates.edu/financial-services/financial-aid/international-undergraduates/' },
    { label: 'International applicants', url: 'https://www.bates.edu/admission/apply/international-students/' },
    { label: 'Application rounds and timeline', url: 'https://www.bates.edu/admission/apply/application-options/' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'wesleyan-university',
  name: 'Wesleyan University',
  country: 'us',
  city: 'Middletown',
  region: 'Connecticut',
  founded: 1831,
  type: 'Private liberal arts university',
  brand: { c1: '#C8102E', c2: '#8a0b20', initials: 'WU' },
  description: 'A liberal arts university in Connecticut known for film, music and an open curriculum. Wesleyan meets 100% of every admitted student’s demonstrated need, but says admission for international students seeking aid is extremely competitive; its Freeman Asian Scholarship covers the full cost for about eleven students a year.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Wesleyan has no core curriculum and is especially known for film studies, music and interdisciplinary programmes.',
  links: {
    website: 'https://www.wesleyan.edu/',
    admissions: 'https://www.wesleyan.edu/admission/',
    internationalAdmissions: 'https://www.wesleyan.edu/admission/undergraduate-admission/international/index.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.wesleyan.edu/admission/undergraduate-admission/international/index.html',
    financialAid: 'https://www.wesleyan.edu/admission/affordability-and-aid/applying-for-aid.html',
    programs: 'https://www.wesleyan.edu/academics/',
    cost: 'https://www.wesleyan.edu/admission/affordability-and-aid/cost-of-attendance.html'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; financial aid application due the same day' },
      { name: 'Early Decision II', date: '1 January', note: 'Binding; financial aid application due the same day' },
      { name: 'Regular Decision', date: '1 January', note: 'Financial aid application due 15 January' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common or Coalition Application', 'School Report with actual or predicted exam results (A-Level, IB, French Baccalaureate and others)', 'Certified English translations of any documents not in English', 'International Student Certification of Finances', 'CSS Profile or ISFAA for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: 'Wesleyan does not interview, but accepts InitialView or Vericant interviews',
    notes: ['International students must apply for aid, and be eligible, at the time they apply for admission to receive aid in any later year.']
  },
  english: {
    ielts: { min: null, recommended: 7.5, note: 'IELTS Academic 7.5 is the minimum expected score if you choose to submit it.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'TOEFL iBT 100/120 or 5/6 is the minimum expected score.' },
    duolingo: { min: null, recommended: 130, note: 'Duolingo English Test 130 is the minimum expected score.' },
    waiver: 'English testing is optional, though strongly recommended for applicants whose first language is not English; Wesleyan may ask for scores if needed.',
    note: 'Also accepted: SAT Evidence-Based Reading and Writing 700, ACT Reading and English 29, Cambridge C1 Advanced or C2 Proficiency 190. Self-reported scores are accepted; official scores are due by 1 July after enrolment.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Wesleyan is test-optional, but encourages SAT or ACT results from students at international schools that are not exam-based.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: 'Students in exam-based curricula (A-Level, IB, French Baccalaureate, ISC, WASSCE and others) must provide actual or predicted results.',
    internationalQualifications: 'Exam results are sent by the school with the School Report and updated as soon as final results are available.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$98,030 in tuition and required fees',
    items: [
      { label: 'Tuition', amount: 75916 },
      { label: 'Residential comprehensive fee (housing and meals)', amount: 21660 },
      { label: 'Student activity fee', amount: 404 },
      { label: 'Green Fund fee', amount: 50 },
      { label: 'New student matriculation fee', amount: 300 }
    ],
    billedSubtotal: 98330,
    totalText: 'About $98,330 billed for a first-year student; Wesleyan’s full cost of attendance, with books and personal expenses, is $100,780 for continuing students',
    note: 'All Wesleyan undergraduates must live in university housing and take a meal plan.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Wesleyan says admission for international students seeking aid is "extremely competitive".',
      howToApply: 'Submit the CSS Profile (or ISFAA if the Profile is unavailable to you) by the deadline for your round.',
      note: 'Wesleyan states it meets 100% of every admitted student’s demonstrated need, and that candidates from all countries are considered for need-based aid.'
    },
    merit: [
      {
        name: 'Freeman Asian Scholars',
        amount: 'Full cost of attendance for four years',
        internationalEligible: true,
        criteria: 'Awarded to about eleven students a year from eligible Asian countries.',
        note: 'Wesleyan also runs an African Scholars programme; see its international applicant page.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['CSS Profile', 'CSS Noncustodial Parent Profile where applicable', 'ISFAA if the CSS Profile is unavailable'],
      deadlines: '15 November (ED I), 1 January (ED II), 15 January (Regular Decision)',
      note: 'The pages consulted do not say in so many words whether admission is need-aware for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants', url: 'https://www.wesleyan.edu/admission/undergraduate-admission/international/index.html' },
    { label: 'Applying for aid', url: 'https://www.wesleyan.edu/admission/affordability-and-aid/applying-for-aid.html' },
    { label: 'Cost of attendance', url: 'https://www.wesleyan.edu/admission/affordability-and-aid/cost-of-attendance.html' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'washington-and-lee-university',
  name: 'Washington and Lee University',
  country: 'us',
  city: 'Lexington',
  region: 'Virginia',
  founded: 1749,
  type: 'Private liberal arts university',
  brand: { c1: '#0C2340', c2: '#1a3a66', initials: 'W&L' },
  description: 'A small liberal arts university in the Virginia mountains, with a strong school of commerce and a student-run honour system. W&L says it is need-blind and meets 100% of demonstrated need without loans for every admitted student, and its Johnson Scholarship — open to international applicants — covers at least tuition, housing and food.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Undergraduates study in the College or the Williams School of Commerce, Economics, and Politics; the academic year includes a four-week spring term.',
  links: {
    website: 'https://www.wlu.edu/',
    admissions: 'https://www.wlu.edu/admissions/apply',
    internationalAdmissions: 'https://www.wlu.edu/admissions/financial-aid/types-of-aid/international-student-aid',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.wlu.edu/admissions/the-johnson-scholarship',
    financialAid: 'https://www.wlu.edu/admissions/financial-aid/types-of-aid/international-student-aid',
    programs: 'https://catalog.wlu.edu/',
    cost: 'https://my.wlu.edu/business-office/parents-and-students/tuition-information/tuition-and-fees'
  },
  admissions: {
    platforms: ['Common Application', 'Coalition Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding; financial aid due 1 December 2026' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding; financial aid due 15 January 2027' },
      { name: 'Regular Decision', date: '5 January', note: 'Financial aid due 1 February 2027' },
      { name: 'Johnson Scholarship application', entryTerm: 'Autumn 2027', dateISO: '2026-12-01', date: '1 December 2026', note: 'Required to be considered for any W&L scholarship; supporting materials by 15 December 2026' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Some applicants qualify to have the Common or Coalition Application fee waived' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for need-based aid', 'Johnson Scholarship application for merit consideration'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay; the Johnson Scholarship has its own essays',
    interview: null,
    notes: [
      'From the 2026–27 cycle Early Decision II and Regular Decision are due on 5 January instead of 1 January.',
      'International students who accept admission without a grant are not eligible for one in later years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check W&L’s application page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$99,880 standard cost of attendance',
    items: [
      { label: 'Tuition', amount: 73575 },
      { label: 'Activity, technology and health services fees', amount: 1285 },
      { label: 'Housing', amount: 10580 },
      { label: 'Food', amount: 9995 },
      { label: 'Books and supplies', amount: 1900 },
      { label: 'Personal and miscellaneous', amount: 2545 }
    ],
    billedSubtotal: 95435,
    totalText: '$99,880 standard cost of attendance, not including health insurance or travel',
    note: 'Fraternity and sorority charges are extra for students who join.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'merit',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'The Johnson Scholarship goes to up to 44 first-year students; finalists are invited to a selection event in March.',
      howToApply: 'Submit the Johnson Scholarship application by 1 December; all of W&L’s merit aid is awarded through it.',
      note: 'The Johnson Scholarship covers at least tuition, housing and food, plus $10,000 of summer funding, worth about $95,000 a year. Separately, W&L says it is need-blind and meets 100% of demonstrated need without loans for every admitted student, with international grants ranging from several thousand dollars to the full cost of attendance.'
    },
    merit: [
      {
        name: 'The Johnson Scholarship',
        amount: 'At least tuition, housing and food, plus $10,000 for summer research, travel or internships',
        internationalEligible: true,
        criteria: 'Up to 44 first-year students a year; application by 1 December.',
        note: 'W&L awards all of its merit-based aid through this programme.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: true,
      forms: ['CSS Profile'],
      deadlines: '1 December 2026 (ED I), 15 January 2027 (ED II), 1 February 2027 (Regular Decision)',
      note: 'W&L’s international aid page states that admission is need-blind and that 100% of need is met without loans, but also that admission does not guarantee financial assistance. International grants are set for four years from the first-year application.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International student aid', url: 'https://www.wlu.edu/admissions/financial-aid/types-of-aid/international-student-aid' },
    { label: 'The Johnson Scholarship', url: 'https://www.wlu.edu/admissions/the-johnson-scholarship' },
    { label: 'Tuition and fees 2026-2027', url: 'https://my.wlu.edu/business-office/parents-and-students/tuition-information/tuition-and-fees' },
    { label: 'Apply to W&L', url: 'https://www.wlu.edu/admissions/apply' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'colgate-university',
  name: 'Colgate University',
  country: 'us',
  city: 'Hamilton',
  region: 'New York',
  founded: 1819,
  type: 'Private liberal arts university',
  brand: { c1: '#821019', c2: '#5a0b11', initials: 'CU' },
  description: 'A liberal arts university in rural upstate New York with students from over 80 countries. International students apply for free, and Colgate meets 100% of every admitted student’s demonstrated need — but admission considers financial need for all applicants, though the most competitive are admitted regardless.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Colgate teaches the liberal arts through a shared core curriculum and a broad range of majors; there is no undergraduate business or engineering degree.',
  links: {
    website: 'https://www.colgate.edu/',
    admissions: 'https://www.colgate.edu/admission-aid/apply',
    internationalAdmissions: 'https://www.colgate.edu/admission-aid/apply/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.colgate.edu/admission-aid/financial-aid',
    financialAid: 'https://www.colgate.edu/admission-aid/apply/international-applicants',
    programs: 'https://www.colgate.edu/academics',
    cost: 'https://www.colgate.edu/admission-aid/tuition-fees'
  },
  admissions: {
    platforms: ['Common Application', 'QuestBridge Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding; financial aid due the same day; notification in mid-December' },
      { name: 'Early Decision II', date: '15 January', note: 'Binding; financial aid due the same day; notification in mid-February' },
      { name: 'Regular Decision', date: '15 January', note: 'Financial aid due the same day; notification in late March' }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiver: 'Applications are fee-free for international students' },
    documents: ['Common Application', 'School transcript and grades', 'National or international exam results', 'Language proficiency evidence', 'CSS Profile for aid applicants (digital only)'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Colgate’s supplement',
    interview: null,
    notes: [
      'Colgate cannot accept paper or PDF copies of the CSS Profile.',
      'International students who do not apply or qualify for aid on admission are not eligible in later years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Colgate lists language proficiency as part of the international application; check its first-year checklist for accepted tests.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: 'National and international exam results are part of the application.',
    internationalQualifications: 'Colgate defines international applicants as non-US citizens, whatever their residence.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: 'Not confirmed — see Colgate’s cost page',
    items: [
      { label: 'Tuition, housing, food and fees', text: 'Published on Colgate’s 2026–27 cost of attendance page, which could not be read here' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — check the official cost page',
    note: 'Colgate says it has generally not included loans in international students’ aid packages.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Colgate considers financial need for all applicants, but says its most competitive applicants are admitted regardless of whether they applied for aid.',
      howToApply: 'Submit the CSS Profile digitally by 1 November (ED I) or 22 January (ED II and Regular Decision).',
      note: 'Colgate states it meets 100% of demonstrated financial need for every admitted student, including those who need a full financial package.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile (digital only)'],
      deadlines: '1 November (ED I) or 22 January (ED II and Regular Decision)',
      note: 'CSS Profile fee waivers can be requested through the applicant portal.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants — deadlines and financial aid', url: 'https://www.colgate.edu/admission-aid/apply/international-applicants' },
    { label: 'Apply for aid', url: 'https://www.colgate.edu/admission-aid/financial-aid/apply-aid' }
  ],
  lastVerified: '2026-09-21'
},

{
  id: 'carleton-college',
  name: 'Carleton College',
  country: 'us',
  city: 'Northfield',
  region: 'Minnesota',
  founded: 1866,
  type: 'Private liberal arts college',
  brand: { c1: '#0C2340', c2: '#FFD100', initials: 'CC' },
  description: 'A liberal arts college in Minnesota whose faculty teach only undergraduates. Carleton meets 100% of demonstrated need for every student, but it has limited funding for international students and offers them only a few need-based scholarships.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Carleton runs on three ten-week terms a year and is especially strong in the sciences and mathematics for a liberal arts college.',
  links: {
    website: 'https://www.carleton.edu/',
    admissions: 'https://www.carleton.edu/admissions/apply/',
    internationalAdmissions: 'https://www.carleton.edu/admissions/apply/steps/international/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.carleton.edu/financial-aid/apply-for-aid/international-students/',
    financialAid: 'https://www.carleton.edu/financial-aid/apply-for-aid/international-students/',
    programs: 'https://www.carleton.edu/academics/',
    cost: 'https://www.carleton.edu/admissions/apply/afford/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports, with English translations', 'Teacher recommendations', 'Certification of Finances (all international applicants)', 'ISAFA or CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Carleton’s supplement',
    interview: 'Optional; InitialView or Vericant interviews are welcome',
    notes: [
      'Applicants may not translate their own documents.',
      'Carleton will not consider a new or revised aid application once admission has been offered.',
      'Application deadlines were not confirmed on the pages consulted.'
    ]
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'Students with IELTS 7.0 and above are best prepared, Carleton says.' },
    toefl: { min: null, recommended: 5.5, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5.5 }], note: 'TOEFL iBT 5.5 and above, or 100 and above on tests before 2026.' },
    duolingo: { min: null, recommended: 130, note: 'Duolingo English Test 130 and above.' },
    waiver: 'Not needed if you speak English at home or have been taught in English for the last four years.',
    note: 'Carleton presents these as the ranges of its best-prepared students, not formal minimums.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'Documents not originally in English need an official translation.'
  },
  costs: {
    academicYear: '2025–2026',
    currency: 'USD',
    headline: '$99,580 total (2025–26)',
    items: [
      { label: 'Tuition, housing, food, fees, books, personal expenses, travel, health insurance and expenses over breaks', amount: 99580 }
    ],
    billedSubtotal: null,
    totalText: '$99,580 estimated for 2025–26; Carleton advises expecting a 4–5% increase each year',
    note: 'The 2026–27 figure was not published on the page consulted.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Carleton says funding for international students is limited and it offers only a few need-based scholarships to them.',
      howToApply: 'Tick the financial aid box on the application and submit the free ISAFA or the CSS Profile.',
      note: 'Carleton states it meets 100% of demonstrated need for every student, with no income caps. Aid applicants are considered automatically for Starr Foundation grants (students from Asia), Kellogg Scholarships and the Underbrink Fund for Global Initiatives.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: null,
      forms: ['International Student Application for Financial Assistance (free)', 'CSS Profile', 'Certification of Finances'],
      deadlines: 'With the admission application',
      note: 'The pages consulted do not state whether admission is need-aware for international applicants.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — applying to Carleton', url: 'https://www.carleton.edu/admissions/apply/steps/international/' },
    { label: 'International students — financial aid', url: 'https://www.carleton.edu/financial-aid/apply-for-aid/international-students/' }
  ],
  lastVerified: '2026-09-21'
}
);

/* ---- Batch added 22 September 2026: the last eight universities from
   the requested list. ---- */
window.UNIPATH.universities.push(
{
  id: 'macalester-college',
  name: 'Macalester College',
  country: 'us',
  city: 'Saint Paul',
  region: 'Minnesota',
  founded: 1874,
  type: 'Private liberal arts college',
  brand: { c1: '#01426A', c2: '#D44420', initials: 'MAC' },
  description: 'A liberal arts college in Saint Paul known for its international outlook and a long tradition of students from abroad. Macalester meets 100% of every admitted student’s demonstrated need and runs a merit scholarship programme too, but because its budget is finite, the amount of aid an international applicant needs is a factor in admission.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Macalester sits in a city, unusually for a liberal arts college, and is known for international studies, economics and political science.',
  links: {
    website: 'https://www.macalester.edu/',
    admissions: 'https://www.macalester.edu/admissions/apply/',
    internationalAdmissions: 'https://www.macalester.edu/admissions/international/first-year/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.macalester.edu/admissions/financial-aid/',
    financialAid: 'https://www.macalester.edu/financial-aid/apply/international/',
    programs: 'https://www.macalester.edu/academics/',
    cost: 'https://www.macalester.edu/admissions/financial-aid/'
  },
  admissions: {
    platforms: ['Common Application', 'QuestBridge Application'],
    deadlines: [
      { name: 'Early Decision I', entryTerm: 'Autumn 2027', dateISO: '2026-11-01', date: '1 November 2026', note: 'Binding; priority financial aid 9 November; decision 6 December' },
      { name: 'Early Action', entryTerm: 'Autumn 2027', dateISO: '2026-11-01', date: '1 November 2026', note: 'Non-binding; priority financial aid 9 November; decision 19 December' },
      { name: 'Early Decision II', entryTerm: 'Autumn 2027', dateISO: '2027-01-01', date: '1 January 2027', note: 'Binding; priority financial aid 8 January; decision 31 January' },
      { name: 'Regular Decision', entryTerm: 'Autumn 2027', dateISO: '2027-01-15', date: '15 January 2027', note: 'Priority financial aid 22 January; decision 14 March' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'Proof of funding', 'High school transcript', 'Two recommendation letters', 'Senior year grades'],
    recommendations: 'Two recommendation letters',
    essay: 'Personal essay',
    interview: 'Optional',
    notes: ['SAT/ACT, English proficiency results, interviews and an art portfolio are listed as optional items for international applicants.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Listed as optional; no minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Listed as optional; no minimum published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Listed as optional; no minimum published on the pages consulted.' },
    waiver: null,
    note: 'Macalester lists proof of English proficiency among the optional items for international first-year applicants.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'The ACT or SAT is listed as an optional item for international first-year applicants.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: 'Not confirmed — see Macalester’s tuition page',
    items: [
      { label: 'Tuition, housing, food and fees', text: 'Published on Macalester’s tuition page; the 2026–27 figures were not confirmed here' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — check the official tuition page',
    note: 'International students must show family resources that meet the I-20 cost of attendance, which combines billed charges and estimated personal costs.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Macalester says its aid budget is not unlimited, so the amount of aid an applicant requires is a factor in admission.',
      howToApply: 'Complete the financial aid forms by the priority date for your round.',
      note: 'Macalester states it is committed to meeting the full demonstrated need of every student it admits, and gives international students a four-year aid package at the time of admission.'
    },
    merit: [
      {
        name: 'Macalester merit scholarships',
        amount: 'Not published on the pages consulted',
        internationalEligible: null,
        criteria: 'Macalester describes a "robust merit-based scholarship program" alongside need-based aid.',
        note: 'Whether each award is open to international students was not confirmed.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Macalester financial aid forms for international applicants'],
      deadlines: '9 November 2026 (ED I and EA), 8 January 2027 (ED II), 22 January 2027 (Regular Decision)',
      note: '59% of Macalester students receive need-based grants from the college.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Dates and deadlines', url: 'https://www.macalester.edu/admissions/deadlines/' },
    { label: 'International students — financial aid', url: 'https://www.macalester.edu/financial-aid/apply/international/' },
    { label: 'International first-year FAQs', url: 'https://www.macalester.edu/admissions/international/faq/' },
    { label: 'Financial aid and tuition', url: 'https://www.macalester.edu/admissions/financial-aid/' }
  ],
  lastVerified: '2026-09-22'
},

{
  id: 'oberlin-college',
  name: 'Oberlin College and Conservatory',
  shortName: 'Oberlin',
  country: 'us',
  city: 'Oberlin',
  region: 'Ohio',
  founded: 1833,
  type: 'Private liberal arts college and music conservatory',
  brand: { c1: '#A6192E', c2: '#FFC72C', initials: 'OC' },
  description: 'A liberal arts college with a renowned music conservatory in northern Ohio. Oberlin is openly need-aware and says applicants who can contribute at least $35,000 a year are the most competitive; only about 8% of international applicants are admitted, but those who apply for aid have their full calculated need met.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Oberlin combines the College of Arts and Sciences with the Conservatory of Music; some students take a double degree across both.',
  links: {
    website: 'https://www.oberlin.edu/',
    admissions: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants',
    internationalAdmissions: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.oberlin.edu/financial-aid/basics/scholarships-offered',
    financialAid: 'https://www.oberlin.edu/admissions-and-aid/financial-aid/applying-aid-international-students',
    programs: 'https://www.oberlin.edu/arts-and-sciences',
    cost: 'https://www.oberlin.edu/admissions-and-aid/tuition-and-fees'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I and Early Action', date: '1 November', note: 'Financial aid due the same day' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding; financial aid due the same day' },
      { name: 'Regular Decision', date: '15 January', note: 'Financial aid due the same day' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile (code 1587) or ISAFA with parental income documents for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['Students who do not apply for aid at the time of admission are not eligible for it in later years.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Oberlin’s international applicants page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2025–2026',
    currency: 'USD',
    headline: '$90,000 expected support (2025–26)',
    items: [
      { label: 'Expected yearly support for a student not applying for aid', amount: 90000 }
    ],
    billedSubtotal: null,
    totalText: 'About $90,000 for 2025–26; Oberlin expects costs to rise 3–5% a year',
    note: 'This is the amount of support Oberlin expects international students not applying for aid to show.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Very competitive: about 8% of international applicants are admitted, and those able to contribute at least $35,000 a year are the most competitive.',
      howToApply: 'Submit the CSS Profile or ISAFA with parental income documents by your round’s deadline.',
      note: 'Oberlin states it provides grants, scholarships, loans and on-campus employment to meet 100% of calculated need for all international students who apply for aid, and that it is need-aware.'
    },
    merit: [
      {
        name: 'Oberlin merit scholarships',
        amount: 'Not published on the pages consulted',
        internationalEligible: true,
        criteria: 'Oberlin says eligible international students may be considered for its merit scholarships.',
        note: 'Details are on Oberlin’s scholarships page.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile (code 1587)', 'ISAFA', 'Parental income documents'],
      deadlines: '1 November (ED I and EA), 5 January (ED II), 15 January (Regular Decision)',
      note: 'Oberlin’s international aid budget is limited, and packages can include loans.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Applying for aid: international students', url: 'https://www.oberlin.edu/admissions-and-aid/financial-aid/applying-aid-international-students' },
    { label: 'International applicants', url: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/international-applicants' },
    { label: 'Tuition and fees', url: 'https://www.oberlin.edu/admissions-and-aid/tuition-and-fees' }
  ],
  lastVerified: '2026-09-22'
},

{
  id: 'kenyon-college',
  name: 'Kenyon College',
  country: 'us',
  city: 'Gambier',
  region: 'Ohio',
  founded: 1824,
  type: 'Private liberal arts college',
  brand: { c1: '#4B2E83', c2: '#2d1b4f', initials: 'KC' },
  description: 'A liberal arts college on a hilltop in rural Ohio, famous for creative writing and the Kenyon Review. Kenyon commits to meeting 100% of demonstrated need for four years, but says it must remain need-aware, so a student’s ability to pay is part of the decision.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Kenyon is especially known for English and creative writing, and is home to the literary magazine the Kenyon Review.',
  links: {
    website: 'https://www.kenyon.edu/',
    admissions: 'https://www.kenyon.edu/admissions-aid/how-to-apply/',
    internationalAdmissions: 'https://www.kenyon.edu/admissions-aid/how-to-apply/international-students/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.kenyon.edu/admissions-aid/financial-aid-scholarships/',
    financialAid: 'https://www.kenyon.edu/admissions-aid/financial-aid-scholarships/apply-for-financial-aid/',
    programs: 'https://www.kenyon.edu/academics/',
    cost: 'https://www.kenyon.edu/admissions-aid/financial-aid-scholarships/tuition-costs/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; decisions mid-December' },
      { name: 'Early Decision II', date: '15 January', note: 'Binding; decisions mid-February' },
      { name: 'Regular Decision', date: '15 January', note: 'Decisions late March' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'English proficiency score', 'CSS Profile (code 1370) or Kenyon’s international financial aid application'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['International students living in the US or Canada must use the CSS Profile rather than Kenyon’s international aid form.']
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'IELTS Academic or IELTS Indicator 7.0 is encouraged.' },
    toefl: { min: null, recommended: 100, note: 'TOEFL iBT (including Special Home Edition) 100 is encouraged.' },
    duolingo: { min: null, recommended: 130, note: 'Duolingo English Test 130 is encouraged.' },
    waiver: null,
    note: 'Kenyon presents these as encouraged minimums.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Kenyon is test-optional for all applicants.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$93,090 in tuition, room, board and fees',
    items: [
      { label: 'Tuition', amount: 71870 },
      { label: 'Housing (double room)', amount: 7600 },
      { label: 'Meals', amount: 9780 },
      { label: 'Student activities fee', amount: 350 },
      { label: 'Books and personal costs', amount: 1900 },
      { label: 'Transportation and miscellaneous', amount: 1950 }
    ],
    billedSubtotal: 93090,
    totalText: '$93,090 in total charges, plus about $3,850 in books, personal and travel costs',
    note: 'Kenyon’s financial aid budget for 2026–27 is about $68.6 million.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Kenyon says it must remain need-aware, factoring in a student’s ability to pay when deciding whether to admit.',
      howToApply: 'Submit the CSS Profile or Kenyon’s international aid application by the priority deadline.',
      note: 'Kenyon commits to meeting 100% of demonstrated need for qualifying students for all four years.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile (code 1370)', 'Kenyon International Financial Aid Application'],
      deadlines: 'By the priority deadlines; applications up to ten days late are treated as on time',
      note: 'Late applications may be wait-listed for aid and considered only if money remains after 15 May.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Deadlines and requirements — international students', url: 'https://www.kenyon.edu/admissions-aid/how-to-apply/international-students/' },
    { label: 'Apply for financial aid', url: 'https://www.kenyon.edu/admissions-aid/financial-aid-scholarships/apply-for-financial-aid/' },
    { label: 'Tuition and costs', url: 'https://www.kenyon.edu/admissions-aid/financial-aid-scholarships/tuition-costs/' },
    { label: 'Spring 2026 report from the Board of Trustees', url: 'https://www.kenyon.edu/news/archive/spring-2026-report-from-the-board-of-trustees/' }
  ],
  lastVerified: '2026-09-22'
},

{
  id: 'denison-university',
  name: 'Denison University',
  country: 'us',
  city: 'Granville',
  region: 'Ohio',
  founded: 1831,
  type: 'Private liberal arts college',
  brand: { c1: '#C8102E', c2: '#8a0b20', initials: 'DU' },
  description: 'A liberal arts college in central Ohio with a strong emphasis on career preparation. Denison gives international students the same need-based aid and merit scholarships as Americans — merit awards run from $5,000 a year to full tuition — and meets 100% of need, while being need-aware in admission.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'Denison teaches the liberal arts and sciences and puts particular weight on preparing students for careers after college.',
  links: {
    website: 'https://denison.edu/',
    admissions: 'https://denison.edu/campus/admission/international-applicants',
    internationalAdmissions: 'https://denison.edu/campus/admission/international-applicants',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://denison.edu/campus/finances/types-of-scholarships-aid',
    financialAid: 'https://denison.edu/campus/admission/international-applicant-financial-aid',
    programs: 'https://denison.edu/academics',
    cost: 'https://denison.edu/campus/admission/tuition-aid'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; financial aid due the same day' },
      { name: 'Early Decision II', date: '15 January', note: 'Binding; financial aid due the same day' },
      { name: 'Regular Decision', date: '15 January', note: 'Financial aid due the same day' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Denison Certification of Finances (free; Denison does not use the CSS Profile for international applicants)'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['International students can apply for need-based aid only during the admission process; those who enrol without it cannot apply later.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Denison’s international applicants page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2025–2026',
    currency: 'USD',
    headline: '$92,900 total (2025–26)',
    items: [
      { label: 'Cost of attendance', amount: 92900 },
      { label: 'Allowance for personal expenses and books (included)', amount: 4500 }
    ],
    billedSubtotal: null,
    totalText: '$92,900 for 2025–26, the latest figure found',
    note: 'Denison’s tuition, housing and food charges exclude books, transport and health insurance.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Denison is need-aware, which it says lets it meet 100% of demonstrated need for everyone it admits.',
      howToApply: 'Submit the free Denison Certification of Finances by your round’s deadline.',
      note: 'Denison states it offers international students the same need-based aid and merit scholarships as US students and meets 100% of demonstrated need for all students.'
    },
    merit: [
      {
        name: 'Denison merit scholarships',
        amount: 'From $5,000 a year up to full tuition',
        internationalEligible: true,
        criteria: 'Automatic consideration with a complete admission application by the round’s deadline.',
        note: 'Merit and need-based aid can be combined.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['Denison Certification of Finances'],
      deadlines: '15 November (ED I) or 15 January (ED II and Regular Decision)',
      note: 'Denison states: "Denison is need-aware in the application process as this allows us to meet 100% of demonstrated need for all admitted students."'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicant financial aid', url: 'https://denison.edu/campus/admission/international-applicant-financial-aid' },
    { label: 'Types of scholarships and aid', url: 'https://denison.edu/campus/finances/types-of-scholarships-aid' },
    { label: 'Affordability and cost', url: 'https://denison.edu/campus/admission/tuition-aid' }
  ],
  lastVerified: '2026-09-22'
},

{
  id: 'franklin-and-marshall-college',
  name: 'Franklin & Marshall College',
  country: 'us',
  city: 'Lancaster',
  region: 'Pennsylvania',
  founded: 1787,
  type: 'Private liberal arts college',
  brand: { c1: '#003C71', c2: '#002447', initials: 'F&M' },
  description: 'A liberal arts college in Lancaster, Pennsylvania, known for its residential "college house" system. F&M meets 100% of institutionally determined need for four years for every student it admits, but says the admission process is more competitive for those needing a high level of aid.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','economics','business','computer-science','mathematics','biology','psychology','arts'],
  programNote: 'F&M offers business, organisations and society alongside the liberal arts and sciences.',
  links: {
    website: 'https://www.fandm.edu/',
    admissions: 'https://www.fandm.edu/apply/international-first-year-application-checklist.html',
    internationalAdmissions: 'https://www.fandm.edu/apply/international-student-admission/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www.fandm.edu/financial-aid/',
    financialAid: 'https://www.fandm.edu/financial-aid/apply.html',
    programs: 'https://www.fandm.edu/academics',
    cost: 'https://www.fandm.edu/financial-aid/cost-of-attendance.html'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding; notified within 30 days' },
      { name: 'Early Decision II', date: '15 January', note: 'Binding; notified within 30 days' },
      { name: 'Regular Decision', date: '15 January', note: 'Notified by 1 April' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'English proficiency score where required', 'CSS Profile or F&M’s International Aid Form for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['Students admitted without aid in their first year are not eligible for it in later years.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum published on the pages consulted.' },
    waiver: 'Not required if English is your native language, if you have studied for at least three years at a school teaching all courses in English, or with qualifying IB English results.',
    note: 'F&M accepts the TOEFL, IELTS, Duolingo English Test and PTE Academic.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'F&M has been test-optional for more than 30 years and applies a "no harm" approach to submitted scores.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: 'A-Level passes at grade C or higher may earn credit.',
    internationalQualifications: 'Foreign course credits are evaluated case by case.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$97,041 total cost',
    items: [
      { label: 'Tuition', amount: 74770 },
      { label: 'Health services and student activity fees', amount: 346 },
      { label: 'Housing (weighted average)', amount: 12080 },
      { label: 'Meal plan (All-Access)', amount: 7240 },
      { label: 'Books and supplies', amount: 800 },
      { label: 'Personal expenses', amount: 1350 },
      { label: 'Transportation', amount: 400 }
    ],
    billedSubtotal: 94436,
    totalText: '$97,041 total cost of attendance, of which $94,436 is billed',
    note: 'The transportation allowance assumes travel within the US; international travel costs more.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'F&M says that if you require a high level of aid, the admission process becomes more competitive.',
      howToApply: 'Submit the CSS Profile or F&M’s International Aid Form with your application.',
      note: 'F&M states that if you are admitted it will meet 100% of your institutionally determined financial need for all four years, adjusting aid if its charges change.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'F&M International Aid Form'],
      deadlines: 'With the admission application',
      note: 'F&M’s wording makes clear that a high aid request affects admission.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Applying to F&M as an international student', url: 'https://www.fandm.edu/apply/international-student-admission/' },
    { label: 'Cost of attendance 2026-27', url: 'https://www.fandm.edu/financial-aid/cost-of-attendance.html' },
    { label: 'Apply for financial aid', url: 'https://www.fandm.edu/financial-aid/apply.html' }
  ],
  lastVerified: '2026-09-22'
},

{
  id: 'lafayette-college',
  name: 'Lafayette College',
  country: 'us',
  city: 'Easton',
  region: 'Pennsylvania',
  founded: 1826,
  type: 'Private liberal arts college',
  brand: { c1: '#98002E', c2: '#610020', initials: 'LC' },
  description: 'A liberal arts college in Easton, Pennsylvania, with an engineering school unusual for its size. Lafayette is need-aware but guarantees to meet 100% of admitted students’ demonstrated need, up to full tuition, room and board, books and supplies.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','economics','humanities','social-sciences','mathematics','biology','psychology','arts'],
  englishTaughtPrograms: ['engineering','computer-science','economics','humanities','social-sciences','mathematics','biology','psychology','arts'],
  programNote: 'Lafayette combines liberal arts majors with engineering degrees, which is rare for a college of its size.',
  links: {
    website: 'https://www.lafayette.edu/',
    admissions: 'https://admissions.lafayette.edu/apply/international-students/',
    internationalAdmissions: 'https://admissions.lafayette.edu/apply/international-students/',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admissions.lafayette.edu/financial-aid/',
    financialAid: 'https://admissions.lafayette.edu/apply-for-aid/first-year-international-students/',
    programs: 'https://www.lafayette.edu/academics',
    cost: 'https://admissions.lafayette.edu/financial-aid/'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '15 November', note: 'Binding' },
      { name: 'Early Decision II', date: '15 January', note: 'Binding' },
      { name: 'Regular Decision', date: '15 January', note: null }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['Families contributing less than $20,000 a year for whom the CSS Profile fee is a hardship can request an alternative International Financial Aid Form after submitting the Common Application.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Lafayette’s international students page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: 'Not confirmed — see Lafayette’s financial aid page',
    items: [
      { label: 'Tuition, room, board, books and supplies', text: 'The 2026–27 figures were not confirmed on the pages consulted' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — check the official cost page',
    note: 'Lafayette notes that meeting demonstrated need does not mean every expense, or summer and interim costs, will be covered.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'need-based',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: true },
      renewable: true,
      competitiveness: 'Lafayette is need-aware and considers a student’s financial situation when deciding on admission.',
      howToApply: 'Submit the CSS Profile with your application.',
      note: 'Lafayette states it will meet the demonstrated need of all admitted students, up to and including full tuition, room and board, books and supplies, and calls itself one of about 70 US schools that guarantee to meet 100% of admitted students’ need.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile', 'Alternative International Financial Aid Form on request'],
      deadlines: 'With the admission application',
      note: 'Demonstrated need is a calculated amount; Lafayette warns it does not cover every expense.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'First-year international students — apply for aid', url: 'https://admissions.lafayette.edu/apply-for-aid/first-year-international-students/' },
    { label: 'International student FAQ', url: 'https://admissions.lafayette.edu/apply/international-students/international-student-faq/' },
    { label: 'Applying as an international student', url: 'https://admissions.lafayette.edu/apply/international-students/' }
  ],
  lastVerified: '2026-09-22'
},

{
  id: 'lehigh-university',
  name: 'Lehigh University',
  country: 'us',
  city: 'Bethlehem',
  region: 'Pennsylvania',
  founded: 1865,
  type: 'Private research university',
  brand: { c1: '#653600', c2: '#3f2200', initials: 'LU' },
  description: 'A private research university in Bethlehem, Pennsylvania, strong in engineering and business. International aid is limited: Lehigh reads non-US applicants need-aware and aims to meet full need for as many admitted international students as its funds allow — not for all of them.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','business','computer-science','economics','humanities','social-sciences','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: ['engineering','business','computer-science','economics','humanities','social-sciences','mathematics','biology','psychology','arts','education'],
  programNote: 'Lehigh has colleges of engineering, business, arts and sciences and health, and offers integrated programmes across them.',
  links: {
    website: 'https://www.lehigh.edu/',
    admissions: 'https://www2.lehigh.edu/admissions',
    internationalAdmissions: 'https://www2.lehigh.edu/admissions/international-students',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://www2.lehigh.edu/financial-aid',
    financialAid: 'https://www2.lehigh.edu/admissions/international-students',
    programs: 'https://catalog.lehigh.edu/',
    cost: 'https://www2.lehigh.edu/financial-aid/undergraduate'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I — financial aid', date: '1 November', note: 'CSS Profile due by the Early Decision I application deadline' },
      { name: 'Early Decision II and Regular Decision — financial aid', date: '15 January', note: 'CSS Profile due by the application deadline' }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'International Undergraduate Financial Certification Form', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['International students who do not receive aid in their first year are not eligible for it later.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not published on the pages consulted.' },
    waiver: null,
    note: 'Check Lehigh’s international students page for the current English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$93,400 projected cost',
    items: [
      { label: 'Projected cost of attendance', amount: 93400 }
    ],
    billedSubtotal: null,
    totalText: '$93,400 projected cost of attendance for 2026–27',
    note: 'Lehigh’s aid goal for international students excludes travel and personal expenses.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: true, basis: 'need-based',
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Lehigh has limited international aid, gives it to a limited number of admitted non-US citizens, and reviews their applications need-aware.',
      howToApply: 'Submit the CSS Profile by your application deadline.',
      note: 'Lehigh says its goal is to meet 100% of demonstrated need (excluding travel and personal expenses) "for as many admitted students as possible with the limited funds available" — a goal rather than a guarantee for every international student.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: false, needBlindInternational: false,
      forms: ['CSS Profile', 'International Undergraduate Financial Certification Form'],
      deadlines: '1 November (ED I) or 15 January (ED II and Regular Decision)',
      note: 'Full need is not guaranteed for every admitted international student.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International students — admissions', url: 'https://www2.lehigh.edu/admissions/international-students' },
    { label: 'Financial aid frequently asked questions', url: 'https://www2.lehigh.edu/financial-aid/frequently-asked-questions' },
    { label: 'How to apply for financial aid', url: 'https://www2.lehigh.edu/admissions/tuition-affording-college/how-apply-financial-aid' }
  ],
  lastVerified: '2026-09-22'
},

{
  id: 'university-of-miami',
  name: 'University of Miami',
  country: 'us',
  city: 'Coral Gables',
  region: 'Florida',
  founded: 1925,
  type: 'Private research university',
  brand: { c1: '#F47321', c2: '#005030', initials: 'UM' },
  description: 'A large private research university in Coral Gables near Miami, strong in marine science, music, business and health. It offers international students both need-based aid and merit scholarships; two of its premier awards — the Stamps (full cost of attendance) and the Singer (full tuition) — are open to them.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','engineering','computer-science','biology','medicine','economics','social-sciences','humanities','psychology','arts','education','mathematics'],
  englishTaughtPrograms: ['business','engineering','computer-science','biology','medicine','economics','social-sciences','humanities','psychology','arts','education','mathematics'],
  programNote: 'UM has schools including the Miami Herbert Business School, the Rosenstiel School of Marine, Atmospheric and Earth Science, the Frost School of Music and a School of Nursing.',
  links: {
    website: 'https://welcome.miami.edu/',
    admissions: 'https://admissions.miami.edu/undergraduate/application-process/options-and-deadlines/index.html',
    internationalAdmissions: 'https://admissions.miami.edu/undergraduate/about/FAQs/international-applicants/index.html',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://admissions.miami.edu/undergraduate/financial-aid/scholarships/freshman/index.html',
    financialAid: 'https://admissions.miami.edu/undergraduate/about/FAQs/international-applicants/index.html',
    programs: 'https://bulletin.miami.edu/',
    cost: 'https://finaid.miami.edu/cost/index.html'
  },
  admissions: {
    platforms: ['Common Application'],
    deadlines: [
      { name: 'Early Decision I', date: '1 November', note: 'Binding; deadline for Premier Scholarship consideration' },
      { name: 'Early Action', date: '1 November', note: 'Non-binding; deadline for Premier Scholarship consideration' },
      { name: 'Early Decision II', date: '5 January', note: 'Binding' },
      { name: 'Regular Decision', date: '5 January', note: null }
    ],
    applicationFee: { amount: null, currency: 'USD', waiver: 'Not confirmed on the pages consulted.' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'English proficiency evidence', 'CSS Profile for need-based aid'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['Only applicants who apply by 1 November are considered for Premier Scholarships.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Published on UM’s separate English Language Proficiency Requirements page; not confirmed here.' },
    toefl: { min: null, recommended: null, note: 'Not confirmed here.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed here.' },
    waiver: null,
    note: 'UM publishes detailed English requirements on a separate page.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'Tuition and fees are the same for domestic and international students.'
  },
  costs: {
    academicYear: '2026–2027',
    currency: 'USD',
    headline: 'Not confirmed — see UM’s cost of attendance page',
    items: [
      { label: 'Tuition, housing, meals, books and travel', text: 'Published on UM’s cost of attendance page; 2026–27 figures were not confirmed here' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — check the official cost page',
    note: 'UM charges international and domestic students the same tuition.'
  },
  scholarships: {
    fullRide: {
      available: true, internationalEligible: true, basis: 'merit',
      covers: { tuition: true, housing: true, meals: true, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Premier Scholarships are highly selective and only considered for applicants who apply by 1 November.',
      howToApply: 'Apply Early Decision I or Early Action by 1 November; merit consideration is automatic.',
      note: 'The Stamps Scholarship covers the full cost of attendance plus an enrichment stipend and is open to international students. The Isaac Bashevis Singer Scholarship covers full tuition and is also open to them. Other premier awards (Hammond, Weeks, Jenkins) are for US citizens and permanent residents only.'
    },
    merit: [
      {
        name: 'The Stamps Scholarship',
        amount: 'Full cost of attendance plus an enrichment fund stipend',
        internationalEligible: true,
        criteria: 'All incoming first-year students; apply by 1 November.',
        note: 'Premier Scholarship.'
      },
      {
        name: 'The Isaac Bashevis Singer Scholarship',
        amount: 'Full tuition',
        internationalEligible: true,
        criteria: 'All incoming first-year students; apply by 1 November.',
        note: 'Premier Scholarship.'
      },
      {
        name: 'President’s Scholarship and Canes Achievement Award',
        amount: 'Up to $30,000 and up to $20,000 a year',
        internationalEligible: true,
        criteria: 'Automatic consideration for all applicants, regardless of citizenship.',
        note: 'Awarded on academic achievement.'
      }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: null, needBlindInternational: null,
      forms: ['CSS Profile'],
      deadlines: 'By the stated deadlines for your round',
      note: 'UM says it offers international students both merit and need-based aid; the pages consulted do not say whether full need is met or how admission treats aid requests.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International applicants FAQs', url: 'https://admissions.miami.edu/undergraduate/about/FAQs/international-applicants/index.html' },
    { label: 'First-year merit scholarships', url: 'https://admissions.miami.edu/undergraduate/financial-aid/scholarships/freshman/index.html' },
    { label: 'Admission plans and deadlines', url: 'https://admissions.miami.edu/undergraduate/application-process/options-and-deadlines/index.html' }
  ],
  lastVerified: '2026-09-22'
}
);
