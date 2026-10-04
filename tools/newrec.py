# -*- coding: utf-8 -*-
"""Writer for new institution records (October 2026 expansion).

Records are plain dicts written as JSON object literals, which are valid
JavaScript. Nothing is defaulted to a claim: a field the official pages do
not state stays None and is listed in verification.unconfirmed.
"""
import io, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES = ['us', 'us2', 'uk', 'de', 'jp', 'kr']
MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

def nice(iso):
    y, m, d = iso.split('-')
    return '%d %s %s' % (int(d), MONTHS[int(m) - 1], y)

def rnd(name, kind, iso, binding, conditions, source, verified, status='confirmed', date=None, applies='First-year applicants',
        term='Autumn', year='2027', time=None, zone=None, note=None):
    """One dated entry of an application cycle."""
    d = {'name': name, 'kind': kind, 'entryTerm': term, 'entryYear': year}
    if iso: d['dateISO'] = iso
    d['date'] = date or (nice(iso) if iso else None)
    if time: d['time'] = time
    if zone: d['timezone'] = zone
    d.update({'binding': binding, 'appliesTo': applies, 'conditions': conditions, 'status': status,
              'source': source, 'verified': verified, 'note': note})
    return d

def test(policy, note, label=None):
    t = {'policy': policy, 'note': note}
    if label: t['label'] = label
    return t

def existing():
    ids, names = set(), set()
    for f in FILES:
        s = io.open(os.path.join(ROOT, 'data/universities.%s.js' % f), encoding='utf-8').read()
        ids |= set(re.findall(r'''(?m)^\s*"?id"?\s*:\s*['"]([a-z0-9-]+)['"]''', s))
        names |= set(re.findall(r'''(?m)^\s*"?name"?\s*:\s*['"]([^'"\n]+)['"]''', s))
    return ids, names

def append(country_file, records):
    path = os.path.join(ROOT, 'data/universities.%s.js' % country_file)
    ids, names = existing()
    out = []
    for r in records:
        assert r['id'] not in ids, 'duplicate id ' + r['id']
        assert r['name'] not in names, 'duplicate name ' + r['name']
        for k in ('id', 'name', 'country', 'city', 'type', 'institutionKind', 'degrees', 'description', 'links', 'admissions',
                  'english', 'academics', 'costs', 'scholarships', 'sources', 'verification', 'lastVerified'):
            assert k in r, (r['id'], 'missing', k)
        r.setdefault('photos', {'main': None, 'gallery': [], 'city': None})
        ids.add(r['id']); names.add(r['name'])
        out.append(json.dumps(r, ensure_ascii=False, indent=2))
    s = io.open(path, encoding='utf-8').read().rstrip()
    assert s.endswith(');'), s[-40:]
    cut = s[:-2].rstrip()
    if cut.endswith('}'):
        cut += ','
    io.open(path, 'w', encoding='utf-8').write(cut + '\n\n' + ',\n\n'.join(out) + '\n);\n')
    print('appended %d to %s' % (len(out), country_file))
