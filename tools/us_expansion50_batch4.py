"""Fourth approved batch: programme exceptions, recommended English and aid scopes."""
from us_expansion50_common import *
configs=[
 ('university-of-colorado-boulder','Boulder','Боулдер','Colorado','https://www.colorado.edu/'),
 ('university-of-new-hampshire','Durham','Дарем','New Hampshire','https://www.unh.edu/'),
 ('university-of-tennessee-knoxville','Knoxville','Ноксвилл','Tennessee','https://www.utk.edu/'),
 ('wake-forest-university','Winston-Salem','Уинстон-Сейлем','North Carolina','https://www.wfu.edu/'),
 ('george-washington-university','Washington, D.C.','Вашингтон, округ Колумбия','District of Columbia','https://www.gwu.edu/'),
 ('stevens-institute-of-technology','Hoboken','Хобокен','New Jersey','https://www.stevens.edu/'),
 ('baylor-university','Waco','Уэйко','Texas','https://www.baylor.edu/'),
 ('marquette-university','Milwaukee','Милуоки','Wisconsin','https://www.marquette.edu/'),
 ('yeshiva-university','New York','Нью-Йорк','New York','https://www.yu.edu/'),
 ('wabash-college','Crawfordsville','Крофордсвилл','Indiana','https://www.wabash.edu/')]
records=[record(*c) for c in configs]
def labelled(r,en,ru):
 for key in ('sat','act'):r['academics'][key]['label']=L(en,ru)
