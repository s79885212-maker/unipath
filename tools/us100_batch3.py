"""Verified admissions and aid details for USA expansion batch 3."""
import us100_batch1 as b
from us100_batch2 import CSU_TESTING
from us200_std import L, dm

CSUDH = 'https://www.csudh.edu/future-students/international/application-checklist'
TCNJ = 'https://admissions.tcnj.edu/applications/international-applicants/'
BERRY_AID = 'https://www.berry.edu/admission/faq/international'
SALVE_AID = 'https://admissions.salve.edu/register/?id=9eabcc1e-0dd6-4ea2-b34d-38d0b2e6ec52'
STOCKTON_COST = 'https://www2.stockton.edu/admissions/international-cost-of-attendance.html'
STOCKTON = 'https://stockton.edu/admissions/international-admission-application.html'
RISD = 'https://www.risd.edu/admissions/first-year/apply-risd'
RISD_AID = 'https://www.risd.edu/admissions/first-year/financing-your-education'
BRYANT = 'https://www.bryant.edu/undergraduate/undergraduate-admission/applying-bryant/international-students'
ESF = 'https://www.esf.edu/admissions/apply/international-students/'
SIENA = 'https://www.siena.edu/offices/admissions/international-students/how-to-apply/'
JOHN_JAY = 'https://www.jjay.cuny.edu/admissions/undergraduate-admissions/apply/international-student-application'
TOWSON_FRESHMEN = 'https://www.towson.edu/admissions/undergrad/freshmen/'
MANHATTAN_FRESHMEN = 'https://manhattan.edu/admissions/undergraduate/apply'
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
    tcnj_merit = b.award('tcnj-first-year-f1', L('First-year F-1 merit scholarships', 'Академические стипендии первокурсникам с визой F-1'),
                          TCNJ, None, L('Admitted fall first-year F-1 students are automatically considered. Awards can be renewed for up to four years.',
                                        'Зачисленных на осень первокурсников с визой F-1 рассматривают автоматически. Стипендии могут продлеваться до четырёх лет.'),
                          separate=False, renewable=True)
    berry_merit = b.award('berry-international-merit', L('International merit scholarships', 'Академические стипендии для иностранцев'),
                           BERRY_AID, None, L('Competitive merit award based on secondary school transcripts.',
                                             'Конкурсная стипендия по школьным оценкам.'),
                           separate=False)
    for award in (tcnj_merit, berry_merit):
        award['firstYearEligible'] = True
    stockton_cost = b.published_cost(
        STOCKTON_COST, L('Full-time international undergraduate, on campus', 'Иностранный студент очного бакалавриата, проживание в кампусе'),
        L('$48,620 estimated I-20 cost on campus', 'Смета I-20 с проживанием в кампусе — $48 620'),
        [(b.TUITION, 23196, 'billed'), (b.FEES, 2820, 'billed'), (b.HOUSING, 11564, 'estimate'),
         (b.MEALS, 4055, 'estimate'),
         (L('Books, supplies, transportation and health insurance', 'Учебники, материалы, транспорт и медицинская страховка'),
          6985, 'estimate')], tuition=23196, billed=26016,
        note=L('2026–2027 estimate for fall and spring, 12–20 credits per semester. Visual Arts students need an additional $2,000 for supplies. Fall 2027 costs are unconfirmed.',
               'Смета на осень и весну 2026–2027, 12–20 кредитов в семестр. Студентам Visual Arts нужно дополнительно $2 000 на материалы. Стоимость на осень 2027 не подтверждена.'))
    stockton_cost['breakdown']['period'] = 'year'
    return {
        'the-college-of-new-jersey': {'aid_source': TCNJ, 'awards': [tcnj_merit]},
        'berry-college': {'aid_source': BERRY_AID, 'awards': [berry_merit],
            'need': {'availableToInternational': False, 'source': BERRY_AID, 'verified': b.REVIEWED}},
        'salve-regina-university': {'aid_source': SALVE_AID,
            'unconfirmed': [L('Salve Regina accepts an additional aid application for 2027–2028 international entrants. Eligibility and coverage are not confirmed.',
                              'Salve Regina принимает дополнительную заявку на помощь от иностранных абитуриентов 2027–2028. Право на помощь и покрытие не подтверждены.')]},
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
            'rounds': [b.deadline('risd-rd', L(*dm('2027-01-20')), RISD,
                                 iso='2027-01-20', basis='page-context',
                                 evidence='2027 application requirements; Regular decision application deadline: January 20',
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
        'towson-university': {
            'aid_source': TOWSON, 'awards': [towson], 'application_fee': 50, 'fee_source': TOWSON_FRESHMEN,
            'rounds': [b.deadline('towson-international-fall', L(*dm('2027-06-01')), TOWSON_FRESHMEN,
                                 iso='2027-06-01', evidence='Fall 2027 — International Freshman Deadline — June 1, 2027',
                                 name=L('International freshman application', 'Заявка иностранного первокурсника'))],
        },
        'manhattan-university': {
            'rounds': [b.deadline('manhattan-fall-priority', L(*dm('2027-03-01')), MANHATTAN_FRESHMEN,
                                 iso='2027-03-01', basis='page-context',
                                 evidence='priority consideration for applications received by March 1 for fall 2027 enrollment',
                                 name=L('Fall priority application', 'Приоритетная подача на осень'))],
        },
        'suny-esf': {'english_source': ESF, 'ibt': (79, 4)},
        'john-jay-college': {
            'ibt': (61, None),
            'rounds': [b.deadline('john-jay-fall-priority', L('February 1', '1 февраля'), JOHN_JAY,
                                 name=L('Fall priority application', 'Приоритетная подача на осень'))],
        },
        'stockton-university': {
            'ielts': 6.5, 'ibt': (79, 4), 'application_fee': 50,
            'fee_source': STOCKTON, 'english_source': STOCKTON, 'cost': stockton_cost,
            'documents': [L('Official secondary school transcripts sent directly by the school',
                            'Официальные школьные ведомости, отправленные учебным заведением напрямую'),
                          L('Certified English translation with notarization, or an official evaluation, for non-English transcripts',
                            'Для ведомостей на другом языке требуется заверенный нотариусом перевод на английский или официальная оценка документов')],
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
