# -*- coding: utf-8 -*-
"""Canada, batch 2 of 5: Queen's, Dalhousie, Simon Fraser, Laval, Saskatchewan,
Manitoba, Guelph, Carleton, York. Pages read on 15 October 2026.

The University of Victoria (item 14 of the list) is not here: its site did
not answer from this network on 15 October 2026 (timeouts in both the
command-line fetch and the browser), so it moves to a later batch.

Same category and rules as batch 1: an international first-year applicant
from secondary school who pays international tuition; fields of study only
where a programme was named on the pages read."""
import ca50
from ca50 import R, rnd, test, eng, toefl, fee, costs, ev, money, L
from us200_std import J, award, flush, AUTO

V = '2026-10-15'
E, B = 'estimate', 'billed'
P = 'partial'

def D(name, kind, iso, src, cond=None, note=None, status='confirmed', **k):
    return rnd(name, kind, iso, k.pop('binding', False), cond, src, V, status=status, note=note, **k)

NOYEAR = L('The page prints this date without a year; it was read on 15 October 2026, during the cycle for autumn 2027 entry.',
           'Страница указывает эту дату без года; она прочитана 15 октября 2026, в цикле поступления на осень 2027.')
OUAC = 'OUAC (Ontario Universities’ Application Centre)'
OUAC_FEE = lambda uni, amt: L('Paid to OUAC, in Canadian dollars: a base fee of C$159 for up to three programme choices, C$51 for each further choice, and a document-evaluation fee of %s for %s, charged once to applicants outside the Ontario school system (OUAC “Group B”). Some programmes add their own fee.' % (money(amt), uni),
                              'Оплачивается OUAC в канадских долларах: базовый сбор C$159 за три программы, C$51 за каждую следующую и сбор за оценку документов %s для %s — один раз для поступающих не из школ Онтарио (OUAC «Group B»). Некоторые программы берут свой сбор.' % (money(amt), uni))
OUAC_SRC = 'https://www.ouac.on.ca/guide/undergrad-fees'
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

records, annual = [], {}

# --------------------------------------------------------------- Queen's
Q = 'https://www.queensu.ca/'
QD = Q + 'admission/applying/dates-deadlines'
QE = Q + 'admission/applicants/english-proficiency'
QC = Q + 'registrar/tuition-fees/undergraduate/fee-calculator'
QA = Q + 'registrar/financial-aid/specific-students/international'
records.append(R('queens-university', 'Queen’s University', 'Queen’s', 'Kingston', 'ON', PUB,
    L('A residential research university in Kingston, Ontario, between Toronto and Montreal, with the Smith School of Business and Smith Engineering.',
      'Исследовательский университет с кампусом-общежитием в Кингстоне (Онтарио), между Торонто и Монреалем; здесь Smith School of Business и Smith Engineering.'),
    ['business', 'computer-science', 'engineering', 'humanities', 'medicine'],
    {'website': Q, 'admissions': QD, 'international': QE, 'portal': 'https://www.ouac.on.ca/', 'scholarships': QA, 'aid': QA, 'programs': QC, 'cost': QC},
    verified=V, aliases=['Queens University', "Queen's", 'Queens', 'QU', 'Smith School of Business'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Commerce (Smith School of Business)', 'computer-science': 'Computing', 'engineering': 'Smith Engineering — Common First Year',
                        'humanities': 'Arts (Faculty of Arts and Science)', 'medicine': ('Nursing', QD)}, QC, V),
    platforms=[OUAC, L('SOLUS (Queen’s student portal)', 'SOLUS (портал студента Queen’s)')],
    rounds=[
        D(L('Recommended OUAC application date to reach the Major Admission Award application', 'Рекомендуемая дата заявки OUAC, чтобы получить доступ к заявке на Major Admission Award'), 'priority', '2026-11-20', QD,
          L('The university advises applying by 15 November so the SOLUS account is ready in time.', 'Университет советует подать заявку к 15 ноября, чтобы аккаунт SOLUS был готов вовремя.')),
        D(L('Major Admission Award application on SOLUS', 'Заявка на Major Admission Award в SOLUS'), 'scholarship', '2026-12-08', QD),
        D(L('Application deadline: Commerce, Health Sciences and Nursing', 'Срок подачи: Commerce, Health Sciences и Nursing'), 'regular', '2027-02-01', QD,
          L('Supplementary applications for these programmes are due 15 February 2027.', 'Дополнительные заявки этих программ — до 15 февраля 2027.')),
        D(L('Application deadline: all other first-year programmes', 'Срок подачи: все остальные программы первого курса'), 'regular', '2027-03-01', QD),
        D(L('All documents, including transcripts and English test scores', 'Все документы, включая табели и результаты теста по английскому'), 'documents', '2027-03-31', QD),
    ],
    fee=fee(159, OUAC_FEE('Queen’s (including transfer-credit evaluation)', 95), OUAC_SRC, V),
    documents=[L('OUAC application', 'Заявка OUAC'), L('Transcripts and final results', 'Табели и итоговые результаты'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения'),
               L('Supplementary application for Commerce, Health Sciences and Nursing', 'Дополнительная заявка для Commerce, Health Sciences и Nursing')],
    english={'ielts': eng(6.5, note=L('Academic; no band below 6.0.', 'Academic; ни одной секции ниже 6.0.')),
             'toefl': toefl(88, 4.5, PLAIN_TOEFL('88 with at least 20 in each section', '4.5 with no skill below 4.0', L('Home Edition accepted.', 'Home Edition принимается.'))),
             'duolingo': eng(120),
             'note': L('CAEL 70 (no band below 60); PTE 60; Cambridge 175 (no part below 170); LanguageCert Academic 70 (65 in each part). Results are valid for two years. The QBridge pathway exists for lower scores.',
                       'CAEL 70 (ни одной части ниже 60); PTE 60; Cambridge 175 (ни одной части ниже 170); LanguageCert Academic 70 (65 в каждой части). Результаты действительны два года. При более низких баллах есть путь QBridge.')},
    sat=NOSAT,
    costs=costs('2026–2027', QC, V, L('International first-year students in residence (double room, mandatory meal plan); university fee calculator', 'Иностранные первокурсники в общежитии (двухместная комната, обязательное питание); калькулятор университета'),
        [(L('Tuition, Arts (Faculty of Arts and Science)', 'Обучение, Arts (Faculty of Arts and Science)'), 44810.00, B), (L('Tuition, Computing', 'Обучение, Computing'), 54809.00, B),
         (L('Tuition, Smith Engineering (common first year)', 'Обучение, Smith Engineering (общий первый курс)'), 59284.00, B), (L('Tuition, Smith School of Business (Commerce)', 'Обучение, Smith School of Business (Commerce)'), 60840.00, B),
         (L('University Health Insurance Plan (UHIP), mandatory', 'Страховка UHIP, обязательная'), 792.00, B), (L('Other mandatory and programme fees (estimate)', 'Прочие обязательные и программные сборы (оценка)'), 1500.00, E),
         (L('Books', 'Книги'), 1800.00, E), (L('Residence, double room, with mandatory meal plan', 'Общежитие, двухместная комната, с обязательным питанием'), 17094.80, B)],
        L('C$65,996.80–C$82,026.80 for a first year in residence (2026–27)', 'C$65,996.80–C$82,026.80 за первый год в общежитии (2026–27)'),
        L('The calculator totals C$65,996.80 for Arts, C$75,995.80 for Computing, C$80,470.80 for Engineering and C$82,026.80 for Commerce, with residence, meals, UHIP, fees and books', 'Калькулятор даёт C$65,996.80 для Arts, C$75,995.80 для Computing, C$80,470.80 для инженерии и C$82,026.80 для Commerce — с общежитием, питанием, UHIP, сборами и книгами'),
        L('tuition, UHIP, other mandatory fees (estimate), books (estimate), double room with meal plan', 'обучение, UHIP, прочие обязательные сборы (оценка), книги (оценка), двухместная комната с питанием'),
        tuition=44810.00, budget=65996.80, budget_max=82026.80,
        note=L('“2026-2027 rates are provided as information only and are subject to review.” Personal costs and travel are not in the calculator.', '«Ставки 2026-2027 приведены только для информации и могут пересматриваться». Личные расходы и дорога в калькулятор не входят.')),
    merit=[award('Dean’s International Award (Arts and Science)', L('C$5,000–C$25,000 a year', 'C$5,000–C$25,000 в год'), L('International fee-paying students entering first year, by academic achievement', 'Иностранные студенты, платящие международный тариф, при поступлении на первый курс — по академическим успехам'),
                 application=AUTO, renewable=True, basis='merit', source=QA, verified=V,
                 note=L('Renewable for three more years with full-time study in the original faculty. Commerce (C$15,000, C$20,000 or C$25,000 a year), Engineering (C$10,000–C$25,000) and Health Sciences (C$10,000 or C$15,000) have their own versions.',
                        'Продлевается ещё на три года при очной учёбе на том же факультете. Свои версии у Commerce (C$15,000, C$20,000 или C$25,000 в год), инженерии (C$10,000–C$25,000) и Health Sciences (C$10,000 или C$15,000).')),
           award('Major Admission Awards', None, L('Applicants with a strong record of achievement; open to domestic and international applicants', 'Абитуриенты с сильными достижениями; для канадцев и иностранцев'),
                 application=L('Separate application on SOLUS by 8 December 2026', 'Отдельная заявка в SOLUS до 8 декабря 2026'), basis='merit', source=QD, verified=V,
                 note=L('Amounts are not given on the pages read.', 'Суммы на прочитанных страницах не указаны.'))],
    need={'note': L('Principal’s Global Scholars supports forcibly displaced students; general need-based aid for international first-year students is not described on the pages read.', 'Principal’s Global Scholars поддерживает вынужденно перемещённых студентов; общая помощь по нуждаемости для иностранных первокурсников на прочитанных страницах не описана.'), 'source': QA, 'verified': V},
    sources=[(L('Queen’s — dates and deadlines', 'Queen’s — даты и сроки'), QD), (L('Queen’s — English proficiency', 'Queen’s — требования к английскому'), QE),
             (L('Queen’s — fee calculator 2026-27', 'Queen’s — калькулятор платы 2026–27'), QC), (L('Queen’s — awards for international students', 'Queen’s — стипендии для иностранцев'), QA), (L('OUAC — undergraduate fees', 'OUAC — сборы бакалавриата'), OUAC_SRC)],
    checked=[L('2027 deadlines', 'сроки 2027'), L('English requirements', 'требования к английскому'), L('costs', 'стоимость'), L('scholarships', 'стипендии')],
    unconfirmed=[TESTS, UZU, MAJORS, FOUND]))
