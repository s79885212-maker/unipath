"""Evidence-linked completion matrix; unknown is never a completed research task."""
import json,pathlib
from ca50_gaps import load
ROOT=pathlib.Path(__file__).resolve().parent.parent
sources=json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
targets=json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))
photos={x['id']:x for x in json.loads((ROOT/'research/us-expansion-50-photo-manifest.json').read_text(encoding='utf-8'))}
_,rows,_=load(str(ROOT/'data/universities.us3.js'));byid={x['id']:x for x in rows}
out=[]
for order,t in enumerate(targets,1):
 u=byid[t['id']];e=[x for x in sources if x['id']==u['id'] and x['access'] in ('html-read','pdf-read')]
 def field(status,notes,urls):return dict(status=status,notes=notes,evidence=list(dict.fromkeys(x for x in urls if x)))
 pr=list(u.get('programEvidence',{}).values());c=u.get('costs',{});fr=u['scholarships']['fullRide'];p=photos.get(u['id'],{})
 photo_attempts=[x for x in sources if x['id']==u['id'] and x['topic']=='photo-search-review']
 cred=[x for x in e if x['topic'] in ('uzbekistan-documents','international-documents','international-first-year-requirements')]
 fields={
 'programmes':field('partial',f'{len(pr)} подтверждённых областей; полный каталог/ограничения приёма ещё проверяются',[x.get('url') for x in pr]),
 'language':field('partial' if u.get('englishTaughtPrograms') else 'unknown',{'confirmedFields':u.get('englishTaughtPrograms',[]),'remaining':'Не выводится из языка сайта или требований IELTS'},[x['source'] for x in e if x['topic']=='instruction-language']),
 'admission':field('partial','Общие international first-year инструкции прочитаны; актуальность цикла, waiver и специальные программы проверяются отдельно',[u['links']['admissions']]),
 'uzbekDocuments':field('partial' if u['id'] in ('university-of-wisconsin-madison','pennsylvania-state-university-university-park') else 'unknown','Общие документы не доказывают точное соответствие аттестата/академического лицея; оценки/предметы/foundation открыты',[x['source'] for x in cred] or [u['links'].get('international') or u['links']['admissions']]),
 'exams':field('partial',{'satPolicy':u.get('academics',{}).get('sat',{}).get('policy'),'scope':'Прочитанные правила применяются только к их категории/циклу; остаточные исключения открыты'},[x['source'] for x in e if x['topic'] in ('sat-act','english','international-first-year-admission','international-admission-english')]),
 'cost':field('conflict' if c.get('status')=='conflict' else 'partial' if c.get('academicYear') else 'unknown',{'status':c.get('status'),'academicYear':c.get('academicYear'),'limitation':'Год/период/категория и полный состав проверяются; прошлогоднее не current2027'},[c.get('source')]),
 'awards':field('conflict' if fr.get('status')=='conflict' else 'partial' if fr.get('available') is not None or u['scholarships'].get('merit') else 'unknown',{'namedLargest':fr.get('name'),'limitation':'Ключевые merit/need программы, ограничения, renewal/stacking и сроки ещё исследуются'},[fr.get('source')]+[x.get('source') for x in u['scholarships'].get('merit',[])]),
 'photo':field('confirmed' if p.get('installed') else 'partial' if p else 'unknown',{'installed':bool(p.get('installed')),'permission':p.get('permission'),'remaining':None if p.get('installed') else 'Подтверждение точного кампуса FIU' if u['id']=='florida-international-university' and p.get('downloaded') else 'Визуальная проверка/кампус/кредиты/лицензия/оптимизация/загрузка' if p else 'Кандидаты найдены в Commons, но страницы файлов недоступны: автор, лицензия и изображение не проверены' if photo_attempts else 'Найти и проверить подходящий Commons-файл'},[p.get('filePage')]+[x['source'] for x in photo_attempts])}
 out.append(dict(order=order,id=u['id'],name=u['name'],batch=(order-1)//10+1,status='in-progress',fields=fields))
p=ROOT/'research/us-expansion-50-completion-matrix.json'
p.write_text(json.dumps(dict(base='a8d5be9184207ed2eb2712f5b51a0850e1661f31',branch='codex/us50-completion',status='in-progress',entries=out),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Completion matrix:50 profiles,8 evidence-linked blocks each; no mass complete status')
