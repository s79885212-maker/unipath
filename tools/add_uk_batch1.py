# -*- coding: utf-8 -*-
"""Append verified UK university records to data/universities.uk.js."""
import io

UCAS = """    platforms: ['UCAS (required for all undergraduate courses)'],
    deadlines: [
      { name: 'UCAS equal consideration deadline (2027 entry)', kind: 'ucas-main', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2027-01-13', date: '13 January 2027', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'All undergraduate courses except those with a 15 October deadline', conditions: 'Applications received by this time must be considered equally', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546', verified: '2026-09-23', note: null },
      { name: 'UCAS applications open (2027 entry)', kind: 'opens', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-05-12', date: '12 May 2026', binding: false, appliesTo: 'All applicants', status: 'confirmed', source: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications', verified: '2026-09-23', note: 'One UCAS application holds up to five course choices' }
    ],
    applicationFee: { amount: 34.5, currency: 'GBP', waiverAvailableToInternational: false, waiver: null, note: 'The £34.50 is the UCAS fee for the whole 2027-cycle application (up to five choices), not a university fee. UCAS waives it only for UK free-school-meal recipients and care leavers.' },"""

MED = """      { name: 'UCAS deadline — medicine, dentistry and veterinary courses (2027 entry)', kind: 'ucas-october', entryTerm: 'Autumn', entryYear: '2027', dateISO: '2026-10-15', date: '15 October 2026', time: '18:00', timezone: 'UK time', binding: false, appliesTo: 'Medicine, dentistry and veterinary medicine/science', conditions: 'Earlier UCAS deadline set for these subjects', status: 'confirmed', source: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536', verified: '2026-09-23', note: null },"""

def record(r):
    med = MED if r.get('med') else ''
    deadlines = UCAS.replace("    deadlines: [\n", "    deadlines: [\n" + med + ("\n" if med else ""))
    return f"""
{{
  id: '{r['id']}',
  name: {r['name']!r},
  shortName: {r['short']!r},
  country: 'uk',
  city: {r['city']!r},
  region: {r['region']!r},
  type: {r['type']!r},
  brand: {{ c1: '{r['c1']}', c2: '{r['c2']}', initials: '{r['initials']}' }},
  description: {r['desc']!r},
  englishTaught: true,
  languageOfInstruction: 'English',
  programs: {r['programs']},
  englishTaughtPrograms: {r['programs']},
  programNote: {r['programNote']!r},
  links: {{
    website: '{r['website']}',
    admissions: '{r['admissions']}',
    applicationPortal: 'https://www.ucas.com/',
    scholarships: {r['scholarships_url']!r},
    cost: {r['cost_url']!r},
    english: {r['english_url']!r}
  }},
  admissions: {{
{deadlines}
    documents: ['UCAS application with personal statement', 'Academic reference', 'Predicted or achieved school-leaving grades', 'Proof of English where required'],
    recommendations: 'One academic reference through UCAS',
    essay: 'UCAS personal statement',
    interview: {r['interview']!r},
    notes: {r['notes']}
  }},
  english: {{
    ielts: {r['ielts']},
    toefl: {r['toefl']},
    duolingo: {r['duolingo']},
    waiver: {r['waiver']!r},
    note: {r['english_note']!r}
  }},
  academics: {{
    gpa: null,
    sat: {{ policy: 'not-applicable', note: {r['sat_note']!r} }},
    act: {{ policy: 'not-applicable', note: 'The US test-optional classification does not apply to this route.' }},
    otherTests: {r['other_tests']!r},
    internationalQualifications: {r['intl_quals']!r}
  }},
  costs: {r['costs']},
  scholarships: {r['scholarships']},
  photos: {{ main: null, gallery: [], city: null }},
  sources: {r['sources']},
  verification: {{ level: 'partial', checked: {r['checked']}, unconfirmed: {r['unconfirmed']} }},
  lastVerified: '2026-09-23'
}},
"""

RECORDS = []