for i,r in enumerate(records):
 if i==0:
  policy(r,'optional',L('First-year SAT/ACT are optional and may be self-reported. English-proof SAT EBRW 580 is a section score, not a composite admission minimum.',
    'SAT/ACT на первый курс необязательны; разрешено самостоятельное указание баллов. SAT EBRW 580 для английского — балл раздела, не общий вступительный минимум.'),topic='application-checklist')
  application_fee(r,70,L('International application fee; domestic USD 65 does not apply. Common App fee-waiver request is possible, not automatic.',
    'Международный сбор; 65 USD для внутренних абитуриентов не применены. Можно запросить освобождение Common App, оно не автоматически.'),topic='application-checklist')
  english(r,6.5,80,4.0,115,L('Tests within two calendar years of enrolment. A medium-of-instruction letter alone is insufficient; country and duration conditions apply. English evidence is needed by Regular Decision for scholarship consideration; Pathway conditional admission is separate.',
    'Тесты в пределах двух календарных лет до зачисления. Одного письма о языке недостаточно; действуют условия страны и длительности обучения. Для рассмотрения на стипендии английский нужен к Regular Decision; условный маршрут Pathway отдельный.'),topic='english')
  event(r,'Early Action','EA','15 November');event(r,'Regular Decision','RD','15 January')
  r.update(type=L('Public university','Государственный университет'),founded=1876)
 elif i==1:
  application_fee(r,65,L('Non-resident application fee. A Common App waiver can be requested; approval is not automatic.',
    'Сбор для нерезидента. Можно запросить освобождение Common App; одобрение не автоматически.'))
  policy(r,'optional',L('SAT/ACT optional, highest sections considered, no numerical test cut-offs. Published admitted-student averages SAT 1175/ACT 25 have no named cohort and are not minima.',
    'SAT/ACT необязательны, учитываются лучшие разделы, числового отсечения нет. Опубликованные средние поступивших SAT 1175/ACT 25 не имеют указанного набора и не являются минимумами.'))
  english(r,6.5,87,4.5,120,L('Official English minima; the source describes TOEFL versions around January 2026 without an exact day. Waivers are reviewed case by case. TOEFL Essentials is a separate test, not an iBT scale.',
    'Официальные минимумы английского; источник разделяет версии TOEFL около января 2026 без точного дня. Освобождение рассматривается индивидуально. TOEFL Essentials — отдельный тест, не шкала iBT.'))
  event(r,'Early Action','EA','15 November');event(r,'Required documents — Early Action','documents','12 December');event(r,'Regular Decision','RD','1 February')
  r['admissions']['documents']=[L('School transcripts with English translation; unofficial records may complete the application, official copies after confirmation by the yearless June 30 date. One recommendation. Exact Uzbek qualification remains unconfirmed.',
    'Школьные оценки с английским переводом; для заявки возможны неофициальные записи, после подтверждения нужны официальные к указанному без года 30 июня. Одна рекомендация. Точная узбекская квалификация не подтверждена.')]
 elif i==2:
  application_fee(r,75,L('Non-refundable international fee; international applicants cannot receive a waiver.',
    'Невозвратный международный сбор; иностранцам освобождение не предоставляется.'),waiver=False)
  policy(r,'conditional',L('SAT/ACT are explicitly required by Architecture/Design, Nursing, Music and Engineering, including Computer Science. The remaining routes need separate policy review; do not infer a universal optional policy. Conditional English-route mathematics thresholds are not general composite admission minima.',
    'SAT/ACT явно требуются для архитектуры/дизайна, сестринского дела, музыки и инженерного колледжа, включая Computer Science. Политика остальных маршрутов проверяется отдельно; всеобщая optional не установлена. Математические пороги условного языкового маршрута не являются общими вступительными минимумами.'))
  labelled(r,'Required for named colleges, including CS','Обязательны для указанных колледжей, включая CS')
  english(r,6.5,79,4.0,110,L('Published direct-admission thresholds. DET, Cambridge and PTE are accepted for admission but not placement: ELI 110 or EPE is required for placement. SAT Reading/Writing 540 and ACT English 21 are language alternatives, not composite cut-offs. Conditional ELI is separate.',
    'Опубликованные пороги прямого поступления. DET, Cambridge и PTE принимаются для приёма, но не распределения: для него нужны ELI 110 или EPE. SAT Reading/Writing 540 и ACT English 21 — языковые альтернативы, не общие пороги. Условный маршрут ELI отдельный.'))
  for name,kind,d in [('Early Action','EA','1 November'),('Required documents — Early Action','documents','15 November'),('Regular Decision','RD','5 January'),('Required documents — Regular Decision','documents','20 January')]:event(r,name,kind,d)
  r['admissions']['documents']=[L('Official school/ministry records with certified literal English translation. STARS is required for US-school applicants; applicants schooled outside the US do not complete it. Nursing and Architecture use Early Action dates.',
    'Официальные документы школы/министерства с заверенным буквальным английским переводом. STARS нужен выпускникам школ США; учившиеся вне США его не заполняют. Сестринское дело и архитектура используют сроки Early Action.')]
  r.update(type=L('Public university','Государственный университет'),founded=1794)
 elif i==3:
  application_fee(r,85,L('Application fee; applicants may request a waiver on the application.',
    'Сбор заявки; можно запросить освобождение в самой заявке.'))
  policy(r,'optional',L('SAT/ACT optional, self-report allowed, superscoring for admission tests. This does not waive English-proficiency evidence; English exams are not superscored.',
    'SAT/ACT необязательны, разрешены самостоятельные баллы и superscoring вступительных тестов. Это не отменяет английский; языковые экзамены не superscore.'))
  english(r,note=L('IELTS, TOEFL and DET are accepted; numerical minimum has not been confirmed. Three years in an English-medium school may qualify for a waiver. The source’s January 1, 2026 TOEFL-change wording is not used to infer a score scale.',
    'IELTS, TOEFL и DET принимаются; числовой минимум не подтверждён. Три года в англоязычной школе могут дать освобождение. Формулировка источника об изменении TOEFL 1 января 2026 не использована для догадки о шкале.'))
  event(r,'Early Decision I','ED','15 November',binding=True)
  event(r,'Early Action','EA','15 November',note=L('Only first-generation college applicants meeting Wake Forest’s stated parent/guardian education criteria. The entry year remains unconfirmed.',
    'Только первое поколение студентов согласно критериям образования родителей/опекунов Wake Forest. Год набора не подтверждён.'))
  event(r,'Early Decision II','ED','1 January',binding=True);event(r,'Regular Decision','RD','1 January')
  r['scholarships']['needBased']['availableToInternational']=False
  s=src(r['id'],'stamps-coverage')
  r['scholarships']['fullRide'].update(available=True,internationalEligible=True,basis='merit',name='Stamps Scholarship',id='stamps',category='merit',entryTerm=None,entryYear=None,deadlineScope='annual-rule',
    covers=dict(tuition=True,housing=True,meals=True,insurance=None,books=None),source=s['source'],verified=DAY,
    note=L('Stamps is a highly competitive full-cost Signature award, around15 entering recipients. It covers tuition, fees, room and board, plus USD3,400 for books/personal expenses; up to USD15,000 total approved travel/study across four years. International first-year eligibility is explicitly confirmed on the admissions page. Insurance, exact renewal GPA, stacking and award-year amounts remain unconfirmed; this is not guaranteed aid for every international applicant.',
      'Stamps — конкурсная награда Signature с полным основным покрытием, около15 новых получателей. Покрывает обучение, сборы, жильё и питание, плюс3 400USD на книги/личные расходы; до15 000USD суммарно на одобренные поездки/учёбу за четыре года. Международные первокурсники явно допущены на странице приёма. Страховка, точный GPA продления, совместимость и суммы конкретного года не подтверждены; помощь не гарантируется всем иностранцам.'),
    renewable=L('Four undergraduate years described; detailed GPA and stacking conditions still need verification. General merit terms usually require full-time enrolment and campus housing.',
      'Описаны четыре года бакалавриата; точные условия GPA и совместимости ещё проверяются. Общие условия академических наград обычно требуют полной нагрузки и жилья на кампусе.'),
    howToApply=L('Complete the admission application by annual November15; no ordinary separate award form. Finalists are invited to campus interviews. Fall2027 cycle not confirmed for this date.',
      'Завершите заявку на поступление к ежегодному15ноября; обычной отдельной формы награды нет. Финалистов приглашают на интервью в кампус. Цикл осени2027 для этой даты не подтверждён.'))
  event(r,L('Stamps — completed admission application','Stamps — завершённая заявка на поступление'),'admission','15 November',topic='stamps-coverage',award='stamps')
 elif i==4:
  application_fee(r,80,L('Non-refundable application fee.','Невозвратный сбор заявки.'))
  policy(r,'conditional',L('Optional except BA/BS-MD, homeschool and narrative-only secondary-school evaluations. ACT Science required for BA/BS-MD. Otherwise optional also for international applicants and merit scholarships.',
    'Необязательны, кроме BA/BS-MD, домашнего обучения и школ только с описательными оценками. Для BA/BS-MD нужен ACT Science. В остальных случаях optional распространяется на иностранцев и академические стипендии.'),topic='sat-act')
  labelled(r,'Optional with programme and school exceptions','Необязательны с исключениями по программе и школе')
  english(r,6.5,None,4.5,120,L('IELTS 6.5, new TOEFL 4.5 and DET 120 published. Old TOEFL 90 is printed with a January 26, 2026 cutoff inconsistent with the January 21 scale change; the old numeric minimum is not installed under a silently corrected date. EAP may be required after review.',
    'Опубликованы IELTS 6,5, новый TOEFL 4,5 и DET 120. Старый TOEFL 90 указан с границей 26 января 2026, несовместимой со сменой шкалы 21 января; старый минимум не назначен под молча исправленной датой. После рассмотрения может понадобиться EAP.'))
  event(r,'Early Decision I','ED','1 November',binding=True);event(r,'Early Decision II','ED','5 January',binding=True);event(r,'Regular Decision','RD','5 January')
 elif i==5:
  application_fee(r,75,L('Published first-year application fee.','Опубликованный сбор заявки на первый курс.'))
  policy(r,'conditional',L('Test-optional through Fall 2029 except accelerated Pre-Medicine and Pre-Law. Pre-Medicine SAT 1400/ACT 32 with science in one sitting is programme-specific; it is not a university-wide minimum. The published general SAT range has no established percentile/cohort.',
    'Test-optional до осени 2029, кроме ускоренных Pre-Medicine и Pre-Law. SAT 1400/ACT 32 с science за одну сдачу для Pre-Medicine относится только к программе, не всему вузу. У общего опубликованного диапазона SAT не установлены перцентили/набор.'),cycle=L('Through Fall 2029','До осени 2029 включительно'))
  labelled(r,'Optional except accelerated Pre-Medicine / Pre-Law','Необязательны, кроме ускоренных Pre-Medicine / Pre-Law')
  english(r,6.0,80,4.0,105,L('Published English minima. SAT EBRW 550 is an English-proof alternative, not composite minimum. Waivers after three years in US schools are case by case. Two recommendations, essay and official records from the institution are required.',
    'Опубликованные минимумы английского. SAT EBRW 550 — альтернатива подтверждения английского, не общий минимум. Освобождения после трёх лет в школах США индивидуальны. Нужны две рекомендации, эссе и официальные записи от учреждения.'))
  for name,kind,d,b in [('Early Decision I','ED','15 November',True),('Early Action','EA','1 December',False),('Early Decision II','ED','5 January',True),('Regular Decision','RD','5 January',False)]:event(r,name,kind,d,binding=b,topic='admission-deadlines')
 elif i==6:
  application_fee(r,0,L('Verified free application via Common App or Baylor Online Application; Baylor is not on ApplyTexas.',
    'Подтверждена бесплатная заявка через Common App или Baylor Online Application; в ApplyTexas Baylor нет.'),topic='application-fee')
  policy(r,'optional',L('SAT/ACT optional; international non-submitters may choose an interview. English-proof section scores are separate from admission testing.',
    'SAT/ACT необязательны; иностранцы без баллов могут выбрать интервью. Языковые баллы разделов отделены от вступительных тестов.'))
  english(r,6.5,80,4.0,110,L('Published English thresholds; TOEFL Home Edition/MyBest and IELTS Indicator accepted. SAT EBRW 520/ACT English 20 are English alternatives. Individual holistic consideration below published thresholds is possible. ECE/WES evaluation is optional; original school records and literal English translation remain required.',
    'Опубликованные пороги английского; принимаются TOEFL Home Edition/MyBest и IELTS Indicator. SAT EBRW 520/ACT English 20 — языковые альтернативы. Возможно индивидуальное рассмотрение ниже порогов. Оценка ECE/WES необязательна; оригинальные школьные записи и буквальный английский перевод нужны.'))
  event(r,'Early Decision','ED','1 November',binding=True);event(r,'Early Action','EA','1 November',binding=False);event(r,'Regular Decision','RD','1 February',binding=False)
  r['scholarships']['needBased']['availableToInternational']=True
  r['scholarships']['fullRide']['note']=L('Beginning Fall 2027, international need-based aid consideration uses BIFAA; it does not guarantee an award and is not required for merit. Official sources conflict on priority November 1 versus November 15, including two sections on one page. Final February 1 is consistent; no single priority deadline is presented as confirmed. Largest award/renewal remains unverified.',
    'С осени 2027 иностранцы рассматриваются на помощь по нуждаемости через BIFAA; награда не гарантирована, для академических стипендий BIFAA не нужен. Официальные источники противоречат по приоритету 1 или 15 ноября, включая два раздела одной страницы. Итоговое 1 февраля согласуется; единый приоритет не показан подтверждённым. Крупнейшая награда/продление ещё не проверены.')
 elif i==7:
  policy(r,'optional',L('SAT/ACT optional. SAT English 560 and ACT English 24/Reading 20 are language-proof alternatives, not composite admission minima.',
    'SAT/ACT необязательны. SAT English 560 и ACT English 24/Reading 20 — варианты подтверждения языка, не общие вступительные минимумы.'))
  english(r,6.5,86,4.5,120,L('IELTS at least 6.5 IN EACH SECTION. Old TOEFL 86 with every section20; new total4.5. DET120 total and subscore115 PREFERRED, not a hard minimum. Credential evaluation is in the college/university-study section, not a universal school-only first-year requirement.',
    'IELTS не ниже 6,5 В КАЖДОМ РАЗДЕЛЕ. Старый TOEFL 86 и каждый раздел20; новый общий4,5. DET120 общий, раздел115 ЖЕЛАТЕЛЕН, не жёсткий минимум. Оценка документов относится к разделу обучения в колледже/университете, не всем первокурсникам только после школы.'))
  r['english']['ielts']['sections']=L('At least 6.5 in each section','Не ниже 6,5 в каждом разделе')
  event(r,'Early Action','EA','15 November',topic='admission-deadlines');event(r,'Regular Decision','RD','1 February',topic='admission-deadlines')
 elif i==8:
  application_fee(r,65,L('Non-refundable application fee.','Невозвратный сбор заявки.'))
  policy(r,'conditional',L('SAT/ACT required only for Honors applicants; optional for others. Official scores are required if submitted. This does not waive English evidence or establish eligibility for every undergraduate college.',
    'SAT/ACT требуются только кандидатам Honors; остальным необязательны. При подаче нужны официальные баллы. Это не отменяет английский и не подтверждает право поступления во все колледжи бакалавриата.'))
  labelled(r,'Optional except Honors','Необязательны, кроме Honors')
  english(r,7,82,None,115,L('Published IELTS7, TOEFL82 on the old scale and DET115. A new TOEFL1–6 threshold is not printed and is not guessed. If records are not in English or Hebrew, the source calls for certified translation/evaluation by a NACES-approved agency.',
    'Опубликованы IELTS7, TOEFL82 старой шкалы и DET115. Новый порог TOEFL1–6 не напечатан и не угадан. Для документов не на английском или иврите источник требует заверенный перевод/оценку агентства NACES.'))
  event(r,'Regular Decision','RD','2027-02-01',topic='admission-deadlines',cycle_quote='Fall 2027')
  event(r,L('Early Decision Honors','Early Decision Honors'),'ED','2026-11-02',topic='admission-deadlines',cycle_quote='Fall 2027',note=L('Honors route; its binding agreement has not been verified separately. Do not infer the terms from the round name alone.',
    'Маршрут Honors; условия обязательности отдельно не проверены. Они не выводятся только из названия раунда.'))
  scope=L('The verified Computer Science BS belongs to Yeshiva College for Men. Stern College for Women and its programmes are separate; this degree, campus and conditions are not automatically assigned to Stern. Undergraduate Torah/Jewish studies requirements also need programme-specific review.',
    'Проверенная Computer Science BS относится к Yeshiva College for Men. Stern College for Women и его программы отдельные; эта степень, кампус и условия не назначены Stern автоматически. Требования Torah/Jewish studies также проверяются по конкретной программе.')
  r['programNote']=L(str(PARTIAL)+' '+str(scope),PARTIAL.ru+' '+scope.ru)
  r['programEvidence']['computer-science']['campus']='Yeshiva College for Men, New York'
 elif i==9:
  r.update(institutionKind='college',type=L('Private liberal arts college for men','Частный колледж свободных искусств для мужчин'),founded=1832)
  application_fee(r,0,L('Both Wabash Application and Common App are explicitly free for international applicants.',
    'Wabash Application и Common App явно бесплатны для иностранных абитуриентов.'))
  policy(r,'optional',L('SAT/ACT optional also for merit scholarships; superscoring, but self-reported scores are not accepted.',
    'SAT/ACT необязательны также для академических стипендий; superscoring, но самостоятельные баллы не принимаются.'))
  note=L('The source RECOMMENDS these scores: IELTS6.5, old TOEFL85/new4.5 and DET115; they are not installed as hard admission minima. English evidence must be official; waiver decisions are individual. Wabash is a college for men. USD24,990 required financial declaration is neither gross annual cost nor a guaranteed net price after scholarship.',
    'Источник РЕКОМЕНДУЕТ эти баллы: IELTS6,5, старый TOEFL85/новый4,5 и DET115; жёсткими вступительными минимумами они не назначены. Английский подтверждается официально; освобождение индивидуально. Wabash — колледж для мужчин. Обязательная финансовая декларация 24 990 USD — не полная годовая цена и не гарантированная остаточная стоимость после стипендии.')
  english(r,note=note)
  basis=L('University-published recommended English scores','Опубликованные колледжем рекомендованные баллы английского')
  r['english']['ielts'].update(recommended=6.5,recBasis=basis)
  r['english']['toefl']=toefl(85,4.5,note,kind='recommended');r['english']['toefl']['recBasis']=basis
  r['english']['duolingo'].update(recommended=115,recBasis=basis)
  r['admissions']['notes'].append(note)
  for name,kind,d in [('Early Decision','ED','15 November'),('Early Action','EA','1 December'),('Regular Decision','RD','15 January')]:event(r,name,kind,d)
  r['admissions']['documents']=[L('Official school records from the school, last four years or last three if still enrolled, certified English translation and school report. Recommendation is optional. No self-reported transcripts. Exact Uzbek qualification remains unknown.',
    'Официальные школьные записи от школы за последние четыре года или три для учащегося, заверенный английский перевод и школьный отчёт. Рекомендация необязательна. Самостоятельные транскрипты не принимаются. Точная узбекская квалификация неизвестна.')]
