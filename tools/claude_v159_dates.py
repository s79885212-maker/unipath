# -*- coding: utf-8 -*-
"""Canadian deadlines that were marked confirmed without cycle evidence (91 events).

Each source page was re-read on 27 October 2026 (static HTML, or the rendered page in a
browser where the dates are filled in by script; McMaster through its official deadline
finder, Outside Canada – Level I). Where the page ties the date to the Fall 2027 cycle,
the event gets cycleEvidence with a verbatim excerpt. Where the page prints the date
without a year and names no intake, the event becomes an annual rule: the reading day
does not establish 2027 (DATA_DISPLAY_CONTRACT.md).
"""
import claude_v159 as C
from claude_v159 import L, G

h, rs, t = G.load()
R = lambda uid: C.rec(rs, uid)
E, A = C.evidence, C.annual
MT = dict(time='23:59', tz='MT')

r = R('university-of-toronto')
E(r, 'Recommended early application date', 'page-context', '2027 admissions Deadlines to apply … Arts & Science, U of T St. George (including International Foundation Program) November 7 January 15')
E(r, 'Application deadline (most programmes)', 'page-context', '2027 admissions Deadlines to apply … Arts & Science, U of T St. George (including International Foundation Program) November 7 January 15')
E(r, 'Supporting documents (most programmes)', 'page-context', '2027 admissions Deadlines to submit supporting documentation … Arts & Science, U of T St. George - All other program areas February 1')

r = R('mcgill-university')
for name, shown, q in [('Application deadline', '15 January', 'Other international high schools … DEADLINES Application for admission January 15'),
                       ('Major Entrance Scholarship application and documents', '21 January', 'Major Entrance Scholarship application & documents January 21'),
                       ('Supporting documents', '1 March', 'Supporting documents March 1')]:
    A(r, name, shown, q)

r = R('university-of-alberta')
nb = L('The page heading reads “Timeline for Fall 2027 Applicants” and every date in the table carries its year; the table caption under the heading still says “Fall 2024”.',
       'Заголовок страницы — «Timeline for Fall 2027 Applicants», у каждой даты в таблице указан год; подпись таблицы под заголовком по-прежнему говорит «Fall 2024».')
E(r, 'Entrance award application', 'explicit-date', 'Timeline for Fall 2027 Applicants … January 10, 2027 Entrance Award Application Deadline', note=nb, **MT)
E(r, 'Application deadline (most programmes)', 'explicit-date', 'March 1, 2027 Deadline to submit application for admission for most programs.', note=nb, **MT)
E(r, 'Accept offers made before 1 April', 'explicit-date', 'May 1, 2027 Deadline to accept admission offers made before April 1.', note=nb, **MT)
E(r, 'Outstanding documents for high school students', 'explicit-date', 'August 1, 2027 Deadline to submit outstanding documents for high school students.', note=nb, **MT)

r = R('mcmaster-university')
nm = L('Read in the official deadline finder for applicants from outside Canada (Level I): Engineering, Computer Science and Arts & Science show 15 January 2027; Business and Social Sciences show 1 April 2027.',
       'Прочитано в официальном поиске сроков для поступающих из-за пределов Канады (Level I): Engineering, Computer Science и Arts & Science — 15 января 2027; Business и Social Sciences — 1 апреля 2027.')
q = 'Engineering - International Application Deadline: January 15, 2027. Recommended Early Application Submission: Thursday, November 12, 2026'
E(r, 'Engineering and Computer Science: recommended early submission', 'explicit-date', q, note=nm)
E(r, 'Application deadline: Engineering, Computer Science, Arts & Science', 'explicit-date', q, note=nm)
E(r, 'Application deadline: Humanities, Social Sciences, Business, Life Sciences and other programmes', 'explicit-date', 'Business - International Application Deadline: April 1, 2027', note=nm)

r = R('universite-de-montreal')
prog = 'https://admission.umontreal.ca/programmes/baccalaureat-en-informatique/'
E(r, 'Application deadline (bachelor’s programmes, studies outside Quebec)', 'explicit-date',
  'Vous étudiez (ou avez étudié) à l’université ou hors Québec : 1er février 2027Du 1er août 2026 au 1er février 2027', source=prog,
  note=L('Shown for Automne 2027 on the official programme page (example: Baccalauréat en informatique). The general deadlines page prints 1 February without a year; check the programme page for other programmes.',
         'Показано для Automne 2027 на официальной странице программы (пример: Baccalauréat en informatique). Общая страница сроков печатает 1 февраля без года; для других программ проверяйте страницу программы.'))
