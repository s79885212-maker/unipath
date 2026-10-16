# -*- coding: utf-8 -*-
"""Canada, batch 3 of 5: Concordia, Memorial, New Brunswick, Windsor, Regina,
Ontario Tech, Toronto Metropolitan, Brock, Wilfrid Laurier, Trent.
Pages read on 16 October 2026.

The University of Victoria (list item 14) still did not answer from this
network on 16 October 2026 and stays for a later batch. Brock's site refuses
the command-line fetch, so its pages were read in the browser.

Same category and rules as batches 1 and 2."""
import ca50
from ca50 import R, rnd, test, eng, toefl, fee, costs, ev, money, L
from us200_std import J, award, flush, AUTO

V = '2026-10-16'
E, B = 'estimate', 'billed'
P = 'partial'

def D(name, kind, iso, src, cond=None, note=None, status='confirmed', **k):
    return rnd(name, kind, iso, k.pop('binding', False), cond, src, V, status=status, note=note, **k)

NOYEAR = L('The page prints this date without a year; it was read on 16 October 2026, during the cycle for autumn 2027 entry.',
           'Страница указывает эту дату без года; она прочитана 16 октября 2026, в цикле поступления на осень 2027.')
OUAC = 'OUAC (Ontario Universities’ Application Centre)'
OUAC_FEE = lambda uni, amt: L('Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of %s for %s, charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.' % (money(amt), uni),
                              'Оплачивается OUAC в канадских долларах: базовый сбор C$159 за три программы, C$51 за каждую следующую и сбор за оценку документов %s для %s — один раз для поступающих не из школ Онтарио (OUAC «Group B»). Некоторые программы берут свой сбор.' % (money(amt), uni))
OUAC_SRC = 'https://www.ouac.on.ca/guide/undergrad-fees'
OUAC_S = (L('OUAC — undergraduate fees', 'OUAC — сборы бакалавриата'), OUAC_SRC)
PARTIAL = L('Fields of study are those whose programme was named on the pages read (deadline, fee and tuition tables); the full list of majors was not read, so a field missing here may still exist.',
            'Направления — только те, программа которых названа на прочитанных страницах (таблицы сроков, сборов и платы); полный список специальностей не читался, поэтому отсутствующее здесь направление всё равно может быть.')
NOT_NEED = L('Need-based aid for international first-year students is not described on the pages read.', 'Помощь по нуждаемости для иностранных первокурсников на прочитанных страницах не описана.')
PLAIN_TOEFL = lambda old, new, extra=None: J(L('Tests before 21 January 2026: %s.' % old, 'Тесты до 21 января 2026: %s.' % old),
                                             L('Tests from 21 January 2026 (1–6 scale): %s.' % new, 'Тесты с 21 января 2026 (шкала 1–6): %s.' % new), extra)
UZ = lambda txt_en, txt_ru: L('Uzbekistan: ' + txt_en, 'Узбекистан: ' + txt_ru)
NOSAT = test(None, L('Not checked on the pages read.', 'На прочитанных страницах не проверено.'))
PUB = L('Public research university', 'Государственный исследовательский университет')
PUBC = L('Public university', 'Государственный университет')
FOUND = L('founding year', 'год основания')
MAJORS = L('full list of majors', 'полный список специальностей')
UZU = L('requirements for Uzbekistan', 'требования для Узбекистана')
TESTS = L('test policy', 'политика тестов')
DL = L('deadlines', 'сроки')
FEE = L('application fee', 'сбор за заявку')
ENG = L('English requirements', 'требования к английскому')
TUI = L('tuition', 'плата за обучение')
SCH = L('scholarships', 'стипендии')
DOCS = lambda portal: [L('%s application' % portal, 'Заявка %s' % portal), L('Secondary school transcripts and certificate', 'Школьные табели и аттестат'),
                       L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')]

records, annual = [], {}

# --------------------------------------------------------------- Concordia
C = 'https://www.concordia.ca/'
CA = C + 'admissions/undergraduate/'
CT = C + 'students/financial/tuition-fees/rates/undergrad.html'
CS = C + 'students/financial/scholarships-funding/scholarships.html'
CR = CA + 'requirements/international.html'
CE = CA + 'requirements/english-language-proficiency.html'
records.append(R('concordia-university', 'Concordia University', 'Concordia', 'Montreal', 'QC', PUB,
    L('An English-language university in downtown Montreal, with the John Molson School of Business and the Gina Cody School of Engineering and Computer Science. International students in Quebec also need a Quebec Acceptance Certificate (CAQ).',
      'Англоязычный университет в центре Монреаля, с John Molson School of Business и Gina Cody School of Engineering and Computer Science. Иностранцам в Квебеке нужен также сертификат CAQ.'),
    ['business', 'engineering', 'computer-science', 'arts'],
    {'website': C, 'admissions': CA + 'apply.html', 'international': CR, 'portal': CA + 'apply-now.html', 'scholarships': CS, 'aid': CA + 'costs-aid.html', 'programs': CT, 'cost': CT},
    verified=V, aliases=['Concordia', 'Concordia Montreal', 'John Molson School of Business'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'John Molson School of Business programs', 'engineering': 'Engineering programs (Gina Cody School)',
                        'computer-science': 'Computer Science programs (Gina Cody School)', 'arts': 'Fine Arts'}, CT, V),
    platforms=[L('Concordia online application', 'Онлайн-заявка Concordia')],
    rounds=[
        D(L('Recommended date for U.S. and international applicants (immigration documents)', 'Рекомендуемая дата для поступающих из США и других стран (иммиграционные документы)'), 'priority', '2027-02-01', CA + 'apply.html', note=NOYEAR),
        D(L('Application deadline, fall entry', 'Срок подачи, осенний набор'), 'regular', '2027-03-01', CA + 'apply.html',
          L('Programmes with additional requirements set their own dates.', 'У программ с дополнительными требованиями свои сроки.'), note=NOYEAR),
    ],
    fee=fee(100, L('Non-refundable and cannot be waived; paid by credit card.', 'Не возвращается и не отменяется; оплата кредитной картой.'), CA + 'apply-now.html', V),
    documents=DOCS('Concordia') + [L('Additional material for some programmes', 'Дополнительные материалы для некоторых программ')],
    english={'ielts': eng(6, note=L('Academic; no component under 5.5. One Skill Retake and IELTS Online accepted. A placement test may follow.', 'Academic; ни одной части ниже 5.5. One Skill Retake и IELTS Online принимаются. Может потребоваться тест для распределения.')),
             'toefl': toefl(70, 4.0, L('0–120 scale: 70. Tests from January 2026 (1–6 scale): 4.0 with no section below 3.5. MyBest accepted.', 'Шкала 0–120: 70. Тесты с января 2026 (шкала 1–6): 4.0, ни одной секции ниже 3.5. MyBest принимается.')),
             'duolingo': eng(105, note=L('No subscore under 90.', 'Ни одного подбалла ниже 90.')),
             'note': L('CAEL 50 (50 in each part); Cambridge C1 Advanced 175 or C2 Proficiency 190; PTE Academic 50.', 'CAEL 50 (50 в каждой части); Cambridge C1 Advanced 175 или C2 Proficiency 190; PTE Academic 50.')},
    sat=test('optional', L('For the American curriculum: “ACT and SAT scores are not required.”', 'Для американской программы: «баллы ACT и SAT не требуются».'), source=CR, verified=V,
             label=L('SAT/ACT not required', 'SAT/ACT не требуются')),
    intlQuals=UZ('Certificate of Secondary Education (O‘rta Ma’lumot To‘g‘risida Shahodatnoma / Attestat o Srednem Obrazovanii) or Certificate of General Secondary Education (Umumiy O‘rta Ta’lim To‘g‘risida).',
                 'аттестат о среднем образовании (O‘rta Ma’lumot To‘g‘risida Shahodatnoma / Attestat o Srednem Obrazovanii) или аттестат об общем среднем образовании (Umumiy O‘rta Ta’lim To‘g‘risida).'),
    costs=costs('2026–2027', CT, V, L('International undergraduates, tuition per credit, Fall 2026 and Winter 2027', 'Иностранные студенты бакалавриата, плата за кредит, осень 2026 и зима 2027'),
        [(L('Arts and Science, per credit', 'Arts and Science, за кредит'), 1160.00, B), (L('Fine Arts, per credit', 'Fine Arts, за кредит'), 1010.00, B),
         (L('Engineering and Computer Science, per credit', 'Engineering and Computer Science, за кредит'), 1285.00, B), (L('John Molson School of Business, per credit', 'John Molson School of Business, за кредит'), 1400.00, B),
         (L('Residence room and fees, 8 months (no year stated)', 'Комната в общежитии и сборы, 8 месяцев (год не указан)'), {'min': 5352, 'max': 12920}, E),
         (L('Meal plan, mandatory in residence (no year stated)', 'Питание, обязательно в общежитии (год не указан)'), 6705, E)],
        L('C$1,010–C$1,400 per credit (2026–27)', 'C$1,010–C$1,400 за кредит (2026–27)'),
        L('International tuition is charged per credit: from C$1,010 (Fine Arts) to C$1,400 (John Molson) in Fall 2026 and Winter 2027', 'Плата для иностранцев — за кредит: от C$1,010 (Fine Arts) до C$1,400 (John Molson) осенью 2026 и зимой 2027'),
        L('tuition rates only; compulsory fees, health insurance, housing and food extra', 'только ставки платы; обязательные сборы, страховка, жильё и питание — сверх этого'),
        note=L('A yearly figure is not computed here because the full-time number of credits per year was not read. Some international students qualify for exemptions from the higher rate.', 'Годовая сумма здесь не считается: очная нагрузка в кредитах за год не прочитана. Часть иностранцев может получить освобождение от повышенной ставки.')),
    merit=[award('Concordia entrance scholarships', None, L('Bachelor’s candidates entering university for the first time (CEGEP, Canadian high school or equivalent)', 'Поступающие на бакалавриат впервые (CEGEP, канадская школа или эквивалент)'),
                 application=AUTO, basis='merit', source=CS, verified=V,
                 note=L('Most are automatic, by academic ranking; an offer of admission does not guarantee one. Amounts are not given. The guaranteed C$4,000 Undergraduate Excellence Award is for Canadian citizens and permanent residents only.', 'Большинство — автоматически, по академическому рейтингу; предложение о зачислении стипендию не гарантирует. Суммы не указаны. Гарантированная C$4,000 Undergraduate Excellence Award — только для граждан и постоянных жителей Канады.'))],
    need={'note': NOT_NEED},
    sources=[(L('Concordia — how to apply and deadlines', 'Concordia — как подать и сроки'), CA + 'apply.html'), (L('Concordia — application fee', 'Concordia — сбор за заявку'), CA + 'apply-now.html'),
             (L('Concordia — undergraduate tuition rates', 'Concordia — ставки платы бакалавриата'), CT), (L('Concordia — costs and aid', 'Concordia — стоимость и помощь'), CA + 'costs-aid.html'),
             (L('Concordia — international requirements', 'Concordia — требования для иностранцев'), CR), (L('Concordia — English proficiency', 'Concordia — требования к английскому'), CE), (L('Concordia — scholarships', 'Concordia — стипендии'), CS)],
    checked=[DL, FEE, ENG, TESTS, UZU, TUI],
    unconfirmed=[L('entrance scholarship amounts', 'суммы вступительных стипендий'), MAJORS, FOUND]))

