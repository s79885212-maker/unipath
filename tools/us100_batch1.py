"""Build the first USA 250 → 350 batch from reviewed official pages."""

import json
from pathlib import Path

from us200 import R, costs, eng, fee, test, toefl
from us200_std import L, flush


ROOT = Path(__file__).resolve().parents[1]
REVIEWED = '2026-11-12'
PROSPECTIVE = L('International first-year applicants', 'Иностранные абитуриенты первого курса')
SECONDARY = L('Secondary school records', 'Документы о среднем образовании')
PARTIAL = L('Selected undergraduate fields from the official catalog.',
            'Часть направлений бакалавриата из официального каталога.')
UZ_UNKNOWN = L('Requirements specific to secondary qualifications from Uzbekistan were not confirmed.',
               'Отдельные требования к документам о среднем образовании из Узбекистана не подтверждены.')
CYCLE_UNKNOWN = L('Fall 2027 details require separate confirmation.',
                  'Условия для набора осени 2027 требуют отдельного подтверждения.')
DEADLINE_UNKNOWN = L('A Fall 2027 application deadline for this applicant route has not been confirmed.',
                     'Срок подачи на осень 2027 для этой категории абитуриентов не подтверждён.')
PRIOR_COST = L('Published rates are for 2026–2027. Fall 2027 costs are not confirmed.',
               'Опубликованы ставки на 2026–2027 учебный год. Стоимость для набора осени 2027 не подтверждена.')
AUTO = L('Automatic consideration with the admission application.',
         'Автоматическое рассмотрение по заявлению на поступление.')
PARTIAL_AID = L('Partial funding', 'Частичное финансирование')
FALL_ADMISSION = L('Fall admission', 'Поступление осенью')
OPTIONAL = ('optional', L('SAT and ACT are optional for admission. English proficiency is assessed separately.',
                          'SAT и ACT необязательны для поступления. Знание английского проверяется отдельно.'))
BLIND = ('not-used', L('SAT and ACT are not used in the admission decision. Placement may have separate rules.',
                    'SAT и ACT не учитываются при отборе. Для распределения по курсам могут действовать отдельные правила.'))
TUITION = L('Tuition', 'Обучение')
FEES = L('Mandatory fees', 'Обязательные сборы')
FOOD_HOUSING = L('Housing and meals', 'Жильё и питание')
HOUSING = L('Housing', 'Жильё')
MEALS = L('Meals', 'Питание')
INSURANCE = L('Health insurance', 'Медицинская страховка')
TUITION_FEES = L('Tuition and fees', 'Обучение и сборы')
FULL_TIME = L('Full-time first-year undergraduate', 'Первокурсник бакалавриата, очное обучение')
FREE_APPLICATION = L('The official admissions page states there is no application fee.',
                     'На официальной странице приёма указано, что заявка бесплатна.')


def award(identifier, name, source, value, note, *, basis='merit', separate=None, renewable=None):
    return {
        'id': identifier, 'name': name, 'basis': basis, 'amount': value,
        'internationalEligible': True, 'renewable': renewable, 'note': note,
        'coverage': PARTIAL_AID, 'source': source, 'verified': REVIEWED,
        'application': AUTO if separate is False else None, 'deadline': None,
        'deadlineScope': 'no-separate-application' if separate is False else None,
    }


def deadline(identifier, date, source, *, kind='admission', iso=None, evidence=None,
             basis='explicit-date', name=FALL_ADMISSION):
    item = {
        'id': identifier, 'kind': kind, 'name': name, 'date': date, 'dateISO': iso,
        'entryTerm': 'Autumn' if evidence else None, 'entryYear': '2027' if evidence else None,
        'status': 'confirmed' if evidence else 'annual-rule', 'source': source, 'verified': REVIEWED,
        'cycleEvidence': {'basis': basis if evidence else 'annual-rule',
                          'source': source, 'verified': REVIEWED},
    }
    if evidence:
        item['cycleEvidence'].update(entryTerm='Autumn', entryYear='2027', quote=evidence)
    return item


def published_cost(source, category, headline, items, *, tuition=None, billed=None, note=PRIOR_COST):
    return costs('2026–2027', source, REVIEWED, category, items, headline, None, None,
                 tuition=tuition, billed=billed, note=note, status='previous-cycle')


