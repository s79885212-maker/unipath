/* ============================================================
   Admissions updates

   Every entry is copied from an official source (the organisation
   that decides the rule, not a news site). Nothing here is written
   from memory: if a date could not be confirmed on the source, the
   field stays null and the site says so.

   published  — the date the source published the item, null if the
                source does not state one
   verified   — the date this entry was last checked against the source
   eventDate  — the date of the event itself (opening, deadline), only
                when the source gives an exact date
   deadline   — true when eventDate is a cut-off, so the entry can be
                archived automatically once it has passed
   ============================================================ */
window.UNIPATH.news = [
  {
    id: 'commonapp-2026-27-open',
    type: 'applications-open',
    country: 'us',
    org: 'Common App',
    title: 'Common App opened the 2026–27 application',
    summary: 'The Common Application for first-year entry in autumn 2027 is open. Accounts roll over, so essays and answers written before 1 August are kept. More than 1,000 member colleges accept it, including every US university listed here.',
    url: 'https://www.commonapp.org/blog/common-app-opens-application-launch-2026-27-season/',
    published: '2026-07-31',
    verified: '2026-09-23',
    eventDate: '2026-08-01',
    deadline: false
  },
  {
    id: 'ucas-2027-open',
    type: 'applications-open',
    country: 'uk',
    org: 'UCAS',
    title: 'UCAS applications for 2027 entry are open',
    summary: 'UCAS opened applications for 2027 entry on 12 May 2026. All UK universities on this site take applications through UCAS, and an application can hold up to five choices.',
    url: 'https://www.ucas.com/applying/applying-to-university/dates-and-deadlines-for-uni-applications',
    published: null,
    verified: '2026-09-23',
    eventDate: '2026-05-12',
    deadline: false
  },
  {
    id: 'ucas-2027-oct-deadline',
    type: 'deadline',
    country: 'uk',
    org: 'UCAS',
    title: 'Oxford, Cambridge and medicine: UCAS deadline 15 October 2026',
    summary: 'Applications for any 2027 entry course at Oxford or Cambridge, and for most courses in medicine, dentistry and veterinary medicine, must reach UCAS by 18:00 UK time on 15 October 2026 to be given equal consideration.',
    url: 'https://www.ucas.com/events/2027-entry-deadline-for-the-universities-of-oxford-and-cambridge-and-most-courses-in-medicine-475536',
    published: null,
    verified: '2026-09-23',
    eventDate: '2026-10-15',
    deadline: true
  },
  {
    id: 'ucas-2027-jan-deadline',
    type: 'deadline',
    country: 'uk',
    org: 'UCAS',
    title: 'Equal consideration deadline for 2027 entry: 13 January 2027',
    summary: 'Applications for all other 2027 entry undergraduate courses must reach UCAS by 18:00 UK time on 13 January 2027. Universities must consider everything received by then equally; later applications are read only if places remain.',
    url: 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546',
    published: null,
    verified: '2026-09-23',
    eventDate: '2027-01-13',
    deadline: true
  },
  {
    id: 'gks-2027-undergraduate',
    type: 'scholarship',
    country: 'kr',
    org: 'NIIED — Study in Korea',
    title: 'Global Korea Scholarship 2027 for undergraduate degrees announced',
    summary: 'The Korean government published the application guidelines for the 2027 Global Korea Scholarship for undergraduate degrees, together with the list of eligible universities and departments. Applications go either through the Korean embassy in your country or through a designated university, and each track has its own deadline inside the guidelines.',
    url: 'https://www.studyinkorea.go.kr/ko/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4522',
    published: '2026-09-09',
    verified: '2026-09-23',
    eventDate: null,
    deadline: false
  },
  {
    id: 'mext-2027-undergraduate',
    type: 'scholarship',
    country: 'jp',
    org: 'MEXT — Study in Japan',
    title: 'MEXT scholarship 2027: undergraduate guidelines published',
    summary: 'MEXT published the 2027 application guidelines for the Embassy Recommendation track. Recruitment for students arriving in Japan in April is run between April and May of the previous year, and embassies carry out the first screening between May and August. Exact dates and documents differ by country, so the embassy in your country is the place to check.',
    url: 'https://www.studyinjapan.go.jp/en/smap-stopj-applications-undergraduate.html',
    published: '2026-04-20',
    verified: '2026-09-23',
    eventDate: null,
    deadline: false
  },
  {
    id: 'toefl-score-scale-2026',
    type: 'requirement-change',
    country: 'all',
    org: 'ETS',
    title: 'TOEFL iBT moved to a 1–6 score scale',
    summary: 'From 21 January 2026 TOEFL iBT reports use a 1–6 scale in half-point steps, aligned to the CEFR, with the overall score the average of the four sections. For two years reports also carry a comparable 0–120 score, which is why many universities now publish two sets of minimum scores.',
    url: 'https://www.ets.org/toefl/institutions/ibt/score-scale-update.html',
    published: null,
    verified: '2026-09-23',
    eventDate: '2026-01-21',
    deadline: false
  },
  {
    id: 'fau-tuition-2027',
    type: 'requirement-change',
    country: 'de',
    org: 'FAU Erlangen-Nürnberg',
    uniId: 'fau-erlangen-nurnberg',
    title: 'FAU introduces tuition for new non-EU students from summer semester 2027',
    summary: 'Students from outside the EU who enrol at FAU from summer semester 2027, or who change subject then, pay tuition each semester: €1,000, €2,000 or €3,000 for a bachelor’s degree, depending on the programme. EU and EEA citizens, holders of a German university entrance qualification and several other groups are exempt.',
    url: 'https://www.fau.eu/studying/international-students/application-and-enrollment-for-international-applicants/tuition-fees-for-students-from-non-eu-states/',
    published: null,
    verified: '2026-09-23',
    eventDate: null,
    eventText: 'Summer semester 2027',
    deadline: false
  }
];
