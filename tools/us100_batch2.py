"""Build the second USA expansion batch from reviewed university pages."""

import json
from pathlib import Path

import us100_batch1 as b
from us200_std import L, flush


ROOT = Path(__file__).resolve().parents[1]
REVIEWED = '2026-11-13'
CSU_TESTING = 'https://www.calstate.edu/apply/freshman/getting_into_the_csu/pages/testing-requirements.aspx'
TAC_TEST_SOURCE = 'https://www.thomasaquinas.edu/admissions/apply/standardized-testing'
TAC_NEED = L('The college assesses family and student contributions and assumes a $5,750 annual loan before applying grants and work-study to remaining tuition, housing and meals. Insurance, travel and personal expenses are excluded.',
             'Колледж рассчитывает взносы семьи и студента и предполагает заём $5 750 в год. Грант и работа в кампусе покрывают остаток расходов на обучение, жильё и питание. Страховка, поездки и личные расходы не покрываются.')
TAC_TEST = ('conditional', L('Submit SAT, ACT or CLT scores. The college accepts any one of these tests.',
                             'Предоставьте результаты SAT, ACT или CLT. Колледж принимает любой из этих тестов.'))
PRINCIPIA_TEST = ('optional', L('Optional for admission. Strong scores can affect merit scholarship eligibility.',
                               'Необязательны для поступления. Высокие баллы могут повлиять на право на академическую стипендию.'))
POINT_LOMA_TEST = ('optional', L('Optional for admission. Some merit awards still require test scores.',
                                'Необязательны для поступления. Для некоторых академических стипендий баллы требуются.'))
DALLAS_TEST = ('conditional', L('International applicants must submit official ACT, SAT or CLT scores. English proficiency has separate rules.',
                               'Иностранные абитуриенты подают официальный результат ACT, SAT или CLT. Для подтверждения английского действуют отдельные правила.'))
MONTEREY_SCOPE = L('The grant page names degree-seeking students. Eligibility before initial enrollment, renewal and the Fall 2027 award deadline remain unconfirmed.',
                  'Страница гранта описывает студентов программ с получением степени. Допуск до первого зачисления, продление и срок на осень 2027 не подтверждены.')


def make_records():
    previous_review_date = b.REVIEWED
    b.REVIEWED = REVIEWED
    try:
        return build_profiles()
    finally:
        b.REVIEWED = previous_review_date


def make_profile(uid, name, city, city_ru, region, region_ru, website, admissions, programs,
                 program, field, *, short=None, kind=None, application_fee=None, ielts=None,
                 ibt=None, det=None, aid_source=None, **kwargs):
    public = kind in ('csu', 'public')
    if kind == 'csu':
        kwargs.update(testing=b.BLIND, test_source=CSU_TESTING)
    label = L(f'Undergraduate study in {city}, {region}.',
              f'Бакалавриат, кампус: {city_ru}, штат {region_ru}.')
    return b.profile(uid, name, short or name, L(city, city_ru), L(region, region_ru), website,
                     admissions, programs, {field: program}, label, public=public,
                     liberal=kind == 'liberal', application_fee=application_fee, ielts=ielts,
                     ibt=ibt, det=det, aid_source=aid_source, **kwargs)