def profile(uid, name, short, city, state, website, admissions, programs, fields, desc, *,
            public=False, liberal=False, testing=None, test_source=None, english_source=None, ielts=None,
            ibt=None, det=None, english_note=None, application_fee=None, fee_source=None, fee_note=None,
            documents=(), rounds=(), aid_source=None, awards=(), cost=None, need=None,
            extra_sources=(), unconfirmed=(), qualifications=None, aliases=None):
    language = {
        'ielts': eng(minimum=ielts) if ielts is not None else None,
        'toefl': toefl(*ibt) if ibt else None,
        'duolingo': eng(minimum=det) if det is not None else None,
        'note': english_note,
        'detailsSource': english_source or admissions,
        'detailsVerified': REVIEWED,
    }
    policy = test(testing[0], testing[1], source=test_source or admissions, verified=REVIEWED) if testing else None
    sources = [
        (L('International admissions', 'Международный приём'), admissions),
        (L('Undergraduate programs', 'Программы бакалавриата'), programs),
        (L('English proficiency requirements', 'Требования к знанию английского языка'), english_source),
        (L('SAT and ACT', 'SAT и ACT'), test_source),
        (L('Application fee', 'Сбор за заявку'), fee_source),
        (L('Scholarships', 'Стипендии'), aid_source),
        (L('Published costs', 'Опубликованная стоимость'), cost['source'] if cost else None),
        *extra_sources,
    ]


    kind = 'public' if public else 'liberal-arts' if liberal else 'private'
    type_label = {'public': L('Public university', 'Государственный университет'),
                  'private': L('Private university', 'Частный университет'),
                  'liberal-arts': L('Liberal arts college', 'Колледж свободных искусств')}[kind]
    record = R(
        uid, name, short, city, state, kind, type_label, desc, list(fields),
        {'website': website, 'admissions': admissions, 'international': admissions,
         'programs': programs, 'scholarships': aid_source, 'cost': cost['source'] if cost else None},
        verified=REVIEWED, sources=[(label, url) for label, url in sources if url],
        checked=[label for label, url in sources if url],
        unconfirmed=[CYCLE_UNKNOWN, *([] if any(r.get('entryYear') == '2027' for r in rounds) else [DEADLINE_UNKNOWN]),
                     *([] if qualifications else [UZ_UNKNOWN]), *unconfirmed],
        programNote=PARTIAL, aliases=aliases, documents=list(documents), rounds=list(rounds),
        intlQuals=qualifications, english=language, merit=list(awards), need=need or {},
        **({'sat': policy} if policy else {}),
        **({'fee': fee(application_fee, FREE_APPLICATION if application_fee == 0 else fee_note,
                       fee_source or admissions, REVIEWED)}
           if application_fee is not None or fee_note else {}),
        **({'costs': cost} if cost else {}),
    )
    record['programsStatus'] = 'partial'
    record['programEvidence'] = {
        field: {'program': program, 'language': 'English', 'url': programs, 'checked': REVIEWED}
        for field, program in fields.items()
    }
    return record


def write(records):
    path = ROOT / 'data/universities.us4.js'
    content = ',\n'.join(json.dumps(record, ensure_ascii=False, indent=2) for record in records)
    path.write_text('/* United States expansion from 250 to 350 profiles. */\n'
                    'window.UNIPATH.universities.push(\n' + content + '\n);\n',
                    encoding='utf-8', newline='\n')
    flush()


