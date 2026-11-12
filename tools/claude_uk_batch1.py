# -*- coding: utf-8 -*-
"""UK batch 1 for 2027/28 (12 November 2026): five universities with a direct-entry
bachelor's route at IELTS 6.0 and a published 2027/28 international fee.

Every figure was read on the university's own page on 11–12 November 2026 (text reader,
or a browser where the page is built by script). Foundation and pathway routes are kept
apart from direct entry: they live in notes and separately labelled cost lines, never in
`english.ielts.profiles`, so the match page never treats a Foundation IELTS as a degree
threshold. Uzbek qualifications are recorded only where the university names them.
Writes data/universities.uk.js, data/match.js and data/i18n/ru.js (via flush())."""
import copy, io, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from us200_std import L as _L, TR, flush, ROOT


def L(en, ru):
    """Keep the dictionary's existing Russian for a string that is already translated."""
    return _L(en, TR.get(en, ru))

DAY = '2026-11-12'
UK = os.path.join(ROOT, 'data/universities.uk.js')
MATCH = os.path.join(ROOT, 'data/match.js')
s = io.open(UK, encoding='utf-8').read()


def block(uid):
    i = s.index('"id": "%s"' % uid); j = s.rfind('{', 0, i); d = 0
    for k in range(j, len(s)):
        d += {'{': 1, '}': -1}.get(s[k], 0)
        if d == 0:
            return json.loads(s[j:k + 1])


tpl = block('university-of-strathclyde')
UCAS = copy.deepcopy(tpl['admissions']['deadlines'])           # three official UCAS 2027-entry dates
FEE = copy.deepcopy(tpl['admissions']['applicationFee'])
DOCS = copy.deepcopy(tpl['admissions']['documents'])


def plain(x):
    if isinstance(x, dict): return {k: plain(v) for k, v in x.items()}
    if isinstance(x, list): return [plain(v) for v in x]
    return str(x) if isinstance(x, str) else x


