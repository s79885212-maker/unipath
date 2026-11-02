"""Evidence-linked completion matrix; unknown is never a completed research task."""
import json,pathlib,collections
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
 'admission':field('partial' if u['admissions'].get('documents') else 'unknown','Проверенные общие документы показаны; цикл, сборы и исключения остаются отдельными вопросами' if u['admissions'].get('documents') else 'Текущий полный checklist недоступен; прочитанный URL не означает проверку скрытого содержимого',[u['links']['admissions']]),
 'uzbekDocuments':field('partial' if u['id'] in ('university-of-wisconsin-madison','pennsylvania-state-university-university-park') else 'unknown','Общие документы не доказывают точное соответствие аттестата/академического лицея; оценки/предметы/foundation открыты',[x['source'] for x in cred] or [u['links'].get('international') or u['links']['admissions']]),
 'exams':field('partial',{'satPolicy':u.get('academics',{}).get('sat',{}).get('policy'),'scope':'Прочитанные правила применяются только к их категории/циклу; остаточные исключения открыты'},[x['source'] for x in e if x['topic'] in ('sat-act','english','international-first-year-admission','international-admission-english')]),
 'cost':field('conflict' if c.get('status')=='conflict' else 'partial' if c.get('academicYear') else 'unknown',{'status':c.get('status'),'academicYear':c.get('academicYear'),'limitation':'Год/период/категория и полный состав проверяются; прошлогоднее не current2027'},[c.get('source')]),
 'awards':field('conflict' if fr.get('status')=='conflict' else 'partial' if fr.get('available') is not None or u['scholarships'].get('merit') else 'unknown',{'namedLargest':fr.get('name'),'limitation':'Ключевые merit/need программы, ограничения, renewal/stacking и сроки ещё исследуются'},[fr.get('source')]+[x.get('source') for x in u['scholarships'].get('merit',[])]),
 'photo':field('confirmed' if p.get('installed') else 'partial' if p else 'unknown',{'installed':bool(p.get('installed')),'permission':p.get('permission'),'remaining':None if p.get('installed') else 'Подтверждение точного кампуса FIU' if u['id']=='florida-international-university' and p.get('downloaded') else 'Визуальная проверка/кампус/кредиты/лицензия/оптимизация/загрузка' if p else 'Кандидаты найдены в Commons, но страницы файлов недоступны: автор, лицензия и изображение не проверены' if photo_attempts else 'Найти и проверить подходящий Commons-файл'},[p.get('filePage')]+[x['source'] for x in photo_attempts])}
 # Research state is separate from public truth status. A partial review never
 # certifies an entire profile, a catalogue or all scholarship possibilities.
 def review(key,state,scope,remaining,urls=None,pending=None):
  fields[key]['review']=dict(state=state,checked='2026-11-02',scope=scope,remaining=remaining,
      evidence=list(dict.fromkeys(urls if urls is not None else fields[key]['evidence'])),
      unfinishedResearch=pending or [])
 uid=u['id'];docs=u['admissions'].get('documents') or [];fee=u['admissions'].get('applicationFee') or {}
 all_e=[x for x in sources if x['id']==uid]
 read_urls=[x['source'] for x in e]
 failed_urls=[x['source'] for x in all_e if x['access'] not in ('html-read','pdf-read','commons-file-page-and-image-reviewed')]
 review('programmes','verified-partial','Именованные bachelor majors и категория/кампус в programEvidence; полный каталог не требуется',
   ['Список остаётся partial; отсутствие тега не доказывает отсутствие программы'],
   pending=['FIU: дополнить основные business/math majors после отдельного подтверждения кампуса и first-year route'] if uid=='florida-international-university' else [])
 if u.get('englishTaughtPrograms'):
  review('language','verified-partial','Официальная политика применена только к точным именованным программам',
      ['Другие направления не наследуют подтверждённый язык автоматически'])
 else:
  review('language','reviewed-not-found','Ограниченный поиск официальной политики языка кампуса/внесённых bachelor majors; метод и границы в us50-review-method.md',
      ['В прочитанных источниках применимое утверждение не установлено; это не доказательство неанглийского обучения'],
      read_urls,pending=['Проверить физическую страницу найденного официального Auburn exchange PDF; без неё язык не назначен'] if uid=='auburn-university' else ['Дальнейшая проверка programme-level syllabus/official catalogue language при появлении доступного источника'])
 review('admission','verified-partial' if docs else 'source-unavailable',
   'Общие international first-year документы, без вывода о пригодности конкретного школьного документа',
   (['Полный актуальный checklist не прочитан'] if not docs else [])+
   (['Актуальная сумма application fee не установлена'] if fee.get('amount') is None else [])+
   ['Всеобщие Fall2027 даты нельзя вывести из ежегодного правила; исключения конкретных программ остаются отдельными'],
   read_urls if docs else failed_urls,pending=['Восстановить доступ к checklist Pitt/UTD'] if not docs else [])
 named=uid in ('university-of-wisconsin-madison','pennsylvania-state-university-university-park')
 review('uzbekDocuments','verified-partial' if named else 'source-unavailable' if uid in ('university-of-illinois-chicago','university-at-buffalo','university-of-pittsburgh','university-of-texas-at-dallas') else 'reviewed-not-found',
    'Назван школьный документ' if named else 'Проверены применимые общие international first-year инструкции и поиск Uzbekistan/Attestat/academic lyceum; не graduate equivalence',
    ['Точный диплом академического лицея, оценка/предметные минимумы и необходимость foundation не установлены']+
    (['PennState: согласование опубликованных years9–12 с 11-летней школой не установлено'] if uid=='pennsylvania-state-university-university-park' else [])+
    ([] if named else ['Точное признание узбекского аттестата не подтверждено']),
    fields['uzbekDocuments']['evidence'],pending=['Точное соответствие не закрыто общими правилами; нужна доступная официальная country-specific инструкция'])
 exam_conflict=any((u.get('english',{}).get(k) or {}).get('status')=='conflict' for k in ('ielts','toefl','duolingo'))
 review('exams','conflict' if exam_conflict else 'verified-partial' if u.get('academics',{}).get('sat',{}).get('policy') else 'source-unavailable',
   'Политика SAT/ACT и English только в подтверждённой категории; статистика не минимум',
   ['Mines TOEFL new-scale: вступительный текст4.5 против таблицы4.0; минимум не выбран'] if exam_conflict else ['Школьная система, отдельные программы, waivers и действительность набора ограничивают применимость'],
   read_urls)
 cs=c.get('status')
 cost_state='conflict' if cs=='conflict' else 'not-published-for-cycle' if cs=='not-published' else 'reviewed-not-found' if cs=='not-checked' else 'verified-partial' if c.get('academicYear') else 'source-unavailable'
 review('cost',cost_state,'Отдельная опубликованная категория, период и состав; полная стоимость не выводится из tuition/I20/семестра',
    ['Официальный конфликт не разрешён; бюджетное совпадение исключено'] if cs=='conflict' else
    ['Запрошенный цикл не опубликован в проверенном источнике'] if cs=='not-published' else
    ['Нужен год недатированной международной таблицы; суммы не установлены как годовая стоимость набора'] if cs=='not-checked' else
    ['Таблица стоимости недоступна; альтернативный официальный документ не подтвердил сумму'] if not c.get('academicYear') else
    ['Последний подтверждённый год сохраняет previous-cycle; 2027–28 и отсутствующие insurance/travel/programme суммы не выдуманы'] if cs=='previous-cycle' else
    ['Опубликованная оценка/tuition сохраняет ограничения состава, периода и кампуса'],
    [c.get('source')] if c.get('source') else failed_urls)
 merit=u['scholarships'].get('merit') or []
 award_conflict=fr.get('status')=='conflict' or uid=='rutgers-university-camden'
 fields['awards']['status']='conflict' if award_conflict else fields['awards']['status']
 review('awards','conflict' if award_conflict else 'verified-partial' if merit or fr.get('name') else 'source-unavailable' if uid in ('university-of-pittsburgh','university-of-california-irvine','brigham-young-university','university-of-texas-at-dallas','university-of-the-pacific') else 'reviewed-not-found',
   'Применимость к international first-year и отдельной награде; автоматическое рассмотрение не гарантирует получение',
   (['Крупнейшая применимая награда не установлена'] if not fr.get('name') else [])+
   ['Сумма/покрытие, renewal, stacking и цикл сверяются отдельно по каждой награде; недоказанные условия остаются в примечаниях'],
   fields['awards']['evidence']+([x['source'] for x in all_e if 'award' in x['topic']]),
   pending=['Продолжить индивидуальную проверку named largest award и условий; generic merit не закрывает этот пункт'] if not fr.get('name') else [])
 review('photo','verified','Установленные main/thumb, индивидуальный review кампуса, автора и свободной лицензии',
   [],fields['photo']['evidence'])
 out.append(dict(order=order,id=uid,name=u['name'],batch=(order-1)//10+1,status='in-progress',fields=fields))
p=ROOT/'research/us-expansion-50-completion-matrix.json'
summary={key:dict(collections.Counter(row['fields'][key]['review']['state'] for row in out)) for key in fields}
gaps=dict(languageUnconfirmed=sum(not byid[t['id']].get('englishTaughtPrograms') for t in targets),
 generalDocumentsUnavailable=sum(not byid[t['id']]['admissions'].get('documents') for t in targets),
 applicationFeeUnknown=sum(byid[t['id']]['admissions']['applicationFee'].get('amount') is None for t in targets),
 costConflicts=sum(byid[t['id']].get('costs',{}).get('status')=='conflict' for t in targets),
 costWithoutYear=sum(not byid[t['id']].get('costs',{}).get('academicYear') for t in targets),
 namedLargestNotEstablished=sum(not byid[t['id']]['scholarships']['fullRide'].get('name') for t in targets),
 exactUzbekQualificationIncomplete=50,photoMissing=sum(not photos[t['id']].get('installed') for t in targets))
p.write_text(json.dumps(dict(base='b64829dde48fb6034597b5342e29b152da65dc13',branch='codex/us50-completion',status='in-progress',
 reviewed='2026-11-02',method='research/us50-review-method.md',summary=summary,gaps=gaps,entries=out),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Completion matrix:50 profiles,8 evidence-linked blocks each; no mass complete status')