# --------------------------------------------------------------- Memorial
MU = 'https://www.mun.ca/'
MD = MU + 'undergrad/admissions/admission-deadlines/'
MF = MU + 'undergrad/admissions/i-want-to-apply/application-fees/'
MC = MU + 'undergrad/money-matters/'
ME = MU + 'undergrad/admissions/i-want-to-apply/english-proficiency-tests/'
MQ = MU + 'undergrad/admissions/i-want-to-apply/international-high-school-curriculum-requirements/'
MS = MU + 'scholarships/entrance-scholarships/international-students/'
records.append(R('memorial-university-of-newfoundland', 'Memorial University of Newfoundland', 'Memorial', 'St. John’s', 'NL', PUB,
    L('The largest university in Atlantic Canada, with its main campus in St. John’s and Grenfell Campus in Corner Brook. International tuition is among the lowest in Canada.',
      'Крупнейший университет Атлантической Канады: главный кампус в Сент-Джонсе и Grenfell Campus в Корнер-Бруке. Плата для иностранцев — одна из самых низких в Канаде.'),
    ['business', 'engineering', 'education', 'arts', 'medicine'],
    {'website': MU, 'admissions': MD, 'international': MQ, 'portal': 'https://apply.mun.ca/', 'scholarships': MS, 'aid': MS, 'programs': MD, 'cost': MC},
    verified=V, aliases=['MUN', 'Memorial', 'Memorial University'], campuses=['St. John’s', L('Grenfell Campus (Corner Brook)', 'Grenfell Campus (Корнер-Брук)')],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Bachelor of Commerce (co-operative)', 'engineering': ('Bachelor of Engineering', ME), 'education': 'Bachelor of Education',
                        'arts': ('Bachelor of Music', MF), 'medicine': ('Doctor of Pharmacy (entry-to-practice)', MF)}, MD, V),
    platforms=[L('Memorial online application (apply.mun.ca)', 'Онлайн-заявка Memorial (apply.mun.ca)')],
    rounds=[
        D(L('Priority deadline for the fall semester (also for early entrance scholarships)', 'Приоритетный срок на осенний семестр (и для ранних вступительных стипендий)'), 'priority', '2027-03-01', MD,
          L('Deadlines are in Newfoundland Time. International applicants are advised to apply at least 12 weeks before the semester starts; competitive programmes have their own dates.', 'Сроки — по ньюфаундлендскому времени. Иностранцам советуют подать заявку минимум за 12 недель до начала семестра; у конкурсных программ свои сроки.'), note=NOYEAR),
        D(L('Document deadline, fall semester', 'Срок документов, осенний семестр'), 'documents', '2027-08-20', MD,
          L('The general application closes on the first day of the semester.', 'Общий приём закрывается в первый день семестра.'), note=NOYEAR),
    ],
    fee=fee(300, L('General application fee for international applicants (C$70 for Canadians). Music adds C$40; the Doctor of Pharmacy adds C$175 for international applicants.', 'Общий сбор для иностранцев (для канадцев C$70). Music — ещё C$40; Doctor of Pharmacy — ещё C$175 для иностранцев.'), MF, V),
    documents=DOCS('Memorial') + [L('Certified translation of the final certificate with grades, sent by post or courier', 'Заверенный перевод итогового аттестата с оценками, по почте или курьером')],
    english={'ielts': eng(6.5, note=L('Academic or Academic for UKVI; at least 6 in reading and writing. Engineering asks for more.', 'Academic или Academic for UKVI; не ниже 6 по чтению и письму. Для инженерии — выше.')),
             'toefl': toefl(83, 4.5, L('Tests up to January 2026: 83 with 20 in reading and writing. Newer tests (1–6 scale): 4.5 with 4.0 in reading and writing. Home Edition accepted.', 'Тесты до января 2026: 83, не ниже 20 по чтению и письму. Новые тесты (шкала 1–6): 4.5, не ниже 4.0 по чтению и письму. Home Edition принимается.')),
             'duolingo': eng(115), 'note': L('CAEL 60; PTE Academic 60; Cambridge C1/C2 176; Michigan English Test 59.', 'CAEL 60; PTE Academic 60; Cambridge C1/C2 176; Michigan English Test 59.')},
    sat=test('conditional', L('Required only of applicants from American-patterned schools not accredited by a recognized body (SAT, ACT or AP). Applicants from national systems such as Uzbekistan’s are assessed on their school certificate.',
                              'Требуется только от выпускников школ американского образца без признанной аккредитации (SAT, ACT или AP). Поступающих из национальных систем, как узбекская, оценивают по аттестату.'),
             label=L('SAT/ACT required only for some school systems', 'SAT/ACT нужны только для некоторых школьных систем'), source=MQ + 'american-patterned-curriculum/', verified=V),
    intlQuals=UZ('Diploma of Academic Lyceum or Certificate of General Secondary Education, with English, Mathematics, a laboratory science, Social Studies or a language, and an elective; minimum average of 4 in these subjects at the senior level with a pass in each.',
                 'диплом академического лицея или аттестат об общем среднем образовании; предметы — английский, математика, лабораторная наука, обществознание или язык и предмет по выбору; средний балл не ниже 4 по этим предметам в старших классах, без неудов.'),
    costs=costs('2026–2027', MC, V, L('International students starting in fall 2026, St. John’s campus, two semesters (10 courses)', 'Иностранцы, начавшие осенью 2026, кампус St. John’s, два семестра (10 курсов)'),
        [(L('Tuition, new international students as of fall 2026', 'Обучение, новые иностранные студенты с осени 2026'), 22500, B), (L('Student Services Fee', 'Сбор студенческих служб'), 100, B),
         (L('Students’ Union', 'Студенческий союз'), 149, B), (L('Recreation fee', 'Спортивный сбор'), 148, B), (L('Health insurance (international students)', 'Медицинская страховка (иностранцы)'), 548, B),
         (L('Residence with mandatory meal plan, Paton College double room, per semester (Fall 2026)', 'Общежитие с обязательным питанием, Paton College, двухместная, за семестр (осень 2026)'), 5237, B)],
        L('C$22,500 tuition for two semesters (2026–27)', 'C$22,500 — обучение за два семестра (2026–27)'),
        L('Tuition C$22,500 for two semesters for international students starting in fall 2026, plus fees and insurance of about C$945; residence with meals from C$5,237 a semester', 'Обучение C$22,500 за два семестра для иностранцев, начавших осенью 2026, плюс сборы и страховка около C$945; общежитие с питанием — от C$5,237 за семестр'),
        L('tuition in the main figure; fees, insurance and residence listed separately', 'в основной сумме — обучение; сборы, страховка и общежитие указаны отдельно'), tuition=22500,
        note=L('Fees approved by the Board of Regents as of June 2026. Residence rates are per semester (Winter 2027: C$5,357 for the same room).', 'Сборы утверждены Board of Regents на июнь 2026. Плата за общежитие — за семестр (зима 2027: C$5,357 за ту же комнату).')),
    merit=[award('Memorial University of Newfoundland International Entrance Scholarship', None, L('International students on admission', 'Иностранные студенты при зачислении'),
                 application=AUTO, renewable=False, basis='merit', source=MS, verified=V,
                 note=L('Automatic consideration, not a guarantee; first year only. Other entrance awards (IUGS, Fortis – H. Stanley Marshall, Killam American) work the same way. Amounts are not given.', 'Автоматическое рассмотрение, без гарантии; только первый год. Так же работают другие вступительные стипендии (IUGS, Fortis – H. Stanley Marshall, Killam American). Суммы не указаны.'))],
    need={'note': NOT_NEED},
    sources=[(L('Memorial — admission deadlines', 'Memorial — сроки'), MD), (L('Memorial — application fees', 'Memorial — сборы за заявку'), MF), (L('Memorial — money matters 2026-27', 'Memorial — стоимость 2026–27'), MC),
             (L('Memorial — English proficiency tests', 'Memorial — тесты по английскому'), ME), (L('Memorial — Uzbekistan requirements', 'Memorial — требования для Узбекистана'), MQ + 'uzbekistan/'),
             (L('Memorial — American-patterned curriculum', 'Memorial — американская программа'), MQ + 'american-patterned-curriculum/'), (L('Memorial — international entrance scholarships', 'Memorial — стипендии для иностранцев'), MS)],
    checked=[DL, FEE, ENG, TESTS, UZU, TUI, SCH],
    unconfirmed=[L('entrance scholarship amounts', 'суммы вступительных стипендий'), MAJORS, FOUND]))
annual['memorial-university-of-newfoundland'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 22500, 'max': 22500, 'note': 'Tuition for two semesters for international students starting in fall 2026; fees, insurance, housing and food extra'}

