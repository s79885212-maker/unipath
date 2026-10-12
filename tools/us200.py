# -*- coding: utf-8 -*-
"""Builder for the October 2026 United States expansion (110 -> 200).

A record is written from a short specification. Every dated or priced fact
carries the official page it was read on and the day it was read; a field
the pages do not state stays None and shows on the site as "not checked".
Nothing is copied from the screenshots that named the candidates.
"""
import hashlib, io, json, os, re
import newrec

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
newrec.FILES = ['us', 'us2', 'us3', 'uk', 'de', 'jp', 'kr']
rnd = newrec.rnd

PALETTE = [('#1f3a5f', '#0f1f33'), ('#5a1f2e', '#2e0f17'), ('#1f4d3a', '#0f2a1f'), ('#4b2e83', '#2c1a4d'),
           ('#7a3b12', '#3d1d09'), ('#0b4f6c', '#062b3b'), ('#3d3d5c', '#1f1f2e'), ('#6b1d4f', '#360f28')]

def brand(uid, name):
    c1, c2 = PALETTE[int(hashlib.md5(uid.encode()).hexdigest(), 16) % len(PALETTE)]
    words = [w for w in re.split(r"[^A-Za-z&]+", name) if w and w.lower() not in ('of', 'the', 'and', 'at', 'college', 'university')]
    initials = ''.join(w[0] for w in words)[:3].upper() or name[:2].upper()
    return {'c1': c1, 'c2': c2, 'initials': initials}

def test(policy, note, cycle=None, source=None, verified=None, **extra):
    t = {'policy': policy, 'note': note}
    if cycle: t['cycle'] = cycle
    if source: t['source'] = source
    if verified: t['verified'] = verified
    t.update(extra)
    return t

def eng(minimum=None, recommended=None, note=None, scales=None):
    d = {'min': minimum, 'recommended': recommended, 'note': note}
    if scales: d['scales'] = scales
    return d

def toefl(pre=None, post=None, note=None, kind='min'):
    """TOEFL on the 0-120 scale (tests before 21 January 2026) and on the 1-6 scale used since."""
    other = 'recommended' if kind == 'min' else 'min'
    d = {'min': None, 'recommended': None, 'note': note, 'scales': []}
    d[kind] = pre
    if pre is not None: d['scales'].append({'period': 'pre2026', kind: pre, other: None})
    if post is not None: d['scales'].append({'period': 'post2026', kind: post, other: None})
    if not d['scales']: del d['scales']
    return d

def R(uid, name, short, city, state, kind, typ, desc, fields, links, **k):
    V = k.get('verified')
    assert V, uid
    r = {
        'id': uid, 'name': name, 'shortName': short, 'country': 'us', 'city': city, 'region': state,
        'founded': k.get('founded'), 'type': typ, 'institutionKind': kind,
        'degrees': k.get('degrees', ['bachelor']), 'brand': brand(uid, name), 'description': desc,
        'englishTaught': True, 'languageOfInstruction': 'English',
        'programs': fields, 'englishTaughtPrograms': list(fields), 'programNote': k.get('programNote'),
        'links': {'website': links['website'], 'admissions': links.get('admissions'),
                  'internationalAdmissions': links.get('international'), 'applicationPortal': links.get('portal'),
                  'scholarships': links.get('scholarships'), 'financialAid': links.get('aid'),
                  'programs': links.get('programs'), 'cost': links.get('cost')},
        'admissions': {
            'platforms': k.get('platforms', []), 'deadlines': k.get('rounds', []),
            'applicationFee': k.get('fee', {'amount': None, 'currency': 'USD', 'waiverAvailableToInternational': None, 'waiver': None}),
            'documents': k.get('documents', []), 'recommendations': k.get('recommendations'),
            'essay': k.get('essay'), 'interview': k.get('interview'), 'notes': k.get('admNotes', []),
        },
        'english': dict({'ielts': None, 'toefl': None, 'duolingo': None, 'waiver': None, 'note': None}, **k.get('english', {})),
        'academics': {'gpa': None,
                      'sat': k.get('sat', {'policy': None, 'note': 'Not confirmed on the pages read.'}),
                      'act': k.get('act', k.get('sat', {'policy': None, 'note': 'Not confirmed on the pages read.'})),
                      'otherTests': k.get('otherTests'), 'internationalQualifications': k.get('intlQuals')},
        'costs': k.get('costs', {'breakdown': None, 'academicYear': None, 'currency': 'USD', 'headline': None, 'items': [],
                                 'billedSubtotal': None, 'totalText': None, 'note': None}),
        'scholarships': {
            'fullRide': k.get('fullRide', {'available': None, 'internationalEligible': None, 'basis': None,
                                           'covers': {'tuition': None, 'housing': None, 'meals': None, 'insurance': None, 'books': None},
                                           'renewable': None, 'competitiveness': None, 'howToApply': None, 'note': None}),
            'merit': k.get('merit', []),
            'needBased': dict({'availableToInternational': None, 'meetsFullNeed': None, 'needBlindInternational': None,
                               'forms': [], 'deadlines': None, 'note': None}, **k.get('need', {})),
        },
        'photos': {'main': None, 'gallery': [], 'city': None},
        'sources': [{'label': a, 'url': b} for a, b in k.get('sources', [])],
        'verification': {'level': 'partial', 'checked': k.get('checked', []), 'unconfirmed': k.get('unconfirmed', [])},
        'lastVerified': V,
    }
    for extra in ('routes', 'aliases', 'programsBasis'):
        if k.get(extra) is not None: r[extra] = k[extra]
    return r

