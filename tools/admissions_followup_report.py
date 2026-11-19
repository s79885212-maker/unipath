import json
from pathlib import Path
out=Path('research/admissions-followup');queue=json.loads((out/'original-53.json').read_text(encoding='utf8'));reviews=json.loads((out/'reviews.json').read_text(encoding='utf8'))
pending=[r for r in queue if r['id'] not in reviews]
attempted=53-len(pending);unread=sum(r['id'] in reviews and reviews[r['id']].get('contentReviewed') is False for r in queue)
rows=['# Продолжение первой партии требований','',f"Исходная очередь: 53. Рассмотрено/предпринята попытка: {attempted}; содержание источников прочитано: {attempted-unread}; документ недоступен: {unread}; ещё не рассмотрено: {len(pending)}. Прочие приоритетные карточки учитываются отдельно. Закрытие академической квалификации не означает подтверждения всех SAT/ACT, программ или Fall 2027.",'','| Вуз | Статус | Результат / изменение | Официальный источник | Осталось неизвестным |','|---|---|---|---|---|']
for uid,r in reviews.items():rows.append('| '+uid+' | '+r['status']+' | '+str(r.get('academicEntry',r.get('change',''))).replace('|','/')+' | [Источник]('+r['source']+') · '+r['checked']+' | '+r['remaining'].replace('|','/')+' |')
rows+=['','## Точный остаток исходных 53','']+[f"- {r['country']}: {r['id']} — ещё не рассмотрен в этом продолжении." for r in pending]
rows+=['','Доступ к Dordt / Inha / Konkuk: access-limitations.json. Блокировки не объявляются отсутствием требований. Инвентаризация всех 540 повторно не проводилась.']
(out/'report.md').write_text('\n'.join(rows)+'\n',encoding='utf8')
print('Original queue reviewed:',53-len(pending),'pending:',len(pending),'other priority:',sum(uid not in {r['id'] for r in queue} for uid in reviews))
