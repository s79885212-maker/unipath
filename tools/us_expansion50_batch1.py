"""First approved ten: publish only reviewed facts, preserve explicit gaps.

Evidence: research/us-expansion-50-sources.json. Idempotent append, never replace
an existing university or put previous-cycle costs in the budget table.
"""
import copy, json, pathlib
from ca50_gaps import load, save
from us200 import R, test, eng, toefl, fee, costs
from us200_std import L, flush

ROOT=pathlib.Path(__file__).resolve().parent.parent
DAY='2026-10-31'
evidence=json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
targets=json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))[:10]
registry_path=ROOT/'research/us-expansion-50-registry.json'
registry=json.loads(registry_path.read_text(encoding='utf-8'))
PATH=str(ROOT/'data/universities.us3.js')
head, old, tail=load(PATH)
batchids={t['id'] for t in targets}
baseline=set(registry['baselineIds'])
assert not (batchids & baseline), 'Approved batch must not replace a baseline institution'
# Regenerate this batch only; all baseline and other-batch records are retained.
old=[r for r in old if r['id'] not in batchids]
oldids={r['id'] for r in old}
UNKNOWN=L('Not checked: exact Uzbek Attestat and academic lyceum diploma equivalence, grades, subjects and any preparatory study have not been established. General international instructions do not confirm eligibility.',
          'Не проверено: точное соответствие узбекского аттестата и диплома академического лицея, оценки, предметы и необходимость подготовительного обучения не установлены. Общие международные инструкции не подтверждают пригодность документов.')
PROGRAM_NOTE=L('Partial programme list: only the named undergraduate major was verified. Missing fields do not mean that a programme is absent. The language of this programme has not been independently confirmed.',
               'Список направлений частичный: проверена только указанная программа бакалавриата. Отсутствие направления не означает отсутствия программы. Язык этой программы отдельно не подтверждён.')
PREVIOUS=L('Previous available cost year: 2026–2027. These figures are not confirmed prices for Fall 2027 entrants or 2027–2028 and are not used to confirm a budget match. Competitive scholarships have not been deducted.',
           'Последний проверенный год стоимости — 2026–2027. Эти суммы не подтверждают цены для поступающих осенью 2027 или на 2027–2028 и не используются для подтверждения бюджетного совпадения. Конкурсные стипендии не вычтены.')
ANNUAL=L('The official page states a recurring date without establishing the entry cycle. No year or time zone has been inferred from the date of this review.',
         'Официальная страница указывает ежегодный срок, но не устанавливает набор. Год и часовой пояс не выведены из даты просмотра.')
FY=L('International first-year bachelor applicants','Иностранные абитуриенты первого курса бакалавриата')
ADMISSION=L('Admission application','Заявка на поступление')
DOCS=L('Required documents','Обязательные документы')
PHOTO_GAP=L('Campus photograph and free licence have not yet been verified; a placeholder is shown.',
            'Фотография кампуса и свободная лицензия пока не проверены; показана заглушка.')

def source(uid,topic):
    return next(r for r in evidence if r['id']==uid and r['topic']==topic and r['access']=='html-read')

def event(name, kind, date, src, confirmed=False, binding=None, award=None, time=None, zone=None):
    row=dict(name=name,kind=kind,entryTerm='Autumn' if confirmed else None,entryYear='2027' if confirmed else None,
             dateISO=date if confirmed else None,date=date,status='confirmed' if confirmed else 'annual-rule',binding=binding,
             appliesTo=FY,source=src['source'],verified=DAY,note=None if confirmed else ANNUAL)
    if confirmed:
        cycle_quote={
            'uc-system-fall-2027-dates':'fall 2027 applicants.',
            'international-first-year-admission':'January 15, 2027',
            'international-awards':'The King-Morgridge Scholarship application for Fall 2027',
            'admission-deadlines':'Fall/September 2027'
        }[src['topic']]
        row['cycleEvidence']=dict(basis='page-context',entryTerm='Autumn',entryYear='2027',source=src['source'],verified=DAY,quote=cycle_quote)
    else:
        row['cycleEvidence']=dict(basis='annual-rule',entryTerm=None,entryYear=None,source=src['source'],verified=DAY)
    if time: row['time']=time
    if zone: row['timezone']=zone
    if award: row.update(awardId=award,awardCategory='merit')
    return row

