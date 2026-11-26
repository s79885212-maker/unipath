# -*- coding: utf-8 -*-
# Readings for tools/claude_us_deadlines2027.py (executed inside it). One block per profile.
GEN = L('First-year applicants', 'Абитуриенты первого курса')
FYI = L('International first-year applicants', 'Иностранные абитуриенты первого курса')

s = 'https://enroll.slu.edu/admission/freshman/deadlines.php'
q = 'Apply to Summer or Fall 2027'
U('saint-louis-university', [
    C(EDI, 'ED', '2026-11-02', s, q + ' … Early Decision I Application Deadline (binding): Nov. 2', 'page-context', GEN, True,
      L('Binding. Notification begins 1 December.', 'Обязывающая подача. Решения — с 1 декабря.')),
    C(EA, 'EA', '2026-12-01', s, q + ' … Early Action Application Deadline (non-binding): Dec. 1', 'page-context', GEN, False,
      L('Non-binding. Notification by 1 February. The Scholars Programs application deadline is also 1 December.',
        'Необязывающая подача. Решение — до 1 февраля. Срок заявки на Scholars Programs — тоже 1 декабря.')),
    C(EDII, 'ED2', '2027-01-19', s, q + ' … Early Decision II Application Deadline (binding): Jan. 19', 'page-context', GEN, True,
      L('Binding. Notification begins 1 February.', 'Обязывающая подача. Решения — с 1 февраля.')),
    C(RD, 'RD', '2027-04-01', s, q + ' … Regular Decision Application Deadline (non-binding): Preferred by April 1', 'page-context', GEN, False,
      L('Preferred date: the university keeps accepting applications and awarding scholarships while space is available.',
        'Предпочтительный срок: вуз продолжает принимать заявки и назначать стипендии, пока есть места.')),
], keep=())

s = 'https://www.augustana.edu/admissions/apply/international/procedure'
q = 'It is available now for students entering in spring 2027 or fall 2027.'
U('augustana-college-illinois', [
    C(ED, 'ED', '2026-11-01', s, 'Early Decision: Nov. 1 (binding, fall enrollment only) … ' + q, 'page-context', FYI, True,
      L('Fall entry only. Supporting materials due 15 November, decision by 1 December, deposit due 20 December. Requires an admissions interview and a signed Early Decision Agreement.',
        'Только осенний набор. Документы — до 15 ноября, решение — до 1 декабря, депозит — до 20 декабря. Нужны собеседование и подписанное соглашение Early Decision.')),
    C(EA, 'EA', '2026-11-15', s, 'Early Action: Nov. 15 (non-binding, fall enrollment only) … ' + q, 'page-context', FYI, False,
      L('Fall entry only. Supporting materials due 20 November, decision by 18 December, deposit due 1 May.',
        'Только осенний набор. Документы — до 20 ноября, решение — до 18 декабря, депозит — до 1 мая.')),
    C(RD, 'RD', '2027-04-01', s, 'Regular Decision: April 1 (fall enrollment) … ' + q, 'page-context', FYI, False,
      L('Decisions on a rolling basis from early January; deposit due 1 May.', 'Решения по мере рассмотрения с начала января; депозит — до 1 мая.')),
])

s = 'https://www.csun.edu/international-first-time-freshman'
U('cal-state-northridge', [
    A(L('Fall application window closes', 'Окно подачи на осень закрывается'), 'admission', '31 May', s, 'Fall Admission Application Deadline - Oct. 1 to May 31', FYI,
      conditions=L('The application opens 1 October.', 'Подача открывается 1 октября.'),
      note=L('The international page prints these dates without a year. The general Fall 2027 dates page says international applicants may have different deadlines, so its dates are not used here.',
             'Международная страница печатает эти даты без года. Общая страница сроков Fall 2027 пишет, что у иностранцев сроки могут отличаться, поэтому её даты здесь не используются.')),
    A(L('Documents deadline — fall', 'Срок документов — осень'), 'documents', '15 June', s, 'Fall Admission … Document Deadline - June 15', FYI),
])

s = 'https://www.bw.edu/undergraduate-admission/important-dates/'
U('baldwin-wallace-university', [
    C(PRI, 'priority', '2026-11-01', s, 'Fall 2027 Start … November 1, 2026 First-year priority application deadline that gives students additional consideration for admission and scholarships.', 'explicit-date', GEN, False,
      L('Gives additional consideration for admission and scholarships. Decisions come on a rolling basis, usually two to four weeks after the file is complete.',
        'Даёт дополнительное внимание при приёме и стипендиях. Решения приходят по мере рассмотрения, обычно через 2–4 недели после полного комплекта документов.')),
    C(L('Priority enrolment deposit', 'Приоритетный депозит за место'), 'deposit', '2027-05-01', s, 'May 1, 2027 Priority deposit deadline to enroll at BW for fall 2027.', 'explicit-date', GEN, False,
      L('Deposits are refundable until this date but not after it.', 'Депозит возвращается до этой даты, после — нет.')),
    C(FIN, 'admission', '2027-08-23', s, 'August 23, 2027 The start of classes. First-year application and transfer application deadline for fall 2027 enrollment.', 'explicit-date', GEN, False,
      L('The day classes start. International applicants need time for the visa, so applying this late is not realistic for them.',
        'День начала занятий. Иностранцу нужно время на визу, поэтому подавать так поздно нереально.')),
])

s = 'https://berry.edu/admission/how-to-apply/international'
q = 'Admission Option Application Deadline Financial Aid Deadline Notification Date Deposit Deadline Early Action Nov. 1 Jan. 15 Begins Dec. 1 May 1 Regular Decision Jan. 15 Jan. 15 Begins Mar. 1 May 1'
U('berry-college', [
    A(EA, 'EA', '1 November', s, q, FYI, False, L('Decisions begin 1 December; financial aid deadline 15 January; deposit due 1 May.', 'Решения — с 1 декабря; срок заявки на помощь — 15 января; депозит — до 1 мая.')),
    A(RD, 'RD', '15 January', s, q, FYI, False, L('Decisions begin 1 March; financial aid deadline 15 January; deposit due 1 May.', 'Решения — с 1 марта; срок заявки на помощь — 15 января; депозит — до 1 мая.')),
])

s = 'https://www.humboldt.edu/international-students/fall-dates-deadlines'
U('cal-poly-humboldt', [
    A(PRI, 'priority', '1 February', s, 'February 1 Priority application and document deadline Priority application deadline for Fall admission.', FYI,
      conditions=L('Applications and documents. Applying early gives an earlier decision and more time for the visa.', 'Заявка и документы. Ранняя подача даёт более раннее решение и больше времени на визу.')),
    A(FIN, 'admission', '1 April', s, 'April 1 Final Application Deadline Final date to apply for fall admission.', FYI),
    A(DOCS, 'documents', '15 April', s, 'April 15 Application document/file completion deadline All required documents must be received.', FYI,
      conditions=L('Incomplete applications are withdrawn. Scanned transcripts and test scores are accepted for the decision; official ones are due by 15 July.',
                   'Неполные заявки снимаются. Для решения принимают сканы аттестатов и результатов тестов; официальные — до 15 июля.')),
    A(L('Accept the offer and pay the deposit', 'Принять предложение и внести депозит'), 'reply', '15 May', s, 'May 15 Final deadline to accept admission', FYI),
])

