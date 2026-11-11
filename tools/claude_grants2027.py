# -*- coding: utf-8 -*-
"""Grants and Fall 2027 deadlines of the 50 USA profiles, checked on official pages on
11 November 2026 (plus Berea's international funding and Auburn's yearly cost).

Rules (DATA_DISPLAY_CONTRACT.md, AGENTS.md):
- a deadline becomes `confirmed` only with a verbatim quote that ties it to Fall 2027
  (`page-context`: "Applying for Fall 2027", "Class of 2031", "The Fall 2027 Application is
  open"; `explicit-date`: the date itself carries its year); otherwise it stays an annual rule;
- `internationalEligible` / `firstYearEligible` of an award (read by the catalogue and match
  filters) are set only from an official sentence; where the sentence does not say it, the
  field stays null ("not confirmed");
- nothing is copied from search previews; pages that refused the reader (HTTP 403) keep the
  facts read earlier, with their earlier reading date.
Run after tools/us50_text_spacing.py. Writes data/universities.us3.js, data/universities.us.js
(Berea), data/match.js (Auburn), data/i18n/ru.js and research/claude-grants-2027-sources.json.
"""
import io, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ca50_gaps as G
from us200_std import L, flush

ROOT = G.ROOT
DAY = '2026-11-11'
US3 = os.path.join(ROOT, 'data/universities.us3.js')
REG = os.path.join(ROOT, 'research/claude-grants-2027-sources.json')
reg = []


def register(uid, field, url, quote, cycle=None):
    reg.append({'id': uid, 'field': field, 'source': url, 'quote': quote, 'cycle': cycle, 'read': DAY})


h, rs, t = G.load(US3)
R = {r['id']: r for r in rs}


def ev(uid, name):
    hits = [d for d in R[uid]['admissions']['deadlines'] if d['name'] == name]
    assert len(hits) == 1, (uid, name, len(hits))
    return hits[0]


def award(uid, aid):
    s = R[uid]['scholarships']
    for a in [s.get('fullRide') or {}] + (s.get('merit') or []):
        if a.get('id') == aid:
            return a
    raise KeyError((uid, aid))


def confirm(uid, name, date, iso, basis, src, quote, note=None, kind=None):
    d = ev(uid, name)
    d.update({'date': date, 'dateISO': iso, 'entryTerm': 'Autumn', 'entryYear': '2027',
              'status': 'confirmed', 'source': src, 'verified': DAY})
    d['cycleEvidence'] = {'basis': basis, 'entryTerm': 'Autumn', 'entryYear': '2027',
                          'source': src, 'verified': DAY, 'quote': quote}
    if kind:
        d['kind'] = kind
    if note is not None:
        d['note'] = G.plain(note)
    register(uid, 'deadline: ' + name, src, quote, 'Autumn 2027')
    return d


# ---------------------------------------------------------------- deadlines
# UConn: the general first-year page is headed "Applying for Fall 2027".
src = 'https://admissions.uconn.edu/apply/deadlines/'
q = 'Applying for Fall 2027 | November 1 | Early Decision Application Deadline'
confirm('university-of-connecticut', 'Early Decision', '1 November 2026', '2026-11-01', 'page-context', src, q,
        L('Fall 2027 date from UConn’s first-year deadline page; the international first-year page lists the same date. Early Decision is binding; the special programmes in medicine, dental medicine and law share the 1 November deadline without requiring Early Decision.',
          'Дата набора осени 2027 со страницы сроков UConn для первокурсников; страница для иностранных первокурсников называет ту же дату. Early Decision обязывает к зачислению; специальные программы по медицине, стоматологии и праву имеют тот же срок 1 ноября без обязательного Early Decision.'))
confirm('university-of-connecticut', 'Storrs campus application', '15 January 2027', '2027-01-15', 'page-context', src,
        'Applying for Fall 2027 … January 15 | Storrs Campus Application Deadline',
        L('Fall 2027 date from UConn’s first-year deadline page; regional campuses take applications until 1 May.',
          'Дата набора осени 2027 со страницы сроков UConn для первокурсников; региональные кампусы принимают заявки до 1 мая.'))
R['university-of-connecticut']['admissions']['deadlines'].append(G.plain({
    'id': 'uconn-merit-honors-priority-2027',
    'name': L('Priority deadline for merit scholarship and Honors consideration', 'Приоритетный срок для рассмотрения на merit-стипендии и Honors'),
    'kind': 'priority', 'date': '1 December 2026', 'dateISO': '2026-12-01', 'entryTerm': 'Autumn', 'entryYear': '2027',
    'status': 'confirmed', 'binding': None,
    'appliesTo': L('First-year applicants; the scholarship page applies the same 1 December priority to the international Global awards',
                   'Поступающие на первый курс; страница стипендий применяет тот же приоритет 1 декабря к международным наградам Global'),
    'note': L('Earlier than the 15 January Storrs deadline: an application completed after 1 December is still reviewed for admission, but merit and Honors consideration is given to applications completed by this date.',
              'Раньше срока Storrs 15 января: заявку, завершённую после 1 декабря, всё равно рассматривают на поступление, но на merit-стипендии и Honors рассматривают заявки, завершённые к этой дате.'),
    'source': src, 'verified': DAY,
    'cycleEvidence': {'basis': 'page-context', 'entryTerm': 'Autumn', 'entryYear': '2027', 'source': src, 'verified': DAY,
                      'quote': 'Applying for Fall 2027 … December 1 | Priority Application Deadline for Merit & Honors Consideration'}}))