def build_profiles():
    tac_cost_source = 'https://www.thomasaquinas.edu/financialaid/cost-attendance'
    anselm_cost_source = 'https://www.anselm.edu/about/offices-centers-institutes/finance-administration/student-accounts-billing/tuition-and-expenses'
    lycoming_cost_source = 'https://www.lycoming.edu/catalog/financial.aspx'
    bothell_cost_source = 'https://www.uwb.edu/catalog/tuition-fees-financial-aid'
    tac_cost = b.published_cost(
        tac_cost_source, b.FULL_TIME, L('$43,700 in direct costs', '$43 700 прямых расходов'),
        [(b.TUITION, 31900, 'billed'), (b.FOOD_HOUSING, 11800, 'billed')], tuition=31900, billed=43700)
    anselm_cost = b.published_cost(
        anselm_cost_source, b.FULL_TIME, L('$70,630 published institutional estimate', '$70 630 по опубликованной смете колледжа'),
        [(b.TUITION, 50600, 'billed'), (b.FOOD_HOUSING, 18400, 'billed'), (b.FEES, 1630, 'billed')],
        tuition=50600, billed=70630)
    lycoming_cost = b.published_cost(
        lycoming_cost_source, b.FULL_TIME, L('$67,306 for tuition, standard housing and food', '$67 306 за обучение, стандартное жильё и питание'),
        [(b.TUITION, 52416, 'billed'), (b.HOUSING, 7594, 'billed'), (b.MEALS, 7296, 'billed')],
        tuition=52416, billed=67306,
        note=L('2026–2027. Fees and mandatory international health insurance are additional. The catalog lists the insurance amount as pending.',
               '2026–2027. Сборы и обязательная страховка иностранного студента оплачиваются отдельно. Размер страховки в каталоге ещё не указан.'))
    bothell_cost = b.published_cost(
        bothell_cost_source, L('Nonresident undergraduate tuition', 'Обучение в бакалавриате для нерезидентов'),
        L('$45,822 in nonresident tuition', '$45 822 за обучение для нерезидентов'),
        [(b.TUITION, 45822, 'billed')], tuition=45822)
    western_source = 'https://admissions.wwu.edu/international/tuition-scholarships'
    western_cost = b.published_cost(
        western_source, b.PROSPECTIVE,
        L('$54,419 published annual attendance estimate', '$54 419 по опубликованной годовой смете'),
        [(b.TUITION, 27717, 'billed'), (b.FEES, 1974, 'billed'),
         (L('New student enrollment fee', 'Сбор при зачислении'), 450, 'billed'),
         (b.FOOD_HOUSING, 16893, 'billed'), (b.INSURANCE, 1502, 'extra'),
         (L('Books and supplies', 'Учебники и материалы'), 1224, 'extra'),
         (L('Transportation', 'Транспорт'), 2691, 'extra'),
         (L('Personal and miscellaneous expenses', 'Личные и прочие расходы'), 1968, 'extra')],
        tuition=27717)
    return [
        make_profile(
            "thomas-aquinas-college", "Thomas Aquinas College", "Santa Paula", "Санта-Паула", "California", "Калифорния",
            "https://www.thomasaquinas.edu/",
            "https://www.thomasaquinas.edu/admissions/apply",
            "https://www.thomasaquinas.edu/a-liberating-education/degree", "Liberal Arts (BA)", "humanities",
            kind="liberal", application_fee=0, aid_source="https://www.thomasaquinas.edu/financialaid/how-apply-financial-aid/international-students",
            need={'availableToInternational': True, 'forms': ['CSS Profile'], 'note': TAC_NEED},
            testing=TAC_TEST, test_source=TAC_TEST_SOURCE,
            cost=tac_cost),
        make_profile(
            "saint-anselm-college", "Saint Anselm College", "Manchester", "Манчестер", "New Hampshire", "Нью-Гэмпшир",
            "https://www.anselm.edu/",
            "https://www.anselm.edu/admission/apply/international-applicants/international-first-year-applicants",
            "https://www.anselm.edu/academics/majors-minors/biology", "Biology", "biology",
            kind="liberal", application_fee=50, ielts=6.5, ibt=(80, None), det=115,
            testing=b.OPTIONAL, test_source='https://www.anselm.edu/admission/apply/first-year-applicants',
            cost=anselm_cost, awards=(anselm_merit("https://www.anselm.edu/admission/apply/international-applicants/international-first-year-applicants"),),
            fee_note=L('A waiver is available to qualifying first-generation international applicants.',
                       'Иностранные абитуриенты первого поколения могут получить освобождение от сбора.')),
        make_profile(
            "principia-college", "Principia College", "Elsah", "Элса", "Illinois", "Иллинойс",
            "https://www.principiacollege.edu/",
            "https://www.principiacollege.edu/admissions/apply/international-students",
            "https://catalog.principiacollege.edu/majors-minors/", "Biology and Natural Resources", "biology",
            kind="liberal", application_fee=75, ielts=6.5, ibt=(80, None), det=115,
            testing=PRINCIPIA_TEST, rounds=(principia_deadline("https://www.principiacollege.edu/admissions/apply/international-students"),), awards=(principia_merit("https://www.principiacollege.edu/admissions/apply/international-students"),)),
        make_profile(
            "lycoming-college", "Lycoming College", "Williamsport", "Уильямспорт", "Pennsylvania", "Пенсильвания",
            "https://www.lycoming.edu/",
            "https://www.lycoming.edu/admissions/apply/international/",
            "https://www.lycoming.edu/biology/", "Biology", "biology",
            kind="liberal", ielts=6, ibt=(70, None), det=100,
            testing=b.OPTIONAL, cost=lycoming_cost,
            fee_note=L('The college waives the Common Application fee for international applicants.',
                       'Колледж освобождает иностранных абитуриентов от сбора за Common Application.'),
            awards=(lycoming_merit("https://www.lycoming.edu/admissions/apply/international/"),), need={'availableToInternational': False}),
        make_profile(
            "saint-marys-college-california", "Saint Mary’s College of California", "Moraga", "Морага", "California", "Калифорния",
            "https://www.stmarys-ca.edu/",
            "https://www.stmarys-ca.edu/admissions-aid/undergraduate/international-admissions",
            "https://www.stmarys-ca.edu/arts-sciences/biology/biology-bs", "Biology (BS)", "biology",
            ielts=6.5, ibt=(80, 4), det=105, aid_source="https://www.stmarys-ca.edu/financial-aid/scholarships/international-undergraduate-scholarships"),
        make_profile(
            "university-of-redlands", "University of Redlands", "Redlands", "Редлендс", "California", "Калифорния",
            "https://www.redlands.edu/",
            "https://www.redlands.edu/admissions-and-aid/international/how-to-apply",
            "https://catalog.redlands.edu/programs/BS.BIOL", "Biology (BS)", "biology",
            ielts=6.5, ibt=(80, 4), det=105, aid_source="https://www.redlands.edu/admissions-and-aid/international/tuition-and-fees",
            rounds=(b.deadline('redlands-rd', L('15 January', '15 января'),
                              'https://www.redlands.edu/admissions-and-aid/international/how-to-apply',
                              name=L('Regular Decision', 'Regular Decision')),)),
        make_profile(
            "university-of-washington-bothell", "University of Washington Bothell", "Bothell", "Ботелл", "Washington", "Вашингтон",
            "https://www.uwb.edu/",
            "https://www.uwb.edu/admissions/apply/international/first-year",
            "https://www.uwb.edu/stem/undergraduate/majors/biology", "Biology (BS)", "biology",
            kind="public", application_fee=85, ielts=6.5, ibt=(83, 4), det=105, aid_source="https://www.uwb.edu/financial-aid/aid-for-international-students",
            rounds=bothell_dates(), cost=bothell_cost,
            english_source='https://www.uwb.edu/admissions/apply/english-language-proficiency',
            fee_source='https://www.uwb.edu/admissions/apply/first-year/how-to-apply'),
        make_profile(
            "st-edwards-university", "St. Edward’s University", "Austin", "Остин", "Texas", "Техас",
            "https://www.stedwards.edu/",
            "https://www.stedwards.edu/admission/international",
            "https://www.stedwards.edu/academics/majors-programs/biology", "Biology (BA or BS)", "biology",
            application_fee=50, aid_source="https://www.stedwards.edu/cost-aid/financial-aid/international-students",
            testing=b.OPTIONAL,
            fee_note=L('The fee is waived during the Early Application rounds.',
                       'При подаче в раундах Early Application сбор отменяется.')),
        make_profile(
            "dominican-university-of-california", "Dominican University of California", "San Rafael", "Сан-Рафаэль", "California", "Калифорния",
            "https://www.dominican.edu/",
            "https://www.dominican.edu/admissions/international-admissions",
            "https://www.dominican.edu/academics/undergraduate-programs/biological-sciences", "Biological Sciences (BA or BS)", "biology",
            ielts=6.5, ibt=(80, None), det=105, aid_source="https://www.dominican.edu/admissions/tuition-and-financial-aid/scholarships-and-grants/undergraduate-scholarships-and-grants"),
        make_profile(
            "university-of-washington-tacoma", "University of Washington Tacoma", "Tacoma", "Такома", "Washington", "Вашингтон",
            "https://www.tacoma.uw.edu/",
            "https://www.tacoma.uw.edu/admissions/international-undergraduate-admissions",
            "https://www.tacoma.uw.edu/sias/sam/biomedical-sciences", "Biomedical Sciences", "biology",
            kind="public", application_fee=75, ielts=6.5, ibt=(76, 4), det=110,
            english_source='https://www.tacoma.uw.edu/catalog/english-proficiency-requirements'),
        make_profile(
            "point-loma-nazarene-university", "Point Loma Nazarene University", "San Diego", "Сан-Диего", "California", "Калифорния",
            "https://www.pointloma.edu/",
            "https://www.pointloma.edu/undergraduate/admissions/how-apply",
            "https://www.pointloma.edu/schools-departments-colleges/department-biology", "Biology", "biology",
            aid_source="https://www.pointloma.edu/undergraduate/cost-financial-aid/scholarships",
            testing=POINT_LOMA_TEST),
        make_profile(
            "new-mexico-tech", "New Mexico Institute of Mining and Technology", "Socorro", "Сокорро", "New Mexico", "Нью-Мексико",
            "https://www.nmt.edu/",
            "https://www.nmt.edu/studentaffairs/intlprograms/intlstudents/",
            "https://www.nmt.edu/academics/biology/undergrad.php", "Biology (BS)", "biology",
            short="New Mexico Tech", kind="public", ielts=6.5, ibt=(79, None), det=105),
        make_profile(
            "university-of-dallas", "University of Dallas", "Irving", "Ирвинг", "Texas", "Техас",
            "https://udallas.edu/",
            "https://udallas.edu/admissions-aid/undergraduate/international-students/",
            "https://udallas.edu/academics/programs/biology-bs/", "Biology (BS)", "biology",
            application_fee=50, ielts=6.5, ibt=(80, 4.5), det=110,
            testing=DALLAS_TEST),
        make_profile(
            "cal-state-monterey-bay", "California State University, Monterey Bay", "Seaside", "Сисайд", "California", "Калифорния",
            "https://csumb.edu/",
            "https://csumb.edu/international/program-options/bachelors-degree/bachelors-admission-requirements/",
            "https://csumb.edu/biologychemistry/biology-bs/", "Biology (BS)", "biology",
            short="Cal State Monterey Bay", kind="csu", ielts=6, ibt=(61, None), aid_source="https://csumb.edu/international/student-resources/scholarships/",
            awards=(monterey_grant("https://csumb.edu/international/student-resources/scholarships/"),),
            unconfirmed=(MONTEREY_SCOPE,)),
        make_profile(
            "stanislaus-state", "California State University, Stanislaus", "Turlock", "Тёрлок", "California", "Калифорния",
            "https://www.csustan.edu/",
            "https://cape.csustan.edu/international-undergraduate-admission-requirements",
            "https://www.csustan.edu/biology/biological-sciences-major", "Biological Sciences", "biology",
            short="Stanislaus State", kind="csu", ielts=6, ibt=(61, 3.5)),
        make_profile(
            "st-marys-university-texas", "St. Mary’s University (Texas)", "San Antonio", "Сан-Антонио", "Texas", "Техас",
            "https://www.stmarytx.edu/",
            "https://www.stmarytx.edu/admission/international-admission/",
            "https://www.stmarytx.edu/academics/programs/biology/", "Biology", "biology",
            ielts=6, ibt=(80, None), det=110),
        make_profile(
            "westminster-university-utah", "Westminster University (Utah)", "Salt Lake City", "Солт-Лейк-Сити", "Utah", "Юта",
            "https://westminsteru.edu/",
            "https://westminsteru.edu/admissions/international-admissions/index.html",
            "https://westminsteru.edu/academics/programs/biology/index.html", "Biology", "biology",
            ielts=6.5, ibt=(79, None), det=110, aid_source="https://westminsteru.edu/admissions/international-admissions/international-student-financial-aid.html"),
        make_profile(
            "chico-state", "California State University, Chico", "Chico", "Чико", "California", "Калифорния",
            "https://www.csuchico.edu/",
            "https://www.csuchico.edu/admissions/international/how-to-apply-freshman.shtml",
            "https://www.csuchico.edu/academics/majors-programs/biological-sciences-bs.shtml", "Biological Sciences (BS)", "biology",
            short="Chico State", kind="csu", application_fee=70, ielts=6, det=95,
            english_source='https://www.csuchico.edu/admissions/english-proficiency.shtml'),
        make_profile(
            "cal-state-northridge", "California State University, Northridge", "Northridge", "Нортридж", "California", "Калифорния",
            "https://www.csun.edu/",
            "https://www.csun.edu/international-first-time-freshman",
            "https://www.csun.edu/science-mathematics/biology/programs/bachelors-programs", "Biology", "biology",
            short="Cal State Northridge", kind="csu", aid_source="https://www.csun.edu/international/international-students/scholarship-opportunities-international-students"),
        make_profile(
            "cal-state-san-bernardino", "California State University, San Bernardino", "San Bernardino", "Сан-Бернардино", "California", "Калифорния",
            "https://www.csusb.edu/",
            "https://www.csusb.edu/international-education/international-admissions/first-year-students",
            "https://www.csusb.edu/join-the-pack/program-finder/biology-bs", "Biology (BS)", "biology",
            short="Cal State San Bernardino", kind="csu", application_fee=70, ielts=5.5, ibt=(61, 3.5), det=95),
        make_profile(
            "cal-state-san-marcos", "California State University San Marcos", "San Marcos", "Сан-Маркос", "California", "Калифорния",
            "https://www.csusm.edu/",
            "https://www.csusm.edu/global/admissions/ugadmiss/bachdegrees.html",
            "https://www.csusm.edu/biology/bsbiol/index.html", "Biology (BS)", "biology",
            short="Cal State San Marcos", kind="csu", aid_source="https://www.csusm.edu/global/intstudents/finaid.html"),
        make_profile(
            "western-washington-university", "Western Washington University", "Bellingham", "Беллингем", "Washington", "Вашингтон",
            "https://admissions.wwu.edu/",
            "https://admissions.wwu.edu/international/apply",
            "https://www.wwu.edu/majors/biology", "Biology", "biology",
            kind="public", application_fee=70, ielts=6, det=105, aid_source=western_source, cost=western_cost,
            awards=(western_merit(western_source),)),
        make_profile(
            "sonoma-state-university", "Sonoma State University", "Rohnert Park", "Ронерт-Парк", "California", "Калифорния",
            "https://www.sonoma.edu/",
            "https://international.sonoma.edu/future-international-student",
            "https://biology.sonoma.edu/programs/bachelor-science", "Biology (BS)", "biology",
            kind="csu", aid_source="https://international.sonoma.edu/international-students/tuition-fees-scholarships"),
        make_profile(
            "cal-state-east-bay", "California State University, East Bay", "Hayward", "Хейвард", "California", "Калифорния",
            "https://www.csueastbay.edu/",
            "https://www.csueastbay.edu/iao/how-to-apply/first-time-freshman/admission-requirements.html",
            "https://www.csueastbay.edu/biology/undergraduate-degrees-offered/", "Biology", "biology",
            short="Cal State East Bay", kind="csu", ielts=5.5, ibt=(61, None), det=95, aid_source="https://www.csueastbay.edu/iao/future-students/scholarships.html",
            rounds=east_bay_dates()),
        make_profile(
            "cal-state-bakersfield", "California State University, Bakersfield", "Bakersfield", "Бейкерсфилд", "California", "Калифорния",
            "https://www.csub.edu/",
            "https://www.csub.edu/isp/earn-a-degree/admission-requirements.shtml",
            "https://www.csub.edu/biology/programs/", "Biology", "biology",
            short="Cal State Bakersfield", kind="csu", application_fee=70, ielts=5.5, ibt=(61, 3.5), det=95,
            english_note=L('IELTS requires at least 5.5 in each section.',
                           'Для IELTS требуется не менее 5,5 за каждую секцию.'),
            rounds=bakersfield_dates()),
    ]


