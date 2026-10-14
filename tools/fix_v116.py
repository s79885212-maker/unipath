# -*- coding: utf-8 -*-
"""v116 — pages that did not open on 13 October, read again on 14 October 2026.

* American University: the main site opened normally; its test policy and all
  four first-year rounds were read.
* University of Arizona: the degree search loaded (355 bachelor's programmes);
  each field now names a programme on the Tucson campus.
* Texas A&M: costs read from the university's tuition calculator, with the
  choices stated (no personal data is entered in it). The same calculator lists
  the major "Society, Ethics, and Laws", so the law field tag taken off in v114
  is restored with that programme named.
* SCAD, Ursinus, Anderson (Indiana), Cornell College: the test policy is still
  not stated on any current page; the reasons are updated."""
import us3_edit
from us200_std import *

V = '2026-10-14'
NY14 = L('The page prints this date without a year; it was read on 14 October 2026, during the cycle for autumn 2027 entry.',
         'На странице дата напечатана без года; страница прочитана 14 октября 2026, во время цикла подачи на осень 2027.')
head, recs = us3_edit.load()
D = us3_edit.by_id(recs)

def drop_unconf(r, *keys):
    r['verification']['unconfirmed'] = [x for x in r['verification']['unconfirmed'] if x not in keys]
def add_checked(r, *labels):
    for l in labels:
        if l not in r['verification']['checked']: r['verification']['checked'].append(l)

# ------------------------------------------------------------- American
a = D['american-university']
S = 'https://www.american.edu/admissions/first-year/decision-plans-and-deadlines.cfm'
a['admissions']['deadlines'] = [
    rd('EA', '2026-11-01', S, V, L('CSS Profile and FAFSA by 15 November. Notification in mid-January — the text below the table says an admit, deny or defer decision by 31 January. Deposit by 1 May.', 'CSS Profile и FAFSA — до 15 ноября. Решение в середине января; в тексте под таблицей — решение о приёме, отказе или отсрочке до 31 января. Депозит — до 1 мая.'), note=NY14),
    rd('ED1', '2026-11-01', S, V, L('An Early Decision Agreement signed by the applicant, a parent and the counselor is required. CSS Profile and FAFSA by 15 November; notification in mid-December; deposit by 15 January.', 'Нужно соглашение Early Decision с подписями абитуриента, родителя и консультанта. CSS Profile и FAFSA — до 15 ноября; решение в середине декабря; депозит — до 15 января.'), note=NY14),
    rd('ED2', '2027-01-15', S, V, L('CSS Profile and FAFSA by 1 February; notification in mid-February; deposit by 1 March.', 'CSS Profile и FAFSA — до 1 февраля; решение в середине февраля; депозит — до 1 марта.'), note=NY14),
    rd('RD', '2027-01-15', S, V, L('CSS Profile and FAFSA by 15 February; notification by 1 April; deposit by 1 May.', 'CSS Profile и FAFSA — до 15 февраля; решение к 1 апреля; депозит — до 1 мая.'), note=NY14),
]
T = 'https://www.american.edu/admissions/first-year/test-optional.cfm'
t = test('optional', L('Applicants may use any plan without test scores, which “will not affect your consideration for merit awards or admission to the AU Honors Program”. For students finishing secondary school outside the United States, “neither the SAT or ACT is required for admission.”', 'Можно подавать по любому плану без баллов тестов, и это «не повлияет на рассмотрение на стипендии за успехи и приём в AU Honors Program». Для тех, кто заканчивает школу за пределами США, «ни SAT, ни ACT для приёма не требуются».'), source=T, verified=V)
a['academics']['sat'] = t; a['academics']['act'] = dict(t)
drop_unconf(a, 'Early Decision and Regular Decision dates', 'test policy')
add_checked(a, CHK['rounds'], CHK['tests'])
a['sources'].append({'label': L('American — test-optional admission', 'American — приём без тестов'), 'url': T})

