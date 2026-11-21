from pathlib import Path
import json,collections
root=Path('research/admissions-120')
records=json.loads((root/'requirements.json').read_text(encoding='utf-8'))
before=json.loads((root/'inventory-before.json').read_text(encoding='utf-8'))
def cell(v):return str(v or '—').replace('|',' / ').replace('\n',' ')
def linked(r):return '; '.join(f'[{cell(s["label"])}]({s["url"]})'+(f' (PDF: {s["pages"]})' if s.get('pages') else '') for s in r['sources'])
lines=['# Требования поступления: проверенные записи и очередь','',
 'Первая партия: 120 существующих университетов. Проверка касается прочитанных маршрутов и полей, а не всех программ каждого университета. Готовность staging и точный SHA фиксируются отдельно в validation.md.',
 'Автоматически инвентаризировано **540** карточек. Прочитанное содержание официального источника и проверка браузера учитываются отдельно.',
 '', '| Страна | Карточек в каталоге | Ясный статус IELTS до (не проверка источников) | Маршруты сверены сейчас |',
 '|---|---:|---:|---:|']
for country in ['us','ca','uk','de','jp','kr']:
 b=before['summary']['countries'][country]
 lines.append(f'| {country} | {b["total"]} | {b["clearLanguage"]} | {sum(r["country"]==country for r in records.values())} |')
lines += ['',f'Содержательно проверенные записи: **{len(records)}**. Каждая строка ниже ограничена названным маршрутом, а не всеми программами университета. Даты чтения: 18–19 ноября 2026 (точная дата у источника). Неуказанный год не подтверждает Fall 2027.', '',
 '| Университет → маршрут | Требование / изменение | Официальный источник | Цикл | Осталось неизвестным |',
 '|---|---|---|---|---|']
for uid,r in records.items():
 for route in r['routes']:
  e=route['english'];t=e.get('ielts') or {}; a=route['academic']
  fact='Язык: '+route['language']+'; '+route['kind']+'; IELTS '+ ('min '+str(t['min']) if isinstance(t.get('min'),(int,float)) else 'минимум не установлен')+('; recommended '+str(t['recommended']) if t.get('recommended') is not None else '')+('; sections '+str(t['sections']) if t.get('sections') else '')+'; SAT/ACT '+a.get('satPolicy','unknown')
  lines.append('| '+ ' | '.join(map(cell,[uid+' → '+route['label'],fact+' → '+r['change'],linked(route),route['applicability']['label'],'; '.join(r['unknown'])]))+' |')
lines += ['','## Проверки и ограничения','',
 'Состояние каждого вуза — review.json. requirements-checked означает чтение применимых требований, но не завершённый браузерный прогон. Непрочитанный или заблокированный источник не считается подтверждением. Часть общих правил не имеет опубликованного года набора; они остаются справочными.',
 'Регрессии: overall и секции отдельно; required/optional/not-considered; альтернативная квалификация; прошлый цикл; весенний и осенний наборы одного года; Foundation/ESL отдельно от прямого приёма. Итоговые браузерные протоколы и опубликованный SHA будут добавлены после завершения партии.',
 '', '## Очередь','',
 'Выбранные, но ещё не завершённые записи:']
selection=json.loads((root/'selection.json').read_text(encoding='utf-8'))
for country,ids in selection.items():
 lines.append('- '+country+': '+(', '.join(x for x in ids if x not in records) or 'первая партия завершена'))
lines+=['','Недоступные Dordt, Inha и Konkuk не засчитаны как прочитанные: причины и выбранные вместо них существующие карточки — blocked-queue.json. Более подробные числовые показатели — metrics.json; индивидуальные поля, альтернативы и освобождения — requirements.json.']
(root/'report.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
print('Report records',len(records))
