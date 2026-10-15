# -*- coding: utf-8 -*-
"""Builder for the Canada section (October 2026, 50 universities).

Same rule as the United States expansion: every dated or priced fact carries
the official page it was read on and the day it was read; a field the pages
do not state stays None and shows on the site as "not checked". Amounts are
Canadian dollars and keep the period the page states (a year of two terms,
one term, a credit). A planned or estimated figure is labelled as such.
"""
import io, json, os, re
import newrec, us200
from us200_std import L

ROOT = us200.ROOT
newrec.FILES = ['us', 'us2', 'us3', 'uk', 'de', 'jp', 'kr', 'ca']
rnd = newrec.rnd
test = us200.test
eng = us200.eng
toefl = us200.toefl

PROVINCES = {
    'ON': L('Ontario', 'Онтарио'), 'BC': L('British Columbia', 'Британская Колумбия'), 'QC': L('Quebec', 'Квебек'),
    'AB': L('Alberta', 'Альберта'), 'NS': L('Nova Scotia', 'Новая Шотландия'), 'SK': L('Saskatchewan', 'Саскачеван'),
    'MB': L('Manitoba', 'Манитоба'), 'NL': L('Newfoundland and Labrador', 'Ньюфаундленд и Лабрадор'),
    'NB': L('New Brunswick', 'Нью-Брансуик'), 'PE': L('Prince Edward Island', 'Остров Принца Эдуарда'),
}

def money(n):
    """C$ with cents only when the source prints cents."""
    if isinstance(n, float) and n != int(n): return 'C${:,.2f}'.format(n)
    return 'C${:,}'.format(int(n))

def R(uid, name, short, city, prov, typ, desc, fields, links, language='English', **k):
    """A Canadian record: the United States builder with the country, currency and language changed."""
    r = us200.R(uid, name, short, city, None, k.pop('kind', 'public'), typ, desc, fields, links, **k)
    r['country'] = 'ca'
    r['region'] = PROVINCES[prov]
    r['province'] = prov
    r['languageOfInstruction'] = language
    r['englishTaught'] = k.get('englishTaught', True)
    if 'englishTaughtPrograms' in k: r['englishTaughtPrograms'] = k['englishTaughtPrograms']
    fee = r['admissions']['applicationFee']
    if fee.get('currency') == 'USD': fee['currency'] = 'CAD'
    if r['costs'].get('currency') == 'USD': r['costs']['currency'] = 'CAD'
    for extra in ('campuses', 'formerNames', 'programEvidence', 'programsStatus', 'frenchRequirement'):
        if k.get(extra) is not None: r[extra] = k[extra]
    return r

def fee(amount, note, source, verified, waiver=None, waiver_intl=None):
    f = us200.fee(amount, note, source, verified, waiver, waiver_intl)
    f['currency'] = 'CAD'
    return f

def costs(*a, **k):
    c = us200.costs(*a, **k)
    c['currency'] = 'CAD'
    return c

def ev(pairs, url, checked):
    """Named programmes behind the field tags: {tag: name | (name, url)}."""
    out = {}
    for t, v in pairs.items():
        n, u = v if isinstance(v, tuple) else (v, url)
        out[t] = {'program': n, 'level': 'bachelor', 'language': 'English', 'url': u, 'checked': checked}
    return out

def write(records, annual):
    """Append the records to data/universities.ca.js and their yearly figure to data/match.js."""
    path = os.path.join(ROOT, 'data/universities.ca.js')
    if not os.path.exists(path):
        io.open(path, 'w', encoding='utf-8').write(
            '/* ============================================================\n'
            '   Canada — 50 universities (October 2026).\n'
            '   Written by tools/ca50.py and the batch files tools/ca50_b*.py\n'
            '   from the official pages listed in each record; a field those\n'
            '   pages do not state stays null. Amounts are Canadian dollars.\n'
            '   ============================================================ */\n'
            'window.UNIPATH.universities.push(\n);\n')
    newrec.append('ca', records)
    p = os.path.join(ROOT, 'data/match.js')
    s = io.open(p, encoding='utf-8').read()
    lines = []
    for uid, c in annual.items():
        assert ("'%s':" % uid) not in s, uid
        body = ', '.join('%s: %s' % (kk, json.dumps(vv, ensure_ascii=False).replace('"', "'") if isinstance(vv, str) else vv) for kk, vv in c.items())
        lines.append("    '%s': { %s }," % (uid, body))
    if lines:
        m = re.search(r'\n  annualCost: \{\n', s)
        s = s[:m.end()] + '\n    /* Canada, October 2026 */\n' + '\n'.join(lines) + '\n' + s[m.end():]
        io.open(p, 'w', encoding='utf-8').write(s)
    print('match.js: +%d yearly figures' % len(lines))
