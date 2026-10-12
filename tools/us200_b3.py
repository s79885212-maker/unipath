# -*- coding: utf-8 -*-
"""United States expansion, batch B, part 3. Every fact below was read on the
official page named next to it on 12 October 2026."""
from us200_std import *

V = '2026-10-12'
records, annual, nodesc = [], {}, []
NY, MA, CA = 'New York', 'Massachusetts', 'California'
LOCAL = L('Due by 11:59 p.m. in the applicant’s time zone.', 'Срок — 23:59 по времени абитуриента.')
ACCEPTED = L('Accepted; the page gives no minimum score.', 'Принимается; минимального балла на странице нет.')
NOINTL = L('Not stated for international students on the pages read.', 'Для иностранных студентов на прочитанных страницах не указано.')
MAJORS = L('list of majors', 'список программ')

# ------------------------------------------------------------- Goucher College
S = 'https://www.goucher.edu/become/international-students/'
F = 'https://www.goucher.edu/become/apply/first-year-students'
records.append(R(
    'goucher-college', 'Goucher College', 'Goucher', L('Baltimore', 'Балтимор'), L('Maryland', 'Мэриленд'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Baltimore, Maryland. Goucher charges no application fee and has been test-optional since 2006, for admission and for merit scholarships alike. The pages read give no tuition figures and no scholarship amounts for international students.',
      'Частный колледж свободных искусств в Балтиморе, штат Мэриленд. Сбора за заявку нет; тесты SAT/ACT необязательны с 2006 года — и для приёма, и для стипендий за успехи. Сумм платы за обучение и размеров стипендий для иностранных студентов на прочитанных страницах нет.'),
    ['business', 'economics', 'computer-science', 'psychology', 'social-sciences'],
    {'website': 'https://www.goucher.edu/', 'admissions': 'https://www.goucher.edu/become/apply/', 'international': S, 'portal': 'https://www.commonapp.org/',
     'aid': 'https://www.goucher.edu/financial-aid/', 'scholarships': 'https://www.goucher.edu/financial-aid/types-of-financial-aid/scholarships',
     'programs': 'https://www.goucher.edu/learn/undergraduate-programs/', 'cost': 'https://www.goucher.edu/financial-aid/tuition-and-fees/'},
    verified=V, platforms=[COMMON],
    programNote=L('Only the fields named on the pages read are listed here; Goucher’s full list of majors was not read.', 'Здесь указаны только направления, названные на прочитанных страницах; полный список программ Goucher не прочитан.'),
    rounds=[
        rd('EA', '2026-11-15', S, V, L('Application and supporting materials; notification on a rolling basis.', 'Заявка и сопроводительные документы; решения по мере готовности.'), REPLY_MAY1, LOCAL, note=NOYEAR, applies=FYI),
        rd('RD', '2027-01-15', S, V, L('Application and supporting materials; notification on a rolling basis.', 'Заявка и сопроводительные документы; решения по мере готовности.'), REPLY_MAY1, LOCAL, note=NOYEAR, applies=FYI),
    ],
    fee=fee(0, L('Goucher says it has no application fee.', 'Goucher сообщает, что сбора за заявку нет.'), F, V),
    documents=docs(COMMON, L('Essay portion of the application', 'Эссе в составе заявки'), L('Secondary school transcript', 'Школьная выписка'),
                   L('Secondary school report with a letter of recommendation from the counselor or adviser', 'Справка школы с рекомендательным письмом консультанта'),
                   L('Academic teacher recommendation (math, science, language or social studies)', 'Рекомендация учителя по академическому предмету (математика, естественные науки, язык или обществознание)'), 'english',
                   L('Financial documents and a copy of the passport information page, for an F-1 visa', 'Финансовые документы и копия страницы паспорта с данными — для визы F-1')),
    english={'ielts': eng(None, 6.5, L('Recommended score: 6.5.', 'Рекомендуемый балл: 6.5.')),
             'toefl': toefl(80, None, J(L('Recommended score: 80 on the internet-based test.', 'Рекомендуемый балл: 80 по интернет-версии.'), OLDSCALE), kind='recommended'),
             'duolingo': eng(None, 105, L('Recommended score: 105.', 'Рекомендуемый балл: 105.')),
             'waiver': L('Required when the first language is not English. Students with a diploma from a secondary school where English is the primary language of instruction are exempt.', 'Требуется, если английский не первый язык. Выпускники школ, где основной язык обучения — английский, освобождаются.'),
             'note': L('PTE is also accepted (recommended 53).', 'Также принимается PTE (рекомендуется 53).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Goucher says it has made SAT and ACT scores optional for admission and merit scholarship consideration since 2006.', 'Goucher сообщает, что с 2006 года баллы SAT и ACT необязательны и для приёма, и для стипендий за успехи.'), source=F, verified=V),
    fullRide=no_full(L('Goucher says many scholarships are offered to new students during the admission process; the pages read give no amounts and do not mention international students.', 'Goucher сообщает, что многие стипендии назначаются новым студентам в ходе приёма; сумм на прочитанных страницах нет, иностранные студенты там не упоминаются.')),
    need={'note': NOINTL},
    sources=src('Goucher', ('intl', S), ('fy', F), ('merit', 'https://www.goucher.edu/financial-aid/types-of-financial-aid/scholarships')),
    checked=chk('rounds', 'fee', 'english', 'tests', 'docs'),
    unconfirmed=chk(L('tuition and fees — the page read describes the charges without amounts', 'плата и сборы — на прочитанной странице платежи описаны без сумм'), 'aid', 'awards', 'founded', 'stats', MAJORS),
))
nodesc.append('goucher-college')

