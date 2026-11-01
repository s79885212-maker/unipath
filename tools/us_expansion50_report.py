"""Regenerate the working evidence inventory, without upgrading research statuses."""
import json
from pathlib import Path
from ca50_gaps import load
ROOT=Path(__file__).resolve().parent.parent
targets=json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))
sources=json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
photos=json.loads((ROOT/'research/us-expansion-50-photo-manifest.json').read_text(encoding='utf-8'))
_,data,_=load(str(ROOT/'data/universities.us3.js'));by_id={u['id']:u for u in data}
manifest={p['id']:p for p in photos}
def esc(x):return str(x).replace('|',' / ').replace('\n',' ')
lines=['<!-- us50-current-inventory:start -->','',
 '## Текущая таблица всех 50 профилей',
 '',
 'Это инвентаризация проверенного и оставшегося, а не отметка завершения исследования. '
 'В JSON источников у каждого факта сохранены URL, дата чтения, категория, набор/кампус, короткая выдержка и ограничения. '
 'Количество источников включает явно помеченные недоступные страницы; они не подтверждают факты.',
 '',
 '| № / ID и первичная страница | Подтверждённая программа / кампус | Документы Узбекистана | Стоимость и год | Крупная помощь | Фото | Что остаётся |',
 '|---|---|---|---|---|---|---|']
for order,t in enumerate(targets,1):
 uid=t['id'];u=by_id.get(uid)
 if not u:continue
 read=[s for s in sources if s['id']==uid and s['access']=='html-read']
 admission_url=u['links']['admissions']
 prog=next(s for s in read if s['topic'] in ('programs','program-computer-science'))
 evidence=list(u.get('programEvidence',{}).values())
 programme='; '.join(e['program'] for e in evidence)+'; '+str(prog.get('campus') or u['city'])
 cred='Название документа проверено; оценки, лицей и прочие условия открыты' if uid in ('university-of-wisconsin-madison','pennsylvania-state-university-university-park') else 'Точное соответствие не подтверждено'
 c=u.get('costs',{});year=c.get('academicYear')
 cost={'previous-cycle':'Предыдущий доступный цикл','conflict':'Конфликт: см. профиль','confirmed':'Опубликована оценка','not-published':'В проверенной таблице суммы ещё не опубликованы'}.get(c.get('status'),'Не подтверждена для Fall 2027')
 if year:cost+='; '+year
 fr=u['scholarships']['fullRide'];award=fr.get('name') or 'Крупнейшая ещё не установлена'
 if fr.get('available') is True:award+=' — конкурс, не гарантия'
 photo=manifest.get(uid)
 ph=('Кандидат: '+photo['license']+('; разрешение на скачивание запрошено' if photo['permission']=='requested-awaiting-owner' else '; разрешение ещё не запрошено')) if photo else 'Исследование снимка ещё не завершено; заглушка'
 if not photo and any(s['id']==uid and s['topic']=='photo-candidate-unavailable' for s in sources):
  ph='Поиск выполнен, страница файла недоступна; автор/лицензия не подтверждены, заглушка'
 gaps='Полнота программ и язык; точные квалификации; условия наград/продления; фотография'
 if not year:gaps+='; год/состав стоимости'
 lines.append('| '+str(order)+' / ['+uid+']('+admission_url+') | ['+esc(programme)+']('+prog['source']+') | '+cred+' | '+cost+' | '+esc(award)+' | '+esc(ph)+' | '+gaps+' |')
lines+=['','Все программы в таблице — частичные списки. Английский язык программы не назначен по языку сайта. '
 'Заглушки не доказывают отсутствие свободного снимка. Неизвестные значения не стали нулём или отсутствием требования.',
 '', '<!-- us50-current-inventory:end -->']
p=ROOT/'research/us-expansion-50-report.md';text=p.read_text(encoding='utf-8')
start='<!-- us50-current-inventory:start -->';end='<!-- us50-current-inventory:end -->'
if start in text:text=text[:text.index(start)]+'\n'.join(lines)+text[text.index(end)+len(end):]
else:text+='\n\n'+'\n'.join(lines)+'\n'
p.write_text(text,encoding='utf-8')
rp=ROOT/'research/us-expansion-50-registry.json';registry=json.loads(rp.read_text(encoding='utf-8'))
for e in registry['entries']:
 if e['id'] in manifest:
  e['topics']['photo']='candidate-license-reviewed-'+manifest[e['id']]['permission']
 elif any(s['id']==e['id'] and s['topic']=='photo-candidate-unavailable' for s in sources):
  e['topics']['photo']='searched-file-unavailable-placeholder'
rp.write_text(json.dumps(registry,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Updated evidence inventory for',len(targets),'approved institutions')
