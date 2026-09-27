# -*- coding: utf-8 -*-
"""Replace english.<test> objects in base records or in the admission-profiles layer."""
import io, re

def js(v, ind=4):
    pad = ' ' * ind
    if v is None: return 'null'
    if v is True: return 'true'
    if v is False: return 'false'
    if isinstance(v, (int, float)): return repr(v)
    if isinstance(v, str):
        return "'" + v.replace('\\', '\\\\').replace("'", "\\'") + "'"
    if isinstance(v, list):
        if not v: return '[]'
        if all(not isinstance(x, (dict, list)) for x in v):
            return '[' + ', '.join(js(x) for x in v) + ']'
        return '[\n' + ',\n'.join(pad + '  ' + js(x, ind + 2) for x in v) + '\n' + pad + ']'
    if isinstance(v, dict):
        items = [k + ': ' + js(x, ind + 2) for k, x in v.items()]
        one = '{ ' + ', '.join(items) + ' }'
        if len(one) < 150 and '\n' not in one: return one
        return '{\n' + ',\n'.join(pad + '  ' + i for i in items) + '\n' + pad + '}'
    raise TypeError(type(v))

def block_end(s, start):
    open_c = s[start]; close_c = {'{': '}', '[': ']'}[open_c]
    depth = 0; i = start; q = None
    while i < len(s):
        c = s[i]
        if q:
            if c == '\\': i += 2; continue
            if c == q: q = None
        elif c in '"\'': q = c
        elif c == open_c: depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0: return i + 1
        i += 1
    raise ValueError('unbalanced')

def find_key(s, a, b, key):
    """Position of the value of `key:` at depth 1 inside the object s[a:b]."""
    i = a + 1; depth = 0; q = None
    while i < b:
        c = s[i]
        if q:
            if c == '\\': i += 2; continue
            if c == q: q = None
        elif c in '"\'': q = c
        elif c in '{[': depth += 1
        elif c in '}]': depth -= 1
        elif depth == 0 and s.startswith(key + ':', i) and not (s[i-1].isalnum() or s[i-1] == '_'):
            j = i + len(key) + 1
            while s[j] == ' ': j += 1
            return i, j
        i += 1
    return None

def set_tests(path, anchor, tests):
    """anchor: regex for the start of the record/override. tests: {key: dict or None}."""
    s = io.open(path, encoding='utf-8').read()
    m = re.search(anchor, s)
    if not m: raise ValueError('anchor not found: ' + anchor)
    ob = s.rindex('{', 0, m.start() + 1) if ' id: ' in anchor or 'id:' in anchor[:12] else s.index('{', m.end() - 1)
    oe = block_end(s, ob)
    k = find_key(s, ob, oe, 'english')
    if not k: raise ValueError('english not found after ' + anchor)
    ea = k[1]; eb = block_end(s, ea)
    for key, val in tests.items():
        fk = find_key(s, ea, eb, key)
        lit = js(val, 4)
        if fk:
            vs = fk[1]; ve = block_end(s, vs) if s[vs] in '{[' else re.search(r'[,\n}]', s[vs:]).start() + vs
            s = s[:vs] + lit + s[ve:]
        else:
            ins = s.rindex('}', ea, eb)
            before = s[:ins].rstrip()
            sep = '' if before.endswith(',') or before.endswith('{') else ','
            s = before + sep + '\n    ' + key + ': ' + lit + '\n  ' + s[ins:]
        eb = block_end(s, ea)
    io.open(path, 'w', encoding='utf-8').write(s)

def base(uid): return r"\n  id: '" + re.escape(uid) + r"',\n"

def base_dq(uid): return r'\n    id: "' + re.escape(uid) + r'",\n'
