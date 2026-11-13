"""Verified admissions, aid and costs for USA expansion batch 4."""
import us100_batch1 as b
from us200_std import L

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
    return {
        'union-university-tennessee': {'ielts': 6.5, 'application_fee': 35, 'det': 105},
        'university-of-west-florida': {'ielts': 6, 'ibt': (79, 4.5), 'det': 110},
        'john-carroll-university': {'ielts': 6.5, 'ibt': (80, 4.5)},
        'milwaukee-school-of-engineering': {
            'ielts': 6.5, 'ibt': (82, 4.5), 'det': 115,
            'english_note': L('Section minima: IELTS 6.0, TOEFL iBT 19 on the old scale or 4 on the new scale, and Duolingo 100.',
                              'Минимумы по разделам: IELTS 6,0, TOEFL iBT 19 по прежней шкале или 4 по новой шкале и Duolingo 100.'),
        },
        'kettering-university': {'ielts': 6, 'ibt': (79, None)},
        'augustana-university-south-dakota': {'ielts': 6, 'ibt': (None, 4), 'application_fee': 0},
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
