# -*- coding: utf-8 -*-
"""Restores the spaces missing from the texts of the 50 USA profiles added in November 2026.

The batch builders (tools/us_expansion50_batch*.py and the us50_completion_* tools) were
written with spaces left out around numbers and between words, e.g. "IELTS6.5",
"Fall2027", "toVestal1961", "Открылся1946как". This step puts them back in every
displayed string of those 50 records and in their Russian translations
(data/i18n/ru.js: the English key is renamed to the corrected English text and the
Russian value gets the same correction). Only whitespace is added: names, dates,
amounts, requirements and links are left as they are.

Run it last, after the batch builders and the completion tools:
    python3 tools/us50_text_spacing.py           # writes the files
    python3 tools/us50_text_spacing.py --dry-run # lists every change, writes nothing
Running it twice changes nothing the second time.
"""
import io, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ca50_gaps as G

ROOT = G.ROOT
US3 = os.path.join(ROOT, 'data/universities.us3.js')
RU = os.path.join(ROOT, 'data/i18n/ru.js')
MATCH = os.path.join(ROOT, 'data/match.js')
TARGETS = os.path.join(ROOT, 'research/us-expansion-50-targets.json')

# Fields that hold codes, links or machine values, never prose.
SKIP_KEYS = {'id', 'source', 'url', 'page', 'licenseUrl', 'src', 'main', 'thumb', 'website', 'apply',
             'dateISO', 'period', 'status', 'basis', 'level', 'verified', 'checked', 'lastVerified',
             'programsBasis', 'programsStatus', 'institutionKind', 'policy', 'kind', 'c1', 'c2',
             'initials', 'currency', 'entryTerm', 'entryYear', 'country', 'access', 'category',
             'artist'}  # photo authors are user names on Wikimedia Commons: kept exactly
SKIP_PARENTS = {'links', 'brand'}

L = 'A-Za-z'
C = 'А-Яа-яЁё'
MONTHS = ('January|February|March|April|May|June|July|August|September|October|November|December|'
          'Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec')

# Letter+digit tokens that are written without a space: visa types, CEFR levels, and the like.
KEEP_LETTER_DIGIT = re.compile(r'(?<![A-Za-z])(?:F1|J1|M1|H1B|B1|B2|C1|C2|A1|A2|K12|I20|Q[1-4]|W2|W8|P1|P2|STEM\d)(?![0-9A-Za-z])')
# Digit+letter endings that belong to the number.
NUM_SUFFIX = re.compile(r'^(?:st|nd|rd|th|s|am|pm|px|k|m|x|K|M|B)(?![A-Za-z])')
# Words in which a lower-case letter is followed by a capital on purpose.
CAMEL_OK = {'McGill', 'McDonald', 'McNair', 'McCombs', 'MacArthur', 'DePaul', 'LaGuardia', 'iPhone', 'iPad',
            'YouTube', 'GitHub', 'OpenStreetMap', 'PhD', 'PhDs', 'MyMajor', 'MyMajors', 'UniPath', 'eCampus',
            'edX', 'WeChat', 'LinkedIn', 'JavaScript', 'PowerPoint', 'SharePoint', 'iCloud', 'eSIM',
            'FAFSA', 'CSSProfile', 'BigFuture', 'CollegeBoard', 'InitialView', 'TOEFLiBT', 'iBT', 'MyUSF',
            'GoldLink', 'PeopleSoft', 'MyUCF', 'MyUD', 'BlueJay', 'NetPrice', 'BearWeb', 'CommonApp',
            'MySlice', 'ApplyTexas', 'OneStop', 'StudentAid', 'HuskyCT', 'WebAdvisor', 'MyPitt',
            'McKelvey', 'MacKenzie', 'McCormick', 'McMaster', 'DeVos', 'LeBlanc', 'DiMaggio', 'VanderKam',
            'MyBest', 'EducationUSA', 'WiSH', 'UConn', 'eTech', 'BSMath', 'BAArtHist', 'McHenry'}