def anselm_merit(source):
    return b.award('anselm-international-merit', L('International merit scholarships', 'Академические стипендии для иностранцев'),
                   source, None, L('Selection is based on the admission application.', 'Отбор по заявлению на поступление.'),
                   separate=False)


def principia_merit(source):
    return b.award('principia-international-merit', L('International merit scholarships', 'Академические стипендии для иностранцев'),
                   source, None,
                   L('The college considers the admission application and discussions with the admissions counselor.',
                     'Колледж учитывает заявление на поступление и обсуждение с консультантом по приёму.'))


def lycoming_merit(source):
    return b.award('lycoming-international-merit', L('International merit scholarships', 'Академические стипендии для иностранцев'),
                   source, L('$38,000–$42,000 per year', '$38 000–$42 000 в год'),
                   L('Awards are based on academic achievement. They cover only part of the cost of attendance.',
                     'Стипендии зависят от успеваемости и покрывают часть расходов.'), separate=False)


def monterey_grant(source):
    award = b.award('csumb-international-scholarship', 'International Student Scholarship', source,
                    L('Varies by year', 'Зависит от года'),
                    L('Intended to cover the nonresident tuition surcharge. Submit the general scholarship application and describe financial need.',
                      'Предназначена для покрытия доплаты за обучение для нерезидентов. Нужна общая заявка на стипендию с описанием финансовой нуждаемости.'),
                    basis='need', separate=True)
    award['firstYearEligible'] = None
    return award


