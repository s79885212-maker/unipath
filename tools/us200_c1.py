# -*- coding: utf-8 -*-
"""United States expansion, batch C, part 1. Every fact below was read on the
official page named next to it on 12 October 2026."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
NY, MA, CA = 'New York', 'Massachusetts', 'California'
IL, PA = L('Illinois', 'Иллинойс'), L('Pennsylvania', 'Пенсильвания')
ACCEPTED = L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')
NOINTL = L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')
MAJORS = L('list of majors', 'список программ')

# --------------------------------------------------------- Agnes Scott College
S = 'https://www.agnesscott.edu/admission/undergraduate-admission/international-students/index.html'
Q = 'https://www.agnesscott.edu/admission/undergraduate-admission/international-students/application-requirements.html'
T = 'https://www.agnesscott.edu/admission/undergraduate-admission/cost-of-attendance.html'
PR = 'https://www.agnesscott.edu/admission/undergraduate-admission/scholarships-financial-aid/100k-promise.html'
records.append(R(
    'agnes-scott-college', 'Agnes Scott College', 'Agnes Scott', L('Decatur', 'Декейтер'), L('Georgia', 'Джорджия'), 'liberal-arts', L('Private liberal arts college for women', 'Частный женский колледж свободных искусств'),
    L('A private liberal arts college for women in Decatur, Georgia, near Atlanta. It is test-optional. Under the Agnes Scott $100K+ Promise every student admitted for Fall 2027, international students included, receives a renewable merit scholarship of at least $25,000 a year; the college offers no need-based aid to international students.',
      'Частный женский колледж свободных искусств в Декейтере, штат Джорджия, рядом с Атлантой. Тесты SAT/ACT необязательны. По программе Agnes Scott $100K+ Promise каждая принятая на осень 2027, включая иностранных студенток, получает продлеваемую стипендию за успехи не менее $25,000 в год; помощи по потребности иностранным студенткам колледж не даёт.'),
    ['other'],
    {'website': 'https://www.agnesscott.edu/', 'admissions': 'https://www.agnesscott.edu/admission/undergraduate-admission/application-dates-deadlines.html', 'international': S, 'portal': 'https://www.commonapp.org/',
     'scholarships': PR, 'aid': 'https://www.agnesscott.edu/admission/undergraduate-admission/scholarships-financial-aid/index.html', 'cost': T},
    verified=V, platforms=[COMMON],
    programNote=L('The list of majors was not read on this check, so no fields are listed.', 'Список программ при этой проверке не прочитан, поэтому направления не указаны.'),
    rounds=[
        rd('ED', '2026-11-01', S, V, L('Admission and scholarship notification on 1 December; deposit due 15 December.', 'Решение о приёме и стипендии — 1 декабря; депозит до 15 декабря.'), note=NOYEAR, applies=INTL),
        rd('EA1', '2026-11-15', S, V, L('Admission and scholarship notification on 15 December; deposit due 1 May.', 'Решение о приёме и стипендии — 15 декабря; депозит до 1 мая.'), note=NOYEAR, applies=INTL),
        rd('EA2', '2027-01-15', S, V, L('Rolling notification; deposit due 1 May. Also the scholarship priority deadline. The page for international students prints 16 January, the dates page 15 January.', 'Решения по мере готовности; депозит до 1 мая. Это также приоритетный срок для стипендий. На странице для иностранных студенток напечатано 16 января, на странице дат — 15 января.'), note=NOYEAR, applies=INTL),
        rd('RD', '2027-03-15', S, V, L('Rolling notification. Merit-based scholarships are not guaranteed for this deadline.', 'Решения по мере готовности. Стипендии за успехи для этого срока не гарантируются.'), note=NOYEAR, applies=INTL),
    ],
    fee=fee(30, L('Required of all international applicants; the college says it cannot be waived.', 'Обязателен для всех иностранных абитуриенток; колледж сообщает, что освобождения нет.'), S, V, waiver_intl=False),
    documents=docs(COMMON, 'transcript', L('Proof of English proficiency', 'Подтверждение владения английским'), L('International Student Certification of Finances', 'International Student Certification of Finances (подтверждение финансов)'), L('Copy of the passport biographical page or national ID card', 'Копия страницы паспорта с данными или национального удостоверения личности')),
    interview=L('Optional: a virtual or in-person interview with the admission counselor.', 'По желанию: онлайн- или очное собеседование с консультантом приёмной комиссии.'),
    english={'ielts': eng(6.5, None, atleast(6.5)), 'toefl': toefl(80, None, J(L('At least 80; TOEFL MyBest scores are accepted.', 'Не ниже 80; принимаются результаты TOEFL MyBest.'), OLDSCALE)), 'duolingo': eng(110, None, atleast(110)),
             'waiver': None, 'note': L('Cambridge English (176), an ELS Level 12 certificate, or SAT Verbal 520 / ACT English 20 are also accepted.', 'Также принимаются Cambridge English (176), сертификат ELS Level 12, SAT Verbal 520 или ACT English 20.'), 'detailsSource': Q, 'detailsVerified': V},
    sat=test('optional', L('Agnes Scott is a test-optional college; SAT or ACT scores are optional for international applicants.', 'Agnes Scott не требует тестов; баллы SAT или ACT необязательны для иностранных абитуриенток.'), source=Q, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 53256, B), (L('Housing and dining', 'Жильё и питание'), 14079, B), (L('Student activity fee', 'Сбор на студенческие мероприятия'), 350, B), (L('Orientation fee', 'Сбор за ориентацию'), 250, B),
                 (BOOKS, 1000, E), (L('Personal expenses (excludes travel)', 'Личные расходы (без дороги)'), 1000, E)],
                h_billed(67935), L('$67,935 total tuition and fees, as printed; books and personal expenses are listed separately as estimates', '$67,935 — итог по плате и сборам, как напечатано; книги и личные расходы указаны отдельно как оценки'),
                INC_BILLED, tuition=53256, billed=67935,
                note=L('With the $25,000 minimum scholarship of the $100K+ Promise the billed amount left to pay is at most $42,935 a year (calculated by UniPath).', 'С учётом минимальной стипендии $25,000 по программе $100K+ Promise к оплате по счёту остаётся не более $42,935 в год (рассчитано UniPath).')),
    fullRide=no_full(L('The $100K+ Promise guarantees at least $25,000 a year to every student admitted for Fall 2027; merit scholarships range up to $34,000 a year, against tuition of $53,256. Agnes Scott offers no need-based aid to international students.', 'Программа $100K+ Promise гарантирует не менее $25,000 в год каждой принятой на осень 2027; стипендии за успехи достигают $34,000 в год при плате за обучение $53,256. Помощи по потребности иностранным студенткам Agnes Scott не даёт.')),
    merit=[award('Agnes Scott $100K+ Promise', L('At least $25,000 a year — $100,000 to $136,000 over four years', 'Не менее $25,000 в год — от $100,000 до $136,000 за четыре года'), L('Every student admitted for Fall 2027, including international students', 'Каждая принятая на осень 2027, включая иностранных студенток'),
                 L('A renewable merit scholarship. Applications complete by 15 January are considered for the full range of merit scholarships ($25,000 to $34,000 a year).', 'Продлеваемая стипендия за успехи. Заявки, завершённые к 15 января, рассматриваются на весь диапазон стипендий ($25,000–$34,000 в год).'), application=AUTO, renewable=True, deadline=L('15 January for the full range', '15 января — для всего диапазона'))],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Agnes Scott does not offer need-based financial assistance to international students and does not accept the CSS Profile or the ISFAA.', 'Agnes Scott не даёт иностранным студенткам помощь по потребности и не принимает CSS Profile и ISFAA.')},
    sources=src('Agnes Scott', ('intl', S), (L('Agnes Scott — application requirements for international students', 'Agnes Scott — требования к заявке иностранных студенток'), Q), ('cost 2026–2027', T), (L('Agnes Scott — $100K+ Promise', 'Agnes Scott — программа $100K+ Promise'), PR)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid', 'merit'),
    unconfirmed=chk('insurance', 'founded', 'stats', MAJORS),
))
nodesc.append('agnes-scott-college')
annual['agnes-scott-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 67935, 'max': 67935}

# ----------------------------------------------------------- Allegheny College
S = 'https://allegheny.edu/apply/international-students/'
H = 'https://allegheny.edu/apply/international-students/how-to-apply/'
T = 'https://allegheny.edu/cost-and-aid/'
records.append(R(
    'allegheny-college', 'Allegheny College', 'Allegheny', L('Meadville', 'Мидвилл'), PA, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Meadville, Pennsylvania. International students are eligible for the same merit scholarships as US students — up to $43,000 a year, guaranteed for four years. Allegheny says full-tuition scholarships are not possible for them and that limited need-based aid can be requested after acceptance.',
      'Частный колледж свободных искусств в Мидвилле, штат Пенсильвания. Иностранные студенты претендуют на те же стипендии за успехи, что и американские, — до $43,000 в год с гарантией на четыре года. Allegheny сообщает, что стипендии на полную плату за обучение им недоступны, а об ограниченной помощи по потребности можно спросить после зачисления.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://allegheny.edu/', 'admissions': 'https://allegheny.edu/apply/', 'international': S, 'portal': 'https://www.commonapp.org/', 'scholarships': 'https://allegheny.edu/cost-and-aid/scholarship-opportunities/', 'aid': T,
     'programs': 'https://allegheny.edu/academics/majors-minors/', 'cost': T},
    verified=V, platforms=[OWNAPP('Allegheny'), COMMON, L('Apply Coalition, Powered by Scoir', 'Apply Coalition (Scoir)')],
    rounds=[rd('ED', '2026-11-01', H, V, note=NOYEAR, applies=INTL), rd('EA', '2026-12-01', H, V, note=NOYEAR, applies=INTL), rd('RD', '2027-02-15', H, V, note=NOYEAR, applies=INTL)],
    documents=docs(L('Allegheny Application, Common Application or Apply Coalition', 'Заявка Allegheny, Common Application или Apply Coalition'), 'transcript', 'english', L('Certification of finances for the total cost of attendance, less any scholarship', 'Подтверждение финансов на полную стоимость за вычетом стипендии')),
    english={'ielts': eng(6.5, None, L('Minimum overall band score of 6.5.', 'Минимальный общий балл 6.5.')),
             'toefl': toefl(80, 4.5, L('Minimum total score of 4.5 on the 1–6 scale, or 80 on the 0–120 scale.', 'Минимальный общий балл 4.5 по шкале 1–6 либо 80 по шкале 0–120.')),
             'duolingo': eng(110, None, L('Minimum score of 110 on the new test.', 'Минимальный балл 110 по новой версии теста.')),
             'waiver': None, 'note': L('Also accepted: Cambridge IGCSE English with a B or higher, an SAT Evidence-Based Reading and Writing score of 580, or an ACT English and Reading score of 24.', 'Также принимаются Cambridge IGCSE English с оценкой B и выше, SAT Evidence-Based Reading and Writing 580 или ACT English and Reading 24.'), 'detailsSource': H, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('First-year students with a typical housing and food choice', 'Первокурсники с типичным выбором жилья и питания'),
                [(TF, 59790, B), (L('Typical housing and food for first-year students', 'Типичные жильё и питание первокурсника'), 14874, B)],
                h_billed(74664), L('$74,664 total estimated cost, as printed', '$74,664 — оценка общей стоимости, как напечатано'), INC_BILLED, tuition=59790, tuition_label='Tuition and fees', billed=74664),
    fullRide=no_full(L('Allegheny states that full-tuition scholarships are not possible for international students; its merit scholarships reach $43,000 a year against tuition and fees of $59,790.', 'Allegheny сообщает, что стипендии на полную плату за обучение иностранным студентам недоступны; стипендии за успехи достигают $43,000 в год при плате и сборах $59,790.')),
    merit=[award(L('Allegheny merit scholarships (Trustee Scholarship)', 'Стипендии Allegheny за успехи (Trustee Scholarship)'), upto(43000), L('International and US applicants alike', 'Иностранные и американские абитуриенты на равных'),
                 L('Guaranteed for four years of study; the award is stated in the acceptance letter.', 'Гарантируются на четыре года обучения; размер указывается в письме о зачислении.'), application=AUTO, renewable=True)],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': None, 'forms': [],
          'note': L('Allegheny offers limited need-based aid for international students, which applicants can ask about after they have been accepted. A copy of the ISFAA or CSS Profile may be submitted if it was completed for other institutions.', 'Allegheny даёт иностранным студентам ограниченную помощь по потребности; о ней можно спросить после зачисления. Копию ISFAA или CSS Profile можно прислать, если она заполнялась для других вузов.')},
    sources=src('Allegheny', ('intl', S), (L('Allegheny — how to apply, international students', 'Allegheny — как подать иностранным студентам'), H), (L('Allegheny — cost and aid 2026–27', 'Allegheny — стоимость и помощь 2026–27'), T)),
    checked=chk('rounds', 'english', 'costs', 'merit', 'aid'),
    unconfirmed=chk('fee', 'tests', 'insurance', 'founded', 'stats'),
))
nodesc.append('allegheny-college')
annual['allegheny-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 74664, 'max': 74664}

# ---------------------------------------------------------- Bentley University
F = 'https://www.bentley.edu/undergraduate/first-year-students'
T = 'https://www.bentley.edu/undergraduate/tuition-financial-aid'
P = 'https://www.bentley.edu/undergraduate/test-optional-faq'
records.append(R(
    'bentley-university', 'Bentley University', 'Bentley', L('Waltham', 'Уолтем'), MA, 'private', L('Private business university', 'Частный университет бизнеса'),
    L('A private business-focused university in Waltham, Massachusetts. Bentley is test-optional for admission, scholarships and its Honors Program. It publishes a separate cost total for first-year international students; the pages read do not state what aid international students can receive.',
      'Частный университет с упором на бизнес в Уолтеме, штат Массачусетс. Тесты не учитываются как обязательные ни при приёме, ни для стипендий, ни для Honors Program. Университет публикует отдельный итог стоимости для иностранных первокурсников; какая помощь доступна иностранным студентам, на прочитанных страницах не сказано.'),
    ['business'],
    {'website': 'https://www.bentley.edu/', 'admissions': F, 'international': 'https://www.bentley.edu/undergraduate/our-international-community', 'portal': 'https://www.commonapp.org/', 'aid': T, 'cost': T},
    verified=V, platforms=[COMMON],
    programNote=L('Only the field named throughout the pages read is listed; Bentley’s list of majors was not read.', 'Указано только направление, которое названо на прочитанных страницах; список программ Bentley не прочитан.'),
    rounds=[
        rd('ED', '2026-11-15', F, V, L('Decisions in late December; deposit due 20 January.', 'Решения в конце декабря; депозит до 20 января.'), note=NOYEAR),
        rd('ED2', '2027-01-15', F, V, L('Decisions in early February; deposit due 4 March.', 'Решения в начале февраля; депозит до 4 марта.'), note=NOYEAR),
        rd('RD', '2027-01-15', F, V, L('Decisions in late March.', 'Решения в конце марта.'), REPLY_MAY1, note=NOYEAR),
    ],
    sat=test('optional', L('Bentley says it evaluates applications without regard to SAT or ACT scores for admission, scholarships and the Honors Program unless the applicant submits them.', 'Bentley сообщает, что рассматривает заявки без учёта баллов SAT или ACT — при приёме, для стипендий и Honors Program, — если абитуриент сам их не прислал.'), source=P, verified=V),
    costs=costs('2026–2027', T, V, L('First-year international students living on campus', 'Иностранные первокурсники, живущие в кампусе'),
                [(TF, 65860, B), (HF, 22010, B), (L('New student enrollment fee', 'Сбор за зачисление нового студента'), 250, B), (L('Student activity fee', 'Сбор на студенческие мероприятия'), 520, B),
                 (L('International student fee', 'Сбор для иностранных студентов'), 230, B), (L('Health insurance (required)', 'Медицинская страховка (обязательна)'), 2650, B),
                 (L('Books and supplies (estimate)', 'Книги и материалы (оценка)'), 1200, E), (L('Personal expense (estimate)', 'Личные расходы (оценка)'), 1550, E)],
                h_coa(94270), tt_coa(94270, 91520), INC_COA_INS, tuition=65860, tuition_label='Tuition and fees', billed=91520, budget=94270,
                note=L('Bentley prints $91,390 for first-year domestic residents and $94,270 for first-year international students, who also pay the international student fee and the required health insurance.', 'Bentley печатает $91,390 для первокурсников из США и $94,270 для иностранных первокурсников: они дополнительно платят сбор для иностранных студентов и обязательную страховку.')),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': NOINTL},
    sources=src('Bentley', ('fy', F), (L('Bentley — tuition and financial aid 2026–2027', 'Bentley — плата и финансовая помощь 2026–2027'), T), (L('Bentley — test-optional FAQ', 'Bentley — вопросы о необязательных тестах'), P)),
    checked=chk('rounds', 'tests', 'intlcost'),
    unconfirmed=chk('fee', 'english', 'aid', 'merit', 'founded', 'stats', MAJORS),
))
nodesc.append('bentley-university')
annual['bentley-university'] = {'currency': 'USD', 'basis': 'total', 'min': 94270, 'max': 94270, 'note': L('First-year international students, with the required health insurance', 'Иностранные первокурсники, с обязательной страховкой')}

# ------------------------------------------------ Illinois Wesleyan University
S = 'https://www.iwu.edu/international/admission.html'
Q = 'https://www.iwu.edu/international/admission-faq.html'
T = 'https://www.iwu.edu/international/costs.html'
SC = 'https://www.iwu.edu/international/scholarships.html'
records.append(R(
    'illinois-wesleyan-university', 'Illinois Wesleyan University', 'Illinois Wesleyan', L('Bloomington', 'Блумингтон'), IL, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts university in Bloomington, Illinois. Applying is free. Merit scholarships of up to $38,000 a year are assigned automatically to all admitted international students. The university says plainly that it has no full-ride scholarship: holders of its full-tuition Presidential Scholarship still pay housing, meals, insurance and travel.',
      'Частный университет свободных искусств в Блумингтоне, штат Иллинойс. Подача бесплатна. Стипендии за успехи до $38,000 в год автоматически назначаются всем принятым иностранным студентам. Университет прямо пишет, что стипендии на полную стоимость у него нет: получатели Presidential Scholarship на полную плату за обучение сами оплачивают жильё, питание, страховку и дорогу.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'medicine', 'education'],
    {'website': 'https://www.iwu.edu/', 'admissions': 'https://admissions.iwu.edu/apply/', 'international': S, 'portal': 'https://www.commonapp.org/', 'scholarships': SC, 'aid': 'https://www.iwu.edu/financial-aid/international-students.html',
     'programs': 'https://www.iwu.edu/majors/', 'cost': T},
    verified=V, platforms=[L('Titan Application', 'Titan Application (заявка IWU)'), COMMON], aliases=['IWU'],
    rounds=[
        rd('EA', '2026-11-15', S, V, L('All application materials are due; decisions on or before 15 December.', 'К этому сроку нужны все материалы; решения — не позже 15 декабря.'), note=NOYEAR, applies=INTL),
        rd('RD', '2027-03-15', S, V, L('The preferred application deadline for international applicants for the autumn semester; decisions about two weeks after an application is complete.', 'Предпочтительный срок подачи для иностранных абитуриентов на осенний семестр; решения — примерно через две недели после завершения заявки.'), name=L('Preferred international deadline', 'Предпочтительный срок для иностранных абитуриентов'), note=NOYEAR, applies=INTL),
    ],
    fee=fee(0, L('There is no application fee, for international and domestic applicants alike.', 'Сбора за заявку нет — ни для иностранных, ни для американских абитуриентов.'), S, V),
    documents=docs(L('Titan Application or Common Application', 'Titan Application или Common Application'), L('Official, verified transcripts sent by the school', 'Официальные заверенные выписки — отправляет школа'), 'english', L('Personal statement', 'Мотивационное письмо'), L('Family Financial Statement', 'Family Financial Statement (финансовая справка семьи)')),
    english={'ielts': eng(6.5, None, atleast(6.5)), 'toefl': toefl(80, None, J(L('At least 80 on the internet-based test.', 'Не ниже 80 по интернет-версии.'), OLDSCALE)), 'duolingo': eng(115, None, atleast(115)),
             'waiver': L('Minimum scores are required for admission; scores more than two years old are not accepted.', 'Минимальные баллы обязательны для приёма; баллы старше двух лет не принимаются.'),
             'note': L('PTE is also accepted (56).', 'Также принимается PTE (56).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('unknown', L('The page for international applicants says “you may submit” the SAT or ACT, without stating that scores are optional or required.', 'На странице для иностранных абитуриентов сказано, что SAT или ACT «можно прислать», — без указания, обязательны баллы или нет.'), source=S, verified=V),
    costs=costs('2025–2026', T, V, L('International students, projected first-year budget', 'Иностранные студенты, прогноз бюджета на первый год'),
                [(L('Tuition (one year, full-time)', 'Обучение (год, полная нагрузка)'), 59226, B), (L('Housing (double occupancy)', 'Жильё (двухместная комната)'), 8498, B), (FOOD, 5376, B), (L('Student activity fees', 'Сборы на студенческие мероприятия'), 204, B),
                 (L('IWU medical insurance (mandatory, approximate)', 'Медицинская страховка IWU (обязательна, примерно)'), 1710, B), (L('Personal expenses (estimated)', 'Личные расходы (оценка)'), 1700, E), (L('Transportation (estimated)', 'Транспорт (оценка)'), 1000, E), (L('Books (estimated)', 'Книги (оценка)'), 800, E)],
                h_coa(78514), L('The lines of the projected budget add up to $78,514; the printed total was not read', 'Строки прогнозного бюджета в сумме дают $78,514; напечатанный итог не прочитан'), INC_COA_INS,
                tuition=59226, billed=75014, budget=78514, status='previous-cycle',
                note=L('This is the projected budget for 2025–2026, the latest on the page for international students.', 'Это прогноз бюджета на 2025–2026 — самый свежий на странице для иностранных студентов.')),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'merit', 'covers': dict(TUITION_ONLY), 'renewable': None, 'name': 'Presidential Scholarship',
              'competitiveness': L('The pages read do not say how many are awarded. Illinois Wesleyan practises need-sensitive admission for international applicants.', 'Сколько таких стипендий назначается, на прочитанных страницах не сказано. При приёме иностранных абитуриентов Illinois Wesleyan учитывает потребность в помощи.'),
              'howToApply': L('No extra steps: merit scholarships are assigned automatically with the application.', 'Дополнительных шагов нет: стипендии за успехи назначаются автоматически по заявке.'),
              'note': L('Illinois Wesleyan states that there is no full-ride scholarship. Recipients of the full-tuition Presidential Scholarship still bear the rest of the cost, including housing, meals, health insurance, visa expenses and international travel.', 'Illinois Wesleyan сообщает, что стипендии на полную стоимость нет. Получатели Presidential Scholarship на полную плату за обучение сами несут остальные расходы: жильё, питание, страховку, визу и международные перелёты.'),
              'quote': 'There is NO full ride/full-funded scholarship at IWU', 'quoteSource': Q},
    merit=[award(L('Illinois Wesleyan merit scholarships', 'Стипендии Illinois Wesleyan за успехи'), upto(38000), L('All admitted international students', 'Все принятые иностранные студенты'), L('Renewable for up to four years.', 'Продлеваются до четырёх лет.'), application=AUTO, renewable=True)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': False, 'forms': ['CSS Profile', L('Family Financial Statement', 'Family Financial Statement (финансовая справка семьи)')],
          'note': L('Admission is need-sensitive for international applicants.', 'При приёме иностранных абитуриентов учитывается потребность в помощи.')},
    sources=src('Illinois Wesleyan', ('intl', S), (L('Illinois Wesleyan — international admission FAQ', 'Illinois Wesleyan — вопросы иностранных абитуриентов'), Q), (L('Illinois Wesleyan — costs for international students 2025–2026', 'Illinois Wesleyan — расходы иностранных студентов 2025–2026'), T), ('meritintl', SC)),
    checked=chk('rounds', 'fee', 'english', 'merit', 'aid'),
    unconfirmed=chk('tests', L('costs for 2026–27', 'стоимость на 2026–27'), 'needmet', 'founded', 'stats'),
))
annual['illinois-wesleyan-university'] = {'currency': 'USD', 'basis': 'total', 'min': 78514, 'max': 78514, 'note': L('2025–26 projected budget, the latest published', 'Прогноз бюджета на 2025–26 — последний опубликованный')}

# ------------------------------------------------------- Iowa State University
S = 'https://www.iastate.edu/admission-and-aid/admissions/international-students/international-undergraduate-application-information'
EN = 'https://www.iastate.edu/admission-and-aid/admissions/international-admissions/english-proficiency-requirement'
T = 'https://financialaid.iastate.edu/getting-started/cost/cost-of-attendance/undergraduate-students/'
A = 'https://www.iastate.edu/admission-and-aid/admissions/international-admissions/admitted-international-undergraduate-students'
RQ = 'https://www.iastate.edu/admission-and-aid/admissions/international-admissions/international-first-year-requirements'
records.append(R(
    'iowa-state-university', 'Iowa State University', 'Iowa State', L('Ames', 'Эймс'), L('Iowa', 'Айова'), 'public', 'Public research university',
    L('A public research university in Ames, Iowa. Admission of international students is rolling and SAT or ACT scores are not required. First-year international students are awarded the International Excellence Award of $10,000 to $12,000 a year automatically, on their GPA and test scores.',
      'Государственный исследовательский университет в Эймсе, штат Айова. Приём иностранных студентов идёт без фиксированного дедлайна, баллы SAT или ACT не требуются. Иностранным первокурсникам автоматически назначается International Excellence Award — от $10,000 до $12,000 в год по GPA и баллам тестов.'),
    ['business', 'economics', 'computer-science', 'engineering', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.iastate.edu/', 'admissions': S, 'international': S, 'portal': S, 'scholarships': 'https://www.iastate.edu/admission-and-aid/admissions/international-admissions/international-merit-scholarships',
     'aid': 'https://financialaid.iastate.edu/applying-for-aid/international-students/', 'programs': 'https://www.iastate.edu/academics/majors-minors-certificates', 'cost': T},
    verified=V, platforms=[OWNAPP('Iowa State')],
    rounds=[rd('ROLL', None, S, V, L('Rolling admission for international applicants. Iowa State strongly recommends applying at least six to eight weeks in advance; applications open up to a year before the start date.', 'Приём иностранных абитуриентов идёт по мере поступления заявок. Iowa State настоятельно советует подавать не менее чем за шесть–восемь недель; заявку можно подать за год до начала учёбы.'),
               date=L('No fixed deadline', 'Без фиксированного срока'), applies=INTL)],
    fee=fee(65, L('Non-refundable, paid by credit card in the online application. Iowa State says it is unable to offer fee waivers.', 'Невозвратный, оплачивается картой в онлайн-заявке. Iowa State сообщает, что освобождений не даёт.'), S, V, waiver_intl=False),
    documents=docs(OWNAPP('Iowa State'), L('Academic records, by country', 'Документы об образовании — по правилам для своей страны'), 'english', L('Financial statement', 'Финансовая справка')),
    english={'ielts': eng(6.0, None, L('6.0 overall with all subscores 5.5 or above. IELTS One Skill Retake is not accepted.', 'Общий балл 6.0 при всех разделах не ниже 5.5. IELTS One Skill Retake не принимается.')),
             'toefl': toefl(71, 4.0, L('71 on the internet-based test with 17 or above in speaking and writing, or 4.0 with a minimum band of 3.5 on the scale used from 21 January 2026. MyBest scores are not accepted.', '71 по интернет-версии при 17 и выше за говорение и письмо либо 4.0 при разделах не ниже 3.5 по шкале, действующей с 21 января 2026. Результаты MyBest не принимаются.')),
             'duolingo': eng(105, None, atleast(105)),
             'waiver': L('Official English exam results may be submitted up to 30 days after the deadline.', 'Официальные результаты экзамена по английскому можно прислать в течение 30 дней после срока.'),
             'note': L('PTE (48), an SAT Evidence-Based Reading and Writing subscore of 460 or an ACT English subscore of 19 are also accepted.', 'Также принимаются PTE (48), SAT Evidence-Based Reading and Writing 460 или ACT English 19.'), 'detailsSource': EN, 'detailsVerified': V},
    sat=test('optional', L('SAT and ACT scores are not required for admission; a score of 1200 on the SAT or 25 on the ACT is taken as meeting the 3.0 GPA requirement, and scores are used for the automatic scholarship.', 'Баллы SAT и ACT для приёма не требуются; SAT 1200 или ACT 25 засчитываются как выполнение требования GPA 3.0, а для автоматической стипендии баллы учитываются.'), source=RQ, verified=V),
    costs=costs('2026–2027', T, V, L('International undergraduates living on campus (dependent students)', 'Иностранные студенты бакалавриата, живущие в кампусе (на иждивении)'),
                [(TUIT, 31962, B), (FEES, 1586, B), (L('Housing and food — on campus', 'Жильё и питание — в кампусе'), 11162, B), (L('Books, course materials and supplies', 'Книги, учебные материалы'), 800, E),
                 (L('Personal', 'Личные расходы'), 2450, E), (L('Transportation', 'Транспорт'), 3000, E)],
                h_coa(50960), L('The international lines of the estimate add up to $50,960, of which $44,710 is tuition, fees, housing and food; the printed total was not read', 'Строки оценки для иностранных студентов в сумме дают $50,960, из них $44,710 — обучение, сборы, жильё и питание; напечатанный итог не прочитан'),
                INC_COA, tuition=31962, billed=44710, budget=50960,
                extras=[{'label': L('ISU Student & Scholar Medical Insurance Plan', 'Медицинская страховка ISU Student & Scholar'), 'amount': None, 'required': True,
                         'condition': L('All international students enrolled for one credit hour or more must purchase the plan; its cost is not included in the international amounts.', 'Все иностранные студенты, записанные хотя бы на один кредит, обязаны купить этот план; его стоимость в суммы для иностранных студентов не входит.'), 'year': '2026–2027'}],
                note=L('Iowa State calls these estimates for the 2026–2027 academic year, subject to change. Some programmes charge a higher tuition rate.', 'Iowa State называет эти суммы оценкой на 2026–2027 учебный год; они могут измениться. У части программ ставка обучения выше.')),
    fullRide=no_full(L('The awards described for first-year international students are the International Excellence Award ($10,000–$12,000 a year) and the International Merit Scholarship ($4,000 or $10,000), against tuition of $31,962.', 'Для иностранных первокурсников описаны International Excellence Award ($10,000–$12,000 в год) и International Merit Scholarship ($4,000 или $10,000) — при плате за обучение $31,962.')),
    merit=[award('International Excellence Award', rng(10000, 12000), L('First-year international students, on GPA and SAT/ACT scores', 'Иностранные первокурсники — по GPA и баллам SAT/ACT'), L('For automatic consideration, upload SAT or ACT scores to the admissions account.', 'Для автоматического рассмотрения загрузите баллы SAT или ACT в кабинет абитуриента.'), application=AUTO),
           award('International Merit Scholarship', L('$4,000 or $10,000', '$4,000 или $10,000'), L('First-year and transfer international students', 'Иностранные первокурсники и переводящиеся студенты'), None, application=L('Separate application', 'Отдельная заявка'))],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The pages read describe merit scholarships for international students; the FAFSA-based institutional aid on the financial aid site is for students eligible for federal aid.', 'На прочитанных страницах для иностранных студентов описаны стипендии за успехи; помощь университета по FAFSA на сайте финансовой помощи предназначена тем, кто имеет право на федеральную помощь.')},
    sources=src('Iowa State', (L('Iowa State — international undergraduate application information', 'Iowa State — сведения о подаче для иностранных студентов бакалавриата'), S), ('english', EN), ('coa 2026–2027', T), (L('Iowa State — admitted international undergraduates (scholarships)', 'Iowa State — принятым иностранным студентам (стипендии)'), A), ('req', RQ)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk(L('cost of the required medical insurance plan', 'стоимость обязательной медицинской страховки'), 'founded', 'stats'),
))
nodesc.append('iowa-state-university')
annual['iowa-state-university'] = {'currency': 'USD', 'basis': 'total', 'min': 50960, 'max': 50960, 'note': L('The required medical insurance plan is not in this total', 'Обязательная медицинская страховка в этот итог не входит')}

# --------------------------------------------------------- Lake Forest College
S = 'https://www.lakeforest.edu/admissions/international-students'
A = 'https://www.lakeforest.edu/admissions/financial-aid/financial-aid-for-international-students'
T = 'https://www.lakeforest.edu/offices-and-departments/business-office/student-accounts/2026-2027-tuition-and-fees'
records.append(R(
    'lake-forest-college', 'Lake Forest College', 'Lake Forest', L('Lake Forest', 'Лейк-Форест'), IL, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Lake Forest, Illinois, north of Chicago. SAT and ACT scores are optional. Admission of international students is need-aware; those admitted may receive a merit award of up to $37,000 a year and can apply for need-based aid with the CSS Profile.',
      'Частный колледж свободных искусств в Лейк-Форесте, штат Иллинойс, к северу от Чикаго. Баллы SAT и ACT необязательны. При приёме иностранных студентов учитывается потребность в помощи; принятые могут получить стипендию за успехи до $37,000 в год и подать на помощь по потребности через CSS Profile.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'law', 'education'],
    {'website': 'https://www.lakeforest.edu/', 'admissions': 'https://www.lakeforest.edu/admissions/first-year-students', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A,
     'programs': 'https://www.lakeforest.edu/academics/majors-and-minors', 'cost': T},
    verified=V,
    rounds=[
        rnd(L('Early Action / Early Decision I', 'Early Action / Early Decision I (ранняя подача)'), 'EA', '2026-11-01', None, J(L('Early Action is not binding; Early Decision is binding.', 'Early Action не обязывает; Early Decision — обязывающий.'), dec_by('12-15')), S, V, note=NOYEAR, applies=FYI),
        rnd(L('Early Action / Early Decision II', 'Early Action / Early Decision II (ранняя подача)'), 'EA', '2027-01-15', None, J(L('Early Action is not binding; Early Decision is binding.', 'Early Action не обязывает; Early Decision — обязывающий.'), dec_by('02-01')), S, V, note=NOYEAR, applies=FYI),
        rd('RD', '2027-02-15', S, V, dec_by('04-01'), note=NOYEAR, applies=FYI),
        rnd(L('Financial aid priority deadline — same day as each round', 'Приоритетный срок подачи на помощь — в день своего раунда'), 'aid', None, False, L('1 November, 15 January and 15 February for the three rounds.', '1 ноября, 15 января и 15 февраля — для трёх раундов.'), A, V, date=L('With the admission application', 'Вместе с заявкой на поступление'), applies=AIDAPP),
    ],
    admNotes=[L('The first two rounds combine a non-binding Early Action and a binding Early Decision option on the same date.', 'В первых двух раундах на одну дату приходятся необязывающий Early Action и обязывающий Early Decision.')],
    documents=docs('app', 'transcript', 'english', L('CSS Profile, for non-US citizens who want to be considered for need-based aid', 'CSS Profile — для неграждан США, которые хотят рассмотрения на помощь по потребности')),
    english={'ielts': eng(6.5, None, L('Minimum composite of 6.5.', 'Минимальный общий балл 6.5.')), 'toefl': toefl(90, None, J(L('Minimum score of 90.', 'Минимальный балл 90.'), OLDSCALE)), 'duolingo': eng(120, None, atleast(120)),
             'waiver': None, 'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('SAT or ACT scores are optional.', 'Баллы SAT или ACT необязательны.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('Full-time on-campus residents, standard room', 'Студенты на полной нагрузке, живущие в кампусе, стандартная комната'),
                [(TUIT, 60204, B), (L('Activity fee', 'Сбор на мероприятия'), 318, B), (L('Health Center fee', 'Сбор медицинского центра'), 384, B), (L('Recreation and Fitness fee', 'Сбор на спорт и отдых'), 250, B),
                 (L('Standard room rate', 'Стандартная комната'), 6565, B), (L('Board (all meal plans)', 'Питание (все планы)'), 6981, B)],
                h_billed(74702), L('$74,702 total tuition and charges for the year, as printed', '$74,702 — итог по плате и сборам за год, как напечатано'), INC_BILLED, tuition=60204, billed=74702,
                note=L('All full-time undergraduates are enrolled in and billed for the Student Health Insurance Plan unless they show comparable cover; its price is not on this page.', 'Все студенты бакалавриата на полной нагрузке автоматически подключаются к студенческой страховке и получают счёт, если не подтвердят равноценный полис; цены на этой странице нет.')),
    fullRide=no_full(L('International students offered admission may receive a merit-based award of up to $37,000 a year, against tuition of $60,204; more may be added through need-based aid or a Fine Arts Scholarship.', 'Принятые иностранные студенты могут получить стипендию за успехи до $37,000 в год при плате за обучение $60,204; дополнительно возможны помощь по потребности или Fine Arts Scholarship.')),
    merit=[award(L('Lake Forest merit award for international students', 'Стипендия Lake Forest за успехи для иностранных студентов'), upto(37000), L('International students offered admission', 'Принятые иностранные студенты'), None, application=AUTO),
           award('Fine Arts Scholarship', None, L('Majors and non-majors in music, studio art and theatre', 'Студенты музыки, изобразительного искусства и театра — профильные и нет'), L('Needs a scholarship application and an audition or portfolio review; deadline 1 March.', 'Нужны заявка на стипендию и прослушивание либо просмотр портфолио; срок — 1 марта.'), application=L('Separate application', 'Отдельная заявка'))],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'deadlines': L('The same day as the admission application of each round.', 'В тот же день, что и заявка на поступление каждого раунда.'),
          'note': L('Lake Forest follows need-aware admission practices when reviewing international applications.', 'При рассмотрении заявок иностранных студентов Lake Forest учитывает потребность в помощи.')},
    sources=src('Lake Forest', ('intl', S), ('aidintl', A), ('cost 2026–2027', T)),
    checked=chk('rounds', 'english', 'tests', 'costs', 'aid', 'merit'),
    unconfirmed=chk('fee', 'needmet', 'insurance', 'founded', 'stats'),
))
nodesc.append('lake-forest-college')
annual['lake-forest-college'] = {'currency': 'USD', 'basis': 'billed', 'min': 74702, 'max': 74702}

# ---------------------------------------------------------- Muhlenberg College
F = 'https://muhlenberg.edu/admissions-aid/application-instructions-for-first-year-students/'
T = 'https://www.muhlenberg.edu/admissions-aid/tuition-and-fees/'
records.append(R(
    'muhlenberg-college', 'Muhlenberg College', 'Muhlenberg', L('Allentown', 'Аллентаун'), PA, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Allentown, Pennsylvania, test-optional since 1996. There is no fee to apply. The pages read state the rounds, the English test minimums and the 2026–27 cost of attendance; they say nothing about aid for international students.',
      'Частный колледж свободных искусств в Аллентауне, штат Пенсильвания; тесты SAT/ACT необязательны с 1996 года. Сбора за заявку нет. На прочитанных страницах указаны раунды, минимумы тестов по английскому и стоимость на 2026–27; о помощи иностранным студентам там ничего нет.'),
    ['arts'],
    {'website': 'https://www.muhlenberg.edu/', 'admissions': F, 'portal': 'https://www.commonapp.org/', 'aid': 'https://www.muhlenberg.edu/admissions-aid/scholarships-and-financial-aid/', 'cost': T},
    verified=V, platforms=[COMMON],
    programNote=L('Only the talent scholarship fields named on the pages read (art, dance, film studies, music and theatre) are listed; Muhlenberg’s list of majors was not read.', 'Указаны только направления творческих стипендий, названные на прочитанных страницах (искусство, танец, кино, музыка и театр); список программ Muhlenberg не прочитан.'),
    rounds=[
        rd('ED', '2026-11-16', F, V, dec_by('12-01'), note=NOYEAR),
        rd('EA', '2026-12-01', F, V, L('Decisions by January.', 'Решения до января.'), note=NOYEAR),
        rd('RD', '2027-02-01', F, V, L('Rolling decisions, beginning in mid-January.', 'Решения по мере готовности, начиная с середины января.'), note=NOYEAR),
    ],
    fee=fee(0, L('There is no fee to complete the application.', 'Сбора за заявку нет.'), F, V),
    documents=docs(COMMON, L('Official transcripts with grade reports for each marking period', 'Официальные выписки с оценками за каждый учебный период'), 'english'),
    english={'ielts': eng(6.5, None, atleast(6.5)), 'toefl': toefl(85, None, J(atleast(85), OLDSCALE)), 'duolingo': eng(115, None, atleast(115)),
             'waiver': L('Not needed if the native or first language is English, or if the high school’s primary language of instruction is English and the applicant has attended it for the required period.', 'Не нужен, если английский — родной или первый язык либо если основной язык обучения в школе — английский и абитуриент учился в ней требуемый срок.'),
             'note': L('Muhlenberg does not offer ESL coursework.', 'Курсов английского как второго языка в Muhlenberg нет.'), 'detailsSource': F, 'detailsVerified': V},
    sat=test('optional', L('Muhlenberg has been test-optional for admission since 1996, with no extra requirements for test-optional applicants to be considered for admission or merit scholarships.', 'Muhlenberg не требует тестов с 1996 года; дополнительных требований к абитуриентам без баллов нет — ни для приёма, ни для стипендий за успехи.'), source=F, verified=V),
    costs=costs('2026–2027', T, V, L('First-year and transfer students living on campus', 'Первокурсники и переводящиеся студенты, живущие в кампусе'),
                [(TUIT, 66930, B), (L('Student activity fee', 'Сбор на студенческие мероприятия'), 324, B), (L('Technology fee', 'Технологический сбор'), 280, B), (L('Health and wellness fee', 'Сбор на здоровье и благополучие'), 226, B),
                 (L('First-year orientation fee', 'Сбор за ориентацию первокурсников'), 228, B), (L('First-year housing', 'Жильё первокурсника'), 8558, B), (L('Meal plan', 'План питания'), 7200, B),
                 (L('Books and other supplies', 'Книги и прочие материалы'), 1600, E), (TRANS, 850, E), (PERS, 1500, E)],
                h_coa(87696), tt_coa(87696, 83746), INC_COA, tuition=66930, billed=83746, budget=87696,
                note=L('Muhlenberg calls this the average cost of attendance; some courses of study add a fee. Health insurance is not in the table.', 'Muhlenberg называет это средней стоимостью обучения; у некоторых программ есть дополнительные сборы. Страховки в таблице нет.')),
    fullRide=no_full(L('The pages read say nothing about scholarships or aid for international students.', 'На прочитанных страницах о стипендиях и помощи иностранным студентам ничего не сказано.')),
    need={'note': NOINTL},
    sources=src('Muhlenberg', (L('Muhlenberg — application instructions for first-year students', 'Muhlenberg — инструкция по подаче на первый курс'), F), ('coa 2026–2027', T)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs'),
    unconfirmed=chk('aid', 'merit', 'insurance', 'founded', 'stats', MAJORS),
))
nodesc.append('muhlenberg-college')
annual['muhlenberg-college'] = {'currency': 'USD', 'basis': 'total', 'min': 87696, 'max': 87696}

# -------------------------------------------------------------- Pitzer College
S = 'https://www.pitzer.edu/admission-aid/how-apply/international-applicants'
T = 'https://www.pitzer.edu/admission-aid/cost-attendance'
A = 'https://www.pitzer.edu/admission-aid/financial-aid-information'
P = 'https://www.pitzer.edu/admission-aid/how-apply/test-free-test-optional-policy'
records.append(R(
    'pitzer-college', 'Pitzer College', 'Pitzer', 'Claremont', CA, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Claremont, California, one of the Claremont Colleges. Pitzer is test-free through the 2026–2027 admission cycle. International applicants who want need-based aid complete Pitzer’s own financial aid application; the pages read do not say how much of their need is met.',
      'Частный колледж свободных искусств в Клермонте, штат Калифорния; входит в Claremont Colleges. В цикле приёма 2026–2027 тесты не рассматриваются вовсе. Иностранные абитуриенты, которым нужна помощь по потребности, заполняют собственную заявку Pitzer; какая доля потребности покрывается, на прочитанных страницах не сказано.'),
    ['other'],
    {'website': 'https://www.pitzer.edu/', 'admissions': 'https://www.pitzer.edu/offices/admission', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'cost': T},
    verified=V, platforms=[COMMON],
    programNote=L('The list of majors was not read on this check, so no fields are listed.', 'Список программ при этой проверке не прочитан, поэтому направления не указаны.'),
    rounds=[
        rd('ED1', '2026-11-15', S, V, dec_by('12-18'), L('Optional interview by 15 November; enrolment fee due 15 January.', 'Собеседование (по желанию) — до 15 ноября; взнос за зачисление — до 15 января.'), note=NOYEAR, applies=INTL),
        rd('ED2', '2027-01-06', S, V, dec_by('02-15'), L('Optional interview by 19 December; enrolment fee due 1 March.', 'Собеседование (по желанию) — до 19 декабря; взнос за зачисление — до 1 марта.'), note=NOYEAR, applies=INTL),
        rd('RD', '2027-01-06', S, V, dec_by('04-01'), L('Optional interview by 19 December; enrolment fee due 1 May.', 'Собеседование (по желанию) — до 19 декабря; взнос за зачисление — до 1 мая.'), note=NOYEAR, applies=INTL),
    ],
    fee=fee(70, L('Or a fee waiver request.', 'Либо запрос об освобождении от сбора.'), S, V, waiver=L('Fee waiver request accepted', 'Принимается запрос об освобождении')),
    documents=docs(COMMON, L('Pitzer Writing Supplement', 'Pitzer Writing Supplement (письменное дополнение)'), L('One teacher recommendation', 'Одна рекомендация учителя'), L('School report and mid-year report', 'School Report и отчёт за полугодие'), 'transcript',
                   L('English test, for non-native speakers', 'Тест по английскому — для тех, для кого английский не родной'), L('Statement of financial responsibility', 'Заявление о финансовой ответственности')),
    interview=L('Optional, by the interview deadline of the round.', 'По желанию — до срока собеседований своего раунда.'),
    english={'ielts': eng(7.5, None, L('Minimum 7.5. With 7.0 a two-course combination for international students is taken in the first semester.', 'Минимум 7.5. При 7.0 в первом семестре нужно пройти связку из двух курсов для иностранных студентов.')),
             'toefl': toefl(105, 5.5, L('Minimum 5.5, or 105 for tests taken before January 2026. With 5 (or 100) a two-course combination is taken in the first semester.', 'Минимум 5.5 либо 105 для тестов, сданных до января 2026. При 5 (или 100) в первом семестре нужно пройти связку из двух курсов.')),
             'duolingo': eng(135, None, L('Minimum 135; with 130 a two-course combination is taken in the first semester.', 'Минимум 135; при 130 в первом семестре нужно пройти связку из двух курсов.')),
             'waiver': L('Required for non-native English speakers; an English Language Test Waiver can be requested.', 'Требуется от тех, для кого английский не родной; можно запросить освобождение от теста.'),
             'note': L('Applicants who qualify in every way except English may be considered for the International Scholars Program (IELTS 6.5–7 or TOEFL 70–100).', 'Тех, кто подходит по всем критериям, кроме английского, могут рассмотреть на International Scholars Program (IELTS 6.5–7 или TOEFL 70–100).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('not-used', L('Pitzer has a test-free admission policy through the 2026–2027 admission cycle and plans to return to test-optional from the 2027–2028 cycle.', 'В цикле приёма 2026–2027 Pitzer не рассматривает тесты и планирует вернуться к необязательным тестам с цикла 2027–2028.'),
             cycle=L('Through the 2026–2027 admission cycle', 'До цикла приёма 2026–2027 включительно'), source=P, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 70184, B), (FEES, 312, B), (HOUS, 13470, B), (FOOD, 10290, B), (L('Books & supplies', 'Книги и материалы'), 1100, E), (PERS, 1300, E), (L('Average loan fees', 'Комиссия по кредиту (в среднем)'), 50, E)],
                h_coa(96706), tt_coa(96706, 94256), INC_COA, tuition=70184, billed=94256, budget=96706,
                note=L('Health insurance and travel are not in the table.', 'Страховки и дороги в таблице нет.')),
    fullRide=no_full(L('International applicants can apply for need-based aid with the Pitzer International Financial Aid Application; the pages read give no amounts and do not state what share of need is met for them.', 'Иностранные абитуриенты могут подать на помощь по потребности через Pitzer International Financial Aid Application; сумм на прочитанных страницах нет, доля покрываемой потребности для них не указана.')),
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [L('Pitzer International Financial Aid Application (PIFAA)', 'Pitzer International Financial Aid Application (PIFAA)')],
          'note': L('Completed after the Common Application is submitted. Pitzer asks international applicants not to fill out the CSS Profile or the FAFSA.', 'Заполняется после отправки Common Application. Pitzer просит иностранных абитуриентов не заполнять CSS Profile и FAFSA.')},
    sources=src('Pitzer', ('intl', S), ('coa 2026–27', T), (L('Pitzer — financial aid information', 'Pitzer — сведения о финансовой помощи'), A), (L('Pitzer — test-free and test-optional policy', 'Pitzer — политика тестов'), P)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs'),
    unconfirmed=chk('needmet', 'merit', 'insurance', 'founded', 'stats', MAJORS),
))
nodesc.append('pitzer-college')
annual['pitzer-college'] = {'currency': 'USD', 'basis': 'total', 'min': 96706, 'max': 96706}

# ------------------------------------------------------ Santa Clara University
S = 'https://www.scu.edu/admission/undergraduate/international-students/application-requirements/'
EN = 'https://www.scu.edu/admission/undergraduate/international-students/undergraduate-english-proficiency/'
D = 'https://www.scu.edu/admission/undergraduate/first-year-students/fy-key-deadlines/'
records.append(R(
    'santa-clara-university', 'Santa Clara University', 'Santa Clara', L('Santa Clara', 'Санта-Клара'), CA, 'private', 'Private university',
    L('A private Jesuit university in Santa Clara, California. ACT and SAT scores are no longer required for admission, and applicants are considered equally for admission and merit whether or not they submit scores. The pages read give no tuition figures and no aid terms for international students.',
      'Частный иезуитский университет в Санта-Кларе, штат Калифорния. Баллы ACT и SAT для приёма больше не требуются; абитуриентов рассматривают на приём и стипендии за успехи одинаково, есть баллы или нет. Сумм платы за обучение и условий помощи иностранным студентам на прочитанных страницах нет.'),
    ['business', 'engineering', 'psychology', 'law', 'education'],
    {'website': 'https://www.scu.edu/', 'admissions': 'https://www.scu.edu/admission/undergraduate/first-year-students/', 'international': 'https://www.scu.edu/admission/undergraduate/international-students/', 'portal': 'https://www.commonapp.org/',
     'aid': 'https://www.scu.edu/admission/financial-aid/', 'programs': 'https://www.scu.edu/academics/', 'cost': 'https://www.scu.edu/finance/bursar/tuition/'},
    verified=V, platforms=[COMMON], aliases=['SCU'],
    programNote=L('Only the fields named on the academics page read are listed.', 'Указаны только направления, названные на прочитанной странице об учёбе.'),
    rounds=[
        rd('ED1', '2026-11-01', D, V, L('Decisions in late December; enrolment deposit by 7 January.', 'Решения в конце декабря; депозит до 7 января.'), note=NOYEAR),
        rd('EA', '2026-11-01', D, V, L('Decisions in late December; enrolment deposit by 1 May.', 'Решения в конце декабря; депозит до 1 мая.'), note=NOYEAR),
        rd('ED2', '2027-01-07', D, V, L('Decisions in mid-February; enrolment deposit by 1 March.', 'Решения в середине февраля; депозит до 1 марта.'), note=NOYEAR),
        rd('RD', '2027-01-07', D, V, note=NOYEAR),
        rnd(L('CSS Profile — Early Decision I and Early Action', 'CSS Profile — Early Decision I и Early Action'), 'aid', '2026-11-15', False, L('The page lists the CSS Profile together with the FAFSA; it does not say which applies to international applicants.', 'На странице CSS Profile указан вместе с FAFSA; какая форма относится к иностранным абитуриентам, не сказано.'), D, V, note=NOYEAR, applies=L('Applicants asking for aid', 'Абитуриенты, запрашивающие помощь')),
    ],
    fee=fee(75, L('Non-refundable. Common App, NACAC and College Board fee waivers are accepted.', 'Невозвратный. Принимаются освобождения Common App, NACAC и College Board.'), 'https://www.scu.edu/admission/undergraduate/first-year-students/', V,
            waiver=L('Common App, NACAC or College Board fee waiver', 'Освобождение Common App, NACAC или College Board')),
    documents=docs(COMMON, 'transcript', L('Proof of English proficiency', 'Подтверждение владения английским'), L('SCU Financial Resource Statement with supporting documents', 'SCU Financial Resource Statement с подтверждающими документами')),
    interview=L('Optional; the interview deadlines are 23 November (Early Action and Early Decision I), 15 January (Early Decision II) and 16 February (Regular Decision).', 'По желанию; сроки собеседований — 23 ноября (Early Action и Early Decision I), 15 января (Early Decision II) и 16 февраля (Regular Decision).'),
    english={'ielts': eng(6.5, None, atleast(6.5)),
             'toefl': toefl(90, 4.5, L('90 before 21 January 2026; 4.5 after it, on the new scale.', '90 до 21 января 2026; 4.5 после — по новой шкале.')),
             'duolingo': eng(120, None, atleast(120)),
             'waiver': None, 'note': L('An SAT Evidence-Based Reading and Writing score of 630, or ACT Reading 27 with ACT English 27, also meets the requirement.', 'Требование также выполняют SAT Evidence-Based Reading and Writing 630 либо ACT Reading 27 вместе с ACT English 27.'), 'detailsSource': EN, 'detailsVerified': V},
    sat=test('optional', L('ACT or SAT scores are no longer required for admission; applicants are considered equally for admission and merit regardless of score submission. The international page says the policy was set for specific terms with no official word beyond them.', 'Баллы ACT или SAT для приёма больше не требуются; на приём и стипендии за успехи рассматривают одинаково, независимо от наличия баллов. На странице для иностранных студентов сказано, что политика объявлена на определённые наборы, а о дальнейшем официальных сведений нет.'), source=S, verified=V),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': NOINTL},
    sources=src('Santa Clara', (L('Santa Clara — application requirements for international students', 'Santa Clara — требования к заявке иностранных студентов'), S), ('english', EN), (L('Santa Clara — key deadlines for first-year students', 'Santa Clara — ключевые сроки для первокурсников'), D)),
    checked=chk('rounds', 'fee', 'english', 'tests'),
    unconfirmed=chk(L('tuition and fees — the schedule is published as a separate document that was not read', 'плата и сборы — опубликованы отдельным документом, он не прочитан'), 'aid', 'merit', 'founded', 'stats', MAJORS),
))
nodesc.append('santa-clara-university')

# ---------------------------------------------------------- Seattle University
S = 'https://www.seattleu.edu/admissions-aid/international-admissions/international-undergraduate/'
Q = 'https://www.seattleu.edu/admissions-aid/international-admissions/faqs/'
T = 'https://www.seattleu.edu/admissions-aid/tuition-and-fees/undergraduate-cost-of-attendance/'
SC = 'https://www.seattleu.edu/admissions-aid/financial-aid--scholarships/scholarships--grants/undergraduate/'
records.append(R(
    'seattle-university', 'Seattle University', 'Seattle U', L('Seattle', 'Сиэтл'), L('Washington', 'Вашингтон'), 'private', 'Private university',
    L('A private Jesuit university in Seattle, Washington. It is test-optional. Seattle University states that it does not offer need-based aid to international students; all admitted undergraduates are considered automatically for merit scholarships of at least $8,000 a year.',
      'Частный иезуитский университет в Сиэтле, штат Вашингтон. Тесты SAT/ACT необязательны. Seattle University сообщает, что помощи по потребности иностранным студентам не даёт; все принятые студенты бакалавриата автоматически рассматриваются на стипендии за успехи — не менее $8,000 в год.'),
    ['business', 'economics', 'engineering', 'social-sciences', 'arts', 'law', 'medicine'],
    {'website': 'https://www.seattleu.edu/', 'admissions': 'https://www.seattleu.edu/admissions-aid/undergraduate-admissions/first-year-admissions/how-to-apply/', 'international': S, 'portal': 'https://www.commonapp.org/',
     'scholarships': SC, 'aid': SC, 'programs': 'https://www.seattleu.edu/academics/all-programs/', 'cost': T},
    verified=V, platforms=[COMMON], aliases=['Seattle U', 'SeattleU'],
    rounds=[
        rd('EA', '2026-11-01', S, V, L('Decisions in mid-December.', 'Решения в середине декабря.'), note=NOYEAR, applies=FYI),
        rd('RD', '2027-01-15', S, V, L('Decisions in early March.', 'Решения в начале марта.'), note=NOYEAR, applies=FYI),
    ],
    admNotes=[L('A binding Early Decision round on 1 November exists for Nursing and Diagnostic Ultrasound only.', 'Обязывающий раунд Early Decision 1 ноября есть только для направлений Nursing и Diagnostic Ultrasound.')],
    fee=fee(60, L('One-time and non-refundable; the first-year checklist says waivers are available.', 'Разовый и невозвратный; в списке документов для первокурсников сказано, что освобождения возможны.'), S, V, waiver=L('Waivers available', 'Освобождения возможны')),
    documents=docs(L('Common Application with essay and writing supplements', 'Common Application с эссе и письменными дополнениями'), L('Official transcripts for all completed coursework', 'Официальные выписки обо всём пройденном обучении'), L('One teacher recommendation', 'Одна рекомендация учителя'),
                   L('One counselor recommendation or secondary school report', 'Одна рекомендация консультанта или справка школы'), 'english'),
    english={'ielts': eng(6.0, 6.5, L('6.0 is the minimum for admission with the English Language and Culture Bridge requirement; 6.5 is exempt from it. One Skill Retake is accepted.', '6.0 — минимум для приёма с обязательной программой English Language and Culture Bridge; 6.5 освобождает от неё. One Skill Retake принимается.')),
             'toefl': toefl(68, None, J(L('68–85 is admitted with the English Language and Culture Bridge requirement; 86 is exempt from it. My Best scores are accepted.', '68–85 — приём с обязательной программой English Language and Culture Bridge; 86 освобождает от неё. Принимаются результаты My Best.'), OLDSCALE)),
             'duolingo': eng(105, 120, L('105–115 is admitted with the bridge requirement; 120 is exempt from it.', '105–115 — приём с обязательной bridge-программой; 120 освобождает от неё.')),
             'waiver': L('Students who completed all of high school in a US-accredited school or another English-speaking country meet the requirement.', 'Требование считается выполненным у тех, кто всю старшую школу учился в школе с аккредитацией США или в другой англоязычной стране.'),
             'note': L('PTE Academic is also accepted (48–57 with the bridge requirement, 58 exempt).', 'Также принимается PTE Academic (48–57 — с bridge-программой, 58 — без неё).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Seattle University is test-optional.', 'Seattle University не требует тестов.'), source='https://www.seattleu.edu/admissions-aid/undergraduate-admissions/first-year-admissions/how-to-apply/', verified=V),
    costs=costs(None, T, V, L('Full-time undergraduates living on campus', 'Студенты бакалавриата на полной нагрузке, живущие в кампусе'),
                [(L('Tuition (full-time flat rate, 12–18 credits)', 'Обучение (фиксированная ставка, 12–18 кредитов)'), 59400, B), (L('Average housing', 'Жильё (в среднем)'), 11202, B), (FOOD, 6426, B),
                 (L('Technology fee', 'Технологический сбор'), 642, B), (L('Wellness fee', 'Сбор на здоровье'), 516, B), (L('Activity fee', 'Сбор на мероприятия'), 198, B),
                 (PERS, 1968, E), (TRANS, 1716, E), (L('Books & supplies', 'Книги и материалы'), 594, E), (L('Loan fee', 'Комиссия по кредиту'), 64, E)],
                h_coa(82726), tt_coa(82726, 78384), INC_COA, tuition=59400, billed=78384, budget=82726,
                note=L('The academic year of the budget was not read on the page; Seattle University reserves the right to revise its charges. Health insurance is not in the budget.', 'Учебный год этого бюджета на странице не прочитан; Seattle University оставляет за собой право менять суммы. Страховки в бюджете нет.')),
    fullRide=no_full(L('Seattle University says it does not offer need-based aid to international students. Its merit scholarships are at least $8,000 a year; the page mentions full-tuition awards for eligible undergraduates without saying that international students qualify.', 'Seattle University сообщает, что помощи по потребности иностранным студентам не даёт. Стипендии за успехи — не менее $8,000 в год; на странице упомянуты награды на полную плату за обучение для подходящих студентов, но не сказано, что на них могут претендовать иностранные студенты.')),
    merit=[award(L('Seattle University merit awards', 'Стипендии Seattle University за успехи'), L('At least $8,000 a year', 'Не менее $8,000 в год'), L('First-year, transfer, undocumented and international students', 'Первокурсники, переводящиеся, студенты без документов и иностранные студенты'),
                 L('For first-year students the scholarships are renewable for up to four years.', 'Для первокурсников стипендии продлеваются до четырёх лет.'), application=AUTO, renewable=True)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Seattle University states that it does not offer need-based financial aid to international students.', 'Seattle University сообщает, что не даёт иностранным студентам помощь по потребности.')},
    sources=src('Seattle University', (L('Seattle University — international undergraduate admission', 'Seattle University — приём иностранных студентов в бакалавриат'), S), (L('Seattle University — international admissions FAQ', 'Seattle University — вопросы иностранных абитуриентов'), Q), ('coa', T), ('merit', SC)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'aid', 'merit'),
    unconfirmed=chk(L('academic year of the cost figures', 'учебный год, к которому относятся суммы'), 'insurance', 'founded', 'stats'),
))
nodesc.append('seattle-university')
annual['seattle-university'] = {'currency': 'USD', 'basis': 'total', 'min': 82726, 'max': 82726, 'note': L('The page does not name the academic year', 'Учебный год на странице не назван')}

# ----------------------------------------------- Southern Methodist University
S = 'https://www.smu.edu/admission/apply/international/application-checklist'
I = 'https://www.smu.edu/admission/apply/international'
SC = 'https://www.smu.edu/admission/financial-aid-resources/scholarships-assistance'
records.append(R(
    'southern-methodist-university', 'Southern Methodist University', 'SMU', L('Dallas', 'Даллас'), L('Texas', 'Техас'), 'private', 'Private research university',
    L('A private research university in Dallas, Texas. SAT and ACT scores are optional. All applicants, regardless of citizenship, are considered automatically for SMU’s academic merit scholarships, which together cannot exceed tuition and fees; need-based aid is available only to US citizens and permanent residents.',
      'Частный исследовательский университет в Далласе, штат Техас. Баллы SAT и ACT необязательны. Все абитуриенты независимо от гражданства автоматически рассматриваются на академические стипендии SMU; в сумме они не могут превышать плату за обучение и сборы. Помощь по потребности доступна только гражданам и постоянным жителям США.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'law', 'education'],
    {'website': 'https://www.smu.edu/', 'admissions': 'https://www.smu.edu/admission/apply/undergraduate-admission/testing', 'international': I, 'portal': 'https://www.commonapp.org/', 'scholarships': SC, 'aid': SC,
     'programs': 'https://www.smu.edu/admission/majors-minors', 'cost': 'https://www.smu.edu/enrollment-services/student-financial-services/cost-and-payment'},
    verified=V, aliases=['SMU'],
    rounds=[
        rnd(L('Early Action and Early Decision I', 'Early Action и Early Decision I'), 'EA', '2026-11-01', None, L('Early Action is not binding; Early Decision is binding. Also the date for scholarship consideration.', 'Early Action не обязывает; Early Decision — обязывающий. Это также срок для рассмотрения на стипендии.'), S, V, note=NOYEAR, applies=INTL),
        rnd(L('Regular Decision and Early Decision II', 'Regular Decision и Early Decision II'), 'RD', '2027-01-15', None, L('Regular Decision is not binding; Early Decision II is binding. Also the date for scholarship consideration.', 'Regular Decision не обязывает; Early Decision II — обязывающий. Это также срок для рассмотрения на стипендии.'), S, V, note=NOYEAR, applies=INTL),
    ],
    documents=docs('app', 'essay', 'transcript', L('Counselor recommendation', 'Рекомендация школьного консультанта'), L('Official English proficiency scores, unless waived', 'Официальные баллы теста по английскому — если нет освобождения')),
    english={'ielts': eng(None, None, L('Accepted; the page gives no minimum, only the average of the admitted class (7.7).', 'Принимается; минимума на странице нет, указано только среднее по принятым (7.7).')),
             'toefl': eng(None, None, L('Accepted; the page gives no minimum, only the average of the admitted class (103).', 'Принимается; минимума на странице нет, указано только среднее по принятым (103).')),
             'duolingo': eng(None, None, ACCEPTED),
             'waiver': L('Some applicants may have the requirement waived; SMU says to ask the admission counselor.', 'Часть абитуриентов может получить освобождение; SMU советует спросить консультанта приёмной комиссии.'), 'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('SAT or ACT scores are listed as optional in the international application checklist.', 'В списке документов для иностранных абитуриентов баллы SAT или ACT названы необязательными.'), source=S, verified=V),
    # shown as “not described for international students”: the page does not say they are selected for it
    fullRide={'available': None, 'internationalEligible': None, 'basis': 'merit', 'covers': dict(NOCOVER), 'renewable': None, 'name': 'President’s Scholarship',
              'competitiveness': L('SMU calls it its most prestigious merit-based scholarship. The page read does not say whether international students are selected for it; another SMU award, the Hunt Leadership Scholarship, is for domestic students only.', 'SMU называет её своей самой престижной стипендией за успехи. На прочитанной странице не сказано, отбирают ли на неё иностранных студентов; другая награда SMU — Hunt Leadership Scholarship — только для американских студентов.'),
              'howToApply': L('All applicants are considered for academic merit scholarships with the application; there is no separate process.', 'Все абитуриенты рассматриваются на академические стипендии по заявке; отдельной процедуры нет.'),
              'note': L('President’s Scholars receive full tuition and fees and one study-abroad experience; on-campus students also receive a housing scholarship. SMU says its merit scholarships, combined, cannot exceed the cost of tuition and fees.', 'Получатели President’s Scholarship получают полную плату за обучение и сборы и одну поездку на учёбу за рубеж; живущие в кампусе — ещё и стипендию на жильё. SMU сообщает, что стипендии за успехи в сумме не могут превышать плату за обучение и сборы.'),
              'quote': 'Students receive full tuition and fees, plus one study abroad experience', 'quoteSource': SC},
    merit=[award(L('SMU academic merit scholarships', 'Академические стипендии SMU'), L('Partial or full tuition; combined awards cannot exceed tuition and fees', 'Часть или полная плата за обучение; в сумме — не больше платы и сборов'), L('All applicants, regardless of citizenship', 'Все абитуриенты независимо от гражданства'), None, application=AUTO)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('SMU states that need-based financial aid is available only for US citizens or permanent US residents.', 'SMU сообщает, что помощь по потребности доступна только гражданам и постоянным жителям США.')},
    sources=src('SMU', (L('SMU — international application checklist', 'SMU — список документов для иностранных абитуриентов'), S), ('intl', I), ('merit', SC), ('programs', 'https://www.smu.edu/admission/majors-minors')),
    checked=chk('rounds', 'tests', 'aid', 'merit'),
    unconfirmed=chk('fee', L('minimum English test scores', 'минимальные баллы тестов по английскому'), L('tuition and fees — the page read gives no amounts', 'плата и сборы — на прочитанной странице сумм нет'), L('eligibility of international students for the President’s Scholarship', 'право иностранных студентов на President’s Scholarship'), 'founded', 'stats'),
))
nodesc.append('southern-methodist-university')

# ------------------------------------------------------------- Spelman College
S = 'https://www.spelman.edu/admissions/applying-to-spelman/international-students.html'
F = 'https://www.spelman.edu/admissions/applying-to-spelman/first-time-student-applicant.html'
T = 'https://www.spelman.edu/financial-aid/cost-of-attendance.html'
records.append(R(
    'spelman-college', 'Spelman College', 'Spelman', L('Atlanta', 'Атланта'), L('Georgia', 'Джорджия'), 'liberal-arts', L('Private historically Black liberal arts college for women', 'Частный исторически афроамериканский женский колледж свободных искусств'),
    L('A private historically Black liberal arts college for women in Atlanta, Georgia. SAT and ACT scores are optional. Spelman states that it does not offer financial aid to international students: the only aid open to them is a limited number of competitive merit scholarships for incoming first-year students.',
      'Частный исторически афроамериканский женский колледж свободных искусств в Атланте, штат Джорджия. Баллы SAT и ACT необязательны. Spelman сообщает, что финансовой помощи иностранным студенткам не даёт: им доступно только ограниченное число конкурсных стипендий за успехи для поступающих на первый курс.'),
    ['business', 'economics', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.spelman.edu/', 'admissions': F, 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': 'https://www.spelman.edu/financial-aid/finance-your-future.html',
     'programs': 'https://www.spelman.edu/academics/majors-minors-and-programs.html', 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('ED', '2026-11-01', F, V, L('Supporting documents within five business days of the deadline; incomplete applications move to the regular pool.', 'Сопроводительные документы — в течение пяти рабочих дней после срока; незавершённые заявки переходят в основной раунд.'), note=NOYEAR),
        rd('EA', '2026-11-01', F, V, note=NOYEAR),
    ],
    fee=fee(50, L('Non-refundable; a valid application fee waiver is accepted.', 'Невозвратный; принимается действительное освобождение от сбора.'), F, V, waiver=L('Valid application fee waiver accepted', 'Принимается действительное освобождение')),
    documents=docs(COMMON, L('Personal essay and supplemental essay', 'Личное эссе и дополнительное эссе'), L('Two letters of recommendation, one from a teacher at the current school', 'Два рекомендательных письма, одно — от учителя нынешней школы'), 'transcript',
                   L('Official translations of documents that are not in English', 'Официальные переводы документов не на английском'), L('Official TOEFL score, for students from non-English-speaking countries', 'Официальный балл TOEFL — для студенток из неанглоязычных стран')),
    english={'toefl': toefl(None, 4, L('An official TOEFL score of 4 or higher, for students from non-English-speaking countries.', 'Официальный балл TOEFL 4 и выше — для студенток из неанглоязычных стран.')),
             'note': L('The page names only the TOEFL.', 'На странице назван только TOEFL.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Official SAT or ACT scores are listed as optional.', 'Официальные баллы SAT или ACT названы необязательными.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('First-year students living on campus', 'Первокурсницы, живущие в кампусе'),
                [(TUIT, 30042, B), (L('Mandatory fees', 'Обязательные сборы'), 3566, B), (HOUS, 11994, B), (FOOD, 8114, B), (L('New student fees', 'Сборы для новых студенток'), 405, B),
                 (BOOKS, 1500, E), (TRANS, 1500, E), (L('Personal', 'Личные расходы'), 2000, E), (INS, 1758, E), (L('Loan fees', 'Комиссия по кредиту'), 804, E)],
                h_coa(61683), tt_coa(61683, 54121), INC_COA_INS, tuition=30042, billed=54121, budget=61683),
    fullRide=no_full(L('Spelman says the only aid open to international students is a limited number of competitive merit-based scholarships for incoming first-year students; the page gives no amounts.', 'Spelman сообщает, что иностранным студенткам доступно только ограниченное число конкурсных стипендий за успехи для поступающих на первый курс; сумм на странице нет.')),
    merit=[award(L('Spelman merit-based scholarships', 'Стипендии Spelman за успехи'), None, L('A limited number of new incoming first-year students, chosen from a competitive pool', 'Ограниченное число поступающих на первый курс — по итогам конкурса'), NOAMT, application=AUTO)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('Spelman College does not offer financial aid to international students; applicants must show they can meet the financial obligations of their programme.', 'Spelman College не даёт финансовую помощь иностранным студенткам; абитуриентки должны подтвердить, что могут оплатить обучение.')},
    sources=src('Spelman', ('intl', S), (L('Spelman — first-time student applicants', 'Spelman — поступающим впервые'), F), ('coa 2026–2027', T)),
    checked=chk('fee', 'tests', 'costs', 'aid', L('early deadlines', 'ранние сроки')),
    unconfirmed=chk(L('Regular Decision deadline', 'срок Regular Decision'), 'awards', L('TOEFL score on the 0–120 scale and other accepted tests', 'балл TOEFL по шкале 0–120 и другие принимаемые тесты'), 'founded', 'stats'),
))
nodesc.append('spelman-college')
annual['spelman-college'] = {'currency': 'USD', 'basis': 'total', 'min': 61683, 'max': 61683}

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