E(r, 'French requirement: proof due (example: Baccalauréat en informatique)', 'explicit-date',
  'Vous étudiez (ou avez étudié) à l’université ou hors Québec : 15 février 2027Du 1er août 2026 au 15 février 2027')

r = R('university-of-waterloo')
E(r, 'Application deadline: Engineering (except Architecture)', 'explicit-date', 'Engineering programs (other than Architecture) January 15, 2027 February 1, 2027')
E(r, 'Application deadline: programmes other than Engineering', 'explicit-date', 'Programs other than Engineering February 1, 2027 February 15, 2027')

r = R('western-university')
E(r, 'OUAC application for equal consideration', 'page-context', 'January 2027 … Deadline to submit OUAC application for equal consideration to full-time undergraduate studies January 15')
E(r, 'National Scholarship application (including International President’s Entrance Scholarships)', 'page-context', 'February 2027 … National Scholarship application deadline February 14',
  note=L('The Registrar’s National Scholarship page says the 2027–28 application will be available by mid-November 2026; it still shows the passed 2026–27 deadline of 14 February 2026.',
         'Страница Registrar о National Scholarship сообщает, что заявка 2027–28 появится к середине ноября 2026; на ней ещё указан прошедший срок 2026–27 — 14 февраля 2026.'))

r = R('university-of-ottawa')
E(r, 'Recommended application date', 'explicit-date', 'accepting applications for programs that begin in September 2027 on September 17, 2026. … we recommend that you submit your application before January 15, 2027.')
E(r, 'Documents and test results', 'explicit-date', 'submitting documents and test results, as soon possible, by February 15, 2027, or 30 days after you apply.')

r = R('university-of-calgary')
A(r, 'Prestige Award application (incl. International Entrance Scholarship)', '1 December', 'Dec. 1 Application deadline: Prestige Award for incoming high school students')
A(r, 'Application deadline, including the application fee', '1 March', 'March 1 Application deadline: Fall undergraduate admission')
A(r, 'Supporting documents (unofficial transcripts)', '15 March', 'March 15 Document deadline: Fall undergraduate admission')
A(r, 'Accept an offer dated 1 April or earlier', '1 May', 'May 1 Acceptance deadline: Fall undergraduate admission Deadline to accept fall offer of admission dated April 1 or prior.')

r = R('queens-university')
E(r, 'Recommended OUAC application date to reach the Major Admission Award application', 'explicit-date', 'November 20, 2026 … we strongly recommend applying to Queen’s on OUAC by November 20.')
E(r, 'Major Admission Award application on SOLUS', 'explicit-date', 'December 8, 2026 Deadline to submit the online Major Admission Award (MAA)')
E(r, 'Application deadline: Commerce, Health Sciences and Nursing', 'explicit-date', 'February 1, 2027 Applications are due for first-year full-time programs in Commerce, Health Science and Nursing.')
E(r, 'Application deadline: all other first-year programmes', 'explicit-date', 'March 1, 2027 Applications are due for all first-year full-time programs, except Commerce, Health Sciences, and Nursing.')
E(r, 'All documents, including transcripts and English test scores', 'explicit-date', 'March 31, 2027 Deadline to submit all documents, including transcripts and English test scores.')

r = R('dalhousie-university')
E(r, 'Application deadline: Nursing, Health Sciences, Medical Sciences, Social Work', 'explicit-date', 'September 2027 entry - Program specific deadlines Feb. 15, 2027 Bachelor of Science (Nursing)')
E(r, 'Application deadline: Environmental Design Studies (Architecture)', 'explicit-date', 'March 1, 2027 Bachelor of Environmental Design Studies (Architecture)')
E(r, 'Accept the offer (admission deposit) and prove English proficiency', 'explicit-date', 'September 2027 entry … May 1, 2027 Deadline to accept your offer of admission by paying your admission deposit')

