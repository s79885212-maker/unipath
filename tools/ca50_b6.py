# -*- coding: utf-8 -*-
"""Canada, the fiftieth record: the University of Victoria (list item 14).

Its site timed out from this network on 15, 16 and 17 October 2026 and
answered again on 19 October 2026, when these pages were read. The tuition
figures come from the university's own fee estimator (its public endpoint
behind the estimate page)."""
import ca50
from ca50 import R, rnd, test, eng, toefl, fee, costs, ev, money, L
from us200_std import award, flush, AUTO

V = '2026-10-19'
B = 'billed'

def D(name, kind, iso, src, cond=None, note=None, status='confirmed', **k):
    return rnd(name, kind, iso, k.pop('binding', False), cond, src, V, status=status, note=note, **k)

NOYEAR = L('The page prints this date without a year; it was read in October 2026, during the cycle for autumn 2027 entry.',
           'Страница указывает эту дату без года; она прочитана в октябре 2026, в цикле поступления на осень 2027.')
U = 'https://www.uvic.ca/undergraduate/'
UD = U + 'admissions/application-deadlines/index.php'
UA = U + 'admissions/how-to-apply/index.php'
UT = U + 'finances/tuition-costs/index.php'
UE = U + 'admissions/language-requirements/index.php'
US = 'https://www.uvic.ca/safa/scholarships/entrance-scholarships/index.php'
UTE = U + 'finances/tuition-costs/tuition-fee-estimate.php?residency=I&level=UG&program=31'

