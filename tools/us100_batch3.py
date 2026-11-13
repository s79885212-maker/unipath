"""Verified admissions and aid details for USA expansion batch 3."""
import us100_batch1 as b
from us100_batch2 import CSU_TESTING
from us200_std import L, dm

CSUDH = 'https://www.csudh.edu/future-students/international/application-checklist'
RISD = 'https://www.risd.edu/admissions/first-year/apply-risd'
RISD_AID = 'https://www.risd.edu/admissions/first-year/financing-your-education'
BRYANT = 'https://www.bryant.edu/undergraduate/undergraduate-admission/applying-bryant/international-students'
ESF = 'https://www.esf.edu/admissions/apply/international-students/'
SIENA = 'https://www.siena.edu/offices/admissions/international-students/how-to-apply/'
JOHN_JAY = 'https://www.jjay.cuny.edu/admissions/undergraduate-admissions/apply/international-student-application'
TOWSON = 'https://www.towson.edu/admissions/financialaid/programs/scholarships/international.html'
NEW_PALTZ = 'https://www.newpaltz.edu/youarewelcomehere/'
HAMPTON = 'https://home.hamptonu.edu/admissions/international-students/'


def details():
    yawh = L('You Are Welcome Here Scholarship', 'Стипендия You Are Welcome Here')
    towson = b.award('towson-yawh', yawh, TOWSON,
                     L('Approximately half of tuition', 'Около половины платы за обучение'),
                     L('Competitive award for international fall first-year applicants. A separate application is required. The published February 1 rule does not identify the Fall 2027 cycle.',
                       'Конкурс для иностранных первокурсников осеннего набора. Нужна отдельная заявка. В опубликованном правиле о 1 февраля набор осени 2027 не указан.'),
                     separate=True)
    new_paltz = b.award('new-paltz-yawh', yawh, NEW_PALTZ,
                        L('50% of tuition', '50% платы за обучение'),
                        L('Two competitive awards for international first-year students starting in fall. A separate application is required. Fees, housing, meals, and books remain the student’s responsibility.',
                          'Две конкурсные стипендии для иностранных первокурсников осеннего набора. Нужна отдельная заявка. Сборы, жильё, питание и учебники оплачивает студент.'),
                        separate=True, renewable=True)
    for award in (towson, new_paltz):
        award['firstYearEligible'] = True
    towson['deadline'] = L('February 1 (annual rule)', '1 февраля (ежегодное правило)')
    new_paltz['application'] = L('Separate application and essayawhfter admission.',
                                 'Отдельная заявка и эссе после зачисления.')
    bryant = b.award('bryant-international-merit',
                     L('International merit scholarships', 'Академические стипендии для иностранцев'),
                     BRYANT, L('$5,000–$40,000 per year', '$5 000–40 000 в год'),
                     L('Amounts vary with academic merit.', 'Сумма зависит от академических результатов.'),
                     separate=False, renewable=True)
    bryant['firstYearEligible'] = True
    return {
        'cal-poly-humboldt': {'testing': b.BLIND, 'test_source': CSU_TESTING, 'ielts': 6, 'ibt': (71, 4)},
        'cal-state-dominguez-hills': {
            'testing': b.BLIND, 'test_source': CSU_TESTING, 'application_fee': 70,
            'rounds': [
                b.deadline('csudh-fall-application', L(*dm('05-01')), CSUDH),
                b.deadline('csudh-fall-documents', L(*dm('06-01')), CSUDH, kind='documents',
                           name=L('Fall document submission', 'Подача документов на осень')),
            ],
        },
        'rhode-island-school-of-design': {
            'testing': b.OPTIONAL, 'test_source': RISD, 'english_source': RISD, 'ielts': 7,
            'ibt': (93, 5), 'det': 120, 'application_fee': 60, 'fee_source': RISD,
            'fee_note': L('The required portfolio submission costs an additional $10.',
                          'За обязательную подачу портфолио взимается дополнительно $10.'),
            'documents': [b.SECONDARY, L('English translation of non-English credentials',
                                         'Перевод документов на английский'),
                          L('Portfolio', 'Портфолио')],
            'rounds': [b.deadline('risd-rd', L('January 20', '20 января'), RISD,
                                 name=L('Regular Decision', 'Основной раунд'))],
            'aid_source': RISD_AID,
            'need': {'availableToInternational': True, 'source': RISD_AID, 'verified': b.REVIEWED,
                     'note': L('International first-year applicants can submit the institutional aid form.',
                               'Иностранные первокурсники могут подать форму на помощь от вуза.')},
        },
        'bryant-university': {
            'testing': b.OPTIONAL, 'test_source': BRYANT, 'ielts': 6.5, 'ibt': (80, 4),
            'aid_source': BRYANT, 'awards': [bryant],
        },
        'siena-university': {
            'english_source': SIENA, 'ielts': 6.5, 'ibt': (79, None), 'det': 115,
            'rounds': [b.deadline('siena-rd', L('February 15', '15 февраля'), SIENA,
                                 name=L('Regular Decision', 'Основной раунд'))],
        },
        'towson-university': {'aid_source': TOWSON, 'awards': [towson]},
        'suny-esf': {'english_source': ESF, 'ibt': (79, 4)},
        'john-jay-college': {
            'ibt': (61, None),
            'rounds': [b.deadline('john-jay-fall-priority', L('February 1', '1 февраля'), JOHN_JAY,
                                 name=L('Fall priority application', 'Приоритетная подача на осень'))],
        },
        'le-moyne-college': {'ielts': 6.5, 'ibt': (79, None)},
        'embry-riddle-daytona-beach': {'ielts': 6, 'ibt': (79, 4)},
        'appalachian-state-university': {'ibt': (78, None),
            'english_note': L('The minimum on each section of the 0–120 TOEFL iBT is 16.',
                              'На шкале TOEFL iBT 0–120 требуется не менее 16 по каждой секции.')},
        'high-point-university': {'ielts': 6.5, 'ibt': (80, None)},
        'wentworth-institute-of-technology': {'application_fee': 50},
        'suny-new-paltz': {
            'ielts': 6.5, 'ibt': (80, 4),
            'english_note': L('IELTS requires at least 6.0 per band. TOEFL iBT on the 1–6 scale requires at least 3.5 per section.',
                              'Для IELTS требуется не менее 6,0 по каждому разделу. Для TOEFL iBT на шкале 1–6 требуется не менее 3,5 по каждой секции.'),
            'aid_source': NEW_PALTZ, 'awards': [new_paltz], 'application_fee': 50, 'fee_source': NEW_PALTZ,
        },
        'hampton-university': {
            'application_fee': 60, 'testing': ('required',
                L('The international admissions checklist requests official SAT or ACT scores.',
                  'В списке документов для иностранных абитуриентов указаны официальные результаты SAT или ACT.')),
            'test_source': HAMPTON, 'documents': [b.SECONDARY],
        },
    }
