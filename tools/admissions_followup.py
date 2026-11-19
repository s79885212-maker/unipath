"""Continue the explicit unresolved queue; do not repeat catalogue inventory."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'research/admissions-followup'
SOURCE=ROOT/'research/admissions-120/requirements.json'
EXCLUDED={'unknown','conflict','accepted'}
def load():return json.loads(SOURCE.read_text(encoding='utf8'))
def save(records):SOURCE.write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
def initial():
 OUT.mkdir(exist_ok=True)
 records=load()
 queue=[{'id':uid,'country':r['country'],'status':'pending','previousUnknown':r['unknown']} for uid,r in records.items() if not any(x['academic'].get('satPolicy','unknown') not in EXCLUDED for x in r['routes'])]
 assert len(queue)==53
 (OUT/'original-53.json').write_text(json.dumps(queue,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
 (OUT/'progress.md').write_text('''# Продолжение требований и релизное ревью

Исходная dev/staging: 30cc0a9a1a828279bcb3865123c0120955fb68a0, v260.
Main: d2f275a6e39af6be3f25febf4fca434039ea5ea9, production v246.
PR №28 слит; PR №27 остаётся прежним черновиком и не покрывает новые изменения.
Отдельная ветка codex/admissions-followup-review от актуальной dev. Чужие рабочие папки сохранены.

## Этапы
- [x] Сверены ветки, опубликованные версии и контрольные суммы v260.
- [x] Зафиксирована исходная очередь 53; повторная инвентаризация 540 не выполняется.
- [ ] Pittsburgh / Le Moyne / West Florida; Stockton / Pacific; доступ Dordt / Inha / Konkuk.
- [ ] Последовательная сверка всех исходных 53: документы, квалификации, маршруты, а не только SAT.
- [ ] Повторное ревью 24, по 4 из каждой страны; проверка общих ошибок.
- [ ] RU/EN, отсутствие противоречивых старых блоков, сценарии подбора.
- [ ] Полный накопленный diff main → кандидат, тесты, обе сборки и ссылки.
- [ ] PR в dev, собственное ревью, публикация staging, живой повтор.
- [ ] Один актуальный черновой релизный PR; main и production не изменяются.

Источники без года не объявляются устаревшими автоматически и не подтверждают Fall 2027. Для незакрытого вопроса сохраняется конкретный недостающий документ/условие.
''',encoding='utf8')
 print('\n'.join(f"{i+1}. {x['country']} {x['id']}" for i,x in enumerate(queue)))
if __name__=='__main__':initial()
