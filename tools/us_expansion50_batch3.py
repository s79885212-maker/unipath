"""Third approved USA batch: degree, applicant/test and cycle boundaries."""
from us_expansion50_common import *
configs=[
 ('new-jersey-institute-of-technology','Newark','Ньюарк','New Jersey','https://www.njit.edu/'),
 ('university-at-buffalo','Buffalo','Буффало','New York','https://www.buffalo.edu/'),
 ('university-of-delaware','Newark','Ньюарк','Delaware','https://www.udel.edu/'),
 ('rutgers-university-camden','Camden','Камден','New Jersey','https://camden.rutgers.edu/'),
 ('university-of-illinois-chicago','Chicago','Чикаго','Illinois','https://www.uic.edu/'),
 ('university-of-missouri','Columbia','Колумбия','Missouri','https://missouri.edu/'),
 ('auburn-university','Auburn','Оберн','Alabama','https://www.auburn.edu/'),
 ('florida-international-university','Miami','Майами','Florida','https://www.fiu.edu/'),
 ('university-of-south-florida','Tampa','Тампа','Florida','https://www.usf.edu/'),
 ('university-of-california-santa-cruz','Santa Cruz','Санта-Круз','California','https://www.ucsc.edu/')]
records=[record(*c) for c in configs]
for i,r in enumerate(records):
 uid=r['id']
 if i==0:
  for name,kind,d in [('Early Action I','EA','15 November'),('Early Action II','EA','15 December'),('Rolling admission','rolling','1 March')]:
   event(r,name,kind,d,topic='admission-deadlines')
  application_fee(r,75,L('Non-refundable international application fee.','Невозвратный международный сбор.'))
  policy(r,None,L('Not checked for Fall 2027: the only dated optional policy on this source is Fall 2026, with Honors/accelerated-programme exceptions. The standing checklist also names an Honors exception. The previous policy is not carried forward automatically.',
    'Не проверено для осени 2027: единственная датированная политика optional в источнике относится к осени 2026 и содержит исключения Honors/ускоренных программ. Общий список также указывает исключение Honors. Прошлая политика автоматически не перенесена.'))
  english(r,6.0,79,4.0,100,L('Published standing thresholds: IELTS 6.0, old TOEFL 79 or new 4.0, DET 100. The dated Fall 2026 SAT section is separate. Architecture/design needs a portfolio; transfer WES/NACES instructions are not applied to all first-year students.',
    'Опубликованные пороги: IELTS 6,0, TOEFL 79 старой шкалы или 4,0 новой, DET 100. Датированный раздел SAT осени 2026 рассматривается отдельно. Для архитектуры/дизайна нужно портфолио; требования WES/NACES при переводе не применены ко всем первокурсникам.'))
  r['admissions']['documents']=[L('Official secondary transcript in English or a notarized copy; first-year Common Application. Exact Uzbek diploma/lyceum equivalence remains unconfirmed.',
    'Официальные школьные оценки на английском или нотариальная копия; на первый курс Common Application. Точное соответствие узбекского аттестата/диплома лицея не подтверждено.')]
 elif i==1:
  event(r,'Early Action','EA','1 November');event(r,'Regular Decision','RD','1 February')
  application_fee(r,50,L('Non-refundable application fee.','Невозвратный сбор.'))
  policy(r,'optional',L('SAT/ACT are optional for admission and scholarship consideration; no disadvantage without scores. The page’s SAT 1170+ and ACT 25+ describe most admitted score-submitters, not minima or means.',
    'SAT/ACT необязательны для поступления и рассмотрения на стипендии; без баллов нет ухудшения рассмотрения. SAT 1170+ и ACT 25+ на странице описывают большинство принятых, подавших тесты, а не минимумы или средние.'),topic='sat-act')
  english(r,6.0,70,4.0,105,L('Official English minima; TOEFL MyBest is explicitly included. Scores must be younger than two years. SAT ERWS 500 and ACT English AND Reading 18 are English-proof alternatives, not composite admission minima.',
    'Официальные минимумы английского; TOEFL MyBest явно принимается. Баллы должны быть моложе двух лет. SAT ERWS 500 и ACT English И Reading 18 — варианты подтверждения английского, не общие вступительные минимумы.'),topic='english')
  r['admissions']['documents']=[L('School transcripts or state examination records, with English translation if needed. The country selector did not expose an Uzbekistan result in the reviewed text; exact equivalence remains unconfirmed.',
    'Школьные оценки или результаты государственных экзаменов с английским переводом при необходимости. В прочитанном тексте странового селектора нет результата Узбекистана; точное соответствие не подтверждено.')]
 elif i==2:
  event(r,L('Direct first-year admission priority','Приоритет прямого поступления на первый курс'),'priority','15 January')
  policy(r,'optional',L('International students do not have to submit SAT/ACT for admission. English-proficiency requirements and programme-specific mathematics preparation remain separate.',
    'Иностранцам не нужно подавать SAT/ACT для поступления. Английский и математическая подготовка конкретной программы проверяются отдельно.'))
  application_fee(r,75,L('Direct first-year Common Application fee; the separate Academic Transitions application also lists USD 75.',
    'Сбор прямого поступления первого курса через Common Application; отдельная заявка Academic Transitions также указывает 75 USD.'))
  english(r,6.5,79,4.0,110,L('Direct admission thresholds. Academic Transitions uses lower pathway levels and is conditional; the optional Accelerate-U support programme for TOEFL 79–89 is not conditional admission and adds no time or cost. Do not confuse these routes.',
    'Пороги прямого поступления. Academic Transitions использует более низкие подготовительные уровни и условный приём; необязательная поддержка Accelerate-U при TOEFL 79–89 не является условным приёмом и не добавляет срок или стоимость. Эти маршруты не смешиваются.'))
  r['admissions']['documents']=[L('Official secondary and postsecondary records/exam results. Prior international college study requires IERF evaluation; WES is not accepted for that evaluation. This is not a blanket evaluation requirement for school-only first-year applicants.',
    'Официальные школьные и послешкольные документы/экзамены. Предыдущее обучение в иностранном колледже требует оценки IERF; для неё WES не принимается. Это не всеобщее требование оценки для первокурсников только после школы.')]
 elif i==3:
  event(r,'Early Action','EA','2026-11-01',topic='admission-deadlines',binding=False,cycle_quote='Fall/September 2027')
  event(r,'Regular Decision','RD','2026-12-01',topic='admission-deadlines',cycle_quote='Fall/September 2027')
  application_fee(r,70,L('Non-refundable Rutgers application fee; a general international waiver is not confirmed.','Невозвратный сбор Rutgers; общее освобождение иностранцев не подтверждено.'))
  policy(r,'conditional',L('Camden is test-optional except its BS/DO programme, which requires SAT or ACT. This is different from Newark’s BA/MD exception and New Brunswick’s policy.',
    'Camden — test-optional, кроме программы BS/DO, требующей SAT или ACT. Это отличается от исключения BA/MD в Newark и политики New Brunswick.'),cycle='Through 2027')
  for key in ('sat','act'):r['academics'][key]['label']=L('Test-optional except BS/DO','Test-optional, кроме BS/DO')
  english(r,6.0,79,4.0,115,L('Camden general column: IELTS 6.0, old TOEFL 79/new 4.0, DET 115. Do not copy Newark/New Brunswick IELTS 6.5. School-specific higher thresholds and the source’s January 21/22 test-date wording must be checked.',
    'Общий столбец Camden: IELTS 6,0, TOEFL 79 старой/4,0 новой шкалы, DET 115. IELTS 6,5 Newark/New Brunswick не скопирован. Проверяйте повышенные пороги школ и формулировку источника о дате теста 21/22 января.'),topic='english')
 elif i==4:
  for name,kind,d in [('Early Action','EA','2026-11-02'),('Regular Decision','RD','2027-02-01')]:
   event(r,name,kind,d,topic='admission-deadlines',cycle_quote='Fall 2027 First Year Early Action',note=L('Application including all documentation must be complete by this date. This is the Chicago calendar, not UIUC.',
    'Заявка со всеми документами должна быть завершена к этой дате. Это календарь Чикаго, не UIUC.'))
  application_fee(r,170,L('University-published international first-year total: USD 70 application fee plus USD 100 international evaluation fee, paid together. Not just the domestic USD 70 fee.',
    'Опубликованный университетом итог для международного первого курса: 70 USD за заявку и 100 USD за международную оценку, оплачиваются вместе. Это не только внутренний сбор 70 USD.'))
  policy(r,'optional',L('From the 2027 cycle, submitted SAT/ACT scores are considered only if they strengthen the application; no disadvantage without scores, including merit review. This is test-optional, not test-blind. Special-programme conditions remain separate.',
    'С цикла 2027 поданные SAT/ACT учитываются только при усилении заявки; без баллов нет ухудшения рассмотрения, включая merit. Это test-optional, а не test-blind. Специальные программы проверяются отдельно.'),topic='sat-act',cycle='2027')
  english(r,6.5,80,4.5,120,L('IELTS Academic 6.5 with sections 6.0; TOEFL 80/4.5. DET 120 with each listed component 115 is accepted only for Fall 2027 onward. Colleges may impose higher thresholds. The country widget did not establish an Uzbek qualification route.',
    'IELTS Academic 6,5 и разделы 6,0; TOEFL 80/4,5. DET 120 и каждый указанный компонент 115 принимается только с осени 2027. Колледжи могут повышать пороги. Страновой виджет не подтвердил маршрут узбекской квалификации.'))
 elif i==5:
  event(r,L('Rolling international admission','Международный приём по мере поступления'),'rolling',L('No fixed application deadline','Фиксированный срок заявки не установлен'),note=L('The university recommends applying 6–12 months before the intended semester. This recommendation is not a mandatory dated cutoff.',
    'Университет рекомендует подать за 6–12 месяцев до выбранного семестра. Эта рекомендация не является обязательным датированным дедлайном.'))
  application_fee(r,65,L('International application fee.','Международный сбор.'))
  policy(r,'optional',L('SAT/ACT not required for international admission; preferred for international freshman scholarships under holistic review. A preference for aid is not an admission-test requirement.',
    'SAT/ACT не требуются для международного приёма; предпочтительны для стипендий иностранных первокурсников при комплексном рассмотрении. Предпочтение при помощи не является вступительным требованием.'))
  english(r,6.5,None,4.5,None,L('University IELTS floor 6.5 with sections 6.0; some colleges require more. New TOEFL 4.5 with sections 4.0 starts January 21, 2026, but the old 79 row says before January 26: this cutoff conflict is retained, not silently repaired. AIM is a separate support route.',
    'Общий нижний порог IELTS 6,5 и разделы 6,0; некоторые колледжи требуют больше. Новый TOEFL 4,5 и разделы 4,0 начинается 21 января 2026, но старая строка 79 говорит «до 26 января»: конфликт границ сохранён, не исправлен молча. AIM — отдельный маршрут поддержки.'),topic='english')
  t=r['english']['ielts'];t.update(varies=True,profilesComplete=False,profiles=[])
  for en,ru,n,sections in [('College of Engineering','Инженерный колледж',6.5,'6.0'),('College of Education and Human Development','Колледж образования и развития человека',7.0,'6.5'),('School of Nursing','Школа сестринского дела',7.0,L('Speaking 8.0; other sections 6.5','Говорение 8,0; остальные разделы 6,5'))]:
   t['profiles'].append(dict(name=L(en,ru),kind='minimum',overall=n,sections=sections,source=src(uid,'english')['source'],verified=DAY))
 elif i==6:
  event(r,L('International first-year fall application','Международная заявка первого курса на осень'),'RD','1 February')
  application_fee(r,60,L('Non-refundable international application fee.','Невозвратный международный сбор.'))
  policy(r,'required',L('Official SAT or ACT is required for international first-year direct admission. Auburn Global is a separate route and is not used to infer the direct-admission policy.',
    'Для прямого международного поступления на первый курс требуется официальный SAT или ACT. Auburn Global — отдельный маршрут; его правила не перенесены на прямой приём.'))
  english(r,6.5,79,None,None,L('Direct-admission IELTS 6.5 or old-scale TOEFL 79; the page also lists legacy CBT/PBT values. No new-scale TOEFL threshold has been confirmed. Lower-English Auburn Global admission is separate.',
    'Для прямого приёма IELTS 6,5 или TOEFL 79 старой шкалы; страница также перечисляет прежние CBT/PBT. Порог новой шкалы TOEFL не подтверждён. Приём Auburn Global с более низким английским рассматривается отдельно.'))
  r['admissions']['documents']=[L('Foreign records require independent credential evaluation including GPA for both first-year and transfer applicants. WES is preferred; other listed evaluators are allowed. Financial affidavit and supporting bank letter also required. Exact Uzbek equivalence remains unconfirmed.',
    'Иностранные документы требуют независимой оценки квалификации с GPA и для первого курса, и для перевода. WES предпочтителен; другие перечисленные организации разрешены. Также нужны финансовое заявление и письмо банка. Точное соответствие узбекской квалификации не подтверждено.')]
 elif i==7:
  for name,kind,d in [('Early Action','EA','2026-11-02'),('Regular Decision','RD','2026-12-16'),('Final deadline','RD','2027-03-02')]:
   event(r,name,kind,d,topic='admission-deadlines',cycle_quote='Fall 2027',note=L('Fall entry in August; complete application including documents. Early Fall in June is a separate intake.',
    'Осеннее начало в августе; завершённая заявка с документами. Early Fall в июне — другой набор.'))
  application_fee(r,30,L('Non-refundable international application fee; generic waiver availability is not confirmed for this category.',
    'Невозвратный международный сбор; доступность общей льготы для этой категории не подтверждена.'))
  policy(r,'required-alternatives',L('Admission testing is required: SAT, ACT or CLT. Exact English-readiness subsection requirements must also be met; CLT English thresholds are not inferred from another Florida university.',
    'Тест для приёма обязателен: SAT, ACT или CLT. Также нужны пороги языковых разделов; пороги CLT не перенесены из другого университета Флориды.'))
  english(r,note=L('For direct first-time-in-college international admission, TOEFL and IELTS are not required. English readiness is still assessed through the admission-test subsections; this is not an English waiver and does not establish a zero minimum.',
    'Для прямого международного поступления впервые в колледж TOEFL и IELTS не обязательны. Английский всё равно проверяется по разделам вступительных тестов; это не освобождение от английского и не нулевой минимум.'))
  for key in ('ielts','toefl'):r['english'][key]['status']='not-required'
 elif i==8:
  for name,kind,a,d in [('Early Action','EA','2026-11-02','2026-11-16'),('Regular Decision','RD','2026-12-16','2027-01-15'),('Rolling admission','rolling','2027-03-01','2027-03-15')]:
   event(r,name,kind,a,topic='admission-deadlines',cycle_quote='FALL/SUMMER 2027 SEMESTER START')
   event(r,'Required documents — '+name,'documents',d,topic='admission-deadlines',cycle_quote='FALL/SUMMER 2027 SEMESTER START')
  application_fee(r,30,L('Non-refundable international application fee.','Невозвратный международный сбор.'))
  policy(r,'required-alternatives',L('Official SAT, ACT or CLT is required. English-proof section thresholds: SAT Reading/Writing 490; ACT English 17 AND Reading 19; CLT Verbal Reasoning/Writing 38. These are sections, not composite minima.',
    'Требуется официальный SAT, ACT или CLT. Пороги языковых разделов: SAT Reading/Writing 490; ACT English 17 И Reading 19; CLT Verbal Reasoning/Writing 38. Это разделы, не общие минимумы.'))
  english(r,note=L('For this international first-year route, TOEFL, IELTS and DET are not accepted as substitutes for the required SAT/ACT/CLT English section thresholds. A high IELTS score alone does not satisfy that requirement.',
    'Для этого международного маршрута первого курса TOEFL, IELTS и DET не принимаются как замена нужным языковым разделам SAT/ACT/CLT. Один высокий IELTS не выполняет это требование.'))
  for key in ('ielts','toefl','duolingo'):r['english'][key].update(accepted=False,status='not-accepted')
 elif i==9:
  event(r,L('UC fall admission application','Заявка на осенний приём UC'),'RD','2026-11-30',topic='admission-deadlines',cycle_quote='Dates for students applying for fall 2027')
  application_fee(r,95,L('International/nonimmigrant fee per UC campus; standard waivers have citizenship, residence or AB540 restrictions.',
    'Сбор иностранца/неиммигранта за каждый кампус UC; обычные льготы ограничены гражданством, резидентством или AB540.'),topic='uc-system-international-fee')
  policy(r,'not-used',L('SAT/ACT are not considered for admission or scholarships. Specified eligibility/placement uses are separate.',
    'SAT/ACT не учитываются при приёме или назначении стипендий. Отдельное использование для выполнения условий или распределения по курсам — отдельно.'))
  english(r,6.5,None,4.5,115,L('First-year thresholds: IELTS 6.5, new TOEFL 4.5, DET 115. The current campus page does not print an old-scale TOEFL value, so one has not been invented. Transfer English rules are separate.',
    'Пороги первого курса: IELTS 6,5, TOEFL новой шкалы 4,5, DET 115. Текущая страница кампуса не печатает значение старой шкалы TOEFL; оно не выдумано. Английский для перевода проверяется отдельно.'),topic='english')
  r['admissions']['documents']=[L('Report all foreign coursework as printed without US-grade or agency conversion. Do not submit extra academic records with the UC application unless requested. Official final records follow admission instructions.',
    'Укажите все иностранные предметы как в документе, без конвертации в оценки США или сторонней оценки. Не подавайте дополнительные школьные документы с UC-заявкой без запроса. Итоговые официальные документы подаются по инструкциям после приёма.')]
