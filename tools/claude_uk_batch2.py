# -*- coding: utf-8 -*-
"""UK 2027/28 batch 2 (13 November 2026): De Montfort, Portsmouth, Hertfordshire, Huddersfield,
Middlesex. Nottingham Trent was dropped: its official English table requires IELTS 6.5 for
Nottingham Business School and School of Science and Technology bachelor's degrees, outside
the 5.5–6.0 priority. Northumbria, the first replacement tried, could not be read without
getting around the site's protection, so Middlesex took its place.
Every figure was read on the university's own page on 13 November 2026."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from claude_uk_common import L, src, record, load_uk, block, write

DAY = '2026-11-13'
s = load_uk()
tpl = block(s, 'university-of-strathclyde')
NOT_CHECKED = [L('founding year', 'Год основания'), L('TOEFL and Duolingo levels', 'Уровни TOEFL и Duolingo'), L('living costs', 'Расходы на жизнь'),
               L('programmes other than the one named', 'Программы, кроме названной')]
recs = []

# ------------------------------------------------------------------ De Montfort University
DMU = 'https://www.dmu.ac.uk/study/courses/undergraduate-courses/business-management/business-management.aspx'
DMU_INT = 'https://www.dmu.ac.uk/international/en/entry-requirements.aspx'
DMU_SCH = 'https://www.dmu.ac.uk/international/en/fees-and-scholarships/global-access-scholarship.aspx'
recs.append(record(DAY, tpl, 'de-montfort-university', 'De Montfort University', 'DMU', 'Leicester', 'Лестере', 'England',
    {'c1': '#E40046', 'c2': '#7a0026', 'initials': 'DMU'}, 'https://www.dmu.ac.uk/', DMU_INT,
    [('business', 'BA (Hons) Business Management', DMU, 'NN12')], 17600, '2027–2028',
    L('Fees in subsequent years may rise; other courses are priced differently. The Global Access Scholarship is not deducted here.',
      'Плата в следующие годы может расти; другие программы стоят иначе. Стипендия Global Access здесь не вычитается.'),
    (6.0, L('5.5 in each band', '5.5 по каждой части'), DMU),
    L('DMU’s Uzbekistan entry: the Certificate of Completed Secondary Education (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) is NOT accepted for direct entry to Year 1. Year 1 is possible after one successful year of a bachelor’s degree or a recognised Foundation programme; entry to Year 2 or 3 may be possible with full course details. Academic lyceum and professional college diplomas are not named, so their acceptance is not confirmed.',
      'Требования DMU для Узбекистана: аттестат о полном среднем образовании (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) НЕ принимается для прямого поступления на первый курс. Первый курс возможен после одного успешного года бакалавриата или признанной программы Foundation; поступление на 2-й или 3-й курс возможно при полном описании пройденных курсов. Дипломы академлицея и профессионального колледжа не названы, поэтому их пригодность не подтверждена.'),
    [L('Foundation route: an Uzbek school leaver needs a recognised Foundation programme (or one year of a bachelor’s degree) before Year 1. DMU’s pages read do not name a business foundation of its own; the provider and fee are not confirmed. DMU’s terms exclude its own foundation courses from international scholarships.',
       'Маршрут через Foundation: выпускнику узбекской школы нужна признанная программа Foundation (или год бакалавриата) до первого курса. Собственной бизнес-программы Foundation на прочитанных страницах DMU нет; поставщик и стоимость не подтверждены. По условиям DMU его собственные foundation-курсы не дают права на международные стипендии.')],
    [{'label': L('International tuition — BA Business Management, 2027/28', 'Обучение для иностранцев — BA Business Management, 2027/28'), 'amount': 17600}],
    [{'id': 'dmu-global-access', 'category': 'merit', 'basis': 'unknown', 'name': 'Global Access Scholarship (undergraduate)',
      'amount': L('£2,000 in each year of study, plus a £500 first-year discount for paying full fees before the deposit deadline', '£2,000 за каждый год обучения и ещё £500 скидки в первый год при полной оплате до срока депозита'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('International students starting a full-time undergraduate degree in October 2026 or February 2027 who pay the deposit before the deposit deadline (2026/27 entry).',
                       'Иностранные студенты, начинающие очный бакалавриат в октябре 2026 или феврале 2027 и внёсшие депозит до срока (набор 2026/27).'),
      'application': L('Automatic once the deposit is paid before the deadline', 'Автоматически после оплаты депозита до срока'),
      'renewable': L('Each year of study', 'Каждый год обучения'),
      'note': L('Published only for 2026/27 entry (September 2026 and February 2027 starts); nothing is published yet for September 2027. Not available to DMU’s own foundation courses.',
                'Опубликована только для набора 2026/27 (старт в сентябре 2026 и феврале 2027); на сентябрь 2027 пока ничего не опубликовано. Не распространяется на собственные foundation-курсы DMU.'),
      'deadlineScope': 'not-confirmed', 'entryTerm': None, 'entryYear': None, 'source': DMU_SCH, 'verified': DAY}],
    L('No award at the level of full tuition was found.', 'Награды уровня полной оплаты обучения не найдено.'),
    [src('BA (Hons) Business Management — 2027/28 course page', 'BA (Hons) Business Management — страница программы 2027/28', DMU),
     src('International entry requirements by country', 'Требования для иностранцев по странам', DMU_INT),
     src('Global Access Scholarship (2026/27 entry)', 'Global Access Scholarship (набор 2026/27)', DMU_SCH)],
    NOT_CHECKED + [L('foundation provider and fee', 'Поставщик и стоимость Foundation'), L('scholarship for September 2027 entry', 'Стипендия для набора сентября 2027'),
                   L('lyceum and college diplomas', 'Дипломы лицея и колледжа')],
    ('September 2027', 'сентябрь 2027')))

# ------------------------------------------------------------------ University of Portsmouth
POR = 'https://www.port.ac.uk/study/courses/undergraduate/ba-hons-business-and-management'
POR_SCH = 'https://www.port.ac.uk/study/international-students/funding/scholarships'
recs.append(record(DAY, tpl, 'university-of-portsmouth', 'University of Portsmouth', 'Portsmouth', 'Portsmouth', 'Портсмуте', 'England',
    {'c1': '#621360', 'c2': '#360a35', 'initials': 'UoP'}, 'https://www.port.ac.uk/', 'https://www.port.ac.uk/study/international-students',
    [('business', 'BA (Hons) Business and Management', POR, 'NN23')], 18800, '2027–2028',
    L('£18,800 a year for September 2027, subject to annual increase; a placement or study-abroad year costs £2,875 for international students. No scholarship is deducted.',
      '£18,800 в год для старта в сентябре 2027, с ежегодным повышением; год практики или учёбы за рубежом стоит иностранцам £2,875. Стипендии не вычитаются.'),
    (6.0, L('No component score below 5.5', 'Ни одна часть ниже 5.5'), POR),
    L('No Uzbekistan-specific requirements were found on Portsmouth’s country pages; acceptance of an Uzbek school certificate, lyceum or college diploma for direct entry is not confirmed.',
      'Требований именно для Узбекистана на страницах стран Portsmouth не найдено; пригодность узбекского аттестата, диплома лицея или колледжа для прямого поступления не подтверждена.'),
    [L('Foundation route: the course page offers a Foundation Year with ICP (IELTS 5.5 with no component below 5.5), but states it is “not currently open to EU or International students”, so this 5.5 route does not apply to international applicants. International College Portsmouth runs separate international pathways; their fee and IELTS were not confirmed.',
       'Маршрут через Foundation: страница программы предлагает Foundation Year с ICP (IELTS 5.5, ни одна часть ниже 5.5), но пишет, что он «not currently open to EU or International students», поэтому этот маршрут с 5.5 к иностранцам не относится. International College Portsmouth ведёт отдельные международные pathway-программы; их стоимость и IELTS не подтверждены.')],
    [{'label': L('International tuition — BA Business and Management, September 2027', 'Обучение для иностранцев — BA Business and Management, сентябрь 2027'), 'amount': 18800},
     {'label': L('International placement or study-abroad year', 'Год практики или учёбы за рубежом для иностранцев'), 'amount': 2875}],
    [{'id': 'portsmouth-vc-global-development', 'category': 'merit', 'basis': 'unknown', 'name': 'Vice Chancellor’s Global Development Scholarship',
      'amount': L('£2,500 off the first year’s tuition', '£2,500 скидки за первый год обучения'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('Self-funded students from listed countries — Uzbekistan is listed — on a full-time on-campus course with annual fees of £16,200 or more, starting in January 2027 or May 2027; not for students who studied at Portsmouth before.',
                       'Студенты на самофинансировании из перечисленных стран — Узбекистан в списке — на очной программе в кампусе с годовой платой от £16,200, со стартом в январе или мае 2027; не для тех, кто уже учился в Portsmouth.'),
      'application': None, 'renewable': L('First year only', 'Только первый год'),
      'note': L('Published only for January and May 2027 starts; the September 2027 scholarship programme is not yet published. The separate £5,000 Chancellor’s Global Academic Merit Scholarship for January 2027 closed on 2 November 2026.',
                'Опубликована только для стартов в январе и мае 2027; программа стипендий на сентябрь 2027 ещё не опубликована. Отдельная Chancellor’s Global Academic Merit Scholarship (£5,000) на январь 2027 закрылась 2 ноября 2026.'),
      'deadlineScope': 'not-confirmed', 'entryTerm': None, 'entryYear': None, 'source': POR_SCH, 'verified': DAY}],
    L('No award at the level of full tuition was found.', 'Награды уровня полной оплаты обучения не найдено.'),
    [src('BA (Hons) Business and Management — September 2027', 'BA (Hons) Business and Management — сентябрь 2027', POR),
     src('Scholarships for international students', 'Стипендии для иностранных студентов', POR_SCH)],
    NOT_CHECKED + [L('Uzbek qualifications for direct entry', 'Узбекские квалификации для прямого поступления'),
                   L('ICP pathway fee and IELTS', 'Стоимость и IELTS pathway ICP'), L('scholarship for September 2027 entry', 'Стипендия для набора сентября 2027')],
    ('September 2027', 'сентябрь 2027')))

# ------------------------------------------------------------------ University of Hertfordshire
HER = 'https://www.herts.ac.uk/courses/undergraduate/ba-hons-business-administration'
HER_UZ = 'https://www.herts.ac.uk/international/guidance-for-your-region/europe-and-central-asia/uzbekistan'
HER_SCH = 'https://www.herts.ac.uk/international/scholarships-and-fees/scholarships'
recs.append(record(DAY, tpl, 'university-of-hertfordshire', 'University of Hertfordshire', 'Hertfordshire', 'Hatfield', 'Хатфилде', 'England',
    {'c1': '#1D1D1B', 'c2': '#0d0d0c', 'initials': 'UH'}, 'https://www.herts.ac.uk/', HER_UZ,
    [('business', 'BA (Hons) Business Administration', HER, 'N252')], 17970, '2027–2028',
    L('£17,970 for the 2027/2028 academic year (2026/27: £17,450 for EU students on the same page); other courses are priced differently. No scholarship is deducted.',
      '£17,970 за 2027/2028 учебный год (на той же странице за 2026/27 для студентов ЕС — £17,450); другие программы стоят иначе. Стипендии не вычитаются.'),
    (6.0, L('Minimum 5.5 in each band', 'Не ниже 5.5 по каждой части'), HER),
    L('Hertfordshire’s Uzbekistan page: Year 1 requires the Diploma of Academic Lyceum (Akademik Litsey Diplomi) with GPA 4.0 or above, or the Diploma of Professional College (Kasb-Hunar Kolleji Diplomi) with GPA 4.0 / at least 60%, plus a pass in high-school maths, and IELTS 6.0 with no band below 5.5. The general-school certificate (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) gives entry to the Foundation only.',
      'Страница Hertfordshire для Узбекистана: на первый курс нужен диплом академлицея (Akademik Litsey Diplomi) с GPA от 4.0 или диплом профессионального колледжа (Kasb-Hunar Kolleji Diplomi) с GPA 4.0 / не менее 60%, плюс сданная школьная математика и IELTS 6.0, ни одна часть ниже 5.5. Аттестат общеобразовательной школы (O‘rta Ma’lumot To‘g‘risida Shahodatnoma) даёт поступление только на Foundation.'),
    [L('Foundation route: with the school certificate (Shahodatnoma) an Uzbek applicant enters the Foundation with IELTS 4.5 and no band below 4.0 (Hertfordshire’s Uzbekistan page). International Foundation courses are run with Hertfordshire International College; their fee was not confirmed. This IELTS 4.5 is for the Foundation only, not for the degree.',
       'Маршрут через Foundation: со школьным аттестатом (Shahodatnoma) абитуриент из Узбекистана поступает на Foundation с IELTS 4.5, ни одна часть ниже 4.0 (страница Hertfordshire для Узбекистана). International Foundation ведётся с Hertfordshire International College; его стоимость не подтверждена. Этот IELTS 4.5 — только для Foundation, а не для бакалавриата.')],
    [{'label': L('International tuition — BA Business Administration, 2027/28', 'Обучение для иностранцев — BA Business Administration, 2027/28'), 'amount': 17970}],
    [{'id': 'herts-chancellors-international', 'category': 'merit', 'basis': 'merit', 'name': 'Chancellor’s International Scholarship',
      'amount': L('£500 to £4,000 (variable)', 'от £500 до £4,000 (переменная сумма)'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('New international undergraduates joining the UK campus in January 2027; based on academic performance, English level, personal statement and circumstances. Not for HIC, pre-sessional or preparatory programmes.',
                       'Новые иностранные студенты бакалавриата с началом на британском кампусе в январе 2027; по успеваемости, уровню английского, мотивационному письму и обстоятельствам. Не для HIC, pre-sessional и подготовительных программ.'),
      'application': L('No separate application', 'Отдельной заявки нет'), 'renewable': None,
      'note': L('Published only for January 2027 entry; not combinable with the UG Tri Annual Scholarship.', 'Опубликована только для набора января 2027; не совмещается с UG Tri Annual Scholarship.'),
      'deadlineScope': 'no-separate-application', 'entryTerm': None, 'entryYear': None, 'source': HER_SCH, 'verified': DAY},
     {'id': 'herts-ug-tri-annual', 'category': 'merit', 'basis': 'unknown', 'name': 'UG Tri Annual Scholarship',
      'amount': L('£2,000 off tuition each year (up to £6,000 over three years)', '£2,000 скидки за каждый год (до £6,000 за три года)'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('International undergraduates joining for the first time in January 2027; not for HIC, pre-sessional or online courses.',
                       'Иностранные студенты бакалавриата, впервые поступающие в январе 2027; не для HIC, pre-sessional и онлайн-курсов.'),
      'application': L('Awarded automatically', 'Присуждается автоматически'), 'renewable': L('Each year on successful progression', 'Каждый год при успешном переводе на следующий курс'),
      'note': L('Published only for January 2027 entry; nothing is published yet for September 2027.', 'Опубликована только для набора января 2027; на сентябрь 2027 пока ничего не опубликовано.'),
      'deadlineScope': 'no-separate-application', 'entryTerm': None, 'entryYear': None, 'source': HER_SCH, 'verified': DAY}],
    L('No award at the level of full tuition was found.', 'Награды уровня полной оплаты обучения не найдено.'),
    [src('BA (Hons) Business Administration — fees 2026/27 and 2027/28', 'BA (Hons) Business Administration — плата 2026/27 и 2027/28', HER),
     src('Uzbekistan — entry requirements', 'Узбекистан — требования к поступлению', HER_UZ),
     src('International scholarships (January 2027)', 'Стипендии для иностранцев (январь 2027)', HER_SCH)],
    NOT_CHECKED + [L('Hertfordshire International College foundation fee', 'Стоимость Foundation в Hertfordshire International College'),
                   L('scholarship for September 2027 entry', 'Стипендия для набора сентября 2027')],
    ('September 2027', 'сентябрь 2027')))

# ------------------------------------------------------------------ University of Huddersfield
HUD = 'https://courses.hud.ac.uk/2027-28/undergraduate/business-management-ba-hons/'
HUD_SCH = 'https://www.hud.ac.uk/international/scholarships/'
HUD_ISC = 'https://www.hud.ac.uk/international/international-study-centre/'
recs.append(record(DAY, tpl, 'university-of-huddersfield', 'University of Huddersfield', 'Huddersfield', 'Huddersfield', 'Хаддерсфилде', 'England',
    {'c1': '#0C2340', 'c2': '#061325', 'initials': 'UoH'}, 'https://www.hud.ac.uk/', 'https://www.hud.ac.uk/international/',
    [('business', 'Business Management BA (Hons)', HUD, '')], 17600, '2026–2027',
    L('The 2027/28 course page shows £17,600 as the tuition fee for 2026/27 entry and says 2027/28 international fees will be published later; the figure is therefore labelled 2026/27 and not compared with budgets. A placement year costs extra. No scholarship is deducted.',
      'Страница программы 2027/28 показывает £17,600 как плату набора 2026/27 и сообщает, что плата для иностранцев на 2027/28 будет опубликована позже; поэтому сумма подписана 2026/27 и не сравнивается с бюджетом. Год практики оплачивается отдельно. Стипендии не вычитаются.'),
    (6.0, L('No element lower than 5.5', 'Ни одна часть ниже 5.5'), HUD),
    L('Huddersfield’s country-specific requirements page did not show an Uzbekistan entry to the reader; acceptance of an Uzbek school certificate, lyceum or college diploma for direct entry is not confirmed.',
      'Страница требований Huddersfield по странам не показала раздел по Узбекистану; пригодность узбекского аттестата, диплома лицея или колледжа для прямого поступления не подтверждена.'),
    [L('Foundation route: Study Group’s International Study Centre on the Huddersfield campus runs an International Foundation Year (into Year 1) and an International Year One; successful students progress without reapplying. Their fees and IELTS levels were not confirmed.',
       'Маршрут через Foundation: International Study Centre (Study Group) на кампусе Huddersfield ведёт International Foundation Year (на первый курс) и International Year One; успешные студенты переходят без повторной подачи. Их стоимость и уровни IELTS не подтверждены.')],
    [{'label': L('International tuition — Business Management BA, 2026/27 entry (2027/28 not yet published)', 'Обучение для иностранцев — Business Management BA, набор 2026/27 (2027/28 ещё не опубликовано)'), 'amount': 17600}],
    [{'id': 'hud-international-merit', 'category': 'merit', 'basis': 'merit', 'name': 'International merit-based scholarship (undergraduate)',
      'amount': L('£4,000 (AAB A-level equivalent), £2,500 (ABB) or £1,500 (general entry requirements) each year', '£4,000 (эквивалент AAB), £2,500 (ABB) или £1,500 (общие требования) за каждый год'),
      'internationalEligible': True, 'firstYearEligible': True,
      'eligibility': L('International undergraduate applicants who meet the eligibility criteria and are self-funding; the amount depends on academic achievement.',
                       'Иностранные абитуриенты бакалавриата, отвечающие критериям и оплачивающие учёбу сами; сумма зависит от успеваемости.'),
      'application': L('No separate application; considered automatically and stated in the offer letter', 'Отдельной заявки нет; рассматривается автоматически и указывается в письме с предложением'),
      'renewable': L('Each year of the course', 'Каждый год обучения'),
      'note': L('Separately, an early-payment discount for September 2027 entry takes £1,000 off the first year if the full deposit is paid by 2 May 2027, or £500 if paid by 11 July 2027.',
                'Отдельно: скидка за раннюю оплату для набора сентября 2027 — £1,000 за первый год при оплате полного депозита до 2 мая 2027 или £500 до 11 июля 2027.'),
      'deadlineScope': 'no-separate-application', 'entryTerm': None, 'entryYear': None, 'source': HUD_SCH, 'verified': DAY}],
    L('No award at the level of full tuition was found.', 'Награды уровня полной оплаты обучения не найдено.'),
    [src('Business Management BA (Hons) — 2027/28 course page', 'Business Management BA (Hons) — страница программы 2027/28', HUD),
     src('International student scholarships', 'Стипендии для иностранных студентов', HUD_SCH),
     src('International Study Centre pathways', 'Pathway-программы International Study Centre', HUD_ISC)],
    NOT_CHECKED + [L('2027/28 international fee', 'Плата для иностранцев на 2027/28'), L('Uzbek qualifications for direct entry', 'Узбекские квалификации для прямого поступления'),
                   L('pathway fee and IELTS', 'Стоимость и IELTS pathway')],
    ('September 2027', 'сентябрь 2027')))

# ------------------------------------------------------------------ Middlesex University
MDX = 'https://www.mdx.ac.uk/courses/undergraduate/international-business-ba-honours/'
MDX_EN = 'https://www.mdx.ac.uk/international/entry-requirements-for-international-students/english-language-requirements-for-international-students/'
recs.append(record(DAY, tpl, 'middlesex-university', 'Middlesex University', 'Middlesex', 'London', 'Лондоне', 'England',
    {'c1': '#C8102E', 'c2': '#6e0919', 'initials': 'MDX'}, 'https://www.mdx.ac.uk/', 'https://www.mdx.ac.uk/international/',
    [('business', 'International Business BA Honours', MDX, 'N121')], 18300, '2027–2028',
    L('£18,300 for the 2027/28 academic year (Hendon campus); other courses are priced differently. No scholarship is deducted.',
      '£18,300 за 2027/28 учебный год (кампус Hendon); другие программы стоят иначе. Стипендии не вычитаются.'),
    (6.0, L('5.5 in each component', '5.5 по каждому разделу'), MDX_EN),
    L('No Uzbekistan country page was found; Middlesex assesses foreign qualifications case by case. Acceptance of an Uzbek school certificate, lyceum or college diploma for direct entry is not confirmed.',
      'Страницы для Узбекистана не найдено; Middlesex оценивает иностранные квалификации индивидуально. Пригодность узбекского аттестата, диплома лицея или колледжа для прямого поступления не подтверждена.'),
    [L('Foundation route: the course page mentions only a Pre-sessional English course for applicants below the English level; a foundation route for this degree and its fee were not confirmed.',
       'Маршрут через Foundation: страница программы упоминает только подготовительный английский (Pre-sessional) для тех, кто не набрал нужный уровень; маршрут Foundation для этой программы и его стоимость не подтверждены.')],
    [{'label': L('International tuition — International Business BA, 2027/28', 'Обучение для иностранцев — International Business BA, 2027/28'), 'amount': 18300}],
    [],
    L('Middlesex’s scholarship pages give conflicting undergraduate scope (one says regional awards cover undergraduates, another that scholarships are for master’s degrees), so no scholarship is recorded.',
      'Страницы стипендий Middlesex противоречат друг другу в отношении бакалавриата (одна говорит, что региональные награды есть и для бакалавриата, другая — что стипендии только для магистратуры), поэтому стипендия не записана.'),
    [src('International Business BA Honours — 2027/28', 'International Business BA Honours — 2027/28', MDX),
     src('English language requirements for international students', 'Требования к английскому для иностранцев', MDX_EN)],
    NOT_CHECKED + [L('Uzbek qualifications for direct entry', 'Узбекские квалификации для прямого поступления'), L('foundation route and fee', 'Маршрут Foundation и его стоимость'),
                   L('international undergraduate scholarships', 'Стипендии для иностранцев на бакалавриате')],
    ('September 2027', 'сентябрь 2027'),
    [L('The course page shows code N121 in its summary but asks to apply via UCAS with code N281; check the code on UCAS before applying.',
       'В сводке страницы программы указан код N121, а в разделе подачи — UCAS-код N281; перед подачей проверьте код на UCAS.')]))

# Russian city names for the catalogue (each university city must have one).
for en, ru in [('Leicester', 'Лестер'), ('Portsmouth', 'Портсмут'), ('Hatfield', 'Хатфилд'), ('Huddersfield', 'Хаддерсфилд')]:
    L(en, ru)
write(recs, s)
print('added', [r['id'] for r in recs])