r = R('universite-laval')
A(r, 'Application deadline: quota programmes (medicine, pharmacy, occupational therapy, physiotherapy, sexology, biomedical sciences)', '1 November before the year of entry',
  'est le 1er novembre précédant l’année d’admission visée')
A(r, 'Application deadline: limited-capacity and open bachelor’s programmes', '1 February', 'Programmes à capacité d\'accueil limitée Date limite: 1er février')

r = R('university-of-saskatchewan')
A(r, 'Apply with documents to be considered for USask Entrance Scholarships', '1 December', 'ensure your transcript and other admission documents have been submitted to the Admissions Office by December 1.')
A(r, 'Apply for admission to be eligible for international student awards', '15 February', 'Step 1: Apply for admission by February 15')
E(r, 'International application deadline (Arts and Science)', 'explicit-date', 'Fall September 2027 July 15, 2027 Documents due: Aug. 1, 2027 May 1, 2027 Documents due: June 1, 2027')

r = R('university-of-manitoba')
E(r, 'International Excellence Entrance Scholarship deadline', 'explicit-date', 'Dec. 1, 2026 International Excellence Entrance Scholarship deadline',
  note=L('The same official list labels the 1 March 2027 admission and scholarship deadline “(Fall 2026)”; that label conflicts with its year and is not used here.',
         'В том же официальном списке срок admission и стипендий 1 марта 2027 подписан «(Fall 2026)»; эта подпись противоречит году и здесь не используется.'))

r = R('university-of-guelph')
cal = 'For the 2026-27 calendar year … '
E(r, 'Documents for early admission consideration (students outside Canada)', 'page-context', cal + 'February 1 Deadline for high school students studying outside of Canada to submit documents to be considered for early admission')
E(r, 'Proof of English proficiency (soft deadline)', 'page-context', cal + 'March 1 Deadline for out-of-country applicants to provide proof of English proficiency (soft deadline)')
E(r, 'Application deadline for fall 2027 (high school students outside Canada)', 'page-context', 'May 15 Deadline for high school students studying outside of Canada to apply for fall 2027 entry')
E(r, 'Accept the offer of admission', 'page-context', cal + 'June 1 Deadline for international students studying outside of Canada to accept their offer of admission')

r = R('carleton-university')
E(r, 'Prestige Scholarship application', 'explicit-date', 'This timeline is based on the 2026-2027 academic year. … March 1, 2027 – Deadline to apply for a Prestige Scholarship.')
E(r, 'Programme-specific application deadlines', 'explicit-date', 'March 1, 2027 – Program specific application deadlines*.')
E(r, 'Main application deadline for international students (transcripts from outside Canada or the US)', 'explicit-date', 'April 1, 2027 – Main deadline to apply for international students (whose transcripts originate outside Canada or the US)*.')

r = R('york-university')
E(r, 'Schulich BBA: application deadline', 'page-context', 'Fall 2027 (September) January 15, 2027 … Schulich School of Business (BBA) will not accept applications after the January 15 deadline.')
E(r, 'Direct Entry Nursing application deadline', 'page-context', 'Fall 2027 (September) … Deadlines exceptions: Nursing: Application for Direct Entry Nursing is February 1.')
E(r, 'Application deadline for international students (fall 2027)', 'explicit-date', 'Fall 2027 (September) January 15, 2027 March 24, 2027 March 24, 2027 March 24, 2027')

r = R('concordia-university')
A(r, 'Recommended date for U.S. and international applicants (immigration documents)', '1 February', 'U.S. and international applicants: Apply no later than February 1 to allow time for immigration document processing.')
A(r, 'Application deadline, fall entry', '1 March', 'FALL ENTRY (September) Deadline: March 1')

r = R('memorial-university-of-newfoundland')
A(r, 'Priority deadline for the fall semester (also for early entrance scholarships)', '1 March', 'Fall semester (September to December) Sept. 10 March 1 Aug. 20 Sept. 9')
A(r, 'Document deadline, fall semester', '20 August', 'Fall semester (September to December) Sept. 10 March 1 Aug. 20 Sept. 9')

r = R('university-of-new-brunswick')
A(r, 'Entrance scholarship application (after admission, in the UNB application account)', '1 March', 'Once admitted, sign into your UNB application account and apply for entrance scholarships by March 1.')
A(r, 'Application deadline for most undergraduate programmes', '31 March', 'The deadline to apply for most undergraduate programs is March 31.')

