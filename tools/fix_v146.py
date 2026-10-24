# -*- coding: utf-8 -*-
"""Official sources read 24 October 2026; preserve unknown cycles and scopes."""
import io, os, re
import ca50_gaps as G
from ca50_gaps import L

D = '2026-10-24'
AU = 'https://www.american.edu/financialaid/cost-of-attendance/undergraduate-first-year-students.cfm'
INS = 'https://www.american.edu/finance/studentaccounts/tuition-and-fees-information.cfm'
path = os.path.join(G.ROOT, 'data/universities.us3.js')
h, records, t = G.load(path)
u = {r['id']: r for r in records}
c = u['american-university']['costs']
c.update(G.plain({
    'academicYear': '2026–2027', 'studentCategory': L('First-year students living on campus, full-time (12–17 credits a semester), nine months', 'Первокурсники в общежитии, полная нагрузка (12–17 кредитов в семестр), девять месяцев'),
    'source': AU, 'verified': D,
    'headline': L('$87,374 published cost of attendance for 2026–27; health insurance extra', '$87,374 — опубликованная стоимость 2026–27; страховка отдельно'),
    'totalText': L('$87,374 is the university’s published on-campus first-year cost of attendance for fall 2026 and spring 2027. Health insurance is additional.', '$87,374 — опубликованная вузом стоимость для первокурсника в общежитии за осень 2026 и весну 2027. Медицинская страховка оплачивается отдельно.'),
    'note': L('This is the Financial Aid cost-of-attendance estimate, not a visa funding requirement. The $54 federal loan fee may not apply to international students. The annual insurance charge is $2,759 unless an approved equivalent-coverage waiver applies. The 2027–28 cost is not established here.', 'Это оценка стоимости от Financial Aid, а не требование к финансам для визы. Сбор $54 по федеральному кредиту может не относиться к иностранцам. Годовая страховка стоит $2,759, если не одобрено освобождение при равноценном покрытии. Стоимость 2027–28 здесь не установлена.'),
    'breakdown': {'tuition': 62680, 'budget': 87374, 'includes': L('tuition, mandatory fees, housing, food, Metro pass, books, transport, personal expenses and federal loan fees; health insurance extra', 'обучение, обязательные сборы, жильё, питание, Metro, книги, транспорт, личные расходы и сбор по федеральному кредиту; страховка отдельно')},
    'billedSubtotal': None,
    'items': [{'label': label, 'group': 'estimate', 'amount': amount} for label, amount in [
        (L('Tuition', 'Обучение'), 62680), (L('Mandatory fees', 'Обязательные сборы'), 1700),
        (L('Housing', 'Жильё'), 13112), (L('Food', 'Питание'), 6584),
        (L('Metro pass fees', 'Проездной Metro'), 272), (L('Books and supplies', 'Книги и принадлежности'), 1200),
        (L('Miscellaneous transportation', 'Другие транспортные расходы'), 692),
        (L('Personal expenses', 'Личные расходы'), 1080), (L('Federal loan fees', 'Сборы по федеральному кредиту'), 54)]],
    'extras': [{'label': L('Annual student health insurance (unless approved waiver)', 'Годовая медицинская страховка (если нет одобренного освобождения)'),
                'amount': 2759, 'required': True, 'source': INS, 'verified': D, 'academicYear': '2026–2027'}]
}))
G.source(u['american-university'], 'American University — first-year cost of attendance 2026–27', AU)
G.source(u['american-university'], 'American University — tuition, fees and health insurance 2026–27', INS)
G.checked(u['american-university'], 'tuition and fees')
for d in u['lesley-university']['admissions']['deadlines']:
    d['verified'] = D
    d['note'] = G.plain(L('Re-checked on 24 October 2026: the official page still labels these deadlines Fall 2026. No deadline for fall 2027 is established.', 'Перепроверено 24 октября 2026: официальная страница по-прежнему относит эти сроки к осени 2026. Сроки на осень 2027 не установлены.'))
G.save(h, records, t, path)
mp = os.path.join(G.ROOT, 'data/match.js')
m = io.open(mp, encoding='utf-8').read()
note = L('Published 2026–27 first-year on-campus cost of attendance; required health insurance is additional unless waived', 'Опубликованная стоимость 2026–27 для первокурсника в общежитии; обязательная страховка отдельно, если нет освобождения')
m, n = re.subn(r"('american-university': \{)[^\n]+", lambda _: "'american-university': { currency: 'USD', basis: 'total', min: 87374, max: 87374, source: '" + AU + "', verified: '" + D + "', academicYear: '2026–2027', note: '" + str(note) + "' },", m)
assert n == 1
io.open(mp, 'w', encoding='utf-8').write(m)