register('university-of-connecticut', 'deadline: merit & Honors priority', src,
         'December 1 | Priority Application Deadline for Merit & Honors Consideration', 'Autumn 2027')
for aid in ('uconn-global-excellence', 'uconn-global-distinction', 'uconn-global-leader'):
    a = award('university-of-connecticut', aid)
    a.update({'internationalEligible': True, 'firstYearEligible': True, 'verified': DAY})
register('university-of-connecticut', 'awards: Global Excellence / Distinction / Leader', 'https://admissions.uconn.edu/cost-aid/scholarship/',
         'Available to International Applicants | Global Excellence Award | Available to international applicants; all campuses')

# George Mason: Early Action for fall 2027 extended to 15 November.
src = 'https://www.gmu.edu/freshman/dates-deadlines'
q = 'George Mason\'s early action application deadline for fall 2027 has been extended. Apply by November 15 to receive an early admissions decision and priority consideration for the Honors College and merit-based scholarships.'
confirm('george-mason-university', 'Early Action', '15 November 2026', '2026-11-15', 'page-context', src, q,
        L('Extended for Fall 2027 from the standing 1 November date. Applying by this date gives priority consideration for the Honors College, University Scholars and merit-based scholarships; international freshmen are reviewed for merit awards with the admission application.',
          'Для набора осени 2027 продлён с прежней даты 1 ноября. Подача к этой дате даёт приоритет при рассмотрении на Honors College, University Scholars и merit-стипендии; иностранных первокурсников рассматривают на merit-награды вместе с заявкой на поступление.'))
a = award('george-mason-university', 'mason-international-merit')
a.update({'internationalEligible': True, 'firstYearEligible': True, 'verified': DAY})
a['note'] = G.plain(L('Limited competitive awards. Mason says GPA and test scores are the most important criteria, though not the only ones, so SAT/ACT results count where submitted. For Fall 2027 the extended 15 November Early Action date gives priority consideration. Amount and stacking are not published; Mason Korea awards are not Fairfax funding. No federal aid for international students.',
                      'Ограниченное число конкурсных наград. По словам Mason, GPA и результаты тестов — важнейшие, хотя и не единственные критерии, поэтому SAT/ACT учитываются, если поданы. Для осени 2027 продлённый срок Early Action 15 ноября даёт приоритет при рассмотрении. Сумма и совместимость с другими наградами не опубликованы; награды Mason Korea не относятся к кампусу Fairfax. Федеральной помощи иностранцам нет.'))
register('george-mason-university', 'award: international merit', 'https://www.gmu.edu/international/financial-aid',
         'Merit-based scholarships are open to qualified incoming international freshman and transfer students studying full-time on an F1-visa. … While GPA and test scores are the most important criteria, they are not the only criteria')

# Wake Forest: the first-year page is published for the Class of 2031, but no quote names 2027,
# so the dates stay annual rules (tests require a cycle quote that names the year).
def annotate(uid, name, note, src):
    d = ev(uid, name)
    assert d['status'] == 'annual-rule'
    d['note'] = G.plain(note); d['verified'] = DAY; d['source'] = src
    d.setdefault('cycleEvidence', {})['verified'] = DAY

src = 'https://admissions.wfu.edu/apply/first-year/'
cl = L('The first-year page is headed “Class of 2031” (students entering in autumn 2027) and lists this date, but it prints no year, so the date is kept as a standing rule rather than a confirmed Fall 2027 deadline.',
       'Страница для первокурсников озаглавлена «Class of 2031» (поступление осенью 2027) и называет эту дату, но года не указывает, поэтому дата сохранена как постоянное правило, а не подтверждённый срок осени 2027.')
for nm in ('Early Decision I', 'Early Decision II', 'Regular Decision'):
    annotate('wake-forest-university', nm, cl, src)
annotate('wake-forest-university', 'Early Action',
         L('Only for first-generation college applicants who meet Wake Forest’s parent/guardian education criteria; non-binding, decision by 15 January. The page is headed “Class of 2031” but prints no year, so the date stays a standing rule.',
           'Только для поступающих в первом поколении, отвечающих критериям Wake Forest об образовании родителей/опекунов; не обязывает к зачислению, решение к 15 января. Страница озаглавлена «Class of 2031», но года не указывает, поэтому дата остаётся постоянным правилом.'), src)
register('wake-forest-university', 'deadlines: Class of 2031 page (no year printed)', src,
         'Information for First-Year Applicants | Class of 2031: Everything you need to know. … Early Decision I | November 15')