RECORDS.append(dict(
  id='lse', name='London School of Economics and Political Science', short='LSE', city='London', region='England',
  type='Public research university (University of London)', c1='#0d1b3e', c2='#e30613', initials='LSE',
  desc='A specialist social-science university in central London, teaching economics, politics, law, management and related subjects. Admission is by UCAS, competition for places is high and LSE publishes one English requirement for every undergraduate programme.',
  programs="['economics','social-sciences','law','business','mathematics','humanities']",
  programNote='LSE has no engineering, medicine or laboratory-science degrees; its undergraduate range is concentrated in the social sciences, economics, law, management, mathematics and statistics.',
  website='https://www.lse.ac.uk/', admissions='https://www.lse.ac.uk/study-at-lse/Undergraduate',
  scholarships_url='https://www.lse.ac.uk/study-at-lse/Undergraduate/fees-and-funding',
  cost_url='https://info.lse.ac.uk/staff/divisions/Planning-Division/Table-of-Fees',
  english_url='https://www.lse.ac.uk/study-at-lse/Undergraduate/Prospective-Students/How-to-Apply/English-language-requirements',
  interview='LSE does not normally interview undergraduate applicants.',
  notes="['LSE states that its tuition fee is fixed at the level of the year of entry and does not rise during the programme.']",
  ielts="{ min: 7.0, recommended: null, note: 'IELTS Academic 7.0 overall with 7.0 in every component, achieved in one sitting. This is a required minimum, not a recommendation, and it applies to all undergraduate programmes.' }",
  toefl="{ min: 100, recommended: null, scales: [{ period: 'pre2026', min: 100, recommended: null }, { period: 'post2026', min: 5.5, recommended: null }], note: 'TOEFL iBT 100 overall with Writing 27, Reading 25, Listening 24, Speaking 24 on the earlier scale; on the scale used from January 2026, 5.5 overall with at least 5 in each component.' }",
  duolingo="{ min: null, recommended: null, note: 'The Duolingo English Test is not listed among the qualifications LSE accepts.' }",
  waiver='Nationals of Canada or of UKVI majority English-speaking countries whose first language is English, and holders of a degree taught in those countries, do not need a test.',
  english_note='Pearson PTE Academic 70 overall with 70 in all components, and Cambridge C1 Advanced or C2 Proficiency at 185 overall with 185 per component, are also accepted. Test results must be no more than two years old on 1 September of the year of entry; Cambridge certificates do not expire.',
  sat_note='LSE selects on school-leaving qualifications such as A-levels, the IB and recognised national diplomas. US applicants may be asked for SAT/ACT and AP results, but there is no test-optional policy in the American sense.',
  other_tests='No university-wide admissions test. Some programmes ask for additional written work.',
  intl_quals='A wide range of national school-leaving qualifications is accepted; the required grades are published for each programme.',
  costs="""{
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
  }""",
  scholarships="""{
    fullRide: { available: null, internationalEligible: null, basis: null, covers: { tuition: null, housing: null, meals: null, insurance: null, books: null }, renewable: null, competitiveness: null, howToApply: null, note: 'Not confirmed during this check. LSE states that it awards privately funded scholarships and bursaries to Overseas-fee students, but says the number, value and criteria change each year.' },
    merit: [],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'LSE says financial support for Overseas-fee students exists but does not publish a fixed scheme; details were not confirmed here.' }
  }""",
  sources="""[
    { label: 'Undergraduate English language requirements', url: 'https://www.lse.ac.uk/study-at-lse/Undergraduate/Prospective-Students/How-to-Apply/English-language-requirements' },
    { label: 'Undergraduate fees and funding', url: 'https://www.lse.ac.uk/study-at-lse/Undergraduate/fees-and-funding' },
    { label: 'UCAS key dates for 2027 entry', url: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications' }
  ]""",
  checked="['english','rounds','application fee']",
  unconfirmed="['tuition amount','scholarships','application documents beyond UCAS']"))