# --------------------------------------------------------------- New Brunswick
N = 'https://www.unb.ca/'
ND = N + 'international/apply/deadlines.html'
NA = N + 'international/apply/index.html'
NE = N + 'international/admission/english.html'
NC = N + 'international/admission/countries.html'
NS = N + 'moneymatters/scholarships/international.html'
NF = N + 'international/financial/index.html'
records.append(R('university-of-new-brunswick', 'University of New Brunswick', 'UNB', 'Fredericton', 'NB', PUB,
    L('One of the oldest English-language universities in North America, with campuses in Fredericton and Saint John, New Brunswick.',
      'Один из старейших англоязычных университетов Северной Америки, с кампусами во Фредериктоне и Сент-Джоне (Нью-Брансуик).'),
    ['education', 'medicine'],
    {'website': N, 'admissions': ND, 'international': N + 'international/admission/index.html', 'portal': 'https://apply.unb.ca/', 'scholarships': NS, 'aid': NS, 'programs': ND, 'cost': NF},
    verified=V, aliases=['UNB', 'UNB Fredericton', 'UNB Saint John'], campuses=['Fredericton', 'Saint John'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'education': 'Bachelor of Education (Fredericton and Saint John)', 'medicine': 'Bachelor of Nursing'}, ND, V),
    platforms=[L('UNB online application (apply.unb.ca)', 'Онлайн-заявка UNB (apply.unb.ca)')],
    rounds=[
        D(L('Entrance scholarship application (after admission, in the UNB application account)', 'Заявка на вступительные стипендии (после зачисления, в аккаунте UNB)'), 'scholarship', '2027-03-01', NS, note=NOYEAR),
        D(L('Application deadline for most undergraduate programmes', 'Срок подачи для большинства программ бакалавриата'), 'regular', '2027-03-31', ND,
          L('Guideline for international applicants: apply before 1 June for September. Nursing closes 15 February; Education 15 December. Programmes accept later applications while seats remain.', 'Ориентир для иностранцев: подать до 1 июня на сентябрь. Nursing закрывается 15 февраля; Education — 15 декабря. Программы принимают заявки и позже, пока есть места.'), note=NOYEAR),
    ],
    fee=fee(125, L('International application fee, non-refundable; credit card, bank draft or certified cheque.', 'Сбор для иностранцев, не возвращается; кредитная карта, банковский чек или заверенный чек.'), NA, V),
    documents=DOCS('UNB') + [L('SAT, ACT, Cambridge or other test results if available', 'Результаты SAT, ACT, Cambridge и других тестов, если есть')],
    english={'ielts': eng(6.5, note=L('Academic or Academic Indicator. Nursing, Education and Arts in Fredericton, and Nursing and Health Sciences in Saint John, ask for 7.0.', 'Academic или Academic Indicator. Nursing, Education и Arts во Фредериктоне, Nursing и Health Sciences в Сент-Джоне требуют 7.0.')),
             'toefl': toefl(85, 4.5, L('Before 2026: 85. Tests from January 2026 (1–6 scale): 4.5 with at least 4.5 in speaking and writing.', 'До 2026: 85. Тесты с января 2026 (шкала 1–6): 4.5, не ниже 4.5 по говорению и письму.')),
             'duolingo': eng(115), 'note': L('CAEL 60; PTE Academic 59; Cambridge B2 First, C1 or C2 176. Conditional admission with full-time English training at UNB is possible.', 'CAEL 60; PTE Academic 59; Cambridge B2 First, C1 или C2 176. Возможен условный приём с очным курсом английского в UNB.')},
    sat=test('optional', L('For U.S. applicants: “SAT and ACT scores are not required but suggested.”', 'Для американских абитуриентов: «баллы SAT и ACT не требуются, но желательны».'), source=NC, verified=V),
    intlQuals=UZ('Akademik litsey sertifikati / diplomi (Certificate / Diploma of Academic Lyceum), minimum grade 3.', 'Akademik litsey sertifikati / diplomi (свидетельство или диплом академического лицея), минимальная оценка 3.'),
    costs=costs(None, NF, V, L('International undergraduates', 'Иностранные студенты бакалавриата'), [],
        L('Not published on the page read', 'На прочитанной странице не указано'),
        L('The fee page is headed “2025-2026 academic year” but shows no amounts', 'Страница платы озаглавлена «2025-2026 academic year», но сумм не показывает'),
        L('nothing confirmed', 'ничего не подтверждено'), status='previous-cycle',
        note=L('The international fee table did not load on 15–16 October 2026, neither in the page source nor in the browser.', 'Таблица платы для иностранцев не загрузилась 15–16 октября 2026 ни в коде страницы, ни в браузере.')),
    merit=[award('Lady Vi Aitken Scholarship', L('C$40,000 over four years', 'C$40,000 за четыре года'), L('A top international student', 'Лучший иностранный студент'),
                 application=L('Entrance scholarship application by 1 March', 'Заявка на вступительные стипендии до 1 марта'), basis='merit', source=NS, verified=V,
                 note=L('Awards for international students range from C$500 to C$40,000; one scholarship application covers them.', 'Стипендии для иностранцев — от C$500 до C$40,000; одна заявка покрывает их все.'))],
    need={'note': NOT_NEED},
    sources=[(L('UNB — international application deadlines', 'UNB — сроки для иностранцев'), ND), (L('UNB — how international students apply', 'UNB — как подают иностранцы'), NA),
             (L('UNB — English requirements', 'UNB — требования к английскому'), NE), (L('UNB — country requirements', 'UNB — требования по странам'), NC),
             (L('UNB — scholarships for international students', 'UNB — стипендии для иностранцев'), NS), (L('UNB — financial information', 'UNB — финансовая информация'), NF)],
    checked=[DL, FEE, ENG, TESTS, UZU, SCH],
    unconfirmed=[TUI, L('housing costs', 'стоимость жилья'), MAJORS, FOUND]))