def policy(r, topic, p, note, cycle=None):
    src=source(r['id'],topic)['source']
    for key in ('sat','act'):
        r['academics'][key]=test(p,note,cycle=cycle,source=src,verified=DAY)

def english(r, topic, ielts=None, pre=None, post=None, det=None, note=None):
    s=source(r['id'],topic)
    r['english'].update(ielts=eng(ielts,note=note),toefl=toefl(pre,post,note),
                         duolingo=eng(det,note=note),note=note,detailsSource=s['source'],detailsVerified=DAY)

def historical_cost(r,topic,items,total=None,hi=None,billed=None,note=None):
    s=source(r['id'],topic)
    headline=L('2026–2027 published cost reference — not a 2027–2028 quote',
               'Опубликованный ориентир стоимости 2026–2027 — не цена на 2027–2028')
    c=costs('2026–2027',s['source'],DAY,FY,items,headline,headline,PREVIOUS,
            billed=billed,budget=total,budget_max=hi,status='previous-cycle',note=L(
                str(PREVIOUS)+' '+note[0],str(PREVIOUS.ru)+' '+note[1]) if note else PREVIOUS)
    c['period']='year'; r['costs']=c; r['links']['cost']=s['source']

# A short description states the verified admission/programme scope, not a
# guessed institutional history, ranking, comprehensive language or aid promise.
configs=[
('Davis','California','https://www.ucdavis.edu/','international-admission','program-computer-science','Computer Science, Bachelor of Science'),
('Irvine','California','https://www.uci.edu/','catalogue-admission-currency','program-computer-science','Computer Science, B.S.'),
('Urbana-Champaign','Illinois','https://illinois.edu/','international-admission-english','program-computer-science','Computer Science, BS'),
('Austin','Texas','https://www.utexas.edu/','international-first-year-admission','program-computer-science','BS Computer Science / BSA Computer Science'),
('Madison','Wisconsin','https://www.wisc.edu/','international-documents','program-computer-science','Computer Sciences, BS'),
('New Brunswick','New Jersey','https://newbrunswick.rutgers.edu/','international-english-and-records','program-computer-science','Computer Science, BS'),
('Santa Barbara','California','https://www.ucsb.edu/','international-admission','program-computer-science','Computer Science — College of Engineering'),
('Athens','Georgia','https://www.uga.edu/','international-first-year-admission','program-computer-science','Computer Science, BS'),
('Blacksburg','Virginia','https://www.vt.edu/','international-first-year-application','program-computer-science','Computer Science — General Engineering entry'),
('University Park','Pennsylvania','https://www.psu.edu/','international-first-year-requirements','program-computer-science','Computer Science, B.S. — University Park ending campus')]
new=[]
for target, cfg in zip(targets,configs):
    uid=target['id']; city,state,website,adm_topic,pr_topic,degree=cfg
    assert uid not in oldids, 'Already added: '+uid
    adm=source(uid,adm_topic); pr=source(uid,pr_topic)
    desc=L('Verified undergraduate programme: '+degree+'. Admission details below distinguish first-year applicants from transfer students; unverified conditions remain open.',
           'Проверенная программа бакалавриата: '+degree+'. Ниже разделены условия для первого курса и перевода; непроверенные условия остаются открытыми.')
    ru_city={'Davis':'Дейвис','Irvine':'Ирвайн','Urbana-Champaign':'Урбана-Шампейн','Austin':'Остин','Madison':'Мэдисон',
             'New Brunswick':'Нью-Брансуик','Santa Barbara':'Санта-Барбара','Athens':'Атенс','Blacksburg':'Блэксберг','University Park':'Юниверсити-Парк'}[city]
    r=R(uid,target['name'],target['name'],L(city,ru_city),state,'university',None,desc,['computer-science'],
        dict(website=website,admissions=adm['source'],international=adm['source'],programs=pr['source']),
        verified=DAY,programsBasis='evidence',programNote=PROGRAM_NOTE,aliases=target['aliases'],
        checked=[L('Official first-year instructions and named undergraduate programme read; scope limitations retained.',
                   'Прочитаны официальные инструкции первого курса и указанная программа бакалавриата; ограничения области сохранены.')],
        unconfirmed=[UNKNOWN,PROGRAM_NOTE,PHOTO_GAP,L('Complete programme catalogue, 2027–2028 costs and remaining award/renewal conditions are still under review.',
                   'Полный каталог программ, цены 2027–2028 и оставшиеся условия стипендий и продления ещё проверяются.')])
    # R's older default would claim all verified fields are English-taught.
    r.update(englishTaught=None,languageOfInstruction=None,englishTaughtPrograms=[],programsStatus='partial',
             programEvidence={'computer-science':dict(program=degree,level='bachelor',language=None,campus=city,url=pr['source'],checked=DAY)})
    r['academics']['internationalQualifications']=UNKNOWN
    r['photos']['note']=PHOTO_GAP
    r['admissions']['notes'].append(UNKNOWN)
    read=[s for s in evidence if s['id']==uid and s['access']=='html-read']
    r['sources']=[]
    for s in read:
        if any(a['url']==s['source'] for a in r['sources']): continue
        r['sources'].append(dict(label=L('Official university page','Официальная страница университета'),url=s['source']))
    new.append(r)