# Pitt: rolling admission, Fall 2027 application open, fall completion by 1 April.
src = 'https://admissions.pitt.edu/international/international-first-year-students/'
confirm('university-of-pittsburgh', 'Rolling admission — fall completion', '1 April 2027', '2027-04-01', 'page-context', src,
        'The Fall 2027 Application is open! Apply Today. … Fall term (August)—complete your application by April 1',
        L('Rolling review from August; the page states the Fall 2027 application is open and fall applications must be complete by 1 April. Scholarship priority (completed application by 1 February) is described separately and has no year printed.',
          'Скользящее рассмотрение с августа; страница сообщает, что приём заявок на осень 2027 открыт, а заявки на осень должны быть завершены к 1 апреля. Приоритет для стипендий (завершённая заявка к 1 февраля) описан отдельно, без года.'))

# Penn State: materials for Early Action are due 5 November 2026; no quote names 2027,
# so Early Action stays an annual rule with the printed materials date in the note.
annotate('pennsylvania-state-university-university-park', 'Early Action',
         L('Penn State’s first-year deadline page prints the Early Action materials date as 5 November 2026 (11:59 p.m. ET); the international page says international deadlines are the same as domestic ones. The page does not name the entry term, so 1 November is kept as a standing rule. After 1 November applications are reviewed on a rolling basis; 1 December is the recommended submission date.',
           'Страница сроков Penn State для первокурсников указывает срок материалов Early Action — 5 ноября 2026 (23:59 по восточному времени); страница для иностранцев говорит, что их сроки совпадают с внутренними. Набор страница не называет, поэтому 1 ноября сохранено как постоянное правило. После 1 ноября заявки рассматриваются в порядке поступления; рекомендуемая дата подачи — 1 декабря.'),
         'https://admissions.psu.edu/apply/deadlines/')
register('pennsylvania-state-university-university-park', 'deadline: Early Action materials', 'https://admissions.psu.edu/apply/deadlines/',
         'Penn State must receive your additional materials by November 5, 2026, at 11:59 p.m. ET to be considered for Early Action.')

# BYU: Fall 2027 table, plus the separate scholarship application.
uid = 'brigham-young-university'
src = 'https://enrollment.byu.edu/admissions/application-deadlines'
q = 'Fall 2027 | Aug 26, 2026 | Nov 2, 2026 | Dec 15, 2026 | Feb 15, 2027'
dl = R[uid]['admissions']['deadlines']
dl[:] = [d for d in dl if d['name'] != 'Fall first-year application']
applies = L('First-year applicants, including international applicants (the international admissions page links to this table)',
            'Поступающие на первый курс, включая иностранцев (страница для иностранных абитуриентов ссылается на эту таблицу)')
for name, kind, date, iso, note in [
    (L('Priority deadline', 'Приоритетный срок'), 'priority', '2 November 2026', '2026-11-02',
     L('Meeting the priority deadline gives extra consideration in the holistic review but no earlier decision; decisions for Fall 2027 are released 15 February 2027. All deadlines are 11:59 p.m. Mountain Time.',
       'Подача к приоритетному сроку даёт дополнительный учёт при целостном рассмотрении, но не более раннее решение; решения по осени 2027 выходят 15 февраля 2027. Все сроки — 23:59 по горному времени.')),
    (L('Application deadline', 'Срок подачи заявки'), 'RD', '15 December 2026', '2026-12-15',
     L('Final Fall 2027 application deadline, 11:59 p.m. Mountain Time; decisions 15 February 2027. Applicants younger than 17 on the first day of class are not admitted.',
       'Последний срок подачи заявок на осень 2027, 23:59 по горному времени; решения 15 февраля 2027. Абитуриентов младше 17 лет на первый день занятий не принимают.'))]:
    dl.append(G.plain({'name': name, 'kind': kind, 'date': date, 'dateISO': iso, 'entryTerm': 'Autumn', 'entryYear': '2027',
                       'status': 'confirmed', 'binding': None, 'appliesTo': applies, 'time': '23:59', 'timezone': 'Mountain Time',
                       'note': note, 'source': src, 'verified': DAY,
                       'cycleEvidence': {'basis': 'explicit-date', 'entryTerm': 'Autumn', 'entryYear': '2027', 'source': src, 'verified': DAY, 'quote': q}}))
register(uid, 'deadlines: Fall 2027 priority and final', src, q, 'Autumn 2027')
ssrc = 'https://enrollment.byu.edu/financial-aid/international-student-scholarships'
R[uid]['scholarships']['merit'].append(G.plain({
    'id': 'byu-general-scholarships', 'category': 'merit', 'basis': 'merit',
    'name': L('BYU general scholarships (Financial Aid Office)', 'Общие стипендии BYU (Financial Aid Office)'),
    'amount': None, 'internationalEligible': True, 'firstYearEligible': True,
    'eligibility': L('International students are eligible for the general scholarships of the Financial Aid Office; new freshmen entering in spring, summer or fall.',
                     'Иностранцы имеют право на общие стипендии Financial Aid Office; новые первокурсники с началом весной, летом или осенью.'),
    'application': L('Separate BYU scholarship application, due 2 January for new freshmen (no year printed)',
                     'Отдельная заявка на стипендию BYU, срок для новых первокурсников — 2 января (год не указан)'),
    'renewable': None,
    'note': L('Amounts, selection criteria and renewal are not published on the international page; an award is not guaranteed. The 2 January date is a standing rule without a printed year.',
              'Суммы, критерии отбора и продление на странице для иностранцев не опубликованы; награда не гарантирована. Дата 2 января — постоянное правило без указанного года.'),
    'deadlineScope': 'annual-rule', 'entryTerm': None, 'entryYear': None, 'source': ssrc, 'verified': DAY}))