# --------------------------------------------------------------- Windsor
W = 'https://future.uwindsor.ca/'
WI = W + 'apply-international'
WG = 'https://www.future.uwindsor.ca/global-lancer-scholarship/'
WH = 'https://www.future.uwindsor.ca/international/'
WF = 'https://www.uwindsor.ca/finance/fee-estimator'
records.append(R('university-of-windsor', 'University of Windsor', 'UWindsor', 'Windsor', 'ON', PUBC,
    L('A university in Windsor, Ontario, on the border with Detroit. International tuition stays stable for the length of the programme.',
      'Университет в Виндзоре (Онтарио), на границе с Детройтом. Базовая плата для иностранцев не меняется на весь срок программы.'),
    ['business', 'computer-science', 'engineering', 'medicine', 'education'],
    {'website': 'https://www.uwindsor.ca/', 'admissions': WI, 'international': WH, 'portal': WI, 'scholarships': WG, 'aid': WG, 'programs': W + 'student-awards', 'cost': WF},
    verified=V, aliases=['UWindsor', 'U of W', 'Windsor'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Business', 'computer-science': 'Computer Science', 'engineering': 'Engineering', 'medicine': 'Nursing', 'education': 'Education'}, W + 'student-awards', V),
    platforms=[L('UWindsor direct application (applicants outside Canada and the U.S. applying only to UWindsor)', 'Прямая заявка UWindsor (поступающие вне Канады и США, подающие только в UWindsor)'), OUAC],
    rounds=[
        D(L('Recommended application date for September admission', 'Рекомендуемая дата подачи на сентябрь'), 'priority', '2027-05-01', WI,
          L('Qualified students are still admitted after this date while the programme has space.', 'Подходящих абитуриентов принимают и позже, пока в программе есть места.'), note=NOYEAR),
    ],
    fee=fee(None, L('The direct-application fee was not found on the pages read. Through OUAC: base fee C$159 plus a C$75 document-evaluation fee for Windsor.', 'Сбор прямой заявки на прочитанных страницах не найден. Через OUAC: базовый сбор C$159 плюс C$75 за оценку документов для Windsor.'), WI, V),
    documents=[L('Direct application or OUAC', 'Прямая заявка или OUAC'), L('Official diploma and transcripts, translated', 'Официальный аттестат и табели с переводом'), L('Proof of English (it can follow the application)', 'Подтверждение английского (можно позже заявки)')],
    english={'note': L('Not confirmed: the requirements are in the Academic Calendar, which was not read. English is not needed at the time of application; conditional offers are made with the English Language Improvement Program (ELIP).', 'Не подтверждено: требования приведены в Academic Calendar, который не читался. На момент подачи английский не нужен; условные предложения выдаются с программой ELIP.')},
    sat=NOSAT,
    costs=costs(None, WF, V, L('International undergraduates', 'Иностранные студенты бакалавриата'), [],
        L('Not read', 'Не прочитано'), L('The fee estimator gives 2026–27 fees per term but did not run on the pages read', 'Калькулятор даёт плату 2026–27 за семестр, но на прочитанных страницах не сработал'),
        L('nothing confirmed', 'ничего не подтверждено'),
        note=L('The university states that base tuition stays stable for the programme’s duration for all international students except those on the US Neighbour rate.', 'Университет указывает, что базовая плата фиксируется на срок программы для всех иностранцев, кроме тарифа US Neighbour.')),
    merit=[award('Global Lancer Scholarship', L('C$4,000–C$24,000 over four years', 'C$4,000–C$24,000 за четыре года'), L('International students entering directly from full-time secondary school and paying international tuition', 'Иностранцы, поступающие сразу после очной школы и платящие международный тариф'),
                 application=AUTO, renewable=True, basis='automatic', source=WG, verified=V,
                 note=L('By final average: 95%+ C$24,000; 90–94.99% C$20,000; 80–89.99% C$10,000; below 80% C$4,000 (over four years). Renewable each year with a 70% cumulative average.', 'По итоговому среднему: 95%+ — C$24,000; 90–94,99% — C$20,000; 80–89,99% — C$10,000; ниже 80% — C$4,000 (за четыре года). Продлевается каждый год при среднем 70%.'))],
    need={'note': NOT_NEED},
    sources=[(L('UWindsor — how international students apply', 'UWindsor — как подают иностранцы'), WI), (L('UWindsor — international students', 'UWindsor — иностранные студенты'), WH),
             (L('UWindsor — Global Lancer Scholarship', 'UWindsor — Global Lancer Scholarship'), WG), (L('UWindsor — tuition fee estimator', 'UWindsor — калькулятор платы'), WF), OUAC_S],
    checked=[DL, SCH],
    unconfirmed=[ENG, TUI, FEE, TESTS, UZU, MAJORS, FOUND]))

# --------------------------------------------------------------- Regina
RG = 'https://www.uregina.ca/'
RD = RG + 'admissions/undergraduate/deadlines.html'
RT = RG + 'ur-international/tuition-and-fees.html'
RS = RG + 'ur-international/scholarships.html'
RE = RG + 'admissions/undergraduate/english-language-proficiency.html'
records.append(R('university-of-regina', 'University of Regina', 'U of R', 'Regina', 'SK', PUBC,
    L('A university in Saskatchewan’s capital, Regina, with federated colleges on campus. International applicants have no early deadline and a final date in August.',
      'Университет в столице Саскачевана, Реджайне, с федеративными колледжами на кампусе. У иностранцев нет раннего срока, а последний — в августе.'),
    ['medicine', 'education', 'arts'],
    {'website': RG, 'admissions': RD, 'international': RG + 'ur-international/index.html', 'portal': 'https://apply.uregina.ca/apply/', 'scholarships': RS, 'aid': RS, 'programs': RD, 'cost': RT},
    verified=V, aliases=['U of R', 'URegina', 'Regina'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'medicine': 'Nursing (BScN)', 'education': ('Faculty of Education', RE), 'arts': 'Bachelor of Fine Arts'}, RD, V),
    platforms=[L('University of Regina student application portal', 'Портал заявок University of Regina')],
    rounds=[
        D(L('International Student of Distinction Scholarship: application and documents', 'International Student of Distinction Scholarship: заявка и документы'), 'scholarship', '2027-04-30', RS, note=NOYEAR),
        D(L('Final application deadline, fall term (all programmes except those listed separately)', 'Последний срок подачи, осенний семестр (все программы, кроме указанных отдельно)'), 'regular', '2027-08-15', RD,
          L('There is no early deadline for international applicants. Nursing: application by 31 December and documents by 31 January; Fine Arts portfolio by 1 April.', 'Раннего срока для иностранцев нет. Nursing: заявка до 31 декабря, документы до 31 января; портфолио Fine Arts — до 1 апреля.'), note=NOYEAR),
    ],
    fee=fee(100, L('International undergraduate application fee, paid in the student application portal by credit card or Flywire.', 'Сбор для иностранцев, оплачивается в портале заявок картой или через Flywire.'), RT, V),
    documents=DOCS('University of Regina'),
    english={'ielts': eng(6.5, note=L('Academic; no band lower than 6.0. One Skill Retake accepted from October 2025 to July 2026.', 'Academic; ни одной секции ниже 6.0. One Skill Retake принимается с октября 2025 по июль 2026.')),
             'toefl': toefl(83, 4.5, PLAIN_TOEFL('83 with 20 in each section', '4.5 with 4 in each section', L('Home Edition included.', 'Home Edition включён.'))),
             'duolingo': eng(120, note=L('Tests from 1 July 2024: Literacy 105, Comprehension 100, Conversation 115, Production 115.', 'Тесты с 1 июля 2024: Literacy 105, Comprehension 100, Conversation 115, Production 115.')),
             'note': L('PTE Academic 59 (59 in each area); CAEL 60. Education and Nursing set their own requirements. Scores are valid for two years.', 'PTE Academic 59 (59 в каждой части); CAEL 60. У Education и Nursing свои требования. Результаты действительны два года.')},
    sat=NOSAT,
    costs=costs('2026–2027', RT, V, L('International undergraduate living on campus; university estimate (10 classes, 30 credit hours)', 'Иностранный студент, живущий на кампусе; оценка университета (10 курсов, 30 кредитных часов)'),
        [(L('Tuition and fees (average, varies by faculty)', 'Обучение и сборы (в среднем, зависит от факультета)'), 32500, E), (L('Books and supplies', 'Книги и материалы'), 1500, E),
         (L('On-campus housing, two terms (average)', 'Общежитие, два семестра (в среднем)'), 7000, E), (L('Food and fun', 'Питание и досуг'), 6000, E)],
        L('C$47,000 for one year on campus (2026–27 estimate)', 'C$47,000 за год на кампусе (оценка 2026–27)'),
        L('The university estimates C$47,000 for a year: tuition and fees C$32,500, books C$1,500, housing C$7,000, food and fun C$6,000', 'Университет оценивает год в C$47,000: обучение и сборы C$32,500, книги C$1,500, жильё C$7,000, питание и досуг C$6,000'),
        L('tuition, fees, books, on-campus housing, food and personal costs', 'обучение, сборы, книги, жильё на кампусе, питание и личные расходы'), tuition=32500, budget=47000,
        note=L('Tuition is the average for 10 classes in 2026–2027 and varies by faculty. An enrolment deposit of C$1,000 is required.', 'Плата — среднее за 10 курсов в 2026–2027 и зависит от факультета. Нужен депозит C$1,000.')),
    merit=[award('International Entrance Scholarship', L('C$5,000 tuition credit, first term', 'C$5,000 в счёт платы, первый семестр'), L('International applicants to a degree programme with an admission average of 83% or higher', 'Иностранцы, поступающие на программу бакалавриата со средним баллом от 83%'),
                 application=AUTO, renewable=False, basis='automatic', source=RS, verified=V),
           award('International Student of Distinction Scholarship', L('Housing and meal plan worth about C$90,000 (Tier 1) or housing worth about C$45,000 (Tier 2) over four years', 'Общежитие с питанием примерно на C$90,000 (Tier 1) или общежитие примерно на C$45,000 (Tier 2) за четыре года'),
                 L('International applicants directly from high school: 90%+ (Tier 1) or 85–89.99% (Tier 2)', 'Иностранцы сразу после школы: 90%+ (Tier 1) или 85–89,99% (Tier 2)'),
                 application=L('Automatic consideration if the application and documents arrive by 30 April', 'Автоматическое рассмотрение, если заявка и документы поступили до 30 апреля'), renewable=True, basis='merit', source=RS, verified=V,
                 note=L('“This is not a tuition credit scholarship.” Renewable with 24 credit hours a year and an 80% average. Places are limited.', '«Это не стипендия в счёт платы». Продлевается при 24 кредитных часах в год и среднем 80%. Мест ограниченное число.')),
           award('International Undergraduate Student Bursary', L('Up to C$20,000 over four years (tuition credit)', 'До C$20,000 за четыре года (в счёт платы)'), L('International students in a four-year degree who deposit two years of tuition in advance', 'Иностранцы на четырёхлетней программе, внёсшие плату за два года вперёд'),
                 application=AUTO, renewable=True, basis='automatic', source=RS, verified=V,
                 note=L('Part of the “Really Big Deal” bundle; not based on need despite the name.', 'Часть пакета «Really Big Deal»; несмотря на название, не по нуждаемости.'))],
    need={'note': NOT_NEED},
    sources=[(L('U of R — undergraduate deadlines', 'U of R — сроки бакалавриата'), RD), (L('U of R — international tuition and fees', 'U of R — плата для иностранцев'), RT),
             (L('U of R — international scholarships', 'U of R — стипендии для иностранцев'), RS), (L('U of R — English language proficiency', 'U of R — требования к английскому'), RE)],
    checked=[DL, FEE, ENG, L('costs', 'стоимость'), SCH],
    unconfirmed=[TESTS, UZU, MAJORS, FOUND]))
annual['university-of-regina'] = {'currency': 'CAD', 'basis': 'total', 'min': 47000, 'max': 47000, 'note': 'University estimate 2026–27: average tuition and fees, books, on-campus housing, food and personal costs'}

