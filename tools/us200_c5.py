# -*- coding: utf-8 -*-
"""United States expansion — the last seven records (193 -> 200).

Six of these sites refuse automated reading; their pages were opened in an
ordinary browser window on 12 October 2026 and read there. No anti-bot check
was passed or bypassed. Wheaton College (Massachusetts) showed such a check even
in the browser, stayed unread and has no record: its place is taken by the first
reserve candidate, Anderson University (Indiana), read from its official pages."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
NOINTL = L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')
MAJORS = L('list of majors', 'список программ')
NOFIELDS = L('The list of majors could not be read on this check, so no fields are listed.', 'Список программ при этой проверке прочитать не удалось, поэтому направления не указаны.')
OPENS = L('Applications open', 'Открытие подачи')
COMMON_URL = 'https://www.commonapp.org/'
PUBLIC = 'Public research university'

# -------------------------------------------------------------- Rollins College
S = 'https://www.rollins.edu/apply/international/'
F = 'https://www.rollins.edu/apply/international/faqs/'
T = 'https://www.rollins.edu/scholarships-aid/tuition/'
SC = 'https://www.rollins.edu/scholarships-aid/scholarships/'
TO = 'https://www.rollins.edu/apply/test-optional-admission/'
M = 'https://www.rollins.edu/academics/majors-minors/'
records.append(R(
    'rollins-college', 'Rollins College', 'Rollins', L('Winter Park', 'Уинтер-Парк'), L('Florida', 'Флорида'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Winter Park, Florida. Neither of its two applications carries a fee, tests are optional, and Rollins says it is one of the few US colleges that offer need-based aid to international applicants — while taking the family contribution into account when it admits them. Academic scholarships for international students run from $15,000 a year up to full tuition.',
      'Частный колледж свободных искусств в Уинтер-Парке, штат Флорида. Ни одна из двух заявок не требует сбора, тесты необязательны, и Rollins называет себя одним из немногих колледжей США, дающих иностранным абитуриентам помощь по потребности, — при этом вклад семьи учитывается при приёме. Академические стипендии для иностранных студентов — от $15,000 в год до полной платы за обучение.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://www.rollins.edu/', 'admissions': 'https://www.rollins.edu/apply/', 'international': S, 'portal': COMMON_URL, 'scholarships': SC, 'aid': F, 'programs': M, 'cost': T},
    verified=V, platforms=[OWNAPP('Rollins'), COMMON],
    rounds=[
        rd('ED1', '2026-11-15', S, V, dec_by('12-15'), L('Deposit due 15 January. Early Decision needs an additional form and a video interview with the admission counselor.', 'Депозит — до 15 января. Для Early Decision нужны дополнительная форма и видеособеседование с консультантом.'), name='Early Decision Round 1', note=NOYEAR, applies=INTL),
        rd('EA', '2026-11-15', S, V, dec_by('01-15'), L('Deposit due 1 May. Also the deadline to be considered for the Alfond Scholars Program.', 'Депозит — до 1 мая. Это же срок для рассмотрения на Alfond Scholars Program.'), note=NOYEAR, applies=INTL),
        rd('ED2', '2027-01-05', S, V, dec_by('02-01'), L('Deposit due 1 March.', 'Депозит — до 1 марта.'), name='Early Decision Round 2', note=NOYEAR, applies=INTL),
        rd('RD', '2027-02-01', S, V, dec_by('04-01'), L('Deposit due 1 May. All international students must apply by 1 February, which is also the priority date for the aid application.', 'Депозит — до 1 мая. Все иностранные студенты должны подать до 1 февраля; это же приоритетный срок заявки на помощь.'), note=NOYEAR, applies=INTL),
    ],
    fee=fee(0, L('Rollins offers two ways to apply — its own application and the Common Application — and says neither requires an application fee.', 'У Rollins два способа подачи — собственная заявка и Common Application; колледж сообщает, что ни один не требует сбора.'), S, V),
    documents=docs('app', L('Personal statement', 'Личное эссе'), L('Official secondary school transcript', 'Официальная школьная выписка'), L('One academic letter of recommendation from a teacher, counselor or other academic reference', 'Одна академическая рекомендация — от учителя, консультанта или другого преподавателя'),
                   'english', L('Non-U.S. Citizen Financial Aid Application, a free form sent through the applicant portal after the application; it replaces the CSS Profile', 'Non-U.S. Citizen Financial Aid Application — бесплатная форма, которая приходит в личный кабинет после подачи; заменяет CSS Profile')),
    interview=L('A video interview with the admission counselor is required of Early Decision applicants.', 'Видеособеседование с консультантом обязательно для подающих на Early Decision.'),
    english={'ielts': eng(6.5, None, L('An overall band score of 6.5. Scores are accepted only electronically from the test centre.', 'Общий балл 6.5. Результаты принимаются только в электронном виде от тестового центра.')),
             'toefl': toefl(80, 4.5, L('80 for tests taken before 21 January 2026; 4.5 for tests taken after it.', '80 — для тестов до 21 января 2026; 4.5 — для тестов после этой даты.')),
             'duolingo': eng(120, None, L('120 or higher.', '120 и выше.')),
             'waiver': L('Waived with 550 or higher on the SAT critical reading section, or with transcripts showing at least two recent years at a school taught mainly in English.', 'Требование снимается при 550 и выше в разделе чтения SAT или если выписки показывают не менее двух последних лет в школе с преподаванием преимущественно на английском.'),
             'detailsSource': F, 'detailsVerified': V},
    sat=test('optional', L('Rollins has been test-optional for nearly 15 years; about half of applicants apply without scores. Test-optional applicants stay eligible for academic scholarships and the Alfond Scholars Program.', 'Rollins не требует тестов уже почти 15 лет; около половины абитуриентов подают без баллов. Такие абитуриенты сохраняют право на академические стипендии и Alfond Scholars Program.'), source=TO, verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 65410, B), (HF, 18160, B), (L('Books', 'Книги'), 960, E), (LOANFEE, 80, E), (L('Personal', 'Личные расходы'), 2020, E), (TRANS, 1190, E)],
                h_coa(87820), tt_coa(87820, 83570), L('tuition, housing and food (billed), plus the college’s estimates for books, loan fees, personal expenses and transportation', 'обучение, жильё и питание (по счёту), а также оценки колледжа на книги, комиссию по кредиту, личные расходы и транспорт'),
                tuition=65410, billed=83570, budget=87820),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'merit', 'covers': {'tuition': True, 'housing': None, 'meals': None, 'insurance': None, 'books': None}, 'renewable': None,
              'name': L('Rollins academic scholarships, up to full tuition', 'Академические стипендии Rollins — до полной платы за обучение'),
              'competitiveness': L('Full tuition is for “extremely competitive candidates”; most international awards are $15,000 to $32,000 a year.', 'Полная плата за обучение — для «исключительно конкурентных кандидатов»; большинство стипендий иностранным студентам — от $15,000 до $32,000 в год.'),
              'howToApply': L('Every applicant is considered with the application for admission; no scholarship application. For the Alfond Scholars Program apply by the Early Action deadline of 15 November.', 'Каждый абитуриент рассматривается по заявке на поступление; отдельной заявки нет. Для Alfond Scholars Program нужно подать до срока Early Action — 15 ноября.'),
              'note': L('For international students the pages confirm awards up to full tuition; housing and food ($18,160 in 2026–27) are not stated as covered. The scholarships page describes the Alfond Scholars Program (up to 10 students a year) as a full ride with tuition, room and board, while the test-optional page calls it a full-tuition scholarship — and neither says in so many words that international students receive the room-and-board part.',
                        'Для иностранных студентов страницы подтверждают стипендии вплоть до полной платы за обучение; о покрытии жилья и питания ($18,160 в 2026–27) не сказано. На странице стипендий Alfond Scholars Program (до 10 студентов в год) описана как full ride с обучением, жильём и питанием, а на странице о тестах — как стипендия на полную плату за обучение; прямо о том, что иностранные студенты получают часть на жильё и питание, не говорит ни одна.'),
              'quote': 'scholarships, which for international students range from $15,000 to $32,000 and even full tuition for extremely competitive candidates', 'quoteSource': S},
    merit=[award(L('Rollins academic scholarships', 'Академические стипендии Rollins'), L('$15,000 a year up to full tuition', 'От $15,000 в год до полной платы за обучение'), L('International students, by school performance and test scores', 'Иностранные студенты — по школьным результатам и баллам тестов'),
                 L('For international students the range is $15,000 to $32,000, and full tuition for extremely competitive candidates.', 'Для иностранных студентов диапазон — от $15,000 до $32,000, для исключительно конкурентных кандидатов — полная плата за обучение.'), application=AUTO),
           award('Alfond Scholars Program', L('Described as tuition, room and board for four years on one page and as full tuition on another', 'На одной странице описана как обучение, жильё и питание на четыре года, на другой — как полная плата за обучение'),
                 L('Up to 10 students a year, “from around the world”', 'До 10 студентов в год, «со всего мира»'),
                 L('Open to test-optional applicants. The two Rollins pages describe the coverage differently.', 'Открыта и для подающих без тестов. Две страницы Rollins описывают покрытие по-разному.'), deadline=L('15 November (Early Action deadline)', '15 ноября (срок Early Action)'), application=AUTO),
           award('Bonner Leaders Program', upto(3000), L('Incoming first-year students already admitted to Rollins', 'Поступающие на первый курс, уже принятые в Rollins'),
                 L('Recipients serve six to eight hours a week at community nonprofits. The page does not say whether international students may apply.', 'Получатели работают шесть–восемь часов в неделю в местных некоммерческих организациях. Могут ли подавать иностранные студенты, на странице не сказано.'),
                 application=L('Separate application after admission', 'Отдельная заявка после зачисления'))],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': False,
          'forms': [L('Non-U.S. Citizen Financial Aid Application (the FAQ also calls it the International Student Financial Aid Application)', 'Non-U.S. Citizen Financial Aid Application (в разделе вопросов её называют и International Student Financial Aid Application)')],
          'deadlines': L('With the application for admission; priority date 1 February.', 'Одновременно с заявкой на поступление; приоритетный срок — 1 февраля.'),
          'note': L('Rollins is need-aware for international students: the family’s contribution is taken into account in admission. Support “ranges widely” by family circumstances and is available for up to eight semesters; the college does not promise to meet full need.', 'Rollins учитывает потребность иностранных студентов при приёме: вклад семьи принимается во внимание. Размер поддержки «сильно различается» в зависимости от обстоятельств семьи, помощь доступна до восьми семестров; покрыть всю потребность колледж не обещает.')},
    sources=src('Rollins', ('intl', S), (L('Rollins — questions from international applicants', 'Rollins — вопросы иностранных абитуриентов'), F), ('cost 2026–2027', T), ('merit', SC), ('tests', TO), ('programs', M)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit', 'aid', 'needblind', MAJORS),
    unconfirmed=chk(L('whether the Alfond award covers room and board for international students', 'покрывает ли стипендия Alfond жильё и питание для иностранных студентов'), 'needmet', 'insurance', 'founded', 'stats'),
))
annual['rollins-college'] = {'currency': 'USD', 'basis': 'total', 'min': 87820, 'max': 87820}

# ---------------------------------------------------------------- UMass Amherst
S = 'https://www.umass.edu/admissions/undergraduate-admissions/apply/international-students/international-first-year'
Q = 'https://www.umass.edu/admissions/undergraduate-admissions/apply/international-students/international-admissions'
H = 'https://www.umass.edu/admissions/first-year-application-instructions'
EN = 'https://www.umass.edu/admissions/english-language-proficiency'
TO = 'https://www.umass.edu/admissions/test-optional-policy'
FV = 'https://www.umass.edu/admissions/undergraduate-admissions/apply/international-students/financial-and-visa-information'
W = 'https://www.umass.edu/admissions/undergraduate-admissions/connect/information-policies/application-fee-waivers'
T = 'https://www.umass.edu/financialaid/undergraduate-costs'
M = 'https://www.umass.edu/gateway/academics/explore-our-programs'
records.append(R(
    'umass-amherst', 'University of Massachusetts Amherst', 'UMass Amherst', L('Amherst', 'Амхерст'), L('Massachusetts', 'Массачусетс'), 'public', PUBLIC,
    L('The flagship public university of Massachusetts, in Amherst. It applies through the Common Application, is test-optional for every major and does not look at family finances when it admits — but it states that it cannot offer financial assistance to undergraduates from other countries. International first-year students are considered automatically for a limited number of academic awards of up to $16,000 a year.',
      'Главный государственный университет штата Массачусетс, в Амхерсте. Подача — через Common Application, тесты необязательны на всех направлениях, финансовое положение семьи при приёме не учитывается — но университет прямо пишет, что не может дать финансовую помощь студентам бакалавриата из других стран. Иностранные первокурсники автоматически рассматриваются на ограниченное число академических наград до $16,000 в год.'),
    ['business', 'computer-science', 'engineering', 'biology', 'social-sciences', 'humanities', 'arts', 'medicine', 'education'],
    {'website': 'https://www.umass.edu/', 'admissions': 'https://www.umass.edu/admissions/undergraduate-admissions', 'international': S, 'portal': COMMON_URL,
     'scholarships': 'https://www.umass.edu/admissions/scholarships', 'aid': FV, 'programs': M, 'cost': T},
    verified=V, platforms=[COMMON], aliases=['UMass', 'University of Massachusetts', 'UMass Amherst'],
    programNote=L('Fields are taken from the areas of interest in the university’s programme finder, not from a full list of majors.', 'Направления взяты из областей интересов в поиске программ университета, а не из полного списка специальностей.'),
    rounds=[
        rnd(OPENS, 'opens', '2026-08-01', False, L('The Common Application opens.', 'Открывается Common Application.'), S, V, note=NOYEAR, applies=FYI),
        rd('EA', '2026-11-05', S, V, note=NOYEAR, applies=FYI),
        rd('RD', '2027-01-15', S, V, L('International students are not admitted for spring unless they attend a US high school and hold a valid visa.', 'На весенний семестр иностранных студентов не принимают, кроме тех, кто учится в школе в США и имеет действующую визу.'), note=NOYEAR, applies=FYI),
    ],
    fee=fee(85, L('The international requirements page prints an application fee of $85 and adds “unable to waive”. The general first-year instructions print a nonrefundable $90 fee paid through the Common Application. Both figures were on the site on the day of reading.', 'На странице требований к иностранным абитуриентам указан сбор $85 с пометкой «освобождение невозможно». В общей инструкции для первокурсников напечатан невозвратный сбор $90, оплачиваемый через Common Application. В день чтения на сайте были обе суммы.'), Q, V,
            waiver=L('The fee-waiver page says international students are not eligible for fee waivers.', 'На странице об освобождении от сбора сказано, что иностранным студентам оно не положено.'), waiver_intl=False),
    documents=docs(L('Common Application with the UMass questions', 'Common Application с вопросами UMass'), L('Official high school transcript for grades 9–11, or secondary school examination results', 'Официальная школьная выписка за 9–11 классы или результаты школьных экзаменов'),
                   L('One letter of recommendation', 'Одно рекомендательное письмо'), 'english'),
    english={'ielts': eng(6.5, None, L('6.5 on the Academic test with no subscore below 6.0. Paper test report forms and IELTS One Skill Retake are not accepted.', '6.5 в академическом модуле, ни один раздел не ниже 6.0. Бумажные отчёты и IELTS One Skill Retake не принимаются.')),
             'toefl': toefl(80, 4.5, L('Before 21 January 2026: 80 with no subscore below 20. After it: 4.5 with no section below 4. In-person test or iBT Home Edition only; MyBest scores are not accepted.', 'До 21 января 2026: 80, ни один раздел не ниже 20. После: 4.5, ни один раздел не ниже 4. Только очный тест или iBT Home Edition; MyBest не принимается.')),
             'duolingo': eng(115, None, L('A minimum of 115; use the same email address as on the Common Application.', 'Не ниже 115; укажите тот же адрес почты, что и в Common Application.')),
             'waiver': L('Possible, at the Director’s discretion, after all four years of secondary education at a school taught in English with a British or American curriculum.', 'Возможно по решению директора приёмной комиссии — после всех четырёх лет средней школы с преподаванием на английском по британской или американской программе.'),
             'note': L('Also accepted: Cambridge B2 First, C1 Advanced or C2 Proficiency with 176 overall and no subscore below 169. Not accepted: IELTS Indicator, TOEFL Essentials, TOEFL ITP Plus for China, PTE Academic Online. Scores must be no more than two years old.', 'Также принимаются Cambridge B2 First, C1 Advanced или C2 Proficiency: 176 в сумме, ни один раздел не ниже 169. Не принимаются IELTS Indicator, TOEFL Essentials, TOEFL ITP Plus for China, PTE Academic Online. Баллы должны быть не старше двух лет.'),
             'detailsSource': EN, 'detailsVerified': V},
    sat=test('optional', L('Standardized tests are optional for first-year applicants in all majors; submitted scores are superscored.', 'Стандартизированные тесты необязательны для поступающих на первый курс на всех направлениях; присланные баллы учитываются по лучшим разделам.'), source=TO, verified=V),
    costs=costs('2026–2027', T, V, INTL_ONCAMPUS,
                [(TF, 43819, B), (L('Average housing', 'Жильё (в среднем)'), 10188, B), (FOOD, 9838, B), (L('Supplemental health insurance', 'Дополнительная медицинская страховка'), 2470, B),
                 (BOOKS, 1200, E), (L('Travel', 'Дорога'), 950, E), (L('Miscellaneous', 'Прочие расходы'), 1000, E)],
                h_coa(69465), tt_coa(69465, 66315), L('tuition and fees, housing, food and health insurance (direct costs), plus the university’s estimates for books, travel and miscellaneous expenses', 'обучение и сборы, жильё, питание и медицинская страховка (прямые расходы), а также оценки университета на книги, дорогу и прочие расходы'),
                tuition=43819, tuition_label='Tuition and fees', billed=66315, budget=69465,
                note=L('The university marks these nine-month figures as estimates that are not final; tuition and some fees vary by college and major.', 'Университет помечает эти суммы на девять месяцев как оценки, которые ещё не окончательны; плата и часть сборов зависят от колледжа и направления.')),
    fullRide=no_full(L('UMass Amherst states that it cannot offer financial assistance to undergraduates from other countries. The only awards for them are academic ones of up to $16,000 a year, against tuition and fees of $43,819.', 'UMass Amherst пишет, что не может дать финансовую помощь студентам бакалавриата из других стран. Единственное, что им доступно, — академические награды до $16,000 в год при плате и сборах $43,819.')),
    merit=[award(L('Academic-based financial awards for international first-year students', 'Академические награды для иностранных первокурсников'), upto(16000), INTLFY,
                 L('A limited number of awards. International transfer students get no scholarships.', 'Число наград ограничено. Иностранным студентам, переводящимся из других вузов, стипендий нет.'), application=AUTO)],
    need={'availableToInternational': False, 'meetsFullNeed': None, 'needBlindInternational': True, 'forms': [],
          'note': L('The university calls itself need-blind — finances are not considered in admission — and in the same passage says it cannot offer financial assistance to undergraduates from other countries. International students must certify resources for the first year.', 'Университет называет себя need-blind — финансы при приёме не учитываются — и в том же абзаце пишет, что не может дать финансовую помощь студентам бакалавриата из других стран. Иностранные студенты обязаны подтвердить средства на первый год.')},
    sources=src('UMass Amherst', ('intl', S), ('req', Q), ('apply', H), ('english', EN), ('tests', TO), ('aidintl', FV), (L('UMass Amherst — application fee waivers', 'UMass Amherst — освобождение от сбора за заявку'), W), ('coa 2026–2027', T), ('programs', M)),
    checked=chk('rounds', 'english', 'tests', 'costs', 'merit', 'aid', 'needblind', 'waiver'),
    unconfirmed=chk(L('which of the two printed application fees ($85 or $90) applies', 'какой из двух напечатанных сборов ($85 или $90) действует'), L('decision dates', 'сроки решений'), 'founded', 'stats', L('full list of majors', 'полный список специальностей')),
))
nodesc.append('umass-amherst')
annual['umass-amherst'] = {'currency': 'USD', 'basis': 'total', 'min': 69465, 'max': 69465}

# ------------------------------------------- University of Minnesota Twin Cities
D = 'https://admissions.tc.umn.edu/apply/freshman-application-deadlines'
CK = 'https://admissions.tc.umn.edu/apply/application-checklist/application-checklist-international-freshman'
EN = 'https://admissions.tc.umn.edu/admissions/international-admission/english-proficiency-information'
T = 'https://admissions.tc.umn.edu/cost-aid/cost-aid-scholarships/costs-scholarships-and-visas-international-students'
GES = 'https://admissions.tc.umn.edu/global-excellence-scholarships'
I = 'https://admissions.tc.umn.edu/admissions/welcome-international-students'
M = 'https://majors.umn.edu/'
records.append(R(
    'university-of-minnesota-twin-cities', 'University of Minnesota Twin Cities', 'Minnesota', L('Minneapolis', 'Миннеаполис'), L('Minnesota', 'Миннесота'), 'public', PUBLIC,
    L('The flagship campus of the University of Minnesota, in Minneapolis and Saint Paul, with more than 300 majors and minors. First-year students apply through the Common Application for a $55 fee, SAT and ACT scores are not required, and every international applicant who meets the deadlines is considered for a Global Excellence Scholarship of $5,000 to $20,000 a year.',
      'Главный кампус University of Minnesota в Миннеаполисе и Сент-Поле, более 300 основных и дополнительных специальностей. Первокурсники подают через Common Application со сбором $55, баллы SAT и ACT не требуются, а каждый иностранный абитуриент, подавший в срок, рассматривается на Global Excellence Scholarship — от $5,000 до $20,000 в год.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'medicine', 'education'],
    {'website': 'https://twin-cities.umn.edu/', 'admissions': 'https://admissions.tc.umn.edu/', 'international': I, 'portal': COMMON_URL, 'scholarships': GES, 'programs': M, 'cost': T},
    verified=V, platforms=[COMMON], aliases=['UMN', 'University of Minnesota', 'UMN Twin Cities', 'U of M'],
    rounds=[
        rd('EA1', '2026-11-01', D, V, dec_by('01-31'), note=NOYEAR),
        rd('EA2', '2026-12-01', D, V, dec_by('02-28'), note=NOYEAR),
        rd('RD', '2027-01-01', D, V, dec_by('03-31'), name=L('Regular deadline', 'Обычный срок'), note=NOYEAR),
    ],
    fee=fee(55, L('A $55 nonrefundable application fee is part of the international freshman checklist.', 'Невозвратный сбор $55 входит в список документов иностранного первокурсника.'), CK, V),
    documents=docs(L('Completed Common Application', 'Заполненная Common Application'), L('Self-reported courses and grades for the 9th–12th years, exactly as on the original school records', 'Самостоятельно внесённые предметы и оценки за 9–12 классы — в точности как в школьных документах'),
                   L('English proficiency test scores', 'Результаты теста по английскому'), L('Certification of Finances form, for applicants who need a visa', 'Форма Certification of Finances — для тех, кому нужна виза')),
    english={'ielts': eng(6.5, None, L('6.5 overall and 6.5 in writing.', '6.5 в сумме и 6.5 за письмо.')),
             'toefl': toefl(None, 4.5, L('4.5 overall and 4.5 in writing on the current scale; MyBest scores are not accepted. The page read gives no figure on the 0–120 scale.', '4.5 в сумме и 4.5 за письмо по нынешней шкале; MyBest не принимается. Значения по шкале 0–120 на прочитанной странице нет.')),
             'duolingo': eng(120, None, L('120 overall and 120 in writing, effective from the spring 2027 application period.', '120 в сумме и 120 за письмо — начиная с периода подачи на весну 2027.')),
             'note': L('Also accepted: PTE Academic 59 (59 in writing) and Cambridge C1 Advanced 180 (180 in writing). Conditional admission is possible from TOEFL 3.5, IELTS 5.5, PTE 42, Cambridge 160 or Duolingo 95. Scores are not superscored.', 'Также принимаются PTE Academic 59 (59 за письмо) и Cambridge C1 Advanced 180 (180 за письмо). Условное зачисление возможно от TOEFL 3.5, IELTS 5.5, PTE 42, Cambridge 160 или Duolingo 95. Лучшие разделы разных попыток не складываются.'),
             'detailsSource': EN, 'detailsVerified': V},
    sat=test('optional', L('The international freshman checklist marks ACT and SAT scores “Not Required”; applicants who have them may self-report.', 'В списке документов иностранного первокурсника баллы ACT и SAT помечены «не требуются»; у кого они есть, может указать их сам.'), source=CK, verified=V),
    costs=costs('2026–2027', T, V, INTL_UG,
                [(TF, 44743, B), (BOOKS, 1000, E), (L('Mandatory health insurance', 'Обязательная медицинская страховка'), 3590, E), (L('Living expenses', 'Расходы на проживание'), 17752, E)],
                h_coa(67085), L('$67,085 for nine months in 2026–27, as printed for international students', '$67,085 за девять месяцев 2026–27 — как напечатано для иностранных студентов'),
                L('tuition and fees, books, mandatory health insurance and living expenses for nine months', 'обучение и сборы, книги, обязательная медицинская страховка и проживание за девять месяцев'),
                tuition=44743, tuition_label='Tuition and fees', budget=67085,
                note=L('For the I-20 the university counts twelve months: $73,002. Some colleges add tuition surcharges.', 'Для формы I-20 университет считает двенадцать месяцев: $73,002. В некоторых колледжах к плате добавляются надбавки.')),
    fullRide=no_full(L('The Global Excellence Scholarship is a non-resident tuition waiver of $5,000 to $20,000 a year, against tuition and fees of $44,743; it can be applied to tuition only.', 'Global Excellence Scholarship — это скидка с платы для нерезидентов от $5,000 до $20,000 в год при плате и сборах $44,743; её можно направить только на обучение.')),
    merit=[award('Global Excellence Scholarships', rng(5000, 20000), L('International freshmen on an F-1 or another valid non-immigrant visa who apply by the deadlines and submit the Certification of Finances form', 'Иностранные первокурсники с визой F-1 или другим действующим неиммиграционным статусом, подавшие в срок и приславшие форму Certification of Finances'),
                 L('Competitive and merit-based; for up to four years; a tuition waiver that cannot be used for other costs.', 'Конкурсная, за академические успехи; до четырёх лет; скидка с платы за обучение, которую нельзя направить на другие расходы.'), application=AUTO, renewable=True)],
    need={'note': NOINTL},
    sources=src('Minnesota', ('dates', D), (L('Minnesota — application checklist for international freshmen', 'Minnesota — список документов иностранного первокурсника'), CK), ('english', EN), (L('Minnesota — costs, scholarships and visas for international students', 'Minnesota — стоимость, стипендии и визы для иностранных студентов'), T), ('meritintl', GES), ('programs', M)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk('aid', 'waiver', L('TOEFL score on the 0–120 scale', 'балл TOEFL по шкале 0–120'), 'founded', 'stats'),
))
nodesc.append('university-of-minnesota-twin-cities')
annual['university-of-minnesota-twin-cities'] = {'currency': 'USD', 'basis': 'total', 'min': 67085, 'max': 67085}

# --------------------------------------------------------- University of Oregon
S = 'https://www.uoregon.edu/admissions/undergraduate/find-your-path/international-students/'
EN = 'https://www.uoregon.edu/admissions/undergraduate/find-your-path/international/requirements/english-proficiency/'
SC = 'https://www.uoregon.edu/admissions/undergraduate/find-your-path/international/documents-and-scholarships/international-scholarships/'
T = 'https://financialaid.uoregon.edu/cost_of_attendance'
records.append(R(
    'university-of-oregon', 'University of Oregon', 'Oregon', L('Eugene', 'Юджин'), L('Oregon', 'Орегон'), 'public', PUBLIC,
    L('The public research university in Eugene, Oregon. International first-year students apply with the Oregon application or the Common Application for a $75 fee, do not need SAT or ACT scores, and may be admitted conditionally with lower English scores. Aid for them is limited to merit scholarships, a partial-tuition cultural service scholarship and work-study awards.',
      'Государственный исследовательский университет в Юджине, штат Орегон. Иностранные первокурсники подают через заявку Oregon или Common Application со сбором $75, баллы SAT и ACT им не нужны, а при более низком английском возможно условное зачисление. Помощь для них ограничена стипендиями за успехи, частичной стипендией на обучение за культурную работу и местами в программе work-study.'),
    ['other'],
    {'website': 'https://www.uoregon.edu/', 'admissions': 'https://www.uoregon.edu/admissions/undergraduate/', 'international': S, 'portal': COMMON_URL, 'scholarships': SC,
     'programs': 'https://www.uoregon.edu/academics/undergraduate/explore-programs/', 'cost': T},
    verified=V, platforms=[OWNAPP('Oregon'), COMMON], aliases=['UO', 'UOregon'],
    programNote=L('The university says it has nearly 200 undergraduate programmes; its programme finder is a search box, so no fields are listed here.', 'Университет сообщает почти о 200 программах бакалавриата; его поиск программ — это строка поиска, поэтому направления здесь не указаны.'),
    rounds=[
        rd('EA', '2026-11-01', S, V, L('A response by 5 January.', 'Ответ — до 5 января.'), note=NOYEAR, applies=FYI),
        rd('RD', '2027-01-15', S, V, L('Applying by this date brings automatic consideration for General University Scholarships.', 'Подача до этой даты даёт автоматическое рассмотрение на General University Scholarships.'), name=L('Regular deadline', 'Обычный срок'), note=NOYEAR, applies=FYI),
    ],
    fee=fee(75, L('A non-refundable $75 application fee.', 'Невозвратный сбор $75 за заявку.'), S, V),
    documents=docs('app', L('Official transcripts with literal English translations', 'Официальные выписки с дословным переводом на английский'), L('Official TOEFL, IELTS or Duolingo English Test results', 'Официальные результаты TOEFL, IELTS или Duolingo English Test'),
                   L('Bank statement, certificate of deposit or scholarship letter covering one academic year, prepared in the last six months — for the student visa', 'Выписка из банка, сертификат о депозите или письмо о стипендии на сумму одного учебного года, не старше шести месяцев, — для студенческой визы')),
    recommendations=L('Optional: a personal statement and two letters of recommendation if school performance was affected by special circumstances.', 'По желанию: личное эссе и две рекомендации, если на учёбу в школе повлияли особые обстоятельства.'),
    english={'ielts': eng(6.5, None, L('6.5 or higher for full admission; 5.5–6.0 places the student in the AEIS band with English support.', '6.5 и выше — для полного зачисления; 5.5–6.0 — группа AEIS с поддержкой по английскому.')),
             'toefl': toefl(80, 4.5, L('Full admission: 80 or higher for tests before January 2026, 4.5 or higher after. AEIS band: 61–79, or 3.6–4.0.', 'Полное зачисление: 80 и выше для тестов до января 2026, 4.5 и выше — после. Группа AEIS: 61–79 или 3.6–4.0.')),
             'duolingo': eng(110, None, L('110 or higher for full admission; 100–109 for the AEIS band.', '110 и выше — для полного зачисления; 100–109 — группа AEIS.')),
             'waiver': L('Not required from citizens of a list of English-speaking countries; may also be waived for an IGCSE English result of C or higher, two US college writing courses, or three years of language arts at a US high school.', 'Не требуется от граждан стран из списка англоязычных; также может быть снято при оценке C и выше на экзамене IGCSE по английскому, двух курсах письма в колледже США или трёх годах language arts в школе США.'),
             'note': L('Below the AEIS band students are admitted conditionally into the UO’s full-time intensive English programme. SAT Evidence-Based Reading and Writing 520 or ACT English plus Reading 40 also give full admission. Scores must be dated within two years of enrolment.', 'Ниже группы AEIS — условное зачисление на очную интенсивную программу английского в UO. Полное зачисление дают также SAT Evidence-Based Reading and Writing 520 или ACT English плюс Reading 40. Баллы должны быть не старше двух лет к началу учёбы.'),
             'detailsSource': EN, 'detailsVerified': V},
    sat=test('optional', L('International students are not required to submit SAT or ACT results; merit scholarships are awarded by holistic review without them.', 'Иностранным студентам не нужно присылать результаты SAT или ACT; стипендии за успехи назначаются по общей оценке заявки без них.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, NONRES,
                [(TF, 47466, B), (L('Living expenses: on-campus housing and food', 'Проживание: жильё и питание в кампусе'), 18183, B), (L('Books, course materials, supplies and equipment', 'Книги, учебные материалы и оборудование'), 1434, E),
                 (L('Miscellaneous personal expenses', 'Прочие личные расходы'), 2673, E), (TRANS, 1500, E)],
                h_coa(71256), tt_coa(71256, 65649), L('tuition and fees and on-campus housing and food (the page’s “UO costs”), plus estimates for books, personal expenses and transportation', 'обучение и сборы, жильё и питание в кампусе (на странице — «UO costs»), а также оценки на книги, личные расходы и транспорт'),
                tuition=47466, tuition_label='Tuition and fees', billed=65649, budget=71256,
                extras=[{'label': L('One-time matriculation fee', 'Разовый сбор при зачислении'), 'amount': 570, 'required': True,
                         'condition': L('Charged once to students beginning their first term; not included in the figures above.', 'Взимается один раз с начинающих первый семестр; в суммы выше не входит.'), 'year': '2026–2027'}],
                note=L('Estimated nonresident figures for a typical load of 45 credits a year. First-year students are required to live on campus.', 'Оценка для нерезидентов при типичной нагрузке 45 кредитов в год. Первокурсники обязаны жить в кампусе.')),
    fullRide=no_full(L('The scholarships listed for international students are partial: the ICSP award covers part of tuition, work-study awards are $1,000 to $4,500 and endowed scholarships $1,000 to $12,000, against nonresident tuition and fees of $47,466.', 'Стипендии для иностранных студентов частичные: ICSP покрывает часть платы за обучение, места work-study — от $1,000 до $4,500, именные стипендии — от $1,000 до $12,000 при плате и сборах для нерезидентов $47,466.')),
    merit=[award('General University Scholarships', None, L('First-year applicants who apply by 15 January', 'Поступающие на первый курс, подавшие до 15 января'), NOAMT, deadline=L('15 January', '15 января'), application=AUTO),
           award('International Cultural Service Program (ICSP) Tuition Scholarship', L('Partial tuition', 'Часть платы за обучение'), L('International students, by financial need, academic merit and the ability to present to diverse groups', 'Иностранные студенты — по финансовой потребности, успеваемости и умению выступать перед разной аудиторией'),
                 L('Recipients give presentations about their home country to schools, community groups and the university. Renewable up to the completion of one degree.', 'Получатели рассказывают о своей стране в школах, общественных организациях и в университете. Продлевается до окончания одной степени.'),
                 application=L('Separate scholarship application', 'Отдельная заявка на стипендию'), renewable=True),
           award('International Student Work-Study Program', L('$1,000 to $4,500 a year', 'От $1,000 до $4,500 в год'), L('International students with financial need', 'Иностранные студенты с финансовой потребностью'),
                 L('More than 50 awards a year. An award lets the student compete for on-campus jobs; a job is not guaranteed.', 'Более 50 мест в год. Место даёт право претендовать на работу в кампусе; сама работа не гарантирована.')),
           award('Division of Global Engagement endowed scholarships', L('$1,000 to $12,000', 'От $1,000 до $12,000'), L('International students with financial need and academic merit', 'Иностранные студенты с финансовой потребностью и высокой успеваемостью'),
                 L('Competitive; the page tells applicants to ask their admissions counselor how to apply.', 'Конкурсные; о порядке подачи страница советует спросить консультанта приёмной комиссии.'))],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('No general need-based aid programme for international students is described. Need is one of the criteria of the ICSP scholarship, the work-study awards and the endowed scholarships listed here. The university says it awards over $2.5 million to international students each year.', 'Общей программы помощи по потребности для иностранных студентов не описано. Потребность — один из критериев стипендии ICSP, мест work-study и именных стипендий, перечисленных здесь. Университет сообщает, что ежегодно выделяет иностранным студентам более $2.5 млн.')},
    sources=src('Oregon', ('intl', S), ('english', EN), ('meritintl', SC), ('coa 2026–2027', T)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk(L('whether international students pay exactly the published nonresident figures', 'платят ли иностранные студенты ровно опубликованные суммы для нерезидентов'), L('amounts of the General University Scholarships', 'размеры General University Scholarships'), 'waiver', 'insurance', 'founded', 'stats', MAJORS),
))
nodesc.append('university-of-oregon')
annual['university-of-oregon'] = {'currency': 'USD', 'basis': 'total', 'min': 71256, 'max': 71256}

# ------------------------------------------------------- University of Oklahoma
S = 'https://www.ou.edu/admissions/apply/international'
T = 'https://www.ou.edu/admissions/affordability/cost'
SC = 'https://www.ou.edu/admissions/affordability/scholarships'
M = 'https://www.ou.edu/admissions/academics'
records.append(R(
    'university-of-oklahoma', 'University of Oklahoma', 'Oklahoma', L('Norman', 'Норман'), L('Oklahoma', 'Оклахома'), 'public', PUBLIC,
    L('The public research university in Norman, Oklahoma. International freshmen need a 3.0 grade average and an English score such as IELTS 6.5; SAT or ACT scores are optional for admission but are used for the international freshman scholarships of $10,000 to $17,000 a year, which require an application by 15 December.',
      'Государственный исследовательский университет в Нормане, штат Оклахома. Иностранным первокурсникам нужен средний балл 3.0 и результат по английскому — например, IELTS 6.5; баллы SAT или ACT для приёма необязательны, но по ним назначаются стипендии иностранным первокурсникам от $10,000 до $17,000 в год — для них нужно подать до 15 декабря.'),
    ['business', 'engineering', 'education'],
    {'website': 'https://www.ou.edu/', 'admissions': 'https://www.ou.edu/admissions', 'international': S, 'portal': COMMON_URL, 'scholarships': SC, 'programs': M, 'cost': T},
    verified=V, platforms=[OWNAPP('OU'), COMMON, 'Coalition with Scoir'], aliases=['OU', 'Oklahoma University'],
    programNote=L('Fields are taken from the colleges named on the “Academics & Majors” page; the full list of majors was not read.', 'Направления взяты из названий колледжей на странице «Academics & Majors»; полный список специальностей не прочитан.'),
    rounds=[
        rnd(OPENS, 'opens', '2026-08-01', False, None, S, V, note=NOYEAR, applies=FYI),
        rd('EA', '2026-11-01', S, V, note=NOYEAR, applies=FYI),
        rd('PRI', '2026-12-15', S, V, L('The deadline to be considered for international freshman scholarships.', 'Срок для рассмотрения на стипендии иностранным первокурсникам.'), name=L('Priority scholarship deadline', 'Приоритетный срок для стипендий'), note=NOYEAR, applies=FYI),
        rd('FINAL', '2027-02-01', S, V, L('Application deadline for the autumn term. Final documents by 15 April; deposit by 1 May.', 'Срок подачи на осенний семестр. Итоговые документы — до 15 апреля; депозит — до 1 мая.'), name=L('Application deadline', 'Срок подачи заявки'), note=NOYEAR, applies=FYI),
    ],
    documents=docs('app', L('School records showing at least a 3.0 grade point average', 'Школьные документы со средним баллом не ниже 3.0'), 'english'),
    english={'ielts': eng(6.5, None, atleast(6.5)),
             'toefl': toefl(79, None, J(atleast(79), OLDSCALE)),
             'duolingo': eng(100, None, atleast(100)),
             'note': L('Pearson (PTE) 53 is also accepted.', 'Также принимается Pearson (PTE) 53.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('SAT or ACT scores are optional for international admission, but international freshman scholarships are awarded on them.', 'Баллы SAT или ACT необязательны для приёма иностранных студентов, но стипендии иностранным первокурсникам назначаются по ним.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, INTL_UG,
                [(TUIT, 24210, B), (L('Fees: $9,971 mandatory fees and the $154 International Student Maintenance Fee', 'Сборы: $9,971 обязательных сборов и $154 — International Student Maintenance Fee'), 10125, B), (HF, 16381, B),
                 (BOOKS, 800, E), (L('Medical insurance', 'Медицинская страховка'), 2795, E), (PERS, 2000, E)],
                h_coa(56311), tt_coa(56311), L('tuition, fees, housing and food, plus books, medical insurance and personal expenses, as listed for international undergraduates', 'обучение, сборы, жильё и питание, а также книги, медицинская страховка и личные расходы — как указано для иностранных студентов бакалавриата'),
                tuition=24210, budget=56311,
                note=L('OU charges flat-rate tuition based on 15 credit hours a semester. The international table lists every line as an estimated expense and prints only the total.', 'OU берёт фиксированную плату из расчёта 15 кредитных часов в семестр. В таблице для иностранных студентов все строки названы оценочными расходами, напечатан только общий итог.')),
    fullRide=no_full(L('The largest international freshman scholarship is $17,000 a year, against tuition and fees of $34,335. Only the highest award a student qualifies for is given.', 'Самая крупная стипендия иностранным первокурсникам — $17,000 в год при плате и сборах $34,335. Назначается только одна — наивысшая из тех, на которые студент проходит.')),
    merit=[award('Award of Excellence', L('$17,000 a year for four years', '$17,000 в год на четыре года'), L('International freshmen with an ACT of 31 or an SAT of 1390', 'Иностранные первокурсники с ACT 31 или SAT 1390'), None, deadline=L('15 December', '15 декабря'), application=AUTO),
           award('Distinguished Scholar', L('$15,000 a year for four years', '$15,000 в год на четыре года'), INTLFY, L('Based on SAT or ACT scores; the thresholds were not noted on this reading.', 'По баллам SAT или ACT; пороги при этом чтении не записаны.'), deadline=L('15 December', '15 декабря'), application=AUTO),
           award('University Scholarship', L('$13,000 a year for four years', '$13,000 в год на четыре года'), INTLFY, None, deadline=L('15 December', '15 декабря'), application=AUTO),
           award('Academic Achievement', L('$12,000 a year for four years', '$12,000 в год на четыре года'), INTLFY, None, deadline=L('15 December', '15 декабря'), application=AUTO),
           award('Non-Resident Merit', L('$10,000 a year for four years', '$10,000 в год на четыре года'), INTLFY, None, deadline=L('15 December', '15 декабря'), application=AUTO)],
    need={'note': NOINTL},
    sources=src('Oklahoma', ('intl', S), ('coa 2026–2027', T), ('merit', SC), (L('Oklahoma — academics and majors', 'Oklahoma — учёба и специальности'), M)),
    checked=chk('rounds', 'english', 'tests', 'costs', 'merit'),
    unconfirmed=chk(L('application fee for international applicants (the freshman page names $50 for domestic applicants only)', 'сбор за заявку для иностранных абитуриентов (на странице для первокурсников названы только $50 для абитуриентов из США)'), 'toeflnew',
                    L('test-score thresholds of four of the five scholarships', 'пороги баллов для четырёх из пяти стипендий'), 'aid', 'founded', 'stats', L('full list of majors', 'полный список специальностей')),
))
nodesc.append('university-of-oklahoma')
annual['university-of-oklahoma'] = {'currency': 'USD', 'basis': 'total', 'min': 56311, 'max': 56311}

# ----------------------------------------------------- West Virginia University
S = 'https://www.wvu.edu/admissions/undergraduate/how-to-apply/international-students/'
Q = 'https://www.wvu.edu/admissions/undergraduate/how-to-apply/international-students/admission-requirements-for-international-students/'
EN = 'https://www.wvu.edu/admissions/undergraduate/how-to-apply/international-students/english-language-proficiency-requirements/'
T = 'https://www.wvu.edu/admissions/undergraduate/cost-and-aid'
SC = 'https://hub.wvu.edu/types-of-aid/scholarships/morgantown-scholarships'
CH = 'https://hub.wvu.edu/types-of-aid/scholarships/institutional/climb-higher/2728'
records.append(R(
    'west-virginia-university', 'West Virginia University', 'WVU', L('Morgantown', 'Моргантаун'), L('West Virginia', 'Западная Виргиния'), 'public', PUBLIC,
    L('The public research university in Morgantown, West Virginia. International freshmen apply with the WVU Application for a $75 fee; a converted grade average of 2.5 out of 4.0 can be admitted, and the autumn deadline is as late as 1 June. Admitted students are considered automatically for the Climb Higher Scholarship — $10,000 to $18,000 a year at Morgantown for entry in 2027–28.',
      'Государственный исследовательский университет в Моргантауне, штат Западная Виргиния. Иностранные первокурсники подают через WVU Application со сбором $75; принять могут с пересчитанным средним баллом от 2.5 из 4.0, а срок на осень — лишь 1 июня. Принятых автоматически рассматривают на Climb Higher Scholarship — от $10,000 до $18,000 в год в Моргантауне для поступающих в 2027–28.'),
    ['other'],
    {'website': 'https://www.wvu.edu/', 'admissions': 'https://www.wvu.edu/admissions/undergraduate/', 'international': S, 'scholarships': SC,
     'programs': 'https://www.wvu.edu/academics/programs/', 'cost': T},
    verified=V, platforms=[OWNAPP('WVU')], aliases=['WVU'],
    programNote=NOFIELDS,
    rounds=[
        rd('FINAL', '2027-06-01', S, V, L('All documents must be received by 1 July. Late or incomplete applications are considered for the next term.', 'Все документы должны поступить до 1 июля. Поздние или неполные заявки рассматриваются на следующий семестр.'),
           name=L('Application deadline for the autumn semester', 'Срок подачи на осенний семестр'), applies=INTL,
           note=L('The page gives the deadline by semester without a year (Fall — 1 June) and its instructions still speak of applying “for 2026 admission”; it was read on 12 October 2026.', 'На странице срок дан по семестрам без года (Fall — 1 июня), а в инструкции всё ещё говорится о подаче «for 2026 admission»; страница прочитана 12 октября 2026.')),
    ],
    fee=fee(75, L('A $75 non-refundable application fee.', 'Невозвратный сбор $75 за заявку.'), S, V),
    documents=docs(L('WVU Application', 'Заявка WVU Application'), L('Secondary school transcripts; unofficial copies are generally enough for review, with a literal English translation of anything not in English', 'Школьные выписки; для рассмотрения обычно достаточно неофициальных копий, ко всему не на английском — дословный перевод'),
                   L('Proof of English proficiency', 'Подтверждение владения английским')),
    admNotes=[L('Freshman applicants with a converted grade point average of at least 2.5 on a 4.0 scale can be admitted; some majors ask for more. Several countries have their own requirements on the same page.', 'Первокурсников могут принять с пересчитанным средним баллом от 2.5 по шкале 4.0; для некоторых направлений нужно больше. Для ряда стран на той же странице указаны отдельные требования.')],
    english={'ielts': eng(6.5, None, L('IELTS Academic, at least 6.5.', 'IELTS Academic, не ниже 6.5.')),
             'toefl': toefl(79, 4.0, L('At least 79 on the 0–120 scale, or 4.0 on the current scale.', 'Не ниже 79 по шкале 0–120 или 4.0 по нынешней шкале.')),
             'duolingo': eng(105, None, atleast(105)),
             'waiver': L('Applicants from a list of exempt countries do not need a test.', 'Абитуриентам из стран, перечисленных в списке освобождённых, тест не нужен.'),
             'note': L('Also accepted: TOEFL Essentials 9.0, PTE 53, SAT Evidence-Based Reading and Writing 570 or ACT English 24.', 'Также принимаются TOEFL Essentials 9.0, PTE 53, SAT Evidence-Based Reading and Writing 570 или ACT English 24.'),
             'detailsSource': EN, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Out-of-state undergraduates', 'Студенты бакалавриата не из штата'),
                [(TF, 32256, B), (L('Housing expenses, as the page calls them', 'Расходы на жильё — так они названы на странице'), 15028, B)],
                h_tuition(32256), L('$32,256 out-of-state tuition and fees and $15,028 housing expenses for 2026–27, printed separately; the page gives no total', '$32,256 — обучение и сборы для студентов не из штата и $15,028 — расходы на жильё на 2026–27, напечатаны раздельно; общего итога на странице нет'),
                L('tuition and fees only. Housing, food, books, insurance and personal expenses are extra', 'только обучение и сборы. Жильё, питание, книги, страховка и личные расходы — сверх этого'),
                tuition=32256, tuition_label='Tuition and fees',
                note=L('A $250 athletics fee per term is billed separately, and some colleges charge additional tuition.', 'Спортивный сбор $250 за семестр выставляется отдельно; в некоторых колледжах плата выше.')),
    fullRide=no_full(L('The largest Climb Higher award at Morgantown is $18,000 a year, against out-of-state tuition and fees of $32,256.', 'Самая крупная стипендия Climb Higher в Моргантауне — $18,000 в год при плате и сборах для студентов не из штата $32,256.')),
    merit=[award('Climb Higher Scholarship 2027–2028', rng(10000, 18000), L('First-time freshmen admitted by 1 August 2027; listed by WVU under “Non-residents of West Virginia and international students”', 'Первокурсники, принятые до 1 августа 2027; у WVU она стоит в разделе «Нерезиденты Западной Виргинии и иностранные студенты»'),
                 L('Morgantown campus, per year for up to eight semesters: $18,000 with a grade average of 3.8 and ACT 30 or SAT 1360; $16,000 with 3.8; $13,000 with 3.5–3.79; $10,000 with 3.0–3.49. Students in online programmes are not eligible.', 'Кампус в Моргантауне, в год, до восьми семестров: $18,000 при среднем балле 3.8 и ACT 30 или SAT 1360; $16,000 при 3.8; $13,000 при 3.5–3.79; $10,000 при 3.0–3.49. Студентам онлайн-программ не назначается.'),
                 application=AUTO, renewable=True)],
    need={'note': NOINTL},
    sources=src('WVU', ('intl', S), ('req', Q), ('english', EN), ('cost 2026–27', T), ('merit', SC), (L('WVU — Climb Higher Scholarship 2027–2028', 'WVU — стипендия Climb Higher 2027–2028'), CH)),
    checked=chk('rounds', 'fee', 'english', 'costs', 'merit'),
    unconfirmed=chk('tests', L('whether the “housing expenses” figure includes food', 'входит ли питание в сумму «расходов на жильё»'), L('full cost of attendance', 'полная стоимость обучения'), 'insurance', 'aid', 'founded', 'stats', MAJORS),
))
nodesc.append('west-virginia-university')
annual['west-virginia-university'] = {'currency': 'USD', 'basis': 'tuition', 'min': 32256, 'max': 32256}

# ------------------------------------------- Anderson University (Indiana) — reserve
I = 'https://anderson.edu/admissions/international/'
P = 'https://anderson.edu/start-your-story/international-undergraduate-application-process/'
U = 'https://anderson.edu/admissions/undergrad-admissions/'
T = 'https://anderson.edu/admissions/financial-aid/tuition/'
SC = 'https://anderson.edu/2027-2028-anderson-university-scholarships/'
FA = 'https://anderson.edu/about/campus-facts/'
M = 'https://anderson.edu/academics/majors/'
records.append(R(
    'anderson-university-indiana', 'Anderson University (Indiana)', 'Anderson (IN)', L('Anderson', 'Андерсон'), L('Indiana', 'Индиана'), 'private', 'Private university',
    L('A private Christian university of about 1,300 students in Anderson, Indiana, less than an hour from Indianapolis, with Church of God roots. It is a different institution from Anderson University in South Carolina. International undergraduates apply with the AU application or the Common Application by 1 June for the autumn; merit scholarships by grade average run from $10,000 to $22,000 a year, and tuition is frozen for 2027–28.',
      'Частный христианский университет примерно на 1,300 студентов в Андерсоне, штат Индиана, менее чем в часе от Индианаполиса; связан с Церковью Божьей (Church of God). Это не Anderson University в Южной Каролине. Иностранные бакалавры подают через заявку AU или Common Application до 1 июня на осень; стипендии за успехи по среднему баллу — от $10,000 до $22,000 в год, плата за обучение на 2027–28 заморожена.'),
    ['business', 'computer-science', 'engineering', 'psychology', 'biology', 'arts', 'medicine', 'education'],
    {'website': 'https://anderson.edu/', 'admissions': U, 'international': I, 'portal': COMMON_URL, 'scholarships': SC, 'aid': 'https://anderson.edu/admissions/financial-aid/', 'programs': M, 'cost': T},
    verified=V, platforms=[OWNAPP('AU'), COMMON], aliases=['Anderson University', 'Anderson University Indiana', 'AU Indiana'],
    rounds=[
        rd('ROLL', None, U, V, L('The application for admission can be sent at any time; review starts on 1 September. Applying before 1 November earns a one-time $500 account credit.', 'Заявку на поступление можно отправить в любое время; рассмотрение начинается 1 сентября. Подача до 1 ноября даёт разовый зачёт $500 на счёт студента.'), date=L('Any time', 'В любое время')),
        rd('FINAL', '2027-06-01', P, V, L('The application, transcripts, English score, passport copy and Affidavit of Support must all be in by this date for enrolment in the autumn (August) semester.', 'К этой дате должны быть поданы заявка, выписки, результат по английскому, копия паспорта и Affidavit of Support — для зачисления на осенний (августовский) семестр.'),
           name=L('International application deadline for the autumn semester', 'Срок подачи иностранных абитуриентов на осенний семестр'), note=NOYEAR, applies=INTL),
        rd('PRI', '2027-03-01', U, V, L('Priority deadline for donor-funded scholarships.', 'Приоритетный срок для стипендий, финансируемых жертвователями.'), name=L('Scholarship priority deadline', 'Приоритетный срок для стипендий'), note=NOYEAR),
    ],
    fee=fee(50, L('The international page says Anderson charges “an international fee of $50” to all international students, including those who apply through the Common Application. It does not call it an application fee or say when it is charged.', 'На странице для иностранных студентов сказано, что Anderson берёт «международный сбор $50» со всех иностранных студентов, включая подающих через Common Application. Сбором за заявку он не назван, и когда его берут, не сказано.'), I, V),
    documents=docs(L('AU online application or the Common Application', 'Онлайн-заявка AU или Common Application'), L('Academic transcripts from all institutions attended; records from outside the United States need an evaluation by a NACES member', 'Выписки из всех учебных заведений; для документов не из США нужна оценка от организации — члена NACES'),
                   L('Official TOEFL, IELTS or Duolingo score if English is not the first language', 'Официальный результат TOEFL, IELTS или Duolingo, если английский не первый язык'), 'passport',
                   L('Affidavit of Support with a bank statement on bank letterhead, in US dollars and no more than six months old', 'Affidavit of Support с выпиской на бланке банка, в долларах США, не старше шести месяцев')),
    english={'ielts': eng(6.0, None, atleast('6.0')),
             'toefl': toefl(78, None, J(L('At least 78 on the internet-based test.', 'Не ниже 78 в интернет-версии теста.'), OLDSCALE)),
             'duolingo': eng(105, None, atleast(105)),
             'waiver': L('May be waived case by case for students who attended a secondary school taught in English; ask the admission counselor.', 'Может быть снято в индивидуальном порядке для учившихся в средней школе с преподаванием на английском; уточняйте у консультанта.'),
             'detailsSource': P, 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('Full-time undergraduates in a standard residence hall with the unlimited meal plan', 'Студенты очного бакалавриата в стандартном общежитии с безлимитным планом питания'),
                [(L('Tuition (12–18 credit hours a semester)', 'Обучение (12–18 кредитных часов в семестр)'), 37600, B), (L('Room (standard residence hall)', 'Комната (стандартное общежитие)'), 7340, B), (L('Food service (Raven Unlimited meal plan)', 'Питание (план Raven Unlimited)'), 6360, B), (FEES, 1320, B),
                 (BOOKS, 1500, E), (TRANS, 1700, E), (PERS, 2800, E)],
                h_billed(52620), L('$52,620 total charges for 2026–27, plus $6,000 of estimated indirect costs, both as printed', '$52,620 — итог по счёту на 2026–27 и ещё $6,000 оценочных косвенных расходов; обе суммы — как напечатано'),
                L('tuition, room, food and fees. The university separately estimates $6,000 a year for books, transportation and personal expenses', 'обучение, комната, питание и сборы. Отдельно университет оценивает книги, транспорт и личные расходы в $6,000 в год'),
                tuition=37600, billed=52620,
                extras=[{'label': L('Health insurance', 'Медицинская страховка'), 'amount': None, 'required': True,
                         'condition': L('Required of all international students; the pages read give no price.', 'Обязательна для всех иностранных студентов; цены на прочитанных страницах нет.'), 'year': None}],
                note=L('Anderson has announced a tuition freeze for traditional undergraduates for 2027–28.', 'Anderson объявил о заморозке платы за обучение для студентов очного бакалавриата на 2027–28.')),
    fullRide=no_full(L('Winners of the university’s scholarship competitions and of the Honors Program selection receive full tuition, but the page does not say whether international students may take part. The awards it names for them are the merit scholarships and a $5,000 International Student Scholarship.', 'Победители конкурсов университета и отбора в Honors Program получают полную плату за обучение, но на странице не сказано, могут ли участвовать иностранные студенты. Для них названы стипендии за успехи и International Student Scholarship на $5,000.')),
    merit=[award(L('Merit scholarships for incoming students, 2027–2028', 'Стипендии за успехи для поступающих, 2027–2028'), rng(10000, 22000), L('First-time undergraduates starting in autumn 2027 or spring 2028, by grade point average', 'Впервые поступающие на бакалавриат с осени 2027 или весны 2028 — по среднему баллу'),
                 L('Presidential $22,000 (4.0 and above), Edwards $20,000 (3.75–3.99), Nicholson $18,000 (2.75–3.74), Reardon $14,000 (2.25–2.74), Morrison $10,000 (2.24 and below). The page does not state separately that international students receive them.', 'Presidential — $22,000 (4.0 и выше), Edwards — $20,000 (3.75–3.99), Nicholson — $18,000 (2.75–3.74), Reardon — $14,000 (2.25–2.74), Morrison — $10,000 (2.24 и ниже). Отдельно о том, что их получают иностранные студенты, на странице не сказано.'),
                 application=AUTO, renewable=True),
           award('International Student Scholarship', '$5,000', L('International students', 'Иностранные студенты'),
                 L('Cannot be combined with the other background awards on the same list (out-of-state, Christian high school and similar).', 'Не суммируется с другими наградами из того же списка (для студентов из других штатов, выпускников христианских школ и подобными).'))],
    need={'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [],
          'note': L('The international page reminds applicants that only US citizens and permanent residents are eligible for state or federal funds; it describes no need-based aid for international students.', 'Страница для иностранных студентов напоминает, что на средства штата и федеральные средства могут рассчитывать только граждане и постоянные жители США; помощь по потребности для иностранных студентов там не описана.')},
    sources=src('Anderson (IN)', ('intl', I), (L('Anderson (IN) — international undergraduate application process', 'Anderson (IN) — порядок подачи иностранных бакалавров'), P), (L('Anderson (IN) — undergraduate admissions timeline', 'Anderson (IN) — календарь приёма на бакалавриат'), U),
                ('cost 2026–2027', T), (L('Anderson (IN) — scholarships for 2027–2028', 'Anderson (IN) — стипендии на 2027–2028'), SC), ('facts', FA), ('programs', M)),
    checked=chk('rounds', 'english', 'costs', 'merit', 'docs', MAJORS),
    unconfirmed=chk(L('what the $50 international fee is charged for', 'за что именно берётся международный сбор $50'), 'tests', 'toeflnew', L('whether international students receive the grade-based merit scholarships and may enter the full-tuition competitions', 'получают ли иностранные студенты стипендии по среднему баллу и могут ли участвовать в конкурсах на полную плату за обучение'),
                    L('cost of the required health insurance', 'стоимость обязательной медицинской страховки'), 'founded'),
))
nodesc.append('anderson-university-indiana')
annual['anderson-university-indiana'] = {'currency': 'USD', 'basis': 'billed', 'min': 52620, 'max': 52620}

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