def priorities():
    cr = 'https://www.creighton.edu'
    elon = 'https://www.elon.edu'
    elon_base = elon + '/u/admissions/undergraduate/'
    slu = 'https://www.slu.edu'
    cal = 'https://www.calpoly.edu'
    cal_intl = cal + '/admissions/international-student/'
    cpp = 'https://www.cpp.edu'
    drake = 'https://www.drake.edu'
    drake_base = drake + '/admission-aid/'
    creighton_aid = cr + '/cost-aid/types-aid/scholarships'
    elon_aid = elon_base + 'financial-aid/scholarships/merit-based-scholarships/'
    elon_apply = elon_base + 'apply/'
    drake_aid = drake_base + 'financial-aid/scholarships/international-student-grant'
    drake_cost = drake + '/about/offices/accounts/tuitionfees'
    cpp_apply = cpp + '/admissions/international/apply.shtml'
    drake_tuition = costs(
        '2027–2028', drake_cost, REVIEWED, FULL_TIME,
        [(L('Tuition per semester', 'Обучение за семестр'), 27289, 'billed')],
        L('$27,289 per semester in tuition', '$27 289 за семестр обучения'),
        None, None, tuition=27289,
        note=L('Des Moines, 12–18 credits per semester. The Fall 2027 room and board rates are pending on the same page.',
               'Де-Мойн, 12–18 кредитов в семестр. Тарифы на жильё и питание для осени 2027 пока не указаны на этой странице.'))
    drake_tuition['breakdown']['period'] = 'semester'
    return [
        profile(
            'creighton-university', 'Creighton University', 'Creighton', L('Omaha', 'Омаха'), L('Nebraska', 'Небраска'), cr + '/',
            cr + '/admissions/admissions-requirements/international', cr + '/programs/undergraduate-majors-and-minors',
            {'computer-science': 'Computer Science'},
            L('Private Jesuit university. This profile covers the Omaha campus.',
              'Частный иезуитский университет. Профиль относится к кампусу в Омахе.'),
            testing=OPTIONAL, ielts=6.5, ibt=(88, 4.5), det=110,
            english_note=L('IELTS: at least 6 in each section. Check the official TOEFL section requirements for your test scale.',
                           'IELTS: не менее 6 за каждую секцию. Уточните официальные требования по секциям для вашей шкалы TOEFL.'),
            documents=(SECONDARY,), aid_source=creighton_aid,
            rounds=(deadline('creighton-annual-ea', L('1 November', '1 ноября'), cr + '/admissions/dates-deadlines',
                             name=L('Early Action', 'Early Action')),),
            awards=(award('creighton-matteo-ricci', 'Matteo Ricci, SJ Awards', creighton_aid, None,
                          L('International applicants who apply before March 1 are considered. The page gives no entry year.',
                            'Иностранных абитуриентов рассматривают при подаче до 1 марта. Год набора не указан.'),
                          separate=False),),
            cost=published_cost(
                cr + '/cost-aid/tuition-costs/undergraduate-tuition',
                L('Entering Arts and Sciences freshmen', 'Первокурсники факультета искусств и наук'),
                L('$67,832 in direct costs', '$67 832 прямых расходов'),
                [(TUITION, 50580, 'billed'), (FEES, 2322, 'billed'), (FOOD_HOUSING, 14930, 'billed')],
                tuition=50580, billed=67832),
        ),
        profile(
            'elon-university', 'Elon University', 'Elon', L('Elon', 'Илон'), L('North Carolina', 'Северная Каролина'), elon + '/',
            elon_base + 'international-admissions/admissions-requirements/',
            elon_base + 'explore/majors-minors-and-academic-programs/',
            {'computer-science': 'Computer Science', 'business': 'Accounting'},
            L('Private university in North Carolina with undergraduate programs in computing and business.',
              'Частный университет в Северной Каролине с бакалавриатом по информатике и бизнесу.'),
            testing=('conditional', L('Fall 2027: test-optional for general admission. Nursing applicants must submit SAT or ACT.',
                                      'Осень 2027: для общего поступления SAT и ACT необязательны. Для сестринского дела SAT или ACT обязательны.')),
            test_source=elon_apply, application_fee=60, ielts=6.5, ibt=(80, 4), det=110,
            rounds=(deadline('elon-2027-rd', L('10 January 2027', '10 января 2027'), elon_apply,
                             iso='2027-01-10', evidence='For students enrolling in fall 2027',
                             basis='page-context', name=L('Regular Deadline', 'Обычный срок подачи')),),
            documents=(L('Official secondary school records in English, sent by the school',
                         'Официальные документы о среднем образовании на английском, отправленные школой'),),
            aid_source=elon_aid,
            awards=(
                award('elon-presidential', 'Presidential Scholarship', elon_aid,
                      L('$8,000–$12,000 per year', '$8 000–$12 000 в год'),
                      L('Renewal requires acceptable academic performance.',
                        'Для продления нужна удовлетворительная успеваемость.'), separate=False, renewable=True),
                award('elon-engagement', 'Elon Engagement Scholarship', elon_aid,
                      L('$5,000 per year', '$5 000 в год'),
                      L('A separate one-time $2,000 grant is restricted to an approved experience or project.',
                        'Дополнительные $2 000 выдаются один раз на одобренный проект или учебную поездку.'),
                      separate=False, renewable=True),
            ),
            cost=published_cost(
                elon_base + 'financial-aid/tuition-and-aid/', FULL_TIME,
                L('$68,903 in direct costs', '$68 903 прямых расходов'),
                [(TUITION_FEES, 51368, 'billed'), (FOOD_HOUSING, 17535, 'billed')],
                tuition=50386, billed=68903),
        ),
        profile(
            'saint-louis-university', 'Saint Louis University', 'SLU', L('St. Louis', 'Сент-Луис'), L('Missouri', 'Миссури'), slu + '/',
            'https://enroll.slu.edu/admission/international/index.php',
            slu + '/science-and-engineering/academics/undergraduate-programs/index.php',
            {'computer-science': 'Computer Science', 'engineering': 'Aerospace Engineering'},
            L('Private Jesuit university. This profile covers St. Louis, Missouri.',
              'Частный иезуитский университет. Профиль относится к кампусу в Сент-Луисе, штат Миссури.'),
            application_fee=0,
            testing=('optional', L('Scores are optional. Nursing prefers scores and sets minimums if you submit them.',
                                   'Баллы необязательны. Для сестринского дела результаты предпочтительны, а при подаче баллов действуют минимумы.')),
            test_source='https://enroll.slu.edu/admission/freshman/instructions.php',
            english_source=slu + '/admission/international/english-proficiency.php',
            ielts=6.5, ibt=(80, None),
            documents=(SECONDARY, L('Application essay', 'Эссе для поступления')),
            aid_source=slu + '/financial-aid/types-of-aid/scholarships.php',
            unconfirmed=(L('International eligibility and renewal terms for the full-tuition Presidential Scholarship need confirmation.',
                           'Доступность Presidential Scholarship с оплатой обучения для иностранцев и условия продления требуют проверки.'),),
        ),
        profile(
            'cal-poly-san-luis-obispo', 'California Polytechnic State University, San Luis Obispo', 'Cal Poly SLO',
            L('San Luis Obispo', 'Сан-Луис-Обиспо'), L('California', 'Калифорния'), cal + '/',
            cal_intl + 'how-to-apply/application-for-international-first-year-students',
            'https://catalog.calpoly.edu/programs/',
            {'engineering': 'Aerospace Engineering (BS)', 'computer-science': 'Computer Science (BS)'},
            L('Public polytechnic university in San Luis Obispo.', 'Государственный политехнический университет в Сан-Луис-Обиспо.'),
            public=True, application_fee=70, testing=BLIND,
            test_source=cal + '/admissions/first-year-student/selection-criteria',
            english_source=cal_intl + 'selection-criteria/english-exam-requirements',
            ielts=6.5, ibt=(80, 4.5), det=115, documents=(SECONDARY,),
            rounds=(
                deadline('cal-poly-slo-annual-admission', L('30 November', '30 ноября'),
                         cal_intl + 'how-to-apply/application-for-international-first-year-students'),
                deadline('cal-poly-slo-annual-documents', L('15 February', '15 февраля'),
                         cal_intl + 'how-to-apply/application-for-international-first-year-students',
                         kind='documents', name=L('Transcripts and English test scores (general deadline)',
                                                  'Выписки оценок и экзамен по английскому (общий срок)')),
            ),
            aid_source=cal + '/financial-aid/types-of-aid/scholarships/cal-poly-scholarships',
            cost=published_cost(
                cal + '/financial-aid/costs-and-affordability/undergraduate-costs-attendance-2026-2027',
                L('New international students, Engineering, Architecture or Agriculture',
                  'Новые иностранные студенты инженерного, архитектурного или сельскохозяйственного факультетов'),
                L('$69,511 published attendance estimate', '$69 511 по опубликованной смете'),
                [(TUITION_FEES, 15720, 'billed'), (L('Nonresident tuition (30 units)', 'Доплата нерезидента (30 кредитов)'), 14130, 'billed'),
                 (L('Nonresident Opportunity Fee', 'Сбор Opportunity Fee для нерезидентов'), 8804, 'billed'),
                 (HOUSING, 16084, 'billed'), (MEALS, 7056, 'billed'), (INSURANCE, 1533, 'extra'),
                 (L('International student fee', 'Сбор с иностранных студентов'), 900, 'extra')],
                note=L('Example for on-campus housing in 2026–2027. The published estimate is $68,473 for the other colleges listed.',
                       'Пример с проживанием в кампусе на 2026–2027 год. Для других перечисленных факультетов опубликована смета $68 473.')),
        ),
        profile(
            'cal-poly-pomona', 'California State Polytechnic University, Pomona', 'Cal Poly Pomona',
            L('Pomona', 'Помона'), L('California', 'Калифорния'), cpp + '/', cpp + '/admissions/international/freshmen.shtml',
            cpp + '/admissions/freshmen/impacted-majors.shtml',
            {'engineering': 'Aerospace Engineering', 'computer-science': 'Computer Science'},
            L('Public polytechnic university in Pomona, California.', 'Государственный политехнический университет в Помоне, Калифорния.'),
            public=True, testing=BLIND, test_source=cpp + '/admissions/freshmen/freshmen-student-profile.shtml',
            ibt=(71, 4), documents=(SECONDARY,),
            rounds=(deadline('cpp-fall-2027-admission', L('30 November 2026', '30 ноября 2026'),
                             cpp_apply, iso='2026-11-30',
                             evidence='Fall 2027 (Freshmen and Transfer): August 1 - November 30, 2026'),),
            aid_source=cpp + '/financial-aid/scholarships/cal-poly-pomona-scholarships.shtml',
            extra_sources=((L('Fall 2027 application dates', 'Сроки подачи на осень 2027'), cpp_apply),),
            cost=published_cost(
                cpp + '/financial-aid/undergraduate/newly-admitted/costs.shtml',
                L('Nonresident undergraduates living on campus', 'Бакалавриат для нерезидентов с проживанием в кампусе'),
                L('$45,462 published attendance estimate', '$45 462 по опубликованной смете'),
                [(L('Systemwide tuition', 'Общесистемная плата за обучение'), 6838, 'billed'),
                 (L('Nonresident tuition (30 units)', 'Доплата нерезидента (30 кредитов)'), 14130, 'billed'),
                 (FEES, 1728, 'billed'), (HOUSING, 11310, 'extra'), (MEALS, 5600, 'extra')],
                note=L('2026–2027 estimate at 30 units. The nonresident table does not itemize international health insurance.',
                       'Смета на 2026–2027 год при нагрузке 30 кредитов. В таблице для нерезидентов отдельно не указана страховка иностранных студентов.')),
        ),
        profile(
            'drake-university', 'Drake University', 'Drake', L('Des Moines', 'Де-Мойн'), L('Iowa', 'Айова'), drake + '/',
            drake_base + 'international-students', 'https://catalog.drake.edu/undergraduate/',
            {'business': 'Accounting (BSBA)', 'computer-science': 'Computer Science (BA or BS)', 'biology': 'Biology (BA or BS)'},
            L('Private university in Des Moines, Iowa.', 'Частный университет в Де-Мойне, штат Айова.'),
            testing=OPTIONAL, ielts=6, ibt=(71, 4), documents=(SECONDARY,),
            rounds=(deadline('drake-annual-rd', L('1 March', '1 марта'), drake_base + 'first-year-students',
                             name=L('Regular Decision', 'Regular Decision')),),
            aid_source=drake_aid,
            fee_source=drake_cost,
            fee_note=L('The general first-year page says the application is free. Student Accounts lists an undergraduate international application fee of $50 per semester. The charge for this route is unresolved.',
                       'Общая страница первокурсников называет заявку бесплатной. В таблице Student Accounts указан международный сбор $50 за семестр. Сумма для этой категории требует уточнения.'),
            extra_sources=((L('General first-year application fee', 'Общий сбор за заявку первокурсника'),
                            drake_base + 'first-year-students'),),
            cost=drake_tuition,
            need={'availableToInternational': True},
            awards=(award('drake-international-student-grant', 'International Student Grant', drake_aid, None,
                          L('Apply separately after applying for admission. When this grant is awarded, combined aid is capped at 40% of cost of attendance. Renewal requires full-time enrollment and satisfactory academic progress.',
                            'Подайте отдельную заявку после заявления на поступление. При получении этого гранта общая помощь ограничена 40% стоимости. Для продления нужны очное обучение и удовлетворительная успеваемость.'),
                          basis='need', separate=True, renewable=True),),
        ),
    ]


