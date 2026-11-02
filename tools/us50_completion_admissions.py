"""Display explicitly reviewed first-year documents and testing scopes.

Run after older batch builders. No free-text inference, school-grade conversion,
qualification eligibility or date projection is performed here.
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
documents = set()
testing = set()

def text(value):
    assert set(value) == {'en', 'ru'}
    return L(value['en'], value['ru'])

def translate(value):
    if isinstance(value, dict):
        if set(value) == {'en', 'ru'}:
            return text(value)
        return {key: translate(item) for key, item in value.items()}
    if isinstance(value, list):
        return [translate(item) for item in value]
    return value

for evidence in sources:
    facts = evidence.get('facts') or {}
    if not any(k in facts for k in ('publicAdmissionDocuments', 'publicTestingPolicy', 'publicEnglish', 'publicApplicationFee')):
        continue
    assert evidence['id'] in allowed and evidence['access'] in ('html-read', 'pdf-read')
    u = byid[evidence['id']]
    if facts.get('publicAdmissionDocuments'):
        for value in facts['publicAdmissionDocuments']:
            doc = text(value)
            if doc not in u['admissions']['documents']:
                u['admissions']['documents'].append(doc)
        documents.add(u['id'])
    if facts.get('publicTestingPolicy'):
        policy = facts['publicTestingPolicy']
        assert policy['policy'] in ('required', 'optional', 'conditional', 'not-applicable', 'not-used')
        assert policy.get('cycle') and policy.get('scopeQuote')
        if policy.get('cycleRu'):
            L(policy['cycle'], policy['cycleRu'])
        for exam in ('sat', 'act'):
            previous = u['academics'].get(exam) or {}
            # Preserve existing independent statistics; this changes admission policy only.
            previous.update(policy=policy['policy'], label=text(policy['label']),
                            note=text(policy['note']), cycle=policy['cycle'],
                            source=evidence['source'], verified=evidence['verified'])
            u['academics'][exam] = previous
        testing.add(u['id'])
    if facts.get('publicEnglish'):
        english = translate(facts['publicEnglish'])
        for test in ('ielts', 'toefl', 'duolingo'):
            if test in english:
                assert english[test] is None or isinstance(english[test], dict)
        u['english'].update(english)
        u['english'].update(detailsSource=evidence['source'], detailsVerified=evidence['verified'])
    if facts.get('publicApplicationFee'):
        fee = translate(facts['publicApplicationFee'])
        assert fee['currency'] == 'USD' and (fee['amount'] is None or fee['amount'] >= 0)
        fee.update(source=evidence['source'], verified=evidence['verified'])
        u['admissions']['applicationFee'].update(fee)
    for url in [evidence['source']] + facts.get('supportingSources', []):
        assert url.startswith('https://')
        if not any(s['url'] == url for s in u['sources']):
            u['sources'].append(dict(label=L('First-year documents and testing — reviewed scope', 'Документы и экзамены первокурсника — проверенные условия'), url=url))
    u['lastVerified'] = max(u.get('lastVerified') or '', evidence['verified'])

save(head, rows, tail, str(path))
flush()
print('Displayed reviewed general first-year documents:', len(documents), '; explicit testing policy updates:', len(testing), '; Uzbek equivalence not inferred')