# Surnames such as McHenry, DeVos or LaGuardia keep their capital.
NAME_PREFIX = re.compile(r'^(?:Mc|Mac|De|Di|La|Le|Van|Von)[A-Z][a-z]+$')


def _camel(m):
    word = m.group(0)
    if word in CAMEL_OK or NAME_PREFIX.match(word):
        return word
    return re.sub(r'(?<=[a-z])(?=[A-Z])', ' ', word)


def fix(s):
    """Adds the missing spaces. Pure whitespace changes; idempotent."""
    if not s or '://' in s and ' ' not in s:
        return s
    out = []
    # Leave links and hex colours untouched: split them out and fix only the text between.
    for part in re.split(r'(https?://\S+|www\.\S+|#[0-9a-fA-F]{3,8}\b|\S+@\S+\.\S+)', s):
        if re.match(r'(https?://|www\.|#[0-9a-fA-F]{3,8}$|\S+@\S+\.\S+)', part or ''):
            out.append(part)
            continue
        out.append(_fix_text(part))
    return ''.join(out)


def _fix_text(s):
    keep = {}

    def hold(m):
        key = '\u0000%d\u0000' % len(keep)
        keep[key] = m.group(0)
        return key
    s = KEEP_LETTER_DIGIT.sub(hold, s)
    # Cyrillic next to Latin or a digit, in either order.
    s = re.sub(r'(?<=[%s])(?=[%s0-9])' % (C, L), ' ', s)
    s = re.sub(r'(?<=[%s0-9])(?=[%s])' % (L, C), ' ', s)
    # Latin letters directly before a number: "IELTS6.5", "Fall2027", "years9–12".
    s = re.sub(r'(?<=[%s])(?=[0-9])' % L, ' ', s)
    # A number directly before a Latin word: "19October", "1946as" (not "1st", "1990s", "10am").
    s = re.sub(r'(?<=[0-9])(?=[%s])' % L, lambda m: '' if NUM_SUFFIX.match(s[m.end():]) else ' ', s)
    # lower-case followed by a capital inside one token: "toVestal", "feesUSD", "oldTOEFL".
    s = re.sub(r'\b[A-Za-z]*[a-z][A-Z][A-Za-z]*\b', _camel, s)
    # "January 21,2026" -> "January 21, 2026"
    s = re.sub(r'\b((?:%s) \d{1,2}),(?=\d{4}\b)' % MONTHS, r'\1, ', s)
    # Punctuation directly followed by a word: ",word" ";word" ":word" ")word".
    s = re.sub(r'(?<=[%s%s%s0-9)\]])([,;])(?=[%s%s(])' % (L, C, '%', L, C), r'\1 ', s)
    s = re.sub(r'(?<=[%s%s)])(:)(?=[%s%s(])' % (L, C, L, C), r'\1 ', s)
    # "halls:9,900", "semesters;12+", "Mines,2027": a number after a word and punctuation.
    s = re.sub(r'(?<=[%s%s)])([:;,])(?=[0-9])' % (L, C), r'\1 ', s)
    s = re.sub(r'(?<=[0-9%%])(;)(?=[0-9])', r'\1 ', s)
    s = re.sub(r'\)(?=[%s%s0-9])' % (L, C), ') ', s)
    s = re.sub(r'(?<=[%s%s0-9.,;])\((?=[%s%s0-9])' % (L, C, L, C), ' (', s)
    # A spaced dash missing one of its spaces: " —2027" -> " — 2027", "word— " -> "word — ".
    s = re.sub(r'(?<= )([—–])(?=[^\s—–])', r'\1 ', s)
    s = re.sub(r'(?<=[^\s—–])([—–])(?= )', r' \1', s)
    # "1,832 =43,852" -> "1,832 = 43,852"; "Newark.1766" -> "Newark. 1766"; "12+credits" -> "12+ credits".
    s = re.sub(r'(?<=[0-9]) ?= ?(?=[0-9])', ' = ', s)
    s = re.sub(r'(?<=[a-z%s]{3})\.(?=[A-Z%s0-9])' % ('а-яё', 'А-ЯЁ'), '. ', s)
    s = re.sub(r'(?<=[0-9])\+(?=[a-z%s])' % 'а-яё', '+ ', s)
    s = re.sub(r'  +', ' ', s)
    for key, val in keep.items():
        s = s.replace(key, val)
    return s


