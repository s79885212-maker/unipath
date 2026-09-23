# -*- coding: utf-8 -*-
"""Fetch freely licensed campus photographs from Wikimedia Commons.

For every university id it looks at the English Wikipedia article and the
matching Commons category, keeps files with a free licence that clearly show
that campus, and writes 1.jpg / 2.jpg / 3.jpg plus thumb.jpg into
assets/img/universities/<id>/. Credits go to scratchpad/photos_new.json.
"""
import json, os, re, sys, time, urllib.parse, urllib.request, subprocess

ROOT = '/Users/salmonashurmamadov/Desktop/IL9/WORK'
OUT = os.path.join(ROOT, 'assets/img/universities')
UA = 'UniPathPhotoFetcher/1.0 (educational site; contact via GitHub s79885212-maker/unipath)'

TARGETS = json.load(open(os.path.join(os.path.dirname(__file__), 'photo_targets_new.json')))

BAD = re.compile(r'(logo|seal|coat[_ ]of[_ ]arms|wordmark|shield|icon|map|locator|flag|signature|diagram|chart|graph|banner|portrait|\.svg$|\.gif$|commons-|wiki)', re.I)
ICONIC = re.compile(r'(campus|library|quad|green|yard|aerial|tower|chapel|gate|arch|hall|square|panorama|skyline)', re.I)
WEAK = re.compile(r'(interior|inside|statue|sign|plaque|detail|room|stained|organ|bench|marker|monument|grave|bust|door|window|closeup|close-up'
                  r"|history of|edit-a-thon|campus plan|liberated|rotc|world's fair|psm v|graduation|1[6-9]\d\d|19[0-5]\d|drawing|engraving|sketch|postcard|archival)", re.I)

def api(host, params):
    params = dict(params); params['format'] = 'json'
    url = 'https://%s/w/api.php?%s' % (host, urllib.parse.urlencode(params))
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    for attempt in range(5):
        try:
            return json.loads(urllib.request.urlopen(req, timeout=40).read().decode('utf-8'))
        except Exception as e:
            if attempt == 4:
                raise
            time.sleep(10 * (attempt + 1))

def article_images(title):
    d = api('en.wikipedia.org', {'action': 'query', 'prop': 'images', 'titles': title, 'imlimit': 100})
    pages = d.get('query', {}).get('pages', {})
    files = []
    for p in pages.values():
        for im in p.get('images', []) or []:
            files.append(im['title'])
    return files

def category_files(cat, limit=120):
    d = api('commons.wikimedia.org', {'action': 'query', 'list': 'categorymembers',
                                      'cmtitle': 'Category:' + cat, 'cmtype': 'file', 'cmlimit': limit})
    return [m['title'] for m in d.get('query', {}).get('categorymembers', [])]

def info(files):
    """imageinfo (licence, author, size, 1400px thumbnail url) for up to 50 files."""
    out = {}
    for i in range(0, len(files), 25):
        chunk = files[i:i + 25]
        d = api('commons.wikimedia.org', {'action': 'query', 'titles': '|'.join(chunk),
                                          'prop': 'imageinfo', 'iiprop': 'extmetadata|url|size',
                                          'iiurlwidth': 1400})
        for p in d.get('query', {}).get('pages', {}).values():
            ii = (p.get('imageinfo') or [None])[0]
            if ii:
                out[p['title']] = ii
    return out

def meta(ii, key):
    m = (ii.get('extmetadata') or {}).get(key) or {}
    v = m.get('value', '')
    v = re.sub(r'<[^>]+>', '', str(v)).strip()
    return re.sub(r'\s+', ' ', v)

FREE = re.compile(r'^(cc[ -]|public domain|pd|no restrictions|cc0)', re.I)

