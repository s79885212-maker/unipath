# -*- coding: utf-8 -*-
"""Edit single fields of the JSON-layout US record files (data/universities.us3.js …
us7.js) without touching any other byte of the file.

A record is decoded on its own to read it. A change replaces only the text of one
value (for example admissions.deadlines), re-indented to where it sits, so records
written compactly by older builders keep their layout.
"""
import io, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEAD = 'window.UNIPATH.universities.push('
FILES = ['data/universities.us%d.js' % n for n in (3, 4, 5, 6, 7)]
DEC = json.JSONDecoder()


class RecordFile(object):
    def __init__(self, rel):
        self.rel = rel
        self.path = os.path.join(ROOT, rel)
        self.text = io.open(self.path, encoding='utf-8').read()
        self.dirty = False
        self._index()

    def _index(self):
        i = self.text.index(HEAD) + len(HEAD)
        end = self.text.rindex('\n);')
        self.spans = {}
        while True:
            while self.text[i] in ' \n\r\t,':
                i += 1
            if i >= end:
                break
            rec, j = DEC.raw_decode(self.text, i)
            self.spans[rec['id']] = (i, j, rec)
            i = j

    def record(self, uid):
        return self.spans[uid][2]

    def set(self, uid, parent, key, value):
        """Replace record[uid][parent][key] with value (the key must exist)."""
        a, b, rec = self.spans[uid]
        body = self.text[a:b]
        m = re.search(r'"%s":\s*\{' % re.escape(parent), body)
        assert m, (uid, parent)
        k = re.compile(r'"%s":\s*' % re.escape(key)).search(body, m.end())
        assert k, (uid, parent, key)
        old, vend = DEC.raw_decode(body, k.end())
        assert old == rec[parent][key], (uid, parent, key, 'not the first such key')
        line = body.rfind('\n', 0, k.start()) + 1
        indent = re.match(r'[ ]*', body[line:]).group(0)
        compact = '\n' not in body[k.end():vend]
        if compact and isinstance(value, list) and not value:
            txt = '[]'
        else:
            txt = json.dumps(value, ensure_ascii=False, indent=2).replace('\n', '\n' + indent)
        self.text = self.text[:a] + body[:k.end()] + txt + body[vend:] + self.text[b:]
        self.dirty = True
        self._index()
        assert self.spans[uid][2][parent][key] == value

    def save(self):
        if self.dirty:
            io.open(self.path, 'w', encoding='utf-8').write(self.text)
            self.dirty = False
            return True
        return False


def load_all():
    files = [RecordFile(f) for f in FILES]
    where = {}
    for f in files:
        for k in f.spans:
            where[k] = f
    return files, where
