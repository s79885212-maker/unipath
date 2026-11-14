# -*- coding: utf-8 -*-
"""Build the ten UK profiles that complement Claude's five verified profiles."""
import json
from pathlib import Path

from claude_uk_common import L, ROOT, block, load_uk, record, src, write

DAY = '2026-11-14'
YEAR = '2027–2028'
BASE = load_uk()
TEMPLATE = block(BASE, 'university-of-strathclyde')
UCAS = 'https://www.ucas.com/events/2027-entry-deadline-for-all-undergraduate-courses-except-those-with-a-15-october-deadline-475546'
NTU_AWARD = 'https://www.ntu.ac.uk/international/scholarships'
ULSTER_AWARD = 'https://www.ulster.ac.uk/scholarships/the-global-excellence-scholarship'

UNKNOWN_UZ = (
    'Uzbekistan: acceptance of the general school certificate, academic lyceum diploma and professional college diploma remains unconfirmed for direct entry, Foundation and International Year One.',
    'Узбекистан: приём школьного аттестата, диплома академлицея и диплома профессионального колледжа не подтверждён для прямого поступления, Foundation и International Year One.',
)
UNKNOWN_AID = (
    'Scholarship terms for September 2027 are unconfirmed, including the amount, eligibility for Uzbek applicants, application process, deadline and duration.',
    'Условия стипендий на сентябрь 2027 не подтверждены: размер, доступность для абитуриентов из Узбекистана, порядок подачи, дедлайн и срок действия.',
)
SCHOOLS = [
    dict(id='nottingham-trent-university', name='Nottingham Trent University', short='NTU',
         city=('Nottingham', 'Ноттингеме'), campus='City Campus', region='England', initials='NTU',
         home='https://www.ntu.ac.uk/', field='business', course='Business BA (Hons)', code='N101',
         url='https://www.ntu.ac.uk/course/nottingham-business-school/ug/ba-hons-business?year=2027',
         fee=19150, fee_url='https://www.ntu.ac.uk/international/tuition-fees', ielts=6.5,
         english_url='https://www.ntu.ac.uk/international/your-application/entry-requirements/english-language-requirements',
         country='https://www.ntu.ac.uk/international/your-country',
         path='https://www.ntu.ac.uk/international/your-application/entry-requirements/foundation-courses',
         foundation=('NTIC City Campus: Foundation Certificate requires at least 11 years of education and UKVI IELTS 5.0 overall. International Year One (starts the degree in Year 2) requires at least 12 years and UKVI IELTS 5.0 overall. Section minima, 2027 fees and acceptance of the three Uzbek credentials are unconfirmed for both routes.',
                     'NTIC City Campus: для Foundation Certificate нужны не менее 11 лет обучения и UKVI IELTS 5.0 overall. Для International Year One (переход на второй курс) нужны не менее 12 лет и UKVI IELTS 5.0 overall. Минимумы по секциям, стоимость 2027 года и приём трёх узбекских документов для обоих маршрутов не подтверждены.'),
         aid=NTU_AWARD, award='ntu-excellence'),
    dict(id='middlesex-university', reused=True),
    dict(id='university-of-salford', name='University of Salford', short='Salford',
         city=('Salford', 'Солфорде'), campus='Peel Park', region='England', initials='UoS',
         home='https://www.salford.ac.uk/', field='computer-science', course='Computer Science BSc (Hons)', code='G400',
         url='https://www.salford.ac.uk/courses/undergraduate/computer-science', fee=18600,
         country='https://www.salford.ac.uk/international/your-country-or-region/salford-and-uzbekistan',
         path='https://www.salford.ac.uk/courses/foundation-year/international-foundation-year',
         foundation=('International Foundation Year at Peel Park: UKVI IELTS Academic 4.5 overall, each component at least 4.0. The Uzbekistan page gives postgraduate requirements; the three school-leaving documents remain unconfirmed for bachelor’s routes.',
                     'International Foundation Year в Peel Park: UKVI IELTS Academic 4.5 overall, от 4.0 по каждой секции. На странице Узбекистана указаны требования для магистратуры; приём трёх школьных документов для бакалаврских маршрутов не подтверждён.'),
         aid='https://www.salford.ac.uk/international/scholarships/global-gold-excellence-scholarship'),
    dict(id='university-of-derby', name='University of Derby', short='Derby',
         city=('Derby', 'Дерби'), campus='Markeaton Street, Derby Campus', region='England', initials='UoD',
         home='https://www.derby.ac.uk/', field='computer-science', course='Computer Science BSc (Hons)', code='I102',
         url='https://www.derby.ac.uk/undergraduate/computing-courses/computer-science-bsc-hons/',
         fee=17500, year='2026–2027',
         fee_note=('The 2027 course requirements are published. The course page lists the 2026/27 fee; the university advertises a general September 2027 rate of £18,100 with exceptions, so the exact amount for this course remains unconfirmed.',
                   'Требования программы на 2027 год опубликованы. Страница программы указывает плату 2026/27. Общая ставка вуза на сентябрь 2027 — £18,100 с исключениями, поэтому точная стоимость этой программы не подтверждена.'),
         extra_sources=[('General international undergraduate tuition', 'Общая стоимость бакалавриата для иностранцев', 'https://www.derby.ac.uk/undergraduate/fees-and-finance/')],
         country='https://www.derby.ac.uk/undergraduate/apply/entry-requirements/international/',
         path='https://www.derby.ac.uk/undergraduate/access-courses/international-foundation-programme/',
         foundation=('International Foundation Programme: IELTS 4.5 overall, 4.0 allowed in at most one skill; £15,975 for 2027/28. This is a separate preparatory course.',
                     'International Foundation Programme: IELTS 4.5 overall, 4.0 допускается максимум по одной секции; £15,975 на 2027/28. Это отдельная подготовительная программа.'),
         foundation_fee=15975, aid='https://www.derby.ac.uk/study/fees-finance/scholarships/'),
    dict(id='birmingham-city-university', name='Birmingham City University', short='BCU',
         city=('Birmingham', 'Бирмингеме'), campus='City Centre', region='England', initials='BCU',
         home='https://www.bcu.ac.uk/', field='computer-science', course='Computer Science BSc (Hons)',
         url='https://www.bcu.ac.uk/courses/computer-science-bsc-hons-2027-28', fee=19220,
         country='https://www.bcu.ac.uk/international',
         foundation=('The course refers applicants who need preparation to Birmingham City University International College (BCUIC). The specific 2027/28 pathway, IELTS and fee are unconfirmed.',
                     'Программа направляет абитуриентов, которым нужна подготовка, в Birmingham City University International College (BCUIC). Конкретный маршрут, IELTS и цена на 2027/28 не подтверждены.'),
         aid='https://www.bcu.ac.uk/international/fees-costs-and-scholarships/ug-scholarships',
         aid_note=('The £5,000 tuition discount (£3,000 in Year 1 and £2,000 in Year 2, no extra application) is for self-funded full-time international undergraduates starting in September 2026 or January 2027. September 2027 terms are unconfirmed.',
                   'Скидка £5,000 (£3,000 на первом курсе и £2,000 на втором, без отдельной заявки) относится к очным иностранным студентам на самофинансировании со стартом в сентябре 2026 или январе 2027. Условия на сентябрь 2027 не подтверждены.')),
    dict(id='bournemouth-university', name='Bournemouth University', short='Bournemouth',
         city=('Poole', 'Пуле'), campus='Talbot Campus', region='England', initials='BU',
         home='https://www.bournemouth.ac.uk/', field='economics', course='Economics BSc (Hons)',
         url='https://www.bournemouth.ac.uk/study/courses/bsc-hons-economics', fee=18635,
         country='https://www.bournemouth.ac.uk/study/undergraduate/how-apply/entry-requirements/entry-requirements-non-uk-students',
         foundation=('Integrated Foundation Year (L101), September 2027: £18,635 for international students. Its separate section and overall IELTS thresholds are unconfirmed.',
                     'Встроенный Foundation Year (L101), сентябрь 2027: £18,635 для иностранцев. Отдельные минимумы IELTS overall и по секциям не подтверждены.'),
         foundation_fee=18635,
         aid='https://www.bournemouth.ac.uk/study/undergraduate/fees-funding/scholarships/international-student-scholarships/bu-academic-excellence-scholarship-international',
         aid_note=('The £2,500 Academic Excellence award applies to January 2027 and the first year only. September 2027 eligibility for Uzbek applicants, amount and deadlines are unconfirmed.',
                   'Academic Excellence на £2,500 относится к январю 2027 и только первому курсу. Для сентября 2027 не подтверждены доступность абитуриентам из Узбекистана, размер и сроки.')),
    dict(id='northumbria-university', name='Northumbria University', short='Northumbria',
         city=('Newcastle upon Tyne', 'Ньюкасл-апон-Тайне'), campus='City Campus', region='England', initials='NU',
         home='https://www.northumbria.ac.uk/', field='computer-science', course='Computer Science BSc (Hons)', code='G411',
         url='https://www.northumbria.ac.uk/study-at-northumbria/courses/bsc-hons-computer-science-uuscms1/?t=638895632441057772', fee=21500,
         country='https://www.northumbria.ac.uk/international/',
         path='https://pathway.northumbria.ac.uk/course/international-foundation-programme-computing/',
         foundation=('Computing International Foundation: UKVI IELTS starts at 4.5 overall and 4.0 each. 2026/27 tuition for 12, 9 or 6 months is £21,250, £17,250 or £11,750 respectively; the shorter options require IELTS 5.0 or 5.5. 2027/28 prices and Uzbek document eligibility remain unconfirmed.',
                     'Computing International Foundation: UKVI IELTS от 4.5 overall и 4.0 по секциям. Стоимость 2026/27 на 12, 9 и 6 месяцев — £21,250, £17,250 и £11,750 соответственно; на коротких маршрутах нужен IELTS 5.0 или 5.5. Цены 2027/28 и приём узбекских документов не подтверждены.'),
         apply=('International applicants apply directly on the course page. The UCAS date applies only when using UCAS.',
                'Иностранные абитуриенты подают заявку напрямую со страницы программы. Срок UCAS действует при подаче через UCAS.')),
    dict(id='university-of-reading', name='University of Reading', short='Reading',
         city=('Reading', 'Рединге'), campus='Whiteknights', region='England', initials='UoR',
         home='https://www.reading.ac.uk/', field='economics', course='Economics BSc',
         url='https://www.reading.ac.uk/ready-to-study/study/Subject-area/economics-ug/bsc-economics', fee=26850, ielts=6.5,
         country='https://www.reading.ac.uk/ready-to-study/international-and-eu/country-specific-information/country-specific-uzbekistan',
         uz=('Uzbekistan: the official table accepts Diploma of Specialised Secondary Education Certificate at 3.8/5.0 for the International Foundation Programme. Undergraduate entry requires Foundation or another approved qualification; the page does not separately confirm the general school certificate, academic lyceum diploma, or professional college diploma under those exact titles.',
             'Узбекистан: официальная таблица указывает Diploma of Specialised Secondary Education Certificate от 3.8/5.0 для International Foundation Programme. Для бакалавриата нужен Foundation или другой признанный документ; приём школьного аттестата, диплома академлицея и диплома профессионального колледжа именно под этими названиями отдельно не подтверждён.'),
         path='https://www.reading.ac.uk/ready-to-study/study/subject-area/international-foundation-pathways-ug/bsc-economics-and-finance-ifp-september',
         foundation=('The related Economics and Finance BSc has a separate integrated Foundation starting September 2027 at £23,850 in Year 0; IELTS 5.5 overall and at least 5.5 in every component. This route leads to Economics and Finance.',
                     'У смежной программы Economics and Finance BSc есть встроенный Foundation с сентября 2027: £23,850 за нулевой год, IELTS 5.5 overall и от 5.5 по каждой секции. Этот маршрут ведёт на Economics and Finance.'),
         foundation_fee=23850,
         aid='https://www.reading.ac.uk/ready-to-study/study/Fees-and-funding/scholarships/undergraduate-excellence-scholarship-2027',
         award='reading-excellence',
         extra_sources=[('Whiteknights campus', 'Кампус Whiteknights', 'https://www.reading.ac.uk/ready-to-study/student-life/our-campuses/whiteknights-campus')]),
    dict(id='university-of-chester', name='University of Chester', short='Chester',
         city=('Chester', 'Честере'), campus='Exton Park', region='England', initials='UoC',
         home='https://www.chester.ac.uk/', field='computer-science', course='Computer Science BSc (Hons)', code='G400',
         url='https://www.chester.ac.uk/study/course-search/computer-science-bsc-hons/?addCourse=101465', fee=15450,
         country='https://www.chester.ac.uk/international/countries/uzbekistan/',
         uz=('Uzbekistan: the Shahodatnoma qualifies for Foundation from 3/5 (60%), subject to course requirements. For Year 1 the country page requires the school certificate plus a recognised international Foundation at 55% or above. Academic lyceum and professional college diplomas are unconfirmed for these and International Year One.',
             'Узбекистан: аттестат Shahodatnoma допускается на Foundation от 3/5 (60%) с учётом требований программы. Для первого курса нужны аттестат и признанная международная Foundation с результатом от 55%. Приём дипломов академлицея и профессионального колледжа для этих маршрутов и International Year One не подтверждён.'),
         foundation=('Integrated Foundation Year G405 starts September 2027 at Exton Park. The international fee for the foundation year is TBC; annual tuition in degree Years 2–4 is £15,450. A separate Foundation IELTS minimum for this course remains unconfirmed.',
                     'Встроенный Foundation Year G405 начинается в Exton Park в сентябре 2027. Плата за подготовительный год для иностранцев уточняется; по £15,450 за каждый из последующих трёх лет бакалавриата. Отдельный IELTS для Foundation этой программы не подтверждён.'),
         aid='https://www.chester.ac.uk/international/fees-scholarships-and-finance/scholarships/',
         aid_note=('The 2027 course page confirms automatic consideration for international and merit awards. Award amount, duration and Uzbekistan-specific criteria for September 2027 remain unconfirmed.',
                   'Страница программы на 2027 год подтверждает автоматическое рассмотрение на международные и академические стипендии. Размер, длительность и отдельные критерии для Узбекистана на сентябрь 2027 не подтверждены.')),
    dict(id='ulster-university', name='Ulster University', short='Ulster',
         city=('Derry~Londonderry', 'Дерри~Лондондерри'), campus='Derry~Londonderry', region='Northern Ireland', initials='UU',
         home='https://www.ulster.ac.uk/', field='computer-science', course='Computer Science BSc (Hons)', code='G401',
         url='https://www.ulster.ac.uk/courses/202728/computer-science-45590', fee=18030,
         fee_url='https://www.ulster.ac.uk/student/fees/tuition-fees/international/tuition-fees-202728-international-and-eu-excluding-roi',
         country='https://www.ulster.ac.uk/global/apply/country/uzbekistan',
         uz=('Uzbekistan: the academic lyceum diploma is listed for undergraduate applications, subject to course conditions and individual assessment. The Grade 11 general school certificate and academic lyceum diploma are listed for Foundation. The professional college diploma and International Year One requirements are unconfirmed.',
             'Узбекистан: диплом академлицея указан для подачи на бакалавриат с учётом условий программы и индивидуальной оценки. Для Foundation указаны школьный аттестат за 11-й класс и диплом академлицея. Диплом профессионального колледжа и условия International Year One не подтверждены.'),
         foundation=('Foundation is listed on the country page. A specific Computing Foundation start, IELTS and fee for 2027/28 have not been verified.',
                     'Foundation указан на странице Узбекистана. Конкретный набор, IELTS и стоимость Computing Foundation на 2027/28 не подтверждены.'),
         aid=ULSTER_AWARD, award='ulster-global-excellence'),
    dict(id='aberystwyth-university', name='Aberystwyth University', short='Aberystwyth',
         city=('Aberystwyth', 'Аберистуите'), campus='Penglais', region='Wales', initials='AU',
         home='https://www.aber.ac.uk/', field='computer-science', course='Computer Science BSc (Hons)', code='G400',
         url='https://courses.aber.ac.uk/undergraduate/computer-science-degree/', fee=23255,
         fee_url='https://www.aber.ac.uk/en/study-with-us/fees/undergrad/tuition-fees/',
         english_url='https://www.aber.ac.uk/en/study-with-us/international/english-requirements/ug-english-requirements/',
         country='https://www.aber.ac.uk/en/study-with-us/international/countries/welcome-uz/',
         path='https://www.aber.ac.uk/en/international-english/courses/international-foundation-programme/computer-science-technology/',
         uz=('Uzbekistan: direct entry accepts good grades in the general secondary certificate together with recognised Foundation. The academic lyceum diploma with grade 4 overall can qualify for integrated Foundation. The professional college diploma and International Year One are unconfirmed.',
             'Узбекистан: для прямого приёма подходят хорошие оценки в школьном аттестате вместе с признанной Foundation. Диплом академлицея с общей оценкой 4 подходит для встроенного Foundation. Диплом профессионального колледжа и International Year One не подтверждены.'),
         foundation=('Standalone Computing Foundation: UKVI IELTS 4.5 overall and each skill at least 4.0. Four-year integrated route: IELTS 5.5 overall and each skill at least 5.5. Each Foundation option costs £23,255 for 2027/28.',
                     'Отдельная Computing Foundation: UKVI IELTS 4.5 overall, от 4.0 по каждой секции. Встроенный четырёхлетний маршрут: IELTS 5.5 overall, от 5.5 по каждой секции. Подготовительный год на каждом из этих маршрутов стоит £23,255 в 2027/28.'),
         foundation_fee=23255,
         aid='https://www.aber.ac.uk/en/study-with-us/international/inclusive-accommodation/',
         aid_note=('The course’s international foundation provider lists a £2,500 David Game College discount for the foundation year of the integrated computing route. Uzbekistan eligibility, separate application and deadline remain unconfirmed. The international accommodation award has eligible-hall and contract conditions.',
                   'Поставщик международного Foundation указывает скидку David Game College £2,500 за подготовительный год на встроенном маршруте Computing. Доступность для Узбекистана, отдельная заявка и сроки не подтверждены. У программы помощи с проживанием есть условия по общежитию и договору.'),
         extra_sources=[('Campus and department', 'Кампус и факультет', 'https://www.aber.ac.uk/en/discover-aberystwyth/life-on-campus/academic-buildings/')]),
]