annual['queens-university'] = {'currency': 'CAD', 'basis': 'total', 'min': 65996.8, 'max': 82026.8, 'note': 'University fee calculator 2026–27: tuition, UHIP, fees, books, double room and meal plan (Arts to Commerce)'}

# --------------------------------------------------------------- Dalhousie
DA = 'https://www.dal.ca/admissions/'
DD = DA + 'dates-and-deadlines.html'
DT = DA + 'cost-and-payment/tuition/undergraduate-program-tuition.html'
DG = DA + 'cost-and-payment/tuition/international-tuition-guarantee.html'
DE = DA + 'how-to-apply/undergraduate-admissions/international-applicants/english-language-requirements.html'
DC = DA + 'how-to-apply/undergraduate-admissions/international-applicants/international-admissions-requirements-by-country.html'
DS = DA + 'scholarships-financial-aid/scholarships/future-undergraduate-student-awards.html'
records.append(R('dalhousie-university', 'Dalhousie University', 'Dal', 'Halifax', 'NS', PUB,
    L('Atlantic Canada’s largest research university, in Halifax, Nova Scotia, with an agricultural campus in Truro. International tuition is guaranteed for the length of the programme.',
      'Крупнейший исследовательский университет Атлантической Канады, в Галифаксе (Новая Шотландия), с аграрным кампусом в Труро. Плата для иностранцев фиксируется на весь срок программы.'),
    ['humanities', 'computer-science', 'engineering', 'business', 'medicine'],
    {'website': 'https://www.dal.ca/', 'admissions': DD, 'international': DC, 'portal': DA, 'scholarships': DS, 'aid': DS, 'programs': DG, 'cost': DT},
    verified=V, aliases=['Dal', 'Dalhousie'], campuses=['Halifax', L('Agricultural Campus (Truro)', 'Аграрный кампус (Труро)')],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Faculty of Arts and Social Sciences', 'computer-science': 'Faculty of Computer Science', 'engineering': 'Faculty of Engineering',
                        'business': 'Faculty of Management', 'medicine': ('Bachelor of Science (Nursing)', DD)}, DG, V),
    platforms=[L('Dalhousie online application', 'Онлайн-заявка Dalhousie')],
    rounds=[
        D(L('Entrance award application (General Entrance Award program)', 'Заявка на вступительные стипендии (General Entrance Award program)'), 'scholarship', '2027-02-15', DS,
          L('High school applicants are encouraged to apply for admission early enough to meet this deadline.', 'Школьникам советуют подать заявку на поступление так, чтобы успеть к этому сроку.')),
        D(L('Application deadline: Nursing, Health Sciences, Medical Sciences, Social Work', 'Срок подачи: Nursing, Health Sciences, Medical Sciences, Social Work'), 'regular', '2027-02-15', DD),
        D(L('Application deadline: Environmental Design Studies (Architecture)', 'Срок подачи: Environmental Design Studies (Architecture)'), 'regular', '2027-03-01', DD),
        D(L('Accept the offer (admission deposit) and prove English proficiency', 'Принять предложение (депозит) и подтвердить английский'), 'reply', '2027-05-01', DD,
          L('Other programmes have no fixed deadline: applications are considered while space remains, before classes start in September.', 'У остальных программ нет фиксированного срока: заявки рассматривают, пока есть места, до начала занятий в сентябре.')),
    ],
    fee=fee(None, L('The amount was not found on the pages read.', 'Сумма на прочитанных страницах не найдена.'), DA, V),
    documents=[L('Online application', 'Онлайн-заявка'), L('Transcripts', 'Табели'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('No band below 6.0.', 'Ни одной секции ниже 6.0.')),
             'toefl': toefl(90, 4.5, L('0–120 scale: 90 with 20 in each band. 1–6 scale: 4.5 with 4.5 in Listening and 4.0 in Reading, Speaking and Writing.', 'Шкала 0–120: 90, не ниже 20 в каждой секции. Шкала 1–6: 4.5; Listening 4.5, Reading, Speaking и Writing — 4.0.')),
             'duolingo': eng(120), 'note': L('MELAB 55 and CAEL are also accepted. Conditional admission is possible; proof is due by 1 May for autumn entry.', 'Принимаются также MELAB 55 и CAEL. Возможен условный приём; подтверждение — до 1 мая для осеннего набора.')},
    sat=test(None, L('Not stated: the requirements for U.S. high school applicants on the page read list no SAT or ACT.', 'Не указано: требования для выпускников американских школ на прочитанной странице не называют SAT или ACT.')),
    intlQuals=UZ('Akademik Litsey Diplomi (Diploma of Academic Lyceum).', 'Akademik Litsey Diplomi (диплом академического лицея).'),
    costs=costs('2026–2027', DG, V, L('International first-year students; tuition guaranteed for the programme', 'Иностранные первокурсники; плата зафиксирована на программу'),
        [(L('Tuition, Agriculture', 'Обучение, Agriculture'), 30906, B), (L('Tuition, Arts and Social Sciences or Science', 'Обучение, Arts and Social Sciences или Science'), 37992, B),
         (L('Tuition, Computer Science', 'Обучение, Computer Science'), 41688, B), (L('Tuition, Management', 'Обучение, Management'), 42042, B), (L('Tuition, Engineering', 'Обучение, Engineering'), 48594, B),
         (L('Tuition and fees, fall and winter terms (university range)', 'Обучение и сборы, осенний и зимний семестры (диапазон университета)'), {'min': 33091, 'max': 51503}, E),
         (L('Residence: lodging and meal plan', 'Общежитие: проживание и питание'), {'min': 12877, 'max': 16792}, E)],
        L('C$30,906–C$48,594 tuition a year (2026–27, guaranteed)', 'C$30,906–C$48,594 — обучение за год (2026–27, фиксировано)'),
        L('Guaranteed tuition for 2026–27 from C$30,906 (Agriculture) to C$48,594 (Engineering); with fees the university estimates C$33,091–C$51,503, and residence with meals C$12,877–C$16,792', 'Фиксированная плата 2026–27: от C$30,906 (Agriculture) до C$48,594 (инженерия); со сборами университет оценивает C$33,091–C$51,503, общежитие с питанием — C$12,877–C$16,792'),
        L('tuition only in the main figure; fees, housing and food are shown separately', 'в основной сумме — только обучение; сборы, жильё и питание показаны отдельно'), tuition=37992,
        note=L('Estimates “are based on approved 2026–2027 rates”. The guarantee keeps tuition fixed for the length of the programme, paid half in fall and half in winter. The rate for students entering in 2027 is not yet published.',
               'Оценки «основаны на утверждённых ставках 2026–2027». Гарантия фиксирует плату на весь срок программы; она делится пополам на осень и зиму. Ставка для поступающих в 2027 ещё не опубликована.')),
    merit=[award('Dalhousie General Entrance Awards', None, L('Domestic and international first-year applicants', 'Канадские и иностранные поступающие на первый курс'),
                 application=L('One application for the 2027–28 program, open 1 October 2026 to 15 February 2027', 'Одна заявка на программу 2027–28, с 1 октября 2026 до 15 февраля 2027'), basis='need-merit', source=DS, verified=V,
                 note=L('More than 2,000 entrance awards; some are for merit, some for financial need and some for both. Some can be renewed for up to four years.', 'Более 2000 вступительных стипендий: часть за успехи, часть по нуждаемости, часть по обоим признакам. Некоторые продлеваются до четырёх лет.')),
           award('Sankofa Scholarship', L('C$48,000 (C$12,000 a year)', 'C$48,000 (C$12,000 в год)'), L('One international student of Black/African descent from the Caribbean', 'Один иностранный студент африканского происхождения из Карибского региона'),
                 basis='merit', source=DS, verified=V)],
    need={'availableToInternational': True, 'note': L('Some General Entrance Awards are based on financial need, and international applicants may apply.', 'Часть General Entrance Awards — по финансовой нуждаемости, и иностранцы могут подавать заявку.'), 'source': DS, 'verified': V},
    sources=[(L('Dalhousie — dates and deadlines', 'Dalhousie — даты и сроки'), DD), (L('Dalhousie — undergraduate tuition', 'Dalhousie — плата бакалавриата'), DT),
             (L('Dalhousie — international tuition guarantee', 'Dalhousie — гарантия платы для иностранцев'), DG), (L('Dalhousie — English requirements', 'Dalhousie — требования к английскому'), DE),
             (L('Dalhousie — requirements by country', 'Dalhousie — требования по странам'), DC), (L('Dalhousie — entrance awards', 'Dalhousie — вступительные стипендии'), DS)],
    checked=[L('2027 deadlines', 'сроки 2027'), L('English requirements', 'требования к английскому'), L('tuition', 'плата за обучение'), L('scholarships', 'стипендии'), UZU],
    unconfirmed=[L('application fee', 'сбор за заявку'), TESTS, MAJORS, FOUND]))