def record(uid, name, short, city, region, brand, website, intl_url, course, fee27, fee_note, ielts, uz, routes, money_items,
           merit, fr_note, sources, unconfirmed, starts, extra_notes=()):
    prog_name, prog_url, ucas = course
    return plain({
        'id': uid, 'name': name, 'shortName': short, 'country': 'uk', 'city': city, 'region': region,
        'founded': None, 'type': 'Public university', 'institutionKind': 'public', 'degrees': ['bachelor'],
        'brand': brand,
        'description': L('A public university in %s. Applications go through UCAS. This profile is built from one named Business programme with its 2027/28 international fee, the direct-entry IELTS level, the Uzbekistan entry rule where the university publishes one, and the Foundation or pathway route kept separate.' % city,
                         'Государственный университет в %s. Заявки подаются через UCAS. Профиль составлен по одной названной программе Business с платой для иностранцев на 2027/28, уровнем IELTS для прямого приёма, правилом для Узбекистана, если университет его публикует, и отдельно — по маршруту Foundation или pathway.' % {'London': 'Лондоне', 'Coventry': 'Ковентри', 'Sheffield': 'Шеффилде', 'Oxford': 'Оксфорде'}[city]),
        'englishTaught': True, 'languageOfInstruction': 'English',
        'programs': ['business'], 'englishTaughtPrograms': ['business'],
        'programsBasis': 'evidence', 'programsStatus': 'partial',
        'programEvidence': {'business': {'program': prog_name, 'level': 'bachelor', 'language': 'English', 'url': prog_url, 'checked': DAY}},
        'programNote': L('Only one programme was checked in this batch (UCAS code %s); other subjects are not recorded yet, which does not mean the university does not offer them.' % ucas,
                         'В этой партии проверена одна программа (код UCAS %s); другие направления пока не записаны — это не значит, что университет их не предлагает.' % ucas),
        'links': {'website': website, 'internationalAdmissions': intl_url, 'applicationPortal': 'https://www.ucas.com/',
                  'programs': prog_url, 'cost': prog_url},
        'admissions': {
            'platforms': ['UCAS (required for all undergraduate courses)'],
            'deadlines': copy.deepcopy(UCAS),
            'applicationFee': copy.deepcopy(FEE),
            'documents': copy.deepcopy(DOCS),
            'recommendations': 'One academic reference through UCAS', 'essay': 'UCAS personal statement', 'interview': None,
            'notes': [L('Start dates for this programme: %s.' % starts[0], 'Даты начала этой программы: %s.' % starts[1])] + list(routes) + list(extra_notes)},
        'english': {
            'ielts': {'min': None, 'recommended': None, 'varies': True, 'profilesComplete': False,
                      'note': L('Direct entry to Year 1 of the bachelor’s degree only. Foundation, International Year One and pre-sessional English have their own, lower levels and are described in the admission notes, not here.',
                                'Только прямой приём на первый курс бакалавриата. У Foundation, International Year One и подготовительного английского свои, более низкие уровни; они описаны в примечаниях о поступлении, а не здесь.'),
                      'profiles': [{'name': L('Direct entry — %s' % prog_name, 'Прямой приём — %s' % prog_name), 'overall': ielts[0], 'sections': ielts[1],
                                    'scope': L('Year 1 of this bachelor’s programme (direct entry)', 'Первый курс этой программы бакалавриата (прямой приём)'),
                                    'source': ielts[2], 'verified': DAY}]},
            'toefl': {'min': None, 'recommended': None, 'note': 'Not confirmed during this check.'},
            'duolingo': {'min': None, 'recommended': None, 'note': 'Not confirmed during this check.'},
            'waiver': None,
            'note': L('Pre-sessional English is offered for applicants below the required level; it is preparation, not a lower entry threshold.',
                      'Для тех, кто не набрал нужный уровень, есть подготовительный английский (pre-sessional) — это подготовка, а не более низкий порог поступления.')},
        'academics': {'gpa': None,
                      'sat': {'policy': 'not-applicable', 'note': 'Admission is on school-leaving qualifications rather than the SAT or ACT.'},
                      'act': {'policy': 'not-applicable', 'note': 'The US test-optional classification does not apply to this admission route.'},
                      'otherTests': None, 'internationalQualifications': uz},
        'costs': {'breakdown': {'tuition': fee27, 'tuitionText': L('£{:,} a year for {} in 2027/28 — one confirmed course example'.format(fee27, prog_name),
                                                                    '£{:,} в год за {} в 2027/28 — пример одной подтверждённой программы'.format(fee27, prog_name)),
                                'includes': L('the international rate published on the course page; living costs are extra',
                                              'ставка для иностранцев со страницы программы; расходы на жизнь — отдельно'),
                                'published': True},
                  'academicYear': '2027–2028', 'currency': 'GBP',
                  'headline': L('£{:,} tuition a year ({} example)'.format(fee27, prog_name), '£{:,} за обучение в год (пример: {})'.format(fee27, prog_name)),
                  'items': money_items, 'billedSubtotal': None,
                  'totalText': L('£{:,} a year in tuition for this course in 2027/28; living costs are extra'.format(fee27),
                                 '£{:,} в год за обучение на этой программе в 2027/28; расходы на жизнь — отдельно'.format(fee27)),
                  'note': fee_note, 'source': prog_url, 'verified': DAY},
        'scholarships': {'fullRide': {'available': None, 'internationalEligible': None, 'basis': None,
                                      'covers': {'tuition': None, 'housing': None, 'meals': None, 'insurance': None, 'books': None},
                                      'renewable': None, 'competitiveness': None, 'howToApply': None, 'note': fr_note},
                         'merit': merit,
                         'needBased': {'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None,
                                       'forms': [], 'deadlines': None, 'note': 'Not confirmed during this check.'}},
        'sources': sources,
        'verification': {'level': 'partial',
                         'checked': [L('UCAS 2027 dates', 'Сроки UCAS 2027'), L('direct-entry IELTS', 'IELTS для прямого приёма'),
                                     L('2027/28 international tuition (one course)', 'Плата для иностранцев 2027/28 (одна программа)'),
                                     L('Foundation or pathway route', 'Маршрут Foundation или pathway'), L('international scholarships', 'Стипендии для иностранцев')],
                         'unconfirmed': unconfirmed},
        'lastVerified': DAY,
        'photos': {'main': None, 'gallery': [], 'city': None}})


