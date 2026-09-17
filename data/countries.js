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
}
);
