# -*- coding: utf-8 -*-
"""Add a structured cost breakdown to every university record.

Each entry: tuition (tuition only), billed (charges billed by the university),
budget (full cost of attendance), plus what the figure covers. Values come from
the figures already stored in the data files, classified by hand — nothing new
is invented here.
"""
import io, json, re, os

Y = 'year'; S = 'semester'
B = {
 # id: dict(t=tuition, tt=tuitionText, p=period, billed=, comp=True, budget=, bt=budgetText, inc=includes)
 'harvard-university': dict(t=62226, billed=91634, budget=95134, bt='$95,134–$100,134',
   inc='tuition, fees, housing and food; the full budget adds books, personal expenses, health insurance and travel'),
 'mit': dict(t=66720, budget=92760, inc='tuition, the student life fee, housing, food, books and personal expenses'),
 'yale-university': dict(t=72500, budget=97985, inc='tuition, the activity fee, housing, food, books and personal expenses; travel is estimated individually'),
 'arizona-state-university': dict(t=39062, budget=69906,
   inc='base tuition, surcharges and college fees, housing and meals, books, travel, personal expenses, health insurance and the international student fee'),
 'berea-college': dict(t=0, inc='no student pays tuition; aid also covers housing, food and fees'),
 'uc-berkeley': dict(t=57484, budget=101598,
   inc='tuition and fees including nonresident supplemental tuition, housing, meals, health insurance, books, personal expenses and transport'),
 'princeton-university': dict(t=68140, billed=90574, inc='tuition, fees, housing and food (average)'),
 'brown-university': dict(t=74568, billed=97016, inc='tuition, room, board and university fees'),
 'dartmouth-college': dict(t=71697, billed=95382, budget=98427,
   inc='tuition, fees, housing and food; the full budget adds books and personal expenses (health insurance and a computer allowance are extra)'),
 'columbia-university': dict(t=72800, inc='tuition for two terms; fees, housing, food and personal expenses are charged on top'),
 'university-of-pennsylvania': dict(t=65670, billed=94582, inc='tuition, fees, housing and the meal plan'),
 'cornell-university': dict(t=73946, billed=95294, inc='tuition (endowed colleges), housing and dining'),
 'stanford-university': dict(t=67731, billed=90675, inc='tuition, room and board'),
 'amherst-college': dict(t=75330, billed=96360, comp=True, inc='a comprehensive fee covering tuition, housing, meals and the student activities fee'),
 'bowdoin-college': dict(t=74968, billed=95400, comp=True, inc='a comprehensive fee covering tuition, fees, housing and food'),
 'university-of-notre-dame': dict(t=69794, billed=88786, comp=True, inc='a basic fee covering tuition, fees, housing and food on campus'),
 'williams-college': dict(inc=None),
 'duke-university': dict(t=70265, billed=94157, budget=98549,
   inc='tuition, fees, housing and food; the full budget adds books, personal expenses and transport'),
 'vanderbilt-university': dict(t=69822, billed=96896, budget=99994, bt='About $99,994',
   inc='tuition, housing, food, the student support fee, books and personal expenses'),
 'rice-university': dict(t=71140, billed=92654, inc='tuition, mandatory fees, room and board'),
 'northwestern-university': dict(t=71802, billed=96003, inc='tuition, fees, room and board'),
 'university-of-chicago': dict(t=71325, billed=94101, budget=98301, bt='$98,301–$98,676',
   inc='tuition, the student services fee, housing and food; health insurance is added unless waived'),
 'johns-hopkins-university': dict(budget=95000, bt='About $95,000',
   inc='charges billed by Hopkins plus estimated books, supplies, travel and personal expenses'),
 'washington-university-in-st-louis': dict(billed=75645, budget=105183,
   inc='tuition, fees and health insurance; the larger figure is the total WashU certifies for visa documents, including living expenses'),
 'emory-university': dict(t=70300, billed=93854, budget=97948,
   inc='tuition, fees, housing and food; the full budget adds travel, personal expenses and books'),
 'tufts-university': dict(t=74862, billed=97152, inc='tuition, housing, food and fees; books, personal expenses and travel are extra'),
 'university-of-richmond': dict(t=70725, billed=89540, budget=92320,
   inc='tuition, housing and food; the full budget adds books and personal expenses'),
 'swarthmore-college': dict(t=72722, billed=95770, inc='tuition, housing, food and the student activities fee'),
 'pomona-college': dict(t=71660, billed=95670, comp=True, inc='a comprehensive charge covering tuition, fees, housing and food'),
 'wellesley-college': dict(t=72570, billed=96136, comp=True, inc='a comprehensive fee covering tuition, housing, meals, the activity fee, books and personal expenses'),
 'middlebury-college': dict(t=72924, billed=94386, inc='tuition, housing, the meal plan and the student activity fee'),
 'colby-college': dict(t=75790, billed=95270, comp=True, inc='a comprehensive fee covering tuition, fees, housing and meals'),
 'davidson-college': dict(t=73090, billed=92770, budget=95995,
   inc='tuition, fees, housing and food; the full budget adds books, transport and personal expenses for international first-years'),
 'grinnell-college': dict(t=73582, billed=91938, budget=93338, bt='From $93,338',
   inc='tuition (books included), the activity fee, housing and food; the full budget adds personal expenses and travel'),
 'vassar-college': dict(t=76140, billed=96960, inc='tuition, housing, food and mandatory fees; health insurance and personal costs are extra'),
 'hamilton-college': dict(t=75210, billed=95250, comp=True, inc='a comprehensive fee covering tuition, housing, food and the activity fee'),
 'haverford-college': dict(t=74930, billed=96347, budget=100026,
   inc='tuition, fees, housing and food; the full budget adds books, personal expenses and extra meals'),
 'caltech': dict(t=68574, billed=93225, budget=98622,
   inc='tuition, fees, housing and food; the full budget adds books and personal expenses (health insurance is extra)'),
 'carnegie-mellon-university': dict(t=69702, billed=89352, inc='tuition, a standard double room and the first-year meal plan'),
 'georgetown-university': dict(t=74520, inc='tuition and mandatory fees; housing and food are published separately'),
 'university-of-southern-california': dict(t=75384, inc='tuition for two semesters; fees, insurance, housing and living costs are extra'),
 'boston-university': dict(t=73024, billed=95334, budget=98419,
   inc='tuition, housing, food and fees; the full budget adds books, personal expenses and local transport'),
 'boston-college': dict(t=75070, budget=95258, inc='tuition plus housing, food, fees and other costs in the published cost of attendance'),
 'brandeis-university': dict(),
 'case-western-reserve-university': dict(t=71410, billed=93435, inc='tuition, housing, the unlimited meal plan and required fees'),
 'university-of-rochester': dict(t=71750, billed=93076, inc='tuition, housing and food'),
 'tulane-university': dict(t=70622, billed=95674, inc='tuition, fees, housing and dining; health insurance is charged on top'),
 'smith-college': dict(),
 'mount-holyoke-college': dict(t=71178, billed=92774, comp=True, budget=93046,
   inc='a comprehensive fee covering tuition, housing and food'),
 'bryn-mawr-college': dict(t=71290, billed=94291, budget=97547,
   inc='tuition, housing, food and college fees; the full budget adds books and miscellaneous expenses'),
 'barnard-college': dict(t=73120, billed=98850, inc='tuition, fees, housing and meals; books, travel and personal expenses are extra'),
 'bates-college': dict(billed=94560, comp=True, inc='a single comprehensive fee covering tuition, room, board and fees'),
 'wesleyan-university': dict(t=75916, billed=98330, inc='tuition, the residential comprehensive fee, the activity and Green Fund fees and the matriculation fee'),
 'washington-and-lee-university': dict(t=73575, billed=95435, budget=99880,
   inc='tuition, fees, housing and food; the full budget adds books and personal expenses (health insurance and travel are extra)'),
 'colgate-university': dict(),
 'carleton-college': dict(budget=99580, inc='tuition, housing, food, fees, books, personal expenses, travel, health insurance and expenses over breaks'),
 'macalester-college': dict(),
 'oberlin-college': dict(budget=90000, bt='About $90,000', inc='the yearly support Oberlin expects a student not applying for aid to have'),
 'kenyon-college': dict(t=71870, billed=93090, inc='tuition, housing, meals and the activities fee; books, personal costs and travel are extra'),
 'denison-university': dict(budget=92900, inc='the published cost of attendance, including a $4,500 allowance for personal expenses and books'),
 'franklin-and-marshall-college': dict(t=74770, billed=94436, budget=97041,
   inc='tuition, fees, housing and the meal plan; the full budget adds books, personal expenses and transport'),
 'lafayette-college': dict(),
 'lehigh-university': dict(budget=93400, inc='the projected cost of attendance for the year'),
 'university-of-miami': dict(),
 'new-york-university': dict(),
 'university-of-michigan': dict(),
 'university-of-alabama': dict(),
 # Japan
 'university-of-tokyo': dict(t=642960, inc='tuition per year; a one-time ¥282,000 enrolment fee is charged on entry'),
 'kyoto-university': dict(),
 'waseda-university': dict(),
 'keio-university': dict(),
 'sophia-university': dict(),
 'international-christian-university': dict(t=1167000, billed=1521000,
   inc='tuition and the facilities fee for AY2026; a one-time ¥300,000 matriculation fee is charged on entry'),
 'ritsumeikan-apu': dict(t=1455000, inc='tuition for year one at a 0% scholarship; years 2–4 cost ¥1,655,000 a year'),
 'tohoku-university': dict(),
 # Korea
 'seoul-national-university': dict(),
 'kaist': dict(),
 'yonsei-university': dict(t=8202000, billed=8258000, p=S,
   inc='tuition and miscellaneous fees per semester on the International Students Track'),
 'korea-university': dict(),
 'sungkyunkwan-university': dict(),
 'hanyang-university': dict(),
 'ewha-womans-university': dict(),
 'kyung-hee-university': dict(),
 # UK
 'university-of-oxford': dict(tt='£39,620–£66,580', inc='the Overseas tuition rate, which depends on the course; living costs are extra'),
 'university-of-cambridge': dict(t=30798, tt='£30,798–£70,554',
   inc='the Overseas tuition rate by subject group; a College fee and living costs are charged on top'),
 'imperial-college-london': dict(),
 'university-college-london': dict(t=48600, tt='£48,600 (Computer Science BSc)', inc='the Overseas tuition rate for one example programme; other programmes differ'),
 'kings-college-london': dict(t=42900, tt='£42,900 (Computer Science BSc)', inc='the International tuition rate for one example programme, plus a £2,000 deposit at acceptance'),
 'university-of-edinburgh': dict(),
 'university-of-manchester': dict(t=37800, tt='£37,800 (BSc Computer Science, 2026/27)', inc='the international tuition rate for one example programme'),
 'university-of-warwick': dict(t=21950, tt='£21,950–£37,310', inc='the international tuition rate by subject band'),
 # Germany
 'technical-university-of-munich': dict(t=2000, tt='€2,000–€3,000 per semester', p=S, inc='tuition per semester for new students from outside the EU; the semester fee is extra'),
 'fau-erlangen-nurnberg': dict(tt='€1,000–€3,000 per semester from 2027', p=S, inc='tuition per semester for new non-EU students from summer semester 2027'),
 'university-of-freiburg': dict(t=1500, p=S, inc='tuition per semester for students from outside the EU, plus the semester contribution'),
 'university-of-cologne': dict(t=0, inc='no tuition at state universities in North Rhine-Westphalia; the semester contribution remains'),
 'leuphana-university-luneburg': dict(t=0, inc='no tuition; the semester fee is about €453 per semester'),
 'rhine-waal-university': dict(t=0, inc='no tuition; the semester fee remains'),
 'constructor-university': dict(t=20000, budget=29654, inc='tuition, room, board, fees, the semester ticket, health insurance and the residence permit'),
 'frankfurt-school': dict(t=16400, budget=39120, inc='tuition, fees, books, transport, room and board, personal expenses, health insurance, travel and a computer in year one'),
}