dl.append(G.plain({'name': L('BYU scholarship application', 'Заявка на стипендию BYU'), 'kind': 'scholarship',
                   'date': '2 January', 'dateISO': None, 'entryTerm': None, 'entryYear': None, 'status': 'annual-rule', 'binding': None,
                   'awardId': 'byu-general-scholarships', 'awardCategory': 'merit',
                   'appliesTo': L('New freshmen, including international students', 'Новые первокурсники, включая иностранцев'),
                   'note': L('Standing rule without a printed year; not shown as a confirmed Fall 2027 date.',
                             'Постоянное правило без указанного года; не показывается как подтверждённая дата осени 2027.'),
                   'source': ssrc, 'verified': DAY,
                   'cycleEvidence': {'basis': 'annual-rule', 'source': ssrc, 'verified': DAY,
                                     'quote': 'New freshman entering BYU beginning spring term, summer term, or fall semester must submit the scholarship application by January 2.'}}))
register(uid, 'award: general scholarships, international eligibility', ssrc,
         'International students are eligible for general scholarships offered through the Financial Aid Office. … New freshman entering BYU beginning spring term, summer term, or fall semester must submit the scholarship application by January 2.')

# ---------------------------------------------------------------- awards: international / first-year fields
# (uid, award id, international, first-year, source, quote). None = not confirmed by the page read.
FIELDS = [
    ('university-of-illinois-urbana-champaign', 'illinois-international-college-review', True, None, 'https://www.osfa.illinois.edu/types-of-aid/other-aid/international-students/',
     'For international students, financial aid is generally limited to institutional aid programs … may be eligible for scholarships awarded by colleges or departments. Generally, there’s no separate application needed'),
    ('university-of-texas-at-austin', 'ut-austin-iimura-peace', True, None, 'https://global.utexas.edu/isss/advising-services/scholarships',
     'Scholarships for International Students … Iimura Peace Endowed Scholarship … You must be registered as a full-time student at UT Austin during the semester in which the scholarship is awarded.'),
    ('rutgers-university-new-brunswick', 'rutgers-nb-international', True, True, 'https://admissions.rutgers.edu/new-brunswick-scholarships',
     'All admitted first-year international students (on valid non-immigrant visas) are automatically considered for Rutgers international scholarships. No separate application is required.'),
    ('virginia-tech', 'vt-international-college-scholarships', True, True, 'https://finaid.vt.edu/undergraduate/international-students.html',
     'International students, whether they are eligible to complete a FAFSA or not, are still able to apply for both college and departmental scholarships at Virginia Tech. After submitting their application for admission, students can access Scholarship Central'),
    ('binghamton-university', 'binghamton-international-admission-review', True, True, 'https://www.binghamton.edu/financial-aid/types-of-aid/scholarships/',
     'International Students | A limited number of scholarships are available via the admission process'),
    ('indiana-university-bloomington', 'iu-global-engagement', True, True, 'https://bloomington.iu.edu/admissions/apply/international/deadlines.html',
     'To be considered for IU Scholarships, you must submit your complete application for admission to IU by November 1.'),
    ('north-carolina-state-university', 'ncsu-international-packassist', True, True, 'https://admissions.ncsu.edu/apply/international/first-year/',
     'International applicants are not eligible for financial aid. However, a limited number of competitive merit-based scholarships are available to international students.'),
    ('rutgers-university-newark', 'newark-international-merit-review', True, True, 'https://admissions.rutgers.edu/costs-and-aid/scholarships',
     'Are international students considered for scholarships? International students are considered for scholarships each year. … international students should apply no later than the December 1 due date for the following fall semester.'),
    ('university-of-california-riverside', 'achievement', True, True, 'https://discover.ucr.edu/international',
     'International first-year and transfer students are automatically considered to receive the Achievement Scholarship with their acceptance to UCR.'),
    ('new-jersey-institute-of-technology', 'njit-international-merit-review', True, True, 'https://honors.njit.edu/content/scholarships',
     'International students are considered for merit aid at the time of admission to NJIT'),
    ('university-at-buffalo', 'buffalo-flagship', True, True, 'https://www.buffalo.edu/admissions/costs/scholarships.html',
     'The University at Buffalo offers scholarships in varying amounts to qualified incoming international first-year … All admitted international students are automatically considered for scholarships'),
    ('rutgers-university-camden', 'camden-international-chancellor', True, True, 'https://admissions.rutgers.edu/international-chancellor-scholarship',
     'Earning a world-class Rutgers–Camden degree is possible for international first-year or transfer students. … There is no separate application for the scholarship.'),
    ('university-of-missouri', 'mizzou-honors', True, True, 'https://admissions.missouri.edu/costs-aid/scholarships/international-student-scholarships/',
     'Awards for International Freshman Students | Your application will be reviewed holistically in consideration of the international scholarships below. SAT/ACT scores are not required but are preferred.'),
    ('university-of-missouri', 'mizzou-merit', True, True, 'https://admissions.missouri.edu/costs-aid/scholarships/international-student-scholarships/',
     'International Merit Scholarship | $10,000 | Application materials | English proficiency | SAT/ACT preferred'),
    ('florida-international-university', 'fiu-gold-blue', True, True, 'https://admissions.fiu.edu/cost-and-aid/scholarships/',
     'students must be a citizen of the United States, a U.S. lawful permanent resident, or an international student to receive the F-1 visa … $4,000 to $24,000 for non-Florida residents (deadline December 16, 2026)'),
    ('university-of-south-florida', 'usf-green-gold-presidential', True, True, 'https://www.usf.edu/admissions/international/admission-information/cost-of-attendance/scholarships.aspx',
     'International Scholarships Summer/Fall 2027 … submit and complete the freshman application for Summer or Fall 2027 by January 15, 2027.'),
    ('university-of-south-florida', 'usf-green-gold-directors', True, True, 'https://www.usf.edu/admissions/international/admission-information/cost-of-attendance/scholarships.aspx',
     'International Scholarships Summer/Fall 2027 … All accepted students are automatically considered for our admissions merit scholarships.'),
    ('university-of-south-florida', 'usf-green-gold-scholars', True, True, 'https://www.usf.edu/admissions/international/admission-information/cost-of-attendance/scholarships.aspx',
     'International Scholarships Summer/Fall 2027 … All accepted students are automatically considered for our admissions merit scholarships.'),
    ('university-of-colorado-boulder', 'cu-boulder-presidential', True, True, 'https://www.colorado.edu/admissions/process/international/faqs',
     'All international, first-year applications will be reviewed for automatic consideration scholarships … reviewed for the Chancellor’s Achievement Scholarship as well as the Presidential Scholarship.'),
    ('university-of-colorado-boulder', 'cu-boulder-chancellors', True, True, 'https://www.colorado.edu/admissions/process/international/faqs',
     'Do I need to take the SAT or ACT to be considered for a scholarship? No. Test scores are not required or considered for automatic consideration scholarships.'),
    ('university-of-new-hampshire', 'unh-international-student-scholarship', True, True, 'https://www.unh.edu/financialaid/types-aid/scholarships',
     'The University of New Hampshire offers limited scholarships each year to international students in valid F-1/J-1 status. … Newly admitted and continuing international undergraduate students with a GPA of 3.1 or higher will receive an email invitation to apply'),
    ('university-of-tennessee-knoxville', 'utk-global-ambassador', True, True, 'https://onestop.utk.edu/scholarships-financial-aid/scholarships/global-ambassador-scholarship/',
     'Available To : First-Year; International … International students who meet the above criteria will receive an invitation with a separate application for the Global Ambassador Scholarship.'),
    ('stevens-institute-of-technology', 'stevens-international-merit', True, True, 'https://www.stevens.edu/admission-aid/undergraduate-admissions/international-students',
     'Stevens awards a limited number of merit scholarships to international students. International students who wish to be considered for institutional scholarship must submit the College Scholarship Service Profile (CSS PROFILE)'),
    ('yeshiva-university', 'yu-international-merit-review', True, True, 'https://apply.yu.edu/international',
     'Yeshiva University offers merit-based scholarships to international students.'),
    ('wabash-college', 'presidential-international', True, True, 'https://www.wabash.edu/admissions/international/scholarships',
     'Presidential International Scholarships | Merit-based scholarships up to $48,000 per year. … If awarded the Presidential International Scholarship, it will be included on your admission letter at the time of admission.'),
    ('hillsdale-college', 'hillsdale-international-tuition', True, None, 'https://catalog.hillsdale.edu/welcome-to-hillsdale-college/financial-aid-without-regard-to-need',
     'INTERNATIONAL SCHOLARSHIPS A limited number of tuition scholarships are available for foreign students. Awards are based on academic achievement and financial need. These scholarships may cover up to the cost of tuition.'),
    ('university-of-san-francisco', 'usfca-international-first-year-merit', True, True, 'https://www.usfca.edu/admission/undergraduate/international-cost-scholarship',
     'Fall 2027 international first-year merit scholarships | Merit Award* | Amount** | University Scholarship | $36,000'),
    ('university-at-albany-suny', 'albany-global-excellence', True, True, 'https://www.albany.edu/international-admissions/apply-international-undergraduate-student',
     'The University at Albany Global Excellence Scholarships are awarded to incoming international students … The maximum scholarship award is $20,500 per year for first-year (freshmen) applicants'),
    ('university-of-dayton', 'dayton-international-merit', True, True, 'https://udayton.edu/tuition-aid/international/undergraduate.php',
     'The majority of international undergraduate students receive an international merit scholarship from the University of Dayton upon admission. Merit scholarships are worth up to $34,000 per year towards tuition costs.'),
]
for uid, aid, intl, fy, src, quote in FIELDS:
    a = award(uid, aid)
    a['internationalEligible'] = intl
    a['firstYearEligible'] = fy
    a['verified'] = DAY
    register(uid, 'award fields: ' + aid, src, quote)