# --------------------------------------------- Indiana University Indianapolis
D = 'https://indianapolis.iu.edu/admissions/apply/dates/'
T = 'https://international.indianapolis.iu.edu/admissions/tuition-fees.html'
H = 'https://international.indianapolis.iu.edu/admissions/how-apply/index.html'
SC = 'https://international.indianapolis.iu.edu/admissions/scholarships/index.html'
records.append(R(
    'indiana-university-indianapolis', 'Indiana University Indianapolis', 'IU Indianapolis', L('Indianapolis', 'Индианаполис'), L('Indiana', 'Индиана'), 'public', 'Public research university',
    L('A public research university in Indianapolis, Indiana — the Indiana University campus that was part of IUPUI until 2024. It publishes a full cost estimate for international undergraduates and asks them to apply by 15 February to be considered for admissions-based scholarships.',
      'Государственный исследовательский университет в Индианаполисе, штат Индиана, — кампус Indiana University, до 2024 года входивший в IUPUI. Публикует полную оценку расходов для иностранных студентов бакалавриата и просит подавать до 15 февраля, чтобы попасть в рассмотрение на стипендии, назначаемые при приёме.'),
    ['other'],
    {'website': 'https://indianapolis.iu.edu/', 'admissions': 'https://indianapolis.iu.edu/admissions/apply/', 'international': 'https://indianapolis.iu.edu/admissions/apply/international.html',
     'portal': H, 'scholarships': SC, 'aid': 'https://indianapolis.iu.edu/cost-aid/', 'programs': 'https://indianapolis.iu.edu/academics/degrees-majors/', 'cost': T},
    verified=V, platforms=[L('Apply IU', 'Apply IU (заявка Indiana University)'), COMMON],
    aliases=['IUPUI', 'IU Indianapolis', 'IUI', 'Indiana University–Purdue University Indianapolis', 'Indiana University Purdue University Indianapolis'],
    programNote=L('The list of degrees and majors could not be read on this check, so no fields are listed. Purdue University in Indianapolis is a separate institution and has no record here.', 'Список степеней и программ при этой проверке прочитать не удалось, поэтому направления не указаны. Purdue University in Indianapolis — отдельный вуз, записи о нём здесь нет.'),
    rounds=[
        rnd(L('Apply by — Honors College and its scholarships', 'Подать до — Honors College и его стипендии'), 'priority', '2026-12-15', False,
            L('To receive admission in time for the Honors College application and Honors College scholarship consideration.', 'Чтобы получить решение о приёме до подачи в Honors College и рассмотрения на его стипендии.'), D, V, note=NOYEAR, applies=FYI),
        rnd(L('Apply by — admissions-based scholarships', 'Подать до — стипендии, назначаемые при приёме'), 'scholarship', '2027-02-15', False,
            L('Also the deadline to apply for the Honors College and its scholarships.', 'Это также срок подачи в Honors College и на его стипендии.'), D, V, note=NOYEAR, applies=FYI),
        rnd(L('Apply by — autumn enrolment', 'Подать до — осенний набор'), 'RD', '2027-05-01', False,
            L('Also the priority deadline for the $100 enrolment deposit. The university urges applicants abroad to apply as early as possible because of visa processing times.', 'Это также приоритетный срок внесения депозита $100. Университет советует абитуриентам из-за рубежа подавать как можно раньше из-за сроков оформления визы.'), D, V, note=NOYEAR, applies=FYI),
    ],
    documents=docs(L('Apply IU or the Common Application (one application only)', 'Apply IU или Common Application (только одна заявка)'), L('School transcripts and records, sent as described for international undergraduates', 'Школьные выписки и документы — в порядке, описанном для иностранных студентов бакалавриата'),
                   L('Financial documentation covering nine months of tuition and living expenses, for a student visa', 'Финансовые документы на девять месяцев обучения и проживания — для студенческой визы')),
    english={'waiver': L('The page with the English proficiency requirements for undergraduates did not open on this check.', 'Страница с требованиями к английскому для бакалавриата при этой проверке не открылась.'),
             'note': L('After admission, students with a TOEFL of 79–99 (4.0–4.5 on the new scale) or an IELTS below 7.0 take the English for Academic Purposes placement test.', 'После зачисления студенты с TOEFL 79–99 (4.0–4.5 по новой шкале) или IELTS ниже 7.0 проходят тест распределения English for Academic Purposes.'),
             'detailsSource': 'https://indianapolis.iu.edu/admissions/orientation/placement-tests.html', 'detailsVerified': V},
    costs=costs('2026–2027', T, V, L('International undergraduates, nine months', 'Иностранные студенты бакалавриата, девять месяцев'),
                [(TF, 36110, B), (HF, 14006, E), (INS, 2044, B), (BOOKS, 1290, E), (TRANS, 378, E), (PERS, 2430, E)],
                h_coa(56258), L('$56,258 estimated total for nine months, of which $36,110 is tuition and fees', '$56,258 — оценка за девять месяцев, из них $36,110 — обучение и сборы'),
                L('tuition and fees, health insurance, and the university’s estimates for housing, food, books, transportation and personal expenses. Summer is not included', 'обучение и сборы, медицинскую страховку, а также оценки университета на жильё, питание, книги, транспорт и личные расходы. Лето не включено'),
                tuition=36110, tuition_label='Tuition and fees', billed=38154, budget=56258,
                note=L('This is the estimate IU Indianapolis uses for the I-20. Tuition above 18 credit hours is charged per credit.', 'Это оценка, которую IU Indianapolis использует для формы I-20. Обучение сверх 18 кредитов оплачивается покредитно.')),
    fullRide=no_full(L('The scholarship page for international students lists kinds of scholarships — admissions-based, school and Honors College awards — without amounts or eligibility rules.', 'На странице стипендий для иностранных студентов перечислены виды стипендий — назначаемые при приёме, от школ и от Honors College — без сумм и условий.')),
    merit=[award(L('IU Indianapolis admissions-based scholarships', 'Стипендии IU Indianapolis, назначаемые при приёме'), None, L('Beginning first-year applicants who apply by 15 February', 'Поступающие на первый курс, подавшие до 15 февраля'), NOAMT)],
    need={'note': NOINTL},
    sources=src('IU Indianapolis', ('dates', D), (L('IU Indianapolis — costs for international students', 'IU Indianapolis — расходы иностранных студентов'), T), ('apply', H), ('meritintl', SC), ('about', 'https://indianapolis.iu.edu/about/')),
    checked=chk('rounds', 'intlcost'),
    unconfirmed=chk('fee', 'english', 'tests', 'awards', 'aid', 'founded', 'stats', MAJORS),
))
nodesc.append('indiana-university-indianapolis')
annual['indiana-university-indianapolis'] = {'currency': 'USD', 'basis': 'total', 'min': 56258, 'max': 56258, 'note': L('Nine months, international student estimate with health insurance', 'Девять месяцев, оценка для иностранных студентов со страховкой')}

# -------------------------------------------------------------- Ithaca College
S = 'https://www.ithaca.edu/admission/undergraduate-admission/international-applicants'
D = 'https://www.ithaca.edu/admission/undergraduate-admission/apply-ic/application-deadlines'
T = 'https://www.ithaca.edu/tuition-financial-aid/undergraduate-tuition-and-fees'
A = 'https://www.ithaca.edu/tuition-financial-aid/international-student-aid'
P = 'https://www.ithaca.edu/admission/undergraduate-admission/apply-ic/test-optional'
records.append(R(
    'ithaca-college', 'Ithaca College', 'Ithaca', L('Ithaca', 'Итака'), NY, 'private', L('Private college', 'Частный колледж'),
    L('A private college in Ithaca, New York, test-optional since 2012. Ithaca waives the application fee for international students, who may qualify for institutional scholarships, grants and campus employment; it uses its own aid application and does not accept the CSS Profile or the ISFAA.',
      'Частный колледж в Итаке, штат Нью-Йорк; тесты SAT/ACT необязательны с 2012 года. Иностранным студентам сбор за заявку не начисляется; они могут получить стипендии и гранты колледжа и работу в кампусе. Заявка на помощь — собственная, CSS Profile и ISFAA не принимаются.'),
    ['business', 'arts', 'medicine'],
    {'website': 'https://www.ithaca.edu/', 'admissions': 'https://www.ithaca.edu/admission/undergraduate-admission', 'international': S, 'portal': 'https://www.commonapp.org/',
     'aid': A, 'scholarships': 'https://www.ithaca.edu/tuition-financial-aid/undergraduate-financial-aid/types-financial-aid/scholarships', 'programs': 'https://www.ithaca.edu/academics', 'cost': T},
    verified=V, platforms=[COMMON, L('Coalition with Scoir', 'Coalition (Scoir)')],
    programNote=L('Only the fields named on the academics page read are listed here.', 'Здесь указаны только направления, названные на прочитанной странице об учёбе.'),
    rounds=[
        rd('ED', '2026-11-01', D, V, L('Enrolment confirmation and deposit by 1 February. Not open to several theatre majors.', 'Подтверждение зачисления и депозит до 1 февраля. Недоступно для ряда театральных направлений.'), note=NOYEAR),
        rd('EA', '2026-12-01', D, V, L('Not open to audition and interview programmes in the School of Music, Theatre, and Dance.', 'Недоступно для программ с прослушиванием и собеседованием в School of Music, Theatre, and Dance.'), note=NOYEAR),
        rd('RD', '2027-02-01', D, V, L('All majors except five theatre majors, whose deadline is 1 December.', 'Все направления, кроме пяти театральных, для которых срок — 1 декабря.'), note=NOYEAR),
        rnd(L('Presidential Scholarship — application', 'Presidential Scholarship — заявка'), 'scholarship', '2026-11-01', False, None, D, V, note=NOYEAR),
        rnd(L('Scholar Programs (Innovation, Leadership, MLK, Park) — application', 'Scholar Programs (Innovation, Leadership, MLK, Park) — заявка'), 'scholarship', '2026-12-01', False, None, D, V, note=NOYEAR),
    ],
    fee=fee(0, L('Ithaca waives the application fee for international students: select the Institutional Fee Waiver in the Common App.', 'Ithaca не берёт сбор за заявку с иностранных студентов: выберите Institutional Fee Waiver в Common App.'), S, V,
            waiver=L('Institutional Fee Waiver in the Common App', 'Institutional Fee Waiver в Common App'), waiver_intl=True),
    documents=docs(COMMON, 'transcript', 'english'),
    english={'ielts': eng(None, 6.0, L('Recommended score of 6.0 or higher.', 'Рекомендуемый балл — 6.0 и выше.')),
             'toefl': toefl(80, 4.0, L('Recommended score of 80 or higher on the 120-point scale, or 4.0 or higher on the 1–6 scale.', 'Рекомендуемый балл — 80 и выше по шкале до 120 либо 4.0 и выше по шкале 1–6.'), kind='recommended'),
             'duolingo': eng(None, 115, L('Recommended score of 115 or higher.', 'Рекомендуемый балл — 115 и выше.')),
             'waiver': L('The page lists recommended minimum scores and exempts some applicants on the basis of their schooling.', 'На странице указаны рекомендуемые минимальные баллы; часть абитуриентов освобождается в зависимости от прежнего обучения.'),
             'note': L('PTE Academic (54) and an SAT Evidence-Based Reading and Writing score of 600 are also listed.', 'Также указаны PTE Academic (54) и балл SAT Evidence-Based Reading and Writing 600.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Ithaca has been test-optional since 2012 and says applicants without scores are considered equally for admission and for academic and talent scholarships. Applicants from schools that do not give alphanumeric grades must submit SAT or ACT scores.', 'Ithaca не требует тестов с 2012 года и сообщает, что абитуриенты без баллов рассматриваются наравне с другими — и при приёме, и на стипендии за успехи и талант. Абитуриенты из школ без буквенных или числовых оценок обязаны прислать баллы SAT или ACT.'), source=P, verified=V),
    costs=costs('2026–2027', T, V, L('Full-time undergraduates living on campus', 'Студенты бакалавриата на полной нагрузке, живущие в кампусе'),
                [(L('Tuition (12–18 credits a semester)', 'Обучение (12–18 кредитов за семестр)'), 59440, B), (L('Housing and meals', 'Жильё и питание'), 16520, B), (L('Student support and technology fee', 'Сбор на поддержку студентов и технологии'), 300, B),
                 (L('Health insurance (can be waived with comparable cover)', 'Медицинская страховка (можно отказаться при равноценном полисе)'), 4260, B),
                 (L('Books (estimate)', 'Книги (оценка)'), 850, E), (L('Personal expenses (estimate)', 'Личные расходы (оценка)'), 1100, E), (L('Transportation (estimate)', 'Транспорт (оценка)'), 550, E)],
                h_coa(83020), tt_coa(83020, 80520), INC_COA_INS, tuition=59440, billed=80520, budget=83020,
                note=L('Housing costs vary by residence hall and number of roommates.', 'Стоимость жилья зависит от общежития и числа соседей.')),
    fullRide=no_full(L('Ithaca says international undergraduates may qualify for institutional scholarships, grants and campus employment; the pages read give no amounts and describe no award at the level of full tuition.', 'Ithaca сообщает, что иностранные студенты бакалавриата могут получить стипендии и гранты колледжа и работу в кампусе; сумм на прочитанных страницах нет, награды уровня полной платы за обучение не описаны.')),
    merit=[award(L('Ithaca academic and talent scholarships', 'Стипендии Ithaca за успехи и талант'), None, L('First-year applicants, with or without test scores', 'Поступающие на первый курс — с баллами тестов или без них'), NOAMT),
           award('Presidential Scholarship', None, L('First-year applicants who apply by 1 November', 'Поступающие на первый курс, подавшие до 1 ноября'), NOAMT, deadline=L('1 November', '1 ноября'), application=L('Separate application', 'Отдельная заявка'))],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None,
          'forms': [L('Ithaca College aid application for international applicants, in IC Connect', 'Заявка Ithaca College на помощь для иностранных абитуриентов — в IC Connect')],
          'note': L('International students do not qualify for US federal or state aid. Ithaca does not accept the CSS Profile or the ISFAA.', 'Иностранные студенты не имеют права на федеральную помощь США и помощь штата. CSS Profile и ISFAA Ithaca не принимает.')},
    sources=src('Ithaca', ('intl', S), ('dates', D), ('cost 2026–27', T), ('aidintl', A), ('tests', P)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid'),
    unconfirmed=chk('awards', 'needmet', 'aiddeadline', 'founded', 'stats', MAJORS),
))
nodesc.append('ithaca-college')
annual['ithaca-college'] = {'currency': 'USD', 'basis': 'total', 'min': 83020, 'max': 83020}

