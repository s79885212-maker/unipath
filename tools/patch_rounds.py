# -*- coding: utf-8 -*-
"""Replace the deadlines array of a university record with verified rounds."""
import io, re

FILES = ['data/universities.us.js', 'data/universities.us2.js', 'data/universities.jp.js',
         'data/universities.kr.js', 'data/universities.uk.js', 'data/universities.de.js']

def replace_rounds(rounds_by_id):
    done = []
    for f in FILES:
        s = io.open(f, encoding='utf-8').read()
        changed = False
        for uid, text in rounds_by_id.items():
            m = re.search(r"\n  id: '%s',\n" % re.escape(uid), s)
            if not m:
                continue
            i = s.find('deadlines: [', m.end())
            if i == -1:
                print('no deadlines for', uid); continue
            j = i + len('deadlines: [')
            depth = 1
            while depth:
                c = s[j]
                if c == '[': depth += 1
                elif c == ']': depth -= 1
                j += 1
            s = s[:i] + 'deadlines: [' + text + '\n    ]' + s[j:]
            changed = True
            done.append(uid)
        if changed:
            io.open(f, 'w', encoding='utf-8').write(s)
    missing = set(rounds_by_id) - set(done)
    print('patched %d rounds%s' % (len(done), ('; missing: ' + ', '.join(sorted(missing))) if missing else ''))

def rd(name, date, iso, **kw):
    parts = ["name: %r" % name, "kind: %r" % kw.get('kind', 'other'),
             "entryTerm: 'Autumn'", "entryYear: '2027'"]
    if iso: parts.append("dateISO: %r" % iso)
    parts.append("date: %r" % date)
    if kw.get('time'): parts.append("time: %r" % kw['time'])
    if kw.get('tz'): parts.append("timezone: %r" % kw['tz'])
    if 'binding' in kw: parts.append("binding: %s" % ('true' if kw['binding'] else 'false'))
    if kw.get('appliesTo'): parts.append("appliesTo: %r" % kw['appliesTo'])
    if kw.get('conditions'): parts.append("conditions: %r" % kw['conditions'])
    parts.append("status: %r" % kw.get('status', 'confirmed'))
    parts.append("source: %r" % kw['source'])
    parts.append("verified: '2026-09-23'")
    parts.append("note: %s" % (repr(kw['note']) if kw.get('note') else 'null'))
    return '\n      { ' + ', '.join(parts) + ' },'