r=records[7];s=src(r['id'],'cost-current-unpublished')
r['costs'].update(status='not-published',academicYear='2027–2028',currency='USD',source=s['source'],verified=DAY,
  note=L('The official 2027–28 undergraduate cost table currently marks tuition, housing, fees and other amounts TBD. Instruments show USD 0–TBD, not a confirmed zero. The separate 2026–27 full-time table lists tuition USD 53,890, student fees 1,200 and university housing/food 17,480; those previous-cycle figures are not assigned to Fall 2027. Programme, living arrangement and international travel costs require individual review.',
    'В официальной таблице бакалавриата 2027–28 обучение, жильё, сборы и прочие суммы пока TBD — ещё не определены. Инструменты указаны как 0–TBD USD, а не подтверждённый ноль. Отдельная таблица очного обучения 2026–27 содержит обучение 53 890 USD, сборы 1 200 и университетское жильё/питание 17 480; эти прошлогодние суммы не назначены осени 2027. Программа, вариант проживания и международная дорога проверяются отдельно.'))
r['scholarships']['needBased']['availableToInternational']=False
aid_source=src(r['id'],'international-aid-scope')['source']
r['scholarships']['needBased'].update(source=aid_source,verified=DAY)
r['scholarships']['fullRide'].update(source=aid_source,verified=DAY)
r['scholarships']['fullRide']['note']=L('The international scholarship page explicitly says need-based scholarships are unavailable and merit scholarships cannot cover all costs: even the largest leaves room, board, fees and books to the family. All applicants are automatically considered for the Père Marquette Award; other awards require admitted students to apply separately. The largest named award, renewal and stacking terms remain under review. No award is deducted from cost.',
  'Международная страница явно исключает стипендии по нуждаемости и сообщает, что академические награды не покрывают все расходы: даже крупнейшая оставляет семье жильё, питание, сборы и книги. Все кандидаты автоматически рассматриваются на Père Marquette Award; остальные награды требуют отдельной заявки после приёма. Название крупнейшей награды, продление и совместимость ещё проверяются. Награда из стоимости не вычитается.')
