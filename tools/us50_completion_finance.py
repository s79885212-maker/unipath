"""Apply individually reviewed completion evidence; no annualisation or aid deduction."""
import json,pathlib
from ca50_gaps import load,save
from us200_std import L,flush
from us200 import costs
ROOT=pathlib.Path(__file__).resolve().parent.parent
sources=json.loads((ROOT/'research/us-expansion-50-sources.json').read_text(encoding='utf-8'))
path=ROOT/'data/universities.us3.js';head,rows,tail=load(str(path));byid={r['id']:r for r in rows}
allowed={t['id'] for t in json.loads((ROOT/'research/us-expansion-50-targets.json').read_text(encoding='utf-8'))}
def evidence(uid,topic):
 assert uid in allowed
 s=next(s for s in sources if s['id']==uid and s['topic']==topic)
 assert s['access']=='html-read'
 return s
def link(u,s):
 if not any(x['url']==s['source'] for x in u['sources']):u['sources'].append(dict(label=L('Official university page','Официальная страница университета'),url=s['source']))
 u['lastVerified']=max(u.get('lastVerified') or '',s['verified'])

u=byid['university-of-california-irvine'];s=evidence(u['id'],'cost-components-reference');f=s['facts']
labels=[L('Student services','Студенческие услуги'),L('Base tuition','Базовая плата за обучение'),L('Associated Student Fee','Сбор студенческой ассоциации'),L('Student Center Fee','Студенческий центр'),L('Bren Events Center Fee','Центр мероприятий Bren'),L('Recreation Center Fee','Спортивно-досуговый центр'),L('Campus Spirit Fee','Сбор Campus Spirit'),L('Measure S','Сбор Measure S'),L('TGIF Fee','Сбор TGIF'),L('Anteater Express Fee','Транспорт Anteater Express'),L('Club Sports Fee','Клубный спорт'),L('SOAR Fee','Сбор SOAR'),L('eTech Fee','Сбор eTech'),L('Document fee — excluded from published total','Документальный сбор — исключён из опубликованного итога'),L('Writing placement fee','Определение уровня письменного английского'),L('Student health insurance','Медицинская страховка студента'),L('Nonresident supplemental tuition','Доплата за обучение для нерезидентов')]
assert len(labels)==len(f['annualRows'])
u['costs']=dict(status='conflict',academicYear=f['academicYear'],currency='USD',
 studentCategory=L('Nonresident undergraduate entering Fall 2026 — Tuition Stability Plan cohort','Бакалавриат, нерезидент, поступление осенью 2026 — соответствующий набор Tuition Stability Plan'),
 source=s['source'],verified=s['verified'],breakdown=dict(period='year'),
 headline=L('Official component/total coverage is unresolved','Состав компонентов и опубликованного итога не согласован'),
 items=[dict(label=label,amount=row[1]) for label,row in zip(labels,f['annualRows'])],billedSubtotal=None,
 totalText=L('Published Total Nonresident: USD 59,375.05 for Fall/Winter/Spring 2026–2027; inclusions remain unresolved','Опубликованный Total Nonresident: 59 375,05 USD за осень/зиму/весну 2026–2027; состав итога не согласован'),
 conflict=dict(text=L('The university prints USD 59,375.05. UniPath sums the listed annual components to USD 59,802.05, or USD 59,619.05 after removing the explicitly excluded USD 183 document fee: USD 244 still remains unexplained. These are UniPath calculations, not additional university-published totals. No coherent billed subtotal or full budget is asserted.',
 'Университет публикует 59 375,05 USD. Сумма перечисленных годовых компонентов, рассчитанная UniPath, — 59 802,05 USD; без явно исключённого документального сбора 183 USD — 59 619,05 USD. Остаётся необъяснённая разница 244 USD. Это расчёты UniPath, не дополнительные итоги университета. Согласованный выставляемый подытог и полный бюджет не утверждаются.')),
 note=L('Previous available cohort and year, not Fall 2027 prices. Base tuition USD 14,202 and nonresident supplemental tuition USD 39,270 are separate components: the base alone is not the international tuition price. Housing, food, books, travel and personal expenses are not included in this table. Conditional summer health-insurance proration is not added to every applicant. Component inclusion is unresolved, so rows are not assigned to a reconciled billed group. Competitive aid is not deducted.',
 'Предыдущий доступный набор и год, не цены осени 2027. Базовое обучение 14 202 USD и доплата нерезидента 39 270 USD — отдельные компоненты: базовая сумма сама по себе не является ценой для иностранца. Таблица не включает жильё, питание, книги, дорогу и личные расходы. Условная летняя страховка не добавляется каждому кандидату. Состав итога не согласован, поэтому строки не отнесены к согласованной группе выставляемых расходов. Конкурсная помощь не вычитается.'))
u['links']['cost']=s['source'];link(u,s)

