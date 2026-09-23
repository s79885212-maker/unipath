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
},

{
  id: 'lse',
  name: 'London School of Economics and Political Science',
  shortName: 'LSE',
  country: 'uk',
  city: 'London',
  region: 'England',
  type: 'Public research university (University of London)',
  brand: { c1: '#0d1b3e', c2: '#e30613', initials: 'LSE' },
  description: 'A specialist social-science university in central London, teaching economics, politics, law, management and related subjects. Admission is by UCAS, competition for places is high and LSE publishes one English requirement for every undergraduate programme.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['economics','social-sciences','law','business','mathematics','humanities'],
  englishTaughtPrograms: ['economics','social-sciences','law','business','mathematics','humanities'],
  programNote: 'LSE has no engineering, medicine or laboratory-science degrees; its undergraduate range is concentrated in the social sciences, economics, law, management, mathematics and statistics.',
  links: {
    website: 'https://www.lse.ac.uk/',
    admissions: 'https://www.lse.ac.uk/study-at-lse/Undergraduate',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.lse.ac.uk/study-at-lse/Undergraduate/fees-and-funding',
    cost: 'https://info.lse.ac.uk/staff/divisions/Planning-Division/Table-of-Fees',
    english: 'https://www.lse.ac.uk/study-at-lse/Undergraduate/Prospective-Students/How-to-Apply/English-language-requirements'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'LSE does not normally interview undergraduate applicants.',
    notes: ['LSE states that its tuition fee is fixed at the level of the year of entry and does not rise during the programme.']
  },
  english: {
    ielts: { min: 7.0, recommended: null, note: 'IELTS Academic 7.0 overall with 7.0 in every component, achieved in one sitting. This is a required minimum, not a recommendation, and it applies to all undergraduate programmes.' },
    toefl: { min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }, { period: 'post2026', min: 5.5, recommended: null }], note: 'TOEFL iBT 100 overall with Writing 27, Reading 25, Listening 24, Speaking 24 on the earlier scale; on the scale used from January 2026, 5.5 overall with at least 5 in each component.' },
    duolingo: { min: null, recommended: null, note: 'The Duolingo English Test is not listed among the qualifications LSE accepts.' },
    waiver: 'Nationals of Canada or of UKVI majority English-speaking countries whose first language is English, and holders of a degree taught in those countries, do not need a test.',
    note: 'Pearson PTE Academic 70 overall with 70 in all components, and Cambridge C1 Advanced or C2 Proficiency at 185 overall with 185 per component, are also accepted. Test results must be no more than two years old on 1 September of the year of entry; Cambridge certificates do not expire.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'LSE selects on school-leaving qualifications such as A-levels, the IB and recognised national diplomas. US applicants may be asked for SAT/ACT and AP results, but there is no test-optional policy in the American sense.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'No university-wide admissions test. Some programmes ask for additional written work.',
    internationalQualifications: 'A wide range of national school-leaving qualifications is accepted; the required grades are published for each programme.'
  },
  costs: {
    breakdown: { published: false, includes: 'LSE publishes overseas undergraduate fees in its Table of Fees, by programme tier; the figure for the 2027–28 year was not read here' },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: 'Tuition published per programme tier',
    items: [
      { label: 'Tuition (Overseas rate)', text: 'Set per programme tier in the LSE Table of Fees and fixed at the year-of-entry level for the whole degree' },
      { label: 'Living costs in London', text: 'Not read from the official page during this check' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the LSE Table of Fees',
    note: 'LSE fixes the overseas fee at the level of the year of entry, so it does not rise during the programme.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check. LSE states that it awards privately funded scholarships and bursaries to Overseas-fee students, but says the number, value and criteria change each year.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'LSE says financial support for Overseas-fee students exists but does not publish a fixed scheme; details were not confirmed here.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate English language requirements', url: 'https://www.lse.ac.uk/study-at-lse/Undergraduate/Prospective-Students/How-to-Apply/English-language-requirements' },
    { label: 'Undergraduate fees and funding', url: 'https://www.lse.ac.uk/study-at-lse/Undergraduate/fees-and-funding' },
    { label: 'UCAS key dates for 2027 entry', url: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications' }
  ],
  verification: { level: 'partial', checked: ['english','rounds','application fee'], unconfirmed: ['tuition amount','scholarships','application documents beyond UCAS'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-bristol',
  name: 'University of Bristol',
  shortName: 'Bristol',
  country: 'uk',
  city: 'Bristol',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#a9134d', c2: '#5f0b2c', initials: 'BRI' },
  description: 'A large research university in south-west England with a broad course range from engineering and medicine to law and the humanities. English requirements are set by course profile, and tuition is charged in published subject bands.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','medicine','law','business','humanities','social-sciences','biology','mathematics','psychology','arts'],
  englishTaughtPrograms: ['engineering','computer-science','medicine','law','business','humanities','social-sciences','biology','mathematics','psychology','arts'],
  programNote: 'Each course states an English language profile (A to F) and a fee band, so requirements and cost depend on the subject chosen.',
  links: {
    website: 'https://www.bristol.ac.uk/',
    admissions: 'https://www.bristol.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.bristol.ac.uk/international/fees-finance/scholarships/',
    cost: 'https://www.bristol.ac.uk/students/support/finances/tuition-fees/ug/overseas/26-27/2026-starters/',
    english: 'https://www.bristol.ac.uk/study/language-requirements/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry, veterinary science and a few other courses.',
    notes: ['The English requirement is given as a profile letter on each course page, so check the course before booking a test.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the course. Each course is assigned an English profile; Profile B, one of the common undergraduate levels, requires IELTS Academic 7.0 overall with 7.0 in writing and 6.5 in the other skills. Bristol states an absolute floor of CEFR B2 (IELTS 5.5 in all bands) for any course.' },
    toefl: { min: null, recommended: null, scales: [{ period: 'pre2026', min: 95, recommended: null }, { period: 'post2026', min: 5, recommended: null }], note: 'Profile B: TOEFL iBT 95 overall (Reading 22, Listening 21, Speaking 23, Writing 24) for tests up to 20 January 2026, or 5 overall with 5 in writing and 4.5 in other skills from 21 January 2026. Other profiles differ.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed for undergraduate entry during this check.' },
    waiver: 'Bristol lists qualifications taught in English that meet the requirement without a test; the list is on the language requirements pages.',
    note: 'Test results must normally be obtained within two years of the course start date. Pearson PTE and Cambridge C1 Advanced / C2 Proficiency are accepted at profile-specific levels.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Bristol admits on school-leaving qualifications (A-levels, IB and recognised international qualifications) rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT; some other courses set additional tests.',
    internationalQualifications: 'A published list of accepted international qualifications and grades applies; the required grades are on each course page.'
  },
  costs: {
    breakdown: { tuition: 25500, tuitionText: '£25,500–£33,400 (most courses)', includes: 'the overseas tuition band for the course; medicine, dentistry and veterinary science are charged separately and living costs are extra' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: '£25,500–£33,400 tuition (most courses)',
    items: [
      { label: 'Tuition — humanities and social sciences band', amount: 25500 },
      { label: 'Tuition — arts, economics and business band', amount: 28200 },
      { label: 'Tuition — science and engineering band', amount: 31300 },
      { label: 'Tuition — computer science, aerospace, biochemistry and similar', amount: 33400 },
      { label: 'Tuition — Medicine (MBChB)', amount: 45800 },
      { label: 'Tuition — Veterinary Science (BVSc)', amount: 41900 },
      { label: 'Tuition — Dentistry (BDS)', amount: 49700 }
    ],
    billedSubtotal: null,
    totalText: '£25,500–£49,700 tuition depending on the course, for students starting in 2026/27',
    note: 'These are the rates for students starting in 2026/27; the 2027/28 rates had not been published when this was checked. Living costs are additional.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'Bristol\'s international undergraduate awards are partial: the Think Big scholarships reduce tuition but do not cover the whole cost of study.' },
    merit: [
      { name: 'Think Big undergraduate scholarship', amount: '£6,500 or £13,000 a year for up to four years (tuition reduction)', eligibility: 'International (overseas-fee) applicants holding an application for an eligible undergraduate course. Courses in the Bristol Dental School and Bristol Medical School are not eligible.', deadline: 'The round for September 2026 entry opened on 21 October 2025 and closed on 10 April 2026 at 10:00 UK time; the 2027-entry round had not opened when this was checked', application: 'Separate scholarship form after applying for admission', renewable: true, note: 'One form covers the scholarships. Outcomes for the 2026 round were shared in late May 2026.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Bristol\'s means-tested bursaries are for home-fee students; a need-based scheme for international undergraduates was not confirmed here.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements and profiles', url: 'https://www.bristol.ac.uk/study/language-requirements/' },
    { label: 'English language Profile B', url: 'https://www.bristol.ac.uk/study/language-requirements/profile-b/' },
    { label: 'Overseas undergraduate tuition fees, 2026/27 starters', url: 'https://www.bristol.ac.uk/students/support/finances/tuition-fees/ug/overseas/26-27/2026-starters/' },
    { label: 'Scholarships for international students', url: 'https://www.bristol.ac.uk/international/fees-finance/scholarships/' }
  ],
  verification: { level: 'partial', checked: ['english','tuition','scholarships','rounds','application fee'], unconfirmed: ['2027/28 tuition rates','need-based aid for international students'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-glasgow',
  name: 'University of Glasgow',
  shortName: 'Glasgow',
  country: 'uk',
  city: 'Glasgow',
  region: 'Scotland',
  type: 'Public research university',
  brand: { c1: '#003865', c2: '#001c33', initials: 'GLA' },
  description: "One of Scotland's ancient universities, teaching a full range of subjects from medicine and engineering to arts and social sciences. Scottish degrees usually run four years, and international fees are published in two main bands.",
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  englishTaughtPrograms: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  programNote: 'Scottish honours degrees normally take four years, with a broader first two years than in England.',
  links: {
    website: 'https://www.gla.ac.uk/',
    admissions: 'https://www.gla.ac.uk/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.gla.ac.uk/undergraduate/fees/scholarships/',
    cost: 'https://www.gla.ac.uk/undergraduate/fees/intlfees/',
    english: 'https://www.gla.ac.uk/international/englishlanguage/requirements/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry, veterinary medicine, nursing and education.',
    notes: ['Glasgow states that the English requirement is set in each programme\'s entry requirements, so the figure below is one confirmed example rather than a university-wide rule.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the programme. Confirmed example: the BSc Computing Science page for 2027 entry requires IELTS 6.5 overall with no sub-test below 6.0. Other programmes set their own level.' },
    toefl: { min: null, recommended: null, scales: [{ period: 'pre2026', min: 90, recommended: null }, { period: 'post2026', min: 92, recommended: null }], note: 'Computing Science example: TOEFL iBT 90 overall for tests taken before 21 January 2026, or 92 from that date. Reports must be under two years old.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed for undergraduate entry during this check.' },
    waiver: 'Glasgow accepts a range of school qualifications taught in English in place of a test; the accepted list is published with the English language requirements.',
    note: 'Pearson PTE 59 with 59 in all sub-tests and Cambridge CAE/CPE 176 overall (no sub-test below 169) are accepted for the Computing Science example. Applicants must meet the overall and sub-test scores in a single test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Glasgow admits on school-leaving qualifications such as A-levels, Scottish Highers and the IB; the SAT and ACT are not the basis of selection.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAS-registered UCAT; law asks for the LNAT for some routes.',
    internationalQualifications: 'Confirmed example for Computing Science (2027 entry): A-levels AAA–AAB including Mathematics, or IB 38 points with HL6 in Mathematics (Analysis and Approaches).'
  },
  costs: {
    breakdown: { tuition: 28275, tuitionText: '£28,275–£33,708', includes: 'the international tuition band for the subject in 2027–28; living costs are extra' },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: '£28,275–£33,708 tuition',
    items: [
      { label: 'Tuition — arts and social sciences (2027/28)', amount: 28275 },
      { label: 'Tuition — science, engineering, nursing, medical and life sciences (2027/28)', amount: 33708 },
      { label: 'Tuition — Veterinary Medicine and Surgery BVMS (2027/28)', amount: 38670 },
      { label: 'Tuition — Medicine (MBChB) and Dentistry (BDS), 2027/28', text: 'Published as "to be confirmed" when this was checked; the 2026/27 rates were £62,730 and £58,500' }
    ],
    billedSubtotal: null,
    totalText: '£28,275–£38,670 tuition for 2027/28, with medicine and dentistry still to be confirmed',
    note: 'Glasgow publishes international fees by band for each academic year. Living costs are not included.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International undergraduate tuition fees', url: 'https://www.gla.ac.uk/undergraduate/fees/intlfees/' },
    { label: 'Computing Science BSc — entry requirements for 2027 entry', url: 'https://www.gla.ac.uk/undergraduate/degrees/computingscience/' },
    { label: 'English language requirements', url: 'https://www.gla.ac.uk/international/englishlanguage/requirements/' }
  ],
  verification: { level: 'partial', checked: ['tuition','english (one programme)','academic requirements (one programme)','rounds','application fee'], unconfirmed: ['university-wide English minimum','scholarships for international undergraduates','2027/28 medicine and dentistry fees'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-st-andrews',
  name: 'University of St Andrews',
  shortName: 'St Andrews',
  country: 'uk',
  city: 'St Andrews',
  region: 'Scotland',
  type: 'Public ancient university',
  brand: { c1: '#00539b', c2: '#002a54', initials: 'STA' },
  description: "Scotland's oldest university, in a small coastal town in Fife, known for arts, international relations and sciences. Degrees usually run four years and English requirements are set by faculty profile.",
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','business','computer-science','mathematics','biology','medicine','arts','economics'],
  englishTaughtPrograms: ['humanities','social-sciences','business','computer-science','mathematics','biology','medicine','arts','economics'],
  programNote: 'St Andrews teaches a broad four-year Scottish degree; medicine is taught partly with partner universities.',
  links: {
    website: 'https://www.st-andrews.ac.uk/',
    admissions: 'https://www.st-andrews.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.st-andrews.ac.uk/study/fees-and-funding/undergraduate/scholarships/',
    cost: 'https://www.st-andrews.ac.uk/study/undergraduate/fees/world/',
    english: 'https://www.st-andrews.ac.uk/subjects/entry/language-requirements/undergraduate/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are required for medicine; most other subjects do not interview.',
    notes: ['English requirements are set by faculty profile (Arts and Divinity, Science, Medicine and the School of English each use a different profile).']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the faculty. St Andrews assigns each subject group a language profile — Arts and Divinity use Profile 3-D, the School of English Profile 1-D, Medicine Profile 2-M and Science Profile 7-D — and publishes the scores on the profile pages. The individual profile figures were not read during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the score depends on the faculty profile. Figures not confirmed here.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'UK nationals, nationals of UKVI majority English-speaking countries, applicants with English-medium secondary qualifications from approved schools, and students who finish the St Andrews International Foundation programme do not need a test.',
    note: 'Test scores are normally accepted only if obtained within two years of the programme start date.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is on school-leaving qualifications; the SAT and ACT are not the basis of admission.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine requires the UCAT.',
    internationalQualifications: 'A-levels, Scottish Highers, the IB and a published list of international qualifications are accepted; grades are set per subject.'
  },
  costs: {
    breakdown: { tuition: 33250, includes: 'tuition for students from the rest of the world in 2026–27; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: '£33,250 tuition (arts, divinity, science)',
    items: [
      { label: 'Tuition — Arts, Divinity or Science (2026/27)', amount: 33250 },
      { label: 'Tuition — Medicine (2026/27 entrants)', amount: 39620 }
    ],
    billedSubtotal: null,
    totalText: '£33,250 for arts, divinity and science, £39,620 for medicine, for 2026/27 entrants',
    note: 'St Andrews states that fees are adjusted annually, typically by 3–5%. The 2027/28 rates were not published when this was checked.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate tuition fees — rest of the world', url: 'https://www.st-andrews.ac.uk/study/undergraduate/fees/world/' },
    { label: 'Undergraduate English language requirements', url: 'https://www.st-andrews.ac.uk/subjects/entry/language-requirements/undergraduate/' }
  ],
  verification: { level: 'partial', checked: ['tuition','english policy structure','rounds','application fee'], unconfirmed: ['exact IELTS scores per profile','scholarships','2027/28 fees'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-sheffield',
  name: 'University of Sheffield',
  shortName: 'Sheffield',
  country: 'uk',
  city: 'Sheffield',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#131e29', c2: '#0a1118', initials: 'SHE' },
  description: 'A large civic research university in northern England with strong engineering, science and social-science faculties. It publishes a university-wide minimum English level and a fee range for overseas undergraduates.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','medicine','business','law','humanities','social-sciences','biology','mathematics','psychology','arts','economics'],
  englishTaughtPrograms: ['engineering','computer-science','medicine','business','law','humanities','social-sciences','biology','mathematics','psychology','arts','economics'],
  programNote: 'Departments may set English or grade requirements above the university minimum; the course page states which applies.',
  links: {
    website: 'https://www.sheffield.ac.uk/',
    admissions: 'https://www.sheffield.ac.uk/undergraduate',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://sheffield.ac.uk/international/fees-and-funding',
    cost: 'https://sheffield.ac.uk/international/fees-and-funding/tuition-fees',
    english: 'https://sheffield.ac.uk/undergraduate/apply/english-language'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and a few other courses.',
    notes: ['The university minimum is IELTS 6.0; many departments ask for more, so check the course page before booking a test.']
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'University-wide minimum for undergraduate entry: IELTS Academic 6.0 overall with 5.5 in each component. Some departments require a higher score, published in the online prospectus. IELTS Online and IELTS One Skill Retake are accepted.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course and was not read during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Sheffield lists school qualifications taught in English that meet the requirement without a separate test.',
    note: 'IELTS tests must have been completed no more than two years before the course start date. Sheffield accepts IELTS Academic on paper or computer, IELTS for UKVI Academic, IELTS Online and IELTS One Skill Retake.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT.',
    internationalQualifications: 'A published list of international qualifications is accepted, with grades set per course.'
  },
  costs: {
    breakdown: { tuition: 27650, tuitionText: '£27,650–£34,670', includes: 'the overseas tuition rate for the course in 2027/28, excluding medicine and dentistry; living costs are extra' },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: '£27,650–£34,670 tuition',
    items: [
      { label: 'Tuition — new overseas undergraduates, 2027/28 (except medicine and dentistry)', text: '£27,650 – £34,670 depending on the course' }
    ],
    billedSubtotal: null,
    totalText: '£27,650–£34,670 a year, fixed at the first-year rate for the length of the course',
    note: 'Sheffield states that the fee paid in the first year applies to every year of the course. Medicine and dentistry are charged separately.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition fees for international students', url: 'https://sheffield.ac.uk/international/fees-and-funding/tuition-fees' },
    { label: 'English language requirements for undergraduates', url: 'https://sheffield.ac.uk/undergraduate/apply/english-language' }
  ],
  verification: { level: 'partial', checked: ['english','tuition range','rounds','application fee'], unconfirmed: ['scholarships','medicine and dentistry fees'] },
  lastVerified: '2026-09-23'
},

{
  id: 'durham-university',
  name: 'Durham University',
  shortName: 'Durham',
  country: 'uk',
  city: 'Durham',
  region: 'England',
  type: 'Public collegiate research university',
  brand: { c1: '#68246d', c2: '#3a1440', initials: 'DUR' },
  description: 'A collegiate research university in north-east England where every student belongs to a college alongside their academic department. Courses span arts, sciences, engineering and business.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','business','computer-science','engineering','law','mathematics','biology','psychology','economics','arts'],
  englishTaughtPrograms: ['humanities','social-sciences','business','computer-science','engineering','law','mathematics','biology','psychology','economics','arts'],
  programNote: 'Students apply to a course and are also allocated to a college, which provides accommodation and student life rather than teaching.',
  links: {
    website: 'https://www.durham.ac.uk/',
    admissions: 'https://www.durham.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.durham.ac.uk/study/international/fees-and-funding-/',
    cost: 'https://www.durham.ac.uk/study/undergraduate/fees-and-funding/tuition-fees/',
    english: 'https://www.durham.ac.uk/study/international/entry-requirements/english-language-requirements/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for a small number of courses; most admit on the UCAS application.',
    notes: ['Durham states that the level required depends on the course, so the range below is not a single guaranteed minimum.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the course. Durham states that many undergraduate courses require IELTS 6.5-7.0 overall with no element below 6.0; the exact level is set in each course entry requirement.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the level depends on the course and was not read during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Durham publishes a list of qualifications taught in English that meet the requirement without a test.',
    note: 'Applicants below the level can take a pre-sessional English course whose length depends on the score.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'No university-wide admissions test; a few courses set subject tests.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements', url: 'https://www.durham.ac.uk/study/international/entry-requirements/english-language-requirements/' },
    { label: 'Undergraduate tuition fees', url: 'https://www.durham.ac.uk/study/undergraduate/fees-and-funding/tuition-fees/' }
  ],
  verification: { level: 'partial', checked: ['english (range)','rounds','application fee'], unconfirmed: ['exact IELTS per course','tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-leeds',
  name: 'University of Leeds',
  shortName: 'Leeds',
  country: 'uk',
  city: 'Leeds',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#7f7f7f', c2: '#3f3f3f', initials: 'LEE' },
  description: 'A large civic university in northern England with one of the widest course ranges in the UK, from engineering and medicine to media and languages.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','business','medicine','law','humanities','social-sciences','biology','mathematics','psychology','arts','economics'],
  englishTaughtPrograms: ['engineering','computer-science','business','medicine','law','humanities','social-sciences','biology','mathematics','psychology','arts','economics'],
  programNote: 'Course pages state both the academic grades and the English level required, which can be above the university minimum.',
  links: {
    website: 'https://www.leeds.ac.uk/',
    admissions: 'https://www.leeds.ac.uk/undergraduate',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.leeds.ac.uk/international-fees-costs',
    cost: 'https://www.leeds.ac.uk/undergraduate-fees',
    english: 'https://www.leeds.ac.uk/international-applying/doc/entry-requirements'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and some healthcare courses.',
    notes: ['Some courses require more than the university minimum; the course page states which.']
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'University minimum for undergraduate entry: IELTS Academic or IELTS for UKVI (Academic) 6.0 overall with no component below 5.5. Many courses require a higher score.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Qualifications taught in English are accepted in place of a test in the cases Leeds lists.',
    note: 'IELTS results must not be more than two years old at the course start date.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Entry requirements for international applicants', url: 'https://www.leeds.ac.uk/international-applying/doc/entry-requirements' },
    { label: 'International fees and costs', url: 'https://www.leeds.ac.uk/international-fees-costs' }
  ],
  verification: { level: 'partial', checked: ['english minimum','rounds','application fee'], unconfirmed: ['tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-nottingham',
  name: 'University of Nottingham',
  shortName: 'Nottingham',
  country: 'uk',
  city: 'Nottingham',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#005e8e', c2: '#00344f', initials: 'NOT' },
  description: 'A large research university with a parkland campus in the English Midlands and partner campuses in China and Malaysia. Subjects range from engineering and medicine to business and the arts.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','business','medicine','law','humanities','social-sciences','biology','mathematics','psychology','economics','arts'],
  englishTaughtPrograms: ['engineering','computer-science','business','medicine','law','humanities','social-sciences','biology','mathematics','psychology','economics','arts'],
  programNote: 'Degrees are also offered at the campuses in China and Malaysia, which have their own fees and admission routes.',
  links: {
    website: 'https://www.nottingham.ac.uk/',
    admissions: 'https://www.nottingham.ac.uk/studywithus/ugstudy/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.nottingham.ac.uk/studywithus/international-applicants/',
    cost: 'https://www.nottingham.ac.uk/fees/tuitionfees/202627/undergraduate.aspx',
    english: 'https://www.nottingham.ac.uk/studywithus/international-applicants/english-language/english-language-requirements.aspx'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, veterinary medicine and some healthcare courses.',
    notes: ['Nottingham states that a proposed UK government levy on international fees, if introduced, would be added to tuition.']
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'University minimum for undergraduate entry: IELTS 6.0 with no element below 5.5. Requirements vary by course and the level that applies is stated in the offer.' },
    toefl: { min: null, recommended: null, scales: [], note: 'TOEFL iBT is accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Nottingham recognises a range of qualifications as evidence of English; the list is published with the requirements.',
    note: 'Pearson PTE Academic is also accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine requires the UCAT; veterinary medicine has its own selection process.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements for international students', url: 'https://www.nottingham.ac.uk/studywithus/international-applicants/english-language/english-language-requirements.aspx' },
    { label: 'Undergraduate tuition fees 2026/27', url: 'https://www.nottingham.ac.uk/fees/tuitionfees/202627/undergraduate.aspx' }
  ],
  verification: { level: 'partial', checked: ['english minimum','rounds','application fee'], unconfirmed: ['tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'lancaster-university',
  name: 'Lancaster University',
  shortName: 'Lancaster',
  country: 'uk',
  city: 'Lancaster',
  region: 'England',
  type: 'Public collegiate research university',
  brand: { c1: '#b5121b', c2: '#6b0a10', initials: 'LAN' },
  description: 'A collegiate campus university in north-west England, strong in management, computing, environmental science and physics, with a compact campus outside the city.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','computer-science','engineering','social-sciences','humanities','mathematics','biology','psychology','economics','arts'],
  englishTaughtPrograms: ['business','computer-science','engineering','social-sciences','humanities','mathematics','biology','psychology','economics','arts'],
  programNote: 'Every student joins a college, which organises accommodation and student life; teaching is by department.',
  links: {
    website: 'https://www.lancaster.ac.uk/',
    admissions: 'https://www.lancaster.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.lancaster.ac.uk/study/fees-and-funding/',
    cost: 'https://www.lancaster.ac.uk/study/undergraduate/fees-and-funding/',
    english: 'https://www.lancaster.ac.uk/study/entry-requirements/undergraduate-english-requirements/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Most courses admit without an interview.',
    notes: ['Lancaster states that international tuition will not rise by more than 4% a year during a programme.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the course. Lancaster states that many undergraduate programmes require IELTS 6.5 overall with at least 5.5 in each component; the course page gives the exact level.' },
    toefl: { min: null, recommended: null, scales: [], note: 'TOEFL is accepted; the score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Lancaster lists qualifications taught in English that are accepted instead of a test.',
    note: 'IELTS, TOEFL, Pearson and LanguageCert certificates are valid for two years from the test date and must still be valid on the start date. A ten-week pre-sessional English course is available for applicants slightly below the level.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'No university-wide admissions test.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements for undergraduate applicants', url: 'https://www.lancaster.ac.uk/study/entry-requirements/undergraduate-english-requirements/' },
    { label: 'Fees and funding', url: 'https://www.lancaster.ac.uk/study/fees-and-funding/' }
  ],
  verification: { level: 'partial', checked: ['english (typical level)','rounds','application fee'], unconfirmed: ['exact IELTS per course','tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'newcastle-university',
  name: 'Newcastle University',
  shortName: 'Newcastle',
  country: 'uk',
  city: 'Newcastle upon Tyne',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#00707f', c2: '#00434c', initials: 'NCL' },
  description: 'A civic research university in north-east England with a city-centre campus, known for medicine, engineering, computing and marine sciences.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  englishTaughtPrograms: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  programNote: 'Newcastle also runs a medical campus in Malaysia with separate admission.',
  links: {
    website: 'https://www.ncl.ac.uk/',
    admissions: 'https://www.ncl.ac.uk/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.ncl.ac.uk/international/fees-funding/',
    cost: 'https://www.ncl.ac.uk/undergraduate/fees-funding/tuition-fees/',
    english: 'https://www.ncl.ac.uk/international/language/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and some healthcare courses.',
    notes: ['Course pages state where a higher overall or sub-score is needed.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'Typical undergraduate requirement: IELTS Academic or IELTS for UKVI (Academic) 6.5 overall with at least 5.5 in each sub-skill. Individual course pages list higher requirements where they apply.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Newcastle accepts a range of English-medium qualifications in place of a test.',
    note: 'For visa purposes Newcastle states that tests are valid if taken within three years of the course start and must be verifiable on the official test website.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements for international students', url: 'https://www.ncl.ac.uk/international/language/' },
    { label: 'Undergraduate tuition fees', url: 'https://www.ncl.ac.uk/undergraduate/fees-funding/tuition-fees/' }
  ],
  verification: { level: 'partial', checked: ['english (typical level)','rounds','application fee'], unconfirmed: ['tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'queen-mary-university-of-london',
  name: 'Queen Mary University of London',
  shortName: 'Queen Mary',
  country: 'uk',
  city: 'London',
  region: 'England',
  type: 'Public research university (University of London)',
  brand: { c1: '#003366', c2: '#001a33', initials: 'QMU' },
  description: 'A research university in east London with a main campus in Mile End, teaching medicine, law, engineering, science and humanities.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','law','engineering','computer-science','business','humanities','social-sciences','biology','mathematics','psychology','economics'],
  englishTaughtPrograms: ['medicine','law','engineering','computer-science','business','humanities','social-sciences','biology','mathematics','psychology','economics'],
  programNote: 'English requirements are organised in bands, and each programme states the band it uses.',
  links: {
    website: 'https://www.qmul.ac.uk/',
    admissions: 'https://www.qmul.ac.uk/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.qmul.ac.uk/international-students/tuitionfees/',
    cost: 'https://www.qmul.ac.uk/undergraduate/feesandfunding/tuitionfees/',
    english: 'https://www.qmul.ac.uk/international-students/englishlanguagerequirements/undergraduate-and-postgraduate-programmes/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and a few other programmes.',
    notes: ['Queen Mary charges an international tuition deposit before enrolment.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the programme band. Confirmed examples: Band 4 requires IELTS Academic 6.5 overall with 6.0 in each skill; Band 5 requires 7.0 overall with 6.0 in each skill. Only the Academic test (standard or UKVI) is accepted - the General test is not.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the score depends on the programme band.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Queen Mary lists qualifications taught in English that meet the requirement without a test.',
    note: 'Queen Mary considers the IELTS Academic, IELTS Online and IELTS Indicator tests. Results must be no more than two years old at the course start date.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements for undergraduate and postgraduate programmes', url: 'https://www.qmul.ac.uk/international-students/englishlanguagerequirements/undergraduate-and-postgraduate-programmes/' },
    { label: 'Undergraduate tuition fees', url: 'https://www.qmul.ac.uk/undergraduate/feesandfunding/tuitionfees/' }
  ],
  verification: { level: 'partial', checked: ['english bands','rounds','application fee'], unconfirmed: ['tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-southampton',
  name: 'University of Southampton',
  shortName: 'Southampton',
  country: 'uk',
  city: 'Southampton',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#8e2244', c2: '#4d1224', initials: 'SOU' },
  description: 'A research university on the south coast of England, known for engineering, computer science, medicine and ocean and earth science.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','medicine','business','humanities','social-sciences','biology','mathematics','psychology','law','arts'],
  englishTaughtPrograms: ['engineering','computer-science','medicine','business','humanities','social-sciences','biology','mathematics','psychology','law','arts'],
  programNote: 'Each course is assigned an English language band (A to I) with an IELTS equivalent, stated in the offer letter.',
  links: {
    website: 'https://www.southampton.ac.uk/',
    admissions: 'https://www.southampton.ac.uk/study/undergraduate',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.southampton.ac.uk/study/fees-funding',
    cost: 'https://www.southampton.ac.uk/courses/fees/undergraduate.page',
    english: 'https://www.southampton.ac.uk/international/english-language-requirements'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine and some healthcare courses.',
    notes: ['The English band that applies is confirmed in the offer letter, so check it before booking a test.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the course. Southampton assigns each course an English band (A to I) with an IELTS Academic equivalent; the published example for some education programmes is IELTS 6.5 with at least 5.5 in each element. The band that applies is stated in the offer letter.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Southampton accepts qualifications taught in English in place of a test in cases it lists.',
    note: 'Applicants who do not meet the level can take a pre-sessional English course.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine requires the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements', url: 'https://www.southampton.ac.uk/international/english-language-requirements' },
    { label: 'Undergraduate tuition fees', url: 'https://www.southampton.ac.uk/courses/fees/undergraduate.page' }
  ],
  verification: { level: 'partial', checked: ['english band system','rounds','application fee'], unconfirmed: ['exact IELTS per band','tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-birmingham',
  name: 'University of Birmingham',
  shortName: 'Birmingham',
  country: 'uk',
  city: 'Birmingham',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#1b3b6f', c2: '#0d1f3c', initials: 'BIR' },
  description: 'A large civic research university with a single campus in the second city of England, teaching medicine, engineering, business, law and the humanities.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','economics','arts'],
  englishTaughtPrograms: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','economics','arts'],
  programNote: 'Birmingham also runs a campus in Dubai with separate fees and admission.',
  links: {
    website: 'https://www.birmingham.ac.uk/',
    admissions: 'https://www.birmingham.ac.uk/study/undergraduate',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.birmingham.ac.uk/study/international/fees',
    cost: 'https://www.birmingham.ac.uk/study/undergraduate/fees-funding/tuition',
    english: 'https://www.birmingham.ac.uk/study/international'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and some healthcare courses.',
    notes: ['Birmingham states that applicants for 2027 entry will be told the annual tuition fee closer to the time; the 2027 rates were not published when this was checked.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check. Birmingham states that applicants can demonstrate English with IELTS, TOEFL, PTE or an alternative qualification, and publishes the required score on each course page.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Birmingham lists qualifications taught in English that are accepted in place of a test.',
    note: 'The level required is published with each course.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'Birmingham had not published 2027-entry international fees when this was checked' },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: 'Tuition for 2027 entry not yet published',
    items: [ { label: 'Tuition (Overseas rate, 2027 entry)', text: 'Birmingham states that applicants for 2027 entry will be advised of the annual fee closer to the time' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — 2027 rates not published',
    note: 'Fees differ by course and are confirmed in the offer letter.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International fees', url: 'https://www.birmingham.ac.uk/study/international/fees' },
    { label: 'Undergraduate tuition fees', url: 'https://www.birmingham.ac.uk/study/undergraduate/fees-funding/tuition' }
  ],
  verification: { level: 'partial', checked: ['rounds','application fee','fee publication status'], unconfirmed: ['IELTS requirement','tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-york',
  name: 'University of York',
  shortName: 'York',
  country: 'uk',
  city: 'York',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#00352f', c2: '#001a17', initials: 'YOR' },
  description: 'A campus university in northern England with a college system, teaching sciences, social sciences, humanities and management.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['computer-science','engineering','business','social-sciences','humanities','biology','mathematics','psychology','economics','law','arts'],
  englishTaughtPrograms: ['computer-science','engineering','business','social-sciences','humanities','biology','mathematics','psychology','economics','law','arts'],
  programNote: 'York states that English requirements are set by academic department, so they vary across courses.',
  links: {
    website: 'https://www.york.ac.uk/',
    admissions: 'https://www.york.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.york.ac.uk/study/undergraduate/fees-funding/international/scholarships/',
    cost: 'https://www.york.ac.uk/study/undergraduate/fees-funding/international/',
    english: 'https://www.york.ac.uk/study/international/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Most courses admit without an interview.',
    notes: ['York states that tuition in later years rises in line with CPI inflation, capped at 10%.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the department. York accepts IELTS and TOEFL iBT among other tests, and publishes the required score with each course; no single university-wide minimum was confirmed here.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'York lists qualifications taught in English that are accepted instead of a test.',
    note: 'Requirements vary by academic department.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'No university-wide admissions test.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International tuition fees', url: 'https://www.york.ac.uk/study/undergraduate/fees-funding/international/' },
    { label: 'International students', url: 'https://www.york.ac.uk/study/international/' }
  ],
  verification: { level: 'partial', checked: ['rounds','application fee','fee structure'], unconfirmed: ['IELTS requirement','tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-exeter',
  name: 'University of Exeter',
  shortName: 'Exeter',
  country: 'uk',
  city: 'Exeter',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#00543a', c2: '#00301f', initials: 'EXE' },
  description: 'A research university in south-west England with campuses in Exeter and Cornwall, strong in business, environmental science and the humanities.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','humanities','social-sciences','biology','computer-science','engineering','mathematics','psychology','law','arts','medicine'],
  englishTaughtPrograms: ['business','economics','humanities','social-sciences','biology','computer-science','engineering','mathematics','psychology','law','arts','medicine'],
  programNote: 'Courses are assigned an English language profile; the profile pages give the exact scores.',
  links: {
    website: 'https://www.exeter.ac.uk/',
    admissions: 'https://www.exeter.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.exeter.ac.uk/study/funding/undergraduate/',
    cost: 'https://www.exeter.ac.uk/international-students/tuition-fees/',
    english: 'https://www.exeter.ac.uk/study/englishlanguagerequirements/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine and a few other courses.',
    notes: ['For a student visa Exeter states that applicants must show living costs of at least £1,171 a month for nine months (£10,539).']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the course profile. Exeter groups courses into English language profiles (for example B1, B2, E and F) and publishes the required scores on each profile page; the individual figures were not read during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Exeter accepts qualifications taught in English in place of a test in listed cases.',
    note: 'IELTS results are valid for two years before the start of the programme.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'No university-wide admissions test; medicine requires the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements and profiles', url: 'https://www.exeter.ac.uk/study/englishlanguagerequirements/' },
    { label: 'Tuition fees for international students', url: 'https://www.exeter.ac.uk/international-students/tuition-fees/' }
  ],
  verification: { level: 'partial', checked: ['english profile system','living-cost requirement','rounds','application fee'], unconfirmed: ['exact IELTS per profile','tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-bath',
  name: 'University of Bath',
  shortName: 'Bath',
  country: 'uk',
  city: 'Bath',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#9b1b30', c2: '#5a0f1c', initials: 'BAT' },
  description: 'A campus university in south-west England known for engineering, management and placement-based degrees with a year in industry.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','business','computer-science','mathematics','social-sciences','biology','psychology','economics','humanities'],
  englishTaughtPrograms: ['engineering','business','computer-science','mathematics','social-sciences','biology','psychology','economics','humanities'],
  programNote: 'Many Bath degrees include a placement year in industry or a year abroad, which changes the length and the fee for that year.',
  links: {
    website: 'https://www.bath.ac.uk/',
    admissions: 'https://www.bath.ac.uk/topics/undergraduate-study-2026/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.bath.ac.uk/guides/bath-international-excellence-scholarship/',
    cost: 'https://www.bath.ac.uk/corporate-information/tuition-fees-for-undergraduate-students-starting-in-2027/',
    english: 'https://www.bath.ac.uk/corporate-information/entry-requirements-for-international-students/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for a small number of courses.',
    notes: ['Bath advises international applicants to budget for an increase of up to 8% in each year of the course.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Depends on the course category (A, B or C). A published course example requires IELTS 6.5 overall with no less than 6.0 in all components. Test results must be no more than 24 months old at the start of the course.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Bath accepts listed school qualifications taught in English in place of a test.',
    note: 'Qualifications used to meet the English requirement must have been achieved no more than 24 months before the course starts.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'No university-wide admissions test.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2027–2028',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Entry requirements for international students', url: 'https://www.bath.ac.uk/corporate-information/entry-requirements-for-international-students/' },
    { label: 'Tuition fees for undergraduate students starting in 2027', url: 'https://www.bath.ac.uk/corporate-information/tuition-fees-for-undergraduate-students-starting-in-2027/' }
  ],
  verification: { level: 'partial', checked: ['english (course example and validity)','rounds','application fee'], unconfirmed: ['exact IELTS per category','tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'cardiff-university',
  name: 'Cardiff University',
  shortName: 'Cardiff',
  country: 'uk',
  city: 'Cardiff',
  region: 'Wales',
  type: 'Public research university',
  brand: { c1: '#d50032', c2: '#7a001d', initials: 'CAR' },
  description: 'The largest university in Wales, with medicine, engineering, journalism, business and a wide range of arts and sciences.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  englishTaughtPrograms: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  programNote: 'Cardiff is part of the Welsh university system but applications still go through UCAS on the same dates as the rest of the UK.',
  links: {
    website: 'https://www.cardiff.ac.uk/',
    admissions: 'https://www.cardiff.ac.uk/study/undergraduate',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.cardiff.ac.uk/study/international/funding-and-fees',
    cost: 'https://www.cardiff.ac.uk/study/undergraduate/tuition-fees/overseas-undergraduate-fees',
    english: 'https://www.cardiff.ac.uk/study/international/english-language-requirements'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and healthcare courses.',
    notes: ['Cardiff accepts all IELTS Academic tests from any test centre, including the One Skill Retake; the UKVI version is not required for undergraduate courses.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'University minimum: IELTS Academic 6.5 overall with at least 5.5 in each sub-skill (or GCSE English at grade C/4). Admissions tutors may ask for higher scores on some courses. All IELTS Academic tests, including the One Skill Retake, are accepted; IELTS for UKVI is not required for undergraduate courses.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'GCSE English at grade C/4 and other listed qualifications meet the requirement without a separate test.',
    note: 'Higher scores apply to some courses, especially in medicine and healthcare.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements', url: 'https://www.cardiff.ac.uk/study/international/english-language-requirements' },
    { label: 'Overseas undergraduate fees', url: 'https://www.cardiff.ac.uk/study/undergraduate/tuition-fees/overseas-undergraduate-fees' }
  ],
  verification: { level: 'partial', checked: ['english minimum and accepted IELTS versions','rounds','application fee'], unconfirmed: ['tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-aberdeen',
  name: 'University of Aberdeen',
  shortName: 'Aberdeen',
  country: 'uk',
  city: 'Aberdeen',
  region: 'Scotland',
  type: 'Public ancient university',
  brand: { c1: '#0d5257', c2: '#06292b', initials: 'ABD' },
  description: "One of Scotland's ancient universities, in the north-east of the country, with medicine, law, engineering, energy-related sciences and a broad four-year degree structure.",
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','law','engineering','business','humanities','social-sciences','biology','computer-science','mathematics','psychology','economics'],
  englishTaughtPrograms: ['medicine','law','engineering','business','humanities','social-sciences','biology','computer-science','mathematics','psychology','economics'],
  programNote: 'Aberdeen offers a self-funded international rate that already includes its Global Scholarship discount.',
  links: {
    website: 'https://www.abdn.ac.uk/',
    admissions: 'https://www.abdn.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.abdn.ac.uk/study/international/',
    cost: 'https://www.abdn.ac.uk/students/finance/tuition-fees/tuition-fee-rates/',
    english: 'https://www.abdn.ac.uk/study/international/undergraduate-degrees-english-requirements-268.php'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine and dentistry.',
    notes: ['The published self-funded rate already includes the £6,000 Aberdeen Global Scholarship, so it is a discounted price rather than a separate award to apply for.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check. Aberdeen publishes standard undergraduate English requirements on its international pages and sets a higher level for Medicine (MBChB).' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Aberdeen lists qualifications taught in English that meet the requirement without a test.',
    note: 'Medicine requires a higher level of English than other undergraduate degrees.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine requires the UCAT.',
    internationalQualifications: 'A-levels, Scottish Highers, the IB and a published list of international qualifications are accepted.'
  },
  costs: {
    breakdown: { tuition: 24800, includes: 'the published international undergraduate rate for 2026/27; the self-funded rate of £18,800 already includes the £6,000 Aberdeen Global Scholarship' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: '£24,800 tuition (£18,800 self-funded rate)',
    items: [
      { label: 'Tuition — EU/international rate (2026/27)', amount: 24800 },
      { label: 'Tuition — self-funded rate after the Aberdeen Global Scholarship (2026/27)', amount: 18800 }
    ],
    billedSubtotal: null,
    totalText: '£24,800 a year, or £18,800 for self-funded students after the £6,000 Aberdeen Global Scholarship',
    note: 'Living costs are extra. Medicine and some other programmes are charged at different rates.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'The Aberdeen Global Scholarship is a tuition discount, not a full scholarship.' },
    merit: [
      { name: 'Aberdeen Global Scholarship', amount: '£6,000 a year off tuition (already reflected in the published self-funded rate)', eligibility: 'Self-funded international undergraduates, as published in the 2026/27 fee rates', deadline: null, application: 'Applied automatically to the self-funded rate', renewable: null, note: 'Confirmed only from the published fee table; the full scholarship conditions were not read during this check.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition fee rates', url: 'https://www.abdn.ac.uk/students/finance/tuition-fees/tuition-fee-rates/' },
    { label: 'Undergraduate degrees — English requirements', url: 'https://www.abdn.ac.uk/study/international/undergraduate-degrees-english-requirements-268.php' }
  ],
  verification: { level: 'partial', checked: ['tuition','scholarship discount','rounds','application fee'], unconfirmed: ['IELTS requirement','full scholarship conditions'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-liverpool',
  name: 'University of Liverpool',
  shortName: 'Liverpool',
  country: 'uk',
  city: 'Liverpool',
  region: 'England',
  type: 'Public research university',
  brand: { c1: '#0f52ba', c2: '#08307a', initials: 'LIV' },
  description: 'A civic research university in north-west England with medicine, veterinary science, engineering and a large international student body.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  englishTaughtPrograms: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  programNote: 'Liverpool also has a joint venture university in China (XJTLU) with its own admission route.',
  links: {
    website: 'https://www.liverpool.ac.uk/',
    admissions: 'https://www.liverpool.ac.uk/study/undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.liverpool.ac.uk/international/scholarships-and-fees/',
    cost: 'https://www.liverpool.ac.uk/international/scholarships-and-fees/tuition-fees/',
    english: 'https://www.liverpool.ac.uk/international/applying/entry-requirements/english-language-requirements/international-english-language-tests/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and veterinary science.',
    notes: ['Dentistry, medicine and veterinary science require higher English scores than other degrees.']
  },
  english: {
    ielts: { min: 7.0, recommended: null, note: 'Liverpool states that most undergraduate programmes require IELTS 7.0 overall with no component below 6.5. Dentistry, medicine and veterinary science require more, and individual course pages confirm what applies.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the required score depends on the course.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Liverpool lists qualifications taught in English that meet the requirement without a test.',
    note: 'Requirements state both an overall score and a minimum in each of the four components.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine, dentistry and veterinary science require the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International English language tests', url: 'https://www.liverpool.ac.uk/international/applying/entry-requirements/english-language-requirements/international-english-language-tests/' },
    { label: 'Tuition fees for international students', url: 'https://www.liverpool.ac.uk/international/scholarships-and-fees/tuition-fees/' }
  ],
  verification: { level: 'partial', checked: ['english (typical requirement)','rounds','application fee'], unconfirmed: ['tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'queens-university-belfast',
  name: "Queen's University Belfast",
  shortName: "Queen's Belfast",
  country: 'uk',
  city: 'Belfast',
  region: 'Northern Ireland',
  type: 'Public research university',
  brand: { c1: '#005a2b', c2: '#003318', initials: 'QUB' },
  description: 'A research university in Northern Ireland with medicine, engineering, law and a broad range of arts and sciences, and lower living costs than most large UK cities.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  englishTaughtPrograms: ['medicine','engineering','computer-science','business','law','humanities','social-sciences','biology','mathematics','psychology','arts'],
  programNote: 'Northern Ireland has its own school qualification system, but international applicants apply through UCAS on the standard dates.',
  links: {
    website: 'https://www.qub.ac.uk/',
    admissions: 'https://www.qub.ac.uk/Study/Undergraduate/',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: 'https://www.qub.ac.uk/Study/international-students/tuition-fees/',
    cost: 'https://www.qub.ac.uk/Study/Feesandfinance/',
    english: 'https://www.qub.ac.uk/Study/international-students/applying/english-language-requirements/'
  },
  admissions: {
    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: 'Interviews are used for medicine, dentistry and some healthcare courses.',
    notes: ['Medicine and dentistry set much higher English requirements than other degrees.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'Queen\'s normally requires English equivalent to IELTS 6.5 overall (or TOEFL iBT 90). Some programmes set higher or lower levels: Medicine requires IELTS 7.5 overall with 7.0 in speaking and listening and 6.5 in reading and writing, and Dentistry the same with 6.0 in reading and writing.' },
    toefl: { min: 90, recommended: null, scales: [{ period: 'pre2026', min: 90, recommended: null }], note: 'TOEFL iBT 90 is given as the normal equivalent of the IELTS 6.5 requirement.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: "Queen's lists qualifications taught in English that meet the requirement without a test.",
    note: 'Course pages state where a higher level applies.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on school-leaving qualifications such as A-levels and the IB rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' },
    otherTests: 'Medicine and dentistry require the UCAT.',
    internationalQualifications: 'A-levels, the IB and a published list of international qualifications are accepted, with grades set per course.'
  },
  costs: {
    breakdown: { published: false, includes: 'the overseas tuition rate is published on each course page; no single university-wide figure was confirmed here' },
    academicYear: '2026–2027',
    currency: 'GBP',
    headline: 'Tuition published per course',
    items: [ { label: 'Tuition (Overseas rate)', text: 'Set per course and published on the course page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs, the visa fee and the immigration health surcharge are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English language requirements', url: 'https://www.qub.ac.uk/Study/international-students/applying/english-language-requirements/' },
    { label: 'International tuition fees', url: 'https://www.qub.ac.uk/Study/international-students/tuition-fees/' }
  ],
  verification: { level: 'partial', checked: ['english (normal level and medicine/dentistry)','rounds','application fee'], unconfirmed: ['tuition amount','scholarships'] },
  lastVerified: '2026-09-23'
},
);
