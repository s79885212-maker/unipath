# -*- coding: utf-8 -*-
"""Second part of the 11 November 2026 grant check: pages that refused the text reader
(HTTP 403) were opened in an ordinary browser and read there; no bot check was bypassed
(UC Santa Cruz showed a Cloudflare check and UC Irvine's aid page stayed 403, so both keep
their earlier records). Run after tools/claude_grants2027.py."""
import io, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ca50_gaps as G
from us200_std import L, flush

ROOT = G.ROOT
DAY = '2026-11-11'
US3 = os.path.join(ROOT, 'data/universities.us3.js')
REG = os.path.join(ROOT, 'research/claude-grants-2027-sources.json')
reg = []
h, rs, t = G.load(US3)
R = {r['id']: r for r in rs}


def register(uid, field, url, quote, cycle=None):
    reg.append({'id': uid, 'field': field, 'source': url, 'quote': quote, 'cycle': cycle, 'read': DAY, 'access': 'browser'})


def award(uid, aid):
    s = R[uid]['scholarships']
    for a in [s.get('fullRide') or {}] + (s.get('merit') or []):
        if a.get('id') == aid:
            return a
    raise KeyError((uid, aid))


# ---------------------------------------------------------------- George Washington
uid = 'george-washington-university'
src = 'https://undergraduate.admissions.gwu.edu/financial-aid/international-student-aid'
nb = R[uid]['scholarships']['needBased']
nb['availableToInternational'] = False
nb['verified'] = DAY
fr = R[uid]['scholarships']['fullRide']
fr['verified'] = DAY
fr['firstYearEligible'] = True
R[uid]['scholarships']['merit'].append(G.plain({
    'id': 'gwu-presidential-academic', 'category': 'merit', 'basis': 'merit',
    'name': 'Presidential Academic Scholarships', 'amount': None,
    'internationalEligible': True, 'firstYearEligible': True,
    'eligibility': L('First-year fall applicants with strong academic credentials; international applicants are considered automatically, like domestic ones.',
                     'Поступающие на первый курс к осени с сильными академическими результатами; иностранцев рассматривают автоматически, как и местных.'),
    'application': L('Automatic during the admission review; any award is stated in the offer of admission.',
                     'Автоматически при рассмотрении заявки; награда указывается в письме о зачислении.'),
    'renewable': L('Up to 10 consecutive semesters with continuous full-time enrolment and satisfactory academic progress',
                   'До 10 семестров подряд при непрерывной очной учёбе и удовлетворительной успеваемости'),
    'note': L('The value varies and is not published. Awards apply to undergraduate tuition only, and a student can hold only one GW merit scholarship. GW offers no need-based aid to international applicants.',
              'Сумма меняется и не публикуется. Награды идут только на оплату обучения в бакалавриате, и студент может получать только одну merit-стипендию GW. Помощи по нуждаемости иностранцам GW не предоставляет.'),
    'deadlineScope': 'no-separate-application', 'entryTerm': None, 'entryYear': None, 'source': src, 'verified': DAY}))
register(uid, 'award: Presidential Academic Scholarships; no need-based aid', src,
         'GW is unable to offer need-based or U.S. government aid to international applicants. … International applicants, like domestic applicants, are automatically considered for Presidential Academic Scholarships, which are awarded to first-year undergraduate applicants for the fall semester')
register(uid, 'award: You Are Welcome Here (re-read)', src,
         'We are excited to offer two full-tuition scholarships each year to first-year fall applicants … also required to submit a CSS Profile … Applications are due January 31.')

# ---------------------------------------------------------------- Baylor: BIFAA for Fall 2027
uid = 'baylor-university'
src = 'https://admissions.web.baylor.edu/admission/international/financial-assistance-international-students'
q = 'Beginning with the incoming Fall 2027 class, these students can apply through the BIFAA. The priority deadline to submit the BIFAA is November 15, meaning you’ll receive your aid package sooner. The final deadline to submit the BIFAA is February 1.'
nb = R[uid]['scholarships']['needBased']
nb['note'] = G.plain(L('BIFAA is required for international institutional aid consideration from the Fall 2027 class; it does not guarantee aid and is not required for merit scholarships, which follow the admission application. Both official pages read on 11 November 2026 (international financial assistance and Scholarships & Aid) print priority 15 November and final 1 February; the 1 November priority read earlier no longer appears, so the dates are installed for Fall 2027. FAFSA/CSS instructions do not apply to ordinary F-1 applicants.',
                         'BIFAA обязательна для рассмотрения иностранцев на институциональную помощь начиная с набора осени 2027; она не гарантирует помощь и не нужна для merit-стипендий, которые следуют из заявки на поступление. Обе официальные страницы, прочитанные 11 ноября 2026 (помощь иностранцам и Scholarships & Aid), указывают приоритет 15 ноября и финальный срок 1 февраля; прочитанный ранее приоритет 1 ноября больше не печатается, поэтому даты установлены для осени 2027. Инструкции FAFSA/CSS к обычным абитуриентам с визой F-1 не относятся.'))
