# -*- coding: utf-8 -*-
"""Reorder or drop campus photos after a visual review: ORDER maps a university to the photo
positions to keep (1 = current main photo), the new main photo first. thumb.jpg is rebuilt from the new main photo, and files no
longer listed are removed. Usage: python3 tools/photo_reorder.py"""
import io, json, os, re, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORDER = {
    'university-of-alabama': [2, 3], 'ritsumeikan-apu': [2], 'university-of-cologne': [3, 2], 'bates-college': [2, 3],
    'caltech': [2], 'colby-college': [2], 'franklin-and-marshall-college': [2], 'vanderbilt-university': [2],
    'rice-university': [3, 2], 'university-of-richmond': [2], 'oberlin-college': [2, 3], 'ajou-university': [3, 2],
    'anhalt-university': [2, 3], 'berlin-school-business-innovation': [3], 'durham-university': [2],
    'handong-global-university': [2, 3], 'hosei-university': [2, 3], 'kyushu-university': [2, 3], 'postech': [2, 3],
    'queen-mary-university-of-london': [2, 3], 'rikkyo-university': [2, 3], 'sookmyung-womens-university': [2, 3],
    'university-of-leeds': [2, 3], 'university-of-southampton': [3, 2], 'university-of-tsukuba': [2, 3],
    'fordham-university': [3, 2], 'michigan-state-university': [3, 2], 'ohio-state-university': [2, 3],
    'university-of-florida': [2], 'pepperdine-university': [3, 2], 'rhodes-college': [2], 'union-college': [2, 3],
    'bennington-college': [2], 'claremont-mckenna-college': [2, 3], 'foothill-college': [2], 'sarah-lawrence-college': [2, 3],
    'harvey-mudd-college': [2], 'temple-university': [2], 'american-university': [2], 'cornell-college': [2],
    'acadia-university': [3, 2], 'concordia-university': [2, 3], 'mount-allison-university': [3, 2],
    'simon-fraser-university': [2], 'universite-de-moncton': [2, 3], 'university-of-alberta': [2, 3],
    'university-of-regina': [2, 3], 'university-of-saskatchewan': [2, 3], 'vancouver-island-university': [2, 3],
    'university-of-waterloo': [2, 3],
}

DROPS = []
p = os.path.join(ROOT, 'data/photos.js'); s = io.open(p, encoding='utf-8').read()
for uid, keep in ORDER.items():
    m = re.search(r'(?m)^  "%s": (\[.*\]),?\s*$' % re.escape(uid), s)
    assert m, uid
    shots = json.loads(m.group(1))
    by_n = {i + 1: x for i, x in enumerate(shots)}
    new = [by_n[n] for n in keep]
    line = '  "%s": %s' % (uid, json.dumps(new, ensure_ascii=False))
    s = s.replace(m.group(0).rstrip(), line + (',' if m.group(0).rstrip().endswith(',') else ''))
    main = os.path.join(ROOT, new[0]['src']); d = os.path.dirname(main)
    subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '60', '-Z', '560', main, '--out', os.path.join(d, 'thumb.jpg')], capture_output=True, check=True)
    drop = [x['src'] for n, x in by_n.items() if n not in keep]
    DROPS.extend(drop)
io.open(p, 'w', encoding='utf-8').write(s)
for src in DROPS:
    subprocess.run(['git', 'rm', '-q', src], cwd=ROOT, check=True)
print('reordered', len(ORDER))