s = 'https://enrollmentmanagement.baruch.cuny.edu/undergraduate-admissions/how-to-apply/'
U('baruch-college', [
    A(PRI, 'priority', '1 December', s, 'Fall Admission … Freshman/Transfer International Applicant … December 1 (Application Deadline) December 15 (Supporting Documents) Rolling Admissions January – July', FYI,
      conditions=L('Priority date for the application; supporting documents by 15 December. Baruch admits on a rolling basis, with decisions from January to July.',
                   'Приоритетный срок заявки; документы — до 15 декабря. Baruch принимает по мере рассмотрения, решения — с января по июль.')),
])

s = 'https://charleston.edu/admission/apply/international/index.php'
h = 'Undergraduate (First-Year) - Fall Semester 2027 … '
U('college-of-charleston', [
    C(EDI, 'ED', '2026-11-02', s, h + 'November 2 Early Decision 1 Deadline (binding)', 'page-context', FYI, True,
      L('Binding. Decisions in early December; enrolment deposit due 5 January.', 'Обязывающая подача. Решения — в начале декабря; депозит — до 5 января.')),
    C(EA, 'EA', '2026-11-02', s, h + 'November 2 … Early Action Deadline (non-binding)', 'page-context', FYI, False,
      L('Non-binding. Decisions in mid-December; deposit due 1 May.', 'Необязывающая подача. Решения — в середине декабря; депозит — до 1 мая.')),
    C(EDII, 'ED2', '2027-01-15', s, h + 'January 15 Early Decision 2 Deadline (binding)', 'page-context', FYI, True,
      L('Binding. Decisions in early March; deposit due 15 March.', 'Обязывающая подача. Решения — в начале марта; депозит — до 15 марта.')),
    C(RD, 'RD', '2027-01-15', s, h + 'January 15 Regular Decision Deadline', 'page-context', FYI, False,
      L('Decisions in mid-March; deposit due 1 May.', 'Решения — в середине марта; депозит — до 1 мая.')),
])

s = 'https://www.csuchico.edu/admissions/international/index.shtml'
U('chico-state', [
    A(L('Fall application window closes', 'Окно подачи на осень закрывается'), 'admission', '1 May', s, 'Chico State Application Periods … Fall (August Start) August 1–May 1', FYI,
      conditions=L('Application through Cal State Apply; the window opens 1 August. Late applications may be accepted case by case.',
                   'Подача через Cal State Apply; окно открывается 1 августа. Поздние заявки могут принять в отдельных случаях.'),
      note=L('The international page prints this window without a year. The Fall 2027 window on the general dates page (to 15 December 2026) is for US students.',
             'Международная страница печатает это окно без года. Окно Fall 2027 на общей странице сроков (до 15 декабря 2026) — для студентов из США.')),
])

s = 'https://calvin.edu/admissions/international/process'
q = 'Deadlines for starting fall semester: Student type Apply by: Deposit by: International Students April 1 June 1'
U('calvin-university', [
    A(APP, 'admission', '1 April', s, q, FYI, conditions=L('The university recommends applying, sending documents and paying the deposit as early as possible because of visa processing times.',
                                                         'Вуз советует подавать заявку, документы и депозит как можно раньше из-за сроков оформления визы.')),
    A(L('Enrolment deposit', 'Депозит за место'), 'deposit', '1 June', s, q, FYI),
])

s = 'https://www.csbsju.edu/admission/apply/application-timeline/'
q = 'Admission Milestone Early Action I* Early Action II* Regular Decision Priority Deadline 11/1 12/1 1/15'
EAI, EAII = L('Early Action I', 'Early Action I (ранняя подача)'), L('Early Action II', 'Early Action II (ранняя подача)')
for uid in ('college-of-saint-benedict', 'saint-johns-university-minnesota'):
    U(uid, [
        A(EAI, 'EA', '1 November', s, q, GEN, False, L('Non-binding. Admission and scholarship response by 1 December; reply by 1 May.', 'Необязывающая подача. Ответ о приёме и стипендии — до 1 декабря; решение студента — до 1 мая.')),
        A(EAII, 'EA', '1 December', s, q, GEN, False, L('Non-binding. Admission and scholarship response by 5 January; reply by 1 May.', 'Необязывающая подача. Ответ о приёме и стипендии — до 5 января; решение студента — до 1 мая.')),
        A(RD, 'RD', '15 January', s, q, GEN, False, L('Priority date. Applications received later are reviewed on a rolling basis.', 'Приоритетный срок. Более поздние заявки рассматриваются по мере поступления.')),
    ])

s = 'https://www.dominican.edu/admissions/undergraduate-first-year-admissions'
U('dominican-university-of-california', [
    A(PRI, 'priority', '1 February', s, 'Application Deadlines for all Majors (Except Nursing) … Fall Priority February 1', GEN,
      conditions=L('All majors except Nursing. Admission is rolling until the class is full; a deadline on a weekend or holiday moves to the next business day.',
                   'Все направления, кроме Nursing. Приём идёт по мере рассмотрения, пока есть места; срок в выходной переносится на следующий рабочий день.')),
    A(L('Early Decision — BS in Nursing', 'Early Decision — BS in Nursing'), 'ED', '1 November', s, 'Application Deadlines for Nursing Majors … Application Deadline November 1', 
      L('First-year applicants to the BS in Nursing', 'Абитуриенты первого курса на BS in Nursing'), True),
])

ROLL = L('Rolling admission', 'Приём по мере поступления')
NOFIX = L('No fixed application deadline', 'Нет фиксированного срока подачи')

s = 'https://admissions.appstate.edu/apply/international-student'
U('appalachian-state-university', [
    A(L('Priority date for scholarships', 'Приоритетный срок для стипендий'), 'priority', '15 November', s,
      'Fall first-year applicants should Apply by Nov. 15 and submit all supplemental materials by Nov. 30 to guarantee consideration for most university scholarships.', FYI,
      conditions=L('Apply by this date and send supplemental materials by 30 November to be considered for most university scholarships. Applications are reviewed on a rolling basis, with decisions two to four weeks after the file is complete.',
                   'Подайте заявку к этой дате и дополнительные материалы — до 30 ноября, чтобы участвовать в большинстве стипендий вуза. Заявки рассматриваются по мере поступления, решение — через 2–4 недели после полного комплекта.')),
])

s = 'https://www.dordt.edu/admissions-and-aid/apply-now/international-applicant'
U('dordt-university', [
    A(L('Preferred application deadline', 'Предпочтительный срок подачи'), 'priority', '1 April', s,
      'For the fall semester, the preferred deadline is April 1, although maximum financial aid consideration is given to applicants who are admitted prior to January 15.', FYI,
      conditions=L('There is no hard deadline; apply at least three months before the semester. Applicants admitted before 15 January get the most financial aid consideration.',
                   'Жёсткого срока нет; подавайте минимум за три месяца до начала семестра. Принятые до 15 января получают наибольшее внимание при распределении помощи.')),
])

