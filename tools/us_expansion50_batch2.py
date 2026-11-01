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
  for key in ('sat','act'):r['academics'][key]['label']=L('Test-blind except seven-year BA/MD','Test-blind, кроме семилетней BA/MD')
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
  r['scholarships']['merit']=[dict(id='achievement',category='merit',name='Achievement Scholarship',basis='unknown',
    amount=L('Up to USD89,100 over four years','До89 100USD за четыре года'),
    eligibility=L('International first-year students: confirmed nonresidency, UC eligibility and submitted SIR. Considered automatically; an award is not guaranteed.',
      'Иностранные первокурсники: подтверждённое нерезидентство, выполнение условий UC и поданный SIR. Рассмотрение автоматическое; получение не гарантировано.'),
    renewable=L('Maintain a3.0 GPA each quarter; further stacking or renewal conditions still require review.',
      'Сохраняйте GPA3,0 каждую четверть; дополнительные условия совместимости или продления ещё проверяются.'),deadlineScope='no-separate-application',entryTerm=None,entryYear=None,source=src(uid,'international-first-year-admission')['source'],verified=DAY,
    note=L('Standing published amount; a Fall2027-specific award cycle and largest-award comparison are not established. Automatic consideration does not mean an award to every eligible admitted student; the selection basis is not explicitly established here. This is not full tuition or full ride and is not deducted from cost.',
      'Опубликованная сумма без отдельного установленного цикла Fall2027; сравнение с крупнейшей наградой не завершено. Автоматическое рассмотрение не означает награду каждому подходящему принятому студенту; основание отбора здесь прямо не установлено. Это не полное покрытие обучения или full ride, из стоимости сумма не вычитается.'))]
# These two references are explicitly historical and preserve housing/cohort scope.
r=records[1];s=src(r['id'],'cost-reference')
r['costs']=costs('2026–2027',s['source'],'2026-11-01',FY,
  [(L('Published base fees','Опубликованные базовые сборы'),17024,'billed'),
   (L('Additional nonresident tuition','Дополнительная плата нерезидента'),39270,'billed'),
   (L('Housing','Жильё'),15154,'estimate'),(L('Food','Питание'),8026,'estimate'),
   (L('Books and supplies','Книги и материалы'),1148,'estimate'),(L('Transportation','Транспорт'),1412,'estimate'),
   (L('Personal expenses','Личные расходы'),2814,'estimate'),(L('Health insurance','Медицинская страховка'),2996,'estimate'),
   (L('Loan fee — applicability requires confirmation','Кредитный сбор — применимость требует подтверждения'),80,'estimate')],
  L('Previous-cycle on-campus COA: USD 87,924','COA прошлого цикла в кампусе: 87 924 USD'),
  L('USD 87,924 for the Fall 2026 cohort in 2026–27','87 924 USD для набора осени 2026 в 2026–27 году'),
  L('Nonresident undergraduate, first enrolled Fall 2026, living on campus','Бакалавр-нерезидент, впервые зачислен осенью 2026, проживает в кампусе'),
  budget=87924,status='previous-cycle',note=L('The table is for 2026–27 and the Fall 2026 cohort, not Fall 2027. Its base line is labelled Fees; no tuition-only total is inferred. The published total includes USD 80 loan fee whose applicability to an international student is not established. A separate at-home category has a USD 1,000 arithmetic discrepancy in its nonresident line; that category is not used for this on-campus reference. Competitive awards are not deducted.',
    'Таблица относится к 2026–27 и набору осени 2026, не осени 2027. Базовая строка названа Fees; отдельная общая цена только обучения не выведена. Опубликованный итог включает кредитный сбор 80 USD, применимость которого к иностранцу не установлена. В отдельной категории проживания дома есть арифметическое расхождение 1 000 USD в строке нерезидента; она не используется для этой сметы проживания в кампусе. Конкурсные награды не вычтены.'))