for r in new:
    ident=source(r['id'],'identity-history')['facts']
    r['founded']=ident['founded']
    r['verification']['checked'].append(L('Official institutional history; predecessor and campus milestones kept distinct.',
                                         'Официальная история учреждения; предшественники и этапы кампуса разделены.'))
    if ident['type']:
        r['type']=L('Public university','Государственный университет')
    if r is new[6]:
        r['type']=L('Public university','Государственный университет')
        r['admissions']['notes'].append(L('Institutional history traces a predecessor to1891; joined UC in1944, moved to Goleta in1954 and became a general UC campus in1958. No single founding year is inferred.',
            'История учреждения восходит к предшественнику1891года; вступило в UC в1944, переехало в Голета в1954 и стало общим кампусом UC в1958. Единый год основания не выведен из этих этапов.'))

for index,r in enumerate(new):
    uid=r['id']; dates=r['admissions']['deadlines']
    if index in (0,1,6):
        src=source(uid,'uc-system-fall-2027-dates')
        dates.extend([event(ADMISSION,'RD','2026-11-30',src,True),event(DOCS,'documents','2027-07-01',src,True)])
        r['admissions']['platforms']=['University of California application']
        fee_src=source(uid,'uc-system-international-fee')
        r['admissions']['applicationFee']=fee(95,L('USD 95 per campus for international and non-immigrant applicants. Non-refundable. Ordinary waivers require US citizenship, permanent residence or AB540 eligibility.',
            '95 USD за кампус для иностранных абитуриентов и неиммигрантов. Без возврата. Обычная льгота требует гражданства США, постоянного резидентства или права по AB540.'),fee_src['source'],DAY)
        topic='sat-act' if index==0 else 'uc-system-sat-act'
        policy(r,topic,'not-used',L('SAT and ACT are not considered for admission or scholarship selection. Separate eligibility or placement uses do not make them admission requirements.',
               'SAT и ACT не учитываются при отборе на поступление и стипендии. Отдельное использование для выполнения условий или распределения по курсам не делает их вступительным требованием.'))
        if index==6:
            english(r,'english',6.5,80,4.5,115,L('IELTS Academic; no One Skill Retake. TOEFL: 80 on the old scale or 4.5 on the new scale; no MyBest. Digital SAT Reading/Writing is not an approved English-proficiency alternative.',
                    'IELTS Academic; One Skill Retake не принимается. TOEFL: 80 по старой шкале или 4,5 по новой; MyBest не принимается. Digital SAT Reading/Writing не является утверждённой заменой подтверждения английского.'))
        else:
            r['english']['note']=L('UC system English-proficiency floor: IELTS 6.5, TOEFL 80 (old scale) or 4.5 (new scale). Campus-specific requirements have not been settled; these are not entered as confirmed campus minima.',
                'Общесистемный порог UC: IELTS 6,5, TOEFL 80 по старой шкале или 4,5 по новой. Требования конкретного кампуса не установлены; эти баллы не внесены как подтверждённые минимумы кампуса.')
        if index==0:
            historical_cost(r,'cost',[],88279,note=('Published nonresident residence-hall total already includes the USD39,270 supplement; three quarters, September–June. Other housing options have different totals; itemised lines still need transcription.',
                'Опубликованный итог для нерезидента в общежитии уже включает доплату 39 270 USD; три четверти, сентябрь–июнь. У других вариантов жилья другие суммы; детализация строк ещё не перенесена.'))
    elif index==2:
        s=source(uid,'admission-deadlines')
        for name,date,doc in [('Early Action','1 November','7 November'),('Regular Decision','5 January','11 January')]:
            dates.extend([event(name,'EA' if 'Early' in name else 'RD',date,s,binding=False if 'Early' in name else None,time='23:59',zone='America/Chicago'),event(DOCS+' — '+name,'documents',doc,s,time='23:59',zone='America/Chicago')])
        policy(r,'sat-act-first-year-faq','optional',L('First-year SAT/ACT optional for all majors, including international applicants and merit/honours consideration. The standing FAQ does not name a SAT-policy intake year.',
            'SAT/ACT необязательны на первом курсе для всех направлений, включая иностранцев и рассмотрение на merit-стипендии и honours. Страница не называет год набора для этой политики.'))
        english(r,'first-year-english-scope',note=L('No first-year numerical minimum established. IELTS 7.5 with 6.5 sections, TOEFL100/5.0 and DET130 on this source apply to TRANSFER applicants, not first-year. No IELTS General, One Skill Retake or TOEFL MyBest.',
            'Числовой минимум для первого курса не установлен. IELTS 7,5 с разделами 6,5, TOEFL100/5,0 и DET130 в этом источнике относятся к ПЕРЕВОДУ, а не первому курсу. IELTS General, One Skill Retake и TOEFL MyBest не принимаются.'))
        r['scholarships']['needBased']['availableToInternational']=False
        r['scholarships']['needBased']['note']=L('International students are not eligible for need-based aid described here. Limited ISSS scholarships/loans may exist; international eligibility for the listed large merit awards has not yet been confirmed.',
            'Иностранцы не имеют права на описанную здесь помощь по финансовой нуждаемости. Возможны ограниченные стипендии и займы ISSS; доступность перечисленных крупных merit-стипендий для иностранцев пока не подтверждена.')
        historical_cost(r,'cost',[(L('Tuition and fees','Обучение и сборы'),{'min':42248,'max':53078},'billed'),('Housing and food',15858,'estimate'),('Books and supplies',1200,'estimate'),('Other expenses',2840,'estimate')],62146,72976,
            note=('International published range varies with major, housing and lifestyle; it is not a conflict of official sources.','Опубликованный международный диапазон зависит от направления, жилья и расходов; это не конфликт официальных источников.'))
    elif index==3:
        s=source(uid,'international-first-year-admission')
        for name,date,doc in [('Early Action','2026-10-15','2026-10-22'),('Regular Decision','2026-12-01','2026-12-10')]:
            dates.extend([event(name,'EA' if 'Early' in name else 'RD',date,s,True),event(DOCS+' — '+name,'documents',doc,s,True)])
        r['admissions']['platforms']=['Common Application']
        r['admissions']['applicationFee']=fee(90,L('International application fee; non-refundable and no international fee waiver.','Международный сбор; без возврата и без освобождения иностранных абитуриентов.'),s['source'],DAY,waiver_intl=False)
        policy(r,'international-first-year-admission','required',L('First-year applicants must provide SAT or ACT; the official page also accepts CLT. No SAT essay, ACT writing/science or SAT Subject Tests required.',
            'На первый курс требуется SAT или ACT; официальная страница также принимает CLT. SAT essay, ACT writing/science и SAT Subject Tests не требуются.'),'Fall 2027')
        r['admissions']['recommendations']=L('Up to two optional recommendations.','До двух необязательных рекомендаций.')
        historical_cost(r,'cost',[(L('Tuition','Обучение'),{'min':42554,'max':51106},'billed'),('Housing and food',{'min':15420,'max':15580},'estimate'),('Transportation',1840,'estimate'),('Books and supplies',724,'estimate'),('Personal expenses',3666,'estimate')],64204,72916,
            note=('Nonresident full-time undergraduate reference, fall and spring; verify programme-specific rates and international insurance separately.','Ориентир нерезидента бакалавриата с полной нагрузкой, осень и весна; ставки конкретной программы и международную страховку нужно проверять отдельно.'))
    elif index==4:
        s=source(uid,'admission-deadlines')
        for name,date,doc in [('Early Action','1 November','9 November'),('Regular Decision','15 January','22 January')]:
            dates.extend([event(name,'EA' if 'Early' in name else 'RD',date,s,binding=False if 'Early' in name else None,time='23:59',zone='America/Los_Angeles'),event(DOCS+' — '+name,'documents',doc,s,time='23:59',zone='America/Los_Angeles')])
        policy(r,'sat-act-cycle','optional',L('Optional through Spring 2028, including Fall 2027. Official scores only if submitted; no superscoring. Scholarships do not require submission; English proficiency remains separate.',
            'Необязательно до Spring 2028 включительно, в том числе Fall 2027. При подаче нужны официальные баллы; superscoring нет. Для стипендий подача не обязательна; английский проверяется отдельно.'),'Fall 2027')
        english(r,'first-year-english-minima',6.5,80,4.5,115,L('English examination required unless English was the primary language of instruction in all four years of secondary school. TOEFL changes scale on 21 January 2026.',
            'Экзамен по английскому требуется, если английский не был основным языком обучения все четыре года средней школы. Шкала TOEFL меняется 21 января 2026.'))
        s=source(uid,'international-awards')
        eligibility=L('King-Morgridge: competitive selection of six first-year scholars with financial need, leadership and a commitment to alleviate poverty. Eligibility depends on the COUNTRY OF THE SECONDARY SCHOOL awarding the qualification. Uzbekistan is not listed; Uzbek citizenship alone does not determine eligibility. No prior college/university study.',
            'King-Morgridge: конкурсный отбор шести первокурсников с финансовой нуждаемостью, лидерством и планом борьбы с бедностью. Право зависит от СТРАНЫ ШКОЛЫ, выдавшей документ. Узбекистана нет в списке; само узбекское гражданство не определяет право участия. Без предыдущего обучения в колледже или университете.')
        r['scholarships']['fullRide'].update(available=True,internationalEligible=True,basis='need-merit',name='King-Morgridge Scholars Program',id='king-morgridge',category='merit',entryTerm='Autumn',entryYear='2027',
            covers=dict(tuition=True,housing=True,meals=True,insurance=True,books=None),note=eligibility,
            renewable=L('Four years / eight full-time semesters; detailed GPA, credit and stacking conditions not yet verified.','Четыре года / восемь семестров полной нагрузки; точные условия GPA, кредитов и совместимости с другими awards пока не проверены.'),
            competitiveness=eligibility,howToApply=L('Early Action admission application plus a separate WiSH scholarship application.','Заявка на поступление Early Action и отдельная заявка на стипендию WiSH.'),source=s['source'],verified=DAY)
        dates.extend([event(L('King-Morgridge — Early Action application','King-Morgridge — заявка Early Action'),'admission','2026-11-01',s,True,False,'king-morgridge'),
                      event(L('King-Morgridge — WiSH application','King-Morgridge — заявка WiSH'),'scholarship','2026-11-15',s,True,award='king-morgridge')])
    elif index==5:
        s=source(uid,'admission-deadlines')
        dates.extend([event('Early Action','EA','2026-11-01',s,True,False),event('Regular Decision','RD','2026-12-01',s,True),event(L('Reply to offer','Ответ на предложение'),'reply','2027-05-01',s,True)])
        r['admissions']['platforms']=['Rutgers Application','Common Application']
        r['admissions']['applicationFee']=fee(70,L('Non-refundable application fee; described waiver routes do not establish a blanket international waiver.','Невозвратный сбор; описанные льготы не подтверждают общее освобождение иностранцев.'),source(uid,'first-year-policy-and-fee')['source'],DAY)
        policy(r,'first-year-policy-and-fee','optional',L('New Brunswick is test-optional through 2027. Newark and Camden have different policies and programme exceptions; their rules are not copied to this campus.',
            'New Brunswick — test-optional до 2027 включительно. У Newark и Camden другие политики и исключения для программ; их правила не перенесены в этот кампус.'),'Through 2027')
        english(r,'international-english-and-records',6.5,79,4.5,115,L('New Brunswick general thresholds. Pharmacy/Nursing require TOEFL100/5.5 and DET130. The source uses January21/January22 scale cutoffs; consult it for the exact test date. English-medium waiver is assessed individually.',
            'Общие пороги New Brunswick. Pharmacy/Nursing требуют TOEFL100/5,5 и DET130. Источник разделяет шкалы по 21/22 января; проверяйте его для точной даты теста. Освобождение после обучения на английском рассматривается индивидуально.'))
        historical_cost(r,'cost',[('Tuition',36831,'billed'),('Fees',4008,'billed'),('Housing and food',21943,'billed')],billed=62782,
            note=('New Brunswick nonresident on-campus billed example only, not full cost. F-1/J-1 SAF500, insurance, health services, books and travel/living extras are excluded. Newark/Camden totals differ.',
                  'Только пример счёта нерезидента с жильём в New Brunswick, не полная стоимость. Не включены SAF500 для F-1/J-1, страховка, медицинские услуги, книги, дорога и прочие расходы. У Newark/Camden другие суммы.'))
    elif index==7:
        s=source(uid,'admission-deadlines')
        for name,date,doc in [('Early Action','15 October','29 October'),('Regular Decision','1 January','15 January')]:
            dates.extend([event(name,'EA' if 'Early' in name else 'RD',date,s),event(DOCS+' — '+name,'documents',doc,s)])
        policy(r,'international-first-year-admission','required',L('SAT or ACT required for international first-year applicants under Board of Regents policy. Transfer-only English alternatives are not first-year admission minima.',
            'SAT или ACT требуются от иностранных первокурсников по правилам Board of Regents. Варианты английского для переводящихся не являются минимумами первого курса.'))
        english(r,'international-first-year-admission',note=L('The source reports admitted international students’ average IELTS7.5 and TOEFL102 for 2019–2023. These are statistics, not minimum requirements. Transfer-only IELTS6.5 is not used as the first-year minimum.',
            'Источник приводит средние IELTS7,5 и TOEFL102 принятых иностранцев за 2019–2023. Это статистика, а не минимальные требования. IELTS6,5 для перевода не использован как минимум первого курса.'))
        r['admissions']['documents']=[L('Final school records in English from every school attended; do not self-report grades. UGA calculates the GPA.',
            'Итоговые школьные документы на английском из каждой посещённой школы; не заполняйте оценки самостоятельно. GPA рассчитывает UGA.')]
    elif index==8:
        s=source(uid,'international-first-year-application')
        calendar=source(uid,'first-year-deadline-calendar')
        for name,date,doc in [('Early Action','15 November','1 December'),('Regular Decision','15 January','24 January')]:
            dates.extend([event(name,'EA' if 'Early' in name else 'RD',date,calendar),event(DOCS+' — '+name,'documents',doc,calendar)])
        r['admissions']['applicationFee']=fee(70,L('International undergraduate application fee.','Международный сбор за заявку на бакалавриат.'),s['source'],DAY)
        policy(r,'sat-act-cycle','optional',L('Test-optional for all first-year majors through Fall 2028; no-test applicants remain eligible for scholarships. English proficiency remains a separate requirement.',
            'Test-optional для всех направлений первого курса до Fall 2028 включительно; без теста можно участвовать в конкурсах стипендий. Английский остаётся отдельным требованием.'),'Through Fall 2028')
        english(r,'international-english-minima',6.5,None,4.5,note=L('IELTS6.5 with every section at least6.5; new-scale TOEFL4.5 with every section4.0. Source labels both old/new TOEFL rows as on/after January21,2026: the old-scale cutoff remains unresolved. VTLCI pathway is separate from direct entry.',
            'IELTS6,5 и каждый раздел не ниже6,5; TOEFL по новой шкале4,5 и каждый раздел4,0. Источник помечает обе строки TOEFL как после21января2026: граница старой шкалы не установлена. Подготовка VTLCI отделена от прямого поступления.'))
        r['admissions']['recommendations']=L('Ordinary recommendations are not considered. A letter explaining exceptional circumstances is a separate document.',
            'Обычные рекомендации не рассматриваются. Письмо об исключительных обстоятельствах — отдельный документ.')
    elif index==9:
        s=source(uid,'international-deadlines')
        dates.append(event('Early Action','EA','1 November',s))
        policy(r,'international-first-year-requirements','optional',L('General international first-year policy is optional, with scores required if used for English proof. Special combined-degree exceptions and a named Fall2027 policy cycle still need verification; no superscoring.',
            'Общая международная политика первого курса — optional; баллы нужны, если ими подтверждается английский. Исключения совмещённых программ и отдельный цикл Fall2027 ещё проверяются; superscoring нет.'))
        english(r,'international-first-year-requirements',6.5,80,4.5,120,L('IELTS Academic6.5; TOEFL80 before January21,2026 or4.5 from that date; DET120. No TOEFL MyBest. Language alternatives do not turn SAT/ACT into a general admission requirement.',
            'IELTS Academic6,5; TOEFL80 до21января2026 или4,5 начиная с этой даты; DET120. TOEFL MyBest не принимается. Языковые альтернативы не делают SAT/ACT общим требованием приёма.'))
        r['type']=L('Public university','Государственный университет')