r=records[6];s=src(r['id'],'current-coa')
note=L('Auburn publishes a2027–28 F/J estimate: tuition/feesUSD39,658, living15,000, insurance2,317, total56,975. Its introduction includes transportation but footnote1 explicitly excludes transportation; coverage is inconsistent. Footnote2 separates fall/spring tuition (nine months) and12-month living expenses. DependantsUSD6,000 each and professional fees may add costs. The gross total is not a verified complete budget; no scholarship is deducted.',
  'Auburn публикует оценку F/J2027–28: обучение/сборы39 658USD, проживание15 000, страховка2 317, итог56 975. Введение включает транспорт, а сноска1 явно исключает его; покрытие противоречиво. Сноска2 отделяет обучение Fall/Spring (девять месяцев) от12месяцев проживания. Иждивенцы6 000USD каждый и профессиональные сборы могут добавить расходы. Итог не подтверждает полный бюджет; стипендия не вычтена.')
r['costs']=costs('2027–2028',s['source'],DAY,FY,[(L('Tuition and fees','Обучение и сборы'),39658,'billed'),(L('Living expenses','Расходы на проживание'),15000,'estimate'),(L('Health insurance','Медицинская страховка'),2317,'estimate')],
  L('Published estimate; transport coverage conflicts','Опубликованная оценка; противоречие покрытия транспорта'),None,L('Full cost coverage unresolved','Покрытие полной стоимости не разрешено'),tuition=39658,tuition_label=L('Tuition and fees','Обучение и сборы'),status='conflict',note=note)
r['costs']['conflict']={'text':note}
annual={r['id']:dict(min=39658,max=39658,currency='USD',basis='tuition',period='year',academicYear='2027–2028',source=s['source'],verified=DAY,note=note)}
finish(records,3,annual)