# Pages that refused the reader today (HTTP 403): the official sentence read earlier is kept.
EARLIER = [
    ('university-of-california-davis', 'davis-campus-scholarships', True, None),   # FAQ read 2026-11-01
    ('university-of-california-merced', 'merced-global-access', True, True),        # read 2026-11-02
    ('university-of-california-santa-cruz', 'ucsc-undergraduate-dean', True, True), # read 2026-11-02
    ('baylor-university', 'baylor-international-merit-review', True, True),         # read 2026-11-02
]
for uid, aid, intl, fy in EARLIER:
    a = award(uid, aid)
    a['internationalEligible'] = intl
    a['firstYearEligible'] = fy

# ---------------------------------------------------------------- awards: added facts
a = award('university-of-california-riverside', 'achievement')
a['note'] = G.plain(L('Up to USD 89,100 over four years for first-year students (USD 44,550 over two years for transfers); to qualify, admitted students must confirm nonresidency, meet UC eligibility and submit the SIR, then keep a 3.0 GPA each quarter. UC Riverside does not consider SAT or ACT scores when awarding scholarships. Automatic consideration does not mean an award to every eligible admitted student; this is not full tuition or full ride and is not deducted from cost.',
                      'До USD 89,100 за четыре года для первокурсников (USD 44,550 за два года для переводящихся); для получения принятый студент должен подтвердить статус нерезидента, соответствовать требованиям UC и подать SIR, затем сохранять GPA 3.0 каждую четверть. UC Riverside не учитывает SAT и ACT при присуждении стипендий. Автоматическое рассмотрение не означает награду каждому подходящему принятому студенту; это не полная оплата обучения и не full ride, из стоимости не вычитается.'))
