"""Conservative writers for approved USA +50 batches, using reviewed evidence.

No web fetching, credential equivalence, automatic language, ranking or price
inference takes place here. Only the selected batch's non-baseline IDs may change.
"""
import json,pathlib,re
from ca50_gaps import load,save
from us200 import R,test,fee,eng,toefl,costs
from us200_std import L,flush
from newrec import nice
ROOT=pathlib.Path(__file__).resolve().parent.parent
DAY='2026-10-31'
TARGETS=json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))
EVIDENCE=json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
UNKNOWN=L('Not checked: exact Uzbek Attestat and academic lyceum diploma equivalence, grade and subject thresholds and any foundation requirement remain unconfirmed. General international instructions do not guarantee eligibility.',
          'Не проверено: точное соответствие узбекского аттестата и диплома академического лицея, пороги оценок и предметов и необходимость подготовительного обучения не подтверждены. Общие международные инструкции не гарантируют право поступления.')
PARTIAL=L('Only the named bachelor programmes have been verified. The list is partial; an unlisted field may still exist. Programme language has not been confirmed from an explicit statement.',
          'Проверены только указанные программы бакалавриата. Список частичный; отсутствующее направление может существовать. Язык программ не подтверждён отдельным явным указанием.')
FY=L('International first-year bachelor applicants','Иностранные абитуриенты первого курса бакалавриата')
GAPS=L('Remaining application, 2027–2028 cost, award coverage/renewal, institutional history and photo/licence fields require further research unless explicitly confirmed below.',
       'Оставшиеся поля заявки, стоимости 2027–2028, покрытия и продления стипендий, истории учреждения и фотографии/лицензии ещё исследуются, если ниже нет явного подтверждения.')
ANNUAL=L('Recurring date; the reviewed source does not establish the entry year. It is not a confirmed upcoming deadline for Fall 2027.',
         'Ежегодный срок; проверенный источник не устанавливает год поступления. Это не подтверждённый ближайший дедлайн набора осени 2027.')

def src(uid,topic):
    return next(s for s in EVIDENCE if s['id']==uid and s['topic']==topic)

def record(uid,city,ru_city,state,website,admission_topic='international-first-year-admission'):
    t=next(t for t in TARGETS if t['id']==uid)
    a=src(uid,admission_topic);p=src(uid,'programs')
    assert a['access']=='html-read' and p['access']=='html-read'
    fields=p['facts']['programs']
    r=R(uid,t['name'],t['name'],L(city,ru_city),state,'university',None,
      L('This profile covers the named campus and the undergraduate programmes supported by the linked official evidence. Unverified information remains explicitly open.',
        'Профиль относится к указанному кампусу и программам бакалавриата, подтверждённым официальными источниками по ссылкам. Непроверенные сведения явно оставлены открытыми.'),
      list(fields),dict(website=website,admissions=a['source'],international=a['source'],programs=p['source']),verified=DAY,
      aliases=t['aliases'],programsBasis='evidence',programNote=PARTIAL,checked=[L('Named bachelor programme and available official admission instructions.','Указанная программа бакалавриата и доступные официальные инструкции приёма.')],unconfirmed=[UNKNOWN,PARTIAL,GAPS])
    r.update(programsStatus='partial',englishTaught=None,languageOfInstruction=None,englishTaughtPrograms=[],
      programEvidence={f:dict(program=n,level='bachelor',language=None,campus=city,url=p['source'],checked=DAY) for f,n in fields.items()})
    r['academics']['internationalQualifications']=UNKNOWN
    r['admissions']['notes']=[UNKNOWN]
    r['sources']=[]
    for s in EVIDENCE:
      if s['id']==uid and s['access']=='html-read' and not any(x['url']==s['source'] for x in r['sources']):
        r['sources'].append(dict(label=L('Official university page','Официальная страница университета'),url=s['source']))
    return r

def policy(r,p,note,topic='international-first-year-admission',cycle=None):
    s=src(r['id'],topic)
    for key in ('sat','act'):r['academics'][key]=test(p,note,cycle=cycle,source=s['source'],verified=DAY)

def application_fee(r,amount,note,waiver=None,topic='international-first-year-admission'):
    r['admissions']['applicationFee']=fee(amount,note,src(r['id'],topic)['source'],DAY,waiver_intl=waiver)

def english(r,ielts=None,pre=None,post=None,det=None,note=None,topic='international-first-year-admission'):
    r['english'].update(ielts=eng(ielts,note=note),toefl=toefl(pre,post,note),duolingo=eng(det,note=note),
       note=note,detailsSource=src(r['id'],topic)['source'],detailsVerified=DAY)

def event(r,name,kind,date,topic='international-first-year-admission',binding=None,cycle_quote=None,note=None,award=None):
    s=src(r['id'],topic);assert s['access']=='html-read'
    confirmed=cycle_quote is not None
    if confirmed:assert '2027' in cycle_quote
    d=dict(name=name,kind=kind,date=nice(date) if confirmed else date,dateISO=date if confirmed else None,
      entryTerm='Autumn' if confirmed else None,entryYear='2027' if confirmed else None,status='confirmed' if confirmed else 'annual-rule',
      binding=binding,source=s['source'],verified=DAY,appliesTo=FY,note=note if confirmed else note or ANNUAL)
    d['cycleEvidence']=dict(basis='page-context' if confirmed else 'annual-rule',source=s['source'],verified=DAY,
      entryTerm=d['entryTerm'],entryYear=d['entryYear'])
    if confirmed:d['cycleEvidence']['quote']=cycle_quote
    if award:d.update(awardId=award,awardCategory='merit')
    r['admissions']['deadlines'].append(d)
    return d

def finish(records,batch,annual=None):
    wanted={t['id'] for t in TARGETS[(batch-1)*10:batch*10]}
    assert len(records)==10 and {r['id'] for r in records}==wanted
    rp=ROOT/'research/us-expansion-50-registry.json';registry=json.loads(rp.read_text(encoding='utf-8'))
    assert not wanted.intersection(registry['baselineIds'])
    path=str(ROOT/'data/universities.us3.js');head,old,tail=load(path)
    old=[r for r in old if r['id'] not in wanted]
    save(head,old+records,tail,path)
    for e in registry['entries'][(batch-1)*10:batch*10]:
      e.update(implementationStatus='draft-profile-added',researchStatus='in-progress')
      e['topics']['programs']='verified-partial-language-unconfirmed'
      e['topics']['uzbekistan']='exact-qualification-not-confirmed'
      e['topics']['photo']='not-yet-researched-placeholder'
      e['unresolved']=['Programme coverage/instruction language','Exact Uzbek qualifications/conditions','Remaining costs/awards/history','Campus photograph/licence']
    rp.write_text(json.dumps(registry,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    if annual:
      p=ROOT/'data/match.js';s=p.read_text(encoding='utf-8');lines=[]
      for uid,c in annual.items():
        assert uid in wanted
        line='    '+json.dumps(uid)+': '+json.dumps(c,ensure_ascii=False)+','
        existing=re.search(r'^\s*[\'"]'+re.escape(uid)+r'[\'"]\s*:.*$',s,re.M)
        if existing:
          assert existing.group(0).strip()==line.strip(), 'Existing budget changed; review manually: '+uid
        else:lines.append(line)
      if lines:
        marker='\n  annualCost: {\n';assert marker in s
        s=s.replace(marker,marker+'\n    /* Approved USA +50, reviewed academic-year estimates */\n'+'\n'.join(lines)+'\n',1)
        p.write_text(s,encoding='utf-8')
    flush();print('Batch',batch,': ten scoped profiles; unresolved evidence retained')