def fee(amount, note, source, verified, waiver=None, waiver_intl=None):
    return {'amount': amount, 'currency': 'USD', 'waiverAvailableToInternational': waiver_intl, 'waiver': waiver,
            'note': note, 'source': source, 'verified': verified}

def costs(year, source, verified, category, items, headline, total_text, includes, tuition=None, billed=None, budget=None,
          budget_max=None, budget_text=None, comprehensive=False, extras=None, note=None, status=None, tuition_label=None):
    b = {'includes': includes}
    if tuition is not None: b['tuition'] = tuition
    if tuition_label: b['tuitionLabel'] = tuition_label
    if billed is not None: b['billed'] = billed
    if comprehensive: b['comprehensive'] = True
    if budget is not None: b['budget'] = budget
    if budget_max is not None: b['budgetMax'] = budget_max
    if budget_text: b['budgetText'] = budget_text
    c = {'breakdown': b, 'academicYear': year, 'currency': 'USD', 'studentCategory': category, 'source': source,
         'verified': verified, 'headline': headline,
         'items': [dict({'label': i[0], 'group': i[2]}, **({'amount': i[1]} if isinstance(i[1], (int, float)) else i[1])) for i in items],
         'billedSubtotal': billed, 'totalText': total_text, 'note': note}
    if extras: c['extras'] = extras
    if status: c['status'] = status
    return c

def write(records, annual, target='us3'):
    """Append the records to data/universities.<target>.js and their yearly cost to data/match.js."""
    path = os.path.join(ROOT, 'data/universities.%s.js' % target)
    if not os.path.exists(path):
        io.open(path, 'w', encoding='utf-8').write(
            '/* ============================================================\n'
            '   United States — records added in October 2026 (110 -> 200).\n'
            '   Written by tools/us200.py from the official pages listed in\n'
            '   each record; a field those pages do not state stays null.\n'
            '   ============================================================ */\n'
            'window.UNIPATH.universities.push(\n);\n')
    newrec.append(target, records)
    p = os.path.join(ROOT, 'data/match.js')
    s = io.open(p, encoding='utf-8').read()
    lines = []
    for uid, c in annual.items():
        assert ("'%s':" % uid) not in s, uid
        body = ', '.join('%s: %s' % (kk, json.dumps(vv, ensure_ascii=False).replace('"', "'") if isinstance(vv, str) else vv) for kk, vv in c.items())
        lines.append("    '%s': { %s }," % (uid, body))
    if lines:
        m = re.search(r'\n  annualCost: \{\n', s)
        s = s[:m.end()] + '\n    /* United States expansion, October 2026 */\n' + '\n'.join(lines) + '\n' + s[m.end():]
        io.open(p, 'w', encoding='utf-8').write(s)
    print('match.js: +%d yearly costs' % len(lines))