RECORDS.append(dict(
  id='university-of-bristol', name='University of Bristol', short='Bristol', city='Bristol', region='England',
  type='Public research university', c1='#a9134d', c2='#5f0b2c', initials='BRI', med=True,
  desc='A large research university in south-west England with a broad course range from engineering and medicine to law and the humanities. English requirements are set by course profile, and tuition is charged in published subject bands.',
  programs="['engineering','computer-science','medicine','law','business','humanities','social-sciences','biology','mathematics','psychology','arts']",
  programNote='Each course states an English language profile (A to F) and a fee band, so requirements and cost depend on the subject chosen.',
  website='https://www.bristol.ac.uk/', admissions='https://www.bristol.ac.uk/study/undergraduate/',
  scholarships_url='https://www.bristol.ac.uk/international/fees-finance/scholarships/',
  cost_url='https://www.bristol.ac.uk/students/support/finances/tuition-fees/ug/overseas/26-27/2026-starters/',
  english_url='https://www.bristol.ac.uk/study/language-requirements/',
  interview='Interviews are used for medicine, dentistry, veterinary science and a few other courses.',
  notes="['The English requirement is given as a profile letter on each course page, so check the course before booking a test.']",
  ielts="{ min: null, recommended: null, note: 'Depends on the course. Each course is assigned an English profile; Profile B, one of the common undergraduate levels, requires IELTS Academic 7.0 overall with 7.0 in writing and 6.5 in the other skills. Bristol states an absolute floor of CEFR B2 (IELTS 5.5 in all bands) for any course.' }",
  toefl="{ min: null, recommended: null, scales: [{ period: 'pre2026', min: 95, recommended: null }, { period: 'post2026', min: 5, recommended: null }], note: 'Profile B: TOEFL iBT 95 overall (Reading 22, Listening 21, Speaking 23, Writing 24) for tests up to 20 January 2026, or 5 overall with 5 in writing and 4.5 in other skills from 21 January 2026. Other profiles differ.' }",
  duolingo="{ min: null, recommended: null, note: 'Not confirmed for undergraduate entry during this check.' }",
  waiver='Bristol lists qualifications taught in English that meet the requirement without a test; the list is on the language requirements pages.',
  english_note='Test results must normally be obtained within two years of the course start date. Pearson PTE and Cambridge C1 Advanced / C2 Proficiency are accepted at profile-specific levels.',
  sat_note='Bristol admits on school-leaving qualifications (A-levels, IB and recognised international qualifications) rather than the SAT or ACT.',
  other_tests='Medicine and dentistry require the UCAT; some other courses set additional tests.',
  intl_quals='A published list of accepted international qualifications and grades applies; the required grades are on each course page.',
  costs="""{
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
  }""",
  scholarships="""{
    fullRide: { available: false, internationalEligible: false, basis: null, covers: { tuition: false, housing: false, meals: false, insurance: false, books: false }, renewable: null, competitiveness: null, howToApply: null, note: 'Bristol\\'s international undergraduate awards are partial: the Think Big scholarships reduce tuition but do not cover the whole cost of study.' },
    merit: [
      { name: 'Think Big undergraduate scholarship', amount: '£6,500 or £13,000 a year for up to four years (tuition reduction)', eligibility: 'International (overseas-fee) applicants holding an application for an eligible undergraduate course. Courses in the Bristol Dental School and Bristol Medical School are not eligible.', deadline: 'The round for September 2026 entry opened on 21 October 2025 and closed on 10 April 2026 at 10:00 UK time; the 2027-entry round had not opened when this was checked', application: 'Separate scholarship form after applying for admission', renewable: true, note: 'One form covers the scholarships. Outcomes for the 2026 round were shared in late May 2026.' }
    ],
    needBased: { availableToInternational: null, meetsFullNeed: false, needBlindInternational: null, forms: [], deadlines: null, note: 'Bristol\\'s means-tested bursaries are for home-fee students; a need-based scheme for international undergraduates was not confirmed here.' }
  }""",
  sources="""[
    { label: 'English language requirements and profiles', url: 'https://www.bristol.ac.uk/study/language-requirements/' },
    { label: 'English language Profile B', url: 'https://www.bristol.ac.uk/study/language-requirements/profile-b/' },
    { label: 'Overseas undergraduate tuition fees, 2026/27 starters', url: 'https://www.bristol.ac.uk/students/support/finances/tuition-fees/ug/overseas/26-27/2026-starters/' },
    { label: 'Scholarships for international students', url: 'https://www.bristol.ac.uk/international/fees-finance/scholarships/' }
  ]""",
  checked="['english','tuition','scholarships','rounds','application fee']",
  unconfirmed="['2027/28 tuition rates','need-based aid for international students']"))

out = ''.join(record(r) for r in RECORDS)
p = 'data/universities.uk.js'
s = io.open(p, encoding='utf-8').read()
tail = s.rstrip()[-2:]
assert s.rstrip().endswith(');'), s.rstrip()[-40:]
cut = s.rstrip()[:-2].rstrip()
if cut.endswith('}'):
    cut += ','
io.open(p, 'w', encoding='utf-8').write(cut + '\n' + out + ');\n')
print('appended', len(RECORDS), 'records')