register('university-of-california-riverside', 'award: tests not used', 'https://discover.ucr.edu/international',
         'UC Riverside will not consider SAT or ACT test scores when making admissions decisions or awarding scholarships.')

for aid in ('cu-boulder-presidential', 'cu-boulder-chancellors'):
    a = award('university-of-colorado-boulder', aid)
    a['application'] = G.plain(L('Automatic consideration for international first-year applications complete by 15 January, including proof of English proficiency; awards are announced with the admission decision. SAT/ACT are not required or considered.',
                                 'Автоматическое рассмотрение иностранных первокурсников, чья заявка завершена к 15 января, включая подтверждение английского; о наградах сообщают вместе с решением о приёме. SAT/ACT не требуются и не учитываются.'))

for aid in ('mizzou-honors', 'mizzou-merit'):
    a = award('university-of-missouri', aid)
    a['application'] = G.plain(L('No separate application: apply and submit all required materials by 1 December for fall consideration; offers by late January. SAT/ACT are preferred but not required.',
                                 'Отдельной заявки нет: подать заявку и все материалы до 1 декабря для рассмотрения на осень; предложения — к концу января. SAT/ACT желательны, но не обязательны.'))
register('university-of-missouri', 'awards: test preference, 1 December', 'https://admissions.missouri.edu/costs-aid/scholarships/international-student-scholarships/',
         'SAT/ACT scores are not required but are preferred. … Fall applicants must apply and submit all required application materials by December 1 to be considered for scholarships.')

# Delaware: international awards USD 10,000–15,000 per year, automatic.
src = 'https://www.udel.edu/apply/undergraduate-admissions/financing-your-degree/international-students/'
R['university-of-delaware']['scholarships']['merit'].append(G.plain({
    'id': 'udel-international-scholarships', 'category': 'merit', 'basis': 'merit',
    'name': L('International student scholarships', 'Стипендии для иностранных студентов'),
    'amount': L('USD 10,000–15,000 per year', 'USD 10,000–15,000 в год'),
    'internationalEligible': True, 'firstYearEligible': True,
    'eligibility': L('Freshman international applicants; awards are subject to availability.', 'Иностранные поступающие на первый курс; награды выдаются при наличии средств.'),
    'application': L('Automatic: all freshman international applicants are considered; no additional scholarship application.',
                     'Автоматически: рассматриваются все иностранные поступающие на первый курс; отдельной заявки на стипендию нет.'),
    'renewable': None,
    'note': L('Competitive and subject to availability, not guaranteed. Delaware cannot offer need-based aid to international students. The Honors scholarships (Eugene du Pont, Valencia, 1743) are separate and also open to international applicants.',
              'Конкурсные и выдаются при наличии средств, не гарантированы. Delaware не может предлагать иностранцам помощь по нуждаемости. Стипендии Honors (Eugene du Pont, Valencia, 1743) — отдельные и тоже открыты иностранцам.'),
    'deadlineScope': 'no-separate-application', 'entryTerm': None, 'entryYear': None, 'source': src, 'verified': DAY}))
register('university-of-delaware', 'award: international scholarships', src,
         'we’re proud to support international students with scholarships.* Awards range from $10,000 - $15,000 per year. … All freshman international students who apply are automatically considered for all possible scholarships. There is no additional scholarship application.')