s = 'https://www.susqu.edu/admission/apply/deadlines-requirements/'
U('susquehanna-university', [
    A(L('Early Action 1', 'Early Action 1 (ранняя подача)'), 'EA', '1 November', s, 'Early Action 1 Nov. 1 — Early Action 1 admission application deadline', GEN, False,
      L('Notification 1 December; deposit due 1 May.', 'Решение — 1 декабря; депозит — до 1 мая.')),
    A(ED, 'ED', '15 November', s, 'Early Decision Nov. 15 — Early Decision admission application deadline', GEN, True,
      L('Notification 1 December; deposit due 15 February.', 'Решение — 1 декабря; депозит — до 15 февраля.')),
    A(L('Early Action 2', 'Early Action 2 (ранняя подача)'), 'EA', '1 December', s, 'Early Action 2 Dec. 1 — Early Action 2 admission application deadline', GEN, False,
      L('Notification 15 January; deposit due 1 May.', 'Решение — 15 января; депозит — до 1 мая.')),
    A(RD, 'RD', '1 February', s, 'Regular Decision Feb. 1 — Regular Decision admission application deadline', GEN, False,
      L('Notification 1 March; deposit due 1 May.', 'Решение — 1 марта; депозит — до 1 мая.')),
    A(L('International priority deadline — fall', 'Приоритетный срок для иностранцев — осень'), 'priority', '1 March', s,
      'International Student Admission March 1 — Fall (Aug.) semester priority application deadline', FYI),
])

s = 'https://www.rockhurst.edu/admissions/international'
U('rockhurst-university', [
    A(APP, 'admission', '1 June', s, 'Application materials should be submitted by June 1 for fall admission and November 1 for spring admission.', FYI),
])

s = 'https://admissions.tcnj.edu/applications/international-applicants/'
U('the-college-of-new-jersey', [
    A(ED, 'ED', '1 November', s, 'Early Decision** Application Deadline: November 1 Supporting Documents Deadline: November 15 Notification of Decision: December 1', FYI, True,
      L('Binding. Supporting documents by 15 November; decision 1 December.', 'Обязывающая подача. Документы — до 15 ноября; решение — 1 декабря.')),
    A(EA, 'EA', '1 November', s, 'Early Action Application Deadline: November 1 Supporting Documents Deadline: November 15 Notification of Decision: January 15', FYI, False,
      L('Supporting documents by 15 November; decision 15 January.', 'Документы — до 15 ноября; решение — 15 января.')),
    A(L('Fall (general) admission', 'Осенний основной набор'), 'RD', '1 February', s,
      'Fall (General) Admission Application Deadline: February 1 Supporting Documents Deadline: February 15 Notification of Decision: No later than April 1*', FYI, False,
      L('Supporting documents by 15 February; decision no later than 1 April.', 'Документы — до 15 февраля; решение — не позже 1 апреля.')),
])

s = 'https://www.uu.edu/admissions/undergraduate/international/'
U('union-university-tennessee', [
    A(ROLL, 'rolling', NOFIX, s, 'Union uses a rolling admissions policy, which means applications are reviewed and admission decisions are made on a regular basis beginning each September.', FYI,
      note=L('No dated cutoff is published. The university asks international applicants to apply early enough to have a student visa before orientation.',
             'Срок с датой не опубликован. Вуз просит иностранцев подавать заранее, чтобы успеть получить визу до ориентации.')),
])

s = 'https://www.gvsu.edu/admissions/international-application-14'
U('grand-valley-state-university', [
    A(APP, 'admission', '1 June', s, 'Undergraduate Application Deadlines Application Deadline: Deadline to Submit Financial Verification Form for I-20: Fall Semester (August) June 1 July 1', FYI,
      conditions=L('All materials must arrive by 11:59 p.m. (EST) on the deadline. The financial verification form for the I-20 is due 1 July.',
                   'Все материалы должны прийти до 23:59 (EST) в день срока. Форма финансового подтверждения для I-20 — до 1 июля.')),
])

s = 'https://home.hamptonu.edu/admissions/freshmen/'
U('hampton-university', [
    C(EA, 'EA', '2026-11-15', s, 'Applications must be completed by November 15, 2026, to be eligible for an Early Action decision for Fall 2027.', 'explicit-date', GEN, False,
      L('The application must be complete by this date.', 'К этой дате заявка должна быть полной.')),
    C(RD, 'RD', '2027-03-01', s, 'Applications must be completed by March 1, 2027, to be eligible for a Regular Decision for Fall 2027.', 'explicit-date', GEN, False,
      L('The application must be complete by this date.', 'К этой дате заявка должна быть полной.')),
])

s = 'https://www.highpoint.edu/admissions/freshmen-admissions/'
si = 'https://www.highpoint.edu/admissions/international-students/'
U('high-point-university', [
    A(EDI, 'ED', '1 November', si, 'Application Deadlines Early Decision (Priority 1, *BINDING): November 1', FYI, True),
    C(EA, 'EA', '2026-12-05', 'https://www.highpoint.edu/', 'Early Action deadline: December 5, 2026 at 11:59 PM Eastern.', 'explicit-date', GEN, False,
      time='23:59', tz='ET', note=L('The international applicants page still lists 15 November without a year; the university home page gives 5 December 2026.',
                                   'Страница для иностранцев всё ещё указывает 15 ноября без года; главная страница вуза — 5 декабря 2026.')),
    C(EDII, 'ED2', '2027-02-01', s, 'Early Decision II Deadline February 1, 2027 Admission Response March 1, 2027', 'explicit-date', GEN, True,
      L('Binding. Admission response 1 March 2027.', 'Обязывающая подача. Ответ — 1 марта 2027.')),
    C(RD, 'RD', '2027-02-01', s, 'Regular Decision Deadline February 1, 2027 Admission Response March 1, 2027', 'explicit-date', GEN, False,
      L('Admission response 1 March 2027. Offers are made only if space is available; the international page names 1 March as the final Regular Decision date.',
        'Ответ — 1 марта 2027. Предложения делаются только при наличии мест; страница для иностранцев называет 1 марта последним сроком Regular Decision.')),
])

s = 'https://hope.edu/admissions/apply.html'
h = 'The Fall 2027 Application is LIVE! … '
U('hope-college', [
    C(EAI, 'EA', '2026-11-01', s, h + 'November 1 Early Action I Deadline Early December First wave of admissions decisions released', 'page-context', GEN, False,
      L('Decisions in early December.', 'Решения — в начале декабря.')),
    C(EAII, 'EA', '2026-12-15', s, h + 'December 15 Early Action II Deadline After December 15, we process applications and mail decisions on a rolling basis.', 'page-context', GEN, False,
      L('Decisions on 14 January. Later applications are decided on a rolling basis.', 'Решения — 14 января. Более поздние заявки рассматриваются по мере поступления.')),
    C(L('Merit scholarship application deadline', 'Срок заявки на стипендию за успехи'), 'scholarship', '2027-02-01', s, h + 'February 1 Hope’s merit scholarship application deadline.', 'page-context', GEN, None,
      L('The application must be complete by this date to guarantee consideration.', 'К этой дате заявка должна быть полной, чтобы её гарантированно рассмотрели.')),
])