u=byid['rutgers-university-new-brunswick'];s=evidence(u['id'],'international-merit-conditions')
award=dict(id='rutgers-nb-international',category='merit',basis='merit',name=L('International Student Scholarships','Стипендии иностранных студентов'),
 application=L('Automatic consideration with the admission application; no separate scholarship application','Автоматическое рассмотрение заявки на поступление; отдельной заявки на стипендию нет'),
 amount=L('USD 5,000–16,000 per year','5 000–16 000 USD в год'),
 eligibility=L('Admitted international first-year students on valid non-immigrant visas at New Brunswick; competitive review. School-specific conditions apply. Mason Gross uses a separate talent assessment and is not assigned this academic-award range.',
 'Принятые иностранные первокурсники New Brunswick с действующей неиммиграционной визой; конкурсный отбор. Действуют условия школы. Mason Gross использует отдельную оценку творческих способностей; этот диапазон академических наград к ней не отнесён.'),
 renewable=L('Four undergraduate years with at least 3.25 college GPA; full-time and individual school/award-offer conditions must be checked. This is not a school-leaving GPA conversion.',
 'Четыре года бакалавриата при университетском GPA не ниже 3,25; отдельно проверяйте полную учебную нагрузку и условия школы/письма о награде. Это не перевод оценок школьного документа.'),
 deadlineScope='not-confirmed',entryTerm=None,entryYear=None,source=s['source'],verified=s['verified'],
 note=L('Automatic consideration without a separate application does not guarantee an award. The international paragraph encourages Early Action or Regular Decision; an award-specific cutoff and Fall 2027 cycle are not established. A general first-year December 1 rule is not assigned to this award. Number of awards and stacking are unconfirmed. No amount is deducted from budget.',
 'Автоматическое рассмотрение без отдельной заявки не гарантирует награду. Международный раздел рекомендует Early Action или Regular Decision; отдельный стипендиальный срок и цикл осени 2027 не установлены. Общее правило 1 декабря для первокурсников не присвоено этой награде. Число наград и совместимость не подтверждены. Сумма из бюджета не вычитается.'))
u['scholarships']['merit']=[x for x in u['scholarships']['merit'] if x.get('id')!=award['id']]+[award];link(u,s)

u=byid['university-of-california-davis'];s=evidence(u['id'],'campus-scholarship-scope')
award=dict(id='davis-campus-scholarships',category='merit',basis='merit',name=L('Campus-based undergraduate scholarships','Кампусные стипендии бакалавриата'),
 application=L('UC admission application; additional materials only if requested','Заявка на поступление UC; дополнительные материалы только по запросу'),
 amount=None,renewable=None,deadlineScope='not-confirmed',entryTerm=None,entryYear=None,source=s['source'],verified=s['verified'],
 eligibility=L('The official FAQ includes international undergraduates, subject to each donor award’s restrictions. Awards consider academic excellence; some add financial-need or other criteria. Eligibility for this general scheme does not prove eligibility for every named award.',
 'Официальные ответы включают иностранных бакалавров с учётом ограничений каждой донорской награды. Учитываются академические достижения; некоторые награды добавляют нуждаемость или другие критерии. Допуск к общей системе не доказывает допуск к каждой именной награде.'),
 note=L('Entering students use the UC admission application; additional material is required only if requested. Awards are competitive and amounts/renewal depend on the specific award. General GPA wording is not converted into an Uzbek school threshold. January 7, 2026 concerns continuing students, not incoming Fall 2027 applicants. Named Regents/Provost international eligibility and largest applicable award remain under review; the yearless Regents December 2 statement is not installed as a 2027 deadline. No aid is deducted from cost.',
 'Поступающие используют заявку UC; дополнительные материалы — только по запросу. Отбор конкурсный, суммы и продление зависят от конкретной награды. Общая формулировка GPA не переведена в порог узбекских школьных оценок. 7 января 2026 относится к продолжающим обучение, не к поступлению осенью 2027. Международная доступность Regents/Provost и крупнейшая применимая награда ещё проверяются; срок Regents 2 декабря без установленного года не записан как срок 2027. Помощь из стоимости не вычтена.'))
u['scholarships']['merit']=[x for x in u['scholarships']['merit'] if x.get('id')!=award['id']]+[award];link(u,s)
for topic in ('named-awards-reference','regents-application-scope'):link(u,evidence(u['id'],topic))

