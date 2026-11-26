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
