"""Apply confirmed international first-year application fees to the four US100 batches."""
import json
from pathlib import Path

from us200 import fee
from us100_batch1 import FREE_APPLICATION

ROOT = Path(__file__).resolve().parents[1]


def apply_fee_review(records):
    evidence = json.loads((ROOT / 'research/us100-fees.json').read_text(encoding='utf-8'))
    fees = {item['id']: item for item in evidence}
    for record in records:
        item = fees.get(record['id'])
        if item:
            record['admissions']['applicationFee'] = fee(
                item['amount'], FREE_APPLICATION if item['amount'] == 0 else None,
                item['source'], item['verified'])
    return records


if __name__ == '__main__':
    for number in range(4, 8):
        path = ROOT / f'data/universities.us{number}.js'
        opening, data = path.read_text(encoding='utf-8').split('universities.push(', 1)
        records = json.loads('[' + data.rsplit(');', 1)[0] + ']')
        payload = ',\n'.join(json.dumps(record, ensure_ascii=False, indent=2) for record in apply_fee_review(records))
        path.write_text(opening + 'universities.push(\n' + payload + '\n);\n',
                        encoding='utf-8', newline='\n')