def award(s):
    if s.get('award') == 'ntu-excellence':
        return dict(id='ntu-excellence-2027', category='merit', basis='merit',
                    name='NTU Excellence Scholarship', internationalEligible=True, firstYearEligible=True,
                    amount=L('50% of first-year tuition; £3,000 off each subsequent eligible year',
                             '50% стоимости обучения в первый год; скидка £3,000 за каждый следующий подходящий год'),
                    eligibility=L('International fee-paying offer holders on an eligible course starting September 2027; Uzbek applicants can apply subject to the same conditions.',
                                  'Абитуриенты с международным тарифом и предложением на подходящую программу со стартом в сентябре 2027; для граждан Узбекистана действуют те же условия.'),
                    application=L('Separate competitive application after an offer; final date 26 May 2027, 16:00 GMT as stated by NTU.',
                                  'Отдельная конкурсная заявка после получения предложения; крайний срок 26 мая 2027, 16:00 GMT по формулировке NTU.'),
                    renewable=L('£3,000 per subsequent eligible year; see the award terms.',
                                '£3,000 за каждый следующий подходящий год по условиям стипендии.'),
                    entryTerm='Autumn', entryYear='2027', source=s['aid'], verified=DAY)
    if s.get('award') == 'reading-excellence':
        return dict(id='reading-undergraduate-excellence-2027', category='merit', basis='merit',
                    name='Undergraduate Excellence Scholarship', internationalEligible=True, firstYearEligible=True,
                    amount=L('£5,000 off tuition per eligible academic year', 'Скидка £5,000 за каждый подходящий учебный год'),
                    eligibility=L('International fee status and an offer for an eligible 2027/28 degree; subject to the award terms.',
                                  'Международный тариф и предложение на подходящую программу 2027/28 с учётом условий стипендии.'),
                    application=L('Separate scholarship application; final Clearing round closes 20 August 2027.', 'Отдельная заявка на стипендию; последний раунд Clearing закрывается 20 августа 2027.'),
                    renewable=L('Each eligible study year.', 'Каждый подходящий учебный год.'),
                    entryTerm='Autumn', entryYear='2027', source=s['aid'], verified=DAY)
    if s.get('award') == 'ulster-global-excellence':
        return dict(id='ulster-global-excellence-2027', category='merit', basis='merit',
                    name='Global Excellence Scholarship', internationalEligible=True, firstYearEligible=True,
                    amount=L('£5,000 first year and £3,000 per subsequent academic year; excludes placement year',
                             '£5,000 за первый год и £3,000 за каждый следующий учебный год; без года практики'),
                    eligibility=L('International full-time offer holders at a Northern Ireland campus, including eligible Uzbek applicants, with UK A-level BBB equivalent or above.',
                                  'Иностранные абитуриенты, в том числе из Узбекистана, с предложением на очную программу в Северной Ирландии и оценками, эквивалентными UK A-level BBB или выше.'),
                    application=L('Automatic assessment; no separate application or scholarship deadline listed.',
                                  'Автоматическое рассмотрение; отдельная заявка и отдельный срок стипендии не указаны.'),
                    renewable=L('Subsequent academic years, excluding placement year.',
                                'На последующие учебные годы, кроме года практики.'),
                    entryTerm='Autumn', entryYear='2027', source=s['aid'], verified=DAY)
    return None