r=records[9];s=src(r['id'],'international-awards')
r['scholarships']['merit']=[dict(id='presidential-international',category='merit',basis='merit',
  name=L('Presidential International Scholarship','Международная президентская стипендия'),
  amount=L('Up to USD 48,000 per academic year','До 48 000 USD за учебный год'),
  eligibility=L('International applicants; competitive review of the admissions application. An award is included in the admission letter if granted.',
    'Иностранные кандидаты; конкурсная оценка заявки на поступление. При присуждении награда указана в письме о приёме.'),
  renewable=L('Up to eight semesters, subject to Satisfactory Academic Progress; exact SAP thresholds still require review.',
    'До восьми семестров при удовлетворительной академической успеваемости; точные пороги SAP ещё проверяются.'),
  deadlineScope='annual-rule',entryTerm=None,entryYear=None,source=s['source'],verified=DAY,
  note=L('Priority completed application by 15 January is an annual rule, not a confirmed Fall 2027 deadline. Separate ED and virtual-event awards are USD 2,000 per year each; stacking has not been confirmed. WISE up to USD 4,500 per year is earned work, not guaranteed scholarship. This maximum is not deducted from cost and is not labelled full tuition or full ride.',
    'Приоритет полностью поданной заявки к 15 января — ежегодное правило, не подтверждённый срок осени 2027. Отдельные награды ED и за виртуальные мероприятия — по 2 000 USD в год; совместимость не подтверждена. WISE до 4 500 USD в год — заработок, не гарантированная стипендия. Максимум не вычитается из стоимости и не назван full tuition или full ride.'))]