annual['dalhousie-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 30906, 'max': 48594, 'note': 'Guaranteed tuition 2026–27 by faculty (Agriculture to Engineering); fees, housing and food extra'}

# --------------------------------------------------------------- Simon Fraser
S = 'https://www.sfu.ca/students/admission/'
SD = S + 'apply/dates-deadlines/high-school/fall-term.html'
SC = S + 'fees-scholarships.html'
SU = S + 'fees-scholarships/uses.html'
SE = S + 'admission-requirements/english-language-requirement.html'
SS = S + 'admission-requirements/usa-highschool.html'
records.append(R('simon-fraser-university', 'Simon Fraser University', 'SFU', 'Burnaby', 'BC', PUB,
    L('A research university in Metro Vancouver with campuses in Burnaby, Surrey and downtown Vancouver, applied to through EducationPlannerBC. Fraser International College offers a pathway for international students.',
      'Исследовательский университет в агломерации Ванкувера с кампусами в Бернаби, Суррее и центре Ванкувера; подача через EducationPlannerBC. Для иностранцев есть подготовительный путь через Fraser International College.'),
    ['business', 'social-sciences', 'arts'],
    {'website': 'https://www.sfu.ca/', 'admissions': SD, 'international': SE, 'portal': 'https://www.educationplannerbc.ca/', 'scholarships': SU, 'aid': SC, 'programs': SD, 'cost': SC},
    verified=V, aliases=['SFU', 'Simon Fraser'], campuses=['Burnaby', 'Surrey', 'Vancouver'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Beedie School of Business', 'social-sciences': ('Faculty of Arts and Social Sciences', SC), 'arts': 'School for the Contemporary Arts'}, SD, V),
    platforms=['EducationPlannerBC'],
    rounds=[
        D(L('Undergraduate Scholars Entrance Scholarship (USES) application', 'Заявка на Undergraduate Scholars Entrance Scholarship (USES)'), 'scholarship', '2026-12-15', SU,
          L('Supporting documents by 31 January 2027.', 'Документы — до 31 января 2027.')),
        D(L('Application deadline', 'Срок подачи'), 'regular', '2027-01-31', SD, L('Applications opened on 1 October 2026; decisions are sent from January to late April on a rolling basis.', 'Приём открылся 1 октября 2026; решения приходят с января до конца апреля по мере рассмотрения.')),
        D(L('Beedie School of Business To-Do List items; Contemporary Arts supplemental (audition, interview or portfolio)', 'Пункты To-Do List для Beedie School of Business; дополнительные материалы School for the Contemporary Arts (прослушивание, интервью или портфолио)'), 'documents', '2027-02-07', SD, note=NOYEAR),
        D(L('Admission documents for all high school applicants', 'Документы для всех поступающих после школы'), 'documents', '2027-02-28', SD, note=NOYEAR),
        D(L('Accept your offer; residence application', 'Принять предложение; заявка на общежитие'), 'reply', '2027-05-01', SD, note=NOYEAR),
    ],
    fee=fee(None, L('Paid through EducationPlannerBC; the amount was not read.', 'Оплачивается через EducationPlannerBC; сумма не прочитана.'), SD, V),
    documents=[L('EducationPlannerBC application', 'Заявка EducationPlannerBC'), L('Transcripts by 28 February', 'Табели до 28 февраля'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения'),
               L('Supplemental items for Beedie and Contemporary Arts', 'Дополнительные материалы для Beedie и Contemporary Arts')],
    english={'ielts': eng(6.5, note=L('Academic; no part below 6.0. One Skill Retake not accepted.', 'Academic; ни одной части ниже 6.0. One Skill Retake не принимается.')),
             'toefl': toefl(88, 4.5, PLAIN_TOEFL('88 with no part below 20', '4.5 with no part below 4.0', L('One sitting; MyBest not used; Home Edition accepted.', 'Одна попытка; MyBest не учитывается; Home Edition принимается.'))),
             'duolingo': eng(125),
             'note': L('Cambridge 176 (169 in each part); CAEL 70 (60 in each part); PTE 65 (60 in each part); LanguageCert 70 (65 in each part).', 'Cambridge 176 (169 в каждой части); CAEL 70 (60 в каждой части); PTE 65 (60 в каждой части); LanguageCert 70 (65 в каждой части).')},
    sat=test('optional', L('“The SAT/ACT requirement is optional for students applying for Fall 2024 admission onwards”; applicants without scores are not at a disadvantage.', '«Требование SAT/ACT необязательно для поступающих с осени 2024»; без баллов абитуриенты не в проигрыше.'),
             source=SS, verified=V),
    costs=costs('2026–2027', SC, V, L('International first-year student, 10 courses (30 units) in Arts and Social Sciences or Science, single room in residence', 'Иностранный первокурсник, 10 курсов (30 единиц) на Arts and Social Sciences или Science, одноместная комната в общежитии'),
        [(L('Tuition and fees (including transit pass)', 'Обучение и сборы (включая проездной)'), 38944, B), (L('Textbooks, technology and supplies', 'Учебники, техника и материалы'), 2400, E),
         (L('Single residence room (North Towers) with meal plan', 'Одноместная комната в общежитии (North Towers) с питанием'), 15014, B), (L('Medical insurance', 'Медицинская страховка'), 945, B)],
        L('C$57,303 for one year (2026–27, university estimate)', 'C$57,303 за год (2026–27, оценка университета)'),
        L('SFU estimates C$57,303 for two terms: tuition and fees C$38,944, books and supplies C$2,400, residence with meals C$15,014 and insurance C$945', 'SFU оценивает два семестра в C$57,303: обучение и сборы C$38,944, книги и материалы C$2,400, общежитие с питанием C$15,014 и страховка C$945'),
        L('tuition, fees, transit pass, books, single room with meals, medical insurance', 'обучение, сборы, проездной, книги, одноместная комната с питанием, медицинская страховка'), tuition=38944, budget=57303,
        note=L('For a typical Arts and Social Sciences or Science programme; other faculties differ. Tuition for current students “may increase by up to 6% on an annual basis”.', 'Для типичной программы Arts and Social Sciences или Science; на других факультетах иначе. Плата для текущих студентов «может расти до 6% в год».')),
    merit=[award('Undergraduate Scholars Entrance Scholarship (USES)', L('Up to C$140,000 for international students', 'До C$140,000 для иностранцев'), L('Canadian and international high school applicants for fall entry with at least a 90% average (or 31 IB points)', 'Канадские и иностранные выпускники школ, поступающие осенью, со средним баллом от 90% (или 31 балл IB)'),
                 application=L('Separate application, 1 October to 15 December 2026', 'Отдельная заявка, с 1 октября по 15 декабря 2026'), renewable=True, basis='merit', source=SU, verified=V,
                 note=L('Values run from C$20,000 up to C$140,000 for international students; the top value is a competitive maximum.', 'Суммы — от C$20,000 до C$140,000 для иностранцев; верхняя сумма — конкурсный максимум.'))],
    need={'note': NOT_NEED},
    sources=[(L('SFU — fall 2027 dates for high school applicants', 'SFU — даты осени 2027 для выпускников школ'), SD), (L('SFU — fees and scholarships', 'SFU — плата и стипендии'), SC),
             (L('SFU — USES', 'SFU — USES'), SU), (L('SFU — English language requirement', 'SFU — требования к английскому'), SE), (L('SFU — U.S. high school requirements', 'SFU — требования для американских школ'), SS)],
    checked=[L('2027 deadlines', 'сроки 2027'), L('English requirements', 'требования к английскому'), L('test policy', 'политика тестов'), L('costs', 'стоимость'), L('scholarships', 'стипендии')],
    unconfirmed=[L('application fee', 'сбор за заявку'), UZU, MAJORS, FOUND]))
annual['simon-fraser-university'] = {'currency': 'CAD', 'basis': 'total', 'min': 57303, 'max': 57303, 'note': 'University estimate for 2026–27: tuition and fees, books, single room with meals, insurance (Arts and Social Sciences or Science)'}

# --------------------------------------------------------------- Laval
LA = 'https://www.ulaval.ca/'
LD = LA + 'admission/deposez-votre-demande-dadmission/dates-limites-de-depot'
LF = LA + 'admission/deposez-votre-demande-dadmission/frais-douverture-et-danalyse-de-dossier'
LT = LA + 'etudes/droits-de-scolarite/etudiant-de-linternational/programmes-de-1er-cycle/automne-2026-hiver-2027'
LX = LA + 'etudes/droits-de-scolarite/etudiant-etranger'
LFR = 'https://www.reg.ulaval.ca/information-relative-a-la-maitrise-du-francais-a-luniversite-laval'
records.append(R('universite-laval', 'Université Laval', 'ULaval', 'Quebec City', 'QC',
    L('Public research university (French-language)', 'Государственный исследовательский университет (франкоязычный)'),
    L('The oldest French-language university in North America, in Quebec City. Teaching is in French; most bachelor’s programmes have an institutional French requirement. International students in Quebec also need a Quebec Acceptance Certificate (CAQ).',
      'Старейший франкоязычный университет Северной Америки, в городе Квебек. Обучение на французском; у большинства программ бакалавриата есть институциональное требование к французскому. Иностранцам в Квебеке нужен также сертификат CAQ.'),
    ['medicine'],
    {'website': LA, 'admissions': LD, 'international': LD, 'portal': LA + 'admission', 'scholarships': LX, 'aid': LX, 'programs': LD, 'cost': LT},
    verified=V, language=L('French', 'Французский'), englishTaught=False, englishTaughtPrograms=[],
    aliases=['ULaval', 'Universite Laval', 'Laval University', 'Laval'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence={'medicine': {'program': 'Doctorat en médecine (programme contingenté)', 'level': 'bachelor', 'language': 'French', 'url': LD, 'checked': V}},
    platforms=[L('Université Laval online application', 'Онлайн-заявка Université Laval')],
    rounds=[
        D(L('Application deadline: quota programmes (medicine, pharmacy, occupational therapy, physiotherapy, sexology, biomedical sciences)', 'Срок подачи: программы с квотой (медицина, фармация, эрготерапия, физиотерапия, сексология, биомедицинские науки)'), 'regular', '2026-11-01', LD, note=NOYEAR),
        D(L('Application deadline: limited-capacity and open bachelor’s programmes', 'Срок подачи: программы с ограниченным набором и без квоты'), 'regular', '2027-02-01', LD,
          L('An application filed after the deadline is moved to a later term. Immigration steps can take four to six months.', 'Заявка после срока переносится на следующий семестр. Иммиграционные шаги могут занять 4–6 месяцев.'), note=NOYEAR),
    ],
    fee=fee(104.53, L('For a new applicant who has never studied at Université Laval.', 'Для нового кандидата, который никогда не учился в Université Laval.'), LF, V),
    documents=[L('Online application', 'Онлайн-заявка'), L('Transcripts', 'Табели'), L('Proof of French where required', 'Подтверждение французского, если требуется')],
    english={'ielts': None, 'toefl': None, 'duolingo': None, 'waiver': None,
             'note': L('Teaching is in French; English is not an admission requirement. French: without an exemption, the TCF tout public with the written expression test (valid two years) or the Test de français Laval-Montréal (TFLM); results can lead to admission with required French courses.',
                       'Обучение на французском; английский для поступления не нужен. Французский: без освобождения — TCF tout public с письменной частью (действителен два года) или Test de français Laval-Montréal (TFLM); по результатам могут принять с обязательными курсами французского.')},
    frenchRequirement={'level': None, 'note': L('Institutional French requirement, at admission or before graduation depending on the programme; the level is set per programme.', 'Институциональное требование к французскому — при поступлении или до выпуска, в зависимости от программы; уровень задаёт программа.'), 'source': LFR, 'verified': V},
    sat=test('not-applicable', L('SAT and ACT are not part of the admission route; candidates are assessed on their school record and French.', 'SAT и ACT не входят в порядок поступления; оценивают школьные результаты и французский.')),
    costs=costs('2026–2027', LT, V, L('International bachelor’s students, 15 credits a term (one term shown)', 'Иностранные студенты бакалавриата, 15 кредитов за семестр (показан один семестр)'),
        [(L('Tuition (droits de scolarité)', 'Обучение (droits de scolarité)'), 1558.80, B), (L('Supplementary fees for foreign students (C$799.23 a credit)', 'Доплата для иностранцев (C$799.23 за кредит)'), 11988.45, B),
         (L('Management, related, technology and transit (LPU) fees', 'Сборы: управление, сопутствующие, технологический и проездной (LPU)'), 569.23, B)],
        L('C$14,116.48 a term for 15 credits (2026–27)', 'C$14,116.48 за семестр из 15 кредитов (2026–27)'),
        L('Partial total of C$14,116.48 per term for 15 credits; student association fees and health insurance (C$900 a year, on the first fall bill) are extra', 'Промежуточный итог C$14,116.48 за семестр из 15 кредитов; взносы студенческих ассоциаций и страховка (C$900 в год, в первом осеннем счёте) — сверх этого'),
        L('tuition, foreign-student supplement and required fees for one term; insurance, housing and food are extra', 'обучение, доплата для иностранцев и обязательные сборы за один семестр; страховка, жильё и питание — сверх этого'), tuition=14116.48,
        note=L('Page updated 9 September 2026 for the 2026–2027 year. Students from France and francophone Belgium, and quota exemptions granted by the Quebec government, pay less.', 'Страница обновлена 9 сентября 2026 для 2026–2027 года. Студенты из Франции и франкоязычной Бельгии, а также получившие квотное освобождение правительства Квебека платят меньше.')),
    merit=[award('Exemption from supplementary fees (Quebec government quotas)', L('Removes the foreign-student supplement', 'Снимает доплату для иностранцев'), L('Citizens of the countries on the Quebec government’s list', 'Граждане стран из списка правительства Квебека'),
                 basis='partnership', source=LX, verified=V, note=L('Country quotas set by the Quebec government; Uzbekistan’s place on the list was not checked.', 'Квоты по странам устанавливает правительство Квебека; есть ли в списке Узбекистан, не проверялось.'))],
    need={'note': NOT_NEED},
    sources=[(L('ULaval — application deadlines', 'ULaval — сроки подачи'), LD), (L('ULaval — application fee', 'ULaval — сбор за заявку'), LF), (L('ULaval — French requirement', 'ULaval — требование к французскому'), LFR),
             (L('ULaval — international tuition 2026-27', 'ULaval — плата для иностранцев 2026–27'), LT), (L('ULaval — fees for foreign students', 'ULaval — сборы для иностранцев'), LX)],
    checked=[L('deadlines', 'сроки'), L('application fee', 'сбор за заявку'), L('French requirement', 'требование к французскому'), L('tuition', 'плата за обучение')],
    unconfirmed=[L('entrance scholarships for international students', 'вступительные стипендии для иностранцев'), UZU, L('full list of programmes', 'полный список программ'), FOUND]))
annual['universite-laval'] = {'currency': 'CAD', 'calc': 'two-semesters', 'basis': 'tuition', 'min': 28232.96, 'max': 28232.96, 'note': 'Two terms of 15 credits at the 2026–27 per-term total — calculated by UniPath, not printed by the university; insurance, housing and food extra'}

# --------------------------------------------------------------- Saskatchewan
K = 'https://admissions.usask.ca/'
KT = K + 'money/tuition.php'
KS = K + 'money/scholarships.php'
KE = K + 'requirements/english-language-proficiency.php'
KA = K + 'requirements/apply.php'
KP = K + 'computer-science.php'
records.append(R('university-of-saskatchewan', 'University of Saskatchewan', 'USask', 'Saskatoon', 'SK', PUB,
    L('A research university in Saskatoon with most colleges on one campus, from Agriculture and Bioresources to Engineering and the Edwards School of Business.', 'Исследовательский университет в Саскатуне, где большинство колледжей на одном кампусе — от Agriculture and Bioresources до инженерии и Edwards School of Business.'),
    ['business', 'engineering', 'computer-science', 'humanities', 'medicine'],
    {'website': 'https://www.usask.ca/', 'admissions': KA, 'international': KE, 'portal': 'https://apply.usask.ca/', 'scholarships': KS, 'aid': KS, 'programs': KT, 'cost': KT},
    verified=V, aliases=['USask', 'U of S', 'U of Saskatchewan'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Edwards School of Business', 'engineering': 'College of Engineering', 'computer-science': ('Computer Science (Arts and Science)', KP),
                        'humanities': 'Arts and Science — Arts', 'medicine': 'Pharmacy (PharmD)'}, KT, V),
    platforms=[L('USask online application', 'Онлайн-заявка USask')],
    rounds=[
        D(L('Apply with documents to be considered for USask Entrance Scholarships', 'Подать заявку с документами для рассмотрения на USask Entrance Scholarships'), 'priority', '2026-12-01', KS, note=NOYEAR),
        D(L('Apply for admission to be eligible for international student awards', 'Подать заявку на поступление, чтобы претендовать на стипендии для иностранцев'), 'priority', '2027-02-15', KS, note=NOYEAR),
        D(L('International application deadline (Arts and Science)', 'Срок подачи для иностранцев (Arts and Science)'), 'regular', '2027-05-01', KP, L('Documents due 1 June 2027. Other colleges set their own dates.', 'Документы — до 1 июня 2027. Другие колледжи устанавливают свои сроки.')),
    ],
    fee=fee(120, L('Minimum, non-refundable, for most programmes; covers a first and a second choice.', 'Минимум, не возвращается, для большинства программ; покрывает первый и второй выбор.'), KA, V),
    documents=[L('USask online application', 'Онлайн-заявка USask'), L('Transcripts', 'Табели'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('Academic; 6 in each band.', 'Academic; не ниже 6 в каждой секции.')),
             'toefl': toefl(86, 4.5, PLAIN_TOEFL('86 with 19 in each part (accepted for two years)', '4.5 with 4 in each part', L('Special Home Edition accepted.', 'Special Home Edition принимается.'))),
             'duolingo': eng(120, note=L('100 in Literacy, Conversation, Comprehension and Production (from 1 January 2026).', '100 в Literacy, Conversation, Comprehension и Production (с 1 января 2026).')),
             'note': L('PTE 63 (59 in each part); CAEL 70 (60 in each part); Cambridge C1 176.', 'PTE 63 (59 в каждой части); CAEL 70 (60 в каждой части); Cambridge C1 176.')},
    sat=NOSAT,
    costs=costs('2026–2027', KT, V, L('International first-year students, full course load in fall and winter (estimates)', 'Иностранные первокурсники, полная нагрузка осенью и зимой (оценки)'),
        [(L('Tuition, Arts and Science — Arts', 'Обучение, Arts and Science — Arts'), 39007, E), (L('Tuition, Arts and Science — Science', 'Обучение, Arts and Science — Science'), 40894, E),
         (L('Tuition, Agriculture and Bioresources', 'Обучение, Agriculture and Bioresources'), 41964, E), (L('Tuition, Edwards School of Business', 'Обучение, Edwards School of Business'), 48932, E),
         (L('Tuition, Engineering', 'Обучение, Engineering'), 59383, E), (L('Tuition, Pharmacy (PharmD), year 1', 'Обучение, Pharmacy (PharmD), 1 год'), 73618, E),
         (L('Student fees (full-time, on campus; incl. transit pass, health and dental)', 'Студенческие сборы (очно, на кампусе; включая проездной, медицинский и стоматологический план)'), 1331.66, B)],
        L('C$39,007–C$59,383 tuition a year (2026–27 estimate)', 'C$39,007–C$59,383 — обучение за год (оценка 2026–27)'),
        L('Tuition estimates for a first-year full course load from C$39,007 (Arts) to C$59,383 (Engineering); PharmD C$73,618; student fees C$1,331.66', 'Оценки платы за полную нагрузку первого курса: от C$39,007 (Arts) до C$59,383 (инженерия); PharmD — C$73,618; студенческие сборы — C$1,331.66'),
        L('tuition only in the main figure; student fees shown separately; housing and food extra', 'в основной сумме — только обучение; студенческие сборы отдельно; жильё и питание — сверх этого'), tuition=39007),
    merit=[award('University of Saskatchewan International Excellence Award', money(10000), L('International applicants who apply for admission by 15 February', 'Иностранные абитуриенты, подавшие заявку до 15 февраля'),
                 application=AUTO, basis='merit', source=KS, verified=V, note=L('One award offered.', 'Одна стипендия.')),
           award('International Baccalaureate Excellence Award', money(20000), L('International applicants with the IB Diploma who apply by 15 February', 'Иностранные абитуриенты с дипломом IB, подавшие заявку до 15 февраля'),
                 application=AUTO, basis='merit', source=KS, verified=V, note=L('One award offered.', 'Одна стипендия.')),
           award('USask Entrance Scholarships', money(5000), L('Direct-entry high school applicants who apply with documents by 1 December; about 600 a year', 'Поступающие напрямую после школы, подавшие заявку с документами до 1 декабря; около 600 в год'),
                 application=AUTO, basis='merit', source=KS, verified=V, note=L('Awarded by admission average; the eligibility text read names no citizenship limit.', 'Присуждается по среднему баллу при поступлении; в прочитанных условиях ограничений по гражданству нет.'))],
    need={'note': NOT_NEED},
    sources=[(L('USask — Computer Science (deadlines)', 'USask — Computer Science (сроки)'), KP), (L('USask — how to apply and fee', 'USask — как подать и сбор'), KA),
             (L('USask — tuition 2026-27', 'USask — плата 2026–27'), KT), (L('USask — English proficiency', 'USask — требования к английскому'), KE), (L('USask — scholarships', 'USask — стипендии'), KS)],
    checked=[L('2027 deadlines', 'сроки 2027'), L('application fee', 'сбор за заявку'), L('English requirements', 'требования к английскому'), L('tuition', 'плата за обучение'), L('scholarships', 'стипендии')],
    unconfirmed=[TESTS, UZU, L('housing costs', 'стоимость жилья'), MAJORS, FOUND]))
annual['university-of-saskatchewan'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 39007, 'max': 59383, 'note': 'Tuition estimates 2026–27 for a first-year full load (Arts to Engineering; PharmD higher); fees, housing and food extra'}

# --------------------------------------------------------------- Manitoba
MB = 'https://umanitoba.ca/'
MT = MB + 'registrar/tuition-fees/undergraduate'
MI = MB + 'explore/student-experience/tuition-and-financial-supports/international'
ME = MB + 'explore/undergraduate-admissions/requirements/english-language-proficiency-requirements'
MR = MB + 'explore/undergraduate-admissions/requirements/international-admission-requirements'
MS = MB + 'financial-aid-and-awards/entrance-awards'
records.append(R('university-of-manitoba', 'University of Manitoba', 'UM', 'Winnipeg', 'MB', PUB,
    L('Manitoba’s largest university, in Winnipeg. Many students start in University 1, a first year of broad study, before entering a faculty; others enter a faculty directly.',
      'Крупнейший университет Манитобы, в Виннипеге. Многие начинают с University 1 — первого года широкого обучения — и затем переходят на факультет; на другие факультеты поступают напрямую.'),
    ['humanities', 'engineering', 'business', 'arts', 'medicine', 'education'],
    {'website': MB, 'admissions': MR, 'international': MI, 'portal': MB + 'explore/undergraduate-admissions', 'scholarships': MS, 'aid': MS, 'programs': MT, 'cost': MT},
    verified=V, aliases=['UManitoba', 'U of M', 'U of Manitoba', 'Asper School of Business'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Faculty of Arts', 'engineering': 'Price Faculty of Engineering', 'business': 'Asper School of Business (Management)',
                        'arts': 'Fine Arts and Music', 'medicine': 'Nursing', 'education': 'Education'}, MT, V),
    platforms=[L('University of Manitoba online application', 'Онлайн-заявка University of Manitoba')],
    rounds=[
        D(L('International Excellence Entrance Scholarship deadline', 'Срок International Excellence Entrance Scholarship'), 'scholarship', '2026-12-01', MS),
        D(L('Admission application and entrance scholarship consideration', 'Заявка на поступление и рассмотрение на вступительные стипендии'), 'regular', '2027-03-01', MS,
          note=L('The page prints “Mar. 1, 2027” but labels the line “(Fall 2026)”; the intake this date belongs to is not clear, so it is shown as not confirmed.', 'Страница пишет «Mar. 1, 2027», но подписывает строку «(Fall 2026)»; к какому набору относится дата, неясно, поэтому она помечена как неподтверждённая.'), status='not-confirmed'),
    ],
    fee=fee(None, L('The amount was not found on the pages read.', 'Сумма на прочитанных страницах не найдена.'), MR, V),
    documents=[L('Online application', 'Онлайн-заявка'), L('Transcripts', 'Табели'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('Academic or IELTS Indicator; 6.0 in each band; One Skill Retake accepted.', 'Academic или IELTS Indicator; 6.0 в каждой секции; One Skill Retake принимается.')),
             'toefl': toefl(86, 4.5, PLAIN_TOEFL('86 with 20 in each section', '4.5 with 4.0 in each section')),
             'duolingo': eng(120, note=L('105 in Literacy, Comprehension, Production and Conversation; not accepted for Law.', '105 в Literacy, Comprehension, Production и Conversation; не для Law.')),
             'note': L('CAEL 60; Cambridge C1 180; PTE 58.', 'CAEL 60; Cambridge C1 180; PTE 58.')},
    sat=NOSAT,
    intlQuals=UZ('Certificate of Secondary Education (O‘rta Ma’lumot To‘g‘risida Shahodatnoma / Attestat o Srednem Obrazovanii). For University 1: a minimum average of 3 (70%) over English or first-language literature, mathematics and two more academic courses, with no less than 2 (60%) in each.',
                 'Аттестат о среднем образовании (O‘rta Ma’lumot To‘g‘risida Shahodatnoma / Attestat o Srednem Obrazovanii). Для University 1: средний балл не ниже 3 (70%) по английскому или литературе на родном языке, математике и ещё двум академическим предметам, и не ниже 2 (60%) по каждому.'),
    costs=costs('2026–2027', MT, V, L('International undergraduates, tuition per credit hour', 'Иностранные студенты бакалавриата, плата за кредитный час'),
        [(L('Arts, per credit hour', 'Arts, за кредитный час'), 689.23, B), (L('Engineering, per credit hour', 'Engineering, за кредитный час'), 683.43, B), (L('Nursing, per credit hour', 'Nursing, за кредитный час'), 723.22, B),
         (L('Science, per credit hour', 'Science, за кредитный час'), 804.00, B), (L('Fine Arts, per credit hour', 'Fine Arts, за кредитный час'), 825.26, B), (L('Management (Asper), per credit hour', 'Management (Asper), за кредитный час'), 895.68, B),
         (L('Residence and meal plan packages (no year stated)', 'Пакеты общежития с питанием (год не указан)'), {'min': 10500, 'max': 17000}, E)],
        L('C$683.43–C$895.68 per credit hour (2026–27)', 'C$683.43–C$895.68 за кредитный час (2026–27)'),
        L('International tuition is charged per credit hour (2026–27): from C$683.43 (Engineering) to C$895.68 (Asper). The university also states an average first-year international tuition and fees of C$28,000, without a year', 'Плата для иностранцев — за кредитный час (2026–27): от C$683.43 (инженерия) до C$895.68 (Asper). Университет также называет средние обучение и сборы иностранного первокурсника — C$28,000, без указания года'),
        L('tuition rates only; fees, housing and food extra', 'только ставки платы; сборы, жильё и питание — сверх этого'),
        note=L('Registrar page last updated 18 June 2026. University 1 students pay by the teaching unit of each course. A yearly figure is not computed here because the full-time number of credit hours was not read.', 'Страница регистратора обновлена 18 июня 2026. Студенты University 1 платят по подразделению каждого курса. Годовая сумма здесь не считается, потому что полная очная нагрузка в кредитных часах не прочитана.')),
    merit=[award('International Excellence Entrance Scholarship', None, L('Exceptional international students entering a direct-entry programme; three awards', 'Выдающиеся иностранные студенты, поступающие на программу прямого зачисления; три стипендии'),
                 application=L('Application by 1 December 2026', 'Заявка до 1 декабря 2026'), basis='merit', source=MS, verified=V, note=L('The value is not stated on the page read.', 'Сумма на прочитанной странице не указана.')),
           award('University of Manitoba General Entrance Scholarships', None, L('All new students admitted with transcripts', 'Все новые студенты, принятые с табелями'),
                 application=AUTO, basis='merit', source=MS, verified=V, note=L('Amounts were not read.', 'Суммы не прочитаны.'))],
    need={'availableToInternational': False, 'note': L('“International students in their first year of post-secondary study in Canada are not eligible to apply to the general bursary program.”', '«Иностранные студенты на первом году обучения в Канаде не могут подавать заявку на общую программу грантов.»'), 'source': MS, 'verified': V},
    sources=[(L('UM — entrance awards and dates', 'UM — вступительные стипендии и даты'), MS), (L('UM — undergraduate tuition 2026-27', 'UM — плата бакалавриата 2026–27'), MT),
             (L('UM — international tuition and supports', 'UM — плата и поддержка для иностранцев'), MI), (L('UM — English proficiency', 'UM — требования к английскому'), ME), (L('UM — international admission requirements', 'UM — требования для иностранцев'), MR)],
    checked=[L('English requirements', 'требования к английскому'), L('tuition rates', 'ставки платы'), UZU, L('scholarships', 'стипендии')],
    unconfirmed=[L('application deadline for autumn 2027', 'срок подачи на осень 2027'), L('application fee', 'сбор за заявку'), TESTS, MAJORS, FOUND]))

# --------------------------------------------------------------- Guelph
G = 'https://www.uoguelph.ca/admission/undergraduate/'
GD = G + 'apply/deadlines'
GF = G + 'international/funding'
GE = G + 'international/english-proficiency'
GR = G + 'international/requirements'
records.append(R('university-of-guelph', 'University of Guelph', 'U of G', 'Guelph', 'ON', PUB,
    L('A university about an hour from Toronto with 75+ majors, known for agriculture, veterinary medicine and life sciences. International tuition rises by no more than 5% a year after entry.',
      'Университет примерно в часе от Торонто, 75+ специальностей; известен аграрными науками, ветеринарией и науками о жизни. После поступления плата для иностранцев растёт не больше чем на 5% в год.'),
    ['business', 'computer-science', 'engineering', 'mathematics', 'arts'],
    {'website': 'https://www.uoguelph.ca/', 'admissions': GD, 'international': GR, 'portal': 'https://www.ouac.on.ca/', 'scholarships': GF, 'aid': GF, 'programs': GF, 'cost': GF},
    verified=V, aliases=['U of G', 'UofG', 'Guelph'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Bachelor of Commerce', 'computer-science': 'Bachelor of Computing', 'engineering': 'Bachelor of Engineering',
                        'mathematics': 'Bachelor of Mathematics', 'arts': 'Bachelor of Fine Arts'}, GF, V),
    platforms=[OUAC],
    rounds=[
        D(L('Documents for early admission consideration (students outside Canada)', 'Документы для раннего рассмотрения (учащиеся вне Канады)'), 'priority', '2027-02-01', GD,
          L('Applications to Landscape Architecture close on 1 February.', 'Приём на Landscape Architecture закрывается 1 февраля.'), note=NOYEAR),
        D(L('Proof of English proficiency (soft deadline)', 'Подтверждение английского (мягкий срок)'), 'documents', '2027-03-01', GD, note=NOYEAR),
        D(L('Dr. Franco J. Vaccarino President’s Scholarship application', 'Заявка на Dr. Franco J. Vaccarino President’s Scholarship'), 'scholarship', '2027-03-08', GF),
        D(L('Application deadline for fall 2027 (high school students outside Canada)', 'Срок подачи на осень 2027 (учащиеся школ вне Канады)'), 'regular', '2027-05-15', GD, L('Documents due 22 May.', 'Документы — до 22 мая.'), note=NOYEAR),
        D(L('Accept the offer of admission', 'Принять предложение о зачислении'), 'reply', '2027-06-01', GD, L('The C$2,000 tuition deposit is due 15 June.', 'Депозит C$2,000 — до 15 июня.'), note=NOYEAR),
    ],
    fee=fee(159, OUAC_FEE('Guelph (C$150 for Veterinary Medicine)', 95), OUAC_SRC, V),
    documents=[L('OUAC application', 'Заявка OUAC'), L('Transcripts and graduation documents', 'Табели и документы об окончании школы'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения'),
               L('Student Profile Form for some programmes', 'Student Profile Form для некоторых программ')],
    english={'ielts': eng(6.5, note=L('Academic; no band below 6.', 'Academic; ни одной секции ниже 6.')),
             'toefl': toefl(89, 4.5, PLAIN_TOEFL('89 with no section below 21', '4.5 with no section below 4.0', L('Scores must be no more than two years old at the time of application.', 'Результаты — не старше двух лет на момент подачи.'))),
             'duolingo': eng(110, note=L('Subscores may be considered.', 'Подбаллы могут учитываться.')),
             'note': L('CAEL 70; PTE 60 (60 in each part); Cambridge C1/C2 176 (no band below 169).', 'CAEL 70; PTE 60 (60 в каждой части); Cambridge C1/C2 176 (ни одной части ниже 169).')},
    sat=test('optional', L('“SAT/ACT is optional for the fall 2027 admission cycle”; scores are considered only if they help, and applicants without them are not penalized.', '«SAT/ACT необязательны в цикле на осень 2027»; баллы учитывают, только если они помогают, а без них абитуриенты не в проигрыше.'),
             cycle='Fall 2027', source=GR, verified=V),
    intlQuals=UZ('the page refers to Russia: Certificate of (Completed) Secondary Education (Attestat) with good grades.', 'страница отсылает к России: аттестат о (полном) среднем образовании с хорошими оценками.'),
    costs=costs('2025–2026', GF, V, L('International first-year students; university estimate', 'Иностранные первокурсники; оценка университета'),
        [(L('Tuition, most bachelor’s degrees (Arts, Science, Mathematics, Fine Arts and others)', 'Обучение, большинство программ (Arts, Science, Mathematics, Fine Arts и другие)'), 46780, E), (L('Tuition, Commerce', 'Обучение, Commerce'), 57112, E),
         (L('Tuition, Computing', 'Обучение, Computing'), 58807, E), (L('Tuition, Engineering', 'Обучение, Engineering'), 66099, E),
         (L('Compulsory fees', 'Обязательные сборы'), {'min': 1748, 'max': 2297}, E), (L('Health insurance (UHIP)', 'Страховка (UHIP)'), 948, E),
         (L('Residence room', 'Комната в общежитии'), {'min': 8387, 'max': 11742}, E), (L('Meal plan', 'Питание'), {'min': 5750, 'max': 7850}, E),
         (L('Textbooks', 'Учебники'), 1400, E), (L('Personal expenses', 'Личные расходы'), 2500, E)],
        L('C$46,780–C$66,099 tuition a year (2025–26 estimates)', 'C$46,780–C$66,099 — обучение за год (оценки 2025–26)'),
        L('The page gives two different yearly totals: C$67,513–C$92,836 in its text and C$64,589–C$88,498 in its table; both are based on 2025–26', 'Страница даёт две разные годовые суммы: C$67,513–C$92,836 в тексте и C$64,589–C$88,498 в таблице; обе по данным 2025–26'),
        L('tuition in the main figure; fees, insurance, residence, meals, books and personal costs listed separately', 'в основной сумме — обучение; сборы, страховка, общежитие, питание, книги и личные расходы указаны отдельно'), status='previous-cycle',
        note=L('“Estimated costs are based on the 2025-26 academic year.” Veterinary Medicine (DVM) is C$101,634. Co-op adds C$405 a term. The C$2,000 tuition deposit is non-refundable.', '«Оценки основаны на 2025-26 учебном году». Ветеринария (DVM) — C$101,634. Co-op добавляет C$405 за семестр. Депозит C$2,000 не возвращается.')),
    merit=[award('President’s International Entrance Scholarship', L('C$32,500–C$42,500 over four years', 'C$32,500–C$42,500 за четыре года'), L('International students by admission average (70% and above)', 'Иностранные студенты по среднему баллу при поступлении (от 70%)'),
                 application=AUTO, renewable=True, basis='merit', source=GF, verified=V,
                 note=L('Year 1: C$20,000 (95%+), C$16,000 (90–94.9%), C$13,000 (85–89.9%) or C$10,000 (70–84.9%); then C$7,500 a year in years 2–4 with full-time study and an 80% average.', '1-й год: C$20,000 (95%+), C$16,000 (90–94,9%), C$13,000 (85–89,9%) или C$10,000 (70–84,9%); затем C$7,500 в год на 2–4 курсах при очной учёбе и среднем 80%.')),
           award('Dr. Franco J. Vaccarino President’s Scholarship', money(42500), L('Two top international fee-paying students with academic excellence and contributions to school and community', 'Двое лучших иностранных студентов с академическими успехами и вкладом в школу и сообщество'),
                 application=L('Application by 8 March 2027', 'Заявка до 8 марта 2027'), basis='merit', source=GF, verified=V,
                 note=L('Includes guaranteed on-campus residence and first-choice room in first year. A competitive award; it is not counted as received.', 'Включает гарантированное общежитие и комнату по первому выбору на первом курсе. Конкурсная стипендия; как полученная не учитывается.'))],
    need={'note': NOT_NEED},
    sources=[(L('Guelph — dates and deadlines', 'Guelph — даты и сроки'), GD), (L('Guelph — international costs and scholarships', 'Guelph — стоимость и стипендии для иностранцев'), GF),
             (L('Guelph — English proficiency', 'Guelph — требования к английскому'), GE), (L('Guelph — international requirements', 'Guelph — требования для иностранцев'), GR), (L('OUAC — undergraduate fees', 'OUAC — сборы бакалавриата'), OUAC_SRC)],
    checked=[L('deadlines', 'сроки'), L('English requirements', 'требования к английскому'), L('test policy', 'политика тестов'), UZU, L('scholarships', 'стипендии')],
    unconfirmed=[L('tuition for 2026–27 and 2027–28', 'плата на 2026–27 и 2027–28'), MAJORS, FOUND]))

# --------------------------------------------------------------- Carleton
CA = 'https://admissions.carleton.ca/'
CD = CA + 'deadlines/'
CC = CA + 'scholarships/usa-and-international-costs/'
CE = CA + 'esl/'
CI = CA + 'apply-now-international-students/'
CH = CA + 'international/'
records.append(R('carleton-university', 'Carleton University', 'Carleton', 'Ottawa', 'ON', PUB,
    L('A university in Ottawa, Canada’s capital, known for public affairs, journalism, engineering and computer science. International tuition is frozen for 2026/27 to 2028/29.',
      'Университет в Оттаве, столице Канады; известен госуправлением, журналистикой, инженерией и компьютерными науками. Плата для иностранцев заморожена на 2026/27–2028/29.'),
    ['humanities', 'business', 'computer-science', 'engineering', 'economics', 'social-sciences', 'arts'],
    {'website': 'https://carleton.ca/', 'admissions': CD, 'international': CH, 'portal': 'https://carleton360.carleton.ca/', 'scholarships': CC, 'aid': CC, 'programs': CC, 'cost': CC},
    verified=V, aliases=['Carleton', 'CU'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'humanities': 'Bachelor of Arts', 'business': 'Bachelor of Commerce', 'computer-science': 'Bachelor of Computer Science', 'engineering': 'Bachelor of Engineering',
                        'economics': 'Bachelor of Economics', 'social-sciences': 'Bachelor of Public Affairs and Policy Management', 'arts': 'Bachelor of Music'}, CC, V),
    platforms=[L('Carleton360 (direct application for international students)', 'Carleton360 (прямая заявка для иностранцев)'), OUAC],
    rounds=[
        D(L('Prestige Scholarship application', 'Заявка на Prestige Scholarship'), 'scholarship', '2027-03-01', CD),
        D(L('Programme-specific application deadlines', 'Сроки подачи отдельных программ'), 'regular', '2027-03-01', CD, L('Some programmes have early deadlines and extra admission material, due 5 March 2027.', 'У некоторых программ ранние сроки и дополнительные материалы — до 5 марта 2027.')),
        D(L('Main application deadline for international students (transcripts from outside Canada or the US)', 'Основной срок подачи для иностранцев (документы не из Канады и США)'), 'regular', '2027-04-01', CD,
          L('Applications are reviewed on a rolling basis; applying early is encouraged.', 'Заявки рассматривают по мере поступления; подать раньше — лучше.')),
    ],
    fee=fee(100, L('Direct application in Carleton360, covering two programmes at Carleton; non-refundable. Through OUAC Carleton states C$166 for three choices, while OUAC’s own page gives a base fee of C$159 plus a C$85 document-evaluation fee for Carleton.',
                   'Прямая заявка в Carleton360 на две программы Carleton; не возвращается. Через OUAC Carleton указывает C$166 за три выбора, а на странице самого OUAC — базовый сбор C$159 плюс C$85 за оценку документов для Carleton.'), CI, V),
    documents=[L('Carleton360 application (or OUAC)', 'Заявка в Carleton360 (или OUAC)'), L('Transcripts from the final years of school, diploma and exam results', 'Табели последних лет школы, аттестат и результаты экзаменов'),
               L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('Academic; 6.0 in each band.', 'Academic; 6.0 в каждой секции.')),
             'toefl': toefl(86, 4.5, PLAIN_TOEFL('86 with 22 in Writing and Speaking and 20 in Reading and Listening', '4.5 with 4.0 in each band')),
             'duolingo': eng(120, note=L('110 in Writing, Reading and Speaking; 105 in Listening.', '110 в Writing, Reading и Speaking; 105 в Listening.')),
             'note': L('PTE 55 (47 in each skill); CAEL 70; Cambridge 176 (169 in each part). Lower scores can lead to an offer with required ESL courses.', 'PTE 55 (47 в каждом навыке); CAEL 70; Cambridge 176 (169 в каждой части). При более низких баллах возможно предложение с обязательными курсами ESL.')},
    sat=test(None, L('Not stated for national school systems such as Uzbekistan’s on the pages read.', 'Для национальных школьных систем, как узбекская, на прочитанных страницах не указано.')),
    intlQuals=UZ('not named. For other national curricula Carleton expects secondary-school graduation, normally after 12 years of study; where the system is shorter, one year of university study may be required.', 'не назван отдельно. Для других национальных программ Carleton ожидает окончания школы, обычно после 12 лет обучения; если система короче, может потребоваться год учёбы в университете.'),
    costs=costs('2026–2027 to 2028–2029 (frozen)', CC, V, L('International undergraduates, tuition per academic year (September–April)', 'Иностранные студенты бакалавриата, плата за учебный год (сентябрь–апрель)'),
        [(L('Tuition, Arts, Science, Economics, Mathematics, Music, Public Affairs and other programmes', 'Обучение, Arts, Science, Economics, Mathematics, Music, Public Affairs и другие'), 39000, B),
         (L('Tuition, Accounting, Commerce, Entrepreneurship, Media Production and Design', 'Обучение, Accounting, Commerce, Entrepreneurship, Media Production and Design'), 45000, B),
         (L('Tuition, Architecture, Computer Science, Cyber Security, Data Science, Engineering, Industrial Design, Information Technology', 'Обучение, Architecture, Computer Science, Cyber Security, Data Science, Engineering, Industrial Design, Information Technology'), 55000, B),
         (L('Miscellaneous fees incl. UHIP and U-Pass (2026, approximate)', 'Прочие сборы, включая UHIP и U-Pass (2026, примерно)'), 2500, E),
         (L('On-campus residence and meal plan, 8 months', 'Общежитие на кампусе с питанием, 8 месяцев'), 14010, E), (L('Books and supplies', 'Книги и материалы'), 1400, E), (L('Personal expenses', 'Личные расходы'), 3000, E)],
        L('C$39,000–C$55,000 tuition a year, frozen to 2028–29', 'C$39,000–C$55,000 — обучение за год, заморожено до 2028–29'),
        L('Tuition is C$39,000, C$45,000 or C$55,000 a year by programme, frozen for 2026/27, 2027/28 and 2028/29; miscellaneous fees about C$2,500; residence with meals C$14,010', 'Обучение — C$39,000, C$45,000 или C$55,000 в год в зависимости от программы, заморожено на 2026/27, 2027/28 и 2028/29; прочие сборы около C$2,500; общежитие с питанием — C$14,010'),
        L('tuition only in the main figure; fees, residence, books and personal costs listed separately', 'в основной сумме — только обучение; сборы, общежитие, книги и личные расходы указаны отдельно'), tuition=39000,
        note=L('“Tuition fees are frozen in the following academic years: 2026/2027, 2027/2028, 2028/2029.” Miscellaneous fees are not frozen. Nursing is C$39,000 with about C$4,300 in fees. A C$2,000 tuition deposit is required before the PAL.', '«Плата заморожена на 2026/2027, 2027/2028, 2028/2029». Прочие сборы не заморожены. Nursing — C$39,000 и около C$4,300 сборов. До получения PAL нужен депозит C$2,000.')),
    merit=[award('Carleton Entrance Scholarships', L('C$1,000–C$3,000 a year', 'C$1,000–C$3,000 в год'), L('High school applicants with an admission average of 85% or better who meet the academic and English requirements', 'Выпускники школ со средним баллом от 85%, выполнившие академические требования и требования к английскому'),
                 application=AUTO, renewable=True, basis='merit', source=CC, verified=V, note=L('Renewable with an A- standing (annual GPA 10.0); can be regained.', 'Продлевается при оценке A- (годовой GPA 10.0); можно вернуть позже.')),
           award('President’s Welcome Award for International Students', L('C$2,000–C$5,000, first year only', 'C$2,000–C$5,000, только первый год'), L('International students applying for September 2027, entering directly from high school and paying international fees', 'Иностранцы, поступающие на сентябрь 2027 сразу после школы и платящие международный тариф'),
                 application=AUTO, renewable=False, basis='merit', source=CC, verified=V, note=L('By grades at admission; in addition to other entrance scholarships.', 'По оценкам при поступлении; в дополнение к другим вступительным стипендиям.')),
           award('Prestige Scholarships', L('C$5,000–C$14,178 a year', 'C$5,000–C$14,178 в год'), L('Applicants with an admission average over 90%', 'Абитуриенты со средним баллом выше 90%'),
                 application=L('Application by 1 March 2027', 'Заявка до 1 марта 2027'), renewable=True, basis='merit', source=CC, verified=V, note=L('Renewable with a minimum A- (10.0 GPA) in full-time studies.', 'Продлевается при не ниже A- (GPA 10.0) и очной учёбе.'))],
    need={'note': NOT_NEED},
    sources=[(L('Carleton — dates and deadlines', 'Carleton — даты и сроки'), CD), (L('Carleton — how international students apply', 'Carleton — как подают иностранцы'), CI),
             (L('Carleton — USA and international costs', 'Carleton — стоимость для США и иностранцев'), CC), (L('Carleton — English language requirements', 'Carleton — требования к английскому'), CE),
             (L('Carleton — international admission requirements', 'Carleton — требования для иностранцев'), CH)],
    checked=[L('2027 deadlines', 'сроки 2027'), L('application fee', 'сбор за заявку'), L('English requirements', 'требования к английскому'), L('tuition', 'плата за обучение'), L('scholarships', 'стипендии')],
    unconfirmed=[TESTS, MAJORS, FOUND]))