r=records[2];s=src(r['id'],'cost-reference')
r['costs']=costs('2026–2027',s['source'],'2026-11-01',FY,
  [(L('Tuition','Обучение'),29840,'billed'),(L('Fees','Сборы'),6485,'billed'),(L('Housing and meals','Жильё и питание'),20179,'estimate')],
  L('Previous-cycle published estimate: USD 56,504','Опубликованная оценка прошлого цикла: 56 504 USD'),
  L('USD 56,504, international row for 2026–27','56 504 USD, международная категория 2026–27'),
  L('International undergraduate, standard double housing and average meal plan','Иностранный бакалавр, стандартное двухместное жильё и средний план питания'),
  tuition=29840,budget=56504,status='previous-cycle',note=L('Annual 2026–27 budget as of July 2026, subject to change; not a Fall 2027 quote. SEVIS fee is explicitly excluded. Books, travel and personal costs are not itemised in this three-line summary and are not assumed covered. The university-published estimate is not a guaranteed bill or net cost after scholarship.',
    'Годовой бюджет 2026–27 по состоянию на июль 2026, может меняться; не цена осени 2027. SEVIS явно исключён. Книги, дорога и личные расходы в трёхстрочной сводке не расписаны и не считаются покрытыми. Опубликованная университетом оценка — не гарантированный счёт и не остаточная цена после стипендии.'))

r=records[5];s=src(r['id'],'cost-reference')
r['costs']=costs('2026–2027',s['source'],s['verified'],
  L('Non-New-Jersey undergraduate, School of Arts and Sciences–Newark base, living on campus','Бакалавр-нерезидент Нью-Джерси, базовые ставки School of Arts and Sciences–Newark, жильё в кампусе'),
  [(L('Tuition','Обучение'),36831,'billed'),(L('Fees','Сборы'),3275,'billed'),(L('Food and housing','Питание и жильё'),21943,'billed')],
  L('Previous-cycle three-item total: USD62,049','Итог трёх строк прошлого цикла:62 049USD'),
  L('USD62,049 excludes additional international expenses','62 049USD без дополнительных международных расходов'),
  L('Published Newark tuition, fees, food and housing only','Только опубликованные обучение, сборы, питание и жильё Newark'),
  tuition=36831,billed=62049,status='previous-cycle',note=L('2026–27 academic-year Newark base, not New Brunswick or Camden and not full COA. F-1/J-1 students pay this nonresident rate plus SAF USD500, insurance/health fees, books, travel and other living costs. The SAF period is not stated in this summary and is not guessed. School/programme and housing choices may change charges. No Fall2027 annual cost is assigned.',
    'База Newark за учебный2026–27, не New Brunswick или Camden и не полная COA. Иностранцы F-1/J-1 платят эту ставку нерезидента плюс SAF500USD, страховку/медицинские сборы, книги, дорогу и прочие расходы. Период SAF в сводке не указан и не угадан. Программа и жильё могут менять счёт. Годовая стоимость осени2027 не назначена.'))
r=records[0];s=src(r['id'],'cost-business-scope')
r['costs'].update(source=s['source'],verified=s['verified'],note=L('The official School of Business page lists nonresident full-time tuition USD48,812 for two terms, with international services USD500 per fall/spring term additional. That is one school, not a university-wide quote or a Computer Science rate. Its academic year was not established from the readable body; a search title alone is not used. No comparable annual cost is assigned to this profile.',
  'Официальная страница School of Business указывает обучение очного нерезидента48 812USD за два семестра и международный сервис500USD за каждый осенний/весенний семестр дополнительно. Это один факультет, не общая цена университета и не ставка Computer Science. Учебный год не установлен по прочитанному тексту; одного названия в поиске недостаточно. Сопоставимая годовая сумма профилю не назначена.'))
r['links']['cost']=s['source']

# Cost references preserve the exact year, coverage and unresolved contradictions.
r=records[3]
r['costs']['note']=L('The international table publishes USD61,156 for nine months: tuition/mandatory fees44,339, housing/food12,431, insurance1,916 and miscellaneous2,470. Its academic year is not established on that table; the domestic page’s2026–27 heading is not transferred. Summer and extra programme/course costs are separate. No comparable Fall2027 annual cost is assigned.',
  'Международная таблица публикует61 156USD за девять месяцев: обучение/обязательные сборы44 339, жильё/питание12 431, страховка1 916, прочее2 470. Учебный год самой таблицы не установлен; заголовок2026–27 внутренней страницы не перенесён. Лето и дополнительные расходы программы/курсов отдельные. Сопоставимая годовая цена осени2027 не назначена.')
