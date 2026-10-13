# -*- coding: utf-8 -*-
"""Read and rewrite data/universities.us3.js as a list of records.

The file holds JSON object literals inside one push(...) call, so it can be
loaded, corrected field by field and written back in the same layout. A patch
script imports load()/save(), changes what an official page showed to be wrong
or missing, and names that page next to the change.
"""
import io, json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'data/universities.us3.js')
OPEN = 'window.UNIPATH.universities.push(\n'

def load():
    s = io.open(PATH, encoding='utf-8').read()
    i = s.index(OPEN) + len(OPEN)
    j = s.rstrip().rindex(');')
    return s[:i], json.loads('[' + s[i:j] + ']')

def save(head, records):
    body = ',\n\n'.join(json.dumps(r, ensure_ascii=False, indent=2) for r in records)
    io.open(PATH, 'w', encoding='utf-8').write(head + body + '\n);\n')

def by_id(records):
    return dict((r['id'], r) for r in records)

if __name__ == '__main__':
    head, recs = load()
    before = io.open(PATH, encoding='utf-8').read()
    save(head, recs)
    print(len(recs), 'records; round trip identical:', io.open(PATH, encoding='utf-8').read() == before)