annual['carleton-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 39000, 'max': 55000, 'note': 'Tuition frozen for 2026/27–2028/29 by programme; fees about C$2,500, housing and food extra'}

# --------------------------------------------------------------- York
Y = 'https://futurestudents.yorku.ca/'
YD = Y + 'requirements/deadlines'
YA = Y + 'requirements/apply'
YT = Y + 'financing-your-degree/tuition-fees'
YS = Y + 'financing-your-degree/international-scholarships'
YE = Y + 'requirements/language-tests'
YC = Y + 'requirements/hs-international-countries'
YI = Y + 'your-application/how-apply/international-student'
records.append(R('york-university', 'York University', 'York', 'Toronto', 'ON', PUB,
    L('A large university in Toronto with the Keele campus, the bilingual Glendon campus and a campus in Markham; home of the Schulich School of Business and the Lassonde School of Engineering.',
      'Большой университет в Торонто: кампус Keele, двуязычный кампус Glendon и кампус в Маркеме; здесь Schulich School of Business и Lassonde School of Engineering.'),
    ['business', 'computer-science', 'engineering', 'arts', 'medicine'],
    {'website': 'https://www.yorku.ca/', 'admissions': YD, 'international': YI, 'portal': YA, 'scholarships': YS, 'aid': YS, 'programs': YD, 'cost': YT},
    verified=V, aliases=['York', 'YorkU', 'York U', 'Schulich', 'Glendon'], campuses=['Keele', L('Glendon (bilingual)', 'Glendon (двуязычный)'), 'Markham'],
    programsBasis='evidence', programsStatus=P, programNote=PARTIAL,
    programEvidence=ev({'business': 'Schulich School of Business (BBA)', 'computer-science': ('Computer Science', YT), 'engineering': ('Engineering', YT),
                        'arts': 'School of the Arts, Media, Performance & Design (BFA Music, Visual Arts)', 'medicine': 'Nursing (Direct Entry)'}, YD, V),
    platforms=[L('York University application (international, applying only to York)', 'Заявка York University (иностранцы, подающие только в York)'), OUAC],
    rounds=[
        D(L('Schulich BBA: application deadline', 'Schulich BBA: срок подачи'), 'regular', '2027-01-15', YD, L('Schulich does not accept applications after 15 January; its supplementary application is due 1 February 2027. Social Work also closes on 15 January.', 'Schulich не принимает заявки после 15 января; дополнительная заявка — до 1 февраля 2027. Social Work тоже закрывается 15 января.')),
        D(L('President’s International Scholarship of Excellence: student application', 'President’s International Scholarship of Excellence: заявка студента'), 'scholarship', '2027-01-27', YS, L('Nominee’s deadline 4 February 2027.', 'Срок для номинанта — 4 февраля 2027.')),
        D(L('Direct Entry Nursing application deadline', 'Срок подачи Direct Entry Nursing'), 'regular', '2027-02-01', YD, note=NOYEAR),
        D(L('Application deadline for international students (fall 2027)', 'Срок подачи для иностранцев (осень 2027)'), 'regular', '2027-03-24', YD,
          L('Applications are still accepted and assessed until each programme is full; apply early for study permit time.', 'Заявки принимают и рассматривают и позже, пока программа не заполнена; подать раньше лучше из-за разрешения на учёбу.')),
    ],
    fee=fee(140, L('York University application, non-refundable, by Visa, Visa Debit or MasterCard. Ontario high school students apply through OUAC (base fee C$159 plus a C$90 document-evaluation fee for York for applicants outside Ontario schools; Schulich BBA adds C$50).',
                   'Заявка York University, не возвращается, оплата Visa, Visa Debit или MasterCard. Ученики школ Онтарио подают через OUAC (базовый сбор C$159 и C$90 за оценку документов для York у поступающих не из школ Онтарио; Schulich BBA — ещё C$50).'), YA, V),
    documents=[L('York University application (or OUAC)', 'Заявка York University (или OUAC)'), L('Transcripts and school documents', 'Табели и школьные документы'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения'),
               L('Supplementary application for Schulich, AMPD, Creative Writing and some other programmes', 'Дополнительная заявка для Schulich, AMPD, Creative Writing и некоторых других программ')],
    english={'ielts': eng(6.5, note=L('Academic only; One Skill Retake accepted.', 'Только Academic; One Skill Retake принимается.')),
             'toefl': toefl(88, 4.5, PLAIN_TOEFL('88', '4.5', L('Home Edition accepted.', 'Home Edition принимается.'))),
             'duolingo': eng(120), 'note': L('PTE 60; CAEL 60; Cambridge C1 Advanced with no score below 180. Some programmes ask for more.', 'PTE 60; CAEL 60; Cambridge C1 Advanced, ни одной части ниже 180. Некоторые программы требуют больше.')},
    sat=test('conditional', L('Required (SAT 1170 or ACT 24) only of students who are not in a recognized accredited U.S. curriculum or have not studied in a formal high-school setting; not required from accredited U.S. curricula. Applicants from national systems such as Uzbekistan’s are assessed on their school certificate.',
                              'Требуется (SAT 1170 или ACT 24) только от тех, кто учится не по признанной аккредитованной американской программе или не в обычной школе; от аккредитованных американских программ не требуется. Поступающих из национальных систем, как узбекская, оценивают по школьному аттестату.'),
             label=L('SAT/ACT required only for some school systems', 'SAT/ACT нужны только для некоторых школьных систем'), source=YI, verified=V),
    intlQuals=UZ('Attestat o Srednem Obrazovanii (Certificate of Secondary Education).', 'Attestat o Srednem Obrazovanii (аттестат о среднем образовании).'),
    costs=costs('2026–2027', YT, V, L('International undergraduates, full course load; approximate university figures', 'Иностранные студенты бакалавриата, полная нагрузка; примерные суммы университета'),
        [(L('Tuition, most programmes (Arts and Sciences)', 'Обучение, большинство программ (Arts and Sciences)'), 40000, E), (L('Tuition, Business programmes', 'Обучение, бизнес-программы'), {'min': 40000, 'max': 44000}, E),
         (L('Tuition, Computer Science', 'Обучение, Computer Science'), 38000, E), (L('Tuition, Design', 'Обучение, Design'), 40000, E), (L('Tuition, Engineering', 'Обучение, Engineering'), 47000, E),
         (L('Residence', 'Общежитие'), {'min': 9000, 'max': 13000}, E), (L('Meal plan', 'Питание'), {'min': 4350, 'max': 8000}, E),
         (L('Health and dental, incl. UHIP (international students)', 'Медицинский и стоматологический план, включая UHIP (иностранцы)'), 1151, E), (L('Personal expenses', 'Личные расходы'), 4200, E)],
        L('About C$38,000–C$47,000 tuition a year (2026–27)', 'Около C$38,000–C$47,000 — обучение за год (2026–27)'),
        L('Approximate tuition for fall/winter 2026–27: C$38,000 (Computer Science) to C$47,000 (Engineering); residence C$9,000–C$13,000 and meals C$4,350–C$8,000', 'Примерная плата за осень/зиму 2026–27: от C$38,000 (Computer Science) до C$47,000 (инженерия); общежитие C$9,000–C$13,000, питание C$4,350–C$8,000'),
        L('tuition only in the main figure; housing, meals, health plan and personal costs listed separately', 'в основной сумме — только обучение; жильё, питание, медицинский план и личные расходы указаны отдельно'), tuition=40000,
        note=L('“Fees listed are approximate values based on a full course load.” Course and programme fees of about C$40–C$50 per credit are extra.', '«Суммы примерные, для полной нагрузки». Сборы за курсы и программы — около C$40–C$50 за кредит — сверх этого.')),
    merit=[award('President’s International Scholarship of Excellence (PISE)', L('C$180,000 (C$45,000 a year for four years)', 'C$180,000 (C$45,000 в год на четыре года)'), L('International high school applicants with academic excellence, volunteer and extracurricular commitment and leadership', 'Иностранные выпускники школ с академическими успехами, волонтёрством, внеучебной активностью и лидерством'),
                 application=L('Student application by 27 January 2027; nominee’s deadline 4 February 2027', 'Заявка студента до 27 января 2027; срок номинанта — 4 февраля 2027'), renewable=True, basis='merit', source=YS, verified=V,
                 note=L('Cannot be combined with entrance scholarships. A competitive award; it is not counted as received.', 'Не совмещается со вступительными стипендиями. Конкурсная стипендия; как полученная не учитывается.')),
           award('York International Entrance Scholarships', L('C$5,000 one-time to C$37,500 over four years (2026/27 table)', 'От C$5,000 разово до C$37,500 за четыре года (таблица 2026/27)'), L('International high school applicants by final admission average (75% and above)', 'Иностранные выпускники школ по итоговому среднему баллу (от 75%)'),
                 application=AUTO, renewable=True, basis='merit', source=YS, verified=V,
                 note=L('The table on the page is for Fall/Winter 2026/27 “only”: Scholarship of Distinction C$15,000 + C$7,500 a year (C$37,500), Merit Award (80–89.9%) C$10,000 + C$5,000 a year (C$25,000), Entrance Award (75–79.9%) C$5,000 once. Renewable with a 7.5 GPA (B+). The values for fall 2027 are not yet published.',
                        'Таблица на странице — «только» для осени/зимы 2026/27: Scholarship of Distinction C$15,000 + C$7,500 в год (C$37,500), Merit Award (80–89,9%) C$10,000 + C$5,000 в год (C$25,000), Entrance Award (75–79,9%) C$5,000 разово. Продлеваются при GPA 7.5 (B+). Суммы для осени 2027 ещё не опубликованы.'))],
    need={'note': NOT_NEED},
    sources=[(L('York — application deadlines', 'York — сроки подачи'), YD), (L('York — how to apply and fee', 'York — как подать и сбор'), YA), (L('York — tuition and fees 2026-27', 'York — плата 2026–27'), YT),
             (L('York — international scholarships', 'York — стипендии для иностранцев'), YS), (L('York — English language tests', 'York — тесты по английскому'), YE),
             (L('York — requirements by country', 'York — требования по странам'), YC), (L('York — international applicants and SAT/ACT', 'York — иностранные абитуриенты и SAT/ACT'), YI)],
    checked=[L('2027 deadlines', 'сроки 2027'), L('application fee', 'сбор за заявку'), L('English requirements', 'требования к английскому'), L('test policy', 'политика тестов'), UZU, L('tuition', 'плата за обучение')],
    unconfirmed=[L('entrance scholarship values for fall 2027', 'суммы вступительных стипендий на осень 2027'), MAJORS, FOUND]))
annual['york-university'] = {'currency': 'CAD', 'basis': 'tuition', 'min': 38000, 'max': 47000, 'note': 'Approximate tuition 2026–27 for a full load (Computer Science to Engineering); fees, housing and food extra'}

assert len(records) == 9
for r in records:
    if r['id'] == 'universite-laval': r['costs']['breakdown']['period'] = 'semester'
    # Lines that list programmes side by side (or one programme of a range) are not parts of one stated sum: no group.
    for it in r['costs']['items']: it.pop('group', None)
ca50.write(records, annual)
flush()