s = 'https://www.geneseo.edu/admissions/apply/'
U('suny-geneseo', [
    A(EA, 'EA', '15 November', s, 'Application Deadlines Early Action: November 15 for fall admission (N/A for spring)', GEN, False,
      L('Fall entry only. Decisions on 15 December.', 'Только осенний набор. Решения — 15 декабря.')),
    A(L('Preferred first-year deadline', 'Предпочтительный срок для первокурсников'), 'priority', '1 March', s,
      'First-Year: Preferred March 1 for fall admission, Dec. 1 for spring', GEN, False,
      L('Decisions from early March, then on a rolling basis.', 'Решения — с начала марта, затем по мере рассмотрения.')),
])

s = 'https://www.wheaton.edu/admissions-cost-and-aid/undergraduate-admissions/apply-to-wheaton'
q = 'First-year Admission Application Deadlines Admission Round Application Due Supplemental Items Sent by Decision Notification by Reply-by Date '
RDI, RDII = L('Regular Decision I', 'Regular Decision I (основная подача)'), L('Regular Decision II', 'Regular Decision II (основная подача)')
U('wheaton-college-illinois', [
    A(EAI, 'EA', '15 October', s, q + 'Early Action I October 15 October 22 Thanksgiving May 1', GEN, False,
      L('Supplemental items by 22 October; decision by Thanksgiving; reply by 1 May.', 'Дополнительные материалы — до 22 октября; решение — ко Дню благодарения; ответ — до 1 мая.')),
    A(EAII, 'EA', '15 November', s, q + 'Early Action II November 15 November 22 Christmas May 1', GEN, False,
      L('Supplemental items by 22 November; decision by Christmas; reply by 1 May.', 'Дополнительные материалы — до 22 ноября; решение — к Рождеству; ответ — до 1 мая.')),
    A(RDI, 'RD', '15 January', s, q + 'Regular Decision I January 15 January 22 March 1 May 1', GEN, False,
      L('Supplemental items by 22 January; decision by 1 March; reply by 1 May.', 'Дополнительные материалы — до 22 января; решение — до 1 марта; ответ — до 1 мая.')),
    A(RDII, 'RD', '15 February', s, q + 'Regular Decision II February 15 February 22 April 1 May 1', GEN, False,
      L('Supplemental items by 22 February; decision by 1 April; reply by 1 May. After this, rolling admission while space is available.',
        'Дополнительные материалы — до 22 февраля; решение — до 1 апреля; ответ — до 1 мая. Дальше — приём по мере поступления, пока есть места.')),
])

s = 'https://www.austincollege.edu/admission/apply/'
U('austin-college', [
    A(EAI, 'EA', '1 November', s, 'Freshman Application Deadlines … Early Action I Submit by Nov 1 Notification – Dec 15', GEN, False,
      L('Non-binding priority consideration for admission and merit scholarships. Notification 15 December.', 'Необязывающее приоритетное рассмотрение для приёма и стипендий. Решение — 15 декабря.')),
    A(EAII, 'EA', '1 February', s, 'Early Action II Submit by Feb 1* Notification – Mar 1', GEN, False,
      L('Notification 1 March. Also the priority date for additional institutional and fine-arts scholarships.', 'Решение — 1 марта. Это же приоритетный срок для дополнительных стипендий вуза и стипендий по искусству.')),
    A(RD, 'RD', '1 March', s, 'Regular Decision Submit by Mar 1 Notification – Apr 1 … the Office of Admission is unable to review any applications for Fall entry received from international students after March 1.', FYI, False,
      L('Notification 1 April. Fall applications from international students received after 1 March are not reviewed.', 'Решение — 1 апреля. Заявки иностранцев на осень, полученные после 1 марта, не рассматриваются.')),
])

s = 'https://www.elmhurst.edu/admission/international-students/admission-requirements/first-year/'
U('elmhurst-university', [
    A(L('Fall application window closes', 'Окно подачи на осень закрывается'), 'admission', '1 May', s,
      'Fall Admission Schedule Apply between September 1 and May 1, or until all spaces are filled', FYI,
      conditions=L('Applications open 1 September and may close earlier if all places are filled. Financial documents are collected between 1 March and 1 June.',
                   'Подача открывается 1 сентября и может закрыться раньше, если места заполнены. Финансовые документы собирают с 1 марта по 1 июня.')),
])

s = 'https://www.loyno.edu/admissions/how-apply/first-year-students/first-year-applicants'
U('loyola-university-new-orleans', [
    A(EA, 'EA', '15 November', s, 'NOVEMBER 15 Early Action Deadline.', GEN, False,
      L('Early evaluation of the application and of financial aid information.', 'Раннее рассмотрение заявки и сведений о финансовой помощи.')),
    A(L('Priority deadline for scholarships', 'Приоритетный срок для стипендий'), 'priority', '15 February', s,
      'FEBRUARY 15 Priority Deadline. If you apply by February 15, you’ll be considered for all scholarship and financial aid packages.', GEN),
    A(L('Regular deadline', 'Основной срок'), 'RD', '15 April', s,
      'APRIL 15 Regular Deadline. If you apply after April 15, your application will be considered as space and funds are available.', GEN, False,
      L('Later applications are considered as space and funds allow; deposit due 1 May.', 'Более поздние заявки рассматриваются при наличии мест и средств; депозит — до 1 мая.')),
])

s = 'https://www.bryant.edu/undergraduate/undergraduate-admission/applying-bryant/international-students'
q = 'Your deadlines are the same as those for domestic applicants: Application Round Application Deadline Decision Notification Enrollment Deadline Early Decision I Early Action Early Decision II Regular Decision November 1 November 15 January 15 February 1 Early December Mid-January Mid-February Mid-March January 2 May 1 March 15 May 15'
U('bryant-university', [
    A(EDI, 'ED', '1 November', s, q, FYI, True, L('Binding. Decision in early December; enrolment deadline 2 January.', 'Обязывающая подача. Решение — в начале декабря; подтверждение места — до 2 января.')),
    A(EA, 'EA', '15 November', s, q, FYI, False, L('Decision in mid-January; enrolment deadline 1 May.', 'Решение — в середине января; подтверждение места — до 1 мая.')),
    A(EDII, 'ED2', '15 January', s, q, FYI, True, L('Binding. Decision in mid-February; enrolment deadline 15 March.', 'Обязывающая подача. Решение — в середине февраля; подтверждение места — до 15 марта.')),
    A(RD, 'RD', '1 February', s, q, FYI, False, L('Decision in mid-March; enrolment deadline 15 May.', 'Решение — в середине марта; подтверждение места — до 15 мая.')),
])