r=records[6];s=src(r['id'],'cost-reference')
r['costs']=costs('2026–2027',s['source'],DAY,FY,
  [(L('Tuition','Обучение'),39678,'billed'),(L('Fees','Сборы'),5224,'billed'),(L('Housing and meals','Жильё и питание'),17082,'estimate'),(L('Books, travel, insurance and miscellaneous','Книги, дорога, страховка и прочее'),8665,'estimate')],
  L('Previous-cycle published COA: USD70,649','Опубликованная COA прошлого цикла:70 649USD'),L('USD70,649 for the published2026–27 academic-year estimate','70 649USD по опубликованной оценке учебного2026–27года'),
  L('All undergraduate programmes except BGS; not a semester exchange price','Все программы бакалавриата, кроме BGS; не цена семестрового обмена'),tuition=39678,budget=70649,status='previous-cycle',
  note=L('Published financial-guarantee estimate for2026–27; not Fall2027–28. Other costs already include books, travel, insurance and miscellaneous. BGS47,981 and Storrs exchange12,248 per semester are different categories and are not substituted.',
    'Опубликованная оценка финансового обеспечения2026–27, не осени2027–28. Прочее уже включает книги, дорогу, страховку и разные расходы. BGS47 981 и обмен Storrs12 248 за семестр — другие категории, не подставлены.'))
r=records[7];s=src(r['id'],'cost-reference-financial-aid')
conflict=L('Both pages label2026–27 non-South-Carolina undergraduate costs. Admissions lists tuition/feesUSD42,852; Financial Aid lists tuition42,020 plus fees1,832 = USD43,852 (sum by UniPath). The USD1,000 discrepancy is unresolved and is not described as programme variation. Admissions60,308 excludes other expenses and is not comparable to the full COA66,180 (68,704 with laptop). These are previous-year references, not Fall2027 rates; no budget sufficiency is confirmed.',
  'Обе страницы называют2026–27 и бакалавриат нерезидента Южной Каролины. Приём указывает tuition/fees42 852USD; Financial Aid — обучение42 020 плюс сборы1 832 =43 852USD (сумма UniPath). Разница1 000USD не разрешена и не названа различием программ. Итог приёма60 308 исключает прочие расходы и несопоставим с полной COA66 180 (68 704 с ноутбуком). Это прошлогодние справочные суммы, не тарифы осени2027; достаточность бюджета не подтверждается.')
r['costs']=costs('2026–2027',s['source'],DAY,FY,[],L('Conflict in previous-year official tuition/fee figures','Конфликт прошлогодних официальных сумм обучения/сборов'),None,L('Comparable scope unresolved','Сопоставимость области не разрешена'),status='conflict',note=conflict)
r['costs']['conflict']={'text':conflict}
r=records[8];s=src(r['id'],'cost-reference')
r['costs']=costs('2026–2027',s['source'],s['verified'],
  L('Nonresident undergraduate, 15–19 credits, on-campus double room and average meal plan','Бакалавр-нерезидент, 15–19 кредитов, двухместное общежитие и средний план питания'),
  [(L('Tuition','Обучение'),44790,'billed'),(L('Mandatory fees','Обязательные сборы'),3206,'billed'),
   (L('Housing and food allowance','Смета жилья и питания'),18900,'billed'),(L('Books and supplies','Книги и материалы'),1500,'estimate'),
   (L('Personal expenses','Личные расходы'),1618,'estimate'),(L('Transportation','Транспорт'),1400,'estimate'),
   (L('Federal loan origination fee — conditional','Сбор федерального кредита — условный'),56,'estimate')],
  L('Previous-cycle published COA: USD71,470, excluding SHIP','Опубликованная COA прошлого цикла: 71 470 USD без SHIP'),
  L('USD71,470; health insurance and other charges may add costs','71 470 USD; страховка и другие сборы могут добавлять расходы'),
  L('Published nonresident on-campus budget before aid','Опубликованная смета нерезидента в кампусе до помощи'),tuition=44790,budget=71470,status='previous-cycle',
  note=L('2026–27 reference, not Fall 2027. SHIP health insurance is explicitly not automatically included in COA. The USD56 loan fee is a federal-loan origination charge and is not assumed applicable to a foreign student. Mandatory-fee allowance excludes some other charges. Summer/field session costs are separate; the Colorado resident COF allowance is not deducted from this nonresident price.',
    'Ориентир 2026–27, не осени 2027. Страховка SHIP прямо не включается в COA автоматически. Сбор 56 USD относится к выдаче федерального кредита и не считается автоматически применимым к иностранцу. Смета обязательных сборов исключает часть других платежей. Лето/полевая сессия отдельно; льгота COF резидента Колорадо из этой цены нерезидента не вычитается.'))
finish(records,2,annual)