A(R('university-of-windsor'), 'Recommended application date for September admission', '1 May', 'May 1 for September admissions (Fall)')
A(R('university-of-regina'), 'Final application deadline, fall term (all programmes except those listed separately)', '15 August', 'ALL PROGRAMS – FINAL DEADLINE for new applicants, and re-admission deadline for returning students (except those noted below) August 15')

r = R('toronto-metropolitan-university')
E(r, 'Guaranteed consideration date, all programmes (fall 2027)', 'page-context', 'Fall 2027 admission … Guaranteed consideration date for applications to all programs: February 1')
E(r, 'Prestigious entrance scholarships and ISLA – Fall 2027: application on AwardSpring', 'explicit-date', 'The application for fall 2027 awards is available on AwardSpring from November 2, 2026 until the extended deadline to apply, February 16, 2027.')

E(R('brock-university'), 'Application deadline, fall entry (international applicants meeting the English requirement)', 'explicit-date',
  'If a program reaches capacity after the January 15, 2027 application deadline … International students (only applying to Brock and meet English proficiency requirements) … January 15 (Fall entry)',
  note=L('Read on the rendered official page (the static copy is refused to automated readers).', 'Прочитано на отображённой официальной странице (статическая копия недоступна автоматическому чтению).'))

r = R('wilfrid-laurier-university')
E(r, 'Application deadline, fall (September) 2027', 'explicit-date', 'April 1, 2027: The deadline to apply for fall (September) 2027.')
d = C.event(r, 'Inspiring Lives Scholarship application')
d.update({'status': 'not-confirmed', 'entryTerm': None, 'entryYear': None, 'verified': C.DAY, 'time': '23:59', 'timezone': 'EDT',
          'note': G.plain(L('The page prints “Application deadline: Sunday, Nov. 8, 2026 at 11:59 p.m. EDT” for students who have accepted their offer and are entering first year in the fall term, but it does not say which fall. The intake is not established.',
                            'Страница указывает «Application deadline: Sunday, Nov. 8, 2026 at 11:59 p.m. EDT» для студентов, принявших offer и начинающих первый курс осенью, но не уточняет, какой осенью. Набор не установлен.'))})
d.pop('cycleEvidence', None)
C.register(r['id'], 'deadline (intake not established): Inspiring Lives Scholarship application', d['source'], 'Application deadline: Sunday, Nov. 8, 2026 at 11:59 p.m. EDT')

A(R('trent-university'), 'International Prestigious Scholarships application', '15 February', 'Applications for International Prestigious Scholarships open on November 1 and close on February 15 each year.')
E(R('lakehead-university'), 'Recommended application date for international applicants (fall 2027, most programmes)', 'explicit-date',
  'Recommended Deadlines to Apply for Fall 2027 (Full Time & Part Time) Admission: … March 1, 2027 (International Applicants)')

r = R('st-francis-xavier-university')
ns = L('Read on the rendered official page (the static copy is refused to automated readers).', 'Прочитано на отображённой официальной странице (статическая копия недоступна автоматическому чтению).')
E(r, 'Apply for admission, scholarship application and documents for Major Scholarship consideration', 'page-context', 'Application for September 2027 open for admission. … March 2027 March 1 Deadline to apply for admission to StFX to be eligible for Major Scholarship consideration.', note=ns)
E(r, 'Confirm acceptance; room guarantee; accept scholarships', 'page-context', 'May 2027 May 15 Confirm your acceptance to StFX. … Deadline to accept Scholarships.', note=ns)
E(r, 'Deadline for international student applications', 'explicit-date', 'May 30 Deadline for International Student Applications. Applications received after the May 30, 2027, deadline will be reviewed on a case by case basis according to visa processing times.', note=ns)

r = R('mount-allison-university')
p = 'Preparing to apply for 2027-28 academic year … '
E(r, 'Music (BMus, BMusEd) application package', 'page-context', p + 'Feb. 1 BMus and BMusEd APPLICATION DEADLINE')
E(r, 'Fine Arts application and portfolio', 'page-context', p + 'Feb. 15 FINE ARTS APPLICATION AND PORTFOLIO DEADLINE')
E(r, 'Application for admission and scholarships, with all documents, to be considered for scholarships', 'page-context', p + 'March 1 SCHOLARSHIPS APPLICATION DEADLINE To be considered for scholarships: Deadline to submit your application for admission and scholarships, and all required documents.')
E(r, 'Accept the offer of admission and scholarships', 'page-context', p + 'May 1 ACCEPT YOUR OFFER! Deadline to accept your offer of admission and scholarships/bursaries')