s = 'https://csumb.edu/international/important-dates/'
pn = L('The international dates page still shows the Fall 2026 timeline (all dates tentative); Fall 2027 dates have not been published there yet.',
       'Страница сроков для иностранцев всё ещё показывает график Fall 2026 (все даты предварительные); сроки Fall 2027 там пока не опубликованы.')
U('cal-state-monterey-bay', [
    P(PRI, 'priority', '2026-03-01', s, 'Undergraduate Students Fall 2026 … Priority application due March 1, 2026', note=pn),
    P(FIN, 'admission', '2026-06-01', s, 'Final application deadline June 1, 2026', note=pn),
])

s = 'https://erau.edu/admissions/international-admissions/international-students'
U('embry-riddle-daytona-beach', [
    A(L('Fall application deadline — Daytona Beach campus', 'Срок подачи на осень — кампус Daytona Beach'), 'admission', '1 May', s,
      'Daytona Beach Campus Application Deadlines … International applicants must apply at least 90 days before classes begin for their intended term. Term Deadline Fall May 1', FYI,
      conditions=L('Apply at least 90 days before classes begin.', 'Подавайте не позднее чем за 90 дней до начала занятий.')),
])

s = 'https://www.augie.edu/international-programs/prospective-international-students/international-student-application-process'
U('augustana-university-south-dakota', [
    A(ROLL, 'rolling', NOFIX, s, 'Augustana University has a rolling admission process. This means when your application is complete, it’s reviewed right away and a decision is made on your admission into the university.', FYI,
      note=L('The international application page publishes no dated cutoff.', 'Страница подачи для иностранцев не публикует срок с датой.')),
])

s = 'https://lesley.edu/admissions/undergraduate-students/how-to-apply-undergraduate'
U('lesley-university', [
    C(EA, 'EA', '2026-12-01', s, 'Important Admissions Deadlines Fall 2027 – Early Action Deadline: December 1', 'page-context', GEN, False,
      L('Not binding. Decision by 5 January. For autumn enrolment only.', 'Необязывающая подача. Решение — до 5 января. Только для осеннего набора.')),
    C(RD, 'RD', '2027-02-15', s, 'Fall 2027 – Regular Decision Deadline: February 15', 'page-context', GEN, False,
      L('Lesley offers rolling admission: applications after the deadline are still considered.', 'Lesley принимает по мере поступления: заявки после срока тоже рассматриваются.')),
])

s = 'https://www.pointloma.edu/undergraduate/admissions/checklists-deadlines'
U('point-loma-nazarene-university', [
    A(EA, 'EA', '15 November', s, 'International Applicants … International High School Students Early Action Deadline: November 15', FYI, False,
      L('Notifications from November to the end of December; Direct Entry Nursing in mid-January. Early Action is required for nursing applicants.',
        'Решения — с ноября до конца декабря; Direct Entry Nursing — в середине января. Для поступающих на Nursing Early Action обязателен.')),
    A(PRI, 'priority', '15 February', s, 'General Admission Priority Deadline: February 15 Notifications are mailed beginning mid-March', FYI, False,
      L('Notifications from mid-March.', 'Решения — с середины марта.')),
])

s = 'https://www.thomasaquinas.edu/admissions/apply'
U('thomas-aquinas-college', [
    A(ROLL, 'rolling', NOFIX, s, 'Rolling Admissions Policy The College operates on a rolling-admissions policy, meaning that qualified applicants will be offered admission according to the order in which they submit their applications.', GEN,
      note=L('Qualified applicants are offered places in the order their applications are complete; no dated cutoff is published. Fall 2027 applicants are interviewed after applying.',
             'Подходящим абитуриентам места предлагаются в порядке готовности заявок; срок с датой не опубликован. С поступающими на Fall 2027 проводят собеседование после подачи.')),
])

s = 'https://www.ut.edu/apply/international-students'
U('university-of-tampa', [
    A(ED, 'ED', '1 November', s, 'November 1: Early Decision', FYI, True),
    A(EA, 'EA', '15 November', s, 'November 15: Early Action Early Action is a non-binding option where admitted students have until May 1 to make a final decision', FYI, False,
      L('Non-binding; reply by 1 May.', 'Необязывающая подача; ответ — до 1 мая.')),
    A(RD, 'RD', '15 January', s, 'January 15: Regular Decision Regular Decision is a non-binding option … Applications completed after Jan. 15 are evaluated on a rolling basis.', FYI, False,
      L('Non-binding; reply by 1 May. Applications completed later are evaluated on a rolling basis.', 'Необязывающая подача; ответ — до 1 мая. Более поздние заявки рассматриваются по мере поступления.')),
])

s = 'https://uwf.edu/admissions/undergraduate/apply/dates-and-deadlines/'
U('university-of-west-florida', [
    C(L('Application and scholarship priority deadline', 'Приоритетный срок заявки и стипендий'), 'priority', '2026-12-01', s,
      'Freshman Admissions … Fall 2027 Aug. 1: Freshman admissions application opens. … Dec. 1: Application/Scholarship Priority Deadline.', 'page-context', GEN, None,
      L('Admission decisions from 15 October, then on a rolling basis.', 'Решения — с 15 октября, затем по мере рассмотрения.')),
    C(FIN, 'admission', '2027-04-01', s, 'Fall 2027 … April 1: Final Application and Materials Deadline', 'page-context', GEN, None,
      L('Final date for the application and all materials; confirm and register for orientation by 1 May.', 'Последний срок для заявки и всех материалов; подтвердить место и записаться на ориентацию — до 1 мая.')),
])

s = 'https://westminsteru.edu/admissions/international-admissions/index.html'
q = 'International Admissions Deadlines Undergraduate First-Year Students Fall semester December 1: Early action (nonbinding) February 1: Regular decision (nonbinding)'
U('westminster-university-utah', [
    A(EA, 'EA', '1 December', s, q, FYI, False),
    A(RD, 'RD', '1 February', s, q, FYI, False),
])

s = 'https://www.wcu.edu/learn/office-of-global-engagement/international-students/'
U('western-carolina-university', [
    A(APP, 'admission', '1 February', s, 'Undergraduate FALL SEMESTER: February 1 (Freshman) April 1 (Transfer, Exchange)', FYI),
])

s = 'https://www.whittier.edu/admission/applying/firstyear'
U('whittier-college', [
    C(EA, 'EA', '2026-11-15', s, 'Applications for Fall 2027 are now open … Fall Early Action Application deadline: November 15', 'page-context', GEN, False,
      L('Decisions on a rolling basis; enrolment deadline 1 June.', 'Решения по мере рассмотрения; подтверждение места — до 1 июня.')),
    C(L('Fall rolling admission deadline', 'Срок приёма по мере поступления на осень'), 'rolling', '2027-04-01', s,
      'Applications for Fall 2027 are now open … Fall Rolling Admission Application Deadline: April 1', 'page-context', GEN, False,
      L('Decisions on a rolling basis; enrolment deadline 8 August. The college keeps accepting first-year applications after this date while space allows.',
        'Решения по мере рассмотрения; подтверждение места — до 8 августа. После этой даты колледж продолжает принимать заявки, пока есть места.')),
])

