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
},

{
  id: 'bard-college-berlin',
  name: 'Bard College Berlin',
  shortName: 'Bard Berlin',
  country: 'de',
  city: 'Berlin',
  region: 'Berlin',
  type: 'Private liberal arts college (US and German accreditation)',
  brand: { c1: '#8c1d40', c2: '#4d0f22', initials: 'BCB' },
  description: 'A small residential liberal arts college in Berlin teaching entirely in English, with BA degrees in the humanities, arts and social sciences and a dual US–German degree.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['humanities','social-sciences','arts','economics'],
  englishTaughtPrograms: ['humanities','social-sciences','arts','economics'],
  programNote: 'All courses are taught in English. The college is small and its subject range is limited to the liberal arts, economics and politics — there is no engineering or medicine.',
  links: {
    website: 'https://berlin.bard.edu/',
    admissions: 'https://berlin.bard.edu/admissions/',
    applicationPortal: 'https://berlin.bard.edu/admissions/how-to-apply/',
    scholarships: 'https://berlin.bard.edu/admissions/finances/financial-aid/',
    cost: 'https://berlin.bard.edu/admissions/finances/tuition-and-fees/'
  },
  admissions: {
    platforms: ['Bard College Berlin online application'],
    deadlines: [
      { name: 'Application rounds for 2027 entry', kind: 'other', entryTerm: 'Autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'BA applicants', conditions: 'Bard College Berlin publishes its rounds on the admissions pages; the 2027 dates were not read during this check', source: 'https://berlin.bard.edu/admissions/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Secondary school diploma and transcripts', 'Proof of English at C1 level unless a native speaker', 'Application essay as set by the college'],
    recommendations: null,
    essay: 'Required as part of the BA application',
    interview: null,
    notes: ['Health insurance is compulsory in Germany; the college states that public insurance costs about €145 a month.']
  },
  english: {
    ielts: { min: 7.0, recommended: null, note: 'IELTS 7.0 is the published minimum for admission. Applicants must show C1-level English unless they are native speakers.' },
    toefl: { min: 95, recommended: null, scales: [{ period: 'pre2026', min: 95, recommended: null }], note: 'TOEFL 95 is the published minimum.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Native English speakers do not need to submit a test.',
    note: 'The requirement is stated as C1 proficiency, evidenced by TOEFL 95 or IELTS 7.0.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Bard College Berlin admits on school qualifications, essays and the application as a whole; no SAT/ACT requirement was found during this check.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Secondary school qualifications that give access to higher education, including the Abitur, IB and A-levels.'
  },
  costs: {
    breakdown: { tuition: null, billed: 38250, comprehensive: true, includes: 'a comprehensive fee covering tuition, a furnished room, a meal plan on weekdays, on-campus mental health services and sports facilities; the off-campus fee of €27,500 covers tuition and those services without housing or meals' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€38,250 comprehensive fee (on campus)',
    items: [
      { label: 'Comprehensive fee — living on campus', amount: 38250 },
      { label: 'Comprehensive fee — living off campus', amount: 27500 },
      { label: 'Public health insurance (student rate)', text: 'About €145 a month' }
    ],
    billedSubtotal: 38250,
    totalText: '€38,250 a year on campus, or €27,500 off campus, for 2026–27',
    note: 'The college states that 85% of students received financial aid in 2025–26, awarded as tuition waivers of 20% to 100% of the comprehensive fee.'
  },
  scholarships: {
    fullRide: { available: true, internationalEligible: true, basis: 'need-based', covers: { tuition: true, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: 'The college states that 85% of students received aid in 2025–26; the share receiving a full waiver was not published on the pages checked.', howToApply: 'Apply for financial aid alongside the admission application.', note: 'Aid is given as tuition waivers of 20% to 100% of the comprehensive fee. A 100% waiver covers the fee, which on campus includes housing and weekday meals; it is not confirmed to cover insurance, travel or personal costs.' },
    merit: [],
    needBased: { availableToInternational: true, meetsFullNeed: null, needBlindInternational: null, forms: [], deadlines: null, note: 'Financial aid is need-based and is awarded as a partial or full waiver of the comprehensive fee.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition and fees', url: 'https://berlin.bard.edu/admissions/finances/tuition-and-fees/' },
    { label: 'Admission requirements', url: 'https://berlin.bard.edu/admissions/how-to-apply/application-requirements/' },
    { label: 'Finances and financial aid', url: 'https://berlin.bard.edu/admissions/finances/' }
  ],
  verification: { level: 'partial', checked: ['english','costs','financial aid structure'], unconfirmed: ['application rounds and deadlines for 2027','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'iu-international-university',
  name: 'IU International University of Applied Sciences',
  shortName: 'IU',
  country: 'de',
  city: 'Berlin',
  region: 'Multiple campuses',
  type: 'Private university of applied sciences',
  brand: { c1: '#e5044e', c2: '#7a0229', initials: 'IU' },
  description: 'A large private university of applied sciences with English-taught on-campus bachelor degrees in business and technology, campuses in several German cities and two intakes a year.',
  englishTaught: true,
  languageOfInstruction: 'English (on-campus international programmes)',
  programs: ['business','computer-science','engineering','economics','psychology'],
  englishTaughtPrograms: ['business','computer-science','engineering','economics','psychology'],
  programNote: 'IU offers on-campus bachelor degrees taught in English in business and technology fields, with specialisations such as artificial intelligence, data science and business analytics.',
  links: {
    website: 'https://www.iu.org/',
    admissions: 'https://www.iu.org/start-studying/',
    applicationPortal: 'https://www.iu.org/application/',
    scholarships: 'https://www.iu.org/start-studying/tuition-fees/',
    cost: 'https://www.iu.org/start-studying/tuition-fees/'
  },
  admissions: {
    platforms: ['IU online application'],
    deadlines: [
      { name: 'October intake', kind: 'intake', entryTerm: 'October', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Most English-taught on-campus bachelor programmes', conditions: 'IU states that most English-taught bachelor degrees in Germany have April and October intakes; the exact application cut-off for 2027 was not read during this check', source: 'https://www.iu.org/start-studying/', verified: '2026-09-23', note: null },
      { name: 'April intake', kind: 'intake', entryTerm: 'April', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Most English-taught on-campus bachelor programmes', conditions: 'Second annual intake', source: 'https://www.iu.org/start-studying/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: 0, currency: 'EUR', waiverAvailableToInternational: false, waiver: null, note: 'IU states there is no application fee; a one-time campus registration fee of €1,500 is charged after the application is approved.' },
    documents: ['University entrance qualification (school-leaving certificate or a bachelor degree)', 'Upper secondary transcript of records', 'Proof of English', 'APS certificate for applicants from China, India and Vietnam'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['IU states that a student visa requires proof of about €992 a month in living costs, which is €11,904 for a year.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check. IU requires proof of English competency for its English-taught programmes but the accepted scores were not read.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Not confirmed during this check.',
    note: 'Documents must be submitted in English or German, with an official translation otherwise.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'IU admits on the school-leaving qualification; the SAT and ACT are not part of the published requirements.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'A university entrance qualification is required — an upper secondary certificate or a previous bachelor degree.'
  },
  costs: {
    breakdown: { published: false, includes: 'IU publishes tuition through a fee calculator rather than a single figure; a one-time registration fee of €1,500 and a semester ticket of €226.80 are charged separately' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'Tuition published through the IU fee calculator',
    items: [
      { label: 'Campus registration fee (one-time)', amount: 1500 },
      { label: 'Semester ticket for public transport', amount: 226.8 },
      { label: 'Tuition', text: 'Published per programme through IU\'s fee calculator; not read during this check' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — tuition is quoted per programme',
    note: 'IU advertises discounts of 2% for yearly payment and up to 10% for paying in full, and states a discount of up to 20% for international students; the conditions were not read during this check.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'IU advertises percentage discounts on tuition rather than full scholarships.' },
    merit: [
      { name: 'International student discount', amount: 'Advertised as up to 20% off tuition', eligibility: 'International applicants for on-campus bachelor degrees, as advertised by IU', deadline: null, application: 'Applied through the admissions process', renewable: null, note: 'The exact conditions were not confirmed during this check.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition fees and payments', url: 'https://www.iu.org/start-studying/tuition-fees/' },
    { label: 'Entry requirements', url: 'https://www.iu.org/start-studying/entry-requirements/' },
    { label: 'On-campus degrees in Germany', url: 'https://www.iu.org/on-campus/on-campus-degrees/' }
  ],
  verification: { level: 'partial', checked: ['application fee','registration fee','intakes','visa living-cost requirement'], unconfirmed: ['tuition amount','English score requirements','deadline dates','scholarship conditions'] },
  lastVerified: '2026-09-23'
},

{
  id: 'srh-berlin-university',
  name: 'SRH Berlin University of Applied Sciences',
  shortName: 'SRH Berlin',
  country: 'de',
  city: 'Berlin',
  region: 'Berlin',
  type: 'Private university of applied sciences',
  brand: { c1: '#004f9f', c2: '#00294f', initials: 'SRH' },
  description: 'A private university of applied sciences in Berlin with English-taught bachelor degrees in business, psychology, creative industries and engineering, taught in small groups.',
  englishTaught: true,
  languageOfInstruction: 'English (international programmes)',
  programs: ['business','psychology','arts','engineering','computer-science','economics'],
  englishTaughtPrograms: ['business','psychology','arts','engineering','computer-science'],
  programNote: 'English-taught bachelor degrees confirmed on the university site include International Business Administration, Business Psychology, Creative Industries Management and Applied Mechatronic Systems.',
  links: {
    website: 'https://www.srh-berlin.de/en/',
    admissions: 'https://www.srh-berlin.de/en/study-at-srh/applications-and-admissions/',
    applicationPortal: 'https://www.srh-berlin.de/en/study-at-srh/applications-and-admissions/',
    scholarships: 'https://www.srh-berlin.de/en/study-at-srh/',
    cost: 'https://www.srh-berlin.de/en/study-at-srh/applications-and-admissions/'
  },
  admissions: {
    platforms: ['SRH Berlin online application'],
    deadlines: [
      { name: 'Application rounds for 2027 entry', kind: 'other', entryTerm: 'Autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'SRH Berlin publishes application dates on its admissions page; the 2027 dates were not read during this check', source: 'https://www.srh-berlin.de/en/study-at-srh/applications-and-admissions/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'A one-time registration fee of €750 for EU/EEA applicants and €1,000 for non-EU/EEA applicants is charged; an application fee was not confirmed.' },
    documents: ['School-leaving certificate giving access to higher education', 'Transcripts', 'Proof of English'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Applicants who do not meet the English criteria can take the SRH English Proficiency Certificate test instead.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'IELTS or IELTS Online (Academic) 6.5 average is the published requirement for English-taught programmes; the language centre may apply its own guidelines where results differ.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; the score was not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Not confirmed during this check.',
    note: 'An internal SRH English Proficiency Certificate test is available for applicants without an accepted test result.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school-leaving qualification and GPA requirements rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Applicants with foreign qualifications that give access to a state-accredited university at home, and who meet SRH subject and GPA requirements, can normally start a bachelor directly.'
  },
  costs: {
    breakdown: { tuitionText: 'About €690–€750 per month', period: 'month', includes: 'tuition for English-taught programmes, charged monthly and fixed for the whole programme; a one-time registration fee of €750 (EU/EEA) or €1,000 (non-EU/EEA) is extra' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'About €690–€750 a month in tuition',
    items: [
      { label: 'Tuition — English-taught programmes', text: 'About €690–€750 per month, unchanged for the length of the programme' },
      { label: 'Registration fee (one-time) — EU/EEA', amount: 750 },
      { label: 'Registration fee (one-time) — non-EU/EEA', amount: 1000 }
    ],
    billedSubtotal: null,
    totalText: 'About €8,300–€9,000 a year in tuition, plus the one-time registration fee',
    note: 'Figures come from the university\'s published information; living costs in Berlin are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Applications and admissions', url: 'https://www.srh-berlin.de/en/study-at-srh/applications-and-admissions/' },
    { label: 'International Business Administration B.A.', url: 'https://www.srh-berlin.de/en/bachelor/degree-business-administration-berlin/' }
  ],
  verification: { level: 'partial', checked: ['english','tuition (monthly range)','registration fee','English-taught programmes'], unconfirmed: ['deadlines','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'anhalt-university',
  name: 'Anhalt University of Applied Sciences',
  shortName: 'Anhalt UAS',
  country: 'de',
  city: 'Bernburg',
  region: 'Saxony-Anhalt',
  type: 'Public university of applied sciences',
  brand: { c1: '#e2001a', c2: '#7a000e', initials: 'ANH' },
  description: 'A public university of applied sciences in Saxony-Anhalt. Most bachelor degrees are taught in German; the BA International Business is the confirmed English-taught bachelor route for international students.',
  englishTaught: false,
  languageOfInstruction: 'German, with BA International Business taught in English',
  programs: ['business','engineering','arts','computer-science','biology'],
  englishTaughtPrograms: ['business'],
  programNote: 'Anhalt states that, apart from the BA International Business, its bachelor programmes are taught exclusively in German. An English-taught bachelor is therefore limited to that programme.',
  links: {
    website: 'https://www.hs-anhalt.de/en/',
    admissions: 'https://www.hs-anhalt.de/en/study/paths-to-university/your-application.html',
    applicationPortal: 'https://www.hs-anhalt.de/en/study/paths-to-university/your-application.html',
    scholarships: 'https://www.hs-anhalt.de/en/international.html',
    cost: 'https://www.hs-anhalt.de/en/study/during-your-studies/formalities/enrollment.html'
  },
  admissions: {
    platforms: ['Anhalt online application (uni-assist for many international qualifications)'],
    deadlines: [
      { name: 'Application for winter 2027 intake', kind: 'intake', entryTerm: 'winter', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.hs-anhalt.de/en/study/paths-to-university/your-application.html', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check; applications through uni-assist carry a separate uni-assist handling fee.' },
    documents: ['School-leaving certificate giving access to higher education', 'Transcripts', 'Proof of English for the English-taught programme'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Saxony-Anhalt abolished long-term tuition fees from winter semester 2020/21; a €250 per semester second-degree fee can apply to students who already hold a degree at the same level.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check for the BA International Business.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'The university runs the largest state Studienkolleg in Germany for applicants who need preparatory study or language courses.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'German universities of applied sciences admit on the school-leaving qualification and its recognition, not on the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Applicants whose school certificate is not recognised as a direct entry qualification take a Studienkolleg assessment (Feststellungsprüfung).',
    internationalQualifications: 'Recognition of the foreign school certificate decides direct entry; the DAAD and anabin databases are used to check it.'
  },
  costs: {
    breakdown: { tuition: 0, includes: 'no tuition fee for regular first-degree students in Saxony-Anhalt; a semester contribution is charged and living costs are extra' },
    academicYear: 'Current',
    currency: 'EUR',
    headline: 'No tuition fee; semester contribution applies',
    items: [
      { label: 'Tuition', text: 'None for a first degree; long-term tuition fees were abolished from winter semester 2020/21' },
      { label: 'Second-degree fee', text: '€250 per semester may apply if you already hold a degree at the same level' },
      { label: 'Semester contribution', text: 'Published on each course page; not read during this check' }
    ],
    billedSubtotal: null,
    totalText: 'No tuition for a first degree; the semester contribution and living costs remain',
    note: 'This is a public university, so the low cost is the standard price rather than a scholarship.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'FAQ — application and studies', url: 'https://www.hs-anhalt.de/en/university/institutions/student-service-center/faq-application-studies.html' },
    { label: 'Degree programmes and application', url: 'https://www.hs-anhalt.de/en/study/orientation/degree-programs.html' }
  ],
  verification: { level: 'partial', checked: ['language of instruction','tuition status'], unconfirmed: ['English test scores','deadlines','semester contribution amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'berlin-international-university',
  name: 'Berlin International University of Applied Sciences',
  shortName: 'Berlin International',
  country: 'de',
  city: 'Berlin',
  region: 'Berlin',
  type: 'Private university of applied sciences',
  brand: { c1: '#1d3557', c2: '#0d1b2a', initials: 'BIU' },
  description: 'A small private university in Berlin teaching bachelor degrees entirely in English in business administration, architecture, design and related fields.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','arts','engineering','economics'],
  englishTaughtPrograms: ['business','arts','engineering','economics'],
  programNote: 'Teaching is in English across the bachelor programmes, organised in a Faculty of Business Administration and a Faculty of Architecture and Design.',
  links: {
    website: 'https://www.berlin-international.de/en/',
    admissions: 'https://www.berlin-international.de/en/admission/international-admission/',
    applicationPortal: 'https://www.berlin-international.de/en/university/apply-your-studies-berlin/',
    scholarships: 'https://www.berlin-international.de/en/',
    cost: 'https://www.berlin-international.de/en/university/apply-your-studies-berlin/'
  },
  admissions: {
    platforms: ['Berlin International online application'],
    deadlines: [
      { name: 'Application for autumn 2027 intake', kind: 'intake', entryTerm: 'autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.berlin-international.de/en/admission/international-admission/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['German Abitur/Fachabitur or an equivalent qualification such as a US high school diploma, IB Diploma or A-levels', 'Proof of English unless exempt'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Applicants without an accepted English certificate can sit the university\'s own online English exam after applying.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check. The university requires an approved language certificate at CEFR B2 or above unless the applicant finished school in a majority-English-speaking country or holds an English-taught degree.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted as an approved certificate; score not confirmed here.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: 'Applicants who completed high school in the USA, UK, Canada, Australia, Ireland or New Zealand, or hold a bachelor degree taught fully in English, do not need a test.',
    note: 'An internal online English exam is offered to applicants without a certificate.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school-leaving qualification; the SAT and ACT are not required.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Portfolio requirements apply to architecture and design programmes; details not read during this check.',
    internationalQualifications: 'The German Abitur or an equivalent international qualification such as the IB Diploma, A-levels or a US high school diploma.'
  },
  costs: {
    breakdown: { tuitionText: '€4,050–€4,470 per semester', period: 'semester', includes: 'tuition per semester by faculty; the Berlin ABC semester ticket of about €200 a semester is extra' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€4,050–€4,470 tuition per semester',
    items: [
      { label: 'Tuition — Faculty of Business Administration (per semester)', amount: 4050 },
      { label: 'Tuition — Faculty of Architecture and Design (per semester)', amount: 4470 },
      { label: 'Semester ticket (Berlin ABC)', text: 'About €200 per semester, compulsory' }
    ],
    billedSubtotal: null,
    totalText: 'About €8,100–€8,940 a year in tuition plus the semester ticket',
    note: 'Tuition is payable in six monthly instalments of €675 or €745 depending on the faculty.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International admission', url: 'https://www.berlin-international.de/en/admission/international-admission/' },
    { label: 'Apply for your studies', url: 'https://www.berlin-international.de/en/university/apply-your-studies-berlin/' }
  ],
  verification: { level: 'partial', checked: ['tuition','language of instruction','entry qualification','English exemption rules'], unconfirmed: ['English test scores','deadlines','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'munich-business-school',
  name: 'Munich Business School',
  shortName: 'MBS',
  country: 'de',
  city: 'Munich',
  region: 'Bavaria',
  type: 'Private business school (state-recognised)',
  brand: { c1: '#003a70', c2: '#001f3c', initials: 'MBS' },
  description: 'A private business school in Munich whose Bachelor International Business is taught in English, with a six-semester structure, an internship and a semester abroad.',
  englishTaught: true,
  languageOfInstruction: 'English (Bachelor International Business)',
  programs: ['business','economics'],
  englishTaughtPrograms: ['business','economics'],
  programNote: 'The undergraduate offer is focused on international business; there is no engineering or science bachelor.',
  links: {
    website: 'https://www.munich-business-school.de/en',
    admissions: 'https://www.munich-business-school.de/en/programs/bachelor-international-business-administration/admission-fees.html',
    applicationPortal: 'https://www.munich-business-school.de/en/programs/bachelor-international-business-administration/admission-fees.html',
    scholarships: 'https://www.munich-business-school.de/en/mbs/university/faqs',
    cost: 'https://www.munich-business-school.de/en/programs/bachelor-international-business-administration/admission-fees.html'
  },
  admissions: {
    platforms: ['MBS online application'],
    deadlines: [
      { name: 'Rolling admission for the Bachelor International Business', kind: 'rolling', entryTerm: 'Autumn', entryYear: '2027', date: 'Rolling — applications accepted up to a year in advance', status: 'confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Places are limited and MBS recommends applying early; after the documents are checked the applicant is invited to an interview, with feedback within three days', source: 'https://www.munich-business-school.de/en/programs/bachelor-international-business-administration/admission-fees.html', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'MBS charges an application fee; the amount was not read during this check. An enrolment fee of €690 (EU/EFTA) or €1,490 (international) applies on admission.' },
    documents: ['High school diploma (Abitur, IB Diploma, A-levels or equivalent) with transcripts', 'Proof of English at B2 level', 'Interview'],
    recommendations: null,
    essay: null,
    interview: 'A personal interview is part of the admission process, with feedback within three days.',
    notes: ['MBS allows payment in seven semester instalments or 42 monthly instalments.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'English at CEFR B2 must be proved by the start of studies; IELTS is one of the accepted certificates but the required score was not read during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted as proof of B2 English.' },
    duolingo: { min: null, recommended: null, note: 'Accepted as proof of B2 English according to the published list; score not confirmed here.' },
    waiver: 'A final diploma from an English-speaking institution can be submitted instead of a test.',
    note: 'Certificates must be submitted as originals or certified copies.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school qualification and interview; the SAT and ACT are not required.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not required.',
    internationalQualifications: 'Abitur, IB Diploma, A-levels or an equivalent school-leaving qualification.'
  },
  costs: {
    breakdown: { tuition: 44940, tuitionText: '€44,940 for the whole programme (€6,420 per semester)', period: 'programme', includes: 'tuition for the six-semester Bachelor International Business; the enrolment fee of €690 (EU/EFTA) or €1,490 (international) is extra' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€44,940 tuition for the whole bachelor',
    items: [
      { label: 'Tuition — whole programme', amount: 44940 },
      { label: 'Tuition — per semester', amount: 6420 },
      { label: 'Tuition — per month', amount: 1070 },
      { label: 'Enrolment fee — EU/EFTA', amount: 690 },
      { label: 'Enrolment fee — international', amount: 1490 }
    ],
    billedSubtotal: null,
    totalText: '€44,940 in tuition across the programme, plus the enrolment fee',
    note: 'Living costs in Munich are high and are not included.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Bachelor International Business — admission and fees', url: 'https://www.munich-business-school.de/en/programs/bachelor-international-business-administration/admission-fees.html' },
    { label: 'MBS FAQ', url: 'https://www.munich-business-school.de/en/mbs/university/faqs' }
  ],
  verification: { level: 'partial', checked: ['tuition','enrolment fee','admission process','language requirement level'], unconfirmed: ['exact IELTS/TOEFL scores','application fee amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'whu-otto-beisheim',
  name: 'WHU – Otto Beisheim School of Management',
  shortName: 'WHU',
  country: 'de',
  city: 'Vallendar',
  region: 'Rhineland-Palatinate',
  type: 'Private business school (state-recognised)',
  brand: { c1: '#00205b', c2: '#001233', initials: 'WHU' },
  description: 'A private business school with campuses in Vallendar and Düsseldorf. Its three-year Bachelor in International Business Administration is taught in English and includes international exchange.',
  englishTaught: true,
  languageOfInstruction: 'English (Bachelor in International Business Administration)',
  programs: ['business','economics'],
  englishTaughtPrograms: ['business','economics'],
  programNote: 'The undergraduate programme is a six-semester BSc in International Business Administration; WHU has no science or engineering bachelor.',
  links: {
    website: 'https://www.whu.edu/en/',
    admissions: 'https://www.whu.edu/en/programs/bachelor-program/bachelor-in-international-business-administration/application-admissions/',
    applicationPortal: 'https://www.whu.edu/en/programs/bachelor-program/bachelor-in-international-business-administration/application-admissions/',
    scholarships: 'https://www.whu.edu/en/programs/bachelor-program/fees-financing/',
    cost: 'https://www.whu.edu/en/programs/bachelor-program/fees-financing/'
  },
  admissions: {
    platforms: ['WHU online application'],
    deadlines: [
      { name: 'Application for the autumn 2027 intake', kind: 'intake', entryTerm: 'autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.whu.edu/en/programs/bachelor-program/bachelor-in-international-business-administration/application-admissions/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['University entrance qualification such as the IB or A-levels', 'Proof of advanced English', 'Six-week internship completed before or during the programme'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['WHU states that nearly 20% of its students are funded by a grant or endowment, and lists scholarships covering about 20% of tuition.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Proficiency can be shown with TOEFL, IELTS or Cambridge ESOL certificates; the required scores were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Admission is on the school-leaving qualification and WHU's own selection process rather than the SAT or ACT." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'WHU runs its own selection procedure; details were not read during this check.',
    internationalQualifications: 'A university entrance qualification such as the IB Diploma or A-levels.'
  },
  costs: {
    breakdown: { tuition: 9100, period: 'semester', includes: 'tuition per semester for the bachelor programme; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€9,100 tuition per semester',
    items: [ { label: 'Tuition (per semester)', amount: 9100 } ],
    billedSubtotal: null,
    totalText: '€18,200 a year in tuition across two semesters',
    note: 'WHU publishes financing options and scholarships separately; living costs are not included.'
  },
  scholarships: {
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'The scholarships WHU describes cover a share of tuition rather than the full cost of study.' },
    merit: [ { name: 'WHU bachelor scholarships', amount: 'Published examples award about 20% of tuition', eligibility: 'Bachelor students; conditions were not read during this check', deadline: null, application: null, renewable: null, note: 'WHU states that nearly 20% of students are funded by a grant or endowment.' } ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Bachelor programme — fees and financing', url: 'https://www.whu.edu/en/programs/bachelor-program/fees-financing/' },
    { label: 'Bachelor in International Business Administration — application and admissions', url: 'https://www.whu.edu/en/programs/bachelor-program/bachelor-in-international-business-administration/application-admissions/' }
  ],
  verification: { level: 'partial', checked: ['tuition','language of instruction','entry qualification'], unconfirmed: ['English scores','deadlines','scholarship conditions','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'ebs-universitaet',
  name: 'EBS Universität für Wirtschaft und Recht',
  shortName: 'EBS',
  country: 'de',
  city: 'Oestrich-Winkel',
  region: 'Hesse',
  type: 'Private university (state-recognised)',
  brand: { c1: '#12284c', c2: '#08142a', initials: 'EBS' },
  description: 'A private university near Frankfurt with a Bachelor in Business Studies taught entirely in English, plus law and economics programmes.',
  englishTaught: true,
  languageOfInstruction: 'English (Bachelor in Business Studies)',
  programs: ['business','economics','law'],
  englishTaughtPrograms: ['business','economics'],
  programNote: 'EBS states that the Bachelor in Business Studies is offered exclusively in English and that all examinations are in English.',
  links: {
    website: 'https://www.ebs.edu/en/',
    admissions: 'https://www.ebs.edu/en/apply',
    applicationPortal: 'https://www.ebs.edu/en/apply',
    scholarships: 'https://www.ebs.edu/en/student-financing',
    cost: 'https://www.ebs.edu/en/ebs-business-school/study-programmes/bachelor-in-business-studies'
  },
  admissions: {
    platforms: ['EBS online application'],
    deadlines: [
      { name: 'Fall term application (recommended date)', kind: 'priority', entryTerm: 'Fall', entryYear: '2027', dateISO: '2027-06-30', date: '30 June 2027', binding: false, appliesTo: 'Bachelor applicants', conditions: 'EBS states there are no fixed application deadlines but recommends applying by this date for a smooth start; visa applicants are advised to apply by 30 May', status: 'confirmed', source: 'https://www.ebs.edu/en/apply', verified: '2026-09-23', note: null },
      { name: 'Spring term application (recommended date)', kind: 'priority', entryTerm: 'Spring', entryYear: '2027', dateISO: '2026-11-30', date: '30 November 2026', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Visa applicants are advised to apply by 15 October', status: 'confirmed', source: 'https://www.ebs.edu/en/apply', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Secondary school diploma', 'EBS selection tests or accepted alternatives (SAT, ACT or Gaokao with the school diploma)', 'Interview of about 30 minutes'],
    recommendations: null,
    essay: null,
    interview: 'A 30-minute individual interview assessing motivation and social skills.',
    notes: ['An early-enrolment bonus reduces tuition by €500 for enrolment by 28 February (Fall term) or 31 July (Spring term).']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'The programme and its examinations are in English; the accepted English certificates and scores were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'EBS accepts SAT, ACT or Gaokao results together with the school diploma in place of its own knowledge and personality tests — so these tests are an alternative route, not a general requirement.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'EBS sets a knowledge test covering mathematical, logical-analytical and problem-solving ability, plus a personality assessment.',
    internationalQualifications: 'A secondary school diploma giving access to higher education.'
  },
  costs: {
    breakdown: { tuition: 54480, tuitionText: '€54,480 for six semesters', period: 'programme', includes: 'all fees for the six-semester bachelor, as published by EBS; living costs are extra' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€54,480 tuition for the whole bachelor',
    items: [
      { label: 'Tuition — six semesters, all fees included', amount: 54480 },
      { label: 'Early-enrolment bonus', text: '€500 reduction for enrolling by 28 February (Fall) or 31 July (Spring)' }
    ],
    billedSubtotal: null,
    totalText: '€54,480 across six semesters, about €18,160 a year',
    note: 'Living costs near Frankfurt are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Bachelor in Business Studies', url: 'https://www.ebs.edu/en/ebs-business-school/study-programmes/bachelor-in-business-studies' },
    { label: 'Online application', url: 'https://www.ebs.edu/en/apply' },
    { label: 'Scholarships and student financing', url: 'https://www.ebs.edu/en/student-financing' }
  ],
  verification: { level: 'partial', checked: ['tuition','language of instruction','selection process','recommended application dates'], unconfirmed: ['English scores','application fee','scholarship values'] },
  lastVerified: '2026-09-23'
},

{
  id: 'university-of-europe-applied-sciences',
  name: 'University of Europe for Applied Sciences',
  shortName: 'UE Germany',
  country: 'de',
  city: 'Berlin',
  region: 'Berlin, Potsdam, Iserlohn and Hamburg',
  type: 'Private university of applied sciences',
  brand: { c1: '#ff3c00', c2: '#8a2000', initials: 'UE' },
  description: 'A private university of applied sciences with campuses in Berlin, Potsdam, Iserlohn and Hamburg, teaching bachelor and master programmes in English in business, tech, design and sport.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','computer-science','arts','engineering','psychology','economics'],
  englishTaughtPrograms: ['business','computer-science','arts','engineering','psychology','economics'],
  programNote: 'The university states that all bachelor and master programmes on its Berlin campus are taught in English.',
  links: {
    website: 'https://www.ue-germany.com/',
    admissions: 'https://www.ue-germany.com/admission-requirements',
    applicationPortal: 'https://www.ue-germany.com/study-with-us/how-to-apply/bachelor',
    scholarships: 'https://www.ue-germany.com/study-with-us/fees-and-finance',
    cost: 'https://www.ue-germany.com/study-with-us/fees-and-finance'
  },
  admissions: {
    platforms: ['UE online application'],
    deadlines: [
      { name: 'Application for the autumn 2027 intake', kind: 'intake', entryTerm: 'autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.ue-germany.com/study-with-us/how-to-apply/bachelor', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed. A reservation fee of €3,000 is payable once a place is accepted and is deducted from the programme cost.' },
    documents: ['CV', 'Copy of identity document', 'High school diploma and transcript', 'Motivation letter of at least 500 words', 'Admission test'],
    recommendations: null,
    essay: 'Motivation letter of at least 500 words',
    interview: null,
    notes: ['A reservation fee of €3,000 secures the place and counts towards tuition.']
  },
  english: {
    ielts: { min: 5.5, recommended: null, note: 'IELTS 5.5 is listed as the undergraduate requirement (6.0 for postgraduate). The general requirement is English at CEFR B2.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Accepted; score not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Listed among accepted qualifications; score not confirmed during this check.' },
    waiver: 'Medium-of-instruction evidence combined with the EF SET test is listed among accepted alternatives.',
    note: 'Accepted qualifications listed by the university include IELTS, TOEFL, PTE, MOI with EF SET, and Duolingo.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the higher education entrance qualification and an admission test rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: "Applicants take the university's own admission test after uploading documents.",
    internationalQualifications: 'A higher education entrance qualification is required.'
  },
  costs: {
    breakdown: { published: false, includes: 'tuition is published per programme and campus; the reservation fee of €3,000 counts towards the total' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'Tuition published per programme',
    items: [
      { label: 'Reservation fee (one-time, deducted from tuition)', amount: 3000 },
      { label: 'Tuition', text: 'Published per programme on the fees page; not read during this check' }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official fees page',
    note: 'Living costs in Berlin, Hamburg, Potsdam or Iserlohn are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Admission requirements', url: 'https://www.ue-germany.com/admission-requirements' },
    { label: 'Tuition fees and funding', url: 'https://www.ue-germany.com/study-with-us/fees-and-finance' },
    { label: 'How to apply — bachelor', url: 'https://www.ue-germany.com/study-with-us/how-to-apply/bachelor' }
  ],
  verification: { level: 'partial', checked: ['english (IELTS 5.5 undergraduate)','language of instruction','reservation fee','application documents'], unconfirmed: ['tuition amount','deadlines','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'deggendorf-institute-of-technology',
  name: 'Deggendorf Institute of Technology',
  shortName: 'DIT',
  country: 'de',
  city: 'Deggendorf',
  region: 'Bavaria',
  type: 'Public university of applied sciences',
  brand: { c1: '#004f9f', c2: '#00294f', initials: 'DIT' },
  description: 'A public university of applied sciences in Bavaria with a large set of English-taught bachelor degrees in business, tourism, computer science, engineering and health sciences, and no tuition fee for regular programmes.',
  englishTaught: true,
  languageOfInstruction: 'English (for the English-taught degrees) and German',
  programs: ['engineering','computer-science','business','biology','economics'],
  englishTaughtPrograms: ['engineering','computer-science','business','biology','economics'],
  programNote: 'DIT publishes a list of degrees taught in English; at the European Campus Rottal-Inn teaching is predominantly in English.',
  links: {
    website: 'https://www.th-deg.de/en',
    admissions: 'https://www.th-deg.de/en/apply',
    applicationPortal: 'https://www.th-deg.de/en/apply',
    scholarships: 'https://www.th-deg.de/en/study-with-us/funding',
    cost: 'https://www.th-deg.de/en/study-with-us/apply/fees',
    programs: 'https://www.th-deg.de/studying-in-english'
  },
  admissions: {
    platforms: ['DIT online application'],
    deadlines: [
      { name: 'Application for the winter 2027 intake', kind: 'intake', entryTerm: 'winter', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.th-deg.de/en/apply', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: 60, currency: 'EUR', waiverAvailableToInternational: false, waiver: null, note: 'DIT charges non-EU/EEA applicants a €60 application fee, which covers several applications.' },
    documents: ['University entrance qualification recognised for German bachelor study', 'Transcripts', 'Proof of English', 'Online admission test for some programmes'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Non-EU/EEA students pay a €500 DIT service fee per semester in addition to the semester contribution; EU/EEA students pay no tuition.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'DIT states that none of its programmes require a specific GPA, though some set an online admission test.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the recognised school-leaving qualification rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Some degree programmes require an online admission test.',
    internationalQualifications: 'Recognition of the foreign school-leaving certificate decides direct entry; applicants whose certificate is not recognised take a Studienkolleg assessment.'
  },
  costs: {
    breakdown: { tuition: 0, includes: 'no tuition for full-time EU/EEA students; non-EU/EEA students pay a €500 service fee each semester plus the semester contribution' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'No tuition fee; €500 service fee per semester for non-EU students',
    items: [
      { label: 'Tuition — EU/EEA students', text: 'None; Bavaria charges no tuition for full-time study' },
      { label: 'DIT service fee — non-EU/EEA students (per semester)', amount: 500 },
      { label: 'Application fee — non-EU/EEA applicants', amount: 60 }
    ],
    billedSubtotal: null,
    totalText: 'About €1,000 a year in service fees for non-EU students, plus the semester contribution and living costs',
    note: 'The service fee covers document checks, selection and onboarding services for international students.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Application and service fees for non-EU/EEA applicants', url: 'https://www.th-deg.de/en/study-with-us/apply/fees' },
    { label: 'Degrees taught in English', url: 'https://www.th-deg.de/studying-in-english' },
    { label: 'Applications', url: 'https://www.th-deg.de/en/apply' }
  ],
  verification: { level: 'partial', checked: ['tuition and fees','English-taught degrees','application fee'], unconfirmed: ['English test scores','deadlines','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'neu-ulm-university',
  name: 'Neu-Ulm University of Applied Sciences',
  shortName: 'HNU',
  country: 'de',
  city: 'Neu-Ulm',
  region: 'Bavaria',
  type: 'Public university of applied sciences',
  brand: { c1: '#e30613', c2: '#7a0309', initials: 'HNU' },
  description: 'A small public university of applied sciences in Bavaria focused on business, health management and information management, with English-taught courses and no tuition fee.',
  englishTaught: false,
  languageOfInstruction: 'German and English depending on the programme',
  programs: ['business','computer-science','economics'],
  englishTaughtPrograms: ['business'],
  programNote: 'HNU offers courses taught in English and English-instructed degree programmes; applicants should check on the programme page whether a full bachelor can be completed in English, since several bachelor degrees are taught in German.',
  links: {
    website: 'https://www.hnu.de/en',
    admissions: 'https://www.hnu.de/en/studies/before-the-study/application/application-for-international-students',
    applicationPortal: 'https://www.hnu.de/en/studies/before-the-study/application/application-for-international-students',
    scholarships: 'https://www.hnu.de/en/international/international-degree-seeking-students',
    cost: 'https://www.hnu.de/en/studies/counselling-services/units-studies-examination/a-to-z/fees-re-registration'
  },
  admissions: {
    platforms: ['HNU online application'],
    deadlines: [
      { name: 'Application for the winter 2027 intake', kind: 'intake', entryTerm: 'winter', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.hnu.de/en/studies/before-the-study/application/application-for-international-students', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Recognised school-leaving certificate', 'Proof of English at B2 for English-instructed programmes', 'Proof of German at A1 by the end of the first semester for non-native German speakers'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['HNU requires non-native German speakers to show German at A1 level by the end of the first semester, even on English-taught programmes.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed as a number. HNU requires English at CEFR B2 for English-instructed degree programmes.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Proof of English at B2 must be submitted with the application for English-instructed programmes.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the recognised school-leaving qualification rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Recognition of the foreign school-leaving certificate decides direct entry; applicants whose certificate is not recognised take a Studienkolleg assessment.'
  },
  costs: {
    breakdown: { tuition: 0, includes: 'no tuition for full-time students including international students in Bavaria; a semester fee applies' },
    academicYear: 'Current',
    currency: 'EUR',
    headline: 'No tuition fee; semester fee only',
    items: [
      { label: 'Tuition', text: 'None for full-time students, including international students' },
      { label: 'Semester fee', text: 'Charged each semester; the amount was not read during this check' }
    ],
    billedSubtotal: null,
    totalText: 'No tuition; only the semester fee and living costs',
    note: 'Bavaria does not charge tuition at state universities of applied sciences.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'International degree-seeking students', url: 'https://www.hnu.de/en/international/international-degree-seeking-students' },
    { label: 'Fees and re-registration', url: 'https://www.hnu.de/en/studies/counselling-services/units-studies-examination/a-to-z/fees-re-registration' }
  ],
  verification: { level: 'partial', checked: ['tuition status','language requirements (B2 English, A1 German)'], unconfirmed: ['which bachelor degrees are fully English-taught','English test scores','deadlines','semester fee amount','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'reutlingen-university',
  name: 'Reutlingen University',
  shortName: 'Reutlingen',
  country: 'de',
  city: 'Reutlingen',
  region: 'Baden-Württemberg',
  type: 'Public university of applied sciences',
  brand: { c1: '#004b87', c2: '#002747', initials: 'RTU' },
  description: 'A public university of applied sciences near Stuttgart whose ESB Business School runs international double-degree programmes with around 1,500 students from some 80 countries.',
  englishTaught: false,
  languageOfInstruction: 'German and English depending on the programme',
  programs: ['business','engineering','computer-science','economics','arts'],
  englishTaughtPrograms: ['business'],
  programNote: 'ESB Business School runs international bachelor programmes including International Management with double-degree routes; other faculties teach mainly in German.',
  links: {
    website: 'https://www.reutlingen-university.de/en/',
    admissions: 'https://www.reutlingen-university.de/en/studies/application',
    applicationPortal: 'https://www.reutlingen-university.de/en/studies/application',
    scholarships: 'https://www.reutlingen-university.de/en/studies/student-finances',
    cost: 'https://www.reutlingen-university.de/en/before-studying/your-application/your-enrolment/tuition-fees/'
  },
  admissions: {
    platforms: ['Reutlingen online application (uni-assist for many international qualifications)'],
    deadlines: [
      { name: 'Application for the winter 2027 intake', kind: 'intake', entryTerm: 'winter', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.reutlingen-university.de/en/studies/application', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check; uni-assist charges its own handling fee where it is used.' },
    documents: ['Recognised school-leaving certificate', 'Transcripts', 'Proof of English for English-taught programmes'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Baden-Württemberg charges non-EU/EEA students tuition of €1,500 per semester; students on some collaborative double-degree programmes can be exempt.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Requirements are published per programme; they were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the recognised school-leaving qualification rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Some programmes use their own selection procedures.',
    internationalQualifications: 'Recognition of the foreign school-leaving certificate decides direct entry; applicants whose certificate is not recognised take a Studienkolleg assessment.'
  },
  costs: {
    breakdown: { tuition: 1500, period: 'semester', includes: 'the Baden-Württemberg tuition fee for non-EU/EEA students per semester, plus a general semester fee of €199.30' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€1,500 tuition per semester for non-EU students',
    items: [
      { label: 'Tuition — non-EU/EEA students (per semester)', amount: 1500 },
      { label: 'General semester fee', amount: 199.3 }
    ],
    billedSubtotal: null,
    totalText: 'About €3,400 a year in tuition and semester fees for non-EU students',
    note: 'Students on some joint international programmes can be exempt from the state tuition fee.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition fees', url: 'https://www.reutlingen-university.de/en/before-studying/your-application/your-enrolment/tuition-fees/' },
    { label: 'Student finance', url: 'https://www.reutlingen-university.de/en/studies/student-finances' }
  ],
  verification: { level: 'partial', checked: ['tuition for non-EU students','semester fee','exemption rule'], unconfirmed: ['English requirements','deadlines','which bachelor programmes are fully English-taught','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'cbs-international-business-school',
  name: 'CBS International Business School',
  shortName: 'CBS',
  country: 'de',
  city: 'Cologne',
  region: 'North Rhine-Westphalia',
  type: 'Private university of applied sciences',
  brand: { c1: '#004c97', c2: '#002a53', initials: 'CBS' },
  description: 'A private business school in Cologne with English-taught bachelor programmes in international business and management and a large share of international students.',
  englishTaught: true,
  languageOfInstruction: 'English (international programmes) and German',
  programs: ['business','economics'],
  englishTaughtPrograms: ['business','economics'],
  programNote: 'The English-taught programmes are based at the Cologne campus; CBS states it has no GPA cut-off and uses a personal admissions interview.',
  links: {
    website: 'https://www.cbs.de/en',
    admissions: 'https://www.cbs.de/en/admissions/requirements/bachelors',
    applicationPortal: 'https://www.cbs.de/en/admissions/admission-requirements',
    scholarships: 'https://www.cbs.de/en/financing/tuition-fees',
    cost: 'https://www.cbs.de/en/financing/tuition-fees'
  },
  admissions: {
    platforms: ['CBS online application'],
    deadlines: [
      { name: 'Application for the autumn 2027 intake', kind: 'intake', entryTerm: 'autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.cbs.de/en/admissions/admission-requirements', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Certified copy of the university entrance qualification', 'Tabular CV', 'Motivation letter', 'Proof of health insurance for international applicants', 'Admissions interview'],
    recommendations: null,
    essay: 'Motivation letter',
    interview: 'A personal admissions interview is part of the process; CBS states it has no GPA restrictions.',
    notes: ['Tuition differs for EU and non-EU students; the exact figures are published on the CBS fees page.']
  },
  english: {
    ielts: { min: 6.5, recommended: null, note: 'CBS states that proof of English is usually IELTS 6.5 or above, or TOEFL around 80; the requirement for a specific programme should be checked on its page.' },
    toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, recommended: null }], note: 'TOEFL around 80 points is given as the usual requirement.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Language certificates must be submitted in English or German depending on the programme.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school qualification and an interview rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'None beyond the admissions interview.',
    internationalQualifications: 'A-levels, an advanced vocational diploma or an equivalent university entrance qualification.'
  },
  costs: {
    breakdown: { published: false, includes: 'CBS publishes separate tuition rates for EU and non-EU students on its fees page; the figures were not read during this check' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'Tuition published separately for EU and non-EU students',
    items: [ { label: 'Tuition', text: 'Published per programme and fee status on the CBS tuition page' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official tuition page',
    note: 'Living costs in Cologne are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Bachelor admission requirements', url: 'https://www.cbs.de/en/admissions/requirements/bachelors' },
    { label: 'Tuition and semester fees', url: 'https://www.cbs.de/en/financing/tuition-fees' }
  ],
  verification: { level: 'partial', checked: ['english (usual requirement)','admission process','language of instruction'], unconfirmed: ['tuition amounts','deadlines','application fee','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'karlshochschule',
  name: 'Karlshochschule International University',
  shortName: 'Karlshochschule',
  country: 'de',
  city: 'Karlsruhe',
  region: 'Baden-Württemberg',
  type: 'Private university (state-recognised)',
  brand: { c1: '#e2007a', c2: '#78003f', initials: 'KAR' },
  description: 'A small private university in Karlsruhe teaching English-language bachelor programmes in business, management, communication and politics, with more than half its students from abroad.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','social-sciences','computer-science','engineering','psychology','economics','arts'],
  englishTaughtPrograms: ['business','social-sciences','computer-science','engineering','psychology','economics','arts'],
  programNote: 'English-taught bachelor programmes listed by the university include International Business, Business Psychology, Politics Philosophy and Economics, Computer Science, Creativity and Management and Mechatronics.',
  links: {
    website: 'https://www.karlshochschule.de/en/',
    admissions: 'https://www.karlshochschule.de/en/bachelor-programs/application-admission-bachelors-degree-programs.html',
    applicationPortal: 'https://application.karlshochschule.de/en/',
    scholarships: 'https://www.karlshochschule.de/en/university-life/student-financing.html',
    cost: 'https://www.karlshochschule.de/en/university-life/student-financing.html'
  },
  admissions: {
    platforms: ['Karlshochschule online application'],
    deadlines: [
      { name: 'Application for the winter 2027 intake', kind: 'intake', entryTerm: 'winter', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.karlshochschule.de/en/bachelor-programs/application-admission-bachelors-degree-programs.html', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: 0, currency: 'EUR', waiverAvailableToInternational: false, waiver: null, note: 'The university states there are no application fees; a one-off enrolment fee of €500 is due after signing the contract.' },
    documents: ['School-leaving certificate', 'IELTS certificate at B2 level for English-taught programmes', 'Selection interview'],
    recommendations: null,
    essay: null,
    interview: 'Applicants with a positive evaluation are invited to a personal selection interview with the admissions team and professors.',
    notes: ['The university suggests budgeting about €700–€800 a month for living costs and housing in Karlsruhe.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'English at CEFR B2 must be proved by an IELTS certificate for the English-language bachelor programmes; the exact band was not published on the pages read.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'The university names IELTS specifically as the evidence for B2 English.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school qualification and a selection interview rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'None beyond the selection interview.',
    internationalQualifications: 'A school-leaving certificate giving access to higher education.'
  },
  costs: {
    breakdown: { tuitionText: '€550 per month (EU) or €750 per month (non-EU)', period: 'month', includes: 'tuition from the start of winter semester 2025/26; a one-off €500 enrolment fee and about €67.70 per semester to the Studierendenwerk are extra' },
    academicYear: '2025–2026',
    currency: 'EUR',
    headline: '€750 a month tuition for non-EU students',
    items: [
      { label: 'Tuition — EU students (per month)', amount: 550 },
      { label: 'Tuition — non-EU students (per month)', amount: 750 },
      { label: 'Enrolment fee (one-time)', amount: 500 },
      { label: 'Studierendenwerk contribution (per semester)', amount: 67.7 }
    ],
    billedSubtotal: null,
    totalText: 'About €9,000 a year in tuition for non-EU students, plus the enrolment fee and semester contribution',
    note: 'The rates apply from the start of winter semester 2025/26 as published by the university.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Application and admission — bachelor programmes', url: 'https://www.karlshochschule.de/en/bachelor-programs/application-admission-bachelors-degree-programs.html' },
    { label: 'Student financing', url: 'https://www.karlshochschule.de/en/university-life/student-financing.html' }
  ],
  verification: { level: 'partial', checked: ['tuition','enrolment fee','application fee','language requirement level','English-taught programmes'], unconfirmed: ['exact IELTS band','deadlines','scholarships'] },
  lastVerified: '2026-09-23'
},

{
  id: 'hof-university',
  name: 'Hof University of Applied Sciences',
  shortName: 'Hof',
  country: 'de',
  city: 'Hof',
  region: 'Bavaria',
  type: 'Public university of applied sciences',
  brand: { c1: '#009ee0', c2: '#005478', initials: 'HOF' },
  description: 'A small public university of applied sciences in northern Bavaria with an English-taught Bachelor in International Management and no tuition fee for regular bachelor programmes.',
  englishTaught: true,
  languageOfInstruction: 'English (International Management) and German',
  programs: ['business','engineering','computer-science','economics'],
  englishTaughtPrograms: ['business'],
  programNote: 'The Bachelor in International Management is taught in English and includes language training to C2 English and C1 French or Spanish. Graduate School programmes do charge tuition.',
  links: {
    website: 'https://www.hof-university.com/',
    admissions: 'https://www.hof-university.com/studying-at-hof-university/application-and-admission.html',
    applicationPortal: 'https://www.hof-university.com/studying-at-hof-university/application-and-admission.html',
    scholarships: 'https://www.hof-university.com/studying-at-hof-university/preparing-your-stay/how-to-finance-your-studies.html',
    cost: 'https://www.hof-university.com/studying-at-hof-university/preparing-your-stay/how-to-finance-your-studies.html',
    programs: 'https://www.hof-university.com/studying-in-hof/full-time-programs/english-taught-programs.html'
  },
  admissions: {
    platforms: ['Hof University online application'],
    deadlines: [
      { name: 'Application for the winter 2027 intake', kind: 'intake', entryTerm: 'winter', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.hof-university.com/studying-at-hof-university/application-and-admission.html', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Recognised school-leaving certificate', 'Transcripts', 'Proof of English'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Tuition is charged for Graduate School programmes but not for the regular bachelor degrees.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'The International Management programme includes language training up to C2 in English.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the recognised school-leaving qualification rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Recognition of the foreign school-leaving certificate decides direct entry; applicants whose certificate is not recognised take a Studienkolleg assessment.'
  },
  costs: {
    breakdown: { tuition: 0, includes: 'no tuition for regular bachelor and master programmes; a semester contribution of about €125 applies' },
    academicYear: 'Current',
    currency: 'EUR',
    headline: 'No tuition fee; about €125 semester contribution',
    items: [
      { label: 'Tuition — regular bachelor programmes', text: 'None' },
      { label: 'Semester contribution', text: 'About €125 per semester' },
      { label: 'Graduate School programmes', text: 'Charged separately — tuition applies there' }
    ],
    billedSubtotal: null,
    totalText: 'About €250 a year in semester contributions, plus living costs',
    note: 'This is the standard public price rather than a scholarship.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'How to finance your studies', url: 'https://www.hof-university.com/studying-at-hof-university/preparing-your-stay/how-to-finance-your-studies.html' },
    { label: 'Bachelor in International Management', url: 'https://www.hof-university.com/studying-at-hof-university/our-degree-programs/international-management-ba.html' },
    { label: 'English-taught programmes', url: 'https://www.hof-university.com/studying-in-hof/full-time-programs/english-taught-programs.html' }
  ],
  verification: { level: 'partial', checked: ['tuition status','semester contribution','English-taught bachelor'], unconfirmed: ['English test scores','deadlines','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'macromedia-university',
  name: 'Macromedia University of Applied Sciences',
  shortName: 'Macromedia',
  country: 'de',
  city: 'Berlin',
  region: 'Berlin and Munich campuses',
  type: 'Private university of applied sciences',
  brand: { c1: '#ff5100', c2: '#8c2c00', initials: 'MAC' },
  description: 'A private university of applied sciences with English-taught bachelor programmes in management, business and artificial intelligence on its Berlin and Munich campuses.',
  englishTaught: true,
  languageOfInstruction: 'English (Berlin and Munich international programmes) and German',
  programs: ['business','computer-science','arts','economics'],
  englishTaughtPrograms: ['business','computer-science','economics'],
  programNote: 'Berlin and Munich are the international campuses that run English-taught programmes such as Management B.A., Business Management and Artificial Intelligence.',
  links: {
    website: 'https://www.macromedia-fachhochschule.de/en/',
    admissions: 'https://www.macromedia-fachhochschule.de/en/advisory/admission-application/',
    applicationPortal: 'https://www.macromedia-fachhochschule.de/en/advisory/admission-application/',
    scholarships: 'https://www.macromedia-fachhochschule.de/en/advisory/fees-financing/',
    cost: 'https://www.macromedia-fachhochschule.de/en/advisory/fees-financing/'
  },
  admissions: {
    platforms: ['Macromedia online application'],
    deadlines: [
      { name: 'Application for the winter 2027 intake', kind: 'intake', entryTerm: 'winter', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.macromedia-fachhochschule.de/en/advisory/admission-application/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'A registration fee of €500 (EU or two years\' residence in Germany) or €750 (non-EU) applies; a separate application fee was not confirmed.' },
    documents: ['School-leaving certificate giving access to higher education', 'Transcripts', 'Proof of English at the required level'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Tuition can be paid per semester, monthly, in one payment or as a deposit plus instalments.']
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'For English-taught bachelor programmes Macromedia requires IELTS 6.0 or above, or an equivalent qualification.' },
    toefl: { min: 72, recommended: null, scales: [{ period: 'pre2026', min: 72, recommended: null }], note: 'TOEFL iBT at least 72 out of 120 for English-taught bachelor programmes.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Equivalent qualifications to IELTS 6.0 or TOEFL 72 are accepted.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school-leaving qualification rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'A school-leaving certificate that gives access to higher education in Germany.'
  },
  costs: {
    breakdown: { tuition: 6000, period: 'semester', includes: 'tuition per semester for English-taught bachelor programmes in Berlin and Munich; the registration fee is extra' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: '€6,000 tuition per semester',
    items: [
      { label: 'Tuition — English-taught bachelor (per semester)', amount: 6000 },
      { label: 'Registration fee — EU or two years in Germany', amount: 500 },
      { label: 'Registration fee — non-EU', amount: 750 }
    ],
    billedSubtotal: null,
    totalText: 'About €12,000 a year in tuition, plus the one-time registration fee',
    note: 'Living costs in Berlin or Munich are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Fees and financing', url: 'https://www.macromedia-fachhochschule.de/en/advisory/fees-financing/' },
    { label: 'Admission and application', url: 'https://www.macromedia-fachhochschule.de/en/advisory/admission-application/' }
  ],
  verification: { level: 'partial', checked: ['tuition','registration fee','English requirements','English-taught campuses'], unconfirmed: ['deadlines','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'gisma-university',
  name: 'Gisma University of Applied Sciences',
  shortName: 'Gisma',
  country: 'de',
  city: 'Potsdam',
  region: 'Brandenburg and Berlin',
  type: 'Private university of applied sciences',
  brand: { c1: '#00b2a9', c2: '#005f5a', initials: 'GIS' },
  description: 'A private university of applied sciences with campuses in Potsdam and Berlin, running bachelor degrees taught entirely in English in business and artificial intelligence.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','computer-science','economics','engineering'],
  englishTaughtPrograms: ['business','computer-science','economics','engineering'],
  programNote: 'Gisma states that its bachelor degrees are taught 100% in English, with students from more than 90 nationalities.',
  links: {
    website: 'https://www.gisma.com/',
    admissions: 'https://www.gisma.com/how-to-apply',
    applicationPortal: 'https://www.gisma.com/how-to-apply',
    scholarships: 'https://www.gisma.com/life-at-gisma/tuition-fees-and-funding',
    cost: 'https://www.gisma.com/life-at-gisma/tuition-fees-and-funding'
  },
  admissions: {
    platforms: ['Gisma online application'],
    deadlines: [
      { name: 'Application for the autumn 2027 intake', kind: 'intake', entryTerm: 'autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.gisma.com/how-to-apply', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'A deposit of €1,500 applies for most international students and is deducted from the programme fee; an application fee was not confirmed.' },
    documents: ['School-leaving certificate and transcripts', 'Proof of English', 'Application form for the chosen programme'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Gisma allows applications before the English certificate or final transcript is available, with the condition met later.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Proof of English is required but the accepted scores were not read during this check.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school-leaving qualification rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'A school-leaving qualification giving access to higher education; a foundation programme is offered for applicants who do not yet qualify.'
  },
  costs: {
    breakdown: { tuitionText: 'Up to €15,000 for the whole bachelor programme', period: 'programme', includes: 'total programme fees as published by Gisma; the €1,500 deposit counts towards them' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'Up to €15,000 for the whole bachelor',
    items: [
      { label: 'Programme fees — bachelor', text: 'Published as up to €15,000 in total' },
      { label: 'Deposit (deducted from the programme fee)', amount: 1500 }
    ],
    billedSubtotal: null,
    totalText: 'Up to €15,000 for the degree, payable in up to ten instalments',
    note: 'Living costs in Potsdam or Berlin are extra.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Tuition fees and funding', url: 'https://www.gisma.com/life-at-gisma/tuition-fees-and-funding' },
    { label: 'How to apply', url: 'https://www.gisma.com/how-to-apply' }
  ],
  verification: { level: 'partial', checked: ['tuition (total)','deposit','language of instruction'], unconfirmed: ['English test scores','deadlines','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'escp-berlin',
  name: 'ESCP Business School — Berlin campus',
  shortName: 'ESCP Berlin',
  country: 'de',
  city: 'Berlin',
  region: 'Berlin',
  type: 'Private business school (multi-campus European school)',
  brand: { c1: '#003865', c2: '#001c33', initials: 'ESC' },
  description: 'The Berlin campus of ESCP Business School, whose Bachelor in Management (BSc) is taught in English and moves students between European campuses in Berlin, London, Paris, Madrid and Turin.',
  englishTaught: true,
  languageOfInstruction: 'English (Bachelor in Management)',
  programs: ['business','economics'],
  englishTaughtPrograms: ['business','economics'],
  programNote: 'The Bachelor in Management is a multi-campus degree: students study in more than one European city during the programme.',
  links: {
    website: 'https://escp.eu/',
    admissions: 'https://escp.eu/programmes/bachelor-in-management-BSc/apply',
    applicationPortal: 'https://escp.eu/programmes/bachelor-in-management-BSc/apply',
    scholarships: 'https://escp.eu/programmes/bachelor-in-management-BSc',
    cost: 'https://escp.eu/programmes/bachelor-in-management-BSc'
  },
  admissions: {
    platforms: ['ESCP online application'],
    deadlines: [
      { name: 'Application for the autumn 2027 intake', kind: 'intake', entryTerm: 'autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://escp.eu/programmes/bachelor-in-management-BSc/apply', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['High school diploma expected by the start of the programme', 'Proof of English at C1', 'Application through the ESCP portal'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Students on this degree change campus during the programme, so living costs differ by city and year.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'English proficiency at CEFR C1 is required; the accepted certificates and scores were not read during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'The requirement is stated as C1 English.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: "Admission is on the school qualification and the school's own selection; the SAT and ACT are not stated as a requirement." },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Applicants must be on track to receive a high school diploma by the start of the programme year.'
  },
  costs: {
    breakdown: { published: false, includes: 'ESCP publishes Bachelor in Management fees per year and campus; the figures were not read during this check' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'Tuition published per year on the programme page',
    items: [ { label: 'Tuition — Bachelor in Management', text: 'Published on the ESCP programme page; not read during this check' } ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official programme page',
    note: 'Living costs vary because the degree moves between European campuses.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Bachelor in Management (BSc)', url: 'https://escp.eu/programmes/bachelor-in-management-BSc' },
    { label: 'Bachelor in Management — application', url: 'https://escp.eu/programmes/bachelor-in-management-BSc/apply' }
  ],
  verification: { level: 'partial', checked: ['language of instruction','English level','programme structure'], unconfirmed: ['tuition','deadlines','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'berlin-school-business-innovation',
  name: 'Berlin School of Business and Innovation',
  shortName: 'BSBI',
  country: 'de',
  city: 'Berlin',
  region: 'Berlin and Hamburg',
  type: 'Private business school',
  brand: { c1: '#1a1a1a', c2: '#000000', initials: 'BSB' },
  description: 'A private business school teaching bachelor, master and MBA programmes in English in Berlin and Hamburg, with additional campuses elsewhere in Europe.',
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: ['business','economics','computer-science'],
  englishTaughtPrograms: ['business','economics','computer-science'],
  programNote: 'Programmes are taught in English across the Berlin, Hamburg and other European campuses.',
  links: {
    website: 'https://www.berlinsbi.com/',
    admissions: 'https://www.berlinsbi.com/admissions/undergraduate-application',
    applicationPortal: 'https://www.berlinsbi.com/admissions/undergraduate-application',
    scholarships: 'https://www.berlinsbi.com/admissions',
    cost: 'https://www.berlinsbi.com/studying-at-bsbi/programme-offers'
  },
  admissions: {
    platforms: ['BSBI online application'],
    deadlines: [
      { name: 'Application for the autumn 2027 intake', kind: 'intake', entryTerm: 'autumn', entryYear: '2027', date: 'Not confirmed', status: 'not-confirmed', binding: false, appliesTo: 'Bachelor applicants', conditions: 'Application dates are published by the university; the dates for this intake were not read during this check.', source: 'https://www.berlinsbi.com/admissions/undergraduate-application', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'A deposit of €2,000 of the first-year fees is due when the study contract is signed; an application fee was not confirmed.' },
    documents: ['School-leaving certificate such as the Abitur, Fachhochschulreife, Matura or IB Diploma', 'Proof of English', 'Applicants aged at least 18'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Applicants without the standard academic qualification can be considered individually with four or more years of full-time work experience.']
  },
  english: {
    ielts: { min: 6.0, recommended: null, note: 'IELTS 6.0 overall with at least 5.5 in every band, or an equivalent qualification, for bachelor and master programmes.' },
    toefl: { min: 80, recommended: null, scales: [{ period: 'pre2026', min: 80, recommended: null }], note: 'TOEFL iBT 80 is listed as equivalent to the IELTS requirement.' },
    duolingo: { min: 105, recommended: null, note: 'Duolingo English Test 105 is listed as an accepted equivalent.' },
    waiver: null,
    note: 'Pearson Test of English 59 is also listed as an equivalent.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the school-leaving qualification or relevant work experience rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'None stated.',
    internationalQualifications: 'Abitur, Fachhochschulreife, Matura, IB Diploma or an equivalent school-leaving certificate.'
  },
  costs: {
    breakdown: { published: false, includes: 'BSBI publishes programme fees per course; a €2,000 deposit counts towards the first-year fees' },
    academicYear: '2026–2027',
    currency: 'EUR',
    headline: 'Tuition published per programme',
    items: [
      { label: 'Programme fees', text: 'Published per programme on the BSBI programme offers page' },
      { label: 'Deposit on signing the study contract', amount: 2000 }
    ],
    billedSubtotal: null,
    totalText: 'Not confirmed — see the official programme fees page',
    note: 'BSBI offers payment plans spreading fees across the programme.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Programme offers and tuition fees', url: 'https://www.berlinsbi.com/studying-at-bsbi/programme-offers' },
    { label: 'Undergraduate application', url: 'https://www.berlinsbi.com/admissions/undergraduate-application' },
    { label: 'Frequently asked questions', url: 'https://www.berlinsbi.com/studying-at-bsbi/frequently-asked-questions' }
  ],
  verification: { level: 'partial', checked: ['english (IELTS, TOEFL, Duolingo, PTE)','entry qualifications','deposit'], unconfirmed: ['tuition amount','deadlines','scholarships','application fee'] },
  lastVerified: '2026-09-23'
},

{
  id: 'stralsund-university',
  name: 'Stralsund University of Applied Sciences',
  shortName: 'Stralsund',
  country: 'de',
  city: 'Stralsund',
  region: 'Mecklenburg-Western Pomerania',
  type: 'Public university of applied sciences',
  brand: { c1: '#0069b4', c2: '#00385f', initials: 'STR' },
  description: 'A small public university of applied sciences on the Baltic coast. Its Leisure and Tourism Management bachelor is taught mainly, but not entirely, in English and includes a semester abroad and an internship semester.',
  englishTaught: false,
  languageOfInstruction: 'Mixed: the Leisure and Tourism Management bachelor is about 80% English and 20% German',
  programs: ['business','engineering','computer-science','economics'],
  englishTaughtPrograms: [],
  programNote: 'Stralsund states that lectures on Leisure and Tourism Management are about 80% in English and 20% in German, so this is not a fully English-taught degree. Other bachelor programmes are taught in German.',
  links: {
    website: 'https://www.hochschule-stralsund.de/en/',
    admissions: 'https://www.hochschule-stralsund.de/en/studying-and-teaching/applications/application-and-enrolment/',
    applicationPortal: 'https://www.hochschule-stralsund.de/en/studying-and-teaching/applications/application-and-enrolment/',
    scholarships: 'https://www.hochschule-stralsund.de/en/studium-und-lehre/international-programs/',
    cost: 'https://www.hochschule-stralsund.de/en/studying-and-teaching/applications/application-and-enrolment/',
    programs: 'https://www.hochschule-stralsund.de/en/host/schools/business-studies/study-programmes/leisure-and-tourism-management/'
  },
  admissions: {
    platforms: ['Stralsund online application'],
    deadlines: [
      { name: 'Leisure and Tourism Management — application deadline (2026 intake)', kind: 'intake', entryTerm: 'Winter', entryYear: '2026', dateISO: '2026-07-15', date: '15 July 2026', binding: false, appliesTo: 'Applicants for the Leisure and Tourism Management bachelor', conditions: 'Published deadline for the 2026 intake; the equivalent 2027 date had not been published when this was checked', status: 'previous-cycle', source: 'https://www.hochschule-stralsund.de/en/host/schools/business-studies/study-programmes/leisure-and-tourism-management/', verified: '2026-09-23', note: null }
    ],
    applicationFee: { amount: null, currency: 'EUR', waiverAvailableToInternational: null, waiver: null, note: 'Not confirmed during this check.' },
    documents: ['Recognised school-leaving certificate', 'Transcripts', 'Proof of English and, for the German-taught parts, German'],
    recommendations: null,
    essay: null,
    interview: null,
    notes: ['Because about a fifth of teaching is in German, applicants need German as well as English for this programme.']
  },
  english: {
    ielts: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    toefl: { min: null, recommended: null, scales: [], note: 'Not confirmed during this check.' },
    duolingo: { min: null, recommended: null, note: 'Not confirmed during this check.' },
    waiver: null,
    note: 'Language requirements were not read during this check; the programme mixes English and German teaching.'
  },
  academics: {
    gpa: null,
    sat: { policy: 'not-applicable', note: 'Admission is on the recognised school-leaving qualification rather than the SAT or ACT.' },
    act: { policy: 'not-applicable', note: 'The US test-optional classification does not apply to this admission route.' },
    otherTests: 'Not confirmed during this check.',
    internationalQualifications: 'Recognition of the foreign school certificate decides direct entry; otherwise a Studienkolleg assessment is needed.'
  },
  costs: {
    breakdown: { tuition: 0, includes: 'no tuition fee at this public university; a semester contribution applies and was not read during this check' },
    academicYear: 'Current',
    currency: 'EUR',
    headline: 'No tuition fee; semester contribution applies',
    items: [
      { label: 'Tuition', text: 'None at this state university of applied sciences' },
      { label: 'Semester contribution', text: 'Charged each semester; amount not read during this check' }
    ],
    billedSubtotal: null,
    totalText: 'No tuition; the semester contribution and living costs remain',
    note: 'Living costs on the Baltic coast are lower than in Berlin or Munich.'
  },
  scholarships: {
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Not confirmed during this check.' }
  },
  photos: { main: null, gallery: [], city: null },
  sources: [
    { label: 'Leisure and Tourism Management', url: 'https://www.hochschule-stralsund.de/en/host/schools/business-studies/study-programmes/leisure-and-tourism-management/' },
    { label: 'Application and enrolment', url: 'https://www.hochschule-stralsund.de/en/studying-and-teaching/applications/application-and-enrolment/' }
  ],
  verification: { level: 'partial', checked: ['language of instruction share','2026 application deadline','tuition status'], unconfirmed: ['English and German test requirements','2027 deadline','semester contribution','scholarships'] },
  lastVerified: '2026-09-23'
},
);
