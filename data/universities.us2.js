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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', time: '23:59', timezone: 'applicant’s local time', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Decision letters are available online in mid-December.', status: 'confirmed', source: 'https://admission.brown.edu/first-year/early-decision', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', time: '23:59', timezone: 'applicant’s local time', binding: false, appliesTo: 'First-year applicants', conditions: 'Decision letters are available online in late March.', status: 'confirmed', source: 'https://admission.brown.edu/first-year/regular-decision', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 80, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waiver available in place of the $80 non-refundable fee' },
    documents: ['Common Application with Brown’s writing supplement', 'School transcript and school report', 'Teacher recommendations'],
    recommendations: 'Two teacher recommendations and a counsellor report',
    essay: 'Common Application essay plus Brown’s supplemental questions',
    interview: null,
    notes: ['International applicants must submit the CSS Profile to be considered for any Brown aid.']
  },
  english: {
    ielts: { min: 8, recommended: null, note: 'IELTS 8.0 — Brown says its minimum scores "are expected in most cases".' },
    toefl: { min: 105, recommended: null, scales: [{ period: 'pre2026', min: 105, recommended: null }, { period: 'post2026', min: 5.5, recommended: null }], note: 'TOEFL iBT 105 for tests taken before January 2026, and 5.5 for tests taken in January 2026 or later. The TOEFL iBT Home Edition is accepted; MyBest scores are not.' },
    duolingo: { min: 130, recommended: null, note: 'Duolingo English Test 130.' },
    waiver: 'Brown highly recommends — rather than requires — a test for international applicants whose first language, primary home language, or language of instruction throughout secondary school is not English.',
    note: 'Minimum scores "are expected in most cases": TOEFL 105 (before January 2026) or 5.5 (January 2026 and later), IELTS 8.0, Duolingo 130, PTE 75, Cambridge C1 Advanced or C2 Proficiency 191. English proficiency must be achieved before admission; Brown offers no ESL courses. Self-reported results are accepted, but matriculating students must send official reports — for autumn 2027 entry, by May 2027 and before the result expires.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Brown reinstated the SAT/ACT requirement for first-year applicants, and says English proficiency results are expected in addition to its other test requirements.' },
    act: { policy: 'required', note: 'SAT or ACT is required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications such as A-Levels and the IB are accepted alongside school transcripts.'
  },
  costs: {
    breakdown: { tuition: 74568, billed: 97016, includes: "tuition, room, board and university fees" },
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
    { label: 'First-year application checklist', url: 'https://admission.brown.edu/first-year/application-checklist' },
    { label: 'English proficiency', url: 'https://admission.brown.edu/international/english-proficiency' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Last SAT sitting is November and last ACT sitting October. Decision emails go out in mid-December.', status: 'confirmed', source: 'https://admissions.dartmouth.edu/apply-dartmouth', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', time: '23:59', timezone: 'applicant’s local time', binding: false, appliesTo: 'First-year applicants', conditions: 'Last SAT and ACT sittings are in December. Decision emails go out in late March.', status: 'confirmed', source: 'https://admissions.dartmouth.edu/apply-dartmouth', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers available' },
    documents: ['Common Application', 'School transcript and counsellor report', 'Teacher recommendations', 'Standardized test results'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Dartmouth’s supplemental questions',
    interview: null,
    notes: []
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'Most successful applicants score above IELTS 7 — Dartmouth stresses this is not a minimum.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }], note: 'For TOEFL tests taken before 21 January 2026, most successful applicants score above 100. The TOEFL iBT Special Home Edition is accepted; MyBest scores and TOEFL Essentials are not.' },
    duolingo: { min: null, recommended: 135, note: 'Most successful applicants score above 135.' },
    waiver: 'Required only if your first language is not English and your curriculum has not been delivered in English for at least two years.',
    note: 'Dartmouth has no minimum English scores. Most successful applicants score above IELTS 7, Duolingo 135, Cambridge English 185 or (before 21 January 2026) TOEFL 100. IELTS Indicator and the TOEFL iBT Special Home Edition are accepted.'
  },
  academics: {
    gpa: null,
    sat: {
      policy: 'required-alternatives',
      label: 'Standardized testing required; alternatives available for applicants attending school outside the US.',
      note: 'Testing is a required part of the application (reactivated from the class of 2029). Students at US high schools must send the SAT or ACT, which are superscored. Students at high schools outside the US may instead send three AP exam results, predicted or final IB Diploma results, predicted or final British A-Level results, or final results of an equivalent standardized national exam. What counts is where you attend school, not your citizenship, and only an equivalent standardized national exam qualifies — not any school-leaving grade.'
    },
    act: { policy: 'required-alternatives', label: 'Accepted as the SAT alternative; alternatives available outside the US.', note: 'SAT or ACT for US high schools; outside the US the ACT is one of five options.' },
    otherTests: 'Outside the US: three AP exams, IB Diploma results (predicted or final), British A-Level results (predicted or final), or final results of an equivalent standardized national exam.',
    internationalQualifications: 'Applicants who attended high schools both in and outside the US should check Dartmouth’s testing FAQ for which rule applies.'
  },
  costs: {
    breakdown: { tuition: 71697, billed: 95382, budget: 98427, includes: "tuition, fees, housing and food; the full budget adds books and personal expenses (health insurance and a computer allowance are extra)" },
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
    { label: 'Dartmouth’s testing guidelines', url: 'https://admissions.dartmouth.edu/apply/testing-policy' },
    { label: 'If English is not my first language, am I required to submit a language proficiency test?', url: 'https://admissions.dartmouth.edu/glossary-question/if-english-not-my-first-language-am-i-required-submit-language-proficiency-test' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding: an admitted applicant must enrol and withdraw other applications. Decisions are released on or before 15 December.', status: 'confirmed', source: 'https://undergrad.admissions.columbia.edu/apply/firstyear/early-decision', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions are released on or before 15 April.', status: 'confirmed', source: 'https://undergrad.admissions.columbia.edu/apply/firstyear', verified: '2026-09-23', note: null },
      { name: 'Financial aid application', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: false, appliesTo: 'Applicants asking for financial aid', conditions: 'Separate from the admission deadline; Columbia collects family income, assets and circumstances.', status: 'confirmed', source: 'https://undergrad.admissions.columbia.edu/afford', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers available through the application' },
    documents: ['Common Application with Columbia-specific questions', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Two teacher recommendations and a counsellor recommendation',
    essay: 'Common Application essay plus Columbia’s short-answer questions',
    interview: null,
    notes: [
      'International applicants must indicate on the admission application that they will apply for aid. Those admitted without requesting aid cannot apply for it later, even if circumstances change.'
    ]
  },
  english: {
    ielts: { min: 7.5, recommended: null, note: 'IELTS Academic (or Academic for UKVI) 7.5 is necessary for admission.' },
    toefl: { min: 105, recommended: null, scales: [{ period: 'pre2026', min: 105, recommended: null }, { period: 'post2026', min: 5.5, recommended: null }], note: 'TOEFL iBT 105 for tests on or before 20 January 2026, and 5.5 for tests on or after 21 January 2026. The Special Home Edition is accepted; MyBest scores are not.' },
    duolingo: { min: 135, recommended: null, note: 'Duolingo English Test 135 is necessary for admission.' },
    waiver: 'No exam is needed if English is your home language, if English was your main language of instruction throughout secondary school, or with SAT Reading and Writing 700+ or ACT English or Reading 29+.',
    note: 'Columbia states minimum scores "necessary for admission": TOEFL 105 or 5.5, IELTS 7.5, Duolingo 135, Cambridge C1 Advanced or C2 Proficiency 191. Scores must be sent directly by the testing service.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Columbia has kept a test-optional policy for first-year applicants; confirm for your entry year.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International curricula are assessed in their own context.'
  },
  costs: {
    breakdown: { tuition: 72800, includes: "tuition for two terms; fees, housing, food and personal expenses are charged on top" },
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
    { label: 'Application fees and fee waivers', url: 'https://undergrad.admissions.columbia.edu/apply/process/application-fees' },
    { label: 'English proficiency requirements', url: 'https://undergrad.admissions.columbia.edu/apply/international/english-proficiency' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding: if admitted you must accept the offer and enrol. Decisions come in December.', status: 'confirmed', source: 'https://admissions.upenn.edu/how-to-apply/first-year-applicants', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions come in April; admitted students reply by 1 May.', status: 'confirmed', source: 'https://admissions.upenn.edu/how-to-apply/first-year-applicants', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waiver can be requested through the Common or Coalition Application' },
    documents: ['Common or Coalition Application with Penn’s supplement', 'School transcript and reports', 'Teacher recommendations', 'SAT or ACT scores'],
    recommendations: 'Two teacher recommendations and a counsellor recommendation',
    essay: 'Personal essay plus Penn-specific questions',
    interview: 'An optional alumni interview may be offered',
    notes: [
      'International students must request financial aid when they apply. Aid cannot be requested later, and the first-year decision applies for all four years.'
    ]
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'Competitive applicants tend to score IELTS 7 or above, consistently across the four sections.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Competitive applicants tend to score 5 or above on the 1–6 scale, or 100 or above on the older 0–120 scale, consistently across sections. MyBest scores are not accepted.' },
    duolingo: { min: null, recommended: 130, note: 'Competitive applicants tend to score 130 or above.' },
    waiver: 'Not required if English was your primary language of instruction for at least three years (high school, college or both) by the time you enrol.',
    note: 'Penn gives these as typical competitive scores, not minimums. Scores are valid for two years and must still be valid when you apply. Penn does not accept IELTS Indicator, IELTS One Retake or TOEFL MyBest scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Penn requires the SAT or ACT; applicants facing hardship can request a waiver in the application. For Early Decision the last accepted sittings are October (ACT) or November (SAT); for Regular Decision, December.' },
    act: { policy: 'required', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted; check Penn’s testing page for country-specific guidance.'
  },
  costs: {
    breakdown: { tuition: 65670, billed: 94582, includes: "tuition, fees, housing and the meal plan" },
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
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision — application', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. The application, fee or waiver and any portfolio are due on this date.', status: 'confirmed', source: 'https://admissions.cornell.edu/how-to-apply/first-year-applicants', verified: '2026-10-01', note: null },
      { name: 'Early Decision — supporting materials', kind: 'documents', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-13', date: '13 November 2026', binding: false, appliesTo: 'Early Decision applicants', conditions: 'All other required materials. Decisions are available mid-December.', status: 'confirmed', source: 'https://admissions.cornell.edu/how-to-apply/first-year-applicants', verified: '2026-10-01', note: null },
      { name: 'Regular Decision — application', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-02', date: '2 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'The application, fee or waiver and any portfolio are due on this date.', status: 'confirmed', source: 'https://admissions.cornell.edu/how-to-apply/first-year-applicants', verified: '2026-10-01', note: null },
      { name: 'Regular Decision — supporting materials', kind: 'documents', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-19', date: '19 January 2027', binding: false, appliesTo: 'Regular Decision applicants', conditions: 'All other required materials. Decisions are available in late March.', status: 'confirmed', source: 'https://admissions.cornell.edu/how-to-apply/first-year-applicants', verified: '2026-10-01', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waiver available for applicants for whom the fee is a burden and who apply for financial aid' },
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
    sat: { policy: 'required', note: 'Cornell reinstated testing for students entering from autumn 2026: first-year applicants to every college must submit the SAT or ACT. Scores may be self-reported; enrolling students send official scores.' },
    act: { policy: 'required', note: 'SAT or ACT required.' },
    otherTests: null,
    internationalQualifications: 'International curricula are assessed in context; some colleges ask for specific subject preparation.'
  },
  costs: {
    breakdown: { tuition: 73946, billed: 95294, includes: "tuition (endowed colleges), housing and dining" },
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
    { label: 'Board of Trustees approves 2026-27 budget parameters', url: 'https://news.cornell.edu/stories/2026/03/board-trustees-approves-2026-27-budget-parameters' },
    { label: 'Standardized testing policy', url: 'https://admissions.cornell.edu/policies/standardized-testing-policy' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Restrictive Early Action', kind: 'REA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding, but you may not apply early to any other private US university. Last SAT sitting is the end of October.', status: 'confirmed', source: 'https://admission.stanford.edu/apply/first-year/decision_process.html', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Last SAT sitting is the end of December.', status: 'confirmed', source: 'https://admission.stanford.edu/apply/deadlines/index.html', verified: '2026-09-23', note: null },
      { name: 'Financial aid — priority deadline', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: false, appliesTo: 'Applicants asking for financial aid', conditions: 'Applying by this date brings a financial aid notification by mid-December.', status: 'confirmed', source: 'https://admission.stanford.edu/apply/deadlines/index.html', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 100, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers are available through the Common Application; the fee amount was not confirmed on the pages consulted.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://drive.google.com/file/d/1GIPKgVj1d86dkmLkHI_mZVCk_iY6kiCp/view', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application with Stanford questions', 'School transcript and school report', 'Teacher recommendations', 'SAT or ACT scores'],
    recommendations: 'Two teacher recommendations and a counsellor report',
    essay: 'Common Application essay plus the Stanford questions',
    interview: null,
    notes: ['International applicants who may need aid must say so on the admission application — the request is part of the decision.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not required; Stanford publishes no minimum or recommended score.' },
    toefl: { min: null, recommended: null, note: 'Not required; no score published.' },
    duolingo: { min: null, recommended: null, note: 'Not required; no score published.' },
    waiver: 'Stanford does not require an English proficiency exam for undergraduate admission.',
    note: 'Fluency in English is a prerequisite for admission, but Stanford does not require an English exam; applicants may self-report results from any exam, and Stanford has no preferred test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Stanford requires the SAT or ACT; scores may be self-reported at application.' },
    act: { policy: 'required', note: 'SAT or ACT required.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { tuition: 67731, billed: 90675, includes: "tuition, room and board" },
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
    { label: 'Stanford holds undergraduate tuition steady for 2026-27', url: 'https://news.stanford.edu/stories/2026/02/undergraduate-tuition-rates-2026-2027' },
    { label: 'Stanford University Common Data Set 2025–26 (section C13)', url: 'https://drive.google.com/file/d/1GIPKgVj1d86dkmLkHI_mZVCk_iY6kiCp/view' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-09', date: '9 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decision by early to mid-December.', status: 'confirmed', source: 'https://www.amherst.edu/admission/apply/firstyear/calendar_deadlines', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional: self-reported or official SAT/ACT scores are accepted but not required. Decision by late March.', status: 'confirmed', source: 'https://www.amherst.edu/admission/apply/firstyear/calendar_deadlines', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers are granted automatically to applicants who meet the College Board criteria in the Common Application profile.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.amherst.edu/system/files/C.%20First-Time%20First-Year%20Admission%202025-26_0.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Amherst’s supplement',
    interview: null,
    notes: []
  },
  english: {
    ielts: { min: null, recommended: 7.5, note: 'IELTS Academic 7.5 overall is strongly recommended.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5.5 }], note: 'TOEFL iBT or Home Edition: 100 for tests before 21 January 2026, or 5.5, strongly recommended.' },
    duolingo: { min: null, recommended: 130, note: 'Duolingo English Test 130 or above is strongly recommended.' },
    waiver: 'Waived only for first-year applicants who completed their two most recent years of secondary school with English as the primary language of instruction.',
    note: 'Applicants whose first language is not English must submit the TOEFL, IELTS Academic or Duolingo English Test unless they qualify for the waiver; Amherst "strongly recommends" these minimum scores. Amherst offers no ESL instruction or provisional admission.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Amherst is test-optional and accepts self-reported scores; admitted students who enrol must later send official reports for any scores they submitted.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 75330, billed: 96360, comprehensive: true, includes: "a comprehensive fee covering tuition, housing, meals and the student activities fee" },
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
    { label: 'Standardized testing policy', url: 'https://www.amherst.edu/admission/apply/firstyear/testing' },
    { label: 'Amherst College Common Data Set 2025–26 (section C13)', url: 'https://www.amherst.edu/system/files/C.%20First-Time%20First-Year%20Admission%202025-26_0.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions in mid-December.', status: 'confirmed', source: 'https://www.bowdoin.edu/admissions/apply/dates-deadlines/index.html', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions by early February.', status: 'confirmed', source: 'https://www.bowdoin.edu/admissions/apply/dates-deadlines/index.html', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Bowdoin has been test-optional since 1969. Decisions in mid-March.', status: 'confirmed', source: 'https://www.bowdoin.edu/admissions/apply/dates-deadlines/index.html', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 70, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The $70 fee is waived automatically for applicants for financial aid and first-generation applicants' },
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
    ielts: { min: null, recommended: null, note: 'Optional; Bowdoin has no minimum score.' },
    toefl: { min: null, recommended: null, note: 'Optional; no minimum score.' },
    duolingo: { min: null, recommended: null, note: 'Optional; no minimum score.' },
    waiver: 'English proficiency test scores are optional for international applicants.',
    note: 'Bowdoin accepts the TOEFL, IELTS, Duolingo English Test or Cambridge English Assessment, has no minimum qualifying score, and offers no ESL courses.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Bowdoin does not require the SAT or ACT; the application asks whether you want submitted scores to be considered.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 74968, billed: 95400, comprehensive: true, includes: "a comprehensive fee covering tuition, fees, housing and food" },
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
  lastVerified: '2026-09-22'
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
      { name: 'Restrictive Early Action', kind: 'REA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding but restricted; decisions in mid-December.', status: 'confirmed', source: 'https://admissions.nd.edu/apply/early-action-regular-decision/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions by late March; admitted students confirm and pay a deposit by 1 May.', status: 'confirmed', source: 'https://admissions.nd.edu/apply/early-action-regular-decision/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waiver option available' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendation', 'CSS Profile for aid applicants'],
    recommendations: 'A counsellor and a teacher recommendation',
    essay: 'Notre Dame writing supplement in addition to the personal essay',
    interview: null,
    notes: ['International applicants who want need-based aid must complete the CSS Profile, available from 1 October.']
  },
  english: {
    ielts: { min: null, recommended: 7.5, note: 'IELTS 7.5 composite is strongly recommended.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5.5 }], note: 'Strongly recommended: 100 overall with at least 25 in Speaking (older scale), or 5.5 average with no section below 5.0 (current scale). The TOEFL iBT Special Home Edition is not accepted.' },
    duolingo: { min: null, recommended: 125, note: 'Duolingo English Test 125 is strongly recommended; applicants without access to a TOEFL or IELTS test site are asked to take it.' },
    waiver: 'Not required with SAT Evidence-Based Reading and Writing 650+ or ACT English or Reading 26+; testing is needed only if your first language is not English or your secondary schooling was not mainly in English.',
    note: 'Notre Dame accepts the TOEFL, IELTS, PTE Academic and Duolingo English Test and gives these as strongly recommended scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', label: 'Test-optional for this cycle; required from the 2027–28 cycle', note: 'Notre Dame is test-optional through the 2026–27 admissions cycle — the one leading to autumn 2027 entry — and states it will reinstate a standardized testing requirement from the 2027–28 cycle.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 69794, billed: 88786, comprehensive: true, includes: "a basic fee covering tuition, fees, housing and food on campus" },
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
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decision by 15 December.', status: 'confirmed', source: 'https://www.williams.edu/admission-aid/apply/deadlines/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decision by 1 April; admitted students reply by 1 May. Applicants state on the application whether they are applying test-optional and can change that choice until their round’s deadline.', status: 'confirmed', source: 'https://www.williams.edu/admission-aid/apply/deadlines/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 65, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://hub.williams.edu/institutional-research/files/2026/04/Williams-CDS-2025-2026-V2.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: 7.5, note: 'Competitive applicants typically score IELTS 7.5–9.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Competitive applicants typically score 5–6, or 100–120 before January 2026.' },
    duolingo: { min: null, recommended: 135, note: 'Competitive applicants typically score 135–160.' },
    waiver: 'English tests are encouraged, not required, for applicants whose first language or language of instruction is not English.',
    note: 'Williams publishes typical ranges of competitive applicants rather than minimums; scores can be entered in the application, emailed as a screenshot or sent by the testing agency.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Williams describes itself as "truly test optional": sending SAT or ACT results is your choice, and you can change your mind before the deadline. Scores are superscored.' },
    act: { policy: 'optional', note: 'Same as the SAT; the ACT science section is optional.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 76300, billed: 95960, includes: 'tuition, required fees and on-campus food and housing; books, travel, personal expenses and health insurance are extra', published: true },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$76,300 tuition · $95,960 with required fees, food and housing',
    items: [
      { label: 'Tuition', amount: 76300 },
      { label: 'Required fees', amount: 340 },
      { label: 'Food and housing (on campus)', amount: 19320 },
      { label: 'Books and supplies', amount: 1000 },
      { label: 'Transportation', amount: 850 },
      { label: 'Other expenses', amount: 1850 }
    ],
    billedSubtotal: 95960,
    totalText: '$95,960 for tuition, required fees and on-campus food and housing',
    note: 'From section G1 of the 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. Williams notes that books are provided free to all students on need-based financial aid.',
    source: 'https://hub.williams.edu/institutional-research/files/2026/04/Williams-CDS-2025-2026-V2.pdf',
    verified: '2026-10-05',
    studentCategory: 'Full-time first-year undergraduates living on campus'
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
    { label: 'Additional information for international applicants', url: 'https://www.williams.edu/admission-aid/apply/international/' },
    { label: 'First-year applicants — testing', url: 'https://www.williams.edu/admission-aid/how-to-apply/first-year/' },
    { label: 'International applicants', url: 'https://www.williams.edu/admission-aid/how-to-apply/additional-applicant-information/international/' },
    { label: 'Williams College Common Data Set 2025–26 (section C13)', url: 'https://hub.williams.edu/institutional-research/files/2026/04/Williams-CDS-2025-2026-V2.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Duke is test-optional for this cycle; the last test dates for ED applicants are 7 November (SAT) and 17 October (ACT). Decisions are released around mid-December.', status: 'confirmed', source: 'https://admissions.duke.edu/checklist/', verified: '2026-10-06', note: 'Duke’s checklist states that its dates are the 2026–2027 admission cycle deadlines.' },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional for this cycle; last test dates 5 December (SAT) and 12 December (ACT). Decisions before 1 April.', status: 'confirmed', source: 'https://admissions.duke.edu/checklist/', verified: '2026-10-06', note: 'Duke’s checklist states that its dates are the 2026–2027 admission cycle deadlines.' },
      { name: 'Financial aid application — Early Decision', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: false, appliesTo: 'Early Decision applicants asking for aid', conditions: 'The checklist lists the CSS Profile and FAFSA with the Early Decision application; additional financial aid documents are due by 15 November.', status: 'confirmed', source: 'https://admissions.duke.edu/checklist/', verified: '2026-10-06', note: null },
      { name: 'Financial aid application — Regular Decision', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-02-01', date: '1 February 2027', binding: false, appliesTo: 'Regular Decision applicants asking for aid', conditions: 'The checklist lists the CSS Profile and FAFSA for this date.', status: 'confirmed', source: 'https://admissions.duke.edu/checklist/', verified: '2026-10-06', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'A fee waiver request can be sent with the Common Application in place of the $85 fee' },
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
    breakdown: { tuition: 70265, billed: 94157, budget: 98549, includes: "tuition, fees, housing and food; the full budget adds books, personal expenses and transport" },
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. All required materials are due with the application; decisions by mid-December.', status: 'confirmed', source: 'https://admissions.vanderbilt.edu/apply/decision-plans.php', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Decisions by mid-February.', status: 'confirmed', source: 'https://admissions.vanderbilt.edu/apply/decision-plans.php', verified: '2026-09-23', note: null },
      { name: 'Regular Decision (priority deadline)', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-02-15', date: '15 February 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Vanderbilt publishes 15 February 2027 as the priority deadline for a completed Regular Decision application.', status: 'confirmed', source: 'https://admissions.vanderbilt.edu/apply/decision-plans.php', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 50, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Vanderbilt accepts every fee waiver request submitted through the Common or Coalition Application' },
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
    sat: { policy: 'optional', label: 'Test-optional for 2027 and 2028 entry', note: 'Vanderbilt states that SAT or ACT scores are optional for students applying for fall 2027 or fall 2028 entry, and that scores will be required for fall 2029 entry.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: 'Credit is given for scores of 4 or 5 on Advanced Placement exams and 6 or 7 on International Baccalaureate exams, depending on the subject.',
    internationalQualifications: 'International curricula are accepted; transcripts must be officially translated.'
  },
  costs: {
    breakdown: { tuition: 69822, billed: 96896, budget: 99994, budgetText: "About $99,994", includes: "tuition, housing, food, the student support fee, books and personal expenses" },
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://admission.rice.edu/apply/first-year-international-applicants', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://admission.rice.edu/apply/first-year-international-applicants', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. Decisions are released by 1 April.', status: 'confirmed', source: 'https://admission.rice.edu/apply/first-year-international-applicants', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: false, waiver: 'International applicants cannot request a fee waiver for the $75 fee' },
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
    sat: { policy: 'optional', label: 'Test-optional — Rice recommends sending scores', note: 'Rice recommends that applicants submit test scores but states that students who cannot or prefer not to submit them still receive full consideration.' },
    act: { policy: 'optional', note: 'Same as the SAT; no preference between the two tests.' },
    otherTests: null,
    internationalQualifications: 'Transcripts in other languages must be accompanied by a certified English translation.'
  },
  costs: {
    breakdown: { tuition: 71140, billed: 92654, includes: "tuition, mandatory fees, room and board" },
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Test-optional: October or November scores may be self-reported until 30 November 2026. Decisions by mid-December.', status: 'confirmed', source: 'https://admissions.northwestern.edu/apply/application-deadlines.html', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional: December scores may be self-reported until 15 February 2027. Decisions by the end of March.', status: 'confirmed', source: 'https://admissions.northwestern.edu/apply/application-deadlines.html', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'A fee waiver can be requested instead of the $75 fee' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendation', 'English proficiency score where required'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Northwestern’s supplemental questions',
    interview: null,
    notes: ['International applicants who may need aid must ask for it in the admission application; those admitted without aid cannot apply in later years.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Required where applicable; Northwestern publishes no minimum score.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum published. The TOEFL ITP Plus for China and MyBest scores are not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum published.' },
    waiver: 'Not required if English is your first language or your secondary schooling was in English.',
    note: 'Northwestern has no minimum score; competitive applicants score in the high range on every section. Scores must be official — self-reported results are not accepted — and English exams are not superscored.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Northwestern does not require the SAT or ACT from first-year or transfer applicants; scores may be sent but are not required.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Applications are read in the context of the applicant’s own school system.'
  },
  costs: {
    breakdown: { tuition: 71802, billed: 96003, includes: "tuition, fees, room and board" },
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
    { label: 'Undergraduate financial aid — aid commitment', url: 'https://undergradaid.northwestern.edu/' },
    { label: 'International applicants FAQ', url: 'https://admissions.northwestern.edu/faqs/international-applicants/' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding; decision in mid-December. October ACT and November SAT scores are accepted for this round.', status: 'confirmed', source: 'https://collegeadmissions.uchicago.edu/apply/application/', verified: '2026-09-23', note: null },
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decision in mid-December.', status: 'confirmed', source: 'https://collegeadmissions.uchicago.edu/apply/application/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decision in mid-February. December SAT and ACT scores are accepted.', status: 'confirmed', source: 'https://collegeadmissions.uchicago.edu/apply/application/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decision in late March. January SAT and February ACT scores are accepted. UChicago is test-optional and applies a "no harm" rule to any scores sent.', status: 'confirmed', source: 'https://collegeadmissions.uchicago.edu/apply/application/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 90, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers are available; the fee was $90 for autumn 2026 entry' },
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
    breakdown: { tuition: 71325, billed: 94101, budget: 98301, budgetText: "$98,301–$98,676", includes: "tuition, the student services fee, housing and food; health insurance is added unless waived" },
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Hopkins requires standardized testing and advises finishing tests by October for ED.', status: 'confirmed', source: 'https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/early-decision/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-02', date: '2 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding second early round.', status: 'confirmed', source: 'https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/early-decision/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-02', date: '2 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Testing is required; Hopkins advises finishing tests by December.', status: 'confirmed', source: 'https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 70, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers through the Common Application or Coalition on Scoir, or by Hopkins’ own request form' },
    documents: ['Common or Coalition application', 'Hopkins supplemental essay (350 words)', 'School transcript and secondary school report', 'Two teacher evaluations', 'SAT or ACT scores', 'Mid-year school report'],
    recommendations: 'Two teacher evaluations from different academic subjects plus a counsellor report',
    essay: 'Personal essay plus a 350-word Hopkins supplement',
    interview: null,
    notes: ['International applicants who may need aid must say so on the application and submit the CSS Profile and the Certification of Finances.']
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'To be competitive, applicants typically score 7.0 or higher on each IELTS band.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'post2026', min: null, recommended: 5 }], note: 'To be competitive: at least 5 overall, with preferred section scores of 5.5 Reading, 5.5 Listening, 5 Writing and 5 Speaking.' },
    duolingo: { min: null, recommended: 120, note: 'To be competitive: 120 or higher, with preferred subscores of 125 Literacy, 120 Conversation, 135 Comprehension and 105 Production.' },
    waiver: 'Recommended rather than required for applicants whose primary language is not English or who have not attended an English-language school for the last three years; Hopkins especially encourages scores from those below SAT ERW 690 or below 30 on both ACT Reading and English.',
    note: 'Hopkins gives typical competitive scores, not minimums: TOEFL 5, IELTS 7.0 per band, Duolingo 120, Cambridge C1 Advanced or C2 Proficiency 185.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Standardized testing is required. Scores may be self-reported at application; admitted students send official reports before enrolling.' },
    act: { policy: 'required', note: 'SAT or ACT required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { budget: 95000, budgetText: "About $95,000", includes: "charges billed by Hopkins plus estimated books, supplies, travel and personal expenses" },
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
    { label: 'Estimate your college costs', url: 'https://apply.jhu.edu/tuition-aid/estimate-your-college-costs/' },
    { label: 'Standardized testing', url: 'https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/standardized-testing/' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. Materials must be received by this date; if scores are sent, the last accepted test date is October for Early Decision I applicants.', status: 'confirmed', source: 'https://admissions.wustl.edu/how-to-apply/application-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Materials must be received by this date.', status: 'confirmed', source: 'https://admissions.wustl.edu/how-to-apply/application-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://admissions.wustl.edu/how-to-apply/application-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; if scores are submitted, the last accepted test date is December. WashU superscores the SAT and ACT.', status: 'confirmed', source: 'https://admissions.wustl.edu/how-to-apply/application-deadlines/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'WashU publishes a fee waiver request; the fee amount was not confirmed on the pages consulted.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://washu.edu/app/uploads/2026/06/2025-2026-WashU-CDS.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    sat: { policy: 'optional', note: 'WashU is test-optional for autumn 2027. Applicants who do not send scores are not penalised; AP, IB or other results can be sent in addition to or instead of the SAT or ACT. From autumn 2027 SAT/ACT scores cannot replace an English proficiency test.' },
    act: { policy: 'optional', note: 'Same as the SAT; the ACT science section is not required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { billed: 75645, budget: 105183, includes: "tuition, fees and health insurance; the larger figure is the total WashU certifies for visa documents, including living expenses" },
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
    { label: 'English testing requirements', url: 'https://admissions.washu.edu/how-to-apply/english-testing-requirements/' },
    { label: 'Common questions — testing', url: 'https://admissions.washu.edu/how-to-apply/common-questions/' },
    { label: 'Washington University in St. Louis Common Data Set 2025–26 (section C13)', url: 'https://washu.edu/app/uploads/2026/06/2025-2026-WashU-CDS.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants to Emory College or Oxford College', conditions: 'Binding. Financial aid deadline 2 December; decisions by 15 December.', status: 'confirmed', source: 'https://apply.emory.edu/apply/first-year/plans-deadlines/index.html', verified: '2026-10-01', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants to Emory College or Oxford College', conditions: 'Binding. Financial aid deadline 6 January; decisions by 15 February.', status: 'confirmed', source: 'https://apply.emory.edu/apply/first-year/plans-deadlines/index.html', verified: '2026-10-01', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants to Emory College or Oxford College', conditions: 'Not binding. Financial aid deadline 10 February; decisions by 1 April.', status: 'confirmed', source: 'https://apply.emory.edu/apply/first-year/plans-deadlines/index.html', verified: '2026-10-01', note: 'Emory’s current deadlines table lists these dates without a year.' },
      { name: 'Scholar programs consideration', kind: 'scholarship', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: false, appliesTo: 'Applicants who want to be considered for Emory Scholar programs', conditions: 'Emory’s Scholar Programs deadline is 15 November, with decisions by 1 March.', status: 'confirmed', source: 'https://apply.emory.edu/apply/first-year/plans-deadlines/index.html', verified: '2026-10-01', note: null }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'A fee waiver can be requested instead of the $75 fee' },
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
    ielts: { min: null, recommended: 7.5, note: 'Emory’s expected overall IELTS band is 7.5.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5.5 }], note: 'Emory expects 100 on the older 0–120 scale, or 5.5 or higher on the 1–6 scale used from 21 January 2026.' },
    duolingo: { min: null, recommended: 130, note: 'Emory’s most competitive applicants typically score above 130.' },
    waiver: 'SAT or ACT scores can also be used to demonstrate English proficiency.',
    note: 'Emory has no strict cut-offs; these are the scores it recommends as evidence of readiness for college-level work. International applicants should be fluent in written and spoken English when they apply.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Emory is test-optional for students starting in autumn 2027. Self-reported scores are accepted; admitted students who enrol send official scores, which are verified. AP scores of 3 or higher are encouraged.' },
    act: { policy: 'optional', note: 'Same as the SAT; the writing section is not required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 70300, billed: 93854, budget: 97948, includes: "tuition, fees, housing and food; the full budget adds travel, personal expenses and books" },
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
    { label: 'Cost of attendance worksheet 2026-2027', url: 'https://studentaid.emory.edu/_includes/documents/sections/undergraduate/apply/cost-of-attendance-worksheet.pdf' },
    { label: 'Standardized exam policies', url: 'https://apply.emory.edu/apply/requirements/exams' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions in mid-December.', status: 'confirmed', source: 'https://admissions.tufts.edu/apply/applying-to-tufts/checklist-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions in mid-February.', status: 'confirmed', source: 'https://admissions.tufts.edu/apply/applying-to-tufts/checklist-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; decisions by 1 April.', status: 'confirmed', source: 'https://admissions.tufts.edu/apply/applying-to-tufts/checklist-and-deadlines/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: true, waiver: 'Tufts waives the admission application fee for international citizens seeking need-based aid.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://provost.tufts.edu/institutionalresearch/wp-content/uploads/sites/5/CDS_2025-2026.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: 7, note: 'Tufts has no minimums; successful applicants generally have IELTS 7 or above.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Generally successful applicants have 5.0+ for tests on or after 21 January 2026, or 100+ for earlier tests. MyBest scores and TOEFL ITP Plus are not accepted.' },
    duolingo: { min: null, recommended: 130, note: 'Generally successful applicants have 130 or above.' },
    waiver: 'Not required after at least three years at a secondary school where English is the primary language of instruction.',
    note: 'Tufts accepts the TOEFL, IELTS, PTE (68+) and Duolingo English Test, has no score minimums and accepts self-reported results; matriculating students send official scores. The IELTS Indicator is not accepted and English tests are not superscored.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Tufts considers standardized testing only when it is submitted, so scores are not required.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 74862, billed: 97152, includes: "tuition, housing, food and fees; books, personal expenses and travel are extra" },
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
    { label: 'First-year applicants — deadlines', url: 'https://admissions.tufts.edu/apply/first-year-students/' },
    { label: 'Applying as an international student', url: 'https://admissions.tufts.edu/apply/applying-as-an-international-s/' },
    { label: 'Tufts University Common Data Set 2025–26 (section C13)', url: 'https://provost.tufts.edu/institutionalresearch/wp-content/uploads/sites/5/CDS_2025-2026.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding: a signal that Richmond is your first choice. Decisions around 12 December. ED I applicants are considered automatically for Richmond Scholars.', status: 'confirmed', source: 'https://admission.richmond.edu/process/early-decision.html', verified: '2026-10-01', note: null },
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. Decisions around 23 January; financial aid notification around 15 February. All Early Action applications are considered for Richmond Scholars.', status: 'confirmed', source: 'https://admission.richmond.edu/process/early-action.html', verified: '2026-10-01', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Applicants can switch between Regular Decision and Early Decision II until 1 January.', status: 'confirmed', source: 'https://admission.richmond.edu/process/early-decision.html', verified: '2026-10-01', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding; decisions in mid-March and reply by 1 May. Richmond is test-optional for students entering in 2027.', status: 'confirmed', source: 'https://admission.richmond.edu/process/regular-decision.html', verified: '2026-10-01', note: 'Richmond’s current round pages list these dates without a year.' },
      { name: 'Richmond Scholars consideration', kind: 'scholarship', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'Early Decision II and Regular Decision applicants who want to be considered for Richmond Scholars', conditions: 'All applications on file by 1 December are considered automatically for Richmond Scholars, the university’s largest merit scholarship.', status: 'confirmed', source: 'https://admission.richmond.edu/process/early-decision.html', verified: '2026-10-01', note: null }
    ],
    applicationFee: { amount: null, currency: 'USD', waiverAvailableToInternational: true, waiver: 'Richmond waives the application fee for international students and other applicants living abroad.' },
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
    ielts: { min: null, recommended: 7.5, note: 'Competitive score: IELTS or IELTS Indicator 7.5.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5.5 }], note: 'Competitive score: TOEFL iBT or Home Edition 100, or 5.5 on the updated scale.' },
    duolingo: { min: null, recommended: 135, note: 'Competitive score: Duolingo English Test 135.' },
    waiver: 'Waived after at least four years at a rigorous English-medium secondary school, with ACT English 28 or SAT Evidence-Based Reading and Writing 660, or with an A or B equivalent in AP, IB (5–7) or A-level English.',
    note: 'Richmond requires official proof of English from students whose first language is not English. It stresses that its scores are competitive levels that satisfy the requirement, "not minimum admission scores".'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Richmond has adopted a test-optional admission path for first-year students entering in 2027.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Richmond evaluates translated transcripts from national curricula as well as AP, IB and A-Levels.'
  },
  costs: {
    breakdown: { tuition: 70725, billed: 89540, budget: 92320, includes: "tuition, housing and food; the full budget adds books and personal expenses" },
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
    { label: 'Cost of attendance 2026-27', url: 'https://financialaid.richmond.edu/applying/cost.html' },
    { label: 'English proficiency policy', url: 'https://admission.richmond.edu/process/international/english-proficiency.html' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Fall Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www.swarthmore.edu/admissions-aid/application-materials-deadlines', verified: '2026-09-23', note: null },
      { name: 'Winter Early Decision', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Swarthmore recommends completing any testing by mid-December.', status: 'confirmed', source: 'https://www.swarthmore.edu/admissions-aid/application-materials-deadlines', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; decisions are released online by 1 April. Swarthmore does not consider the SAT or ACT writing sections.', status: 'confirmed', source: 'https://www.swarthmore.edu/admissions-aid/application-materials-deadlines', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 60, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Fee waivers are decided by Swarthmore, the Common Application, NACAC, the College Board or the ACT; anyone with financial need can check eligibility through SwatPass.', note: 'Stated on Swarthmore’s application materials page: a $60 application fee or a fee waiver.', source: 'https://www.swarthmore.edu/admissions-aid/application-materials-deadlines', verified: '2026-10-06', status: 'confirmed' },
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
    ielts: { min: null, recommended: null, note: 'Accepted; Swarthmore publishes no minimum or recommended score.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no score published. Only the highest result from a single sitting counts.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; results must be sent officially through Duolingo.' },
    waiver: 'A Swarthmore Video Response or an InitialView interview can be submitted instead of an English exam.',
    note: 'Applicants at schools outside the US, whatever their citizenship, must submit a Swarthmore Video Response, an English proficiency exam result or an InitialView video. Swarthmore does not combine scores from different sittings.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Test scores are optional and applicants who do not submit them are not penalised; self-reported scores are accepted.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 72722, billed: 95770, includes: "tuition, housing, food and the student activities fee" },
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
    { label: 'Application materials and deadlines', url: 'https://www.swarthmore.edu/admissions-aid/application-materials-deadlines' },
    { label: 'International students', url: 'https://www.swarthmore.edu/admissions-aid/international-students' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-08', date: '8 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. ED I and ED II are evaluated the same way; only the date differs.', status: 'confirmed', source: 'https://www.pomona.edu/admissions/paths-apply', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-08', date: '8 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www.pomona.edu/admissions/paths-apply', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-08', date: '8 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Pomona is permanently test-optional for first-year admission.', status: 'confirmed', source: 'https://www.pomona.edu/admissions/paths-apply', verified: '2026-09-23', note: null },
      { name: 'Financial aid — Early Decision I', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: false, appliesTo: 'ED I applicants asking for aid', conditions: 'CSS Profile, FAFSA (where applicable) and tax documents.', status: 'confirmed', source: 'https://www.pomona.edu/financial-aid/applying-aid/application-materials-and-deadlines', verified: '2026-09-23', note: null },
      { name: 'Financial aid — Early Decision II and Regular Decision', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'ED II and RD applicants asking for aid', conditions: 'CSS Profile, FAFSA (where applicable) and tax documents.', status: 'confirmed', source: 'https://www.pomona.edu/financial-aid/applying-aid/application-materials-and-deadlines', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 80, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The $80 fee is waived for aid applicants who complete the Pomona Access Pass form' },
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
    breakdown: { tuition: 71660, billed: 95670, comprehensive: true, includes: "a comprehensive charge covering tuition, fees, housing and food" },
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding: for applicants whose first choice is Wellesley.', status: 'confirmed', source: 'https://www.wellesley.edu/admission-aid/apply/first-year-applicants', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; the same plan as ED I with later dates.', status: 'confirmed', source: 'https://www.wellesley.edu/admission-aid/apply/first-year-applicants', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-08', date: '8 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Wellesley remains test-optional for entry in fall 2027; about 45% of enrolling first-years applied without testing.', status: 'confirmed', source: 'https://www.wellesley.edu/admission-aid/apply/first-year-applicants', verified: '2026-10-01', note: 'Wellesley’s current first-year table lists the dates without a year; the financial aid application is due the same day.' },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'There is no fee to apply to Wellesley' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Financial aid documents for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Wellesley’s supplemental questions',
    interview: null,
    notes: [
      'International citizens who might need aid at any point in four years must apply for it with their admission application; applications for aid are not accepted from international students after admission decisions.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not required; Wellesley publishes no minimum score.' },
    toefl: { min: null, recommended: null, note: 'TOEFL iBT or Essentials accepted; no score published.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no score published.' },
    waiver: 'An English exam is not required, but is strongly recommended if English is not your native language and you have studied in an English-based curriculum for fewer than four years.',
    note: 'Wellesley accepts the TOEFL (iBT or Essentials), Duolingo English Test, IELTS and Cambridge C1 Advanced, C2 Proficiency or C1 Business Higher. If the committee decides a test would help, it sends the applicant a waiver code.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Wellesley remains test-optional for entry in autumn 2027. It accepts the SAT or the ACT (with or without the science section).' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 72570, billed: 96136, comprehensive: true, includes: "a comprehensive fee covering tuition, housing, meals, the activity fee, books and personal expenses" },
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
    { label: 'Wellesley announces free tuition for families with incomes of $200,000 or less', url: 'https://www.wellesley.edu/news/wellesley-free-tuition-income-200k-or-less-fall-2027' },
    { label: 'Admission FAQs — testing', url: 'https://www.wellesley.edu/admission-aid/faqs' },
    { label: 'International applicants — instructions', url: 'https://www.wellesley.edu/admission/apply/international/instructions' }
  ],
  lastVerified: '2026-09-22'
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
  description: 'A liberal arts college in rural Vermont, best known for languages, environmental studies and international studies. Middlebury is need-aware in admitting international students, and covers 100% of demonstrated need for all four years of those it admits with aid.',
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding: you may not apply Early Decision elsewhere and must sign the Early Decision Commitment Statement. Financial aid application due 15 November; decisions in mid-December.', status: 'confirmed', source: 'https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines', verified: '2026-10-01', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Financial aid application due the same day; decisions in mid-February.', status: 'confirmed', source: 'https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines', verified: '2026-10-01', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; self-reported scores are accepted. Financial aid application due 1 February; decisions in late March.', status: 'confirmed', source: 'https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines', verified: '2026-10-01', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'From the 2026–27 application cycle Middlebury’s application is free' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Middlebury’s supplemental questions',
    interview: null,
    notes: ['Middlebury does not accept the ISFAA or a paper CSS Profile from international applicants: the CSS Profile must be filed electronically.']
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'IELTS 7.0 is the recommended minimum.' },
    toefl: { min: null, recommended: 5.5, scales: [{ period: 'pre2026', min: null, recommended: 105 }, { period: 'post2026', min: null, recommended: 5.5 }], note: 'Recommended minimum: 5.5 on the TOEFL iBT, or 105 for tests taken before 21 January 2026.' },
    duolingo: { min: null, recommended: 130, note: 'Duolingo English Test 130 is the recommended minimum.' },
    waiver: 'Not required if your native language is English, or if your high school classes were taught entirely in English for the last three or four years (depending on how long high school lasts in your country).',
    note: 'All other applicants must send verifiable TOEFL iBT, Duolingo, IELTS or Cambridge English results; Middlebury recommends TOEFL 5.5 (105 before 21 January 2026), Duolingo 130, IELTS 7.0 or Cambridge C1 Advanced.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Middlebury’s standardized testing page states that it is test-optional; roughly half of applicants apply without scores. Self-reported scores are accepted.' },
    act: { policy: 'optional', note: 'Same as the SAT; the ACT science section is not required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 72924, billed: 94386, includes: "tuition, housing, the meal plan and the student activity fee" },
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
      competitiveness: 'Middlebury states that it is need-aware in its admission of international students, so a request for aid is part of the decision.',
      howToApply: 'File the CSS Profile electronically with the admission application.',
      note: 'Middlebury states that a financial aid offer covers 100% of demonstrated need for all four years of undergraduate study.'
    },
    merit: [],
    needBased: {
      availableToInternational: true, meetsFullNeed: true, needBlindInternational: false,
      forms: ['CSS Profile (electronic only)'],
      deadlines: 'With the admission round',
      note: 'Middlebury’s application instructions state: "We are need aware in our admission of international students." Aid must be requested with the admission application.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Financial aid — Middlebury College admissions', url: 'https://www.middlebury.edu/college/admissions/affordability' },
    { label: 'First-year and transfer students — applying for aid', url: 'https://www.middlebury.edu/student-financial-services/apply-aid/first-year-and-transfer-students' },
    { label: 'Tuition and fees 2026–2027', url: 'https://www.middlebury.edu/student-financial-services/tuition-fees-and-payment/tuition-and-fees' },
    { label: 'Application instructions and deadlines', url: 'https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines' },
    { label: 'Standardized tests', url: 'https://www.middlebury.edu/college/admissions/apply/standardized-tests' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; a decision follows about a month after the deadline.', status: 'confirmed', source: 'https://afa.colby.edu/apply/dates-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; a decision follows about a month after the deadline.', status: 'confirmed', source: 'https://afa.colby.edu/apply/dates-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional, but applicants whose first language and language of instruction are not English must send TOEFL, IELTS Academic or Duolingo results. Decisions by 1 April.', status: 'confirmed', source: 'https://afa.colby.edu/apply/dates-and-deadlines/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'Colby states that there is no fee to apply.', source: 'https://afa.colby.edu/apply/', verified: '2026-10-05' },
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
    note: 'Colby requires a TOEFL, IELTS Academic or Duolingo result from other applicants and accepts self-reported scores, but publishes no minimum.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Colby is test-optional; self-reported SAT and ACT scores are accepted and superscored.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 75790, billed: 95270, comprehensive: true, includes: "a comprehensive fee covering tuition, fees, housing and meals" },
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
    { label: 'Dates and deadlines', url: 'https://afa.colby.edu/apply/dates-and-deadlines/' },
    { label: 'Admissions requirements', url: 'https://afa.colby.edu/apply/requirements/' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification on 12 December.', status: 'confirmed', source: 'https://www.davidson.edu/admission-and-financial-aid/admission-aid-timeline', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 30 January.', status: 'confirmed', source: 'https://www.davidson.edu/admission-and-financial-aid/admission-aid-timeline', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-11', date: '11 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Notification by 1 April.', status: 'confirmed', source: 'https://www.davidson.edu/admission-and-financial-aid/admission-aid-timeline', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 50, currency: 'USD', waiverAvailableToInternational: true, waiver: 'There is no application fee for non-US citizens: it is waived automatically when you select your citizenship on the Common or Coalition Application.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.davidson.edu/media/9718/download', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: 7, note: 'Students with IELTS 7 or higher are best prepared, Davidson says.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Best prepared: TOEFL iBT 5.0 on the 1–6 scale or 100 on the 0–120 scale.' },
    duolingo: { min: null, recommended: 130, note: 'Best prepared: Duolingo English Test 130.' },
    waiver: 'Waived for students from a country where English is an official language, students taking English A in the IB Diploma, and those who spent four years of high school in the US; others may request a waiver by email after applying.',
    note: 'International applicants whose first language is not English must submit the TOEFL, IELTS or Duolingo English Test — the SAT and ACT do not satisfy this. TOEFL and IELTS results must come from the testing agency or school counsellor; self-reported scores are not accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Davidson made its test-optional policy permanent. Scores may be self-reported; enrolling students send official scores.' },
    act: { policy: 'optional', note: 'Same as the SAT; the writing section is not considered.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 73090, billed: 92770, budget: 95995, includes: "tuition, fees, housing and food; the full budget adds books, transport and personal expenses for international first-years" },
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
    { label: 'Admission and aid timeline', url: 'https://www.davidson.edu/admission-and-financial-aid/admission-aid-timeline' },
    { label: 'Testing policy', url: 'https://www.davidson.edu/admission-and-financial-aid/admission-process-help/testing-policy' },
    { label: 'Davidson College Common Data Set 2025–26 (section C13)', url: 'https://www.davidson.edu/media/9718/download' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Grinnell states its Early Decision admit rate has been about 33% against about 13% in Regular Decision.', status: 'confirmed', source: 'https://www.grinnell.edu/admission/apply/first-year/requirements', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www.grinnell.edu/admission/apply/first-year/requirements', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional, but applicants must state by the deadline whether they are submitting a score, and cannot change that afterwards.', status: 'confirmed', source: 'https://www.grinnell.edu/admission/apply/first-year/requirements', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'Grinnell charges no application fee' },
    documents: ['Common Application (no supplement required)', 'Two teacher evaluations', 'Counsellor recommendation and secondary school report', 'Official school transcript', 'CSS Profile or ISFAA for aid applicants'],
    recommendations: 'Two teacher evaluations plus a counsellor recommendation',
    essay: 'The Common Application essay; Grinnell requires no supplement',
    interview: null,
    notes: ['An application from a student seeking aid is not considered complete — or read for admission — until the CSS Profile or ISFAA is submitted.']
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'Grinnell prefers IELTS scores of 7.0 or higher.' },
    toefl: { min: null, recommended: null, note: 'Grinnell has no minimum TOEFL requirement but looks for a very strong command of English.' },
    duolingo: { min: null, recommended: null, note: 'The middle 50% of Duolingo English Test scores is 130–150 (a range, not a minimum).' },
    waiver: 'Required only if your native language is not English and/or your high school was not taught mainly in English.',
    note: 'Grinnell requires an official TOEFL, IELTS or Duolingo score report where applicable and does not evaluate self-reported English scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Scores are not required, but applicants must say by the deadline whether they will submit them and cannot change that choice later. Grinnell superscores.' },
    act: { policy: 'optional', note: 'Same as the SAT; the science section is not required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 73582, billed: 91938, budget: 93338, budgetText: "From $93,338", includes: "tuition (books included), the activity fee, housing and food; the full budget adds personal expenses and travel" },
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
    { label: 'Requirements and deadlines', url: 'https://www.grinnell.edu/admission/apply/first-year/requirements' },
    { label: 'Frequently asked questions for international students', url: 'https://www.grinnell.edu/admission/apply/international/faq' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. If scores are submitted, the latest test date is November.', status: 'confirmed', source: 'https://www.vassar.edu/admission/apply/requirements/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Latest test date December.', status: 'confirmed', source: 'https://www.vassar.edu/admission/apply/requirements/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; latest test date December.', status: 'confirmed', source: 'https://www.vassar.edu/admission/apply/requirements/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 65, currency: 'USD', waiverAvailableToInternational: null, waiver: 'A fee waiver can be requested on the Common Application or the Coalition Application', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://offices.vassar.edu/institutional-research/wp-content/uploads/sites/23/2026/03/Vassar_College_CDS_2025-2026.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common or Coalition Application', 'School transcript and reports', 'Teacher recommendations', 'Financial aid forms for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay plus Vassar’s supplement',
    interview: null,
    notes: ['International students who want aid must apply for it at the same time as admission.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS Academic accepted (not General Training); no minimum score is published on the admissions page.' },
    toefl: { min: null, recommended: null, note: 'TOEFL iBT, PBT and iBT Home Edition accepted; TOEFL Essentials is not. No minimum is published on the admissions page.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; results must come directly from Duolingo at the time of application.' },
    waiver: 'Required only if English was not the primary language of instruction at your secondary school(s) for the last three years.',
    note: 'Results from the testing agency are strongly preferred; in cases of financial hardship Vassar accepts score-report PDFs from your school counsellor, but official results are required on enrolment.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Vassar has made its test-optional policy permanent: applicants choose whether to send SAT or ACT scores.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 76140, billed: 96960, includes: "tuition, housing, food and mandatory fees; health insurance and personal costs are extra" },
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
    { label: 'Tuition and fees', url: 'https://www.vassar.edu/admission/financial-aid/tuition/' },
    { label: 'Vassar makes test-optional policy permanent', url: 'https://www.vassar.edu/news/vassar-makes-test-optional-policy-permanent-applicants' },
    { label: 'Vassar College Common Data Set 2025–26 (section C13)', url: 'https://offices.vassar.edu/institutional-research/wp-content/uploads/sites/23/2026/03/Vassar_College_CDS_2025-2026.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 19 December.', status: 'confirmed', source: 'https://www.hamilton.edu/admission/apply/early-decision', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 15 February.', status: 'confirmed', source: 'https://www.hamilton.edu/admission/apply/early-decision', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; self-reported scores are accepted. Notification in late March.', status: 'confirmed', source: 'https://www.hamilton.edu/admission/apply', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 65, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.hamilton.edu/documents/CDS%202025-26%20Excel%20Final.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: {
      min: null,
      recommended: 7.5,
      note: 'Competitive applicants typically score at or above IELTS 7.5. Hamilton says this is not a specific score requirement.'
    },
    toefl: {
      min: null,
      recommended: null,
      scales: [
        { period: 'pre2026', min: null, recommended: 100 },
        { period: 'post2026', min: null, recommended: 5.0 }
      ],
      note: 'Levels competitive applicants typically reach: 100 for tests before January 2026, and 5.0 for tests from January 2026, where Hamilton recommends 5.5. The TOEFL Home Edition is accepted; MyBest scores are not.'
    },
    duolingo: { min: null, recommended: 130, note: 'Competitive applicants typically score at or above 130.' },
    waiver: 'Proficiency can instead be shown through study at a secondary school where English is the primary medium of instruction; a waiver can be requested on the applicant portal checklist.',
    note: 'Hamilton says it has no specific score requirement but lists these levels, which competitive applicants typically reach. Official scores are required — self-reported results do not count — and Hamilton does not grant fee waivers for proficiency exams.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Hamilton does not require the SAT or ACT. It encourages applicants with at least 1400 on the SAT or 32 on the ACT to submit scores, superscores both tests and accepts self-reported results.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 75210, billed: 95250, comprehensive: true, includes: "a comprehensive fee covering tuition, housing, food and the activity fee" },
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
    { label: 'Apply — application details', url: 'https://www.hamilton.edu/admission/apply/details' },
    { label: 'Testing policy', url: 'https://www.hamilton.edu/admission/apply/testing' },
    { label: 'Demonstrating English language proficiency', url: 'https://www.hamilton.edu/admission/apply/international/english-language-proficiency' },
    { label: 'Hamilton College Common Data Set 2025–26 (section C13)', url: 'https://www.hamilton.edu/documents/CDS%202025-26%20Excel%20Final.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 15 December.', status: 'confirmed', source: 'https://www.haverford.edu/admission/applying/application-timeline', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 15 February.', status: 'confirmed', source: 'https://www.haverford.edu/admission/applying/application-timeline', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-10', date: '10 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; any SAT or ACT scores should be sent before the deadline. Decisions in early April.', status: 'confirmed', source: 'https://www.haverford.edu/admission/applying/application-timeline', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 65, currency: 'USD', waiverAvailableToInternational: null, waiver: 'A school counsellor can request a fee waiver in a letter with the application', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.haverford.edu/sites/default/files/Office/President/CDS-2025-26.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: 7, recommended: null, note: 'IELTS Academic 7.0 minimum.' },
    toefl: { min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }, { period: 'post2026', min: 5, recommended: null }], note: 'TOEFL iBT minimum 100 on the 0–120 scale or 5 on the 1–6 scale; both scales are accepted for the 2026–27 cycle.' },
    duolingo: { min: 130, recommended: null, note: 'Duolingo English Test 130 minimum.' },
    waiver: 'Required only if your first language is not English and you have never attended a secondary school where English is the primary language of instruction.',
    note: 'Haverford has no preferred exam; results should come directly from the testing agency, and official scores must be sent on enrolment.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Haverford made test-optional admission permanent in 2022; self-reported or official scores are accepted, and enrolling students must send official scores.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 74930, billed: 96347, budget: 100026, includes: "tuition, fees, housing and food; the full budget adds books, personal expenses and extra meals" },
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
    { label: 'Cost of attendance', url: 'https://www.haverford.edu/financial-aid/cost-of-attendance' },
    { label: 'Application instructions', url: 'https://www.haverford.edu/admission/applying/application-instructions' },
    { label: 'Haverford College Common Data Set 2025–26 (section C13)', url: 'https://www.haverford.edu/sites/default/files/Office/President/CDS-2025-26.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Restrictive Early Action', kind: 'REA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding but restricted to first-choice applicants; all required materials and testing must be completed before 30 November. Decisions by mid-December; admitted students reply by 1 May 2027.', status: 'confirmed', source: 'https://www.admissions.caltech.edu/apply/first-year-applicants/deadlines', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'SAT or ACT is required. Notification in mid-March.', status: 'confirmed', source: 'https://www.admissions.caltech.edu/apply/first-year-applicants/deadlines', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Aid applicants for whom the $85 fee is a hardship can have it waived; QuestBridge applicants are never charged' },
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
    breakdown: { tuition: 68574, billed: 93225, budget: 98622, includes: "tuition, fees, housing and food; the full budget adds books and personal expenses (health insurance is extra)" },
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 15 December and enrolment by 1 February. Not available for the School of Drama, BXA Design programmes or the School of Music.', status: 'confirmed', source: 'https://www.cmu.edu/admission/admission/application-plans-deadlines', verified: '2026-10-01', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'The main round for most applicants; notification no later than 1 April, enrolment by 1 May.', status: 'confirmed', source: 'https://www.cmu.edu/admission/admission/application-plans-deadlines', verified: '2026-10-01', note: null },
      { name: 'Music and Drama applicants', kind: 'portfolio', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'Applicants to Music and Drama programmes', conditions: 'Earlier deadline so auditions can be scheduled.', status: 'confirmed', source: 'https://www.cmu.edu/admission/admission/application-plans-deadlines', verified: '2026-10-01', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: null },
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
    sat: { policy: 'required-alternatives', label: 'Depends on the college — required, test-flexible or test-optional', note: 'Carnegie Mellon sets the policy by college: the School of Computer Science requires the SAT or ACT, the College of Fine Arts is test-optional, and the other schools are test-flexible, meaning scores must be submitted but the applicant chooses which tests.' },
    act: { policy: 'required-alternatives', note: 'Accepted as one option; the School of Computer Science requires the SAT or ACT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 69702, billed: 89352, includes: "tuition, a standard double room and the first-year meal plan" },
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
    { label: '2026-2027 undergraduate tuition', url: 'https://www.cmu.edu/sfs/tuition/undergraduate/index.html' },
    { label: 'Standardized testing', url: 'https://www.cmu.edu/admission/admission/standardized-testing' }
  ],
  lastVerified: '2026-09-22'
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
    platforms: ['Georgetown Application', 'Common Application'],
    deadlines: [
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding, but Early Action applicants may not apply to another school\u2019s Early Decision I or II programme. The application, writing supplement and supporting credentials are due on this date. Decisions by 15 December; SAT or ACT scores are required.', status: 'confirmed', source: 'https://uadmissions.georgetown.edu/apply/first-year-applicants/', verified: '2026-09-30', note: "Georgetown's current first-year page (the application has been open since 1 August 2026) lists these dates without a year." },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'The application, writing supplement and supporting credentials are due on this date. Decisions by 1 April; SAT or ACT scores are required.', status: 'confirmed', source: 'https://uadmissions.georgetown.edu/apply/first-year-applicants/', verified: '2026-09-30', note: "Georgetown's current first-year page (the application has been open since 1 August 2026) lists these dates without a year." },
      { name: 'Application opens', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-08-01', date: '1 August 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'The Georgetown Application and the Common Application both open on this date.', status: 'confirmed', source: 'https://uadmissions.georgetown.edu/apply/first-year-applicants/', verified: '2026-09-30', note: null },
      { name: 'Financial aid application', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-02-01', date: '1 February 2027', binding: false, appliesTo: 'Applicants asking for financial aid', conditions: 'The same aid deadline applies to Early Action and Regular Decision applicants. CSS Profile (and the FAFSA for US citizens and permanent residents).', status: 'confirmed', source: 'https://uadmissions.georgetown.edu/apply/first-year-applicants/', verified: '2026-09-30', note: null },
      { name: 'Reply date for admitted students', kind: 'reply', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-05-01', date: '1 May 2027', binding: false, appliesTo: 'Admitted students', conditions: 'Early Action and Regular Decision admits both reply by this date.', status: 'confirmed', source: 'https://uadmissions.georgetown.edu/apply/first-year-applicants/', verified: '2026-09-30', note: null }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: true, waiver: 'Georgetown accepts fee waiver requests from any applicant, international applicants included, for whom the fee is a significant burden', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://georgetown.box.com/s/0r8akn4cbm52zjkll6i7uttlb9k36px2', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Georgetown Application or the Common Application', 'Georgetown Writing Supplement: two short and two long essays', 'Academic credentials for all four years of secondary school', 'SAT or ACT scores', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Two short and two long essays in the Georgetown Writing Supplement',
    interview: 'Alumni interviews are part of the process where available',
    notes: ['Georgetown accepts either its own Georgetown Application or the Common Application.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Recommended, not required; no minimum score is published for undergraduate admission.' },
    toefl: { min: null, recommended: null, note: 'Recommended, not required; no minimum published.' },
    duolingo: { min: null, recommended: null, note: 'Recommended, not required; no minimum published.' },
    waiver: 'Georgetown recommends, but does not require, an English test for students at schools where English is not the language of instruction.',
    note: 'Georgetown accepts the Duolingo English Test, IELTS and TOEFL (PBT, iBT and ITP Plus).'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Georgetown requires SAT or ACT scores and highly recommends AP scores.' },
    act: { policy: 'required', note: 'SAT or ACT required; the ACT Science section is highly recommended, especially for science majors.' },
    otherTests: 'AP exam scores are highly recommended.',
    internationalQualifications: 'Credentials in other languages need English translations accompanied by the originals.'
  },
  costs: {
    breakdown: { tuition: 74520, includes: "tuition and mandatory fees; housing and food are published separately" },
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
    { label: 'Announcing 2026-2027 tuition rates', url: 'https://www.georgetown.edu/news/announcing-fall-2026-spring-2027-tuition-rates-2/' },
    { label: 'International applicants', url: 'https://uadmissions.georgetown.edu/applying/international/' },
    { label: 'Georgetown University Common Data Set 2025–26 (section C13)', url: 'https://georgetown.box.com/s/0r8akn4cbm52zjkll6i7uttlb9k36px2' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision (most majors)', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants, except performing arts programmes', conditions: 'Binding: an ED agreement is required, and admitted students must enrol and withdraw other applications. Notification by mid-December. ED applicants are considered for USC merit scholarships. Financial aid deadline 1 November 2026.', status: 'confirmed', source: 'https://admission.usc.edu/prospective-students/first-year-students/', verified: '2026-10-01', note: null },
      { name: 'Early Action (most majors)', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants, except performing arts programmes', conditions: 'Non-binding and non-restrictive; notification in late January. EA applicants are considered for USC merit scholarships. Financial aid deadline 15 November 2026. World Bachelor in Business applicants must use the 1 November deadline.', status: 'confirmed', source: 'https://admission.usc.edu/prospective-students/first-year-students/', verified: '2026-10-01', note: null },
      { name: 'Regular Decision (performing arts majors)', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'Applicants to the Kaufman School of Dance, School of Dramatic Arts and Thornton School of Music', conditions: 'The only deadline for these schools; applicants are considered for USC merit scholarships. Notification by 1 April.', status: 'confirmed', source: 'https://admission.usc.edu/prospective-students/first-year-students/', verified: '2026-10-01', note: null },
      { name: 'Regular Decision (most majors)', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-10', date: '10 January 2027', binding: false, appliesTo: 'First-year applicants to majors without a 1 December deadline', conditions: 'Final first-year deadline; notification by 1 April. Financial aid deadline 3 February 2027.', status: 'confirmed', source: 'https://admission.usc.edu/prospective-students/first-year-students/', verified: '2026-10-01', note: null }
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://oir.usc.edu/wp-content/uploads/sites/3/2026/10/CDS_2025-26_FINAL.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    breakdown: { tuition: 75384, includes: "tuition for two semesters; fees, insurance, housing and living costs are extra" },
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
    { label: 'Cost of attendance', url: 'https://financialaid.usc.edu/undergraduate-financial-aid/cost-of-attendance/' },
    { label: 'University of Southern California Common Data Set 2025–26 (section C13)', url: 'https://oir.usc.edu/wp-content/uploads/sites/3/2026/10/CDS_2025-26_FINAL.pdf' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. The application and the aid forms (CSS Profile and FAFSA) share this date; decision 15 December.', status: 'confirmed', source: 'https://www.bu.edu/admissions/apply/deadlines/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decision 9 February.', status: 'confirmed', source: 'https://www.bu.edu/admissions/apply/deadlines/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decision 28 March; enrolment deposit 1 May.', status: 'confirmed', source: 'https://www.bu.edu/admissions/apply/deadlines/', verified: '2026-09-23', note: null },
      { name: 'Merit scholarship consideration', kind: 'scholarship', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'Applicants for certain BU merit scholarships', conditions: 'Some merit scholarships require submission by this date.', status: 'confirmed', source: 'https://www.bu.edu/admissions/apply/deadlines/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 80, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.bu.edu/asir/files/2026/07/CDS-2025-2026-C-updated.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus BU’s supplement',
    interview: null,
    notes: ['BU’s full Early Decision and Regular Decision dates are on its deadlines page; only the 1 December merit deadline was confirmed here.']
  },
  english: {
    ielts: { min: 7, recommended: null, note: 'IELTS Academic 7 or higher satisfies BU’s English requirement for all programmes.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'post2026', min: null, recommended: 5 }], note: 'The most competitive applicants have 5.0 or higher on TOEFL iBT reports from 21 January 2026.' },
    duolingo: { min: null, recommended: 125, note: 'The most competitive applicants score at least 125–135.' },
    waiver: null,
    note: 'Applicants whose first language is not English must take the TOEFL iBT, IELTS or Duolingo English Test; BU looks closely at each section score and at consistency across sub-scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Boston University states that it is test-optional for first-year applicants through the fall 2028 and spring 2029 intakes, across all of its undergraduate schools and colleges and all scholarship programmes.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 73024, billed: 95334, budget: 98419, includes: "tuition, housing, food and fees; the full budget adds books, personal expenses and local transport" },
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
    { label: 'Merit scholarships for first-year students', url: 'https://www.bu.edu/admissions/tuition-aid/scholarships-financial-aid/first-year-merit/' },
    { label: 'BU’s standardized test policy', url: 'https://www.bu.edu/admissions/apply/first-year/test-policy/' },
    { label: 'International applicants', url: 'https://www.bu.edu/admissions/apply/international/' },
    { label: 'Boston University Common Data Set 2025–26 (section C13)', url: 'https://www.bu.edu/asir/files/2026/07/CDS-2025-2026-C-updated.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 15 December. Any tests should be taken by the October sitting.', status: 'confirmed', source: 'https://www.bc.edu/bc-web/admission/apply.html', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 15 February.', status: 'confirmed', source: 'https://www.bc.edu/bc-web/admission/apply.html', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-04', date: '4 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Notification by 1 April; any tests should be taken by December.', status: 'confirmed', source: 'https://www.bc.edu/bc-web/admission/apply.html', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 85, currency: 'USD', waiverAvailableToInternational: false, waiver: 'Fee waivers through the Common Application are for US citizens and permanent residents' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'English proficiency score for international applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Common Application essay plus Boston College’s supplement',
    interview: null,
    notes: ['Students at national schools in China may submit an InitialView interview instead, due 15 November (ED I) or 15 January (ED II and Regular Decision).']
  },
  english: {
    ielts: { min: null, recommended: 7.5, note: 'Boston College recommends a minimum IELTS of 7.5.' },
    toefl: { min: null, recommended: 5, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Recommended minimum 100, or 5.0 on the new scale; admitted students typically average 5.5 on the new scale. MyBest scores are not considered.' },
    duolingo: { min: null, recommended: 130, note: 'Boston College recommends a minimum Duolingo score of 130.' },
    waiver: 'Waived after at least three years at a US high school, or in another majority native-English-speaking country, in a traditional curriculum without ESOL coursework.',
    note: 'Non-US citizens must submit the TOEFL iBT (test centre or Home Edition), IELTS or Duolingo English Test; English exams are not superscored. An InitialView interview is encouraged but does not replace the test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Boston College is test-optional: applicants who do not send scores receive full consideration, though the college encourages students who have taken the SAT or ACT to submit them and accepts self-reported scores.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 75070, budget: 95258, includes: "tuition plus housing, food, fees and other costs in the published cost of attendance" },
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
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. CSS Profile and FAFSA due the same day; decision by 15 December.', status: 'confirmed', source: 'https://www.brandeis.edu/admissions/apply/dates.html', verified: '2026-10-01', note: null },
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-02', date: '2 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. CSS Profile and FAFSA due the same day; decision by 1 February.', status: 'confirmed', source: 'https://www.brandeis.edu/admissions/apply/dates.html', verified: '2026-10-01', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. CSS Profile and FAFSA due the same day; decision by 15 February.', status: 'confirmed', source: 'https://www.brandeis.edu/admissions/apply/dates.html', verified: '2026-10-01', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional. CSS Profile and FAFSA due the same day; decision by 1 April.', status: 'confirmed', source: 'https://www.brandeis.edu/admissions/apply/dates.html', verified: '2026-10-01', note: 'Brandeis’s current dates table lists these deadlines without a year.' }
    ],
    applicationFee: { amount: 80, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.brandeis.edu/institutional-research/docs/cds-2025-26.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: 7, note: 'Brandeis recommends IELTS 7.0 or higher (not a strict minimum).' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }], note: 'Brandeis recommends a TOEFL iBT score of at least 100.' },
    duolingo: { min: null, recommended: 130, note: 'Brandeis recommends at least 130.' },
    waiver: 'Exempt after four or more years at a high school with a full English curriculum, or when applying directly from a United World College campus.',
    note: 'International students whose native language is not English should submit the TOEFL, IELTS or Duolingo English Test; English scores must be official when the application is submitted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Brandeis has been test-optional since 2013: applicants say on the Common Application whether they want SAT or ACT scores considered, and are considered for merit scholarships either way.' },
    act: { policy: 'optional', note: 'Same as the SAT; the new ACT science section is not required.' },
    otherTests: null,
    internationalQualifications: 'Documents in other languages need certified translations from a consulate, embassy or school official.'
  },
  costs: {
    breakdown: { tuition: 73080, billed: 94388, includes: 'tuition, required fees and on-campus food and housing; books, travel, personal expenses and health insurance are extra', published: true },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$73,080 tuition · $94,388 with required fees, food and housing',
    items: [
      { label: 'Tuition', amount: 73080 },
      { label: 'Required fees', amount: 1048 },
      { label: 'Food and housing (on campus)', amount: 20260 }
    ],
    billedSubtotal: 94388,
    totalText: '$94,388 for tuition, required fees and on-campus food and housing',
    note: 'From section G1 of the 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. First-year figures; the required fees for continuing undergraduates are $598 and food and housing $21,880.',
    source: 'https://www.brandeis.edu/institutional-research/docs/cds-2025-26.pdf',
    verified: '2026-10-05',
    studentCategory: 'Full-time first-year undergraduates living on campus'
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
    { label: 'Wien International Scholarship Program', url: 'https://www.brandeis.edu/isso/programs/wien/index.html' },
    { label: 'Test-optional policy', url: 'https://www.brandeis.edu/admissions/apply/test-optional-policy.html' },
    { label: 'International applicants', url: 'https://www.brandeis.edu/admissions/apply/international.html' },
    { label: 'Brandeis University Common Data Set 2025–26 (section C13)', url: 'https://www.brandeis.edu/institutional-research/docs/cds-2025-26.pdf' }
  ],
  lastVerified: '2026-09-22'
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
    deadlines: [
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. Financial aid documents by 15 November; notification 19 December; enrolment decision by 1 May.', status: 'confirmed', source: 'https://case.edu/admission/apply/dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Financial aid documents by 15 November; notification 5 December; enrolment by 12 December.', status: 'confirmed', source: 'https://case.edu/admission/apply/dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Financial aid documents by 22 January; notification 6 February; enrolment one week after admission.', status: 'confirmed', source: 'https://case.edu/admission/apply/dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Financial aid documents by 1 February; notification 20 March; enrolment by 1 May.', status: 'confirmed', source: 'https://case.edu/admission/apply/dates-deadlines', verified: '2026-09-23', note: null },
      { name: 'Pre-Professional Scholars Program', kind: 'scholarship', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'Applicants to the Pre-Professional Scholars Program', conditions: 'Separate programme deadline; notification 30 January.', status: 'confirmed', source: 'https://case.edu/admission/apply/dates-deadlines', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://case.edu/ir/sites/default/files/2026-02/CDS%202025-26%20Adjusted%20Final.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    sat: { policy: 'optional', note: 'No testing is required for any CWRU undergraduate programme, the Pre-Professional Scholars Program or any scholarship or aid programme. Applicants can switch their choice until two weeks before decisions are released.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted; records and recommendations need English translations.'
  },
  costs: {
    breakdown: { tuition: 71410, billed: 93435, includes: "tuition, housing, the unlimited meal plan and required fees" },
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
    { label: 'Estimated costs of attendance 2026-27', url: 'https://case.edu/financialaid/undergraduates/estimated-costs-attendance-2026-27' },
    { label: 'Test policy', url: 'https://case.edu/admission/apply/application-requirements-enhancements/test-optional' },
    { label: 'Case Western Reserve University Common Data Set 2025–26 (section C13)', url: 'https://case.edu/ir/sites/default/files/2026-02/CDS%202025-26%20Adjusted%20Final.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification in mid-December.', status: 'confirmed', source: 'https://admissions.rochester.edu/applying/dates-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification in early February.', status: 'confirmed', source: 'https://admissions.rochester.edu/applying/dates-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; Rochester states that omitting scores does not affect review or scholarship consideration.', status: 'confirmed', source: 'https://admissions.rochester.edu/applying/dates-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Financial aid documents — Early Decision I', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'ED I applicants asking for aid', status: 'confirmed', source: 'https://admissions.rochester.edu/applying/dates-and-deadlines/', verified: '2026-09-23', note: null },
      { name: 'Financial aid documents — Early Decision II', kind: 'aid', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'ED II applicants asking for aid', status: 'confirmed', source: 'https://admissions.rochester.edu/applying/dates-and-deadlines/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 50, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Application Fee Waiver Request Form for applicants facing hardship' },
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
    ielts: { min: null, recommended: 7.5, note: 'Recommended IELTS score: 7.5.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Recommended: 100 on the former scale or 5 on the scale used from 21 January 2026. MyBest scores are not accepted.' },
    duolingo: { min: null, recommended: 130, note: 'Recommended Duolingo English Test score: 130.' },
    waiver: 'A waiver can be requested by native English speakers or those with at least three years at a high school taught mainly in English.',
    note: 'Scores must be official. Rochester does not superscore or combine sub-scores from different sittings. Applicants below these ranges are still encouraged to apply and may be admitted through the two-semester English for Academic Purposes Program.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Rochester is test-optional; self-reported scores are accepted, and admitted students who enrol send official reports.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 71750, billed: 93076, includes: "tuition, housing and food" },
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
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Decision by 15 December; deposit by 15 January.', status: 'confirmed', source: 'https://admission.tulane.edu/apply/deadlines-forms', verified: '2026-09-23', note: null },
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-10', date: '10 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. Decision by 10 January; deposit by 1 May.', status: 'confirmed', source: 'https://admission.tulane.edu/apply/deadlines-forms', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Decision by 1 April; deposit by 1 May.', status: 'confirmed', source: 'https://admission.tulane.edu/apply/deadlines-forms', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decision by 15 February; deposit by 1 March.', status: 'confirmed', source: 'https://admission.tulane.edu/apply/deadlines-forms', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'The 2025–26 Common Data Set (section C13) says there is no application fee.', source: 'https://tulane.box.com/s/1dgaxpa2x2ie24zgglrg0puwm1h7xrt5', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: 6.5, note: 'Successful applicants typically score IELTS 6.5 or higher.' },
    toefl: { min: null, recommended: 95, scales: [{ period: 'pre2026', min: null, recommended: 95 }], note: 'Successful applicants typically score 95 or higher.' },
    duolingo: { min: null, recommended: 130, note: 'Successful applicants typically score 130 or higher.' },
    waiver: 'Required only for applicants who are not native English speakers.',
    note: 'Tulane requires TOEFL, IELTS, Duolingo English Test or Cambridge C1/C2 results from non-native speakers; these are typical scores of successful applicants, not minimums.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', label: 'Test-optional, but scores are preferred for merit scholarships', note: 'Tulane states that SAT and ACT scores remain optional for fall 2027 first-year admission, but that test results — or AP, IB or Cambridge A-level results — are a preferred credential for applicants seeking academic merit scholarships.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 70622, billed: 95674, includes: "tuition, fees, housing and dining; health insurance is charged on top" },
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
    { label: 'Merit scholarships', url: 'https://admission.tulane.edu/tuition-aid/merit-scholarships' },
    { label: 'Standardized tests', url: 'https://admission.tulane.edu/apply/instructions/standardized-tests' },
    { label: 'Tulane University Common Data Set 2025–26 (section C13)', url: 'https://tulane.box.com/s/1dgaxpa2x2ie24zgglrg0puwm1h7xrt5' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions in mid-December.', status: 'confirmed', source: 'https://www.smith.edu/admission-aid/apply-smith/first-year-applicants', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions in late January.', status: 'confirmed', source: 'https://www.smith.edu/admission-aid/apply-smith/first-year-applicants', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; the midyear school report is due 15 February and decisions come in late March.', status: 'confirmed', source: 'https://www.smith.edu/admission-aid/apply-smith/first-year-applicants', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'There is no application fee' },
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
    ielts: { min: null, recommended: null, note: 'Accepted; no minimum score published.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum score published.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum score published.' },
    waiver: 'Exempt after all of secondary school in English, at least two years of English instruction at a US school, or an IB Diploma or A-level curriculum taught in English.',
    note: 'International citizens whose primary language is not English, or who have not attended an English-medium school, submit the TOEFL, IELTS, PTE or Duolingo English Test. Smith bases the requirement on citizenship rather than school location.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Smith has been test-optional since 2009.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International applicants may be asked for national or international exam results.'
  },
  costs: {
    breakdown: { tuition: 70460, billed: 95288, includes: 'tuition, required fees and on-campus food and housing; books, travel, personal expenses and health insurance are extra', published: true },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$70,460 tuition · $95,288 with required fees, food and housing',
    items: [
      { label: 'Tuition', amount: 70460 },
      { label: 'Required fees', amount: 308 },
      { label: 'Food and housing (on campus)', amount: 24520 }
    ],
    billedSubtotal: 95288,
    totalText: '$95,288 for tuition, required fees and on-campus food and housing',
    note: 'From section G1 of the 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. Smith meets full need with a loan-free package, so the sticker price matters less for aid recipients.',
    source: 'https://drive.google.com/file/d/1qDhlH43IbOCQzP6xtUHMzTmgEss1I-68/view',
    verified: '2026-10-05',
    studentCategory: 'Full-time first-year undergraduates living on campus'
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
    { label: 'First-year applicants', url: 'https://www.smith.edu/admission-aid/apply-smith/first-year-applicants' },
    { label: 'Smith College Common Data Set 2025–26 (section G1)', url: 'https://drive.google.com/file/d/1qDhlH43IbOCQzP6xtUHMzTmgEss1I-68/view' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification in late December.', status: 'confirmed', source: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-deadlines-undergraduates', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification in late January.', status: 'confirmed', source: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-deadlines-undergraduates', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Notification in mid-March.', status: 'confirmed', source: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-deadlines-undergraduates', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'There is no application fee for any option' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['International students who do not apply for aid when they apply for admission are never eligible for need-based aid at Mount Holyoke.']
  },
  english: {
    ielts: {
      min: null,
      recommended: null,
      note: 'No minimum score. The college lists an average of over 7.0. Mount Holyoke lists this as an average score without saying which students or which year it describes, so UniPath does not show it as a statistic.'
    },
    toefl: {
      min: null,
      recommended: null,
      scales: [],
      note: 'No minimum score. The college lists an average of 100, or 5.5 for tests taken on or after 21 January 2026. Mount Holyoke lists this as an average score without saying which students or which year it describes, so UniPath does not show it as a statistic.'
    },
    duolingo: {
      min: null,
      recommended: null,
      note: 'No minimum score. The college lists an average of over 130. Mount Holyoke lists this as an average score without saying which students or which year it describes, so UniPath does not show it as a statistic.'
    },
    waiver: 'Required from non-native English speakers.',
    note: 'Mount Holyoke has no minimum score except for Cambridge English (185 for C1 Advanced or C2 Proficiency); the figures shown are average scores. Scores reported inside the Common or Coalition App do not count — upload a PDF to the applicant portal; enrolling students send official results.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', label: 'Test-optional, except for some home-schooled applicants', note: 'Mount Holyoke is test-optional, but requires the SAT or ACT from home-schooled applicants who followed a self-study or online curriculum exclusively; that requirement can be waived individually for applicants with AP exams or college-level coursework.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 71178, billed: 92774, comprehensive: true, budget: 93046, includes: "a comprehensive fee covering tuition, housing and food" },
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
    { label: 'Application deadlines for undergraduates', url: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-deadlines-undergraduates' },
    { label: 'English proficiency requirements', url: 'https://www.mtholyoke.edu/admission/apply-undergraduate-first-year/application-process/international-admission/english-proficiency-requirements' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decision in late December.', status: 'confirmed', source: 'https://www.brynmawr.edu/admissions-aid/apply', verified: '2026-10-06', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decision in mid-February.', status: 'confirmed', source: 'https://www.brynmawr.edu/admissions-aid/apply', verified: '2026-10-06', note: 'Bryn Mawr’s Apply page lists the date for the current cycle without the year. The older admission-plans page returned “access denied” on 6 October 2026.' },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decision in mid-March.', status: 'confirmed', source: 'https://www.brynmawr.edu/admissions-aid/apply', verified: '2026-10-06', note: 'Bryn Mawr’s Apply page lists the date for the current cycle without the year. The older admission-plans page returned “access denied” on 6 October 2026.' },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'The 2025–26 Common Data Set (section C13) says there is no application fee.', source: 'https://www.brynmawr.edu/sites/default/files/media/documents/2026-04/CDS%202025-26%20Bryn%20Mawr%20Read%20Only.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: 7, recommended: null, note: 'IELTS 7 is the minimum score required for consideration.' },
    toefl: { min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }], note: 'TOEFL 100 is the minimum score required for consideration.' },
    duolingo: { min: 130, recommended: null, note: 'Duolingo 130 is the minimum score required for consideration.' },
    waiver: 'A waiver can be requested by native English speakers or those whose full academic instruction (all classes except second languages, grades 9–12) was in English; bilingual programmes and dual curricula do not qualify.',
    note: 'International students must show English proficiency through an approved waiver or official TOEFL, IELTS or Duolingo results. Bryn Mawr strongly recommends a demonstration of English even for those eligible for a waiver, and prefers candidates who send recorded Duolingo or InitialView interviews.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Bryn Mawr’s admissions policies state it is test-optional; scores that are sent are used only for advising and placement. The policy does not cover English proficiency tests.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'National exams such as the IB and A-Levels are submitted with the transcript.'
  },
  costs: {
    breakdown: { tuition: 71290, billed: 94291, budget: 97547, includes: "tuition, housing, food and college fees; the full budget adds books and miscellaneous expenses" },
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
    { label: 'Apply for aid: international first-year applicants', url: 'https://www.brynmawr.edu/admissions-aid/financial-aid/international-first-year-applicants' },
    { label: 'Admissions policies', url: 'https://www.brynmawr.edu/admissions-aid/policies-resources/admissions-policies' },
    { label: 'Bryn Mawr College Common Data Set 2025–26 (section C13)', url: 'https://www.brynmawr.edu/sites/default/files/media/documents/2026-04/CDS%202025-26%20Bryn%20Mawr%20Read%20Only.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding: admitted students must enrol and withdraw other applications. Notification in mid-December. Barnard is test-optional through 2027.', status: 'confirmed', source: 'https://barnard.edu/admissions/application-rounds', verified: '2026-10-01', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Notification in late March; admitted applicants reply by the national reply date of 1 May.', status: 'confirmed', source: 'https://barnard.edu/admissions/application-rounds', verified: '2026-10-01', note: 'Barnard’s application-rounds page gives the dates with the year; its application-process page still showed the previous cycle.' }
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://barnard.edu/sites/default/files/2026-09/Barnard_CDS_2025-2026.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: 7.5, note: 'The most competitive candidates generally score IELTS 7.5 or higher.' },
    toefl: { min: null, recommended: 105, scales: [{ period: 'pre2026', min: null, recommended: 105 }, { period: 'post2026', min: null, recommended: 5.5 }], note: 'The most competitive candidates generally score 105 or higher, or 5.5 or higher for tests taken on or after 20 January 2026. TOEFL Essentials and MyBest scores are not accepted.' },
    duolingo: { min: null, recommended: 135, note: 'The most competitive candidates generally score 135 or higher.' },
    waiver: 'Waived for students taught in English throughout secondary school, those in an IB Diploma or A-level curriculum taught in English, or with SAT Evidence-Based Reading and Writing 700+ or ACT English or Reading 29+.',
    note: 'Barnard may require the TOEFL, IELTS or Duolingo English Test; scores are valid for two years and expired scores are not considered.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Barnard is SAT and ACT test-optional for students applying in the 2027 first-year cycle; applying without scores is not a disadvantage. The policy will be revisited.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Transcripts and national exam results are required.'
  },
  costs: {
    breakdown: { tuition: 73120, billed: 98850, includes: "tuition, fees, housing and meals; books, travel and personal expenses are extra" },
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
    { label: 'Apply for aid', url: 'https://barnard.edu/finaid/apply-for-aid' },
    { label: 'Standardized testing', url: 'https://barnard.edu/admissions/testing' },
    { label: 'Barnard College Common Data Set 2025–26 (section C13)', url: 'https://barnard.edu/sites/default/files/2026-09/Barnard_CDS_2025-2026.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification by 20 December.', status: 'confirmed', source: 'https://www.bates.edu/admission/apply/application-options/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-10', date: '10 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; mid-year transcript due by 1 February.', status: 'confirmed', source: 'https://www.bates.edu/admission/apply/application-options/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-10', date: '10 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding; mid-year transcript due by 15 February. Bates has been test-optional since 1984.', status: 'confirmed', source: 'https://www.bates.edu/admission/apply/application-options/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'It is free for any student to apply to Bates' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Official English proficiency score where required', 'Bates International Student Application for Financial Aid (BISAFA) for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: 'InitialView or Vericant interviews are encouraged but not required',
    notes: ['Bates does not accept appeals from international students who try to apply for aid after being admitted, without exception.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'All versions accepted; no minimum score published.' },
    toefl: { min: null, recommended: null, note: 'All versions accepted; no minimum score published.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum score published.' },
    waiver: 'Required only if English is neither your native language nor the primary language of your secondary school instruction.',
    note: 'Bates requires official scores — self-reported English results are not accepted — and considers your best score. It accepts InitialView or Vericant interviews, but not the interview inside the Duolingo English Test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Submitting the SAT or ACT has been optional at Bates since 1984; official and self-reported scores are accepted.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { billed: 94560, comprehensive: true, includes: "a single comprehensive fee covering tuition, room, board and fees" },
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
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Financial aid deadline the same day; notification in mid-December.', status: 'confirmed', source: 'https://www.wesleyan.edu/admission/application-process.html', verified: '2026-10-01', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Financial aid deadline the same day; notification in mid-February.', status: 'confirmed', source: 'https://www.wesleyan.edu/admission/application-process.html', verified: '2026-10-01', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional: scores are considered if sent and ignored if not. Financial aid deadline the same day; notification in late March.', status: 'confirmed', source: 'https://www.wesleyan.edu/admission/application-process.html', verified: '2026-10-01', note: null },
    ],
    applicationFee: { amount: 65, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.wesleyan.edu/ir/common-data-sets.html', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    breakdown: { tuition: 75916, billed: 98330, includes: "tuition, the residential comprehensive fee, the activity and Green Fund fees and the matriculation fee" },
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
    { label: 'Cost of attendance', url: 'https://www.wesleyan.edu/admission/affordability-and-aid/cost-of-attendance.html' },
    { label: 'Wesleyan University Common Data Set 2025–26 (section C13)', url: 'https://www.wesleyan.edu/ir/common-data-sets.html' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', time: '23:59', timezone: 'applicant’s local time', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Supplemental materials due 15 November; notification 20 December.', status: 'confirmed', source: 'https://www.wlu.edu/admissions/apply', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', time: '23:59', timezone: 'applicant’s local time', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Supplemental materials due 15 January; notification 1 February.', status: 'confirmed', source: 'https://www.wlu.edu/admissions/apply', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', time: '23:59', timezone: 'applicant’s local time', binding: false, appliesTo: 'First-year applicants', conditions: 'Supplemental materials due 1 February; notification 1 April.', status: 'confirmed', source: 'https://www.wlu.edu/admissions/apply', verified: '2026-09-23', note: null },
      { name: 'Johnson Scholarship essay', kind: 'scholarship', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', time: '23:59', timezone: 'applicant’s local time', binding: false, appliesTo: 'Applicants for the Johnson Scholarship', conditions: 'W&L’s main merit award: full tuition, housing and meals for up to 10% of the entering class, plus $10,000 for a summer experience or study abroad. Supporting materials should arrive by 15 December.', status: 'confirmed', source: 'https://www.wlu.edu/admissions/apply', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 60, currency: 'USD', waiverAvailableToInternational: null, waiver: 'Some applicants qualify to have the Common or Coalition Application fee waived', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://my.wlu.edu/document/2025-common-data-set', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: 7, note: 'Successful applicants typically report IELTS 7 or above.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Successful applicants typically report 100 (before January 2026) or 5 (after January 2026).' },
    duolingo: { min: null, recommended: 130, note: 'Successful applicants typically report 130 or above; only official Duolingo results are accepted.' },
    waiver: 'English can also be shown by completing all of secondary school in English or an IB English A course with a score of 6 or 7; an InitialView interview is another option.',
    note: 'All applicants must demonstrate English proficiency through one or more of the listed methods; W&L considers scores in context as part of a holistic review.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'SAT or ACT scores are not required in the 2026–27 cycle. W&L suggests that students completing national curricula outside the US strongly consider sending scores if testing is reasonably available to them.' },
    act: { policy: 'optional', note: 'Same as the SAT; the ACT writing and science sections are not required.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 73575, billed: 95435, budget: 99880, includes: "tuition, fees, housing and food; the full budget adds books and personal expenses (health insurance and travel are extra)" },
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
    { label: 'Apply to W&L', url: 'https://www.wlu.edu/admissions/apply' },
    { label: 'Test-optional admissions policy', url: 'https://www.wlu.edu/admissions/apply/test-optional-policy' },
    { label: 'English proficiency policy', url: 'https://www.wlu.edu/admissions/apply/for-international-applicants/english-proficiency-policy' },
    { label: 'Washington and Lee University Common Data Set 2025–26 (section C13)', url: 'https://my.wlu.edu/document/2025-common-data-set' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www.colgate.edu/admission-aid/apply', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www.colgate.edu/admission-aid/apply', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; Colgate states applicants are at no disadvantage without scores.', status: 'confirmed', source: 'https://www.colgate.edu/admission-aid/apply', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 60, currency: 'USD', waiverAvailableToInternational: true, waiver: 'Colgate offers fee-free applications to international students.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://www.colgate.edu/sites/default/files/2026-07/CDS-PDF-2025-2026.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    ielts: { min: null, recommended: null, note: 'Required where applicable; no minimum score published.' },
    toefl: { min: null, recommended: null, note: 'Required where applicable; no minimum score published (TOEFL code 2086).' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum score published.' },
    waiver: 'Required from non-native English speakers who do not study at a secondary school where English is the primary language of instruction.',
    note: 'Colgate requires official TOEFL, IELTS or Duolingo scores in those cases and encourages InitialView or Vericant interviews.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Colgate extended its test-optional policy through the 2026–27 application season; applicants are at no disadvantage without scores.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: 'National and international exam results are part of the application.',
    internationalQualifications: 'Colgate defines international applicants as non-US citizens, whatever their residence.'
  },
  costs: {
    breakdown: { tuition: 73206, billed: 92838, includes: 'tuition, required fees and on-campus food and housing; books, travel, personal expenses and health insurance are extra', published: true },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$73,206 tuition · $92,838 with required fees, food and housing',
    items: [
      { label: 'Tuition', amount: 73206 },
      { label: 'Required fees', amount: 440 },
      { label: 'Food and housing (on campus)', amount: 19192 },
      { label: 'Books and supplies', amount: 1570 },
      { label: 'Transportation', amount: 800 },
      { label: 'Other expenses', amount: 1148 }
    ],
    billedSubtotal: 92838,
    totalText: '$92,838 for tuition, required fees and on-campus food and housing',
    note: 'From section G1 of the 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. Colgate says it has generally not included loans in international students’ aid packages.',
    source: 'https://www.colgate.edu/sites/default/files/2026-07/CDS-PDF-2025-2026.pdf',
    verified: '2026-10-05',
    studentCategory: 'Full-time first-year undergraduates living on campus'
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
    { label: 'Apply for aid', url: 'https://www.colgate.edu/admission-aid/financial-aid/apply-aid' },
    { label: 'Colgate to remain test optional through 2026', url: 'https://www.colgate.edu/news/stories/colgate-remain-test-optional-through-2026' },
    { label: 'Colgate University Common Data Set 2025–26 (section C13)', url: 'https://www.colgate.edu/sites/default/files/2026-07/CDS-PDF-2025-2026.pdf' }
  ],
  lastVerified: '2026-09-22'
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
    deadlines: [
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions by 15 December and enrolment deposit by 15 January. If scores are sent, they must arrive by 20 November.', status: 'confirmed', source: 'https://www.carleton.edu/admissions/apply/steps/materials/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions by 15 February and deposit by 1 March. Scores, if sent, by 20 January.', status: 'confirmed', source: 'https://www.carleton.edu/admissions/apply/steps/materials/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Carleton adopted a permanent test-optional policy in 2025; notification by 1 April.', status: 'confirmed', source: 'https://www.carleton.edu/admissions/apply/steps/materials/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'The 2025–26 Common Data Set (section C13) says there is no application fee.', source: 'https://carleton-wp-production.s3.amazonaws.com/uploads/sites/292/2026/06/CDS-PDF-2025-2026_PDF_Carleton_06242026.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    sat: { policy: 'optional', note: 'Carleton adopted a permanent test-optional policy in 2025 after a five-year pilot. Scores may be self-reported; enrolling students send official reports.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'Documents not originally in English need an official translation.'
  },
  costs: {
    breakdown: { budget: 99580, includes: "tuition, housing, food, fees, books, personal expenses, travel, health insurance and expenses over breaks" },
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
    { label: 'International students — financial aid', url: 'https://www.carleton.edu/financial-aid/apply-for-aid/international-students/' },
    { label: 'Carleton implements test-optional policy', url: 'https://www.carleton.edu/news/stories/test-optional-policy-college-admissions-pilot-analysis/' },
    { label: 'Carleton College Common Data Set 2025–26 (section C13)', url: 'https://carleton-wp-production.s3.amazonaws.com/uploads/sites/292/2026/06/CDS-PDF-2025-2026_PDF_Carleton_06242026.pdf' }
  ],
  lastVerified: '2026-09-22'
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www.macalester.edu/admissions/deadlines/', verified: '2026-09-23', note: null },
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. Priority date for financial aid 9 November; decisions on 19 December; reply by 1 May.', status: 'confirmed', source: 'https://www.macalester.edu/admissions/deadlines/', verified: '2026-10-01', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www.macalester.edu/admissions/deadlines/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions released in March.', status: 'confirmed', source: 'https://www.macalester.edu/admissions/deadlines/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'The 2025–26 Common Data Set (section C13) says there is no application fee.', source: 'https://www.macalester.edu/institutional-research/wp-content/uploads/sites/515/CDS_2025-2026_Macalester-College_completed-1.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'Proof of funding', 'High school transcript', 'Two recommendation letters', 'Senior year grades'],
    recommendations: 'Two recommendation letters',
    essay: 'Personal essay',
    interview: 'Optional',
    notes: ['SAT/ACT, English proficiency results, interviews and an art portfolio are listed as optional items for international applicants.']
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'Students with IELTS 7.0 or higher are the most successful in the classroom (not a minimum).' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Most successful: 5.0 or higher for tests after January 2026, or 100 or higher before. MyBest scores are not considered.' },
    duolingo: { min: null, recommended: 130, note: 'Most successful: 130 or higher.' },
    waiver: 'English testing is optional; proof of English is recommended for applicants whose first language is not English and who have spent fewer than two years in an English-taught curriculum.',
    note: 'Macalester has no minimum score; these are the levels at which admitted students do best. TOEFL Essentials, InitialView and Vericant are also accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'The ACT or SAT is listed as an optional item for international first-year applicants.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 70632, billed: 87338, includes: 'tuition, required fees and on-campus food and housing; books, travel, personal expenses and health insurance are extra', published: true },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$70,632 tuition · $87,338 with required fees, food and housing',
    items: [
      { label: 'Tuition', amount: 70632 },
      { label: 'Required fees', amount: 230 },
      { label: 'Food and housing (on campus)', amount: 16476 }
    ],
    billedSubtotal: 87338,
    totalText: '$87,338 for tuition, required fees and on-campus food and housing',
    note: 'From section G1 of the 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. Macalester states that tuition includes required course materials. International students must show family resources that meet the I-20 cost of attendance, which adds estimated personal costs.',
    source: 'https://www.macalester.edu/institutional-research/wp-content/uploads/sites/515/CDS_2025-2026_Macalester-College_completed-1.pdf',
    verified: '2026-10-05',
    studentCategory: 'Full-time first-year undergraduates living on campus'
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
    { label: 'Financial aid and tuition', url: 'https://www.macalester.edu/admissions/financial-aid/' },
    { label: 'Macalester College Common Data Set 2025–26 (section C13)', url: 'https://www.macalester.edu/institutional-research/wp-content/uploads/sites/515/CDS_2025-2026_Macalester-College_completed-1.pdf' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants to the College of Arts and Sciences', conditions: 'Binding. The financial aid deadline is the same day. Notification by mid-December; reply due 2 January.', status: 'confirmed', source: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants', verified: '2026-09-30', note: "Oberlin's current first-year page (which already reports the Fall 2026 international admit rate) lists these dates without a year." },
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants to the College of Arts and Sciences only', conditions: 'Not binding. The financial aid deadline is the same day. Notification by mid-January; reply due 1 May.', status: 'confirmed', source: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants', verified: '2026-09-30', note: "Oberlin's current first-year page (which already reports the Fall 2026 international admit rate) lists these dates without a year." },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants to the College of Arts and Sciences', conditions: 'Binding. The financial aid deadline is the same day. Notification by 1 February; reply due 15 February.', status: 'confirmed', source: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants', verified: '2026-09-30', note: "Oberlin's current first-year page (which already reports the Fall 2026 international admit rate) lists these dates without a year." },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants to the College of Arts and Sciences', conditions: 'The financial aid deadline is the same day. Notification by 1 April; reply due 1 May.', status: 'confirmed', source: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/first-year-applicants', verified: '2026-09-30', note: "Oberlin's current first-year page (which already reports the Fall 2026 international admit rate) lists these dates without a year." },
      { name: 'Conservatory of Music application', kind: 'portfolio', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-12-01', date: '1 December 2026', binding: false, appliesTo: 'Applicants to the Conservatory of Music', conditions: 'Separate, earlier deadline for Conservatory applicants because of auditions.', status: 'confirmed', source: 'https://www.oberlin.edu/admissions-and-aid/conservatory/undergraduate-applicants', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'The 2025–26 Common Data Set (section C13) says there is no application fee.', source: 'https://www.oberlin.edu/media/37695/download?inline', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    sat: { policy: 'optional', note: 'Oberlin has been test-optional since 2020; applicants without scores receive equal consideration for admission and merit scholarships. Both tests are superscored.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { budget: 90000, budgetText: "About $90,000", includes: "the yearly support Oberlin expects a student not applying for aid to have" },
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
    { label: 'Tuition and fees', url: 'https://www.oberlin.edu/admissions-and-aid/tuition-and-fees' },
    { label: 'Admissions testing policy', url: 'https://www.oberlin.edu/admissions-and-aid/arts-and-sciences/testing-policy' },
    { label: 'Oberlin College and Conservatory Common Data Set 2025–26 (section C13)', url: 'https://www.oberlin.edu/media/37695/download?inline' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions in mid-December.', status: 'confirmed', source: 'https://www.kenyon.edu/admissions-aid/apply-to-kenyon/deadlines-requirements/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions in early to mid-February.', status: 'confirmed', source: 'https://www.kenyon.edu/admissions-aid/apply-to-kenyon/deadlines-requirements/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; decisions in late March. Kenyon charges no application fee and accepts the Common App or Coalition App.', status: 'confirmed', source: 'https://www.kenyon.edu/admissions-aid/apply-to-kenyon/deadlines-requirements/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'The 2025–26 Common Data Set (section C13) says there is no application fee.', source: 'https://www.kenyon.edu/files/resources/cds-2025-26-kenyon.xlsx', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
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
    breakdown: { tuition: 71870, billed: 93090, includes: "tuition, housing, meals and the activities fee; books, personal costs and travel are extra" },
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
    { label: 'Spring 2026 report from the Board of Trustees', url: 'https://www.kenyon.edu/news/archive/spring-2026-report-from-the-board-of-trustees/' },
    { label: 'Kenyon College Common Data Set 2025–26 (section C13)', url: 'https://www.kenyon.edu/files/resources/cds-2025-26-kenyon.xlsx' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding: admitted students must enrol and withdraw other applications. Decisions about a month after the deadline. Denison does not offer Early Action.', status: 'confirmed', source: 'https://denison.edu/campus/admission/apply-for-admission', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; decisions about a month after the deadline.', status: 'confirmed', source: 'https://denison.edu/campus/admission/apply-for-admission', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions in mid-March.', status: 'confirmed', source: 'https://denison.edu/campus/admission/apply-for-admission', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 0, currency: 'USD', waiverAvailableToInternational: null, waiver: null, note: 'The 2025–26 Common Data Set (section C13) says there is no application fee.', source: 'https://denison.edu/sites/default/files/forms/2026-08/cds_du_20252026_published_updated2026.08.14.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'Denison Certification of Finances (free; Denison does not use the CSS Profile for international applicants)'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['International students can apply for need-based aid only during the admission process; those who enrol without it cannot apply later.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'IELTS 6.5+ is one of the ways Denison lists to show adequate English proficiency.' },
    toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, recommended: null }], note: 'TOEFL iBT 80+ (TOEFL Essentials 8.5+) is listed as evidence of adequate proficiency.' },
    duolingo: { min: 115, recommended: null, note: 'Duolingo English Test 115+ is listed as evidence of adequate proficiency.' },
    waiver: 'Waivers are considered case by case after application; English as first language or main language of instruction, SAT Reading 600+ or ACT English 26+ also count as evidence.',
    note: 'All international applicants must demonstrate adequate English proficiency; Denison lists these scores, along with an admission interview, among the considerations.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Denison has not required the SAT or ACT since 2008 and applies a "no harm" rule to submitted scores.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { budget: 92900, includes: "the published cost of attendance, including a $4,500 allowance for personal expenses and books" },
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
    { label: 'Affordability and cost', url: 'https://denison.edu/campus/admission/tuition-aid' },
    { label: 'Test optional policy', url: 'https://denison.edu/forms/test-optional-policy' },
    { label: 'Denison University Common Data Set 2025–26 (section C13)', url: 'https://denison.edu/sites/default/files/forms/2026-08/cds_du_20252026_published_updated2026.08.14.pdf' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; a decision follows within 30 days. Applicants can switch into ED I until 9 December.', status: 'confirmed', source: 'https://www.fandm.edu/apply/early-decision-application-checklist.html', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; a decision follows within 30 days. Applicants can switch into ED II until 3 February.', status: 'confirmed', source: 'https://www.fandm.edu/apply/early-decision-application-checklist.html', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Notification by 1 April.', status: 'confirmed', source: 'https://www.fandm.edu/apply/regular-decision-application-checklist.html', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 62, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://drive.google.com/file/d/1CpyIXEDF-2bMSlt8qXimtThANg0xsUlw/view', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'English proficiency score where required', 'CSS Profile or F&M’s International Aid Form for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['Students admitted without aid in their first year are not eligible for it in later years.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Accepted; no minimum score published on the pages consulted.' },
    waiver: 'Not required after at least three years at a school where all courses are taught in English, or for IB Diploma students with (predicted) IB English SL 5+ or HL 4+.',
    note: 'F&M requires the TOEFL, IELTS, Duolingo English Test or PTE Academic from students whose native language is not English.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'F&M has been test-optional for more than 30 years and applies a "no harm" approach to submitted scores.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: 'A-Level passes at grade C or higher may earn credit.',
    internationalQualifications: 'Foreign course credits are evaluated case by case.'
  },
  costs: {
    breakdown: { tuition: 74770, billed: 94436, budget: 97041, includes: "tuition, fees, housing and the meal plan; the full budget adds books, personal expenses and transport" },
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
    { label: 'Apply for financial aid', url: 'https://www.fandm.edu/financial-aid/apply.html' },
    { label: 'Franklin & Marshall College Common Data Set 2025–26 (section C13)', url: 'https://drive.google.com/file/d/1CpyIXEDF-2bMSlt8qXimtThANg0xsUlw/view' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-15', date: '15 November 2026', time: '23:59', timezone: 'applicant’s local time', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification in mid-December.', status: 'confirmed', source: 'https://admissions.lafayette.edu/deadlines-and-forms/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', time: '23:59', timezone: 'applicant’s local time', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification in mid-February. A Regular Decision application sent by 15 January can be converted to ED II until 1 February.', status: 'confirmed', source: 'https://admissions.lafayette.edu/deadlines-and-forms/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-15', date: '15 January 2027', time: '23:59', timezone: 'applicant’s local time', binding: false, appliesTo: 'First-year applicants', conditions: 'Decisions released in late March through the Lafayette portal.', status: 'confirmed', source: 'https://admissions.lafayette.edu/deadlines-and-forms/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 65, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://oir.lafayette.edu/wp-content/uploads/sites/196/2026/01/CDS2025-2026.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['Families contributing less than $20,000 a year for whom the CSS Profile fee is a hardship can request an alternative International Financial Aid Form after submitting the Common Application.']
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'Lafayette typically looks for IELTS 7.' },
    toefl: { min: null, recommended: 100, scales: [{ period: 'pre2026', min: null, recommended: 100 }, { period: 'post2026', min: null, recommended: 5 }], note: 'Lafayette typically looks for TOEFL 100, or 5 on the new scale.' },
    duolingo: { min: null, recommended: 130, note: 'Lafayette typically looks for Duolingo 130.' },
    waiver: 'Waived, by signing an attestation form, if English is your first language or you have had academic instruction in English for the past three years.',
    note: 'An English proficiency test such as the TOEFL, IELTS or Duolingo English Test is required of international students unless waived.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'For autumn 2027 entry, sending SAT or ACT scores is optional for all applicants, including international students. Official scores are required on enrolment if you self-report.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { tuition: 70486, billed: 92492, includes: 'tuition, required fees and on-campus food and housing; books, travel, personal expenses and health insurance are extra', published: true },
    academicYear: '2026–2027',
    currency: 'USD',
    headline: '$70,486 tuition · $92,492 with required fees, food and housing',
    items: [
      { label: 'Tuition', amount: 70486 },
      { label: 'Required fees', amount: 1110 },
      { label: 'Food and housing (on campus)', amount: 20896 }
    ],
    billedSubtotal: 92492,
    totalText: '$92,492 for tuition, required fees and on-campus food and housing',
    note: 'From section G1 of the 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. First-year figures; required fees for continuing undergraduates are $360. Lafayette notes that meeting demonstrated need does not mean every expense, or summer and interim costs, will be covered.',
    source: 'https://oir.lafayette.edu/wp-content/uploads/sites/196/2026/01/CDS2025-2026.pdf',
    verified: '2026-10-05',
    studentCategory: 'Full-time first-year undergraduates living on campus'
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
    { label: 'Applying as an international student', url: 'https://admissions.lafayette.edu/apply/international-students/' },
    { label: 'First-year applicants', url: 'https://admissions.lafayette.edu/first-year-applicants/' },
    { label: 'Lafayette College Common Data Set 2025–26 (section C13)', url: 'https://oir.lafayette.edu/wp-content/uploads/sites/196/2026/01/CDS2025-2026.pdf' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Lehigh is test-optional indefinitely for first-year and transfer applicants.', status: 'confirmed', source: 'https://www2.lehigh.edu/admissions/apply', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding.', status: 'confirmed', source: 'https://www2.lehigh.edu/admissions/apply', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-01', date: '1 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Test-optional; decisions in late March.', status: 'confirmed', source: 'https://www2.lehigh.edu/admissions/apply', verified: '2026-10-01', note: 'Lehigh’s current page lists the dates without a year.' },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://data.lehigh.edu/sites/data.lehigh.edu/files/1302026-CDS-2025-2026-FINAL.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'International Undergraduate Financial Certification Form', 'CSS Profile for aid applicants'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['International students who do not receive aid in their first year are not eligible for it later.']
  },
  english: {
    ielts: { min: null, recommended: 7, note: 'The most competitive candidates score above IELTS 7.0.' },
    toefl: { min: null, recommended: 90, scales: [{ period: 'pre2026', min: null, recommended: 90 }], note: 'The most competitive candidates score above TOEFL 90. TOEFL iBT Home Edition is considered if test centres are unavailable.' },
    duolingo: { min: null, recommended: 120, note: 'The most competitive candidates score above 120; Duolingo is considered when the TOEFL or IELTS is unavailable.' },
    waiver: 'Not required if your first language is English or your last two full years of formal instruction were in English.',
    note: 'Lehigh prefers the TOEFL or IELTS, requires official scores from the testing agency and looks at sub-scores too. SAT and ACT results cannot meet the English requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Lehigh has extended its test-optional policy indefinitely for first-year and transfer applicants. Scores that are sent must be official.' },
    act: { policy: 'optional', note: 'Same as the SAT.' },
    otherTests: null,
    internationalQualifications: 'International qualifications are accepted and read in context.'
  },
  costs: {
    breakdown: { budget: 93400, includes: "the projected cost of attendance for the year" },
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
    { label: 'How to apply for financial aid', url: 'https://www2.lehigh.edu/admissions/tuition-affording-college/how-apply-financial-aid' },
    { label: 'Admissions requirements', url: 'https://www2.lehigh.edu/admissions/admissions-requirements' },
    { label: 'Lehigh University Common Data Set 2025–26 (section C13)', url: 'https://data.lehigh.edu/sites/data.lehigh.edu/files/1302026-CDS-2025-2026-FINAL.pdf' }
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
      { name: 'Early Decision I', kind: 'ED', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding. Financial aid deadline 1 December; notification in late December.', status: 'confirmed', source: 'https://admissions.miami.edu/undergraduate/application-process/options-and-deadlines/freshman/', verified: '2026-09-23', note: null },
      { name: 'Early Action', kind: 'EA', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-01', date: '1 November 2026', binding: false, appliesTo: 'First-year applicants', conditions: 'Not binding. Financial aid deadline 1 December; notification late January to early February.', status: 'confirmed', source: 'https://admissions.miami.edu/undergraduate/application-process/options-and-deadlines/freshman/', verified: '2026-09-23', note: null },
      { name: 'Early Decision II', kind: 'ED2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: true, appliesTo: 'First-year applicants', conditions: 'Binding; notification in late February.', status: 'confirmed', source: 'https://admissions.miami.edu/undergraduate/application-process/options-and-deadlines/freshman/', verified: '2026-09-23', note: null },
      { name: 'Regular Decision', kind: 'RD', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-05', date: '5 January 2027', binding: false, appliesTo: 'First-year applicants', conditions: 'Notification by 1 April. SAT or ACT scores are required from the fall 2026 intake onwards.', status: 'confirmed', source: 'https://admissions.miami.edu/undergraduate/application-process/options-and-deadlines/freshman/', verified: '2026-09-23', note: null },
    ],
    applicationFee: { amount: 75, currency: 'USD', waiverAvailableToInternational: null, waiver: 'The Common Data Set says the fee can be waived for applicants with financial need; whether that covers international applicants was not checked.', note: 'Stated in section C13 of the 2025–26 Common Data Set.', source: 'https://irsa.miami.edu/facts-and-information/common-data-set/cds2526.pdf', verified: '2026-10-05', cycle: '2025–26 Common Data Set' },
    documents: ['Common Application', 'School transcript and reports', 'Teacher recommendations', 'English proficiency evidence', 'CSS Profile for need-based aid'],
    recommendations: 'Teacher and counsellor recommendations',
    essay: 'Personal essay',
    interview: null,
    notes: ['Only applicants who apply by 1 November are considered for Premier Scholarships.']
  },
  english: {
    ielts: { min: null, recommended: 6.5, note: 'Competitive applicants generally score above IELTS 6.5.' },
    toefl: { min: null, recommended: 80, scales: [{ period: 'pre2026', min: null, recommended: 80 }, { period: 'post2026', min: null, recommended: 4.5 }], note: 'Competitive applicants generally score above 80 on the internet-based TOEFL (550 paper-based), or 4.5 on the 1–6 scale for tests after 21 January 2026.' },
    duolingo: { min: null, recommended: 125, note: 'Competitive applicants generally score above 125.' },
    waiver: 'Waived with an A or B in AP English or IB Higher Level English, specified IB English exam scores, at least three years (including the graduation year) at a US high school, or completion of Level 5 of UM’s Intensive English Program.',
    note: 'Students whose native language is not English must submit official TOEFL, IELTS or Duolingo results; scores are valid for two years.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'UM reinstated its standardized test requirement from autumn 2026. Only the SAT or ACT satisfies it; scores are superscored and may be self-reported. Applicants to programmes such as Architecture and Fine Arts (BFA) who do not send scores submit a portfolio instead.' },
    act: { policy: 'required', note: 'SAT or ACT required; the ACT science section is not required.' },
    otherTests: null,
    internationalQualifications: 'Tuition and fees are the same for domestic and international students.'
  },
  costs: {
    status: 'previous-cycle',
    breakdown: { tuition: 66312, billed: 94700, includes: 'tuition, required fees and on-campus food and housing; books, travel, personal expenses and health insurance are extra', published: true },
    academicYear: 'not final for 2026–2027 — see note',
    currency: 'USD',
    headline: '$66,312 tuition · $94,700 with required fees, food and housing',
    items: [
      { label: 'Tuition', amount: 66312 },
      { label: 'Required fees', amount: 2030 },
      { label: 'Food and housing (on campus)', amount: 26358 }
    ],
    billedSubtotal: 94700,
    totalText: '$94,700 for tuition, required fees and on-campus food and housing',
    note: 'From section G1 of the 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. On this form UM ticked the box saying its 2026–2027 costs were not yet available (expected 31 May 2026), so these figures may be those of the previous year. UM charges international and domestic students the same tuition.',
    source: 'https://irsa.miami.edu/facts-and-information/common-data-set/cds2526.pdf',
    verified: '2026-10-05',
    studentCategory: 'Full-time first-year undergraduates living on campus'
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
    { label: 'Admission plans and deadlines', url: 'https://admissions.miami.edu/undergraduate/application-process/options-and-deadlines/index.html' },
    { label: 'Testing policy', url: 'https://admissions.miami.edu/undergraduate/application-process/admission-requirements/testing-policy/index.html' },
    { label: 'English proficiency requirements', url: 'https://admissions.miami.edu/undergraduate/application-process/admission-requirements/english-proficiency-requirements/index.html' },
    { label: 'University of Miami Common Data Set 2025–26 (section C13)', url: 'https://irsa.miami.edu/facts-and-information/common-data-set/cds2526.pdf' }
  ],
  lastVerified: '2026-09-22'
},

{
  "id": "union-college",
  "name": "Union College",
  "shortName": "Union",
  "country": "us",
  "city": "Schenectady",
  "region": "New York",
  "founded": 1795,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#7A1F2B",
    "c2": "#4a1219",
    "initials": "UC"
  },
  "description": "A liberal arts college in Schenectady, New York, that also teaches engineering. Union charges no application fee and is test-optional; it offers merit scholarships and grant aid to international students, but admission is need-aware and it does not state that it meets full need for them.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "engineering",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "engineering",
    "business"
  ],
  "programNote": "Union combines the liberal arts with engineering; the combined Leadership in Medicine and 3+3 Law programmes have their own requirements.",
  "links": {
    "website": "https://www.union.edu/",
    "admissions": "https://www.union.edu/admissions/apply",
    "internationalAdmissions": "https://www.union.edu/admissions/apply/international",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.union.edu/financial-aid-family-financing/types-aid/scholarships-and-grants",
    "financialAid": "https://www.union.edu/financial-aid-family-financing",
    "programs": "https://www.union.edu/departments-and-programs",
    "cost": "https://www.union.edu/financial-aid-family-financing"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Documents by 20 November; financial aid application by 15 November. Decisions are released weekly from November.",
        "status": "confirmed",
        "source": "https://www.union.edu/admissions/apply",
        "verified": "2026-10-01",
        "note": "Union’s current deadlines table lists the dates without a year."
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Documents by 20 January; financial aid application by 15 January. Decisions are released weekly from January.",
        "status": "confirmed",
        "source": "https://www.union.edu/admissions/apply",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Documents by 20 January; financial aid application by 15 January; decisions in mid-March. Applicants can switch to Early Decision II until 15 February.",
        "status": "confirmed",
        "source": "https://www.union.edu/admissions/apply",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Priority date for scholarships",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "Applicants who want priority scholarship consideration",
        "conditions": "Applications submitted by 1 December receive priority consideration for scholarships.",
        "status": "confirmed",
        "source": "https://www.union.edu/admissions/apply",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Union states there is no application fee."
    },
    "documents": [
      "Common Application or Coalition Application",
      "Official secondary school transcripts and exam scores",
      "Teacher and counsellor recommendation letters",
      "English proficiency test for applicants whose first language is not English",
      "Certification of Finances (all international applicants)"
    ],
    "recommendations": "Teacher and counsellor recommendation letters",
    "essay": null,
    "interview": null,
    "notes": [
      "Union gives preference for admission, scholarships and need-based aid to international students who apply in a binding Early Decision round."
    ]
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 6.5,
      "note": "Union lists 6.5 or higher as most competitive for admission; it is not stated as a minimum."
    },
    "toefl": {
      "min": null,
      "recommended": 90,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 90
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 4.5
        }
      ],
      "note": "Most competitive: 90 or higher on the old scale, 4.5 or higher on the new scale."
    },
    "duolingo": {
      "min": null,
      "recommended": 120,
      "note": "Duolingo English Test 120 or higher is listed as most competitive."
    },
    "waiver": null,
    "note": "Required from international applicants whose first language is not English."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Union has a “no-harm” test-optional policy for all applicants, international students included. Scores are required only for the combined Leadership in Medicine and 3+3 Law programmes."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "billed": 92610,
      "comprehensive": true,
      "includes": "a comprehensive fee covering tuition, student fees, housing and a meal plan"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$92,610 comprehensive fee",
    "items": [
      {
        "label": "Comprehensive fee (tuition, student fees, housing and meal plan)",
        "amount": 92610
      }
    ],
    "billedSubtotal": 92610,
    "totalText": "$92,610 comprehensive fee for the year",
    "note": "Union publishes one comprehensive fee rather than separate tuition; books, travel and personal costs are extra."
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Admission is need-aware for international students.",
      "howToApply": "Submit the Certification of Finances and the aid forms with the application.",
      "note": "Union describes generous merit scholarships and grant aid for international students but does not state that it meets their full need, so no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": "Priority consideration for applications submitted by 1 December",
        "note": "Amounts are not published on the pages read."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": false,
      "forms": [
        "Certification of Finances"
      ],
      "deadlines": "With the application round",
      "note": "Preference for need-based aid goes to Early Decision applicants. Students from United World Colleges are eligible for need-based scholarships."
    }
  },
  "sources": [
    {
      "label": "Apply — deadlines",
      "url": "https://www.union.edu/admissions/apply"
    },
    {
      "label": "International applicants",
      "url": "https://www.union.edu/admissions/apply/international"
    },
    {
      "label": "Test policy",
      "url": "https://www.union.edu/admissions/apply/test-policy"
    },
    {
      "label": "Financial aid and family financing",
      "url": "https://www.union.edu/financial-aid-family-financing"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.union.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "comprehensive fee",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "tuition as a separate figure",
      "scholarship amounts",
      "whether full need is met"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "skidmore-college",
  "name": "Skidmore College",
  "shortName": "Skidmore",
  "country": "us",
  "city": "Saratoga Springs",
  "region": "New York",
  "founded": 1903,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#006A52",
    "c2": "#00402f",
    "initials": "SC"
  },
  "description": "A liberal arts college in Saratoga Springs, New York. Skidmore charges no application fee, has been test-optional since 2016 and commits to meeting the demonstrated need of every admitted student — but says only a very limited amount of aid is available to international students.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.skidmore.edu/",
    "admissions": "https://www.skidmore.edu/admissions/apply/index.php",
    "internationalAdmissions": "https://www.skidmore.edu/admissions/apply/international.php",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.skidmore.edu/financial-aid/index.php",
    "financialAid": "https://www.skidmore.edu/financial-aid/faq.php",
    "programs": "https://www.skidmore.edu/academics/majors.php",
    "cost": "https://www.skidmore.edu/bursar/cost.php"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Supporting materials within one week; CSS Profile by 8 November. Decision in mid-December; reply in early January.",
        "status": "confirmed",
        "source": "https://www.skidmore.edu/admissions/apply/index.php",
        "verified": "2026-10-01",
        "note": "Skidmore’s current dates table lists the dates without a year."
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-08",
        "date": "8 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Supporting materials within one week; CSS Profile by 15 January. Decision in mid-February; reply in late February.",
        "status": "confirmed",
        "source": "https://www.skidmore.edu/admissions/apply/index.php",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-08",
        "date": "8 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Supporting materials within one week; CSS Profile by 15 January. Decision in mid-March; reply by 1 May.",
        "status": "confirmed",
        "source": "https://www.skidmore.edu/admissions/apply/index.php",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Skidmore states that it is free to apply and asks for no supplemental essays."
    },
    "documents": [
      "Common Application or Coalition Application",
      "School report and official transcript",
      "Two academic teacher recommendations",
      "English proficiency test where required",
      "Skidmore financial aid application for international students, if applying for aid"
    ],
    "recommendations": "Two academic teacher recommendations",
    "essay": "Personal essay; no supplemental essays",
    "interview": null,
    "notes": [
      "An international student who enrols without financial aid cannot apply for it in later years."
    ]
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Skidmore describes IELTS 7.0/7.5 as an indicator of minimal proficiency for study there; it is not presented as a fixed cut-off."
    },
    "toefl": {
      "min": null,
      "recommended": 96,
      "note": "Skidmore describes TOEFL 96–97 as an indicator of minimal proficiency; the new 1–6 scale equivalent is not stated."
    },
    "duolingo": {
      "min": null,
      "recommended": 120,
      "note": "Duolingo English Test 120 is named as an indicator of minimal proficiency."
    },
    "waiver": "Not needed after at least three years at a school where English is the only language of instruction; waivers are available for IB Diploma students.",
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Skidmore has been test-optional since 2016 and does not require SAT or ACT scores; it superscores if they are sent."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT; the ACT science section is not required."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 73590,
      "billed": 93260,
      "includes": "tuition and required fees, a traditional residence-hall room and the food plan"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$93,260 in tuition, fees, housing and food",
    "items": [
      {
        "label": "Tuition and required fees",
        "amount": 73590
      },
      {
        "label": "Housing (traditional residence hall)",
        "amount": 11630
      },
      {
        "label": "Food",
        "amount": 8040
      }
    ],
    "billedSubtotal": 93260,
    "totalText": "$93,260 for tuition, fees, a traditional room and food",
    "note": "From the Bursar’s cost page; the page does not print the academic year, which is taken from Skidmore’s 2026–27 aid pages. Single rooms and apartments cost more."
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Skidmore says a very limited amount of aid is available to international students.",
      "howToApply": "State on the admission application that you will apply for aid, then complete Skidmore’s international financial aid application in the applicant portal.",
      "note": "Skidmore commits to meeting the demonstrated financial need of every admitted student. Few international applicants receive aid, so this is not an easy route."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": true,
      "needBlindInternational": null,
      "forms": [
        "Skidmore financial aid application for international students"
      ],
      "deadlines": "CSS Profile dates on the round table: 8 November (ED I), 15 January (ED II and RD)",
      "note": "Aid must be requested on the admission application; it cannot be added in later years."
    }
  },
  "sources": [
    {
      "label": "Apply — dates and deadlines",
      "url": "https://www.skidmore.edu/admissions/apply/index.php"
    },
    {
      "label": "International applicants",
      "url": "https://www.skidmore.edu/admissions/apply/international.php"
    },
    {
      "label": "Financial aid FAQ",
      "url": "https://www.skidmore.edu/financial-aid/faq.php"
    },
    {
      "label": "Bursar — cost of attendance",
      "url": "https://www.skidmore.edu/bursar/cost.php"
    },
    {
      "label": "About — history and facts",
      "url": "https://catalog.skidmore.edu/about-skidmore-college/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "tuition, housing and food",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "whether admission is need-aware for international applicants",
      "full cost of attendance with books and travel"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "trinity-college-hartford",
  "name": "Trinity College (Hartford)",
  "shortName": "Trinity",
  "country": "us",
  "city": "Hartford",
  "region": "Connecticut",
  "founded": 1823,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#0F2D62",
    "c2": "#081a3a",
    "initials": "TC"
  },
  "description": "A liberal arts college in Hartford, Connecticut, with its own engineering programme. Trinity is test-optional, charges no Common Application fee and states that it meets the full demonstrated need of the international students it admits.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "engineering"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "engineering"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.trincoll.edu/",
    "admissions": "https://www.trincoll.edu/admissions/undergraduate-admissions/application-process/",
    "internationalAdmissions": "https://www.trincoll.edu/admissions/international-admissions/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.trincoll.edu/admissions/finaid/",
    "financialAid": "https://www.trincoll.edu/admissions/finaid/international-students/",
    "programs": "https://www.trincoll.edu/academics/majors",
    "cost": "https://www.trincoll.edu/student-accounts/tuition-and-fees/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Financial aid application by 15 November; notification by mid-December.",
        "status": "confirmed",
        "source": "https://www.trincoll.edu/admissions/undergraduate-admissions/application-process/",
        "verified": "2026-10-01",
        "note": "Trinity heads this table “2026-27 Deadlines”."
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Financial aid application by 15 January; notification by mid-February.",
        "status": "confirmed",
        "source": "https://www.trincoll.edu/admissions/undergraduate-admissions/application-process/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Financial aid application by 15 January; notification by late March.",
        "status": "confirmed",
        "source": "https://www.trincoll.edu/admissions/undergraduate-admissions/application-process/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Trinity states there is no Common Application fee to apply."
    },
    "documents": [
      "Common Application",
      "Official transcript and school report",
      "One academic recommendation",
      "English proficiency exam results (Duolingo, IELTS or TOEFL)",
      "CSS Profile if applying for need-based aid, otherwise the Statement of Finances Form"
    ],
    "recommendations": "One academic recommendation is required",
    "essay": "Common Application essay; an optional Trinity essay of under 300 words",
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7.0,
      "note": "Recommended 7.0 with band scores of 6.5 or higher. Trinity has no minimum cut-off and reviews English holistically."
    },
    "toefl": {
      "min": null,
      "recommended": null,
      "scales": [
        {
          "period": "post2026",
          "min": null,
          "recommended": 5.5
        }
      ],
      "note": "Recommended 5.5 with subsection scores of 5.5 on the current scale; no cut-off."
    },
    "duolingo": {
      "min": null,
      "recommended": 130,
      "note": "Recommended 130 overall or higher; results are accepted only directly from Duolingo."
    },
    "waiver": "A waiver can be requested after applying, for example with a final IB English grade of 5 or higher.",
    "note": "Applicants whose scores fall below the recommended levels are still encouraged to apply; an interview is strongly encouraged."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Trinity is test-optional; all applicants are considered for merit scholarships whether or not they send scores."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 72820,
      "billed": 96480,
      "budget": 98480,
      "budgetText": "$98,480 plus travel and loan fees",
      "includes": "tuition, room, board, the general fee and the student activity fee; the full budget adds estimated books and miscellaneous costs"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$96,480 billed · $98,480 cost of attendance",
    "items": [
      {
        "label": "Tuition",
        "amount": 72820
      },
      {
        "label": "Room (standard)",
        "amount": 13150
      },
      {
        "label": "Board (19-meal plan)",
        "amount": 7180
      },
      {
        "label": "General fee",
        "amount": 2900
      },
      {
        "label": "Student activity fee",
        "amount": 430
      },
      {
        "label": "Books (estimated)",
        "amount": 1000
      },
      {
        "label": "Miscellaneous (estimated)",
        "amount": 1000
      }
    ],
    "billedSubtotal": 96480,
    "totalText": "$98,480 estimated cost of attendance, plus travel",
    "note": "Hartford campus, 2026–27 academic year."
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Admission is selective; Trinity does not say on the pages read whether it is need-aware for international applicants.",
      "howToApply": "Indicate on the application that you will apply for aid and complete the CSS Profile (code 3899).",
      "note": "Trinity states that if an international student is admitted, it will meet their full demonstrated need."
    },
    "merit": [
      {
        "name": "Merit-based scholarships",
        "amount": null,
        "internationalEligible": null,
        "deadline": null,
        "note": "All applicants are considered; amounts and eligibility of international students were not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": true,
      "needBlindInternational": null,
      "forms": [
        "CSS Profile (code 3899)"
      ],
      "deadlines": "15 November (ED I), 15 January (ED II and Regular Decision)",
      "note": "Award notification follows in mid-December, mid-February and early April."
    }
  },
  "sources": [
    {
      "label": "Application process and 2026–27 deadlines",
      "url": "https://www.trincoll.edu/admissions/undergraduate-admissions/application-process/"
    },
    {
      "label": "Financial aid for international students",
      "url": "https://www.trincoll.edu/admissions/finaid/international-students/"
    },
    {
      "label": "Tuition and fees 2026–27",
      "url": "https://www.trincoll.edu/student-accounts/tuition-and-fees/"
    },
    {
      "label": "Admissions FAQ",
      "url": "https://www.trincoll.edu/admissions/undergraduate-admissions/faq/"
    },
    {
      "label": "English proficiency exams",
      "url": "https://www.trincoll.edu/admissions/international-admissions/english-proficiency-exams/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.trincoll.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "accepted English tests",
      "costs",
      "aid for international students",
      "English tests",
      "founding year"
    ],
    "unconfirmed": [
      "need-aware or need-blind for international applicants",
      "merit scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "connecticut-college",
  "name": "Connecticut College",
  "shortName": "Conn",
  "country": "us",
  "city": "New London",
  "region": "Connecticut",
  "founded": 1911,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#0E4C92",
    "c2": "#082e59",
    "initials": "CC"
  },
  "description": "A liberal arts college in New London, Connecticut. Conn has waived its application fee, is test-optional with a no-harm policy and states that it meets demonstrated need for all admitted students regardless of citizenship.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.conncoll.edu/",
    "admissions": "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
    "internationalAdmissions": "https://www.conncoll.edu/admission/international-applicants/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.conncoll.edu/financial-aid/",
    "financialAid": "https://www.conncoll.edu/financial-aid/applying-for-financial-aid/",
    "programs": "https://www.conncoll.edu/academics/majors-departments-programs/departments/",
    "cost": "https://www.conncoll.edu/admission/tuition-fees/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Financial aid documents by 1 November; notification in mid-December.",
        "status": "confirmed",
        "source": "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
        "verified": "2026-10-01",
        "note": "Connecticut College heads this table “to Apply for Fall 2027 Admission”."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Financial aid documents by 1 November; notification in mid-December.",
        "status": "confirmed",
        "source": "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Financial aid documents by 14 January; notification in mid-February.",
        "status": "confirmed",
        "source": "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Financial aid documents by 15 January; notification in late March.",
        "status": "confirmed",
        "source": "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Connecticut College has waived its application fee."
    },
    "documents": [
      "Common Application",
      "School transcript and reports",
      "English proficiency test (TOEFL, IELTS or Duolingo) for applicants from outside the United States",
      "Verification of Financial Support (all non-US citizens)",
      "CSS Profile if applying for aid"
    ],
    "recommendations": null,
    "essay": "Common Application essay; no supplemental essay",
    "interview": "Optional; in person or online, about 30 minutes",
    "notes": [
      "First-year applicants can also apply for January 2027 admission, with a 1 November deadline."
    ]
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Successful applicants generally score around 7.0; no minimum is stated."
    },
    "toefl": {
      "min": null,
      "recommended": 100,
      "note": "Successful applicants generally score around 100; no minimum is stated, and the new-scale equivalent is not given."
    },
    "duolingo": {
      "min": null,
      "recommended": 130,
      "note": "Successful applicants generally score around 130."
    },
    "waiver": null,
    "note": "An official English proficiency score is required from applicants outside the United States; the standardized-test policy page also lists PTE."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT and ACT are optional for all applicants, international students included; Conn applies a no-harm policy."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "billed": 92800,
      "budget": 94800,
      "comprehensive": true,
      "includes": "a comprehensive fee; the full budget adds books and supplies, miscellaneous costs and transportation"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$92,800 comprehensive fee · $94,800 student budget",
    "items": [
      {
        "label": "Comprehensive fee",
        "amount": 92800
      },
      {
        "label": "Books and supplies",
        "amount": 1000
      },
      {
        "label": "Miscellaneous",
        "amount": 600
      },
      {
        "label": "Transportation",
        "amount": 400
      }
    ],
    "billedSubtotal": 92800,
    "totalText": "$94,800 student budget for 2026–27",
    "note": "Connecticut College publishes one comprehensive fee rather than separate tuition."
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Conn describes admission as highly competitive; whether it is need-aware for international applicants is not stated on the pages read.",
      "howToApply": "Complete the CSS Profile and the Verification of Financial Support.",
      "note": "Connecticut College states that it meets demonstrated need for all admitted students regardless of citizenship; its aid packages combine grants, part-time work and loans."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": true,
      "needBlindInternational": null,
      "forms": [
        "CSS Profile",
        "Verification of Financial Support"
      ],
      "deadlines": "1 November (ED I and Early Action), 14 January (ED II), 15 January (Regular Decision)",
      "note": "International students are not eligible for US federal aid."
    }
  },
  "sources": [
    {
      "label": "First-year requirements and deadlines for Fall 2027",
      "url": "https://www.conncoll.edu/admission/apply/first-year-requirements-deadlines/"
    },
    {
      "label": "International applicants — FAQ",
      "url": "https://www.conncoll.edu/admission/international-applicants/faq/"
    },
    {
      "label": "Tuition and fees",
      "url": "https://www.conncoll.edu/admission/tuition-fees/"
    },
    {
      "label": "Applying for financial aid",
      "url": "https://www.conncoll.edu/financial-aid/applying-for-financial-aid/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.conncoll.edu/at-a-glance/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "tuition as a separate figure",
      "need-aware or need-blind for international applicants"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "dickinson-college",
  "name": "Dickinson College",
  "shortName": "Dickinson",
  "country": "us",
  "city": "Carlisle",
  "region": "Pennsylvania",
  "founded": 1783,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#B5121B",
    "c2": "#6d0b10",
    "initials": "DC"
  },
  "description": "A liberal arts college in Carlisle, Pennsylvania, test-optional since 1994. Dickinson offers both merit scholarships and need-based aid to international students, but is need-aware for them and says need-based aid is limited.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.dickinson.edu/",
    "admissions": "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines",
    "internationalAdmissions": "https://www.dickinson.edu/info/20045/admissions/1176/international_student_admissions_information",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.dickinson.edu/homepage/511/grants_and_scholarships",
    "financialAid": "https://www.dickinson.edu/info/20045/admissions/1179/international_student_financial_aid",
    "programs": "https://www.dickinson.edu/majors",
    "cost": "https://www.dickinson.edu/info/20081/financial_aid/1125/cost_of_attendance"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Admission and financial aid (CSS Profile) deadline; decision and aid notification in mid-December; deposit two to three weeks after acceptance.",
        "status": "confirmed",
        "source": "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines",
        "verified": "2026-10-01",
        "note": "Dickinson’s current deadlines page lists the dates without a year; its international page gives 11 December 2026 as the last interview date for fall 2027."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Admission and financial aid deadline; notification in mid-January; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Admission and financial aid deadline; notification in late February.",
        "status": "confirmed",
        "source": "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Admission and financial aid deadline; notification in late March; reply by 1 May. Applicants can switch to Early Decision II until 28 January.",
        "status": "confirmed",
        "source": "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 65,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "The Common Data Set says the fee can be waived for applicants with financial need; eligibility of international applicants was not confirmed",
      "note": "Stated in section C13 of Dickinson’s 2025–26 Common Data Set."
    },
    "documents": [
      "Common Application",
      "School transcript and reports",
      "English proficiency evidence where required",
      "International Certification of Finances (all international applicants)",
      "CSS Profile if applying for need-based aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": [
      "There is no spring 2027 first-year admission cycle."
    ]
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Recommended score 7.0."
    },
    "toefl": {
      "min": null,
      "recommended": 90,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 90
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 4.5
        }
      ],
      "note": "Recommended score 90, or 4.5 on the scale used from January 2026."
    },
    "duolingo": {
      "min": null,
      "recommended": 120,
      "note": "Duolingo English Test with interview: recommended score 120."
    },
    "waiver": "English can also be shown by at least three years at a high school where English is the principal language of instruction.",
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Dickinson has been test-optional since 1994."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 71100,
      "billed": 90300,
      "budget": 93706,
      "includes": "tuition, required fees, housing and food are billed; the total adds books and other non-billed costs"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$90,300 billed · $93,706 cost of attendance",
    "items": [
      {
        "label": "Tuition",
        "amount": 71100
      },
      {
        "label": "Required fees",
        "amount": 550
      },
      {
        "label": "Housing",
        "amount": 9600
      },
      {
        "label": "Food",
        "amount": 9050
      }
    ],
    "totalText": "$93,706 total cost of attendance for a student living on campus",
    "note": "The total also includes books, personal and other non-billed costs. For international students, mandatory health insurance ($2,500) and one-time fees ($125) are not included when aid is calculated.",
    "billedSubtotal": 90300
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Dickinson is need-aware for international applicants: ability to pay is considered in the decision.",
      "howToApply": "Submit the International Certification of Finances and, for need-based aid, the CSS Profile.",
      "note": "Need-based aid is limited and students are expected to contribute; no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Dickinson states that merit scholarships are available to admitted international students; amounts were not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": false,
      "forms": [
        "CSS Profile",
        "International Certification of Finances"
      ],
      "deadlines": "Same date as the application round",
      "note": "The amount of need-based aid is limited."
    }
  },
  "sources": [
    {
      "label": "Application deadlines",
      "url": "https://www.dickinson.edu/info/20256/apply/1024/application_deadlines"
    },
    {
      "label": "International student admissions information",
      "url": "https://www.dickinson.edu/info/20045/admissions/1176/international_student_admissions_information"
    },
    {
      "label": "International scholarships and financial aid",
      "url": "https://www.dickinson.edu/info/20045/admissions/1179/international_student_financial_aid"
    },
    {
      "label": "Cost of attendance 2026–2027",
      "url": "https://www.dickinson.edu/info/20081/financial_aid/1125/cost_of_attendance"
    },
    {
      "label": "Dickinson College Common Data Set 2025–26 (section C13)",
      "url": "https://www.dickinson.edu/download/downloads/id/17199/cds_2025-2026.pdf"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.dickinson.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "application fee",
      "founding year"
    ],
    "unconfirmed": [
      "merit scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "gettysburg-college",
  "name": "Gettysburg College",
  "shortName": "Gettysburg",
  "country": "us",
  "city": "Gettysburg",
  "region": "Pennsylvania",
  "founded": 1832,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#002F6C",
    "c2": "#001c40",
    "initials": "GC"
  },
  "description": "A liberal arts college in Gettysburg, Pennsylvania. It is test-optional and says it strives to meet the demonstrated need of admitted international students, while warning that aid is highly competitive, funds are limited, and a grant equal to full tuition is unusual.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.gettysburg.edu/",
    "admissions": "https://www.gettysburg.edu/admissions-aid/applying-gettysburg/",
    "internationalAdmissions": "https://www.gettysburg.edu/admissions-aid/international-students/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.gettysburg.edu/admissions-aid/international-students/financial-aid-international-students",
    "financialAid": "https://www.gettysburg.edu/admissions-aid/international-students/financial-aid-international-students",
    "programs": "https://www.gettysburg.edu/academic-programs/a-to-z",
    "cost": "https://www.gettysburg.edu/admissions-aid/tuition-fees/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. The Early Decision Form is due the same day; decisions in the applicant portal by 1 December.",
        "status": "confirmed",
        "source": "https://www.gettysburg.edu/admissions-aid/applying-gettysburg/",
        "verified": "2026-10-01",
        "note": "Gettysburg’s current pages list the dates without a year."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; most offers are released by early January, with a reply by 1 May.",
        "status": "confirmed",
        "source": "https://www.gettysburg.edu/admissions-aid/applying-gettysburg/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-20",
        "date": "20 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; decisions by 20 February.",
        "status": "confirmed",
        "source": "https://www.gettysburg.edu/admissions-aid/applying-gettysburg/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Mid-year grades required; most offers are released by mid-March.",
        "status": "confirmed",
        "source": "https://www.gettysburg.edu/admissions-aid/applying-gettysburg/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 60,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Stated in section C13 of Gettysburg’s 2025–26 Common Data Set."
    },
    "documents": [
      "Common Application",
      "Official high school transcript",
      "Teacher and counsellor recommendations",
      "English test results",
      "International Student Financial Statement (all international applicants)",
      "Financial Aid Application for International Students, if applying for aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Gettysburg lists IELTS 7.0 for international applicants; the page does not say whether it is a minimum."
    },
    "toefl": {
      "min": null,
      "recommended": 90,
      "note": "TOEFL 90 is listed; the new-scale equivalent is not given."
    },
    "duolingo": {
      "min": null,
      "recommended": 120,
      "note": "Duolingo English Test 120 is listed."
    },
    "waiver": null,
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT or ACT scores may be self-reported but are not required."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 71730,
      "billed": 89070,
      "budget": 92810,
      "includes": "tuition, housing and food are billed; the total adds personal expenses, transportation, books and loan fees"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$89,070 billed · $92,810 cost of attendance",
    "items": [
      {
        "label": "Tuition",
        "amount": 71730
      },
      {
        "label": "Housing and food",
        "amount": 17340
      },
      {
        "label": "Personal expenses",
        "amount": 1200
      },
      {
        "label": "Transportation",
        "amount": 1500
      },
      {
        "label": "Books and supplies",
        "amount": 1000
      },
      {
        "label": "Loan fees",
        "amount": 40
      }
    ],
    "totalText": "$92,810 total cost of attendance",
    "note": "The college health insurance plan ($2,856) is required for international students and is not in this total.",
    "billedSubtotal": 89070
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Gettysburg calls its aid process for international students highly competitive, with limited funds.",
      "howToApply": "Submit the International Student Financial Statement and the Financial Aid Application for International Students by your round’s deadline.",
      "note": "Gettysburg says it strives to meet demonstrated need but that a grant equal to full tuition “is not ordinarily the case”, so no full-scholarship route is claimed."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [
        "International Student Financial Statement",
        "Financial Aid Application for International Students"
      ],
      "deadlines": "By the application deadline of the round you apply in",
      "note": "The CSS Profile is not required of international applicants. Students who do not receive aid at admission cannot apply for it in later years."
    }
  },
  "sources": [
    {
      "label": "Applying to Gettysburg",
      "url": "https://www.gettysburg.edu/admissions-aid/applying-gettysburg/"
    },
    {
      "label": "International students",
      "url": "https://www.gettysburg.edu/admissions-aid/international-students/"
    },
    {
      "label": "Financial aid for international students",
      "url": "https://www.gettysburg.edu/admissions-aid/international-students/financial-aid-international-students"
    },
    {
      "label": "Tuition and fees 2026–27",
      "url": "https://www.gettysburg.edu/admissions-aid/tuition-fees/"
    },
    {
      "label": "Gettysburg College Common Data Set 2025–26 (section C13)",
      "url": "https://www.gettysburg.edu/offices/institutional-research/pdfs/2026/CDS_2025-2026.pdf"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.gettysburg.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "application fee",
      "founding year"
    ],
    "unconfirmed": [
      "whether the English scores are minimums"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "bucknell-university",
  "name": "Bucknell University",
  "shortName": "Bucknell",
  "country": "us",
  "city": "Lewisburg",
  "region": "Pennsylvania",
  "founded": 1846,
  "type": "Private liberal arts university",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#E87722",
    "c2": "#003865",
    "initials": "BU"
  },
  "description": "A private undergraduate-focused university in Lewisburg, Pennsylvania, with colleges of arts and sciences, engineering and management. Bucknell says its financial aid for international students is limited, is not need-blind for them, and awards only a few partial merit scholarships.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.bucknell.edu/",
    "admissions": "https://www.bucknell.edu/admissions-aid/apply-bucknell",
    "internationalAdmissions": "https://www.bucknell.edu/admissions-aid/apply-bucknell/undergraduate-admission-requirements/admission-requirements-international-students",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.bucknell.edu/admissions-aid/tuition-fees-financial-aid/types-aid",
    "financialAid": "https://www.bucknell.edu/admissions-aid/tuition-fees-financial-aid/apply-financial-aid/financial-aid-international-students",
    "programs": "https://www.bucknell.edu/academics/majors-minors",
    "cost": "https://www.bucknell.edu/admissions-aid/tuition-fees-financial-aid"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application (Scoir)"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "time": "23:59",
        "timezone": "applicant’s local time",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding.",
        "status": "confirmed",
        "source": "https://www.bucknell.edu/admissions-aid/apply-bucknell",
        "verified": "2026-10-01",
        "note": "Bucknell’s current page lists the dates without a year."
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-10",
        "date": "10 January 2027",
        "time": "23:59",
        "timezone": "applicant’s local time",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding.",
        "status": "confirmed",
        "source": "https://www.bucknell.edu/admissions-aid/apply-bucknell",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-10",
        "date": "10 January 2027",
        "time": "23:59",
        "timezone": "applicant’s local time",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Admitted students confirm enrolment by 1 May.",
        "status": "confirmed",
        "source": "https://www.bucknell.edu/admissions-aid/apply-bucknell",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 50,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "Fee waivers through the Common Application, Coalition Application or College Board in stated cases",
      "note": "Nonrefundable; paid through the Common Application or Coalition Application."
    },
    "documents": [
      "Common Application or Coalition Application",
      "School transcript and recommendations",
      "Proof of English proficiency where required",
      "Bank statement or International Student Financial Certification",
      "International Student Application for Financial Assistance (ISAFA), if applying for aid",
      "Copy of the passport photo page"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 7,
      "recommended": null,
      "note": "Minimum score of 7."
    },
    "toefl": {
      "min": 100,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 100,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 5,
          "recommended": null
        }
      ],
      "note": "Minimum 5, or 100 if taken before 21 January 2026."
    },
    "duolingo": {
      "min": 130,
      "recommended": null,
      "note": "Minimum Duolingo English Test score of 130."
    },
    "waiver": "Required when English is not the first language or was not the language of instruction for at least three years; can be waived by permission.",
    "note": "PTE 68 is also accepted. Results should arrive by the application deadline."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT or ACT results are optional for students applying for admission in fall 2026 and fall 2027; Bucknell describes this as a pilot."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 72600,
      "billed": 91880,
      "budget": 97716,
      "includes": "tuition, housing, food and the student fee are billed; the budget adds health insurance, books, incidentals and travel"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$91,880 billed · $97,716 budget for an international student",
    "items": [
      {
        "label": "Tuition (two semesters, full-time)",
        "amount": 72600
      },
      {
        "label": "Housing (standard double room)",
        "amount": 11400
      },
      {
        "label": "Food (Bucknell meal plan)",
        "amount": 6980
      },
      {
        "label": "Student fee",
        "amount": 900
      },
      {
        "label": "Approximate health insurance",
        "amount": 2136
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 900
      },
      {
        "label": "Incidentals (personal expenses)",
        "amount": 2000
      },
      {
        "label": "Travel",
        "amount": 800
      }
    ],
    "totalText": "$97,716 estimated budget for an international student",
    "note": "Budget published on Bucknell’s page for international financial aid applicants.",
    "billedSubtotal": 91880,
    "studentCategory": "International students"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Bucknell is not need-blind for international applicants; only a small number receive aid, and competition is higher for those with greater need.",
      "howToApply": "Submit the free International Student Application for Financial Assistance (ISAFA) with the application.",
      "note": "Aid for international students is limited and merit awards are partial, so no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "Partial merit scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "A few partial merit scholarships are awarded to international students each year."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": false,
      "forms": [
        "International Student Application for Financial Assistance (ISAFA)",
        "CSS Profile accepted instead"
      ],
      "deadlines": "With the application",
      "note": "Bucknell considers all applicants but chooses only a small number of international students for assistance."
    }
  },
  "sources": [
    {
      "label": "Apply to Bucknell",
      "url": "https://www.bucknell.edu/admissions-aid/apply-bucknell"
    },
    {
      "label": "Admission requirements for international students",
      "url": "https://www.bucknell.edu/admissions-aid/apply-bucknell/undergraduate-admission-requirements/admission-requirements-international-students"
    },
    {
      "label": "Financial aid for international students",
      "url": "https://www.bucknell.edu/admissions-aid/tuition-fees-financial-aid/apply-financial-aid/financial-aid-international-students"
    },
    {
      "label": "Tuition, fees and financial aid",
      "url": "https://www.bucknell.edu/admissions-aid/tuition-fees-financial-aid"
    },
    {
      "label": "Admission requirements for international students",
      "url": "https://www.bucknell.edu/admissions-aid/apply-bucknell/undergraduate-admission-requirements/admission-requirements-international-students"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.bucknell.edu/meet-bucknell/history-traditions"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "accepted English tests",
      "costs",
      "aid for international students",
      "English tests",
      "founding year"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "college-of-the-holy-cross",
  "name": "College of the Holy Cross",
  "shortName": "Holy Cross",
  "country": "us",
  "city": "Worcester",
  "region": "Massachusetts",
  "founded": 1843,
  "type": "Private Jesuit liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#602D89",
    "c2": "#3a1a55",
    "initials": "HC"
  },
  "description": "A Jesuit liberal arts college in Worcester, Massachusetts, test-optional since the class entering in 2006. Holy Cross states that it meets 100% of demonstrated need at the time of admission for all admitted international students, and that this aid is very competitive.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.holycross.edu/",
    "admissions": "https://www.holycross.edu/admissions-aid/how-to-apply",
    "internationalAdmissions": "https://www.holycross.edu/admissions-aid/how-to-apply/international-students",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.holycross.edu/admissions-aid/tuition-financial-aid",
    "financialAid": "https://www.holycross.edu/admissions-aid/tuition-financial-aid/financial-aid",
    "programs": "https://www.holycross.edu/academics/programs",
    "cost": "https://www.holycross.edu/admissions-aid/tuition-financial-aid/tuition-fees"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding; notification on 15 December.",
        "status": "confirmed",
        "source": "https://www.holycross.edu/admissions-aid",
        "verified": "2026-10-01",
        "note": "Holy Cross lists the dates for international students without a year."
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding; notification on 15 February.",
        "status": "confirmed",
        "source": "https://www.holycross.edu/admissions-aid",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Notification in mid-March.",
        "status": "confirmed",
        "source": "https://www.holycross.edu/admissions-aid",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 65,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "Holy Cross offers its own fee waiver on the application in stated cases",
      "note": "Paid electronically with the application."
    },
    "documents": [
      "Common Application or Coalition Application",
      "High school transcript",
      "Two letters of recommendation (counsellor and teacher)",
      "TOEFL, IELTS or Duolingo scores for non-native speakers who did not attend an English-speaking high school",
      "CSS Profile for international students, if applying for aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": "Not required but strongly encouraged; a limited number of virtual interviews are offered",
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "The most competitive applicants score 7 or higher; IELTS Indicator is also accepted."
    },
    "toefl": {
      "min": null,
      "recommended": 100,
      "note": "The most competitive applicants score 100 or higher; the Special Home Edition is accepted."
    },
    "duolingo": {
      "min": null,
      "recommended": 120,
      "note": "The most competitive applicants score 120."
    },
    "waiver": null,
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Submitting scores is completely optional and applicants are not disadvantaged without them."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 70220,
      "billed": 91740,
      "includes": "tuition, standard housing, the resident food plan, the health service fee and the activity fee"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$91,740 in tuition, housing, food and fees",
    "items": [
      {
        "label": "Tuition",
        "amount": 70220
      },
      {
        "label": "Standard housing",
        "amount": 11500
      },
      {
        "label": "Resident food plan",
        "amount": 9090
      },
      {
        "label": "Health service fee",
        "amount": 470
      },
      {
        "label": "Activity fee",
        "amount": 460
      }
    ],
    "totalText": "$91,740 total fees with housing and the food plan",
    "note": "Books, travel, personal costs and health insurance are extra.",
    "billedSubtotal": 91740
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Funding is limited, and Holy Cross describes aid for international applicants as very competitive.",
      "howToApply": "Complete the CSS Profile for international students; a CSS fee waiver can be requested.",
      "note": "Holy Cross states that it meets 100% of demonstrated financial need at the time of admission for all admitted international students."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": true,
      "needBlindInternational": null,
      "forms": [
        "CSS Profile for International Students"
      ],
      "deadlines": "With the application round",
      "note": "Aid must be sought at the time of admission."
    }
  },
  "sources": [
    {
      "label": "Admissions and aid — deadlines",
      "url": "https://www.holycross.edu/admissions-aid"
    },
    {
      "label": "International students",
      "url": "https://www.holycross.edu/admissions-aid/how-to-apply/international-students"
    },
    {
      "label": "Financial aid",
      "url": "https://www.holycross.edu/admissions-aid/tuition-financial-aid/financial-aid"
    },
    {
      "label": "Tuition and fees 2026–2027",
      "url": "https://www.holycross.edu/admissions-aid/tuition-financial-aid/tuition-fees"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.holycross.edu/about/at-a-glance"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "whether admission is need-aware for international applicants"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "sewanee-university-of-the-south",
  "name": "Sewanee: The University of the South",
  "shortName": "Sewanee",
  "country": "us",
  "city": "Sewanee",
  "region": "Tennessee",
  "founded": 1857,
  "type": "Private liberal arts university",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#582C83",
    "c2": "#35194f",
    "initials": "SU"
  },
  "description": "A liberal arts university in Sewanee, Tennessee, with no application fee and a test-optional policy. Its terms for financial aid to international students were not confirmed on the pages read.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://new.sewanee.edu/",
    "admissions": "https://new.sewanee.edu/admission-aid/",
    "internationalAdmissions": "https://new.sewanee.edu/admission-aid/application-process/application-review/international-applicants/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://new.sewanee.edu/admission-aid/cost-financial-aid/",
    "financialAid": "https://new.sewanee.edu/admission-aid/cost-financial-aid/need-based-aid/",
    "programs": "https://new.sewanee.edu/programs-of-study/finding-your-place/",
    "cost": "https://new.sewanee.edu/admission-aid/cost-financial-aid/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Supporting materials by 1 December; notification in mid-December; deposit by 15 January.",
        "status": "confirmed",
        "source": "https://new.sewanee.edu/admission-aid/application-process/application-options-deadlines/",
        "verified": "2026-10-01",
        "note": "Sewanee’s deadlines table lists the dates without a year; its aid page, dated 6 August 2026, refers to the 2027–2028 forms."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Supporting materials by 15 December; notification in late January; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://new.sewanee.edu/admission-aid/application-process/application-options-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Supporting materials by 22 January; notification in late January; deposit by 1 March.",
        "status": "confirmed",
        "source": "https://new.sewanee.edu/admission-aid/application-process/application-options-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Supporting materials by 15 February; notification in early March; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://new.sewanee.edu/admission-aid/application-process/application-options-deadlines/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Sewanee states it has no application fee."
    },
    "documents": [
      "Common Application",
      "School transcript and recommendations",
      "English proficiency test where required"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Recommended minimum 7.0. Sewanee does not accept the IELTS Indicator."
    },
    "toefl": {
      "min": null,
      "recommended": 95,
      "note": "Recommended minimum TOEFL iBT 95; the page does not give a score on the scale used from January 2026. MyBest scores are not accepted; the Home Edition is."
    },
    "duolingo": {
      "min": null,
      "recommended": 115,
      "note": "Recommended minimum 115, sent from the applicant’s Duolingo account."
    },
    "waiver": "A waiver can be requested with A-Level English at grade B or higher, AP English 4 or 5, IB Higher Level Language or Literature 6 or 7, SAT Evidence-Based Reading and Writing 670+, or four years at an English-speaking high school with B+ or higher in English each year.",
    "note": "Required of all international applicants and applicants educated outside the United States. Sewanee does not superscore these exams and does not accept scores more than two years old."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Sewanee describes itself as completely test-optional; applicants choose on the Common Application."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 60088,
      "billed": 78210,
      "includes": "tuition, fees, books, room and the meal plan"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$60,088 tuition · $78,210 comprehensive fee",
    "items": [
      {
        "label": "Tuition",
        "amount": 60088
      },
      {
        "label": "Activities fee",
        "amount": 320
      },
      {
        "label": "Bookstore (First Day Complete programme; students may opt out)",
        "amount": 530
      },
      {
        "label": "Tuition insurance (students may opt out)",
        "amount": 466
      },
      {
        "label": "Room and board",
        "amount": 17272
      },
      {
        "label": "Supplies, health insurance, personal expenses, SEVIS, visa and travel — rough budget for international students",
        "amount": 6000
      }
    ],
    "billedSubtotal": 78210,
    "totalText": "$78,210 comprehensive fee; international students should budget roughly $6,000 more",
    "note": "Sewanee’s admission page gives the 2026–27 comprehensive fee as $78,210, while its 2026–2027 catalog itemises a total of $77,680; the item amounts above are from the catalog. Sewanee reports an average institutional award of just over $34,500 for new students who receive aid.",
    "studentCategory": "International students"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Aid for international students was not confirmed on the pages read, so nothing is claimed."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Not confirmed for international students. The published need-based deadlines (CSS Profile and FAFSA) are 1 December, 1 January, 1 February and 1 March by round."
    }
  },
  "sources": [
    {
      "label": "Application options and deadlines",
      "url": "https://new.sewanee.edu/admission-aid/application-process/application-options-deadlines/"
    },
    {
      "label": "Admission and aid",
      "url": "https://new.sewanee.edu/admission-aid/"
    },
    {
      "label": "Cost and financial aid",
      "url": "https://new.sewanee.edu/admission-aid/cost-financial-aid/"
    },
    {
      "label": "About — history and facts",
      "url": "https://new.sewanee.edu/about-sewanee/history-of-the-university/"
    },
    {
      "label": "English proficiency",
      "url": "https://new.sewanee.edu/admission-aid/application-process/application-review/international-applicant/english-proficiency/"
    },
    {
      "label": "Tuition and fees 2026–2027",
      "url": "https://new.sewanee.edu/admission-aid/cost-financial-aid/tuition-fees/"
    },
    {
      "label": "Catalog 2026–2027 — tuition and fees",
      "url": "https://e-catalog.sewanee.edu/arts-sciences/admission-expenses-financial-aid/tuition-fees/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "founding year",
      "English tests and scores",
      "tuition and costs"
    ],
    "unconfirmed": [
      "aid for international students"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "rhodes-college",
  "name": "Rhodes College",
  "shortName": "Rhodes",
  "country": "us",
  "city": "Memphis",
  "region": "Tennessee",
  "founded": 1848,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#A6192E",
    "c2": "#63101c",
    "initials": "RC"
  },
  "description": "A liberal arts college in Memphis, Tennessee. Rhodes states that it meets the demonstrated need of admitted international students and offers merit scholarships from $20,000 a year up to full tuition, but its international admission is need-aware and extremely competitive for those seeking significant aid.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.rhodes.edu/",
    "admissions": "https://www.rhodes.edu/admission-aid",
    "internationalAdmissions": "https://www.rhodes.edu/admission-aid/international-student-admission/international-application-checklist",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.rhodes.edu/admission-aid/international-student-admission/international-student-financial-aid",
    "financialAid": "https://www.rhodes.edu/admission-aid/international-student-admission/international-student-financial-aid",
    "programs": "https://www.rhodes.edu/academics",
    "cost": "https://www.rhodes.edu/admission-aid/cost-affordability/tuition-fees"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding: for applicants committing to Rhodes.",
        "status": "confirmed",
        "source": "https://www.rhodes.edu/admission-aid",
        "verified": "2026-10-01",
        "note": "Rhodes lists the dates without a year on its current admission page."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding.",
        "status": "confirmed",
        "source": "https://www.rhodes.edu/admission-aid",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Listed on the financial aid deadlines table, with aid notification within two weeks of completion.",
        "status": "confirmed",
        "source": "https://www.rhodes.edu/admission-aid/cost-affordability/first-year-financial-aid",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Financial aid application by 31 January; aid notification on 9 March.",
        "status": "confirmed",
        "source": "https://www.rhodes.edu/admission-aid",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Rhodes’s 2025–26 Common Data Set (section C13) says the college has no application fee."
    },
    "documents": [
      "Common Application",
      "High school transcript translated into English",
      "Teacher recommendation and School Report Form",
      "TOEFL, IELTS or Duolingo scores if English is not your native language",
      "Rhodes Non-US Citizen Financial Information Form (in the Rhodes portal)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Applicants competitive for admission are recommended to score at least 7.0."
    },
    "toefl": {
      "min": null,
      "recommended": 95,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 95
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 5
        }
      ],
      "note": "Recommended: at least 5.0 on the new scale, or 95 on tests taken before January 2026."
    },
    "duolingo": {
      "min": null,
      "recommended": 130,
      "note": "Recommended: at least 130. A separate Rhodes FAQ page mentions 120."
    },
    "waiver": null,
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT or ACT scores are optional; international students who do not submit them may be asked to take part in a virtual interview."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 60240,
      "billed": 77856,
      "includes": "tuition, mandatory fees, housing and the meal plan, and international health insurance"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$77,856 for an international student",
    "items": [
      {
        "label": "Tuition",
        "amount": 60240
      },
      {
        "label": "Mandatory fees",
        "amount": 820
      },
      {
        "label": "Housing and meal plan",
        "amount": 15196
      },
      {
        "label": "International health insurance",
        "amount": 1600
      }
    ],
    "totalText": "$77,856 including international health insurance",
    "note": "Published on Rhodes’s page for international financial aid; the page does not print the academic year. Books, travel and personal costs are extra.",
    "billedSubtotal": 77856,
    "studentCategory": "International students"
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based and merit",
      "covers": {
        "tuition": true,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Admission is need-aware and extremely competitive for international students seeking significant financial aid.",
      "howToApply": "Complete the Rhodes Non-US Citizen Financial Information Form in the applicant portal; the CSS Profile is not required.",
      "note": "Rhodes states that it meets the demonstrated need of admitted international students on student visas, usually through merit scholarships, institutional aid and work study; merit scholarships go up to full tuition. Housing and meals are not named as covered by a single award."
    },
    "merit": [
      {
        "name": "Merit-based scholarships",
        "amount": "US$20,000 per year up to full tuition",
        "internationalEligible": true,
        "deadline": null,
        "note": "International applicants are considered; named awards include the Cambridge ($45,000), Presidential ($40,000) and Founders ($38,000) scholarships."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": true,
      "needBlindInternational": false,
      "forms": [
        "Rhodes Non-US Citizen Financial Information Form"
      ],
      "deadlines": "With the application",
      "note": "Rhodes does not require the CSS Profile from international students and offers no CSS fee waivers."
    }
  },
  "sources": [
    {
      "label": "Admission and aid — deadlines",
      "url": "https://www.rhodes.edu/admission-aid"
    },
    {
      "label": "International application checklist",
      "url": "https://www.rhodes.edu/admission-aid/international-student-admission/international-application-checklist"
    },
    {
      "label": "International student financial aid",
      "url": "https://www.rhodes.edu/admission-aid/international-student-admission/international-student-financial-aid"
    },
    {
      "label": "First-year financial aid deadlines",
      "url": "https://www.rhodes.edu/admission-aid/cost-affordability/first-year-financial-aid"
    },
    {
      "label": "Rhodes College Common Data Set 2025–26 (section C13)",
      "url": "https://www.rhodes.edu/sites/default/files/2026-05/CDS_2025-26_(New_Update).xlsx"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.rhodes.edu/about-rhodes/college-history"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests",
      "costs for international students",
      "aid for international students",
      "application fee",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "centre-college",
  "name": "Centre College",
  "shortName": "Centre",
  "country": "us",
  "city": "Danville",
  "region": "Kentucky",
  "founded": 1819,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#C99700",
    "c2": "#231F20",
    "initials": "CC"
  },
  "description": "A liberal arts college in Danville, Kentucky, free to apply to and test-optional. Centre says plainly that it does not offer full need-based funding to international students: they should expect to contribute about $25,000 a year, and the Lincoln Scholars Program is the only route to full funding.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.centre.edu/",
    "admissions": "https://www.centre.edu/apply",
    "internationalAdmissions": "https://www.centre.edu/admission-aid/international-applicants",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.centre.edu/admission-aid/scholarships-fellowships",
    "financialAid": "https://www.centre.edu/admission-aid/international-applicants/international-student-financial-aid",
    "programs": "https://www.centre.edu/academics",
    "cost": "https://www.centre.edu/admission-aid/cost-affordability"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding. Admission notification 1 December; deposit by 15 January.",
        "status": "confirmed",
        "source": "https://www.centre.edu/admission-aid/international-applicants",
        "verified": "2026-10-01",
        "note": "Centre lists the dates without a year on its current page for international applicants."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding. Notification in mid-February; deposit by 1 May. Centre recommends this plan or Regular Decision to applicants who need significant aid.",
        "status": "confirmed",
        "source": "https://www.centre.edu/admission-aid/international-applicants",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding. Notification 15 February; deposit by 1 March.",
        "status": "confirmed",
        "source": "https://www.centre.edu/admission-aid/international-applicants",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Notification 1 April; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://www.centre.edu/admission-aid/international-applicants",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Centre states that applying is completely free."
    },
    "documents": [
      "Common Application",
      "High school transcripts and academic records",
      "Proof of English proficiency",
      "Secondary School Report and teacher recommendation",
      "Certificate of Finance Form"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 7,
      "recommended": null,
      "note": "Stated as the required minimum."
    },
    "toefl": {
      "min": 93,
      "recommended": null,
      "note": "TOEFL iBT 93 is stated as the required minimum; the new-scale equivalent was not read."
    },
    "duolingo": {
      "min": 125,
      "recommended": null,
      "note": "Duolingo English Test 125 is listed among the minimum scores."
    },
    "waiver": "Students who completed their high school curriculum in English, such as an IB or Cambridge A-Level programme, can request a waiver.",
    "note": "Pearson PTE 64 is also listed."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Centre has a test-optional admission policy; SAT/ACT scores are optional for international applicants too."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 57500,
      "billed": 73990,
      "includes": "tuition, housing, food and the student fee"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$73,990 cost of attendance",
    "items": [
      {
        "label": "Tuition",
        "amount": 57500
      },
      {
        "label": "Housing",
        "amount": 7870
      },
      {
        "label": "Food",
        "amount": 7870
      },
      {
        "label": "Student fee",
        "amount": 750
      }
    ],
    "totalText": "$73,990 for tuition, housing, food and the student fee",
    "note": "Centre sets its cost as a comprehensive fee; books, travel and personal costs are extra.",
    "billedSubtotal": 73990
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "merit (Lincoln Scholars Program)",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Ten incoming students are chosen for each premier scholarship programme.",
      "howToApply": "Submit the separate Lincoln Scholars application along with the Common Application.",
      "note": "The Lincoln Scholars Program covers full tuition, fees, room and board plus additional funds, and Centre names it as the only way to secure full funding as an international student. Centre does not offer full need-based funding."
    },
    "merit": [
      {
        "name": "Lincoln Scholars Program",
        "amount": "Full tuition, fees, room and board, plus wraparound funds",
        "internationalEligible": true,
        "deadline": null,
        "note": "Separate application required; the deadline was not confirmed during this check."
      },
      {
        "name": "General merit scholarships",
        "amount": "$20,000–$45,000 per academic year",
        "internationalEligible": true,
        "deadline": null,
        "note": "International applicants are considered automatically."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [
        "Certificate of Finance Form"
      ],
      "deadlines": "With the application",
      "note": "International students should be prepared to contribute approximately $25,000 per year."
    }
  },
  "sources": [
    {
      "label": "International applicants — deadlines",
      "url": "https://www.centre.edu/admission-aid/international-applicants"
    },
    {
      "label": "International admission requirements",
      "url": "https://www.centre.edu/admission-aid/international-applicants/international-admission-requirements"
    },
    {
      "label": "International student financial aid",
      "url": "https://www.centre.edu/admission-aid/international-applicants/international-student-financial-aid"
    },
    {
      "label": "Cost and affordability 2026–2027",
      "url": "https://www.centre.edu/admission-aid/cost-affordability"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.centre.edu/about/history"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "Lincoln Scholars deadline"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "college-of-wooster",
  "name": "The College of Wooster",
  "shortName": "Wooster",
  "country": "us",
  "city": "Wooster",
  "region": "Ohio",
  "founded": 1866,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#FFC72C",
    "c2": "#231F20",
    "initials": "CW"
  },
  "description": "A liberal arts college in Wooster, Ohio, known for its required senior Independent Study. It has a test-flexible policy for international students and offers its own free financial aid forms; how much need it meets for them was not confirmed on the pages read.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://wooster.edu/",
    "admissions": "https://wooster.edu/apply",
    "internationalAdmissions": "https://wooster.edu/admissions/international-students",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://wooster.edu/admissions/scholarship-aid",
    "financialAid": "https://wooster.edu/admissions/financial-aid",
    "programs": "https://wooster.edu/academics",
    "cost": "https://wooster.edu/admissions/scholarship-aid"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "International first-year applicants, fall 2027 start",
        "conditions": "Binding. Notification 15 November; deposit by 1 December.",
        "status": "confirmed",
        "source": "https://wooster.edu/admissions/international-students",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "International first-year applicants, fall 2027 start",
        "conditions": "Not binding. Notification 31 December 2026; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://wooster.edu/admissions/international-students",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "International first-year applicants, fall 2027 start",
        "conditions": "Binding. Notification 1 February 2027; deposit by 15 February.",
        "status": "confirmed",
        "source": "https://wooster.edu/admissions/international-students",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "International first-year applicants, fall 2027 start",
        "conditions": "Notification 1 April; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://wooster.edu/admissions/international-students",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision — spring 2027 start",
        "kind": "RD",
        "entryTerm": "Spring",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "International applicants, spring 2027 start",
        "conditions": "Notification 5 December; deposit by 15 December.",
        "status": "confirmed",
        "source": "https://wooster.edu/admissions/international-students",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Wooster’s 2025–26 Common Data Set (section C13) says the college has no application fee."
    },
    "documents": [
      "Essay, included in the application",
      "Official secondary school transcript",
      "Secondary School Report with counsellor recommendation",
      "Teacher recommendation",
      "Proof of English proficiency",
      "Wooster International Certification of Finances"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": null,
      "note": "Accepted (TRF forms can be emailed); Wooster gives a figure only for TOEFL “or equivalent”."
    },
    "toefl": {
      "min": null,
      "recommended": 80,
      "note": "Minimum recommended score of 80 to be considered for admission; the new-scale equivalent is not given."
    },
    "duolingo": {
      "min": null,
      "recommended": null,
      "note": "Accepted; includes a short video interview. No score is stated."
    },
    "waiver": null,
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Wooster is test-optional, and SAT/ACT scores are not used for merit scholarships. For international students it describes a test-flexible policy: one of ACT, SAT, TOEFL, IELTS, PTE Academic or Duolingo is preferred.",
      "label": "Test-flexible for international students"
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 66290,
      "billed": 82340,
      "includes": "tuition and fees, a standard double room and the meal plan"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$82,340 comprehensive fee",
    "items": [
      {
        "label": "Tuition and fees",
        "amount": 66290
      },
      {
        "label": "Housing (standard double)",
        "amount": 7835
      },
      {
        "label": "Meal plan",
        "amount": 8215
      }
    ],
    "totalText": "$82,340 comprehensive fee before aid",
    "note": "Books, travel and personal costs are extra.",
    "billedSubtotal": 82340
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": "Submit the Wooster Certification of Finances in the admissions portal.",
      "note": "Wooster says 99% of admitted students receive some form of aid, but the pages read do not state what share of an international student’s need is met."
    },
    "merit": [
      {
        "name": "Merit-based scholarships",
        "amount": null,
        "internationalEligible": null,
        "deadline": null,
        "note": "SAT/ACT scores are not considered for merit scholarships; amounts and international eligibility were not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [
        "Wooster Certification of Finances"
      ],
      "deadlines": "With the application",
      "note": "Wooster provides its own financial aid forms free of charge and does not require the CSS Profile."
    }
  },
  "sources": [
    {
      "label": "International student admissions — fall 2027 deadlines",
      "url": "https://wooster.edu/admissions/international-students"
    },
    {
      "label": "Apply",
      "url": "https://wooster.edu/apply"
    },
    {
      "label": "Scholarships and aid — 2026–27 fees",
      "url": "https://wooster.edu/admissions/scholarship-aid"
    },
    {
      "label": "The College of Wooster Common Data Set 2025–26 (section C13)",
      "url": "https://inside.wooster.edu/consumer-and-accreditation-information/common-data-sets/"
    },
    {
      "label": "About — history and facts",
      "url": "https://catalog.wooster.edu/content.php?catoid=9&navoid=220"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "accepted English tests",
      "costs",
      "application fee",
      "founding year"
    ],
    "unconfirmed": [
      "IELTS and Duolingo scores",
      "share of need met for international students",
      "merit scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "st-olaf-college",
  "name": "St. Olaf College",
  "shortName": "St. Olaf",
  "country": "us",
  "city": "Northfield",
  "region": "Minnesota",
  "founded": 1874,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#E4A01B",
    "c2": "#231F20",
    "initials": "SO"
  },
  "description": "A liberal arts college in Northfield, Minnesota, with no application fee. For international students who did not attend a United World College, St. Olaf says its grants and scholarships can reach 100% of tuition but will not cover all of room and board — it estimates about $20,000 a year remains.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://wp.stolaf.edu/",
    "admissions": "https://wp.stolaf.edu/admissions/apply/checklist-and-deadlines/",
    "internationalAdmissions": "https://wp.stolaf.edu/international-applications/checklist/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://wp.stolaf.edu/financialaid/international-student-information/",
    "financialAid": "https://wp.stolaf.edu/financialaid/international-student-information/",
    "programs": "https://wp.stolaf.edu/academics/",
    "cost": "https://wp.stolaf.edu/admissions/afford/"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision 1",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Admission notification in early December; financial aid notification 9 December. CSS Profile or ISFAA by 1 November.",
        "status": "confirmed",
        "source": "https://wp.stolaf.edu/admissions/apply/checklist-and-deadlines/",
        "verified": "2026-10-01",
        "note": "St. Olaf lists the round dates without a year; its financial aid page gives the same dates for students applying for fall 2027."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Admission notification in late December; aid notification 9 January. CSS Profile or ISFAA by 1 November.",
        "status": "confirmed",
        "source": "https://wp.stolaf.edu/admissions/apply/checklist-and-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision 2",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Notification in early February; aid notification 8 February. CSS Profile or ISFAA by 15 January.",
        "status": "confirmed",
        "source": "https://wp.stolaf.edu/admissions/apply/checklist-and-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Admission notification in late February; aid notification 6 March. CSS Profile or ISFAA by 15 January.",
        "status": "confirmed",
        "source": "https://wp.stolaf.edu/admissions/apply/checklist-and-deadlines/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "St. Olaf does not charge an application fee."
    },
    "documents": [
      "Common Application or Coalition Application",
      "Official high school transcript",
      "TOEFL, Academic IELTS or Duolingo score",
      "CSS Profile or International Student Financial Aid Application (ISFAA), if applying for aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Academic IELTS minimum band 6.5."
    },
    "toefl": {
      "min": 90,
      "recommended": null,
      "note": "TOEFL minimum score 90; the new-scale equivalent is not given."
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "Duolingo minimum score 120."
    },
    "waiver": "Waived automatically if English is your first language or your primary language of instruction.",
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT or ACT scores are optional for international applicants; self-reported scores are accepted."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 65700,
      "billed": 81200,
      "includes": "tuition, housing and the meal plan, and the activities fee"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$81,200 comprehensive fee",
    "items": [
      {
        "label": "Tuition",
        "amount": 65700
      },
      {
        "label": "Housing and meal plan",
        "amount": 15000
      },
      {
        "label": "Activities fee",
        "amount": 500
      }
    ],
    "totalText": "$81,200 comprehensive fee, plus about $1,900 in books and personal expenses",
    "note": "The page read does not print the academic year.",
    "billedSubtotal": 81200
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": true,
        "housing": false,
        "meals": false,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "About 60% of St. Olaf’s roughly 300 international students attended a United World College.",
      "howToApply": "Submit the CSS Profile or the ISFAA by your round’s aid deadline.",
      "note": "For non-UWC international students, institutional need-based grants plus merit scholarships can reach up to 100% of tuition, but St. Olaf states they will not cover all room and board — around $20,000 a year remains. So full tuition can be covered, a full ride is not."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Most aid for international students is need-based, but they may apply for merit scholarships."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [
        "CSS Profile",
        "International Student Financial Aid Application (ISFAA)"
      ],
      "deadlines": "1 November (ED 1 and Early Action), 15 January (ED 2 and Regular Decision)",
      "note": "International student loans of up to $4,000 a year are also offered."
    }
  },
  "sources": [
    {
      "label": "Checklist and deadlines",
      "url": "https://wp.stolaf.edu/admissions/apply/checklist-and-deadlines/"
    },
    {
      "label": "International applications checklist",
      "url": "https://wp.stolaf.edu/international-applications/checklist/"
    },
    {
      "label": "International student financial aid — fall 2027",
      "url": "https://wp.stolaf.edu/financialaid/international-student-information/"
    },
    {
      "label": "Afford",
      "url": "https://wp.stolaf.edu/admissions/afford/"
    },
    {
      "label": "About — history and facts",
      "url": "https://wp.stolaf.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "knox-college",
  "name": "Knox College",
  "shortName": "Knox",
  "country": "us",
  "city": "Galesburg",
  "region": "Illinois",
  "founded": 1837,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#4B2E83",
    "c2": "#2c1a4d",
    "initials": "KC"
  },
  "description": "A liberal arts college in Galesburg, Illinois, with no application fee, a test-optional policy and non-binding rounds only. Knox advertises academic scholarships of up to $50,000 a year; its terms for need-based aid to international students were not confirmed on the pages read.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.knox.edu/",
    "admissions": "https://www.knox.edu/admission/apply-to-knox",
    "internationalAdmissions": "https://www.knox.edu/admission/apply-to-knox/international-applicants",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.knox.edu/admission/scholarships",
    "financialAid": "https://www.knox.edu/admission/cost-and-financial-aid",
    "programs": "https://www.knox.edu/academics",
    "cost": "https://www.knox.edu/admission/cost-and-financial-aid"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Knox application"
    ],
    "deadlines": [
      {
        "name": "Early Action 1",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Decision by 15 December; enrol by 1 May.",
        "status": "confirmed",
        "source": "https://www.knox.edu/admission/apply-to-knox",
        "verified": "2026-10-01",
        "note": "Knox lists the dates for fall-term enrolment without a year."
      },
      {
        "name": "Early Action 2",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Decision by 15 January; enrol by 1 May.",
        "status": "confirmed",
        "source": "https://www.knox.edu/admission/apply-to-knox",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Decision by 15 March; enrol by 1 May. After 15 January applications are read on a rolling, space-available basis.",
        "status": "confirmed",
        "source": "https://www.knox.edu/admission/apply-to-knox",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Knox has no application fee."
    },
    "documents": [
      "Application",
      "Secondary school transcript",
      "English proficiency test (IELTS, TOEFL or Duolingo)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Overall score of 6.5 or above is required to complete the application."
    },
    "toefl": {
      "min": 80,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 80,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ],
      "note": "Overall 80, or 4.5 for tests taken after January 2026."
    },
    "duolingo": {
      "min": 115,
      "recommended": null,
      "note": "Overall score of 115."
    },
    "waiver": "Exemptions include two consecutive years of full-time high school or university study in the US; scores must be less than two years old.",
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "ACT or SAT scores are optional for most applicants."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 61998,
      "billed": 74757,
      "budget": 78217,
      "includes": "tuition, room and board and fees are charged by Knox; the estimate adds books, transportation and personal expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$74,757 in tuition, room, board and fees",
    "items": [
      {
        "label": "Tuition",
        "amount": 61998
      },
      {
        "label": "Room and board",
        "amount": 11862
      },
      {
        "label": "Fees",
        "amount": 897
      },
      {
        "label": "Books, materials and equipment",
        "amount": 1200
      },
      {
        "label": "Average transportation",
        "amount": 750
      }
    ],
    "totalText": "$74,757 charged by Knox; $78,217 estimated cost of attendance on campus",
    "note": "Knox advises families to expect annual increases of 4% to 6%.",
    "billedSubtotal": 74757
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Aid for international students was not confirmed on the pages read, so no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "Academic scholarships",
        "amount": "Up to $50,000 per year",
        "internationalEligible": null,
        "deadline": null,
        "note": "Knox advertises this amount for applicants generally; eligibility of international students was not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Not confirmed for international students during this check."
    }
  },
  "sources": [
    {
      "label": "Apply to Knox — dates",
      "url": "https://www.knox.edu/admission/apply-to-knox"
    },
    {
      "label": "International applicants",
      "url": "https://www.knox.edu/admission/apply-to-knox/international-applicants"
    },
    {
      "label": "Cost and financial aid 2026–2027",
      "url": "https://www.knox.edu/admission/cost-and-financial-aid"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.knox.edu/about-knox"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "founding year"
    ],
    "unconfirmed": [
      "aid for international students",
      "scholarship eligibility of international students"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "beloit-college",
  "name": "Beloit College",
  "shortName": "Beloit",
  "country": "us",
  "city": "Beloit",
  "region": "Wisconsin",
  "founded": 1846,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#003DA5",
    "c2": "#C5B783",
    "initials": "BC"
  },
  "description": "A liberal arts college in Beloit, Wisconsin, with no application fee and a firmly test-optional policy. Beloit states that it does not offer full-ride scholarships: merit awards reach up to $50,000 a year, a limited number of full-tuition scholarships exist, and admission is need-aware.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.beloit.edu/",
    "admissions": "https://www.beloit.edu/admission/apply/",
    "internationalAdmissions": "https://www.beloit.edu/admission/apply/international-applicants/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.beloit.edu/admission/tuition-aid/scholarships/",
    "financialAid": "https://www.beloit.edu/admission/tuition-aid/international-student-aid/",
    "programs": "https://www.beloit.edu/academics/",
    "cost": "https://www.beloit.edu/offices/financial-aid/cost-of-attendance/"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Beloit application"
    ],
    "deadlines": [
      {
        "name": "Early Action I",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Application complete by 1 November; admission decision by 1 December; financial aid offers from 15 December.",
        "status": "confirmed",
        "source": "https://www.beloit.edu/admission/tuition-aid/need-based-aid/",
        "verified": "2026-10-01",
        "note": "Beloit lists the round dates without a year; its application page gives 15 January as the preferred deadline for fall 2027 enrolment."
      },
      {
        "name": "Early Action II",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Application complete by 1 December; decision by 1 January; aid offers from 15 January.",
        "status": "confirmed",
        "source": "https://www.beloit.edu/admission/tuition-aid/need-based-aid/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Preferred deadline for fall 2027 enrolment; decisions are rolling from mid-February and aid offers from late February.",
        "status": "confirmed",
        "source": "https://www.beloit.edu/admission/tuition-aid/need-based-aid/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "There is no fee to apply to Beloit."
    },
    "documents": [
      "Common Application or Beloit application",
      "School transcript",
      "English proficiency test",
      "Beloit International Student Financial Aid Application, CSS Profile or the International ACAC aid application, if applying for aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Minimum band score 6.5."
    },
    "toefl": {
      "min": 80,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 80,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4,
          "recommended": null
        }
      ],
      "note": "Minimum 80 before 21 January 2026; from then, 4.0 with no subscore below 4.0. TOEFL Essentials is also accepted."
    },
    "duolingo": {
      "min": 115,
      "recommended": null,
      "note": "Minimum score 115."
    },
    "waiver": null,
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Beloit is test-optional for both admission and merit scholarships."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 63792,
      "billed": 77532,
      "budget": 83620,
      "includes": "tuition, the activity fee, housing, food and health fees are direct costs; the total adds health insurance, books and personal expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$77,532 direct costs · $83,620 with indirect costs",
    "items": [
      {
        "label": "Tuition",
        "amount": 63792
      },
      {
        "label": "Student activity fee",
        "amount": 280
      },
      {
        "label": "Housing (double occupancy)",
        "amount": 6882
      },
      {
        "label": "Food (full meal plan, required in the first year)",
        "amount": 6314
      },
      {
        "label": "Health and wellness fees",
        "amount": 264
      },
      {
        "label": "Health insurance",
        "amount": 2556
      },
      {
        "label": "Books, course materials, supplies and equipment (estimate)",
        "amount": 1221
      },
      {
        "label": "Personal expenses (estimate)",
        "amount": 2311
      }
    ],
    "totalText": "$77,532 in direct costs, plus $6,088 in indirect costs",
    "note": "All international students must purchase the college’s health insurance.",
    "billedSubtotal": 77532
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": true,
      "basis": null,
      "covers": {
        "tuition": true,
        "housing": false,
        "meals": false,
        "insurance": false,
        "books": false
      },
      "renewable": null,
      "competitiveness": "Beloit is need-aware; need-based aid becomes more competitive as an applicant’s need increases.",
      "howToApply": "File the Beloit International Student Financial Aid Application, the CSS Profile or the International ACAC application.",
      "note": "Beloit states that it does not offer full-ride scholarships. A limited number of full-tuition scholarships are awarded each year on need and merit."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": "Up to $50,000 per year",
        "internationalEligible": true,
        "deadline": null,
        "note": "All international applicants are considered; the average scholarship awarded to international students is $35,000 a year."
      },
      {
        "name": "Full-tuition scholarships",
        "amount": "Full tuition",
        "internationalEligible": true,
        "deadline": null,
        "note": "A limited number each year, very competitive, based on financial need and merit; the admissions committee contacts qualifying students."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": false,
      "forms": [
        "Beloit International Student Financial Aid Application",
        "CSS Profile",
        "International ACAC International Student Financial Aid Application"
      ],
      "deadlines": "With the application round",
      "note": "Need not covered by merit scholarships may be met with Beloit loans; all international students are eligible for campus employment."
    }
  },
  "sources": [
    {
      "label": "Need-based aid — application rounds",
      "url": "https://www.beloit.edu/admission/tuition-aid/need-based-aid/"
    },
    {
      "label": "International student aid",
      "url": "https://www.beloit.edu/admission/tuition-aid/international-student-aid/"
    },
    {
      "label": "English proficiency",
      "url": "https://www.beloit.edu/admission/apply/international-applicants/english-proficiency/"
    },
    {
      "label": "Cost of attendance 2026–27",
      "url": "https://www.beloit.edu/offices/financial-aid/cost-of-attendance/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.beloit.edu/our-story/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "lawrence-university",
  "name": "Lawrence University",
  "shortName": "Lawrence",
  "country": "us",
  "city": "Appleton",
  "region": "Wisconsin",
  "founded": 1847,
  "type": "Private liberal arts college and music conservatory",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#00205B",
    "c2": "#001238",
    "initials": "LU"
  },
  "description": "A liberal arts college and conservatory of music in Appleton, Wisconsin, test-optional since 2005 and free to apply to. Lawrence says it offers generous international scholarships and grants, but that full scholarships are not available and every student must contribute to the cost.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.lawrence.edu/",
    "admissions": "https://www.lawrence.edu/admissions-aid/apply/",
    "internationalAdmissions": "https://inside.lawrence.edu/admissions-aid/international-admissions/admission-requirements",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.lawrence.edu/admissions-aid/aid-affordability/scholarships/",
    "financialAid": "https://inside.lawrence.edu/admissions-aid/international-admissions/admission-requirements",
    "programs": "https://www.lawrence.edu/academics",
    "cost": "https://www.lawrence.edu/admissions-aid/aid-affordability/"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Lawrence application"
    ],
    "deadlines": [
      {
        "name": "Early Decision",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notified by 1 December 2026.",
        "status": "confirmed",
        "source": "https://www.lawrence.edu/admissions-aid/apply/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Action — Conservatory applicants",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "Applicants to the Conservatory of Music",
        "conditions": "Not binding; notified by 15 January 2027.",
        "status": "confirmed",
        "source": "https://www.lawrence.edu/admissions-aid/apply/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; notified by 15 January 2027.",
        "status": "confirmed",
        "source": "https://www.lawrence.edu/admissions-aid/apply/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision 2",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notified by 1 February 2027.",
        "status": "confirmed",
        "source": "https://www.lawrence.edu/admissions-aid/apply/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Notified by 1 April 2027. Lawrence continues to accept applications after 15 January.",
        "status": "confirmed",
        "source": "https://www.lawrence.edu/admissions-aid/apply/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Lawrence does not charge an application fee."
    },
    "documents": [
      "Application",
      "School transcript",
      "English proficiency evidence",
      "Lawrence University Certification of Finance with supporting documents"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "6.5 out of 9 overall band score."
    },
    "toefl": {
      "min": 80,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 80,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4,
          "recommended": null
        }
      ],
      "note": "Overall minimum 80 before 21 January 2026; 4.0 on the new 1–6 scale, which Lawrence calls an approximate equivalent."
    },
    "duolingo": {
      "min": 115,
      "recommended": null,
      "note": "Minimum score of 115."
    },
    "waiver": null,
    "note": "English can also be shown by SAT Evidence-Based Reading and Writing 580 or ACT English/Writing 24."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Lawrence has been test-optional since 2005; scores are not required for admission or scholarships."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 61407,
      "billed": 75558,
      "includes": "tuition, fees, a double room and the 19-meal plan"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$75,558 in tuition, fees, housing and meals",
    "items": [
      {
        "label": "Tuition",
        "amount": 61407
      },
      {
        "label": "Fees",
        "amount": 312
      },
      {
        "label": "Housing (double room)",
        "amount": 7047
      },
      {
        "label": "Meal plan",
        "amount": 6792
      }
    ],
    "totalText": "$75,558 per year for tuition, fees, a double room and the meal plan",
    "note": "Lawrence quotes these per term (three terms a year); the page read does not print the academic year.",
    "billedSubtotal": 75558
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": true,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": "Complete the Lawrence University Certification of Finance; no other aid form such as the CSS Profile is accepted.",
      "note": "Lawrence states that full scholarships are not available to international students and that they must contribute financially."
    },
    "merit": [
      {
        "name": "International scholarships and grants",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Described as generous; amounts were not confirmed during this check."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [
        "Lawrence University Certification of Finance"
      ],
      "deadlines": "With the application",
      "note": "Supporting bank, employer or sponsor documents are required with the form."
    }
  },
  "sources": [
    {
      "label": "Apply — rounds and dates",
      "url": "https://www.lawrence.edu/admissions-aid/apply/"
    },
    {
      "label": "International admission requirements",
      "url": "https://inside.lawrence.edu/admissions-aid/international-admissions/admission-requirements"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.lawrence.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs",
      "scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "earlham-college",
  "name": "Earlham College",
  "shortName": "Earlham",
  "country": "us",
  "city": "Richmond",
  "region": "Indiana",
  "founded": 1847,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#861F41",
    "c2": "#4f1227",
    "initials": "EC"
  },
  "description": "A liberal arts college in Richmond, Indiana, test-optional for the SAT and ACT. Earlham says international students who did not attend a United World College need to be able to contribute at least $25,000 in the first year; UWC graduates are eligible for special Davis funding.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://earlham.edu/",
    "admissions": "https://earlham.edu/admissions/how-to-apply/",
    "internationalAdmissions": "https://earlham.edu/admissions/how-to-apply/international-admissions/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://earlham.edu/cost-affordability/",
    "financialAid": "https://earlham.edu/cost-affordability/financial-aid-faq/",
    "programs": "https://earlham.edu/academics/",
    "cost": "https://earlham.edu/cost-affordability/tuition-and-costs/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding. Early applicants can apply for additional scholarships and are invited to Scholarship Day.",
        "status": "confirmed",
        "source": "https://earlham.edu/admissions/how-to-apply/international-admissions/",
        "verified": "2026-10-01",
        "note": "Earlham’s international admissions page lists these dates without a year; its general page gives different dates (1 November, 1 December and 1 February) for other applicants."
      },
      {
        "name": "Early Action 1",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding.",
        "status": "confirmed",
        "source": "https://earlham.edu/admissions/how-to-apply/international-admissions/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Action 2",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-15",
        "date": "15 December 2026",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding.",
        "status": "confirmed",
        "source": "https://earlham.edu/admissions/how-to-apply/international-admissions/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "The last round for international applicants.",
        "status": "confirmed",
        "source": "https://earlham.edu/admissions/how-to-apply/international-admissions/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Earlham’s 2025–26 Common Data Set (section C13) says the college has no application fee."
    },
    "documents": [
      "Common Application",
      "School transcript",
      "English test score report",
      "Financial information (required from every international applicant)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6,
      "recommended": 7,
      "note": "Required total 6.0; recommended 7.0."
    },
    "toefl": {
      "min": 79,
      "recommended": 92,
      "note": "Required total 79; recommended 92. The new-scale equivalent is not given."
    },
    "duolingo": {
      "min": 115,
      "recommended": 125,
      "note": "Required total 115; recommended 125."
    },
    "waiver": null,
    "note": "Earlham says its SEVIS registration requires compliance with these scores. GTEC, ISA, Cambridge, Pearson, SAT and ACT are also accepted as proof of English."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Earlham is test-optional for the SAT and ACT; scores help with placement and merit scholarships."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 56784,
      "billed": 73526,
      "includes": "tuition, housing, the meal plan and fees"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$73,526 in tuition, housing, meals and fees",
    "items": [
      {
        "label": "Tuition",
        "amount": 56784
      },
      {
        "label": "Housing",
        "amount": 8300
      },
      {
        "label": "Meal plan",
        "amount": 7462
      },
      {
        "label": "Fees",
        "amount": 980
      },
      {
        "label": "Books and supplies",
        "amount": 1000
      },
      {
        "label": "Personal expenses",
        "amount": 1124
      },
      {
        "label": "Health insurance (if not otherwise covered)",
        "amount": 2285
      }
    ],
    "totalText": "$73,526 billed for a student living on campus",
    "note": "The page read does not print the academic year. Books, personal expenses and health insurance are estimated separately.",
    "billedSubtotal": 73526
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": "Provide the International Student Financial Information Form with the application.",
      "note": "Non-UWC international students must be able to contribute at least $25,000 in the first year, rising with costs, so no full-scholarship route is claimed for them. UWC graduates should ask about Davis UWC Scholars funding."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "The International Financial Aid Committee sets the level of merit scholarship and institutional aid."
      },
      {
        "name": "Davis UWC Scholars Program",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Special funding for graduates of United World Colleges."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [
        "International Student Financial Information Form"
      ],
      "deadlines": "1 March (first year only)",
      "note": "An application cannot be evaluated without the financial information."
    }
  },
  "sources": [
    {
      "label": "International admissions",
      "url": "https://earlham.edu/admissions/how-to-apply/international-admissions/"
    },
    {
      "label": "Tuition and costs",
      "url": "https://earlham.edu/cost-affordability/tuition-and-costs/"
    },
    {
      "label": "Financial aid FAQ",
      "url": "https://earlham.edu/cost-affordability/financial-aid-faq/"
    },
    {
      "label": "Earlham College Common Data Set 2025–26 (section C13)",
      "url": "https://earlham.edu/wp-content/uploads/2026/04/Earlham-College_CDS-2025-2026_PDF.pdf"
    },
    {
      "label": "About — history and facts",
      "url": "https://earlham.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines for international applicants",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "application fee",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "whitman-college",
  "name": "Whitman College",
  "shortName": "Whitman",
  "country": "us",
  "city": "Walla Walla",
  "region": "Washington",
  "founded": 1859,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#00205B",
    "c2": "#FFC72C",
    "initials": "WC"
  },
  "description": "A liberal arts college in Walla Walla, Washington. Whitman states that it will meet 100% of demonstrated need for international students who are offered admission, and also awards merit scholarships; it is test-optional but strongly encourages international applicants to send an SAT or ACT.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.whitman.edu/",
    "admissions": "https://www.whitman.edu/admission-and-aid",
    "internationalAdmissions": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/international-students",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/international-students/financial-aid",
    "financialAid": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/international-students/financial-aid",
    "programs": "https://www.whitman.edu/academics",
    "cost": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-much-does-whitman-cost"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notification in mid-December.",
        "status": "confirmed",
        "source": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-to-apply-for-financial-aid",
        "verified": "2026-10-01",
        "note": "Whitman lists the dates without a year on its current pages."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; notification in early February.",
        "status": "confirmed",
        "source": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-to-apply-for-financial-aid",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-05",
        "date": "5 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notification in late January.",
        "status": "confirmed",
        "source": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-to-apply-for-financial-aid",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "The final first-year round.",
        "status": "confirmed",
        "source": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-to-apply-for-financial-aid",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 60,
      "currency": "USD",
      "waiverAvailableToInternational": true,
      "waiver": "Waived for all applications submitted before 1 December, and for United World College students",
      "note": "Whitman waives the $60 fee for every application submitted before 1 December."
    },
    "documents": [
      "Common Application",
      "Official transcript and midyear report",
      "Teacher evaluation",
      "TOEFL, IELTS or Duolingo score where required",
      "Whitman International Student Financial Aid Application (WISFAA), if applying for aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Minimum IELTS score 6.5."
    },
    "toefl": {
      "min": 85,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 85,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ],
      "note": "Minimum 4.5, or 85 on tests taken before January 2026."
    },
    "duolingo": {
      "min": 110,
      "recommended": null,
      "note": "Minimum Duolingo score 110."
    },
    "waiver": "Waived if your first language is English or the primary language of instruction at your high school has been English.",
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Whitman is test-optional, but international applicants are strongly encouraged to submit an ACT or SAT to show academic preparedness."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 68692,
      "billed": 85220,
      "budget": 86620,
      "includes": "tuition, the student association fee and on-campus food and housing; the estimate adds books and supplies"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$85,220 billed · $86,620 estimated cost of attendance",
    "items": [
      {
        "label": "Tuition",
        "amount": 68692
      },
      {
        "label": "ASWC (student association) fee",
        "amount": 576
      },
      {
        "label": "On-campus food and housing (double room, meal plan 2)",
        "amount": 15952
      }
    ],
    "totalText": "$86,620 estimated cost of attendance, not counting travel",
    "note": "The page read does not print the academic year. Travel varies by where you live.",
    "billedSubtotal": 85220
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Admission is selective; whether it is need-aware for international applicants is not stated on the pages read.",
      "howToApply": "Complete the Whitman International Student Financial Aid Application (WISFAA) after applying; the CSS Profile is not used.",
      "note": "Whitman states that it will meet 100% of demonstrated need for international students who are offered admission. From fall 2025, first-year international students have no work-study expectation in their offer."
    },
    "merit": [
      {
        "name": "Merit-based scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Available in some cases to international students who show no financial need; no additional materials are required."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": true,
      "needBlindInternational": null,
      "forms": [
        "Whitman International Student Financial Aid Application (WISFAA)"
      ],
      "deadlines": "Same dates as the application rounds",
      "note": "Whitman does not use the CSS Profile for international applicants."
    }
  },
  "sources": [
    {
      "label": "How to apply for financial aid — round dates",
      "url": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-to-apply-for-financial-aid"
    },
    {
      "label": "International student applicants",
      "url": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/international-students"
    },
    {
      "label": "International applicant financial aid",
      "url": "https://www.whitman.edu/admission-and-aid/applying-to-whitman/international-students/financial-aid"
    },
    {
      "label": "How much does Whitman cost",
      "url": "https://www.whitman.edu/admission-and-aid/financial-aid-and-costs/how-much-does-whitman-cost"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.whitman.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs",
      "need-aware or need-blind for international applicants"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "soka-university-of-america",
  "name": "Soka University of America",
  "shortName": "Soka",
  "country": "us",
  "city": "Aliso Viejo",
  "region": "California",
  "founded": 1987,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#00539B",
    "c2": "#002f58",
    "initials": "SU"
  },
  "description": "A small private liberal arts college in Aliso Viejo, California. Soka offers need-based aid to international students, and its Soka Opportunity Plan guarantees tuition coverage by family income — 100% of tuition for family income of $200,000 or less — for students working toward a first bachelor’s degree, domestic or international. Living costs are not part of that guarantee.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "humanities",
    "social-sciences",
    "biology"
  ],
  "englishTaughtPrograms": [
    "humanities",
    "social-sciences",
    "biology"
  ],
  "programNote": "Soka awards a single undergraduate degree, a B.A. in Liberal Arts, with five concentrations: Environmental Studies, Humanities, International Studies, Life Sciences, and Social and Behavioral Sciences. There are no separate bachelor’s degrees by subject.",
  "links": {
    "website": "https://www.soka.edu/",
    "admissions": "https://www.soka.edu/admissions-aid/how-apply",
    "internationalAdmissions": "https://www.soka.edu/admissions-aid/how-apply",
    "applicationPortal": "https://www.soka.edu/apply",
    "scholarships": "https://www.soka.edu/admissions-aid/financial-aid/soka-opportunity-plan",
    "financialAid": "https://www.soka.edu/admissions-aid/aid-international-undergraduate-students",
    "programs": "https://www.soka.edu/academics",
    "cost": "https://www.soka.edu/admissions-aid/cost-attendance"
  },
  "admissions": {
    "platforms": [
      "Soka Application",
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; decision by 8 December.",
        "status": "confirmed",
        "source": "https://www.soka.edu/admissions-aid/how-apply",
        "verified": "2026-10-01",
        "note": "Soka lists the dates without a year on its current how-to-apply page."
      },
      {
        "name": "Regular Admission",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Decision by 15 March.",
        "status": "confirmed",
        "source": "https://www.soka.edu/admissions-aid/how-apply",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Financial aid application — priority date",
        "kind": "aid",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "International undergraduate applicants asking for aid",
        "conditions": "Soka International Student Financial Aid Application: priority date 15 February, final deadline 2 March, supporting materials by 1 May. Aid offers are released in the second week of March.",
        "status": "confirmed",
        "source": "https://www.soka.edu/admissions-aid/aid-international-undergraduate-students",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 30,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Nonrefundable; required to submit the Soka Online Application."
    },
    "documents": [
      "Soka Application or Common Application",
      "School transcripts",
      "TOEFL iBT or Duolingo English Test results for non-native speakers",
      "Soka International Student Financial Aid Application, if applying for aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": null,
      "accepted": false,
      "note": "Soka states that it does not accept IELTS or Cambridge English for undergraduate admission."
    },
    "toefl": {
      "min": null,
      "recommended": 100,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 100
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 5
        }
      ],
      "note": "Soka prefers a TOEFL iBT minimum of 5 (100 before January 2026); another Soka page gives 4 (80). Scores must be less than two years old."
    },
    "duolingo": {
      "min": null,
      "recommended": 130,
      "note": "Soka prefers a Duolingo English Test minimum of 130; another Soka page gives 115."
    },
    "waiver": null,
    "note": "Only TOEFL iBT and the Duolingo English Test are accepted as proof of English."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "ACT or SAT scores are optional: submit them if you feel they strengthen the application. Scores older than five years are not accepted."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 38486,
      "billed": 54486,
      "budget": 63674,
      "includes": "tuition and on-campus living expenses are direct costs; the total adds books, transportation and personal expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$54,486 direct cost · $63,674 cost of attendance",
    "items": [
      {
        "label": "Tuition",
        "amount": 38486
      },
      {
        "label": "Living expenses (on campus)",
        "amount": 16000
      },
      {
        "label": "Books, course materials and equipment",
        "amount": 1304
      },
      {
        "label": "Transportation",
        "amount": 1386
      },
      {
        "label": "Personal expenses (includes an estimated $2,530 health insurance fee)",
        "amount": 6498
      }
    ],
    "totalText": "$63,674 total for a student living on campus",
    "note": "Direct costs are $57,016 with health insurance or $54,486 if it is waived.",
    "billedSubtotal": 54486
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": true,
      "basis": "need-based and merit (Soka Opportunity Plan)",
      "covers": {
        "tuition": true,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "The guarantee depends on total family income and on meeting Soka’s academic progress rules; it runs for eight terms.",
      "howToApply": "Complete the Soka International Student Financial Aid Application, ideally by 15 February.",
      "note": "From 2027–28 the Soka Opportunity Plan guarantees 100% tuition coverage for family income of $200,000 or less, 50% for $200,001–$250,000 and 25% for $250,001–$300,000, for domestic or international students on a first bachelor’s degree. It is a tuition guarantee: housing and food are not included."
    },
    "merit": [
      {
        "name": "Merit Scholarship",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Awarded automatically on admission, regardless of family income; the amount is not stated on the pages read."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [
        "Soka International Student Financial Aid Application"
      ],
      "deadlines": "Priority 15 February; final 2 March; supporting materials 1 May",
      "note": "Soka describes itself as one of the few US universities offering need-based aid to international students."
    }
  },
  "sources": [
    {
      "label": "How to apply",
      "url": "https://www.soka.edu/admissions-aid/how-apply"
    },
    {
      "label": "Aid for international undergraduate students",
      "url": "https://www.soka.edu/admissions-aid/aid-international-undergraduate-students"
    },
    {
      "label": "Soka Opportunity Plan",
      "url": "https://www.soka.edu/admissions-aid/financial-aid/soka-opportunity-plan"
    },
    {
      "label": "Cost of attendance 2026–2027",
      "url": "https://www.soka.edu/admissions-aid/cost-attendance"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.soka.edu/about/proud-heritage"
    },
    {
      "label": "Academics — one degree, five concentrations",
      "url": "https://www.soka.edu/academics"
    },
    {
      "label": "Undergraduate studies — concentrations",
      "url": "https://www.soka.edu/academics/undergraduate-studies"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year",
      "degree structure and concentrations"
    ],
    "unconfirmed": [
      "whether housing and food can be covered by aid",
      "merit scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "programsBasis": "concentrations"
},

{
  "id": "clark-university",
  "name": "Clark University",
  "shortName": "Clark",
  "country": "us",
  "city": "Worcester",
  "region": "Massachusetts",
  "founded": 1887,
  "type": "Private research university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#C8102E",
    "c2": "#7a0a1c",
    "initials": "CU"
  },
  "description": "A private research university in Worcester, Massachusetts, with no application fee and optional SAT/ACT. Its Presidential Scholarship covers tuition, room and board for 3–5 students a year; other international students typically pay around $40,000 a year after aid, and admission is need-aware — Clark says it may deny an application if the need shown is greater than it can meet.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.clarku.edu/",
    "admissions": "https://www.clarku.edu/undergraduate-admissions/apply/",
    "internationalAdmissions": "https://www.clarku.edu/admission/international-students/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.clarku.edu/financial-aid/apply/international-students/",
    "financialAid": "https://www.clarku.edu/financial-aid/apply/international-students/",
    "programs": "https://www.clarku.edu/academics/",
    "cost": "https://www.clarku.edu/admission/tuition-and-fees/"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application (Scoir)"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notification in late December.",
        "status": "confirmed",
        "source": "https://www.clarku.edu/undergraduate-admissions/apply/",
        "verified": "2026-10-01",
        "note": "Clark lists its rounds without a year on the current apply page."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; notification in mid-January.",
        "status": "confirmed",
        "source": "https://www.clarku.edu/undergraduate-admissions/apply/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notification in early March.",
        "status": "confirmed",
        "source": "https://www.clarku.edu/undergraduate-admissions/apply/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Notification in late March.",
        "status": "confirmed",
        "source": "https://www.clarku.edu/undergraduate-admissions/apply/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Clark states that there is no application fee."
    },
    "documents": [
      "Common Application or Coalition Application",
      "Transcripts",
      "Counsellor recommendation and one teacher recommendation",
      "Official TOEFL, Duolingo or IELTS score if English is not your native language",
      "International Student Certification of Finances and Financial Assistance Application Form"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 6.5,
      "note": "Clark sets no fixed minimum; it gives 6.5 overall with no sub-score below 6 as a general indicator of the minimum proficiency, and says meeting it does not guarantee admission."
    },
    "toefl": {
      "min": null,
      "recommended": 85,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 85
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 4.5
        }
      ],
      "note": "General indicator: 4.5 overall with no sub-score below 4 on the scale used from January 2026, or 85 overall with no sub-score below 20."
    },
    "duolingo": {
      "min": null,
      "recommended": 120,
      "note": "General indicator: 120 overall with no sub-score below 100."
    },
    "waiver": null,
    "note": "English proficiency is assessed holistically; PTE 61 is also listed. An interview is strongly encouraged, especially for non-native speakers."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT or ACT scores are optional for all students."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 62070,
      "billed": 77570,
      "includes": "tuition, the activity and health fees, a standard double room and the standard meal plan"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$77,570 in tuition, fees, room and food",
    "items": [
      {
        "label": "Tuition",
        "amount": 62070
      },
      {
        "label": "Student activity and program fee",
        "amount": 460
      },
      {
        "label": "Health and wellness fee",
        "amount": 680
      },
      {
        "label": "Room (standard double)",
        "amount": 8580
      },
      {
        "label": "Food (standard meal plan)",
        "amount": 5780
      }
    ],
    "totalText": "$77,570 for tuition, fees, a standard double room and the standard meal plan",
    "note": "The page read does not print the academic year. One-time fees, books and travel are extra.",
    "billedSubtotal": 77570
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "merit (Presidential Scholarship)",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Awarded to 3–5 students a year; finalists are invited to interview.",
      "howToApply": "No separate application: all admitted students are considered on the strength of the admission application.",
      "note": "Clark’s Presidential Scholarship covers tuition, room and board; recipients still pay about $12,000–$15,000 a year in other costs. For most international students Clark says aid may not cover everything — they typically pay around $40,000 a year — and admission is need-aware."
    },
    "merit": [
      {
        "name": "Presidential Scholarship",
        "amount": "Tuition, room and board",
        "internationalEligible": true,
        "deadline": null,
        "note": "Highly competitive; 3–5 students a year. Recipients are responsible for about $12,000–$15,000 a year in additional costs."
      },
      {
        "name": "Merit scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "All undergraduate applicants are considered automatically; amounts were not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": false,
      "forms": [
        "International Student Certification of Finances and Financial Assistance Application Form"
      ],
      "deadlines": "Same dates as the application rounds",
      "note": "Returning international students do not need to reapply for aid."
    }
  },
  "sources": [
    {
      "label": "Apply — admissions rounds",
      "url": "https://www.clarku.edu/undergraduate-admissions/apply/"
    },
    {
      "label": "Financial aid for international students",
      "url": "https://www.clarku.edu/financial-aid/apply/international-students/"
    },
    {
      "label": "Tuition and fees",
      "url": "https://www.clarku.edu/admission/tuition-and-fees/"
    },
    {
      "label": "International students — apply",
      "url": "https://www.clarku.edu/undergraduate-admissions/apply/international-students/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.clarku.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "accepted English tests",
      "costs",
      "aid for international students",
      "application fee",
      "English indicators",
      "testing policy",
      "Presidential Scholarship",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs",
      "scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "northeastern-university",
  "name": "Northeastern University",
  "shortName": "Northeastern",
  "country": "us",
  "city": "Boston",
  "region": "Massachusetts",
  "founded": 1898,
  "type": "Private research university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#C8102E",
    "c2": "#000000",
    "initials": "NU"
  },
  "description": "A private research university in Boston known for its co-op programme. Northeastern states that international students are not eligible for its need-based aid: they are considered for merit scholarships, which are extremely competitive and do not cover the full cost of attendance.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.northeastern.edu/",
    "admissions": "https://www.northeastern.edu/admissions/",
    "internationalAdmissions": "https://admissions.northeastern.edu/application-information/international-applicants/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://studentfinance.northeastern.edu/applying-for-aid/international/",
    "financialAid": "https://studentfinance.northeastern.edu/applying-for-aid/international/",
    "programs": "https://www.northeastern.edu/academics/",
    "cost": "https://admissions.northeastern.edu/cost-financial-aid/"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. An optional interview recording must reach Northeastern by 15 November.",
        "status": "confirmed",
        "source": "https://www.northeastern.edu/admissions/",
        "verified": "2026-10-01",
        "note": "Northeastern lists the dates without a year on its current admissions page."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Interview recording by 1 December.",
        "status": "confirmed",
        "source": "https://www.northeastern.edu/admissions/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-01",
        "date": "1 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Interview recording by 15 January.",
        "status": "confirmed",
        "source": "https://www.northeastern.edu/admissions/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-01",
        "date": "1 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Interview recording by 1 February.",
        "status": "confirmed",
        "source": "https://www.northeastern.edu/admissions/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 75,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "Need-based waivers from the Common Application, Coalition Application, College Board or ACT are accepted",
      "note": "Or a need-based fee waiver."
    },
    "documents": [
      "Common Application or Coalition Application with Northeastern questions",
      "Academic records and secondary school report",
      "Recommendation letters",
      "English proficiency results",
      "Declaration and Certification of Finances (DCF)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7.5,
      "note": "Northeastern gives 7.5 to 8.0 as the range of competitive applicants and says it is no promise of admission. IELTS Indicator is not accepted."
    },
    "toefl": {
      "min": null,
      "recommended": 102,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 102
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 5
        }
      ],
      "note": "Competitive range 102 to 110 before 21 January 2026; 5.0 to 5.5 (overall and subscores) from then. MyBest scores are not considered."
    },
    "duolingo": {
      "min": null,
      "recommended": 130,
      "note": "Competitive range 130 to 140."
    },
    "waiver": null,
    "note": "Cambridge C1 Advanced or C2 Proficiency (195–202) and PTE Academic (79–86) are also accepted."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Northeastern is test-optional; applicants from US and international high schools choose whether to submit the SAT or ACT."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 71050,
      "billed": 95522,
      "budget": 98322,
      "includes": "tuition, fees, housing and food are billed; the total adds books, personal expenses and transportation"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$95,522 direct costs · $98,322 with indirect costs",
    "items": [
      {
        "label": "Tuition",
        "amount": 71050
      },
      {
        "label": "Fees",
        "amount": 1650
      },
      {
        "label": "Housing",
        "amount": 13612
      },
      {
        "label": "Food",
        "amount": 9210
      },
      {
        "label": "Books and course materials",
        "amount": 1000
      },
      {
        "label": "Personal expenses",
        "amount": 900
      },
      {
        "label": "Transportation",
        "amount": 900
      }
    ],
    "totalText": "$98,322 estimated annual direct and indirect costs",
    "note": "The page read does not print the academic year; housing and food vary with the options chosen.",
    "billedSubtotal": 95522
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": true,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Merit scholarships are extremely competitive.",
      "howToApply": "No separate application: the admission application serves as the scholarship application.",
      "note": "Northeastern states that international students are not eligible for its institutional need-based aid and that merit scholarships do not cover the full cost of attendance."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": "Range in amount; do not cover the full cost",
        "internationalEligible": true,
        "deadline": null,
        "note": "First-year international students are considered automatically."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "International students must show they can fully finance their studies through the Declaration and Certification of Finances."
    }
  },
  "sources": [
    {
      "label": "Admissions — deadlines",
      "url": "https://www.northeastern.edu/admissions/"
    },
    {
      "label": "International applicants",
      "url": "https://admissions.northeastern.edu/application-information/international-applicants/"
    },
    {
      "label": "Cost and financial aid",
      "url": "https://admissions.northeastern.edu/cost-financial-aid/"
    },
    {
      "label": "Student finance — international students",
      "url": "https://studentfinance.northeastern.edu/applying-for-aid/international/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.northeastern.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "drexel-university",
  "name": "Drexel University",
  "shortName": "Drexel",
  "country": "us",
  "city": "Philadelphia",
  "region": "Pennsylvania",
  "founded": 1891,
  "type": "Private research university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#07294D",
    "c2": "#FFC600",
    "initials": "DU"
  },
  "description": "A private research university in Philadelphia built around cooperative education. Drexel says it offers need-based aid to qualifying international students, who must file the CSS Profile, and publishes first-year merit scholarship ranges of $10,000–$35,000 for fall 2027.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://drexel.edu/",
    "admissions": "https://drexel.edu/admissions/apply/undergrad-instructions/first-year-instructions",
    "internationalAdmissions": "https://drexel.edu/admissions/undergrad/international",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://drexel.edu/admissions/financial-aid-affordability/undergrad",
    "financialAid": "https://drexel.edu/admissions/financial-aid-affordability/undergrad",
    "programs": "https://drexel.edu/academics/undergrad-programs/",
    "cost": "https://drexel.edu/admissions/financial-aid-affordability/undergrad"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application (Scoir)"
    ],
    "deadlines": [
      {
        "name": "Early Decision",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. CSS Profile due 25 November; decisions in mid-December; deposits due 15 January.",
        "status": "confirmed",
        "source": "https://drexel.edu/admissions/apply/undergrad-instructions/first-year-instructions/application-deadlines",
        "verified": "2026-10-01",
        "note": "Drexel lists the dates without a year; the same pages publish merit ranges for students admitted for fall 2027."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. CSS Profile due 25 November; decisions in mid-December; deposits due 1 May.",
        "status": "confirmed",
        "source": "https://drexel.edu/admissions/apply/undergrad-instructions/first-year-instructions/application-deadlines",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "CSS Profile due 1 February; decisions by 1 April.",
        "status": "confirmed",
        "source": "https://drexel.edu/admissions/apply/undergrad-instructions/first-year-instructions/application-deadlines",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 65,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "Drexel has an institutional fee waiver for some applicants; eligibility of international students was not confirmed",
      "note": "Nonrefundable; paid with the Common Application or Coalition Application."
    },
    "documents": [
      "Common Application or Coalition Application",
      "Official transcripts",
      "Approved English proficiency exam where required",
      "CSS Profile, if applying for institutional need-based aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": null,
      "note": "Approved exam; no score was found on the pages read."
    },
    "toefl": {
      "min": null,
      "recommended": null,
      "note": "TOEFL iBT and TOEFL Essentials are approved; no score was found on the pages read."
    },
    "duolingo": {
      "min": null,
      "recommended": null,
      "note": "Approved exam; no score was found on the pages read."
    },
    "waiver": "Not required if English is your first language or you studied for three full years at a high school taught in English; an SAT Evidence-Based Reading and Writing score of 600 also exempts.",
    "note": "Pearson PTE and Cambridge C1 Advanced or C2 Proficiency are also approved."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Drexel practises No-Harm Test-Optional review for fall entry, with some exceptions such as the BA/BS+MD Early Assurance programme."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 63078,
      "billed": 84896,
      "includes": "tuition, fees and average housing and food"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$84,896 in tuition, fees, housing and food",
    "items": [
      {
        "label": "Tuition",
        "amount": 63078
      },
      {
        "label": "Fees",
        "amount": 2420
      },
      {
        "label": "Housing and food (average)",
        "amount": 19398
      }
    ],
    "totalText": "$84,896 for tuition, fees and average housing and food",
    "note": "Drexel’s international cost page lists $88,396 including other costs for 2026–2027.",
    "billedSubtotal": 84896
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": "Submit the CSS Profile by the deadline for your round.",
      "note": "Drexel offers need-based aid to qualifying international students but does not state that it meets full need, so no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "First-year merit scholarships",
        "amount": "$20,000–$35,000 (Early Decision and Early Action); $10,000–$35,000 (Regular Decision)",
        "internationalEligible": null,
        "deadline": null,
        "note": "Ranges published for students admitted for fall 2027; eligibility of international students was not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [
        "CSS Profile"
      ],
      "deadlines": "25 November (Early Decision and Early Action); 1 February (Regular Decision)",
      "note": "An admission decision may be affected if an applicant who asked for aid does not file the CSS Profile."
    }
  },
  "sources": [
    {
      "label": "First-year application deadlines",
      "url": "https://drexel.edu/admissions/apply/undergrad-instructions/first-year-instructions/application-deadlines"
    },
    {
      "label": "Standardized testing policies",
      "url": "https://drexel.edu/admissions/apply/undergrad-instructions/first-year-instructions/standardized-tests"
    },
    {
      "label": "International undergraduate admissions",
      "url": "https://drexel.edu/admissions/undergrad/international"
    },
    {
      "label": "Financial aid and affordability",
      "url": "https://drexel.edu/admissions/financial-aid-affordability/undergrad"
    },
    {
      "label": "About — history and facts",
      "url": "https://drexel.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "approved English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "English test scores",
      "scholarship eligibility of international students"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "syracuse-university",
  "name": "Syracuse University",
  "shortName": "Syracuse",
  "country": "us",
  "city": "Syracuse",
  "region": "New York",
  "founded": 1870,
  "type": "Private research university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#F76900",
    "c2": "#000E54",
    "initials": "SU"
  },
  "description": "A private research university in Syracuse, New York. Syracuse states that international students are generally not eligible for financial aid in the form of housing or meal grants, loans or work, though applicants without test scores remain eligible for merit scholarships.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.syracuse.edu/",
    "admissions": "https://www.syracuse.edu/admissions-aid/application-process/apply/",
    "internationalAdmissions": "https://www.syracuse.edu/admissions-aid/application-process/international/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.syracuse.edu/admissions-aid/financial-aid-scholarships/",
    "financialAid": "https://www.syracuse.edu/admissions-aid/financial-aid-scholarships/",
    "programs": "https://www.syracuse.edu/academics/",
    "cost": "https://www.syracuse.edu/admissions-aid/cost/international-costs/"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application (Scoir)"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; first-year students only.",
        "status": "confirmed",
        "source": "https://www.syracuse.edu/admissions-aid/application-process/apply/dates-deadlines/",
        "verified": "2026-10-01",
        "note": "Syracuse lists the dates without a year; its checklist confirms the test policy for fall 2027."
      },
      {
        "name": "Early Decision",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; first-year students only. The Early Decision Agreement is required.",
        "status": "confirmed",
        "source": "https://www.syracuse.edu/admissions-aid/application-process/apply/dates-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-05",
        "date": "5 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; first-year students only.",
        "status": "confirmed",
        "source": "https://www.syracuse.edu/admissions-aid/application-process/apply/dates-deadlines/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-05",
        "date": "5 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "First-year applicants. Some programmes in the College of Visual and Performing Arts also need a portfolio or audition.",
        "status": "confirmed",
        "source": "https://www.syracuse.edu/admissions-aid/application-process/apply/dates-deadlines/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 85,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "School counsellors can request a waiver for financial hardship; NACAC waivers are accepted",
      "note": "Paid with the application."
    },
    "documents": [
      "Common Application or Coalition Application",
      "School transcripts",
      "Proof of English proficiency",
      "Proof of ability to pay all educational expenses",
      "Early Decision Agreement (Early Decision only)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 6.5,
      "note": "Preferred 6.5+ for most colleges; 7.0+ for the Whitman School of Management, the School of Architecture and the Newhouse School."
    },
    "toefl": {
      "min": null,
      "recommended": 85,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 85
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 4.5
        }
      ],
      "note": "Preferred 85+ (4.5 from 21 January 2026) for most colleges; 90+ (5) for Whitman and Architecture; 102+ (5) for Newhouse."
    },
    "duolingo": {
      "min": null,
      "recommended": 125,
      "note": "Preferred 125+; 130+ for the Newhouse School."
    },
    "waiver": null,
    "note": "These are preferred scores, published by college. Only official scores are accepted; SAT Reading and Writing 600 or ACT English 27 are listed as alternatives."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT/ACT scores are not required for fall 2026, spring 2027, fall 2027 or spring 2028 admission; applicants without scores remain eligible for merit scholarships."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 69180,
      "budget": 100526,
      "includes": "tuition, housing and food, fees, books, travel, personal expenses, health insurance and programme fees"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$100,526 cost of attendance for an international student",
    "items": [
      {
        "label": "Tuition",
        "amount": 69180
      },
      {
        "label": "Housing and food",
        "amount": 20580
      },
      {
        "label": "Miscellaneous fees",
        "amount": 1869
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 1847
      },
      {
        "label": "Transportation and travel",
        "amount": 1888
      },
      {
        "label": "Personal expenses",
        "amount": 1294
      },
      {
        "label": "Health insurance",
        "amount": 2868
      },
      {
        "label": "Program and technology fees",
        "amount": 1000
      }
    ],
    "totalText": "$100,526 total cost of attendance, living on campus",
    "note": "Published on Syracuse’s international costs page; the academic year was not read. Health insurance can be waived with adequate private cover.",
    "studentCategory": "International students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": true,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Syracuse says international students are generally not eligible for aid in the form of housing or meal grants, loans or work opportunities."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": null,
        "internationalEligible": null,
        "deadline": null,
        "note": "Applicants without test scores remain eligible; amounts and the eligibility of international students were not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "International applicants must show they can pay all educational expenses."
    }
  },
  "sources": [
    {
      "label": "Dates and deadlines",
      "url": "https://www.syracuse.edu/admissions-aid/application-process/apply/dates-deadlines/"
    },
    {
      "label": "International first-year checklist",
      "url": "https://www.syracuse.edu/admissions-aid/application-process/international/first-year-checklist/"
    },
    {
      "label": "International costs",
      "url": "https://www.syracuse.edu/admissions-aid/cost/international-costs/"
    },
    {
      "label": "International undergraduate admission requirements",
      "url": "https://www.syracuse.edu/admissions-aid/application-process/international/undergraduate/requirements/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.syracuse.edu/about/facts-figures"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "costs for international students",
      "aid for international students",
      "English tests",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs",
      "merit scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "loyola-marymount-university",
  "name": "Loyola Marymount University",
  "shortName": "LMU",
  "country": "us",
  "city": "Los Angeles",
  "region": "California",
  "founded": 1911,
  "type": "Private Jesuit university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#AB0C2F",
    "c2": "#0076A5",
    "initials": "LMU"
  },
  "description": "A private Jesuit university in Los Angeles. LMU is test-optional and publishes four first-year rounds. International students are considered automatically for academic scholarships of $2,000 to $30,000 a year, but LMU states that it offers them no need-based aid.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.lmu.edu/",
    "admissions": "https://admission.lmu.edu/learnmore/prospectivestudents/first-yearapplicants/",
    "internationalAdmissions": "https://international.lmu.edu/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://financialaid.lmu.edu/prospectivestudents/scholarships/",
    "financialAid": "https://financialaid.lmu.edu/",
    "programs": "https://www.lmu.edu/academics/",
    "cost": "https://financialaid.lmu.edu/prospectivestudents/costofattendance/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Decision in mid-December; deposit by 12 January.",
        "status": "confirmed",
        "source": "https://admission.lmu.edu/learnmore/prospectivestudents/first-yearapplicants/",
        "verified": "2026-10-01",
        "note": "LMU lists the dates without a year on its current first-year page."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Decision in mid-December; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://admission.lmu.edu/learnmore/prospectivestudents/first-yearapplicants/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-08",
        "date": "8 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Decision in mid-February; deposit by 16 March.",
        "status": "confirmed",
        "source": "https://admission.lmu.edu/learnmore/prospectivestudents/first-yearapplicants/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Decision in early March; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://admission.lmu.edu/learnmore/prospectivestudents/first-yearapplicants/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 75,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Stated on the first-year applicants page."
    },
    "documents": [
      "Common Application",
      "School transcript",
      "Recommendations"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Minimum overall band for undergraduate admission."
    },
    "toefl": {
      "min": 90,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 90,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ],
      "note": "90 for tests taken before 21 January 2026; 4.5 for tests taken after that date. Scores are due by the application deadline."
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "Minimum for undergraduate admission."
    },
    "waiver": "A US college English Composition course with a grade of C or better is accepted instead; online courses are not.",
    "note": "PTE Academic 56 is also accepted."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "LMU lists national SAT/ACT scores as test-optional, and its scholarship page says no student is disadvantaged for not submitting them."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 68939,
      "budget": 99289,
      "includes": "tuition and mandatory fees, average housing and food, books, personal expenses, parking and transportation, and federal loan fees"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$68,939 tuition and fees · $99,289 estimated total on campus",
    "items": [
      {
        "label": "Tuition and fees",
        "amount": 68939
      },
      {
        "label": "Average housing and food (on campus)",
        "amount": 23602
      },
      {
        "label": "Books and supplies",
        "amount": 1305
      },
      {
        "label": "Personal and miscellaneous",
        "amount": 3969
      },
      {
        "label": "Parking and transportation",
        "amount": 1386
      },
      {
        "label": "Federal loan fees",
        "amount": 88
      }
    ],
    "totalText": "$99,289 estimated total cost, living on campus",
    "note": "LMU’s 2026–2027 cost-of-attendance estimate for full-time undergraduates; apart from tuition and fees the figures are allowances, not bills."
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": false,
      "basis": null,
      "covers": {
        "tuition": false,
        "housing": false,
        "meals": false,
        "insurance": false,
        "books": false
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "LMU states that it does not offer need-based financial aid to international students; its academic scholarships range from $2,000 to $30,000 a year."
    },
    "merit": [
      {
        "name": "Academic scholarships",
        "amount": "$2,000–$30,000 a year",
        "internationalEligible": true,
        "deadline": null,
        "note": "All first-year applicants are considered automatically."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "LMU does not offer need-based financial aid to international students."
    }
  },
  "sources": [
    {
      "label": "First-year applicants — deadlines",
      "url": "https://admission.lmu.edu/learnmore/prospectivestudents/first-yearapplicants/"
    },
    {
      "label": "Scholarships",
      "url": "https://financialaid.lmu.edu/prospectivestudents/scholarships/"
    },
    {
      "label": "Cost of attendance",
      "url": "https://financialaid.lmu.edu/prospectivestudents/costofattendance/"
    },
    {
      "label": "International first-year applicants — FAQ",
      "url": "https://international.lmu.edu/faq/first-year/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.lmu.edu/about/facts-figures"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "texas-christian-university",
  "name": "Texas Christian University",
  "shortName": "TCU",
  "country": "us",
  "city": "Fort Worth",
  "region": "Texas",
  "founded": 1873,
  "type": "Private research university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#4D1979",
    "c2": "#2e0f48",
    "initials": "TCU"
  },
  "description": "A private university in Fort Worth, Texas. TCU is test-optional and offers incoming international students two kinds of aid — academic scholarships and need-based aid — but only at entry, and does not state how much need it meets.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.tcu.edu/",
    "admissions": "https://admissions.tcu.edu/apply/first-year/index.php",
    "internationalAdmissions": "https://admissions.tcu.edu/info-for/international-students.php",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://admissions.tcu.edu/afford/scholarship-aid/international.php",
    "financialAid": "https://financialaid.tcu.edu/apply-for-aid/international.php",
    "programs": "https://www.tcu.edu/academics/",
    "cost": "https://admissions.tcu.edu/afford/cost-estimate.php"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application",
      "TCU application"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; decision by 1 January, reply by 1 May. Recommended for Chancellor’s Scholarship candidates.",
        "status": "confirmed",
        "source": "https://admissions.tcu.edu/apply/first-year/index.php",
        "verified": "2026-10-01",
        "note": "TCU lists the dates without a year on its current first-year page."
      },
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; decision by 1 January, commitment by 15 January. The Early Decision Agreement is required.",
        "status": "confirmed",
        "source": "https://admissions.tcu.edu/apply/first-year/index.php",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; decision by 1 March, commitment by 15 March.",
        "status": "confirmed",
        "source": "https://admissions.tcu.edu/apply/first-year/index.php",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; decision by 1 April. Senior fall grades are considered.",
        "status": "confirmed",
        "source": "https://admissions.tcu.edu/apply/first-year/index.php",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "National candidate reply date",
        "kind": "reply",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-05-01",
        "date": "1 May 2027",
        "binding": false,
        "appliesTo": "Admitted students",
        "conditions": "Commitment deposit due for Early Action and Regular Decision admits.",
        "status": "confirmed",
        "source": "https://admissions.tcu.edu/apply/first-year/index.php",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 50,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "Waived for first-generation applicants, students with an ACT or College Board waiver and some other groups; international eligibility was not confirmed",
      "note": "Nonrefundable."
    },
    "documents": [
      "Application",
      "Counsellor and teacher forms",
      "English proficiency proof (international applicants)",
      "TCU Financial Statement for applicants who need a visa",
      "CSS Profile, if applying for need-based aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": null
    },
    "toefl": {
      "min": null,
      "recommended": null,
      "scales": [
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ],
      "note": "4.5 or higher on the current scale. TCU’s transfer requirements page still states 80 on the previous scale."
    },
    "duolingo": {
      "min": 110,
      "recommended": null,
      "note": null
    },
    "waiver": "At least three years at a high school or college where English is the primary language of instruction, or 24 or more transferable credit hours (including English composition) at a US college, also satisfies the requirement.",
    "note": "From TCU’s questions and answers for international students, last updated on 28 July 2026."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "TCU is test-optional."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 66520,
      "billed": 86090,
      "includes": "tuition, the student government fee, on-campus housing and food, and an estimate for books"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$86,090 estimated direct cost",
    "items": [
      {
        "label": "Tuition (12–18 hours, fall and spring)",
        "amount": 66520
      },
      {
        "label": "Student Government Association fee",
        "amount": 90
      },
      {
        "label": "Housing and food on campus",
        "amount": 18780
      },
      {
        "label": "Books and supplies (estimate)",
        "amount": 700
      },
      {
        "label": "Travel expenses",
        "amount": 1374
      },
      {
        "label": "Miscellaneous personal expenses",
        "amount": 2278
      }
    ],
    "totalText": "$86,090 total fall and spring estimated direct cost",
    "note": "TCU’s cost page is titled as an overview for 2025–2026 but lists indirect costs for fall 2026–spring 2027, so the year is not stated here. International students also need health insurance.",
    "billedSubtotal": 86090
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": "File the CSS Profile at the time of admission.",
      "note": "TCU offers scholarships and need-based aid to incoming international students but does not state that full need is met, so no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "Academic scholarships",
        "amount": null,
        "internationalEligible": true,
        "deadline": "1 November is recommended for Chancellor’s Scholarship candidates",
        "note": "Competitive; based on curriculum strength, test scores and other criteria."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [
        "CSS Profile",
        "TCU Financial Statement"
      ],
      "deadlines": "Priority funding: 1 November (early rounds) and 1 February",
      "note": "International students are considered for aid only as entering first-year or transfer students."
    }
  },
  "sources": [
    {
      "label": "First-year application — dates",
      "url": "https://admissions.tcu.edu/apply/first-year/index.php"
    },
    {
      "label": "Financial aid for international students",
      "url": "https://financialaid.tcu.edu/apply-for-aid/international.php"
    },
    {
      "label": "Cost estimate",
      "url": "https://admissions.tcu.edu/afford/cost-estimate.php"
    },
    {
      "label": "Transfer requirements (international)",
      "url": "https://admissions.tcu.edu/apply/transfer/requirements.php"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.tcu.edu/about/"
    },
    {
      "label": "Questions and answers for international students",
      "url": "https://admissions.tcu.edu/apply/faqs/for-international-students.php"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "costs",
      "aid for international students",
      "founding year",
      "English tests and scores"
    ],
    "unconfirmed": [
      "academic year of the published costs",
      "scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "pepperdine-university",
  "name": "Pepperdine University",
  "shortName": "Pepperdine",
  "country": "us",
  "city": "Malibu",
  "region": "California",
  "founded": 1937,
  "type": "Private Christian university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#00205C",
    "c2": "#C25700",
    "initials": "PU"
  },
  "description": "A private Christian university in Malibu, California; undergraduates study at Seaver College. Pepperdine offers scholarships to international students, including the very competitive Regents Scholars awards, plus a loan option that needs an American co-signer; it does not describe need-based grants for them. It publishes four first-year rounds, two of them binding.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "engineering",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.pepperdine.edu/",
    "admissions": "https://admission.pepperdine.edu/",
    "internationalAdmissions": "https://www.pepperdine.edu/international-students/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.pepperdine.edu/international-students/cost-of-attendance/seaver-college.htm",
    "financialAid": "https://www.pepperdine.edu/international-students/cost-of-attendance/seaver-college.htm",
    "programs": "https://seaver.pepperdine.edu/academics/",
    "cost": "https://www.pepperdine.edu/international-students/cost-of-attendance/seaver-college.htm"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Decisions sent 21 December; enrolment deadline 1 May.",
        "status": "confirmed",
        "source": "https://admission.pepperdine.edu/apply/deadlines/",
        "verified": "2026-10-04",
        "note": "Pepperdine lists the dates without a year on its current deadlines page. Only first-year applicants may use the early plans."
      },
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Decisions sent 21 December; enrolment deadline 1 February. Students admitted through Early Decision are guaranteed at least $25,000 in merit aid.",
        "status": "confirmed",
        "source": "https://admission.pepperdine.edu/apply/deadlines/",
        "verified": "2026-10-04",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Decisions sent 1 February; enrolment deadline 1 March.",
        "status": "confirmed",
        "source": "https://admission.pepperdine.edu/apply/deadlines/",
        "verified": "2026-10-04",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Decisions sent 19 March; enrolment deadline 1 May.",
        "status": "confirmed",
        "source": "https://admission.pepperdine.edu/apply/deadlines/",
        "verified": "2026-10-04",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 70,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Non-refundable; paid with the Common Application."
    },
    "documents": [
      "Common Application",
      "Academic records",
      "Proof of English proficiency (all international applicants)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Overall 6.5 and above; IELTS Indicator is accepted."
    },
    "toefl": {
      "min": 85,
      "recommended": null,
      "note": "TOEFL iBT or Home Edition 85 and above; MyBest scores are not accepted. The page does not give a score on the scale used from January 2026. Pepperdine also reports a middle 50% of 101–110 for admitted students, which is a statistic, not a requirement."
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "120 and above."
    },
    "waiver": null,
    "note": "SAT Reading and Writing 600, ACT Reading 24, Cambridge C1 Advanced or C2 Proficiency 186 and LanguageCert Academic 70 are also accepted. InitialView or Vericant interviews are optional supplements."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "The SAT and ACT are optional for all applicants, but scores are required to be considered for Regents Scholars Program scholarships."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 74370,
      "billed": 95692,
      "budget": 99258,
      "includes": "tuition, housing and food, and the wellness and campus life fees are direct costs; the total adds books, transportation, personal expenses and loan fees"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$95,692 direct costs · $99,258 cost of attendance",
    "items": [
      {
        "label": "Flat-rate tuition (12–18 units per semester)",
        "amount": 74370
      },
      {
        "label": "Housing and food",
        "amount": 20490
      },
      {
        "label": "Wellness fee",
        "amount": 580
      },
      {
        "label": "Campus life fee",
        "amount": 252
      },
      {
        "label": "Books and supplies",
        "amount": 1000
      },
      {
        "label": "Transportation",
        "amount": 1000
      },
      {
        "label": "Personal expenses",
        "amount": 1500
      },
      {
        "label": "Loan fees",
        "amount": 66
      }
    ],
    "totalText": "$99,258 total, living on campus",
    "note": "Seaver College undergraduate cost of attendance. A separate Pepperdine page for international students lists $98,720 using earlier tuition.",
    "billedSubtotal": 95692
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Regents Scholars awards go to only the top 8%–10% of the admitted class.",
      "howToApply": null,
      "note": "Pepperdine names scholarships and a co-signed loan for international students; a full-scholarship route is not described, so none is claimed."
    },
    "merit": [
      {
        "name": "Early Decision merit guarantee",
        "amount": "At least $25,000",
        "internationalEligible": null,
        "deadline": "1 November (Early Decision I) or 15 January (Early Decision II)",
        "note": "Pepperdine states that students admitted for Early Decision are guaranteed at least $25,000 in merit aid; whether this applies to international students is not stated."
      },
      {
        "name": "Regents Scholars awards",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Very competitive; SAT or ACT scores are required to be considered. The amount was not confirmed."
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Need-based grants for international undergraduates were not confirmed; Pepperdine has approved a loan programme for international students with an American co-signer."
    }
  },
  "sources": [
    {
      "label": "International students — application FAQ",
      "url": "https://www.pepperdine.edu/international-students/faq/faq-apply.htm"
    },
    {
      "label": "Cost of attendance for international students — Seaver College",
      "url": "https://www.pepperdine.edu/international-students/cost-of-attendance/seaver-college.htm"
    },
    {
      "label": "Application deadlines",
      "url": "https://admission.pepperdine.edu/apply/deadlines/"
    },
    {
      "label": "International first-year applicants",
      "url": "https://www.pepperdine.edu/international-students/future-students/undergraduate/firstyear.htm"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.pepperdine.edu/about/our-story/history/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "testing policy",
      "costs",
      "scholarships named for international students",
      "deadlines",
      "application fee",
      "English tests",
      "founding year"
    ],
    "unconfirmed": [
      "need-based aid for international students"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "colorado-college",
  "name": "Colorado College",
  "shortName": "CC",
  "country": "us",
  "city": "Colorado Springs",
  "region": "Colorado",
  "founded": 1874,
  "type": "Private liberal arts college",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#D09B2C",
    "c2": "#000000",
    "initials": "CC"
  },
  "description": "A liberal arts college in Colorado Springs that teaches one course at a time on its Block Plan. It charges no application fee and is test-optional. Colorado College says international applicants seeking aid are its most competitive group and that it can fully fund only a handful of students out of thousands of applicants.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.coloradocollege.edu/",
    "admissions": "https://www.coloradocollege.edu/admission/apply/first-year-students.html",
    "internationalAdmissions": "https://www.coloradocollege.edu/admission/apply/international-students.html",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.coloradocollege.edu/admission/apply/international-students.html",
    "financialAid": "https://www.coloradocollege.edu/admission/apply/international-students.html",
    "programs": "https://www.coloradocollege.edu/academics/",
    "cost": "https://www.coloradocollege.edu/offices/sfs/handbook/cost-of-attendance.html"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application (Scoir)",
      "QuestBridge"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding; decision in mid-December, reply in January.",
        "status": "confirmed",
        "source": "https://www.coloradocollege.edu/admission/apply/international-students.html",
        "verified": "2026-10-01",
        "note": "Colorado College lists the dates without a year on its current page for international students."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding; decision in early January, reply by 1 May.",
        "status": "confirmed",
        "source": "https://www.coloradocollege.edu/admission/apply/international-students.html",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding; decision in mid-February, reply in March.",
        "status": "confirmed",
        "source": "https://www.coloradocollege.edu/admission/apply/international-students.html",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Action",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding; decision in mid-March, reply by 1 May.",
        "status": "confirmed",
        "source": "https://www.coloradocollege.edu/admission/apply/international-students.html",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Colorado College charges no application fee."
    },
    "documents": [
      "Admission application",
      "Transcripts, school report and counsellor evaluation",
      "TOEFL, IELTS or Duolingo sent by the testing agency",
      "CSS Profile or the Colorado College ISFAA, if applying for aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Colorado College says students at or above 7.0 are best prepared to study there."
    },
    "toefl": {
      "min": null,
      "recommended": 100,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 100
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 5
        }
      ],
      "note": "Best prepared at 5.0 (100 on the previous scale)."
    },
    "duolingo": {
      "min": null,
      "recommended": 130,
      "note": "Best prepared at 130."
    },
    "waiver": null,
    "note": "InitialView or Vericant interviews are welcome but do not replace an English test."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "SAT or ACT scores are not required; applicants state on the application whether they wish to submit them."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 75702,
      "billed": 93590,
      "budget": 97990,
      "includes": "tuition, the activity fee, a double room and the full meal plan are billed; the estimate adds books, personal costs and transportation"
    },
    "academicYear": null,
    "currency": "USD",
    "headline": "$93,590 billed · $97,990 estimated total",
    "items": [
      {
        "label": "Tuition",
        "amount": 75702
      },
      {
        "label": "Student activity fee",
        "amount": 528
      },
      {
        "label": "Housing (double room)",
        "amount": 9616
      },
      {
        "label": "Full meal plan",
        "amount": 7744
      }
    ],
    "totalText": "$97,990 total estimated costs, before health insurance ($5,316)",
    "note": "From the financial aid handbook, last updated 31 July 2026; the academic year is not printed in the part read. All students must have health insurance.",
    "billedSubtotal": 93590
  },
  "scholarships": {
    "fullRide": {
      "available": true,
      "internationalEligible": true,
      "basis": "need-based",
      "covers": {
        "tuition": true,
        "housing": true,
        "meals": true,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Only a handful of international students out of thousands of applicants are fully funded.",
      "howToApply": "Say on the application that you will apply for aid, then file the CSS Profile or the Colorado College ISFAA.",
      "note": "Colorado College says it is able to fully fund a handful of international applicants. Aid must be requested at the time of applying: a “no” cannot be changed for two years."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": false,
      "forms": [
        "CSS Profile",
        "Colorado College ISFAA"
      ],
      "deadlines": "With the application",
      "note": "CSS Profile fee waivers are issued only to United World College applicants."
    }
  },
  "sources": [
    {
      "label": "International students — apply",
      "url": "https://www.coloradocollege.edu/admission/apply/international-students.html"
    },
    {
      "label": "First-year students",
      "url": "https://www.coloradocollege.edu/admission/apply/first-year-students.html"
    },
    {
      "label": "Cost of attendance",
      "url": "https://www.coloradocollege.edu/offices/sfs/handbook/cost-of-attendance.html"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.coloradocollege.edu/basics/welcome/history/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "academic year of the published costs",
      "share of need met for the students it funds"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "trinity-university",
  "name": "Trinity University",
  "shortName": "Trinity (TX)",
  "country": "us",
  "city": "San Antonio",
  "region": "Texas",
  "founded": 1869,
  "type": "Private liberal arts university",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#6C1D45",
    "c2": "#3f1028",
    "initials": "TU"
  },
  "description": "A private, mainly undergraduate university in San Antonio, Texas. International students are considered automatically for merit scholarships of $5,000 to $35,000 a year and may apply for need-based aid, which Trinity describes as limited and competitive.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts",
    "business",
    "engineering"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.trinity.edu/",
    "admissions": "https://www.trinity.edu/admissions",
    "internationalAdmissions": "https://www.trinity.edu/admissions-and-aid/guides-and-resources/guide-international-applicants",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.trinity.edu/admissions/aid/types/international",
    "financialAid": "https://www.trinity.edu/admissions/aid/types/international",
    "programs": "https://www.trinity.edu/academics",
    "cost": "https://www.trinity.edu/admissions/aid/tuition/coa"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notification 1 December, deposit by 15 January.",
        "status": "confirmed",
        "source": "https://www.trinity.edu/admissions",
        "verified": "2026-10-01",
        "note": "Trinity lists the dates without a year on its current admissions page."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding; notification 15 December, deposit by 1 May.",
        "status": "confirmed",
        "source": "https://www.trinity.edu/admissions",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding; notification 1 March, deposit by 15 March.",
        "status": "confirmed",
        "source": "https://www.trinity.edu/admissions",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Notification 15 March, deposit by 1 May.",
        "status": "confirmed",
        "source": "https://www.trinity.edu/admissions",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Trinity states there is no fee for applications submitted online."
    },
    "documents": [
      "Application",
      "Transcript or school records",
      "Official English test scores (TOEFL, IELTS or Duolingo)",
      "Statement of Financial Responsibility (required before the application is reviewed)",
      "CSS Profile (code 6831), if applying for need-based aid"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7,
      "note": "Recommended score 7.0; can be self-reported free in the application portal."
    },
    "toefl": {
      "min": null,
      "recommended": null,
      "scales": [
        {
          "period": "post2026",
          "min": null,
          "recommended": 5.5
        }
      ],
      "note": "Recommended score 5.5 on the current scale; MyBest scores are not accepted."
    },
    "duolingo": {
      "min": null,
      "recommended": 130,
      "note": "Recommended score 130; results must come directly from the testing service."
    },
    "waiver": null,
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Trinity is test-optional: SAT or ACT scores are not required."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 59280,
      "billed": 75446,
      "budget": 77846,
      "includes": "tuition and fees and on-campus food and housing; the total adds books and personal and transportation expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$75,446 direct costs · $77,846 cost of attendance",
    "items": [
      {
        "label": "Tuition and fees",
        "amount": 59280
      },
      {
        "label": "Living expenses (food and housing)",
        "amount": 16166
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 1000
      },
      {
        "label": "Personal and transportation expenses",
        "amount": 1400
      }
    ],
    "totalText": "$77,846 total cost of attendance, living on campus",
    "note": "Trinity notes that its direct costs have risen by an average of 4.0% a year.",
    "billedSubtotal": 75446
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Need-based funding is limited and competitive.",
      "howToApply": "Complete the Statement of Financial Responsibility and, for need-based aid, the CSS Profile.",
      "note": "Trinity offers merit scholarships and limited need-based aid but does not state that full need is met, so no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "Academic merit scholarships",
        "amount": "$5,000–$35,000 per year",
        "internationalEligible": true,
        "deadline": null,
        "note": "International applicants are considered automatically."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [
        "Statement of Financial Responsibility",
        "CSS Profile (code 6831)"
      ],
      "deadlines": "With the application",
      "note": "All aid to international students is grant aid. International transfer students are not eligible for aid."
    }
  },
  "sources": [
    {
      "label": "Admissions — first-year deadlines",
      "url": "https://www.trinity.edu/admissions"
    },
    {
      "label": "Financial aid for international students",
      "url": "https://www.trinity.edu/admissions/aid/types/international"
    },
    {
      "label": "Cost of attendance 2026–27",
      "url": "https://www.trinity.edu/admissions/aid/tuition/coa"
    },
    {
      "label": "Guide for international applicants",
      "url": "https://www.trinity.edu/admissions-and-aid/guides-and-resources/guide-international-applicants"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.trinity.edu/about/history"
    },
    {
      "label": "Trinity University — guide for international applicants",
      "url": "https://trinity.edu/admissions-and-aid/guides-and-resources/guide-international-applicants"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year",
      "application fee"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "fordham-university",
  "name": "Fordham University",
  "shortName": "Fordham",
  "country": "us",
  "city": "New York",
  "region": "New York",
  "founded": 1841,
  "type": "Private Jesuit university",
  "institutionKind": "private",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#860038",
    "c2": "#4d0020",
    "initials": "FU"
  },
  "description": "A private Jesuit university in New York City with campuses in the Bronx and Manhattan. Admission for applicants on a non-immigrant visa is need-aware: Fordham offers partial merit scholarships and competitive partial need-based aid, and need-based applicants must show they can pay at least $50,000 a year themselves.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.fordham.edu/",
    "admissions": "https://www.fordham.edu/undergraduate-admission/",
    "internationalAdmissions": "https://www.fordham.edu/undergraduate-admission/international-students/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.fordham.edu/undergraduate-admission/international-students/",
    "financialAid": "https://www.fordham.edu/undergraduate-admission/international-students/",
    "programs": "https://www.fordham.edu/academics/",
    "cost": "https://www.fordham.edu/student-financial-services/tuition-and-payments/undergraduate-tuition/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding. Aid applicants on a non-immigrant visa must file the CSS Profile by 1 November.",
        "status": "confirmed",
        "source": "https://www.fordham.edu/undergraduate-admission/international-students/",
        "verified": "2026-10-01",
        "note": "Fordham lists the fall-term dates without a year on its current page for international students."
      },
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding. CSS Profile due 1 November for aid applicants.",
        "status": "confirmed",
        "source": "https://www.fordham.edu/undergraduate-admission/international-students/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-03",
        "date": "3 January 2027",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding. CSS Profile due 3 January for aid applicants.",
        "status": "confirmed",
        "source": "https://www.fordham.edu/undergraduate-admission/international-students/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-03",
        "date": "3 January 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "CSS Profile due 15 January for aid applicants.",
        "status": "confirmed",
        "source": "https://www.fordham.edu/undergraduate-admission/international-students/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "CSS Profile — Regular Decision",
        "kind": "aid",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "International first-year applicants seeking need-based aid",
        "conditions": "Applications without a CSS Profile on file by the deadline are reviewed without consideration for financial aid.",
        "status": "confirmed",
        "source": "https://www.fordham.edu/undergraduate-admission/international-students/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 80,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Paid with the Common Application."
    },
    "documents": [
      "Common Application with essay",
      "Letter of recommendation sent by the recommender",
      "Transcripts covering three full years plus the current year, sent by the school",
      "English proficiency results",
      "Fordham Statement of Funding, or the CSS Profile for aid applicants"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 7,
      "recommended": null,
      "note": "Stated as 7.0+."
    },
    "toefl": {
      "min": 90,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 90,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ],
      "note": "4.5+ on the scale used from January 2026; 90+ for earlier scores."
    },
    "duolingo": {
      "min": 125,
      "recommended": null,
      "note": "Stated as 125+."
    },
    "waiver": "A waiver request form is available in the applicant portal after the application is submitted.",
    "note": "PTE 65+ is also accepted. Scores must be less than two years old."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Fordham does not require SAT or ACT results from any applicant; scores may be self-reported."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 68886,
      "billed": 96754,
      "budget": 102188,
      "includes": "tuition, fees, and food and housing are billed by Fordham; the total adds books, transportation and miscellaneous expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$96,754 direct charges · $102,188 cost of attendance",
    "items": [
      {
        "label": "Tuition",
        "amount": 68886
      },
      {
        "label": "Fees",
        "amount": 2063
      },
      {
        "label": "Food and housing",
        "amount": 25805
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 1692
      },
      {
        "label": "Transportation",
        "amount": 1327
      },
      {
        "label": "Miscellaneous expenses",
        "amount": 2415
      }
    ],
    "totalText": "$102,188 total cost of attendance, resident student",
    "note": "Fordham College at Rose Hill, fall 2026 entrants living on campus. International students also pay an international student service fee ($76 per term), an additional orientation fee and health insurance unless waived.",
    "billedSubtotal": 96754
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Fordham’s aid for international students is partial: merit scholarships up to $25,000, or need-based awards for families who can contribute at least $50,000 a year."
    },
    "merit": [
      {
        "name": "Merit scholarships",
        "amount": "Up to $25,000",
        "internationalEligible": true,
        "deadline": null,
        "note": "Partial; for applicants who say they are not applying for need-based aid. No separate application."
      },
      {
        "name": "Need-based awards",
        "amount": null,
        "internationalEligible": true,
        "deadline": "CSS Profile by the application deadline",
        "note": "Competitive and limited; fall first-year applicants only; the family must show a contribution of at least $50,000 a year. The award stays the same for four years while costs rise."
      }
    ],
    "needBased": {
      "availableToInternational": true,
      "meetsFullNeed": false,
      "needBlindInternational": false,
      "forms": [
        "CSS Profile"
      ],
      "deadlines": "With the application (15 January for Regular Decision)",
      "note": "The ISFAA is not accepted and CSS Profile fee waivers are not available. Spring entrants and international transfers are not considered for need-based aid."
    }
  },
  "sources": [
    {
      "label": "International students",
      "url": "https://www.fordham.edu/undergraduate-admission/international-students/"
    },
    {
      "label": "Tuition and cost of attendance — Rose Hill, 2026–2027",
      "url": "https://www.fordham.edu/student-financial-services/tuition-and-payments/undergraduate-tuition/fordham-college-at-rose-hill/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.fordham.edu/about/fordhams-history/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year"
    ],
    "unconfirmed": [
      "decision dates"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "furman-university",
  "name": "Furman University",
  "shortName": "Furman",
  "country": "us",
  "city": "Greenville",
  "region": "South Carolina",
  "founded": 1826,
  "type": "Private liberal arts university",
  "institutionKind": "liberal-arts",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#582C83",
    "c2": "#201547",
    "initials": "FU"
  },
  "description": "A private liberal arts university in Greenville, South Carolina, with no application fee and optional SAT/ACT. For international students Furman names the #YouAreWelcomeHere Scholarship, which covers at least half of tuition for two students a year; it requires every international applicant to file the CSS Profile and a financial form.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "economics",
    "computer-science",
    "psychology",
    "biology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.furman.edu/",
    "admissions": "https://www.furman.edu/admissions-aid/apply/",
    "internationalAdmissions": "https://www.furman.edu/admissions-aid/international-admissions/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.furman.edu/admissions-aid/apply/international-students/",
    "financialAid": "https://www.furman.edu/financial-aid/",
    "programs": "https://www.furman.edu/academics/",
    "cost": "https://www.furman.edu/admissions-aid/tuition-fees/"
  },
  "admissions": {
    "platforms": [
      "Common Application",
      "Coalition Application (Scoir)"
    ],
    "deadlines": [
      {
        "name": "Early Decision I",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding; decision by 15 November, enrolment deadline 5 January.",
        "status": "confirmed",
        "source": "https://www.furman.edu/admissions-aid/apply/international-students/",
        "verified": "2026-10-01",
        "note": "Furman lists the dates without a year; its first-year steps are headed 2026–2027."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding; decision by 20 December, enrolment deadline 1 May.",
        "status": "confirmed",
        "source": "https://www.furman.edu/admissions-aid/apply/international-students/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Early Decision II",
        "kind": "ED2",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": true,
        "appliesTo": "International first-year applicants",
        "conditions": "Binding; decision by 1 February, enrolment deadline 1 March.",
        "status": "confirmed",
        "source": "https://www.furman.edu/admissions-aid/apply/international-students/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Decision by 15 February, enrolment deadline 1 May.",
        "status": "confirmed",
        "source": "https://www.furman.edu/admissions-aid/apply/international-students/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "#YouAreWelcomeHere Scholarship application",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "International applicants on an F-1 visa",
        "conditions": "Completed on the Furman status page; recipients are notified by 15 March.",
        "status": "confirmed",
        "source": "https://www.furman.edu/admissions-aid/apply/international-students/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 0,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Furman does not have an application fee."
    },
    "documents": [
      "Common Application or Coalition Application",
      "School report (in English)",
      "Official transcript for at least three full years (in English)",
      "Proof of English proficiency",
      "Furman Financial Information Form",
      "CSS Profile (required of all international applicants; no fee waivers)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 7,
      "recommended": null,
      "note": "Overall band score."
    },
    "toefl": {
      "min": 100,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 100,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 5,
          "recommended": null
        }
      ],
      "note": "100 on the 0–120 scale or 5 on the 1–6 scale."
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": "Furman cannot provide fee waivers."
    },
    "waiver": "Citizens of a listed group of English-speaking countries are exempt; an IB Diploma, HL English at 5 or better, SAT Reading and Writing of 550, or a school letter confirming English-medium instruction also count.",
    "note": "Cambridge C1 Advanced at 180 overall is accepted too."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "The SAT and ACT are optional for all undergraduate applicants."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 62878,
      "billed": 81276,
      "budget": 84926,
      "includes": "tuition, student fees, average housing and the unlimited meal plan are direct costs; the total adds books, transportation and personal expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$81,276 direct costs · $84,926 estimated annual cost",
    "items": [
      {
        "label": "Tuition",
        "amount": 62878
      },
      {
        "label": "Student fees",
        "amount": 410
      },
      {
        "label": "Housing (weighted average)",
        "amount": 10440
      },
      {
        "label": "Unlimited meal plan",
        "amount": 7548
      },
      {
        "label": "Books and supplies",
        "amount": 1250
      },
      {
        "label": "Transportation",
        "amount": 1100
      },
      {
        "label": "Personal expenses (estimated)",
        "amount": 1300
      }
    ],
    "totalText": "$84,926 total estimated annual cost",
    "note": "Actual costs vary with housing and meal plan.",
    "billedSubtotal": 81276
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Furman says it meets 100% of demonstrated need for eligible students but does not say that this applies to international students, so no full-scholarship route is claimed."
    },
    "merit": [
      {
        "name": "#YouAreWelcomeHere Scholarship",
        "amount": "At least 50% of tuition",
        "internationalEligible": true,
        "deadline": "1 February",
        "note": "Two international students a year; renewable with satisfactory academic progress."
      },
      {
        "name": "Merit scholarships",
        "amount": null,
        "internationalEligible": null,
        "deadline": null,
        "note": "Awarded automatically without a separate application; Furman points international students to its scholarships page, which was not read."
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [
        "CSS Profile",
        "Furman Financial Information Form"
      ],
      "deadlines": "With the application",
      "note": "Both forms are required of all international applicants. Whether need-based grants are given to international students was not confirmed."
    }
  },
  "sources": [
    {
      "label": "International students — how to apply",
      "url": "https://www.furman.edu/admissions-aid/apply/international-students/"
    },
    {
      "label": "How to apply — dates",
      "url": "https://www.furman.edu/admissions-aid/apply/"
    },
    {
      "label": "Tuition and fees 2026–2027",
      "url": "https://www.furman.edu/admissions-aid/tuition-fees/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.furman.edu/about/history"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "named international scholarship",
      "founding year"
    ],
    "unconfirmed": [
      "need-based aid for international students",
      "merit scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "ucla",
  "name": "University of California, Los Angeles",
  "shortName": "UCLA",
  "country": "us",
  "city": "Los Angeles",
  "region": "California",
  "founded": 1919,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#2774AE",
    "c2": "#FFD100",
    "initials": "UCLA"
  },
  "description": "A public research university in Los Angeles and part of the University of California. UCLA does not consider SAT or ACT scores and states that it provides no funding to international undergraduates, so families need to plan for the full nonresident cost.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.ucla.edu/",
    "admissions": "https://admission.ucla.edu/apply/first-year",
    "internationalAdmissions": "https://admission.ucla.edu/apply/international-applicants",
    "applicationPortal": "https://apply.universityofcalifornia.edu/",
    "scholarships": "https://admission.ucla.edu/apply/international-applicants",
    "financialAid": "https://admission.ucla.edu/tuition-aid",
    "programs": "https://admission.ucla.edu/apply/majors",
    "cost": "https://admission.ucla.edu/tuition-aid/tuition-fees"
  },
  "admissions": {
    "platforms": [
      "UC Application (shared by all UC campuses)"
    ],
    "deadlines": [
      {
        "name": "UC application opens",
        "kind": "opens",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-08-01",
        "date": "1 August 2026",
        "binding": false,
        "appliesTo": "All first-year applicants",
        "conditions": "The application can be started from 1 August.",
        "status": "confirmed",
        "source": "https://admission.ucla.edu/apply",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "UC application filing period",
        "kind": "intake",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-30",
        "date": "1 October – 30 November 2026",
        "binding": false,
        "appliesTo": "All first-year applicants",
        "conditions": "One UC application covers all campuses. Applications are accepted from 1 October and must be submitted by 30 November.",
        "status": "confirmed",
        "source": "https://admission.ucla.edu/apply",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "First-year decisions",
        "kind": "decision",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "date": "Late March 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "UCLA says decisions for most first-year applicants are released in late March.",
        "status": "confirmed",
        "source": "https://admission.ucla.edu/apply",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 95,
      "currency": "USD",
      "waiverAvailableToInternational": false,
      "waiver": "UC fee waivers are for US citizens, permanent residents and applicants eligible for AB540 benefits",
      "note": "The UC application fee is $95 per campus for international and non-immigrant applicants ($80 per campus for others); it is non-refundable."
    },
    "documents": [
      "UC Application with personal insight questions",
      "Self-reported academic record",
      "English proficiency scores, self-reported on the application by January"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 7.5,
      "note": "UCLA looks for competitive scores of 7.5 or above."
    },
    "toefl": {
      "min": null,
      "recommended": 100,
      "scales": [
        {
          "period": "pre2026",
          "min": null,
          "recommended": 100
        },
        {
          "period": "post2026",
          "min": null,
          "recommended": 5
        }
      ],
      "note": "Competitive: 5 or higher with sub-scores of 5 or higher on the revised scale, or above 100 with sub-scores above 24 on the previous scale."
    },
    "duolingo": {
      "min": null,
      "recommended": 135,
      "note": "Competitive at 135 or higher."
    },
    "waiver": null,
    "note": "TOEFL scores sent to one UC campus reach all campuses applied to; IELTS and Duolingo results must be sent to each campus."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-used",
      "note": "UCLA does not consider SAT or ACT scores for admission or scholarship purposes."
    },
    "act": {
      "policy": "not-used",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 55700,
      "budget": 84770,
      "includes": "university fees, nonresident supplemental tuition, housing and food, books, transportation, personal expenses and health insurance"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$84,770 estimated nonresident total, living in residence halls",
    "items": [
      {
        "label": "University fees",
        "amount": 16430
      },
      {
        "label": "Nonresident supplemental tuition",
        "amount": 39270
      },
      {
        "label": "Food and housing (residence halls)",
        "amount": 19867
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 1588
      },
      {
        "label": "Transportation",
        "amount": 969
      },
      {
        "label": "Personal",
        "amount": 2761
      },
      {
        "label": "Health insurance (UC SHIP)",
        "amount": 3885
      }
    ],
    "totalText": "$84,770 total for nonresidents in residence halls",
    "note": "Cost per nine-month academic year, updated July 2026. UC SHIP can be waived with comparable insurance.",
    "studentCategory": "Nonresident (international) students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "UCLA states that it does not provide funding to international students at the undergraduate level."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "No university funding for international undergraduates; UCLA points to outside scholarship search sites and home-country sources."
    }
  },
  "sources": [
    {
      "label": "International applicants",
      "url": "https://admission.ucla.edu/apply/international-applicants"
    },
    {
      "label": "Apply — important dates for Fall 2027 admission",
      "url": "https://admission.ucla.edu/apply"
    },
    {
      "label": "Tuition and fees",
      "url": "https://admission.ucla.edu/tuition-aid/tuition-fees"
    },
    {
      "label": "About — history and facts",
      "url": "https://newsroom.ucla.edu/ucla-fast-facts"
    },
    {
      "label": "University of California — how to apply",
      "url": "https://admission.universityofcalifornia.edu/apply-now.html"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year",
      "application fee"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "uc-san-diego",
  "name": "University of California San Diego",
  "shortName": "UC San Diego",
  "country": "us",
  "city": "San Diego (La Jolla)",
  "region": "California",
  "founded": 1960,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#182B49",
    "c2": "#C69214",
    "initials": "UCSD"
  },
  "description": "A public research university in La Jolla, San Diego, and part of the University of California. UC San Diego does not consider SAT or ACT scores. International students cannot receive federal or state aid, and the university’s own pages read for this profile describe no institutional aid for them.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://ucsd.edu/",
    "admissions": "https://admissions.ucsd.edu/first-year/",
    "internationalAdmissions": "https://admissions.ucsd.edu/international/",
    "applicationPortal": "https://apply.universityofcalifornia.edu/",
    "scholarships": "https://admissions.ucsd.edu/why/cost-aid/index.html",
    "financialAid": "https://fas.ucsd.edu/",
    "programs": "https://admissions.ucsd.edu/why/majors/",
    "cost": "https://admissions.ucsd.edu/why/cost-aid/index.html"
  },
  "admissions": {
    "platforms": [
      "UC Application (shared by all UC campuses)"
    ],
    "deadlines": [
      {
        "name": "UC application opens",
        "kind": "opens",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-08-01",
        "date": "1 August 2026",
        "binding": false,
        "appliesTo": "All first-year applicants",
        "conditions": "The application can be started from 1 August.",
        "status": "confirmed",
        "source": "https://admissions.ucsd.edu/first-year/application-timeline.html",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "UC application filing period",
        "kind": "intake",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-30",
        "date": "1 October – 30 November 2026",
        "binding": false,
        "appliesTo": "All first-year applicants",
        "conditions": "One UC application covers all campuses. Applications are accepted from 1 October and must be submitted by 30 November.",
        "status": "confirmed",
        "source": "https://admissions.ucsd.edu/first-year/application-timeline.html",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 95,
      "currency": "USD",
      "waiverAvailableToInternational": false,
      "waiver": "UC fee waivers are for US citizens, permanent residents and applicants eligible for AB540 benefits",
      "note": "The UC application fee is $95 per campus for international and non-immigrant applicants ($80 per campus for others); it is non-refundable."
    },
    "documents": [
      "UC Application",
      "English proficiency test for applicants schooled where English is not the language of instruction",
      "Official documents after admission (received by 1 July; test results by 15 July)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 7,
      "recommended": null,
      "note": "Academic module."
    },
    "toefl": {
      "min": 83,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 83,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ],
      "note": "4.5 or better on the current scale, or 83 or higher for tests taken before January 2026."
    },
    "duolingo": {
      "min": 115,
      "recommended": null,
      "note": "Minimum score 115."
    },
    "waiver": null,
    "note": "AP or IB English examination scores can also demonstrate proficiency."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-used",
      "note": "UC San Diego does not consider SAT or ACT test scores as a factor in admissions or scholarship decisions."
    },
    "act": {
      "policy": "not-used",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 53472,
      "billed": 77704,
      "includes": "nonresident tuition, required fees and on-campus food and housing; books, transportation, personal expenses and health insurance are extra"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$53,472 nonresident tuition · $77,704 with fees, food and housing",
    "items": [
      {
        "label": "Tuition — nonresident, first-year undergraduates",
        "amount": 53472
      },
      {
        "label": "Required fees",
        "amount": 3789
      },
      {
        "label": "Food and housing (on campus)",
        "amount": 20443
      }
    ],
    "billedSubtotal": 77704,
    "totalText": "$77,704 for tuition, required fees and on-campus food and housing",
    "studentCategory": "Nonresident (international) students",
    "note": "From section G1 of UC San Diego’s 2025–26 Common Data Set, which lists typical charges for the full 2026–2027 academic year. A tuition stability plan freezes tuition for each entering cohort."
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "International students are not eligible for federal or state financial aid; institutional funding for them was not found, so nothing is claimed."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "International students are not eligible to receive federal or state financial aid. UC San Diego points to outside agency scholarships."
    }
  },
  "sources": [
    {
      "label": "International applicants",
      "url": "https://admissions.ucsd.edu/international/"
    },
    {
      "label": "First-year application requirements",
      "url": "https://admissions.ucsd.edu/first-year/application-requirements.html"
    },
    {
      "label": "First-year application timeline",
      "url": "https://admissions.ucsd.edu/first-year/application-timeline.html"
    },
    {
      "label": "Cost and aid",
      "url": "https://admissions.ucsd.edu/why/cost-aid/index.html"
    },
    {
      "label": "UC San Diego Common Data Set 2025–26 (section G1)",
      "url": "https://ir.ucsd.edu/stats/undergrad/CDS-2025-2026-Final2.pdf"
    },
    {
      "label": "About — history and facts",
      "url": "https://catalog.ucsd.edu/about/about-uc-san-diego/index.html"
    },
    {
      "label": "University of California — how to apply",
      "url": "https://admission.universityofcalifornia.edu/apply-now.html"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests",
      "nonresident tuition and billed costs",
      "founding year",
      "application fee"
    ],
    "unconfirmed": [
      "institutional aid for international students",
      "decision dates"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "university-of-virginia",
  "name": "University of Virginia",
  "shortName": "UVA",
  "country": "us",
  "city": "Charlottesville",
  "region": "Virginia",
  "founded": 1819,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#232D4B",
    "c2": "#E57200",
    "initials": "UVA"
  },
  "description": "A public research university in Charlottesville. UVA is test-optional for Fall 2027. It states that it has no scholarship or loan funds for foreign nationals — the exception is students from United World College schools — and advises others not to apply unless they can finance their studies.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.virginia.edu/",
    "admissions": "https://admission.virginia.edu/apply",
    "internationalAdmissions": "https://admission.virginia.edu/i-am/international",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://admission.virginia.edu/i-am/international",
    "financialAid": "https://sfs.virginia.edu/",
    "programs": "https://www.virginia.edu/academics",
    "cost": "https://sfs.virginia.edu/financial-aid-new-applicants/financial-aid-basics/estimated-undergraduate-cost-attendance-2026-2027"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Teacher and counsellor documents by 8 November; notification by 15 December.",
        "status": "confirmed",
        "source": "https://admission.virginia.edu/admission/deadlines-instructions",
        "verified": "2026-10-01",
        "note": "UVA lists the dates without a year; the same page describes testing for Fall 2027 entry."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Teacher and counsellor documents by 8 November; notification by 15 February.",
        "status": "confirmed",
        "source": "https://admission.virginia.edu/admission/deadlines-instructions",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-05",
        "date": "5 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Teacher and counsellor documents by 10 January; notification by 1 April.",
        "status": "confirmed",
        "source": "https://admission.virginia.edu/admission/deadlines-instructions",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 75,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Stated in section C13 of UVA’s 2024–25 Common Data Set; the 2025–26 edition could not be opened during this check."
    },
    "documents": [
      "Common Application",
      "School forms and recommendations",
      "English language assessment (strongly encouraged)",
      "Financial Guarantee for Foreign National Applicants (after admission)"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": null,
      "status": "no-minimum",
      "note": "Accepted and strongly encouraged; no minimum score is stated."
    },
    "toefl": {
      "min": null,
      "recommended": null,
      "status": "no-minimum",
      "note": "Accepted and strongly encouraged; no minimum score is stated."
    },
    "duolingo": {
      "min": null,
      "recommended": null,
      "status": "no-minimum",
      "note": "Accepted and strongly encouraged; no minimum score is stated."
    },
    "waiver": null,
    "note": "Cambridge C1 Advanced or C2 Proficiency is also accepted; an InitialView or Vericant evaluation may be submitted by the application deadline."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "Applicants for first-year admission for Fall 2027 choose whether to share SAT or ACT scores; UVA says they are not disadvantaged by the choice."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 57432,
      "budget": 83286,
      "budgetText": "$83,286–$84,976",
      "includes": "tuition, fees, housing, food, books, personal expenses, loan fees and a travel allowance of $550 to $2,240"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$62,054 tuition and fees · $83,286–$84,976 estimated total",
    "items": [
      {
        "label": "Tuition (non-Virginian, College of Arts and Sciences, first year)",
        "amount": 57432
      },
      {
        "label": "Fees",
        "amount": 4622
      },
      {
        "label": "Housing",
        "amount": 8730
      },
      {
        "label": "Food",
        "amount": 7340
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 1540
      },
      {
        "label": "Personal expenses",
        "amount": 3000
      },
      {
        "label": "Direct loan fees",
        "amount": 72
      }
    ],
    "totalText": "$83,286 to $84,976 total, depending on the travel allowance",
    "note": "First-year non-Virginian student in the College of Arts and Sciences; other schools and later years cost more. Student health insurance is $4,220 if needed.",
    "studentCategory": "Non-Virginian (international) students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": "Need-based support only for students admitted from United World College schools.",
      "howToApply": null,
      "note": "UVA states it has no funds for scholarships or loans for foreign nationals, apart from United World College students."
    },
    "merit": [
      {
        "name": "Davis United World College scholarship",
        "amount": null,
        "internationalEligible": true,
        "deadline": null,
        "note": "Need-based support for admitted students who attend a United World College school."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "UVA recommends not applying if you cannot finance your education, unless you attend a United World College school."
    }
  },
  "sources": [
    {
      "label": "Deadlines and instructions",
      "url": "https://admission.virginia.edu/admission/deadlines-instructions"
    },
    {
      "label": "International applicants",
      "url": "https://admission.virginia.edu/i-am/international"
    },
    {
      "label": "Estimated undergraduate cost of attendance 2026–2027",
      "url": "https://sfs.virginia.edu/financial-aid-new-applicants/financial-aid-basics/estimated-undergraduate-cost-attendance-2026-2027"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.virginia.edu/aboutuva"
    },
    {
      "label": "University of Virginia Common Data Set 2024–25 (section C13)",
      "url": "https://ira.virginia.edu/sites/ira/files/2025-03/CDS_2024-2025_508.pdf"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests accepted",
      "costs",
      "aid for international students",
      "founding year",
      "application fee"
    ],
    "unconfirmed": [
      "English score expectations"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "university-of-florida",
  "name": "University of Florida",
  "shortName": "UF",
  "country": "us",
  "city": "Gainesville",
  "region": "Florida",
  "founded": 1853,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#0021A5",
    "c2": "#FA4616",
    "initials": "UF"
  },
  "description": "A public research university in Gainesville. Florida requires every first-year applicant to submit an ACT, CLT or SAT score, and applicants schooled abroad also need a course-by-course credential evaluation. UF’s aid office says international students may be eligible only for private or college-awarded scholarships.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.ufl.edu/",
    "admissions": "https://admissions.ufl.edu/apply/freshman/",
    "internationalAdmissions": "https://admissions.ufl.edu/apply/international/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://www.sfa.ufl.edu/international/",
    "financialAid": "https://www.sfa.ufl.edu/",
    "programs": "https://catalog.ufl.edu/UGRD/programs/",
    "cost": "https://www.sfa.ufl.edu/cost/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Decision",
        "kind": "ED",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-10-15",
        "date": "15 October 2026",
        "binding": true,
        "appliesTo": "First-year applicants",
        "conditions": "Binding. Materials by 22 October; decision 11 December; confirmation by 8 January.",
        "status": "confirmed",
        "source": "https://admissions.ufl.edu/apply/freshman/deadlines",
        "verified": "2026-10-01",
        "note": "UF heads the table “Application Deadlines & Options 2026-27” and gives the dates without a year. Applicants with coursework outside the United States are asked to apply ahead of the deadlines."
      },
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Not binding. Materials by 8 November; decision 22 January; confirmation by 1 May.",
        "status": "confirmed",
        "source": "https://admissions.ufl.edu/apply/freshman/deadlines",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Materials by 22 January; decision 19 March; confirmation by 1 May.",
        "status": "confirmed",
        "source": "https://admissions.ufl.edu/apply/freshman/deadlines",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 30,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Nonrefundable; paid by credit card unless you qualify for a fee waiver."
    },
    "documents": [
      "Common Application",
      "Secondary school transcripts for the four most recent years with certified English translation",
      "Course-by-course credential evaluation with GPA from a NACES member",
      "ACT, CLT or SAT score"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": null,
      "status": "no-minimum",
      "note": "UF’s undergraduate catalog says freshman applicants whose native language is not English must submit official TOEFL or IELTS scores; it gives no minimum score for freshmen."
    },
    "toefl": {
      "min": null,
      "recommended": null,
      "status": "no-minimum",
      "note": "UF’s undergraduate catalog says freshman applicants whose native language is not English must submit official TOEFL or IELTS scores; it gives no minimum score for freshmen. UF’s TOEFL code is 5812."
    },
    "duolingo": {
      "min": null,
      "recommended": null,
      "note": "The catalog names only TOEFL and IELTS; the Duolingo English Test is not mentioned."
    },
    "waiver": null,
    "note": null
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "required-alternatives",
      "note": "Under Florida Board of Governors regulation 6.002 all first-year students must submit an ACT, CLT or SAT score; UF has no test preference. Scores may be self-reported and must arrive by the materials deadline.",
      "label": "ACT, CLT or SAT required"
    },
    "act": {
      "policy": "required-alternatives",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 34620,
      "budget": 54010,
      "includes": "tuition and fees, books, transportation, living expenses, personal expenses and loan fees"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$34,620 out-of-state tuition and fees · $54,010 total budget",
    "items": [
      {
        "label": "Tuition and fees (out-of-state, 30 credit hours)",
        "amount": 34620
      },
      {
        "label": "Books, course materials, supplies, equipment",
        "amount": 1220
      },
      {
        "label": "Transportation",
        "amount": 1700
      },
      {
        "label": "Living expenses",
        "amount": 14190
      },
      {
        "label": "Miscellaneous personal expenses",
        "amount": 2224
      },
      {
        "label": "Federal student loan fees",
        "amount": 56
      }
    ],
    "totalText": "$54,010 total out-of-state budget",
    "note": "Tuition and fee figures are UF’s projected estimates for incoming freshmen.",
    "studentCategory": "Out-of-state (international) students"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "UF’s aid office does not administer aid for international students; it says they may be eligible for private or college-awarded scholarships. No full-scholarship route is claimed."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "International students may be eligible for private or college-awarded scholarships; UF publishes separate guidance on financial resources for them."
    }
  },
  "sources": [
    {
      "label": "Freshman dates and deadlines",
      "url": "https://admissions.ufl.edu/apply/freshman/deadlines"
    },
    {
      "label": "International applicants",
      "url": "https://admissions.ufl.edu/apply/international/"
    },
    {
      "label": "Cost of attendance 2026–27",
      "url": "https://www.sfa.ufl.edu/cost/"
    },
    {
      "label": "Aid information for international students",
      "url": "https://www.sfa.ufl.edu/international/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.ufl.edu/about"
    },
    {
      "label": "Undergraduate catalog — admission",
      "url": "https://catalog.ufl.edu/UGRD/admission/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "costs",
      "founding year",
      "accepted English tests"
    ],
    "unconfirmed": [
      "English score minimums (not published for freshmen)",
      "scholarships open to international students"
    ]
  },
  "lastVerified": "2026-10-05",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "florida-state-university",
  "name": "Florida State University",
  "shortName": "FSU",
  "country": "us",
  "city": "Tallahassee",
  "region": "Florida",
  "founded": 1851,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#782F40",
    "c2": "#CEB888",
    "initials": "FSU"
  },
  "description": "A public research university in Tallahassee. International first-year applicants apply through Regular Decision or the later rolling round — Early Decision is for domestic students and Early Action for Florida residents — and admitted international students are considered automatically for an out-of-state tuition waiver scholarship.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.fsu.edu/",
    "admissions": "https://admissions.fsu.edu/first-year/apply",
    "internationalAdmissions": "https://admissions.fsu.edu/international/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://admissions.fsu.edu/first-year/scholarships",
    "financialAid": "https://financialaid.fsu.edu/",
    "programs": "https://academic-guide.fsu.edu/",
    "cost": "https://tuition.fsu.edu/cost-attendance/cost-estimates-fall-2026-spring-2027"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "All first-year applicants, including international",
        "conditions": "Open to all students. Materials by 8 December; additional test scores by 1 January; decisions released 18 February; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://admissions.fsu.edu/first-year/apply",
        "verified": "2026-10-01",
        "note": "FSU lists the dates without a year on its current first-year page. Scholarship funds are limited, so FSU encourages applying by 1 December."
      },
      {
        "name": "Rolling",
        "kind": "rolling",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-03-01",
        "date": "1 March 2027",
        "binding": false,
        "appliesTo": "All first-year applicants, including international",
        "conditions": "Open to all students. Materials and test scores by 8 March; decisions on a rolling basis in April; deposit by 1 May.",
        "status": "confirmed",
        "source": "https://admissions.fsu.edu/first-year/apply",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Honors / Presidential Scholars supplemental application",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-12-01",
        "date": "1 December 2026",
        "binding": false,
        "appliesTo": "Applicants seeking Honors or Presidential Scholars",
        "conditions": "Deadline to complete the supplemental application.",
        "status": "confirmed",
        "source": "https://admissions.fsu.edu/first-year/apply",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 30,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": "Waived for students who qualify for an ACT, College Board or NACAC fee waiver or meet other indicators of economic need; international eligibility was not confirmed",
      "note": "First-year application fee.",
      "source": "https://ir.fsu.edu/commondataset.aspx",
      "verified": "2026-10-06",
      "cycle": "2025–26 Common Data Set, section C13 (Fall 2027 admission cycle)",
      "status": "confirmed"
    },
    "documents": [
      "Common Application",
      "Self-reported ACT/CLT/SAT scores on the Admissions Portal",
      "Self-reported academic record (STARS)",
      "Essay and résumé",
      "English proficiency scores sent by the testing agency"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Academic IELTS."
    },
    "toefl": {
      "min": 80,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 80,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.0,
          "recommended": null
        }
      ],
      "note": "80 for tests taken before 21 January 2026; 4.0 for tests taken on or after that date."
    },
    "duolingo": {
      "min": 125,
      "recommended": null,
      "note": null
    },
    "waiver": null,
    "note": "PTE 55, Michigan Language Assessment 55 and Cambridge C1 Advanced or C2 Proficiency 180 are also accepted. Scores are valid for two years."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "required",
      "note": "FSU’s 2025–26 Common Data Set marks the SAT or ACT as required to be considered for admission for students applying for Fall 2027, and explains that Florida Board of Governors regulation 6.002 requires first-year applicants to submit an ACT, CLT or SAT score. At least one score must arrive before the application deadline."
    },
    "act": {
      "policy": "accepted",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 22232,
      "budget": 43916,
      "includes": "tuition, fees, on-campus housing, food, books, transportation and personal expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$22,282 out-of-state tuition and fees · $43,916 estimated total on campus",
    "items": [
      {
        "label": "Tuition (out-of-state, 13 credits per term)",
        "amount": 22232
      },
      {
        "label": "Fees",
        "amount": 50
      },
      {
        "label": "Housing (on campus)",
        "amount": 8420
      },
      {
        "label": "Food",
        "amount": 5740
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 1380
      },
      {
        "label": "Transportation",
        "amount": 3590
      },
      {
        "label": "Personal",
        "amount": 2504
      }
    ],
    "totalText": "$43,916 total, out-of-state student living on campus",
    "note": "Fall 2026 and spring 2027 estimate for the main campus in Tallahassee.",
    "studentCategory": "Out-of-state (international) students"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "FSU names an out-of-state tuition waiver scholarship for admitted international first-year students; it does not describe full funding, so none is claimed."
    },
    "merit": [
      {
        "name": "Out-of-state tuition waiver scholarship",
        "amount": null,
        "internationalEligible": true,
        "deadline": "Apply for admission by 1 December (funds are limited)",
        "note": "Admitted international first-year students are considered automatically; the amount was not confirmed."
      },
      {
        "name": "IB Diploma Scholarship",
        "amount": "$8,000 in total over eight semesters",
        "internationalEligible": null,
        "deadline": null,
        "note": "Automatic consideration for IB Diploma candidates."
      }
    ],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Merit scholarships are offered with the admission decision; FSU refers international students to its Center for Global Engagement for other funding."
    }
  },
  "sources": [
    {
      "label": "First-year application plans and deadlines",
      "url": "https://admissions.fsu.edu/first-year/apply"
    },
    {
      "label": "English proficiency",
      "url": "https://admissions.fsu.edu/international/english-proficiency"
    },
    {
      "label": "Cost estimates fall 2026 – spring 2027",
      "url": "https://tuition.fsu.edu/cost-attendance/cost-estimates-fall-2026-spring-2027"
    },
    {
      "label": "First-year scholarships",
      "url": "https://admissions.fsu.edu/first-year/scholarships"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.fsu.edu/about"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "English tests",
      "costs",
      "scholarship named for international students",
      "founding year"
    ],
    "unconfirmed": [
      "wording of the SAT/ACT requirement for international applicants",
      "scholarship amounts"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "michigan-state-university",
  "name": "Michigan State University",
  "shortName": "MSU",
  "country": "us",
  "city": "East Lansing",
  "region": "Michigan",
  "founded": 1855,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#18453B",
    "c2": "#0B2A23",
    "initials": "MSU"
  },
  "description": "A public research university in East Lansing, Michigan. MSU is test-optional and considers every admitted international student for its Non-resident Scholarship, with award levels from $3,000 to $18,000; these are partial awards and only a limited number of students receive offers.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://msu.edu/",
    "admissions": "https://admissions.msu.edu/apply/first-year",
    "internationalAdmissions": "https://admissions.msu.edu/apply/international",
    "applicationPortal": "https://admissions.msu.edu/apply/international/apply-now",
    "scholarships": "https://admissions.msu.edu/cost-aid/scholarships/international",
    "financialAid": "https://admissions.msu.edu/cost-aid/financial-aid",
    "programs": "https://admissions.msu.edu/academics/majors-degrees-programs",
    "cost": "https://admissions.msu.edu/cost-aid"
  },
  "admissions": {
    "platforms": [
      "MSU application",
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "time": "23:59",
        "timezone": "ET",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Not binding. A complete application by 1 November guarantees an initial decision by 15 January and maximum scholarship consideration.",
        "status": "confirmed",
        "source": "https://admissions.msu.edu/apply/international/dates-and-deadlines",
        "verified": "2026-10-01",
        "note": "MSU says the fall 2027 first-year application is open; the dates are given without a year."
      },
      {
        "name": "Regular Decision — priority date",
        "kind": "priority",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "time": "23:59",
        "timezone": "ET",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Complete applications submitted by 1 February are guaranteed an initial decision by 31 March.",
        "status": "confirmed",
        "source": "https://admissions.msu.edu/apply/international/dates-and-deadlines",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision — final deadline",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-04-01",
        "date": "1 April 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Applications received after 1 February are considered on a rolling basis until 1 April.",
        "status": "confirmed",
        "source": "https://admissions.msu.edu/apply/international/dates-and-deadlines",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 75,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Required to submit the application."
    },
    "documents": [
      "Application",
      "Transcripts",
      "English language proficiency results sent by the testing agency"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "Regular admission 6.5 or higher; provisional admission at 6.0."
    },
    "toefl": {
      "min": 79,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 79,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4,
          "recommended": null
        }
      ],
      "note": "Before 21 January 2026: 79 with no subscore below 17 (provisional 60–78). From 21 January 2026: 4 with no section below 4, except 3.5 for speaking (provisional 3.5)."
    },
    "duolingo": {
      "min": 110,
      "recommended": null,
      "note": "Regular admission 110 or higher; provisional admission 95–105."
    },
    "waiver": "Three consecutive years of full-time US high school with a 3.0 GPA can meet the requirement.",
    "note": "SAT or ACT results can also be used to meet the English requirement."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "optional",
      "note": "MSU is test-optional: international students are encouraged, though not required, to submit SAT or ACT scores."
    },
    "act": {
      "policy": "optional",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 44300,
      "budget": 70725,
      "includes": "tuition, fees and taxes, food and housing, books, personal expenses, medical insurance and travel"
    },
    "academicYear": "2025–2026",
    "currency": "USD",
    "headline": "$46,258 tuition and fees · $70,725 estimated total",
    "items": [
      {
        "label": "Tuition",
        "amount": 44300
      },
      {
        "label": "Fees and taxes",
        "amount": 1958
      },
      {
        "label": "Food and housing",
        "amount": 13443
      },
      {
        "label": "Books and supplies",
        "amount": 1420
      },
      {
        "label": "Personal and miscellaneous",
        "amount": 3930
      },
      {
        "label": "Medical",
        "amount": 3054
      },
      {
        "label": "Travel",
        "amount": 2620
      }
    ],
    "totalText": "$70,725 estimated total for an international first-year student",
    "note": "MSU’s international first-year estimate uses 2025–26 rates; it finalises the next year’s costs every July. The figures are also the basis of the financial proof needed for an I-20.",
    "studentCategory": "International students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": "merit",
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "MSU’s scholarships for international students are partial awards; international students are not eligible for aid through the FAFSA."
    },
    "merit": [
      {
        "name": "MSU Non-resident Scholarship",
        "amount": "$3,000–$18,000",
        "internationalEligible": true,
        "deadline": "Apply by 1 November for maximum consideration",
        "note": "All admitted international students are considered automatically; decisions by mid-February. Only a limited number receive offers."
      },
      {
        "name": "Honors College Excellence Scholarship",
        "amount": "$13,000 a year",
        "internationalEligible": true,
        "deadline": null,
        "note": "For a select group of Honors College invitees."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Scholarships only; no need-based aid for international students is described."
    }
  },
  "sources": [
    {
      "label": "International dates and deadlines",
      "url": "https://admissions.msu.edu/apply/international/dates-and-deadlines"
    },
    {
      "label": "English language requirements",
      "url": "https://admissions.msu.edu/apply/international/language-requirements"
    },
    {
      "label": "International student scholarships",
      "url": "https://admissions.msu.edu/cost-aid/scholarships/international"
    },
    {
      "label": "Cost and aid",
      "url": "https://admissions.msu.edu/cost-aid"
    },
    {
      "label": "About — history and facts",
      "url": "https://brand.msu.edu/storytelling/msu-history"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "testing policy",
      "English tests",
      "costs",
      "scholarships for international students",
      "founding year"
    ],
    "unconfirmed": [
      "costs for 2026–27"
    ]
  },
  "lastVerified": "2026-10-01",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "purdue-university",
  "name": "Purdue University",
  "shortName": "Purdue",
  "country": "us",
  "city": "West Lafayette",
  "region": "Indiana",
  "founded": 1869,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#8E6F3E",
    "c2": "#000000",
    "initials": "PU"
  },
  "description": "A public research university in West Lafayette, Indiana, known for engineering and computer science; applicants are admitted to a specific major and must submit an SAT, ACT or CLT score. Purdue states that international undergraduate students are not eligible for financial aid, including its scholarships.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.purdue.edu/",
    "admissions": "https://admissions.purdue.edu/become-student/apply/",
    "internationalAdmissions": "https://admissions.purdue.edu/become-student/international/",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://admissions.purdue.edu/cost-financial-aid/scholarships/",
    "financialAid": "https://admissions.purdue.edu/cost-financial-aid/",
    "programs": "https://admissions.purdue.edu/majors/",
    "cost": "https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/undergraduate-tuition-and-fees-2026-2027/"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Decision on 15 January. Also the priority deadline for engineering, computer science, professional flight, nursing and veterinary technology: after 1 November these programmes take applications only if space allows.",
        "status": "confirmed",
        "source": "https://admissions.purdue.edu/deadlines/first-year-college-student/",
        "verified": "2026-10-01",
        "note": "Purdue lists the dates without a year on its current deadlines page."
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "First-year applicants",
        "conditions": "Decision by 31 March. Purdue warns that admission is much more competitive for later applications.",
        "status": "confirmed",
        "source": "https://admissions.purdue.edu/deadlines/first-year-college-student/",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 60,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Nonrefundable."
    },
    "documents": [
      "Common Application with Purdue questions",
      "At least three consecutive years of courses and grades",
      "Proof of English proficiency",
      "Country-specific school documents"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": null,
      "recommended": 6.5,
      "note": "Purdue says applicants generally have 6.5 or higher with at least 6.0 in each section. IELTS General Training is not accepted."
    },
    "toefl": {
      "min": 88,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 88,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.5,
          "recommended": null
        }
      ],
      "note": "Before 21 January 2026: 88 with at least 20 in each section. From 21 January 2026: 4.5 with at least 4.0 in each section."
    },
    "duolingo": {
      "min": null,
      "recommended": 115,
      "note": "Applicants generally have 115 with 110 or higher in all subscores."
    },
    "waiver": "Academic success in a completed English-taught curriculum of at least three years may be considered.",
    "note": "ACT English 26 or SAT Reading and Writing 600 are also accepted as proof."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "required-alternatives",
      "label": "SAT, ACT or CLT required",
      "note": "Purdue’s 2025–26 Common Data Set (section C8) marks the SAT or ACT as required to be considered for admission; its admissions pages say it also accepts the CLT, with no preference between the tests."
    },
    "act": {
      "policy": "required-alternatives",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 32104,
      "billed": 48838,
      "includes": "tuition and required fees including the international student tuition charge, plus estimated on-campus housing and food"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$32,104 international tuition and fees · $48,838 with housing and food",
    "items": [
      {
        "label": "Tuition and fees (international, flat rate)",
        "amount": 32104
      },
      {
        "label": "Housing and food (estimate)",
        "amount": 16734
      },
      {
        "label": "Books, course materials, supplies and equipment",
        "amount": 1090
      },
      {
        "label": "Transportation",
        "amount": 570
      },
      {
        "label": "Miscellaneous",
        "amount": 2200
      }
    ],
    "totalText": null,
    "note": "Base rate; computer science, data science, engineering, business and some other programmes add a differential fee.",
    "billedSubtotal": 48838,
    "studentCategory": "International students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Purdue states that international undergraduate students are not eligible for financial aid, including scholarships."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Only domestic students are eligible for Purdue merit awards."
    }
  },
  "sources": [
    {
      "label": "First-year deadlines",
      "url": "https://admissions.purdue.edu/deadlines/first-year-college-student/"
    },
    {
      "label": "English proficiency",
      "url": "https://admissions.purdue.edu/become-student/english-proficiency/"
    },
    {
      "label": "Undergraduate tuition and fees 2026–2027",
      "url": "https://www.purdue.edu/treasurer/finance/bursar-office/tuition/fee-rates-2026-2027/undergraduate-tuition-and-fees-2026-2027/"
    },
    {
      "label": "First-year scholarships",
      "url": "https://admissions.purdue.edu/cost-financial-aid/scholarships/"
    },
    {
      "label": "Purdue Common Data Set 2025–26 (section C8)",
      "url": "https://www.purdue.edu/idata/products-services/common-data-set/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.purdue.edu/home/about/purdue-primer/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "English tests",
      "tuition",
      "aid for international students",
      "testing policy",
      "founding year"
    ],
    "unconfirmed": [
      "total annual budget for international students"
    ]
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "ohio-state-university",
  "name": "The Ohio State University",
  "shortName": "Ohio State",
  "country": "us",
  "city": "Columbus",
  "region": "Ohio",
  "founded": 1870,
  "type": "Public research university",
  "institutionKind": "public",
  "degrees": [
    "bachelor"
  ],
  "brand": {
    "c1": "#BA0C2F",
    "c2": "#A7B1B7",
    "initials": "OSU"
  },
  "description": "A large public research university in Columbus, Ohio. Ohio State requires ACT or SAT scores from first-year applicants to the Columbus campus. Its university-funded merit scholarships are not open to international students, who are pointed to the Scholarship Universe platform instead.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "engineering",
    "computer-science",
    "business",
    "economics",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.osu.edu/",
    "admissions": "https://undergrad.osu.edu/apply",
    "internationalAdmissions": "https://undergrad.osu.edu/apply/international-freshmen/apply-step-by-step",
    "applicationPortal": "https://www.commonapp.org/",
    "scholarships": "https://undergrad.osu.edu/cost-and-aid/merit-based-scholarships",
    "financialAid": "https://sfa.osu.edu/international-student/about-aid/financial-aid-eligibility",
    "programs": "https://undergrad.osu.edu/majors-and-academics/majors",
    "cost": "https://undergrad.osu.edu/cost-and-aid/basic-costs"
  },
  "admissions": {
    "platforms": [
      "Common Application"
    ],
    "deadlines": [
      {
        "name": "Early Action",
        "kind": "EA",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Complete application by midnight EST. International applicants get a decision on 22 January; reply by 1 May. Strongly recommended for engineering, nursing and the Honors and Scholars programmes.",
        "status": "confirmed",
        "source": "https://undergrad.osu.edu/apply/international-freshmen/apply-step-by-step",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Regular Decision",
        "kind": "RD",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-01-15",
        "date": "15 January 2027",
        "binding": false,
        "appliesTo": "International first-year applicants",
        "conditions": "Complete application by midnight EST. Decision on 5 March; reply by 1 May.",
        "status": "confirmed",
        "source": "https://undergrad.osu.edu/apply/international-freshmen/apply-step-by-step",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Scholarship Universe priority date",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-02-01",
        "date": "1 February 2027",
        "binding": false,
        "appliesTo": "Applicants seeking scholarships",
        "conditions": "Priority date for scholarship applications on Ohio State’s Scholarship Universe platform.",
        "status": "confirmed",
        "source": "https://undergrad.osu.edu/apply/international-freshmen/after-you-apply",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 70,
      "currency": "USD",
      "waiverAvailableToInternational": false,
      "waiver": "Ohio State says international applicants are not eligible for application fee waivers",
      "note": "Non-refundable fee paid through the Common Application."
    },
    "documents": [
      "Common Application",
      "Official secondary school transcripts",
      "ACT or SAT scores sent by the testing agency",
      "English proficiency proof"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 6.5,
      "recommended": null,
      "note": "IELTS or IELTS Indicator."
    },
    "toefl": {
      "min": 79,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 79,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 4.0,
          "recommended": null
        }
      ],
      "note": "79+ before 21 January 2026; 4.0+ on or after that date."
    },
    "duolingo": {
      "min": 120,
      "recommended": null,
      "note": null
    },
    "waiver": "Three full years at and graduation from a regionally accredited US high school, or citizenship of a listed English-speaking country, also meets the requirement.",
    "note": "ACT English 21+ or SAT Reading and Writing 550+ are accepted as proof too."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "required",
      "note": "Standardized test scores from the ACT or SAT are required for first-year applicants to the Columbus campus and must come directly from the testing agency."
    },
    "act": {
      "policy": "required",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 47358,
      "budget": 68054,
      "includes": "tuition and fees, non-resident and international fees, housing and food, books, personal expenses and transportation"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$47,358 tuition and fees · $68,054 total estimated cost",
    "items": [
      {
        "label": "Tuition and fees",
        "amount": 14034
      },
      {
        "label": "Non-resident fees",
        "amount": 30220
      },
      {
        "label": "International student fee",
        "amount": 3104
      },
      {
        "label": "Housing and food",
        "amount": 15630
      },
      {
        "label": "Books, supplies and equipment",
        "amount": 1020
      },
      {
        "label": "Miscellaneous personal expenses",
        "amount": 2686
      },
      {
        "label": "Transportation",
        "amount": 1360
      }
    ],
    "totalText": "$68,054 total estimated cost, living on campus in Columbus",
    "note": "Cost of attendance for a non-Ohio resident international undergraduate; costs vary by programme. Ohio State’s admissions page lists slightly different figures and adds health insurance of $4,108.",
    "studentCategory": "International students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Ohio State says international students are not eligible for its university-funded merit scholarships."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": "Scholarship Universe priority date: 1 February",
      "note": "International students are encouraged to look for scholarships on the Scholarship Universe platform, for example from alumni clubs."
    }
  },
  "sources": [
    {
      "label": "International first-year applicants — apply step by step",
      "url": "https://undergrad.osu.edu/apply/international-freshmen/apply-step-by-step"
    },
    {
      "label": "After you apply",
      "url": "https://undergrad.osu.edu/apply/international-freshmen/after-you-apply"
    },
    {
      "label": "Cost of attendance 2026–2027 for international students",
      "url": "https://sfa.osu.edu/international-student/about-aid/financial-aid-eligibility"
    },
    {
      "label": "Merit scholarships",
      "url": "https://undergrad.osu.edu/cost-and-aid/merit-based-scholarships"
    },
    {
      "label": "About — history and facts",
      "url": "https://undergrad.osu.edu/majors-and-academics/quick-facts"
    },
    {
      "label": "Ohio State — Common Application for international freshmen",
      "url": "https://undergrad.osu.edu/apply/international-freshmen/common-app"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "testing policy",
      "English tests",
      "costs",
      "aid for international students",
      "founding year",
      "application fee"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-04",
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  }
},

{
  "id": "foothill-college",
  "name": "Foothill College",
  "shortName": "Foothill",
  "country": "us",
  "city": "Los Altos Hills",
  "region": "California",
  "founded": 1957,
  "type": "Public community college",
  "institutionKind": "community-college",
  "degrees": [
    "associate",
    "certificate",
    "bachelor"
  ],
  "brand": {
    "c1": "#7A1F3D",
    "c2": "#3d0f1f",
    "initials": "FC"
  },
  "description": "A public community college in Silicon Valley. International students usually complete the first two years of a bachelor’s degree here and then apply to transfer to a university. Foothill says there are currently no scholarships for new F-1 students.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://foothill.edu/",
    "admissions": "https://foothill.edu/international/prospective/admission-requirements/index.html",
    "internationalAdmissions": "https://foothill.edu/international/",
    "applicationPortal": "https://applyinternational.fhda.edu/apply/",
    "scholarships": "https://foothill.edu/international/resources/tuition-and-fees.html",
    "financialAid": "https://foothill.edu/international/resources/tuition-and-fees.html",
    "programs": "https://foothill.edu/programs/",
    "cost": "https://foothill.edu/international/resources/tuition-and-fees.html"
  },
  "admissions": {
    "platforms": [
      "Foothill–De Anza international student application portal"
    ],
    "deadlines": [
      {
        "name": "Fall quarter — application opens",
        "kind": "opens",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Applications for the fall quarter open on 1 November of the year before.",
        "status": "confirmed",
        "source": "https://foothill.edu/international/prospective/admission-requirements/index.html",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Winter quarter — F-1 application deadline",
        "kind": "application-window",
        "entryTerm": "Winter",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Application and financial documents for an I-20. Classes start in early January.",
        "status": "confirmed",
        "source": "https://foothill.edu/international/prospective/admission-requirements/index.html",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Spring quarter — F-1 application deadline",
        "kind": "application-window",
        "entryTerm": "Spring",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Classes start in early April.",
        "status": "confirmed",
        "source": "https://foothill.edu/international/prospective/admission-requirements/index.html",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Fall quarter — F-1 application deadline",
        "kind": "application-window",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-08-15",
        "date": "15 August 2027",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Application and all financial documents needed for an I-20. Mandatory orientation follows; classes start in late September.",
        "status": "confirmed",
        "source": "https://foothill.edu/international/prospective/admission-requirements/index.html",
        "verified": "2026-10-01",
        "note": "The college publishes the same month-and-day deadlines for every year, without a year. Apply well before the deadline to leave time for the visa."
      },
      {
        "name": "Fall quarter — F-1 transfers and online-only applicants",
        "kind": "application-window",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-09-10",
        "date": "10 September 2027",
        "binding": false,
        "appliesTo": "F-1 transfer students and online-only applicants",
        "conditions": "For students transferring an I-20 from another US school and for online-only study from abroad.",
        "status": "confirmed",
        "source": "https://foothill.edu/international/prospective/admission-requirements/index.html",
        "verified": "2026-10-01",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 75,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Non-refundable; paid when the application is submitted."
    },
    "documents": [
      "Online application",
      "Copy of passport",
      "Proof of English proficiency",
      "Bank letter or statement covering the estimated annual cost, dated within six months (F-1 applicants)",
      "Transcripts; proof of secondary school completion if under 18"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 5.5,
      "recommended": null,
      "note": "IELTS or IELTS Indicator. Results older than two years are not accepted."
    },
    "toefl": {
      "min": 60,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 60,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 3.5,
          "recommended": null
        }
      ],
      "note": "60 for exams before 21 January 2026; band score 3.5 from that date."
    },
    "duolingo": {
      "min": 95,
      "recommended": null,
      "note": null
    },
    "waiver": "Waivers are reviewed case by case, for example schooling in a country or school where English is the language of instruction, or IB English at 4 or higher.",
    "note": "Applicants below the minimum can receive conditional admission through a partner English language school."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-applicable",
      "note": "Community college admission does not use the SAT or ACT."
    },
    "act": {
      "policy": "not-applicable",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 10224,
      "budget": 27189,
      "includes": "tuition and enrolment fees for 36 units, health insurance, books, housing and meals"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$10,224 tuition and fees · $27,189 total estimated cost",
    "items": [
      {
        "label": "Tuition and enrolment fees (12 units per quarter at $284 per unit)",
        "amount": 10224
      },
      {
        "label": "Health insurance (mandatory)",
        "amount": 1665
      },
      {
        "label": "Books and supplies",
        "amount": 1500
      },
      {
        "label": "Housing (district student housing, double room, 10 months)",
        "amount": 10300
      },
      {
        "label": "Meals and spending money",
        "amount": 3500
      }
    ],
    "totalText": "$27,189 total estimated cost for three quarters",
    "note": "Fall, winter and spring quarters; summer costs extra. Rate of $284 per unit effective 1 July 2026. About $55 a quarter in small campus fees is not included.",
    "studentCategory": "International (F-1) students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Foothill states that there are currently no scholarships for new international students on F-1 visas and that federal and state aid is not available to them."
    },
    "merit": [
      {
        "name": "Second-year scholarships",
        "amount": "$500–$4,000",
        "internationalEligible": true,
        "deadline": null,
        "note": "Open to students in their second year at Foothill; mostly for academic and extracurricular achievement."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "No aid for new F-1 students. Low tuition is not a scholarship: the full estimated cost must be shown in a bank document."
    }
  },
  "sources": [
    {
      "label": "International admission requirements and dates",
      "url": "https://foothill.edu/international/prospective/admission-requirements/index.html"
    },
    {
      "label": "How to apply",
      "url": "https://foothill.edu/international/prospective/admission-requirements/how-to-apply.html"
    },
    {
      "label": "Tuition and fees for F-1 students",
      "url": "https://foothill.edu/international/resources/tuition-and-fees.html"
    },
    {
      "label": "Application portal",
      "url": "https://applyinternational.fhda.edu/apply/"
    },
    {
      "label": "Degrees and certificates",
      "url": "https://foothill.edu/programs/"
    },
    {
      "label": "About — history and facts",
      "url": "https://foothill.edu/about/facts.html"
    },
    {
      "label": "Catalog — Bachelor of Science degrees",
      "url": "https://catalog.foothill.edu/degrees-certificates/bs/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "English tests",
      "costs",
      "aid for international students",
      "housing",
      "founding year"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-01",
  "degreesNote": "Mainly associate degrees, associate degrees for transfer and certificates; the catalog also lists a small number of Bachelor of Science degrees.",
  "communityCollege": {
    "route": "Apply through the international portal with an English score and a bank document; a secondary school record is required, the SAT is not. Admission is offered four times a year.",
    "housing": "The Foothill–De Anza district rents shared, apartment-style student housing (the estimate uses $1,030 a month for a double room); homestays and private apartments are the other options.",
    "transfer": "Foothill describes transfer into the third year of a university after two years of study. Transfer is a separate application to each university and is not guaranteed; the university re-evaluates foreign transcripts itself.",
    "work": "F-1 students may work on campus up to 19 hours a week; these earnings cannot be counted as funds for the I-20."
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "bachelorPrograms": [
    {
      "name": "Dental Hygiene — Bachelor of Science"
    },
    {
      "name": "Respiratory Care — Bachelor of Science"
    }
  ],
  "bachelorIntl": "not-stated",
  "bachelorSource": "https://catalog.foothill.edu/degrees-certificates/bs/",
  "bachelorChecked": "2026-10-05",
  "programsBasis": "transfer"
},

{
  "id": "de-anza-college",
  "name": "De Anza College",
  "shortName": "De Anza",
  "country": "us",
  "city": "Cupertino",
  "region": "California",
  "founded": 1967,
  "type": "Public community college",
  "institutionKind": "community-college",
  "degrees": [
    "associate",
    "certificate",
    "bachelor"
  ],
  "brand": {
    "c1": "#8B0000",
    "c2": "#4a0000",
    "initials": "DA"
  },
  "description": "A public community college in Cupertino, in Silicon Valley, in the same district as Foothill College. Most international students complete lower-division coursework here and then apply to transfer to a university; De Anza offers more than 90 associate degrees and transfer programmes.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.deanza.edu/",
    "admissions": "https://www.deanza.edu/international/future-students/index.html",
    "internationalAdmissions": "https://www.deanza.edu/international/",
    "applicationPortal": "https://applyinternational.fhda.edu/apply/",
    "scholarships": "https://www.deanza.edu/international/future-students/cost.html",
    "financialAid": "https://www.deanza.edu/international/future-students/cost.html",
    "programs": "https://www.deanza.edu/international/about/degree_programs.html",
    "cost": "https://www.deanza.edu/international/future-students/cost.html"
  },
  "admissions": {
    "platforms": [
      "Foothill–De Anza international student application portal"
    ],
    "deadlines": [
      {
        "name": "Fall quarter — application opens",
        "kind": "opens",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2026-11-01",
        "date": "1 November 2026",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Applications for the fall quarter open on 1 November of the year before.",
        "status": "confirmed",
        "source": "https://www.deanza.edu/international/future-students/index.html",
        "verified": "2026-10-02",
        "note": null
      },
      {
        "name": "Winter quarter — F-1 application deadline",
        "kind": "application-window",
        "entryTerm": "Winter",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Application and financial documents for an I-20. Classes start in early January.",
        "status": "confirmed",
        "source": "https://www.deanza.edu/international/future-students/index.html",
        "verified": "2026-10-02",
        "note": null
      },
      {
        "name": "Spring quarter — F-1 application deadline",
        "kind": "application-window",
        "entryTerm": "Spring",
        "entryYear": "2027",
        "dateISO": "2027-02-15",
        "date": "15 February 2027",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Classes start in early April.",
        "status": "confirmed",
        "source": "https://www.deanza.edu/international/future-students/index.html",
        "verified": "2026-10-02",
        "note": null
      },
      {
        "name": "Fall quarter — F-1 application deadline",
        "kind": "application-window",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-08-15",
        "date": "15 August 2027",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Application and all financial documents needed for an I-20. Mandatory orientation follows; classes start in late September.",
        "status": "confirmed",
        "source": "https://www.deanza.edu/international/future-students/index.html",
        "verified": "2026-10-02",
        "note": "The college publishes the same month-and-day deadlines for every year, without a year. Apply well before the deadline to leave time for the visa."
      },
      {
        "name": "Fall quarter — F-1 transfers and online-only applicants",
        "kind": "application-window",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-09-10",
        "date": "10 September 2027",
        "binding": false,
        "appliesTo": "F-1 transfer students and online-only applicants",
        "conditions": "For students transferring an I-20 from another US school and for online-only study from abroad.",
        "status": "confirmed",
        "source": "https://www.deanza.edu/international/future-students/index.html",
        "verified": "2026-10-02",
        "note": null
      }
    ],
    "applicationFee": {
      "amount": 75,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Stated in the deferral policy and on the shared application portal; non-refundable."
    },
    "documents": [
      "Online application",
      "English proficiency score taken within the last two years",
      "Bank letter showing at least $27,189 for the first year, dated within six months",
      "Official school transcript"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 5.5,
      "recommended": null,
      "note": "IELTS or IELTS Indicator."
    },
    "toefl": {
      "min": 61,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 61,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 3.5,
          "recommended": null
        }
      ],
      "note": "61 or higher for exams before 21 January 2026; 3.5 or higher from that date."
    },
    "duolingo": {
      "min": 95,
      "recommended": null,
      "note": null
    },
    "waiver": "Schooling where English is the language of instruction may be accepted after review of transcripts.",
    "note": "Conditional admission is available for applicants still completing English language study."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-applicable",
      "note": "Community college admission does not use the SAT or ACT."
    },
    "act": {
      "policy": "not-applicable",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 10224,
      "budget": 27189,
      "includes": "tuition and fees for 36 units, health insurance, books, housing and meals"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$10,224 tuition and fees · $27,189 total estimated cost",
    "items": [
      {
        "label": "Tuition and fees (12 units per quarter at $284 per unit)",
        "amount": 10224
      },
      {
        "label": "Mandatory health insurance",
        "amount": 1665
      },
      {
        "label": "Books and supplies",
        "amount": 1500
      },
      {
        "label": "Room and board (district student housing, double room, 10 months)",
        "amount": 10300
      },
      {
        "label": "Meals and spending money",
        "amount": 3500
      }
    ],
    "totalText": "$27,189 total estimated cost",
    "note": "Three quarters — fall, winter and spring; rate effective 1 July 2026. The bank letter must show the full total even if you will live with relatives.",
    "studentCategory": "International (F-1) students"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Scholarships for international students were not described on the De Anza pages read, so nothing is claimed."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Not confirmed. The full estimated cost must be shown in a bank document."
    }
  },
  "sources": [
    {
      "label": "International students — applying for admission",
      "url": "https://www.deanza.edu/international/future-students/index.html"
    },
    {
      "label": "Costs of attending",
      "url": "https://www.deanza.edu/international/future-students/cost.html"
    },
    {
      "label": "Degree programmes",
      "url": "https://www.deanza.edu/international/about/degree_programs.html"
    },
    {
      "label": "Housing resources",
      "url": "https://www.deanza.edu/international/new-students/housing.html"
    },
    {
      "label": "Transfer information",
      "url": "https://www.deanza.edu/international/about/transfer.html"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.fhda.edu/_about-us/_history-the-legacy-of-foothill-de-anza.html"
    },
    {
      "label": "Bachelor’s degree in Automotive Technology Management",
      "url": "https://www.deanza.edu/autotech/management/about.html"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "English tests",
      "costs",
      "housing",
      "founding year"
    ],
    "unconfirmed": [
      "scholarships for international students"
    ]
  },
  "lastVerified": "2026-10-02",
  "communityCollege": {
    "route": "Apply through the international portal with an English score, a bank letter and a school transcript. New international students are admitted four times a year; students must be 18, or at least 16 with proof of secondary school completion.",
    "housing": "A limited number of shared apartment places in district student housing near the campus, by application only for enrolled students aged 18 or older; homestays and private rentals are the other options.",
    "transfer": "De Anza describes completing the first two years of general education and then transferring to a university as a third-year student. Transfer is a separate application and is not guaranteed.",
    "work": null
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "degreesNote": "Mainly associate degrees, associate degrees for transfer and certificates; De Anza also offers one bachelor’s degree.",
  "bachelorPrograms": [
    {
      "name": "Automotive Technology Management — Bachelor of Science"
    }
  ],
  "bachelorIntl": "not-stated",
  "bachelorSource": "https://www.deanza.edu/autotech/management/about.html",
  "bachelorChecked": "2026-10-05",
  "programsBasis": "transfer"
},

{
  "id": "santa-monica-college",
  "name": "Santa Monica College",
  "shortName": "SMC",
  "country": "us",
  "city": "Santa Monica",
  "region": "California",
  "founded": 1929,
  "type": "Public community college",
  "institutionKind": "community-college",
  "degrees": [
    "associate",
    "certificate",
    "bachelor"
  ],
  "brand": {
    "c1": "#00539B",
    "c2": "#002f5a",
    "initials": "SMC"
  },
  "description": "A public community college in Santa Monica, Los Angeles County, that describes itself as California’s leading transfer college. It provides the first two years of university study and 38 associate degrees; an associate degree is not a bachelor’s degree.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.smc.edu/",
    "admissions": "https://www.smc.edu/admission-aid/apply/international-students/index.php",
    "internationalAdmissions": "https://www.smc.edu/student-support/international-education/",
    "applicationPortal": "https://www.smc.edu/admission-aid/apply/international-students/index.php",
    "scholarships": "https://www.smc.edu/admission-aid/financial-aid-scholarships/types-of-aid/scholarships/",
    "financialAid": "https://www.smc.edu/admission-aid/financial-aid-scholarships/",
    "programs": "https://www.smc.edu/student-support/international-education/counseling/degree-and-certificate-options-at-smc.php",
    "cost": "https://www.smc.edu/admission-aid/apply/international-students/tuition-fees.php"
  },
  "admissions": {
    "platforms": [
      "SMC international student application"
    ],
    "deadlines": [
      {
        "name": "Winter 2027 session — out-of-country application deadline",
        "kind": "application-window",
        "entryTerm": "Winter",
        "entryYear": "2027",
        "dateISO": "2026-11-15",
        "date": "15 November 2026",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "For applicants outside the United States; students already holding an F-1 visa have until 1 December 2026.",
        "status": "confirmed",
        "source": "https://www.smc.edu/student-support/international-education/",
        "verified": "2026-10-04",
        "note": null
      },
      {
        "name": "Spring 2027 semester — out-of-country application deadline",
        "kind": "application-window",
        "entryTerm": "Spring",
        "entryYear": "2027",
        "dateISO": "2027-01-05",
        "date": "5 January 2027",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "For applicants outside the United States; students already holding an F-1 visa have until 15 January 2027. Processing takes 4–6 weeks before the visa stage.",
        "status": "confirmed",
        "source": "https://www.smc.edu/student-support/international-education/",
        "verified": "2026-10-04",
        "note": null
      },
      {
        "name": "Summer 2027 session — out-of-country application deadline",
        "kind": "application-window",
        "entryTerm": "Summer",
        "entryYear": "2027",
        "dateISO": "2027-05-15",
        "date": "15 May 2027",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "For applicants outside the United States; students already holding an F-1 visa have until 1 June 2027.",
        "status": "confirmed",
        "source": "https://www.smc.edu/student-support/international-education/",
        "verified": "2026-10-04",
        "note": null
      },
      {
        "name": "Fall semester — out-of-country application deadline",
        "kind": "application-window",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "date": "15 July (stated for the Fall 2026 semester)",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "SMC lists 15 July for applicants outside the United States and 1 August for students already holding an F-1 visa. Processing takes 4–6 weeks before the visa stage.",
        "status": "previous-cycle",
        "source": "https://www.smc.edu/admission-aid/apply/international-students/index.php",
        "verified": "2026-10-06",
        "note": "The deadline for the Fall 2027 semester (30 August – 21 December 2027) was not yet published."
      }
    ],
    "applicationFee": {
      "amount": 75,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Non-refundable."
    },
    "documents": [
      "Online application",
      "Sponsor’s official bank statement",
      "Copy of passport",
      "Transcripts from the last school attended",
      "Proof of English proficiency",
      "Personal essay of at least 500 words"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 5.0,
      "recommended": null,
      "note": "Official score report required."
    },
    "toefl": {
      "min": 45,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 45,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 3,
          "recommended": null
        }
      ],
      "note": "45 iBT, or 3 on the 1–6 scale; scores must come from ETS."
    },
    "duolingo": {
      "min": 75,
      "recommended": null,
      "note": "75 or higher."
    },
    "waiver": null,
    "note": "PTE 39, Cambridge C1 Advanced or C2 Proficiency at grade C, and completion of listed language-school levels are also accepted. English proof is not needed for the Intensive English Program."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-applicable",
      "note": "Community college admission does not use the SAT or ACT."
    },
    "act": {
      "policy": "not-applicable",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 11664,
      "budget": 34000,
      "includes": "tuition for 24 units, fees, health insurance, homestay living costs, books and personal expenses"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$11,664 non-resident tuition · $34,000 estimated total",
    "items": [
      {
        "label": "Non-resident tuition (24 units at $486 per unit)",
        "amount": 11664
      },
      {
        "label": "Health, student and representation fees",
        "amount": 125
      },
      {
        "label": "Health insurance (mandatory)",
        "amount": 2310
      },
      {
        "label": "Living expenses (homestay with two meals a day, 9 months)",
        "amount": 13869
      },
      {
        "label": "Books and supplies (2 semesters)",
        "amount": 1064
      },
      {
        "label": "Personal expenses (9 months)",
        "amount": 4968
      }
    ],
    "totalText": "$34,000 estimated total expenses, fall 2026 to spring 2027",
    "note": "The total is SMC’s own rounded figure and the amount required on the bank statement. Students with free room and board near Santa Monica may deduct $13,869. Taking more than 12 units a semester costs more.",
    "studentCategory": "International (F-1) students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "SMC describes no full funding for international students."
    },
    "merit": [
      {
        "name": "SMC Foundation scholarships",
        "amount": "$250–$50,000 across all awards",
        "internationalEligible": true,
        "deadline": null,
        "note": "International students who meet the minimum qualifications may be considered for scholarships that do not require financial need; the application is for enrolled SMC students."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "No need-based aid for F-1 students is described; low tuition is not a scholarship."
    }
  },
  "sources": [
    {
      "label": "International students — steps to apply",
      "url": "https://www.smc.edu/admission-aid/apply/international-students/index.php"
    },
    {
      "label": "International student tuition and fees",
      "url": "https://www.smc.edu/admission-aid/apply/international-students/tuition-fees.php"
    },
    {
      "label": "Proof of English proficiency for F-1 applicants (PDF)",
      "url": "https://www.smc.edu/admission-aid/apply/international-students/documents/smc--iec-english-proficiency-8-18-2026.pdf"
    },
    {
      "label": "Degree and certificate options",
      "url": "https://www.smc.edu/student-support/international-education/counseling/degree-and-certificate-options-at-smc.php"
    },
    {
      "label": "International Education Center — application deadlines",
      "url": "https://www.smc.edu/student-support/international-education/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.smc.edu/about/"
    },
    {
      "label": "Bachelor’s programs at SMC",
      "url": "https://www.smc.edu/academics/bachelors-programs/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "application fee",
      "English tests",
      "costs",
      "degrees",
      "deadlines for winter, spring and summer 2027",
      "founding year"
    ],
    "unconfirmed": [
      "Fall 2027 deadline",
      "housing options"
    ]
  },
  "lastVerified": "2026-10-04",
  "communityCollege": {
    "route": "Apply online with a bank statement, passport copy, transcripts, English proof and a 500-word essay. Students must be 18 at first attendance; 16–17-year-olds need a completed secondary education and a local guardian.",
    "housing": "Campus housing is not described on the pages read; SMC’s cost estimate assumes a homestay with two meals a day.",
    "transfer": "SMC says completing an associate degree will usually not by itself satisfy a university’s transfer major requirements, and advises planning with a counsellor. Transfer is a separate application and is not guaranteed.",
    "work": "F-1 students must enrol in at least 12 units; only one online class of up to 3 units counts toward that minimum."
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "degreesNote": "Mainly associate degrees and certificates; SMC also offers a Bachelor of Science in Interaction Design and has announced a second bachelor’s programme.",
  "bachelorPrograms": [
    {
      "name": "Interaction Design — Bachelor of Science"
    },
    {
      "name": "Cloud Computing — Bachelor of Science",
      "note": "SMC says this programme will launch in 2027"
    }
  ],
  "bachelorIntl": "not-stated",
  "bachelorSource": "https://www.smc.edu/academics/bachelors-programs/",
  "bachelorChecked": "2026-10-05",
  "programsBasis": "transfer"
},

{
  "id": "sinclair-community-college",
  "name": "Sinclair Community College",
  "shortName": "Sinclair",
  "country": "us",
  "city": "Dayton",
  "region": "Ohio",
  "founded": 1887,
  "type": "Public community college",
  "institutionKind": "community-college",
  "degrees": [
    "associate",
    "certificate",
    "bachelor"
  ],
  "brand": {
    "c1": "#C8102E",
    "c2": "#7a0a1c",
    "initials": "SCC"
  },
  "description": "A public community college in Dayton, Ohio, with university-parallel programmes designed for transfer to four-year universities and a small number of its own bachelor’s degrees in applied fields. Applicants without an English score are first considered for its intensive English programme.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.sinclair.edu/",
    "admissions": "https://www.sinclair.edu/services/enrollment/international/potential-students/",
    "internationalAdmissions": "https://www.sinclair.edu/services/enrollment/international-student-services/",
    "applicationPortal": "https://apply.sinclair.edu/",
    "scholarships": "https://www.sinclair.edu/services/welcome/finaid/",
    "financialAid": "https://www.sinclair.edu/services/welcome/finaid/",
    "programs": "https://www.sinclair.edu/academics/all-programs/",
    "cost": "https://www.sinclair.edu/services/welcome/bursar/tuition-fee-schedule/"
  },
  "admissions": {
    "platforms": [
      "Sinclair online application (F-1 International Students)"
    ],
    "deadlines": [
      {
        "name": "Spring 2027 semester — deadline to apply from abroad",
        "kind": "application-window",
        "entryTerm": "Spring",
        "entryYear": "2027",
        "dateISO": "2026-11-22",
        "date": "22 November 2026",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "For applicants outside the United States; classes start in January 2027.",
        "status": "confirmed",
        "source": "https://www.sinclair.edu/services/enrollment/international-student-services/potential-students/applying-from-abroad/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Summer 2027 semester — deadline to apply from abroad",
        "kind": "application-window",
        "entryTerm": "Summer",
        "entryYear": "2027",
        "dateISO": "2027-03-21",
        "date": "21 March 2027",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Classes start in May 2027.",
        "status": "confirmed",
        "source": "https://www.sinclair.edu/services/enrollment/international-student-services/potential-students/applying-from-abroad/",
        "verified": "2026-10-01",
        "note": null
      },
      {
        "name": "Fall semester — deadline to apply from abroad",
        "kind": "application-window",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "date": "21 June (stated for Fall 2026)",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Sinclair lists 21 June 2026 for the Fall 2026 semester.",
        "status": "previous-cycle",
        "source": "https://www.sinclair.edu/services/enrollment/international-student-services/potential-students/applying-from-abroad/",
        "verified": "2026-10-06",
        "note": "The deadline for Fall 2027 was not yet published."
      }
    ],
    "applicationFee": {
      "amount": null,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "No application fee is stated on the pages read; a $20 registration fee for first-time registrants is added to the first term’s charges.",
      "status": "not-published",
      "verified": "2026-10-05"
    },
    "documents": [
      "Online application",
      "Secondary school transcript and proof of graduation, with certified English translations",
      "Proof of English proficiency (for direct admission to an academic programme)",
      "Copy of passport",
      "Bank letter or statement showing at least $20,000 for one academic year"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 5.0,
      "recommended": null,
      "note": "Minimum 5.0."
    },
    "toefl": {
      "min": 61,
      "recommended": null,
      "note": "Minimum iBT 61; the page does not give a score on the scale used from January 2026."
    },
    "duolingo": {
      "min": 90,
      "recommended": null,
      "note": "Minimum 90."
    },
    "waiver": null,
    "note": "ELS Level 109 or a year of US college-level English is accepted instead. Without proof, applicants are considered for the English Now! intensive ESL programme first."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-applicable",
      "note": "Community college admission does not use the SAT or ACT."
    },
    "act": {
      "policy": "not-applicable",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "budget": 17500,
      "includes": "tuition, living expenses and books, by the college’s own estimate"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$359.40 per credit hour · about $17,500 a year by Sinclair’s estimate",
    "items": [
      {
        "label": "Tuition and fees per credit hour",
        "amount": 156.03
      },
      {
        "label": "Out-of-state surcharge per credit hour",
        "amount": 203.37
      }
    ],
    "totalText": "About $17,500 for one year including tuition, living expenses and books",
    "note": "Per-credit rate effective fall 2026 for out-of-state and international students; an $85 auxiliary services fee is charged each term. Sinclair’s $17,500 figure is its own estimate, while the bank document for the I-20 must show at least $20,000.",
    "studentCategory": "International (F-1) students"
  },
  "scholarships": {
    "fullRide": {
      "available": null,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Scholarships for international students were not described on the pages read, so nothing is claimed."
    },
    "merit": [],
    "needBased": {
      "availableToInternational": null,
      "meetsFullNeed": null,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Not confirmed. A bank document for at least $20,000 is required for the I-20, plus $5,000 for each dependent."
    }
  },
  "sources": [
    {
      "label": "Applying from abroad — steps and deadlines",
      "url": "https://www.sinclair.edu/services/enrollment/international-student-services/potential-students/applying-from-abroad/"
    },
    {
      "label": "Tuition and fee schedule",
      "url": "https://www.sinclair.edu/services/welcome/bursar/tuition-fee-schedule/"
    },
    {
      "label": "International student services",
      "url": "https://www.sinclair.edu/services/enrollment/international-student-services/"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.sinclair.edu/about/fast-facts"
    },
    {
      "label": "Bachelor degrees at Sinclair",
      "url": "https://www.sinclair.edu/academics/bachelors/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines for spring and summer 2027",
      "English tests",
      "tuition rate",
      "founding year",
      "bachelor’s programmes in the catalogue"
    ],
    "unconfirmed": [
      "Fall 2027 deadline",
      "application fee",
      "scholarships for international students",
      "housing options",
      "whether F-1 students can enter the bachelor’s programmes"
    ]
  },
  "lastVerified": "2026-10-01",
  "communityCollege": {
    "route": "Complete the “F-1 International Students” application and upload school records, an English score, a passport copy and a bank document. Completion of secondary school is required.",
    "housing": "Housing is not described on the pages read.",
    "transfer": "Sinclair names Ohio State, Miami University, the University of Dayton, the University of Cincinnati, Wright State and Ohio University among the universities its students transfer to. Transfer is a separate application and is not guaranteed.",
    "work": null
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "degreesNote": "Mainly associate degrees and certificates; Sinclair’s own “Bachelor Degrees” page also lists five bachelor’s programmes.",
  "bachelorPrograms": [
    {
      "name": "Aviation Technology/Professional Pilot — Bachelor of Applied Science"
    },
    {
      "name": "Unmanned Aerial Systems — Bachelor of Applied Science",
      "note": "120–124 credit hours"
    },
    {
      "name": "Integrated Systems Technician — Bachelor of Applied Science"
    },
    {
      "name": "Nursing — Bachelor of Science",
      "note": "builds on RN experience and has specific prerequisites"
    },
    {
      "name": "Health Sciences — Bachelor of Applied Science",
      "note": "described by Sinclair as primarily online"
    }
  ],
  "bachelorIntl": "not-stated",
  "bachelorSource": "https://www.sinclair.edu/academics/bachelors/",
  "bachelorChecked": "2026-10-05",
  "programsBasis": "transfer"
},

{
  "id": "green-river-college",
  "name": "Green River College",
  "shortName": "Green River",
  "country": "us",
  "city": "Auburn",
  "region": "Washington",
  "founded": 1965,
  "type": "Public community college",
  "institutionKind": "community-college",
  "degrees": [
    "associate",
    "certificate",
    "bachelor"
  ],
  "brand": {
    "c1": "#00703C",
    "c2": "#003d21",
    "initials": "GRC"
  },
  "description": "A public community college in Auburn, Washington, near Seattle, with a large international programme. Students without an English score start in Intensive English. The college offers small tuition-waiver scholarships to new F-1 students — $200 to $500 — and paid campus leadership roles for current students.",
  "englishTaught": true,
  "languageOfInstruction": "English",
  "programs": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "englishTaughtPrograms": [
    "business",
    "computer-science",
    "engineering",
    "biology",
    "psychology",
    "mathematics",
    "social-sciences",
    "humanities",
    "arts"
  ],
  "programNote": null,
  "links": {
    "website": "https://www.greenriver.edu/",
    "admissions": "https://www.greenriver.edu/international/admissions/index.html",
    "internationalAdmissions": "https://www.greenriver.edu/international/",
    "applicationPortal": "https://tools.greenriver.edu/international/app/studentapp.aspx",
    "scholarships": "https://www.greenriver.edu/international/scholarships.html",
    "financialAid": "https://www.greenriver.edu/international/scholarships.html",
    "programs": "https://www.greenriver.edu/international/programs/index.html",
    "cost": "https://www.greenriver.edu/international/costs-payments.html"
  },
  "admissions": {
    "platforms": [
      "Green River College international application"
    ],
    "deadlines": [
      {
        "name": "Winter term 2027 — application deadline",
        "kind": "application-window",
        "entryTerm": "Winter",
        "entryYear": "2027",
        "dateISO": "2026-12-09",
        "date": "9 December 2026",
        "time": "08:00",
        "timezone": "PT",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Deadline for new students applying from outside the United States.",
        "status": "confirmed",
        "source": "https://www.greenriver.edu/international/dates-deadlines.html",
        "verified": "2026-10-02",
        "note": null
      },
      {
        "name": "Spring term 2027 — application deadline",
        "kind": "application-window",
        "entryTerm": "Spring",
        "entryYear": "2027",
        "dateISO": "2027-03-17",
        "date": "17 March 2027",
        "time": "08:00",
        "timezone": "PT",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Deadline for new students applying from outside the United States.",
        "status": "confirmed",
        "source": "https://www.greenriver.edu/international/dates-deadlines.html",
        "verified": "2026-10-02",
        "note": null
      },
      {
        "name": "Summer term 2027 — application deadline",
        "kind": "application-window",
        "entryTerm": "Summer",
        "entryYear": "2027",
        "dateISO": "2027-06-16",
        "date": "16 June 2027",
        "time": "08:00",
        "timezone": "PT",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Deadline for new students applying from outside the United States.",
        "status": "confirmed",
        "source": "https://www.greenriver.edu/international/dates-deadlines.html",
        "verified": "2026-10-02",
        "note": null
      },
      {
        "name": "Fall term 2027 — application deadline",
        "kind": "application-window",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-09-01",
        "date": "1 September 2027",
        "time": "08:00",
        "timezone": "PT",
        "binding": false,
        "appliesTo": "International (F-1) applicants from outside the United States",
        "conditions": "Deadline for new students applying from outside the United States.",
        "status": "confirmed",
        "source": "https://www.greenriver.edu/international/dates-deadlines.html",
        "verified": "2026-10-02",
        "note": null
      },
      {
        "name": "New student scholarships — fall term",
        "kind": "scholarship",
        "entryTerm": "Autumn",
        "entryYear": "2027",
        "dateISO": "2027-08-15",
        "date": "15 August 2027",
        "binding": false,
        "appliesTo": "New F-1 students",
        "conditions": "Achievement, Merit and Leadership scholarships for new students; 15 November for winter and 15 February for spring.",
        "status": "confirmed",
        "source": "https://www.greenriver.edu/international/scholarships.html",
        "verified": "2026-10-02",
        "note": "Green River lists the scholarship deadlines without a year."
      }
    ],
    "applicationFee": {
      "amount": 50,
      "currency": "USD",
      "waiverAvailableToInternational": null,
      "waiver": null,
      "note": "Non-refundable."
    },
    "documents": [
      "Online application",
      "Proof of financial ability: $23,475 or more, dated within 12 months",
      "Copy of passport",
      "Medical release form",
      "School transcripts and English proof, if available"
    ],
    "recommendations": null,
    "essay": null,
    "interview": null,
    "notes": []
  },
  "english": {
    "ielts": {
      "min": 5.5,
      "recommended": null,
      "note": "No band lower than 5.0; One Skill Retake is accepted."
    },
    "toefl": {
      "min": 61,
      "recommended": null,
      "scales": [
        {
          "period": "pre2026",
          "min": 61,
          "recommended": null
        },
        {
          "period": "post2026",
          "min": 3.5,
          "recommended": null
        }
      ],
      "note": "61 or higher, or 3.5 overall with writing 3.0 or higher on the new scale. TOEFL Essentials is not accepted."
    },
    "duolingo": {
      "min": 95,
      "recommended": null,
      "note": "No section lower than 90."
    },
    "waiver": null,
    "note": "Applicants without a qualifying score begin in Intensive English; scores stay valid for two years."
  },
  "academics": {
    "gpa": null,
    "sat": {
      "policy": "not-applicable",
      "note": "Community college admission does not use the SAT or ACT."
    },
    "act": {
      "policy": "not-applicable",
      "note": "Same as the SAT."
    },
    "otherTests": null,
    "internationalQualifications": null
  },
  "costs": {
    "breakdown": {
      "tuition": 12330,
      "budget": 23475,
      "includes": "tuition, living expenses, fees and books for nine months"
    },
    "academicYear": "2026–2027",
    "currency": "USD",
    "headline": "$12,330 tuition · $23,475 total estimated expenses",
    "items": [
      {
        "label": "Tuition (9 months)",
        "amount": 12330
      },
      {
        "label": "Living expenses",
        "amount": 9900
      },
      {
        "label": "Fees",
        "amount": 717
      },
      {
        "label": "Books",
        "amount": 528
      }
    ],
    "totalText": "$23,475 total for the academic year (three terms)",
    "note": "Fall 2026 to summer 2027 estimate. Health insurance is $402 a term and there is a one-time $200 class fee for new students; Bachelor of Applied Science tuition is $7,545 a term.",
    "studentCategory": "International (F-1) students"
  },
  "scholarships": {
    "fullRide": {
      "available": false,
      "internationalEligible": null,
      "basis": null,
      "covers": {
        "tuition": null,
        "housing": null,
        "meals": null,
        "insurance": null,
        "books": null
      },
      "renewable": null,
      "competitiveness": null,
      "howToApply": null,
      "note": "Scholarships for new international students are small tuition waivers of $200–$500."
    },
    "merit": [
      {
        "name": "Achievement, Merit and Leadership scholarships for new students",
        "amount": "$200–$500",
        "internationalEligible": true,
        "deadline": "15 August (fall), 15 November (winter), 15 February (spring)",
        "note": "Tuition waivers; application form and transcript copy required."
      },
      {
        "name": "International Student Ambassador work grant",
        "amount": "About $5,500 a year in earnings",
        "internationalEligible": true,
        "deadline": "10 April",
        "note": "Four paid campus leadership positions for current students. These are wages for work, not guaranteed funding."
      }
    ],
    "needBased": {
      "availableToInternational": false,
      "meetsFullNeed": false,
      "needBlindInternational": null,
      "forms": [],
      "deadlines": null,
      "note": "Low tuition and small waivers do not amount to a full scholarship; proof of $23,475 is required to apply."
    }
  },
  "sources": [
    {
      "label": "International admissions",
      "url": "https://www.greenriver.edu/international/admissions/index.html"
    },
    {
      "label": "Dates and deadlines 2026–28",
      "url": "https://www.greenriver.edu/international/dates-deadlines.html"
    },
    {
      "label": "Costs and payments",
      "url": "https://www.greenriver.edu/international/costs-payments.html"
    },
    {
      "label": "English requirements",
      "url": "https://www.greenriver.edu/international/admissions/english-requirements.html"
    },
    {
      "label": "Scholarships and work grants",
      "url": "https://www.greenriver.edu/international/scholarships.html"
    },
    {
      "label": "International student housing",
      "url": "https://www.greenriver.edu/international/housing/index.html"
    },
    {
      "label": "About — history and facts",
      "url": "https://www.greenriver.edu/campus/history/"
    },
    {
      "label": "Bachelor of Applied Science for international students",
      "url": "https://www.greenriver.edu/international/programs/bachelors/"
    }
  ],
  "verification": {
    "level": "partial",
    "checked": [
      "deadlines",
      "application fee",
      "English tests",
      "costs",
      "scholarships",
      "housing",
      "founding year"
    ],
    "unconfirmed": []
  },
  "lastVerified": "2026-10-02",
  "degreesNote": "Mainly associate degrees and certificates; the college also offers Bachelor of Applied Science programmes, usually entered after an associate degree.",
  "communityCollege": {
    "route": "Apply online and upload proof of funds, a passport copy and a medical release form; school transcripts and English proof if available. Applicants must be 16 by move-in day.",
    "housing": "Three options: furnished shared student apartments on campus (Campus Corner Apartments), apartments in downtown Auburn, and homestays. A $375 housing placement fee applies; 16-year-olds must live with an approved host family.",
    "transfer": "Green River’s university transfer programme covers the first two years of a bachelor’s degree. Transfer is a separate application to each university and is not guaranteed.",
    "work": "Paid campus roles such as International Student Ambassador exist for current students; earnings are not guaranteed funding."
  },
  "photos": {
    "main": null,
    "gallery": [],
    "city": null
  },
  "bachelorPrograms": [
    {
      "name": "Accounting — Bachelor of Applied Science"
    },
    {
      "name": "Aeronautical Science — Bachelor of Applied Science"
    },
    {
      "name": "Applied Management — Bachelor of Applied Science"
    },
    {
      "name": "Information Technology: Cybersecurity and Networking — Bachelor of Applied Science"
    },
    {
      "name": "Information Technology: Software Development — Bachelor of Applied Science"
    },
    {
      "name": "Marketing and Entrepreneurship — Bachelor of Applied Science"
    }
  ],
  "bachelorIntl": "open",
  "bachelorSource": "https://www.greenriver.edu/international/programs/bachelors/",
  "bachelorChecked": "2026-10-05",
  "bachelorIntlNote": "Green River lists these as its most popular BAS programmes for international students and says applicants with an equivalent degree from abroad are welcome.",
  "programsBasis": "transfer"
}
);