s = 'https://www.csustan.edu/undergrad/dates-deadlines'
U('stanislaus-state', [
    C(APP, 'admission', '2027-07-30', s, 'Fall 2027 … Application Deadline Friday, Jul. 30, 2027', 'explicit-date', GEN, None,
      L('Through Cal State Apply; submission opens 1 October 2026. Accept the offer by 4 June 2027. International applicants need time for the visa.',
        'Через Cal State Apply; подача открывается 1 октября 2026. Принять предложение — до 4 июня 2027. Иностранцам нужно время на визу.'),
      note=L('This is the general undergraduate dates page; the international admission page publishes no separate application date.',
             'Это общая страница сроков бакалавриата; страница приёма иностранцев отдельного срока подачи не публикует.')),
])

s = 'https://www.saintmarys.edu/admission-aid/first-year-students/apply'
U('saint-marys-college-indiana', [
    A(ED, 'ED', '15 November', s, 'EARLY DECISION … Application Deadline: November 15 Admission Notification Date: guaranteed by mid-December when your application is completed by November 20 Deposit Deadline: January 15', GEN, True,
      L('Decision guaranteed by mid-December if the file is complete by 20 November; deposit due 15 January.', 'Решение гарантировано к середине декабря, если комплект готов к 20 ноября; депозит — до 15 января.')),
    A(EA, 'EA', '15 November', s, 'EARLY ACTION … Application Deadline: November 15 … Deposit Deadline: May 1', GEN, False,
      L('Rolling decisions from November; deposit due 1 May.', 'Решения по мере рассмотрения с ноября; депозит — до 1 мая.')),
    A(RD, 'RD', '15 February', s, 'REGULAR DECISION Priority Application Deadline: February 15 … Deposit Deadline: May 1', GEN, False,
      L('Priority date; deposit due 1 May.', 'Приоритетный срок; депозит — до 1 мая.')),
])

s = 'https://salve.edu/admissions/first-year-applicants'
U('salve-regina-university', [
    A(ED, 'ED', '1 November', s, 'Nov. 1 - Early action I (non-binding) and early decision (binding)', GEN, True,
      L('Binding. Supplemental materials by 15 November; notification by 15 December; deposit by 30 January.', 'Обязывающая подача. Дополнительные материалы — до 15 ноября; решение — до 15 декабря; депозит — до 30 января.')),
    A(EAI, 'EA', '1 November', s, 'Nov. 1 - Early action I (non-binding) and early decision (binding)', GEN, False,
      L('Decisions posted by 1 January. Nursing applicants must apply by 1 November.', 'Решения — до 1 января. Поступающие на Nursing подают до 1 ноября.')),
    A(EAII, 'EA', '5 January', s, 'Jan. 5 - Early action II (non-binding)', GEN, False, L('Decision by 15 February.', 'Решение — до 15 февраля.')),
    A(RD, 'RD', '1 February', s, 'Feb. 1 - Regular decision … Those who submit an application for Feb. 1 will receive a decision by April 1.', GEN, False,
      L('Priority date; decision by 1 April. Later applications are reviewed as space allows.', 'Приоритетный срок; решение — до 1 апреля. Более поздние заявки — при наличии мест.')),
])

s = 'https://www.esf.edu/admissions/apply/first-year/index.php'
U('suny-esf', [
    A(EA, 'EA', '15 November', s, 'Early Action - Apply by Nov. 15 Application deadline is Nov. 15', GEN, False, L('Non-binding; reply by 1 May.', 'Необязывающая подача; ответ — до 1 мая.')),
    A(L('Regular admission priority date', 'Приоритетный срок основного приёма'), 'priority', '15 February', s,
      'Regular Admission - Apply as soon as possible Application priority filing date is Feb. 15 … Applications received after Feb 15 will be considered on a space-available basis.', GEN, False,
      L('Review starts only when all materials have arrived; later applications are considered as space allows.', 'Рассмотрение начинается, когда пришли все материалы; более поздние заявки — при наличии мест.')),
])

s = 'https://www.tacoma.uw.edu/admissions/application-dates-and-deadlines'
q = 'First-Year and Running Start Students Autumn Quarter '
U('university-of-washington-tacoma', [
    A(EA, 'EA', '15 November', s, q + 'November 15 Early action application date.', GEN, False,
      L('Decision by January and consideration for merit scholarships.', 'Решение — к январю и участие в стипендиях за успехи.')),
    A(L('Priority application and scholarship date', 'Приоритетный срок заявки и стипендий'), 'priority', '15 January', s, q + 'January 15 Priority application and scholarship date.', GEN),
    A(FIN, 'admission', '31 May', s, q + 'May 31 Final application deadline. All applications and supporting materials, including all official transcripts, must be received.', GEN, None,
      L('All materials, including official transcripts, must have arrived.', 'Все материалы, включая официальные аттестаты, должны прийти к этой дате.')),
])

s = 'https://www.uwlax.edu/admissions/apply/international/undergraduate/'
U('university-of-wisconsin-la-crosse', [
    A(PRI, 'priority', '15 July', s, 'Application periods Fall Semester Application opens: August 1 Priority deadline: July 15 Classes begin in September', FYI),
])

s = 'https://catalog.kettering.edu/undergrad/admissions/'
q = 'First-Year Student Applications Early Action Regular Admission Priority Rolling Admissions Application Deadline November 15 January 15 Ongoing until spaces are filled'
U('kettering-university', [
    A(EA, 'EA', '15 November', s, q, GEN, False),
    A(L('Regular admission priority date', 'Приоритетный срок основного приёма'), 'priority', '15 January', s, q, GEN, False,
      L('After this date admission is rolling until places are filled.', 'После этой даты приём идёт по мере поступления, пока есть места.')),
    A(L('International documents — fall term', 'Документы иностранцев — осенний семестр'), 'documents', '30 August', 'https://www.kettering.edu/admissions-aid/international-students',
      'we must receive your documents approximately six weeks prior to the start of your term Document Deadlines Term Deadline Fall Term (October) August 30', FYI),
])

s = 'https://www.lemoyne.edu/admission-financial-aid/undergraduate-admission/'
U('le-moyne-college', [
    A(EA, 'EA', '1 November', s, 'Important Dates for First-Year Admission … November 1 Early Action Application Deadline – Early Action Decisions will go out December 1', GEN, False,
      L('Decisions on 1 December.', 'Решения — 1 декабря.')),
    A(L('Rolling admission priority date', 'Приоритетный срок приёма по мере поступления'), 'priority', '1 March', s,
      'March 1 Rolling Admission Priority Deadline (applications are considered on a space available basis after this date)', GEN, False,
      L('Later applications are considered as space allows; reply and deposit by 1 May.', 'Более поздние заявки — при наличии мест; ответ и депозит — до 1 мая.')),
])