h, records, t = G.load()
u = {r['id']: r for r in records}
a = u['acadia-university']
src = 'https://www2.acadiau.ca/student-services/scholarships-financial-aid/future-students/entrance-scholarships.html'
d = a['admissions']['deadlines'][0]
d.update(G.plain({'name': L('Additional entrance scholarships and scholar-bursaries: portal forms', 'Дополнительные вступительные стипендии: формы в портале'),
    'entryTerm': None, 'entryYear': None, 'dateISO': None, 'date': L('1 March — intake year not confirmed', '1 марта — год набора не подтверждён'),
    'status': 'annual-rule', 'source': src, 'verified': D, 'awardId': 'additional-entrance', 'awardCategory': 'merit',
    'conditions': L('Separate forms are required for additional awards; this is not the deadline for the automatic initial entrance offer. Individual awards have additional eligibility restrictions.', 'Для дополнительных стипендий нужны отдельные формы; это не срок автоматической первоначальной стипендии. У отдельных стипендий есть дополнительные ограничения.'),
    'note': L('The official scholarship page states March 1 without identifying an entry cycle. The reading date does not establish 2027.', 'Официальная страница указывает 1 марта без установленного цикла поступления. Дата просмотра не подтверждает 2027 год.'),
    'cycleEvidence': {'basis': 'annual-rule', 'source': src, 'verified': D, 'quote': 'Complete the scholarship application by March 1st.'}}))
d.pop('binding', None)
old = a['scholarships']['merit'][0]
initial = dict(old)
initial.update(G.plain({'name': L('Acadia initial entrance scholarship', 'Первоначальная вступительная стипендия Acadia'),
    'deadlineScope': 'no-separate-application',
    'amount': L('C$500–C$2,500 initial offer', 'C$500–C$2,500 — первоначальное предложение'),
    'application': L('Automatically considered with the undergraduate admission application; no separate initial scholarship form', 'Автоматическое рассмотрение вместе с заявкой в бакалавриат; отдельная форма для первоначального предложения не нужна'),
    'source': src, 'verified': D}))
additional = dict(old)
additional.update(G.plain({'id': 'additional-entrance', 'category': 'merit', 'deadlineScope': 'annual-rule', 'entryTerm': None, 'entryYear': None,
    'name': L('Acadia additional entrance scholarships and scholar-bursaries', 'Дополнительные вступительные стипендии Acadia'),
    'amount': L('Up to C$80,000 over four years; award-specific eligibility', 'До C$80,000 за четыре года; условия зависят от стипендии'),
    'application': L('Submit the scholarship forms in the status portal; local and specialized awards require separate forms', 'Подайте стипендиальные формы в портале; для местных и специализированных стипендий нужны отдельные формы'),
    'source': src, 'verified': D}))
a['scholarships']['merit'] = [initial, additional]
G.source(a, 'Acadia — entrance scholarships for future students', src)

ott = 'https://www.uottawa.ca/study/undergraduate-studies/international-applicants'
unbc = 'https://www.unbc.ca/sites/default/files/sections/admissions/undergraduate/uzbekistan-admissionrequirementssept2021.pdf'
for uid, src, text in [
    ('university-of-ottawa', ott, L('Uzbekistan: the direct-entry undergraduate qualifications table lists Certificate of Completed Secondary Education, Certificate of Secondary Education or Attestat o Srednem Obrazovanii. This table does not establish required grades, programme prerequisites or whether preparatory study is needed for a particular applicant; those remain unconfirmed. No 2027 cycle is stated.', 'Узбекистан: таблица документов для прямого поступления в бакалавриат перечисляет Certificate of Completed Secondary Education, Certificate of Secondary Education или Attestat o Srednem Obrazovanii. Таблица не устанавливает требуемые оценки, предметы конкретной программы или необходимость подготовки для конкретного абитуриента; это остаётся неподтверждённым. Набор 2027 не указан.')),
    ('university-of-northern-british-columbia', unbc, L('Uzbekistan: UNBC’s currently linked country sheet (version 2021 03) lists Akademik Litsey Diplomi or Kasb-Hunar Kolleji Diplomi with a final grade of at least 3/5 for general entry. Programme prerequisites and English requirements also apply. The sheet does not establish admission with a general-school Attestat or requirements for the 2027 intake; these remain unconfirmed.', 'Узбекистан: действующая ссылка UNBC ведёт на памятку версии 2021 03: Akademik Litsey Diplomi или Kasb-Hunar Kolleji Diplomi с итоговой оценкой не ниже 3/5 для общего поступления. Также действуют предметные и языковые требования. Памятка не подтверждает приём с обычным школьным аттестатом и требования набора 2027; это остаётся неподтверждённым.'))
]:
    r = u[uid]
    r['academics'].update(G.plain({'internationalQualifications': text, 'internationalQualificationsSource': src, 'internationalQualificationsVerified': D}))
    G.source(r, 'Official country-specific undergraduate qualifications', src)
    # Partial evidence does not clear the broader unresolved verification item.
G.save(h, records, t)
G.flush()
