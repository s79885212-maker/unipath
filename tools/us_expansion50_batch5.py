"""Final approved ten: conservative first-year routes and named bachelor majors."""
from us_expansion50_common import *
L('Utah','Юта')
configs=[
 ('hillsdale-college','Hillsdale','Хиллсдейл','Michigan','https://www.hillsdale.edu/'),
 ('brigham-young-university','Provo','Прово','Utah','https://www.byu.edu/'),
 ('university-of-san-francisco','San Francisco','Сан-Франциско','California','https://www.usfca.edu/'),
 ('george-mason-university','Fairfax','Фэрфакс','Virginia','https://www.gmu.edu/'),
 ('university-at-albany-suny','Albany','Олбани','New York','https://www.albany.edu/'),
 ('university-of-central-florida','Orlando','Орландо','Florida','https://www.ucf.edu/'),
 ('university-of-dayton','Dayton','Дейтон','Ohio','https://udayton.edu/'),
 ('university-of-south-carolina','Columbia','Колумбия','South Carolina','https://sc.edu/'),
 ('university-of-texas-at-dallas','Richardson','Ричардсон','Texas','https://www.utdallas.edu/'),
 ('university-of-the-pacific','Stockton','Стоктон','California','https://www.pacific.edu/')]
records=[record(*c) for c in configs]
for i,r in enumerate(records):
 if i==0:
  r.update(institutionKind='college',founded=1844)
  application_fee(r,0,L('Both online applications are explicitly free.','Обе онлайн-заявки явно бесплатны.'))
  policy(r,'optional',L('SAT/ACT/CLT optional; highest composite from one sitting, no superscore. Fall 2024 mid-range scores are historical statistics, not minima and not explicitly labelled 25–75 percentiles.',
    'SAT/ACT/CLT необязательны; лучший общий результат одной сдачи, без superscore. Диапазоны осени 2024 — историческая статистика, не минимумы и не явно названные 25–75 перцентили.'))
  english(r,note=L('Non-native speakers need TOEFL or a listed equivalent. Numerical IELTS/TOEFL thresholds remain unconfirmed. Transcript evaluation is strongly recommended, not stated as mandatory for every international first-year applicant.',
    'Не носителям языка нужны TOEFL или перечисленный эквивалент. Числовые пороги IELTS/TOEFL не подтверждены. Оценка документов настоятельно рекомендована, а не обязательна для каждого иностранного первокурсника.'))
  event(r,'Early Decision','ED','1 November',topic='admission-deadlines',binding=True)
  event(r,'Regular Decision','RD','15 March',topic='admission-deadlines',note=L('Application and all supporting documents. Recurring date; Fall 2027 has not been established.',
    'Заявка и все подтверждающие документы. Ежегодная дата; набор осени 2027 не установлен.'))
  r['programNote']=L(str(PARTIAL)+' Computer Science is explicitly a minor only; it is not a confirmed bachelor major here. Mathematics and Economics are named bachelor majors.',
    PARTIAL.ru+' Computer Science явно только minor, а не подтверждённая специальность бакалавриата. Mathematics и Economics указаны как специальности бакалавриата.')
  r['admissions']['documents']=[L('Official grades from every institution, English translations, two academic recommendations, essay and three short answers, activities resume. Exact Uzbek credential equivalence remains unconfirmed.',
    'Официальные оценки каждого учреждения, английские переводы, две академические рекомендации, эссе и три коротких ответа, резюме занятий. Точное соответствие узбекской квалификации не подтверждено.')]
 elif i==1:
  policy(r,None,L('Not checked: Fall 2027 testing status is not confirmed. The standing university policy requires SAT/ACT unless 24 graded post-school college credits, but explicitly allows suspension for an applicant pool. The current international admissions page returned403; no optional or required policy is inferred for this cohort.',
    'Не проверено: статус тестов осени 2027 не подтверждён. Общая политика требует SAT/ACT, кроме 24 оцениваемых кредитов колледжа после школы, но явно допускает приостановку для набора. Текущая международная страница вернула403; optional или required для этого набора не выведены.'))
  english(r,note=L('An approved English exam is required if the primary language is not English. Numerical thresholds are unconfirmed; BYU-Idaho and BYU-Hawaii scores are not copied to Provo.',
    'При основном языке не английском нужен одобренный языковой экзамен. Числовые пороги не подтверждены; баллы BYU-Idaho и BYU-Hawaii не скопированы в Provo.'))
  s=src(r['id'],'international-first-year-admission')
  r['admissions']['deadlines']=[dict(name=L('Fall first-year application','Заявка на первый курс осенью'),kind='RD',date=None,dateISO=None,entryTerm=None,entryYear=None,status='not-confirmed',binding=None,source=s['source'],verified=DAY,
   note=L('The policy requires all materials by the term deadline but does not publish its date. The route label is descriptive, not a verified named decision plan.',
     'Политика требует все материалы к сроку семестра, но саму дату не публикует. Подпись описательная, а не подтверждённое название плана рассмотрения.'))]
  note=L('Provo campus only. Ecclesiastical endorsement and Honor Code standing/exception rules apply; minimum age17 at enrolment. Non-US-accredited secondary education requires a paid foreign credential evaluation. Exact Uzbek equivalence is unconfirmed. Tuition2026–27 for12+credits per Fall/Winter semester: Latter-day SaintUSD3,548; non-Latter-day SaintUSD7,096. Religious membership is not citizenship; neither amount is annual or full cost. Fall2027–28 rates and residual expenses remain unknown.',
    'Только кампус Provo. Действуют церковное одобрение и Honor Code/правила исключений; при зачислении не менее17лет. Школьное обучение без аккредитации США требует платной оценки иностранных документов. Точное соответствие Узбекистана не подтверждено. Tuition2026–27 при12+кредитах за семестр Fall/Winter: Latter-day Saint3 548USD; non-Latter-day Saint7 096USD. Членство религии не гражданство; суммы не годовые и не полная стоимость. Тарифы2027–28 и остаточные расходы неизвестны.')
  r['admissions']['notes'].append(note)
  s=src(r['id'],'tuition-reference')
  r['costs']=costs('2026–2027',s['source'],DAY,FY,[],L('Previous-year tuition per semester; two religious-membership categories','Прошлогодняя tuition за семестр; две категории религиозного членства'),None,
    L('Tuition only; living costs excluded','Только обучение; проживание не включено'),status='previous-cycle',note=note)
 elif i==2:
  policy(r,'optional',L('SAT/ACT optional and superscored; English proficiency remains a separate requirement. This is University of San Francisco, not University of South Florida.',
    'SAT/ACT необязательны, с superscore; английский — отдельное требование. Это University of San Francisco, а не University of South Florida.'))
  english(r,6.0,65,3.5,100,L('Minimum and preferred columns differ: IELTS6.0/6.5, oldTOEFL65/80, newTOEFL3.5/4.5, DET100/125. The preferred score is not the minimum. Additional support/route conditions should be checked; an English threshold does not guarantee direct programme eligibility.',
    'Минимальный и предпочтительный столбцы различаются: IELTS6,0/6,5, старыйTOEFL65/80, новыйTOEFL3,5/4,5, DET100/125. Предпочтительный балл не минимум. Условия поддержки/маршрута проверяются отдельно; языковой порог не гарантирует право прямого поступления на программу.'),topic='english')
  basis=L('Official preferred-score column, separate from the minimum column','Официальный столбец предпочтительных баллов, отдельный от минимального')
  r['english']['ielts'].update(recommended=6.5,recBasis=basis)
  r['english']['toefl']['recommended']=80;r['english']['toefl']['recBasis']=basis
  r['english']['toefl']['scales'][0]['recommended']=80;r['english']['toefl']['scales'][1]['recommended']=4.5
  r['english']['duolingo'].update(recommended=125,recBasis=basis)
  event(r,'Regular Decision','RD','15 January')
  r['admissions']['applicationFee']['note']=L('A non-refundable fee is required, but the reviewed international page does not state its amount. Fee-waiver options exist; unknown is not USD0.',
    'Нужен невозвратный сбор, но прочитанная международная страница не указывает сумму. Есть варианты освобождения; неизвестное не равно0USD.')
 elif i==3:
  policy(r,'conditional',L('Score Optional has conditions. CS/Engineering applicants may be considered without SAT/ACT after four years of mathematics, including one course above AlgebraII by the senior year, all with equivalent B or higher. Uzbek marks are not automatically converted to B.',
    'Score Optional имеет условия. CS/Engineering могут рассматриваться без SAT/ACT после четырёх лет математики, включая курс выше AlgebraII к выпускному году, все с эквивалентом B или выше. Узбекские оценки автоматически в B не пересчитаны.'))
  for key in ('sat','act'):r['academics'][key]['label']=L('Score Optional with mathematics conditions for CS/Engineering','Score Optional с условиями математики для CS/Engineering')
  english(r,6.5,80,4.5,110,L('General IELTS6.5 with each section6.0; Engineering/Computing has the same overall score but no section minimum. General TOEFLold80/sections18, new4.5/sections4.0; CEC has no section minima. Two-year validity, Home/MyBest and IELTS One Skill Retake accepted; Indicator not accepted. Mason Korea and Gateway are separate.',
    'Общий IELTS6,5 с каждым разделом6,0; Engineering/Computing тот же общий балл без минимума разделов. Общий TOEFLстарый80/разделы18, новый4,5/разделы4,0; у CEC нет минимумов разделов. Срок два года, принимаются Home/MyBest и IELTS One Skill Retake; Indicator не принимается. Mason Korea и Gateway отдельные.'),topic='english')
  r['english']['ielts'].update(varies=True,profilesComplete=False,profiles=[dict(name=L('General undergraduate','Общий бакалавриат'),kind='minimum',overall=6.5,sections=L('At least 6.0 in each section','Не ниже 6,0 в каждом разделе'),source=src(r['id'],'english')['source'],verified=DAY),dict(name=L('College of Engineering and Computing','Колледж инженерии и вычислений'),kind='minimum',overall=6.5,sections=L('No minimum subsection score','Минимум отдельных разделов не требуется'),source=src(r['id'],'english')['source'],verified=DAY)])
  event(r,'Early Action','EA','1 November',binding=False,topic='admission-deadlines');event(r,'Regular Decision','RD','1 February',topic='admission-deadlines')
 elif i==4:
  policy(r,'optional',L('SAT/ACT optional; English proof is separate for non-native speakers schooled outside the US.',
    'SAT/ACT необязательны; английский отдельно для не носителей языка, учившихся вне США.'))
  english(r,6.0,70,4.0,95,L('Published English thresholds. Conditional IELP admission is a separate route. SAT ERWS400/Reading22 and ACT English/Reading19 are language alternatives, not composite cut-offs.',
    'Опубликованные пороги английского. Условный приём IELP — отдельный маршрут. SAT ERWS400/Reading22 и ACT English/Reading19 — языковые альтернативы, не общие пороги.'))
  event(r,'Early Action','EA','1 November');event(r,'Regular Decision','RD','1 March')
  r['costs']['note']=L('The page quotes international on-campus USD54,354 per year without establishing an academic year. USD45,008 off-campus applies only to juniors/seniors. Neither is installed as a verified Fall2027 annual budget. Global Excellence may reach USD20,500/year for four years; GPA2.5 and continuous full-time out-of-state enrolment for renewal. Competitive award is not deducted from cost; largest eligible award remains unconfirmed.',
    'Страница указывает международные54 354USD в год на кампусе без установленного учебного года.45 008USD вне кампуса только для третьего/четвёртого курса. Ни одна сумма не назначена подтверждённым бюджетом осени2027. Global Excellence до20 500USD/год четыре года; продление GPA2,5 и непрерывное очное обучение по out-of-state tuition. Конкурсная награда из цены не вычтена; крупнейшая доступная награда не подтверждена.')
 elif i==5:
  application_fee(r,30,L('Non-refundable international application fee.','Невозвратный международный сбор.'))
  policy(r,'required-alternatives',L('Official SAT, ACT or CLT required. SAT/ACT within five years; CLT July1,2023 or later. SAT English520, ACT English20 and CLT verbal/grammar42 are English-proof section alternatives, not admission composite minima.',
    'Нужны официальные SAT, ACT или CLT. SAT/ACT за пять лет; CLT от1июля2023. SAT English520, ACT English20 и CLT verbal/grammar42 — языковые разделы, не общие вступительные минимумы.'))
  english(r,6.5,80,4.0,None,L('Published language thresholds. English programmes and composition-course waivers have separate requirements. Domestic Early Action is not assigned to international-abroad applicants.',
    'Опубликованные языковые пороги. Языковые программы и освобождение по курсам письма имеют отдельные условия. Внутренний Early Action не назначен иностранцам из-за рубежа.'))
  event(r,L('Fall application — international abroad','Осенняя заявка — поступление из-за рубежа'),'RD','1 April',note=L('International abroad means entering directly from an institution outside the US, not citizenship. International applicants entering from a US institution have a different May1 deadline. Entry year remains unconfirmed.',
    'International abroad означает переход из учреждения вне США, а не гражданство. Для иностранцев из учреждения США другой срок1мая. Год поступления не подтверждён.'))
 elif i==6:
  application_fee(r,0,L('Verified no-fee first-year application via the university or Common App.',
    'Подтверждена бесплатная заявка на первый курс через университет или Common App.'),topic='application-fee')
  policy(r,'optional',L('Optional SAT/ACT also for merit scholarships; English proof remains separate. SAT ERW480 and ACT English21 language alternatives are not composite minima.',
    'SAT/ACT необязательны также для академических стипендий; английский отдельно. SAT ERW480 и ACT English21 — языковые альтернативы, не общие минимумы.'),topic='sat-act')
  english(r,6.0,70,4.0,105,L('Full-admission thresholds from the current international page. Post-secondary TEC course analysis applies to transfer study; it is not imposed on every school-only first-year applicant.',
    'Пороги полного поступления из текущей международной страницы. Анализ TEC послешкольных курсов относится к переводу, а не каждому первокурснику только после школы.'),topic='english')
  event(r,'Regular Decision','RD','1 May',note=L('International fall application deadline; the general catalogue February1 date is not substituted. Entry year remains unconfirmed.',
    'Срок международной осенней заявки; общее1февраля из каталога не подставлено. Год поступления не подтверждён.'))
 elif i==7:
  application_fee(r,100,L('Non-refundable international application fee.','Невозвратный международный сбор.'))
  policy(r,'optional',L('International freshmen in fall, spring and summer2027 are test-optional. ACT superscore uses English, Math and Reading; science is excluded. English proficiency remains required unless exemption applies.',
    'Иностранные первокурсники осени, весны и лета2027 — test-optional. ACT superscore использует English, Math и Reading, без science. Английский нужен, если нет освобождения.'),cycle=L('Fall/Spring/Summer 2027','Осень/весна/лето 2027'))
  english(r,6.5,77,None,115,L('Published English thresholds. New TOEFL1–6 minimum is not printed and not guessed. SAT EBRW560 and ACT English22 are language alternatives, not general composite requirements.',
    'Опубликованные пороги английского. Новый минимум TOEFL1–6 не напечатан и не угадан. SAT EBRW560 и ACT English22 — языковые альтернативы, не общие требования к сумме.'))
  for name,kind,d in [('Early Action','EA','15 October'),('Required documents — Early Action','documents','1 November'),('Regular Decision','RD','1 December'),('Required documents — Regular Decision','documents','15 January')]:event(r,name,kind,d)
 elif i==8:
  policy(r,None,L('Not checked: Fall2027 SAT/ACT policy not confirmed. The2026 catalogue lists test scores among review factors and Texas automatic-admission criteria, but does not establish current international test-optional eligibility. The international admissions page was unavailable; University of Dallas and UT Arlington are different institutions.',
    'Не проверено: политика SAT/ACT осени2027 не подтверждена. Каталог2026 перечисляет баллы среди факторов и критериев автоматического приёма Техаса, но не устанавливает текущие условия optional для иностранцев. Международная страница недоступна; University of Dallas и UT Arlington — другие учреждения.'))
  english(r,note=L('International English thresholds and exact Uzbek credentials remain unconfirmed; scores from other Dallas/Arlington institutions are not copied.',
    'Международные языковые пороги и точные узбекские документы не подтверждены; баллы других учреждений Dallas/Arlington не скопированы.'))
  r['admissions']['applicationFee']['note']=L('The2026 catalogue lists USD50 timely application plus USD50 one-time evaluation for international academic documents, with USD75 additional late fee. Applicability to Fall2027 is not established; no current amount is assigned.',
    'Каталог2026 указывает50USD своевременной заявки плюс50USD однократной оценки иностранных академических документов и75USD дополнительно при опоздании. Применимость к осени2027 не установлена; текущая сумма не назначена.')
  event(r,L('Priority application','Приоритетная заявка'),'priority','1 December',topic='application-fee-deadlines');event(r,'Regular Decision','RD','1 May',topic='application-fee-deadlines')
 elif i==9:
  policy(r,None,L('Not checked: current Fall2027 SAT/ACT policy remains unconfirmed. The catalogue says freshman scores are required; the current admissions/test pages were blocked and search snippets cannot resolve this. Do not replace unknown with optional.',
    'Не проверено: текущая политика SAT/ACT осени2027 не подтверждена. Каталог говорит, что баллы первокурсников нужны; текущие страницы приёма/тестов заблокированы и поисковые выдержки этого не разрешают. Неизвестное не заменено optional.'))
  english(r,note=L('English proficiency is required, but campus-wide numerical first-year minima have not been confirmed. TOEFL80/IELTS6.5 rows in the catalogue’s professional Pharmacy section are not assigned to every bachelor applicant. This profile covers Stockton, not graduate San Francisco/Sacramento or Pacific University in Oregon.',
    'Английский нужен, но общие числовые минимумы первого курса не подтверждены. TOEFL80/IELTS6,5 из профессионального раздела Pharmacy не назначены всем кандидатам бакалавриата. Профиль Stockton, а не graduate San Francisco/Sacramento или Pacific University в Орегоне.'))
  event(r,'Early Action','EA','15 November',binding=False);event(r,L('Regular admission priority','Приоритет обычного поступления'),'priority','15 January')
finish(records,5)
