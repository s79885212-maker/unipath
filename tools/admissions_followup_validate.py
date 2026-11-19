"""Finalize only after both builds and actual local browser protocols pass."""
import json,re,hashlib
from pathlib import Path
root=Path('research/admissions-followup');parent=Path('..')
read=lambda p:json.loads(p.read_text(encoding='utf8'))
manifest=read(root/'artifact-fingerprints.json')
assert manifest['version']==267
for f,h in manifest['sourceInputs'].items():
 assert hashlib.sha256(Path(f).read_bytes().replace(b'\r\n',b'\n')).hexdigest()==h,('Source changed since build',f)
logs=root/'logs';logs.mkdir(exist_ok=True)
for name in ['tests-267','production-267','production-links-267','staging-267','staging-links-267','search-before','whitecliffe-before']:
 text=(parent/('followup-'+name+'.log')).read_text(encoding='utf8')
 if name=='tests-267' or '-links-' in name:assert '627 passed, 0 failed' in text,name
 if '-links-' in name:assert '547 pages, 20817 internal links checked' in text,name
 if name in ['production-267','staging-267']:assert 'prerender: 546 static pages' in text,name
 text=re.sub(r'\x1b\[[0-9;]*m','',text).replace(str(Path.cwd()),'<workspace>')
 (logs/(name+'.log')).write_text(text,encoding='utf8')
summaries={}
expected=set(read(root/'reviews.json'))|{r['id'] for r in read(root/'self-review-24.json')}
assert len(expected)==63
for kind in ['production','staging']:
 r=read(root/('local-'+kind+'-profiles.json'))
 assert not r['errors'] and len(r['profiles'])==126 and len(r['flows'])==4,(kind,r['errors'])
 for lang in ['ru','en']:assert {p['id'] for p in r['profiles'] if p['lang']==lang}==expected
 assert r['version'].endswith('?v=267')
 flow=read(root/('local-'+kind+'-flows'+('-dark' if kind=='production' else '')+'.json'))
 assert not flow['errors'] and len(flow['scenarios'])==14,(kind,flow['errors'])
 static=read(root/(kind+'-static.json'))
 assert static['profiles']==540 and static['version']==['267'] and static['noindex']==(kind=='staging')
 summaries[kind]={'profiles':126,'uniqueProfiles':63,'routeAndScoreScenarios':4,'userFlowRecords':14,'errors':0,'browser':r['browser'],'static':static}