def liberal_arts():
    wheaton_il = 'https://www.wheaton.edu'
    wil_a = wheaton_il + '/admissions-cost-and-aid/undergraduate-admissions/apply-to-wheaton/apply-as-an-international-student/international-applicant-faqs'
    gustavus = 'https://gustavus.edu'
    gustavus_a = gustavus + '/admission-aid/apply/international-student-admission'
    csb = 'https://www.csbsju.edu'
    csb_a = csb + '/admission/international-students/'
    hope = 'https://hope.edu'
    hope_a = hope + '/admissions/international-students.html'
    stm = 'https://www.saintmarys.edu'
    stm_intl = stm + '/admission-aid/first-year-students/international-students/'
    wheaton_ma = 'https://www.wheatoncollege.edu'
    wma_a = wheaton_ma + '/admission/international-students/international-faq/'
    rmc = 'https://www.rmc.edu'
    rmc_a = rmc + '/admissions-and-aid/how-to-apply/international/'
    stonehill = 'https://www.stonehill.edu'
    stone_a = stonehill + '/apply-for-admission/international-applicants/how-to-apply/'
    susquehanna = 'https://www.susqu.edu'
    susq_a = susquehanna + '/admission/apply/international-students/'
    aug = 'https://www.augustana.edu'
    aug_a = aug + '/admissions/apply/international/procedure'
    juniata = 'https://www.juniata.edu'
    jun_a = juniata + '/admission/apply/international-application-costs.php'
    southwest = 'https://www.southwestern.edu'
    sw_a = southwest + '/admission/international-students/'
    austin = 'https://www.austincollege.edu'
    austin_a = austin + '/admission/apply/'
    lc = 'https://college.lclark.edu'
    lc_base = lc + '/offices/admissions/international-students/'
    wash = 'https://www.washcoll.edu'
    wash_a = wash + '/admissions/apply/international-students/index.php'
    suny = 'https://www.geneseo.edu'
    suny_a = suny + '/admissions/how-apply-geneseo-international-student/'
    ups = 'https://www.pugetsound.edu'
    ups_a = ups + '/admission/international-students/first-year-international-students'
    matelich_a = ups + '/admission/cost-aid/types-aid/scholarships-grants/matelich-scholarship-puget-sound'
    whittier = 'https://www.whittier.edu'
    whittier_a = whittier + '/admission/applying/international'
    part = L('The award covers only part of attendance costs.', 'Стипендия покрывает только часть расходов.')
    separate = L('Separate application for need-based aid.', 'Для помощи по финансовой нуждаемости нужна отдельная заявка.')

    def liberal(uid, name, short, city, state, home, admissions, programs, fields, desc, **kwargs):
        return profile(uid, name, short, city, state, home + '/', admissions, programs, fields,
                       desc, liberal=not kwargs.get('public'), **kwargs)

    schools = [
        liberal(
            'wheaton-college-illinois', 'Wheaton College (Illinois)', 'Wheaton IL',
            L('Wheaton', 'Уитон'), 'Illinois', wheaton_il, wil_a, 'https://catalog.wheaton.edu/undergraduate/programs/',
            {'biology': 'Biology (BA or BS)', 'engineering': 'Engineering (BS, four-year program)'},
            L('Christian liberal arts college in Wheaton, Illinois.', 'Христианский колледж свободных искусств в Уитоне, штат Иллинойс.'),
            aid_source=wil_a, need={'availableToInternational': True},
            awards=(award('wheaton-il-international-merit', L('International merit scholarships', 'Академические стипендии для иностранцев'),
                          wil_a, L('$8,000–$24,000 per year', '$8 000–$24 000 в год'),
                          L('Renewable for up to eight semesters with full-time enrollment. Aequitas uses a separate invitation process.',
                            'Продлевается до восьми семестров при очном обучении. У Aequitas отдельный отбор по приглашениям.'),
                          separate=False, renewable=True),),
        ),
        liberal(
            'gustavus-adolphus-college', 'Gustavus Adolphus College', 'Gustavus',
            L('St. Peter', 'Сент-Питер'), 'Minnesota', gustavus, gustavus_a,
            gustavus + '/academics/majors-minors/accounting', {'business': 'Accounting'},
            L('Liberal arts college in St. Peter, Minnesota.', 'Колледж свободных искусств в Сент-Питере, штат Миннесота.'),
            testing=OPTIONAL, ielts=6.5, ibt=(None, 5), det=110, application_fee=0,
            fee_source=gustavus + '/admission-aid/apply', documents=(SECONDARY,),
            rounds=(deadline('gustavus-annual-fall', L('1 April', '1 апреля'), gustavus_a),),
            aid_source=gustavus_a,
            awards=(award('gustavus-bernadotte', 'Count Folke Bernadotte Scholarship', gustavus_a, '$43,000',
                          L('The international page lists $43,000 and requires proof of at least $33,800 per year in available funds.',
                            'На международной странице указаны $43 000 и требование подтвердить наличие не менее $33 800 в год.'),
                          separate=False),),
            cost=published_cost(gustavus + '/admission-aid/financial-aid/costs-and-value', FULL_TIME,
                                L('$59,624 in tuition', '$59 624 за обучение'), [(TUITION, 59624, 'billed')], tuition=59624),
        ),
        liberal(
            'hope-college', 'Hope College', 'Hope', L('Holland', 'Холланд'), 'Michigan',
            hope, hope_a, 'https://www.hope.edu/admissions/why-hope/majors-programs.html', {'biology': 'Biology'},
            L('Liberal arts college in Holland, Michigan.', 'Колледж свободных искусств в Холланде, штат Мичиган.'),
            testing=('optional', L('Hope encourages SAT or ACT scores for international applicants. The scores are optional.',
                                   'Hope рекомендует иностранным абитуриентам результаты SAT или ACT. Их подача необязательна.')),
            ielts=6.5, ibt=(79, None), documents=(SECONDARY,),
            english_note=L('IELTS: at least 6 in each section. TOEFL on the 0–120 scale: at least 18 in each section.',
                           'IELTS: не менее 6 за каждую секцию. TOEFL по шкале 0–120: не менее 18 за каждую секцию.'),
            aid_source=hope_a, awards=(award('hope-international-merit', L('International merit scholarship', 'Академическая стипендия для иностранцев'),
                                              hope_a, L('Up to $30,000', 'До $30 000'), part, separate=False),),
            cost=published_cost(hope_a, PROSPECTIVE, L('$64,420 for two semesters before personal expenses',
                                                     '$64 420 за два семестра без личных расходов'),
                                [(TUITION_FEES, 46980, 'billed'), (FOOD_HOUSING, 13940, 'billed'),
                                 (L('Insurance, books and supplies', 'Страховка, учебники и материалы'), 3500, 'extra')]),
        ),
        liberal(
            'saint-marys-college-indiana', 'Saint Mary’s College (Indiana)', 'Saint Mary’s IN',
            L('Notre Dame', 'Нотр-Дам'), 'Indiana', stm, stm_intl + 'international-requirements',
            'https://catalog.saintmarys.edu/undergraduate/programs/art/', {'arts': 'Applied Arts and Design (BA)'},
            L('Liberal arts college in Notre Dame, Indiana.', 'Колледж свободных искусств в Нотр-Даме, штат Индиана.'),
            english_note=L('The international page gives guidance, not minimum scores: IELTS 6.5, TOEFL 80 on the older scale or 4.5 on the newer scale.',
                           'На международной странице приведены ориентиры, а не минимумы: IELTS 6,5, TOEFL 80 по старой шкале или 4,5 по новой.'),
            aid_source=stm_intl + 'tuition-scholarships', need={'availableToInternational': True, 'meetsFullNeed': False},
            cost=published_cost(stm_intl + 'tuition-scholarships', PROSPECTIVE,
                                L('Approximately $77,564 in attendance costs', 'Около $77 564 расходов за год'),
                                [(TUITION_FEES, 56746, 'billed'), (FOOD_HOUSING, 15468, 'billed')],
                                note=L('2026–2027 international budget. College health insurance is required.',
                                       'Смета для иностранных студентов на 2026–2027 год. Страховка колледжа обязательна.')),
        ),
        liberal(
            'wheaton-college-massachusetts', 'Wheaton College (Massachusetts)', 'Wheaton MA',
            L('Norton', 'Нортон'), 'Massachusetts', wheaton_ma, wma_a,
            wheaton_ma + '/academics/programs/', {'biology': 'Biology'},
            L('Liberal arts college in Norton, Massachusetts.', 'Колледж свободных искусств в Нортоне, штат Массачусетс.'),
            english_note=L('The international FAQ gives a recommended IELTS score of 6.5.',
                           'В справочнике для иностранных абитуриентов рекомендован IELTS 6,5.'),
            aid_source='https://wheatoncollege.edu/about-wheaton-college/offices-services/student-financial-services/financing-options/information-for-international-students/',
            cost=costs('2027–2028', 'https://wheatoncollege.edu/news/wheaton-announces-new-tuition-pricing-for-fall-2027/',
                       REVIEWED, FULL_TIME, [(TUITION, 39000, 'billed')],
                       L('$39,000 in tuition', '$39 000 за обучение'), None, None, tuition=39000,
                       note=L('Tuition only. Housing, meals and other expenses are additional.',
                              'Только обучение. Жильё, питание и другие расходы оплачиваются отдельно.')),
        ),
        liberal(
            'randolph-macon-college', 'Randolph–Macon College', 'Randolph–Macon',
            L('Ashland', 'Ашленд'), 'Virginia', rmc, rmc_a, 'https://catalog.rmc.edu/programs/',
            {'biology': 'Biology'},
            L('Liberal arts college in Ashland, Virginia.', 'Колледж свободных искусств в Ашленде, штат Вирджиния.'),
            application_fee=0, ielts=6.5, ibt=(80, None), det=105, documents=(SECONDARY,),
            rounds=(deadline('rmc-annual-fall', L('15 May', '15 мая'), rmc_a),),
            aid_source=rmc_a, awards=(award('randolph-macon-merit', L('Academic merit scholarships', 'Академические стипендии'),
                                             rmc_a, L('Up to $34,000 per year', 'До $34 000 в год'), part, separate=False),),
        ),
        liberal(
            'stonehill-college', 'Stonehill College', 'Stonehill', L('Easton', 'Истон'),
            'Massachusetts', stonehill, stone_a, stonehill + '/programs/', {'biology': 'Biology'},
            L('Liberal arts college in Easton, Massachusetts.', 'Колледж свободных искусств в Истоне, штат Массачусетс.'),
            english_note=L('Recommended scores: IELTS 6.5, TOEFL iBT 80, or Duolingo 120.',
                           'Рекомендуемые баллы: IELTS 6,5, TOEFL iBT 80 или Duolingo 120.'),
            aid_source=stone_a, need={'availableToInternational': False},
            awards=(award('stonehill-international-merit', L('Merit scholarships', 'Академические стипендии'),
                          stone_a, L('$25,000–$40,000 per year', '$25 000–$40 000 в год'), part),),
            unconfirmed=(L('The international page describes a test-blind policy for 2026 only. The Fall 2027 policy was not established.',
                           'Международная страница описывает отбор без учёта SAT и ACT только для 2026 года. Политика на осень 2027 не установлена.'),),
        ),
        liberal(
            'susquehanna-university', 'Susquehanna University', 'Susquehanna', L('Selinsgrove', 'Селинсгров'),
            'Pennsylvania', susquehanna, susq_a, 'https://catalog.susqu.edu/curriculumandlearning/majorsandminors',
            {'biology': 'Biology'},
            L('Liberal arts university in Selinsgrove, Pennsylvania.', 'Университет свободных искусств в Селинсгрове, штат Пенсильвания.'),
            application_fee=0, testing=('optional', L('Optional for admission. Scores may help when competing for merit aid.',
                                                       'Необязательны для поступления. Результаты могут помочь в конкурсе на академическую стипендию.')),
            ielts=6, ibt=(80, None), det=110, documents=(SECONDARY,),
            aid_source=susquehanna + '/admission/tuition-cost/tuition-cost-for-international-students/',
        ),
        liberal(
            'augustana-college-illinois', 'Augustana College (Illinois)', 'Augustana IL', L('Rock Island', 'Рок-Айленд'),
            'Illinois', aug, aug_a, aug + '/academics/catalog/areas-of-study',
            {'biology': 'Biology', 'engineering': 'Engineering (BS)'},
            L('Liberal arts college in Rock Island, Illinois.', 'Колледж свободных искусств в Рок-Айленде, штат Иллинойс.'),
            ielts=6.5, english_source=aug_a + '/english', documents=(SECONDARY,),
            rounds=(deadline('augustana-il-annual-rd', L('1 April', '1 апреля'), aug_a,
                             name=L('Regular Decision', 'Regular Decision')),),
            cost=published_cost(aug + '/about-us/offices/business/student-charges-2026-27', FULL_TIME,
                                L('$68,442 comprehensive charge', '$68 442 по базовому счёту'),
                                [(TUITION, 55048, 'billed'), (FOOD_HOUSING, 13224, 'billed'),
                                 (L('Health clinic fee', 'Сбор за студенческую клинику'), 170, 'billed')],
                                tuition=55048, billed=68442),
        ),
        liberal(
            'juniata-college', 'Juniata College', 'Juniata', L('Huntingdon', 'Хантингдон'),
            'Pennsylvania', juniata, jun_a, juniata + '/academics/areas-of-study.php', {'biology': 'Biology'},
            L('Liberal arts college in Huntingdon, Pennsylvania.', 'Колледж свободных искусств в Хантингдоне, штат Пенсильвания.'),
            application_fee=50, documents=(SECONDARY,),
            testing=('conditional', L('Test-optional admission is available. Nursing applicants must submit SAT, ACT or TEAS.',
                                      'Есть подача без SAT и ACT. Для сестринского дела требуется SAT, ACT или TEAS.')),
            english_note=L('The international page lists 80 as the preferred TOEFL iBT score and also gives a 79 minimum with section requirements. Confirm which threshold applies.',
                           'На международной странице указан предпочтительный TOEFL iBT 80, а также минимум 79 с требованиями по секциям. Уточните применимый порог.'),
            ielts=6.5, aid_source=juniata + '/admission/scholarships-and-aid/scholarships.php',
            rounds=(deadline('juniata-annual-rd', L('15 March', '15 марта'), jun_a, name=L('Regular Decision', 'Regular Decision')),),
        ),
        liberal(
            'southwestern-university', 'Southwestern University', 'Southwestern', L('Georgetown', 'Джорджтаун'),
            'Texas', southwest, sw_a, southwest + '/academics/majors-minors/', {'biology': 'Biology'},
            L('Liberal arts university in Georgetown, Texas.', 'Университет свободных искусств в Джорджтауне, штат Техас.'),
            ielts=6.5, ibt=(88, None), testing=OPTIONAL, documents=(SECONDARY,),
            aid_source=southwest + '/scholarships-financial-aid/scholarships/',
        ),
        liberal(
            'austin-college', 'Austin College', 'Austin College', L('Sherman', 'Шерман'), 'Texas',
            austin, austin_a, austin + '/academics/majors-and-minors/', {'biology': 'Biology'},
            L('Liberal arts college in Sherman, Texas.', 'Колледж свободных искусств в Шермане, штат Техас.'),
            ielts=6.5, ibt=(80, None), det=110,
            testing=('conditional', L('Applicants studying abroad whose primary language is not English must provide one of the accepted tests. An English proficiency test can be used instead of SAT or ACT.',
                                      'Абитуриентам из зарубежных школ, для которых английский не основной язык, нужен один из принимаемых экзаменов. Вместо SAT или ACT можно подать экзамен по английскому.')),
            documents=(SECONDARY,), aid_source=austin + '/admission/scholarships',
        ),
        liberal(
            'lewis-and-clark-college', 'Lewis & Clark College', 'Lewis & Clark', L('Portland', 'Портленд'),
            'Oregon', lc, lc_base + 'application-checklist/',
            'https://docs.lclark.edu/undergraduate/policiesprocedures/majorsminors/', {'biology': 'Biology'},
            L('Liberal arts college in Portland, Oregon.', 'Колледж свободных искусств в Портленде, штат Орегон.'),
            testing=BLIND, application_fee=0, documents=(SECONDARY,),
            aid_source=lc_base + 'financial-aid/', need={'availableToInternational': True},
            awards=(award('lewis-clark-international-need', 'International Student Grant', lc_base + 'financial-aid/',
                          None, separate, basis='need', separate=True),),
        ),
        liberal(
            'washington-college-maryland', 'Washington College (Maryland)', 'Washington College',
            L('Chestertown', 'Честертаун'), 'Maryland', wash, wash_a, wash + '/academics/programs.php',
            {'biology': 'Biology'},
            L('Liberal arts college in Chestertown, Maryland.', 'Колледж свободных искусств в Честертауне, штат Мэриленд.'),
            ielts=6.5, ibt=(90, 4.5), documents=(SECONDARY,),
            testing=('conditional', L('International applicants may use SAT or ACT as evidence of English proficiency. The test-optional form has separate language eligibility.',
                                      'Иностранные абитуриенты могут подтвердить английский результатом SAT или ACT. Для формы подачи без тестов действуют отдельные языковые условия.')),
            aid_source=wash_a, awards=(award('washington-ferguson', 'Ferguson Grant', wash_a,
                                             L('$33,000–$38,000 per year', '$33 000–$38 000 в год'), part),),
        ),
        liberal(
            'suny-geneseo', 'SUNY Geneseo', 'SUNY Geneseo', L('Geneseo', 'Дженесео'), 'New York', suny,
            suny_a, suny + '/curriculum/programs/', {'biology': 'Biology'},
            L('Public liberal arts college in Geneseo, New York.', 'Государственный колледж свободных искусств в Дженесео, штат Нью-Йорк.'),
            public=True, testing=OPTIONAL, ielts=6, ibt=(72, 4), det=105, documents=(SECONDARY,),
            english_note=L('IELTS: at least 5.5 in each section.', 'IELTS: не менее 5,5 за каждую секцию.'),
            aid_source=suny + '/international/cost-scholarships',
            awards=(award('geneseo-international-merit', L('International tuition scholarship', 'Стипендия на обучение для иностранцев'),
                          suny + '/international/cost-scholarships', L('Up to $10,000 per year', 'До $10 000 в год'),
                          L('SAT and ACT are not considered for merit scholarships.',
                            'SAT и ACT не учитываются при назначении академических стипендий.'), separate=False),),
        ),
        liberal(
            'university-of-puget-sound', 'University of Puget Sound', 'Puget Sound',
            L('Tacoma', 'Такома'), 'Washington', ups, ups_a, ups + '/academics/academic-programs/academic-programs-list',
            {'biology': 'Biology'},
            L('Liberal arts university in Tacoma, Washington.', 'Университет свободных искусств в Такоме, штат Вашингтон.'),
            english_note=L('Recommended scores: IELTS 6.5, TOEFL iBT 80, or Duolingo 105.',
                           'Рекомендуемые баллы: IELTS 6,5, TOEFL iBT 80 или Duolingo 105.'),
            testing=('conditional', L('Test-optional admission is available with English-medium schooling or other proof of English. The Lillis and Matelich competitions require scores.',
                                      'Можно подать без SAT и ACT при обучении на английском или другом подтверждении языка. Для конкурсов Lillis и Matelich нужны баллы.')),
            aid_source=ups_a, awards=(award('puget-international', 'International Student Scholarship', ups_a,
                                            L('$2,000 per year', '$2 000 в год'), part),),
            extra_sources=((L('Matelich Scholarship terms', 'Условия Matelich Scholarship'), matelich_a),),
        ),
        liberal(
            'whittier-college', 'Whittier College', 'Whittier', L('Whittier', 'Уиттиер'), 'California',
            whittier, whittier_a, whittier + '/academics/programs', {'biology': 'Biology'},
            L('Liberal arts college in Whittier, California.', 'Колледж свободных искусств в Уиттиере, штат Калифорния.'),
            application_fee=0, ielts=6.5, ibt=(80, None), testing=BLIND,
            test_source=whittier + '/admission/applying/firstyear', documents=(SECONDARY,),
            aid_source=whittier + '/financialaid/international',
            cost=published_cost(whittier + '/businessoffice/charges', FULL_TIME,
                                L('$53,464 in tuition', '$53 464 за обучение'), [(TUITION, 53464, 'billed')], tuition=53464),
        ),
    ]
    csb_common = {
        'testing': ('optional', L('SAT and ACT are recommended but not required.',
                                  'SAT и ACT рекомендуются, но не обязательны.')),
        'documents': (SECONDARY,),
        'aid_source': csb_a,
        'awards': (award('csbsju-international-scholarships',
                         L('International scholarships', 'Стипендии для иностранцев'), csb_a,
                         L('Up to $40,000 per year', 'До $40 000 в год'), part, separate=False, renewable=True),),
    }
    csb_program = 'https://catalog.csbsju.edu/catalog/academic-departments/biology/biology-major/'
    schools.extend([
        liberal('college-of-saint-benedict', 'College of Saint Benedict', 'Saint Benedict',
                L('St. Joseph', 'Сент-Джозеф'), 'Minnesota', csb, csb_a, csb_program, {'biology': 'Biology'},
                L('College in St. Joseph. It shares undergraduate teaching with Saint John’s University in Minnesota.',
                  'Колледж в Сент-Джозефе. Бакалавриат организован совместно с Saint John’s University в Миннесоте.'), **csb_common),
        liberal('saint-johns-university-minnesota', 'Saint John’s University (Minnesota)', 'Saint John’s MN',
                L('Collegeville', 'Колледжвилл'), 'Minnesota', csb, csb_a, csb_program, {'biology': 'Biology'},
                L('University in Collegeville. It shares undergraduate teaching with College of Saint Benedict.',
                  'Университет в Колледжвилле. Бакалавриат организован совместно с College of Saint Benedict.'), **csb_common),
    ])
    puget = next(record for record in schools if record['id'] == 'university-of-puget-sound')
    puget['scholarships']['fullRide'] = {
        'id': 'puget-matelich', 'name': 'Matelich Scholarship', 'available': True,
        'internationalEligible': True, 'basis': 'merit', 'category': 'merit',
        'covers': {'tuition': True, 'housing': True, 'meals': True, 'books': None, 'insurance': None},
        'renewable': True,
        'renewalConditions': L('Maintain a GPA of 3.50 or rank in the top quarter of the class. Submit an annual report.',
                               'Сохраняйте GPA 3,50 или место в первой четверти курса и подавайте ежегодный отчёт.'),
        'competitiveness': L('Two awards per fall entering class.', 'Две стипендии на осенний набор.'),
        'howToApply': L('Submit the admission application and a separate scholarship application.',
                        'Подайте заявление на поступление и отдельную заявку на стипендию.'),
        'note': L('Covers a standard double room and the standard medium meal plan for up to four years. Coverage of books, insurance and travel is unconfirmed.',
                  'До четырёх лет покрывает стандартную двухместную комнату и стандартный средний план питания. Покрытие книг, страховки и поездок не подтверждено.'),
        'source': matelich_a, 'verified': REVIEWED, 'deadlineScope': 'annual-rule',
    }
    matelich_date = deadline('puget-matelich-annual', L('1 December', '1 декабря'), matelich_a,
                            kind='scholarship', name='Matelich Scholarship')
    matelich_date.update(awardId='puget-matelich', awardCategory='merit')
    puget['admissions']['deadlines'].append(matelich_date)
    return schools


if __name__ == '__main__':
    write(priorities() + liberal_arts())