SRC_RU = {
    'Business Management BA — 2027/28 course page': 'Business Management BA — страница программы 2027/28',
    'English language requirements': 'Требования к английскому языку',
    'Uzbekistan — entry requirements': 'Узбекистан — требования к поступлению',
    'Business Management with Foundation Year — 2027/28 view': 'Business Management with Foundation Year — страница 2027/28',
    'BA (Hons) Business Management — 2027-28 course page': 'BA (Hons) Business Management — страница программы 2027-28',
    'Foundation-year option — 2027-28': 'Вариант с foundation year — 2027-28',
    'International scholarships, bursaries and discounts': 'Стипендии, гранты и скидки для иностранцев',
    'Business Management BA — September 2027 course page': 'Business Management BA — страница программы, сентябрь 2027',
    'International Undergraduate Excellence Award — September 2027': 'International Undergraduate Excellence Award — сентябрь 2027',
    'BA (Honours) Business Management — 2027/28': 'BA (Honours) Business Management — 2027/28',
    'International Year One': 'International Year One',
    'Vice-Chancellor’s Awards': 'Vice-Chancellor’s Awards',
    'BA (Hons) Business and Management — fees 2026/27 and 2027/28': 'BA (Hons) Business and Management — плата 2026/27 и 2027/28',
    'Entry requirements — other countries': 'Требования к поступлению — другие страны',
    'Business School International Student Scholarship (January 2027)': 'Стипендия Business School для иностранцев (январь 2027)',
    'International Student Scholarship — September entry (2026 cycle)': 'International Student Scholarship — сентябрьский набор (цикл 2026)',
}


def src(label, url):
    return {'label': L(label, SRC_RU[label]), 'url': url}


NOT_CHECKED_COMMON = [L('founding year', 'Год основания'), L('TOEFL and Duolingo levels', 'Уровни TOEFL и Duolingo'), L('living costs', 'Расходы на жизнь'),
                      L('programmes other than the one named', 'Программы, кроме названной')]
FEE_NOTE_PLAIN = L('Fees are annual; other courses are priced differently. No scholarship is deducted.',
                   'Плата указана за год; другие программы стоят иначе. Стипендии не вычитаются.')

recs = []

# ------------------------------------------------------------------ University of Greenwich
GRE = 'https://www.gre.ac.uk/undergraduate-courses/business-school/business-management-ba-hons/2027'
GRE_EN = 'https://www.gre.ac.uk/international/support-and-help/courses'
GRE_UZ = 'https://www.gre.ac.uk/international/countries/uzbekistan'
GRE_FY = 'https://www.gre.ac.uk/undergraduate-courses/business-school/business-management-ba-hons-ext/2027'
recs.append(record(
    'university-of-greenwich', 'University of Greenwich', 'Greenwich', 'London', 'England', {'c1': '#1F2A44', 'c2': '#0f1626', 'initials': 'UoG'},
    'https://www.gre.ac.uk/', GRE_UZ, ('Business Management, BA (Hons)', GRE, 'N210'), 18525,
    L('Fees are annual; other courses are priced differently. The 2026/27 international fee for this course was £17,975. No scholarship is deducted.',
      'Плата указана за год; другие программы стоят иначе. В 2026/27 плата для иностранцев на этой программе была £17,975. Стипендии не вычитаются.'),
    (6.0, 'Minimum 5.5 in each skill', GRE_EN),
    L('Greenwich’s Uzbekistan page lists for undergraduate entry: Diploma of Academic Lyceum (Akademik Litsey Diplomi) with GPA 4.0 or above, or Diploma of Professional College (Kasb-Hunar Kolleji Diplomi) with GPA 4.0 or above / minimum 60%. The general-school certificate (attestat) is not named, so its acceptance for direct entry is not confirmed. Course pages may set higher or subject-specific requirements.',
      'Страница Greenwich для Узбекистана называет для бакалавриата: диплом академического лицея (Akademik Litsey Diplomi) с GPA 4.0 и выше или диплом профессионального колледжа (Kasb-Hunar Kolleji Diplomi) с GPA 4.0 и выше / не менее 60%. Аттестат общеобразовательной школы не назван, поэтому его пригодность для прямого поступления не подтверждена. Страницы программ могут ставить более высокие или предметные требования.'),
    [L('Foundation route: Business Management with Foundation Year, BA (UCAS N203, 4 years, 64 UCAS points). Its page shows an international fee of £17,975 a year, the same as the 2026/27 rate of the three-year degree, so the year of that figure is not confirmed. The page states no separate IELTS level for the Foundation Year.',
       'Маршрут через Foundation: Business Management with Foundation Year, BA (UCAS N203, 4 года, 64 балла UCAS). Страница показывает плату для иностранцев £17,975 в год — как ставка 2026/27 трёхлетней программы, поэтому год этой суммы не подтверждён. Отдельного уровня IELTS для Foundation Year страница не называет.')],
    [{'label': L('International tuition — Business Management BA, 2027/28', 'Обучение для иностранцев — Business Management BA, 2027/28'), 'amount': 18525},
     {'label': L('International tuition — Business Management BA, 2026/27', 'Обучение для иностранцев — Business Management BA, 2026/27'), 'amount': 17975},
     {'label': L('Business Management with Foundation Year — international fee shown on the page (year not confirmed)', 'Business Management with Foundation Year — плата для иностранцев на странице (год не подтверждён)'), 'amount': 17975}],
    [],
    L('Greenwich’s Uzbekistan page says eligible students can apply for a scholarship or bursary of up to £5,000 towards tuition, but it names no award, conditions or 2027/28 deadline, so no scholarship is recorded.',
      'Страница Greenwich для Узбекистана сообщает, что подходящие студенты могут подать на стипендию или грант до £5,000 на обучение, но не называет награду, условия и срок на 2027/28, поэтому стипендия не записана.'),
    [src('Business Management BA — 2027/28 course page', GRE), src('English language requirements', GRE_EN), src('Uzbekistan — entry requirements', GRE_UZ),
     src('Business Management with Foundation Year — 2027/28 view', GRE_FY)],
    NOT_CHECKED_COMMON + [L('named international scholarship for 2027/28', 'Названная стипендия для иностранцев на 2027/28'),
                          L('acceptance of the school attestat for direct entry', 'Пригодность школьного аттестата для прямого поступления')],
    ('September or January', 'сентябрь или январь')))