# --------------------------------------------------------------- Ontario Tech
O = 'https://admissions.ontariotechu.ca/'
OI = O + 'applicant-information/international-applicants.php'
OE = O + 'english-language-proficiency/index.php'
OT = 'https://registrar.ontariotechu.ca/fees-and-payment/international-student-tuition/undergraduate-international-tuition-2026-2027.php'
OS = 'https://safa.ontariotechu.ca/awards-bursaries-and-scholarships/undergraduate-student-finances/scholarships/scholarships-and-awards-for-international-students.php'
records.append(R('ontario-tech-university', 'Ontario Tech University', 'Ontario Tech', 'Oshawa', 'ON', PUBC,
    L('A technology-focused university in Oshawa, east of Toronto, founded as the University of Ontario Institute of Technology (UOIT).',
      'Технологический университет в Ошаве, к востоку от Торонто; основан как University of Ontario Institute of Technology (UOIT).'),
    ['business', 'computer-science', 'engineering', 'medicine', 'education'],
    {'website': 'https://ontariotechu.ca/', 'admissions': OI, 'international': OI, 'portal': 'https://www.ouac.on.ca/', 'scholarships': OS, 'aid': OS, 'programs': OT, 'cost': OT},
    verified=V, aliases=['UOIT', 'University of Ontario Institute of Technology', 'Ontario Tech', 'OTU'], formerNames=['University of Ontario Institute of Technology (UOIT)'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Bachelor of Commerce', 'computer-science': 'Bachelor of Science in Computer Science', 'engineering': 'Bachelor of Engineering',
                        'medicine': 'Bachelor of Science in Nursing', 'education': 'Bachelor of Education'}, OT, V),
    platforms=[OUAC, L('Ontario Tech International Application (direct)', 'International Application Ontario Tech (прямая)')],
    rounds=[
        D(L('Early Application Programs: application deadline', 'Программы раннего приёма: срок подачи'), 'regular', '2027-01-29', OI, L('For example Medical Laboratory Science and Nursing; documents by 8 February.', 'Например, Medical Laboratory Science и Nursing; документы до 8 февраля.'),
          note=L('The page prints “Friday, January 29” without a year; the weekday matches 2027.', 'Страница пишет «Friday, January 29» без года; день недели соответствует 2027.')),
        D(L('Global Leadership Award application', 'Заявка на Global Leadership Award'), 'scholarship', '2027-02-11', OI,
          note=L('Printed as “Thursday, February 11”; the weekday matches 2027.', 'Указано как «Thursday, February 11»; день недели соответствует 2027.')),
        D(L('International applicants: OUAC application for equal consideration (all other programmes)', 'Иностранцы: заявка OUAC для равного рассмотрения (все остальные программы)'), 'regular', '2027-03-31', OI,
          L('Interim transcripts are due the same day. Later applications are still processed with institutional deadlines.', 'Промежуточные табели — в тот же день. Более поздние заявки рассматриваются по срокам университета.'),
          note=L('Printed as “Wednesday, March 31”; the weekday matches 2027.', 'Указано как «Wednesday, March 31»; день недели соответствует 2027.')),
        D(L('Common deadline to accept an offer', 'Общий срок принятия предложения'), 'reply', '2027-05-03', OI, L('The non-refundable tuition deposit is due 4 June.', 'Невозвратный депозит — до 4 июня.'),
          note=L('Printed as “Monday, May 3”; the weekday matches 2027.', 'Указано как «Monday, May 3»; день недели соответствует 2027.')),
    ],
    fee=fee(100, L('Direct International Application for up to three programmes (the link was temporarily unavailable when read). Through OUAC: base fee C$159 plus a C$80 document-evaluation fee for Ontario Tech.', 'Прямая International Application на три программы (ссылка была временно недоступна). Через OUAC: базовый сбор C$159 плюс C$80 за оценку документов для Ontario Tech.'), OI, V),
    documents=[L('OUAC or direct application', 'Заявка OUAC или прямая'), L('Transcripts (may need WES authentication)', 'Табели (может потребоваться проверка WES)'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('Academic; no sub-score below 6.0 (Education and Nursing: 7.0).', 'Academic; ни одной части ниже 6.0 (Education и Nursing: 7.0).')),
             'toefl': toefl(None, 4.5, L('iBT: 4.5 with no section below 4.0 (1–6 scale). The page read gives no 0–120 figure.', 'iBT: 4.5, ни одной секции ниже 4.0 (шкала 1–6). Значения по шкале 0–120 на прочитанной странице нет.')),
             'duolingo': eng(120, note=L('Education and Nursing: 130.', 'Education и Nursing: 130.')),
             'note': L('CAEL 70 (no sub-score below 60); PTE Academic 58; Oxford ELLT 7.', 'CAEL 70 (ни одной части ниже 60); PTE Academic 58; Oxford ELLT 7.')},
    sat=NOSAT,
    costs=costs('2026–2027', OT, V, L('International undergraduates, 10 courses (30 credit hours) a year', 'Иностранные студенты бакалавриата, 10 курсов (30 кредитных часов) в год'),
        [(L('Tuition: Arts, Science, Health Science, Applied Science, Education and others', 'Обучение: Arts, Science, Health Science, Applied Science, Education и другие'), 34148.27, B),
         (L('Tuition: Nursing, Health Administration', 'Обучение: Nursing, Health Administration'), 34821.14, B), (L('Tuition: Computer Science', 'Обучение: Computer Science'), 37831.43, B),
         (L('Tuition: Commerce', 'Обучение: Commerce'), 37877.47, B), (L('Tuition: Information Technology', 'Обучение: Information Technology'), 42143.13, B),
         (L('Tuition: Engineering, Technology', 'Обучение: Engineering, Technology'), 46561.31, B)],
        L('C$34,148–C$46,561 tuition a year (2026–27)', 'C$34,148–C$46,561 — обучение за год (2026–27)'),
        L('Tuition for 2026–27 from C$34,148.27 (Arts, Science and others) to C$46,561.31 (Engineering), the same figure shown for every year of study', 'Плата 2026–27: от C$34,148.27 (Arts, Science и др.) до C$46,561.31 (инженерия); для каждого года обучения показана та же сумма'),
        L('tuition only; ancillary fees, housing and food extra', 'только обучение; сопутствующие сборы, жильё и питание — сверх этого'), tuition=34148.27,
        note=L('“Fees are subject to change without notice.” Ancillary fees are listed separately.', '«Плата может измениться без уведомления». Сопутствующие сборы указаны отдельно.')),
    merit=[award('International Merit Award', L('C$20,000 over four years (C$5,000 a year)', 'C$20,000 за четыре года (C$5,000 в год)'), L('International students on a study permit with an average of 80% or more at admission', 'Иностранцы с разрешением на учёбу и средним баллом от 80% при зачислении'),
                 application=AUTO, renewable=True, basis='merit', source=OS, verified=V,
                 note=L('Renewable with a 3.30 cumulative GPA and a full course load; cannot be combined with the Global Leadership Award.', 'Продлевается при GPA 3.30 и полной нагрузке; не совмещается с Global Leadership Award.')),
           award('Global Leadership Award', L('C$120,000 (C$30,000 a year for four years)', 'C$120,000 (C$30,000 в год на четыре года)'), L('International secondary-school applicants with strong academic and leadership records', 'Иностранные выпускники школ с сильными академическими и лидерскими достижениями'),
                 application=L('Application by 11 February 2027', 'Заявка до 11 февраля 2027'), renewable=True, basis='merit', source=OS, verified=V,
                 note=L('Highly competitive; never counted as received.', 'Высококонкурсная; как полученная не учитывается.'))],
    need={'note': L('An International Emergency Bursary (2027–28) exists for students displaced by war or environmental catastrophe; general need-based aid for international first-year students is not described.', 'Есть International Emergency Bursary (2027–28) для пострадавших от войны или экологической катастрофы; общая помощь по нуждаемости для иностранных первокурсников не описана.'), 'source': OS, 'verified': V},
    sources=[(L('Ontario Tech — international applicants and dates', 'Ontario Tech — иностранные абитуриенты и даты'), OI), (L('Ontario Tech — English proficiency', 'Ontario Tech — требования к английскому'), OE),
             (L('Ontario Tech — international tuition 2026-27', 'Ontario Tech — плата для иностранцев 2026–27'), OT), (L('Ontario Tech — international scholarships', 'Ontario Tech — стипендии для иностранцев'), OS), OUAC_S],
    checked=[DL, FEE, ENG, TUI, SCH],
    unconfirmed=[TESTS, UZU, MAJORS, FOUND]))
