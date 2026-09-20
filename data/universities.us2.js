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
