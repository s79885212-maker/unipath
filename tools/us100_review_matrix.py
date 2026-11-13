"""Summarize the actual coverage of the approved 100 United States profiles."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
records = []
for number in range(4, 8):
    script = (ROOT / f'data/universities.us{number}.js').read_text(encoding='utf-8')
    payload = script.split('universities.push(', 1)[1].rsplit(');', 1)[0]
    records.extend(json.loads('[' + payload + ']'))
assert len(records) == len({u['id'] for u in records}) == 100

photos = (ROOT / 'data/photos.js').read_text(encoding='utf-8')
rows = []
totals = dict(photo=0, date=0, fee=0, cost=0, aid=0, qualification=0)
for school in records:
    uid = school['id']
    admissions = school['admissions']
    english = school['english']
    costs = school['costs']
    aid = school['scholarships']
    confirmed_dates = [d['dateISO'] for d in admissions['deadlines']
                       if d.get('entryYear') == '2027' and d.get('status') == 'confirmed'
                       and d.get('kind') in ('admission', 'EA', 'ED', 'RD') and d.get('dateISO')]
    costs_label = costs.get('academicYear') or '—'
    if costs.get('status') == 'previous-cycle':
        costs_label += ' (прошлый цикл)'
    elif costs_label != '—' and not (costs.get('breakdown') or {}).get('comprehensive'):
        costs_label += ' (состав см. в карточке)'
    application_fee = admissions['applicationFee'].get('amount')
    qualifications = school['academics'].get('internationalQualifications')
    photo = re.search(r'^\s*"' + re.escape(uid) + r'":\s*\[', photos, re.MULTILINE)
    has_aid = bool(aid['merit'] or aid['needBased'].get('availableToInternational') is not None)
    has_english = any(english.get(key) for key in ('ielts', 'toefl', 'duolingo'))
    for field, value in [('photo', photo), ('date', confirmed_dates), ('fee', application_fee is not None),
                         ('cost', costs.get('academicYear')), ('aid', has_aid), ('qualification', qualifications)]:
        totals[field] += bool(value)
    photo_label = 'Есть' if photo else 'Поиск Commons, подходящий файл не установлен'
    rows.append([
        school['name'], f"[приём]({school['links']['internationalAdmissions']})",
        str(len(school['programs'])), ', '.join(confirmed_dates) or '—',
        str(application_fee) if application_fee is not None else '—',
        'Есть данные' if has_english else '—', costs_label,
        'Есть данные' if has_aid else '—', 'Есть данные' if qualifications else '—', photo_label,
    ])

header = [
    '# США, 100 новых профилей · состояние на 13 ноября 2026',
    '',
    'Все 100 учреждений из согласованного списка входят в четыре партии. Тире означает, что в профиле нет подтверждённого значения для этой колонки. Для стоимости указанный год сам по себе не означает полного бюджета. Программы в карточках подтверждены частично.',
    '',
    f"Фотографии установлены у {totals['photo']} вузов. Подтверждённая дата подачи цикла 2027 есть у {totals['date']}, сбор у {totals['fee']}, данные стоимости с названным годом у {totals['cost']}, сведения о финансовой помощи у {totals['aid']}, требования к узбекской квалификации у {totals['qualification']}.",
    '',
    '| Вуз | Источник | Направлений | Дата заявки 2027 | Сбор USD | Английский | Стоимость | Помощь | Документы Узбекистана | Фото |',
    '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
]
lines = ['| ' + ' | '.join(row) + ' |' for row in rows]
(ROOT / 'research/us100-review-matrix.md').write_text('\n'.join(header + lines) + '\n', encoding='utf-8')
print(totals)