# ----------------------------------------------------------- Lesley University
S = 'https://lesley.edu/admissions/international-students/how-to-apply-international-students'
H = 'https://lesley.edu/admissions/undergraduate-students/how-to-apply-undergraduate'
records.append(R(
    'lesley-university', 'Lesley University', 'Lesley', L('Cambridge', 'Кембридж'), MA, 'private', 'Private university',
    L('A private university in Cambridge, Massachusetts, with programmes in education, mental health and well-being, art and design, and liberal arts and business. Admission is rolling. The pages read state the English test minimums; they give no costs, application fee or aid terms for international students.',
      'Частный университет в Кембридже, штат Массачусетс, с программами по образованию, психическому здоровью и благополучию, искусству и дизайну, свободным искусствам и бизнесу. Приём идёт без жёсткого дедлайна. На прочитанных страницах указаны минимумы тестов по английскому; стоимости, сбора за заявку и условий помощи иностранным студентам там нет.'),
    ['education', 'psychology', 'arts', 'business', 'humanities'],
    {'website': 'https://lesley.edu/', 'admissions': H, 'international': 'https://lesley.edu/admissions/international-admissions', 'aid': 'https://lesley.edu/costs-financial-aid', 'cost': 'https://lesley.edu/costs-financial-aid'},
    verified=V,
    rounds=[
        rd('EA', '2025-12-01', H, V, dec_by('01-05'), L('For autumn enrolment only.', 'Только для осеннего набора.'), status='previous-cycle', year='2026', note=PREV),
        rd('RD', '2026-02-17', H, V, L('Lesley offers rolling admission: applications after the deadline are still considered, with a decision within two weeks of a complete application.', 'Lesley ведёт приём и после срока: такие заявки тоже рассматривают, решение — в течение двух недель после завершения заявки.'), status='previous-cycle', year='2026', note=PREV),
    ],
    documents=docs('app', L('Official high school transcript sent by the school, with a notarised translation', 'Официальная школьная выписка — отправляет школа, с нотариально заверенным переводом'), 'english',
                   L('Evaluation of foreign academic credentials by one of the listed agencies', 'Оценка иностранных документов об образовании одной из перечисленных организаций')),
    english={'ielts': eng(6.5, None, L('A score of 6.5 or higher.', 'Балл 6.5 и выше.')),
             'toefl': toefl(80, None, J(L('Minimum score of 80 on the internet test.', 'Минимум 80 по интернет-версии.'), OLDSCALE)),
             'duolingo': eng(105, None, atleast(105)),
             'waiver': L('Proof of English proficiency is required of international applicants.', 'От иностранных абитуриентов требуется подтверждение владения английским.'),
             'note': L('Cambridge C1 Advanced and C2 Proficiency are accepted, as is completion of a partner English language programme.', 'Принимаются Cambridge C1 Advanced и C2 Proficiency, а также окончание языковой программы школы-партнёра.'), 'detailsSource': S, 'detailsVerified': V},
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': NOINTL},
    sources=src('Lesley', (L('Lesley — how to apply, international students', 'Lesley — как подать иностранным студентам'), S), (L('Lesley — how to apply, undergraduate', 'Lesley — как подать в бакалавриат'), H)),
    checked=chk('english', L('deadlines for autumn 2026', 'сроки на осень 2026')),
    unconfirmed=chk('dates2027', 'fee', 'tests', L('tuition and fees', 'плата и сборы'), 'aid', 'merit', 'founded', 'stats'),
))
nodesc.append('lesley-university')