# Rutgers–Camden: #YouAreWelcomeHere scholarship.
src = 'https://admissions.rutgers.edu/costs-and-aid/scholarships'
R['rutgers-university-camden']['scholarships']['merit'].append(G.plain({
    'id': 'camden-youarewelcomehere', 'category': 'merit', 'basis': 'merit',
    'name': '#YouAreWelcomeHere Scholarship',
    'amount': L('At least 50% of tuition', 'Не менее 50% стоимости обучения'),
    'internationalEligible': True, 'firstYearEligible': True,
    'eligibility': L('First-year international students dedicated to advancing intercultural learning and understanding at Rutgers–Camden.',
                     'Иностранные первокурсники, готовые развивать межкультурное обучение и взаимопонимание в Rutgers–Camden.'),
    'application': None, 'renewable': None,
    'note': L('Selection process, number of awards, renewal and stacking with the International Chancellor’s Scholarship are not stated on the page read. Covers part of tuition only; it is not full tuition or full ride.',
              'Порядок отбора, число наград, продление и совместимость с International Chancellor’s Scholarship на прочитанной странице не указаны. Покрывает только часть обучения; это не полная оплата обучения и не full ride.'),
    'deadlineScope': 'not-confirmed', 'entryTerm': None, 'entryYear': None, 'source': src, 'verified': DAY}))
register('rutgers-university-camden', 'award: #YouAreWelcomeHere', src,
         '#YouAreWelcomeHere Scholarship | First-year international students who are dedicated to advancing intercultural learning and understanding at Rutgers–Camden are eligible for a scholarship that covers a minimum of 50% tuition.')

# UC Santa Barbara: the international FAQ on aid.
src = 'https://admissions.sa.ucsb.edu/international'
nb = R['university-of-california-santa-barbara']['scholarships']['needBased']
nb['note'] = G.plain(L('UCSB says financial aid and scholarships for international students are very limited: as a public university in California it awards financial aid primarily to US residents, and international students must show funding for the full cost of attendance. No named international award is recorded.',
                       'UCSB сообщает, что финансовая помощь и стипендии для иностранцев очень ограничены: как государственный университет Калифорнии он выделяет помощь в основном резидентам США, а иностранцы должны подтвердить средства на полную стоимость обучения. Названной награды для иностранцев не записано.'))
nb['source'] = src; nb['verified'] = DAY
register('university-of-california-santa-barbara', 'aid: international statement', src,
         'Financial aid and scholarships for international students are very limited. As a public university in California, we primarily award financial aid to U.S. residents')

# UT Dallas: Academic Excellence Scholarship review, international eligibility not stated.
src = 'https://enroll.utdallas.edu/affordability/freshman-scholarships/'
fr = R['university-of-texas-at-dallas']['scholarships']['fullRide']
fr['note'] = G.plain(L('UT Dallas reviews first-time freshmen who complete the application by the 1 December priority deadline for the Academic Excellence Scholarship automatically, with no separate submission; criteria and amounts vary by class. The pages read do not say whether international freshmen are eligible, and the scholarship office site did not respond, so no international award is recorded.',
                       'UT Dallas автоматически рассматривает первокурсников, завершивших заявку к приоритетному сроку 1 декабря, на Academic Excellence Scholarship, без отдельной подачи; критерии и суммы меняются от набора к набору. Прочитанные страницы не говорят, допускаются ли иностранные первокурсники, а сайт офиса стипендий не ответил, поэтому награда для иностранцев не записана.'))
fr['source'] = src; fr['verified'] = DAY
register('university-of-texas-at-dallas', 'award: AES review', src,
         'Students who complete the application process by the December 1 priority deadline are automatically reviewed for the Academic Excellence Scholarship. No additional information or scholarship submission is required.')

G.save(h, rs, t, US3)

# ---------------------------------------------------------------- Auburn: no confirmed yearly cost
mp = os.path.join(ROOT, 'data/match.js')
ms = io.open(mp, encoding='utf-8').read()
ms2, n = re.subn(r'\n    "auburn-university": \{[^\n]*\},?(?=\n)', '', ms)
assert n == 1, n
io.open(mp, 'w', encoding='utf-8').write(ms2)
h, rs, t = G.load(US3)
R = {r['id']: r for r in rs}
c = R['auburn-university']['costs']
src = 'https://www.auburn.edu/academic/international/isss/cost.php'
for it in c['items']:
    if it['label'] == 'Tuition and fees':
        it['note'] = G.plain(L('2027–28 estimate for F/J undergraduates; fall and spring semesters (nine months)', 'Оценка 2027–28 для студентов бакалавриата с визами F/J; осенний и весенний семестры (девять месяцев)'))
    elif it['label'] == 'Living expenses':
        it['note'] = G.plain(L('2027–28 estimate for 12 months', 'Оценка 2027–28 на 12 месяцев'))
    elif it['label'] == 'Health insurance':
        it['note'] = G.plain(L('Mandatory Auburn insurance for F-1/J-1 students; 2027–28 estimate', 'Обязательная страховка Auburn для студентов F-1/J-1; оценка 2027–28'))
