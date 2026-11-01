"""Apply individually researched remaining cost records without inferring budgets.

Research facts carry the exact existing public cost shape. Bilingual text is
registered in the normal dictionary. This writer never synthesises an annualCost
entry, reconciles a conflict or upgrades an undated/previous-cycle source.
"""
import json
from pathlib import Path
from ca50_gaps import load, save
from us200_std import L, flush

ROOT = Path(__file__).resolve().parent.parent
allowed = {t['id'] for t in json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))}
sources = json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
path = ROOT/'data/universities.us3.js'
head, rows, tail = load(str(path))
byid = {u['id']: u for u in rows}

def translate(value):
    if isinstance(value, dict):
        if set(value) == {'en', 'ru'}:
            return L(value['en'], value['ru'])
        return {k: translate(v) for k, v in value.items()}
    if isinstance(value, list):
        return [translate(v) for v in value]
    return value

count = 0
for source in sources:
    if source['topic'] != 'remaining-cost-review' or not (source.get('facts') or {}).get('publicCost'):
        continue
    assert source['id'] in allowed and source['access'] in ('html-read', 'pdf-read')
    cost = translate(source['facts']['publicCost'])
    assert cost.get('status') in ('previous-cycle', 'conflict', 'not-checked', 'not-published')
    assert cost['currency'] == 'USD'
    if cost['status'] == 'conflict':
        assert cost.get('conflict') and cost.get('billedSubtotal') is None
        assert not (cost.get('breakdown') or {}).get('budget')
    if cost.get('academicYear') is None:
        assert cost['status'] == 'not-checked' and not cost.get('items')
    cost.update(source=source['source'], verified=source['verified'])
    u = byid[source['id']]
    u['costs'] = cost
    u['links']['cost'] = source['source']
    u['lastVerified'] = max(u.get('lastVerified') or '', source['verified'])
    if not any(s['url'] == source['source'] for s in u['sources']):
        u['sources'].append(dict(label=L('Cost — reviewed official scope and period', 'Стоимость — проверенные официальные условия и период'), url=source['source']))
    count += 1

save(head, rows, tail, str(path))
flush()
print('Individually reviewed remaining cost profiles:', count, '; annualCost, awards and photos unchanged')