# Country-specific documents supplement the general route, without turning a
# named final credential into a guaranteed admission/foundation equivalence.
for r in (new[4],new[9]):
    specific=source(r['id'],'uzbekistan-school-credentials')
    if r is new[4]:
        detail=L('Uzbekistan: current pupils submit official years8–10 transcripts and later the Attestat O’rta Ma’lumot To’g’risida Shahodtnoma (Certificate of Completed Upper Secondary Education); school graduates submit official years8–11 transcripts and that Attestat. Original documents and official English translation are required. Separate academic lyceum equivalence, minimum grades/subjects and any foundation requirement remain unconfirmed; this is not an admission guarantee.',
                 'Узбекистан: школьники подают официальные оценки за8–10классы, затем Attestat O’rta Ma’lumot To’g’risida Shahodtnoma (свидетельство о завершённом среднем образовании); выпускники — оценки за8–11классы и этот аттестат. Нужны оригиналы и официальный английский перевод. Соответствие диплома академического лицея, минимальные оценки/предметы и необходимость подготовки отдельно не подтверждены; это не гарантия поступления.')
    else:
        detail=L('Uzbekistan: first-year applicants self-report the last three years and current courses in STARS. After accepting an offer, the country page requests official years9–12 transcripts and Attestat o Srednem Obrazovanii, each with a separate line-by-line English translation. The page does not resolve how an 11-year school record or academic lyceum diploma is handled, or the exact grades, subjects and preparatory-study requirements; eligibility is not guaranteed.',
                 'Узбекистан: на первый курс самостоятельно указывают последние три года и текущие предметы в STARS. После принятия предложения страновая страница требует официальные оценки за9–12классы и Attestat o Srednem Obrazovanii, каждый с отдельным построчным английским переводом. Источник не объясняет обработку 11-летней школы или диплома академического лицея, точные оценки, предметы и необходимость подготовки; право поступления не гарантировано.')
    r['academics']['internationalQualifications']=detail
    r['admissions']['notes']=[n for n in r['admissions']['notes'] if n!=UNKNOWN]+[detail]
    r['verification']['unconfirmed']=[n for n in r['verification']['unconfirmed'] if n!=UNKNOWN]+[detail]
    r['verification']['checked'].append(L('Uzbekistan-specific school-document instructions; unresolved qualification conditions remain explicit.',
                                        'Страновые инструкции по школьным документам Узбекистана; непроверенные условия квалификаций оставлены явно.'))

save(head,old+new,tail,PATH)
for e in registry['entries'][:10]:
    e['implementationStatus']='draft-profile-added'
    e['topics']['programs']='verified-partial-language-unconfirmed'
    e['topics']['uzbekistan']='document-name-verified-other-conditions-open' if e['id'] in (new[4]['id'],new[9]['id']) else 'exact-qualification-not-confirmed'
    e['topics']['photo']='not-yet-researched-placeholder'
    e['unresolved']=['Full programme coverage and instruction language','Exact Uzbek credentials and conditions','Campus photo/licence','Remaining cost, award, identity and application fields; see profile and sources']
registry_path.write_text(json.dumps(registry,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
flush()
print('Appended first approved ten; explicit unknowns retained. No annualCost added from previous-cycle prices.')
