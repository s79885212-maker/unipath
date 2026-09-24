# -*- coding: utf-8 -*-
"""Replace a top-level field block (costs, english, ...) of one university record."""
import io, re

FILES = ['data/universities.us.js', 'data/universities.us2.js', 'data/universities.uk.js',
         'data/universities.de.js', 'data/universities.jp.js', 'data/universities.kr.js']


def _find_record(s, uid):
    m = re.search(r"\n  id: '" + re.escape(uid) + r"',\n", s)
    return m.start() if m else -1


def _block_end(s, start):
    """start points at the '{' or '[' opening char."""
    open_c = s[start]
    close_c = {'{': '}', '[': ']'}[open_c]
    depth = 0
    i = start
    in_str = None
    while i < len(s):
        c = s[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == in_str:
                in_str = None
        elif c in '"\'':
            in_str = c
        elif c == open_c:
            depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    raise ValueError('unbalanced')


def patch(uid, field, new_text):
    """new_text is the literal replacement for the value, e.g. '{ ... }'."""
    for path in FILES:
        s = io.open(path, encoding='utf-8').read()
        i = _find_record(s, uid)
        if i < 0:
            continue
        m = re.search(r'\n  ' + field + r': ', s[i:])
        if not m:
            raise ValueError('field %s not found on %s' % (field, uid))
        vs = i + m.end()
        ve = _block_end(s, vs)
        s = s[:vs] + new_text + s[ve:]
        io.open(path, 'w', encoding='utf-8').write(s)
        return path
    raise ValueError('record not found: ' + uid)


def read(uid, field):
    for path in FILES:
        s = io.open(path, encoding='utf-8').read()
        i = _find_record(s, uid)
        if i < 0:
            continue
        m = re.search(r'\n  ' + field + r': ', s[i:])
        if not m:
            return None
        vs = i + m.end()
        return s[vs:_block_end(s, vs)]
    raise ValueError('record not found: ' + uid)