annual['ontario-tech-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 34148.27, 'max': 46561.31, 'note': 'Tuition 2026–27 by programme (30 credit hours); ancillary fees, housing and food extra'}

# --------------------------------------------------------------- Toronto Metropolitan
T = 'https://www.torontomu.ca/admissions/'
TD = T + 'undergraduate/apply/application-dates/'
TT = T + 'tuition-fees/'
TE = T + 'undergraduate/requirements/english-language/'
TR = T + 'undergraduate/requirements/international/'
TC = 'https://www.torontomu.ca/content/ryerson/admissions/undergraduate/requirements/international/country-specific/'
TS = T + 'scholarships-awards/'
records.append(R('toronto-metropolitan-university', 'Toronto Metropolitan University', 'TMU', 'Toronto', 'ON', PUBC,
    L('A university in downtown Toronto, known until 2022 as Ryerson University, with the Ted Rogers School of Management and The Creative School.',
      'Университет в центре Торонто, до 2022 года — Ryerson University; здесь Ted Rogers School of Management и The Creative School.'),
    ['humanities', 'engineering', 'business', 'arts'],
    {'website': 'https://www.torontomu.ca/', 'admissions': TD, 'international': TR, 'portal': 'https://www.ouac.on.ca/', 'scholarships': TS, 'aid': TS, 'programs': TT, 'cost': TT},
    verified=V, aliases=['TMU', 'Ryerson', 'Ryerson University', 'Toronto Met'], formerNames=['Ryerson University'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Faculty of Arts', 'engineering': 'Faculty of Engineering and Architectural Science', 'business': 'Ted Rogers School of Management', 'arts': 'The Creative School'}, TT, V),
    platforms=[OUAC],
    rounds=[
        D(L('Guaranteed consideration date, all programmes (fall 2027)', 'Дата гарантированного рассмотрения, все программы (осень 2027)'), 'regular', '2027-02-01', TD,
          note=L('The page heading is “Fall 2027 admission”; the date itself is printed without a year.', 'Заголовок страницы — «Fall 2027 admission»; сама дата указана без года.')),
        D(L('Prestigious entrance scholarships and ISLA – Fall 2027: application on AwardSpring', 'Престижные вступительные стипендии и ISLA – Fall 2027: заявка в AwardSpring'), 'scholarship', '2027-02-16', TS,
          L('Opens 2 November 2026; applications close at 11:59 p.m. ET.', 'Открывается 2 ноября 2026; приём закрывается в 23:59 ET.'), time='23:59', zone='ET'),
    ],
    fee=fee(159, OUAC_FEE('TMU', 90), OUAC_SRC, V),
    documents=[L('OUAC application', 'Заявка OUAC'), L('Secondary school documents', 'Школьные документы'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('Academic; One Skill Retake and IELTS Online accepted.', 'Academic; One Skill Retake и IELTS Online принимаются.')),
             'toefl': toefl(83, 4.5, PLAIN_TOEFL('83', '4.5', L('Home Edition accepted; MyBest not used.', 'Home Edition принимается; MyBest не учитывается.'))),
             'duolingo': eng(120), 'note': L('PTE 60; CAEL 60 (70 for Engineering and Architectural Science); Cambridge C1/C2 180.', 'PTE 60; CAEL 60 (70 для Engineering and Architectural Science); Cambridge C1/C2 180.')},
    sat=test('optional', L('No minimum SAT or ACT; strong results can strengthen an application, and scores already written should be submitted.', 'Минимума по SAT или ACT нет; сильные результаты могут усилить заявку, а уже сданные баллы следует прислать.'), source=TR, verified=V),
    intlQuals=UZ('Attestat o Srednem Obrazovanii (Certificate of Secondary Education, Grade 11).', 'Attestat o Srednem Obrazovanii (аттестат о среднем образовании, 11 класс).'),
    costs=costs('2026–2027', TT, V, L('International students, full-time undergraduate programmes, fee range by faculty', 'Иностранцы, очные программы бакалавриата, диапазон платы по факультетам'),
        [(L('Arts', 'Arts'), {'min': 38706, 'max': 38731}, B), (L('Community Services', 'Community Services'), {'min': 38693, 'max': 41506}, B),
         (L('Engineering and Architectural Science', 'Engineering and Architectural Science'), {'min': 44375, 'max': 44675}, B), (L('Science', 'Science'), {'min': 38702, 'max': 38762}, B),
         (L('Ted Rogers School of Management', 'Ted Rogers School of Management'), {'min': 44476, 'max': 44532}, B), (L('The Creative School', 'The Creative School'), {'min': 38733, 'max': 39209}, B),
         (L('On-campus housing (plus meal plan)', 'Жильё на кампусе (плюс питание)'), {'min': 9000, 'max': 15100}, E), (L('Food (meal plan options)', 'Питание (варианты плана)'), {'min': 5565, 'max': 7571}, E)],
        L('C$38,693–C$44,675 a year in fees (2026–27)', 'C$38,693–C$44,675 в год — плата (2026–27)'),
        L('International fees for 2026–27 range from C$38,693 to C$44,675 by faculty; housing from C$9,000 and meals C$5,565–C$7,571 are extra', 'Плата для иностранцев 2026–27 — от C$38,693 до C$44,675 по факультетам; жильё от C$9,000 и питание C$5,565–C$7,571 — сверх этого'),
        L('tuition fees by faculty; housing, food, books and personal costs shown separately', 'плата по факультетам; жильё, питание, книги и личные расходы показаны отдельно'), tuition=38693,
        note=L('Books C$1,500–C$6,700 by programme; personal costs C$3,200–C$5,600. A C$50 residence application fee applies.', 'Книги C$1,500–C$6,700 в зависимости от программы; личные расходы C$3,200–C$5,600. Заявка на общежитие — C$50.')),
    merit=[award('International Student Leadership Award (ISLA) – Fall 2027', L('C$10,000, one time', 'C$10,000, разово'), L('Up to 53 international first-year students paying international fees, with a final average of at least 86% and a personal statement', 'До 53 иностранных первокурсников, платящих международный тариф, со средним не ниже 86% и личным эссе'),
                 application=L('AwardSpring application by 16 February 2027', 'Заявка в AwardSpring до 16 февраля 2027'), renewable=False, basis='merit', source=TS, verified=V,
                 note=L('For students who do well academically, volunteer, join clubs and show leadership.', 'Для тех, кто хорошо учится, волонтёрит, участвует в клубах и проявляет лидерство.')),
           award('President’s Entrance Scholarships', L('C$40,000 (C$10,000 a year, renewable)', 'C$40,000 (C$10,000 в год, с продлением)'), L('Twelve secondary-school graduates with at least a 90% average, leadership and creativity; international students eligible', 'Двенадцать выпускников школ со средним от 90%, лидерством и творческими способностями; иностранцы могут участвовать'),
                 application=L('AwardSpring application by 16 February 2027', 'Заявка в AwardSpring до 16 февраля 2027'), renewable=True, basis='merit', source=TS, verified=V,
                 note=L('A bed in residence is reserved (its cost is not covered). Competitive; never counted as received.', 'Резервируется место в общежитии (стоимость не покрывается). Конкурсная; как полученная не учитывается.'))],
    need={'note': L('The guaranteed renewable entrance scholarships (C$750–C$3,000 a year) are only for students in a Canadian secondary school. Need-based aid for international first-year students is not described.', 'Гарантированные продлеваемые стипендии (C$750–C$3,000 в год) — только для учеников канадских школ. Помощь по нуждаемости для иностранных первокурсников не описана.'), 'source': TS, 'verified': V},
    sources=[(L('TMU — fall 2027 application dates', 'TMU — сроки на осень 2027'), TD), (L('TMU — tuition and fees', 'TMU — плата'), TT), (L('TMU — English requirements', 'TMU — требования к английскому'), TE),
             (L('TMU — international requirements', 'TMU — требования для иностранцев'), TR), (L('TMU — requirements by country', 'TMU — требования по странам'), TC), (L('TMU — scholarships and awards', 'TMU — стипендии'), TS), OUAC_S],
    checked=[DL, ENG, TESTS, UZU, TUI, SCH],
    unconfirmed=[MAJORS, FOUND]))
annual['toronto-metropolitan-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 38693, 'max': 44675, 'note': 'International fees 2026–27 by faculty; housing, food and books extra'}

# --------------------------------------------------------------- Brock
BR = 'https://brocku.ca/'
BA = BR + 'admissions/apply/'
BT = BR + 'safa/2026-undergraduate-fall-winter-tuition-and-fees-subject-to-change-updates-in-progress-and-pending-board-of-trustee-approval/'
BS = BR + 'safa/2026-international-students/'
BE = BR + 'admissions/english-proficiency/'
BC = BR + 'admissions/requirements-by-country/'
records.append(R('brock-university', 'Brock University', 'Brock', 'St. Catharines', 'ON', PUBC,
    L('A university in St. Catharines in the Niagara region of Ontario. An international student’s tuition rate is held for up to five academic years of a first degree.',
      'Университет в Сент-Катаринсе, в Ниагарском регионе Онтарио. Ставка платы иностранного студента фиксируется на срок до пяти учебных лет первого диплома.'),
    ['humanities', 'business', 'computer-science', 'engineering'],
    {'website': BR, 'admissions': BA, 'international': BC, 'portal': BA, 'scholarships': BS, 'aid': BS, 'programs': BT, 'cost': BT},
    verified=V, aliases=['Brock', 'BrockU'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Arts programmes', 'business': 'Business programmes (incl. Co-op Accounting)', 'computer-science': 'Computer Science', 'engineering': 'Engineering'}, BT, V),
    platforms=[L('Brock Application (applying to Brock only)', 'Brock Application (только в Brock)'), OUAC],
    rounds=[
        D(L('Application deadline, fall entry (international applicants meeting the English requirement)', 'Срок подачи, осенний набор (иностранцы, выполнившие требование к английскому)'), 'regular', '2027-01-15', BA,
          L('Applicants who do not yet meet the English requirement have continuous intake. Competitive programmes may fill earlier.', 'Для тех, кто ещё не выполнил требование к английскому, приём непрерывный. Конкурсные программы могут заполниться раньше.'), note=NOYEAR),
    ],
    fee=fee(130, L('Brock Application, non-refundable. Through OUAC: base fee C$159 plus a C$75 document-evaluation fee for Brock.', 'Brock Application, не возвращается. Через OUAC: базовый сбор C$159 плюс C$75 за оценку документов для Brock.'), BA, V),
    documents=DOCS('Brock'),
    english={'ielts': eng(6.5, note=L('Academic; no band below 6.0; One Skill Retake accepted. Co-op Accounting: 7.0 with no band below 6.5.', 'Academic; ни одной секции ниже 6.0; One Skill Retake принимается. Co-op Accounting: 7.0, ни одной секции ниже 6.5.')),
             'toefl': toefl(88, 4.5, L('0–120 scale: 88 with no band below 21. After 1 January 2026: 4.5 with 4.0 in Reading and Speaking and 4.5 in Writing and Listening.', 'Шкала 0–120: 88, ни одной секции ниже 21. После 1 января 2026: 4.5; Reading и Speaking — 4.0, Writing и Listening — 4.5.')),
             'duolingo': eng(110), 'note': L('CAEL 70 (no band below 60); PTE 58; Cambridge C1/C2 176.', 'CAEL 70 (ни одной части ниже 60); PTE 58; Cambridge C1/C2 176.')},
    sat=NOSAT,
    intlQuals=UZ('Akademik Litsey Diplomi (Diploma of Academic Lyceum) or Umumiy o‘rta ta’lim to‘g‘risida attestat (Certificate of General Secondary Education).', 'Akademik Litsey Diplomi (диплом академического лицея) или Umumiy o‘rta ta’lim to‘g‘risida attestat (аттестат об общем среднем образовании).'),
    costs=costs('2026–2027', BT, V, L('International (visa) students entering in 2026, full-time flat fee for fall and winter', 'Иностранцы (виза), поступившие в 2026, фиксированная очная плата за осень и зиму'),
        [(L('Tuition, Arts or Sciences (flat fee)', 'Обучение, Arts или Sciences (фиксированная плата)'), 39834.95, B), (L('Tuition, Engineering (flat fee)', 'Обучение, Engineering (фиксированная плата)'), 40740.85, B),
         (L('Tuition, Computer Science, Business, Sport Management (flat fee)', 'Обучение, Computer Science, Business, Sport Management (фиксированная плата)'), 41645.60, B),
         (L('Ancillary fees (flat)', 'Сопутствующие сборы (фиксированно)'), 584.45, B), (L('Ontario International Recovery Fee', 'Сбор провинции Онтарио для иностранцев'), 750, B),
         (L('University Health Insurance Plan (UHIP)', 'Страховка UHIP'), 948, B)],
        L('C$39,835–C$41,646 tuition a year (2026 entry)', 'C$39,835–C$41,646 — обучение за год (поступившие в 2026)'),
        L('Flat-fee tuition for international students entering in 2026: C$39,834.95 (Arts or Sciences) to C$41,645.60 (Computer Science, Business); plus ancillary fees, the C$750 provincial fee and UHIP', 'Фиксированная плата для иностранцев, поступивших в 2026: от C$39,834.95 (Arts или Sciences) до C$41,645.60 (Computer Science, Business); плюс сопутствующие сборы, провинциальный сбор C$750 и UHIP'),
        L('tuition in the main figure; ancillary fees, provincial fee and insurance listed separately', 'в основной сумме — обучение; сопутствующие, провинциальный сбор и страховка указаны отдельно'), tuition=39834.95,
        note=L('The page is marked “subject to change … pending Board of Trustee approval”. The rate for 2027 entry is not yet published.', 'Страница помечена «может измениться … ожидает утверждения Board of Trustees». Ставка для поступающих в 2027 ещё не опубликована.')),
    merit=[award('International Brock Scholars Award', L('C$7,000–C$32,000 over four years (2026–27 table)', 'C$7,000–C$32,000 за четыре года (таблица 2026–27)'), L('Every incoming international student entering a first undergraduate programme, by admission average (80%+)', 'Каждый иностранный первокурсник, поступающий на первую программу бакалавриата, по среднему баллу (80%+)'),
                 application=AUTO, renewable=True, basis='automatic', source=BS, verified=V,
                 note=L('Year 1: C$20,000 (95%+), C$15,000 (90–94.9%), C$8,000 (85–89.9%) or C$4,000 (80–84.9%), then C$4,000/C$3,000/C$1,500/C$1,000 renewals for up to three years. The page lists the 2026–27 table “subject to annual approval”; the 2027–28 values are not yet published.',
                        '1-й год: C$20,000 (95%+), C$15,000 (90–94,9%), C$8,000 (85–89,9%) или C$4,000 (80–84,9%), затем продления C$4,000/C$3,000/C$1,500/C$1,000 до трёх лет. Страница даёт таблицу 2026–27 «с ежегодным утверждением»; суммы 2027–28 ещё не опубликованы.')),
           award('Brock Future Leaders Scholarship', money(10000), L('Ten international fee-paying students selected by committee', 'Десять иностранных студентов, отобранных комиссией'),
                 application=L('Separate application (2026–27 cycle shown)', 'Отдельная заявка (показан цикл 2026–27)'), basis='merit', source=BS, verified=V,
                 note=L('Can only be combined with the Brock Scholars Award.', 'Совмещается только с Brock Scholars Award.'))],
    need={'note': NOT_NEED},
    sources=[(L('Brock — apply now (fees and deadlines)', 'Brock — подача (сборы и сроки)'), BA), (L('Brock — 2026 tuition and fees', 'Brock — плата 2026'), BT),
             (L('Brock — 2026 international student awards', 'Brock — стипендии для иностранцев 2026'), BS), (L('Brock — English proficiency', 'Brock — требования к английскому'), BE),
             (L('Brock — requirements by country', 'Brock — требования по странам'), BC), OUAC_S],
    checked=[DL, FEE, ENG, UZU, TUI, SCH],
    unconfirmed=[TESTS, L('2027 tuition and award values', 'плата и суммы стипендий 2027'), MAJORS, FOUND]))
annual['brock-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 39834.95, 'max': 41645.6, 'note': 'Flat-fee tuition for 2026 entry (pending Board approval); ancillary, provincial fee and UHIP extra'}

# --------------------------------------------------------------- Laurier
WL = 'https://www.wlu.ca/future-students/undergraduate/'
WA = WL + 'applicants/international/admissions.html'
WT = WL + 'applicants/international/tuition-and-finances.html'
WS = WL + 'tuition-finances/entrance-scholarships.html'
WIL = WL + 'applicants/international/assets/resources/inspiring-lives-scholarship.html'
WE = 'https://www.wlu.ca/admissions-toolkits/international/step-1-how-to-apply/english-proficiency.html'
records.append(R('wilfrid-laurier-university', 'Wilfrid Laurier University', 'Laurier', 'Waterloo', 'ON', PUBC,
    L('A university with campuses in Waterloo and Brantford, Ontario, home of the Lazaridis School of Business and Economics; double degrees with the University of Waterloo are offered.',
      'Университет с кампусами в Ватерлоо и Брантфорде (Онтарио), с Lazaridis School of Business and Economics; есть двойные дипломы с University of Waterloo.'),
    ['humanities', 'arts', 'business', 'economics', 'computer-science'],
    {'website': 'https://www.wlu.ca/', 'admissions': WA, 'international': WA, 'portal': 'https://www.ouac.on.ca/', 'scholarships': WS, 'aid': WS, 'programs': WT, 'cost': WT},
    verified=V, aliases=['Laurier', 'WLU', 'Wilfrid Laurier'], campuses=['Waterloo', 'Brantford'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Arts, Human and Social Sciences, Liberal Arts', 'arts': 'Music', 'business': 'Business Administration (Lazaridis School)', 'economics': 'Economics (all programs)',
                        'computer-science': 'Computer Science / Data Science'}, WT, V),
    platforms=[OUAC],
    rounds=[
        D(L('Inspiring Lives Scholarship application', 'Заявка на Inspiring Lives Scholarship'), 'scholarship', '2026-11-08', WIL,
          L('You must accept your offer of admission before applying.', 'Перед подачей нужно принять предложение о зачислении.'), time='23:59', zone='ET'),
        D(L('Application deadline, fall (September) 2027', 'Срок подачи, осень (сентябрь) 2027'), 'regular', '2027-04-01', WA),
    ],
    fee=fee(159, OUAC_FEE('Laurier', 95), OUAC_SRC, V),
    documents=[L('OUAC application (up to three Laurier programmes)', 'Заявка OUAC (до трёх программ Laurier)'), L('Transcripts and final documents', 'Табели и итоговые документы'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('Academic or IELTS Online; 6.0 in each band.', 'Academic или IELTS Online; 6.0 в каждой секции.')),
             'toefl': toefl(83, 4.5, L('Before January 2026: 83 with 20 in each component. From January 2026 (1–6 scale): 4.5 with 4.0 in each section.', 'До января 2026: 83, не ниже 20 в каждой части. С января 2026 (шкала 1–6): 4.5, не ниже 4.0 в каждой секции.')),
             'duolingo': eng(120), 'note': L('PTE Academic 59; CAEL 70 (60 in each band); Cambridge 176; LanguageCert 70 (65 in each skill). Tests within two years. A conditional offer is possible.', 'PTE Academic 59; CAEL 70 (60 в каждой части); Cambridge 176; LanguageCert 70 (65 в каждом навыке). Тест — за последние два года. Возможно условное предложение.')},
    sat=NOSAT,
    costs=costs('2026–2027', WT, V, L('International students, two terms (fall and winter), Waterloo campus figures', 'Иностранцы, два семестра (осень и зима), данные кампуса Ватерлоо'),
        [(L('Tuition: Arts, Human and Social Sciences, Music, Science (most programmes)', 'Обучение: Arts, Human and Social Sciences, Music, Science (большинство программ)'), 36624, B), (L('Tuition: Economics', 'Обучение: Economics'), 39112, B),
         (L('Tuition: Computer Science, Data Science', 'Обучение: Computer Science, Data Science'), 39470, B), (L('Tuition: Business Administration', 'Обучение: Business Administration'), 44332, B),
         (L('Student fees, two terms', 'Студенческие сборы, два семестра'), {'min': 2338, 'max': 3282}, B),
         (L('Waterloo residence (dormitory-style)', 'Общежитие в Ватерлоо (коридорного типа)'), {'min': 8373, 'max': 10476}, B), (L('Waterloo meal plan (dormitory-style residence)', 'Питание в Ватерлоо (общежитие коридорного типа)'), {'min': 7212, 'max': 7800}, B)],
        L('C$36,624–C$44,332 tuition for two terms (2026–27)', 'C$36,624–C$44,332 — обучение за два семестра (2026–27)'),
        L('Tuition for 2026–27 from C$36,624 (Arts, Science) to C$44,332 (Business Administration), plus C$2,338–C$3,282 in student fees; double degrees with Waterloo cost more', 'Плата 2026–27: от C$36,624 (Arts, Science) до C$44,332 (Business Administration), плюс студенческие сборы C$2,338–C$3,282; двойные дипломы с Waterloo дороже'),
        L('tuition in the main figure; student fees, residence and meals listed separately', 'в основной сумме — обучение; сборы, общежитие и питание указаны отдельно'), tuition=36624,
        note=L('Figures are for 2026/27 and “subject to increase for the 2027/28 academic year”. After entry, tuition rises by no more than 5% a year. BBA with Waterloo Computer Science costs C$69,886.', 'Суммы — на 2026/27 и «могут вырасти на 2027/28». После поступления плата растёт не больше чем на 5% в год. BBA с Computer Science Waterloo — C$69,886.')),
    merit=[award('Laurier international entrance scholarship', L('C$5,000 a year (C$6,000 at 95% and above), renewable', 'C$5,000 в год (C$6,000 при 95% и выше), с продлением'), L('International students receiving an offer, from September 2027 (the grid starts at the average needed for an offer)', 'Иностранцы, получившие предложение, с сентября 2027 (таблица начинается со среднего, нужного для предложения)'),
                 application=AUTO, renewable=True, basis='automatic', source=WS, verified=V,
                 note=L('“This scholarship grid is valid for incoming students beginning in September 2027 and after”, by admission average as of July 2027. Renewal: GPA 10.5 for C$6,000 (President’s Gold), 7.0 for C$5,000.', '«Эта таблица действует для поступающих с сентября 2027», по среднему на июль 2027. Продление: GPA 10.5 для C$6,000 (President’s Gold), 7.0 для C$5,000.')),
           award('Inspiring Lives Scholarship', L('C$500–C$5,000', 'C$500–C$5,000'), L('Incoming international students with leadership and community involvement; no minimum average', 'Иностранные первокурсники с лидерством и общественной активностью; минимального среднего нет'),
                 application=L('Separate application by 8 November 2026, after accepting the offer', 'Отдельная заявка до 8 ноября 2026, после принятия предложения'), basis='talent', source=WIL, verified=V)],
    need={'note': NOT_NEED},
    sources=[(L('Laurier — international admissions and deadlines', 'Laurier — приём иностранцев и сроки'), WA), (L('Laurier — international tuition and scholarships', 'Laurier — плата и стипендии для иностранцев'), WT),
             (L('Laurier — entrance scholarships', 'Laurier — вступительные стипендии'), WS), (L('Laurier — Inspiring Lives Scholarship', 'Laurier — Inspiring Lives Scholarship'), WIL), (L('Laurier — English proficiency', 'Laurier — требования к английскому'), WE), OUAC_S],
    checked=[DL, ENG, TUI, SCH],
    unconfirmed=[TESTS, UZU, MAJORS, FOUND]))
annual['wilfrid-laurier-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 36624, 'max': 44332, 'note': 'Tuition 2026–27 for two terms (Arts to Business Administration); student fees, housing and food extra'}

# --------------------------------------------------------------- Trent
TU = 'https://www.trentu.ca/'
TUD = TU + 'futurestudents/admissions/intl-important-dates-deadlines'
TUA = TU + 'futurestudents/apply/international-students'
TUC = TU + 'international/finance-scholarships/estimated-cost-living-and-studying'
TUS = TU + 'international/discover-trent/tuition-scholarships/scholarships'
TUE = TU + 'futurestudents/admissions/international-students/english-proficiency'
TUP = TU + 'futurestudents/international-undergraduate'
TPREV = L('The same page still gives the fall 2026 and winter 2027 payment dates, so it may not yet be updated for 2027 entry.', 'На той же странице всё ещё указаны сроки оплаты на осень 2026 и зиму 2027, поэтому она, возможно, ещё не обновлена для набора 2027.')
records.append(R('trent-university', 'Trent University', 'Trent', 'Peterborough', 'ON', PUBC,
    L('A university with its main campus on the Otonabee River in Peterborough and a second campus in Durham GTA (Oshawa); first-year and international students are guaranteed residence.',
      'Университет с главным кампусом на реке Отонаби в Питерборо и вторым кампусом в Durham GTA (Ошава); первокурсникам и иностранцам гарантировано общежитие.'),
    ['business', 'computer-science', 'biology', 'psychology', 'economics', 'social-sciences', 'humanities', 'medicine', 'education'],
    {'website': TU, 'admissions': TUD, 'international': TUP, 'portal': TUA, 'scholarships': TUS, 'aid': TUS, 'programs': TUP, 'cost': TUC},
    verified=V, aliases=['Trent', 'Trent U', 'Trent University Durham'], campuses=['Peterborough', L('Durham GTA (Oshawa)', 'Durham GTA (Ошава)')],
    programsBasis='evidence', programsStatus=P, programNote=L('Fields of study are taken from the undergraduate programme selector on Trent’s international page.', 'Направления взяты из списка программ бакалавриата на странице Trent для иностранцев.'),
    programEvidence=ev({'business': 'Business Administration', 'computer-science': 'Computer Science', 'biology': 'Biology', 'psychology': 'Psychology', 'economics': 'Economics',
                        'social-sciences': 'Sociology', 'humanities': 'Philosophy', 'medicine': 'Nursing', 'education': 'Bachelor of Education (B.Ed)'}, TUP, V),
    platforms=[L('Trent International Direct Application (applying only to Trent)', 'Прямая заявка Trent (только в Trent)'), OUAC],
    rounds=[
        D(L('International Prestigious Scholarships application', 'Заявка на International Prestigious Scholarships'), 'scholarship', '2027-02-15', TUS,
          L('Applications open 1 November and close 15 February “each year”, at 11:59 p.m. EST.', 'Приём с 1 ноября по 15 февраля «каждый год», до 23:59 EST.'), time='23:59', zone='ET', note=NOYEAR),
        D(L('Recommended application date for programmes with earlier deadlines', 'Рекомендуемая дата для программ с более ранними сроками'), 'priority', '2027-02-01', TUD, status='not-confirmed', note=TPREV),
        D(L('General application deadline, fall intake', 'Общий срок подачи, осенний набор'), 'regular', '2027-06-15', TUD,
          L('Documents by 1 July (15 February for programmes with earlier deadlines); English proof by 1 July. The C$2,000 deposit is due within two weeks of accepting and by 15 June.', 'Документы — до 1 июля (15 февраля для программ с ранними сроками); подтверждение английского — до 1 июля. Депозит C$2,000 — в течение двух недель после принятия и до 15 июня.'),
          status='not-confirmed', note=TPREV),
    ],
    fee=fee(159, L('Through OUAC: base fee C$159 for up to three choices plus a C$70 document-evaluation fee for Trent. The fee of the direct application was not shown on the pages read.', 'Через OUAC: базовый сбор C$159 за три выбора плюс C$70 за оценку документов для Trent. Сбор прямой заявки на прочитанных страницах не указан.'), OUAC_SRC, V),
    documents=[L('OUAC or Trent direct application', 'Заявка OUAC или прямая заявка Trent'), L('Documents listed in myTrent', 'Документы из списка в myTrent'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('No band below 6.0.', 'Ни одной секции ниже 6.0.')),
             'toefl': toefl(86, 4.5, L('Before 2026: 86 with 20 in writing. 2026 onwards (1–6 scale): 4.5 with 4.0 in writing.', 'До 2026: 86, не ниже 20 по письму. С 2026 (шкала 1–6): 4.5, не ниже 4.0 по письму.')),
             'duolingo': eng(115, note=L('Undergraduate applications only.', 'Только для бакалавриата.')),
             'note': L('Cambridge 176 (no part below 169); PTE Academic 59; Oxford ELLT 7 (no band below 6); LanguageCert Academic 70–74 (65 in each part).', 'Cambridge 176 (ни одной части ниже 169); PTE Academic 59; Oxford ELLT 7 (ни одной части ниже 6); LanguageCert Academic 70–74 (65 в каждой части).')},
    sat=NOSAT,
    costs=costs('2027–2028', TUC, V, L('International undergraduate degree programme, one academic year; university estimate', 'Иностранный студент бакалавриата, один учебный год; оценка университета'),
        [(L('Tuition (general programmes)', 'Обучение (общие программы)'), 37410, E), (L('Ancillary fees', 'Сопутствующие сборы'), 3420, E), (L('Books and supplies', 'Книги и материалы'), {'min': 1500, 'max': 3000}, E),
         (L('Housing (upper end: residence)', 'Жильё (верхняя граница — общежитие)'), {'min': 9280, 'max': 13300}, E), (L('Food (upper end: residence dining plan)', 'Питание (верхняя граница — план питания в общежитии)'), {'min': 4600, 'max': 6570}, E),
         (L('Personal', 'Личные расходы'), {'min': 1500, 'max': 3000}, E)],
        L('C$57,710–C$66,700 for one year (2027–28 estimate)', 'C$57,710–C$66,700 за год (оценка 2027–28)'),
        L('Trent estimates C$57,710–C$66,700 for a year “based on 2027/28 figures”: tuition C$37,410, ancillary fees C$3,420, housing, food, books and personal costs', 'Trent оценивает год в C$57,710–C$66,700 «по данным 2027/28»: обучение C$37,410, сопутствующие сборы C$3,420, жильё, питание, книги и личные расходы'),
        L('tuition, ancillary fees, books, housing, food and personal costs', 'обучение, сопутствующие сборы, книги, жильё, питание и личные расходы'), tuition=37410, budget=57710, budget_max=66700,
        note=L('Tuition is for general programmes; some programmes cost more.', 'Плата указана для общих программ; некоторые программы дороже.')),
    merit=[award('Trent International Entrance Scholarship', L('C$2,500–C$5,500 a year (C$10,000–C$22,000 over four years)', 'C$2,500–C$5,500 в год (C$10,000–C$22,000 за четыре года)'), L('International undergraduate applicants with a final average of 80% or more who meet the English requirement', 'Иностранные абитуриенты бакалавриата со средним от 80%, выполнившие требование к английскому'),
                 application=AUTO, renewable=True, basis='automatic', source=TUS, verified=V,
                 note=L('95–100%: C$5,500; 90–94.9%: C$4,500; 85–89.9%: C$3,500; 80–84.9%: C$2,500 a year. Renewable with an 80% average and a full course load.', '95–100%: C$5,500; 90–94,9%: C$4,500; 85–89,9%: C$3,500; 80–84,9%: C$2,500 в год. Продлевается при среднем 80% и полной нагрузке.')),
           award('Trent International Prestigious Scholarships and Awards', L('Up to C$15,000 a year (up to C$60,000 over four years)', 'До C$15,000 в год (до C$60,000 за четыре года)'), L('Entering international students with outstanding achievement, community service, leadership and some financial need', 'Иностранные первокурсники с выдающимися достижениями, общественной работой, лидерством и некоторой нуждаемостью'),
                 application=L('Application 1 November 2026 – 15 February 2027', 'Заявка с 1 ноября 2026 по 15 февраля 2027'), renewable=True, basis='need-merit', source=TUS, verified=V,
                 note=L('Highly competitive; includes the Moore Family International Scholarship (up to C$12,000 a year, three students from outside North America) and the Justin Chiu International Scholarship (Asia, up to C$15,000 a year). Never counted as received.', 'Высококонкурсные; включают Moore Family International Scholarship (до C$12,000 в год, трое студентов не из Северной Америки) и Justin Chiu International Scholarship (Азия, до C$15,000 в год). Как полученные не учитываются.'))],
    need={'availableToInternational': True, 'note': L('The prestigious scholarships weigh some financial need; bursaries are described for current international students.', 'Престижные стипендии учитывают некоторую нуждаемость; гранты описаны для уже обучающихся иностранцев.'), 'source': TUS, 'verified': V},
    sources=[(L('Trent — international dates and deadlines', 'Trent — даты и сроки для иностранцев'), TUD), (L('Trent — how international students apply', 'Trent — как подают иностранцы'), TUA),
             (L('Trent — estimated cost 2027/28', 'Trent — оценка стоимости 2027/28'), TUC), (L('Trent — international scholarships', 'Trent — стипендии для иностранцев'), TUS),
             (L('Trent — English proficiency', 'Trent — требования к английскому'), TUE), (L('Trent — international undergraduate programmes', 'Trent — программы для иностранцев'), TUP), OUAC_S],
    checked=[ENG, L('costs', 'стоимость'), SCH, L('list of programmes', 'список программ')],
    unconfirmed=[L('2027 application deadlines', 'сроки подачи 2027'), TESTS, UZU, FOUND]))
annual['trent-university'] = {'currency': 'CAD', 'basis': 'total', 'min': 57710, 'max': 66700, 'note': 'University estimate on 2027/28 figures: tuition, ancillary fees, books, housing, food and personal costs'}

assert len(records) == 10
for r in records:
    for it in r['costs'].get('items', []): it.pop('group', None)
ca50.write(records, annual)
flush()