s = 'https://college.lclark.edu/offices/admissions/international-students/'
q = 'Lewis & Clark Admission Deadlines Application Deadline to Apply Notice of Decision '
PT = dict(time='23:59')
U('lewis-and-clark-college', [
    A(ED, 'ED', '1 November', s, q + 'Early Decision (binding) Deadline: November 1 at 11:59 p.m. Pacific Time Late November', FYI, True,
      L('Binding. 11:59 p.m. Pacific Time. Decision in late November.', 'Обязывающая подача. 23:59 по тихоокеанскому времени. Решение — в конце ноября.')),
    A(EA, 'EA', '1 November', s, q + 'Early Action (nonbinding) Deadline: November 1 at 11:59 p.m. Pacific Time Mid-December', FYI, False,
      L('11:59 p.m. Pacific Time. Decision in mid-December.', '23:59 по тихоокеанскому времени. Решение — в середине декабря.')),
    A(RD, 'RD', '15 January', s, q + 'Regular Decision (nonbinding) Deadline: January 15 at 11:59 p.m. Pacific Time Mid-March', FYI, False,
      L('11:59 p.m. Pacific Time. Decision in mid-March.', '23:59 по тихоокеанскому времени. Решение — в середине марта.')),
])

s = 'https://www.lycoming.edu/admissions/apply/'
U('lycoming-college', [
    A(ED, 'ED', '15 November', s, 'Admissions Deadlines … Early Decision Apply by: November 15 Get your decision by: December 1', GEN, True,
      L('Binding if the financial aid package meets your need. Decision by 1 December.', 'Обязывающая подача, если пакет помощи покрывает потребность. Решение — до 1 декабря.')),
    A(EA, 'EA', '1 December', s, 'Early Action Apply by: December 1 Get your decision by: December 15', GEN, False,
      L('Decision by 15 December.', 'Решение — до 15 декабря.')),
    A(L('Rolling admission: space-available date', 'Приём по мере поступления: дальше — при наличии мест'), 'rolling', '1 March', s,
      'Rolling Admission Apply after: December 16 … applications received after March 1 considered subject to space availability.', GEN, False,
      L('Decisions from 1 January, then on the 15th of each month. Later applications depend on available space.', 'Решения — с 1 января, затем 15-го числа каждого месяца. Более поздние заявки — при наличии мест.')),
])

s = 'https://intered.mtsu.edu/admission/'
U('middle-tennessee-state-university', [
    A(APP, 'admission', '1 July', s, 'Deadlines: Fall July 1 of the same year', FYI,
      conditions=L('Incomplete applications are not reviewed; processing can take up to 30 days after all materials arrive.', 'Неполные заявки не рассматриваются; обработка может занять до 30 дней после получения всех материалов.')),
])

s = 'https://www.murraystate.edu/admissions/international/Admissions/index.aspx'
U('murray-state-university', [
    C(APP, 'admission', '2027-07-19', s, "Application Deadlines … Fall 2027 (August Intake) Bachelor's: July 19", 'page-context', FYI),
])

s = 'https://www.nmt.edu/studentaffairs/intlprograms/intlstudents/'
U('new-mexico-tech', [
    A(L('All documents — fall', 'Все документы — осень'), 'documents', '1 May', s, 'Application Deadlines Note: All required documentation must be received by: Fall Semester: May 1', FYI,
      conditions=L('The application is reviewed as soon as all documents have arrived.', 'Заявку рассматривают, как только пришли все документы.'),
      note=L('The international page prints this date without a year. The 2025–2026 university catalogue gives 15 March for international fall applicants, so the date should be confirmed with the university.',
             'Международная страница печатает эту дату без года. Каталог вуза 2025–2026 называет для иностранцев на осень 15 марта, поэтому дату стоит уточнить у вуза.')),
])

s = 'https://www.stmarys-ca.edu/admissions-aid/undergraduate/first-year-admissions'
U('saint-marys-college-california', [
    A(EA, 'EA', '1 November', s, 'Important Deadlines Nov 01 Fall Term Early Action', GEN, False),
    A(RD, 'RD', '15 January', s, 'Jan 15 Fall Term Regular Decision', GEN, False),
])

s = 'https://www.anselm.edu/admission/apply'
U('saint-anselm-college', [
    A(EA, 'EA', '15 November', s, 'Early Action - Application Deadline Nov. 15', GEN, False,
      note=L('The college home page currently says the Early Action deadline has been extended to 1 December, also without a year.',
             'Главная страница колледжа сейчас пишет, что срок Early Action продлён до 1 декабря, тоже без года.')),
    A(ED, 'ED', '1 December', s, 'Early Decision - Application Deadline Dec. 1', GEN, True),
    A(RD, 'RD', '1 February', s, 'Regular Decision - Application Priority Deadline Feb. 1', GEN, False, L('Priority date.', 'Приоритетный срок.')),
])

s = 'https://www.southwestern.edu/admission/application-faqs/'
U('southwestern-university', [
    A(ED, 'ED', L('First Tuesday in November', 'Первый вторник ноября'), s, 'Early Decision (binding): 1st Tuesday in November', GEN, True,
      L('Binding. Admitted students commit by the first Tuesday in January with a non-refundable $400 deposit.', 'Обязывающая подача. Принятые подтверждают место к первому вторнику января невозвратным депозитом $400.')),
    A(EA, 'EA', L('First Tuesday in December', 'Первый вторник декабря'), s, 'Early Action (non-binding): 1st Tuesday in December', GEN, False,
      L('Decision no later than the first Tuesday in March.', 'Решение — не позже первого вторника марта.')),
    A(RD, 'RD', L('First Tuesday in February', 'Первый вторник февраля'), s, 'Regular Decision: 1st Tuesday in February', GEN, False),
])

s = 'https://www.stedwards.edu/admission/international'
q = 'Application Deadlines Deadline Date Description '
U('st-edwards-university', [
    A(L('Early application', 'Ранняя подача'), 'EA', '1 December', s, q + 'Early Application Dec. 1 First-year students, apply by this date and we’ll waive the $50 application fee.', FYI, False,
      L('The $50 application fee is waived.', 'Сбор за заявку $50 не взимается.')),
    A(L('Early application II', 'Ранняя подача II'), 'EA', '1 January', s, q + 'Early Application II Jan. 1', FYI, False,
      L('The $50 application fee is waived.', 'Сбор за заявку $50 не взимается.')),
    A(L('Priority application (scholarships)', 'Приоритетная подача (стипендии)'), 'priority', '1 February', s,
      q + 'Priority Application Feb. 1 If you are applying for the Moreau Scholarship or other academic scholarship, apply by this date.', FYI, False,
      L('For the Moreau Scholarship and other academic scholarships.', 'Для Moreau Scholarship и других академических стипендий.')),
    A(FIN, 'admission', '1 May', s, q + 'Final Application May 1 To be considered for fall admission, apply by this date', FYI, False,
      L('Enrolment deposit also due 1 May; late admits pay within two weeks of acceptance.', 'Депозит — тоже до 1 мая; принятые позже вносят его в течение двух недель.')),
])

