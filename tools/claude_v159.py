# -*- coding: utf-8 -*-
"""Shared helpers for the October 2026 data-quality pass (branch claude/data-quality-v159).

Records are edited through ca50_gaps (same JSON layout). Every changed fact keeps the
official page it was read on and the reading day; cycle evidence quotes the page.
Russian for new strings is not written into data/i18n/ru.js (Codex integrates the
dictionary): flush_research() collects the pairs in research/claude-v159-ru.json.
"""
import io, json, os, re
import ca50_gaps as G
from us200_std import L, TR

ROOT = G.ROOT
DAY = '2026-10-29'
RU_FILE = os.path.join(ROOT, 'research/claude-v159-ru.json')
REG_FILE = os.path.join(ROOT, 'research/claude-v159-sources.json')
OLD_NOTE = re.compile(r'^The page prints this date without a year')
_reg = []


def rec(recs, uid):
    return next(r for r in recs if r['id'] == uid)


def event(r, name):
    hits = [d for d in r['admissions']['deadlines'] if d['name'] == name]
    assert len(hits) == 1, (r['id'], name, len(hits))
    return hits[0]


def register(uid, field, url, quote, cycle=None, scope=None):
    """Internal source register: what was read, where, with a short verbatim excerpt."""
    _reg.append({'id': uid, 'field': field, 'source': url, 'quote': quote,
                 'cycle': cycle, 'scope': scope, 'read': DAY})


def evidence(r, name, basis, quote, source=None, time=None, tz=None, note=None,
             term='Autumn', year='2027'):
    """Attach structured cycle evidence to a dated event that the page ties to a cycle."""
    assert basis in ('explicit-date', 'page-context')
    d = event(r, name)
    src = source or d['source']
    d['entryTerm'], d['entryYear'] = term, year
    d['status'] = 'confirmed'
    d['verified'] = DAY
    d['cycleEvidence'] = {'basis': basis, 'entryTerm': term, 'entryYear': year,
                          'source': src, 'verified': DAY, 'quote': quote}
    if time: d['time'] = time
    if tz: d['timezone'] = tz
    if note is not None:
        d['note'] = G.plain(note)
    elif d.get('note') and OLD_NOTE.match(d['note']):
        d['note'] = None
    register(r['id'], 'deadline: ' + name, src, quote, '%s %s' % (term, year))
    return d


def annual(r, name, shown, quote, source=None, note=None):
    """The page gives the date without a year and names no intake: an annual rule."""
    d = event(r, name)
    src = source or d['source']
    d.update({'entryTerm': None, 'entryYear': None, 'dateISO': None, 'status': 'annual-rule',
              'date': shown + ' — intake year not confirmed', 'verified': DAY})
    d['cycleEvidence'] = {'basis': 'annual-rule', 'source': src, 'verified': DAY, 'quote': quote}
    d['note'] = G.plain(note or L(
        'The official page prints this date without a year and names no intake. The reading date does not establish 2027.',
        'Официальная страница печатает эту дату без года и не называет набор. Дата просмотра не устанавливает 2027 год.'))
    register(r['id'], 'deadline (annual rule): ' + name, src, quote, None)
    return d


def flush_research():
    """New English strings with proposed Russian, for Codex to add to data/i18n/ru.js."""
    p = os.path.join(ROOT, 'data/i18n/ru.js')
    s = io.open(p, encoding='utf-8').read()
    have = set(json.loads('"%s"' % m) for m in re.findall(r'(?m)^\s*"((?:[^"\\]|\\.)*)"\s*:', s))
    norm = lambda x: re.sub(r'\s+', ' ', x).strip()
    have_n = set(norm(h) for h in have)
    old = json.load(io.open(RU_FILE, encoding='utf-8')) if os.path.exists(RU_FILE) else {}
    for k, v in TR.items():
        if norm(k) not in have_n and k != v and re.search(r'[A-Za-z]{2}', k):
            old[k] = v
    io.open(RU_FILE, 'w', encoding='utf-8').write(json.dumps(old, ensure_ascii=False, indent=1, sort_keys=True) + '\n')
    reg = json.load(io.open(REG_FILE, encoding='utf-8')) if os.path.exists(REG_FILE) else []
    reg.extend(_reg); del _reg[:]
    io.open(REG_FILE, 'w', encoding='utf-8').write(json.dumps(reg, ensure_ascii=False, indent=1) + '\n')
    print('research: %d RU pairs pending, %d register entries' % (len(old), len(reg)))