def make_record(s):
    year = s.get('year', YEAR)
    fee_source = s.get('fee_url', s['url'])
    english_source = s.get('english_url', s['url'])
    path_source = s.get('path', s['url'])
    aid_source = s.get('aid', s['url'])
    fee_label = L('International degree tuition', 'Стоимость бакалавриата для иностранцев')
    items = [dict(label=fee_label, amount=s['fee'], source=fee_source, verified=DAY)]
    if 'foundation_fee' in s:
        items.append(dict(label=L('Foundation year only, 2027/28', 'Только год Foundation, 2027/28'),
                          amount=s['foundation_fee'], source=path_source, verified=DAY))
    existing_award = award(s)
    sources = [
        src('Bachelor’s programme and September 2027 intake', 'Бакалавриат и набор на сентябрь 2027', s['url']),
        src('International entry requirements', 'Требования к иностранным абитуриентам', s['country']),
        src('Foundation or pathway information', 'Сведения о Foundation или подготовительном маршруте', path_source),
        src('International funding information', 'Сведения о финансировании для иностранцев', aid_source),
        src('UCAS 2027 equal consideration', 'Равное рассмотрение заявок UCAS 2027', UCAS),
    ]
    if fee_source != s['url']:
        sources.append(src('International tuition', 'Стоимость обучения для иностранцев', fee_source))
    if english_source != s['url']:
        sources.append(src('Direct-entry English requirements', 'Требования к английскому для прямого приёма', english_source))
    sources.extend(src(*item) for item in s.get('extra_sources', []))
    for source in sources:
        source['verified'] = DAY
    notes = [
        L('University application cut-off and living costs for this intake are unconfirmed.',
          'Собственный дедлайн вуза и расходы на проживание для этого набора не подтверждены.'),
        L('International Year One entry and progression are unconfirmed unless explicitly stated above.',
          'Условия International Year One и перехода на бакалавриат не подтверждены, если выше прямо не указано иное.'),
    ]
    if 'apply' in s:
        notes.append(L(*s['apply']))
    if not existing_award:
        notes.append(L(*s.get('aid_note', UNKNOWN_AID)))
    rec = record(DAY, TEMPLATE, s['id'], s['name'], s['short'], s['city'][0], s['city'][1], s['region'],
                 dict(c1='#243e61', c2='#15253b', initials=s['initials']), s['home'], s['country'],
                 [(s['field'], s['course'], s['url'], s.get('code'))], s['fee'], year,
                 L(*s.get('fee_note', ('Published tuition for the named programme; living expenses are separate.',
                                      'Опубликованная плата за указанную программу; проживание оплачивается отдельно.'))),
                 (s.get('ielts', 6.0), L('Minimum 5.5 in each section', 'Минимум 5.5 по каждой секции'), english_source),
                 L(*s.get('uz', UNKNOWN_UZ)), [L(*s['foundation'])], items,
                 [existing_award] if existing_award else [],
                 L('Full-ride funding for this applicant and intake remains unconfirmed.',
                   'Полное финансирование для этой категории абитуриентов и набора не подтверждено.'),
                 sources, [L('See the programme, route and funding notes for unresolved details.',
                             'Оставшиеся вопросы перечислены в примечаниях о программе, маршрутах и стипендиях.')],
                 (f'September 2027, {s["campus"]}', f'сентябрь 2027, {s["campus"]}'), notes)
    rec['costs']['source'] = fee_source
    rec['links']['cost'] = fee_source
    rec['programEvidence'][s['field']].update(campus=s['campus'], entryYear='2027')
    rec['admissions']['platforms'] = ['Direct university application'] if 'apply' in s else ['UCAS']
    rec['admissions']['essay'] = None
    rec['admissions']['recommendations'] = None
    if 'apply' in s:
        rec['admissions']['applicationFee'] = None
        rec['links']['applicationPortal'] = s['url']
        rec['admissions']['deadlines'] = []
    return rec


if __name__ == '__main__':
    records = [make_record(s) for s in SCHOOLS if not s.get('reused')]
    write(records, BASE)
    first = ['de-montfort-university', 'university-of-portsmouth', 'university-of-hertfordshire',
             'nottingham-trent-university', 'university-of-huddersfield']
    rest = [s['id'] for s in SCHOOLS[1:]]
    manifest = {'verified': DAY, 'batches': [first, rest[:5], rest[5:]]}
    Path(ROOT, 'research/uk2027-expansion.json').write_text(
        json.dumps(manifest, indent=2) + '\n', encoding='utf-8')

