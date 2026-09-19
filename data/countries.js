/* Country profiles. To add a country: append one object here and create
   data/universities.<code>.js, then add both <script> tags to the pages. */
window.UNIPATH.countries.push(
{
  code: 'us',
  name: 'United States',
  flag: '🇺🇸',
  currency: 'USD',
  tagline: 'The largest range of scholarships and need-based aid anywhere — alongside the highest sticker prices.',
  overview: 'The United States hosts more international undergraduates than any other country. Undergraduate degrees normally take four years, and students usually choose a major after one to two years of broad coursework. Published prices are high, but a handful of wealthy private universities meet the full demonstrated financial need of international students, and many public universities and mid-sized privates award large automatic merit scholarships based on GPA and test scores.',
  applicationInfo: 'Most universities accept the Common Application; a few (such as MIT) run their own portal, and large public systems often use their own forms. Applications typically open in August, with Early Action / Early Decision deadlines around 1 November and Regular Decision deadlines between early January and February. Expect application fees of roughly US$50–$100 per university, with fee waivers widely available.',
  fieldsPopular: ['business', 'computer-science', 'engineering', 'economics', 'psychology'],
  notes: [
    'Need-based aid for international students is rare and concentrated in a small number of wealthy private universities — check each one individually.',
    'Public universities rarely give need-based aid to international students, but many offer automatic merit scholarships tied to GPA and SAT/ACT scores.',
    'Standardized test policies changed repeatedly after 2020. Some universities reinstated SAT/ACT requirements; others remain test-optional. Always check the policy for your entry year.',
    'International students normally need an F-1 visa and must show proof of funds for the full cost of attendance before the university issues an I-20.'
  ],
  sources: [
    { label: 'EducationUSA — official U.S. Department of State advising network', url: 'https://educationusa.state.gov/' },
    { label: 'Study in the States — U.S. Department of Homeland Security', url: 'https://studyinthestates.dhs.gov/' }
  ]
},
{
  code: 'jp',
  name: 'Japan',
  flag: '🇯🇵',
  currency: 'JPY',
  tagline: 'Low tuition by global standards, a growing set of fully English-taught degrees, and government scholarships.',
  overview: 'Japan has expanded English-taught undergraduate degrees substantially over the past fifteen years, so it is now possible to earn a full bachelor\'s degree without Japanese-language ability — though learning Japanese greatly improves daily life and job prospects. National universities charge a standardised, relatively low tuition fee, while private universities charge more but still far less than comparable U.S. institutions. The academic year traditionally starts in April, but most English-taught programmes also offer a September intake.',
  applicationInfo: 'Applications for English-taught programmes are usually document-based and completed online from your home country, often with an online interview. Many universities accept SAT, IB, A-Levels or the EJU (Examination for Japanese University Admission for International Students) as academic evidence. Deadlines vary widely by university and intake — some close almost a year before enrolment.',
  fieldsPopular: ['engineering', 'business', 'social-sciences', 'computer-science', 'humanities'],
  notes: [
    'Check whether a programme is genuinely English-taught end-to-end, or whether Japanese becomes necessary in later years.',
    'The MEXT (Japanese Government) Scholarship is the most generous route: it can cover tuition, a monthly stipend and flights. It is applied for either through a Japanese embassy or through a university recommendation.',
    'JASSO offers smaller monthly stipends to privately financed international students.',
    'Most national universities charge the same standard tuition regardless of nationality; private universities differ substantially.'
  ],
  sources: [
    { label: 'Study in Japan — official government portal', url: 'https://www.studyinjapan.go.jp/en/' },
    { label: 'JASSO — Japan Student Services Organization', url: 'https://www.jasso.go.jp/en/' }
  ]
},
{
  code: 'kr',
  name: 'South Korea',
  flag: '🇰🇷',
  currency: 'KRW',
  tagline: 'Strong engineering and technology universities with unusually large scholarship rates for international students.',
  overview: 'South Korea actively recruits international undergraduates, and a large share receive partial or full tuition scholarships. Several universities run dedicated international colleges taught entirely in English — Yonsei\'s Underwood International College is the best-known example — while science-focused institutions such as KAIST teach most undergraduate courses in English by policy. The academic year starts in March, with a second intake in September.',
  applicationInfo: 'Most universities run their own online application portal and admit international students through a separate "international admissions" track, which is usually less competitive than the domestic track. Applications are document-based: transcripts, proof of language ability, essays and often a study plan. Deadlines for the March intake typically fall between September and November.',
  fieldsPopular: ['engineering', 'computer-science', 'business', 'social-sciences', 'arts'],
  notes: [
    'Language requirements differ sharply: English-taught tracks need IELTS/TOEFL, Korean-taught tracks usually need TOPIK Level 3–4 or higher.',
    'Scholarships are often tiered by entrance grades and can be renewable subject to maintaining a minimum GPA — check the renewal condition carefully.',
    'The Global Korea Scholarship (GKS), run by the Korean government, is the main full-ride route: it covers tuition, a monthly allowance, airfare and a Korean-language year.',
    'Universities are grouped into "international admission" quotas that sit outside the domestic quota, so international requirements can differ from what Korean applicants face.'
  ],
  sources: [
    { label: 'Study in Korea — official government portal', url: 'https://www.studyinkorea.go.kr/en/main.do' },
    { label: 'Global Korea Scholarship (GKS)', url: 'https://www.studyinkorea.go.kr/en/plan/scholarship.do' }
  ]
},
{
  code: 'uk',
  name: 'United Kingdom',
  flag: '🇬🇧',
  currency: 'GBP',
  tagline: 'Three-year degrees, one shared application, and fees published openly by course — with little need-based aid for international students.',
  overview: 'UK bachelor\'s degrees are short and specialised: three years in England, Wales and Northern Ireland, four in Scotland, and you apply to one subject rather than choosing a major later. Every applicant uses the same system, UCAS, and a single £34.50 fee covers up to five universities. International tuition is charged per course, so the same university can charge £22,000 for one degree and £48,000 for another. The trade-off for the shorter degree is that scholarships are smaller and rarer than in the United States — most universities publish partial awards rather than need-based aid.',
  applicationInfo: 'Applications run through UCAS. For 2027 entry, applications could be submitted from 1 September 2026; the deadline is 15 October 2026 for Oxford, Cambridge, medicine, dentistry and veterinary medicine, and 18:00 UK time on 13 January 2027 for everything else — the “equal consideration” deadline, by which universities must treat all applications alike. You write one personal statement for all five choices, and your school supplies one academic reference. Many courses add a subject admissions test, and a few add an interview.',
  fieldsPopular: ['business', 'economics', 'engineering', 'computer-science', 'law'],
  notes: [
    'Need-based aid for international students barely exists. The main exceptions in this database are Oxford\'s Reach Oxford Scholarship and UCL\'s Global Undergraduate Scholarship, and both make only a handful of awards a year.',
    'Tuition is set per course, not per university — always check the fee on the page for your exact degree, and check whether it is fixed for the whole course or rises each year.',
    'You choose your subject when you apply and changing later is difficult, so the choice matters more than it does in the United States.',
    'A Student visa requires proof of money as well as an offer: for 2026 the Home Office asks for £1,529 a month in London or £1,171 outside it, for up to nine months, plus your first year of tuition, held for 28 days in a row.',
    'The Student visa application costs £558 from outside the UK, and the immigration health surcharge is charged separately on top of it.'
  ],
  sources: [
    { label: 'UCAS — official undergraduate application service', url: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications' },
    { label: 'UCAS — application fee for the 2027 cycle', url: 'https://www.ucas.com/faqs/what-is-the-application-fee-for-the-2027-cycle' },
    { label: 'GOV.UK — Student visa: money you need', url: 'https://www.gov.uk/student-visa/money' },
    { label: 'GOV.UK — Student visa', url: 'https://www.gov.uk/student-visa' }
  ]
},
{
  code: 'de',
  name: 'Germany',
  flag: '🇩🇪',
  currency: 'EUR',
  tagline: 'Little or no tuition at public universities — but only a minority of bachelor\u2019s degrees are taught in English, and your school certificate must be recognised.',
  overview: 'Germany is the cheapest major study destination in this database: DAAD states that state universities generally charge no fees for bachelor\u2019s courses, and every student pays only a semester contribution of about \u20ac70 \u2013 \u20ac430. The exceptions are Baden-W\u00fcrttemberg, which charges students from outside the EU \u20ac1,500 a semester, and some Bavarian universities such as TUM and FAU. The catch is language: most bachelor\u2019s degrees are taught in German, and DAAD lists only about 240 bachelor\u2019s programmes taught entirely in English across the whole country. Private universities teach more in English but charge tuition comparable to the UK.',
  applicationInfo: 'You apply to each university directly, often through uni-assist, which checks certificates from outside Germany. For a winter-semester start, bachelor\u2019s applications usually close on 15 July. Before anything else, check whether your school-leaving certificate counts as a German university entrance qualification (HZB) in the DAAD admission database; if it does not, you need a one-year foundation course (Studienkolleg) or some university study in your own country first.',
  fieldsPopular: ['engineering', 'computer-science', 'business', 'economics', 'social-sciences'],
  notes: [
    'Check the DAAD admission database for your country first: without a recognised university entrance qualification you cannot start a bachelor\u2019s degree directly.',
    'Search for English-taught degrees specifically — a university offering a few English programmes usually teaches everything else in German.',
    'A Student visa requires proof of money, usually in a blocked account: the German embassy\u2019s January 2025 leaflet asks for at least \u20ac992 a month, \u20ac11,904 for a year. Check the current figure with your German mission before applying.',
    'DAAD estimates student living costs at \u20ac900 \u2013 \u20ac1,200 a month; the blocked-account amount covers part of that, not all of it.'
  ],
  sources: [
    { label: 'DAAD \u2014 costs of education and living', url: 'https://www.daad.de/en/studying-in-germany/living-in-germany/finances/' },
    { label: 'DAAD \u2014 Studienkollegs and university entrance qualification', url: 'https://www.daad.de/en/studying-in-germany/requirements/studienkollegs/' },
    { label: 'DAAD \u2014 International Programmes database', url: 'https://www2.daad.de/deutschland/studienangebote/international-programmes/en/' },
    { label: 'German Missions in the US \u2014 National Visa for Students (January 2025, PDF)', url: 'https://www.germany.info/resource/blob/2435500/d4beca8da37c3570d38b2bf5e9bdd64c/study-data.pdf' }
  ]
}
);