txt = L('One official page (estimates as of October 2026 for 2027–28, F/J undergraduates): tuition and fees USD 39,658 for fall and spring (nine months), living expenses USD 15,000 for 12 months, health insurance USD 2,317, total USD 56,975. The page contradicts itself on what the total includes: its introduction lists transportation, footnote 1 says the figures do not include transportation. The total is therefore not used as a confirmed yearly cost and Auburn has no entry in the budget comparison; the tuition line is tuition only, not a full budget. Dependants add USD 6,000 each; some programmes add professional fees. No scholarship is deducted.',
        'Одна официальная страница (оценки на октябрь 2026 для 2027–28, бакалавриат, визы F/J): обучение и сборы USD 39,658 за осень и весну (девять месяцев), проживание USD 15,000 за 12 месяцев, медицинская страховка USD 2,317, итого USD 56,975. Страница противоречит себе в составе итога: во введении транспорт перечислен, а сноска 1 говорит, что суммы транспорт не включают. Поэтому итог не используется как подтверждённая годовая стоимость, и Auburn не участвует в сравнении с бюджетом; строка обучения — только обучение, не полный бюджет. Каждый сопровождающий член семьи добавляет USD 6,000; некоторые программы добавляют профессиональные сборы. Стипендии не вычитаются.')
c['note'] = G.plain(txt)
c['conflict'] = {'text': G.plain(txt)}
c['verified'] = DAY
G.save(h, rs, t, US3)
register('auburn-university', 'costs: 2027–28 F/J estimate, transportation conflict', src,
         'This covers the cost of tuition and fees, housing and food, books and supplies, personal items, transportation, and health insurance … (1) … These figures do not include transportation expenses. (2) Cost figures include tuition expenses for fall and spring semesters (nine months) and living expenses for 12 months.', '2027–2028')

# ---------------------------------------------------------------- Berea (data/universities.us.js)
up = os.path.join(ROOT, 'data/universities.us.js')
us = io.open(up, encoding='utf-8').read()
old_note = 'note: \'Berea states it is "the only school in the United States that provides 100% funding to 100% of enrolled international students," and that admitted international students receive aid covering 100% of tuition, housing, food and fees. Students still pay a one-off $2,200 deposit and their own personal expenses. Health insurance and books are not explicitly listed as covered.\','
assert us.count(old_note) == 1
new_note_en = ('Berea’s international FAQ says all admitted international students receive financial aid and scholarships covering 100% of tuition, housing, food and fees each year; it describes no different terms for the first year and for later years. '
               'Students pay a one-off USD 2,200 deposit (usable for certain expenses over the four years; extra aid if it cannot be paid) and are encouraged to save from campus work for personal expenses. '
               'The cost page adds that from Fall 2027 Berea guarantees 100% of tuition, housing, food, fees and supplies without loans for all students. Health insurance and books are not listed separately.')
new_note_ru = ('FAQ Berea для иностранцев: все принятые иностранные студенты получают помощь и стипендии, покрывающие 100% обучения, жилья, питания и сборов каждый год; разных условий для первого и последующих лет не описано. '
               'Студенты вносят разовый депозит USD 2,200 (его можно тратить на некоторые расходы в течение четырёх лет; если внести его нельзя, есть дополнительная помощь) и откладывают из заработка на кампусе на личные расходы. '
               'Страница стоимости добавляет, что с осени 2027 Berea гарантирует всем студентам 100% обучения, жилья, питания, сборов и учебных материалов без кредитов. Медицинская страховка и книги отдельно не названы.')
L(new_note_en, new_note_ru)
us = us.replace(old_note, 'note: ' + json.dumps(new_note_en, ensure_ascii=False) + ',\n        source: "https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs",\n        verified: "' + DAY + '",')
old_tp = '          eligibility: "All admitted students",\n          deadline: null,\n          application: "Automatic with admission",\n          renewable: true,\n          note: "Berea states this scholarship, combined with grants and scholarships, guarantees that a student will never pay tuition from personal income.",'
assert us.count(old_tp) == 1
us = us.replace(old_tp, old_tp + '\n          internationalEligible: true,\n          firstYearEligible: true,\n          source: "https://www.berea.edu/student-financial-aid/cost-of-attendance",\n          verified: "' + DAY + '",')
io.open(up, 'w', encoding='utf-8').write(us)
register('berea-college', 'funding of international students', 'https://www.berea.edu/admissions/admission-information/apply/checklist-items/international-faqs',
         'All admitted international students receive financial aid and scholarships that cover 100% of tuition, housing, food, and fees.')
register('berea-college', 'Fall 2027 guarantee', 'https://www.berea.edu/student-financial-aid/cost-of-attendance',
         'Starting Fall 2027, Berea College will guarantee 100% of tuition, housing, food, fees, and supplies are covered without loans for all students.', 'Autumn 2027')

L('{0}, 23:59 Mountain Time', '{0}, 23:59 по горному времени США')  # BYU dates with their published time zone
flush()
old = json.load(io.open(REG, encoding='utf-8')) if os.path.exists(REG) else []
io.open(REG, 'w', encoding='utf-8').write(json.dumps(old + reg, ensure_ascii=False, indent=1) + '\n')
print('register entries:', len(reg))
