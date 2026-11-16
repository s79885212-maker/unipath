"""Generate the reviewed third and fourth USA expansion batches."""
import argparse
import importlib
import json
from pathlib import Path

import us100_batch1 as base
from us200_std import L, flush

ROOT = Path(__file__).resolve().parents[1]
REVIEWED = '2026-11-13'
STATES = {
    'AL': ('Alabama', 'Алабама'), 'CA': ('California', 'Калифорния'),
    'FL': ('Florida', 'Флорида'), 'GA': ('Georgia', 'Джорджия'),
    'IA': ('Iowa', 'Айова'), 'IL': ('Illinois', 'Иллинойс'),
    'IN': ('Indiana', 'Индиана'), 'KY': ('Kentucky', 'Кентукки'),
    'LA': ('Louisiana', 'Луизиана'), 'MA': ('Massachusetts', 'Массачусетс'),
    'MD': ('Maryland', 'Мэриленд'), 'MI': ('Michigan', 'Мичиган'),
    'MO': ('Missouri', 'Миссури'), 'NC': ('North Carolina', 'Северная Каролина'),
    'NJ': ('New Jersey', 'Нью-Джерси'), 'NY': ('New York', 'Нью-Йорк'),
    'OH': ('Ohio', 'Огайо'), 'RI': ('Rhode Island', 'Род-Айленд'),
    'SC': ('South Carolina', 'Южная Каролина'), 'SD': ('South Dakota', 'Южная Дакота'),
    'TN': ('Tennessee', 'Теннесси'), 'VA': ('Virginia', 'Виргиния'),
    'WI': ('Wisconsin', 'Висконсин'),
}
COST_UNKNOWN = L('A comparable full cost for the 2027–2028 academic year has not been confirmed.',
                 'Сопоставимая полная стоимость на 2027–2028 учебный год не подтверждена.')
AWARD_UNKNOWN = L('Scholarship coverage for incoming international first-year students has not been confirmed.',
                  'Покрытие стипендий для иностранных первокурсников не подтверждено.')


def make_records(batch, details):
    rows = (ROOT / f'research/us100-batch{batch}-profiles.tsv').read_text(encoding='utf-8').splitlines()
    records = []
    for row in rows[1:]:
        uid, name, city, city_ru, state, kind, website, admissions, programs, field, major, major_ru = row.split('\t')
        region, region_ru = STATES[state]
        facts = dict(details.get(uid, {}))
        unconfirmed = list(facts.pop('unconfirmed', ()))
        if not facts.get('cost') or facts['cost'].get('status') == 'previous-cycle':
            unconfirmed.append(COST_UNKNOWN)
        if not (facts.get('awards') or facts.get('need')):
            unconfirmed.append(AWARD_UNKNOWN)
        records.append(base.profile(
            uid, name, name, L(city, city_ru), L(region, region_ru), f'https://{website}/',
            'https://' + admissions, 'https://' + programs, {field: L(major, major_ru)},
            L(f'Undergraduate study in {city}, {region}.',
              f'Бакалавриат, кампус: {city_ru}, штат {region_ru}.'),
            public=kind == 'p', unconfirmed=unconfirmed, **facts))
    return records


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('batch', type=int, choices=(3, 4))
    batch = parser.parse_args().batch
    base.REVIEWED = REVIEWED
    review = importlib.import_module(f'us100_batch{batch}')
    records = make_records(batch, review.details())
    payload = ',\n'.join(json.dumps(record, ensure_ascii=False, indent=2) for record in records)
    target = ROOT / f'data/universities.us{batch + 3}.js'
    target.write_text(f'/* United States expansion, batch {batch}. */\n'
                      f'window.UNIPATH.universities.push(\n{payload}\n);\n',
                      encoding='utf-8', newline='\n')
    flush()


if __name__ == '__main__':
    main()
