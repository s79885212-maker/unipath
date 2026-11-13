"""Verified admissions, aid and costs for USA expansion batch 4."""
import us100_batch1 as b
from us200_std import L, dm

UNI_UZ = 'https://admissions.uni.edu/international/undergraduate-students/country-specific-requirements/uzbekistan'
JCU = 'https://www.jcu.edu/admission-aid/undergraduate/how-to-apply/international-students'
JCU_FIRST_YEAR = 'https://www.jcu.edu/admission-aid/undergraduate/how-to-apply/undergraduate'
GCSU = 'https://www.gcsu.edu/international/application-checklist-deadlines'
AUG_AID = 'https://www.augie.edu/admission-financial-aid/financial-aid-costs-scholarships/comprehensive-costs/international-student'
UE = 'https://www.evansville.edu/intladmission/admission-requirements.cfm'
UE_AID = 'https://www.evansville.edu/student-financial-services/scholarships-for-international-students-fall-2027.cfm'
UE_COST = 'https://www.evansville.edu/student-financial-services/tuition-and-direct-costs-international-2027-2028.cfm'


def details():
    merit = b.award('evansville-international-merit',
                    L('UE International Scholarship', 'Международная стипендия UE'),
                    UE_AID, L('May exceed $30,000 per year', 'Может превышать $30 000 в год'),
                    L('Fall 2027. Based on admission materials and academic credentials. Renewable for up to three additional years subject to the renewal criteria. Total gift aid is capped at full-time tuition.',
                      'Осень 2027. Сумма зависит от документов и академических результатов. Продление до трёх дополнительных лет при соблюдении условий. Общая безвозвратная помощь ограничена стоимостью очного обучения.'),
                    separate=False, renewable=True)
    merit.update(firstYearEligible=True, entryYear='2027', entryTerm='Autumn')
    cost = b.costs(
        '2027–2028', UE_COST, b.REVIEWED,
        L('Full-time international undergraduate living on campus', 'Иностранный студент очного бакалавриата с проживанием в кампусе'),
        [(b.TUITION_FEES, 49244, 'billed'), (b.HOUSING, 8130, 'estimate'),
         (b.MEALS, 8350, 'estimate'), (b.INSURANCE, 2000, 'estimate'),
         (L('Transportation', 'Транспорт'), 920, 'estimate'),
         (L('Personal expenses', 'Личные расходы'), 1330, 'estimate'),
         (L('Book rental, supplies and equipment', 'Аренда учебников, материалы и оборудование'), 920, 'estimate')],
        L('$70,894 estimated annual cost before scholarships', 'Годовая смета до вычета стипендий — $70 894'),
        L('$70,894 estimated annual cost before scholarships', 'Годовая смета до вычета стипендий — $70 894'),
        L('Fall and spring, 12–18 credits per semester, plus a 12-month insurance estimate. Summer study is excluded.',
          'Осень и весна, 12–18 кредитов в семестр, плюс смета на 12 месяцев страховки. Летнее обучение не входит.'),
        tuition=47590, budget=70894, comprehensive=True, status='confirmed')
    cost['breakdown']['period'] = 'year'
    aug_award = b.award(
        'augustana-admission-scholarships', L('Augustana admission scholarships', 'Стипендии Augustana при поступлении'),
        AUG_AID, None,
        L('Full-time international undergraduates receive scholarships. The amount varies. Renewal requires full-time enrollment and good academic standing.',
          'Иностранные студенты очного бакалавриата получают стипендии. Сумма различается. Для продления требуется очное обучение и хорошая успеваемость.'),
        separate=False, renewable=True)
    aug_award['firstYearEligible'] = True
    aug_cost = b.published_cost(
        AUG_AID, L('Full-time international undergraduate, double room', 'Иностранный студент очного бакалавриата, двухместная комната'),
        L('$57,322 I-20 estimate', 'Смета для I-20 — $57 322'),
        [(b.TUITION, 41986, 'billed'), (b.HOUSING, 4580, 'estimate'), (b.MEALS, 5810, 'estimate'),
         (L('Student fees and housing deposit', 'Студенческие сборы и залог за жильё'), 1246, 'billed'),
         (L('One-time international center fee', 'Разовый сбор международного центра'), 500, 'billed'),
         (L('Books (estimate)', 'Учебники (смета)'), 1000, 'estimate'), (b.INSURANCE, 2200, 'estimate')],
        tuition=41986)
    aug_cost['breakdown']['period'] = 'year'
    return {
        'university-of-northern-iowa': {
            'qualifications': L('Uzbekistan: O’rta Ma’lumot To’g’risida Shahodatnoma (Certificate of Secondary Education); minimum cumulative grade 4 (B) in secondary academic subjects. The page does not list individual required subjects.',
                                'Узбекистан: O’rta Ma’lumot To’g’risida Shahodatnoma (аттестат о среднем образовании); минимальный средний балл по школьным академическим предметам — 4 (B). Отдельные обязательные предметы на странице не перечислены.'),
            'extra_sources': [(L('Admission requirements for Uzbekistan', 'Требования для абитуриентов из Узбекистана'), UNI_UZ)],
            'unconfirmed': [L('The Uzbekistan requirements page does not identify a Fall 2027 cycle.',
                              'На странице требований для Узбекистана набор осени 2027 не указан.')],
        },
        'georgia-college-state-university': {
            'rounds': [b.deadline('gcsu-fall-international', L('April 1', '1 апреля'), GCSU)],
            'documents': [b.SECONDARY, L('Certified English translation of non-English documents',
                                         'Заверенный перевод документов на английский')],
        },
        'union-university-tennessee': {'ielts': 6.5, 'application_fee': 35, 'det': 105},
        'university-of-west-florida': {'ielts': 6, 'ibt': (79, 4.5), 'det': 110},
        'john-carroll-university': {
            'ielts': 6.5, 'ibt': (80, 4.5), 'application_fee': 0, 'fee_source': JCU_FIRST_YEAR,
            'testing': ('conditional', L('Non-U.S. citizens who attended school outside the U.S. are asked for at least one accepted test. TOEFL and IELTS are accepted alternatives to SAT or ACT. Check StartJCU for individual requirements.',
                                         'Абитуриентам без гражданства США, учившимся за пределами США, требуется хотя бы один из принимаемых экзаменов. TOEFL и IELTS принимаются вместо SAT или ACT. Индивидуальные требования указаны в StartJCU.')),
            'test_source': JCU,
            'rounds': [b.deadline('jcu-international-fall', L(*dm('2027-04-15')), JCU,
                                 iso='2027-04-15', basis='page-context',
                                 evidence='The application for Fall 2027 is now available; Applying for the fall semester: April 15',
                                 name=L('International fall application', 'Международная заявка на осень'))],
        },
        'milwaukee-school-of-engineering': {
            'ielts': 6.5, 'ibt': (82, 4.5), 'det': 115,
            'english_note': L('Section minima: IELTS 6.0, TOEFL iBT 19 on the old scale or 4 on the new scale, and Duolingo 100.',
                              'Минимумы по разделам: IELTS 6,0, TOEFL iBT 19 по прежней шкале или 4 по новой шкале и Duolingo 100.'),
        },
        'kettering-university': {'ielts': 6, 'ibt': (79, None)},
        'augustana-university-south-dakota': {'ielts': 6, 'ibt': (None, 4), 'application_fee': 0,
            'aid_source': AUG_AID, 'awards': [aug_award], 'cost': aug_cost},
        'university-of-evansville': {
            'ielts': 6.5, 'ibt': (85, 4.5), 'documents': [b.SECONDARY],
            'rounds': [b.deadline('evansville-fall-international', L('June 1', '1 июня'), UE)],
            'aid_source': UE_AID, 'awards': [merit], 'cost': cost,
            'need': {'availableToInternational': False, 'source': UE_AID, 'verified': b.REVIEWED,
                     'note': L('Need-based aid is not offered to Fall 2027 international students.',
                               'Помощь по нуждаемости иностранным студентам набора осени 2027 не предоставляется.')},
        },
        'university-of-wisconsin-la-crosse': {'ielts': 6, 'ibt': (None, 4), 'application_fee': 25},
        'south-dakota-mines': {'ielts': 6.5, 'ibt': (79, 4)},
    }
