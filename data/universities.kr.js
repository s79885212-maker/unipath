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
      { name: 'Spring 2027 — online application', kind: 'intake', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-07-09', date: '6–9 July 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Closes at 17:00 KST. After the deadline the form, personal statement and study plan cannot be edited and the fee cannot be paid; email, fax and post are not accepted.', status: 'confirmed', source: 'https://en.snu.ac.kr/admission/undergraduate/application', verified: '2026-09-24', note: null },
      { name: 'Spring 2027 — recommendation letters', kind: 'documents', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-07-10', date: '10 July 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'Applicants whose referees submit online', conditions: 'Referees must submit online by 17:00 KST.', status: 'confirmed', source: 'https://en.snu.ac.kr/admission/undergraduate/application', verified: '2026-09-24', note: null },
      { name: 'Spring 2027 — preliminary decisions', kind: 'decision', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-10-16', date: '16 October 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'Applicants', conditions: 'Announced after 17:00 KST.', status: 'confirmed', source: 'https://en.snu.ac.kr/admission/undergraduate/application', verified: '2026-09-24', note: null },
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
    breakdown: { published: false },
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
    deadlines: [
      { name: 'Early admission — application period', kind: 'round-1', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-10-22', date: '22 September – 22 October 2026', time: '18:00', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Closes at 18:00 KST. Recommendation letters by 29 October; interviews, if needed, on 22 December 2026; decision on 7 January 2027 at 10:00 KST; reply before February.', status: 'confirmed', source: 'https://admission.kaist.ac.kr/intl-undergraduate/application/ApplicationGuide/ApplicationTimeline', verified: '2026-09-24', note: null },
      { name: 'Regular admission — application period', kind: 'round-2', entryTerm: 'Spring', entryYear: '2027', dateISO: '2027-01-14', date: '10 November 2026 – 14 January 2027', time: '18:00', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Closes at 18:00 KST. Recommendation letters by 21 January; interviews, if needed, on 3 March 2027; decision on 25 March 2027 at 10:00 KST; reply before May.', status: 'confirmed', source: 'https://admission.kaist.ac.kr/intl-undergraduate/application/ApplicationGuide/ApplicationTimeline', verified: '2026-09-24', note: null },
      { name: 'Academic year start', kind: 'other', entryTerm: 'Spring', entryYear: '2027', date: 'End of February 2027 (spring track) or end of August 2027 (fall track)', binding: false, appliesTo: 'Admitted students', conditions: 'KAIST admits to a spring or a fall track.', status: 'confirmed', source: 'https://admission.kaist.ac.kr/intl-undergraduate/application/ApplicationGuide/ApplicationTimeline', verified: '2026-09-24', note: null },
    ],
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
    breakdown: { published: false },
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
    deadlines: [
      { name: 'UIC international admission — rolling', kind: 'rolling', entryTerm: 'Spring', entryYear: '2027', date: 'Rolling, with a document deadline for each round', binding: false, appliesTo: 'International applicants to Underwood International College', conditions: 'Yonsei states that international students are admitted on a rolling basis while Korean applicants follow the annual schedule. Hard copies of all documents must reach the UIC office by the round’s document deadline, otherwise the applicant is not interviewed and is disqualified.', status: 'confirmed', source: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_02_02', verified: '2026-09-24', note: null },
      { name: 'UIC Round 1 (Spring 2027) — online application', kind: 'round-1', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-09-22', date: '26 August – 22 September 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'UIC applicants for spring entry', conditions: 'Carried over from the earlier verification and not re-confirmed today.', status: 'not-confirmed', source: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_02_02', verified: null, note: null },
      { name: 'UIC Round 2 (Fall 2027)', kind: 'round-2', entryTerm: 'Fall', entryYear: '2027', date: 'Expected around March 2027', binding: false, appliesTo: 'UIC applicants for autumn entry', conditions: 'Approximate timing from the earlier verification; not confirmed for this cycle.', status: 'not-confirmed', source: 'https://uic.yonsei.ac.kr/main/admission.php?mid=m04_02_02', verified: null, note: null },
    ],
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
    breakdown: { tuition: 8202000, period: "semester", billed: 8258000, includes: "tuition and miscellaneous fees per semester on the International Students Track" },
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
    deadlines: [
      { name: 'International undergraduate admission — application schedule', kind: 'intake', entryTerm: 'Spring', entryYear: '2027', date: 'Published by the Office of International Affairs for each intake', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Korea University publishes the schedule, documents, eligibility and evaluation procedure for international applicants on its Office of International Affairs pages; the 2027 dates were not read during this check.', status: 'not-confirmed', source: 'https://int.korea.edu/kuis/under/admission.do', verified: '2026-09-24', note: null },
      { name: 'Fall 2026 intake — online application', kind: 'round-1', entryTerm: 'Fall', entryYear: '2026', dateISO: '2026-03-27', date: '2–27 March 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Carried over from the earlier verification; closes at 17:00 KST. This is a previous cycle, kept for reference.', status: 'previous-cycle', source: 'https://int.korea.edu/kuis/under/admission.do', verified: null, note: null },
    ],
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
    breakdown: { published: false },
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
    deadlines: [
      { name: 'Spring 2027 — Round 1', kind: 'round-1', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-08-21', date: '12–21 August 2026', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Carried over from the earlier verification and not re-confirmed on the official pages during this check.', status: 'not-confirmed', source: 'https://admission-global.skku.edu/', verified: null, note: null },
      { name: 'Spring 2027 — Round 2', kind: 'round-2', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-11-13', date: '4–13 November 2026', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Carried over from the earlier verification and not re-confirmed on the official pages during this check.', status: 'not-confirmed', source: 'https://admission-global.skku.edu/', verified: null, note: null },
    ],
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
    breakdown: { published: false },
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
    deadlines: [
      { name: 'Spring 2027 — online application', kind: 'intake', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-09-18', date: '18 September 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants (Seoul campus)', conditions: 'Closes at 17:00 KST.', status: 'confirmed', source: 'https://oia.hanyang.ac.kr/admission', verified: '2026-09-24', note: null },
      { name: 'Spring 2027 — document submission', kind: 'documents', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-09-30', date: '30 September 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'Applicants who submitted online', conditions: 'Supporting documents must arrive by 17:00 KST.', status: 'confirmed', source: 'https://oia.hanyang.ac.kr/admission', verified: '2026-09-24', note: null },
    ],
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
    breakdown: { published: false },
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
    deadlines: [
      { name: 'Spring 2027 — online application', kind: 'intake', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-10-08', date: '2 September – 8 October 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Carried over from the earlier verification and not re-confirmed on the official pages during this check. Ewha publishes a Spring 2027 admissions guide for international applicants on its International Student Affairs pages.', status: 'not-confirmed', source: 'https://isa.ewha.ac.kr/oisa/1442/subview.do', verified: null, note: null },
    ],
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
    breakdown: { published: false },
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
    deadlines: [
      { name: 'Spring 2027 — first intake', kind: 'round-1', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-08-28', date: '17–28 August 2026', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Carried over from the earlier verification and not re-confirmed on the official pages during this check.', status: 'not-confirmed', source: 'https://iao.khu.ac.kr/', verified: null, note: null },
      { name: 'Spring 2027 — second intake', kind: 'round-2', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-11-06', date: '26 October – 6 November 2026', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Carried over from the earlier verification and not re-confirmed on the official pages during this check.', status: 'not-confirmed', source: 'https://iao.khu.ac.kr/', verified: null, note: null },
    ],
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
    breakdown: { published: false },
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
},

{
  id: 'postech',
  name: 'POSTECH (Pohang University of Science and Technology)',
  shortName: 'POSTECH',
  country: 'kr',
  city: 'Pohang',
  region: 'North Gyeongsang',
  type: 'Private research university (science and engineering)',
  brand: { c1: '#d6001c', c2: '#73000f', initials: 'PST' },
  description: 'A small, research-intensive science and engineering university on the east coast of Korea. It opened undergraduate admission to international students from the autumn 2026 semester and describes itself as a bilingual campus.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English — POSTECH states that about 70% of the courses designated for English instruction are delivered in English',
  programs: ['engineering','computer-science','mathematics','biology','economics'],
  englishTaughtPrograms: [],
  programNote: 'POSTECH is a bilingual campus rather than a fully English-taught university: it states that about 70% of courses designated for English instruction are actually taught in English, so a fully English bachelor was not confirmed here.',
  links: {
    website: 'https://www.postech.ac.kr/eng/',
    admissions: 'https://adm-iu.postech.ac.kr/user/admission/guide/international.do',
    applicationPortal: 'https://adm-iu.postech.ac.kr/',
    scholarships: 'https://www.postech.ac.kr/eng/admission-aid/scholarship_types.do',
    cost: 'https://www.postech.ac.kr/eng/admission-aid/scholarship_information.do'
  },
  admissions: {
    platforms: ['POSTECH international undergraduate admissions portal'],
    deadlines: [
      { name: 'International undergraduate admission - Fall 2027 intake', kind: 'intake', entryTerm: 'Fall', entryYear: '2027', date: 'Expected to open March–April 2027', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'POSTECH states that the Fall 2027 intake is expected to open for applications in March-April 2027 and that key dates are subject to change; no interview is required on the international track', source: 'https://adm-iu.postech.ac.kr/user/admission/guide/international.do', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Documents listed in the international admission guide'],
    recommendations: null,
    essay: null,
    interview: 'POSTECH states that an interview is not required for the international admissions track.',
    notes: ['POSTECH participates in the Global Korea Scholarship through the embassy track only.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Accepted English evidence is set in the international admission guide, which was not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Korean universities admit international students by document screening under their own rules; the US test-optional classification does not apply. Whether SAT results are accepted or required was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea (or an equivalent qualification); Korean universities also set separate rules for applicants of overseas Korean descent.'
  },
  costs: {
    breakdown: { tuition: 0, tuitionText: 'Fully waived for admitted international students', includes: 'the full tuition waiver granted with admission, plus a \u20a9500,000 monthly stipend; housing and meals in Pohang are not covered', published: true },
    academicYear: '2026\u20132027',
    currency: 'KRW',
    headline: 'No tuition for admitted international students',
    items: [
      { label: 'Tuition after the international admission waiver', amount: 0 },
      { label: 'Living stipend paid to the student (per month)', amount: 500000 }
    ],
    billedSubtotal: null,
    totalText: 'No tuition: every student admitted through International Admissions receives a full waiver for up to eight semesters',
    note: 'The waiver is unconditional in the first semester and then needs a GPA of at least 3.0 out of 4.3 in the previous semester. The underlying tuition figure before the waiver was not published on the pages read. Housing and food in Pohang are paid from the stipend.',
    source: 'https://adm-iu.postech.ac.kr/user/comm/menu/e2afb97fa1b8f43c574be0dabef78f87/content/index.do',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: true, internationalEligible: true, basis: 'admission', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'Granted to every student admitted through International Admissions I', howToApply: 'No separate application \u2014 the award is made with admission.', note: 'POSTECH gives every admitted international student a full tuition waiver for up to eight semesters plus a monthly stipend of \u20a9500,000, so the package goes beyond tuition. Housing and meals are not listed as covered.' },
    merit: [
      { name: 'Full tuition waiver', amount: 'Full tuition for up to 8 semesters', eligibility: 'All students admitted through International Admissions', deadline: null, application: 'Automatic with admission', renewable: true, note: 'The first semester is unconditional; continuing needs a GPA of at least 3.0 out of 4.3 in the previous semester.' },
      { name: 'Living stipend', amount: '\u20a9500,000 a month, including vacation periods', eligibility: 'International admissions students', deadline: null, application: 'Automatic with admission', renewable: true, note: 'POSTECH states there is no GPA requirement for the stipend.' },
      { name: 'Travel reimbursement', amount: 'One-way economy airfare to Korea plus domestic travel, up to \u20a92,500,000', eligibility: 'New international students', deadline: null, application: 'Automatic with admission', renewable: false, note: null },
      { name: 'TOPIK bonus', amount: '\u20a9300,000, one-time', eligibility: 'Students who reach TOPIK level 4 or higher during a semester', deadline: null, application: null, renewable: false, note: null },
      { name: 'Learning voucher', amount: '\u20a910,000,000 in total, \u20a92,500,000 a year', eligibility: 'Students enrolled from 2024 onwards, after three semesters', deadline: null, application: null, renewable: true, note: null }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'POSTECH awards the international package on admission rather than on financial need.' },
    source: 'https://adm-iu.postech.ac.kr/user/comm/menu/e2afb97fa1b8f43c574be0dabef78f87/content/index.do',
    verified: '2026-09-24'
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International undergraduate admissions guide', url: 'https://adm-iu.postech.ac.kr/user/admission/guide/international.do' },
    { label: 'POSTECH to admit international undergraduate students from Fall 2026', url: 'https://postech.ac.kr/eng/news-center/university_news.do?mode=view&articleNo=23959&title=POSTECH+to+Admit+International+Undergraduate+Students+Beginning+Fall+2026' },
    { label: 'Types of scholarships and eligibility', url: 'https://www.postech.ac.kr/eng/admission-aid/scholarship_types.do' }
  ],
  verification: { level: 'partial', checked: ['new international undergraduate route','expected 2027 application window','interview rule','GKS embassy track participation','language of instruction share','scholarship package (waiver, stipend, travel, TOPIK bonus, voucher)'], unconfirmed: ['tuition figure before the waiver','English test scores','exact deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'unist',
  name: 'UNIST (Ulsan National Institute of Science and Technology)',
  shortName: 'UNIST',
  country: 'kr',
  city: 'Ulsan',
  region: 'Ulsan',
  type: 'National research university (science and engineering)',
  brand: { c1: '#003f7d', c2: '#00203f', initials: 'UNI' },
  description: 'A national science and engineering university in Ulsan that teaches in English and gives newly admitted international undergraduates a full tuition waiver in their first semester, with merit-based waivers afterwards.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','biology','mathematics','business'],
  englishTaughtPrograms: ['engineering','computer-science','biology','mathematics','business'],
  programNote: 'UNIST teaches its undergraduate courses in English; students choose a major track after a common first year.',
  links: {
    website: 'https://www.unist.ac.kr/',
    admissions: 'https://admu-intl.unist.ac.kr/admission/guidelines/',
    applicationPortal: 'https://admu-intl.unist.ac.kr/',
    scholarships: 'https://admu-intl.unist.ac.kr/admission-eng/life/scholarships.do',
    cost: 'https://admu-intl.unist.ac.kr/admission-eng/life/scholarships.do'
  },
  admissions: {
    platforms: ['UNIST international undergraduate online application'],
    deadlines: [
      { name: 'Undergraduate admission for international applicants (Fall intake)', kind: 'intake', entryTerm: 'Fall', entryYear: '2027', date: 'Published in the annual admission guideline', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'UNIST publishes a guideline for each intake; the 2027 dates were not read during this check', source: 'https://admu-intl.unist.ac.kr/admission/guidelines/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English test report taken within two years of the online application deadline (unless exempt)', 'Documents listed in the admission guideline'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['From the second year a tuition waiver depends on results: 12 credits or more with a GPA of 2.7 or above gives a full waiver, and a GPA of 2.0 or above gives a half waiver.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'An English test report is required, taken within two years before the online application deadline. Applicants from the USA, Canada, the UK, Australia, New Zealand and Ireland are exempt. The minimum scores were not read during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the minimum was not read during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Applicants from the USA, Canada, the UK, Australia, New Zealand and Ireland do not submit an English test report.',
    note: 'Test reports must be recent — within two years of the application deadline.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea (or an equivalent qualification); Korean universities also set separate rules for applicants of overseas Korean descent.'
  },
  costs: {
    breakdown: { tuition: 3316500, tuitionText: '\u20a93,316,500 per semester for engineering (\u20a92,795,500 for business), fully waived for new international students', period: 'semester', includes: 'the published semester tuition before the waiver; accommodation, food and insurance are handled by the separate living scholarships', published: true },
    academicYear: '2026\u20132027',
    currency: 'KRW',
    headline: '\u20a93,316,500 per semester, waived for new international students',
    items: [
      { label: 'Tuition \u2014 engineering (per semester)', amount: 3316500 },
      { label: 'Tuition \u2014 business (per semester)', amount: 2795500 },
      { label: 'Tuition actually paid by a new international student', amount: 0 }
    ],
    billedSubtotal: null,
    totalText: 'Published tuition is \u20a93,316,500 a semester for engineering and \u20a92,795,500 for business, and every freshman international student receives a full tuition scholarship',
    note: 'From the second year the waiver is full with 12 or more credits and a GPA of 2.7 or above, and half with a GPA of 2.0 or above. UNIST separately pays a living scholarship of \u20a9130,000 to \u20a9630,000 a month with meals, and reimburses health insurance of \u20a975,000 a month. Other living costs in Ulsan are extra.',
    source: 'http://admu-intl.unist.ac.kr/admission-eng/life/scholarships.do',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: false, meals: true, insurance: true, books: false }, renewable: true, competitiveness: 'Every freshman receives the full tuition scholarship; the living scholarship tier is set by UNIST on acceptance.', howToApply: 'Applied automatically to admitted international students.', note: 'Tuition, two meals a day and health insurance are covered, and a monthly stipend is paid, but accommodation and other personal costs are not listed as covered, so UNIST does not describe this as a full ride.' },
    merit: [
      { name: 'International undergraduate tuition waiver', amount: 'Full tuition in the first year; later full or half by results', eligibility: 'Newly admitted international undergraduates; from the second year, 12+ credits with GPA 2.7+ for a full waiver or GPA 2.0+ for a half waiver', deadline: null, application: 'Automatic', renewable: true, note: null },
      { name: 'Global Uni-Star Scholarship (Gold)', amount: '\u20a9630,000 a month with meals', eligibility: 'Tier set by UNIST when the offer is made', deadline: null, application: 'Automatic', renewable: true, note: 'Renewal needs at least 12 credits and a GPA between 2.0 and 2.7 depending on the tier.' },
      { name: 'Global Uni-Star Scholarship (Silver)', amount: '\u20a9330,000 a month with meals', eligibility: 'Tier set by UNIST when the offer is made', deadline: null, application: 'Automatic', renewable: true, note: null },
      { name: 'Global Dream Scholarship', amount: '\u20a9130,000 a month with meals', eligibility: 'Tier set by UNIST when the offer is made', deadline: null, application: 'Automatic', renewable: true, note: null },
      { name: 'Health insurance reimbursement', amount: '\u20a975,000 a month, reimbursed on proof of payment', eligibility: 'International undergraduate students', deadline: null, application: null, renewable: true, note: null }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'UNIST awards these on admission and academic results rather than on financial need.' },
    source: 'http://admu-intl.unist.ac.kr/admission-eng/life/scholarships.do',
    verified: '2026-09-24'
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate admission guidelines for international applicants', url: 'https://admu-intl.unist.ac.kr/admission/guidelines/' },
    { label: 'Scholarships', url: 'https://admu-intl.unist.ac.kr/admission-eng/life/scholarships.do' },
    { label: '2026 Fall undergraduate admission guideline (PDF)', url: 'https://admu-intl.unist.ac.kr/wp-content/uploads/2014/12/2026-Fall-undergraduate-admission-guideline-for-International-applicant-updated.pdf' }
  ],
  verification: { level: 'partial', checked: ['English-taught degrees','first-semester tuition waiver','tuition per semester by field','living scholarship tiers and conditions','health insurance reimbursement'], unconfirmed: ['English minimum scores','2027 dates','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'handong-global-university',
  name: 'Handong Global University',
  shortName: 'Handong',
  country: 'kr',
  city: 'Pohang',
  region: 'North Gyeongsang',
  type: 'Private Christian university',
  brand: { c1: '#00437a', c2: '#00223d', initials: 'HGU' },
  description: 'A private Christian university in Pohang with ten undergraduate programmes taught fully in English, including Global Management, Information Technology and US & International Law, and a scholarship that covers tuition and dormitory fees.',
  englishTaught: true,
  languageOfInstruction: 'Korean and English; ten programmes are taught 100% in English',
  programs: ['business','computer-science','law','social-sciences','engineering','humanities'],
  englishTaughtPrograms: ['business','computer-science','law','humanities'],
  programNote: 'Handong states that about 40% of major courses are taught in English and that ten selected programmes — including Global Management, Information Technology, US & International Law and Global Korean Studies — are taught entirely in English.',
  links: {
    website: 'https://www.handong.edu/eng/',
    admissions: 'https://www.handong.edu/eng/admission/undergraduate/application/overview/',
    applicationPortal: 'https://www.handong.edu/eng/admission/undergraduate/',
    scholarships: 'https://www.handong.edu/eng/admission/undergraduate/scholarship/new/',
    cost: 'https://www.handong.edu/eng/admission/undergraduate/tuition/',
    programs: 'https://www.handong.edu/eng/academics/undergraduate/english-programs/english/'
  },
  admissions: {
    platforms: ['Handong Global University online application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guideline for prospective international students', status: 'not-confirmed', binding: false, appliesTo: 'International applicants', conditions: 'Dates are published in the annual guideline; the 2027 dates were not read during this check', source: 'https://www.handong.edu/eng/admission/undergraduate/application/overview/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Documents listed in the admission guideline'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Scholarship eligibility is limited to applicants who hold a nationality other than Korean and graduated from a high school outside Korea.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'The admission guideline lists the accepted English evidence; the scores were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea (or an equivalent qualification); Korean universities also set separate rules for applicants of overseas Korean descent.'
  },
  costs: {
    breakdown: { tuition: 4023000, tuitionText: '\u20a94,023,000 for the first semester, then \u20a93,171,000\u2013\u20a94,068,000 depending on the area of study', period: 'semester', includes: 'tuition for one semester; housing, food and living costs in Pohang are extra', published: true },
    academicYear: '2025\u20132026',
    currency: 'KRW',
    headline: '\u20a94,023,000 tuition in the first semester',
    items: [
      { label: 'Tuition \u2014 freshman, first semester', amount: 4023000 },
      { label: 'Tuition \u2014 freshman, second semester', amount: 3843000 },
      { label: 'Tuition \u2014 humanities and social science', amount: 3171000 },
      { label: 'Tuition \u2014 engineering and arts', amount: 4068000 },
      { label: 'Tuition \u2014 combined humanities and engineering track', amount: 3618000 }
    ],
    billedSubtotal: null,
    totalText: 'About \u20a97,866,000 in the first year for a freshman, before any scholarship',
    note: 'These are the Fall 2025 rates published by Handong, which states that tuition is decided every January and is subject to change. The Cornerstone Scholarship can cover tuition and the dormitory fee for four years.',
    source: 'https://www.handong.edu/eng/admission/undergraduate/tuition/',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: true, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: true, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'Awarded to selected international applicants; the number of awards was not published on the pages read.', howToApply: 'Applied for with the admission application.', note: 'The Cornerstone Scholarship covers 100% of tuition and the dormitory fee for four years, and requires a GPA of at least 3.0 each semester. Food, insurance and personal costs are not included, so it is close to but not literally a full ride.' },
    merit: [
      { name: 'Cornerstone Scholarship', amount: '100% of tuition and the dormitory fee for four years', eligibility: 'International applicants holding a non-Korean nationality who graduated from a high school outside Korea', deadline: null, application: 'With the admission application', renewable: true, note: 'A GPA of at least 3.0 each semester is needed to keep it.' },
      { name: 'Scholarship for Academic Performance', amount: 'Continued tuition support based on GPA and English score', eligibility: 'From the second semester onwards', deadline: null, application: null, renewable: true, note: null }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Scholarships for new international students', url: 'https://www.handong.edu/eng/admission/undergraduate/scholarship/new/' },
    { label: 'English-taught programmes', url: 'https://www.handong.edu/eng/academics/undergraduate/english-programs/english/' },
    { label: 'Undergraduate admission overview', url: 'https://www.handong.edu/eng/admission/undergraduate/application/overview/' }
  ],
  verification: { level: 'partial', checked: ['English-taught programmes','Cornerstone Scholarship coverage and conditions','tuition per semester by area of study'], unconfirmed: ['English scores','2027 dates','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'gist',
  name: 'GIST (Gwangju Institute of Science and Technology)',
  shortName: 'GIST',
  country: 'kr',
  city: 'Gwangju',
  region: 'Gwangju',
  type: 'National research university (science and engineering)',
  brand: { c1: '#00539b', c2: '#002b52', initials: 'GIS' },
  description: 'A national science and engineering institute in Gwangju with a small English-taught undergraduate school, where admitted international students are selected as government-funded scholars.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['engineering','computer-science','biology','mathematics'],
  englishTaughtPrograms: ['engineering','computer-science','biology','mathematics'],
  programNote: 'The undergraduate school takes a small intake and teaches in English, with a broad first year before students choose a major.',
  links: {
    website: 'https://www.gist.ac.kr/en/',
    admissions: 'https://ewww.gist.ac.kr/iadm/main.html',
    applicationPortal: 'https://ipa.gist.ac.kr/iuadm/',
    scholarships: 'https://www.gist.ac.kr/iadm/html/sub04/0401.html',
    cost: 'https://www.gist.ac.kr/iadm/html/sub04/0401.html'
  },
  admissions: {
    platforms: ['GIST international undergraduate application'],
    deadlines: [
      { name: 'International undergraduate admission (Fall intake)', kind: 'intake', entryTerm: 'Fall', entryYear: '2027', date: 'Published in the annual admission guideline', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'GIST publishes a guideline for each intake; the 2027 dates were not read during this check', source: 'https://ipa.gist.ac.kr/iuadm/img/main/2026_Fall_Undergraduate_Admission_Guideline.pdf', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Official English test score unless exempt', 'Documents listed in the admission guideline'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Applicants from countries without an official English test, or in unavoidable circumstances, can be admitted conditionally and have six months to submit the score.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'IELTS 6.5 is listed as the minimum accepted English score for international applicants.' },
    toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, recommended: null }], note: 'TOEFL iBT 80 (or PBT 550) is the published minimum; TOEIC 750 and TEPS 285 are also accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Applicants holding a bachelor degree or higher from a university in Australia, Canada, Ireland, New Zealand, the UK or the USA can be exempted with prior GIST approval.',
    note: 'Conditional admission is possible where an official test is unavailable, with six months to provide the score.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { tuition: 7214000, includes: 'tuition of ₩3,607,000 per semester, which GIST states is fully supported for admitted international students; a one-time matriculation fee of ₩680,000 applies to new students unless exempt' },
    academicYear: '2026–2027',
    currency: 'KRW',
    headline: '₩3,607,000 tuition per semester — fully supported',
    items: [
      { label: 'Tuition (per semester)', amount: 3607000 },
      { label: 'Matriculation fee (one-time, new students)', amount: 680000 }
    ],
    billedSubtotal: null,
    totalText: '₩7,214,000 a year in tuition, which GIST states is fully supported for admitted international students',
    note: 'Full tuition support does not cover housing, food or personal costs.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'GIST states that all admitted international undergraduates are selected as government-funded scholars.', howToApply: 'Applied through the admission process.', note: 'Tuition is fully supported and supplementary scholarships exist, but housing, food and personal costs are not confirmed as covered, so this is not stated as a full ride.' },
    merit: [ { name: 'Government-funded scholar status for admitted international undergraduates', amount: 'Full tuition support (₩3,607,000 per semester)', eligibility: 'All admitted international undergraduate students', deadline: null, application: 'Automatic on admission', renewable: true, note: 'GIST also lists supplementary scholarships.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'GIST scholarships and financial support', url: 'https://www.gist.ac.kr/iadm/html/sub04/0401.html' },
    { label: '2026 Fall undergraduate admission guideline (PDF)', url: 'https://ipa.gist.ac.kr/iuadm/img/main/2026_Fall_Undergraduate_Admission_Guideline.pdf' },
    { label: 'International admissions', url: 'https://ewww.gist.ac.kr/iadm/main.html' }
  ],
  verification: { level: 'partial', checked: ['English requirements and exemptions','tuition and its support','matriculation fee'], unconfirmed: ['2027 application dates','application fee','what scholarships cover beyond tuition'] },
  lastVerified: '2026-09-23'
},

{
  id: 'inha-university',
  name: 'Inha University',
  shortName: 'Inha',
  country: 'kr',
  city: 'Incheon',
  region: 'Incheon',
  type: 'Private research university',
  brand: { c1: '#00437b', c2: '#00223f', initials: 'INH' },
  description: 'A private university in Incheon with engineering, logistics and business strengths and admission scholarships for international students based on English or Korean test scores.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English depending on the programme',
  programs: ['engineering','business','computer-science','economics','social-sciences','biology'],
  englishTaughtPrograms: [],
  programNote: 'Inha teaches in both Korean and English; whether a full bachelor can be completed in English was not confirmed during this check, so applicants should check the programme they want.',
  links: {
    website: 'https://eng.inha.ac.kr/eng/',
    admissions: 'https://internationalcenter.inha.ac.kr/',
    applicationPortal: 'https://internationalcenter.inha.ac.kr/',
    scholarships: 'https://internationalcenter.inha.ac.kr/internationalcenter/9987/subview.do',
    cost: 'https://internationalcenter.inha.ac.kr/internationalcenter/9988/subview.do'
  },
  admissions: {
    platforms: ['Inha University international student application'],
    deadlines: [
      { name: 'Undergraduate international student admission (Fall intake)', kind: 'intake', entryTerm: 'Fall', entryYear: '2027', date: 'Published in the admission guideline', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Inha publishes a guideline for each intake; the 2027 dates were not read during this check', source: 'https://internationalcenter.inha.ac.kr/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language test certificates (English or Korean) submitted before admission if used for a scholarship', 'Documents listed in the admission guideline'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Admission scholarships are decided only after the language certificates are submitted before admission and the documents are screened.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'TOEFL and IELTS scores are used both for admission and to decide admission scholarships; the thresholds were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Korean language test scores can be used instead of English for some scholarships.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'Inha publishes tuition and fees for international students on its international centre pages; the figures were not read during this check' },
    academicYear: '2026–2027',
    currency: 'KRW',
    headline: 'Tuition published on the international centre pages',
    items: [ { label: 'Tuition and fees', text: 'Published by the international centre; not read during this check' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official tuition page',
    note: 'Living costs in Incheon are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: 'merit', covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Inha offers admission scholarships of one, two or four years based on TOEFL or IELTS scores; the percentages were not read during this check.' },
    merit: [
      { name: 'Admission scholarship based on English test scores', amount: 'One, two or four years of support, depending on the score', eligibility: 'International applicants who submit qualifying TOEFL or IELTS results before admission', deadline: 'Certificates must be submitted before admission', application: 'Through the admission process', renewable: null, note: null },
      { name: 'Jungseok International Scholarship', amount: 'Not confirmed during this check', eligibility: 'Awarded on Korean or English language proficiency test scores', deadline: null, application: null, renewable: null, note: null }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Scholarships for international students', url: 'https://internationalcenter.inha.ac.kr/internationalcenter/9987/subview.do' },
    { label: 'Tuition and fees', url: 'https://internationalcenter.inha.ac.kr/internationalcenter/9988/subview.do' },
    { label: 'Jungseok International Scholarship', url: 'https://internationalcenter.inha.ac.kr/internationalcenter/9993/subview.do' }
  ],
  verification: { level: 'partial', checked: ['scholarship structure (score-based)','international admission route'], unconfirmed: ['whether a full bachelor is available in English','tuition amounts','English score thresholds','deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'sogang-university',
  name: 'Sogang University',
  shortName: 'Sogang',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'Private Jesuit research university',
  brand: { c1: '#8b1e3f', c2: '#4a0f21', initials: 'SOG' },
  description: 'A private Jesuit university in Seoul, strong in economics, business and humanities, that teaches undergraduate courses in both Korean and English and admits international students in a late-autumn round.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English',
  programs: ['economics','business','humanities','social-sciences','computer-science','engineering'],
  englishTaughtPrograms: [],
  programNote: 'Sogang states that undergraduate programmes are delivered in Korean and English; whether a specific degree can be completed entirely in English was not confirmed during this check.',
  links: {
    website: 'https://wwwe.sogang.ac.kr/wwwe/index.html',
    admissions: 'https://wwwe.sogang.ac.kr/wwwe/admissionprograms.html',
    applicationPortal: 'https://admission.sogang.ac.kr/',
    scholarships: 'https://wwwe.sogang.ac.kr/wwwe/scholarships_01.html',
    cost: 'https://wwwe.sogang.ac.kr/wwwe/admissionprograms.html'
  },
  admissions: {
    platforms: ['Sogang international student application'],
    deadlines: [
      { name: 'International undergraduate admission round', kind: 'intake', entryTerm: 'Spring', entryYear: '2027', date: 'Applications generally fall between November and December', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Sogang states that application deadlines fall between November and December; the exact 2027 dates were not read during this check', source: 'https://wwwe.sogang.ac.kr/wwwe/admissionprograms.html', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency certificates submitted during the application period', 'Documents listed in the admissions guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Language certificates must be submitted during the application period if they are to count for the scholarship.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS is accepted, but Sogang publishes no single numeric minimum: applicants without TOPIK level 3 can be admitted on academic qualifications or on English ability shown through TOEFL, IELTS or a similar test.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; no numeric minimum was published on the pages read.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'TOEIC and TEPS certificates are also accepted, and TOPIK level 3 or above is the Korean-side requirement.',
    waiver: 'Native English speakers from the USA, the UK, Canada, Australia, New Zealand and Ireland, and graduates of universities where teaching was entirely in English, can be exempt.',
    note: 'The English score report must be valid at submission and from a test taken within the past two years as of the application date. Sogang uses both English and Korean proficiency evidence in its international admission and scholarship decisions.',
    source: 'https://wwwe.sogang.ac.kr/wwwe/admissionprograms.html',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Korean proficiency (TOPIK) is used alongside English evidence.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'Sogang publishes tuition per school and programme; the figures were not read during this check' },
    academicYear: '2026–2027',
    currency: 'KRW',
    headline: 'Tuition published per school and programme',
    items: [ { label: 'Tuition', text: 'Varies by school and programme; published in the admissions materials' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official admissions pages',
    note: 'Living costs in Seoul are extra.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'The confirmed award is a partial first-semester tuition reduction.' },
    merit: [ { name: 'Language proficiency scholarship', amount: '20% of the first-semester tuition fee', eligibility: 'International students who meet the conditions for both English and Korean proficiency', deadline: 'Certificates must be submitted during the application period', application: 'With the admission application', renewable: false, note: null } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate programmes for international students', url: 'https://wwwe.sogang.ac.kr/wwwe/admissionprograms.html' },
    { label: 'Scholarships', url: 'https://wwwe.sogang.ac.kr/wwwe/scholarships_01.html' }
  ],
  verification: { level: 'partial', checked: ['application window (approximate)','language scholarship value','english (accepted tests, TOPIK alternative and waiver rules)'], unconfirmed: ['fully English-taught degrees','tuition amounts','English score thresholds','exact deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'chung-ang-university',
  name: 'Chung-Ang University',
  shortName: 'Chung-Ang',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'Private research university',
  brand: { c1: '#00205b', c2: '#001133', initials: 'CAU' },
  description: 'A large private university in Seoul with strong media, business and engineering faculties and a dedicated international admissions office.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English depending on the programme',
  programs: ['business','engineering','computer-science','arts','social-sciences','economics','psychology'],
  englishTaughtPrograms: [],
  programNote: 'Chung-Ang teaches mostly in Korean with English-taught courses in some departments; a fully English-taught bachelor was not confirmed during this check.',
  links: {
    website: 'https://neweng.cau.ac.kr/',
    admissions: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=410',
    applicationPortal: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=540',
    scholarships: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=550&CONTENTS_NO=2',
    cost: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=410'
  },
  admissions: {
    platforms: ['Chung-Ang University online application for international students'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guideline', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=410', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admission guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Scholarship decisions are made within the university budget, with the strongest applicants chosen on grade average and admission results.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'Chung-Ang lists IELTS 6.5 overall alongside TOPIK level 5, TOEFL iBT 91 and TOEIC 780 as the language thresholds used for newly admitted international students. These figures are tied to the scholarship assessment rather than to a bare admission minimum.' },
    toefl: { min: 91, recommended: null, scales: [{ period: 'pre2026', min: 91, note: 'TOEFL iBT above 91.' }], note: 'TOEFL iBT above 91 is the published threshold.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'TOEIC above 780, and TOPIK level 5 or above on the Korean side.',
    waiver: null,
    note: 'Students who reach these levels submit their original transcript before the deadline for the scholarship assessment. The bare admission minimum is set in the admission guide and was not confirmed during this check.',
    source: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=410',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Korean proficiency (TOPIK) is commonly used for Korean-taught programmes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'Chung-Ang publishes tuition in its admission materials; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission materials',
    items: [ { label: 'Tuition', text: 'Published per college in the admission materials' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official admission pages',
    note: 'Living costs in Seoul are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate admission', url: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=410' },
    { label: 'Scholarship and benefits', url: 'https://neweng.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=550&CONTENTS_NO=2' },
    { label: 'Office of International Affairs', url: 'https://oia.cau.ac.kr/sub06/sub03_2.php' }
  ],
  verification: { level: 'partial', checked: ['international admission route exists','scholarship selection basis','english (IELTS, TOEFL, TOEIC and TOPIK thresholds)'], unconfirmed: ['English-taught degrees','tuition','deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'hufs',
  name: 'Hankuk University of Foreign Studies',
  shortName: 'HUFS',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'Private university (languages and international studies)',
  brand: { c1: '#003f87', c2: '#002145', initials: 'HUF' },
  description: 'A private Seoul university specialising in languages, area studies and international affairs, with English-taught departments such as English for International Communication and Conferences.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English; some departments teach in English',
  programs: ['humanities','social-sciences','business','economics','law'],
  englishTaughtPrograms: [],
  programNote: 'HUFS states that a range of courses is taught in English and names departments such as EICC and ELLT, but also that not all departments offer English-taught courses, so a fully English bachelor should be confirmed per department.',
  links: {
    website: 'https://www.hufs.ac.kr/',
    admissions: 'https://international.hufs.ac.kr/',
    applicationPortal: 'https://international.hufs.ac.kr/',
    scholarships: 'https://international.hufs.ac.kr/',
    cost: 'https://international.hufs.ac.kr/'
  },
  admissions: {
    platforms: ['HUFS international admissions application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Fall', entryYear: '2027', date: 'Published in the admission guideline', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://international.hufs.ac.kr/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Proof that neither biological parent nor legal guardian holds Korean citizenship', 'Language proficiency evidence'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Eligibility requires that both biological parents, or the current legal guardians, are not Korean citizens.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'HUFS accepts the IELTS Academic band score and IELTS Online, but not IELTS Indicator. The numeric minimum for undergraduate admission was not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the minimum was not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    otherTests: 'Students majoring in International Studies must submit TOPIK level 3 or above to graduate, and a TOPIK level 4 or above excludes a student from the bridge programmes.',
    waiver: 'No official English score is required from applicants whose native or official language is English, or who completed at least three years of high school or university education in an English-speaking country \u2014 unless they then lived more than two years in a non-English-speaking country.',
    note: 'Requirements are published in the annual admission guide for each intake.',
    source: 'https://international.hufs.ac.kr/sites/international/contents/files/2026fall/HUFS_2026_Fall_Admission_guide(ENG)_update_ver.pdf',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is used for Korean-taught programmes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'HUFS publishes tuition and waiver rules in its admission guide; the amounts were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission guide',
    items: [
      { label: 'Tuition', text: 'Published in the annual admission guide' },
      { label: 'Tuition waiver', text: 'Fully waived during regular semesters for students majoring or minoring in Korean-related or East Asian studies; partially waived for other fields' }
    ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official admission guide',
    note: 'The waiver rule means the real cost depends heavily on the chosen major.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'A full tuition waiver applies to students majoring or minoring in Korean-related or East Asian studies; it does not cover housing or living costs.' },
    merit: [ { name: 'Tuition waiver by field of study', amount: 'Full waiver for Korean-related or East Asian studies majors and minors; partial waiver for other fields', eligibility: 'International undergraduate students during regular semesters', deadline: null, application: 'Applied by the university', renewable: null, note: 'Confirmed from the HUFS admission guide summary; the detailed conditions were not read during this check.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International student services', url: 'https://international.hufs.ac.kr/' },
    { label: '2026 Fall admission guide (PDF)', url: 'https://international.hufs.ac.kr/sites/international/contents/files/2026fall/HUFS_2026_Fall_Admission_guide(ENG)_update_ver.pdf' },
    { label: 'English-taught courses', url: 'https://exchange.hufs.ac.kr/Course-Information/How-to-Register/English-taught-Courses' }
  ],
  verification: { level: 'partial', checked: ['eligibility rule on citizenship','tuition waiver by field','English-taught departments (partial)','english (accepted IELTS versions and waiver rules)'], unconfirmed: ['fully English-taught degrees','tuition amounts','language score requirements','deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'ajou-university',
  name: 'Ajou University',
  shortName: 'Ajou',
  country: 'kr',
  city: 'Suwon',
  region: 'Gyeonggi',
  type: 'Private research university',
  brand: { c1: '#0055a5', c2: '#002c56', initials: 'AJU' },
  description: 'A private research university in Suwon, south of Seoul, with English-track undergraduate admission, published English requirements and a set of entry scholarships for international students.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English; an English track exists for international students',
  programs: ['engineering','business','computer-science','social-sciences','economics','biology'],
  englishTaughtPrograms: [],
  programNote: 'Ajou runs English-track admission with its own English requirements; which degrees can be completed fully in English should be checked on the departments page.',
  links: {
    website: 'https://www.ajou.ac.kr/iadmissions_en/index.do',
    admissions: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/guideline.do',
    applicationPortal: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/guideline.do',
    scholarships: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/scholarship.do',
    cost: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/tuition.do',
    programs: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/major.do'
  },
  admissions: {
    platforms: ['Ajou international admissions online application'],
    deadlines: [
      { name: 'Spring 2027 international undergraduate admission', kind: 'application-window', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-11-20', date: '28 September \u2013 20 November 2026', time: '17:00', timezone: 'KST', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Online application and document submission open 28 September 2026 at 09:00; results announced 31 December 2026 at 18:00, with tuition payment and certificate issuance in January\u2013February 2027 and orientation in February 2027', status: 'confirmed', source: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/qualification.do', verified: '2026-09-24', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Official English test score for the English track', 'Documents listed in the admission guideline'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Continuing students need at least 12 credits in the previous semester and a GPA of 2.0 or above to keep a scholarship.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'IELTS 6.5 is the published requirement for the English track (TOEFL iBT 80 or an equivalent official test is also accepted).' },
    toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, recommended: null }], note: 'TOEFL iBT 80 is the published English-track requirement.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'English-track entry scholarships are decided on TOEFL, IELTS or an equivalent official score.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is used for Korean-taught routes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { tuition: 3748000, tuitionText: '\u20a93,748,000\u2013\u20a95,143,000 per semester depending on the college', period: 'semester', includes: 'tuition for one semester by college; housing and living costs in Suwon are extra', published: true },
    academicYear: '2026\u20132027',
    currency: 'KRW',
    headline: '\u20a93,748,000\u2013\u20a95,143,000 per semester',
    items: [
      { label: 'Tuition \u2014 humanities, social sciences and business administration', amount: 3748000 },
      { label: 'Tuition \u2014 International Business, Korean track', amount: 4050000 },
      { label: 'Tuition \u2014 International Business, English track', amount: 4270000 },
      { label: 'Tuition \u2014 natural sciences', amount: 4349000 },
      { label: 'Tuition \u2014 engineering, information technology and computing', amount: 4916000 }
    ],
    billedSubtotal: null,
    totalText: 'About \u20a97,500,000\u2013\u20a99,800,000 a year depending on the college, before any scholarship',
    note: 'Ajou publishes these figures in US dollars at a reference rate of 1 USD = 1,000 KRW, and states that tuition is subject to change and may differ each semester. Living costs in Suwon are lower than in central Seoul but are extra.',
    source: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/tuition.do',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: 'merit', covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: true, competitiveness: null, howToApply: 'Entry scholarships are decided with admission; continuing awards depend on credits and GPA.', note: 'Ajou Global Scholarships 1–4 apply to entering students; the percentage each covers was not read during this check.' },
    merit: [ { name: 'Ajou Global Scholarships 1–4', amount: 'Not confirmed during this check', eligibility: 'Students entering in their first semester; English-track awards are based on TOEFL, IELTS or an equivalent score', deadline: null, application: 'With the admission application', renewable: true, note: 'Continuing students need 12+ credits and a GPA of 2.0 or above.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Scholarships for international undergraduates', url: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/scholarship.do' },
    { label: 'Tuition and fees', url: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/tuition.do' },
    { label: 'Eligibility and admission schedule', url: 'https://www.ajou.ac.kr/iadmissions_en/undergraduate/qualification.do' }
  ],
  verification: { level: 'partial', checked: ['English-track English requirements','scholarship structure and renewal rules','tuition (per semester by college)','Spring 2027 application window and result date','Korean proficiency requirement'], unconfirmed: ['which degrees are fully English-taught','scholarship values'] },
  lastVerified: '2026-09-23'
},

{
  id: 'konkuk-university',
  name: 'Konkuk University',
  shortName: 'Konkuk',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'Private research university',
  brand: { c1: '#00693c', c2: '#00381f', initials: 'KON' },
  description: 'A large private university in Seoul with a second campus in Chungju. It teaches more than 500 courses in English each semester and offers tuition waivers of 40–100% to students who keep good academic standing.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English; more than 500 courses a semester are taught in English',
  programs: ['business','engineering','computer-science','arts','social-sciences','biology','economics'],
  englishTaughtPrograms: [],
  programNote: 'Konkuk states that over 500 courses are taught in English each semester, but a complete English-taught bachelor was not confirmed during this check.',
  links: {
    website: 'https://en.konkuk.ac.kr/',
    admissions: 'https://ciss.konkuk.ac.kr/ciss/18391/subview.do',
    applicationPortal: 'https://ciss.konkuk.ac.kr/ciss/18391/subview.do',
    scholarships: 'https://ciss.konkuk.ac.kr/ciss/18391/subview.do',
    cost: 'https://ciss.konkuk.ac.kr/ciss/18391/subview.do'
  },
  admissions: {
    platforms: ['Konkuk international student application'],
    deadlines: [
      { name: 'Undergraduate admission for international students (Fall 2026 guideline published)', kind: 'intake', entryTerm: 'Fall', entryYear: '2026', date: 'Published in the Fall 2026 admission guidelines', status: 'previous-cycle', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Konkuk publishes separate spring and fall guidelines; the 2027 dates were not published when this was checked', source: 'https://ciss.konkuk.ac.kr/sites/ciss/files/260205_Fall_Semester_Admission_Guidelines_pc_en.pdf', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admission guidelines'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Scholarships of 40% to 100% of tuition go to students who pass more than 15 credits and keep good academic standing.']
  },
  english: {
    ielts: { min: null, recommended: 5.5, note: 'Konkuk publishes IELTS 5.5 as one of the language levels international students must reach to graduate, alongside TOPIK level 4, TOEFL iBT 80, TOEIC 800 and TEPS 550. The level required for admission itself was not confirmed during this check.' },
    toefl: { min: null, recommended: 80, scales: [{ period: 'pre2026', min: null, recommended: 80, note: 'TOEFL iBT 80 is listed among the graduation language options.' }], note: 'TOEFL iBT 80 appears as a graduation requirement option rather than an admission minimum.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'TOEIC 800 and TEPS 550 are listed as alternatives, and TOPIK level 4 or above on the Korean side.',
    waiver: null,
    note: 'All international students must reach TOPIK level 4 or one of the listed English levels to graduate, and admitted students may be placed in Korean language courses by proficiency.',
    source: 'https://ciss.konkuk.ac.kr/sites/ciss/files/260205_Fall_Semester_Admission_Guidelines_pc_en.pdf',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is used for Korean-taught routes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'Konkuk publishes tuition in its admission guidelines; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission guidelines',
    items: [ { label: 'Tuition', text: 'Published per college in the admission guidelines' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official guidelines',
    note: 'Living costs in Seoul are extra.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'A 100% waiver is the top band of a 40–100% scale.', howToApply: 'Awarded on academic results after enrolment.', note: 'Even a 100% tuition waiver leaves housing, food and living costs to the student.' },
    merit: [ { name: 'Academic tuition waiver', amount: '40% to 100% of tuition', eligibility: 'Students who pass more than 15 credits and keep good academic standing', deadline: null, application: 'Awarded on results', renewable: true, note: null } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Konkuk also points to the Korean government scholarship programme.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International student services and admissions', url: 'https://ciss.konkuk.ac.kr/ciss/18391/subview.do' },
    { label: 'Fall 2026 undergraduate admission guidelines (PDF)', url: 'https://ciss.konkuk.ac.kr/sites/ciss/files/260205_Fall_Semester_Admission_Guidelines_pc_en.pdf' },
    { label: 'Undergraduate international students', url: 'https://old.konkuk.ac.kr/eng/jsp/Admissions/undergraduate_international_students.jsp' }
  ],
  verification: { level: 'partial', checked: ['English-taught course volume','tuition waiver scale and conditions','previous-cycle guideline','english (graduation language levels and TOPIK requirement)'], unconfirmed: ['fully English-taught degrees','tuition amounts','2027 dates'] },
  lastVerified: '2026-09-23'
},

{
  id: 'pusan-national-university',
  name: 'Pusan National University',
  shortName: 'PNU',
  country: 'kr',
  city: 'Busan',
  region: 'Busan',
  type: 'National research university',
  brand: { c1: '#004c97', c2: '#00294f', initials: 'PNU' },
  description: "A national university in Busan, one of Korea's largest public universities, with international admission that accepts either Korean or English proficiency evidence and score-based scholarships.",
  englishTaught: false,
  languageOfInstruction: 'Korean, with some courses in English',
  programs: ['engineering','business','humanities','social-sciences','biology','medicine','economics'],
  englishTaughtPrograms: [],
  programNote: 'Teaching is mainly in Korean; applicants can submit either Korean (TOPIK) or English proficiency evidence, and should check with the department whether their degree can be taken in English.',
  links: {
    website: 'https://www.pusan.ac.kr/eng/Main.do',
    admissions: 'https://www.pusan.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN013',
    applicationPortal: 'https://www.pusan.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN013',
    scholarships: 'https://www.pusan.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN016',
    cost: 'https://www.pusan.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN016'
  },
  admissions: {
    platforms: ['PNU international student application'],
    deadlines: [
      { name: 'Undergraduate admission for international students', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the international admission brochure', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'TOPIK applicants submit the test ID slip during the application period and email the result by the stated deadline; the 2027 dates were not read during this check', source: 'https://www.pusan.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN013', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Certificate of English or Korean proficiency', 'Documents listed in the admission brochure'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['PNU states that there is no separate application for its honor scholarship: the language certificate submitted with the admission application is reviewed and the award depends on grades.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Either an English or a Korean proficiency certificate can be submitted with the application.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is accepted as the Korean proficiency evidence.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'PNU publishes tuition in its admission materials; as a national university its fees are lower than most private universities, but the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission materials',
    items: [ { label: 'Tuition', text: 'Published per college in the admission materials' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official admission materials',
    note: 'Living costs in Busan are generally lower than in Seoul.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: 'merit', covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: 'No separate application: the language certificate submitted with the admission application is reviewed.', note: 'One PNU scholarship pays ₩500,000 a month and can be held alongside grade-based awards; the tuition share was not read during this check.' },
    merit: [ { name: 'PNU honor scholarship', amount: 'Depends on grades; a separate award pays ₩500,000 a month', eligibility: 'International students who submit a language proficiency certificate with the application', deadline: 'With the admission application', application: 'No separate application', renewable: null, note: null } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate admissions', url: 'https://www.pusan.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN013' },
    { label: 'PNU scholarship programs', url: 'https://www.pusan.ac.kr/eng/CMS/Contents/Contents.do?mCode=MN016' },
    { label: 'Admissions for international students (PDF brochure)', url: 'https://international.pusan.ac.kr/sites/international/download/brochure/005-Admissons%20For%20International%20Student(English).pdf' }
  ],
  verification: { level: 'partial', checked: ['language evidence rule','scholarship process and one award value'], unconfirmed: ['English-taught degrees','tuition amounts','score thresholds','deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'dgist',
  name: 'DGIST (Daegu Gyeongbuk Institute of Science and Technology)',
  shortName: 'DGIST',
  country: 'kr',
  city: 'Daegu',
  region: 'Daegu',
  type: 'National research institute with an undergraduate school',
  brand: { c1: '#00426a', c2: '#002236', initials: 'DGI' },
  description: 'A national science and technology institute in Daegu with a small undergraduate school built around a convergence curriculum, and scholarships that can waive tuition in full.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English; DGIST runs global programmes in English',
  programs: ['engineering','computer-science','biology','mathematics'],
  englishTaughtPrograms: [],
  programNote: 'DGIST describes itself as a convergence university with a single undergraduate school; how much of the degree is taught in English was not confirmed during this check.',
  links: {
    website: 'https://www.dgist.ac.kr/eng/',
    admissions: 'https://www.dgist.ac.kr/iuadm/index.do',
    applicationPortal: 'https://www.dgist.ac.kr/iuadm/index.do',
    scholarships: 'https://ibom.dgist.ac.kr/iuadm/sub04_01.do',
    cost: 'https://www.dgist.ac.kr/eng/sub05_03_02_02.do',
    programs: 'https://www.dgist.ac.kr/en_college/sub06_05.do'
  },
  admissions: {
    platforms: ['DGIST international undergraduate application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guide', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://www.dgist.ac.kr/iuadm/sub03_01.do', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admissions guidebook'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['DGIST states that tuition is fully waived under certain scholarship programmes for undergraduates.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Requirements are in the admissions guidebook, which was not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { tuition: 3967000, tuitionText: '\u20a93,967,000 per semester (\u20a97,934,000 a year), fully waived for international students', period: 'semester', includes: 'the published tuition before the waiver; DGIST waives it for all international students for eight semesters, and living costs in Daegu are covered by separate monthly scholarships', published: true },
    academicYear: '2026\u20132027',
    currency: 'KRW',
    headline: 'Tuition fully waived for international students',
    items: [
      { label: 'Tuition (per semester, before the waiver)', amount: 3967000 },
      { label: 'Tuition (per year, before the waiver)', amount: 7934000 },
      { label: 'Tuition actually paid by an international student', amount: 0 },
      { label: 'Monthly financial aid during the semester', amount: 328500 },
      { label: 'International student scholarship, including vacations (per month)', amount: 330000 }
    ],
    billedSubtotal: null,
    totalText: 'No tuition: DGIST waives the full \u20a97,934,000 a year for all international students for eight semesters',
    note: 'DGIST states the waiver applies to all international students without special conditions and is granted for eight semesters only. The monthly aid needs more than 10 credits and no academic probation in the previous semester.',
    source: 'https://www.dgist.ac.kr/iuadm/sub04_01.do',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: true, basis: 'admission', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'The tuition waiver goes to all international students without special conditions.', howToApply: 'No separate application \u2014 the waiver is applied on admission.', note: 'Tuition is waived in full and monthly scholarships are paid, but housing, food and insurance are not listed as covered, so DGIST does not present this as a full ride. The published total benefit is up to \u20a917,473,840 in the first year and up to \u20a918,473,840 a year afterwards.' },
    merit: [
      { name: 'Tuition fee waiver', amount: 'Full tuition, \u20a93,967,000 a semester', eligibility: 'All international students, without special conditions', deadline: null, application: 'Automatic', renewable: true, note: 'Granted for eight semesters only and not refunded individually.' },
      { name: 'Student financial aid', amount: '\u20a9328,500 a month', eligibility: 'International undergraduates with more than 10 credits and no academic probation', deadline: null, application: 'Automatic', renewable: true, note: 'Paid for eight semesters, excluding vacation periods.' },
      { name: 'International student scholarship (DGISTep)', amount: '\u20a9330,000 a month', eligibility: 'International undergraduates with at least 10 credits and no academic probation', deadline: null, application: 'Automatic', renewable: true, note: 'Paid for eight semesters, including vacation periods.' },
      { name: 'Academic Excellence Scholarship (DGISTep-S)', amount: '\u20a91,500,000 a semester', eligibility: 'Previous-semester GPA above 3.7 out of 4.3 for freshmen, or above 4.0 afterwards', deadline: null, application: 'Automatic', renewable: true, note: 'Not granted in the first semester of the freshman year.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'DGIST awards the international package on admission and academic results rather than on financial need.' },
    source: 'https://www.dgist.ac.kr/iuadm/sub04_01.do',
    verified: '2026-09-24'
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'DGIST international undergraduate admissions', url: 'https://www.dgist.ac.kr/iuadm/index.do' },
    { label: 'Scholarships and student support', url: 'https://ibom.dgist.ac.kr/iuadm/sub04_01.do' },
    { label: 'Undergraduate financial aid and scholarships', url: 'https://www.dgist.ac.kr/eng/sub05_03_02_02.do' }
  ],
  verification: { level: 'partial', checked: ['tuition per semester and per year','full tuition waiver for international students','monthly scholarships and conditions'], unconfirmed: ['language of instruction share','English requirements','deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'sejong-university',
  name: 'Sejong University',
  shortName: 'Sejong',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'Private research university',
  brand: { c1: '#00539f', c2: '#002b52', initials: 'SEJ' },
  description: 'A private university in eastern Seoul with an English-track route for international students, free Korean classes and a dormitory reserved for international students.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English; an English track exists for international students',
  programs: ['business','engineering','computer-science','arts','social-sciences','economics'],
  englishTaughtPrograms: [],
  programNote: 'Sejong runs an English track whose students take preparatory courses in mathematics, statistics and Python; whether a full degree can be completed in English was not confirmed during this check.',
  links: {
    website: 'https://en.sejong.ac.kr/eng/index.do',
    admissions: 'https://en.sejong.ac.kr/eng/academics/Undergraduate_School.do',
    applicationPortal: 'https://en.sejong.ac.kr/eng/academics/Undergraduate_School.do',
    scholarships: 'https://eng.sejong.ac.kr/contents/eng/cor/scholarships.html',
    cost: 'https://eng.sejong.ac.kr/contents/eng/cor/scholarships.html'
  },
  admissions: {
    platforms: ['Sejong University international admissions'],
    deadlines: [
      { name: 'Undergraduate admission for international students (2026 Fall guide published)', kind: 'intake', entryTerm: 'Fall', entryYear: '2026', date: 'Published in the 2026 Fall admission guide', status: 'previous-cycle', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Sejong publishes separate spring and autumn guides; the 2027 dates were not published when this was checked', source: 'https://sos.sejong.ac.kr/pdf/409094/2026%%ED%%95%%99%%EB%%85%%84%%20%%ED%%9B%%84%%EA%%B8%%B0%%20%%ED%%95%%99%%EB%%B6%%80%%20%%EC%%A0%%95%%EC%%9B%%90%%EC%%99%%B8%%20%%EC%%99%%B8%%EA%%B5%%AD%%EC%%9D%%B8%%20%%EB%%AA%%A8%%EC%%A7%%91%%EC%%9A%%94%%EA%%B0%%95%%20(%%EC%%98%%81%%EB%%AC%%B8)_2026.03.12.pdf', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admission guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['The international dormitory holds about 150 students and costs roughly US$1,200 for six months.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Language scholarships are awarded on admission and continue at the same percentage while the previous semester GPA is 3.5 or higher.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Free after-school Korean classes are offered to international students.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published in the admission guide; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission guide',
    items: [ { label: 'Tuition', text: 'Published per college in the admission guide' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official admission guide',
    note: 'The international dormitory costs about US$1,200 for six months.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: 'merit', covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: null, howToApply: 'Language scholarships are decided on admission.', note: 'The confirmed awards are partial tuition scholarships rather than full funding.' },
    merit: [ { name: 'Language scholarship continuation', amount: 'The same percentage of tuition as the entry award', eligibility: 'Students who keep a previous-semester GPA of 3.5 or higher', deadline: null, application: 'Continues automatically while the GPA condition is met', renewable: true, note: null } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Scholarships', url: 'https://eng.sejong.ac.kr/contents/eng/cor/scholarships.html' },
    { label: 'Undergraduate school', url: 'https://en.sejong.ac.kr/eng/academics/Undergraduate_School.do' },
    { label: 'Undergraduate admission guide for international students (PDF)', url: 'https://sos.sejong.ac.kr/pdf/409094/' }
  ],
  verification: { level: 'partial', checked: ['English track exists','scholarship continuation rule','dormitory cost'], unconfirmed: ['fully English-taught degrees','tuition amounts','English score requirements','2027 dates'] },
  lastVerified: '2026-09-23'
},

{
  id: 'kyungpook-national-university',
  name: 'Kyungpook National University',
  shortName: 'KNU',
  country: 'kr',
  city: 'Daegu',
  region: 'Daegu',
  type: 'National research university',
  brand: { c1: '#00447c', c2: '#00233f', initials: 'KNU' },
  description: 'A large national university in Daegu whose international undergraduate scholarships are tied to Korean language level, with a full first-semester tuition scholarship for TOPIK level 6.',
  englishTaught: false,
  languageOfInstruction: 'Korean, with some courses in English',
  programs: ['engineering','business','humanities','social-sciences','biology','medicine','economics'],
  englishTaughtPrograms: [],
  programNote: 'KNU teaches mainly in Korean and rewards Korean proficiency with scholarships; English-medium degree options were not confirmed during this check.',
  links: {
    website: 'https://en.knu.ac.kr/',
    admissions: 'https://en.knu.ac.kr/admission/foreign01.htm',
    applicationPortal: 'https://en.knu.ac.kr/admission/foreign01.htm',
    scholarships: 'https://en.knu.ac.kr/admission/foreign03.htm',
    cost: 'https://en.knu.ac.kr/admission/foreign03.htm'
  },
  admissions: {
    platforms: ['KNU international student application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guide', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://en.knu.ac.kr/admission/foreign01.htm', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'TOPIK certificate where used for a scholarship', 'Documents listed in the admission guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Only one language scholarship can be held: either the TOPIK scholarship or the Korean Language Program scholarship.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'KNU publishes scholarship levels for Korean proficiency (TOPIK) rather than English; English requirements were not confirmed here.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK level decides the size of the entry scholarship.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published in the admission guide; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission guide',
    items: [ { label: 'Tuition', text: 'Published per college in the admission guide' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official admission guide',
    note: 'The size of the first-semester scholarship depends on the TOPIK level, so the real first-year cost varies widely.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: false, competitiveness: 'A 100% award requires TOPIK level 6.', howToApply: 'Submit the TOPIK certificate with the application.', note: 'Even the top award covers the first semester of tuition only, not housing or living costs.' },
    merit: [
      { name: 'TOPIK scholarship', amount: '16–20% of tuition for level 3, 40–42% for level 4, 80–84% for level 5 and 100% for level 6', eligibility: 'International undergraduate applicants with a TOPIK certificate', deadline: 'With the admission application', application: 'With the admission application', renewable: false, note: 'Covers the first semester.' },
      { name: 'KNU Korean Language Program scholarship', amount: '16–20% of first-semester tuition', eligibility: 'Students who complete two semesters of the KNU Korean Language Program', deadline: null, application: null, renewable: false, note: 'Cannot be combined with the TOPIK scholarship.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Admission for international students', url: 'https://en.knu.ac.kr/admission/foreign01.htm' },
    { label: 'Admission guide for undergraduate international students', url: 'https://en.knu.ac.kr/~eng/admission/foreign03.htm' },
    { label: 'KNU fact sheet 2026–2027 (PDF)', url: 'https://en.knu.ac.kr/download/KNU%20Fact%20Sheet%202026-2027.pdf' }
  ],
  verification: { level: 'partial', checked: ['scholarship scale by TOPIK level','exclusivity of the two language scholarships'], unconfirmed: ['English-taught degrees','tuition amounts','English requirements','2027 dates'] },
  lastVerified: '2026-09-23'
},

{
  id: 'seoultech',
  name: 'Seoul National University of Science and Technology',
  shortName: 'SeoulTech',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'National university of science and technology',
  brand: { c1: '#0d4a8f', c2: '#072748', initials: 'SET' },
  description: 'A national technology university in northern Seoul with an International College that combines intensive Korean language teaching with degree programmes such as Global IT Convergence and AI & Media.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English; the International College combines Korean language teaching with degree study',
  programs: ['engineering','computer-science','business','arts','humanities'],
  englishTaughtPrograms: [],
  programNote: 'The International College includes the School of Global Basic Education and the School of Global Liberal Studies, with departments such as Global Korean Language & Culture, AI & Media and Global IT Convergence. Intensive Korean is part of the model, so this is not a fully English-taught route.',
  links: {
    website: 'https://en.seoultech.ac.kr/',
    admissions: 'https://global.seoultech.ac.kr/apply/undergraduate',
    applicationPortal: 'https://global.seoultech.ac.kr/apply/undergraduate',
    scholarships: 'https://en.seoultech.ac.kr/adm/guide/',
    cost: 'https://en.seoultech.ac.kr/adm/guide/'
  },
  admissions: {
    platforms: ['SeoulTech international undergraduate application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guide', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://global.seoultech.ac.kr/apply/undergraduate', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admission guidelines'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Coordinator professors support international students from admission to graduation.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Requirements are set in the admission guidelines, which were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Intensive Korean language education is part of the International College programme.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published in the admission guide; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission guide',
    items: [ { label: 'Tuition', text: 'Published per college in the admission guide' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official admission guide',
    note: 'As a national university, SeoulTech charges lower tuition than most private universities in Seoul.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'SeoulTech lists scholarships for international students in its admission guide; the values were not read during this check.' },
    merit: [], needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate admission for international students', url: 'https://global.seoultech.ac.kr/apply/undergraduate' },
    { label: 'Admission guide', url: 'https://en.seoultech.ac.kr/adm/guide/' },
    { label: 'Undergraduate programmes', url: 'https://en.seoultech.ac.kr/adm/under/intro' }
  ],
  verification: { level: 'partial', checked: ['International College structure and departments'], unconfirmed: ['language of instruction per degree','tuition','scholarship values','deadlines','English requirements'] },
  lastVerified: '2026-09-23'
},

{
  id: 'dongguk-university',
  name: 'Dongguk University',
  shortName: 'Dongguk',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'Private Buddhist-founded university',
  brand: { c1: '#e35205', c2: '#7a2c02', initials: 'DON' },
  description: 'A private university in central Seoul founded on Buddhist principles, with an international admission route, a Global Leaders Track for international students and participation in the Global Korea Scholarship.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English depending on the programme',
  programs: ['business','engineering','humanities','social-sciences','arts','economics','law'],
  englishTaughtPrograms: [],
  programNote: 'Dongguk runs a Dongguk Global Leaders Track for international students; whether a full bachelor can be taken in English was not confirmed during this check.',
  links: {
    website: 'https://www.dongguk.edu/eng/',
    admissions: 'https://www.dongguk.edu/eng/page/446',
    applicationPortal: 'https://www.dongguk.edu/eng/page/446',
    scholarships: 'https://www.dongguk.edu/eng/page/1507',
    cost: 'https://www.dongguk.edu/eng/page/422'
  },
  admissions: {
    platforms: ['Dongguk international admission application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guide', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://www.dongguk.edu/eng/page/446', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admission guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Students who already hold a full government or organisational scholarship are excluded from Dongguk university scholarships.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Requirements are set in the admission guide, which was not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is used for Korean-taught routes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published in the admission materials; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission materials',
    items: [ { label: 'Tuition', text: 'Published per college in the admission materials' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official pages',
    note: 'Dongguk notes that tuition can change with school policy, so the current figure should be confirmed.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: 'Dongguk takes part in the Global Korea Scholarship for undergraduate degrees.', note: 'A GKS award is a Korean government scholarship, not a Dongguk one; students holding a full external scholarship are excluded from the university\'s own awards.' },
    merit: [], needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Admission for international students', url: 'https://www.dongguk.edu/eng/page/446' },
    { label: 'Tuition fee', url: 'https://www.dongguk.edu/eng/page/422' },
    { label: 'Global Korea Scholarship (undergraduate)', url: 'https://www.dongguk.edu/eng/page/1507' }
  ],
  verification: { level: 'partial', checked: ['GKS participation','exclusion rule for externally funded students'], unconfirmed: ['English-taught degrees','tuition amounts','English requirements','deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'sookmyung-womens-university',
  name: "Sookmyung Women's University",
  shortName: 'Sookmyung',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: "Private women's university",
  brand: { c1: '#003da5', c2: '#001f52', initials: 'SMU' },
  description: "A private women's university in Seoul offering more than 150 English-taught courses across Korean studies, international studies, business and economics, with several scholarships for international students.",
  englishTaught: false,
  languageOfInstruction: 'Korean and English; over 150 courses a semester are taught in English',
  programs: ['business','economics','social-sciences','humanities','arts','computer-science'],
  englishTaughtPrograms: [],
  programNote: 'Sookmyung offers more than 150 English-taught courses at undergraduate and graduate level, and states that applicants to its English programmes need citizenship of an English-speaking country. It admits women only.',
  links: {
    website: 'https://www.sookmyung.ac.kr/en/',
    admissions: 'https://www.sookmyung.ac.kr/en/admission/undergraduate.do',
    applicationPortal: 'https://www.sookmyung.ac.kr/en/admission/admission-guide.do',
    scholarships: 'https://www.sookmyung.ac.kr/en/university-life/foreign-students.do',
    cost: 'https://www.sookmyung.ac.kr/en/admission/admission-guide.do'
  },
  admissions: {
    platforms: ['Sookmyung international undergraduate application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guide', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://www.sookmyung.ac.kr/en/admission/undergraduate.do', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: 150000, currency: 'KRW', waiverAvailableToInternational: false, waiver: null, note: 'Sookmyung states that applicants submit a payment of \u20a9150,000 with the application.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admission guidelines'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['This is a women-only university, so applications are limited to female applicants.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Sookmyung states that applicants to its English programmes need citizenship of an English-speaking country.',
    note: 'Requirements for other applicants are set in the admission guidelines, which were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is used for Korean-taught routes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published in the admission materials; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission materials',
    items: [ { label: 'Tuition', text: 'Published per college in the admission materials' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official pages',
    note: 'Living costs in Seoul are extra; a student can earn ₩10,000 an hour through the language tutoring scholarship schemes.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [
      { name: 'Entrance scholarship for international students', amount: 'Not confirmed during this check', eligibility: 'International undergraduate students', deadline: null, application: null, renewable: null, note: 'Sookmyung also lists an alumni scholarship and exchange scholarships.' },
      { name: 'Language teaching scholarship', amount: '₩10,000 per hour for work in the English Speaking Spot or Second Language Tutoring programme', eligibility: 'International students who volunteer in these programmes', deadline: null, application: null, renewable: null, note: 'This is paid work-style support rather than a tuition award.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate admission', url: 'https://www.sookmyung.ac.kr/en/admission/undergraduate.do' },
    { label: 'Admission information', url: 'https://www.sookmyung.ac.kr/en/admission/admission-guide.do' },
    { label: 'Support for foreign students', url: 'https://www.sookmyung.ac.kr/en/university-life/foreign-students.do' }
  ],
  verification: { level: 'partial', checked: ['English-taught course volume','citizenship rule for English programmes','language tutoring scholarship','application fee'], unconfirmed: ['tuition amounts','English score requirements','deadlines','entrance scholarship values'] },
  lastVerified: '2026-09-23'
},

{
  id: 'chonnam-national-university',
  name: 'Chonnam National University',
  shortName: 'Chonnam',
  country: 'kr',
  city: 'Gwangju',
  region: 'Gwangju',
  type: 'National research university',
  brand: { c1: '#00447c', c2: '#00233f', initials: 'CNU' },
  description: 'A national university in Gwangju that offers new international students tuition exemptions for four semesters and takes part in the Global Korea Scholarship.',
  englishTaught: false,
  languageOfInstruction: 'Korean, with some courses in English',
  programs: ['engineering','business','humanities','social-sciences','biology','medicine','economics'],
  englishTaughtPrograms: [],
  programNote: 'Teaching is mainly in Korean; English-taught degree options were not confirmed during this check.',
  links: {
    website: 'https://global.jnu.ac.kr/',
    admissions: 'https://international.jnu.ac.kr/',
    applicationPortal: 'https://international.jnu.ac.kr/',
    scholarships: 'https://global.jnu.ac.kr/Academics/Resources/Scholarships',
    cost: 'https://global.jnu.ac.kr/Academics/Resources/Tuition'
  },
  admissions: {
    platforms: ['Chonnam National University international admission application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guide', status: 'not-confirmed', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'The university publishes an admission guide for each intake; the 2027 dates were not read during this check', source: 'https://international.jnu.ac.kr/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English or Korean proficiency evidence', 'Documents listed in the admission guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Scholarship results are announced together with the admission result, and the amounts depend on the available budget.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Citizens or nationals of Australia, Canada, England, Ireland, New Zealand, the United States or South Africa are exempt from the English proficiency requirement.',
    note: 'Other applicants follow the requirements in the admission guide, which were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is used for Korean-taught routes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published on the university pages; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published on the official pages',
    items: [ { label: 'Tuition', text: 'Published per college on the official pages' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official pages',
    note: 'New international students can be exempted from tuition for four semesters under the university scholarship scheme.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: false, competitiveness: 'The scheme is for new students, and the amounts depend on budget.', howToApply: 'Considered with the admission application.', note: 'The exemption covers tuition, the entrance fee and association dues for four semesters, but not housing or living costs, so it is not a full ride.' },
    merit: [ { name: 'New international student tuition exemption', amount: 'Exemption from tuition, entrance fee and association dues for four semesters', eligibility: 'New international students', deadline: null, application: 'Announced with the admission result', renewable: false, note: 'Amounts are subject to budget availability.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'The university also takes part in the Global Korea Scholarship for undergraduate degrees.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Scholarships', url: 'https://global.jnu.ac.kr/Academics/Resources/Scholarships' },
    { label: 'Tuition', url: 'https://global.jnu.ac.kr/Academics/Resources/Tuition' },
    { label: 'Office of International Affairs', url: 'https://international.jnu.ac.kr/' }
  ],
  verification: { level: 'partial', checked: ['tuition exemption scheme','English requirement exemption by nationality','GKS participation'], unconfirmed: ['English-taught degrees','tuition amounts','English score requirements','deadlines'] },
  lastVerified: '2026-09-23'
},

{
  id: 'incheon-national-university',
  name: 'Incheon National University',
  shortName: 'INU',
  country: 'kr',
  city: 'Incheon',
  region: 'Incheon',
  type: 'National university',
  brand: { c1: '#004c9b', c2: '#002750', initials: 'INU' },
  description: 'A national university in Incheon with two undergraduate programmes taught fully in English — Korean Trade and Commerce in the School of Northeast Asian Studies, and Public Administration — and scholarships that cover most or all of tuition for many international students.',
  englishTaught: true,
  languageOfInstruction: 'Korean and English; two undergraduate programmes are taught fully in English',
  programs: ['business','economics','social-sciences','engineering','computer-science'],
  englishTaughtPrograms: ['business','social-sciences'],
  programNote: 'INU states that Korean Trade & Commerce (School of Northeast Asian Studies) and Public Administration are offered fully in English; other programmes are taught in Korean.',
  links: {
    website: 'https://www.inu.ac.kr/inuengl/',
    admissions: 'https://www.inu.ac.kr/inuengl/8528/subview.do',
    applicationPortal: 'https://www.inu.ac.kr/inuengl/8528/subview.do',
    scholarships: 'https://www.inu.ac.kr/ibe/3882/subview.do',
    cost: 'https://www.inu.ac.kr/inuengl/8498/subview.do'
  },
  admissions: {
    platforms: ['INU international undergraduate application'],
    deadlines: [
      { name: 'International undergraduate admission (Spring 2025 guide published)', kind: 'intake', entryTerm: 'Spring', entryYear: '2025', date: 'Published in the Spring 2025 admissions guide book', status: 'previous-cycle', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'INU publishes a guide book for each intake; the 2027 dates were not read during this check', source: 'https://www.inu.ac.kr/pdfView/ibe/122/fileDownload.do', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Proof that the applicant and both parents are foreign nationals from birth', 'High school completion or an equivalent qualification', 'Language proficiency evidence'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Eligibility is strict: the applicant and both parents must have held foreign nationality from birth.']
  },
  english: {
    ielts: { min: 5.5, recommended: null, note: 'The English track, which applies to the International Business and Economics major, asks for IELTS 5.5.' },
    toefl: { min: 75, recommended: null, scales: [{ period: 'pre2026', min: 75, note: 'TOEFL iBT 75 for the English track.' }], note: 'TOEFL iBT 75 for the English track.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'TOEIC 700 or PETS level 4 are also accepted. The Korean track needs TOPIK level 3 or above, INU Language Center level 4, or a pass in the INU Korean proficiency test; Korean Language and Literature and IBE need TOPIK level 4.',
    waiver: 'Students from countries where English is the mother tongue \u2014 Australia, Canada, Ireland, New Zealand, the United Kingdom, the United States and South Africa \u2014 are exempt.',
    note: 'The English-track requirement applies to the International Business and Economics major; other majors are taught in Korean and set TOPIK levels instead.',
    source: 'https://www.inu.ac.kr/inuengl/8530/subview.do',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply, and whether SAT results are accepted was not confirmed here.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK is used for Korean-taught routes.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published on the university pages; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published on the official pages',
    items: [ { label: 'Tuition', text: 'Published per college on the official pages' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official pages',
    note: 'INU states that almost all international students receive a needs-based scholarship covering most or all of tuition.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: true, basis: 'need-based', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: 'INU states that almost all international students receive a needs-based scholarship.', howToApply: 'Through the admission and scholarship process.', note: 'Even a full tuition scholarship leaves housing, food and living costs to the student.' },
    merit: [ { name: 'Language proficiency and GPA scholarships', amount: 'Varies with language level and grades', eligibility: 'International undergraduate students', deadline: null, application: 'Through the university', renewable: null, note: null } ],
    needBased: { availableToInternational: true, meetsFullNeed: null, needBlindInternational: null, forms: [], deadlines: null, note: 'INU describes a needs-based scholarship that covers most or all of tuition for almost all international students.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate application', url: 'https://www.inu.ac.kr/inuengl/8528/subview.do' },
    { label: 'Tuition and scholarship', url: 'https://www.inu.ac.kr/ibe/3882/subview.do' },
    { label: 'Undergraduate tuition fee', url: 'https://www.inu.ac.kr/inuengl/8498/subview.do' }
  ],
  verification: { level: 'partial', checked: ['fully English-taught programmes','eligibility rule','scholarship coverage description','english (IELTS, TOEFL, TOEIC minimums and TOPIK levels)'], unconfirmed: ['tuition amounts','2027 dates'] },
  lastVerified: '2026-09-23'
},

{
  id: 'soongsil-university',
  name: 'Soongsil University',
  shortName: 'Soongsil',
  country: 'kr',
  city: 'Seoul',
  region: 'Seoul',
  type: 'Private university',
  brand: { c1: '#00539b', c2: '#002b52', initials: 'SSU' },
  description: 'A private university in central Seoul with about 1,600 international undergraduates, teaching in Korean and English and requiring TOPIK level 4 for graduation.',
  englishTaught: false,
  languageOfInstruction: 'Korean and English (some courses are also taught in Chinese)',
  programs: ['business','engineering','computer-science','social-sciences','humanities','economics','law'],
  englishTaughtPrograms: [],
  programNote: 'Soongsil states that all admitted students must reach TOPIK grade 4 to graduate, so Korean is needed even where courses are taught in English.',
  links: {
    website: 'https://eng.ssu.ac.kr/',
    admissions: 'https://eng.ssu.ac.kr/admission/undergraduate/',
    applicationPortal: 'https://eng.ssu.ac.kr/admission/undergraduate/',
    scholarships: 'https://eng.ssu.ac.kr/academics/academic-affairs/scholarship/',
    cost: 'https://eng.ssu.ac.kr/academics/academic-affairs/scholarship/'
  },
  admissions: {
    platforms: ['Soongsil University international admission application'],
    deadlines: [
      { name: 'International undergraduate admission', kind: 'intake', entryTerm: 'Spring or Fall', entryYear: '2027', date: 'Published in the admission guidelines', status: 'not-confirmed', binding: false, appliesTo: 'New and transfer international applicants', conditions: 'Soongsil publishes special procedures for new and transfer international students for each intake; the 2027 dates were not read during this check', source: 'https://eng.ssu.ac.kr/admission/undergraduate/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'KRW', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Language proficiency evidence', 'Documents listed in the admission procedures'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Soongsil Global Scholarships cannot be combined with other university scholarships.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Scholarships are linked to Korean language ability; English requirements were not confirmed during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'Admission is by document screening under the international route; the US test-optional classification does not apply.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'TOPIK grade 4 is required for graduation, whatever the language of teaching.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Korea, or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published in the admission materials; the figures were not read during this check' },
    academicYear: '2026–2027', currency: 'KRW', headline: 'Tuition published in the admission materials',
    items: [ { label: 'Tuition', text: 'Published per college in the admission materials' } ],
    billedSubtotal: null, totalText: 'Not confirmed — see the official pages',
    note: 'Living costs in Seoul are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: 'merit', covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Soongsil Global Scholarships are for excellent students and cannot be combined with other scholarships on campus; the values were not read during this check.' },
    merit: [ { name: 'Soongsil Global Scholarship', amount: 'Not confirmed during this check', eligibility: 'Excellent international students', deadline: null, application: null, renewable: null, note: 'Cannot be combined with other university scholarships.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate admission', url: 'https://eng.ssu.ac.kr/admission/undergraduate/' },
    { label: 'Scholarships', url: 'https://eng.ssu.ac.kr/academics/academic-affairs/scholarship/' },
    { label: 'Special procedures for new and transfer international students (PDF)', url: 'https://iphak.ssu.ac.kr/upload/SSU(1)_26030384642.pdf' }
  ],
  verification: { level: 'partial', checked: ['TOPIK graduation requirement','scholarship exclusivity rule'], unconfirmed: ['English-taught degrees','tuition amounts','English requirements','deadlines'] },
  lastVerified: '2026-09-23'
},
);
