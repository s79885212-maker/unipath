# -*- coding: utf-8 -*-
"""Fill gaps in the Canadian records after the 50 were in (October 2026).

Each edit names the official page it was read on and the day it was read.
The records in data/universities.ca.js are JSON; they are loaded, changed and
written back in the same layout, so the diff shows only the edited fields.
Russian strings are registered through L() and flushed to ru.js.
"""
import io, json, os
import us200
from us200_std import L, flush

ROOT = us200.ROOT
PATH = os.path.join(ROOT, 'data/universities.ca.js')
HEAD = 'window.UNIPATH.universities.push(\n'
eng, toefl = us200.eng, us200.toefl


def load(path=PATH):
    """Any data/universities.*.js written as JSON (Canada, the October 2026 US records)."""
    s = io.open(path, encoding='utf-8').read()
    a = s.index(HEAD) + len(HEAD); b = s.rindex('\n);')
    recs = json.loads('[' + s[a:b] + ']')
    assert dump(recs) == s[a:b].strip(), 'layout would change'
    return s[:a], recs, s[b:]


def dump(recs):
    return ',\n\n'.join(json.dumps(r, ensure_ascii=False, indent=2) for r in recs)


def save(head, recs, tail, path=PATH):
    io.open(path, 'w', encoding='utf-8').write(head + dump(recs) + tail)


def checked(r, item):
    """Move a verification item from 'unconfirmed' to 'checked'."""
    v = r['verification']
    if item in v['unconfirmed']: v['unconfirmed'].remove(item)
    if item not in v['checked']: v['checked'].append(item)


def source(r, label, url):
    if not any(x['url'] == url for x in r['sources']):
        r['sources'].append({'label': label, 'url': url})


def english(r, block, label, url, day, item):
    block['source'] = url
    block['verified'] = day
    r['english'] = block
    source(r, label, url)
    checked(r, item)


def fee(r, amount, note, url, day, item='application fee'):
    f = r['admissions']['applicationFee']
    f.update({'amount': amount, 'note': note, 'source': url, 'verified': day})
    checked(r, item)


def plain(x):
    """Records hold plain JSON; L() strings become str after registering their Russian."""
    if isinstance(x, dict): return {k: plain(v) for k, v in x.items()}
    if isinstance(x, list): return [plain(v) for v in x]
    return str(x) if isinstance(x, str) else x