E(R('saint-marys-university'), 'Apply for admission (for Admissions Scholarships) and submit the Entrance Awards application', 'explicit-date',
  'Admission applications open for the 2027-2028 academic year … Entrance Awards application opens (due February 15, 2027).')

r = R('bishops-university')
E(r, 'Application deadline for international students (fall 2027); also for Competitive Entrance Scholarships and the Entrance Awards and Bursaries application', 'explicit-date',
  'Fall 2027 Semester: … March 31, 2027: Deadline for international students (except USA Citizens) to submit an application and be considered for Fall entry.')
E(r, 'Supporting documents for international applicants', 'explicit-date',
  'April 15, 2027: Deadline for international students (except USA Citizens) to submit supporting documentation for an undergraduate application and be considered for the Fall entry.')

r = R('university-of-lethbridge')
A(r, 'Early admission and Board of Governors’ Admission Scholarship (up to C$1,000)', '15 December', 'December 15 Early admission application deadline Board of Governors\' scholarship application deadline')
A(r, 'High school awards application', '15 March', 'March 15 High school awards application deadline')
A(r, 'Application deadline for international students', '15 June', 'June 15 Application deadline for international students')

r = R('mount-saint-vincent-university')
q = 'For September 2027 Entrance … Entrance scholarship candidates – March 1, 2027 International undergraduate applicants – May 3, 2027'
E(r, 'Entrance scholarship candidates', 'explicit-date', q)
E(r, 'Application deadline for international undergraduate applicants (September 2027)', 'explicit-date', q)

A(R('thompson-rivers-university'), 'Application deadline, September intake', '1 May', 'International Student Application Deadlines Semester Deadline January October 1 May February 1 September May 1')

r = R('university-of-northern-british-columbia')
E(r, 'Engineering (BASc) application deadline', 'explicit-date', 'Bachelor of Applied Science (Engineering) (BASc) Domestic International September semester March 1, 2027 March 1, 2027')
E(r, 'Health Sciences (BHSc) application deadline', 'explicit-date', 'Bachelor of Health Sciences (BHSc) Domestic International September semester May 15, 2027 May 15, 2027')

r = R('university-of-the-fraser-valley')
A(r, 'Application window for the fall semester closes', '1 June', 'Fall semester: October 1 to June 1')
A(r, 'Full payment to confirm acceptance (fall)', '15 June', 'We must receive your payment in full by the following dates: Fall semester: June 15')

E(R('capilano-university'), 'International Entrance & Performance Award, Fall 2027: complete application', 'explicit-date', 'Fall 2027 term Complete application by November 30, 2026')

r = R('laurentian-university')
A(r, 'Nursing (BScN) application deadline', '1 February', 'Bachelor of Science in Nursing (September entry only) – February 1st')
A(r, 'Application deadline, September start (most programmes)', '15 June', 'September start Application deadline – June 15th')

E(R('universite-du-quebec-a-montreal'), 'Application deadline for international candidates, autumn 2027 (bachelor’s programmes)', 'page-context',
  'IMPORTANT : Informations supplémentaires à l\'attention des candidats internationaux Automne : 1er mars (certains programmes ont une date limite plus hâtive) … DATES LIMITES DES DEMANDES D\'ADMISSION AUX BACCALAURÉATS … AUTOMNE 2027')
A(R('universite-de-sherbrooke'), 'Application deadline for international candidates, autumn term (bachelor’s, certificates)', '15 January', 'Candidat international 15 janvier 1er juin')
A(R('universite-de-moncton'), 'Application deadline for international students, autumn session', '31 May', 'Personnes étudiantes internationales Avant le 31 mai pour la session d’automne')
A(R('university-of-victoria'), 'Application deadline, September entry (most degree programmes)', '31 January', 'Degree programs Most degree programs: January 31')

G.save(h, rs, t)
C.flush_research()
