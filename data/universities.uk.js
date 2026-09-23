/* ============================================================
   United Kingdom — university records
   Every figure below was read from the official university page
   listed in `sources`. Fields we could not confirm are `null`
   and render as "Not confirmed — check official source".

   UK specifics worth knowing while reading these records:
   - Undergraduate applications go through UCAS, not the university.
   - Tuition is charged per course, so a single university can have
     several very different international fees.
   - "Home" fees (capped at £10,050 for 2027-28) do not apply to
     international students; the "Overseas" rate does.
   ============================================================ */
window.UNIPATH.universities.push(
{
  id: 'university-of-oxford',
  name: 'University of Oxford',
  country: 'uk',
  city: 'Oxford',
  region: 'England',
  founded: 1096,
  type: 'Public collegiate research university',
  brand: { c1: '#002147', c2: '#00102a', initials: 'OX' },
  description: 'The oldest university in the English-speaking world, taught through a collegiate tutorial system in which undergraduates meet academics in groups of one to three. Applications close in mid-October — nearly three months earlier than most UK universities — and almost every subject adds an admissions test and an interview.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','mathematics','computer-science','engineering','economics','law','medicine','biology','psychology','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','mathematics','computer-science','engineering','economics','law','medicine','biology','psychology','arts'],
  programNote: 'Oxford admits to a specific course from day one; there is no "undeclared" year and changing course later is difficult. Philosophy, Politics and Economics (PPE) is the traditional route towards politics and business, and there is no undergraduate business degree.',
  links: {
    website: 'https://www.ox.ac.uk/',
    admissions: 'https://www.ox.ac.uk/admissions/undergraduate',
    internationalAdmissions: 'https://www.ox.ac.uk/admissions/undergraduate/applying-to-oxford/for-international-students',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/oxford-support',
    financialAid: 'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/oxford-bursaries-and-scholarships/reach-oxford',
    programs: 'https://www.ox.ac.uk/admissions/undergraduate/courses',
    cost: 'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/course-fees'
  },
  admissions: {
    platforms: ['UCAS (required)', 'Admissions test for most courses, registered separately'],
    deadlines: [
      { name: 'UCAS application (2027 entry)', entryTerm: '2027 entry', dateISO: '2026-10-15', date: '15 October 2026', note: 'Closes at 18:00 UK time — three months earlier than most UK universities' },
      { name: 'Admissions tests', entryTerm: '2027 entry', date: 'October 2026', note: 'All applicants for courses that require a test sit it in October' },
      { name: 'Interviews', entryTerm: '2027 entry', date: 'December 2026', note: 'Shortlisted applicants are interviewed online' },
      { name: 'Decisions', entryTerm: '2027 entry', dateISO: '2027-01-12', date: '12 January 2027', note: 'Released through UCAS' },
      { name: 'Reach Oxford Scholarship application', entryTerm: '2027 entry', dateISO: '2027-01-26', date: '26 January 2027', note: 'Separate scholarship deadline for offer holders from eligible countries' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 is the UCAS fee for the whole application (up to five universities), not an Oxford fee' },
    documents: [
      'UCAS application with personal statement',
      'Academic reference from your school',
      'Predicted and achieved grades from your school-leaving qualification',
      'Admissions test result for courses that require one',
      'Written work in some subjects — check the course page'
    ],
    recommendations: 'One academic reference submitted through UCAS',
    essay: 'UCAS personal statement; some courses also ask for samples of marked school work',
    interview: 'Shortlisted applicants are interviewed in December, online for all applicants including international ones',
    notes: [
      'You may not apply to both Oxford and Cambridge in the same year.'
    ]
  },
  english: {
    ielts: { min: 7.5, recommended: null, note: 'IELTS Academic 7.5 overall with a minimum of 7.0 in each component. IELTS General, Life Skills and IELTS Online are not accepted.' },
    toefl: { min: 110, recommended: null, scales: [{ period: 'pre2026', min: 110, recommended: null }, { period: 'post2026', min: null, recommended: null, accepted: false }], note: 'TOEFL iBT 110 overall (Listening 22, Reading 24, Speaking 25, Writing 24) — but only for tests taken up to and including 20 January 2026. Oxford does not accept TOEFL tests taken from 21 January 2026 while the revised test is under review.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted qualifications.' },
    waiver: 'Applicants from majority English-speaking countries, and holders of accepted school qualifications in English such as GCSE English Language at grade B/6 with the speaking endorsement, do not need a separate test.',
    note: 'Oxford also accepts C1 Advanced and C2 Proficiency at 191 (minimum 185 per component), Pearson PTE Academic 76 (minimum 66 in each skill) and the Oxford Test of English (Advanced) at 165. Proof is not needed when you apply — offer holders must meet the condition by 31 July of the year they receive the offer.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Oxford selects on school-leaving qualifications, its own admissions tests and interviews rather than the SAT.' },
    act: { policy: 'not-used', note: 'Not part of the Oxford process.' },
    otherTests: 'Most courses require a subject-specific admissions test taken in October — for example the MAT for mathematics and computer science, the PAT for physics and engineering, and the LNAT for law.',
    internationalQualifications: 'A wide range of international school-leaving qualifications is accepted alongside A-levels and the IB; the required grades are published on each course page.'
  },
  costs: {
    breakdown: { tuitionText: "£39,620–£66,580", includes: "the Overseas tuition rate, which depends on the course; living costs are extra" },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: '£39,620–£66,580 tuition',
    items: [
      { label: 'Tuition (Overseas rate, varies by course)', text: '£39,620 – £66,580 per year' },
      { label: 'Tuition (Home rate, for comparison)', amount: 10050 },
      { label: 'Living costs', text: '£1,475 – £2,175 per month' }
    ],
    billedSubtotal: null,
    totalText: '£39,620 – £66,580 tuition plus £1,475 – £2,175 a month to live on',
    note: 'The course fee is a single figure covering both university and college teaching. Clinical medicine costs considerably more for Overseas students. Oxford suggests budgeting living costs over nine months, and international students pay the visa fee and health surcharge separately.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: true, housing: null, meals: null, insurance: null, books: null },
      renewable: true,
      competitiveness: 'Around 2–3 awards are made each year across the whole university, and only applicants who already hold an offer are considered. Competition is described by Oxford as very high.',
      howToApply: 'Apply for admission first. Offer holders from eligible countries then apply for the Reach Oxford Scholarship by 26 January 2027; selection runs in April and results are given by the end of May.',
      note: 'The Reach Oxford Scholarship covers course fees, a grant for living costs and one return air fare per year for 3–4 years. Housing and food are not listed separately — they come out of the living-cost grant. It is open to nationals of countries on the OECD Development Assistance Committee list, for all subjects except medicine.'
    },
    merit: [
      { name: 'Reach Oxford Scholarship', amount: 'Course fees, a grant for living costs and one return economy air fare per year', eligibility: 'Offer holders who are nationals of OECD DAC-listed countries, cannot study for a degree at home for political or financial reasons, show financial need and intend to return home after graduating. All subjects except medicine.', deadline: '26 January 2027 for 2027 entry', application: 'Separate scholarship application after receiving an offer', renewable: true, note: 'Around 2–3 awards a year. Renewal depends on satisfactory academic progress and an annual report.' }
    ],
    needBased: {
      availableToInternational: false,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Oxford\'s bursaries for living costs are for Home-fee students. The Reach Oxford Scholarship is the main need-assessed route for international undergraduates, and it is limited to a handful of awards for students from eligible countries.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Course fees for 2027 entry', url: 'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/course-fees' },
    { label: 'Living costs', url: 'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/living-costs' },
    { label: 'English language and visa requirements', url: 'https://www.ox.ac.uk/admissions/undergraduate/applying-to-oxford/for-international-students/ELR' },
    { label: 'Reach Oxford Scholarship', url: 'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/oxford-bursaries-and-scholarships/reach-oxford' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'university-of-cambridge',
  name: 'University of Cambridge',
  country: 'uk',
  city: 'Cambridge',
  region: 'England',
  founded: 1209,
  type: 'Public collegiate research university',
  brand: { c1: '#A3C1AD', c2: '#0072cf', initials: 'CAM' },
  description: 'Cambridge teaches through supervisions — weekly meetings in groups of two or three with an academic — inside a college system that also provides housing and pastoral support. Like Oxford it closes applications in mid-October, and international students pay a College fee on top of tuition.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['mathematics','engineering','computer-science','economics','humanities','social-sciences','biology','medicine','law','arts','psychology'],
  englishTaughtPrograms: ['mathematics','engineering','computer-science','economics','humanities','social-sciences','biology','medicine','law','arts','psychology'],
  programNote: 'Cambridge groups subjects into "Triposes". Natural Sciences covers physics, chemistry and biology in one broad first year, which is unusually flexible for a UK degree; there is no undergraduate business degree, and Economics or Management Studies (as a later-year option) are the closest routes.',
  links: {
    website: 'https://www.cam.ac.uk/',
    admissions: 'https://www.undergraduate.study.cam.ac.uk/',
    internationalAdmissions: 'https://www.undergraduate.study.cam.ac.uk/international-students',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.undergraduate.study.cam.ac.uk/international-students/financial-support',
    financialAid: 'https://www.undergraduate.study.cam.ac.uk/fees-and-finance',
    programs: 'https://www.undergraduate.study.cam.ac.uk/courses',
    cost: 'https://www.undergraduate.study.cam.ac.uk/international-students/international-fees-and-costs'
  },
  admissions: {
    platforms: ['UCAS (required)', 'My Cambridge Application — an extra form completed after the UCAS application', 'Admissions assessment for most courses'],
    deadlines: [
      { name: 'UCAS application (2027 entry)', entryTerm: '2027 entry', dateISO: '2026-10-15', date: '15 October 2026', note: 'Closes at 18:00 UK time' },
      { name: 'My Cambridge Application', date: 'Shortly after the UCAS deadline', note: 'Cambridge emails the form once your UCAS application arrives — the exact date is published each cycle' },
      { name: 'Interviews', entryTerm: '2027 entry', date: 'December 2026', note: 'Most overseas applicants are interviewed online' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 is the UCAS fee for the whole application, not a Cambridge fee' },
    documents: [
      'UCAS application with personal statement',
      'My Cambridge Application form, including a school transcript',
      'Academic reference',
      'Admissions assessment result for courses that require one',
      'Submitted written work in some subjects'
    ],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement plus the additional questions in My Cambridge Application',
    interview: 'Interviews are a standard part of the process and are normally held online for applicants outside the UK',
    notes: [
      'You may not apply to both Cambridge and Oxford in the same year.'
    ]
  },
  english: {
    ielts: { min: 7.5, recommended: null, note: 'IELTS Academic 7.5 overall, usually with 7.0 or above in each element. Cambridge recommends you already be at roughly IELTS 6.5 (no element below 6.0) at the point of interview.' },
    toefl: { min: null, recommended: null, note: 'TOEFL is not listed among the qualifications on the Cambridge entry requirements page — check with your College before relying on it.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted qualifications.' },
    waiver: 'Applicants from countries the UK Home Office treats as majority English-speaking are not asked for a test.',
    note: 'Cambridge also accepts C2 Proficiency at 200 (no element below 185) and C1 Advanced at 193 (no element below 185). The expectation is a good C1 level across all four skills by the time you start.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Cambridge selects on school-leaving qualifications, admissions assessments and interviews.' },
    act: { policy: 'not-used', note: 'Not part of the Cambridge process.' },
    otherTests: 'Most courses require a subject admissions assessment; the test and its date are listed on each course page.',
    internationalQualifications: 'Cambridge publishes required grades for a long list of international qualifications; typical offers are set course by course.'
  },
  costs: {
    breakdown: { tuition: 30798, tuitionText: "£30,798–£70,554", includes: "the Overseas tuition rate by subject group; a College fee and living costs are charged on top" },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: '£30,798–£70,554 tuition',
    items: [
      { label: 'Tuition — Group 1 (Classics, Economics, English, History, Law and similar)', amount: 30798 },
      { label: 'Tuition — Group 2 (Mathematics)', amount: 34356 },
      { label: 'Tuition — Group 3 (Architecture, Design, Geography, Music)', amount: 40296 },
      { label: 'Tuition — Group 4 (Computer Science, Engineering, Natural Sciences)', amount: 46872 },
      { label: 'Tuition — Group 5 (Medicine, Veterinary Medicine)', amount: 70554 },
      { label: 'College fee (varies by college)', text: 'Charged on top of tuition for all Overseas students' },
      { label: 'Living costs (9 months, term time)', amount: 11970 },
      { label: 'Living costs (12 months)', amount: 15960 }
    ],
    billedSubtotal: null,
    totalText: '£30,798 – £70,554 tuition, plus a College fee, plus about £11,970 – £15,960 to live on',
    note: 'Tuition is fixed for the duration of your course. Every Overseas student also pays an annual College fee, which differs between colleges and is published in the university\'s tuition-fee documents. Living costs are Cambridge\'s own estimate for 2027-28 (£1,330 a month) and exclude tuition and the College fee.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: null,
      basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Cambridge states plainly that few full undergraduate scholarships exist and that most support is a partial, means-tested contribution. Cambridge Trust awards are the main route, and their coverage varies by award — check the Trust\'s pages once you hold an offer rather than assuming a full ride.'
    },
    merit: [
      { name: 'Cambridge Trust awards', amount: 'Varies by award; the university describes most support as a partial contribution', eligibility: 'Overseas students who have been accepted by a Cambridge College. All awards are means-tested.', deadline: 'Set by the Trust each cycle, after you hold an offer', application: 'Your College sends the application form once you are accepted', renewable: null, note: 'Cambridge\'s own page warns that few full undergraduate scholarships are available.' },
      { name: 'College awards', amount: 'Partial support, varies by college', eligibility: 'Overseas students at that college', deadline: null, application: 'Contact the College admissions office', renewable: null, note: null },
      { name: 'Prince Philip Scholarship', amount: 'Cash award plus means-tested support towards tuition and living costs', eligibility: 'Permanent residents of Hong Kong SAR applying for a first degree', deadline: 'Submitted alongside the Cambridge application', application: 'Through the Prince Philip Scholarship website', renewable: null, note: 'Restricted to Hong Kong applicants.' }
    ],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Support for international undergraduates is means-tested but partial. The Cambridge Bursary for living costs is a Home-fee scheme.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International fees and costs', url: 'https://www.undergraduate.study.cam.ac.uk/international-students/international-fees-and-costs' },
    { label: 'Entry requirements, including English language', url: 'https://www.undergraduate.study.cam.ac.uk/applying/entrance-requirements' },
    { label: 'Living costs', url: 'https://www.undergraduate.study.cam.ac.uk/fees-and-finance/living-costs' },
    { label: 'International financial support', url: 'https://www.undergraduate.study.cam.ac.uk/international-students/financial-support' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'imperial-college-london',
  name: 'Imperial College London',
  shortName: 'Imperial',
  country: 'uk',
  city: 'London',
  region: 'England',
  founded: 1907,
  type: 'Public research university',
  brand: { c1: '#003E74', c2: '#002147', initials: 'IC' },
  description: 'A university devoted entirely to science, engineering, medicine and business, on a central London campus in South Kensington. Imperial publishes one of the clearest scholarship offers for international undergraduates in the UK — a flat £15,000 a year for every year of the course.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','mathematics','biology','medicine','economics'],
  englishTaughtPrograms: ['engineering','computer-science','mathematics','biology','medicine','economics'],
  programNote: 'Every undergraduate course is in science, engineering, medicine or business — there are no humanities degrees. Many engineering courses are four-year MEng programmes rather than three-year BEng ones. Imperial Business School\'s bachelor\'s degree is the BSc Economics, Finance and Data Science, so Imperial is listed under Economics rather than Business.',
  links: {
    website: 'https://www.imperial.ac.uk/',
    admissions: 'https://www.imperial.ac.uk/study/apply/undergraduate/',
    internationalAdmissions: 'https://www.imperial.ac.uk/study/international-students/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.imperial.ac.uk/study/fees-and-funding/undergraduate/scholarships/',
    financialAid: 'https://www.imperial.ac.uk/study/fees-and-funding/undergraduate/',
    programs: 'https://www.imperial.ac.uk/study/courses/',
    cost: 'https://www.imperial.ac.uk/study/fees-and-funding/undergraduate/tuition-fees/'
  },
  admissions: {
    platforms: ['UCAS (required)', 'Admissions test for some courses, such as medicine'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', entryTerm: '2027 entry', dateISO: '2027-01-13', date: '13 January 2027', note: 'Closes at 18:00 UK time' },
      { name: 'Medicine and related courses', entryTerm: '2027 entry', dateISO: '2026-10-15', date: '15 October 2026', note: 'The early UCAS deadline applies to medicine' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 UCAS fee covers the whole application, not one university' },
    documents: [
      'UCAS application with personal statement',
      'Academic reference',
      'Predicted or achieved school-leaving grades',
      'Admissions test result where the course requires one'
    ],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for some courses, including medicine; requirements are listed on each course page',
    notes: []
  },
  english: {
    ielts: { min: 6.5, recommended: null, lowestLevel: true, note: 'Standard level: IELTS Academic 6.5 overall with a minimum of 6.0 in all elements. Higher level: 7.0 overall with a minimum of 6.5 in all elements. Which level applies is set by the course.' },
    toefl: { min: 92, recommended: null, lowestLevel: true, note: 'Standard level: TOEFL iBT 92 overall with a minimum of 20 in all elements. Higher level: 100 overall with a minimum of 22.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests on the undergraduate page.' },
    waiver: 'Qualifications taught and examined in English can satisfy the requirement — the accepted list is on Imperial\'s English language page.',
    note: 'Imperial also lists Pearson PTE Academic at 62 (minimum 56 per element) for the standard level and 69 (minimum 62) for the higher level, plus C1 Advanced at 176 and 185 respectively. Test scores must still be valid when your course starts.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Imperial selects on school-leaving qualifications; the SAT is not part of the standard route.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: 'Some courses require a subject admissions test — for example the UCAT for medicine and the TMUA/MAT for parts of mathematics and computing.',
    internationalQualifications: 'A-levels, IB and a long list of international school-leaving qualifications are accepted; the required grades are on each course page.'
  },
  costs: {
    breakdown: { published: false },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: 'Overseas fee not yet published',
    items: [
      { label: 'Tuition (Overseas rate)', text: 'Not yet confirmed for 2027 entry — Imperial publishes it on each course page' },
      { label: 'Tuition (Home rate, for comparison)', amount: 10050 }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — Imperial marks the 2027 Overseas fee "to be confirmed"',
    note: 'At the time of checking, Imperial course pages showed the Home fee for 2027 entry (£10,050, subject to parliamentary approval) and listed the Overseas fee as still to be confirmed. Do not plan on a figure until it appears on your course page.'
  },
  scholarships: {
    fullRide: {
      available: false,
      internationalEligible: false,
      basis: null,
      covers: { tuition: false, housing: false, meals: false, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Imperial\'s published award for overseas undergraduates is £15,000 per year — a substantial cut, but well short of a full ride at London prices.'
    },
    merit: [
      { name: 'Imperial Inspires Scholarship', amount: '£15,000 per year for each year of the course', eligibility: 'Overseas students', deadline: null, application: 'Details are published with the scholarship on Imperial\'s scholarships pages', renewable: true, note: 'Listed directly on Imperial course pages as the scholarship open to overseas students.' }
    ],
    needBased: {
      availableToInternational: false,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'The Imperial Bursary, which is means-tested, is for Home-fee students. International students should plan around the Imperial Inspires Scholarship and external funding.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate tuition fees', url: 'https://www.imperial.ac.uk/study/fees-and-funding/undergraduate/tuition-fees/' },
    { label: 'English language requirements', url: 'https://www.imperial.ac.uk/study/apply/english-language/' },
    { label: 'Computing (International Programme of Study) MEng — fees and scholarships', url: 'https://www.imperial.ac.uk/study/courses/undergraduate/computing-international-programme-of-study/' },
    { label: 'Imperial Business School — undergraduate programmes', url: 'https://www.imperial.ac.uk/business-school/undergraduate/' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'university-college-london',
  name: 'University College London',
  shortName: 'UCL',
  country: 'uk',
  city: 'London',
  region: 'England',
  founded: 1826,
  type: 'Public research university',
  brand: { c1: '#500778', c2: '#2c0044', initials: 'UCL' },
  description: 'The first English university to admit students regardless of religion, and now one of the largest in the country, spread across Bloomsbury in central London. UCL runs the most generous published scholarship scheme for international undergraduates among the London universities in this database.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','mathematics','economics','humanities','social-sciences','arts','biology','medicine','law','psychology','education'],
  englishTaughtPrograms: ['engineering','computer-science','mathematics','economics','humanities','social-sciences','arts','biology','medicine','law','psychology','education'],
  programNote: 'UCL offers over 400 undergraduate programmes across the arts, sciences, engineering, medicine and the built environment — the widest subject range of the UK universities in this database.',
  links: {
    website: 'https://www.ucl.ac.uk/',
    admissions: 'https://www.ucl.ac.uk/study/prospective-students/undergraduate',
    internationalAdmissions: 'https://www.ucl.ac.uk/prospective-students/international',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.ucl.ac.uk/scholarships/ucl-global-undergraduate-scholarship',
    financialAid: 'https://www.ucl.ac.uk/prospective-students/undergraduate/scholarships',
    programs: 'https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses',
    cost: 'https://www.ucl.ac.uk/study/undergraduate-fees-2027-2028'
  },
  admissions: {
    platforms: ['UCAS (required)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', entryTerm: '2027 entry', dateISO: '2027-01-13', date: '13 January 2027', note: 'Closes at 18:00 UK time; applications may stay open afterwards for some courses' },
      { name: 'UCL Global Undergraduate Scholarship', date: '27 April (2026 date; 2027 to be confirmed)', note: 'Separate scholarship application, closes 17:00 BST' },
      { name: 'Meeting offer conditions, including English', date: '3 September (2026 date)', note: 'Offer holders must meet all conditions by 17:00 UK time' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 UCAS fee covers the whole application' },
    documents: [
      'UCAS application with personal statement',
      'Academic reference',
      'Predicted or achieved school-leaving grades',
      'Admissions test result where the course requires one'
    ],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Used by some departments; check the course page',
    notes: []
  },
  english: {
    ielts: { min: 6.5, recommended: null, lowestLevel: true, note: 'UCL sets five levels and each programme states which applies. Level 1: 6.5 overall with 6.0 in each component. Level 2: 7.0 with 6.5. Level 3: 7.0 with 7.0. Level 4: 7.5 with 7.0. Level 5: 8.0 with 8.0.' },
    toefl: { min: 92, recommended: null, lowestLevel: true, scales: [{ period: 'pre2026', min: 92, recommended: null }, { period: 'post2026', min: 4.5, recommended: null }], note: 'For tests taken before 21 January 2026: Level 1 is 92 overall (24 reading and writing, 20 speaking and listening), rising to 110 at Level 5. For tests from 21 January 2026 UCL uses the new scale: Level 1 is 4.5 overall with 4.0 in each skill, up to 5.5 at Level 5.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    waiver: 'Applicants from UK Home Office majority English-speaking countries, and holders of accepted school-leaving qualifications containing English, do not need a test.',
    note: 'UCL also accepts C1 Advanced, C2 Proficiency, PTE Academic, Trinity ISE, LanguageCert Academic and the Oxford Test of English Advanced. All components must be met in a single sitting — TOEFL MyBest and IELTS One Skill Retake are not accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'UCL selects on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: 'Some programmes require a subject admissions test, registered through University Admissions Tests UK.',
    internationalQualifications: 'A-levels, IB and international qualifications are accepted; required grades are published on each course page. UCL also runs its own Undergraduate Preparatory Certificate foundation year.'
  },
  costs: {
    breakdown: { tuition: 48600, tuitionText: "£48,600 (Computer Science BSc)", includes: "the Overseas tuition rate for one example programme; other programmes differ" },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: '£48,600 tuition (Computer Science BSc)',
    items: [
      { label: 'Tuition — Computer Science BSc (Overseas rate, example)', amount: 48600 },
      { label: 'Tuition (Home rate, for comparison)', amount: 10050 },
      { label: 'Tuition — other programmes', text: 'Varies by programme; published on each course page' }
    ],
    billedSubtotal: null,
    totalText: '£48,600 a year for Computer Science; other programmes differ',
    note: 'UCL publishes the Overseas fee on each course page rather than as a single range, so the figure above is one worked example. Most Overseas undergraduates get a cohort guarantee, meaning the fee does not rise during the course. Living costs in central London are additional.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need-based',
      covers: { tuition: true, housing: null, meals: null, insurance: null, books: null },
      renewable: true,
      competitiveness: 'For 2026/27 UCL offered up to 33 awards across the whole university, of which only 10 included a maintenance allowance. Selection is on financial need, and shortlisted applicants must provide financial evidence.',
      howToApply: 'Submit your UCL admission application first, then apply separately for the scholarship by the published deadline — you do not need to hold an offer, but your fee status must be confirmed as Overseas.',
      note: 'The 10 top awards cover full tuition, a maintenance allowance and a fixed allowance for extra costs such as the visa and health surcharge — the closest thing to a full ride in this database\'s UK entries. The remaining awards cover tuition only, so housing and food are not included. Figures are UCL\'s published 2026/27 scheme.'
    },
    merit: [],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: ['UCL Global Undergraduate Scholarship application', 'Financial evidence if shortlisted'],
      deadlines: '17:00 BST, 27 April 2026 for 2026/27 entry',
      note: 'UCL treats "low income" as a household income of roughly £42,875 or less as a guide, but says it will still consider applications above that. The scholarship lasts the standard duration of the programme.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate fees for 2027 to 2028', url: 'https://www.ucl.ac.uk/study/undergraduate-fees-2027-2028' },
    { label: 'Computer Science BSc — key information and fees', url: 'https://www.ucl.ac.uk/study/prospective-students/undergraduate/courses/computer-science-bsc' },
    { label: 'English language requirements', url: 'https://www.ucl.ac.uk/study/prospective-students/undergraduate/how-apply/english-language-requirements' },
    { label: 'UCL Global Undergraduate Scholarship', url: 'https://www.ucl.ac.uk/scholarships/ucl-global-undergraduate-scholarship' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'kings-college-london',
  name: 'King\'s College London',
  shortName: 'KCL',
  country: 'uk',
  city: 'London',
  region: 'England',
  founded: 1829,
  type: 'Public research university',
  brand: { c1: '#E2231A', c2: '#8f120c', initials: 'KCL' },
  description: 'A large London university with campuses along the Thames, strongest in medicine and health, law, war studies and the humanities. Its fees are published clearly per course — and international offer holders must pay a £2,000 deposit before enrolling.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','law','humanities','social-sciences','business','computer-science','engineering','mathematics','psychology','biology','education'],
  englishTaughtPrograms: ['medicine','law','humanities','social-sciences','business','computer-science','engineering','mathematics','psychology','biology','education'],
  programNote: 'King\'s is best known for medicine, dentistry, nursing, law and war studies. Its Department of Informatics covers computer science and artificial intelligence.',
  links: {
    website: 'https://www.kcl.ac.uk/',
    admissions: 'https://www.kcl.ac.uk/study/undergraduate/how-to-apply',
    internationalAdmissions: 'https://www.kcl.ac.uk/study/international',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.kcl.ac.uk/study/funding',
    financialAid: 'https://www.kcl.ac.uk/study/undergraduate/fees-and-funding',
    programs: 'https://www.kcl.ac.uk/study/undergraduate/courses',
    cost: 'https://www.kcl.ac.uk/study/undergraduate/fees-and-funding/tuition-fees'
  },
  admissions: {
    platforms: ['UCAS (required)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', entryTerm: '2027 entry', dateISO: '2027-01-13', date: '13 January 2027', note: 'Closes at 18:00 UK time' },
      { name: 'Medicine and dentistry', entryTerm: '2027 entry', dateISO: '2026-10-15', date: '15 October 2026', note: 'The early UCAS deadline applies' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 UCAS fee covers the whole application' },
    documents: [
      'UCAS application with personal statement',
      'Academic reference',
      'Predicted or achieved school-leaving grades',
      'English language test result dated within two years of the course start'
    ],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Used for medicine, dentistry, nursing and some other courses',
    notes: [
      'International offer holders pay a £2,000 deposit against the first year\'s tuition when they firmly accept an unconditional offer. It is offset against the fee, not an extra charge.'
    ]
  },
  english: {
    ielts: { min: 6.5, recommended: null, lowestLevel: true, note: 'King\'s sets bands per course. Band D: IELTS 6.5 overall with 6.0 in each skill (science, mathematics and engineering courses). Band B: 7.0 with 6.5 (arts, humanities, business, law, medicine, nursing, psychology). Band A: 7.5 with 7.0.' },
    toefl: { min: 92, recommended: null, lowestLevel: true, scales: [{ period: 'pre2026', min: 92, recommended: null }, { period: 'post2026', min: 4.5, recommended: null }], note: 'For tests before 21 January 2026 — Band D: 92 overall (23 writing, 20 other skills). Band B: 100 (25 writing, 23 other skills). Band A: 109 (27 writing, 25 other skills). For tests from 21 January 2026 King\'s uses the new scale: Band D 4.5, Band B 5.0, Band A 5.5.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests on the undergraduate bands page.' },
    waiver: 'Applicants from majority English-speaking countries and holders of accepted qualifications taught in English are exempt.',
    note: 'The whole test must be taken in one sitting — King\'s does not combine scores across two tests, and does not accept TOEFL MyBest or IELTS One Skill Retake. For a September 2027 start the test must be dated within two years of 1 September 2027.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'King\'s selects on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: 'The UCAT is required for medicine and dentistry; some other courses use subject tests.',
    internationalQualifications: 'A-levels, IB and international qualifications are accepted, with required grades on each course page. Computer Science BSc, for example, asks for A*A*A at A-level.'
  },
  costs: {
    breakdown: { tuition: 42900, tuitionText: "£42,900 (Computer Science BSc)", includes: "the International tuition rate for one example programme, plus a £2,000 deposit at acceptance" },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: '£42,900 tuition (Computer Science BSc)',
    items: [
      { label: 'Tuition — Computer Science BSc (International rate, example)', amount: 42900 },
      { label: 'Tuition (UK rate, for comparison)', amount: 10050 },
      { label: 'Deposit against first-year tuition (all international undergraduates)', amount: 2000 },
      { label: 'Tuition — other programmes', text: 'Varies by course; published on each course page' }
    ],
    billedSubtotal: null,
    totalText: '£42,900 a year for Computer Science, plus a £2,000 deposit at acceptance',
    note: 'King\'s publishes the international fee per course, so the figure above is one worked example. The international fee is subject to annual increases in later years of the course, unlike at several other UK universities. London living costs are additional.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: null,
      basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Not confirmed. King\'s runs a searchable funding database rather than a single headline scholarship for international undergraduates — search it for your subject and country before assuming what is available.'
    },
    merit: [],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Not confirmed on the pages consulted. Check the King\'s funding database and your department\'s own pages.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Computer Science BSc — fees', url: 'https://www.kcl.ac.uk/study/undergraduate/courses/computer-science-bsc/fees' },
    { label: 'Undergraduate English language entry requirements', url: 'https://www.kcl.ac.uk/study/undergraduate/how-to-apply/english-language-requirements' },
    { label: 'Funding opportunities', url: 'https://www.kcl.ac.uk/study/funding' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'university-of-edinburgh',
  name: 'University of Edinburgh',
  country: 'uk',
  city: 'Edinburgh',
  region: 'Scotland',
  founded: 1583,
  type: 'Public research university',
  brand: { c1: '#041E42', c2: '#00122a', initials: 'ED' },
  description: 'Scotland\'s leading research university, in the centre of Edinburgh. Scottish undergraduate degrees usually run four years rather than three, and the first two years are broader — closer to the American model than to an English degree.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','computer-science','engineering','mathematics','biology','medicine','business','economics','arts','psychology','law','education'],
  englishTaughtPrograms: ['humanities','social-sciences','computer-science','engineering','mathematics','biology','medicine','business','economics','arts','psychology','law','education'],
  programNote: 'Most Edinburgh honours degrees take four years, and students take a wider set of subjects in years one and two before specialising. Informatics is the department covering computer science and artificial intelligence.',
  links: {
    website: 'https://www.ed.ac.uk/',
    admissions: 'https://study.ed.ac.uk/undergraduate',
    internationalAdmissions: 'https://www.ed.ac.uk/studying/international',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://registryservices.ed.ac.uk/student-funding/undergraduate/international',
    financialAid: 'https://study.ed.ac.uk/undergraduate/fees-funding/funding',
    programs: 'https://study.ed.ac.uk/programmes/undergraduate-subjects',
    cost: 'https://study.ed.ac.uk/undergraduate/fees-funding/fees-costs/international-eu-eea'
  },
  admissions: {
    platforms: ['UCAS (required)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', entryTerm: '2027 entry', dateISO: '2027-01-13', date: '13 January 2027', note: 'Closes at 18:00 UK time' },
      { name: 'Medicine and veterinary medicine', entryTerm: '2027 entry', dateISO: '2026-10-15', date: '15 October 2026', note: 'The early UCAS deadline applies' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 UCAS fee covers the whole application' },
    documents: [
      'UCAS application with personal statement',
      'Academic reference',
      'Predicted or achieved school-leaving grades',
      'English language evidence where required'
    ],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Used for a limited number of courses, such as medicine and veterinary medicine',
    notes: []
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Edinburgh sets the requirement per degree rather than university-wide — the exact score is on each degree page in the Degree Finder. IELTS Academic results must be no more than two years old on the first of the month the degree begins.' },
    toefl: { min: null, recommended: null, note: 'Accepted, with the score set by the degree. The same two-year validity rule applies.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the tests named on the undergraduate English language page.' },
    waiver: 'School qualifications in English — National 5 at grade C, GCSE/IGCSE at C or 4, or IB Standard Level English at 5 — can satisfy the requirement, with a longer validity window than the tests.',
    note: 'Edinburgh also accepts the Oxford ELLT and Trinity ISE. Because requirements differ by degree, check the Degree Finder page for your exact course before booking a test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Edinburgh selects on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: 'The UCAT is required for medicine; most other courses have no admissions test.',
    internationalQualifications: 'A-levels, Scottish Highers, IB and a wide list of international qualifications are accepted; required grades are on each degree page.'
  },
  costs: {
    breakdown: { published: false },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per degree',
    items: [
      { label: 'Tuition (International rate)', text: 'Set per degree and published in the Degree Finder — Edinburgh does not publish a single range' },
      { label: 'Living costs', amount: 1546 },
      { label: 'Living costs — 39-week academic year', amount: 13914 },
      { label: 'Living costs — full 12 months', amount: 18552 }
    ],
    billedSubtotal: null,
    totalText: 'Tuition varies by degree; living costs about £13,914 for a 39-week year',
    note: 'The living-cost figures are Edinburgh\'s own 2026-27 estimate for a single undergraduate: £1,546 a month, of which £980 is accommodation and utilities. International students pay a fixed annual tuition fee based on their start date, so it does not rise during the degree.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: null,
      basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Edinburgh\'s published undergraduate awards for international students are partial or restricted to specific groups. The Asylum Seeker Scholarship covers tuition and living costs but is limited to two awards for people seeking asylum.'
    },
    merit: [
      { name: 'Edinburgh Global Undergraduate Mathematics Scholarship', amount: '£5,000 per year, paid in instalments towards living costs', eligibility: 'International/EU fee status applicants admitted to an undergraduate degree in the School of Mathematics', deadline: 'Published annually on the funding page', application: 'Separate scholarship application', renewable: true, note: 'Tenable for the duration of the programme, subject to satisfactory academic progress. Mathematics only.' },
      { name: 'Global Talent Fund BIG Scholarships', amount: 'Not published on the page consulted', eligibility: 'Students worldwide who have won a medal at an international Olympiad', deadline: null, application: 'Through the BIG programme', renewable: null, note: 'Very narrow eligibility.' },
      { name: 'Rosedale OSSD University of Edinburgh Scholarship', amount: '£10,000 in the first year', eligibility: 'One successful candidate from the Rosedale OSSD programme', deadline: null, application: 'Through Rosedale International Education', renewable: null, note: 'A single award.' }
    ],
    needBased: {
      availableToInternational: false,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Edinburgh\'s means-tested support is aimed at Scottish and UK students. International applicants should plan around the named scholarships above and external funding.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International and EU/EEA tuition fees and other costs', url: 'https://study.ed.ac.uk/undergraduate/fees-funding/fees-costs/international-eu-eea' },
    { label: 'Living costs', url: 'https://study.ed.ac.uk/undergraduate/fees-funding/fees-costs/living-costs' },
    { label: 'English language entry requirements', url: 'https://study.ed.ac.uk/undergraduate/entry-requirements/english-language' },
    { label: 'Funding for international undergraduates', url: 'https://registryservices.ed.ac.uk/student-funding/undergraduate/international' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'university-of-manchester',
  name: 'University of Manchester',
  country: 'uk',
  city: 'Manchester',
  region: 'England',
  founded: 1824,
  type: 'Public research university',
  brand: { c1: '#660099', c2: '#3d005c', initials: 'MAN' },
  description: 'One of the largest campus universities in the UK, in a city with living costs far below London. Manchester funds international undergraduates more systematically than most UK universities: its Global Futures Scholarship makes hundreds of partial awards each year.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','business','economics','humanities','social-sciences','biology','medicine','mathematics','psychology','law','arts','education'],
  englishTaughtPrograms: ['engineering','computer-science','business','economics','humanities','social-sciences','biology','medicine','mathematics','psychology','law','arts','education'],
  programNote: 'Manchester teaches across essentially every major subject area, and several engineering and science degrees can be taken as four-year MEng/MSci programmes or with a year in industry.',
  links: {
    website: 'https://www.manchester.ac.uk/',
    admissions: 'https://www.manchester.ac.uk/study/undergraduate/',
    internationalAdmissions: 'https://www.manchester.ac.uk/study/international/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.manchester.ac.uk/study/international/finance-and-scholarships/funding/global-futures-scholarship/',
    financialAid: 'https://www.manchester.ac.uk/study/undergraduate/fees-and-funding/',
    programs: 'https://www.manchester.ac.uk/study/undergraduate/courses/',
    cost: 'https://www.manchester.ac.uk/study/international/finance-and-scholarships/fees/'
  },
  admissions: {
    platforms: ['UCAS (required)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', entryTerm: '2027 entry', dateISO: '2027-01-13', date: '13 January 2027', note: 'Closes at 18:00 UK time' },
      { name: 'Medicine and dentistry', entryTerm: '2027 entry', dateISO: '2026-10-15', date: '15 October 2026', note: 'The early UCAS deadline applies' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 UCAS fee covers the whole application' },
    documents: [
      'UCAS application with personal statement',
      'Academic reference',
      'Predicted or achieved school-leaving grades',
      'English language test result valid on the course start date'
    ],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Used for medicine, dentistry and some other courses',
    notes: []
  },
  english: {
    ielts: { min: 6.0, recommended: null, lowestLevel: true, note: 'The typical minimum is IELTS 6.0 overall, but each course sets its own requirement — many ask for 6.5 or 7.0. IELTS Academic and IELTS UKVI taken at official test centres are accepted.' },
    toefl: { min: 80, recommended: null, note: 'TOEFL iBT 80 is listed as the equivalent of IELTS 6.0. The Special Home Edition is not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests on the language requirements page.' },
    waiver: 'Applicants from majority English-speaking countries, and holders of a bachelor\'s degree or higher from those countries, may be exempt.',
    note: 'Manchester also accepts Pearson PTE Academic (64–69 for the IELTS 6.0 band), C1 Advanced (169–175), Trinity ISE III and LanguageCert Academic 67. Test results are valid for two years and must still be valid when the course starts.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Manchester selects on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: 'The UCAT is required for medicine and dentistry; the LNAT for law.',
    internationalQualifications: 'A-levels, IB and a long list of international qualifications are accepted, with required grades on each course page.'
  },
  costs: {
    breakdown: { tuition: 37800, tuitionText: "£37,800 (BSc Computer Science, 2026/27)", includes: "the international tuition rate for one example programme" },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: '£37,800 tuition (BSc Computer Science)',
    items: [
      { label: 'Tuition — BSc Computer Science (international rate, 2026/27 example)', amount: 37800 },
      { label: 'Tuition — 2027 entry', text: 'Not yet set at the time of checking' },
      { label: 'Tuition — other courses', text: 'Varies by course; published on each course page' }
    ],
    billedSubtotal: null,
    totalText: '£37,800 a year for Computer Science in 2026/27; 2027 rates not yet published',
    note: 'Manchester publishes the international fee per course. The university states it may increase the tuition fee by up to 7% each year of the course, so later years cost more than the first. Living costs in Manchester are well below London.'
  },
  scholarships: {
    fullRide: {
      available: false,
      internationalEligible: false,
      basis: null,
      covers: { tuition: false, housing: false, meals: false, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Manchester describes the Global Futures Scholarship as a set of partial merit awards. They reduce the fee substantially but do not cover it in full.'
    },
    merit: [
      { name: 'Global Futures Scholarship', amount: '£8,000 per year for up to three years of study, rising to £10,000 for high-performing students from certain countries', eligibility: 'International students; eligibility criteria vary by country of domicile', deadline: 'Published for each entry year', application: 'Considered on the basis of your admission application; details are on the scholarship page', renewable: true, note: 'For September 2027 entry Manchester says it is offering more than 350 partial merit-based scholarships, worth over £6 million in total, across undergraduate and master\'s study.' }
    ],
    needBased: {
      availableToInternational: false,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Means-tested bursaries are for Home-fee students. International funding at Manchester is merit-based.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Fees for international students', url: 'https://www.manchester.ac.uk/study/international/finance-and-scholarships/fees/' },
    { label: 'English language requirements', url: 'https://www.manchester.ac.uk/study/international/admissions/language-requirements/' },
    { label: 'Global Futures Scholarship', url: 'https://www.manchester.ac.uk/study/international/finance-and-scholarships/funding/global-futures-scholarship/' },
    { label: 'BSc Computer Science (2027 entry)', url: 'https://www.manchester.ac.uk/study/undergraduate/courses/2027/00560/bsc-computer-science/' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'university-of-warwick',
  name: 'University of Warwick',
  country: 'uk',
  city: 'Coventry',
  region: 'England',
  founded: 1965,
  type: 'Public research university',
  brand: { c1: '#3B2C64', c2: '#231a3d', initials: 'WAR' },
  description: 'A campus university between Coventry and Warwickshire, founded in 1965 and known for mathematics, economics and Warwick Business School. It is the only UK university in this database that has already published its Overseas fees for 2027-28 as clear bands.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['mathematics','economics','business','computer-science','engineering','humanities','social-sciences','law','psychology','biology','arts'],
  englishTaughtPrograms: ['mathematics','economics','business','computer-science','engineering','humanities','social-sciences','law','psychology','biology','arts'],
  programNote: 'Warwick is strongest in mathematics, economics, computer science and business. Many degrees can be combined — for example Mathematics and Economics, or Computer Science with Business Studies.',
  links: {
    website: 'https://warwick.ac.uk/',
    admissions: 'https://warwick.ac.uk/study/undergraduate/applying/',
    internationalAdmissions: 'https://warwick.ac.uk/study/international/admissions/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://warwick.ac.uk/study/undergraduate/studentfunding/',
    financialAid: 'https://warwick.ac.uk/study/international/admissions/finance/',
    programs: 'https://warwick.ac.uk/study/undergraduate/courses/',
    cost: 'https://warwick.ac.uk/services/finance/studentfinance/fees/overseasfees/'
  },
  admissions: {
    platforms: ['UCAS (required)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', entryTerm: '2027 entry', dateISO: '2027-01-13', date: '13 January 2027', note: 'Closes at 18:00 UK time' },
      { name: 'Medicine (MBChB)', entryTerm: '2027 entry', dateISO: '2026-10-15', date: '15 October 2026', note: 'The early UCAS deadline applies' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: null, waiver: null, note: 'The £34.50 UCAS fee covers the whole application' },
    documents: [
      'UCAS application with personal statement',
      'Academic reference',
      'Predicted or achieved school-leaving grades',
      'English language test result taken within two years and one month of the course start'
    ],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Used by a limited number of departments, including medicine',
    notes: []
  },
  english: {
    ielts: { min: 6.0, recommended: null, lowestLevel: true, note: 'Warwick sets three bands and the course page says which applies. Band A: IELTS 6.0 with a minimum of 5.5 in each component. Band B: 6.5 with 6.0. Band C: 7.0 with 6.5.' },
    toefl: { min: 87, recommended: null, lowestLevel: true, scales: [{ period: 'pre2026', min: 87, recommended: null }, { period: 'post2026', min: 4.5, recommended: null }], note: 'For tests taken before 21 January 2026 — Band A: 87, Band B: 92, Band C: 100, each with minimum component scores of 21 listening and writing, 22 reading and 23 speaking. For tests from 21 January 2026 Warwick uses the new scale: Band A and B 4.5 overall, Band C 5.0.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests on the undergraduate page.' },
    waiver: 'Applicants with accepted qualifications taught in English may be exempt — the list is on Warwick\'s English language requirements page.',
    note: 'The test must be taken in one sitting within two years and one month before the course starts; IELTS One Skill Retake is not accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Warwick selects on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: 'Mathematics courses may ask for the TMUA or STEP; medicine requires the UCAT.',
    internationalQualifications: 'A-levels, IB and international qualifications are accepted; Warwick publishes a dedicated list of international qualification requirements for 2027 entry.'
  },
  costs: {
    breakdown: { tuition: 21950, tuitionText: "£21,950–£37,310", includes: "the international tuition rate by subject band" },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: '£21,950–£37,310 tuition',
    items: [
      { label: 'Tuition — Band 0 (English Literature, Sociology and Criminology)', amount: 21950 },
      { label: 'Tuition — Band 1 (Law, History, Philosophy, Politics, Languages and similar)', amount: 29260 },
      { label: 'Tuition — Band 2 (Engineering, Computer Science, Mathematics, sciences, Business, Economics, Psychology)', amount: 37310 },
      { label: 'Tuition — Medicine (MBChB)', text: 'Not yet set for 2027-28; £32,510 in year 1 and £56,660 in years 2–4 for 2026-27' }
    ],
    billedSubtotal: null,
    totalText: '£21,950 – £37,310 a year depending on the subject band',
    note: 'These are Warwick\'s published Overseas rates for 2027-28 entry. Living costs in Coventry are well below London, and the campus has its own accommodation.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: null,
      basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Not confirmed on the pages consulted. Check Warwick\'s undergraduate funding pages for the scholarships open to Overseas-fee students in your entry year.'
    },
    merit: [],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Not confirmed on the pages consulted.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate Overseas fees', url: 'https://warwick.ac.uk/services/finance/studentfinance/fees/overseasfees/' },
    { label: 'English language requirements', url: 'https://warwick.ac.uk/study/undergraduate/applying/english-language-requirements/' },
    { label: 'Fees and funding for international students', url: 'https://warwick.ac.uk/study/international/admissions/finance/' }
  ],
  lastVerified: '2026-09-18'
}
);