s = 'https://www.sjf.edu/admissions-aid/first-year-admissions/applying-to-fisher/'
U('st-john-fisher-university', [
    A(ED, 'ED', '1 December', s, 'Early Decision Application Deadline: December 1', GEN, True,
      L('Binding. Enrolment deposit by 1 March.', 'Обязывающая подача. Депозит — до 1 марта.')),
    A(ROLL, 'rolling', NOFIX, s, 'Regular admissions to Fisher occur on a "rolling" basis. … While there is no application deadline, most applications are received before February 15.', GEN, False,
      L('Most applications arrive before 15 February; decisions within three to four weeks of a complete file.', 'Большинство заявок приходит до 15 февраля; решение — через 3–4 недели после полного комплекта.')),
])

s = 'https://www.stmarytx.edu/admission/international-admission/'
U('st-marys-university-texas', [
    A(APP, 'admission', '1 May', s, 'Application Deadlines All items must arrive to the Office of Admission or Office of Graduate Admission by the following dates. Academic Term Application Deadline Fall Semester (August to December) May 1', FYI,
      conditions=L('All items must have arrived by this date. Decisions within three to four weeks of a complete file.', 'Все документы должны прийти к этой дате. Решение — через 3–4 недели после полного комплекта.')),
])

s = 'https://www.stockton.edu/admissions/international-admissions.html'
U('stockton-university', [
    P(APP, 'admission', '2026-05-31', s, 'International First-Year and Transfer Student Application Deadlines … Fall 2026 … May 31, 2026',
      note=L('The international page lists dates up to Spring 2027 only; the Fall 2027 deadline has not been published there yet.',
             'Страница для иностранцев перечисляет сроки только до Spring 2027; срок Fall 2027 там пока не опубликован.')),
])

s = 'https://www.stonehill.edu/apply-for-admission/first-year-applicants/plans-deadlines/'
q = 'Deadlines & Decision Notifications Application Plan Application Deadline Decision Notification Binding? '
U('stonehill-college', [
    A(EA, 'EA', '1 November', s, q + 'Early Action November 1 Early January No', GEN, False, L('Decision in early January.', 'Решение — в начале января.')),
    A(ED, 'ED', '1 November', s, q + 'Early Decision* November 1 Late December Yes*', GEN, True, L('Binding. Decision in late December.', 'Обязывающая подача. Решение — в конце декабря.')),
    A(EAII, 'EA', '15 January', s, q + 'Early Action II January 15 Late February/Early March No', GEN, False, L('Decision in late February or early March.', 'Решение — в конце февраля или начале марта.')),
    A(EDII, 'ED2', '1 February', s, q + 'Early Decision II* February 1 Late February Yes*', GEN, True, L('Binding. Decision in late February.', 'Обязывающая подача. Решение — в конце февраля.')),
    A(RD, 'RD', '15 February', s, q + 'Regular Decision February 15 Mid-March No', GEN, False, L('Decision in mid-March.', 'Решение — в середине марта.')),
])

s = 'https://terminal.newpaltz.edu/admissions/international.html'
U('suny-new-paltz', [
    A(APP, 'admission', '1 May', s, 'INTERNATIONAL APPLICATION DUE DATES … FALL ENROLLMENT* Freshmen - May 1 … Art/Visual Art Education - April 15', FYI,
      conditions=L('Art and Visual Art Education applicants: 15 April.', 'Для Art и Visual Art Education — 15 апреля.')),
])

s = 'https://www.tuskegee.edu/admissions/Criteria-for-Freshmen.html'
U('tuskegee-university', [
    A(APP, 'admission', '1 July', s, 'Admission Application Deadlines … Submit your application and all supporting documents by the appropriate deadline below for timely admission review and scholarship consideration. … Fall Term July 1', GEN,
      conditions=L('Application and all supporting documents. The Presidential Scholarship has its own deadline of 1 December.', 'Заявка и все документы. У Presidential Scholarship свой срок — 1 декабря.')),
])

s = 'https://udallas.edu/admissions-aid/undergraduate/prospective-students/index.php'
U('university-of-dallas', [
    P(PRI, 'priority', '2025-11-01', s, 'Priority Application deadline is Nov. 1. … UDallas has a rolling admission, and for Fall 26, we accept application until our class is full.', applies=GEN,
      note=L('The undergraduate admissions page still describes the Fall 2026 cycle; the Fall 2027 priority date has not been confirmed there.',
             'Страница бакалаврского приёма всё ещё описывает цикл Fall 2026; приоритетный срок Fall 2027 там не подтверждён.')),
])

s = 'https://admissions.uni.edu/international/application-process'
U('university-of-northern-iowa', [
    A(ROLL, 'rolling', NOFIX, s, 'For undergraduate international students there is no deadline as admission decisions are made on a rolling basis.', FYI,
      note=L('Some departments have earlier deadlines. The university recommends applying early enough for a visa appointment.', 'У некоторых направлений сроки раньше. Вуз советует подавать заранее, чтобы успеть записаться на визу.')),
])

s = 'https://www.valpo.edu/admission/international/undergraduate/'
U('valparaiso-university', [
    A(APP, 'admission', '1 May', s, 'International Application Deadlines … Fall Semester Spring Semester Apply By: May 1 October 1 Decision Date: June 1 November 1', FYI,
      conditions=L('All materials by this date; decision by 1 June. Incomplete applications move to the next semester.', 'Все материалы — к этой дате; решение — до 1 июня. Неполные заявки переносятся на следующий семестр.')),
])

s = 'https://www.washcoll.edu/admissions/apply/Freshman/index.php'
q = 'Application Deadlines Application Type Deadline '
U('washington-college-maryland', [
    A(ED, 'ED', '15 November', s, q + 'Fall Early Decision November 15', GEN, True),
    A(EA, 'EA', '1 December', s, q + 'Fall Early Action December 1', GEN, False,
      L('The international page asks applicants to use this date for priority consideration for Honors Fellowships.', 'Страница для иностранцев просит подавать к этой дате для приоритета на Honors Fellowships.')),
    A(RD, 'RD', '15 February', s, q + 'Fall Regular Decision February 15', GEN, False),
])

s = 'https://wit.edu/admissions/undergraduate/international'
q = 'First Year Application Deadlines '
U('wentworth-institute-of-technology', [
    A(EAI, 'EA', '1 November', s, q + 'Early Action 1 Apply by: November 1', FYI, False),
    A(EAII, 'EA', '1 January', s, q + 'Early Action 2 Apply by: January 1', FYI, False),
    A(RD, 'RD', '1 February', s, q + 'Regular Decision Apply by: February 1', FYI, False),
])

s = 'https://www.redlands.edu/admissions-and-aid/international/how-to-apply'
q = 'Application timeline Term Deadlines Fall '
U('university-of-redlands', [
    A(EAI, 'EA', '1 November', s, q + 'Early Action 1: November 1', FYI, False),
    A(EAII, 'EA', '1 December', s, q + 'Early Action 2: December 1', FYI, False),
    A(RD, 'RD', '15 January', s, q + 'Regular Decision: January 15* … *Applications will be reviewed on a rolling basis after the deadline based on capacity.', FYI, False,
      L('After this date applications are reviewed on a rolling basis as capacity allows.', 'После этой даты заявки рассматриваются по мере поступления, пока есть места.')),
])
