/* ============================================================
   Germany — university records
   Every figure below was read from the official university page
   (or DAAD, the German Academic Exchange Service) listed in
   `sources`. Fields we could not confirm are `null` and render as
   "Not confirmed — check official source".

   Germany specifics worth knowing while reading these records:
   - Most bachelor's degrees at public universities are taught in
     German. These records list only universities with bachelor's
     degrees fully in English, and englishTaughtPrograms names only
     those English degrees.
   - Public universities charge little or no tuition, except in
     Baden-Württemberg and at some Bavarian universities, which
     charge students from outside the EU.
   - A foreign school certificate must count as a German university
     entrance qualification (HZB); otherwise a foundation course
     (Studienkolleg) or some university study at home comes first.
   ============================================================ */
window.UNIPATH.universities.push(
{
  id: 'technical-university-of-munich',
  name: 'Technical University of Munich',
  shortName: 'TUM',
  country: 'de',
  city: 'Munich',
  region: 'Bavaria',
  founded: 1868,
  type: 'Public technical university',
  brand: { c1: '#3070B3', c2: '#0e3a66', initials: 'TUM' },
  description: 'Germany\'s leading technical university, with campuses in and around Munich and in Heilbronn and Straubing. It runs the largest set of English-taught bachelor\'s degrees among Germany\'s research universities — but since 2024 it charges students from outside the EU tuition of €2,000 or €3,000 a semester.',
  englishTaught: true,
  languageOfInstruction: 'German, with a growing set of English-taught bachelor\'s degrees',
  programs: ['engineering','computer-science','mathematics','business','economics','biology','medicine','education','social-sciences'],
  englishTaughtPrograms: ['engineering','business','computer-science','economics'],
  programNote: 'English-taught bachelor\'s degrees listed by DAAD include Aerospace, Chemical Engineering, Electronics and Data Engineering (taught at TUM Asia in Singapore), Information Engineering and Management & Technology in Heilbronn, Management & Data Science, Bioeconomy, Geodesy and Earth Observation, and Sustainable Management & Technology. The Munich Management & Technology degree is taught in English and German, fully in English only for its Computer Engineering specialization.',
  links: {
    website: 'https://www.tum.de/en/',
    admissions: 'https://www.tum.de/en/studies/application/bachelor/application-bachelor/',
    internationalAdmissions: 'https://www.tum.de/en/studies/application/application-info-portal/application-international',
    applicationPortal: 'https://www.tum.de/en/studies/application/bachelor/application-bachelor/',
    scholarships: 'https://www.tum.de/en/studies/fees/tuition/scholarships-and-waivers',
    financialAid: 'https://www.tum.de/en/studies/fees/tuition/scholarships-and-waivers',
    programs: 'https://www2.daad.de/deutschland/studienangebote/international-programmes/en/',
    cost: 'https://www.tum.de/en/studies/fees/tuition'
  },
  admissions: {
    platforms: ['TUMonline (TUM\'s own application portal)', 'uni-assist preliminary review (VPD) for a school certificate from outside Germany'],
    deadlines: [
      { name: 'Winter semester application', date: '15 May – 15 July', note: 'Application period for bachelor\'s degrees starting in the winter semester' },
      { name: 'uni-assist preliminary review (VPD)', date: 'Before 15 July', note: 'Applicants with an international school certificate apply for the VPD through uni-assist before the winter-semester deadline' }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'uni-assist charges its own fee for the preliminary review; the amount is set by uni-assist.' },
    documents: [
      'School-leaving certificate and transcripts, reviewed by uni-assist (VPD) if issued outside Germany',
      'Half-year grades from the last two years of secondary school (used in the aptitude assessment)',
      'Proof of language skills where the programme asks for it'
    ],
    recommendations: null,
    essay: null,
    interview: 'Many programmes use an aptitude assessment: school grades first, then an admission test or interview for applicants in the middle band',
    notes: [
      'Your school certificate must count as a German university entrance qualification; if it does not, TUM cannot admit you directly.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Set by each programme. For Management & Technology no certificate is needed — English is assessed through the aptitude assessment, using English half-year grades or an interview in English.' },
    toefl: { min: null, recommended: null, note: 'Set by each programme; check the programme page.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'English requirements differ by programme at TUM. Check the page for your exact degree before booking a test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'TUM selects on school-leaving grades and its own aptitude assessment.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: 'Some programmes invite applicants to an admission test or interview as the second stage of the aptitude assessment.',
    internationalQualifications: 'A school certificate from outside Germany must be recognised as a German university entrance qualification (HZB). Check the DAAD admission database for your country; if your certificate does not qualify, a foundation course (Studienkolleg) or some university study at home is needed first.'
  },
  costs: {
    breakdown: { tuition: 2000, tuitionText: "€2,000–€3,000 per semester", period: "semester", includes: "tuition per semester for new students from outside the EU; the semester fee is extra" },
    academicYear: 'From winter semester 2024/25 (for new non-EU students)',
    currency: 'EUR',
    headline: '€2,000–€3,000 tuition per semester',
    items: [
      { label: 'Tuition for students from outside the EU (per semester)', text: '€2,000 or €3,000, depending on the programme' },
      { label: 'Tuition — Management & Technology (per semester)', amount: 2000 },
      { label: 'Semester fee (student union contribution)', text: 'Varies by campus' }
    ],
    billedSubtotal: null,
    totalText: '€4,000–€6,000 tuition a year, plus the semester fee and living costs',
    note: 'TUM charges tuition to students from outside the EU/EEA who newly enrol from winter semester 2024/25; students who gained their school-leaving qualification in the German system are exempt. Every student also pays a semester fee. DAAD estimates student living costs in Germany at €900–€1,200 a month.'
  },
  scholarships: {
    fullRide: {
      available: false,
      internationalEligible: false,
      basis: null,
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: true,
      competitiveness: null,
      howToApply: null,
      note: 'TUM\'s need-based waiver can remove tuition for the whole standard duration of the degree, but it does not pay living costs, so it is not a full ride.'
    },
    merit: [
      { name: 'Waiver scholarship based on financial need', amount: 'Waiver of the non-EU tuition fees for the standard duration of the degree', eligibility: 'New students from outside the EU/EEA who cannot afford the fees because of financial hardship', deadline: '15 May – 15 July for the following winter semester', application: 'Online application with bank statements for 18 months, proof of income and assets, and family documents', renewable: true, note: null },
      { name: 'Waiver scholarship for high-achieving students', amount: 'Two-semester tuition waiver, can be reapplied for', eligibility: 'Enrolled students from the 3rd semester with outstanding results', deadline: '31 May – 30 June (winter) or 30 November – 31 December (summer)', application: 'With the current TUM examination report', renewable: true, note: 'Not available in the first year.' },
      { name: 'Scholarship for International TUM Students', amount: 'One-time grant of €500–€1,800 per semester', eligibility: 'International students who need financial support during their studies', deadline: null, application: 'Can be reapplied for every semester', renewable: true, note: null }
    ],
    needBased: {
      availableToInternational: true,
      meetsFullNeed: false,
      needBlindInternational: null,
      forms: ['TUM waiver application', 'Bank statements (18 months)', 'Proof of income and assets'],
      deadlines: '15 May – 15 July for the winter semester',
      note: 'The need-based waiver covers tuition only.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition fees for students from non-EU countries', url: 'https://www.tum.de/en/studies/fees/tuition' },
    { label: 'Scholarships and waivers for international students', url: 'https://www.tum.de/en/studies/fees/tuition/scholarships-and-waivers' },
    { label: 'Management and Technology (BSc) — programme page', url: 'https://www.tum.de/en/studies/degree-programs/detail/management-and-technology-bachelor-of-science-bsc' },
    { label: 'DAAD — International Programmes database (English-only bachelor\'s)', url: 'https://www2.daad.de/deutschland/studienangebote/international-programmes/en/' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'fau-erlangen-nurnberg',
  name: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
  shortName: 'FAU',
  country: 'de',
  city: 'Erlangen',
  region: 'Bavaria',
  founded: 1743,
  type: 'Public research university',
  brand: { c1: '#04316A', c2: '#021a3a', initials: 'FAU' },
  description: 'A large Bavarian research university spread across Erlangen and Nuremberg, strong in engineering, medicine and business. It offers several English-taught bachelor\'s degrees and will start charging new students from outside the EU tuition from summer semester 2027.',
  englishTaught: true,
  languageOfInstruction: 'German, with several English-taught bachelor\'s degrees',
  programs: ['engineering','computer-science','business','economics','mathematics','biology','medicine','law','humanities','social-sciences','education'],
  englishTaughtPrograms: ['computer-science','engineering','business','economics'],
  programNote: 'English-taught bachelor\'s degrees listed by DAAD: Artificial Intelligence, Autonomy Technologies, Clean Energy Processes, International Business Studies and International Economic Studies.',
  links: {
    website: 'https://www.fau.eu/',
    admissions: 'https://www.fau.eu/studying/international-students/application-and-enrollment-for-international-applicants/',
    internationalAdmissions: 'https://www.fau.eu/studying/international-students/application-and-enrollment-for-international-applicants/',
    applicationPortal: 'https://www.fau.eu/studying/international-students/application-and-enrollment-for-international-applicants/',
    scholarships: null,
    financialAid: null,
    programs: 'https://www2.daad.de/deutschland/studienangebote/international-programmes/en/',
    cost: 'https://www.fau.eu/studying/international-students/application-and-enrollment-for-international-applicants/tuition-fees-for-students-from-non-eu-states/'
  },
  admissions: {
    platforms: ['FAU application portal'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null },
    documents: [
      'School-leaving certificate recognised as a German university entrance qualification',
      'Proof of English for English-taught degrees'
    ],
    recommendations: null,
    essay: null,
    interview: null,
    notes: []
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Set by each English-taught programme; not confirmed on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'Check the page of your exact programme for the accepted tests and scores.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'FAU admits on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: null,
    internationalQualifications: 'A school certificate from outside Germany must be recognised as a German university entrance qualification (HZB); check the DAAD admission database for your country.'
  },
  costs: {
    breakdown: { tuitionText: "€1,000–€3,000 per semester from 2027", period: "semester", includes: "tuition per semester for new non-EU students from summer semester 2027" },
    academicYear: 'From summer semester 2027 (for new non-EU students)',
    currency: 'EUR',
    headline: '€1,000–€3,000 tuition per semester from 2027',
    items: [
      { label: 'Tuition for new students from outside the EU (per semester)', text: '€1,000, €2,000 or €3,000, depending on the programme' },
      { label: 'Tuition for students already enrolled before summer semester 2027', text: 'None, unless they change subject' }
    ],
    billedSubtotal: null,
    totalText: '€2,000–€6,000 tuition a year for new non-EU students, plus living costs',
    note: 'FAU charges students from outside the EU/EEA who enrol for the first time, or change subject, from summer semester 2027. EU/EEA citizens, holders of a German university entrance qualification and people with established ties to Germany are exempt. FAU says information on scholarships and waivers will follow.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: null, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'Not confirmed. FAU states that information on scholarships and waivers for the new fees will soon be available.'
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
    { label: 'Tuition fees for students from non-EU states', url: 'https://www.fau.eu/studying/international-students/application-and-enrollment-for-international-applicants/tuition-fees-for-students-from-non-eu-states/' },
    { label: 'DAAD — International Programmes database (English-only bachelor\'s)', url: 'https://www2.daad.de/deutschland/studienangebote/international-programmes/en/' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'university-of-freiburg',
  name: 'University of Freiburg',
  country: 'de',
  city: 'Freiburg',
  region: 'Baden-Württemberg',
  founded: 1457,
  type: 'Public research university',
  brand: { c1: '#004A99', c2: '#002752', initials: 'UF' },
  description: 'One of Germany\'s oldest universities, in the south-west near France and Switzerland. Its University College Freiburg runs a four-year Liberal Arts and Sciences bachelor\'s degree entirely in English, with about 80 places a year. As a Baden-Württemberg university it charges students from outside the EU €1,500 a semester.',
  englishTaught: true,
  languageOfInstruction: 'German, with the English-taught Liberal Arts and Sciences degree',
  programs: ['humanities','social-sciences','biology','economics','law','medicine','mathematics','computer-science','engineering','psychology','education'],
  englishTaughtPrograms: ['humanities','social-sciences','biology'],
  programNote: 'Liberal Arts and Sciences (BA or BSc, 8 semesters, 240 ECTS) is taught in English with four majors: Culture and History, Governance, Life Sciences, and Environmental and Sustainability Sciences. Other bachelor\'s degrees at Freiburg are taught mainly in German.',
  links: {
    website: 'https://uni-freiburg.de/en/',
    admissions: 'https://uni-freiburg.de/en/studies/applying/',
    internationalAdmissions: 'https://uni-freiburg.de/ucf/las/apply/',
    applicationPortal: 'https://uni-freiburg.de/ucf/las/apply/',
    scholarships: null,
    financialAid: null,
    programs: 'https://uni-freiburg.de/en/studies/degree-programmes/degree-programme/391/',
    cost: 'https://www.daad.de/en/studying-in-germany/living-in-germany/finances/'
  },
  admissions: {
    platforms: ['University of Freiburg online application'],
    deadlines: [
      { name: 'Liberal Arts and Sciences application', date: '1 June – 15 July', note: 'Decisions in late July; studies start with Welcome Week in October' }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null },
    documents: [
      'University entrance qualification (diploma and transcript)',
      'Proof of English at B2 level or higher (CEFR)',
      'Application essay (up to 500 words)',
      'Letter of motivation (up to 500 words)',
      'Declaration of authorship and confirmation of the student orientation procedure'
    ],
    recommendations: null,
    essay: 'An application essay and a letter of motivation, up to 500 words each',
    interview: null,
    notes: [
      'Liberal Arts and Sciences has 74 places a year; non-EU citizens without a German school-leaving certificate have a separate quota of 20% of them.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'English at CEFR B2 or higher is required; the accepted certificates are listed on the University of Freiburg\'s "English B2" page.' },
    toefl: { min: null, recommended: null, note: 'See the university\'s list of accepted B2 certificates.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'The requirement is stated as a CEFR level (B2) rather than a single test score.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Applicants are ranked on their converted final grade, essay and motivation letter.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: null,
    internationalQualifications: 'A school certificate from outside Germany must be recognised as a German university entrance qualification (HZB); check the DAAD admission database for your country.'
  },
  costs: {
    breakdown: { tuition: 1500, period: "semester", includes: "tuition per semester for students from outside the EU, plus the semester contribution" },
    academicYear: 'Current',
    currency: 'EUR',
    headline: '€1,500 tuition per semester',
    items: [
      { label: 'Tuition for students from outside the EU (per semester, Baden-Württemberg)', amount: 1500 },
      { label: 'Semester contribution', text: 'Charged every semester; amount set by the university' },
      { label: 'Living costs (DAAD estimate for Germany)', text: '€900 – €1,200 per month' }
    ],
    billedSubtotal: null,
    totalText: '€3,000 tuition a year plus the semester contribution and living costs',
    note: 'The state of Baden-Württemberg charges non-EU citizens €1,500 per semester for bachelor\'s degrees (DAAD).'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: null, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'Not confirmed on the pages consulted.'
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
    { label: 'Liberal Arts and Sciences — application and admissions', url: 'https://uni-freiburg.de/ucf/las/apply/' },
    { label: 'Liberal Arts and Sciences — degree programme page', url: 'https://uni-freiburg.de/en/studies/degree-programmes/degree-programme/391/' },
    { label: 'DAAD — costs of education and living', url: 'https://www.daad.de/en/studying-in-germany/living-in-germany/finances/' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'university-of-cologne',
  name: 'University of Cologne',
  country: 'de',
  city: 'Cologne',
  region: 'North Rhine-Westphalia',
  founded: 1388,
  type: 'Public research university',
  brand: { c1: '#005176', c2: '#002c40', initials: 'UoC' },
  description: 'One of Germany\'s largest universities, in the Rhineland city of Cologne. Its Faculty of Management, Economics and Social Sciences runs a three-year bachelor\'s degree taught entirely in English with a compulsory semester abroad — and, as in the rest of North Rhine-Westphalia, there is no tuition fee.',
  englishTaught: true,
  languageOfInstruction: 'German, with the English-taught Management, Economics and Social Sciences degree',
  programs: ['business','economics','social-sciences','law','medicine','humanities','mathematics','computer-science','biology','psychology','education'],
  englishTaughtPrograms: ['business','economics','social-sciences'],
  programNote: 'Management, Economics and Social Sciences (BSc, 6 semesters, 180 ECTS) is taught in English and includes a mandatory semester abroad at partner universities in Europe, Latin America and Asia. Other bachelor\'s degrees are taught mainly in German.',
  links: {
    website: 'https://www.uni-koeln.de/',
    admissions: 'https://portal.uni-koeln.de/en/international/study-in-cologne/international-applications',
    internationalAdmissions: 'https://portal.uni-koeln.de/en/international/study-in-cologne/international-applications',
    applicationPortal: 'https://portal.uni-koeln.de/en/international/study-in-cologne/international-applications',
    scholarships: null,
    financialAid: null,
    programs: 'https://wiso.uni-koeln.de/en/studies/bachelor/management-economics-social-sciences',
    cost: 'https://www.daad.de/en/studying-in-germany/living-in-germany/finances/'
  },
  admissions: {
    platforms: ['University of Cologne application — international applicants follow the International Office procedure'],
    deadlines: [
      { name: 'Winter semester application', date: '15 July', note: 'Deadline for starting in the winter semester' }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null },
    documents: [
      'School-leaving certificate recognised as a German university entrance qualification',
      'Proof of English at B2 (CEFR)'
    ],
    recommendations: null,
    essay: null,
    interview: null,
    notes: []
  },
  english: {
    ielts: { min: 5.5, recommended: null, note: 'IELTS 5.5 is listed as meeting the required B2 level.' },
    toefl: { min: 72, recommended: null, note: 'TOEFL iBT 72.' },
    duolingo: { min: null, recommended: null, note: 'Not listed among the accepted tests.' },
    waiver: null,
    note: 'Cambridge B2 First, BEC Vantage, C1 Advanced, C2 Proficiency and telc B2 are also accepted. The same requirement applies to non-EU applicants.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Cologne admits on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: null,
    internationalQualifications: 'A school certificate from outside Germany must be recognised as a German university entrance qualification (HZB); check the DAAD admission database for your country.'
  },
  costs: {
    breakdown: { tuition: 0, includes: "no tuition at state universities in North Rhine-Westphalia; the semester contribution remains" },
    academicYear: 'Current',
    currency: 'EUR',
    headline: 'No tuition fee',
    items: [
      { label: 'Tuition', text: 'None at state universities in North Rhine-Westphalia' },
      { label: 'Semester contribution', text: 'Charged every semester; DAAD gives a range of €70 – €430 across German universities' },
      { label: 'Living costs (DAAD estimate for Germany)', text: '€900 – €1,200 per month' }
    ],
    billedSubtotal: null,
    totalText: 'No tuition; the semester contribution and living costs remain',
    note: 'DAAD states there are generally no fees for bachelor\'s courses at state universities; the tuition charged to non-EU students applies only in Baden-Württemberg and at some Bavarian universities.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: null, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'Not confirmed on the pages consulted. With no tuition fee, living costs are the main expense.'
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
    { label: 'Bachelor Management, Economics & Social Sciences', url: 'https://wiso.uni-koeln.de/en/studies/bachelor/management-economics-social-sciences' },
    { label: 'International applications', url: 'https://portal.uni-koeln.de/en/international/study-in-cologne/international-applications' },
    { label: 'DAAD — costs of education and living', url: 'https://www.daad.de/en/studying-in-germany/living-in-germany/finances/' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'leuphana-university-luneburg',
  name: 'Leuphana University Lüneburg',
  shortName: 'Leuphana',
  country: 'de',
  city: 'Lüneburg',
  region: 'Lower Saxony',
  founded: null,
  type: 'Public university',
  brand: { c1: '#B7002B', c2: '#63001a', initials: 'LEU' },
  description: 'A smaller public university near Hamburg built around a liberal-education model: students combine a major and a minor with shared "complementary" studies. Seven of its bachelor\'s majors are taught in English, and there is no tuition fee — only a semester fee of about €450.',
  englishTaught: true,
  languageOfInstruction: 'German and English (seven English-taught majors)',
  programs: ['humanities','arts','economics','business','psychology','social-sciences','education','law','computer-science'],
  englishTaughtPrograms: ['humanities','arts','economics','business','psychology'],
  programNote: 'English-taught majors at Leuphana College: Cultural Studies (Organization, Society, and the Arts); Digital Media; Economics; Global Environmental and Sustainability Sciences; International Business Administration & Entrepreneurship; Psychology; and Studium Individuale. Students add a minor and complementary studies to their major.',
  links: {
    website: 'https://www.leuphana.de/en/',
    admissions: 'https://www.leuphana.de/en/college/application.html',
    internationalAdmissions: 'https://www.leuphana.de/en/college/application/international-applications.html',
    applicationPortal: 'https://www.leuphana.de/en/college/application/international-applications.html',
    scholarships: null,
    financialAid: null,
    programs: 'https://www.leuphana.de/en/study/studying-in-germany/how-to-study-in-germany/bachelors-in-english.html',
    cost: 'https://www.leuphana.de/en/study/studying-in-germany/how-to-study-in-germany/tuition-fee.html'
  },
  admissions: {
    platforms: ['Leuphana online application (uni-assist route for certificates from outside the EU)'],
    deadlines: [
      { name: 'Bachelor\'s application', entryTerm: 'Winter semester 2027/28', dateISO: '2027-07-15', date: '15 July 2027', note: 'Applications open in mid-May for studies starting in October 2027' }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null },
    documents: [
      'University entrance qualification',
      'Proof of English for an English-taught major'
    ],
    recommendations: null,
    essay: null,
    interview: null,
    notes: [
      'Applicants from abroad do not need German for an English-taught major.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Proof of English is required for English-taught majors; the accepted tests and scores are on Leuphana\'s language-requirements page and were not confirmed here.' },
    toefl: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'No German is needed for an English-taught major.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'Leuphana admits on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: null,
    internationalQualifications: 'A school certificate from outside Germany must be recognised as a German university entrance qualification (HZB); check the DAAD admission database for your country.'
  },
  costs: {
    breakdown: { tuition: 0, includes: "no tuition; the semester fee is about €453 per semester" },
    academicYear: 'Current',
    currency: 'EUR',
    headline: 'No tuition; semester fee about €453',
    items: [
      { label: 'Tuition', text: 'None' },
      { label: 'Semester fee (per semester)', text: 'About €452.94 (subject to change)' },
      { label: 'Living costs (DAAD estimate for Germany)', text: '€900 – €1,200 per month' }
    ],
    billedSubtotal: null,
    totalText: 'About €906 in semester fees a year, plus living costs',
    note: 'Leuphana charges no tuition for its regular bachelor\'s programmes, for German and international students alike.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: null, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'Not confirmed on the pages consulted. With no tuition fee, living costs are the main expense.'
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
    { label: 'English-taught bachelor\'s programmes', url: 'https://www.leuphana.de/en/study/studying-in-germany/how-to-study-in-germany/bachelors-in-english.html' },
    { label: 'International applications', url: 'https://www.leuphana.de/en/college/application/international-applications.html' },
    { label: 'Tuition fee and semester contribution', url: 'https://www.leuphana.de/en/study/studying-in-germany/how-to-study-in-germany/tuition-fee.html' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'rhine-waal-university',
  name: 'Rhine-Waal University of Applied Sciences',
  shortName: 'HSRW',
  country: 'de',
  city: 'Kleve',
  region: 'North Rhine-Westphalia',
  founded: 2009,
  type: 'Public university of applied sciences',
  brand: { c1: '#00685E', c2: '#003a34', initials: 'HSRW' },
  description: 'A young public university of applied sciences on the Dutch border, in Kleve and Kamp-Lintfort, built from the start around English-taught degrees. It has one of the largest sets of English bachelor\'s programmes in Germany, practical rather than research-led, and charges no tuition.',
  englishTaught: true,
  languageOfInstruction: 'Mostly English',
  programs: ['business','engineering','biology','social-sciences','arts','computer-science'],
  englishTaughtPrograms: ['business','engineering','biology','social-sciences','arts','computer-science'],
  programNote: 'English-taught bachelor\'s degrees listed by DAAD include Agribusiness, Bioengineering, Engineering, Engineering for Sustainability, Environment and Energy, Gender and Diversity, Information and Communication Design, Infotronic Systems Engineering, International Business Administration and Media Communication and Computer Science. As a university of applied sciences it focuses on practice-oriented degrees.',
  links: {
    website: 'https://www.hochschule-rhein-waal.de/en',
    admissions: 'https://www.hochschule-rhein-waal.de/en/academics/prospective-students/guide-international-applicants',
    internationalAdmissions: 'https://www.hochschule-rhein-waal.de/en/academics/prospective-students/guide-international-applicants',
    applicationPortal: 'https://www.uni-assist.de/en/',
    scholarships: 'https://www.hochschule-rhein-waal.de/en/academics/students/costs-scholarships-and-grants',
    financialAid: 'https://www.hochschule-rhein-waal.de/en/academics/students/costs-scholarships-and-grants',
    programs: 'https://www.hochschule-rhein-waal.de/en/academics/prospective-students/current-application-period/bachelors-programmes',
    cost: 'https://www.hochschule-rhein-waal.de/en/academics/students/costs-scholarships-and-grants'
  },
  admissions: {
    platforms: ['uni-assist, for a school certificate obtained outside Germany'],
    deadlines: [
      { name: 'Bachelor\'s application (last published cycle)', entryTerm: 'Winter semester 2026/27', dateISO: '2026-07-15', date: '15 July 2026', note: 'Bachelor\'s degrees start only in the winter semester. The 2027/28 dates had not been published when checked.' }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'uni-assist charges its own handling fee.' },
    documents: [
      'School-leaving certificate, reviewed by uni-assist if issued outside Germany',
      'Proof of English at B2 (CEFR)'
    ],
    recommendations: null,
    essay: null,
    interview: null,
    notes: [
      'The uni-assist review can take six weeks or more, so apply well before the deadline.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'English at CEFR B2 is required for bachelor\'s programmes; accepted tests are listed on the admission requirements page.' },
    toefl: { min: null, recommended: null, note: 'See the admission requirements page.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'No German certificate is needed for an English-taught programme.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-used', note: 'HSRW admits on school-leaving qualifications.' },
    act: { policy: 'not-used', note: 'Not part of the standard route.' },
    otherTests: null,
    internationalQualifications: 'A school certificate from outside Germany must be recognised as a university entrance qualification (checked by uni-assist); check the DAAD admission database for your country.'
  },
  costs: {
    breakdown: { tuition: 0, includes: "no tuition; the semester fee remains" },
    academicYear: 'Current',
    currency: 'EUR',
    headline: 'No tuition fee',
    items: [
      { label: 'Tuition', text: 'None' },
      { label: 'Semester fee', text: 'Administrative contributions, mostly the NRW semester ticket; the amount changes slightly each semester' },
      { label: 'Living costs (DAAD estimate for Germany)', text: '€900 – €1,200 per month' }
    ],
    billedSubtotal: null,
    totalText: 'No tuition; the semester fee and living costs remain',
    note: 'The semester ticket in the semester fee covers most buses and trains in North Rhine-Westphalia.'
  },
  scholarships: {
    fullRide: {
      available: null, internationalEligible: null, basis: null,
      covers: { tuition: null, housing: null, meals: null, insurance: null, books: null },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'Not confirmed on the pages consulted. With no tuition fee, living costs are the main expense.'
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
    { label: 'How to apply and enrol — international applicants', url: 'https://www.hochschule-rhein-waal.de/en/academics/prospective-students/guide-international-applicants' },
    { label: 'Bachelor\'s degrees — current application period', url: 'https://www.hochschule-rhein-waal.de/en/academics/prospective-students/current-application-period/bachelors-programmes' },
    { label: 'DAAD — International Programmes database (English-only bachelor\'s)', url: 'https://www2.daad.de/deutschland/studienangebote/international-programmes/en/' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'constructor-university',
  name: 'Constructor University',
  country: 'de',
  city: 'Bremen',
  region: 'Bremen',
  founded: 1999,
  type: 'Private research university',
  brand: { c1: '#0B3D91', c2: '#051f4d', initials: 'CU' },
  description: 'A private, residential university in Bremen (formerly Jacobs University) where every bachelor\'s degree is taught in English and most students come from abroad. It works much like an American college: campus housing and meals, a major and minor, and an automatic merit scholarship based on school grades.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['computer-science','engineering','mathematics','biology','economics','business','social-sciences','psychology','humanities'],
  englishTaughtPrograms: ['computer-science','engineering','mathematics','biology','economics','business','social-sciences','psychology','humanities'],
  programNote: 'Bachelor\'s programmes include Computer Science, Electrical and Computer Engineering, Industrial Engineering and Management, Mathematics, Physics, Chemistry, Biochemistry and Cell Biology, Earth and Environmental Sciences, Global Economics and Management, International Business Administration, Integrated Social Sciences, International Relations: Politics and History, and Psychology — all in English. Students combine a major and a minor and may change major in the first year.',
  links: {
    website: 'https://constructor.university/',
    admissions: 'https://constructor.university/admission-aid/application-information-undergraduate',
    internationalAdmissions: 'https://constructor.university/admission-aid/application-information-undergraduate',
    applicationPortal: 'https://constructor.university/admission-aid/application-information-undergraduate',
    scholarships: 'https://constructor.university/admission-aid/financing-undergraduate',
    financialAid: 'https://constructor.university/admission-aid/financing-undergraduate',
    programs: 'https://constructor.university/programs/undergraduate-education',
    cost: 'https://constructor.university/admission-aid/financing-undergraduate'
  },
  admissions: {
    platforms: ['Constructor University online application'],
    deadlines: [
      { name: 'Early Action', entryTerm: 'Fall 2027', displayDate: '1 October 2026 – 1 February 2027', dateISO: '2027-02-01', date: '1 October 2026 – 1 February 2027', note: 'Earlier applications get earlier decisions' },
      { name: 'Rolling admissions (visa and no visa)', entryTerm: 'Fall 2027', displayDate: '2 February – 15 July 2027', dateISO: '2027-07-15', date: '2 February – 15 July 2027', note: 'Decisions usually within 2–4 weeks of applying' }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null },
    documents: [
      'Proof of identity',
      'Transcripts / report cards',
      'CV',
      'Proof of English proficiency',
      'Motivation statement',
      'Standardized test scores, if you choose to submit them',
      'Recommendation letter'
    ],
    recommendations: 'A recommendation letter',
    essay: 'A motivation statement',
    interview: null,
    notes: [
      'A one-time enrollment deposit of €1,000 confirms your place; it counts towards your first semester\'s fees.'
    ]
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'British Council IELTS 6.5.' },
    toefl: { min: 90, recommended: null, scales: [{ period: 'pre2026', min: 90, recommended: null }, { period: 'post2026', min: 4.5, recommended: null }], note: 'TOEFL iBT 90, or 4.5 on the new scoring system.' },
    duolingo: { min: 110, recommended: null, note: 'Duolingo English Test 110.' },
    waiver: 'Not required if you are a native English speaker or have been taught exclusively in English for at least six years.',
    note: 'An SAT Evidence-Based Reading and Writing score of 600 or an ACT Writing score of 9 is also accepted as proof of English.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'optional', note: 'Constructor University does not require SAT/ACT for admission — but enrolment may require standardized testing if your school diploma does not grant direct admission to a German university.' },
    act: { policy: 'optional', note: 'Same policy as the SAT.' },
    otherTests: null,
    internationalQualifications: 'If your school diploma does not give direct access to German universities, standardized test results may be needed for enrolment.'
  },
  costs: {
    breakdown: { tuition: 20000, budget: 29654, includes: "tuition, room, board, fees, the semester ticket, health insurance and the residence permit" },
    academicYear: '2025–2026',
    currency: 'EUR',
    headline: '€29,654 total a year',
    items: [
      { label: 'Tuition', amount: 20000 },
      { label: 'Room (shared, September–May)', amount: 4000 },
      { label: 'Board (three meals a day, September–May)', amount: 4000 },
      { label: 'University fee', amount: 120 },
      { label: 'Semester tickets', amount: 480 },
      { label: 'Broadcasting fee', amount: 54 },
      { label: 'Enrollment deposit (one time, counts towards fees)', amount: 1000 },
      { label: 'Residence permit', amount: 100 },
      { label: 'Health insurance', amount: 1550 }
    ],
    billedSubtotal: null,
    totalText: '€29,654',
    note: 'These are Constructor University\'s published figures for 2025–2026; 2026–27 figures were not found. A single room costs €5,500 instead of €4,000. The automatic merit scholarship and tuition deferral can reduce the tuition line.'
  },
  scholarships: {
    fullRide: {
      available: false, internationalEligible: false, basis: null,
      covers: { tuition: false, housing: false, meals: false, insurance: false, books: false },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'The published scholarship open to all applicants is worth up to €10,000 a year — half of tuition at most. Full awards exist only for specific groups (for example Ukrainian students and African Leadership Academy graduates), which were not verified here in detail.'
    },
    merit: [
      { name: 'Academic achievement scholarship', amount: 'Up to €10,000', eligibility: 'All admitted students, based on school grade point average', deadline: null, application: 'No separate application — the amount is given with the admission decision', renewable: null, note: 'International students are eligible.' }
    ],
    needBased: {
      availableToInternational: true, meetsFullNeed: false, needBlindInternational: null,
      forms: [], deadlines: null,
      note: 'Constructor University also offers a Tuition Deferral Program: tuition is repaid after graduation, based on income, and is granted regardless of financial situation. It is a deferred payment, not a grant.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Application information — undergraduate', url: 'https://constructor.university/admission-aid/application-information-undergraduate' },
    { label: 'Financing for undergraduates', url: 'https://constructor.university/admission-aid/financing-undergraduate' },
    { label: 'Cost of attendance — bachelor programs 2025–2026 (PDF)', url: 'https://constructor.university/sites/default/files/2024-12/2025-2026%20CU%20Fact%20Sheet_Bachelor_Cost%20of%20Attendance.pdf' }
  ],
  lastVerified: '2026-09-19'
},

{
  id: 'frankfurt-school',
  name: 'Frankfurt School of Finance & Management',
  shortName: 'Frankfurt School',
  country: 'de',
  city: 'Frankfurt',
  region: 'Hesse',
  founded: 1957,
  type: 'Private business school',
  brand: { c1: '#00305E', c2: '#001a33', initials: 'FS' },
  description: 'A private business school in Germany\'s financial capital, closely tied to the banking industry. Its bachelor\'s degrees in business, analytics and management, philosophy and economics can be studied in English, and its scholarships range up to 100% of tuition.',
  englishTaught: true,
  languageOfInstruction: 'English (bachelor\'s degrees listed as English-taught by DAAD)',
  programs: ['business','economics'],
  englishTaughtPrograms: ['business','economics'],
  programNote: 'English-taught bachelor\'s degrees: Business Administration (BSc), Computational Business Analytics (BSc) and Management, Philosophy & Economics (BSc). In Business Administration (7 semesters) the core modules can be taken in English or German, and all classes are in English from the fourth semester.',
  links: {
    website: 'https://www.frankfurt-school.de/en',
    admissions: 'https://www.frankfurt-school.de/en/study/bachelor/bachelor-science',
    internationalAdmissions: 'https://www.frankfurt-school.de/en/study/bachelor/bachelor-science',
    applicationPortal: 'https://www.frankfurt-school.de/en/study/bachelor/bachelor-science',
    scholarships: 'https://www.frankfurt-school.de/en/home/programmes/financing',
    financialAid: 'https://www.frankfurt-school.de/en/home/programmes/financing',
    programs: 'https://www.frankfurt-school.de/en/study/bachelor/bachelor-science',
    cost: 'https://www.frankfurt-school.de/cms/dam/jcr:5a373f8b-d6cf-4175-9681-7b36eb573471/COA.Website%202026_27.pdf'
  },
  admissions: {
    platforms: ['Frankfurt School online application, followed by an Assessment Centre'],
    deadlines: [],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null },
    documents: [
      'Online application',
      'IELTS or TOEFL score report — may be uploaded after the application deadline, by mid-August at the latest'
    ],
    recommendations: null,
    essay: null,
    interview: 'Applicants take part in an Assessment Centre on a date they choose',
    notes: [
      'Admission is rolling, so a decision can come before the final deadline. Programmes start in September.'
    ]
  },
  english: {
    ielts: { min: null, recommended: null, note: 'IELTS is accepted; the minimum score was not confirmed on the pages consulted.' },
    toefl: { min: null, recommended: null, note: 'TOEFL is accepted; the minimum score was not confirmed.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed on the pages consulted.' },
    waiver: null,
    note: 'Test results can be submitted after the application deadline, up to mid-August.'
  },
  academics: {
    gpa: null,
    sat: { policy: null, note: 'Not confirmed on the pages consulted.' },
    act: { policy: null, note: 'Not confirmed on the pages consulted.' },
    otherTests: 'The Assessment Centre is part of the selection.',
    internationalQualifications: null
  },
  costs: {
    breakdown: { tuition: 16400, budget: 39120, includes: "tuition, fees, books, transport, room and board, personal expenses, health insurance, travel and a computer in year one" },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€39,120 total a year',
    items: [
      { label: 'Tuition', amount: 16400 },
      { label: 'Fees', amount: 530 },
      { label: 'Books and supplies', amount: 700 },
      { label: 'Local transportation', amount: 450 },
      { label: 'Room and board', amount: 14640 },
      { label: 'Personal expenses', amount: 2400 },
      { label: 'Health insurance', amount: 1800 },
      { label: 'Travel (one annual round trip)', amount: 1200 },
      { label: 'Computer (first year only)', amount: 1000 }
    ],
    billedSubtotal: null,
    totalText: '€39,120',
    note: 'Frankfurt School\'s published cost of attendance for its BSc programmes in 2026/27 (Business Administration, Computational Business Analytics, Management, Philosophy & Economics).'
  },
  scholarships: {
    fullRide: {
      available: false, internationalEligible: null, basis: 'merit',
      covers: { tuition: true, housing: false, meals: false, insurance: false, books: false },
      renewable: null, competitiveness: null, howToApply: null,
      note: 'The highest awards remove tuition entirely, but no award listed covers living costs, so this is not a full ride.'
    },
    merit: [
      { name: 'Frankfurt School merit scholarships', amount: '15%, 25%, 50%, 75% or 100% tuition reduction', eligibility: 'Students with excellent grades and a strong performance in the admissions process; background, motivation, financial need and engagement are also considered', deadline: null, application: 'Considered through the admissions process', renewable: null, note: null }
    ],
    needBased: {
      availableToInternational: null, meetsFullNeed: false, needBlindInternational: null,
      forms: [], deadlines: null,
      note: 'Financial need is one of the factors in the merit scholarships; a separate need-based scheme was not confirmed.'
    }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Cost of attendance 2026/2027 — BSc programmes (PDF)', url: 'https://www.frankfurt-school.de/cms/dam/jcr:5a373f8b-d6cf-4175-9681-7b36eb573471/COA.Website%202026_27.pdf' },
    { label: 'Bachelor of Science programmes', url: 'https://www.frankfurt-school.de/en/study/bachelor/bachelor-science' },
    { label: 'Financing your studies', url: 'https://www.frankfurt-school.de/en/home/programmes/financing' }
  ],
  lastVerified: '2026-09-19'
}
);