out={'version':267,'readyForDev':True,'tests':{'passed':627,'failed':0},'builds':summaries,'uniqueCatalogue':540,'internalLinksPerBuild':20817,'HTMLPagesPerBuild':547,'sourceInputsVerified':len(manifest['sourceInputs']),'stagingPublished':False,'remainingSourceQuestions':13,'closedInScopedAcademicFramework':40,'originalQueueAttempted':53,'originalQueueContentRead':52,'additionalPriorityContentRead':4,'separateCounterReview':24,'liveProtocol':'To be published in PR29 after deployment; local results are not live results.','limitations':['WebKit executable missing; no actual Safari/iPhone.','360/390 px are Chrome viewport emulation.','A previous parallel v265 run timed out after160 openings; retained separately and superseded by complete sequential runs.','No standalone calendar/export; saved application-date table tested.']}
(root/'validation.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
md='''# Проверка окончательного кандидата v267

Основной сайт не публикуется. Это протокол **локальных** сборок; действительные SHA/версия и живой повтор будут опубликованы в [PR29](https://github.com/s79885212-maker/unipath/pull/29) после слияния только в dev. Черновой релизный PR27 обновляется тем же кандидатом и не сливается.

- 627 тестов, 0 ошибок. Обе сборки созданы из одних исходников: 540 уникальных вузов, 547 HTML, 20 817 внутренних ссылок каждая. Production canonical `/unipath/`, без noindex; staging canonical `/unipath/staging/`, все страницы noindex. Sitemap/маршруты/ресурсы проверены tests/links.js.
- Chrome 157.0.8103.51: production и staging — по 126 прямых открытий 63 карточек RU360/light и EN1280/dark, включая все изменённые/исходные53 и контрольную выборку. Сверены новые поля/русский перевод, отсутствие старых дублирующих строк, число маршрутов, source links, декодирование фотографий, 404/ошибки JS/горизонтальное переполнение. Ошибок0.
- По четыре проверки формы/движка на сборку: overall без секций; низкая секция; SAT required/optional/not-considered/альтернативы; иной язык/программа/набор; ACT/секции и параметры сохраняются после reload. Неизвестная квалификация остаётся в «Не проверено», а соответствие числовому минимуму не названо гарантией поступления.
- По14 записей основных сценариев на сборку: главная → поиск → сочетания фильтров → карточка → избранное шести стран → сравнение трёх → таблица сроков → reload → смена языка/удаление. Production дополнительно RU1280/EN390 с тёмной исходной темой, staging RU360/EN1280 со светлой; обе темы переключаются. Меню/Escape/клавиатура проверены.
- Бюджетные примеры: Evansville 70 894 over / 70 904 fits, Portsmouth DS £20 000 unknown; неполная/историческая/бессрочная цена и конкурсная/односеместровая помощь не становятся гарантированной доступной годовой стоимостью. Фильтр Full ride отклоняет частичную Bath; историческое SNU-покрытие не получает подтверждающих галочек.
- Регрессии до исправления поиска и Whitecliffe сохранены в logs/*before.log. Промежуточный параллельный v265 остановился на30-секундной навигации после160 открытий: local-production-v265-partial.json. Он не объявляется успешным; полные последовательные повторы v266 и v267 завершены. Навигация ограничена60сек, повторных циклов/обходов нет.

## Источники и границы покрытия

Исходные53: все рассмотрены/предпринята содержательная попытка,52 с прочитанным документом, UT Dallas без доступного текущего документа. 40 получили академическую схему в установленной области,13 имеют конкретный остаток. Дополнительно Pittsburgh, LeMoyne, WestFlorida и Whitecliffe. Отдельная повторная сверка24 (4/страна) — self-review-24.md; эти числа пересекаются и не складываются в новый полный аудит540. Таблица всех результатов/источников — report.md/reviews.json; точный остаток — queue-outcome.md. Полная прежняя инвентаризация не повторялась.

Проверен общий способ датировки всех оставшихся подтверждённых маршрутов без отдельного academic applicability: shared-cycle-review.json. Страновая недатированная страница не наследует2027 от языка курса; общий2027 применяется только в контексте применимого руководства/заявки. KNU TOPIK не объявляет язык преподавания.

WebKit запуск предпринят, исполняемый файл отсутствует (webkit.json). Реальный Safari/iPhone не проверены. Новых настроек доступа, сессионных данных или публичных обходов нет; Turnstile/gate/workflows не менялись. Полного внешнего повторного сканирования всех старых54 источников здесь нет; прежние отчёты/предупреждения сохранены.

До успешного живого повтора готовность ограничена локальным кандидатом. Нерешённых технических блокеров в собственных изменениях локальные проверки не выявили. Честно показанные пробелы источников не объявлены подтверждёнными значениями. Неблокирующая старая особенность атрибуции: имя автора второго Frankfurt School фото содержит HTML entity `&amp;`; источник/автор/лицензия показаны, косметику можно исправить отдельно.
'''
(root/'validation.md').write_text(md,encoding='utf8')
progress=root/'progress.md';text=progress.read_text(encoding='utf8').replace('- [ ] RU/EN','- [x] RU/EN').replace('- [ ] Полный накопленный','- [x] Полный накопленный')
text+='\n\n## Локальная проверка v267 завершена\n627 тестов; обе сборки/ссылки; по126 открытий63 профилей и14 записей пользовательских сценариев без ошибок. Валидация37 исходных файлов сборки и шести одинаковых production/staging assets. WebKit отсутствует, реальный телефон не проверен. PR/dev, фактический деплой, живой повтор и актуализацияPR27 выполняются следующим этапом; их окончательный SHA и протокол сохраняются публичным комментариемPR29/описаниемPR27, чтобы не добавлять очередной служебный релиз только ради отчёта.\n'
progress.write_text(text,encoding='utf8')
records=Path('research/admissions-120/requirements.json');data=read(records)
for uid in expected:
 if uid in read(root/'reviews.json'):data[uid]['stage']='followup-browser-checked'
records.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps(out,ensure_ascii=False))
