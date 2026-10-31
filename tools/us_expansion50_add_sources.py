"""Append a reviewed research payload without overwriting previous entries.

Only manually reviewed primary-source facts belong in the input JSON. This does
not fetch, infer admissions facts, or alter public university records.
"""
import json, pathlib, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
target = ROOT / 'research/us-expansion-50-sources.json'
rows = json.loads(target.read_text(encoding='utf-8'))
new = json.loads(pathlib.Path(sys.argv[1]).read_text(encoding='utf-8-sig'))
ids = {r['id'] for r in json.loads((ROOT / 'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))}
keys = {(r['id'], r['topic'], r['source']) for r in rows}
for r in new:
    assert r['id'] in ids, r['id']
    assert r['source'].startswith('https://') and r['verified'] and r['category']
    key = (r['id'], r['topic'], r['source'])
    assert key not in keys, key
    if r['access'] == 'html-read':
        assert r.get('quote') and r.get('facts'), key
    else:
        assert r.get('facts') is None, 'Unavailable text cannot substantiate a fact'
    rows.append(r); keys.add(key)
target.write_text(json.dumps(rows, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
registry_path = ROOT / 'research/us-expansion-50-registry.json'
registry = json.loads(registry_path.read_text(encoding='utf-8'))
for e in registry['entries']:
    found = [r for r in rows if r['id'] == e['id']]
    if found:
        e['researchStatus'] = 'in-progress'
        e['sourceEntries'] = len(found)
registry_path.write_text(json.dumps(registry, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print('Added',len(new),'reviewed records;',len(rows),'research entries in total')
