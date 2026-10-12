# -*- coding: utf-8 -*-
"""Pick campus photographs by hand when the automatic fetch found nothing usable.

  pick_photos_us200.py search "<query>"            lists free-licence candidates on Wikimedia Commons
  pick_photos_us200.py take <id> "File:A.jpg" ...  downloads the named files as 1.jpg, 2.jpg … and writes the entry in data/photos.js
"""
import io, json, os, re, subprocess, sys
import importlib.util
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('fetch', os.path.join(HERE, 'fetch_photos_us200.py'))
F = importlib.util.module_from_spec(spec); spec.loader.exec_module(F)
ROOT = F.ROOT

def search(q, n=14):
    d = F.api('commons.wikimedia.org', {'action': 'query', 'list': 'search', 'srsearch': q + ' filetype:bitmap', 'srnamespace': 6, 'srlimit': n})
    titles = [x['title'] for x in d['query']['search']]
    infos = F.info(titles)
    for t in titles:
        ii = infos.get(t)
        if not ii: continue
        lic = F.meta(ii, 'LicenseShortName')
        ok = bool(F.FREE.match(lic)) and (ii.get('width') or 0) >= 900 and not F.BAD.search(t)
        print('%s %-70s | %s | %s' % ('ok ' if ok else '-- ', t[:70], lic[:14], F.meta(ii, 'ImageDescription')[:70]))

def take(uid, titles):
    infos = F.info(titles); d = os.path.join(F.OUT, uid); os.makedirs(d, exist_ok=True); shots = []
    for n, t in enumerate(titles, 1):
        ii = infos[t]; lic = F.meta(ii, 'LicenseShortName'); assert F.FREE.match(lic), (t, lic)
        dest = os.path.join(d, '%d.jpg' % n); F.download(ii.get('thumburl') or ii.get('url'), dest)
        subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '65', '-Z', '1200', dest, '--out', dest], capture_output=True)
        shots.append({'src': 'assets/img/universities/%s/%d.jpg' % (uid, n),
                      'title': F.meta(ii, 'ObjectName') or t.replace('File:', '').rsplit('.', 1)[0].replace('_', ' '),
                      'caption': F.meta(ii, 'ImageDescription')[:300], 'artist': F.meta(ii, 'Artist') or 'Unknown author', 'license': lic,
                      'licenseUrl': F.meta(ii, 'LicenseUrl'), 'page': 'https://commons.wikimedia.org/wiki/' + F.urllib.parse.quote(t.replace(' ', '_'))})
    subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '60', '-Z', '560', os.path.join(d, '1.jpg'), '--out', os.path.join(d, 'thumb.jpg')], capture_output=True)
    p = os.path.join(ROOT, 'data/photos.js'); s = io.open(p, encoding='utf-8').read()
    line = '  "%s": %s' % (uid, json.dumps(shots, ensure_ascii=False))
    m = re.search(r'(?m)^  "%s": \[.*\],?\s*$' % re.escape(uid), s)
    if m: s = s.replace(m.group(0), line + (',' if m.group(0).rstrip().endswith(',') else ''))
    else: s = re.sub(r'\n\};\s*$', ',\n' + line + '\n};\n', s)
    io.open(p, 'w', encoding='utf-8').write(s); print(uid, len(shots), 'photos')

if __name__ == '__main__':
    if sys.argv[1] == 'search': search(sys.argv[2])
    else: take(sys.argv[2], sys.argv[3:])