# ------------------------------------------------------------- Arizona
z = D['university-of-arizona']
U = 'https://www.arizona.edu/degree-search/majors?cat-program=bachelor'
EV = [('business', 'Accounting — Bachelor of Science in Business Administration'), ('economics', 'Economics — Bachelor of Arts'),
      ('computer-science', 'Computer Science — Bachelor of Science'), ('engineering', 'Mechanical Engineering — Bachelor of Science in Mechanical Engineering'),
      ('psychology', 'Psychology — Bachelor of Arts'), ('biology', 'Molecular and Cellular Biology — Bachelor of Science'),
      ('mathematics', 'Mathematics: Comprehensive Emphasis — Bachelor of Science'), ('social-sciences', 'Political Science — Bachelor of Arts'),
      ('humanities', 'History — Bachelor of Arts'), ('arts', 'Studio Art — Bachelor of Arts'), ('law', 'Law — Bachelor of Arts'),
      ('medicine', 'Nursing — Bachelor of Science in Nursing'), ('education', 'Elementary Education: Bilingual Emphasis — Bachelor of Arts in Education')]
old = dict((k, v) for k, v in z['programEvidence'].items())
z['programs'] = [k for k, _ in EV]; z['englishTaughtPrograms'] = list(z['programs'])
z['programEvidence'] = {}
for k, name in EV:
    url = old[k]['url'] if k == 'computer-science' else U
    z['programEvidence'][k] = {'program': old[k]['program'] if k == 'computer-science' else name, 'level': 'bachelor', 'language': 'English', 'url': url, 'checked': V}
z.pop('programsStatus', None)
z['programNote'] = L('The university’s degree search lists 355 bachelor’s programmes; one offered on the main Tucson campus is named for each area.', 'В поиске программ университета 355 программ бакалавриата; для каждой области названа одна, которая есть в основном кампусе в Тусоне.')
z['links']['programs'] = U
drop_unconf(z, 'full list of majors')
add_checked(z, L('list of majors', 'список программ'))

# ------------------------------------------------------------- Texas A&M
x = D['texas-a-and-m-university']
C = 'https://tuition.tamu.edu/undergraduate'
c = costs('Autumn 2026 or spring 2027', C, V, L('International incoming freshmen living on campus, 12 or more hours a semester', 'Иностранные первокурсники, живущие в кампусе, от 12 часов в семестр'),
    [(L('Tuition and required fees, per semester: English (base rate) to computer science and mechanical engineering', 'Обучение и обязательные сборы за семестр: от English (базовая ставка) до computer science и mechanical engineering'), {'min': 19885.28, 'max': 20913.8, 'text': '$19,885.28–$20,913.80'}, B),
     (L('Housing and food, per semester', 'Жильё и питание, за семестр'), 6472, E), (L('Books and supplies, per semester', 'Книги и материалы, за семестр'), 441, E),
     (L('Travel, per semester', 'Дорога, за семестр'), 1683, E), (L('Loan fees, per semester', 'Комиссия по кредиту, за семестр'), 31, E),
     (L('Personal expenses, per semester', 'Личные расходы, за семестр'), 1595, E)],
    L('$30,107.28–$31,135.80 estimated cost of attendance per semester', '$30,107.28–$31,135.80 — оценка стоимости обучения за семестр'),
    L('$30,107.28 per semester for English and $31,135.80 for computer science or mechanical engineering, as the calculator prints them. Two semesters come to $60,214.56–$62,271.60 — calculated by UniPath', '$30,107.28 за семестр для English и $31,135.80 для computer science или mechanical engineering — как выдаёт калькулятор. Два семестра — $60,214.56–$62,271.60; рассчитано UniPath'),
    L('tuition and required fees, plus the university’s estimates for housing, food, books, travel, loan fees and personal expenses — for one semester', 'обучение и обязательные сборы, а также оценки университета на жильё, питание, книги, дорогу, комиссию по кредиту и личные расходы — за один семестр'),
    tuition=19885.28, tuition_label='Tuition and fees', budget=30107.28, budget_max=31135.8, budget_text='$30,107.28–$31,135.80',
    note=L('Read from the university’s tuition calculator with these choices: autumn 2026 or spring 2027, non-resident international, incoming freshman, on campus, 12 or more hours. Tuition differs by major; for English the calculator also deducts $132.72 as a “tuition reduction based on 2022–2023 rates”. Not included: an International Student Services fee of $150 a semester; international student health insurance of $262.50 on arrival, $1,051 for autumn and $2,095 for spring; a $100 deposit and orientation fees.', 'Получено из калькулятора университета при таких выборах: осень 2026 или весна 2027, иностранный нерезидент, первокурсник, жильё в кампусе, от 12 часов. Плата зависит от специальности; для English калькулятор также вычитает $132.72 как «снижение платы по ставкам 2022–2023». Не входят: сбор International Student Services $150 за семестр; медицинская страховка для иностранных студентов — $262.50 при прибытии, $1,051 за осень и $2,095 за весну; депозит $100 и сборы за ориентацию.'))