def prose_strings(rec):
    """(container, key) pairs for every displayed string in a record."""
    found = []

    def walk(o, parent):
        if isinstance(o, dict):
            for k, v in o.items():
                if isinstance(v, str):
                    if k not in SKIP_KEYS and parent not in SKIP_PARENTS:
                        found.append((o, k))
                else:
                    walk(v, k if parent not in SKIP_PARENTS else parent)
        elif isinstance(o, list):
            for i, v in enumerate(o):
                if isinstance(v, str):
                    if parent not in SKIP_PARENTS and parent not in ('programs', 'englishTaughtPrograms', 'aliases', 'degrees'):
                        found.append((o, i))
                else:
                    walk(v, parent)
    walk(rec, None)
    return found


def ru_entries(text):
    """(start, end, key, value) of every simple "key": "value" line in ru.js."""
    pat = re.compile(r'^(  )("(?:[^"\\]|\\.)*")(: )("(?:[^"\\]|\\.)*")(,?)$', re.M)
    return pat, [(m, json.loads(m.group(2)), json.loads(m.group(4))) for m in pat.finditer(text)]


def main(dry):
    ids = [t['id'] for t in json.load(io.open(TARGETS, encoding='utf-8'))]
    h, rs, t = G.load(US3)
    recs = [r for r in rs if r['id'] in ids]
    assert len(recs) == 50, len(recs)
    changed = {}          # old English -> new English
    touched = set()
    shown = set()         # every displayed English string after the fix
    for r in recs:
        for box, key in prose_strings(r):
            old = box[key]
            new = fix(old)
            shown.add(new)
            if new != old:
                assert re.sub(r'\s+', '', new) == re.sub(r'\s+', '', old), (old, new)
                changed[old] = new
                box[key] = new
                touched.add(r['id'])

    # data/match.js repeats some of these texts in the yearly-cost entries of the same universities.
    match_text = io.open(MATCH, encoding='utf-8').read()
    match_lines = match_text.split('\n')
    match_fixed = 0
    for i, line in enumerate(match_lines):
        if not any('"%s"' % uid in line for uid in ids):
            continue
        for old, new in changed.items():
            o, n = json.dumps(old, ensure_ascii=False), json.dumps(new, ensure_ascii=False)
            if o in line:
                line = line.replace(o, n); match_fixed += 1
        match_lines[i] = line
    new_match = '\n'.join(match_lines)

    ru_text = io.open(RU, encoding='utf-8').read()
    pat, entries = ru_entries(ru_text)
    have = {k for _, k, _ in entries}
    ru_changes = []

    def repl(m):
        k, v = json.loads(m.group(2)), json.loads(m.group(4))
        nk = changed.get(k, k)
        if nk != k and nk in have:
            return m.group(0)          # the corrected key already exists; the old one stays unused
        if nk in shown or k in changed:
            nv = fix(v)
            if (nk, nv) != (k, v):
                assert re.sub(r'\s+', '', nv) == re.sub(r'\s+', '', v), (v, nv)
                ru_changes.append((k, nk, v, nv))
                return m.group(1) + json.dumps(nk, ensure_ascii=False) + m.group(3) + json.dumps(nv, ensure_ascii=False) + m.group(5)
        return m.group(0)
    new_ru = pat.sub(repl, ru_text)

    print('profiles changed: %d; English strings changed: %d; data/match.js texts: %d; Russian entries changed: %d'
          % (len(touched), len(changed), match_fixed, len(ru_changes)))
    if dry:
        return changed, ru_changes, touched
    G.save(h, rs, t, US3)
    io.open(RU, 'w', encoding='utf-8').write(new_ru)
    io.open(MATCH, 'w', encoding='utf-8').write(new_match)
    return changed, ru_changes, touched


if __name__ == '__main__':
    main('--dry-run' in sys.argv)