u=byid['university-of-california-davis'];s=evidence(u['id'],'cohort-cost-components')
u['costs']=costs('2026–2027',s['source'],s['verified'],
 L('Nonresident first enrolled 2026–2027, university-managed residence hall, three academic quarters','Нерезидент, первое поступление в 2026–2027, университетское общежитие, три учебных квартала'),
 [(L('Systemwide tuition and fees','Общесистемное обучение и сборы'),15588,'billed'),
  (L('Campus-based fees','Кампусные сборы'),2490,'billed'),
  (L('Nonresident supplemental tuition','Доплата за обучение для нерезидентов'),39270,'billed'),
  (L('Residence hall housing','Жильё в общежитии'),13957,'billed'),
  (L('Campus food','Питание в кампусе'),8200,'billed'),
  (L('Health insurance — estimated, waivable with qualifying cover','Медицинская страховка — смета, возможен отказ при подходящем покрытии'),3924,'billed'),
  (L('Document fee','Документальный сбор'),185,'billed'),
  (L('Books and supplies','Книги и материалы'),1240,'estimate'),
  (L('Personal expenses','Личные расходы'),2733,'estimate'),
  (L('Transportation','Транспорт'),692,'estimate')],
 L('Previous-cohort residence-hall cost estimate','Смета предыдущего набора с проживанием в общежитии'),
 L('Published nonresident COA: USD 88,279; resident direct costs: USD 44,344, plus USD 39,270 nonresident tuition','Опубликованная COA нерезидента: 88 279 USD; прямые расходы резидента: 44 344 USD, плюс обучение нерезидента 39 270 USD'),
 L('Published residence-hall COA before aid; subtotal calculated separately by UniPath','Опубликованная COA для общежития до помощи; подытог отдельно рассчитан UniPath'),
 budget=88279,status='previous-cycle',
 note=L('The university publishes total nonresident COA USD 88,279 for the Fall 2026 cohort, three quarters from mid-September to mid-June. UniPath calculates the direct subtotal USD 83,614 as the published resident direct subtotal USD 44,344 plus USD 39,270 nonresident supplement; this subtotal is not separately printed by the university. The USD 15,588 line combines tuition and student services and is not tuition-only. Residence-hall housing requires an official university housing contract. Other housing choices differ. Insurance USD 3,924 is an estimate, may differ from the final approved rate and may be waived with qualifying coverage. Published/proposed rates are subject to final approval. No Fall 2027 price or current budget match is inferred; competitive aid is not deducted.',
 'Университет публикует полную COA нерезидента 88 279 USD для набора осени 2026, за три квартала с середины сентября до середины июня. UniPath рассчитывает прямой подытог 83 614 USD: опубликованные прямые расходы резидента 44 344 плюс доплата нерезидента 39 270; университет не печатает этот подытог отдельно. Строка 15 588 объединяет обучение и студенческие услуги, это не только tuition. Для сметы общежития нужен официальный договор с университетским Housing. Другие варианты жилья отличаются. Страховка 3 924 USD — сметная, может отличаться от окончательной ставки; возможен отказ при подходящем покрытии. Опубликованные/предложенные ставки подлежат окончательному утверждению. Цена осени 2027 и текущее бюджетное совпадение не выводятся; конкурсная помощь не вычитается.'))
u['costs']['breakdown']['period']='year';u['links']['cost']=s['source'];link(u,s)

u=byid['university-of-connecticut'];s=evidence(u['id'],'international-funding-cost')
u['costs']=costs('2026–2027',s['source'],s['verified'],
 L('Full-time international undergraduate on UConn F/J sponsorship, BA/BS/BSE/BFA except BGS, nine months, no dependents','Очный иностранный бакалавр с визовым сопровождением UConn F/J, BA/BS/BSE/BFA кроме BGS, девять месяцев, без иждивенцев'),
 [(L('Tuition','Обучение'),39678,'estimate'),(L('Fees including visa compliance','Сборы, включая визовое сопровождение'),5224,'estimate'),
  (L('Room and board','Жильё и питание'),17082,'estimate'),
  (L('Books, travel, insurance and miscellaneous expenses','Книги, дорога, страховка и прочие расходы'),8665,'estimate')],
 L('Previous-cycle international funding estimate','Международная финансовая смета предыдущего цикла'),
 L('Published CISS undergraduate COA: USD 70,649 for nine months','Опубликованная CISS COA бакалавриата: 70 649 USD за девять месяцев'),
 L('International full-time I-20/DS-2019 funding estimate before aid, not an exact bill','Международная финансовая смета I-20/DS-2019 для полной нагрузки до помощи, не точный счёт'),
 tuition=39678,budget=70649,status='previous-cycle',
 note=L('Published 2026–2027 CISS estimate, not Fall 2027 pricing. Tuition and fees USD 44,902 plus living expenses USD 25,747 equals USD 70,649. Fees already include visa compliance USD 450 each semester; do not add it again. Books, travel, insurance and miscellaneous costs are already grouped in USD 8,665. All figures are funding estimates, not exact charges. Summer study and accompanying dependents require extra funding. The separate BGS USD 47,981 and exchange USD 12,248 per semester are not prices for the ordinary bachelor route. No stipend or competitive award is deducted, and this previous-cycle figure cannot confirm a Fall 2027 budget.',
 'Опубликованная смета CISS 2026–2027, не цены осени 2027. Обучение и сборы 44 902 плюс жизнь 25 747 дают 70 649 USD. Сборы уже включают визовое сопровождение по 450 USD за семестр; повторно не добавляется. Книги, дорога, страховка и прочее уже объединены в 8 665 USD. Все суммы — финансовая смета, не точные счета. Летнее обучение и иждивенцы требуют дополнительных средств. Отдельные BGS 47 981 и exchange 12 248 USD за семестр не являются ценами обычного бакалаврского маршрута. Стипендия и конкурсная награда не вычитаются; прошлый цикл не подтверждает бюджет осени 2027.'))
u['costs']['breakdown']['period']='year';u['links']['cost']=s['source'];link(u,s)
save(head,rows,tail,str(path));flush()
print('Reviewed UCI component conflict and two scoped international scholarship schemes; annualCost unchanged')
