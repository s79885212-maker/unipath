"""Apply individually researched remaining costs and awards without inferring budgets.

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

count = awards = 0
for source in sources:
    if source['topic'] not in ('remaining-cost-review', 'remaining-award-review') or not source.get('facts'):
        continue
    assert source['id'] in allowed and source['access'] in ('html-read', 'pdf-read')
    u = byid[source['id']]
    if source['topic'] == 'remaining-award-review':
        facts = source['facts']
        for award in translate(facts.get('publicMerit', [])):
            assert award.get('id') and award.get('category') == 'merit'
            assert award.get('deadlineScope') in ('not-confirmed', 'annual-rule', 'no-separate-application', 'confirmed')
            if award['deadlineScope'] == 'confirmed':
                assert any(d.get('awardId') == award['id'] and d.get('entryYear') == award.get('entryYear') and d.get('entryTerm') == award.get('entryTerm') and d.get('cycleEvidence', {}).get('quote') for d in facts.get('publicDeadlines', []))
            else:
                assert award.get('entryYear') is None and award.get('entryTerm') is None
            award.update(source=source['source'], verified=source['verified'])
            u['scholarships']['merit'] = [a for a in u['scholarships']['merit'] if a.get('id') != award['id']] + [award]
        if facts.get('publicNeedBased'):
            u['scholarships']['needBased'].update(translate(facts['publicNeedBased']))
        if facts.get('publicFullRide'):
            award = translate(facts['publicFullRide'])
            assert award.get('id') and award.get('category') == 'merit'
            assert award.get('available') is True and award.get('internationalEligible') is True
            assert award.get('renewable') in (True, False, None)
            award.update(source=source['source'], verified=source['verified'])
            u['scholarships']['fullRide'].update(award)
        for deadline in translate(facts.get('publicDeadlines', [])):
            assert deadline.get('id') and deadline.get('awardId') and deadline.get('awardCategory') == 'merit'
            assert deadline.get('kind') in ('admission', 'documents', 'scholarship')
            assert deadline.get('status') == 'confirmed' and deadline.get('cycleEvidence', {}).get('quote')
            assert deadline['entryYear'] == deadline['cycleEvidence']['entryYear']
            assert deadline['entryTerm'] == deadline['cycleEvidence']['entryTerm']
            deadline.update(source=source['source'], verified=source['verified'])
            u['admissions']['deadlines'] = [d for d in u['admissions']['deadlines'] if d.get('id') != deadline['id']] + [deadline]
        if facts.get('publicFullRideNote'):
            assert u['scholarships']['fullRide'].get('available') is None
            u['scholarships']['fullRide']['note'] = translate(facts['publicFullRideNote'])
        awards += 1
    else:
        cost = translate(source['facts']['publicCost'])
        assert cost.get('status') in ('previous-cycle', 'conflict', 'not-checked', 'not-published')
        assert cost['currency'] == 'USD'
        if cost['status'] == 'conflict':
            assert cost.get('conflict') and cost.get('billedSubtotal') is None
            assert not (cost.get('breakdown') or {}).get('budget')
        if cost.get('academicYear') is None:
            assert cost['status'] == 'not-checked' and not cost.get('items')
        cost.update(source=source['source'], verified=source['verified'])
        u['costs'] = cost
        u['links']['cost'] = source['source']
        count += 1
    u['lastVerified'] = max(u.get('lastVerified') or '', source['verified'])
    for url in [source['source']] + source['facts'].get('supportingSources', []):
        assert url.startswith('https://')
        if not any(s['url'] == url for s in u['sources']):
            label = L('Cost — reviewed official scope and period', 'Стоимость — проверенные официальные условия и период') if source['topic'] == 'remaining-cost-review' else L('International aid — reviewed eligibility and limits', 'Международная помощь — проверенные условия и ограничения')
            u['sources'].append(dict(label=label, url=url))

save(head, rows, tail, str(path))
flush()
print('Individually reviewed remaining cost profiles:', count, '; award reviews:', awards, '; annualCost and photos unchanged')