def western_merit(source):
    return b.award(
        'wwu-international-achievement', 'International Achievement Award', source, None,
        L('Competitive partial nonresident tuition waiver. Apply by the priority deadline using Western’s own application. Annual renewal requires a 3.0 GPA, for up to four years.',
          'Конкурсное частичное освобождение от платы за обучение для нерезидентов. Нужна собственная заявка Western к приоритетному сроку. Для ежегодного продления до четырёх лет требуется GPA 3,0.'),
        separate=False, renewable=True)


def principia_deadline(source):
    return b.deadline('principia-fall-2027', L('15 March 2027', '15 марта 2027'), source,
                      iso='2027-03-15', evidence='FALL 2027 ADMISSION — Application Deadline: March 15',
                      basis='page-context')


def bothell_dates():
    source = 'https://www.uwb.edu/admissions/apply/application-dates-deadlines'
    return (
        b.deadline('uw-bothell-ea-2027', L('15 November 2026', '15 ноября 2026'), source,
                   iso='2026-11-15', evidence='AUTUMN 2027 — Early Action: November 15, 2026',
                   name=L('Early Action', 'Early Action')),
        b.deadline('uw-bothell-rd-2027', L('15 January 2027', '15 января 2027'), source,
                   iso='2027-01-15', evidence='AUTUMN 2027 — Regular Decision: January 15, 2027',
                   name=L('Regular Decision', 'Regular Decision')),
    )


