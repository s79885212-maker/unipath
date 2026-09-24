/* ============================================================
   Japan — university records
   Figures come from the official pages listed in `sources`.
   Unconfirmed fields are null and render as
   "Not confirmed — check official source".
   ============================================================ */
window.UNIPATH.universities.push(
{
  id: 'university-of-tokyo',
  name: 'The University of Tokyo',
  shortName: 'UTokyo',
  country: 'jp',
  city: 'Tokyo',
  region: 'Bunkyo, Tokyo',
  founded: 1877,
  type: 'National research university',
  brand: { c1: '#004098', c2: '#001f4a', initials: '東' },
  description: 'Japan\'s leading national university. Fees are set at the national rate and are identical for international and domestic students — far below comparable universities in the United States or the UK. English-taught undergraduate entry is in flux: UTokyo has announced that PEAK, its English-medium programme at Komaba, has held its final student recruitment.',
  englishTaught: false,
  languageOfInstruction: 'Japanese, with some English-taught routes',
  programs: ['engineering','computer-science','economics','mathematics','biology','social-sciences','humanities','law','medicine','arts'],
  englishTaughtPrograms: [],
  programNote: 'The University of Tokyo states that September 2026 was the last PEAK intake, so its English-taught first-year route is closing. The Global Science Course (GSC) remains, but it admits transfer students into the third year of the Faculty of Science rather than first-years, and most other undergraduate teaching is in Japanese.',
  links: {
    website: 'https://www.u-tokyo.ac.jp/en/',
    admissions: 'https://www.u-tokyo.ac.jp/en/prospective-students/undergraduate_admissions.html',
    internationalAdmissions: 'https://www.u-tokyo.ac.jp/en/prospective-students/undergraduate_english.html',
    applicationPortal: null,
    scholarships: 'https://www.u-tokyo.ac.jp/en/prospective-students/tuition_scholarships.html',
    financialAid: 'https://www.u-tokyo.ac.jp/en/prospective-students/exemptions.html',
    programs: 'https://www.u-tokyo.ac.jp/en/prospective-students/undergraduate_admissions.html',
    cost: 'https://www.u-tokyo.ac.jp/en/prospective-students/tuition_fees.html'
  },
  admissions: {
    platforms: [],
    deadlines: [
      { name: 'PEAK — programme closing to new applicants', kind: 'intake', entryTerm: 'September', entryYear: '2026', date: 'Last intake was September 2026 enrolment', binding: false, appliesTo: 'International first-year applicants', conditions: 'The University of Tokyo states that the September 2026 enrolment was the last recruitment for PEAK, its English-taught first-year programme, and that PEAK applications are now closed. No PEAK intake is offered for 2027.', status: 'confirmed', source: 'https://peak.c.u-tokyo.ac.jp/apply/index.html', verified: '2026-09-24', note: 'This removes the main English-taught first-year route at Tokyo; check the university site for any replacement before planning an application.' },
      { name: 'Global Science Course (GSC) — transfer route', kind: 'intake', entryTerm: 'Autumn', entryYear: '2027', date: 'Published on the GSC schedule page', binding: false, appliesTo: 'Students who have already completed at least two years of undergraduate study outside Japan', conditions: 'GSC is an all-English transfer programme into the third year of the Faculty of Science, not a first-year route. The 2027 dates were not read during this check.', status: 'not-confirmed', source: 'https://www.s.u-tokyo.ac.jp/GSC/admissions/schedule.html', verified: null, note: null },
      { name: 'College of Design — application period', kind: 'intake', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-05', date: '15 October – 5 November 2026', binding: false, appliesTo: 'Applicants to the College of Design', conditions: 'Carried over from the earlier verification; not re-checked for this cycle.', status: 'not-confirmed', source: 'https://www.u-tokyo.ac.jp/en/prospective-students/undergraduate_admissions.html', verified: null, note: null },
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null },
    documents: [],
    recommendations: null,
    essay: null,
    interview: 'PEAK selection was by documentary and interview-based screening through the Admissions Office (AO) entrance examination.',
    notes: [
      'The University of Tokyo has stated that the most recent PEAK intake was its final student recruitment and that no further PEAK applications will be accepted. Check the official English-taught programmes page for what replaces it before planning an application.',
      'Most undergraduate entry is through the Japanese-language general entrance examination, which requires high Japanese proficiency.'
    ]
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'PEAK required no Japanese-language ability and taught all courses in English, but UTokyo does not publish a single university-wide English minimum for undergraduate entry. Requirements depend on the specific admission route.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: null,
    internationalQualifications: 'Applicants generally need 12 years of formal schooling or an equivalent qualification recognised in Japan.'
  },
  costs: {
    breakdown: { tuition: 642960, includes: "tuition per year; a one-time ¥282,000 enrolment fee is charged on entry" },
    academicYear: null,
    currency: 'JPY',
    headline: '¥642,960 tuition per year',
    items: [
      { label: 'Enrolment (admission) fee — one-time', amount: 282000 },
      { label: 'Tuition per year (undergraduate)', amount: 642960 }
    ],
    totalText: '¥642,960 per year plus a one-time ¥282,000 enrolment fee',
    note: 'UTokyo states there is no separate rate for international students — the fee is the same for everyone. Living costs in Tokyo are additional and substantial. Admission-fee and tuition-fee exemptions exist; see the exemptions page.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: 'Extremely competitive — for PEAK, UTokyo stated that up to five successful international applicants may be offered the MEXT scholarship.',
      howToApply: 'The MEXT (Japanese Government) Scholarship is applied for through the university recommendation route alongside admission, or separately through a Japanese embassy.',
      note: 'The MEXT Scholarship is a four-year award covering the admission fee, tuition, a round-trip economy airline ticket, and living expenses of ¥120,000 per month. It does not name housing or meals as separate covered items — the monthly stipend is intended to cover living costs.'
    },
    merit: [
      { name: 'MEXT (Japanese Government) Scholarship', amount: 'Admission fee and tuition covered, plus ¥120,000/month and round-trip airfare', eligibility: 'Selected international applicants', deadline: null, application: 'University recommendation alongside admission, or via a Japanese embassy', renewable: true, note: 'For PEAK, up to five successful international applicants could be offered it.' },
      { name: 'Country-specific scholarships (Vietnam, Indonesia)', amount: 'Tuition and other fees, ¥200,000 preparation support, and ¥128,000–¥160,000 monthly stipend', eligibility: 'Vietnamese and Indonesian students', deadline: null, application: null, renewable: null, note: 'Published on the PEAK fees and scholarships pages.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'UTokyo operates admission-fee and tuition-fee exemption schemes rather than U.S.-style need-based aid packages. See the exemptions page for eligibility.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate programs in English (PEAK and GSC)', url: 'https://www.u-tokyo.ac.jp/en/prospective-students/undergraduate_english.html' },
    { label: 'Admission fee and tuition', url: 'https://www.u-tokyo.ac.jp/en/prospective-students/tuition_fees.html' },
    { label: 'PEAK fees & scholarships', url: 'https://peak.c.u-tokyo.ac.jp/fees_scholarships/index.html' },
    { label: 'UTokyo College of Design — FAQ (language of instruction)', url: 'https://design.adm.u-tokyo.ac.jp/faq/' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'kyoto-university',
  name: 'Kyoto University',
  country: 'jp',
  city: 'Kyoto',
  region: 'Kyoto Prefecture',
  founded: 1897,
  type: 'National research university',
  brand: { c1: '#1A4E8A', c2: '#0a2648', initials: '京' },
  description: 'Japan\'s second national university and its strongest research rival to UTokyo. Its international undergraduate programme, Kyoto iUP, is unusual and generous: every iUP student receives a full admission-fee waiver plus a full or partial tuition waiver for the entire 4.5-year programme.',
  englishTaught: true,
  languageOfInstruction: 'Bilingual — English and Japanese',
  programs: ['engineering','computer-science','economics','mathematics','biology','social-sciences','humanities','law','medicine','education'],
  englishTaughtPrograms: [],
  programNote: 'Kyoto iUP is a 4.5-year route: a six-month preparatory course followed by four years of undergraduate study in a chosen faculty. Students graduate with academic-level Japanese in addition to their degree. Kyoto iUP states that the first two years are taught in English and/or Japanese, and the final two years focus on the major, "taught mainly or exclusively in Japanese" — so no field is listed as fully English-taught.',
  links: {
    website: 'https://www.kyoto-u.ac.jp/en',
    admissions: 'https://www.kyoto-u.ac.jp/en/education-campus/education-and-admissions/undergraduate-degree-programs',
    internationalAdmissions: 'https://www.iup.kyoto-u.ac.jp/',
    applicationPortal: 'https://www.iup.kyoto-u.ac.jp/',
    scholarships: 'https://www.kyoto-u.ac.jp/en/education-campus/faq/2-2',
    financialAid: 'https://www.kyoto-u.ac.jp/en/education-campus/faq/2-2',
    programs: 'https://www.iup.kyoto-u.ac.jp/about/overview.html',
    cost: 'https://www.kyoto-u.ac.jp/en/education-campus/faq/2-2'
  },
  admissions: {
    platforms: ['Kyoto iUP online application'],
    deadlines: [
      { name: 'Kyoto iUP — application period (October 2027 enrolment)', kind: 'intake', entryTerm: 'October', entryYear: '2027', dateISO: '2026-12-03', date: '2 November – 3 December 2026', time: '17:00', timezone: 'JST', binding: false, appliesTo: 'International applicants to Kyoto iUP', conditions: 'Applications close at 17:00 JST through the online system. First-screening results on 5 February 2027; online interviews 1–16 March 2027; posted documents must arrive by 16 March 2027. iUP runs 4.5 years, starting with a six-month preparatory course.', status: 'confirmed', source: 'https://www.iup.kyoto-u.ac.jp/apply/', verified: '2026-09-24', note: null },
      { name: 'Kyoto iUP — first screening results', kind: 'decision', entryTerm: 'October', entryYear: '2027', dateISO: '2027-02-05', date: '5 February 2027', binding: false, appliesTo: 'Applicants who submitted in the November–December window', conditions: 'Announced through the online application system.', status: 'confirmed', source: 'https://www.iup.kyoto-u.ac.jp/apply/', verified: '2026-09-24', note: null },
      { name: 'Kyoto iUP — online interviews', kind: 'other', entryTerm: 'October', entryYear: '2027', dateISO: '2027-03-16', date: '1–16 March 2027', binding: false, appliesTo: 'Shortlisted applicants', conditions: 'Interviews are held online.', status: 'confirmed', source: 'https://www.iup.kyoto-u.ac.jp/apply/', verified: '2026-09-24', note: null },
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: false, waiver: 'Kyoto University offers no application fee waivers.', note: 'A ¥429 processing fee is added; the fee is non-refundable.' },
    documents: ['Academic transcripts', 'English proficiency test result or Form C', 'Application documents in original form for shortlisted applicants'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Selection runs in multiple stages; shortlisted applicants must submit original documents.']
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: 'Form C may be submitted instead of a test result.',
    note: 'Kyoto iUP requires either a specified English proficiency test result or Form C, and states that applicants are expected to have adequate English proficiency. Minimum scores are published in the annual Application Guidelines PDF rather than on the overview page.'
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
    currency: 'JPY',
    headline: 'Tuition waived in full or part for all iUP students',
    items: [],
    totalText: null,
    note: 'Kyoto University\'s standard national tuition and admission fee were not captured from an official page during verification — but for iUP students the admission fee is waived in full and tuition is waived fully or partly for the whole 4.5 years. Living costs in Kyoto are additional.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: null, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: 'Awarded to all Kyoto iUP students — so the competition is for a place on iUP itself, which is highly selective.',
      howToApply: 'Automatic for admitted iUP students; no separate scholarship application.',
      note: 'Kyoto states that scholarships including full admission-fee waivers and full or partial tuition-fee waivers for four and a half years are available for all Kyoto iUP students, plus a monthly allowance of up to ¥120,000 during the six-month preparatory course. Because the tuition waiver may be partial, do not assume this is always a literal full ride.'
    },
    merit: [
      { name: 'Kyoto iUP scholarship package', amount: 'Full admission-fee waiver plus full or partial tuition waiver for 4.5 years; up to ¥120,000/month during the 6-month preparatory course', eligibility: 'All Kyoto iUP students', deadline: null, application: 'Automatic with iUP admission', renewable: true, note: 'After enrolling in the undergraduate course, further merit-based monthly allowances from supporting companies and organisations are available to eligible students.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Kyoto\'s support for iUP students is awarded as part of the programme rather than through a separate need assessment.'
    }
  },
  housingNote: 'Accommodation in a Kyoto University International House is available for the first one and a half years of the programme (an initial 12-month tenancy extendable by up to six months).',
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Kyoto iUP official site', url: 'https://www.iup.kyoto-u.ac.jp/' },
    { label: 'Kyoto iUP programme overview', url: 'https://www.iup.kyoto-u.ac.jp/about/overview.html' },
    { label: 'Kyoto iUP on the university site', url: 'https://www.kyoto-u.ac.jp/en/education-campus/education-and-admissions/undergraduate-degree-programs/kyoto-iup-kyoto-university-international-undergraduate-program' },
    { label: 'Kyoto iUP — curriculum', url: 'https://www.iup.kyoto-u.ac.jp/academics/' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'waseda-university',
  name: 'Waseda University',
  country: 'jp',
  city: 'Tokyo',
  region: 'Shinjuku, Tokyo',
  founded: 1882,
  type: 'Private research university',
  brand: { c1: '#9E1B32', c2: '#4d0d18', initials: 'W' },
  description: 'The private university with the widest choice of fully English-taught undergraduate degrees in Japan — six schools run English-based programmes, from political economy to engineering. Applications are document-based and can be completed entirely from your home country.',
  englishTaught: true,
  languageOfInstruction: 'English (English-based degree programmes) or Japanese',
  programs: ['economics','business','social-sciences','computer-science','engineering','mathematics','humanities','arts','law'],
  englishTaughtPrograms: ['economics','social-sciences','humanities','mathematics','computer-science','engineering'],
  programNote: 'Six schools offer English-based degrees: Political Science and Economics (Political Science, Economics, Global Political Economy); Social Sciences (TAISI); International Liberal Studies (SILS); Culture, Media and Society (Transcultural Studies, Global Studies in Japanese Cultures); Fundamental Science and Engineering (Mathematical Sciences, Computer Science and Communications Engineering); and Creative Science and Engineering (Mechanical Engineering, Civil and Environmental Engineering).',
  links: {
    website: 'https://www.waseda.jp/top/en/',
    admissions: 'https://www.waseda.jp/inst/admission/en/',
    internationalAdmissions: 'https://www.waseda.jp/inst/admission/en/undergraduate/english/',
    applicationPortal: 'https://www.waseda.jp/inst/admission/en/undergraduate/english/',
    scholarships: 'https://www.waseda.jp/inst/scholarship/en/for-international-students/',
    financialAid: 'https://www.waseda.jp/inst/scholarship/en/for-international-students/',
    programs: 'https://www.waseda.jp/inst/admission/en/undergraduate/english/',
    cost: 'https://www.waseda.jp/inst/admission/en/other/tuition/'
  },
  admissions: {
    platforms: ['Waseda online application'],
    deadlines: [
      { name: 'English-based undergraduate admission (September 2027 entry)', kind: 'intake', entryTerm: 'Autumn', entryYear: '2027', date: 'Application guide published in late September 2026', binding: false, appliesTo: 'International applicants to the English-based programmes', conditions: 'Waseda states that the application guide for September 2027 enrolment is uploaded in late September 2026 and that applications are accepted only during the period it sets.', status: 'not-confirmed', source: 'https://www.waseda.jp/inst/admission/en/undergraduate/english/', verified: '2026-09-24', note: 'The 2027 application window had not been published when this was checked.' },
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'Standardized test scores', 'English proficiency evidence'],
    recommendations: null,
    essay: null,
    interview: 'Assessment is based on document screening and, where applicable, online interviews.',
    notes: ['Applicants are not required to travel to Japan — assessment is by documents and, if applicable, an online interview.', 'Japanese language proficiency is not required at the time of application.']
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'Waseda does not publish a single university-wide minimum English score on its English-based programmes page. Each school sets its own requirement — check the individual school\'s application guidelines.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'accepted', note: 'Waseda accepts a wide range of standardized tests as academic evidence.' },
    act: { policy: 'accepted', note: 'Waseda accepts a wide range of standardized tests as academic evidence.' },
    otherTests: 'Waseda states it accepts SAT, ACT, IB, A-Level, Gaokao, GSAT, CSAT, HKDSE, AISSCE, O-NET, Baccalauréat, Abitur, Canadian provincial exams and others.',
    internationalQualifications: 'A broad list of national qualifications is accepted — see the list above.'
  },
  costs: {
    breakdown: { published: false },
    academicYear: null,
    currency: 'JPY',
    headline: null,
    items: [],
    totalText: null,
    note: 'Waseda publishes tuition per school in downloadable PDFs that could not be read automatically during verification. Expect private-university Tokyo tuition plus roughly ¥1,000,000–¥2,000,000 per year for accommodation and living expenses, which Waseda states separately. Check the official tuition page for exact figures for your school.'
  },
  scholarships: {
    fullRide: {
      available: false,
      internationalEligible: false,
      basis: 'merit',
      covers: { tuition: false, housing: false, meals: false, insurance: false, books: false },
      renewable: null,
      competitiveness: null,
      howToApply: null,
      note: 'Waseda states explicitly that all scholarships offered at the university are partial, that scholarships for international students are quite competitive, and that applicants should have a firm financial plan before coming to Japan. Do not plan on a full ride here.'
    },
    merit: [
      { name: 'Pre-enrolment scholarships (undergraduate)', amount: 'Partial — Waseda states all its scholarships are partial', eligibility: 'Successful applicants showing high academic calibre', deadline: null, application: 'Automatic — no additional scholarship application is required; awards are made based on admission results', renewable: null, note: 'Merit-based in principle.' },
      { name: 'After-enrolment scholarships', amount: 'Varies', eligibility: 'Enrolled international students', deadline: null, application: 'Separate application after enrolment', renewable: null, note: 'About 20+ types provided by Waseda and about 100+ by external organisations. Around 40% of Waseda\'s international students receive a scholarship.' }
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
    { label: 'English-based undergraduate programmes', url: 'https://www.waseda.jp/inst/admission/en/undergraduate/english/' },
    { label: 'Tuition and visa', url: 'https://www.waseda.jp/inst/admission/en/other/tuition/' },
    { label: 'Scholarships for international students', url: 'https://www.waseda.jp/inst/scholarship/en/for-international-students/' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'keio-university',
  name: 'Keio University',
  country: 'jp',
  city: 'Tokyo',
  region: 'Minato, Tokyo',
  founded: 1858,
  type: 'Private research university',
  brand: { c1: '#00366C', c2: '#001a36', initials: 'K' },
  description: 'Japan\'s oldest modern private university and Waseda\'s long-standing rival, with especially strong links into Japanese business. Three faculties admit in English — PEARL in Economics, and the GIGA programme across the two SFC faculties — with a combined intake of about 100 students.',
  englishTaught: true,
  languageOfInstruction: 'English (PEARL and GIGA) or Japanese',
  programs: ['economics','business','social-sciences','computer-science','engineering','humanities','law','medicine','arts'],
  englishTaughtPrograms: ['economics','social-sciences','computer-science'],
  programNote: 'PEARL (Programme in Economics for Alliances, Research and Leadership) sits in the Faculty of Economics. GIGA spans the Faculty of Policy Management and the Faculty of Environment and Information Studies at the Shonan Fujisawa Campus, combining technology, design, business and policy.',
  links: {
    website: 'https://www.keio.ac.jp/en/',
    admissions: 'https://www.keio.ac.jp/en/admissions/faculty/',
    internationalAdmissions: 'https://www.keio.ac.jp/en/admissions/international-student/programs-offered-in-english/',
    applicationPortal: 'https://web-entry2.admissions.keio.ac.jp/pearl/',
    scholarships: 'https://www.keio.ac.jp/en/admissions/fees/',
    financialAid: 'https://www.keio.ac.jp/en/admissions/fees/',
    programs: 'https://www.keio.ac.jp/en/admissions/international-student/programs-offered-in-english/',
    cost: 'https://www.keio.ac.jp/en/admissions/fees/'
  },
  admissions: {
    platforms: ['Keio online application (web-entry2.admissions.keio.ac.jp)'],
    deadlines: [
      { name: 'PEARL Round I (September 2027 entry)', kind: 'round-1', entryTerm: 'September', entryYear: '2027', dateISO: '2026-12-02', date: '21 October – 2 December 2026', time: '15:00', timezone: 'JST', binding: false, appliesTo: 'Applicants to the PEARL programme in the Faculty of Economics', conditions: 'Applications open at 10:00 JST on 21 October and close at 15:00 JST on 2 December; results on 25 January 2027. Unsuccessful applicants may reapply in a later round.', status: 'confirmed', source: 'https://www.keio.ac.jp/en/admissions/undergraduate/pearl/', verified: '2026-09-24', note: null },
      { name: 'PEARL Round II (September 2027 entry)', kind: 'round-2', entryTerm: 'September', entryYear: '2027', dateISO: '2027-01-27', date: '4 December 2026 – 27 January 2027', time: '15:00', timezone: 'JST', binding: false, appliesTo: 'PEARL applicants', conditions: 'Closes at 15:00 JST; results on 4 March 2027.', status: 'confirmed', source: 'https://www.keio.ac.jp/en/admissions/undergraduate/pearl/', verified: '2026-09-24', note: null },
      { name: 'PEARL Round III (September 2027 entry)', kind: 'round-3', entryTerm: 'September', entryYear: '2027', dateISO: '2027-04-07', date: '24 February – 7 April 2027', time: '15:00', timezone: 'JST', binding: false, appliesTo: 'PEARL applicants', conditions: 'Closes at 15:00 JST; results on 24 May 2027.', status: 'confirmed', source: 'https://www.keio.ac.jp/en/admissions/undergraduate/pearl/', verified: '2026-09-24', note: null },
    ],
    applicationFee: { amount: 35000, currency: 'JPY', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'Standardized test scores', 'English proficiency evidence'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Japanese proficiency is not required to apply for PEARL or the GIGA programme.', 'The admission quota is approximately 100 students across all three application periods.']
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'Keio publishes English requirements in the PEARL/GIGA application guidebook rather than on the overview page. Japanese is not required.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'See the PEARL application guidebook.' },
    act: { policy: null, note: 'See the PEARL application guidebook.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { published: false },
    academicYear: '2026',
    currency: 'JPY',
    headline: null,
    items: [
      { label: 'Application fee', amount: 35000, note: 'Paid by credit card' }
    ],
    totalText: null,
    note: 'Keio publishes AY2026 undergraduate academic fees in a downloadable PDF that could not be read automatically during verification. Use the official fees page for tuition by faculty.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: null, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'Not confirmed on the pages consulted. Check Keio\'s fees and scholarships pages before assuming any full-cost award exists.'
    },
    merit: [],
    needBased: {
      availableToInternational: null, meetsFullNeed: false, needBlindInternational: null,
      forms: [], deadlines: null,
      note: 'Not confirmed on the pages consulted.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Degree programmes offered in English', url: 'https://www.keio.ac.jp/en/admissions/international-student/programs-offered-in-english/' },
    { label: 'PEARL admissions procedures', url: 'https://www.keio.ac.jp/en/admissions/undergraduate/pearl/' },
    { label: 'Undergraduate academic fees', url: 'https://www.keio.ac.jp/en/admissions/fees/' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'sophia-university',
  name: 'Sophia University',
  country: 'jp',
  city: 'Tokyo',
  region: 'Chiyoda, Tokyo',
  founded: 1913,
  type: 'Private Catholic research university',
  brand: { c1: '#00539B', c2: '#002a4e', initials: 'S' },
  description: 'A central-Tokyo Jesuit university with the longest track record of English-medium undergraduate teaching in Japan: its Faculty of Liberal Arts began in 1949 as the only faculty in the country where every class was taught in English.',
  englishTaught: true,
  languageOfInstruction: 'English (Faculty of Liberal Arts and other English-taught programmes) or Japanese',
  programs: ['social-sciences','humanities','economics','business','engineering','computer-science','arts','law','education'],
  englishTaughtPrograms: ['humanities','social-sciences','engineering'],
  programNote: 'The Faculty of Liberal Arts (FLA) is the flagship English-taught route. Sophia also runs English-taught programmes in science and technology, and in green engineering and science.',
  links: {
    website: 'https://www.sophia.ac.jp/eng/',
    admissions: 'https://www.sophia.ac.jp/eng/admissions-and-aid/',
    internationalAdmissions: 'https://www.sophia.ac.jp/eng/academics/global-education/learning/english-taught-program/',
    applicationPortal: 'https://www.sophia.ac.jp/eng/admissions-and-aid/',
    scholarships: 'https://www.sophia.ac.jp/eng/admissions-and-aid/tuition/scholarship-before/',
    financialAid: 'https://piloti.sophia.ac.jp/eng/scholarships1/international-students/',
    programs: 'https://www.sophia.ac.jp/eng/academics/global-education/learning/english-taught-program/',
    cost: 'https://www.sophia.ac.jp/eng/admissions-and-aid/tuition/'
  },
  admissions: {
    platforms: ['Sophia online application'],
    deadlines: [
      { name: 'Spring (April) 2027 — first period', kind: 'round-1', entryTerm: 'April', entryYear: '2027', dateISO: '2026-09-09', date: '1–9 September 2026', binding: false, appliesTo: 'Applicants to the English-taught programmes (FLA, SPSF, FST)', conditions: 'Documents due by 16 September 2026. Sophia publishes the full 2027-intake procedure booklets on the programme pages.', status: 'confirmed', source: 'https://adm.sophia.ac.jp/eng/admissions/ug_p/en_ug/', verified: '2026-09-24', note: null },
      { name: 'Spring (April) 2027 — second period', kind: 'round-2', entryTerm: 'April', entryYear: '2027', dateISO: '2026-12-04', date: '11 November – 4 December 2026', binding: false, appliesTo: 'English-taught programme applicants', conditions: 'Documents due by 11 December 2026.', status: 'confirmed', source: 'https://adm.sophia.ac.jp/eng/admissions/ug_p/en_ug/', verified: '2026-09-24', note: null },
      { name: 'Autumn (September) 2027 — first period', kind: 'round-1', entryTerm: 'September', entryYear: '2027', dateISO: '2026-12-04', date: '11 November – 4 December 2026', binding: false, appliesTo: 'English-taught programme applicants', conditions: 'Documents due by 11 December 2026.', status: 'confirmed', source: 'https://adm.sophia.ac.jp/eng/admissions/ug_p/en_ug/', verified: '2026-09-24', note: null },
      { name: 'Autumn (September) 2027 — second period', kind: 'round-2', entryTerm: 'September', entryYear: '2027', dateISO: '2027-03-31', date: '10–31 March 2027', binding: false, appliesTo: 'English-taught programme applicants', conditions: 'Documents due by 7 April 2027.', status: 'confirmed', source: 'https://adm.sophia.ac.jp/eng/admissions/ug_p/en_ug/', verified: '2026-09-24', note: null },
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null },
    documents: ['Evidence of 12 or more years of formal education, or an International Baccalaureate Diploma, A-Levels or equivalent'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Applicants who have completed 12 years or more of formal education in Japanese schools, foreign countries or recognised foreign schools in Japan — or who hold an IB Diploma or A-Levels — may apply to the Faculty of Liberal Arts.']
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'Sophia publishes FLA English requirements in its annual application procedure PDF rather than on the overview pages. Check the current FLA application procedure document.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'See the current FLA application procedure PDF.' },
    act: { policy: null, note: 'See the current FLA application procedure PDF.' },
    otherTests: null,
    internationalQualifications: 'IB Diploma and A-Levels are explicitly listed as qualifying routes.'
  },
  costs: {
    breakdown: { published: false },
    academicYear: '2026',
    currency: 'JPY',
    headline: null,
    items: [
      { label: 'Education Enhancement Fee (second semester onwards)', amount: 105000 }
    ],
    totalText: null,
    note: 'Sophia publishes full tuition and fee tables in an annual PDF. The Faculty of Liberal Arts uses a flat-rate tuition system for students enrolled from 2020 onwards, and fees are revised annually with inflation. A ¥40,000 lifetime alumni association fee is payable in the final year.'
  },
  scholarships: {
    fullRide: {
      available: null,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: null,
      competitiveness: null,
      howToApply: 'Apply before entering Sophia — see the pre-enrolment scholarship page.',
      note: 'Sophia\'s Benefactors\' (Adachi) Scholarship covers full tuition and the education enhancement fee for the FIRST YEAR of study only. That is a full-tuition award for one year, not a four-year full ride — do not budget as if it were.'
    },
    merit: [
      { name: 'Sophia University New Student Scholarship', amount: 'One-third, one-half, or full tuition for the first year of study', eligibility: 'New students', deadline: null, application: 'Apply before enrolment', renewable: null, note: 'Covers the first year of study.' },
      { name: 'Sophia University Benefactors\' (Adachi) Scholarship', amount: 'Full tuition and the education enhancement fee for the first year of study', eligibility: 'Students whose first-choice university is Sophia, with excellent grades and financial hardship', deadline: null, application: 'Apply before enrolment', renewable: null, note: 'Covers the first year of study.' },
      { name: 'Scholarships for privately financed international students', amount: 'Varies', eligibility: 'Privately financed international students with excellent grades and character who need financial assistance to continue their studies', deadline: null, application: null, renewable: null, note: null }
    ],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Several Sophia awards combine academic merit with demonstrated financial hardship, but Sophia does not commit to meeting full need.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English-taught programmes', url: 'https://www.sophia.ac.jp/eng/academics/global-education/learning/english-taught-program/' },
    { label: 'Tuition and scholarships', url: 'https://www.sophia.ac.jp/eng/admissions-and-aid/tuition/' },
    { label: 'Scholarships before entering Sophia', url: 'https://piloti.sophia.ac.jp/eng/scholarships1/scholraship_e0005/' },
    { label: 'Scholarships for international students', url: 'https://piloti.sophia.ac.jp/eng/scholarships1/international-students/' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'international-christian-university',
  name: 'International Christian University',
  shortName: 'ICU',
  country: 'jp',
  city: 'Mitaka',
  region: 'Tokyo',
  founded: 1953,
  type: 'Private liberal arts university',
  brand: { c1: '#6A2C70', c2: '#361447', initials: 'ICU' },
  description: 'A small bilingual liberal arts university in western Tokyo with a genuinely dual-language model. Its English Language Based Admissions route is conducted entirely in English and needs no Japanese at application — but ICU is explicit that you cannot graduate on English-only courses.',
  englishTaught: true,
  languageOfInstruction: 'Bilingual — English and Japanese',
  programs: ['social-sciences','humanities','economics','business','computer-science','mathematics','biology','psychology','arts','education'],
  englishTaughtPrograms: [],
  programNote: 'ICU has a single College of Liberal Arts with one admission point; students choose from around 30 majors at the end of their second year rather than applying to a faculty.',
  links: {
    website: 'https://www.icu.ac.jp/en/',
    admissions: 'https://www.icu.ac.jp/en/admissions/',
    internationalAdmissions: 'https://www.icu.ac.jp/en/admissions/undergraduate/engdoc/',
    applicationPortal: 'https://www.icu.ac.jp/en/admissions/undergraduate/engdoc/',
    scholarships: 'https://www.icu.ac.jp/en/admissions/finance/',
    financialAid: 'https://www.icu.ac.jp/en/admissions/finance/',
    programs: 'https://www.icu.ac.jp/en/academics/',
    cost: 'https://www.icu.ac.jp/en/admissions/tuition/'
  },
  admissions: {
    platforms: ['ICU online application (English Language Based Admissions — ELBA)'],
    deadlines: [
      { name: 'April 2027 entry — online application opens', kind: 'intake', entryTerm: 'April', entryYear: '2027', date: 'October 2026', binding: false, appliesTo: 'Applicants through English Language Based Admissions (ELBA)', conditions: 'ICU states that the online application for April 2027 entry opens in October 2026; the whole ELBA process is in English and neither entry point is advantaged.', status: 'not-confirmed', source: 'https://www.icu.ac.jp/en/admissions/undergraduate/engdoc/schedules/', verified: '2026-09-24', note: 'The closing date was not read during this check.' },
      { name: 'September 2027 entry — online application opens', kind: 'intake', entryTerm: 'September', entryYear: '2027', date: 'January 2027', binding: false, appliesTo: 'ELBA applicants', conditions: 'The online application for September 2027 entry opens in January 2027.', status: 'not-confirmed', source: 'https://www.icu.ac.jp/en/admissions/undergraduate/engdoc/schedules/', verified: '2026-09-24', note: 'The closing date was not read during this check.' },
    ],
    applicationFee: { amount: 30000, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Non-refundable; an additional ¥880 system operation fee applies' },
    documents: ['Academic transcripts', 'English proficiency test result', 'SAT or ACT scores (Type A applicants)', 'IB Full Diploma where applicable'],
    recommendations: null,
    essay: null,
    interview: 'Type B applicants are interviewed instead of submitting SAT/ACT scores.',
    notes: [
      'There are three application periods per year: one for April entry and two for September entry.',
      'Students admitted via ELBA must complete the Japanese Language Program (JLP). ICU states you cannot graduate by taking only English-taught or only Japanese-taught courses.'
    ]
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'Minimum overall band 6.5.' },
    toefl: { min: 79, recommended: null, scales: [{ period: 'pre2026', min: 79, recommended: null }, { period: 'post2026', min: 4.5, recommended: null }], note: 'TOEFL iBT 79 for tests taken before 20 January 2026; 4.5 for tests taken on or after 21 January 2026 under the revised scale. Only single test-date scores count — MyBest scores are not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the page consulted.' },
    waiver: null,
    note: 'No Japanese language proficiency is required at the time of application.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'required', note: 'Type A applicants must submit SAT or ACT scores. Type B applicants are interviewed instead. ICU does not publish minimum scores.' },
    act: { policy: 'required', note: 'Type A applicants must submit SAT or ACT scores. Type B applicants are interviewed instead.' },
    otherTests: null,
    internationalQualifications: 'Only the IB Full Diploma is accepted — IB Course Certificates and the IBCP Certificate are not.'
  },
  costs: {
    breakdown: { tuition: 1167000, billed: 1521000, includes: "tuition and the facilities fee for AY2026; a one-time ¥300,000 matriculation fee is charged on entry" },
    academicYear: '2026',
    currency: 'JPY',
    headline: '¥1,521,000 per year',
    items: [
      { label: 'Matriculation fee — one-time (regular students)', amount: 300000 },
      { label: 'Tuition — AY2026', amount: 1167000 },
      { label: 'Facilities fee — AY2026', amount: 354000 },
      { label: 'Tuition + facilities — AY2027', amount: 1557000 },
      { label: 'Tuition + facilities — AY2028', amount: 1578000 },
      { label: 'Tuition + facilities — AY2029', amount: 1599000 }
    ],
    billedSubtotal: 1521000,
    totalText: '¥1,521,000 per year (AY2026), plus a one-time ¥300,000 matriculation fee',
    note: 'First-year total for AY2026 is approximately ¥1,821,000 including the matriculation fee. ICU publishes rising figures for later years, shown above. A non-resident fee of ¥30,000 per term (¥90,000 annually) applies during a leave of absence or non-ICU study abroad. Living costs in Tokyo are additional.'
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
      note: 'ICU offers tuition reduction scholarships over four years and a range of benefit-based awards, but a university-wide full-cost award for international students was not confirmed. The JICUF full scholarship is restricted to U.S. citizens with a demonstrated commitment to Christianity.'
    },
    merit: [
      { name: 'ICU tuition reduction scholarships', amount: 'Partial tuition reduction, available over four years', eligibility: 'Enrolled students', deadline: null, application: null, renewable: true, note: 'ICU states many of its own scholarships are benefit-based and do not require repayment. About one third of students receive financial support from ICU and external scholarships each year.' },
      { name: 'JICUF Scholarship', amount: 'Full scholarship', eligibility: 'U.S. citizens with a demonstrated commitment to Christianity', deadline: null, application: 'Through the Japan ICU Foundation, a New York-based public charity', renewable: null, note: 'Not open to most international applicants — the eligibility is narrow.' },
      { name: 'MEXT (Japanese Government) Scholarship', amount: 'Covers tuition and provides a monthly stipend', eligibility: 'Selected international students', deadline: null, application: 'Via university recommendation or a Japanese embassy', renewable: true, note: null }
    ],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'ICU states that around one third of students receive financial support from ICU and external scholarships annually, and that many ICU scholarships are benefit-based grants rather than loans.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English Language Based Admissions (ELBA)', url: 'https://www.icu.ac.jp/en/admissions/undergraduate/engdoc/' },
    { label: 'Tuition and fees (undergraduate)', url: 'https://www.icu.ac.jp/en/admissions/tuition/' },
    { label: 'Financial aid (undergraduate)', url: 'https://www.icu.ac.jp/en/admissions/finance/' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'ritsumeikan-apu',
  name: 'Ritsumeikan Asia Pacific University',
  shortName: 'APU',
  country: 'jp',
  city: 'Beppu',
  region: 'Oita Prefecture',
  founded: 2000,
  type: 'Private university',
  brand: { c1: '#00A0A0', c2: '#005757', initials: 'APU' },
  description: 'Roughly half of APU\'s students come from outside Japan, making it the most internationally mixed campus in the country. Its tuition reduction scholarship is the clearest published discount ladder in Japanese higher education — awards run at 30%, 50%, 65%, 80% and 100% of tuition, and every international applicant can apply.',
  englishTaught: true,
  languageOfInstruction: 'English and Japanese (dual-language campus)',
  programs: ['business','economics','social-sciences','humanities','computer-science','education','arts'],
  englishTaughtPrograms: ['social-sciences','business'],
  programNote: 'APU has colleges covering Asia Pacific Studies, International Management (AACSB-accredited) and Sustainability and Tourism. Students can study in English throughout while learning Japanese alongside.',
  links: {
    website: 'https://en.apu.ac.jp/home/',
    admissions: 'https://admissions.apu.ac.jp/',
    internationalAdmissions: 'https://admissions.apu.ac.jp/',
    applicationPortal: 'https://admissions.apu.ac.jp/',
    scholarships: 'https://admissions.apu.ac.jp/costs_scholarships/before_enrollment/',
    financialAid: 'https://en.apu.ac.jp/studentsupport/scholarship_tuition/international/exemption_Undergraduate/',
    programs: 'https://en.apu.ac.jp/academic/',
    cost: 'https://admissions.apu.ac.jp/costs_scholarships/tuition_fees/'
  },
  admissions: {
    platforms: ['APU Online Application System'],
    deadlines: [
      { name: 'April 2027 enrolment — several application periods', kind: 'intake', entryTerm: 'April', entryYear: '2027', date: 'Published per country on the APU application schedule', binding: false, appliesTo: 'First-year and transfer applicants', conditions: 'APU runs several application periods for each intake, and the deadlines differ by country or region of residence and by applicant type. Enrolment is on 1 April 2027. English test results must be from an exam taken on or after 1 June 2024 and before the deadline.', status: 'not-confirmed', source: 'https://admissions.apu.ac.jp/admissions/application_schedule/', verified: '2026-09-24', note: 'The country-specific dates were not read during this check.' },
      { name: 'September 2027 enrolment — several application periods', kind: 'intake', entryTerm: 'September', entryYear: '2027', date: 'Published per country on the APU application schedule', binding: false, appliesTo: 'First-year and transfer applicants', conditions: 'Enrolment is on 21 September 2027. English test results must be from an exam taken on or after 1 September 2024 and before the deadline.', status: 'not-confirmed', source: 'https://admissions.apu.ac.jp/admissions/application_schedule/', verified: '2026-09-24', note: 'The country-specific dates were not read during this check.' },
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'English proficiency evidence', 'Scholarship application documents', 'Video-recorded interview'],
    recommendations: null,
    essay: null,
    interview: 'Scholarship assessment includes an online assessment and a video-recorded interview.',
    notes: ['Applying earlier in an enrolment period improves scholarship chances, according to APU.']
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'APU publishes English requirements in its application guidelines rather than on the costs pages. Check the current admissions requirements page.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'See the current APU application guidelines.' },
    act: { policy: null, note: 'See the current APU application guidelines.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { tuition: 1455000, includes: "tuition for year one at a 0% scholarship; years 2–4 cost ¥1,655,000 a year" },
    academicYear: '2027 enrolment',
    currency: 'JPY',
    headline: '¥1,455,000 tuition in year 1',
    items: [
      { label: 'Admission fee — one-time', amount: 200000 },
      { label: 'Tuition, year 1 (both semesters, at 0% scholarship)', amount: 1455000 },
      { label: 'Tuition, years 2–4 (per year, at 0% scholarship)', amount: 1655000 },
      { label: 'AP House dormitory entrance fee — one-time', amount: 243600 },
      { label: 'Comprehensive insurance — first year', amount: 12740 },
      { label: 'Comprehensive insurance — second year', amount: 9800 },
      { label: 'Comprehensive insurance — third year', amount: 6850 }
    ],
    billedSubtotal: null,
    totalText: '≈ ¥2,110,000 in year one at 0% scholarship (admission fee + first-semester tuition + AP House entrance fee + insurance)',
    note: 'Tuition is paid per semester — ¥727,500 per semester in year one at a 0% scholarship. Your actual tuition depends entirely on the APU Tuition Reduction Scholarship percentage you are awarded; at 100% you pay ¥0 tuition.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'need and merit combined',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: 'Open to all international applicants, with awards graded by assessment. The 100% tier exists but is the top band of five — most recipients get a partial reduction.',
      howToApply: 'Apply for the APU Tuition Reduction Scholarship inside the APU Online Application System, at the same time as applying for admission.',
      note: 'The 100% tier covers TUITION ONLY. Admission fee, dormitory entrance fee, insurance, housing and living costs are still payable — this is a full-tuition award, not a full ride. APU states awards cover the standard period of time until graduation.'
    },
    merit: [
      { name: 'APU Tuition Reduction Scholarship for International Students (Undergraduate)', amount: '30%, 50%, 65%, 80% or 100% of tuition', eligibility: 'All international students are eligible to apply', deadline: 'Within each enrolment period — earlier applications have a better chance', application: 'Apply within the APU Online Application System', renewable: true, note: 'Recipients are selected on a comprehensive evaluation of submitted documents, a recorded interview, and family financial circumstances. Funded by companies, individuals and MEXT, aimed at outstanding international students of lesser financial means. Covers the standard period until graduation.' }
    ],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Family financial situation is one of the criteria used to decide the tuition reduction percentage, so the award blends need and merit. APU does not commit to meeting full demonstrated need.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition and fees', url: 'https://admissions.apu.ac.jp/costs_scholarships/tuition_fees/' },
    { label: 'APU Tuition Reduction Scholarship for international students', url: 'https://en.apu.ac.jp/studentsupport/scholarship_tuition/international/exemption_Undergraduate/' },
    { label: 'Scholarships before enrolment', url: 'https://admissions.apu.ac.jp/costs_scholarships/before_enrollment/' }
  ],
  lastVerified: '2026-09-16'
},

{
  id: 'tohoku-university',
  name: 'Tohoku University',
  country: 'jp',
  city: 'Sendai',
  region: 'Miyagi Prefecture',
  founded: 1907,
  type: 'National research university',
  brand: { c1: '#4B1E78', c2: '#240d3a', initials: '東北' },
  description: 'A major national research university in Sendai with a long record of teaching international undergraduates in English. Important timing note: Tohoku states that admissions to the final intake of its Future Global Leadership (FGL) undergraduate programme have ended, and a new English-taught undergraduate programme — Gateway College — launches in 2027.',
  englishTaught: true,
  languageOfInstruction: 'English (FGL / Gateway College) or Japanese',
  programs: ['engineering','biology','computer-science','mathematics','medicine','social-sciences','humanities','economics'],
  englishTaughtPrograms: [],
  programNote: 'FGL taught three English-medium undergraduate courses: Advanced Molecular Chemistry (AMC), International Mechanical and Aerospace Engineering (IMAC-U) and Applied Marine Biology (AMB). These are being succeeded by Gateway College from 2027. Gateway College is interdisciplinary: applicants choose a Humanities & Social Sciences or a STEM admission track and declare a major from the third year. Tohoku has not yet published the list of majors, and notes that Humanities & Social Sciences students may need Japanese for research, so no field is listed as English-taught yet.',
  links: {
    website: 'https://www.tohoku.ac.jp/en/',
    admissions: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/',
    internationalAdmissions: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english-future-global-leadership-program/',
    applicationPortal: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/',
    scholarships: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english-future-global-leadership-program/',
    financialAid: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english-future-global-leadership-program/',
    programs: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/',
    cost: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/'
  },
  admissions: {
    platforms: ['Tohoku University FGL application'],
    deadlines: [
      { name: 'Future Global Leadership (FGL) — closed to new applicants', kind: 'intake', entryTerm: 'October', entryYear: '2026', date: 'The last FGL undergraduate intake has ended', binding: false, appliesTo: 'International first-year applicants', conditions: 'Tohoku University states that admissions to the last intake of the FGL undergraduate programme have ended and that a new English-taught undergraduate programme, Gateway College, launches in 2027.', status: 'confirmed', source: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/', verified: '2026-09-24', note: null },
      { name: 'Gateway College — new English-taught programme from 2027', kind: 'intake', entryTerm: 'October', entryYear: '2027', date: 'Application dates published by the university', binding: false, appliesTo: 'International applicants to the new Gateway College', conditions: 'Gateway College is an interdisciplinary undergraduate programme taught mainly in English, with the specialisation chosen after enrolment. Its 2027 application dates were not read during this check.', status: 'not-confirmed', source: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/', verified: null, note: null },
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null },
    documents: ['Academic transcripts', 'English proficiency evidence'],
    recommendations: null,
    essay: null,
    interview: 'The second-stage screening is conducted online and consists of a written test and/or an interview assessing basic academic ability, motivation and communication skills.',
    notes: [
      'Admissions to the last intake of the FGL undergraduate programme have ended. Gateway College, a new English-taught undergraduate programme, launches in 2027 — confirm its requirements on the official site before planning an application.',
      'No Japanese language proficiency is needed for the English-taught route.'
    ]
  },
  english: {
    ielts: null, toefl: null, duolingo: null,
    waiver: null,
    note: 'Tohoku publishes English requirements in the annual FGL Application Guide PDF rather than on its overview pages.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'See the current application guide.' },
    act: { policy: null, note: 'See the current application guide.' },
    otherTests: null,
    internationalQualifications: null
  },
  costs: {
    breakdown: { published: false },
    academicYear: null,
    currency: 'JPY',
    headline: '≈ ¥36,000/month dormitory',
    items: [
      { label: 'University House Aobayama dormitory (per month)', amount: 36000, note: 'Rent, maintenance and rental items; utilities charged separately' },
      { label: 'Other living expenses (per month)', text: '¥70,000 – ¥80,000' }
    ],
    totalText: null,
    note: 'Tohoku\'s national tuition and admission fee were not captured from an official page during verification. Tohoku provides rooms at University House Aobayama to all FGL students for the first two years; from the third year students move to private apartments.'
  },
  scholarships: {
    fullRide: {
      available: true,
      internationalEligible: true,
      basis: 'merit',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: 'Highly competitive — awarded to selected applicants at admission.',
      howToApply: 'Indicate that you wish to be considered for a scholarship at the time of application.',
      note: 'The MEXT Scholarship route pays ¥119,000 per month for four years, waives entrance and tuition fees, and provides an economy-class air ticket between an international airport in your country of citizenship and Narita on enrolment and on graduation. Housing and meals are not separately covered — the monthly stipend is intended to fund living costs.'
    },
    merit: [
      { name: 'MEXT (Japanese Government) Scholarship', amount: '¥119,000 per month for four years, entrance and tuition fees waived, plus round-trip economy airfare', eligibility: 'Selected international applicants', deadline: null, application: 'Applied for as part of the programme application', renewable: true, note: 'Air ticket is provided on enrolment (arrival) and graduation (departure).' },
      { name: 'President Fellowship', amount: 'Equivalent to the examination, entrance and tuition fees for the first year, and tuition thereafter', eligibility: 'International students with outstanding academic records and character who indicated they wish to receive a scholarship at the time of application', deadline: 'Indicated at the time of application', application: 'Request consideration in the application', renewable: true, note: 'Maximum duration four years.' }
    ],
    needBased: {
      availableToInternational: null,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: [],
      deadlines: null,
      note: 'Tohoku\'s published awards for international undergraduates are merit-based.'
    }
  },
  housingNote: 'All FGL students are given a room at University House Aobayama for the first two years; from the third year they live in private apartments.',
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate programmes taught in English', url: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english/' },
    { label: 'Future Global Leadership (FGL) programme', url: 'https://www.insc.tohoku.ac.jp/english/degree/undergraduate-english-future-global-leadership-program/' },
    { label: 'FGL FAQ (PDF)', url: 'https://www.insc.tohoku.ac.jp/english/wp-content/uploads/2025/05/FGL-FAQ_20260501.pdf' },
    { label: 'Gateway College — admissions', url: 'https://admissions.tohoku.ac.jp/en/admissions/undergraduate/gateway_college/' }
  ],
  lastVerified: '2026-09-18'
},

{
  id: 'institute-of-science-tokyo',
  name: 'Institute of Science Tokyo',
  shortName: 'Science Tokyo',
  country: 'jp',
  city: 'Tokyo',
  region: 'Tokyo',
  type: 'National university (science and engineering)',
  brand: { c1: '#00559f', c2: '#002d55', initials: 'IST' },
  description: 'A national science and engineering university in Tokyo, formed from Tokyo Institute of Technology and Tokyo Medical and Dental University. Its GSEP programme is a Bachelor of Engineering taught entirely in English.',
  englishTaught: true,
  languageOfInstruction: 'English (GSEP) and Japanese',
  programs: ['engineering','computer-science','mathematics'],
  englishTaughtPrograms: ['engineering'],
  programNote: 'The Global Scientists and Engineers Program (GSEP) is the first international bachelor of engineering at the university and is taught fully in English, so applicants need no Japanese to start.',
  links: {
    website: 'https://www.isct.ac.jp/en',
    admissions: 'https://admissions.isct.ac.jp/en/013/undergraduate/programs/gsep',
    applicationPortal: 'https://admissions.isct.ac.jp/en/013/undergraduate/programs/gsep',
    scholarships: 'https://admissions.isct.ac.jp/en/013/undergraduate/programs/gsep',
    cost: 'https://admissions.isct.ac.jp/en/013/undergraduate/programs/gsep',
    programs: 'https://www.tse.ens.titech.ac.jp/~gsep/'
  },
  admissions: {
    platforms: ['Science Tokyo GSEP online application'],
    deadlines: [
      { name: 'GSEP admission eligibility application (2026 cycle)', kind: 'intake', entryTerm: 'September', entryYear: '2027', dateISO: '2026-08-06', date: '7 July – 6 August 2026', binding: false, appliesTo: 'GSEP applicants', conditions: 'Science Tokyo states that applications received after the deadline are not accepted', status: 'confirmed', source: 'https://admissions.isct.ac.jp/en/013/undergraduate/programs/gsep', verified: '2026-09-23', note: 'The assessment period published for this cycle; check the site for the next cycle before applying' }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency test score report taken within two years of the application period', 'Application form through the admissions portal'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Eight successful GSEP applicants are recommended for the MEXT scholarship each year.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'A score report from an English proficiency test is required, but Science Tokyo states there is no minimum score for GSEP. The test must have been taken within two years before the end of the application period.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted as proof of English; no minimum score is set for GSEP.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'The absence of a minimum score does not mean the test is optional — a score report must be submitted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Selection uses school results, documents and the university's own assessment; US-style test-optional categories do not apply." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Selection includes document screening and an interview stage set by the programme.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'the standard national-university tuition of ¥535,800 a year plus the one-time ¥282,000 admission fee in the first year; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥535,800 tuition per year',
    items: [
      { label: 'Tuition (per year)', amount: 535800 },
      { label: 'Admission fee (one-time)', amount: 282000 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year in tuition, plus a one-time ¥282,000 admission fee',
    note: 'These are the standard national-university rates in Japan; individual universities can differ, and fee waivers or exemptions are awarded separately.'
  },
  scholarships: {
    fullRide: { available: true, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'Recommendations are limited in number and go to the strongest applicants.', howToApply: 'Selected applicants are recommended by the university for the Japanese government (MEXT) scholarship after admission selection.', note: 'A MEXT scholarship covers the enrolment fee and tuition and pays a monthly stipend, but housing, food and insurance are paid from that stipend rather than provided.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Global Scientists and Engineers Program (GSEP)', url: 'https://admissions.isct.ac.jp/en/013/undergraduate/programs/gsep' },
    { label: 'GSEP programme site', url: 'https://www.tse.ens.titech.ac.jp/~gsep/' }
  ],
  verification: { level: 'partial', checked: ['English-taught programme','application period','English test rule','MEXT recommendation'], unconfirmed: ['exact tuition for this university','application fee','2027 cycle dates'] },
  lastVerified: '2026-09-23'
},

{
  id: 'nagoya-university',
  name: 'Nagoya University',
  shortName: 'Nagoya',
  country: 'jp',
  city: 'Nagoya',
  region: 'Aichi',
  type: 'National research university',
  brand: { c1: '#004098', c2: '#00214f', initials: 'NAG' },
  description: 'A national research university in central Japan whose G30 International Programs have offered full degrees taught in English since 2011, across science, engineering, agriculture, medicine and the humanities.',
  englishTaught: true,
  languageOfInstruction: 'English (G30 International Programs) and Japanese',
  programs: ['engineering','computer-science','biology','medicine','humanities','social-sciences','mathematics','economics'],
  englishTaughtPrograms: ['engineering','computer-science','biology','medicine','humanities','social-sciences','mathematics','economics'],
  programNote: 'Nagoya states that the G30 undergraduate programmes are taught fully in English, with no minimum Japanese requirement at enrolment.',
  links: {
    website: 'https://en.nagoya-u.ac.jp/',
    admissions: 'https://admissions.g30.nagoya-u.ac.jp/',
    applicationPortal: 'https://admissions.g30.nagoya-u.ac.jp/',
    scholarships: 'https://en.nagoya-u.ac.jp/admissions/undergraduate_students/index.html',
    cost: 'https://en.nagoya-u.ac.jp/admissions/undergraduate_students/index.html'
  },
  admissions: {
    platforms: ['G30 online application'],
    deadlines: [
      { name: 'G30 undergraduate — first round (2027 admission)', kind: 'round-1', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-11-19', date: '19 November 2026', binding: false, appliesTo: 'G30 undergraduate applicants', conditions: 'Applications open on 2 November 2026', status: 'confirmed', source: 'https://en.nagoya-u.ac.jp/news/articles/admissions-requirements-released-for-g30-undergraduate-programs-2027/', verified: '2026-09-23', note: null },
      { name: 'G30 undergraduate — second round (2027 admission)', kind: 'round-2', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-21', date: '21 January 2027', binding: false, appliesTo: 'G30 undergraduate applicants', conditions: 'Applications open on 5 January 2027', status: 'confirmed', source: 'https://en.nagoya-u.ac.jp/news/articles/admissions-requirements-released-for-g30-undergraduate-programs-2027/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Standardised test or school-leaving examination results as set in the guidelines', 'English proficiency evidence for non-native speakers'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Nagoya states that international students pay the same tuition as domestic students.']
  },
  english: {
    ielts: { min: 6, recommended: null, note: 'Nagoya asks for IELTS Academic 6.0 overall for the G30 undergraduate programmes.' },
    toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, note: 'TOEFL iBT 80, or 60 on the paper-delivered test. The iBT Home Edition and MyBest scores are accepted; TOEIC and TOEFL ITP are not.' }], note: 'TOEFL iBT 80 or paper-delivered 60. TOEIC and TOEFL ITP are not accepted.' },
    duolingo: { min: 110, recommended: null, note: 'Duolingo English Test 110 and above is accepted.' },
    otherTests: 'An ACT English score of 21 and above, and CEFR C1 and above, are also accepted.',
    waiver: null,
    note: 'Official scores should be sent directly by the testing institution by the deadline; if they arrive late, a soft copy can be uploaded to the online admission system.',
    source: 'https://admissions.g30.nagoya-u.ac.jp/admissions/undergraduate/',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening against the G30 admission requirements; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'The G30 guidelines set which school-leaving or standardised examinations are accepted.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'the standard national-university tuition of ¥535,800 a year plus the one-time ¥282,000 admission fee in the first year; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥535,800 tuition per year',
    items: [
      { label: 'Tuition (per year)', amount: 535800 },
      { label: 'Admission fee (one-time)', amount: 282000 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year in tuition, plus a one-time ¥282,000 admission fee',
    note: 'These are the standard national-university rates in Japan; individual universities can differ, and fee waivers or exemptions are awarded separately.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Admissions requirements released for G30 undergraduate programs 2027', url: 'https://en.nagoya-u.ac.jp/news/articles/admissions-requirements-released-for-g30-undergraduate-programs-2027/' },
    { label: 'G30 International Programs admissions', url: 'https://admissions.g30.nagoya-u.ac.jp/' }
  ],
  verification: { level: 'partial', checked: ['English-taught degrees','2027 application rounds','tuition parity with domestic students','english (IELTS, TOEFL, Duolingo and ACT minimums)'], unconfirmed: ['application fee','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'kyushu-university',
  name: 'Kyushu University',
  shortName: 'Kyushu',
  country: 'jp',
  city: 'Fukuoka',
  region: 'Fukuoka',
  type: 'National research university',
  brand: { c1: '#7b1e3a', c2: '#40101f', initials: 'KYU' },
  description: 'A national university in Fukuoka with four-year English-taught bachelor programmes in engineering and agriculture, where every class except Japanese language is in English.',
  englishTaught: true,
  languageOfInstruction: 'English (International Undergraduate Programs) and Japanese',
  programs: ['engineering','biology','computer-science','mathematics'],
  englishTaughtPrograms: ['engineering','biology'],
  programNote: 'Kyushu states it runs five English-taught undergraduate programmes, in the School of Engineering and the School of Agriculture; all classes except Japanese language classes are in English.',
  links: {
    website: 'https://www.kyushu-u.ac.jp/en/',
    admissions: 'https://www.kyushu-u.ac.jp/en/admission/faculty/foreign/foreign10/',
    applicationPortal: 'https://www.kyushu-u.ac.jp/en/admission/faculty/foreign/foreign10/',
    scholarships: 'https://www.kyushu-u.ac.jp/en/admission/fees/scholarships/',
    cost: 'https://www.kyushu-u.ac.jp/en/admission/fees/expenses'
  },
  admissions: {
    platforms: ['Kyushu University international undergraduate application'],
    deadlines: [
      { name: 'International Undergraduate Programs — application period (October 2026 admission)', kind: 'intake', entryTerm: 'October', entryYear: '2026', dateISO: '2025-12-19', date: '8–19 December 2025, 17:00', time: '17:00', timezone: 'Japan time', binding: false, appliesTo: 'International undergraduate applicants', conditions: 'Published window for October 2026 entry; the equivalent dates for October 2027 had not been published when this was checked', status: 'previous-cycle', source: 'https://www.kyushu-u.ac.jp/en/admission/faculty/foreign/foreign10/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Application form and supporting documents listed in the application instructions'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Kyushu states that students on the international programmes can receive an exemption of half the tuition for the first year if they meet the conditions.']
  },
  english: {
    ielts: { min: 6, recommended: null, note: 'Kyushu accepts IELTS 6.0 for its English-taught undergraduate programmes.' },
    toefl: { min: 79, recommended: null, scales: [{ period: 'pre2026', min: 79, note: 'TOEFL iBT 79. Kyushu accepts scores from a single test date only, not MyBest scores.' }], note: 'TOEFL iBT 79, from a single test date; MyBest scores are not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    waiver: null,
    note: 'Kyushu runs five English-taught undergraduate programmes. Selection has a preliminary document screening and a secondary stage.',
    source: 'https://www.kyushu-u.ac.jp/en/admission/faculty/foreign/foreign10/',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Selection is by document screening and the university's own assessment; US test-optional categories do not apply." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'The application instructions set which examinations are accepted.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'the standard national-university tuition of ¥535,800 a year plus the one-time ¥282,000 admission fee in the first year; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥535,800 tuition per year',
    items: [
      { label: 'Tuition (per year)', amount: 535800 },
      { label: 'Admission fee (one-time)', amount: 282000 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year in tuition, plus a one-time ¥282,000 admission fee',
    note: 'These are the standard national-university rates in Japan; individual universities can differ, and fee waivers or exemptions are awarded separately.'
  },
  scholarships: {
    fullRide: { available: true, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'MEXT places are limited and awarded to the strongest applicants.', howToApply: 'Applicants to the international undergraduate programmes can be recommended for the MEXT scholarship through the admission process.', note: 'The MEXT scholarship runs four years, pays ¥117,000 a month, exempts the enrolment and tuition fees and includes flights. Housing and food come out of the stipend.' },
    merit: [
      { name: 'Kyushu University International Undergraduate Scholarship', amount: '¥48,000 a month for six months', eligibility: 'Up to ten successful applicants for October admission who live outside Japan and do not hold a MEXT scholarship', deadline: null, application: 'Considered through the admission process', renewable: false, note: 'This is a short-term stipend, not a tuition waiver.' },
      { name: 'First-year tuition exemption', amount: 'Half of the tuition for the first two semesters', eligibility: 'Students in the international undergraduate programmes who meet the published conditions', deadline: null, application: 'Applied through the university', renewable: false, note: 'Confirmed on the admissions pages; the detailed conditions were not read during this check.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Enrolling in undergraduate school (language of instruction: English)', url: 'https://www.kyushu-u.ac.jp/en/admission/faculty/foreign/foreign10/' },
    { label: 'Scholarships', url: 'https://www.kyushu-u.ac.jp/en/admission/fees/scholarships/' },
    { label: 'Tuition and fees', url: 'https://www.kyushu-u.ac.jp/en/admission/fees/expenses' }
  ],
  verification: { level: 'partial', checked: ['English-taught programmes','scholarships','previous-cycle application window','english (IELTS and TOEFL minimums)'], unconfirmed: ['2027 application dates','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'osaka-university',
  name: 'The University of Osaka',
  shortName: 'Osaka',
  country: 'jp',
  city: 'Osaka',
  region: 'Osaka',
  type: 'National research university',
  brand: { c1: '#003f8e', c2: '#00204a', initials: 'OSA' },
  description: 'A large national research university in western Japan. Its International College runs two undergraduate degrees taught in English — Human Sciences and a Chemistry–Biology combined major.',
  englishTaught: true,
  languageOfInstruction: 'English (International College degrees) and Japanese',
  programs: ['social-sciences','biology','engineering','medicine','humanities','mathematics'],
  englishTaughtPrograms: ['social-sciences','biology'],
  programNote: 'Two undergraduate degrees are taught in English: Human Sciences and Chemistry–Biology Combined Major. A separate International Undergraduate Program in Science is taught partly in English and partly in Japanese, and usually takes 4.5 years including six months of intensive Japanese.',
  links: {
    website: 'https://www.osaka-u.ac.jp/en',
    admissions: 'https://www.osaka-u.ac.jp/en/admissions/intl-students/Undergraduate-Students-Degree-Programs-in-English',
    applicationPortal: 'https://www.osaka-u.ac.jp/en/admissions/intl-students/Undergraduate-Students-Degree-Programs-in-English',
    scholarships: 'https://www.osaka-u.ac.jp/en/campus/tuition/scholar/support',
    cost: 'https://www.osaka-u.ac.jp/en/campus/tuition/tuition.html'
  },
  admissions: {
    platforms: ['Osaka University online application'],
    deadlines: [
      { name: 'English-taught undergraduate programmes — registration period (April 2027 enrolment)', kind: 'intake', entryTerm: 'April', entryYear: '2027', dateISO: '2026-01-07', date: '1 December 2025 – 7 January 2026', binding: false, appliesTo: 'Applicants to the English-taught undergraduate degrees', conditions: 'Registration window published for April 2027 enrolment', status: 'confirmed', source: 'https://www.osaka-u.ac.jp/en/admissions/intl-students/Undergraduate-Students-Degree-Programs-in-English', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Programme-specific documents listed in the guidelines'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Applicants who pass the university screening can receive a full or partial exemption from tuition and the matriculation fee.']
  },
  english: {
    ielts: { min: 5, recommended: 6, note: 'Requirements are set per programme. The Special Integrated Science Course asks for IELTS 5.0 overall with 5.0 or more in every component; the OUSSEP route publishes IELTS 6.0.' },
    toefl: { min: 60, recommended: 80, scales: [{ period: 'pre2026', min: 60, note: 'TOEFL iBT 60 for the Special Integrated Science Course; the OUSSEP route publishes 80.' }], note: 'TOEFL iBT 60 for the Special Integrated Science Course.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'TOEIC 700 or higher is accepted for the Special Integrated Science Course, and Cambridge English B2 on the OUSSEP route.',
    waiver: null,
    note: 'Osaka publishes the requirement separately for each English-taught degree programme, so the figure that applies depends on the course.',
    source: 'https://www.sci.osaka-u.ac.jp/en/wp-content/uploads/2020/09/11-SISC-Guidelines_2025-1.pdf',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Selection is by document screening and the university's own assessment; US test-optional categories do not apply." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Programme guidelines set which examinations are accepted.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'the standard national-university tuition of ¥535,800 a year plus the one-time ¥282,000 admission fee in the first year; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥535,800 tuition per year',
    items: [
      { label: 'Tuition (per year)', amount: 535800 },
      { label: 'Admission fee (one-time)', amount: 282000 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year in tuition, plus a one-time ¥282,000 admission fee',
    note: 'These are the standard national-university rates in Japan; exemptions and waivers are decided separately.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: 'merit', covers: { tuition: true, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: 'Applicants who pass the university screening can be exempted from tuition and the matriculation fee.', note: 'A tuition and matriculation exemption is not a full scholarship: housing, food and living costs remain payable.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Undergraduate students — degree programs in English', url: 'https://www.osaka-u.ac.jp/en/admissions/intl-students/Undergraduate-Students-Degree-Programs-in-English' },
    { label: 'Tuition fees and matriculation fee', url: 'https://www.osaka-u.ac.jp/en/campus/tuition/tuition.html' },
    { label: 'Financial support for English-taught undergraduate students', url: 'https://www.osaka-u.ac.jp/en/campus/tuition/scholar/support' }
  ],
  verification: { level: 'partial', checked: ['English-taught degrees','registration period for April 2027','fee exemption route','english (confirmed programme examples)'], unconfirmed: ['exact tuition for this university','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'hokkaido-university',
  name: 'Hokkaido University',
  shortName: 'Hokkaido',
  country: 'jp',
  city: 'Sapporo',
  region: 'Hokkaido',
  type: 'National research university',
  brand: { c1: '#00693e', c2: '#00381f', initials: 'HOK' },
  description: 'A national research university in Sapporo whose Integrated Science Program is a four-year English-taught bachelor covering physics, chemistry and biology.',
  englishTaught: true,
  languageOfInstruction: 'English (Integrated Science Program) and Japanese',
  programs: ['biology','engineering','mathematics','humanities','social-sciences'],
  englishTaughtPrograms: ['biology','mathematics'],
  programNote: 'The Integrated Science Program (ISP) is a cross-disciplinary English-taught bachelor in the School of Science; most other undergraduate programmes are taught in Japanese.',
  links: {
    website: 'https://www.global.hokudai.ac.jp/',
    admissions: 'https://www.oia.hokudai.ac.jp/isp/prospective-students/how-to-apply/',
    applicationPortal: 'https://www.oia.hokudai.ac.jp/isp/prospective-students/how-to-apply/',
    scholarships: 'https://www.oia.hokudai.ac.jp/isp/prospective-students/fees-scholarships/',
    cost: 'https://www.global.hokudai.ac.jp/admissions/student-fees/'
  },
  admissions: {
    platforms: ['ISP online registration and application'],
    deadlines: [
      { name: 'Integrated Science Program — online registration (October 2026 enrolment)', kind: 'intake', entryTerm: 'October', entryYear: '2026', dateISO: '2025-11-20', date: '20 November 2025', binding: false, appliesTo: 'ISP applicants', conditions: 'Published registration deadline for the October 2026 intake; the October 2027 dates had not been published when this was checked', status: 'previous-cycle', source: 'https://www.oia.hokudai.ac.jp/isp/prospective-students/how-to-apply/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'ISP application documents'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['For the October 2026 intake Hokkaido waived the whole enrolment fee and the first-semester tuition for ISP students who do not hold a MEXT scholarship.']
  },
  english: {
    ielts: { min: 6, recommended: null, note: 'The Integrated Science Program asks for IELTS Academic 6.0 or higher.' },
    toefl: { min: 79, recommended: null, scales: [{ period: 'pre2026', min: 79, note: 'TOEFL iBT 79 or higher, including the Home Edition. Only test-date scores count, not MyBest Scores.' }], note: 'TOEFL iBT 79 or higher; only test-date scores are accepted.' },
    duolingo: { min: 110, recommended: null, note: 'Duolingo English Test 110 or higher is accepted.' },
    waiver: 'Applicants can be exempt with a Certificate of Primary Language of Instruction stating English, or with four or more years of secondary or higher education taught primarily in English.',
    note: 'Test results must be from within two years of the online registration deadline.',
    source: 'https://www.oia.hokudai.ac.jp/isp/prospective-students/how-to-apply/',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Selection is by document screening and the programme's own stages; US test-optional categories do not apply." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'ISP selection runs in stages set out in the application guidelines.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'the standard national-university tuition of ¥535,800 a year plus the one-time ¥282,000 admission fee in the first year; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥535,800 tuition per year',
    items: [
      { label: 'Tuition (per year)', amount: 535800 },
      { label: 'Admission fee (one-time)', amount: 282000 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year in tuition, plus a one-time ¥282,000 admission fee',
    note: 'Hokkaido waived the enrolment fee and first-semester tuition for ISP students entering in October 2026; later waivers are decided annually.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'ISP support takes the form of fee waivers rather than a full scholarship, except for students who win a MEXT scholarship.' },
    merit: [
      { name: 'ISP enrolment fee and first-semester tuition waiver', amount: 'Full enrolment fee and first-semester tuition', eligibility: 'ISP students entering in October 2026 who do not hold a MEXT scholarship', deadline: null, application: 'Applied by the university', renewable: false, note: 'After the first semester, waivers of one year or half a year of tuition are decided annually.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'ISP — fees and scholarships', url: 'https://www.oia.hokudai.ac.jp/isp/prospective-students/fees-scholarships/' },
    { label: 'ISP — how to apply', url: 'https://www.oia.hokudai.ac.jp/isp/prospective-students/how-to-apply/' },
    { label: 'Student fees', url: 'https://www.global.hokudai.ac.jp/admissions/student-fees/' }
  ],
  verification: { level: 'partial', checked: ['English-taught programme','fee waivers','previous-cycle deadline','english (IELTS, TOEFL and Duolingo minimums)'], unconfirmed: ['2027 application dates','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-tsukuba',
  name: 'University of Tsukuba',
  shortName: 'Tsukuba',
  country: 'jp',
  city: 'Tsukuba',
  region: 'Ibaraki',
  type: 'National research university',
  brand: { c1: '#5c2d91', c2: '#301848', initials: 'TSU' },
  description: 'A national research university north-east of Tokyo running several undergraduate courses taught entirely in English, including International Social Studies.',
  englishTaught: true,
  languageOfInstruction: 'English (English-taught programmes) and Japanese',
  programs: ['social-sciences','engineering','biology','mathematics','humanities','economics'],
  englishTaughtPrograms: ['social-sciences','biology','mathematics'],
  programNote: 'Tsukuba states it offers seven courses across five English-taught programmes, with all required classes in English until graduation; Japanese level does not affect entry to these courses.',
  links: {
    website: 'https://www.global.tsukuba.ac.jp/',
    admissions: 'https://www.global.tsukuba.ac.jp/apply/',
    applicationPortal: 'https://www.global.tsukuba.ac.jp/apply/',
    scholarships: 'https://www.tsukuba.ac.jp/en/admissions/financial-exemption/',
    cost: 'https://www.tsukuba.ac.jp/en/admissions/fees-tuition/fees-tuition-students/'
  },
  admissions: {
    platforms: ['University of Tsukuba online application'],
    deadlines: [
      { name: 'English-taught programmes — application period', kind: 'intake', entryTerm: 'September or October', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Applicants to programmes conducted in English', conditions: 'Each programme publishes its own application guidelines; the 2027 dates were not read during this check', source: 'https://www.global.tsukuba.ac.jp/apply/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Proof of 12 years of school education completed outside Japan', 'TOEFL or IELTS score for non-native English speakers', 'Programme application documents'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Students entering in September also pay a part-year tuition instalment of ¥44,650 for that month.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'A TOEFL or IELTS score is required from applicants who are not native English speakers; the minimum was not read during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Required from non-native speakers; minimum not confirmed here.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Native English speakers are not required to submit a test score for the International Social Studies programme.',
    note: 'Applicants must also hold non-Japanese nationality and have completed 12 years of schooling outside Japan for this route.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening and programme-specific assessment; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Programme guidelines set any additional requirements.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'tuition of ¥535,800 a year and the ¥282,000 admission fee; September entrants also pay ¥44,650 for that month' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥535,800 tuition per year',
    items: [
      { label: 'Tuition (per year)', amount: 535800 },
      { label: 'Admission fee (one-time)', amount: 282000 },
      { label: 'September part-month tuition', amount: 44650 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year plus the ¥282,000 admission fee',
    note: 'MEXT scholarship holders are exempt from tuition; other exemptions are decided by application.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Tsukuba exempts MEXT scholarship holders from tuition and runs its own entrance fee and tuition waiver scheme; the conditions were not read during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'The university operates entrance fee exemption and tuition waivers for students in financial difficulty; details not read during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition fees for undergraduate and graduate students', url: 'https://www.tsukuba.ac.jp/en/admissions/fees-tuition/fees-tuition-students/' },
    { label: 'English programmes — undergraduate', url: 'https://www.global.tsukuba.ac.jp/undergraduate/' },
    { label: 'International Social Studies admission', url: 'https://www.global.tsukuba.ac.jp/undergraduate/bachelor-arts-international-social-sciences/admission/' }
  ],
  verification: { level: 'partial', checked: ['English-taught programmes','tuition and fees','English test requirement (existence)'], unconfirmed: ['application dates for 2027','English minimum scores','application fee','scholarship conditions'] },
  lastVerified: '2026-09-23'
},

{
  id: 'tokyo-international-university',
  name: 'Tokyo International University',
  shortName: 'TIU',
  country: 'jp',
  city: 'Kawagoe',
  region: 'Saitama',
  type: 'Private university',
  brand: { c1: '#004b8d', c2: '#00284b', initials: 'TIU' },
  description: 'A private university near Tokyo whose English Track (E-Track) lets international students take a full bachelor degree in English in business economics, international relations, digital business and data science.',
  englishTaught: true,
  languageOfInstruction: 'English (E-Track) and Japanese',
  programs: ['business','economics','social-sciences','computer-science'],
  englishTaughtPrograms: ['business','economics','social-sciences','computer-science'],
  programNote: 'E-Track bachelor degrees are offered in Data Science and AI, Business Economics, Digital Business and Innovation, and International Relations. No Japanese is needed to apply.',
  links: {
    website: 'https://www.tiu.ac.jp/etrack/',
    admissions: 'https://www.tiu.ac.jp/etrack/admissions/',
    applicationPortal: 'https://www.tiu.ac.jp/etrack/admissions/',
    scholarships: 'https://www.tiu.ac.jp/etrack/admissions/reductions/',
    cost: 'https://www.tiu.ac.jp/etrack/admissions/tuition/'
  },
  admissions: {
    platforms: ['TIU E-Track online application'],
    deadlines: [
      { name: 'April 2027 intake \u2014 round 1', kind: 'application-window', entryTerm: 'April', entryYear: '2027', dateISO: '2026-07-01', date: '17 June \u2013 1 July 2026', binding: false, appliesTo: 'First-year E-Track applicants', conditions: 'Results 3 August 2026; enrollment fee by 21 August 2026 and tuition by 11 September 2026', status: 'confirmed', source: 'https://www.tiu.ac.jp/etrack/wp-content/uploads/application_guideline_for_first_year.pdf', verified: '2026-09-24', note: null },
      { name: 'April 2027 intake \u2014 round 2', kind: 'application-window', entryTerm: 'April', entryYear: '2027', dateISO: '2026-09-02', date: '19 August \u2013 2 September 2026', binding: false, appliesTo: 'First-year E-Track applicants', conditions: 'Results 5 October 2026; enrollment fee by 23 October 2026 and tuition by 6 November 2026', status: 'confirmed', source: 'https://www.tiu.ac.jp/etrack/wp-content/uploads/application_guideline_for_first_year.pdf', verified: '2026-09-24', note: null },
      { name: 'April 2027 intake \u2014 round 3', kind: 'application-window', entryTerm: 'April', entryYear: '2027', dateISO: '2026-11-04', date: '14 October \u2013 4 November 2026', binding: false, appliesTo: 'First-year E-Track applicants', conditions: 'Results 14 December 2026; enrollment fee by 7 January 2027', status: 'confirmed', source: 'https://www.tiu.ac.jp/etrack/wp-content/uploads/application_guideline_for_first_year.pdf', verified: '2026-09-24', note: null },
      { name: 'September 2027 intake \u2014 round 1', kind: 'application-window', entryTerm: 'September', entryYear: '2027', dateISO: '2026-12-09', date: '18 November \u2013 9 December 2026', binding: false, appliesTo: 'First-year E-Track applicants', conditions: 'Enrollment fee by 19 February 2027 and tuition by 26 February 2027', status: 'confirmed', source: 'https://www.tiu.ac.jp/etrack/wp-content/uploads/application_guideline_for_first_year.pdf', verified: '2026-09-24', note: null },
      { name: 'September 2027 intake \u2014 round 2', kind: 'application-window', entryTerm: 'September', entryYear: '2027', dateISO: '2027-02-17', date: '27 January \u2013 17 February 2027', binding: false, appliesTo: 'First-year E-Track applicants', conditions: 'Enrollment fee by 16 April 2027 and tuition by 23 April 2027', status: 'confirmed', source: 'https://www.tiu.ac.jp/etrack/wp-content/uploads/application_guideline_for_first_year.pdf', verified: '2026-09-24', note: null },
      { name: 'September 2027 intake \u2014 round 3', kind: 'application-window', entryTerm: 'September', entryYear: '2027', dateISO: '2027-04-07', date: '17 March \u2013 7 April 2027', binding: false, appliesTo: 'First-year E-Track applicants', conditions: 'Enrollment fee by 1 June 2027', status: 'confirmed', source: 'https://www.tiu.ac.jp/etrack/wp-content/uploads/application_guideline_for_first_year.pdf', verified: '2026-09-24', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check. A one-time 40,000 yen alumni association fee is added to the first tuition invoice.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'E-Track application form'],
    recommendations: null,
    essay: null,
    interview: 'TIU states that an interview is not required unless it asks for one.',
    notes: ['Applying for admission and for the tuition reduction scholarship is a single process - there is no separate scholarship application.']
  },
  english: {
    ielts: { min: 6, recommended: null, note: 'E-Track asks for IELTS Academic 6.0 overall. IELTS Indicator is accepted; the One Skill Retake is not.' },
    toefl: { min: 72, recommended: null, scales: [{ period: 'pre2026', min: 72, note: 'TOEFL 72 on the 0\u2013120 scale.' }, { period: 'from2026', min: 4, note: 'TOEFL 4.0 on the 1\u20136 scale. The Special Home Edition is accepted; MyBest scores are not.' }], note: 'TOEFL 72 on the old scale or 4.0 on the new one; institutional code 44353.' },
    duolingo: { min: 115, recommended: null, note: 'Duolingo English Test 115.' },
    otherTests: 'Pearson PTE Academic 50, EIKEN Pre-1st, TOEIC L&R 780 (institutional and daily tests not accepted), SAT Evidence-Based Reading and Writing 540, ACT English 22, and IB English A (HL or SL) or English B (HL) at 4.',
    waiver: null,
    note: 'The IELTS, TOEFL, PTE, EIKEN, TOEIC and Duolingo results must have been taken within two years of the application date.',
    source: 'https://www.tiu.ac.jp/etrack/wp-content/uploads/application_guideline_for_first_year.pdf',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'None stated beyond the application documents.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 1100000, tuitionText: '\u00a51,100,000\u2013\u00a51,400,000 depending on the major', billed: 1670000, includes: 'tuition, the operations fee and, in the first year, the \u00a5250,000 enrollment fee; a one-time \u00a540,000 alumni association fee is added to the first invoice and accommodation is extra', published: true },
    academicYear: '2027\u20132028',
    currency: 'JPY',
    headline: '\u00a51,670,000\u2013\u00a51,970,000 in the first year',
    items: [
      { label: 'Tuition \u2014 Business Economics and International Relations', amount: 1100000 },
      { label: 'Tuition \u2014 Digital Business and Innovation', amount: 1300000 },
      { label: 'Tuition \u2014 Data Science and AI', amount: 1400000 },
      { label: 'Operations fee (per year)', amount: 320000 },
      { label: 'Enrollment fee (one-time)', amount: 250000 },
      { label: 'Alumni association fee (one-time)', amount: 40000 }
    ],
    billedSubtotal: 1670000,
    totalText: '\u00a51,670,000 in the first year for Business Economics and International Relations, \u00a51,870,000 for Digital Business and Innovation and \u00a51,970,000 for Data Science and AI',
    note: 'From the second year the totals fall to \u00a51,620,000, \u00a51,820,000 and \u00a51,920,000 because the enrollment fee is only charged once. Accommodation is charged separately.',
    source: 'https://www.tiu.ac.jp/etrack/admissions/tuition.html',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: true, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'Awards of 30%, 50%, 80% or 100% are decided on the strength of the application; a 100% award is the top band rather than the norm.', howToApply: 'All E-Track applicants are considered automatically - admission and scholarship screening happen together.', note: 'A 100% TIU Tuition Reduction Scholarship covers tuition only. Housing, food, insurance and travel are not covered. It runs up to four years for first-year students if academic requirements are met.' },
    merit: [
      { name: 'TIU Tuition Reduction Scholarship', amount: '30%, 50%, 80% or 100% of the tuition fee', eligibility: 'All E-Track programme applicants', deadline: 'Same as the admission application', application: 'Automatic with the admission application', renewable: true, note: 'Valid up to four years for first-year entrants, three years for second-year transfers and two years for third-year transfers, subject to academic requirements.' },
      { name: 'Model United Nations scholarship', amount: 'Waiver of the 250,000 yen enrolment fee', eligibility: 'Applicants awarded this scholarship', deadline: null, application: null, renewable: false, note: null }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'E-Track admissions', url: 'https://www.tiu.ac.jp/etrack/admissions/' },
    { label: 'E-Track scholarships', url: 'https://www.tiu.ac.jp/etrack/admissions/reductions/' },
    { label: 'E-Track tuition and fees', url: 'https://www.tiu.ac.jp/etrack/admissions/tuition/' }
  ],
  verification: { level: 'partial', checked: ['English-taught degrees','scholarship structure','intakes','alumni fee','E-Track tuition for 2027 entry','english (IELTS, TOEFL, Duolingo, PTE, TOEIC, SAT, ACT and IB minimums)','2027 application rounds for both intakes'], unconfirmed: ['application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'akita-international-university',
  name: 'Akita International University',
  shortName: 'AIU',
  country: 'jp',
  city: 'Akita',
  region: 'Akita',
  type: 'Public university (prefectural)',
  brand: { c1: '#0b7a4b', c2: '#054027', initials: 'AIU' },
  description: 'A small public university in northern Japan teaching a four-year Bachelor of International Liberal Arts entirely in English, with a compulsory year abroad and two intakes a year.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','business','economics'],
  englishTaughtPrograms: ['humanities','social-sciences','business','economics'],
  programNote: 'AIU teaches its whole undergraduate degree in English and requires a year of study abroad; it also runs intensive Japanese for international students.',
  links: {
    website: 'https://web.aiu.ac.jp/en/',
    admissions: 'https://admission.aiu.ac.jp/en/ug/',
    applicationPortal: 'https://admission.aiu.ac.jp/en/',
    scholarships: 'https://web.aiu.ac.jp/en/undergraduate/tuition/',
    cost: 'https://web.aiu.ac.jp/en/undergraduate/tuition/'
  },
  admissions: {
    platforms: ['AIU admission portal'],
    deadlines: [
      { name: 'International Examination - application period (spring intake, previous cycle)', kind: 'intake', entryTerm: 'April', entryYear: '2025', dateISO: '2024-11-05', date: '18 October – 5 November 2024', binding: false, appliesTo: 'International applicants for spring enrolment', conditions: 'Published window for the Spring 2025 intake; the 2027 dates were not read during this check', status: 'previous-cycle', source: 'https://admission.aiu.ac.jp/en/ug/international_april/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Proof of 12 years of school education', 'English proficiency score (TOEFL can be sent directly by ETS)', 'Documents listed in the admission guidelines'],
    recommendations: null,
    essay: null,
    interview: 'Applicants on the international route take an English interview alongside document screening.',
    notes: ['The matriculation fee differs by residence: 282,000 yen for applicants from Akita Prefecture and 423,000 yen for everyone else.']
  },
  english: {
    ielts: { min: 6, recommended: null, note: 'AIU accepts IELTS 6.0 for degree-seeking international admission; an original score report is required, and photocopies or downloaded data are not accepted.' },
    toefl: { min: 61, recommended: null, scales: [{ period: 'pre2026', min: 61, note: 'TOEFL iBT 61, submitted as an original score report. Scores can be sent to AIU directly by ETS.' }], note: 'TOEFL iBT 61 is the published minimum for the international admission route.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'TOEIC L&R plus S&W 1100, EIKEN Grade Pre-1, GTEC CBT 1000, GTEC Advanced 1000, TEAP 300, TEAP CBT 700 and Cambridge B2 First 170 are also accepted.',
    waiver: 'Native speakers of English, and applicants from education systems where the first language is English and teaching is entirely in English, are exempt on providing an official document proving the medium of instruction.',
    note: 'The score must still be valid within two years of the last day of the application period.',
    source: 'https://admission.aiu.ac.jp/wp/wp-content/uploads/2025/09/E_2026_International_youkou.pdf',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening and an English interview; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'None stated beyond the interview and documents.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 896000, tuitionText: '\u00a5896,000 for students enrolling from April 2027', billed: 1319000, includes: 'annual tuition of \u00a5896,000 plus the one-time matriculation fee of \u00a5423,000 (\u00a5282,000 for Akita Prefecture residents) in the first year; living costs are extra', published: true },
    academicYear: '2027\u20132028',
    currency: 'JPY',
    headline: '\u00a5896,000 tuition a year from April 2027',
    items: [
      { label: 'Tuition (per year, from April 2027 enrolment)', amount: 896000 },
      { label: 'Matriculation fee \u2014 applicants from outside Akita Prefecture (one-time)', amount: 423000 },
      { label: 'Matriculation fee \u2014 Akita Prefecture residents (one-time)', amount: 282000 }
    ],
    billedSubtotal: 1319000,
    totalText: '\u00a5896,000 a year in tuition plus the one-time matriculation fee of \u00a5423,000 in the first year',
    note: 'AIU raised annual tuition from \u00a5696,000 to \u00a5896,000 for students enrolling from April 2027; students who entered in 2026 or earlier keep the old rate. A year abroad is compulsory, so travel and overseas living costs are part of the real budget.',
    source: 'https://web.aiu.ac.jp/en/news/92854/',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition and fees', url: 'https://web.aiu.ac.jp/en/undergraduate/tuition/' },
    { label: 'Undergraduate admissions', url: 'https://admission.aiu.ac.jp/en/ug/' },
    { label: 'Academic year 2026 admission information for international students (PDF)', url: 'https://admission.aiu.ac.jp/wp/wp-content/uploads/2025/09/E_2026_International_youkou.pdf' }
  ],
  verification: { level: 'partial', checked: ['English-taught degree','matriculation fees','selection method','annual tuition from April 2027','english (IELTS, TOEFL and the accepted test list)'], unconfirmed: ['2027 application dates','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'rikkyo-university',
  name: 'Rikkyo University',
  shortName: 'Rikkyo',
  country: 'jp',
  city: 'Tokyo',
  region: 'Tokyo',
  type: 'Private university',
  brand: { c1: '#5b2b82', c2: '#301545', initials: 'RIK' },
  description: 'A private university in Tokyo whose Global Liberal Arts Program (GLAP) is taught in English and includes a compulsory long-term study-abroad period with tuition waived at the host university.',
  englishTaught: true,
  languageOfInstruction: 'English (GLAP) and Japanese',
  programs: ['humanities','social-sciences','business','economics'],
  englishTaughtPrograms: ['humanities','social-sciences'],
  programNote: 'GLAP is a small English-taught liberal arts degree; most other Rikkyo undergraduate programmes are taught in Japanese.',
  links: {
    website: 'https://english.rikkyo.ac.jp/',
    admissions: 'https://en.admission.rikkyo.ac.jp/',
    applicationPortal: 'https://en.admission.rikkyo.ac.jp/apply/admission-procedure/',
    scholarships: 'https://glap.rikkyo.ac.jp/en/admission/index.html',
    cost: 'https://glap.rikkyo.ac.jp/en/admission/index.html',
    programs: 'https://glap.rikkyo.ac.jp/en/'
  },
  admissions: {
    platforms: ['Rikkyo international admission portal'],
    deadlines: [
      { name: 'GLAP admission - April and September intakes', kind: 'intake', entryTerm: 'April or September', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'GLAP applicants', conditions: 'Rikkyo publishes an admissions schedule for each cycle; the 2027 dates were not read during this check', source: 'https://en.admission.rikkyo.ac.jp/schedule/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Documents listed in the GLAP application guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['GLAP students pay no tuition at the host university during the compulsory study-abroad period, but travel and accommodation there are their own cost.']
  },
  english: {
    ielts: { min: 5.5, recommended: null, note: 'GLAP asks for an IELTS Academic overall band score of 5.5 or above. Rikkyo\u2019s other international routes publish a higher figure of 6.5.' },
    toefl: { min: null, recommended: 94, scales: [{ period: 'pre2026', min: null, recommended: 94, note: 'TOEFL is accepted; Rikkyo publishes iBT 94 (or 4.5 in each section on the new 1\u20136 scale) for its other international admission routes, and the GLAP figure was not confirmed during this check.' }], note: 'Accepted; the GLAP minimum was not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    otherTests: 'Cambridge English Qualifications 160 or above, EIKEN 2,600 or above and GTEC 1,180 or above are accepted for GLAP.',
    waiver: null,
    note: 'GLAP publishes its accepted tests and scores on the programme admission page for each entry year.',
    source: 'https://glap.rikkyo.ac.jp/en/admission/index.html',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening and programme assessment; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the GLAP application guide.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 1903500, tuitionText: '\u00a51,903,500 in tuition and other fees', billed: 2103500, includes: 'tuition and other fees of \u00a51,903,500 a year plus the one-time \u00a5200,000 admission fee in the first year; study-abroad travel and accommodation are extra', published: true },
    academicYear: '2026\u20132027',
    currency: 'JPY',
    headline: '\u00a51,903,500 a year in tuition and fees',
    items: [
      { label: 'Tuition and other fees (per year)', amount: 1903500 },
      { label: 'Admission fee (one-time, first year)', amount: 200000 }
    ],
    billedSubtotal: 2103500,
    totalText: '\u00a52,103,500 in the first year (\u00a51,903,500 tuition and fees plus the \u00a5200,000 admission fee)',
    note: 'Rikkyo publishes these as estimates based on the 2026 academic-year fee schedule and states that the 2027 schedule was to be finalised in October 2026. Tuition at the study-abroad host university is waived, but travel and accommodation abroad are extra.',
    source: 'https://en.admission.rikkyo.ac.jp/apply/fees/',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'GLAP admission and aid', url: 'https://glap.rikkyo.ac.jp/en/admission/index.html' },
    { label: 'Rikkyo international admission', url: 'https://en.admission.rikkyo.ac.jp/' },
    { label: 'Admissions schedule', url: 'https://en.admission.rikkyo.ac.jp/schedule/' }
  ],
  verification: { level: 'partial', checked: ['English-taught programme','study-abroad tuition rule','intakes','GLAP tuition and admission fee','english (GLAP IELTS, Cambridge, EIKEN and GTEC minimums)'], unconfirmed: ['2027 dates','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'ritsumeikan-university',
  name: 'Ritsumeikan University',
  shortName: 'Ritsumeikan',
  country: 'jp',
  city: 'Kyoto',
  region: 'Kyoto',
  type: 'Private university',
  brand: { c1: '#9e1b32', c2: '#560e1b', initials: 'RIT' },
  description: 'A large private university in Kyoto and Osaka with English-medium undergraduate programmes, including the Global Studies major in International Relations, which takes both April and September entrants.',
  englishTaught: true,
  languageOfInstruction: 'English (English-medium undergraduate programmes) and Japanese',
  programs: ['social-sciences','business','economics','computer-science','humanities'],
  englishTaughtPrograms: ['social-sciences','business','economics'],
  programNote: 'The four-year Global Studies major is taught in English; about half the students in each year group are international.',
  links: {
    website: 'https://en.ritsumei.ac.jp/',
    admissions: 'https://en.ritsumei.ac.jp/e-ug/apply/howto.html/',
    applicationPortal: 'https://en.ritsumei.ac.jp/e-ug/apply/howto.html/',
    scholarships: 'https://en.ritsumei.ac.jp/e-ug/financial_info/scholarships.html/',
    cost: 'https://en.ritsumei.ac.jp/e-ug/financial_info/fees.html/',
    programs: 'https://en.ritsumei.ac.jp/e-ug/programs.html/'
  },
  admissions: {
    platforms: ['Ritsumeikan International Admissions Office online application'],
    deadlines: [
      { name: 'English-medium undergraduate programmes - application round', kind: 'round', entryTerm: 'April or September', entryYear: '2027', dateISO: '2026-09-08', date: '19 August – 8 September 2026', binding: false, appliesTo: 'Applicants to the English-medium undergraduate programmes', conditions: 'One published round for 2027 enrolment; Ritsumeikan states that the remaining 2027 application periods were to be announced', status: 'confirmed', source: 'https://en.ritsumei.ac.jp/e-ug/news/article.html/?id=297', verified: '2026-09-23', note: 'Other rounds for April and September 2027 entry had not been published when this was checked' }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Application documents listed in the admission handbook'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Ritsumeikan states that tuition and fees are expected to rise by about 5–7% a year.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'The confirmed figure is for the American University\u2013Ritsumeikan Joint Degree Program: IELTS 6.5 with 6.0 in each component. IELTS Online is not accepted, and other English-medium programmes publish their own levels.' },
    toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, note: 'TOEFL iBT 80 with 20 in each section, or TOEFL PBT 550, for the Joint Degree Program. Only single-test-date scores count, not MyBest scores.' }], note: 'TOEFL iBT 80 with 20 in each section for the Joint Degree Program; MyBest scores are not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'No English test is required from applicants whose most recent six years of formal education before enrolment were conducted and instructed only in English.',
    note: 'Tests must have been taken within two years before the last day of the application period. Ritsumeikan has published temporary changes to its English proficiency requirements, so check the programme handbook.',
    source: 'https://en.ritsumei.ac.jp/e-ug/apply/howto.html/',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening against the published admission requirements; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the admission handbook.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 1439200, includes: 'tuition for the Global Studies major across two semesters; entrance and other fees, and living costs, are extra' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥1,439,200 tuition per year',
    items: [
      { label: 'Tuition (per semester)', amount: 719600 },
      { label: 'Tuition (per year)', amount: 1439200 }
    ],
    billedSubtotal: null,
    totalText: '¥1,439,200 a year in tuition for the Global Studies major',
    note: 'Ritsumeikan states that fees are expected to increase 5–7% annually.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'The main scheme is a tuition reduction rather than a full scholarship.' },
    merit: [
      { name: 'RU Tuition Reduction Scheme', amount: 'A reduction in tuition, decided on the admission evaluation', eligibility: 'International students admitted to the English-medium programmes', deadline: null, application: 'Based on the admission evaluation', renewable: null, note: 'Offered initially for one year; the percentage bands were not read during this check.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Ritsumeikan also supports applications to external scholarships such as JASSO.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition and fees - English-medium undergraduate programmes', url: 'https://en.ritsumei.ac.jp/e-ug/financial_info/fees.html/' },
    { label: 'Scholarships', url: 'https://en.ritsumei.ac.jp/e-ug/financial_info/scholarships.html/' },
    { label: 'Application round announcement', url: 'https://en.ritsumei.ac.jp/e-ug/news/article.html/?id=297' }
  ],
  verification: { level: 'partial', checked: ['tuition','English-medium programmes','one confirmed application round','tuition reduction scheme','english (confirmed Joint Degree Program scores and waiver)'], unconfirmed: ['remaining 2027 rounds','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'doshisha-university',
  name: 'Doshisha University',
  shortName: 'Doshisha',
  country: 'jp',
  city: 'Kyoto',
  region: 'Kyoto',
  type: 'Private university',
  brand: { c1: '#5b0e2d', c2: '#2f0717', initials: 'DOS' },
  description: 'A private university in Kyoto whose Institute for the Liberal Arts offers a Bachelor of Arts taught entirely in English, with an intake of about 50 students a year.',
  englishTaught: true,
  languageOfInstruction: 'English (Institute for the Liberal Arts) and Japanese',
  programs: ['humanities','social-sciences','business','economics'],
  englishTaughtPrograms: ['humanities','social-sciences'],
  programNote: 'The Institute for the Liberal Arts (ILA) teaches its BA exclusively in English; Doshisha also lists other English-based degree programmes on its international pages.',
  links: {
    website: 'https://www.doshisha.ac.jp/en/',
    admissions: 'https://ila.doshisha.ac.jp/en/admissions/index.html',
    applicationPortal: 'https://apply.ila.doshisha.ac.jp/',
    scholarships: 'https://intad.doshisha.ac.jp/intad/en/',
    cost: 'https://ila.doshisha.ac.jp/en/admissions/index.html',
    programs: 'https://intad.doshisha.ac.jp/intad/en/english_program/offered_english.html'
  },
  admissions: {
    platforms: ['Doshisha ILA online application'],
    deadlines: [
      { name: 'Institute for the Liberal Arts - application rounds', kind: 'round', entryTerm: 'April or September', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'ILA applicants', conditions: 'Deadlines are published in the ILA application guide; the 2027 dates were not read during this check', source: 'https://ila.doshisha.ac.jp/en/admissions/application.html', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Documents listed in the ILA application guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Doshisha states that all incoming international students on a college visa are considered for a tuition reduction.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'The ILA asks for IELTS Academic 6.5 or above. IELTS on Computer and IELTS for UKVI (Academic) are accepted; IELTS Online is not.' },
    toefl: { min: 85, recommended: null, scales: [{ period: 'pre2026', min: 85, note: 'TOEFL iBT 85 or above, institution code 7078. The Home Edition and Special Home Edition are no longer accepted.' }], note: 'TOEFL iBT 85 or above; Home Edition scores are no longer accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Native speakers of English and applicants with 12 or more years of education in English are exempt from submitting a score.',
    note: 'Official score reports must be sent to the ILA by the testing institution \u2014 electronic reports and photocopies are not accepted \u2014 and scores must be no more than two years old at the deadline.',
    source: 'https://ila.doshisha.ac.jp/ila/en/admissions/requirements.html',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening against the published requirements; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the ILA application guide.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 824000, tuitionText: '\u00a5824,000 tuition in the first year (\u00a51,024,000 from the second year)', billed: 1194000, includes: 'tuition, the facilities fee and, in the first year, the \u00a5200,000 admission fee; living costs in Kyoto are extra', published: true },
    academicYear: '2027\u20132028',
    currency: 'JPY',
    headline: '\u00a51,194,000 a year in tuition and fees',
    items: [
      { label: 'Tuition \u2014 first year', amount: 824000 },
      { label: 'Tuition \u2014 second to fourth year', amount: 1024000 },
      { label: 'Facilities fee (per year)', amount: 170000 },
      { label: 'Admission fee (one-time, first year)', amount: 200000 }
    ],
    billedSubtotal: 1194000,
    totalText: '\u00a51,194,000 a year, both in the first year and in years two to four',
    note: 'Published for students entering the Institute for the Liberal Arts in 2027. All incoming international students on a college visa are considered for a tuition reduction, so the amount actually paid can be lower.',
    source: 'https://ila.doshisha.ac.jp/ila/en/admissions/fees_scholarships.html',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: null, howToApply: 'No separate application: every applicant is considered and the result is stated in the acceptance letter.', note: 'The top band of the Doshisha Merit Scholarship (Category S) covers the full tuition for each year, but not housing, food or living costs in Kyoto.' },
    merit: [
      { name: 'Doshisha Merit Scholarship \u2014 Category S', amount: 'Equivalent to the full tuition for each year', eligibility: 'Academically qualifying international students holding a student visa', deadline: null, application: 'Automatic with the admission application', renewable: true, note: 'The award is stated in the acceptance letter.' },
      { name: 'Doshisha Merit Scholarship \u2014 Category A', amount: '\u00a5460,000 a year', eligibility: 'Academically qualifying international students holding a student visa', deadline: null, application: 'Automatic with the admission application', renewable: true, note: null },
      { name: 'Doshisha Merit Scholarship \u2014 Category C', amount: '\u00a5190,000 a year', eligibility: 'Academically qualifying international students holding a student visa', deadline: null, application: 'Automatic with the admission application', renewable: true, note: null }
    ],
    needBased: { availableToInternational: true, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Doshisha also states that incoming international students on a college visa are considered for a tuition reduction.' },
    source: 'https://ila.doshisha.ac.jp/ila/en/admissions/fees_scholarships.html',
    verified: '2026-09-24'
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'ILA admissions', url: 'https://ila.doshisha.ac.jp/en/admissions/index.html' },
    { label: 'ILA application requirements', url: 'https://ila.doshisha.ac.jp/en/admissions/requirements.html' },
    { label: 'English-based degree programmes', url: 'https://intad.doshisha.ac.jp/intad/en/english_program/offered_english.html' }
  ],
  verification: { level: 'partial', checked: ['English-taught degree','intake size','tuition reduction for visa holders','ILA tuition for 2027 entry','Doshisha Merit Scholarship bands','english (IELTS and TOEFL minimums, accepted versions and waiver)'], unconfirmed: ['2027 dates','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'hitotsubashi-university',
  name: 'Hitotsubashi University',
  shortName: 'Hitotsubashi',
  country: 'jp',
  city: 'Kunitachi',
  region: 'Tokyo',
  type: 'National university (social sciences)',
  brand: { c1: '#003f6b', c2: '#002139', initials: 'HIT' },
  description: 'A national university near Tokyo specialising in the social sciences — commerce, economics, law and sociology — with an English-taught curriculum (HGP) and a Global Leaders Program in economics.',
  englishTaught: false,
  languageOfInstruction: 'Japanese, with an English-taught curriculum (HGP) and English-heavy tracks',
  programs: ['economics','business','law','social-sciences'],
  englishTaughtPrograms: [],
  programNote: 'Hitotsubashi states that it does not currently offer English-only undergraduate programmes, and that the entrance examination is conducted in Japanese with application documents in Japanese only. The Global Education Program (HGP) is an English-taught curriculum, and the Global Leaders Program in the Faculty of Economics states that 60% or more of required credits can be taken in English, but the degree itself is not English-only.',
  links: {
    website: 'https://www.hit-u.ac.jp/eng/',
    admissions: 'https://www.hit-u.ac.jp/eng/admissions/',
    applicationPortal: 'https://www.hit-u.ac.jp/eng/admissions/',
    scholarships: 'https://www.hit-u.ac.jp/eng/ryugaku/tuition.html',
    cost: 'https://www.hit-u.ac.jp/eng/ryugaku/tuition.html',
    programs: 'https://international.hit-u.ac.jp/en/courses/'
  },
  admissions: {
    platforms: ['Entrance Examination for Privately Financed International Students'],
    deadlines: [
      { name: 'Entrance examination for privately financed international students', kind: 'intake', entryTerm: 'April', entryYear: '2027', date: 'Guidelines in September, applications from December, examination in February', status: 'not-confirmed', binding: false, appliesTo: 'Privately financed international applicants', conditions: 'Hitotsubashi publishes guidelines in September, opens applications in December and holds the entrance examination in February; exact 2027 dates were not read during this check', source: 'https://www.hit-u.ac.jp/eng/admissions/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Application through the international student entrance examination', 'School transcripts and graduation certificate', 'Examination results as required by the guidelines'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Applicants who need a fully English-taught degree should confirm with the faculty which share of courses is available in English.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Requirements are set in the entrance examination guidelines, which were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Entry is by the university entrance examination for international students; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'A written entrance examination in February is part of the process.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'the standard national-university tuition and admission fee; Hitotsubashi publishes its current figures on the tuition page' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: '¥535,800 tuition per year (standard national rate)',
    items: [
      { label: 'Tuition (per year, standard national rate)', amount: 535800 },
      { label: 'Admission fee (one-time, standard national rate)', amount: 282000 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year plus a ¥282,000 admission fee at the standard national rate',
    note: 'The university publishes its own current figures; these are the standard national-university rates and were not re-read on the Hitotsubashi page during this check.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Admissions', url: 'https://www.hit-u.ac.jp/eng/admissions/' },
    { label: 'Tuition and fees', url: 'https://www.hit-u.ac.jp/eng/ryugaku/tuition.html' },
    { label: 'English-taught courses (HGP)', url: 'https://international.hit-u.ac.jp/en/courses/' }
  ],
  verification: { level: 'partial', checked: ['admission route and its calendar pattern','English-taught curriculum status','language of instruction (no English-only undergraduate programme; the entrance exam is in Japanese)'], unconfirmed: ['exact tuition on the university page','English test scores','2027 dates','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'temple-university-japan',
  name: 'Temple University, Japan Campus',
  shortName: 'TUJ',
  country: 'jp',
  city: 'Tokyo',
  region: 'Tokyo',
  type: 'Branch campus of a US university',
  brand: { c1: '#9d2235', c2: '#54121d', initials: 'TUJ' },
  description: 'The Tokyo campus of Temple University, teaching American bachelor degrees entirely in English, with rolling admissions and merit scholarships open to any nationality.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','humanities','social-sciences','computer-science','economics','psychology','arts'],
  englishTaughtPrograms: ['business','humanities','social-sciences','computer-science','economics','psychology','arts'],
  programNote: 'TUJ awards Temple University degrees in Japan; classes are entirely in English and students can transfer between the Tokyo and Philadelphia campuses.',
  links: {
    website: 'https://www.tuj.ac.jp/ug',
    admissions: 'https://www.tuj.ac.jp/ug/admissions',
    applicationPortal: 'https://www.tuj.ac.jp/ug/admissions/how-to-apply',
    scholarships: 'https://www.tuj.ac.jp/ug/cost-financial-aid',
    cost: 'https://www.tuj.ac.jp/ug/cost-financial-aid/tuition'
  },
  admissions: {
    platforms: ['TUJ online application'],
    deadlines: [
      { name: 'Rolling admission', kind: 'rolling', entryTerm: 'Multiple semesters', entryYear: '2027', date: 'Rolling — decisions usually within four weeks of a complete application', status: 'confirmed', binding: false, appliesTo: 'Undergraduate applicants', conditions: 'TUJ states that a decision normally follows within four weeks of a complete application', source: 'https://www.tuj.ac.jp/ug/admissions', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check. Admitted degree-seeking students pay a non-refundable matriculation fee of ¥434,100.' },
    documents: ['Secondary school transcripts and graduation certificate', 'English proficiency test score taken within two years, unless waived', 'Application form'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['TUJ estimates about ¥3.5 million to cover tuition, fees and living costs for the first two semesters.']
  },
  english: {
    ielts: { min: 6, recommended: null, note: 'TUJ asks for IELTS Academic 6.0 for undergraduate admission. IELTS Indicator and the One Skill Retake are not accepted.' },
    toefl: { min: 79, recommended: null, scales: [{ period: 'pre2026', min: 79, note: 'TOEFL iBT 79 on the previous scale.' }, { period: 'from2026', min: 4, note: 'TOEFL iBT 4 on the scale used from 2026. TOEFL Essentials 8.5 and TOEFL ITP 550 are also accepted.' }], note: 'From the Summer 2024 intake TUJ no longer accepts TOEFL iBT Home Edition scores.' },
    duolingo: { min: 110, recommended: null, note: 'Duolingo 110 is accepted.' },
    otherTests: 'Pearson PTE Academic 53, iTEP Academic-Plus 3.9, and Cambridge C1 Advanced or C2 Proficiency 180.',
    waiver: 'The test can be waived for applicants with 15 or more college-level semester credits in the USA, three or more years of English-medium instruction, or submitted SAT or ACT scores.',
    note: 'Scores must be from a test taken no earlier than two years before the application date. Applicants below the thresholds can be admitted conditionally through the undergraduate Bridge Program.',
    source: 'https://www.tuj.ac.jp/ug/admissions/how-to-apply/eligibility-requirements',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'unknown', note: 'TUJ is a US institution in Japan; its published undergraduate requirements centre on school records and English proficiency, and the SAT/ACT requirement was not confirmed during this check.' },
    act: { policy: 'unknown', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Secondary school graduation with transcripts; TUJ also runs an entry-year programme for applicants who need it.'
  },
  costs: {
    breakdown: { tuition: null, budget: 3500000, budgetText: 'About ¥3,500,000 for the first two semesters', includes: 'TUJ estimate covering tuition, school fees and living expenses for the first two semesters; the one-time matriculation fee of ¥434,100 is separate' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: 'About ¥3,500,000 for the first two semesters',
    items: [
      { label: 'Estimated tuition, fees and living costs (first two semesters)', amount: 3500000 },
      { label: 'Matriculation fee (one-time)', amount: 434100 }
    ],
    billedSubtotal: null,
    totalText: 'About ¥3,500,000 for the first year including living costs, plus the matriculation fee',
    note: 'This is an estimate published by TUJ, not a tuition-only figure.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: 'Awards go up to 100% of tuition and are decided on merit.', howToApply: 'Considered through the admission process.', note: 'A 100% merit award covers tuition only — living costs in Tokyo and the matriculation fee remain payable, so this is not a full ride.' },
    merit: [
      { name: 'TUJ merit scholarships', amount: 'Up to 100% of tuition', eligibility: 'Eligible students regardless of nationality', deadline: null, application: 'Through the admission process', renewable: null, note: 'Coverage is of tuition only.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition and fees', url: 'https://www.tuj.ac.jp/ug/cost-financial-aid/tuition' },
    { label: 'Admissions information', url: 'https://www.tuj.ac.jp/ug/admissions' },
    { label: 'Eligibility requirements', url: 'https://www.tuj.ac.jp/ug/admissions/how-to-apply/eligibility-requirements' }
  ],
  verification: { level: 'partial', checked: ['language of instruction','matriculation fee','cost estimate','English test rules','rolling admission','english (IELTS, TOEFL, Duolingo, PTE, iTEP and Cambridge minimums and waivers)'], unconfirmed: ['tuition alone','SAT/ACT requirement','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'meiji-university',
  name: 'Meiji University',
  shortName: 'Meiji',
  country: 'jp',
  city: 'Tokyo',
  region: 'Tokyo',
  type: 'Private university',
  brand: { c1: '#4b2e83', c2: '#281844', initials: 'MEI' },
  description: 'A large private university in Tokyo with English Track degree programmes in which all subjects are taught in English, notably in the School of Global Japanese Studies.',
  englishTaught: true,
  languageOfInstruction: 'English (English Track) and Japanese',
  programs: ['social-sciences','business','humanities','law','economics'],
  englishTaughtPrograms: ['social-sciences','humanities'],
  programNote: 'Meiji states that in its Degree Programs in English all subjects are taught in English and Japanese ability is not required. The School of Global Japanese Studies stopped its April intake of English Track students from academic year 2026.',
  links: {
    website: 'https://www.meiji.ac.jp/cip/english/',
    admissions: 'https://www.meiji.ac.jp/cip/english/admissions/degree-programs-in-english/index.html',
    applicationPortal: 'https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/admissions.html',
    scholarships: 'https://www.meiji.ac.jp/cip/english/admissions/index.html',
    cost: 'https://www.meiji.ac.jp/cip/english/admissions/tuition/undergraduate.html'
  },
  admissions: {
    platforms: ['Meiji English Track online application'],
    deadlines: [
      { name: 'English Track online application (September 2026 intake)', kind: 'application-window', entryTerm: 'September', entryYear: '2026', dateISO: '2026-03-04', date: '19 February \u2013 4 March 2026', time: '14:59', timezone: 'JST', binding: false, appliesTo: 'English Track applicants to the School of Global Japanese Studies', conditions: 'Supporting documents were due by 11 March 2026 at 16:59 JST', status: 'previous-cycle', source: 'https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/admissions.html', verified: '2026-09-24', note: 'Published for the cycle before the one this profile covers; shown as the pattern to expect.' },
      { name: 'English Track admission (September 2027 intake)', kind: 'intake', entryTerm: 'September', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'English Track applicants', conditions: 'Meiji states that the application guidelines for September 2027 admission are expected around December 2026', source: 'https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/admissions.html', verified: '2026-09-24', note: 'The April intake of English Track students in the School of Global Japanese Studies was discontinued from academic year 2026, so applicants should check which intakes remain.' }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence', 'Documents listed in the English Track admission guidelines'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Japanese language ability is not required for the English Track programmes.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Requirements are set in the English Track admission guidelines, which were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening against the English Track requirements; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the admission guidelines.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification such as the IB, A-levels or a recognised national school-leaving certificate.'
  },
  costs: {
    breakdown: { published: false, includes: 'Meiji publishes undergraduate tuition and fees by school; the figures were not read during this check' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: 'Tuition published per school',
    items: [ { label: 'Tuition and fees', text: 'Published on the undergraduate tuition page for each school' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official tuition page',
    note: 'Living costs in Tokyo are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Degree programs in English', url: 'https://www.meiji.ac.jp/cip/english/admissions/degree-programs-in-english/index.html' },
    { label: 'English Track admissions', url: 'https://www.meiji.ac.jp/cip/english/undergraduate/nippon/englishtrack/admissions.html' },
    { label: 'Undergraduate tuition and fees', url: 'https://www.meiji.ac.jp/cip/english/admissions/tuition/undergraduate.html' }
  ],
  verification: { level: 'partial', checked: ['English-taught degrees','discontinued April intake'], unconfirmed: ['tuition amounts','English scores','2027 dates','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'okayama-university',
  name: 'Okayama University',
  shortName: 'Okayama',
  country: 'jp',
  city: 'Okayama',
  region: 'Okayama',
  type: 'National research university',
  brand: { c1: '#00559b', c2: '#002c52', initials: 'OKA' },
  description: 'A national university in western Japan whose Discovery Program for Global Learners is a four-year bachelor that can be completed entirely in English, combining social sciences, humanities and natural sciences.',
  englishTaught: true,
  languageOfInstruction: 'English (Discovery Program) and Japanese',
  programs: ['social-sciences','humanities','biology','mathematics','economics'],
  englishTaughtPrograms: ['social-sciences','humanities','biology'],
  programNote: 'All classes in the Discovery Program for Global Learners are in English and no Japanese is needed; the open curriculum lets students mix disciplines.',
  links: {
    website: 'https://www.okayama-u.ac.jp/eng/',
    admissions: 'https://discovery.okayama-u.ac.jp/en/prospective_students/admission/international-application/',
    applicationPortal: 'https://discovery.okayama-u.ac.jp/en/prospective_students/admission/',
    scholarships: 'https://discovery.okayama-u.ac.jp/en/prospective_students/s/',
    cost: 'https://discovery.okayama-u.ac.jp/en/prospective_students/tuition_and_fees/'
  },
  admissions: {
    platforms: ['Discovery Program international application'],
    deadlines: [
      { name: 'Discovery Program - international admissions', kind: 'intake', entryTerm: 'April or October', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'International applicants to the Discovery Program', conditions: 'Dates are published in the annual application guide; the 2027 guide was not read during this check', source: 'https://discovery.okayama-u.ac.jp/en/prospective_students/admission/international-application/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Evidence of 12 years of schooling (or 11 years plus a MEXT-designated preparatory course)', 'English proficiency evidence', 'Documents listed in the application guide'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Tuition is paid in two instalments and the first payment falls due after arrival on campus.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS is accepted, but Okayama states that the Discovery Program has no minimum required scores: English is assessed from test scores, writing samples and interviews together.' },
    toefl: { min: null, recommended: null, scales: [], note: 'TOEFL iBT is accepted, with no published minimum. Tests taken at home are not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'Cambridge English, EIKEN, GTEC (Advanced, Basic, Core or CBT), TEAP, TEAP CBT, TOEIC L&R with S&W, and an IB English score including a predicted score, are all accepted.',
    waiver: 'Applicants who received their education primarily in English in the most recent five years do not have to submit an English qualification.',
    note: 'The absence of a minimum does not mean the test is optional: a score must be submitted unless the applicant is exempt, and home-taken certifications are not accepted. No Japanese language proficiency is needed for the Discovery Program.',
    source: 'https://discovery.okayama-u.ac.jp/en/prospective_students/admission/international-application/',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening under the international admissions route; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the application guide.',
    internationalQualifications: 'Applicants normally need 12 years of school education completed outside Japan, or an equivalent qualification; Okayama also accepts 11 years plus a MEXT-designated preparatory course.'
  },
  costs: {
    breakdown: { tuition: 535800, billed: 817800, includes: 'annual tuition of ¥535,800 paid in two instalments of ¥267,900, plus a one-time admission fee of ¥282,000 payable shortly after the offer' },
    academicYear: '2025–2026',
    currency: 'JPY',
    headline: '¥535,800 tuition per year',
    items: [
      { label: 'Tuition (per year, 2025 estimate)', amount: 535800 },
      { label: 'Tuition instalment (twice a year)', amount: 267900 },
      { label: 'Admission fee (one-time, 2025 estimate)', amount: 282000 }
    ],
    billedSubtotal: 817800,
    totalText: '¥535,800 a year plus a one-time ¥282,000 admission fee',
    note: 'Okayama labels these figures as 2025 estimates on its Discovery Program pages.'
  },
  scholarships: {
    fullRide: { available: true, internationalEligible: true, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: true, competitiveness: 'MEXT places are limited and highly competitive.', howToApply: 'Through the MEXT scholarship route linked from the programme pages.', note: 'The MEXT scholarship covers the admission fee and tuition, pays ¥117,000 a month and includes flights at the start and end of the four-year programme. Housing and food come out of the stipend.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Discovery Program - tuition and fees', url: 'https://discovery.okayama-u.ac.jp/en/prospective_students/tuition_and_fees/' },
    { label: 'Discovery Program - international application', url: 'https://discovery.okayama-u.ac.jp/en/prospective_students/admission/international-application/' },
    { label: 'Discovery Program - scholarships', url: 'https://discovery.okayama-u.ac.jp/en/prospective_students/s/' }
  ],
  verification: { level: 'partial', checked: ['English-taught degree','tuition and admission fee','entry qualification routes','MEXT coverage','english (accepted tests and the no-minimum policy)'], unconfirmed: ['2027 application dates','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'kwansei-gakuin-university',
  name: 'Kwansei Gakuin University',
  shortName: 'Kwansei Gakuin',
  country: 'jp',
  city: 'Nishinomiya',
  region: 'Hyogo',
  type: 'Private university',
  brand: { c1: '#003f8a', c2: '#002047', initials: 'KGU' },
  description: 'A private university near Kobe whose International Admission route leads to an English-based degree programme: students can graduate taking courses in English, with one compulsory Japanese language course.',
  englishTaught: true,
  languageOfInstruction: 'English (English-based Degree Program) and Japanese',
  programs: ['social-sciences','business','humanities','economics','law'],
  englishTaughtPrograms: ['social-sciences','humanities'],
  programNote: 'Students admitted through International Admission enrol as English-based International Students and can graduate on English-taught courses, though a Japanese language course taught in Japanese is compulsory.',
  links: {
    website: 'https://www.kwansei.ac.jp/en/',
    admissions: 'https://www.kwansei.ac.jp/en/academics/undergraduate/international-studies/admission.html',
    applicationPortal: 'https://www.kwansei.ac.jp/en/academics/undergraduate/international-studies/admission.html',
    scholarships: 'https://www.kwansei.ac.jp/en/academics/undergraduate/international-studies/admission.html',
    cost: 'https://www.kwansei.ac.jp/en/academics/undergraduate/international-studies/admission.html'
  },
  admissions: {
    platforms: ['Kwansei Gakuin International Admission'],
    deadlines: [
      { name: 'International Admission', kind: 'intake', entryTerm: 'April or September', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'International applicants to the English-based degree programme', conditions: 'Dates are published in the annual International Admission application handbook; the 2027 handbook was not read during this check', source: 'https://www.kwansei.ac.jp/en/academics/undergraduate/international-studies/admission.html', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'Evidence of English ability', 'Documents listed in the International Admission handbook'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Kwansei Gakuin states that tuition for 2027 entrants had not been finalised when this was checked.']
  },
  english: {
    ielts: { min: 6, recommended: null, note: 'The School of International Studies asks for IELTS 6.0 or higher from applicants whose first language is not English.' },
    toefl: { min: 71, recommended: null, scales: [{ period: 'pre2026', min: 71, note: 'TOEFL iBT 71 or higher. The TOEFL iBT Home Edition is not accepted.' }], note: 'TOEFL iBT 71 or higher; the Home Edition is not accepted.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    otherTests: 'TOEIC L&R 730 or higher, and EIKEN pre-first grade or higher.',
    waiver: 'Applicants who graduated, or expect to graduate, from an institution teaching in English are exempt, provided they had at least three years of education there.',
    note: 'Scores must be from a test taken within two years before the application, except for EIKEN.',
    source: 'https://www.kwansei.ac.jp/en/assets/International_Admission_2026_Application_Handbook.pdf',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening under the International Admission route; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the application handbook.',
    internationalQualifications: 'Twelve years of school education or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'Kwansei Gakuin publishes tuition for each entry year; the 2027 figures were not finalised when this was checked' },
    academicYear: '2027–2028',
    currency: 'JPY',
    headline: 'Tuition for 2027 entrants not yet finalised',
    items: [ { label: 'Tuition and other expenses', text: 'Published for 2026 entrants; the university states the 2027 figures were not finalised' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — 2027 figures not yet published',
    note: 'Living costs in the Kobe area are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Admission and tuition fees - School of International Studies', url: 'https://www.kwansei.ac.jp/en/academics/undergraduate/international-studies/admission.html' },
    { label: 'International Admission application handbook 2026 (PDF)', url: 'https://www.kwansei.ac.jp/en/assets/International_Admission_2026_Application_Handbook.pdf' }
  ],
  verification: { level: 'partial', checked: ['English-based degree route','compulsory Japanese course','fee publication status','english (IELTS, TOEFL, TOEIC and EIKEN minimums and waiver)'], unconfirmed: ['tuition amounts','2027 dates','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'toyo-university',
  name: 'Toyo University',
  shortName: 'Toyo',
  country: 'jp',
  city: 'Tokyo',
  region: 'Tokyo',
  type: 'Private university',
  brand: { c1: '#003580', c2: '#001c44', initials: 'TOY' },
  description: 'A large private university in Tokyo whose Department of Global Innovation Studies teaches an English-based bachelor degree and admits international students through an online application and interview.',
  englishTaught: true,
  languageOfInstruction: 'English (Global Innovation Studies) and Japanese',
  programs: ['business','social-sciences','computer-science','economics','humanities'],
  englishTaughtPrograms: ['business','social-sciences','computer-science'],
  programNote: 'The Department of Global Innovation Studies runs the English-based route for international applicants; most other Toyo programmes are taught in Japanese.',
  links: {
    website: 'https://www.toyo.ac.jp/en/',
    admissions: 'https://www.toyo.ac.jp/nyushi/en/admission/',
    applicationPortal: 'https://www.toyo.ac.jp/nyushi/en/admission/',
    scholarships: 'https://www.toyo.ac.jp/nyushi/en/admission/',
    cost: 'https://www.toyo.ac.jp/nyushi/content/dam/toyowebstyle/international-student/payment-of-tuition-and-fees_en.pdf'
  },
  admissions: {
    platforms: ['Toyo University online admissions for international students'],
    deadlines: [
      { name: 'Online entrance examination for international students (September intake)', kind: 'intake', entryTerm: 'September', entryYear: '2026', date: 'Published in the online application guide', status: 'not-confirmed', binding: false, appliesTo: 'International applicants to Global Innovation Studies', conditions: 'Registration and documents are submitted online and the interview is held online; the 2027 dates were not read during this check', source: 'https://www.toyo.ac.jp/nyushi/en/admission/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Evidence of at least 14 years of school education', 'TOEFL iBT score of 79 or higher', 'Online application documents'],
    recommendations: null,
    essay: null,
    interview: 'An online interview through a web conferencing system is part of the selection.',
    notes: ['Toyo notes that published tuition figures are before a 30% tuition reduction applied to this route; the current figures should be checked on its site.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed. The published requirement for the Global Innovation Studies online admission is a TOEFL iBT score of 79 or higher.' },
    toefl: { min: 79, recommended: null, scales: [{ period: 'pre2026', min: 79, recommended: null }], note: 'TOEFL iBT 79 or higher is required for the international online admission route to Global Innovation Studies.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Applicants must be nationals of a country other than Japan for this route.',
    note: 'The requirement is stated in the online admission application guide.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening and an online interview; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'None stated beyond the interview.',
    internationalQualifications: 'At least 14 years of school education is required for this admission route.'
  },
  costs: {
    breakdown: { published: false, includes: 'Toyo publishes tuition and fees for international students separately; the figures quoted in its documents are before a 30% reduction' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: 'Tuition published with a 30% reduction for this route',
    items: [ { label: 'Tuition and fees', text: 'Published in the payment of tuition and fees document; amounts are before a 30% reduction' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official tuition document',
    note: 'Living costs in Tokyo are extra.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'The support confirmed here is a tuition reduction rather than a full scholarship.' },
    merit: [ { name: 'Tuition reduction for international students on this route', amount: '30% reduction applied to the published tuition', eligibility: 'International students admitted through the online admission route', deadline: null, application: null, renewable: null, note: 'Stated in Toyo\'s admission documents; the detailed conditions were not read during this check.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Admissions for international students', url: 'https://www.toyo.ac.jp/nyushi/en/admission/' },
    { label: 'Online entrance examination guide - Global Innovation Studies (PDF)', url: 'https://www.toyo.ac.jp/nyushi/content/dam/toyowebstyle/admission/admission-data/international-student/requirements-online/online-entry-exam_dgis_2026_sep_en.pdf' },
    { label: 'Payment of tuition and fees (PDF)', url: 'https://www.toyo.ac.jp/nyushi/content/dam/toyowebstyle/international-student/payment-of-tuition-and-fees_en.pdf' }
  ],
  verification: { level: 'partial', checked: ['English-based route','TOEFL requirement','selection method','tuition reduction'], unconfirmed: ['tuition amounts','2027 dates','IELTS acceptance','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'kyoto-university-advanced-science',
  name: 'Kyoto University of Advanced Science',
  shortName: 'KUAS',
  country: 'jp',
  city: 'Kyoto',
  region: 'Kyoto',
  type: 'Private university',
  brand: { c1: '#0b3c7d', c2: '#051f42', initials: 'KUA' },
  description: 'A private university in Kyoto whose Faculty of Engineering runs a four-year bachelor taught entirely in English in mechanical and electrical systems engineering, with project-based learning.',
  englishTaught: true,
  languageOfInstruction: 'English (Faculty of Engineering international programme) and Japanese',
  programs: ['engineering','computer-science','business'],
  englishTaughtPrograms: ['engineering'],
  programNote: 'The English-medium engineering degree is aimed at international students; other faculties teach in Japanese.',
  links: {
    website: 'https://www.kuas.ac.jp/en/',
    admissions: 'https://www.kuas.ac.jp/en/admission/',
    applicationPortal: 'https://www.kuas.ac.jp/en/admission/under-eligibility/',
    scholarships: 'https://www.kuas.ac.jp/en/contact/faq/fees/',
    cost: 'https://www.kuas.ac.jp/en/admission/tuition/',
    programs: 'https://www.kuas.ac.jp/en/academics/eng/'
  },
  admissions: {
    platforms: ['KUAS online application'],
    deadlines: [
      { name: 'September 2027 intake - admission information release', kind: 'intake', entryTerm: 'September', entryYear: '2027', date: 'Admission information published in mid-May 2027', status: 'not-confirmed', binding: false, appliesTo: 'International applicants to the English-medium engineering programme', conditions: 'KUAS states that admission information for the September 2027 intake will be available in mid-May; the exact deadlines were not published when this was checked', source: 'https://www.kuas.ac.jp/en/admission/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Evidence of 12 years of school education or an equivalent such as the IB Diploma or GCE A-levels', 'English proficiency evidence', 'KUAS application form'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['KUAS states that tuition and admission fees are the same regardless of nationality; only a scholarship changes what a student pays.']
  },
  english: {
    ielts: { min: 5.5, recommended: null, note: 'The Faculty of Engineering asks for IELTS Academic 5.5 overall.' },
    toefl: { min: 75, recommended: null, scales: [{ period: 'pre2026', min: 75, note: 'TOEFL iBT 75, including the Home Edition and MyBest scores.' }], note: 'TOEFL iBT 75; the Home Edition and MyBest scores are accepted.' },
    duolingo: { min: 105, recommended: null, note: 'Duolingo English Test total of 105.' },
    otherTests: 'Pearson PTE Academic 50.',
    waiver: 'A waiver can be granted when the most recent three years of formal education were conducted entirely in English and the Medium of Instruction letter meets the requirements in the application guidelines.',
    note: 'Standardised testing is mandatory for the Faculty of Engineering: every applicant must submit a score from an accepted test unless they hold a waiver.',
    source: 'https://www.kuas.ac.jp/en/admission/under-faq/',
    verified: '2026-09-24'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Selection is by document screening and the university's own assessment; US test-optional categories do not apply." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the admission guidelines.',
    internationalQualifications: 'Twelve years of school education, or an equivalent such as the IB Diploma or GCE A-levels.'
  },
  costs: {
    breakdown: { tuition: 2045000, tuitionText: '\u00a52,045,000 in school fees (two semesters of \u00a51,022,500)', billed: 2294500, includes: 'school fees for both semesters plus the one-time \u00a5200,000 admission fee and \u00a549,500 association fees in the first year; living costs in Kyoto are extra', published: true },
    academicYear: '2027\u20132028',
    currency: 'JPY',
    headline: '\u00a52,294,500 in the first year',
    items: [
      { label: 'School fees \u2014 first semester', amount: 1022500 },
      { label: 'School fees \u2014 second semester', amount: 1022500 },
      { label: 'Admission fee (one-time)', amount: 200000 },
      { label: 'Association fees (first year)', amount: 49500 }
    ],
    billedSubtotal: 2294500,
    totalText: '\u00a52,294,500 in the first year for students enrolling in or after the 2027 academic year',
    note: 'School fees include tuition and education enhancement fees. KUAS states that fees do not differ by nationality or country of residence, so only a scholarship changes what a student pays.',
    source: 'https://www.kuas.ac.jp/en/admission/tuition/',
    verified: '2026-09-24'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: true, basis: 'merit', covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: 'All applicants to the English-medium international programmes are considered for scholarships.', note: 'KUAS states that all applicants to its English-medium programmes are eligible to be considered for scholarships; the award levels were not read during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition and fees', url: 'https://www.kuas.ac.jp/en/admission/tuition/' },
    { label: 'How to apply (undergraduate)', url: 'https://www.kuas.ac.jp/en/admission/under-eligibility/' },
    { label: 'Faculty of Engineering', url: 'https://www.kuas.ac.jp/en/academics/eng/' }
  ],
  verification: { level: 'partial', checked: ['English-medium degree','entry qualifications','fee parity by nationality','scholarship eligibility','school fees from the 2027 academic year','english (IELTS, TOEFL, PTE and Duolingo minimums for engineering)'], unconfirmed: ['2027 dates','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'miyazaki-international-college',
  name: 'Miyazaki International College',
  shortName: 'MIC',
  country: 'jp',
  city: 'Miyazaki',
  region: 'Miyazaki',
  type: 'Private college',
  brand: { c1: '#0a7d6b', c2: '#054239', initials: 'MIC' },
  description: 'A small private college in southern Japan whose Global Liberal Arts course teaches all classes in English apart from career education and Japanese-language subjects, with tuition waivers for international students.',
  englishTaught: true,
  languageOfInstruction: 'English (Global Liberal Arts) and Japanese',
  programs: ['humanities','social-sciences','business'],
  englishTaughtPrograms: ['humanities','social-sciences'],
  programNote: 'In the Global Liberal Arts course all classes are in English except career education and Japanese-related classes. The International Business Management and English Teacher courses mix Japanese and English.',
  links: {
    website: 'https://www.mic.ac.jp/english/',
    admissions: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/Admissions_Information/Online_Application',
    applicationPortal: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/Admissions_Information/Online_Application',
    scholarships: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/Admissions_Information/Fees_and_Scholarships',
    cost: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/Admissions_Information/Fees_and_Scholarships'
  },
  admissions: {
    platforms: ['MIC online application'],
    deadlines: [
      { name: 'International admissions test dates', kind: 'intake', entryTerm: 'April or October', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'International applicants', conditions: 'MIC publishes test dates and sites for each cycle; the 2027 dates were not read during this check', source: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/Admissions_Information/Test_Date_and_Sites', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'An application fee is paid by credit card through the online application; the amount was not read during this check.' },
    documents: ['School transcripts and graduation certificate', 'English test score where used for a scholarship', 'Online application'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['The figures below come from MIC pages that quote 2022–2023 enrolment; current rates should be confirmed on the site.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Standardised English test scores are used to decide first-year tuition waivers of 50% or 100%.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Selection is by the college's own examination and documents; US test-optional categories do not apply." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'MIC holds its own entrance examinations at published test sites.',
    internationalQualifications: 'Secondary school graduation; the detailed requirements are in the admission pages.'
  },
  costs: {
    breakdown: { tuition: 680000, includes: 'tuition quoted at ¥340,000 per semester for the 2022–2023 enrolments cited on the MIC pages; international students receive a 20% tuition waiver and a 50% waiver of the ¥200,000 admission fee' },
    academicYear: '2022–2023 figures published on the MIC pages',
    currency: 'JPY',
    headline: '¥340,000 tuition per semester (2022–23 figures)',
    items: [
      { label: 'Tuition (per semester, 2022–23 figures)', amount: 340000 },
      { label: 'Admission fee', amount: 200000 },
      { label: 'International student waivers', text: '50% off the admission fee and 20% off tuition' }
    ],
    billedSubtotal: null,
    totalText: 'About ¥680,000 a year before the international waivers, based on the published 2022–23 figures',
    note: 'These are the figures published on the pages read; the current year rates should be checked before applying.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: 'merit', covers: { tuition: true, housing: false, meals: false, insurance: false, books: false }, renewable: false, competitiveness: null, howToApply: 'Apply with a qualifying standardised English test score.', note: 'A 100% first-year tuition waiver covers tuition for one year only, not housing, food or later years.' },
    merit: [
      { name: 'English test score tuition waiver', amount: '50% or 100% of first-year tuition', eligibility: 'Applicants with qualifying standardised English test scores or grades', deadline: null, application: 'Applied for with the admission application', renewable: false, note: 'Applies to the first year.' },
      { name: 'International student waivers', amount: '50% of the ¥200,000 admission fee and 20% of tuition', eligibility: 'All international students', deadline: null, application: 'Automatic', renewable: null, note: null }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'MIC also points to the Monbukagakusho Honors Scholarship reservation programme for privately financed international students.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Fees and scholarships', url: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/Admissions_Information/Fees_and_Scholarships' },
    { label: 'Online application', url: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/Admissions_Information/Online_Application' },
    { label: 'International Liberal Arts', url: 'https://www.mic.ac.jp/english/Schools/International_Liberal_Arts/' }
  ],
  verification: { level: 'partial', checked: ['language of instruction by course','waivers for international students','scholarship structure'], unconfirmed: ['current-year tuition','English score thresholds','2027 test dates','application fee amount'] },
  lastVerified: '2026-09-23'
},

{
  id: 'hosei-university',
  name: 'Hosei University',
  shortName: 'Hosei',
  country: 'jp',
  city: 'Tokyo',
  region: 'Tokyo',
  type: 'Private university',
  brand: { c1: '#003893', c2: '#001c4a', initials: 'HOS' },
  description: 'A private university in central Tokyo with several English-based degree programmes, including Global and Interdisciplinary Studies, which is taught entirely in English and admits students in April and September.',
  englishTaught: true,
  languageOfInstruction: 'English (English-based degree programmes) and Japanese',
  programs: ['humanities','social-sciences','business','economics','engineering'],
  englishTaughtPrograms: ['humanities','social-sciences','business'],
  programNote: 'English-based degree programmes include Global and Interdisciplinary Studies (GIS), the Global Business Program, SCOPE and IGESS; the rest of the university teaches in Japanese.',
  links: {
    website: 'https://www.hosei.ac.jp/english/',
    admissions: 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/',
    applicationPortal: 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/',
    scholarships: 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/',
    cost: 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/',
    programs: 'http://gis.hosei.ac.jp/'
  },
  admissions: {
    platforms: ['Hosei English-based degree programmes application'],
    deadlines: [
      { name: 'English-based degree programmes - fall admission', kind: 'intake', entryTerm: 'September', entryYear: '2027', date: 'Published in the Fall 2027 application guideline', status: 'not-confirmed', binding: false, appliesTo: 'Applicants to GIS, GBP, SCOPE and IGESS', conditions: 'Hosei publishes a separate application guideline for each intake; the exact 2027 dates were not read during this check', source: 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/', verified: '2026-09-23', note: null },
      { name: 'English-based degree programmes - spring admission', kind: 'intake', entryTerm: 'April', entryYear: '2027', date: 'Published in the application guideline', status: 'not-confirmed', binding: false, appliesTo: 'Applicants to the English-based degree programmes', conditions: 'GIS admits in both April and September', source: 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['School transcripts and graduation certificate', 'English proficiency evidence such as TOEFL iBT', 'Application documents listed in the guideline'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Hosei states that the equivalent of 30% of tuition is deducted for all regular international students in the first year.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed. Hosei publishes demanding English requirements for GIS, giving TOEFL iBT 90 or above as an example.' },
    toefl: { min: 90, recommended: null, scales: [{ period: 'pre2026', min: 90, recommended: null }], note: 'TOEFL iBT 90 or above is given as the level expected for GIS.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Exact accepted tests and minimums are set in each programme application guideline.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Selection is by document screening under the English-based admission route; US test-optional categories do not apply.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Set out in the application guidelines.',
    internationalQualifications: 'Twelve years of school education or an equivalent qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'Hosei publishes tuition for the English-based programmes in the application guidelines; international students receive a first-year deduction equal to 30% of tuition' },
    academicYear: '2026–2027',
    currency: 'JPY',
    headline: 'Tuition published in the programme guidelines',
    items: [
      { label: 'Tuition', text: 'Published in the English-based degree programme guidelines' },
      { label: 'International student deduction', text: 'Equivalent of 30% of tuition in the first year' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official application guideline',
    note: 'Living costs in Tokyo are extra.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'The confirmed support is a first-year tuition deduction rather than a full scholarship.' },
    merit: [ { name: 'First-year international student tuition deduction', amount: 'Equivalent to 30% of tuition', eligibility: 'All regular international students', deadline: null, application: 'Automatic', renewable: false, note: 'Applies in the first year.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'English-based degree programmes', url: 'https://www.hosei.ac.jp/english/admissions/undergraduate/ebdp/' },
    { label: 'GIS programme site', url: 'http://gis.hosei.ac.jp/' },
    { label: 'Admission overview (PDF)', url: 'https://www.hosei.ac.jp/documents/english/for_admission/ebdp/Admission%20Overview_en.pdf' }
  ],
  verification: { level: 'partial', checked: ['English-taught programmes','TOEFL level for GIS','first-year tuition deduction','intakes'], unconfirmed: ['tuition amounts','IELTS acceptance','2027 dates','application fee'] },
  lastVerified: '2026-09-23'
},
);