def usable(title, ii, keywords):
    if BAD.search(title):
        return None
    if (ii.get('width') or 0) < 900:
        return None
    lic = meta(ii, 'LicenseShortName')
    if not FREE.match(lic):
        return None
    hay = ' '.join([title, meta(ii, 'ImageDescription'), meta(ii, 'ObjectName'), meta(ii, 'Categories')]).lower()
    if not any(k.lower() in hay for k in keywords):
        return None
    return {
        'title': meta(ii, 'ObjectName') or title.replace('File:', '').rsplit('.', 1)[0].replace('_', ' '),
        'caption': meta(ii, 'ImageDescription')[:300],
        'artist': meta(ii, 'Artist') or 'Unknown author',
        'license': lic,
        'licenseUrl': meta(ii, 'LicenseUrl'),
        'page': 'https://commons.wikimedia.org/wiki/' + urllib.parse.quote(title.replace(' ', '_')),
        'url': ii.get('thumburl') or ii.get('url'),
        'width': ii.get('width'),
        'file': title,
    }

def download(url, path):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    for attempt in range(5):
        try:
            data = urllib.request.urlopen(req, timeout=90).read()
            break
        except Exception:
            if attempt == 4:
                raise
            time.sleep(10 * (attempt + 1))
    with open(path, 'wb') as f:
        f.write(data)

def main():
    done = {}
    outfile = os.path.join(ROOT, 'scratchpad_photos_batch2.json')
    if os.path.exists(outfile):
        done = json.load(open(outfile))
    only = sys.argv[1:]
    for uid, t in TARGETS.items():
        if only and uid not in only:
            continue
        if uid in done and done[uid]:
            continue
        kw = t['keywords']
        cands = []
        try:
            arts = article_images(t['article'])
            files = list(arts) + [f for f in category_files(t['category']) if f not in arts]
            article_set = set(arts)
        except Exception as e:
            print('%-36s API ERROR %s' % (uid, e)); continue
        files = [f for f in files if not BAD.search(f)][:60]
        if not files:
            print('%-36s no candidate files' % uid); continue
        try:
            infos = info(files)
        except Exception as e:
            print('%-36s info error %s' % (uid, e)); continue
        for f in files:
            ii = infos.get(f)
            if not ii:
                continue
            u = usable(f, ii, kw)
            if u:
                u['fromArticle'] = f in article_set
                cands.append(u)
        def rank(c):
            t = c['file']
            s = 0
            if any(k.lower() in t.lower() for k in kw):
                s -= 3
            if ICONIC.search(t):
                s -= 2
            if c.get('fromArticle'):
                s -= 1
            if WEAK.search(t):
                s += 4
            return (s, -min(c['width'], 4000))
        cands.sort(key=rank)
        picks = cands[:3]
        if not picks:
            print('%-36s NO USABLE PHOTO (%d candidates)' % (uid, len(files))); done[uid] = []
            json.dump(done, open(outfile, 'w'), ensure_ascii=False, indent=1); continue
        d = os.path.join(OUT, uid)
        os.makedirs(d, exist_ok=True)
        saved = []
        for n, p in enumerate(picks, 1):
            dest = os.path.join(d, '%d.jpg' % n)
            try:
                download(p['url'], dest)
            except Exception as e:
                print('%-36s download failed: %s' % (uid, e)); continue
            subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '65',
                            '-Z', '1200', dest, '--out', dest], capture_output=True)
            saved.append({'src': 'assets/img/universities/%s/%d.jpg' % (uid, n), 'title': p['title'],
                          'caption': p['caption'], 'artist': p['artist'], 'license': p['license'],
                          'licenseUrl': p['licenseUrl'], 'page': p['page']})
        if saved:
            thumb = os.path.join(d, 'thumb.jpg')
            subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '60',
                            '-Z', '560', os.path.join(d, '1.jpg'), '--out', thumb], capture_output=True)
        done[uid] = saved
        json.dump(done, open(outfile, 'w'), ensure_ascii=False, indent=1)
        print('%-36s %d photos' % (uid, len(saved)))
        sys.stdout.flush()
        time.sleep(3)

main()
