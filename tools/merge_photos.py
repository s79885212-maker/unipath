# -*- coding: utf-8 -*-
"""Merge freshly fetched campus photographs into data/photos.js."""
import io, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
new = json.load(open(os.path.join(ROOT, 'scratchpad_photos_new.json')))
p = os.path.join(ROOT, 'data/photos.js')
s = io.open(p, encoding='utf-8').read()

head, body = s.split('window.UNIPATH.photos = {', 1)
body = body.rsplit('};', 1)[0]

existing = re.findall(r'^  "([a-z0-9-]+)": (\[.*\]),\s*$', body, re.M)
entries = [(uid, block) for uid, block in existing]
have = set(uid for uid, _ in entries)

added = 0
for uid, shots in sorted(new.items()):
    if not shots or uid in have:
        continue
    # keep only files that actually exist on disk
    shots = [g for g in shots if os.path.exists(os.path.join(ROOT, g['src']))]
    if not shots:
        continue
    for g in shots:
        g.pop('width', None); g.pop('file', None); g.pop('fromArticle', None)
    entries.append((uid, json.dumps(shots, ensure_ascii=False)))
    added += 1

out = head + 'window.UNIPATH.photos = {\n' + ',\n'.join(
    '  "%s": %s' % (uid, block) for uid, block in entries) + '\n};\n'
io.open(p, 'w', encoding='utf-8').write(out)
print('photos.js now lists %d universities (+%d)' % (len(entries), added))
