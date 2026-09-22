/* ============================================================
   South Korea — university records
   Figures come from the official pages listed in `sources`.
   Unconfirmed fields are null and render as
   "Not confirmed — check official source".
   ============================================================ */
window.UNIPATH.universities.push(
{
  id: 'seoul-national-university',
  name: 'Seoul National University',
  shortName: 'SNU',
  country: 'kr',
  city: 'Seoul',
  region: 'Gwanak, Seoul',
  founded: 1946,
  type: 'National research university',
  brand: { c1: '#003876', c2: '#001c3b', initials: 'SNU' },
  description: 'Korea\'s flagship national university and the hardest domestic admission in the country — but the international track accepts either Korean or English proficiency, which opens a door that the Korean-language entrance exam does not.',
  englishTaught: null,
  languageOfInstruction: 'Korean, with English-taught courses in many departments',
  programs: ['engineering','computer-science','business','economics','social-sciences','humanities','biology','mathematics','law','medicine','arts','education'],
  englishTaughtPrograms: [],
  programNote: 'SNU teaches across every major field. Departments differ in how much English-medium teaching they offer, and SNU warns that weak Korean can count against you in some departments. SNU advises that most courses are in Korean and that students may not be able to complete the credits needed to graduate without Korean-taught courses, so no field is listed as fully English-taught.',
  links: {
    website: 'https://en.snu.ac.kr/',
    admissions: 'https://en.snu.ac.kr/admission',
    internationalAdmissions: 'https://en.snu.ac.kr/admission/undergraduate/application',
    applicationPortal: 'https://en.snu.ac.kr/admission/undergraduate/application',
    scholarships: 'https://en.snu.ac.kr/admission/undergraduate/scholarships/before_admission',
    financialAid: 'https://en.snu.ac.kr/admission/undergraduate/scholarships/before_admission',
    programs: 'https://en.snu.ac.kr/academics/programs/undergraduate',
    cost: 'https://en.snu.ac.kr/admission'
  },
  admissions: {
    platforms: ['SNU online application'],
    deadlines: [
      { name: 'Global Korea Scholarship (embassy track)', date: 'September', note: 'Applications go to Korean embassies, which run initial screening' }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: false, waiver: 'Application fees are non-exemptible.', note: 'Non-refundable.' },
    documents: ['Academic transcripts', 'Proof of Korean OR English proficiency', 'Study plan'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['SNU warns that in some departments, failing to demonstrate Korean proficiency may adversely affect your candidacy — even though English proficiency satisfies the formal language requirement.']
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'IELTS 6.0 or higher satisfies the English route.' },
    toefl: { min: 80, recommended: null, note: 'TOEFL iBT 80 or higher. MyBestScore is accepted and the Home Edition is accepted; TOEFL ITP is not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    waiver: 'You may satisfy the language requirement with Korean instead: TOPIK level 3 or higher.',
    note: 'SNU requires proof of EITHER Korean proficiency (TOPIK level 3+) OR English proficiency (TOEFL iBT 80 / TEPS 551 / IELTS 6.0 or higher).'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted — check the current admission guide PDF.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: 'TEPS 551 is accepted as an alternative English test.',
    internationalQualifications: null
  },
  costs: {
    academicYear: null,
    currency: 'KRW',
    headline: null,
    items: [],
    totalText: null,
    note: 'SNU\'s undergraduate tuition figures were not captured from an official page during verification. As a national university, SNU\'s fees are well below private Korean universities. Check the official admissions site for current figures.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: 'The Global Korea Scholarship is a national government competition — one of the most competitive scholarships in Asia, screened first by Korean embassies and finally by the National Institute for International Education.',
      howToApply: 'Apply through a Korean embassy by the September deadline. The embassy runs initial screening; NIIED makes the final selection.',
      note: 'The Global Korea Scholarship gives full tuition exemption for 8 semesters, a living allowance of KRW 1,200,000 per month, one economy round-trip airfare, and one year of Korean language training. Housing and meals are not separately covered — the monthly allowance is meant to fund living costs.'
    },
    merit: [
      { name: 'Global Korea Scholarship (GKS)', amount: 'Full tuition exemption for 8 semesters, KRW 1,200,000/month living allowance, one economy round-trip airfare, one year of Korean language training', eligibility: 'International applicants for SNU undergraduate programmes', deadline: 'September', application: 'Through a Korean embassy — embassy screening, then final selection by NIIED', renewable: true, note: 'Korean government scholarship, not an SNU award.' },
      { name: 'Global Talent Scholarship', amount: 'Covers the tuition fee and living costs partially', eligibility: 'Selected admitted students', deadline: null, application: 'Awarded on selection at admission', renewable: null, note: 'SNU describes this as partial coverage of living costs — not a full ride.' },
      { name: 'SNU university scholarship (after first semester)', amount: 'Exempts the whole or a partial amount of tuition fees', eligibility: 'Students who have completed one semester successfully', deadline: null, application: 'Apply after completing one semester', renewable: null, note: null },
      { name: 'Overseas Koreans Scholarship', amount: 'Full tuition exemption for up to 8 semesters (conditions apply), KRW 900,000/month for up to 8 semesters, one economy round-trip airfare, 6 months of language training fees, and medical insurance', eligibility: 'Overseas Korean students', deadline: 'February or March, roughly a one-month recruitment window', application: 'Through Korean embassies, then review by the Overseas Koreans Foundation', renewable: true, note: 'Restricted to overseas Koreans — not open to most international applicants.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'SNU\'s published international awards are merit-based or government-funded rather than need-assessed.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Scholarships before admission (undergraduate)', url: 'https://en.snu.ac.kr/admission/undergraduate/scholarships/before_admission' },
    { label: 'Undergraduate application', url: 'https://en.snu.ac.kr/admission/undergraduate/application' },
    { label: 'Admissions FAQ', url: 'https://en.snu.ac.kr/admission/overview/faq/admission' },
    { label: 'Undergraduate admissions FAQ', url: 'https://en.snu.ac.kr/admission/overview/faq/admission' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'kaist',
  name: 'Korea Advanced Institute of Science and Technology',
  shortName: 'KAIST',
  country: 'kr',
  city: 'Daejeon',
  region: 'Daejeon',
  founded: 1971,
  type: 'National research university (science and technology)',
  brand: { c1: '#004191', c2: '#00214a', initials: 'KAIST' },
  description: 'Korea\'s premier science and technology institute, and the single most generous option in this database for a STEM applicant: KAIST states it offers a full scholarship — tuition, a monthly allowance of about US$300 and national health insurance — to every admitted international student.',
  englishTaught: true,
  languageOfInstruction: 'English (most undergraduate courses are taught in English by policy)',
  programs: ['engineering','computer-science','mathematics','biology','business','economics','social-sciences'],
  englishTaughtPrograms: ['engineering','computer-science','mathematics','biology','business'],
  programNote: 'KAIST undergraduates enter without a declared major and choose their department after the first year. Its strengths are engineering, computer science, natural sciences and mathematics.',
  links: {
    website: 'https://www.kaist.ac.kr/en/',
    admissions: 'https://www.kaist.ac.kr/en/html/admission/0201.html',
    internationalAdmissions: 'https://admission.kaist.ac.kr/intl-undergraduate',
    applicationPortal: 'https://univapply.kaist.ac.kr/interapply/',
    scholarships: 'https://www.kaist.ac.kr/en/html/edu/03100502.html',
    financialAid: 'https://www.kaist.ac.kr/en/html/edu/03100501.html',
    programs: 'https://www.kaist.ac.kr/en/html/edu/03.html',
    cost: 'https://admission.kaist.ac.kr/intl-undergraduate'
  },
  admissions: {
    platforms: ['KAIST international application portal (univapply.kaist.ac.kr)'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: false, waiver: 'The fee is not waivable (2023 admission guideline — the latest published online).', note: 'KRW 80,000 or US$80, non-refundable.' },
    documents: ['Academic transcripts', 'English proficiency test taken within two years of the online application deadline'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Your English proficiency test must be taken within two years prior to the online application deadline.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'KAIST does not publish the undergraduate minimum on the pages consulted. For reference, its graduate programmes list IELTS 6.5.' },
    toefl: { min: null, recommended: null, note: 'KAIST does not publish the undergraduate minimum on the pages consulted. For reference, its graduate programmes list TOEFL iBT 83.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'Undergraduate English minimums are published in KAIST\'s annual international admission guideline PDF. The graduate figures above are given only as a rough reference and should not be treated as the undergraduate requirement.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Check the current international admission guideline PDF.' },
    act: { policy: null, note: 'Check the current international admission guideline PDF.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    academicYear: null,
    currency: 'KRW',
    headline: 'Tuition covered for admitted international students',
    items: [],
    totalText: null,
    note: 'Because KAIST states it offers a full scholarship to every admitted international student, tuition is not the planning constraint here. Living costs in Daejeon are additional, partly offset by the monthly allowance.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: false, meals: false, insurance: true, books: false },
      renewable: true,
      competitiveness: 'Not a separate competition — KAIST states the scholarship goes to every admitted international student. Admission itself is highly selective.',
      howToApply: 'Automatic on admission — no separate scholarship application.',
      note: 'KAIST states it offers a full scholarship covering the tuition fee, approximately US$300 per month in allowances, and national health insurance, to every admitted international student. Students must maintain good grades to keep it. Housing and meals are not separately named as covered — the monthly allowance contributes toward living costs.'
    },
    merit: [
      { name: 'KAIST international student scholarship', amount: 'Tuition fee, approximately US$300/month allowance, and national health insurance', eligibility: 'Every admitted international student', deadline: null, application: 'Automatic on admission', renewable: true, note: 'KAIST states students must receive good grades at KAIST to maintain the scholarship.' },
      { name: 'Academic Promotion Scholarships', amount: 'KRW 250,000/month (valedictorian) or KRW 200,000/month (salutatorian and honours)', eligibility: 'Department honours recipients', deadline: null, application: null, renewable: null, note: 'Awarded to enrolled students on academic performance.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'KAIST also runs labour scholarships (KRW 200,000–300,000/month, with the highest tier for low-income families) and financial aid of KRW 135,000/month for undergraduates, paid for four months per semester within an eight-semester limit. Whether international undergraduates are eligible for these was not confirmed.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International undergraduate admission', url: 'https://admission.kaist.ac.kr/intl-undergraduate' },
    { label: 'Scholarship types', url: 'https://www.kaist.ac.kr/en/html/edu/03100502.html' },
    { label: 'Scholarship basic rules', url: 'https://www.kaist.ac.kr/en/html/edu/03100501.html' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'yonsei-university',
  name: 'Yonsei University',
  shortName: 'Yonsei (UIC)',
  country: 'kr',
  city: 'Seoul',
  region: 'Seodaemun, Seoul',
  founded: 1885,
  type: 'Private research university',
  brand: { c1: '#00396B', c2: '#001d36', initials: 'Y' },
  description: 'Underwood International College is the best-established fully English-taught undergraduate college in Korea, and it is unusual in accepting the Common Application — so you can apply to UIC in the same workflow as U.S. universities.',
  englishTaught: true,
  languageOfInstruction: 'English — all UIC courses are conducted in English',
  programs: ['economics','business','social-sciences','humanities','computer-science','engineering','biology','arts','law','psychology'],
  englishTaughtPrograms: ['humanities','social-sciences','engineering'],
  programNote: 'UIC is organised into divisions covering liberal arts and sciences, humanities/social sciences, integrated social sciences and engineering, and science and technology.',
  links: {
    website: 'https://www.yonsei.ac.kr/en_sc/index.do',
    admissions: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_02_01',
    internationalAdmissions: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_02_02',
    applicationPortal: 'https://www.commonapp.org/',
    scholarships: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_03_02',
    financialAid: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_03_02',
    programs: 'https://uic.yonsei.ac.kr/',
    cost: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_03_01'
  },
  admissions: {
    platforms: ['Common Application (search for "Underwood International College")', 'UIC application'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: false, waiver: 'UIC does not offer or accept fee waivers.', note: 'KRW 150,000 via the UIC application, or US$150 via the Common Application.' },
    documents: ['High school diploma or certificate of high school equivalency', 'Academic transcripts', 'English proficiency evidence'],
    recommendations: null,
    essay: null,
    interview: 'Applicants who submit required documents by the deadline receive two test calls — one to verify the applicant and one for the interview.',
    notes: [
      'Eligibility for the International Students Track is strict: you must be non-Korean with non-Korean parents. If you or either parent holds dual citizenship with Korea, you are NOT eligible for this track.',
      'Alternative route: applicants who completed all of elementary, middle and high school outside Korea are eligible; or those who lived overseas with both parents and completed at least 3 years of middle/high school overseas including at least 1 year of overseas high school.',
      'GED, home schooling and cyber schooling certificates are not accepted as a high school diploma.'
    ]
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'UIC publishes English requirements in its annual admissions guide rather than on the overview pages. All instruction is in English, so a strong score matters.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Check the current UIC admissions guide.' },
    act: { policy: null, note: 'Check the current UIC admissions guide.' },
    otherTests: null,
    internationalQualifications: 'A high school diploma or recognised equivalency certificate is required before matriculation.'
  },
  costs: {
    academicYear: '2026',
    currency: 'KRW',
    headline: '₩8,258,000 per semester',
    items: [
      { label: 'Tuition per semester — International Students Track', amount: 8202000 },
      { label: 'Miscellaneous fees per semester', amount: 56000 },
      { label: 'Total per semester — International Students Track', amount: 8258000 },
      { label: 'First semester total — International Students Track', amount: 8416000, note: 'The first semester is higher; miscellaneous fees are ₩61,000' },
      { label: 'Total per semester — Korean Students Track (for comparison)', amount: 7454000 }
    ],
    billedSubtotal: null,
    totalText: '₩8,258,000 per semester (≈ ₩16.5m per year) on the International Students Track',
    note: 'Yonsei notes the total does not include personal expenses and that exchange rates change. The rates above apply across UIC divisions; no separate entrance fee is listed.'
  },
  scholarships: {
    fullRide: {
      available: false,
      internationalEligible: false,
      basis: 'need-based',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: null,
      competitiveness: null,
      howToApply: 'Apply as a currently enrolled UIC student.',
      note: 'UIC\'s published need-based scholarships go up to full TUITION for a semester — that is not a full ride, and they are for currently enrolled students rather than guaranteed at admission.'
    },
    merit: [
      { name: 'UIC need-based scholarships', amount: 'Full, half, or one-third of tuition per semester', eligibility: 'Currently enrolled UIC students', deadline: null, application: 'Applied for while enrolled', renewable: null, note: 'Awarded per semester rather than as a multi-year guarantee.' }
    ],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Need-based scholarships are available to currently enrolled UIC students at full, half or one-third of tuition per semester. Budget for the full published cost in your first semester.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'UIC first-year admissions', url: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_02_02' },
    { label: 'UIC tuition fee', url: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_03_01' },
    { label: 'UIC scholarships', url: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_03_02' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'korea-university',
  name: 'Korea University',
  shortName: 'KU',
  country: 'kr',
  city: 'Seoul',
  region: 'Seongbuk, Seoul',
  founded: 1905,
  type: 'Private research university',
  brand: { c1: '#862633', c2: '#43131a', initials: 'KU' },
  description: 'One of Korea\'s "SKY" universities alongside SNU and Yonsei, with a dedicated international admissions office and a broad list of accepted language qualifications. Scholarships are decided at admission with no separate application.',
  englishTaught: true,
  languageOfInstruction: 'Korean and English',
  programs: ['business','economics','engineering','computer-science','social-sciences','humanities','law','medicine','biology','mathematics','psychology','arts'],
  englishTaughtPrograms: ['social-sciences'],
  programNote: 'Korea University teaches across all major fields. Whether you can study largely in English depends on your department — students with high English proficiency may be exempted from intensive Korean language training. The fall 2026 guide lists International Studies (English Track) in the College of International Studies, which requires proof of English. The Global Open Major can also lead to an English-based major (IELTS 7.0 / TOEFL iBT 100 needed), but its list of eligible departments is published separately and is not confirmed here.',
  links: {
    website: 'https://www.korea.edu/en/index.do',
    admissions: 'https://oia.korea.ac.kr/oia/under/admission.do',
    internationalAdmissions: 'https://oia.korea.ac.kr/oia/under/admission.do',
    applicationPortal: 'https://oia.korea.ac.kr/oia/under/admission.do',
    scholarships: 'https://oia.korea.ac.kr/oia/under/admission.do',
    financialAid: 'https://oia.korea.ac.kr/oia/under/admission.do',
    programs: 'https://www.korea.edu/en/1031/subview.do',
    cost: 'https://oia.korea.ac.kr/oia/under/admission.do'
  },
  admissions: {
    platforms: ['Korea University international application'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'Official language proficiency test results'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Korea University publishes a dated Application Guide PDF for each intake — use the current one for exact deadlines and fees.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS Academic is accepted; minimums are published in the current application guide.' },
    toefl: { min: null, recommended: null, note: 'TOEFL iBT is accepted; minimums are published in the current application guide.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests on the pages consulted.' },
    waiver: 'Students with high English language proficiency may receive an exemption from intensive Korean language training, depending on their department.',
    note: 'Korea University accepts a notably wide list of official language tests: TOEFL iBT, IELTS Academic, HSK, JLPT, JPT, DELF, DALF and TOPIK.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Check the current Application Guide PDF.' },
    act: { policy: null, note: 'Check the current Application Guide PDF.' },
    otherTests: 'HSK, JLPT, JPT, DELF and DALF are accepted alongside TOEFL, IELTS and TOPIK.',
    internationalQualifications: 'Admission decisions about major course enrolment take account of TOPIK scores or Korean levels completed at Korea University\'s Korean Language Center or other domestic IEQAS-certified universities.'
  },
  costs: {
    academicYear: null,
    currency: 'KRW',
    headline: null,
    items: [],
    totalText: null,
    note: 'Korea University\'s tuition figures were not captured from an official page during verification. Check the Office of International Affairs site and the current Application Guide PDF.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: null,
      basis: 'merit',
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null,
      competitiveness: null,
      howToApply: 'No separate application — scholarships are decided as part of the admission evaluation.',
      note: 'Korea University does not publish a named full-ride award for international undergraduates on the pages consulted. Do not assume a full ride exists here.'
    },
    merit: [
      { name: 'Admission scholarships for international students', amount: null, eligibility: 'Decided on the admission evaluation', deadline: null, application: 'Automatic — no separate application required', renewable: null, note: 'Korea University states that scholarship results are notified individually at the same time as admission decisions. Amounts are published on the Global Services Center site.' }
    ],
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
    { label: 'Undergraduate admission guide (Office of International Affairs)', url: 'https://oia.korea.ac.kr/oia/under/admission.do' },
    { label: 'Application Guide for Fall 2026 (Freshman) PDF', url: 'https://oia.korea.ac.kr/_res/oia/etc/Application_Guide_for_Fall_2026_Freshman(ENG).pdf' },
    { label: 'Fall 2026 undergraduate application guide for international freshmen (PDF)', url: 'https://oia.korea.ac.kr/_res/oia/etc/Application_Guide_for_Fall_2026_Freshman(ENG).pdf' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'sungkyunkwan-university',
  name: 'Sungkyunkwan University',
  shortName: 'SKKU',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul and Suwon campuses',
  founded: 1398,
  type: 'Private research university',
  brand: { c1: '#00563F', c2: '#002b20', initials: 'SKKU' },
  description: 'The most transparent scholarship ladder in Korea for international applicants — SKKU publishes exactly which IELTS and TOEFL scores earn a 50% or 100% tuition waiver. It also runs the Samsung Global Sungkyun Scholarship, a genuine four-year full-cost award.',
  englishTaught: true,
  languageOfInstruction: 'Korean and English',
  programs: ['business','economics','engineering','computer-science','social-sciences','humanities','biology','mathematics','medicine','arts','education','law'],
  englishTaughtPrograms: [],
  programNote: 'SKKU splits into a Humanities and Social Sciences campus in central Seoul and a Natural Sciences campus in Suwon. Scholarship rules differ slightly between the two.',
  links: {
    website: 'https://www.skku.edu/eng/',
    admissions: 'https://admission-global.skku.edu/eng/',
    internationalAdmissions: 'https://admission-global.skku.edu/eng/',
    applicationPortal: 'https://admission-global.skku.edu/eng/',
    scholarships: 'https://admission-global.skku.edu/eng/grad/scholarship_undergrad.html',
    financialAid: 'https://www.skku.edu/eng/CampusLife/support/scholarship.do',
    programs: 'https://www.skku.edu/eng/',
    cost: 'https://admission-global.skku.edu/eng/'
  },
  admissions: {
    platforms: ['SKKU global admissions portal'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'TOEFL or IELTS score report'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['The required level of English proficiency varies depending on your major.']
  },
  english: {
    ielts: { min: null, recommended: 8.0, note: 'SKKU does not publish a single admission minimum — the required level varies by major. For scholarships: IELTS 7.0 earns a 50% tuition waiver and IELTS 8.0 earns a 100% tuition waiver for the first semester.' },
    toefl: { min: null, recommended: 110, note: 'For scholarships: TOEFL iBT 95+ earns a 50% tuition waiver and TOEFL iBT 110+ earns a 100% tuition waiver for the first semester.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests on the pages consulted.' },
    waiver: null,
    note: 'SKKU requires a TOEFL or IELTS score from international students, with the level varying by major. The English scores above are the published scholarship thresholds, not admission cut-offs.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    academicYear: null,
    currency: 'KRW',
    headline: null,
    items: [],
    totalText: null,
    note: 'SKKU\'s tuition figures were not captured from an official page during verification. Note that scholarship tiers are expressed as percentages of tuition, so the base figure matters — check the official admissions site.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: null, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: 'The Samsung Global Sungkyun Scholarship is highly selective and carries a demanding GPA condition — 3.7 or above (3.5 for the first two semesters) with no failing grades.',
      howToApply: 'Selected through SKKU\'s international admissions process.',
      note: 'The Samsung Global Sungkyun Scholarship covers full dues for four years (eight semesters), plus monthly living expenses of KRW 570,000, dormitory priority and mentoring. Dormitory priority is not the same as free housing, and meals are not covered.'
    },
    merit: [
      { name: 'Samsung Global Sungkyun Scholarship', amount: 'Full dues for 4 years (8 semesters), KRW 570,000/month living expenses, dormitory priority and mentoring', eligibility: 'Selected international students', deadline: null, application: 'Through international admissions', renewable: true, note: 'Renewal requires a GPA of 3.7 or above (3.5 for semesters 1–2) with no F grades.' },
      { name: 'SKKU Global Leader Scholarship', amount: '50% of tuition for 4 years', eligibility: 'Selected international students', deadline: null, application: 'Through international admissions', renewable: true, note: 'Renewal requires a GPA of 3.5 or above.' },
      { name: 'English Language Proficiency Scholarship', amount: '100% tuition waiver for IELTS 8.0 / TOEFL iBT 110+; 50% tuition waiver for IELTS 7.0 / TOEFL iBT 95+', eligibility: 'Incoming international students meeting the score thresholds', deadline: null, application: 'Automatic on the basis of submitted scores', renewable: false, note: 'First semester only — this is not a four-year award.' },
      { name: 'Admission Scholarship', amount: '10–100% of dues including the entrance fee', eligibility: 'Remarkable freshmen, selected automatically on the admission evaluation', deadline: null, application: 'Automatic', renewable: false, note: 'First semester only.' },
      { name: 'Merit-based scholarship (semesters 2–8)', amount: '70% tuition waiver for the top 6%; 50% for the top 6–18%; 30% for the top 18–30%', eligibility: 'Based on previous-semester GPA ranking', deadline: null, application: 'Automatic', renewable: true, note: 'Requires at least 12 credits completed (9 in the seventh semester) with no failing grades.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'SKKU\'s published international awards are merit- and language-based rather than need-assessed.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate scholarships for international students', url: 'https://admission-global.skku.edu/eng/grad/scholarship_undergrad.html' },
    { label: 'Scholarships and financial aid', url: 'https://www.skku.edu/eng/CampusLife/support/scholarship.do' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'hanyang-university',
  name: 'Hanyang University',
  country: 'kr',
  city: 'Seoul',
  region: 'Seongdong, Seoul',
  founded: 1939,
  type: 'Private research university',
  brand: { c1: '#0E4A84', c2: '#07253f', initials: 'HYU' },
  description: 'A strong engineering and technology university in Seoul with an English Track for international students. Its entry scholarship is modest — a 30% first-semester discount — but the scholarships for enrolled students go up to a full tuition waiver.',
  englishTaught: true,
  languageOfInstruction: 'Korean, with an English Track at the Seoul campus',
  programs: ['engineering','computer-science','business','economics','social-sciences','humanities','arts','biology','mathematics','education'],
  englishTaughtPrograms: ['computer-science','business'],
  programNote: 'The Seoul campus runs English Track courses; the ERICA campus in Ansan runs its own international programmes. On the Seoul campus two majors are English Track: Data Science and Business Administration (Global Management Track), both requiring TOEFL iBT 80 or IELTS 6.0 or higher, with an English interview for Data Science; every other major is Korean Track (2025 spring admission guideline).',
  links: {
    website: 'https://www.hanyang.ac.kr/web/eng',
    admissions: 'https://www.hanyang.ac.kr/web/eng/admissions-guide',
    internationalAdmissions: 'https://oia.hanyang.ac.kr/',
    applicationPortal: 'https://oia.hanyang.ac.kr/',
    scholarships: 'https://www.hanyang.ac.kr/web/eng/scholarships',
    financialAid: 'https://www.hanyang.ac.kr/web/eng/scholarships',
    programs: 'https://www.hanyang.ac.kr/web/eng/global_s',
    cost: 'https://www.hanyang.ac.kr/web/eng/registration-guide'
  },
  admissions: {
    platforms: ['Hanyang Office of International Affairs application'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'English Proficiency Certificate (English Track applicants)', 'TOPIK certificate where applicable'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Hanyang publishes a dated admission guideline PDF for each intake — use the current one for deadlines and fees.']
  },
  english: {
    ielts: { min: null, recommended: 6.5, note: 'IELTS 6.5 or higher qualifies for the Hanyang Scholarship for Excellence in Language Proficiency. This is a scholarship threshold, not necessarily the admission minimum.' },
    toefl: { min: null, recommended: 90, note: 'TOEFL iBT 90 or higher qualifies for the Hanyang Scholarship for Excellence in Language Proficiency.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'English Track applicants must submit an English Proficiency Certificate. Korean proficiency is recognised through TOPIK, TOPIK Speaking and TOPIK IBT.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: 'TOPIK level 5 or 6 also qualifies for the language proficiency scholarship.',
    internationalQualifications: null
  },
  costs: {
    academicYear: null,
    currency: 'KRW',
    headline: null,
    items: [
      { label: 'Compulsory insurance fee (one year)', amount: 130000 }
    ],
    totalText: null,
    note: 'Hanyang\'s tuition figures were not captured from an official page during verification. International students must pay an insurance fee of KRW 130,000 for one year.'
  },
  scholarships: {
    fullRide: {
      available: false,
      internationalEligible: false,
      basis: 'merit',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: null,
      howToApply: null,
      note: 'Hanyang\'s top published award for enrolled students is a 100% tuition reduction — tuition only, and awarded semester by semester on GPA. There is no published full-cost award for international undergraduates.'
    },
    merit: [
      { name: 'Hanyang Scholarship for Excellence in Language Proficiency', amount: '30% reduction in tuition', eligibility: 'Applicants who have passed TOPIK level 5 or 6, or achieved TOEFL iBT 90+ or IELTS 6.5+', deadline: null, application: 'Awarded on admission', renewable: false, note: 'First semester only.' },
      { name: 'Tuition reduction for enrolled students', amount: '100%, 70%, 50% or 30% tuition reduction', eligibility: 'Enrolled students with a minimum GPA of 3.0 from the previous semester and a valid TOPIK certificate', deadline: null, application: 'Evaluated each semester', renewable: true, note: 'A valid TOPIK certificate is required — so Korean study pays off directly in money here.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Hanyang\'s published international awards are merit- and language-based.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Scholarships', url: 'https://www.hanyang.ac.kr/web/eng/scholarships' },
    { label: 'Admissions guide', url: 'https://www.hanyang.ac.kr/web/eng/admissions-guide' },
    { label: 'International programmes (Seoul)', url: 'https://www.hanyang.ac.kr/web/eng/global_s' },
    { label: 'Admission guidelines for international students, spring 2025 (PDF)', url: 'https://oia.hanyang.ac.kr/files/attach/filebox/2025/2025_1_undergraduate_en_new.pdf' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'ewha-womans-university',
  name: 'Ewha Womans University',
  shortName: 'Ewha',
  country: 'kr',
  city: 'Seoul',
  region: 'Seodaemun, Seoul',
  founded: 1886,
  type: 'Private women\'s university',
  brand: { c1: '#00713C', c2: '#00381e', initials: 'EWHA' },
  description: 'Korea\'s first university for women, founded in 1886, and still one of the largest women\'s universities in the world. Admission is open to female applicants only, and its Division of International Studies is taught in English.',
  englishTaught: true,
  languageOfInstruction: 'Korean, with English-taught programmes including the Division of International Studies',
  programs: ['social-sciences','humanities','business','economics','engineering','computer-science','biology','arts','education','psychology','medicine','law'],
  englishTaughtPrograms: ['social-sciences'],
  programNote: 'The Division of International Studies is the main fully English-taught undergraduate route and is exempt from the TOPIK graduation requirement that applies elsewhere.',
  links: {
    website: 'https://www.ewha.ac.kr/ewhaen/index.do',
    admissions: 'https://www.ewha.ac.kr/ewhaen/admission/admission.do',
    internationalAdmissions: 'https://isa.ewha.ac.kr/',
    applicationPortal: 'https://www.ewha.ac.kr/ewhaen/admission/admission.do',
    scholarships: 'https://www.ewha.ac.kr/ewhaen/bachelor/scholarship-iss.do',
    financialAid: 'https://www.ewha.ac.kr/ewhaen/bachelor/scholarship-undergraduate.do',
    programs: 'https://www.ewha.ac.kr/ewhaen/index.do',
    cost: 'https://www.ewha.ac.kr/ewhaen/admission/admission.do'
  },
  admissions: {
    platforms: ['Ewha international application'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'English proficiency test scores, or evidence of high school education conducted entirely in English'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: [
      'Ewha accepts applications from female applicants only.',
      'Applicants and their parents must hold the nationality of a country other than Korea.',
      'All students admitted to undergraduate programmes must reach TOPIK level 4 or above before graduation — except the Division of International Studies.',
      'Students who do not reach TOPIK level 3 face restrictions on taking major courses and must take Korean language and foundational general education courses.'
    ]
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'IELTS 6.0 or above.' },
    toefl: { min: 80, recommended: null, note: 'TOEFL iBT 80 or above.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    waiver: 'Completing high school education conducted entirely in English satisfies the requirement instead of a test score.',
    note: 'New TEPS 326 or above is also accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Check the current admissions guide PDF.' },
    act: { policy: null, note: 'Check the current admissions guide PDF.' },
    otherTests: 'New TEPS 326+ accepted as an English alternative. TOPIK is required for graduation outside the Division of International Studies.',
    internationalQualifications: null
  },
  costs: {
    academicYear: null,
    currency: 'KRW',
    headline: null,
    items: [],
    totalText: null,
    note: 'Ewha\'s tuition figures were not captured from an official page during verification. Check the official admissions site and the current admissions guide PDF.'
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
      note: 'Ewha\'s scholarship amounts for international undergraduates were not confirmed on the pages consulted. Do not assume a full-cost award exists.'
    },
    merit: [
      { name: 'Scholarships for international students', amount: null, eligibility: 'International undergraduate students', deadline: null, application: null, renewable: true, note: 'Ewha states recipients must meet minimum GPA and credit requirements to maintain a scholarship, and that the university may reduce, suspend or terminate an award if those requirements are not met.' }
    ],
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
    { label: 'Admissions', url: 'https://www.ewha.ac.kr/ewhaen/admission/admission.do' },
    { label: 'Scholarships for international students', url: 'https://www.ewha.ac.kr/ewhaen/bachelor/scholarship-iss.do' },
    { label: 'Admissions guide for international applicants (PDF)', url: 'https://isa.ewha.ac.kr/sites/oisa/file/ag_english.pdf' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'kyung-hee-university',
  name: 'Kyung Hee University',
  shortName: 'KHU',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul and Global (Yongin) campuses',
  founded: 1949,
  type: 'Private research university',
  brand: { c1: '#9B1B30', c2: '#4e0d18', initials: 'KHU' },
  description: 'A large private university with one of the biggest international student bodies in Korea and a clearly defined English Track. Read its language rules carefully: the Korean-language requirement is stricter than at many peers, though the English Track is exempt.',
  englishTaught: true,
  languageOfInstruction: 'Korean, with an English Track and a Department of International Studies',
  programs: ['business','economics','engineering','computer-science','social-sciences','humanities','arts','medicine','biology','education','law'],
  englishTaughtPrograms: ['social-sciences'],
  programNote: 'Kyung Hee runs a Seoul campus and a Global campus in Yongin. The Department of International Studies and the English Track are the main English-medium routes.',
  links: {
    website: 'https://www.khu.ac.kr/eng/',
    admissions: 'https://www.khu.ac.kr/eng/user/contents/view.do?menuNo=300150',
    internationalAdmissions: 'https://iadmission.khu.ac.kr/gglobalcenter/user/contents/view.do?menuNo=8000031',
    applicationPortal: 'https://iadmission.khu.ac.kr/',
    scholarships: 'https://www.khu.ac.kr/eng/user/contents/view.do?menuNo=300152',
    financialAid: 'https://www.khu.ac.kr/eng/user/contents/view.do?menuNo=300152',
    programs: 'https://www.khu.ac.kr/eng/',
    cost: 'https://www.khu.ac.kr/eng/user/contents/view.do?menuNo=300150'
  },
  admissions: {
    platforms: ['Kyung Hee global admissions portal'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'TOPIK certificate or proof of Korean language study', 'English proficiency evidence for English Track applicants'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: [
      'The standard route requires TOPIK Level 3 or above, or current enrolment in Kyung Hee\'s Korean Language Institutions, or at least 18 months in a Korean language course.',
      'Admitted students without TOPIK Level 4 must take 6 credits of Korean in their first semester — English Track and Department of International Studies applicants are exempt.',
      'English Track applicants are not eligible for the TOPIK-based admission scholarships.'
    ]
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'Kyung Hee publishes English Track requirements in its dated admission guidelines PDF rather than on the overview pages.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Check the current admission guidelines PDF.' },
    act: { policy: null, note: 'Check the current admission guidelines PDF.' },
    otherTests: 'TOPIK is central to both admission and scholarship eligibility outside the English Track.',
    internationalQualifications: null
  },
  costs: {
    academicYear: null,
    currency: 'KRW',
    headline: null,
    items: [],
    totalText: null,
    note: 'Kyung Hee\'s tuition figures were not captured from an official page during verification. Check the official admissions pages and the current guidelines PDF.'
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
      note: 'Kyung Hee\'s scholarship amounts for international undergraduates were not confirmed on the pages consulted. Note the explicit restriction: English Track applicants are not eligible for the TOPIK-based admission scholarships.'
    },
    merit: [
      { name: 'On-campus and off-campus scholarships', amount: null, eligibility: 'Enrolled students', deadline: 'Every semester', application: null, renewable: null, note: 'Kyung Hee states various on-campus and off-campus scholarships are available every semester, but does not publish amounts on the pages consulted.' }
    ],
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
    { label: 'Scholarships', url: 'https://www.khu.ac.kr/eng/user/contents/view.do?menuNo=300152' },
    { label: 'Undergraduate admission for international students', url: 'https://iadmission.khu.ac.kr/gglobalcenter/user/contents/view.do?menuNo=8000031' },
    { label: 'Admissions', url: 'https://www.khu.ac.kr/eng/user/contents/view.do?menuNo=300150' }
  ],
  lastVerified: '2026-09-16'
}
);