def east_bay_dates():
    source = 'https://www.csueastbay.edu/iao/how-to-apply/international-deadlines.html'
    return (
        b.deadline('cal-state-east-bay-fall', L('31 May', '31 мая'), source),
        b.deadline('cal-state-east-bay-docs', L('15 June', '15 июня'), source, kind='documents',
                   name=L('International admissions documents', 'Документы для международного приёма')),
    )


def bakersfield_dates():
    source = 'https://www.csub.edu/isp/earn-a-degree/dates-and-deadlines.shtml'
    quote = 'Important Fall 2027 Dates — Undergraduate International Application and document submission deadline: June 1, 2027'
    date = L('1 June 2027', '1 июня 2027')
    return (
        b.deadline('cal-state-bakersfield-fall-2027', date, source, iso='2027-06-01', evidence=quote),
        b.deadline('cal-state-bakersfield-docs-2027', date, source, kind='documents', iso='2027-06-01',
                   evidence=quote, name=L('International admissions documents', 'Документы для международного приёма')),
    )


if __name__ == '__main__':
    data = ROOT / 'data/universities.us5.js'
    items = ',\n'.join(json.dumps(record, ensure_ascii=False, indent=2) for record in make_records())
    data.write_text('/* United States expansion from 250 to 350 profiles, batch 2. */\n'
                    'window.UNIPATH.universities.push(\n' + items + '\n);\n',
                    encoding='utf-8', newline='\n')
    flush()