# ------------------------------------------------------------------ Coventry University
COV = 'https://www.coventry.ac.uk/course-structure/ug/fbl/business-management-ba-hons/?term=2027-28'
COV_FY = 'https://www.coventry.ac.uk/course-structure/ug/fbl/business-management-ba-hons/?term=2027-28&type=foundation'
COV_UZ = 'https://www.coventry.ac.uk/international-students-hub/entry-requirements/?region=erca&country=Uzbekistan'
COV_SCH = 'https://www.coventry.ac.uk/international-students-hub/apply-for-a-scholarship/'
recs.append(record(
    'coventry-university', 'Coventry University', 'Coventry', 'Coventry', 'England', {'c1': '#003B5C', 'c2': '#00233a', 'initials': 'CU'},
    'https://www.coventry.ac.uk/', COV_UZ, ('BA (Hons) Business Management', COV, 'N221'), 18045,
    L('Fees are annual and Coventry may raise them each year by no more than 5% above inflation; other courses are priced differently. The Group Scholarship below is not deducted here.',
      'Плата указана за год; Coventry может повышать её ежегодно не более чем на 5% сверх инфляции; другие программы стоят иначе. Стипендия Group Scholarship здесь не вычитается.'),
    (6.0, 'At least 5.5 in each component area', COV),
    L('Coventry’s Uzbekistan requirements: the Diploma of Specialised Secondary Education (Shahodatnoma) with an overall average of 4.5 or above (grades of 4 in key subjects) AND a recognised foundation programme. So an Uzbek school or lyceum diploma alone does not give direct entry to Year 1; two or three years of a relevant degree at a listed university may allow Year 2 or top-up entry at the School’s discretion.',
      'Требования Coventry для Узбекистана: диплом о среднем специальном образовании (Shahodatnoma) со средним баллом от 4.5 (оценки 4 по ключевым предметам) И признанная программа Foundation. Значит, один узбекский школьный или лицейский диплом не даёт прямого поступления на первый курс; два-три года профильного бакалавриата в вузе из списка могут позволить поступить на второй курс или top-up по решению школы.'),
    [L('Foundation route: the integrated foundation-year version of this degree (UCAS N7DF) is “not currently available” to international or EU students for 2027-28. Uzbek applicants therefore need a separate recognised foundation programme; its provider and fee are not stated on the pages read.',
       'Маршрут через Foundation: вариант этой программы со встроенным foundation year (UCAS N7DF) на 2027-28 для иностранцев и студентов из ЕС «not currently available». Поэтому абитуриентам из Узбекистана нужна отдельная признанная программа Foundation; её поставщик и стоимость на прочитанных страницах не указаны.')],
    [{'label': L('International tuition — BA (Hons) Business Management, 2027-28', 'Обучение для иностранцев — BA (Hons) Business Management, 2027-28'), 'amount': 18045}],
    [{'id': 'coventry-group-scholarship', 'category': 'merit', 'basis': 'unknown',
      'name': 'Coventry University Group Scholarship',
      'amount': L('£2,000 off the tuition fee each year (£6,000 over a three-year bachelor’s)', '£2,000 скидки с платы за обучение каждый год (£6,000 за трёхлетний бакалавриат)'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('Self-funded international students (excluding EU) starting a bachelor’s or master’s degree in any intake of 2026/27 or 2027/28 at a Coventry University Group UK campus; online courses excluded.',
                       'Иностранные студенты на самофинансировании (кроме ЕС), начинающие бакалавриат или магистратуру в любой набор 2026/27 или 2027/28 на британском кампусе Coventry University Group; онлайн-курсы исключены.'),
      'application': None, 'renewable': L('Applies to each year of the degree', 'Действует каждый год обучения'),
      'note': L('Coventry says all scholarships are subject to availability, visa requirements, specific criteria and competitive application; the application route and deadline are on a separate “full details” page that was not read. Whether it applies after a separate foundation programme is not stated.',
                'Coventry оговаривает, что все стипендии зависят от наличия средств, визовых требований, отдельных критериев и конкурсной заявки; порядок подачи и срок — на отдельной странице «full details», которая не прочитана. Применяется ли она после отдельной программы Foundation, не сказано.'),
      'deadlineScope': 'not-confirmed', 'entryTerm': None, 'entryYear': None, 'source': COV_SCH, 'verified': DAY}],
    L('No award at the level of full tuition was found on the international scholarship page.', 'На странице стипендий для иностранцев награды уровня полной оплаты обучения не найдено.'),
    [src('BA (Hons) Business Management — 2027-28 course page', COV), src('Uzbekistan — entry requirements', COV_UZ),
     src('Foundation-year option — 2027-28', COV_FY), src('International scholarships, bursaries and discounts', COV_SCH)],
    NOT_CHECKED_COMMON + [L('fee of the external foundation programme', 'Стоимость внешней программы Foundation'),
                          L('Group Scholarship application route and deadline', 'Порядок подачи и срок Group Scholarship')],
    ('September 2027 to July 2028 (six intakes)', 'с сентября 2027 по июль 2028 (шесть наборов)')))

# ------------------------------------------------------------------ University of Westminster
WES = 'https://www.westminster.ac.uk/business-and-management-courses/2027-28/september/full-time/business-management-ba-honours'
WES_UZ = 'https://www.westminster.ac.uk/international/your-country/uzbekistan'
WES_IEA = 'https://www.westminster.ac.uk/study/fees-and-funding/scholarships/international-undergraduate-excellence-award-iea-september-2027'
recs.append(record(
    'university-of-westminster', 'University of Westminster', 'Westminster', 'London', 'England', {'c1': '#4B2A7B', 'c2': '#2a1745', 'initials': 'UoW'},
    'https://www.westminster.ac.uk/', WES_UZ, ('Business Management BA Honours', WES, 'N900'), 19000,
    L('Westminster states that international tuition fees stay the same throughout the course once enrolled; other courses are priced differently. No scholarship is deducted.',
      'Westminster сообщает, что после зачисления плата для иностранцев не меняется до конца обучения; другие программы стоят иначе. Стипендии не вычитаются.'),
    (6.0, '5.5 in each component', WES),
    L('Westminster’s Uzbekistan page: the Certificate of Completed Secondary Education (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) with at least 56% gives entry to foundation courses only. Year 1 of a bachelor’s normally needs a recognised International Foundation course from a UK institution (usually 60–65%) or A Levels/IB, so the Uzbek certificate alone does not give direct entry.',
      'Страница Westminster для Узбекистана: аттестат о полном среднем образовании (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) не ниже 56% даёт поступление только на foundation-курсы. На первый курс бакалавриата обычно нужен признанный International Foundation британского вуза (обычно 60–65%) или A Levels/IB, поэтому один узбекский аттестат прямого поступления не даёт.'),
    [L('Foundation route: Westminster’s partner Kaplan International College London offers the International Foundation Certificate (and an International Year One) for students who do not meet direct entry; successful completion leads to Westminster degrees. The Kaplan fee is not published on the Westminster pages read.',
       'Маршрут через Foundation: партнёр Westminster — Kaplan International College London — предлагает International Foundation Certificate (и International Year One) тем, кто не проходит прямой приём; после успешного окончания можно продолжить на программах Westminster. Стоимость Kaplan на прочитанных страницах Westminster не опубликована.')],
    [{'label': L('International tuition — Business Management BA, September 2027', 'Обучение для иностранцев — Business Management BA, сентябрь 2027'), 'amount': 19000}],
    [{'id': 'westminster-iea-2027', 'category': 'merit', 'basis': 'merit',
      'name': 'International Undergraduate Excellence Award (IEA) — September 2027',
      'amount': L('£3,000 towards first-year tuition only', '£3,000 на оплату только первого года обучения'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('Overseas fee status and an offer for a full-time bachelor’s course starting September 2027; grades significantly above the course minimum and passion for the subject. Not for programmes with an integrated foundation year, sponsored students or those with another fee discount.',
                       'Статус иностранного студента и предложение на очный бакалавриат с сентября 2027; оценки значительно выше минимума программы и интерес к предмету. Не для программ со встроенным foundation year, студентов со спонсором и тех, у кого уже есть другая скидка.'),
      'application': L('Separate application on the award page', 'Отдельная заявка на странице награды'),
      'renewable': L('First year only; full fees in later years', 'Только первый год; в следующие годы полная плата'),
      'note': L('The page prints two deadlines: “7 June 2026” in the table and “Monday 7 June 2027 at 5PM” under the apply button. 7 June 2027 is a Monday and matches the September 2027 cycle, but the conflict is kept and the date is not shown as confirmed. Number of awards variable; not guaranteed.',
                'Страница указывает два срока: «7 June 2026» в таблице и «Monday 7 June 2027 at 5PM» под кнопкой подачи. 7 июня 2027 — понедельник и соответствует набору сентября 2027, но противоречие сохранено, и дата не показывается как подтверждённая. Число наград переменное; не гарантирована.'),
      'deadlineScope': 'not-confirmed', 'entryTerm': None, 'entryYear': None, 'source': WES_IEA, 'verified': DAY}],
    L('A full-cost Westminster scholarship for applicants from developing countries is advertised separately, but its page refused the reader, so it is not recorded.',
      'Отдельно рекламируется полная стипендия Westminster для абитуриентов из развивающихся стран, но её страница не открылась, поэтому она не записана.'),
    [src('Business Management BA — September 2027 course page', WES), src('Uzbekistan — entry requirements', WES_UZ), src('International Undergraduate Excellence Award — September 2027', WES_IEA)],
    NOT_CHECKED_COMMON + [L('Kaplan foundation fee', 'Стоимость Foundation в Kaplan'), L('full international scholarship terms', 'Условия полной стипендии для иностранцев')],
    ('September 2027', 'сентябрь 2027')))

# ------------------------------------------------------------------ Sheffield Hallam University
SHU = 'https://www.shu.ac.uk/courses/business-and-management/ba-honours-business-management/full-time'
SHU_IY1 = 'https://www.shu.ac.uk/study-here/international/shucie/international-year-one'
SHU_VC = 'https://www.shu.ac.uk/funding/scholarships-and-bursaries/vice-chancellors-awards'
recs.append(record(
    'sheffield-hallam-university', 'Sheffield Hallam University', 'Sheffield Hallam', 'Sheffield', 'England', {'c1': '#5B2C6F', 'c2': '#331840', 'initials': 'SHU'},
    'https://www.shu.ac.uk/', 'https://www.shu.ac.uk/study-here/international', ('BA (Honours) Business Management', SHU, 'A097'), 18900,
    FEE_NOTE_PLAIN, (6.0, 'Minimum of 5.5 in all skills', SHU),
    L('No Uzbekistan-specific requirements were found. The course page refers international applicants to the country qualifications page; acceptance of an Uzbek school or lyceum diploma for direct entry is not confirmed.',
      'Требований именно для Узбекистана не найдено. Страница программы отсылает иностранцев к странице квалификаций по странам; пригодность узбекского школьного или лицейского диплома для прямого поступления не подтверждена.'),
    [L('Pathway route: International Year One Business Management — a one-year pathway leading into Year Two of the degree (3 years in total), pathway tuition £17,000, IELTS 5.5 with no less than 5.5 in each component. The figures are labelled “Key information 2026/27” for a January 2027 start; a September 2027 start is also listed. This IELTS 5.5 applies to the pathway only, not to direct entry.',
       'Маршрут pathway: International Year One Business Management — годовая программа с переходом на второй курс бакалавриата (всего 3 года), стоимость pathway £17,000, IELTS 5.5 не ниже 5.5 по каждой части. Цифры подписаны «Key information 2026/27» для старта в январе 2027; указан и старт в сентябре 2027. Этот IELTS 5.5 относится только к pathway, а не к прямому приёму.'),
     L('The degree page also mentions a foundation year for applicants who do not yet meet the requirements; its international fee and IELTS level were not confirmed.',
       'Страница программы упоминает и foundation year для тех, кто пока не проходит требования; его стоимость для иностранцев и уровень IELTS не подтверждены.')],
    [{'label': L('International tuition — BA Business Management, 2027/28', 'Обучение для иностранцев — BA Business Management, 2027/28'), 'amount': 18900},
     {'label': L('International Year One Business Management — pathway fee (2026/27 information, January 2027 start)', 'International Year One Business Management — плата за pathway (данные 2026/27, старт в январе 2027)'), 'amount': 17000}],
    [],
    L('The Vice-Chancellor’s Award (up to £4,000 in the first year) is limited to students domiciled in listed countries of South and South-East Asia, Nigeria and Ghana; Uzbekistan is not among them, so no scholarship is recorded for Uzbek applicants.',
      'Vice-Chancellor’s Award (до £4,000 в первый год) доступна только жителям перечисленных стран Южной и Юго-Восточной Азии, Нигерии и Ганы; Узбекистана среди них нет, поэтому для абитуриентов из Узбекистана стипендия не записана.'),
    [src('BA (Honours) Business Management — 2027/28', SHU), src('International Year One', SHU_IY1), src('Vice-Chancellor’s Awards', SHU_VC)],
    NOT_CHECKED_COMMON + [L('Uzbek qualifications for direct entry', 'Узбекские квалификации для прямого поступления'),
                          L('foundation year fee and IELTS', 'Стоимость и IELTS foundation year')],
    ('September 2027', 'сентябрь 2027')))

# ------------------------------------------------------------------ Oxford Brookes University
OBU = 'https://www.brookes.ac.uk/courses/undergraduate/business-and-management'
OBU_EN = 'https://www.brookes.ac.uk/study/international-students/applying-to-arriving/how-to-apply/english-language-requirements'
OBU_CTRY = 'https://www.brookes.ac.uk/study/international-students/your-country/other-countries'
OBU_SEP = 'https://www.brookes.ac.uk/study/funding/international-student-scholarship-september-entry'
OBU_BS = 'https://www.brookes.ac.uk/study/funding/obbs-international-student-scholarship'
recs.append(record(
    'oxford-brookes-university', 'Oxford Brookes University', 'Oxford Brookes', 'Oxford', 'England', {'c1': '#1E1E1E', 'c2': '#0d0d0d', 'initials': 'OBU'},
    'https://www.brookes.ac.uk/', OBU_CTRY, ('BA (Hons) Business and Management', OBU, 'N200'), 20800,
    L('Fees are annual; the 2026/27 international fee for this course was £19,700. Other courses are priced differently. No scholarship is deducted.',
      'Плата указана за год; в 2026/27 плата для иностранцев на этой программе была £19,700. Другие программы стоят иначе. Стипендии не вычитаются.'),
    (6.0, '6.0 in reading and writing, 5.5 in listening and speaking', OBU_EN),
    L('Oxford Brookes has no page for Uzbekistan; its general rule is A-levels, the IB, a recognised foundation programme or equivalent qualifications from the applicant’s country, judged case by case. Acceptance of an Uzbek diploma for direct entry is not confirmed.',
      'У Oxford Brookes нет страницы для Узбекистана; общее правило — A-levels, IB, признанная программа Foundation или равноценные квалификации страны абитуриента, рассматриваются индивидуально. Пригодность узбекского диплома для прямого поступления не подтверждена.'),
    [L('Foundation route: Oxford Brookes runs its own foundation courses for applicants who do not meet direct entry; their fee and IELTS level for this pathway were not confirmed in this check.',
       'Маршрут через Foundation: у Oxford Brookes есть собственные foundation-курсы для тех, кто не проходит прямой приём; их стоимость и уровень IELTS в этой проверке не подтверждены.')],
    [{'label': L('International tuition — BA Business and Management, 2027/28', 'Обучение для иностранцев — BA Business and Management, 2027/28'), 'amount': 20800},
     {'label': L('International tuition — BA Business and Management, 2026/27', 'Обучение для иностранцев — BA Business and Management, 2026/27'), 'amount': 19700}],
    [{'id': 'obu-business-school-international', 'category': 'merit', 'basis': 'unknown',
      'name': 'Oxford Brookes Business School International Student Scholarship',
      'amount': L('£2,000 in each academic year of the degree', '£2,000 в каждый учебный год программы'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('Self-funded international students with an offer for an undergraduate Business School degree (BA/BSc) starting in January 2027 who pay the tuition deposit by 4 December 2026.',
                       'Иностранцы на самофинансировании с предложением на бакалавриат Business School (BA/BSc) со стартом в январе 2027, внёсшие депозит до 4 декабря 2026.'),
      'application': L('No separate application: paying the deposit by the deadline qualifies', 'Отдельной заявки нет: достаточно внести депозит к сроку'),
      'renewable': L('Each academic year of the degree', 'Каждый учебный год программы'),
      'note': L('Only for January 2027 entry; not for a September 2027 start. The general £2,000 International Student Scholarship for September entry is published only for the 2026 cycle, so nothing is recorded for September 2027.',
                'Только для старта в январе 2027; не для начала в сентябре 2027. Общая стипендия £2,000 для сентябрьского набора опубликована только для цикла 2026, поэтому для сентября 2027 ничего не записано.'),
      'deadlineScope': 'not-confirmed', 'entryTerm': None, 'entryYear': None, 'source': OBU_BS, 'verified': DAY}],
    L('No award at the level of full tuition was found.', 'Награды уровня полной оплаты обучения не найдено.'),
    [src('BA (Hons) Business and Management — fees 2026/27 and 2027/28', OBU), src('English language requirements', OBU_EN),
     src('Entry requirements — other countries', OBU_CTRY), src('Business School International Student Scholarship (January 2027)', OBU_BS),
     src('International Student Scholarship — September entry (2026 cycle)', OBU_SEP)],
    NOT_CHECKED_COMMON + [L('Uzbek qualifications for direct entry', 'Узбекские квалификации для прямого поступления'),
                          L('foundation course fee and IELTS', 'Стоимость и IELTS foundation-курса'),
                          L('scholarship for September 2027 entry', 'Стипендия для набора сентября 2027')],
    ('January 2027 or September 2027', 'январь 2027 или сентябрь 2027'),
    [L('Oxford Brookes has paused Student-route visa sponsorship for some countries and programme levels (listed on its other-countries page); Uzbekistan is not named there.',
       'Oxford Brookes приостановил визовое спонсорство Student route для некоторых стран и уровней программ (список на странице other countries); Узбекистан там не назван.')]))

for r in recs:
    assert '"id": "%s"' % r['id'] not in s and ("id: '%s'" % r['id']) not in s, r['id']
body = ',\n'.join(json.dumps(r, ensure_ascii=False, indent=2) for r in recs)
end = s.rindex('\n);')
s2 = s[:end] + ',\n' + body + s[end:]
io.open(UK, 'w', encoding='utf-8').write(s2)

m = io.open(MATCH, encoding='utf-8').read()
anchor = "    'university-of-strathclyde':"
i = m.index(anchor); j = m.index('\n', i)
rows = ''.join("\n    '%s': { currency: 'GBP', basis: 'tuition', min: %d, max: %d, note: '%s' }," % (r['id'], r['costs']['breakdown']['tuition'], r['costs']['breakdown']['tuition'],
                                                                                                  L('%s example for 2027/28; each course is priced separately' % r['programEvidence']['business']['program'], 'Пример %s на 2027/28; каждая программа стоит по-своему' % r['programEvidence']['business']['program']))
               for r in recs)
io.open(MATCH, 'w', encoding='utf-8').write(m[:j] + rows + m[j:])
flush()
print('added', [r['id'] for r in recs])
