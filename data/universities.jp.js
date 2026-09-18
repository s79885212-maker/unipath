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
  englishTaught: null,
  languageOfInstruction: 'Japanese, with some English-taught routes',
  programs: ['engineering','computer-science','economics','mathematics','biology','social-sciences','humanities','law','medicine','arts'],
  englishTaughtPrograms: [],
  programNote: 'Undergraduates enter a Junior Division for two years of broad study at Komaba before moving to a Senior Division faculty. PEAK offered two English-medium senior-division tracks — Japan in East Asia, and Environmental Sciences.',
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
    deadlines: [],
    applicationFee: { amount: null, currency: 'JPY', waiver: null },
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
    { label: 'PEAK fees & scholarships', url: 'https://peak.c.u-tokyo.ac.jp/fees_scholarships/index.html' }
  ],
  lastVerified: '2026-09-16'
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
  programNote: 'Kyoto iUP is a 4.5-year route: a six-month preparatory course followed by four years of undergraduate study in a chosen faculty. Students graduate with academic-level Japanese in addition to their degree.',
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
      { name: 'October enrolment', date: 'See the current Application Guidelines PDF', note: 'Kyoto publishes a dated application guide for each October intake' }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiver: null },
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
    { label: 'Kyoto iUP on the university site', url: 'https://www.kyoto-u.ac.jp/en/education-campus/education-and-admissions/undergraduate-degree-programs/kyoto-iup-kyoto-university-international-undergraduate-program' }
  ],
  lastVerified: '2026-09-16'
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
      { name: 'September 2026 entry (English-based programmes)', date: '8 January 2026 10:00 – 10 February 2026 17:00 JST', note: 'Application periods vary by school; SILS has an April intake with a mid-August to early-September window' }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiver: null },
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
      { name: 'PEARL / GIGA', date: 'Three application periods per admissions year', note: 'Check the current application guidebook for dates' }
    ],
    applicationFee: { amount: 35000, currency: 'JPY', waiver: null },
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
    deadlines: [],
    applicationFee: { amount: null, currency: 'JPY', waiver: null },
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
      { name: 'April entry', date: 'Online application opens October of the preceding year', note: 'For 2027 April entry, applications open October 2026' },
      { name: 'September entry (two rounds)', date: 'Online application opens January', note: 'For 2027 September entry, applications open January 2027' }
    ],
    applicationFee: { amount: 30000, currency: 'JPY', waiver: 'Non-refundable; an additional ¥880 system operation fee applies' },
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
      { name: 'Multiple enrolment periods per year', date: 'See the official admissions calendar', note: 'APU states you may have a greater chance of a tuition reduction scholarship if you apply earlier in each enrolment period' }
    ],
    applicationFee: { amount: null, currency: 'JPY', waiver: null },
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
  programNote: 'FGL taught three English-medium undergraduate courses: Advanced Molecular Chemistry (AMC), International Mechanical and Aerospace Engineering (IMAC-U) and Applied Marine Biology (AMB). These are being succeeded by Gateway College from 2027.',
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
    deadlines: [],
    applicationFee: { amount: null, currency: 'JPY', waiver: null },
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
    { label: 'FGL FAQ (PDF)', url: 'https://www.insc.tohoku.ac.jp/english/wp-content/uploads/2025/05/FGL-FAQ_20260501.pdf' }
  ],
  lastVerified: '2026-09-16'
}
);