r=records[5];s=src(r['id'],'cost-reference')
r['costs']=costs('2026–2027',s['source'],DAY,FY,
  [(L('Tuition and fees','Обучение и сборы'),68230,'billed'),(L('Housing and meals','Жильё и питание'),20744,'estimate'),
   (L('Books and supplies','Книги и материалы'),1200,'estimate'),(L('Miscellaneous','Прочее'),1050,'estimate'),
   (L('Loan fee, only for students offered federal loans','Кредитный сбор, только при предложении федерального кредита'),70,'estimate')],
  L('Previous-cycle published COA: USD 91,294','Опубликованная COA прошлого цикла: 91 294 USD'),
  L('USD 91,294, including a conditional federal loan fee','91 294 USD, включая условный сбор федерального кредита'),
  L('Full-time undergraduate living on campus; not an international-specific quotation','Очный бакалавриат с проживанием в кампусе; не отдельная международная смета'),
  budget=91294,status='previous-cycle',note=L('The 2026–27 published total includes USD 70 only for students offered federal loans. That fee is not assumed applicable to an international student. Insurance coverage is not established by this table. Off-campus and commuter figures describe other arrangements. No comparable Fall 2027 annual cost is assigned.',
    'Опубликованный итог 2026–27 включает 70 USD только для получивших предложение федерального кредита; применимость сбора к иностранцу не предполагается. Покрытие страховки таблицей не установлено. Суммы вне кампуса и для приезжающих — другие варианты проживания. Сопоставимая годовая стоимость осени 2027 не назначена.'))
finish(records,4)