records = [R('university-of-victoria', 'University of Victoria', 'UVic', 'Victoria', 'BC',
    L('Public research university', 'Государственный исследовательский университет'),
    L('A research university in Victoria, the capital of British Columbia, on Vancouver Island, applied to through EducationPlannerBC. International tuition is set for year 1 of each programme and rises by at most 6% a year.',
      'Исследовательский университет в Виктории, столице Британской Колумбии, на острове Ванкувер; подача через EducationPlannerBC. Плата для иностранцев устанавливается на 1 курс каждой программы и растёт не больше чем на 6% в год.'),
    ['humanities', 'business', 'engineering', 'computer-science', 'social-sciences', 'arts', 'medicine', 'education'],
    {'website': 'https://www.uvic.ca/', 'admissions': UD, 'international': U + 'info-for/international-students/index.php', 'portal': 'https://www.educationplannerbc.ca/', 'scholarships': US, 'aid': US, 'programs': UT, 'cost': UT},
    verified=V, aliases=['UVic', 'U Vic', 'Victoria University BC'],
    programsBasis='evidence', programsStatus='partial',
    programNote=L('Fields of study are the programme groups named in the university’s fee estimator; the full list of majors was not read.', 'Направления — группы программ из калькулятора платы университета; полный список специальностей не читался.'),
    programEvidence=ev({'humanities': 'Humanities', 'business': 'Business (Gustavson School of Business)', 'engineering': 'Engineering & Computer Science', 'computer-science': 'Engineering & Computer Science',
                        'social-sciences': 'Social Sciences', 'arts': 'Fine Arts', 'medicine': 'Health', 'education': 'Education'}, UT, V),
    platforms=['EducationPlannerBC'],
    rounds=[
        D(L('Grades for early admission (high school applicants)', 'Оценки для раннего приёма (выпускники школ)'), 'priority', '2026-12-01', UD,
          L('Applicants who submit grades by early December can be considered for early admission; the page gives no exact day.', 'Тех, кто присылает оценки к началу декабря, могут рассмотреть для раннего приёма; точного дня страница не даёт.'), status='not-confirmed', note=NOYEAR),
        D(L('Application deadline, September entry (most degree programmes)', 'Срок подачи, сентябрьский набор (большинство программ)'), 'regular', '2027-01-31', UD,
          L('Some programmes keep accepting applications later while they remain open in EducationPlannerBC; applications can close without warning.', 'Некоторые программы принимают заявки и позже, пока они открыты в EducationPlannerBC; приём может закрыться без предупреждения.'), note=NOYEAR),
    ],
    fee=fee(184, L('Through EducationPlannerBC when any transcript comes from outside Canada (C$89.50 with Canadian transcripts only).', 'Через EducationPlannerBC, если хоть один документ — не из Канады (C$89.50, если все документы канадские).'), UA, V),
    documents=[L('EducationPlannerBC application', 'Заявка EducationPlannerBC'), L('Transcripts uploaded in the UVic portal', 'Табели в портале UVic'), L('English test result unless exempt', 'Результат теста по английскому, если нет освобождения')],
    english={'ielts': eng(6.5, note=L('Academic (including One Skill Retake); no component below 6.0.', 'Academic (включая One Skill Retake); ни одной части ниже 6.0.')),
             'toefl': toefl(88, 4.5, L('iBT 88 with no section below 20, or 4.5 on the new scale with no section below 4.0.', 'iBT 88, ни одной секции ниже 20, или 4.5 по новой шкале, ни одной секции ниже 4.0.')),
             'duolingo': eng(120, note=L('No subscore below 110.', 'Ни одного подбалла ниже 110.')),
             'note': L('CAEL 70; Cambridge C1/C2 180 (no skill below 170); PTE Academic 65 (60 in each skill); MET 64. Lower scores can lead to conditional admission.', 'CAEL 70; Cambridge C1/C2 180 (ни одного навыка ниже 170); PTE Academic 65 (60 в каждом); MET 64. При более низких баллах — условный приём.')},
    sat=test(None, L('Not checked on the pages read.', 'На прочитанных страницах не проверено.')),
    costs=ca50.costs('2026–2027', UTE, V, L('International undergraduates, year 1, two terms (university fee estimator, rates effective 1 May 2026)', 'Иностранцы на 1 курсе бакалавриата, два семестра (калькулятор университета, ставки с 1 мая 2026)'),
        [(L('Tuition, year 1: Humanities, Business, Science, Social Sciences, Fine Arts, Health, Education and other programmes', 'Обучение, 1 курс: Humanities, Business, Science, Social Sciences, Fine Arts, Health, Education и другие'), 37576, B),
         (L('Tuition, year 1: Engineering & Computer Science', 'Обучение, 1 курс: Engineering & Computer Science'), 42618, B),
         (L('Ancillary fees (student society, athletics, bus pass, dental, medical insurance, extended health)', 'Сопутствующие сборы (студенческое общество, спорт, проездной, стоматология, медстраховка, расширенная страховка)'), 1239, B)],
        L('C$37,576–C$42,618 tuition in year 1 (2026–27)', 'C$37,576–C$42,618 — обучение на 1 курсе (2026–27)'),
        L('Year-1 international tuition for two terms is C$37,576 in most programmes and C$42,618 in Engineering and Computer Science, plus C$1,239 in ancillary fees; for Humanities the estimator shows C$164,378 over four years', 'Плата для иностранцев за 1 курс (два семестра): C$37,576 на большинстве программ и C$42,618 на инженерии и Computer Science, плюс сопутствующие сборы C$1,239; для Humanities калькулятор показывает C$164,378 за четыре года'),
        L('tuition in the main figure; ancillary fees listed separately; housing, food and books extra', 'в основной сумме — обучение; сопутствующие сборы отдельно; жильё, питание и книги — сверх этого'), tuition=37576,
        note=L('“International tuition fees are set at the June meeting of the Board for the following academic year … capped at 6% annually.” The estimate is not binding on the university.', '«Плата для иностранцев утверждается на июньском заседании совета на следующий учебный год … рост ограничен 6% в год». Оценка калькулятора университет не обязывает.')),
    merit=[award('UVic international entrance scholarship', L('C$15,000, one time (2027–28 value)', 'C$15,000, разово (сумма на 2027–28)'), L('International first-year students on a study permit with an A- admission average or equivalent who meet the English requirement', 'Иностранные первокурсники с разрешением на учёбу, средним A- или эквивалентом и выполненным требованием к английскому'),
                 application=AUTO, renewable=False, basis='automatic', source=US, verified=V,
                 note=L('“The scholarship figures shown below are for the 2027-2028 academic year.” Only for students assessed international tuition.', '«Суммы стипендий ниже — на 2027-2028 учебный год». Только для студентов, платящих международный тариф.'))],
    need={'note': L('Need-based aid for international first-year students is not described on the pages read.', 'Помощь по нуждаемости для иностранных первокурсников на прочитанных страницах не описана.')},
    sources=[(L('UVic — application deadlines', 'UVic — сроки подачи'), UD), (L('UVic — how to apply and fee', 'UVic — как подать и сбор'), UA), (L('UVic — tuition and costs (estimator)', 'UVic — плата и стоимость (калькулятор)'), UT),
             (L('UVic — language requirements', 'UVic — языковые требования'), UE), (L('UVic — entrance scholarships', 'UVic — вступительные стипендии'), US)],
    checked=[L('deadlines', 'сроки'), L('application fee', 'сбор за заявку'), L('English requirements', 'требования к английскому'), L('tuition', 'плата за обучение'), L('scholarships', 'стипендии')],
    unconfirmed=[L('test policy', 'политика тестов'), L('requirements for Uzbekistan', 'требования для Узбекистана'), L('full list of majors', 'полный список специальностей'), L('founding year', 'год основания')])]
annual = {'university-of-victoria': {'currency': 'CAD', 'basis': 'tuition', 'min': 37576, 'max': 42618, 'note': 'Year-1 tuition 2026–27 for two terms (most programmes to Engineering & Computer Science); ancillary fees, housing and food extra'}}
for r in records:
    for it in r['costs'].get('items', []): it.pop('group', None)
ca50.write(records, annual)
flush()