# --------------------------------------------------- Loyola University Chicago
S = 'https://www.luc.edu/undergrad/admissions/internationalstudents/'
T = 'https://www.luc.edu/undergrad/tuitionscholarshipsandaid/tuitionandfees/'
records.append(R(
    'loyola-university-chicago', 'Loyola University Chicago', 'Loyola Chicago', 'Chicago', L('Illinois', 'Иллинойс'), 'private', 'Private research university',
    L('A private Jesuit university in Chicago, Illinois. There is no application fee and SAT or ACT scores are optional. The pages read state the English test minimums and the 2026–27 charges; scholarship amounts for international students were not found on them.',
      'Частный иезуитский университет в Чикаго, штат Иллинойс. Сбора за заявку нет, баллы SAT или ACT необязательны. На прочитанных страницах указаны минимумы тестов по английскому и платежи на 2026–27; размеров стипендий для иностранных студентов там не найдено.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'medicine', 'education'],
    {'programs': 'https://www.luc.edu/academics/departmentsandprograms/', 'website': 'https://www.luc.edu/', 'admissions': 'https://www.luc.edu/undergrad/admissions/', 'international': S, 'portal': 'https://www.commonapp.org/',
     'aid': 'https://www.luc.edu/undergrad/tuitionscholarshipsandaid/scholarshipsandfinancialaid/', 'cost': T},
    verified=V, platforms=[COMMON, OWNAPP('Loyola')],
    rounds=[
        rnd(L('Application opens', 'Открытие подачи'), 'opens', '2026-08-01', False, None, S, V, note=NOYEAR, applies=FYI),
        rd('PRI', '2026-12-01', S, V, L('Loyola admits students after the priority deadline as long as space is available.', 'Loyola принимает студентов и после приоритетного срока, пока есть места.'), L('Enrolment deposit by 1 May.', 'Депозит до 1 мая.'), note=NOYEAR, applies=FYI),
    ],
    fee=fee(0, L('There is no application fee.', 'Сбора за заявку нет.'), S, V),
    documents=docs(L('Common Application or Loyola’s online application', 'Common Application или онлайн-заявка Loyola'), L('Official transcript from every secondary school attended', 'Официальная выписка из каждой школы, где учился абитуриент'), 'english',
                   L('Letter of recommendation, sent directly by a teacher or counselor', 'Рекомендательное письмо — напрямую от учителя или консультанта')),
    english={'ielts': eng(6.5, None, atleast(6.5)),
             'toefl': toefl(79, 4.5, L('A minimum of 4.5, or 79 for tests taken before the change of scale in January 2026.', 'Минимум 4.5 либо 79 для тестов, сданных до смены шкалы в январе 2026.')),
             'duolingo': eng(110, None, atleast(110)),
             'waiver': L('The application may require official scores; Loyola says some applicants can receive a waiver of the English requirement.', 'В заявке могут потребоваться официальные баллы; Loyola сообщает, что часть абитуриентов может получить освобождение от требования по английскому.'),
             'note': L('PTE is also accepted (minimum 53).', 'Также принимается PTE (минимум 53).'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Loyola is test-optional: students decide whether to include ACT or SAT scores, and results are superscored.', 'Loyola не требует тестов: абитуриенты сами решают, включать ли баллы ACT или SAT; учитываются лучшие результаты по разделам.'), source=S, verified=V),
    costs=costs('2026–2027', T, V, L('First-year students in a double room with a meal plan', 'Первокурсники в двухместной комнате с планом питания'),
                [(TUIT, 56930, B), (L('Room and board (average)', 'Жильё и питание (в среднем)'), 18572, B), (L('Fees (estimate)', 'Сборы (оценка)'), 1580, B)],
                h_billed(77082), L('$77,082 estimated expense paid to Loyola; transportation, books, supplies and personal expenses are not included', '$77,082 — оценка платежей в пользу Loyola; транспорт, книги, материалы и личные расходы не включены'),
                INC_BILLED, tuition=56930, billed=77082,
                note=L('Nursing tuition is $58,180. Health insurance is not on the page.', 'Плата за обучение по направлению Nursing — $58,180. Страховки на странице нет.')),
    fullRide=no_full(L('The pages read mention special scholarships that admitted students apply for in their portal, without amounts or eligibility rules for international students.', 'На прочитанных страницах упомянуты особые стипендии, на которые принятые студенты подают через свой кабинет, — без сумм и условий для иностранных студентов.')),
    need={'note': NOINTL},
    sources=src('Loyola Chicago', ('intl', S), ('cost 2026–27', T)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs'),
    unconfirmed=chk('aid', 'merit', 'insurance', 'founded', 'stats'),
))
nodesc.append('loyola-university-chicago')
annual['loyola-university-chicago'] = {'currency': 'USD', 'basis': 'billed', 'min': 77082, 'max': 77082}

# -------------------------------------------------- Loyola University Maryland
F = 'https://www.loyola.edu/admission/undergraduate/application-process/international/first-year/'
A = 'https://www.loyola.edu/department/financial-aid/undergraduate/process/international'
T = 'https://www.loyola.edu/department/financial-aid/undergraduate/tuition-price-affordability/'
SC = 'https://www.loyola.edu/department/financial-aid/undergraduate/programs/scholarships.html'
records.append(R(
    'loyola-university-maryland', 'Loyola University Maryland', 'Loyola Maryland', L('Baltimore', 'Балтимор'), L('Maryland', 'Мэриленд'), 'private', 'Private university',
    L('A private Jesuit university in Baltimore, Maryland. SAT and ACT scores are optional. Every applicant, international students included, is considered automatically for merit scholarships; need-based aid for international students is limited and, Loyola says, covers full tuition only in extremely rare cases.',
      'Частный иезуитский университет в Балтиморе, штат Мэриленд. Баллы SAT и ACT необязательны. Каждый абитуриент, включая иностранных, автоматически рассматривается на стипендии за успехи; помощь по потребности иностранным студентам ограничена и, по словам Loyola, покрывает полную плату за обучение лишь в крайне редких случаях.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education'],
    {'programs': 'https://www.loyola.edu/academics/programs/', 'website': 'https://www.loyola.edu/', 'admissions': 'https://www.loyola.edu/admission/undergraduate/', 'international': 'https://www.loyola.edu/admission/undergraduate/application-process/international',
     'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': SC, 'cost': T},
    verified=V, platforms=[COMMON],
    rounds=[
        rd('ED1', '2026-11-15', F, V, L('Notification by late December; reply by 15 January.', 'Решение до конца декабря; ответ до 15 января.'), note=NOYEAR, applies=FYI),
        rd('EA', '2026-11-15', F, V, L('Notification by mid-January; reply by 1 May.', 'Решение до середины января; ответ до 1 мая.'), note=NOYEAR, applies=FYI),
        rd('ED2', '2027-01-15', F, V, L('Notification by early March; reply by 15 March.', 'Решение до начала марта; ответ до 15 марта.'), note=NOYEAR, applies=FYI),
        rd('RD', '2027-01-15', F, V, L('Notification by late March; reply by 1 May.', 'Решение до конца марта; ответ до 1 мая.'), note=NOYEAR, applies=FYI),
    ],
    admNotes=[L('Applicants to the Nursing (BSN) programme should apply by 15 November, through Early Decision I or Early Action.', 'Поступающим на программу Nursing (BSN) следует подать до 15 ноября — в Early Decision I или Early Action.')],
    fee=fee(60, L('Listed among the application requirements for international students.', 'Указан среди требований к заявке иностранных студентов.'), F, V),
    documents=docs(L('Common Application — first-year student application', 'Common Application — заявка поступающего на первый курс'), L('Letter of recommendation from the school counselor, or from a teacher where the school has no counselor', 'Рекомендательное письмо школьного консультанта либо учителя, если консультанта в школе нет'), 'english'),
    english={'ielts': eng(6.5, None, L('Band score of 6.5 or higher; IELTS Indicator is accepted.', 'Балл 6.5 и выше; принимается IELTS Indicator.')),
             'toefl': toefl(80, 4.5, L('80 or higher for tests taken before 21 January 2026, or 4.5 or higher from that date; the Home and Paper Editions are accepted.', '80 и выше для тестов, сданных до 21 января 2026, либо 4.5 и выше с этой даты; принимаются Home Edition и Paper Edition.')),
             'duolingo': eng(115, None, L('115 or higher.', '115 и выше.')),
             'waiver': None, 'note': L('TOEFL Essentials is also accepted (9.0 or higher).', 'Также принимается TOEFL Essentials (9.0 и выше).'), 'detailsSource': F, 'detailsVerified': V},
    sat=test('optional', L('SAT and ACT scores are listed as optional for international applicants.', 'Баллы SAT и ACT указаны как необязательные для иностранных абитуриентов.'), source=F, verified=V),
    costs=costs('2026–2027', T, V, L('Full-time undergraduates in a residence hall with the minimum first-year food plan', 'Студенты бакалавриата на полной нагрузке в общежитии с минимальным планом питания первокурсника'),
                [(L('Tuition (12–18 credits a term)', 'Обучение (12–18 кредитов за семестр)'), 61810, B), (L('Housing — residence halls', 'Жильё — общежития'), 12290, B),
                 (L('Food plan and the $45 housing damage deposit — the remainder of the published total, not read as a separate figure', 'План питания и залог за жильё $45 — остаток опубликованного итога, отдельной суммой не прочитан'), 7340, B)],
                L('$81,440 in tuition, housing and food', '$81,440 — обучение, жильё и питание'),
                L('$81,440 tuition, housing and food costs for 2026–27, as Loyola states', '$81,440 — обучение, жильё и питание на 2026–27, как указывает Loyola'),
                L('tuition, housing and food. Loyola says it charges no separate comprehensive fee. Books, personal costs and health insurance are extra', 'обучение, жильё и питание. Loyola сообщает, что отдельного общего сбора не берёт. Книги, личные расходы и страховка — сверх этого'),
                tuition=61810, billed=81440,
                note=L('The page for international students still shows 2025–26 and lists student health insurance at $2,330 for the spring term alone.', 'На странице для иностранных студентов всё ещё показан 2025–26; студенческая страховка там — $2,330 только за весенний семестр.')),
    fullRide={'available': True, 'internationalEligible': True, 'basis': 'need-based', 'covers': dict(TUITION_ONLY), 'renewable': None,
              'name': L('Need-based award for international students', 'Помощь по потребности для иностранных студентов'),
              'competitiveness': L('Loyola says it can provide only a limited amount of need-based aid to international students and that awards reaching full tuition are extremely rare.', 'Loyola сообщает, что может дать иностранным студентам лишь ограниченную помощь по потребности и что награды на полную плату за обучение крайне редки.'),
              'howToApply': L('Submit the CSS Profile with the application for admission.', 'Подайте CSS Profile вместе с заявкой на поступление.'),
              'note': L('Need-based awards are meant to supplement what the student can pay and can cover at most the cost of full tuition. Housing, food and other costs remain payable.', 'Помощь по потребности дополняет то, что студент может заплатить сам, и покрывает не более полной платы за обучение. Жильё, питание и прочие расходы оплачиваются отдельно.'),
              'quote': 'can cover up to the cost of full tuition, though these cases are extremely rare', 'quoteSource': A},
    merit=[award('Presidential Scholarship', rng(41000, 45000), ALLFY, L('Award range for the 2027–28 academic year. Kept with full-time enrolment and a cumulative GPA of at least 2.0.', 'Диапазон на 2027–28 учебный год. Сохраняется при полной нагрузке и общем GPA не ниже 2.0.'), application=AUTO, renewable=True),
           award('Dean’s Scholarship', rng(39000, 40000), ALLFY, L('Award range for the 2027–28 academic year. Kept with full-time enrolment and a cumulative GPA of at least 2.0.', 'Диапазон на 2027–28 учебный год. Сохраняется при полной нагрузке и общем GPA не ниже 2.0.'), application=AUTO, renewable=True),
           award('Loyola Scholarship', rng(37000, 38000), ALLFY, L('Award range for the 2027–28 academic year. Kept with full-time enrolment and a cumulative GPA of at least 2.0.', 'Диапазон на 2027–28 учебный год. Сохраняется при полной нагрузке и общем GPA не ниже 2.0.'), application=AUTO, renewable=True)],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': False, 'forms': ['CSS Profile'],
          'note': L('International students are considered for admission and need-based aid on academic qualifications, financial need and the availability of funds.', 'Иностранных студентов рассматривают на приём и помощь по потребности с учётом академической подготовки, финансовой потребности и наличия средств.')},
    sources=src('Loyola Maryland', (L('Loyola Maryland — international first-year applicants', 'Loyola Maryland — иностранным абитуриентам на первый курс'), F), ('aidintl', A), (L('Loyola Maryland — tuition, price and affordability 2026–27', 'Loyola Maryland — плата, стоимость и доступность 2026–27'), T), ('merit', SC)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid', 'merit'),
    unconfirmed=chk(L('cost of the food plan as a separate figure', 'стоимость плана питания отдельной суммой'), 'insurance', 'aiddeadline', 'founded', 'stats'),
))
annual['loyola-university-maryland'] = {'currency': 'USD', 'basis': 'billed', 'min': 81440, 'max': 81440}

# ----------------------------------------------------------- Marist University
H = 'https://www.marist.edu/admission/undergraduate/apply'
SC = 'https://www.marist.edu/financial-aid/freshman/types-of-aid/scholarships'
CAL = 'https://www.marist.edu/schedule-for-incoming-freshman'
records.append(R(
    'marist-university', 'Marist University', 'Marist', L('Poughkeepsie', 'Покипси'), NY, 'private', 'Private university',
    L('A private university in Poughkeepsie, New York, known until 2025 as Marist College. SAT and ACT scores are not required. Applicants are considered automatically for merit scholarships of $10,000 to $30,000 a year, and international students file the CSS Profile to be considered for need-based institutional aid.',
      'Частный университет в Покипси, штат Нью-Йорк, до 2025 года называвшийся Marist College. Баллы SAT и ACT не требуются. Абитуриенты автоматически рассматриваются на стипендии за успехи от $10,000 до $30,000 в год; иностранные студенты подают CSS Profile для рассмотрения на помощь университета по потребности.'),
    ['business', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education'],
    {'programs': 'https://www.marist.edu/academics/programs/complete-list', 'website': 'https://www.marist.edu/', 'admissions': H, 'international': 'https://www.marist.edu/admission/international', 'portal': 'https://www.commonapp.org/',
     'scholarships': SC, 'aid': 'https://www.marist.edu/financial-aid/freshman', 'cost': 'https://www.marist.edu/financial-aid/freshman/tuition-and-fees'},
    verified=V, platforms=[COMMON, OWNAPP('Marist')], aliases=['Marist College'],
    rounds=[
        rd('ED1', '2026-11-01', H, V, L('Notification by mid-December; non-refundable deposit by 15 February.', 'Решение до середины декабря; невозвратный депозит до 15 февраля.'), note=NOYEAR),
        rd('EA', '2026-11-15', H, V, L('Notification by mid-January.', 'Решение до середины января.'), note=NOYEAR),
        rd('ED2', '2027-02-15', H, V, L('Notification by late February.', 'Решение до конца февраля.'), note=NOYEAR),
        rd('RD', '2027-02-15', H, V, L('Notification by mid-March.', 'Решение до середины марта.'), note=NOYEAR),
    ],
    documents=docs(L('Common Application or Marist Application', 'Common Application или заявка Marist'), 'transcript'),
    sat=test('optional', L('Marist is a test-optional school: SAT and ACT scores are not required, and applicants are welcome to submit them.', 'Marist не требует тестов: баллы SAT и ACT необязательны, но их можно прислать.'), source=H, verified=V),
    fullRide=no_full(L('Merit scholarships range from $10,000 to $30,000 a year; the pages read describe no award at the level of full tuition.', 'Стипендии за успехи — от $10,000 до $30,000 в год; награды уровня полной платы за обучение на прочитанных страницах нет.')),
    merit=[award(L('Marist merit scholarships', 'Стипендии Marist за успехи'), rng(10000, 30000), L('The most academically competitive applicants', 'Самые сильные по успеваемости абитуриенты'), L('Awards are renewable.', 'Стипендии продлеваются.'), application=AUTO, renewable=True)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': ['CSS Profile'],
          'note': L('Marist’s calendar for incoming first-year students asks international students to complete the CSS Profile to be considered for need-based institutional aid. The calendar read is for 2026 entry.', 'В календаре Marist для поступающих на первый курс иностранных студентов просят заполнить CSS Profile для рассмотрения на помощь университета по потребности. Прочитанный календарь относится к набору 2026 года.')},
    sources=src('Marist', (L('Marist — apply, undergraduate', 'Marist — подача в бакалавриат'), H), ('merit', SC), (L('Marist — dates for incoming first-year students', 'Marist — даты для поступающих на первый курс'), CAL), (L('Marist — becoming Marist University', 'Marist — о переименовании в Marist University'), 'https://www.marist.edu/university')),
    checked=chk('rounds', 'tests', 'merit'),
    unconfirmed=chk('fee', 'english', L('tuition and fees for first-year students', 'плата и сборы для первокурсников'), 'needmet', 'founded', 'stats'),
))
nodesc.append('marist-university')

# ------------------------------------------------------------ McDaniel College
S = 'https://www.mcdaniel.edu/admissions-cost/undergraduate-admissions/undergraduate-admissions/international-student'
F = 'https://www.mcdaniel.edu/admissions-cost/undergraduate-admissions/first-year-student-admissions'
D = 'https://www.mcdaniel.edu/admissions-cost/undergraduate-admissions/dates-deadlines'
SC = 'https://www.mcdaniel.edu/admissions-cost/cost-financial-aid/types-financial-aid/mcdaniel-scholarships'
records.append(R(
    'mcdaniel-college', 'McDaniel College', 'McDaniel', L('Westminster', 'Уэстминстер'), L('Maryland', 'Мэриленд'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Westminster, Maryland. It charges no application fee and is test-optional. McDaniel tells international students to expect to pay at least $40,000 a year themselves; merit scholarships range from $7,500 to $33,000 a year.',
      'Частный колледж свободных искусств в Уэстминстере, штат Мэриленд. Сбора за заявку нет, тесты SAT/ACT необязательны. McDaniel предупреждает иностранных студентов, что им, как правило, придётся самим платить не менее $40,000 в год; стипендии за успехи — от $7,500 до $33,000 в год.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'medicine', 'education'],
    {'website': 'https://www.mcdaniel.edu/', 'admissions': F, 'international': S, 'portal': 'https://www.commonapp.org/', 'scholarships': SC,
     'aid': 'https://www.mcdaniel.edu/admissions-cost/cost-financial-aid', 'programs': 'https://www.mcdaniel.edu/academics/programs-degrees', 'cost': 'https://www.mcdaniel.edu/admissions-cost/cost-financial-aid/undergraduate-tuition-fees'},
    verified=V,
    rounds=[
        rnd(L('Application for autumn 2027 opens', 'Открытие подачи на осень 2027'), 'opens', '2026-08-01', False, None, S, V, applies=INTL),
        rd('ED', '2026-11-01', D, V, note=NOYEAR),
        rd('EA1', '2026-11-15', D, V, note=NOYEAR),
        rd('EA2', '2026-12-15', D, V, L('Also the final deadline for the Direct-Entry Nursing Program and for Dorsey Scholarship consideration.', 'Это также последний срок для Direct-Entry Nursing Program и рассмотрения на Dorsey Scholarship.'), note=NOYEAR),
        rd('RD', '2027-02-01', S, V, L('The application deadline for international students, who must start in the autumn semester.', 'Срок подачи для иностранных студентов; начать учёбу они могут только в осеннем семестре.'), note=NOYEAR, applies=INTL),
    ],
    fee=fee(0, L('McDaniel does not charge an application fee.', 'McDaniel не берёт сбор за заявку.'), F, V),
    documents=docs('app', L('High school transcript', 'Школьная выписка'), 'english', L('Certificate of Finances with current bank statements', 'Certificate of Finances с актуальными банковскими выписками')),
    english={'ielts': eng(6.5, None, atleast(6.5)),
             'toefl': toefl(80, None, J(L('At least 80 on the internet-based test, with a minimum of 20 in each section.', 'Не ниже 80 по интернет-версии и не менее 20 в каждом разделе.'), OLDSCALE)),
             'duolingo': eng(100, None, L('100 or higher.', '100 и выше.')),
             'waiver': L('English proficiency is shown with the TOEFL, IELTS, Duolingo, SAT or ACT.', 'Владение английским подтверждается TOEFL, IELTS, Duolingo, SAT или ACT.'),
             'note': None, 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('McDaniel describes itself as a proud test-optional institution: submitting scores is the applicant’s choice.', 'McDaniel называет себя вузом, не требующим тестов: отправлять баллы или нет, решает абитуриент.'), source=F, verified=V),
    fullRide=no_full(L('McDaniel says international students are typically responsible for an expected minimum of $40,000 a year and that the college is unlikely to be affordable for those who cannot contribute it. Its merit scholarships range from $7,500 to $33,000 a year.',
                       'McDaniel сообщает, что иностранные студенты, как правило, сами оплачивают не менее $40,000 в год и что колледж вряд ли будет по средствам тем, кто не может внести эту сумму. Стипендии за успехи — от $7,500 до $33,000 в год.')),
    merit=[award(L('McDaniel merit scholarships', 'Стипендии McDaniel за успехи'), rng(7500, 33000), L('Admitted undergraduate students', 'Принятые студенты бакалавриата'),
                 L('The award letter comes with the admission decision. The page does not say which amounts international students receive.', 'Письмо о стипендии приходит вместе с решением о приёме. На странице не сказано, какие суммы получают иностранные студенты.'), application=AUTO)],
    need={'availableToInternational': None, 'meetsFullNeed': False, 'needBlindInternational': None, 'forms': [L('Certificate of Finances', 'Certificate of Finances (подтверждение финансов)')],
          'note': L('International students are typically responsible for an expected minimum of $40,000 a year.', 'Иностранные студенты, как правило, сами оплачивают не менее $40,000 в год.')},
    sources=src('McDaniel', ('intl', S), ('fy', F), ('dates', D), ('merit', SC)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'merit'),
    unconfirmed=chk(L('tuition and fees', 'плата и сборы'), 'insurance', 'founded', 'stats'),
))
nodesc.append('mcdaniel-college')

# ----------------------------------------------------------- Morehouse College
S = 'https://morehouse.edu/admissions/apply/international-freshmen'
D = 'https://slate.morehouse.edu/apply'
records.append(R(
    'morehouse-college', 'Morehouse College', 'Morehouse', L('Atlanta', 'Атланта'), L('Georgia', 'Джорджия'), 'liberal-arts', L('Private historically Black liberal arts college for men', 'Частный исторически афроамериканский мужской колледж свободных искусств'),
    L('A private historically Black liberal arts college for men in Atlanta, Georgia. Its admission portal publishes exact dates for autumn 2027. SAT and ACT scores are optional for international first-year applicants; the pages read give no costs and no aid terms for international students.',
      'Частный исторически афроамериканский мужской колледж свободных искусств в Атланте, штат Джорджия. В портале приёма опубликованы точные даты на осень 2027. Для иностранных абитуриентов первого курса баллы SAT и ACT необязательны; стоимости и условий помощи иностранным студентам на прочитанных страницах нет.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'education'],
    {'website': 'https://morehouse.edu/', 'admissions': 'https://morehouse.edu/admissions/requirements-and-deadlines', 'international': S, 'portal': D,
     'aid': 'https://morehouse.edu/aid/financial-aid/', 'scholarships': 'https://morehouse.edu/aid/financial-aid/scholarships', 'programs': 'https://morehouse.edu/academics/majors-minors', 'cost': 'https://morehouse.edu/admissions/tuition-and-fees'},
    verified=V, founded=1867, platforms=[COMMON, OWNAPP('Morehouse College')],
    rounds=[
        rd('ED', '2026-11-01', D, V, dec_on('2026-12-05'), L('Deposit by 15 January 2027.', 'Депозит до 15 января 2027.')),
        rd('EA', '2026-12-15', D, V, dec_on('2027-01-29'), L('Deposit by 1 May 2027.', 'Депозит до 1 мая 2027.')),
        rd('RD', '2027-02-01', D, V, dec_on('2027-03-12'), L('Deposit by 1 May 2027.', 'Депозит до 1 мая 2027.')),
        rnd(L('Financial aid deadline', 'Срок подачи на финансовую помощь'), 'aid', '2027-01-30', False, L('The same date is listed for Early Decision, Early Action and Regular Decision. The portal says dates are subject to change.', 'Одна и та же дата указана для Early Decision, Early Action и Regular Decision. В портале сказано, что даты могут измениться.'), D, V),
    ],
    documents=docs('app', L('Non-refundable application fee', 'Невозвратный сбор за заявку'), L('Official high school graduation certificate or national examination results', 'Официальный документ об окончании школы или результаты государственных экзаменов'),
                   L('Two recommendation letters: one from a counselor or teacher, one from a community leader', 'Два рекомендательных письма: от консультанта или учителя и от общественного деятеля'), 'english',
                   L('Affidavit of support and a certified bank statement, for the Form I-20', 'Финансовое поручительство и заверенная банковская выписка — для формы I-20')),
    english={'ielts': eng(None, None, ACCEPTED), 'toefl': eng(None, None, ACCEPTED),
             'waiver': L('Required when the first language is not English or secondary education was completed where English is not the primary language of instruction.', 'Требуется, если английский не первый язык или школа окончена там, где основной язык обучения — не английский.'),
             'note': L('Cambridge English Qualifications and PTE Academic are also listed; other approved exams may be considered.', 'Также указаны Cambridge English Qualifications и PTE Academic; могут рассматриваться и другие одобренные экзамены.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('The requirements for international freshmen say official SAT or ACT scores are optional. Morehouse’s general checklist lists official SAT/ACT scores without that note.', 'В требованиях к иностранным первокурсникам сказано, что официальные баллы SAT или ACT необязательны. В общем списке документов Morehouse официальные баллы SAT/ACT указаны без этой оговорки.'), source=S, verified=V),
    fullRide=no_full(L('The pages read give no scholarship amounts and no terms of aid for international students.', 'На прочитанных страницах нет размеров стипендий и условий помощи иностранным студентам.')),
    need={'note': NOINTL},
    sources=src('Morehouse', (L('Morehouse — international freshmen', 'Morehouse — иностранным первокурсникам'), S), (L('Morehouse — admission portal, deadlines and key dates', 'Morehouse — портал приёма, сроки и ключевые даты'), D), ('programs', 'https://morehouse.edu/academics/majors-minors'), ('home', 'https://morehouse.edu/')),
    checked=chk('rounds', 'tests', 'docs', 'founded'),
    unconfirmed=chk('fee', L('minimum English test scores', 'минимальные баллы тестов по английскому'), L('tuition and fees — the page read gives no amounts', 'плата и сборы — на прочитанной странице сумм нет'), 'aid', 'merit', 'stats'),
))
nodesc.append('morehouse-college')

# ---------------------------------------------------------- Occidental College
S = 'https://www.oxy.edu/admission-aid/international-students'
A = 'https://www.oxy.edu/financial-aid/apply/international'
T = 'https://www.oxy.edu/financial-aid/cost'
SB = 'https://www.oxy.edu/offices-services/student-business-services/student-accounts/costs'
SC = 'https://www.oxy.edu/admission-aid/affordability/scholarship'
records.append(R(
    'occidental-college', 'Occidental College', 'Oxy', 'Los Angeles', CA, 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts college in Los Angeles, California. Applying is free and test-optional. All international applicants are considered automatically for merit scholarships; Occidental says need-based aid for international students is extremely limited and goes to a small number of them each year.',
      'Частный колледж свободных искусств в Лос-Анджелесе, штат Калифорния. Подача бесплатна, тесты SAT/ACT необязательны. Все иностранные абитуриенты автоматически рассматриваются на стипендии за успехи; помощь по потребности иностранным студентам, по словам Occidental, крайне ограничена и достаётся немногим.'),
    ['business', 'economics', 'computer-science', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts'],
    {'website': 'https://www.oxy.edu/', 'admissions': 'https://www.oxy.edu/admission-aid/first-year', 'international': S, 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': SC,
     'programs': 'https://www.oxy.edu/academics/areas-study', 'cost': T},
    verified=V, platforms=[COMMON, L('Coalition on Scoir', 'Coalition (Scoir)')], aliases=['Oxy'],
    rounds=[
        rd('ED1', '2026-11-01', S, V, L('Decisions by mid-December.', 'Решения до середины декабря.'), L('The financial aid deadline is the same day.', 'Срок подачи на финансовую помощь — в тот же день.'), note=NOYEAR, applies=FYI),
        rd('EA', '2026-11-01', S, V, L('Decisions by mid-January.', 'Решения до середины января.'), L('The financial aid deadline is the same day.', 'Срок подачи на финансовую помощь — в тот же день.'), note=NOYEAR, applies=FYI),
        rd('ED2', '2027-01-10', S, V, L('Decisions by mid-February.', 'Решения до середины февраля.'), L('The financial aid deadline is the same day.', 'Срок подачи на финансовую помощь — в тот же день.'), note=NOYEAR, applies=FYI),
        rd('RD', '2027-01-10', S, V, L('Decisions by mid-March.', 'Решения до середины марта.'), L('The financial aid deadline is the same day.', 'Срок подачи на финансовую помощь — в тот же день.'), note=NOYEAR, applies=FYI),
    ],
    fee=fee(0, L('Occidental says it has eliminated its application fee: no fee, no waiver needed.', 'Occidental сообщает, что отменил сбор за заявку: ни сбора, ни освобождения не нужно.'), S, V),
    documents=docs(L('Common Application or Coalition Application on Scoir', 'Common Application или Coalition Application (Scoir)'), 'transcript', 'english', L('International Student Financial Form, if applying for need-based aid', 'International Student Financial Form — если запрашиваете помощь по потребности')),
    english={'ielts': eng(7.0, None, atleast('7.0')), 'toefl': toefl(100, None, J(atleast(100), OLDSCALE)), 'duolingo': eng(130, None, atleast(130)),
             'waiver': None, 'note': L('Occidental points to a separate page for its full English language requirements, which was not read on this check.', 'За полными требованиями к английскому Occidental отсылает к отдельной странице; при этой проверке она не прочитана.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Occidental is test-optional: applicants choose whether to submit SAT or ACT scores.', 'Occidental не требует тестов: абитуриенты сами решают, отправлять ли баллы SAT или ACT.'), source='https://www.oxy.edu/admission-aid/first-year', verified=V),
    costs=costs('2026–2027', T, V, ONCAMPUS,
                [(TUIT, 70492, B), (REQFEES, 611, B), (L('Housing and meal plan', 'Жильё и план питания'), 21022, B), (L('Books and supplies', 'Книги и материалы'), 1290, E), (PERS, 1950, E)],
                h_coa(95365), tt_coa(95365, 92125), L('tuition, required fees, housing and the meal plan (billed), plus estimates for books and personal expenses. Travel varies and is not in the total', 'обучение, обязательные сборы, жильё и план питания (по счёту), а также оценки на книги и личные расходы. Дорога зависит от студента и в итог не входит'),
                tuition=70492, billed=92125, budget=95365,
                extras=[{'label': L('Student Health Insurance (may be waived)', 'Студенческая медицинская страховка (можно отказаться)'), 'amount': 4062, 'required': True,
                         'condition': L('Charged by Student Business Services for 2026–27 unless waived; the page does not say on what terms international students can waive it.', 'Начисляется за 2026–27, если от неё не отказаться; на странице не сказано, на каких условиях это могут сделать иностранные студенты.'), 'year': '2026–2027'}]),
    fullRide=no_full(L('Occidental says need-based aid for international students is extremely limited and competitive. Students admitted through Early Decision receive at least $20,000 a year; the pages read give no other merit amounts.', 'Occidental сообщает, что помощь по потребности иностранным студентам крайне ограничена и конкурсна. Принятые в Early Decision получают не менее $20,000 в год; других размеров стипендий за успехи на прочитанных страницах нет.')),
    merit=[award('Occidental Commitment Scholarship', L('At least $20,000 a year', 'Не менее $20,000 в год'), L('All students admitted through Early Decision I or II', 'Все принятые в Early Decision I или II'),
                 L('Renewable for a total of four years ($80,000 in all). Recipients are still considered for larger merit scholarships.', 'Продлевается всего на четыре года ($80,000 в сумме). Получатели по-прежнему рассматриваются на более крупные стипендии за успехи.'), application=AUTO, renewable=True),
           award(L('Occidental merit scholarships', 'Стипендии Occidental за успехи'), None, L('All international applicants', 'Все иностранные абитуриенты'), NOAMT, application=AUTO)],
    need={'availableToInternational': True, 'meetsFullNeed': None, 'needBlindInternational': None, 'forms': [L('International Student Financial Form', 'International Student Financial Form (финансовая форма иностранного студента)')],
          'deadlines': L('The same day as the admission deadline of the round.', 'В тот же день, что и срок подачи своего раунда.'),
          'note': L('Need-based aid is extremely limited and is awarded to a small number of international students each year.', 'Помощь по потребности крайне ограничена и ежегодно назначается небольшому числу иностранных студентов.')},
    sources=src('Occidental', ('intl', S), ('aidintl', A), ('coa 2026–27', T), (L('Occidental — student account charges 2026–2027', 'Occidental — платежи по студенческому счёту 2026–2027'), SB), ('merit', SC)),
    checked=chk('rounds', 'fee', 'english', 'tests', 'costs', 'aid'),
    unconfirmed=chk('awards', 'needmet', 'engwaiver', 'founded', 'stats', 'toeflnew'),
))
nodesc.append('occidental-college')
annual['occidental-college'] = {'currency': 'USD', 'basis': 'total', 'min': 95365, 'max': 95365, 'note': L('Travel and health insurance ($4,062 unless waived) are not in this total', 'Дорога и медицинская страховка ($4,062, если от неё не отказаться) в этот итог не входят')}

# ----------------------------------------------------- Ohio Wesleyan University
S = 'https://www.owu.edu/admission/apply/international-students/how-to-apply/'
A = 'https://www.owu.edu/admission/apply/international-students/international-scholarships-and-need-based-aid/'
F = 'https://www.owu.edu/admission/apply/first-year-students/'
records.append(R(
    'ohio-wesleyan-university', 'Ohio Wesleyan University', 'Ohio Wesleyan', L('Delaware', 'Делавэр'), L('Ohio', 'Огайо'), 'liberal-arts', 'Private liberal arts college',
    L('A private liberal arts university in Delaware, Ohio. There is no application fee and admission is test-optional. Ohio Wesleyan states that total billed costs are $71,922 a year and that eligible international students can expect a scholarship of $37,000 a year, with no separate application.',
      'Частный университет свободных искусств в городе Делавэр, штат Огайо. Сбора за заявку нет, тесты SAT/ACT необязательны. Ohio Wesleyan сообщает, что счёт вуза за год — $71,922, а иностранные студенты, отвечающие условиям, могут рассчитывать на стипендию $37,000 в год без отдельной заявки.'),
    ['business', 'economics', 'computer-science', 'engineering', 'psychology', 'biology', 'mathematics', 'social-sciences', 'humanities', 'arts', 'law', 'education'],
    {'website': 'https://www.owu.edu/', 'admissions': F, 'international': 'https://www.owu.edu/admission/apply/international-students/', 'portal': 'https://www.commonapp.org/', 'aid': A, 'scholarships': A,
     'programs': 'https://www.owu.edu/academics/majors-minors/', 'cost': 'https://www.owu.edu/admission/apply/international-students/costs-fees/'},
    verified=V, platforms=[COMMON, L('OWU Online Application', 'Онлайн-заявка OWU')], aliases=['OWU'],
    rounds=[
        rd('ED', '2026-11-15', F, V, L('Enrolment deposit due 31 January.', 'Депозит до 31 января.'), note=NOYEAR),
        rd('EA', '2026-12-01', F, V, L('Enrolment deposit due 1 May.', 'Депозит до 1 мая.'), note=NOYEAR),
        rnd(L('Priority scholarship deadline', 'Приоритетный срок для стипендий'), 'scholarship', '2027-01-15', False, None, F, V, note=NOYEAR),
        rd('RD', '2027-03-01', F, V, L('After the deadline applications for the autumn are still considered through 1 July. Decisions are sent on a rolling basis once an application is complete.', 'После срока заявки на осень продолжают рассматривать до 1 июля. Решения рассылаются по мере готовности заявок.'), L('Enrolment deposit due 1 May.', 'Депозит до 1 мая.'), note=NOYEAR),
    ],
    fee=fee(0, L('There is no application fee.', 'Сбора за заявку нет.'), S, V),
    documents=docs(L('Common Application or OWU Online Application', 'Common Application или онлайн-заявка OWU'), L('One essay on a topic of the applicant’s choice', 'Одно эссе на тему по выбору абитуриента'), 'transcript',
                   L('Verification of English proficiency, which can include an interview', 'Подтверждение владения английским — возможно, через собеседование'), L('External examination results such as O-levels or the IB, where applicable', 'Результаты внешних экзаменов (O-levels, IB) — если применимо')),
    interview=L('OWU offers InitialView, Vericant, the Duolingo English Test with interview, or a virtual interview with its own representative after the application is submitted.', 'OWU предлагает InitialView, Vericant, Duolingo English Test с собеседованием либо онлайн-собеседование со своим представителем после подачи заявки.'),
    english={'duolingo': eng(None, None, L('The Duolingo English Test with interview is one of the accepted ways to verify English; the page gives no minimum score.', 'Duolingo English Test с собеседованием — один из принятых способов подтвердить английский; минимального балла на странице нет.')),
             'waiver': L('All international students must verify their English proficiency.', 'Все иностранные студенты обязаны подтвердить владение английским.'),
             'note': L('The minimum test scores were not read on this check.', 'Минимальные баллы тестов при этой проверке не прочитаны.'), 'detailsSource': S, 'detailsVerified': V},
    sat=test('optional', L('Ohio Wesleyan is test-optional; its international scholarship is not awarded on the basis of a minimum GPA or test scores.', 'Ohio Wesleyan не требует тестов; стипендия для иностранных студентов не зависит от минимального GPA или баллов тестов.'), source=F, verified=V),
    costs=costs('2026–2027', A, V, L('International undergraduates', 'Иностранные студенты бакалавриата'),
                [(L('Total billed costs', 'Счёт вуза за год'), 71922, B)],
                L('$71,922 in total billed costs', '$71,922 — счёт вуза за год'), L('$71,922 total billed costs a year, as stated for the autumn 2026 session', '$71,922 — счёт вуза за год, как указано для набора осени 2026'),
                L('the charges billed by the university; the page does not break them down. Books, travel, personal costs and health insurance are extra', 'платежи по счёту университета; по статьям страница их не расписывает. Книги, дорога, личные расходы и страховка — сверх этого'),
                billed=71922,
                note=L('With the $37,000 international scholarship the billed amount left to pay is $34,922 a year (calculated by UniPath from the two published figures).', 'С учётом стипендии для иностранных студентов $37,000 к оплате по счёту остаётся $34,922 в год (рассчитано UniPath из двух опубликованных цифр).')),
    fullRide=no_full(L('The international scholarship is $37,000 a year against billed costs of $71,922; Ohio Wesleyan says international students are required to contribute to their educational expenses.', 'Стипендия для иностранных студентов — $37,000 в год при счёте вуза $71,922; Ohio Wesleyan сообщает, что иностранные студенты обязаны участвовать в оплате обучения.')),
    merit=[award('Bashford Scholarship', L('$37,000 a year', '$37,000 в год'), L('Eligible international students', 'Иностранные студенты, отвечающие условиям'),
                 L('Stated for the autumn 2026 session. Provided for up to eight semesters while the student stays in good academic standing; not based on a minimum GPA or test scores.', 'Указано для набора осени 2026. Назначается не более чем на восемь семестров при хорошей успеваемости; не зависит от минимального GPA или баллов тестов.'), application=AUTO, renewable=True)],
    need={'availableToInternational': True, 'meetsFullNeed': False, 'needBlindInternational': None, 'forms': [],
          'note': L('Ohio Wesleyan’s page covers scholarships, department awards and need-based aid for international students and says they are required to contribute towards their expenses; the need-based terms were not read in detail.', 'Страница Ohio Wesleyan описывает стипендии, награды кафедр и помощь по потребности для иностранных студентов и сообщает, что они обязаны участвовать в оплате; условия помощи по потребности подробно не прочитаны.')},
    sources=src('Ohio Wesleyan', (L('Ohio Wesleyan — how to apply, international students', 'Ohio Wesleyan — как подать иностранным студентам'), S), ('meritintl', A), ('fy', F), ('programs', 'https://www.owu.edu/academics/majors-minors/')),
    checked=chk('rounds', 'fee', 'tests', L('billed costs and the international scholarship', 'счёт вуза и стипендия для иностранных студентов')),
    unconfirmed=chk(L('minimum English test scores', 'минимальные баллы тестов по английскому'), L('breakdown of the billed costs', 'состав счёта вуза'), L('scholarship amount for autumn 2027', 'размер стипендии на осень 2027'), 'insurance', 'founded', 'stats'),
))
nodesc.append('ohio-wesleyan-university')
annual['ohio-wesleyan-university'] = {'currency': 'USD', 'basis': 'billed', 'min': 71922, 'max': 71922}

if __name__ == '__main__':
    write(records, annual)
    not_described(nodesc)
    flush()