nb['source'] = src
nb['verified'] = DAY
for name, date, iso in [(L('BIFAA priority deadline', 'Приоритетный срок BIFAA'), '15 November 2026', '2026-11-15'),
                        (L('BIFAA final deadline', 'Финальный срок BIFAA'), '1 February 2027', '2027-02-01')]:
    R[uid]['admissions']['deadlines'].append(G.plain({
        'name': name, 'kind': 'aid', 'date': date, 'dateISO': iso, 'entryTerm': 'Autumn', 'entryYear': '2027',
        'status': 'confirmed', 'binding': None,
        'appliesTo': L('International applicants seeking Baylor institutional need-based aid (not needed for merit scholarships)',
                       'Иностранцы, претендующие на институциональную помощь Baylor по нуждаемости (для merit-стипендий не нужна)'),
        'note': L('Submitting by the priority date means the aid package arrives sooner; packages are sent to admitted students on a rolling basis. A bank statement is uploaded with the BIFAA. Aid is not guaranteed.',
                  'Подача к приоритетной дате ускоряет получение пакета помощи; пакеты рассылаются принятым студентам по мере готовности. С BIFAA загружается банковская выписка. Помощь не гарантирована.'),
        'source': src, 'verified': DAY,
        'cycleEvidence': {'basis': 'page-context', 'entryTerm': 'Autumn', 'entryYear': '2027', 'source': src, 'verified': DAY, 'quote': q}}))
register(uid, 'aid: BIFAA Fall 2027 priority and final', src, q, 'Autumn 2027')
register(uid, 'aid: BIFAA (same text)', 'https://admissions.web.baylor.edu/costs-aid/scholarships-aid', q, 'Autumn 2027')
a = award(uid, 'baylor-international-merit-review')
a['verified'] = DAY
register(uid, 'award: international merit (re-read)', src,
         'Admitted first-time international students are automatically considered for merit-based scholarships based on a complete review of their high school academic performance.')
g = award(uid, 'baylor-getterman')
g['verified'] = DAY
g['firstYearEligible'] = True
register(uid, 'award: Getterman international eligibility (re-read)', 'https://honors.baylor.edu/prospective-students/getterman-scholars-program/getterman-faqs',
         'Are international students eligible to participate in the Getterman Scholars program? International students are welcome to participate in the Getterman Scholars selection process.')

# ---------------------------------------------------------------- UC Davis
uid = 'university-of-california-davis'
src = 'https://financialaid.ucdavis.edu/frequently-asked-questions/scholarships'
a = award(uid, 'davis-campus-scholarships')
a.update({'internationalEligible': True, 'firstYearEligible': True, 'verified': DAY})
a['eligibility'] = G.plain(L('All undergraduates — national, international, undocumented and AB 540 — are eligible with at least a 3.25 GPA (UC calculation); each donor award can add its own restrictions. The 3.25 is not converted into an Uzbek school mark.',
                             'Все студенты бакалавриата — граждане, иностранцы, без документов и AB 540 — имеют право при GPA не ниже 3.25 (по расчёту UC); каждая донорская награда может добавлять свои ограничения. Порог 3.25 не переводится в узбекскую школьную оценку.'))
a['note'] = G.plain(L('Entering students are considered through the UC Application for Admission and Scholarships, with no extra material unless requested. Freshman scholarships no longer use SAT/ACT scores; selection is a holistic review of the admission application. Awards are competitive and amounts depend on the specific award; the 7 January date is for continuing students. No aid is deducted from cost.',
                      'Поступающих рассматривают через заявку UC на поступление и стипендии, без дополнительных материалов, если их не запросят. Стипендии первокурсников больше не учитывают SAT/ACT; отбор — целостная оценка заявки на поступление. Награды конкурсные, суммы зависят от конкретной награды; дата 7 января — для продолжающих студентов. Из стоимости ничего не вычитается.'))
register(uid, 'award: campus scholarships (re-read in browser)', src,
         'All undergraduate students – national, international, undocumented, AB540 – are eligible for scholarships as long as they have at least a 3.25 UC cumulative GPA. … Entering Students: The UC Application for Admission and Scholarships serves as your application for campus-based scholarships at UC Davis.')
register(uid, 'award: tests not used for freshman scholarships', src,
         'How will freshman scholarships be selected since SAT/ACT scores will no longer be used? … we will remove the test scores from our method and instead move to solely using a holistic evaluation')

# ---------------------------------------------------------------- UC Merced
uid = 'university-of-california-merced'
a = award(uid, 'merced-global-access')
a['verified'] = DAY
register(uid, 'award: Global Access Program (re-read in browser)', 'https://admissions.ucmerced.edu/node/5881',
         'The Global Access Program Scholarship is open to first year and transfer students and provides $25,000 a year for eligible international and non-resident students … Students do not need to apply for the Global Access Program Scholarship.')

G.save(h, rs, t, US3)
flush()
old = json.load(io.open(REG, encoding='utf-8')) if os.path.exists(REG) else []
io.open(REG, 'w', encoding='utf-8').write(json.dumps(old + reg, ensure_ascii=False, indent=1) + '\n')
print('register entries:', len(reg))