c['breakdown']['period'] = 'semester'
c['breakdown']['tuitionText'] = L('$19,885.28–$20,913.80 per semester', '$19,885.28–$20,913.80 за семестр')
x['costs'] = c; x['links']['cost'] = C
drop_unconf(x, 'tuition and fees — the tuition page did not load for reading')
add_checked(x, CHK['costs'])
x['sources'].append({'label': L('Texas A&M — tuition calculator', 'Texas A&M — калькулятор стоимости'), 'url': C})
if 'law' not in x['programs']:
    x['programs'].append('law'); x['englishTaughtPrograms'].append('law')
x['programNote'] = L('Only the fields named on the programmes page read are listed. Law: the university’s tuition calculator lists the major “Society, Ethics, and Laws (SEAL)”; the School of Law itself is a graduate school.',
                     'Указаны только направления, названные на прочитанной странице программ. Право: в калькуляторе стоимости университета есть специальность «Society, Ethics, and Laws (SEAL)»; сама School of Law — школа после бакалавриата.')

# ------------------------------------------------------------- still unread test policies
def why(uid, en, ru, url):
    r = D[uid]; t = {'policy': None, 'note': L(en, ru), 'source': url, 'verified': V}
    r['academics']['sat'] = t; r['academics']['act'] = dict(t)
why('savannah-college-of-art-and-design', 'Not checked: the first-year admission page (read on 14 October 2026) lists the documents — high school diploma, evidence of English proficiency, achievement profile, supplementary materials — without naming the SAT or ACT, and the full list is a separate download that was not opened.',
    'Не проверено: на странице приёма первокурсников (прочитана 14 октября 2026) перечислены документы — школьный диплом, подтверждение английского, профиль достижений, дополнительные материалы — без упоминания SAT или ACT, а полный список вынесен в отдельный файл, который не открывался.', 'https://www.scad.edu/admission/admission-information/first-year')
why('ursinus-college', 'Not checked: neither the applying page nor the admission requirements page (read on 14 October 2026) mentions the SAT or ACT, and the page for international applicants lists no test policy.',
    'Не проверено: ни на странице подачи, ни на странице требований к поступающим (прочитаны 14 октября 2026) SAT и ACT не упоминаются, а на странице для иностранных абитуриентов политика тестов не указана.', 'https://www.ursinus.edu/admission/applying/requirements/')
why('anderson-university-indiana', 'Not checked: no current admission page states the policy. The only statement found is a news item of 20 May 2020 announcing that the SAT and ACT became optional for admission, which does not show the policy for 2027 entry.',
    'Не проверено: ни на одной действующей странице приёма политика не указана. Найдена только новость от 20 мая 2020 о том, что SAT и ACT стали необязательными для приёма, — она не показывает политику для поступления в 2027 году.', 'https://anderson.edu/blog-stories/act-sat-now-test-optional/')
why('cornell-college', 'Not checked: the college’s admission pages returned an empty page on 13 and 14 October 2026, so the policy could not be read.',
    'Не проверено: страницы приёмной комиссии колледжа 13 и 14 октября 2026 открывались пустыми, поэтому политику прочитать не удалось.', 'https://www.cornellcollege.edu/admissions/index.shtml')

us3_edit.save(head, recs)

import io, os, re
p = os.path.join(us3_edit.ROOT, 'data/match.js')
s = io.open(p, encoding='utf-8').read()
assert "'texas-a-and-m-university'" not in s
m = re.search(r'\n  annualCost: \{\n', s)
s = s[:m.end()] + "    'texas-a-and-m-university': { currency: 'USD', calc: 'two-semesters', basis: 'total', min: 60215, max: 62272 },\n" + s[m.end():]
io.open(p, 'w', encoding='utf-8').write(s)
L('Full cost a year: {0}. Two semesters at the published per-semester rates — calculated by UniPath, not a figure the university prints', 'Полная стоимость в год: {0}. Два семестра по опубликованным ставкам за семестр — рассчитано UniPath, университет такой суммы не печатает')
L('Autumn 2026 or spring 2027', 'Осень 2026 или весна 2027')
print('v116 written')
flush()