FILES = ['data/universities.us.js', 'data/universities.us2.js', 'data/universities.jp.js',
         'data/universities.kr.js', 'data/universities.uk.js', 'data/universities.de.js']

def js(v):
    return json.dumps(v, ensure_ascii=False)

def block(d):
    parts = []
    if d.get('t') is not None: parts.append('tuition: %d' % d['t'])
    if d.get('tt'): parts.append('tuitionText: %s' % js(d['tt']))
    if d.get('p'): parts.append('period: %s' % js(d['p']))
    if d.get('billed') is not None: parts.append('billed: %d' % d['billed'])
    if d.get('comp'): parts.append('comprehensive: true')
    if d.get('budget') is not None: parts.append('budget: %d' % d['budget'])
    if d.get('bt'): parts.append('budgetText: %s' % js(d['bt']))
    if d.get('inc'): parts.append('includes: %s' % js(d['inc']))
    if not parts: parts.append('published: false')
    return '\n      breakdown: { ' + ', '.join(parts) + ' },'

done = set()
for f in FILES:
    s = io.open(f, encoding='utf-8').read()
    for uid, d in B.items():
        m = re.search(r"\n  id: '%s',\n" % re.escape(uid), s)
        if not m:
            continue
        c = s.find('\n  costs: {', m.end())
        if c == -1:
            print('no costs block for', uid); continue
        ins = c + len('\n  costs: {')
        if 'breakdown:' in s[ins:ins + 400]:
            print('already patched', uid); continue
        s = s[:ins] + block(d).replace('\n      ', '\n    ') + s[ins:]
        done.add(uid)
    io.open(f, 'w', encoding='utf-8').write(s)

missing = set(B) - done
print('patched %d records; missing: %s' % (len(done), ', '.join(sorted(missing)) or 'none'))
