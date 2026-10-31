"""Approved USA +50, second ordered batch; reviewed facts only."""
from us_expansion50_common import *
configs=[
 ('university-of-pittsburgh','Pittsburgh','Питтсбург','Pennsylvania','https://www.pitt.edu/'),
 ('university-of-california-merced','Merced','Мерсед','California','https://www.ucmerced.edu/'),
 ('binghamton-university','Binghamton','Бингемтон','New York','https://www.binghamton.edu/'),
 ('indiana-university-bloomington','Bloomington','Блумингтон','Indiana','https://bloomington.iu.edu/'),
 ('north-carolina-state-university','Raleigh','Роли','North Carolina','https://www.ncsu.edu/'),
 ('rutgers-university-newark','Newark','Ньюарк','New Jersey','https://www.newark.rutgers.edu/'),
 ('university-of-connecticut','Storrs','Сторрс','Connecticut','https://uconn.edu/'),
 ('clemson-university','Clemson','Клемсон','South Carolina','https://www.clemson.edu/'),
 ('colorado-school-of-mines','Golden','Голден','Colorado','https://www.mines.edu/'),
 ('university-of-california-riverside','Riverside','Риверсайд','California','https://www.ucr.edu/')]
records=[record(*c,admission_topic='programme-admission-dates' if i==8 else 'international-first-year-admission') for i,c in enumerate(configs)]
annual={}
for i,r in enumerate(records):
 uid=r['id']
 if i==0:
  event(r,L('Rolling admission — fall completion','Приём по мере поступления — завершение заявки на осень'),'rolling','1 April')
  policy(r,None,L('Not checked: the international first-year page reviewed does not settle SAT/ACT policy or a programme-specific exception. No optional policy has been assumed.',
    'Не проверено: прочитанная международная страница первого курса не устанавливает политику SAT/ACT или исключения программы. Политика optional не назначена предположением.'))
  r['scholarships']['needBased'].update(availableToInternational=False,note=L('International financial aid is unavailable under the stated policy, but international first-year scholarships are separately described. Annual February1 completed-application priority gives automatic competitive consideration; award amounts and complete conditions remain unconfirmed.',
    'По указанной политике международная финансовая помощь недоступна, но отдельно описаны стипендии иностранным первокурсникам. Завершённая заявка к ежегодному1февраля даёт автоматическое конкурсное рассмотрение; суммы и полные условия ещё не подтверждены.'))
 elif i==1:
  event(r,L('UC admission application','Заявка на поступление UC'),'RD','2026-11-30',cycle_quote='Fall 2027 UC application',note=L('General UC route. MAAP and SJV PRIME+ BS/MD have separate eligibility, processes and dates.',
    'Общий маршрут UC. У MAAP и SJV PRIME+ BS/MD отдельные условия, процедуры и сроки.'))
  application_fee(r,95,L('International and nonimmigrant fee per UC campus. The general USD80 figure is not the international category. Ordinary waivers have citizenship/residence/AB540 restrictions.',
    'Международный и неиммиграционный сбор за каждый кампус UC. Общая сумма80USD не относится к международной категории. Для обычных льгот есть ограничения гражданства, резидентства или AB540.'))
  policy(r,'not-used',L('UC does not consider SAT/ACT for admission or scholarship selection; eligibility and placement uses are separate.',
    'UC не учитывает SAT/ACT при отборе на поступление или стипендию; выполнение отдельных условий и распределение по курсам — отдельно.'),topic='uc-system-sat-act')
  r['admissions']['platforms']=['University of California application']
  r['scholarships']['fullRide']['note']=L('Global Access Program Scholarship publishes USD25,000/year for eligible nonresidents with GPA3.25+, renewable with cumulative3.00, full-time enrolment and SAP. This is not established as full tuition or full ride; complete eligibility, award basis, stacking and application details still need review. The scholarship GPA is not the UC admission GPA.',
    'Global Access Program Scholarship публикует25 000USD в год для подходящих нерезидентов с GPA3,25+; продление требует накопленного GPA3,00, полной нагрузки и SAP. Это не подтверждённое полное покрытие обучения или full ride; полные условия, основание, совместимость и процедура ещё проверяются. GPA стипендии не равен вступительному GPA UC.')
 elif i==2:
  event(r,'Early Action','EA','1 November');event(r,'Regular Decision','RD','15 March')
  application_fee(r,50,L('USD50; international applicants are not eligible for application fee waivers.',
    '50USD; иностранные абитуриенты не имеют права на освобождение от сбора.'),False)
  policy(r,'optional',L('SAT/ACT optional for academic review. Official English-proficiency evidence is separate; a four-year English-medium-school waiver must be requested and is not automatic.',
    'SAT/ACT необязательны при академическом рассмотрении. Официальное подтверждение английского — отдельно; освобождение после четырёх лет англоязычной школы нужно запросить, оно не автоматическое.'))
  english(r,note=L('The published English-score table is labelled Mid50%: IELTS6.5–7.0, TOEFL80–95 or4.0–5.0, DET110–120. These are neither minima nor means. SAT EBRW530–640 is a section range, not SAT composite. No numerical minimum is inferred.',
    'Таблица английского помечена Mid50%: IELTS6,5–7,0, TOEFL80–95 или4,0–5,0, DET110–120. Это не минимумы и не средние. SAT EBRW530–640 — диапазон раздела, не общий SAT. Числовой минимум не выведен.'))
  r['admissions']['documents']=[L('Official records for the most recent three school years, with all courses/grades; original plus English translation, sent directly by a school official.',
    'Официальные документы за последние три школьных года со всеми предметами и оценками; оригинал и английский перевод, направленные сотрудником школы напрямую.')]
 elif i==3:
  event(r,'Early Action','EA','1 November',binding=False)
  policy(r,'optional',L('International first-year applicants choose whether SAT/ACT is considered. This Bloomington policy does not establish the rules of Indianapolis or a named future expiry.',
    'Иностранные абитуриенты первого курса выбирают, учитывать ли SAT/ACT. Политика Блумингтона не устанавливает правила Индианаполиса или отдельный будущий срок окончания.'),topic='international-academic-policy')
  r['admissions']['platforms']=['Apply IU','Common Application']
  r['admissions']['notes'].append(L('The reviewed country table has no Uzbekistan entry. Requirements for Kazakhstan, Kyrgyzstan or Russia have not been copied to Uzbekistan. English proof within two years is required; the exact minimum and fee remain under review.',
    'В проверенной страновой таблице нет записи Узбекистана. Требования Казахстана, Кыргызстана или России не перенесены на Узбекистан. Нужно подтверждение английского за последние два года; точный минимум и сбор ещё проверяются.'))
 elif i==4:
  event(r,'Early Action','EA','1 November');event(r,'Regular Decision','RD','15 January')
  application_fee(r,100,L('Non-refundable international application fee; fee waivers are not accepted.',
    'Невозвратный международный сбор; освобождение от сбора не принимается.'),False)
  policy(r,'conditional',L('School-system condition: applicants attending school outside the US do not need SAT/ACT/CLT. At US schools, weighted GPA2.5–2.79 requires SAT/ACT; at2.8+ submission is optional. This condition follows school location and GPA, not citizenship. An Uzbek GPA is not converted into this US weighted scale.',
    'Условие школьной системы: учащимся школ вне США SAT/ACT/CLT не нужны. В школах США при взвешенном GPA2,5–2,79 требуется SAT/ACT, при2,8+ — необязательно. Условие зависит от школы и GPA, а не гражданства. Узбекские оценки не конвертируются в эту взвешенную шкалу.'),topic='international-sat-scope')
  english(r,6.5,80,4.5,110,L('Direct entry: IELTS6.5 with sections6.0; TOEFL80 with sections18 before21January2026, or4.5 with sections4.0 afterwards; DET110. Lower conditional-programme scores (IELTS5.0/TOEFL42 or3.0/DET80) are not direct-degree minima.',
    'Прямое поступление: IELTS6,5 и разделы6,0; TOEFL80 и разделы18 до21января2026 или4,5 и разделы4,0 после; DET110. Более низкие баллы условной подготовки (IELTS5,0/TOEFL42 или3,0/DET80) не являются минимумами прямого поступления.'))
  r['admissions']['documents']=[L('Official school transcripts and an English translation by the school, Ministry of Education or certified translator. F1/J1 applicants must prove financial ability. Studio majors and Music Technology have additional portfolios/essays.',
    'Официальные школьные оценки и английский перевод школы, министерства образования или заверенного переводчика. F1/J1 должны подтвердить средства. Для студийных направлений и Music Technology нужны дополнительные портфолио/эссе.')]
  scope=L('2027–2028, international F1 estimated academic-year school expenses: tuition/fees, living and health insurance. This is the university’s financial-guarantee estimate, not a fixed programme invoice. Summer in the US is excluded and estimated at another USD6,070. Competitive scholarships are not deducted.',
    '2027–2028, оценка расходов учебного года для иностранцев F1: обучение/сборы, жизнь и страховка. Это оценка финансового обеспечения университета, не фиксированный счёт программы. Лето в США не включено, ориентир ещё6 070USD. Конкурсные стипендии не вычтены.')
  s=src(uid,'fall-2027-estimated-expenses')['source']
  r['links']['cost']=s
  r['costs']=costs('2027–2028',s,DAY,FY,[('Tuition and fees',37510,'billed'),('Living expenses',18210,'estimate'),('Health insurance',2703,'estimate')],
    L('USD58,423 estimated academic-year financial requirement','58 423USD — оценка финансового обеспечения учебного года'),
    L('USD58,423 — university-published estimated total, summer excluded','58 423USD — опубликованный университетом оценочный итог, без лета'),scope,budget=58423,status='confirmed',note=scope)
  r['costs']['period']='year'
  annual[uid]=dict(currency='USD',basis='total',period='year',min=58423,max=58423,academicYear='2027–2028',note=scope,source=s,verified=DAY)
  r['scholarships']['needBased'].update(availableToInternational=False,note=L('International financial aid is not available; limited competitive merit awards may be requested in PACKASSIST after admission. Award values, largest award and eligibility are not fully verified.',
    'Международная финансовая помощь недоступна; после приёма можно запрашивать ограниченные конкурсные merit-стипендии в PACKASSIST. Суммы, крупнейшая награда и полные условия не подтверждены.'))
 elif i==5:
  event(r,'Early Action','EA','2026-11-01',topic='admission-deadlines',cycle_quote='Fall/September 2027')
  event(r,'Regular Decision','RD','2026-12-01',topic='admission-deadlines',cycle_quote='Fall/September 2027')
  application_fee(r,70,L('Non-refundable fee; a general international waiver is not established.','Невозвратный сбор; общее освобождение иностранцев не подтверждено.'))
  policy(r,'conditional',L('Rutgers Newark is test-blind for most undergraduate programmes, but its seven-year BA/MD requires SAT or ACT. This exception is not a test-optional policy and is not the New Brunswick or Camden rule.',
    'В Rutgers Newark большинство программ — test-blind, но семилетняя BA/MD требует SAT или ACT. Это исключение не является политикой test-optional и не совпадает с правилами New Brunswick или Camden.'),'international-first-year-admission','Through 2027')
  english(r,6.5,79,4.0,115,L('Use Newark column, not New Brunswick: general IELTS6.5, old TOEFL79/new4.0, DET115. Pharmacy/Nursing exceptions include TOEFL100/5.5 and DET130; confirm the selected school. Exact test-date cutoff wording is January21/22 on the source.',
    'Используйте столбец Newark, а не New Brunswick: общие IELTS6,5, TOEFL79 по старой/4,0 по новой шкале, DET115. Исключения Pharmacy/Nursing включают TOEFL100/5,5 и DET130; проверяйте выбранную школу. Источник разделяет даты теста по21/22января.'),topic='international-english')
 elif i==6:
  event(r,'Early Decision','ED','1 November',note=L('Early Decision is listed; binding agreement and special-programme conditions still need a separate check.',
    'Early Decision указан; обязательность соглашения и условия специальных программ ещё требуют отдельной проверки.'))
  event(r,L('Storrs campus application','Заявка в кампус Сторрс'),'RD','15 January')
  application_fee(r,80,L('International first-year application fee, non-refundable.','Международный сбор первого курса, без возврата.'))
  policy(r,'optional',L('International first-year SAT/ACT optional; official scores if supplied, superscoring allowed, writing not used. English proof and special-programme conditions remain separate.',
    'SAT/ACT необязательны для международного первого курса; при подаче нужны официальные баллы, разрешён superscoring, writing не учитывается. Английский и специальные программы проверяются отдельно.'))
  english(r,6.5,79,4.5,110,L('Direct-entry thresholds; specific waivers require their published conditions. UCAELI conditional admission is not immediate undergraduate entry without meeting its proficiency/certificate requirement.',
    'Пороги прямого поступления; освобождение требует опубликованных условий. Условный маршрут UCAELI не является немедленным началом бакалавриата без выполнения его языковых требований/сертификата.'))
  r['admissions']['recommendations']=L('Two recommendations are optional; the admission essay is required.','Две рекомендации необязательны; вступительное эссе обязательно.')
  r['admissions']['documents']=[L('Official school record with current/senior courses and latest marks, sent directly by the school; certified English translation if needed. The reviewed country list does not establish an Uzbek diploma route.',
    'Официальные школьные документы с текущими/выпускными предметами и последними оценками, направленные школой; при необходимости заверенный английский перевод. Проверенная страновая таблица не устанавливает маршрут узбекского диплома.')]
 elif i==7:
  event(r,L('International fall application and credentials','Международная заявка и документы на осень'),'RD','1 May')
  event(r,L('International I-20 / DS-2019','Международные документы I-20 / DS-2019'),'documents','1 June')
  application_fee(r,70,L('Non-refundable international application fee.','Невозвратный международный сбор.'))
  policy(r,'optional',L('International first-year SAT/ACT optional; superscores if submitted. No named Fall2027 expiry established on the page.',
    'SAT/ACT необязательны для международного первого курса; при подаче используется superscoring. Отдельный срок окончания политики Fall2027 на странице не установлен.'))
  english(r,6.5,80,None,None,L('IELTS6.5 with every section at least6.0; old-scale TOEFL80 is printed. A new-scale TOEFL threshold is not confirmed here. Transfer English-composition and credential-evaluation conditions are not applied to all first-year applicants.',
    'IELTS6,5 и каждый раздел не ниже6,0; напечатан TOEFL80 старой шкалы. Порог новой шкалы здесь не подтверждён. Условия английской композиции и внешней оценки документов для перевода не применены ко всем первокурсникам.'))
  r['admissions']['documents']=[L('First-year applicants self-report school records in STARS; official records are required before enrolment. WES/Josef Silny instructions on this source concern transfer applicants.',
    'Первокурсники самостоятельно указывают школьные документы в STARS; официальные нужны до зачисления. Указания WES/Josef Silny в этом источнике относятся к переводу.')]
 elif i==8:
  for name,kind,date in [('Priority deadline','priority','2026-11-01'),('Regular Decision','RD','2027-01-15')]:
   event(r,name,kind,date,topic='programme-admission-dates',cycle_quote='Fall 2027 Deadline',note=L('Verified on the Applied Mathematics and Statistics BS page; other programmes may have different conditions.',
    'Проверено на странице Applied Mathematics and Statistics BS; у других программ могут быть другие условия.'))
  policy(r,None,L('Not checked: the official international admissions page returns403 and the fee FAQ could not be read. Search snippets are leads only; SAT/ACT, English thresholds and the international application fee remain unconfirmed.',
    'Не проверено: официальная международная страница приёма возвращает403, FAQ со сбором прочитать не удалось. Поисковые выдержки — только ориентиры; SAT/ACT, пороги английского и международный сбор не подтверждены.'),topic='international-admission-access')
  r['links']['admissions']=r['links']['internationalAdmissions']=src(uid,'international-admission-access')['source']
 elif i==9:
  event(r,L('UC admission application','Заявка на поступление UC'),'RD','2026-11-30',topic='uc-system-fall-2027-dates',cycle_quote='fall 2027 applicants.')
  application_fee(r,95,L('Current international UC fee per campus, rather than the old general USD80 value on the campus page. Standard waiver restrictions apply.',
    'Текущий международный сбор UC за кампус вместо старой общей суммы80USD на странице кампуса. Для обычных льгот действуют ограничения.'),topic='uc-system-international-fee')
  policy(r,'not-used',L('SAT/ACT are not used for admission or scholarship selection. Placement/eligibility uses and English-proficiency alternatives are separate.',
    'SAT/ACT не используются при отборе на поступление или стипендию. Распределение по курсам, отдельные условия и языковые альтернативы — отдельно.'))
  english(r,6.5,80,4.5,115,L('First-year English thresholds from the campus page; no IELTS One Skill Retake or TOEFL MyBest. Digital SAT Reading/Writing is not an approved English-proof route. Campus selection may be more competitive than these minimum conditions.',
    'Пороги английского первого курса со страницы кампуса; IELTS One Skill Retake и TOEFL MyBest не принимаются. Digital SAT Reading/Writing не является утверждённой заменой английского. Отбор кампуса может быть конкурснее этих минимальных условий.'))
  r['admissions']['platforms']=['University of California application']
  r['scholarships']['merit']=[dict(id='achievement',category='merit',name='Achievement Scholarship',basis='automatic',
    amount=L('Up to USD89,100 over four years','До89 100USD за четыре года'),
    eligibility=L('International first-year students: confirmed nonresidency, UC eligibility and submitted SIR. Considered automatically; an award is not guaranteed.',
      'Иностранные первокурсники: подтверждённое нерезидентство, выполнение условий UC и поданный SIR. Рассмотрение автоматическое; получение не гарантировано.'),
    renewable=L('Maintain a3.0 GPA each quarter; further stacking or renewal conditions still require review.',
      'Сохраняйте GPA3,0 каждую четверть; дополнительные условия совместимости или продления ещё проверяются.'),deadlineScope='no-separate-application',entryTerm=None,entryYear=None,source=src(uid,'international-first-year-admission')['source'],verified=DAY,
    note=L('Standing published amount; a Fall2027-specific award cycle and largest-award comparison are not established. This is not full tuition or full ride and is not deducted from cost.',
      'Опубликованная сумма без отдельного установленного цикла Fall2027; сравнение с крупнейшей наградой не завершено. Это не полное покрытие обучения или full ride, из стоимости сумма не вычитается.'))]
finish(records,2,annual)
