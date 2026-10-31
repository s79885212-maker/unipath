# Техническая проверка UniPath: продолжение после v159

## Исходное состояние — 27 октября 2026

Актуальная dev и опубликованный staging: 0fd4d6a4d61ad0f87145960104d2376c5d9c6250, v167. Main на сервере: 1aa52474d931b78ecd7ad05e0948131e5729104d, публичная v159. Локальный origin/main первоначально устарел, поскольку fetch refspec настроен только на dev; состояние main сверено через ls-remote, main не переключалась и не менялась.
Новая отдельная ветка codex/staging-quality и worktree unipath-staging-quality созданы от origin/dev. Предыдущая codex/site-quality, её коммиты, 920c099 и backup сохранены. Базовая проверка: 278 passed, 0 failed. Данные: 370 учреждений / 6 стран, CA 50.
Прочитаны AGENTS, README, DATA_DISPLAY_CONTRACT, журнал, SITE_QUALITY_REPORT и актуальные research/2026-10-26-*; старые версии в исторических отчётах не приняты за текущее состояние.

## Границы с Claude

По сообщению владельца Claude работает в claude/data-quality-v159 от 0fd4d6a в отдельной папке: university records, scholarships, sources, photos, исследовательские генераторы, data/match.js и отдельный файл переводов. Codex меняет assets/js, assets/css, сборку, технические тесты и интерфейсные переводы. Схема данных не расширялась. PR/отчёт Claude ещё ожидаются; новые исследовательские коммиты Claude пока не интегрированы.

## Исправления v168 (до публикации)

| Ошибка | Воспроизведение / исправление |
|---|---|
| Зависший translation chunk удерживает router.need без предела | В исходном loader нет timeout. Новый локальный тест незавершённого запроса: ожидание освобождается через 12 секунд, показывается уведомление и кнопка повтора. Ошибка не объявляется успешной загрузкой; поздний ответ не вызывает старый callback дважды. |
| Ошибка chunk молча помечалась done | Теперь error отдельно от done, доступные сведения выводятся с объяснением отсутствующего перевода; пользователь может повторно запросить перевод. |
| Отсутствующий основной JS оставляет boot animation | Независимый boot watchdog сообщает о сбое first-party dependencies и даёт reload; предел первого ожидания 20 секунд. Фото и внешний Cloudflare script не считаются отказом приложения. Ошибка сохраняется над main, если оставшийся JS всё же отрисует неполную базу. |
| Истёкшая или не завершённая проверка Turnstile не даёт кнопки восстановления | Retry вызывает штатный turnstile.reset(widgetId). Error/expired/timeout сохраняют блокировку и не записывают human pass. Production key, настройки и прежняя политика доступа не меняются. |

Технические источники: https://developers.cloudflare.com/turnstile/troubleshooting/client-side-errors/ и https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/ — штатные callbacks/reset. В локальных сетевых тестах используется предусмотренный в репозитории официальный тестовый ключ; реальная CAPTCHA не обходится и не решается.

## Проверки

291 passed, 0 failed после исправлений: прежние 278 плюс тринадцать проверок загрузки/тайм-аута/позднего ответа/повторной загрузки. В packed-dictionary test harness добавлен браузерный clearTimeout; ожидаемые переводы не менялись.
Полная сборка BASE_PATH=/unipath/staging/, STAGING=1 успешна; 377 страниц noindex. Проверены 12095 внутренних ссылок на 377 страницах: все пути/IDs/hash routes/canonical корректны. Исправлен сам tests/links.js: раньше он жёстко вырезал /unipath/, требовал sitemap у noindex-staging и сравнивал Windows backslashes с URL slashes. Теперь использует фактическую базу, запрещает ссылки за её пределы, требует sitemap для индексируемой production-сборки и robots/noindex для staging. Это были ложные ошибки теста, а не 12014 сломанных ссылок сайта.
Chrome 155.0.8059.86: 224 сочетания 14 маршрутов, RU/EN, light/dark, 360/390/768/1280. Issues/errors/failed пусты. Проверены сохранение budget=0, избранного/сравнения, прямой маршрут/reload, Canadian news и отдельные непроверенные направления. I18N.missing=460 включает собственные имена; не объявлен нулевым. Дополнительные сценарии: отказ и зависание ru.ca.js с успешным повтором; отказ router.js и исключение в нём с успешным reload; переход со static Acadia на match сохраняет /unipath/staging/. Начальная проверка перехода ошибочно выбирала скрытую desktop-ссылку на мобильной ширине; сценарий исправлен на реальное открытие меню, сайт ради теста не менялся.
Клавиатура: мобильное меню открывается Enter, закрывается Escape с возвратом фокуса; country picker управляется клавиатурой и возвращает фокус при Escape. Фото Olin фактически загружено 750×536, TUJ 320×240, лицензии/атрибуция видимы; при намеренной сетевой ошибке фото hero исчезает корректно, приложение не объявляет отказ JS. SRH/Karlshochschule остаются исходными заглушками.
Опубликованная v167 дополнительно открыта без тестовых параметров во встроенном браузере Windows: приложение доступно, modal Cloudflare не появился. Это наблюдение одного обычного сеанса, не доказательство доступности на всех сетях. Для новых v168 пока проверена локальная сборка; публикация/объединённая проверка ожидают готового PR Claude.

## Исследовательские пробелы — отдельно от технических ошибок

Не исправлялись записи вузов ради тестов. Сохраняются неполные SAT/ACT и Uzbekistan qualifications, семь отсутствующих annualCost, Windsor direct application fee, Lesley Fall 2027, часть индивидуальных awards/renewal и cycleEvidence, частичные направления/языки/кампусы и фото SRH/Karlshochschule. Данные текущей ветки совпадают с dev; три ранее добавленных Business-примера Concordia/UPEI/SMU не являются полными годовыми бюджетами.
Safari, реальные телефоны и screen reader пока не проверены. Обычный человеческий сеанс и автоматизированный сеанс Turnstile не считаются равнозначными. Готовность инфраструктуры подтверждается отдельно от возможности автоматического прохождения проверки.

## Предварительное чтение ветки Claude

На GitHub появилась claude/data-quality-v159, проверено до 85f64c4. Есть bfda712 (циклы/annual rules) и 85f64c4 (awards batch 1), отдельные research/claude-v159-sources.json и research/claude-v159-ru.json. Структурная проверка snapshot без merge: 50 CA, нет invalid cycleEvidence и неразрешимых award links, annual-rule всего 32. Это проверка схемы и рендерера, не независимое подтверждение всех исследовательских цитат. PR и финального отчёта готовности ещё нет; коммиты НЕ интегрированы. Отдельный JSON переводов пока не подключён к пользовательскому словарю и должен быть проверен/объединён при интеграции, включая нормализацию ключей и pack test.

## Итог и публикация

Итоговый commit/Actions/staging будут внесены после проверок. Main не менялась; workflows продолжают строить production из main, staging из dev. Разрешения на выпуск в main нет.

## v169 — зависший router в статической сборке

Первый технический коммит: f8f58dd1a7b3ca722f035ec2206b35cb051e7f17, v168. Последние изменения находятся в codex/staging-quality / work/unipath-staging-quality; codex/site-quality / work/unipath-quality содержит только прежний 0fd4d6a. Локальная ветка dev всё ещё a468bd3 и не использовалась как база: актуальная удалённая dev — 0fd4d6a.
Дополнение v169: watchdog начинает отсчёт сразу, не после DOMContentLoaded (это событие может ждать зависший script). Router отправляет сигнал после первого успешного рендера. Поэтому готовый static HTML не скрывает отсутствие работающего JS. Две новые регрессии различают задержанный DOMContentLoaded и успешный рендер. 293 passed, 0 failed; полная сборка v169 успешна; повторная проверка 12095 ссылок на 377 страницах успешна. Браузер: шесть fault/navigation сценариев, включая зависший router, все recovery успешны. 224-ячеечная матрица выше относится к v168; v169 меняет только watchdog/сигнал готовности и проходит отдельные fault-сценарии.
Встроенный браузер открыл опубликованную v167 без экрана Cloudflare. Локальные проверки защиты использовали официальный тестовый ключ; успех/обход реальной CAPTCHA не симулировался в публичном сеансе.

## Отправка и интеграция — ещё не завершены

Push новой технической ветки из Codex отклонён средой на запуске sh/Credential Manager: NtCreateDirectoryObject 0xC0000022. На GitHub codex/staging-quality пока отсутствует. По уточнению владельца из внешнего PowerShell отправлялась старая codex/site-quality, а не новая ветка. Ничего не сбрасывается и не перезаписывается. Все технические коммиты сохранены локально; bundle v168 проверен.
На повторной сверке dev=0fd4d6a, main=1aa5247, Claude продвигает отдельную claude/data-quality-v159 (текущий snapshot требует fetch/review, старый 85f64c4 — только предварительная структурная проверка выше). Готовые PR и отчёт Claude ещё не получены, поэтому объединённый новый staging не объявлен готовым. Следующий шаг — проверить финальный diff и источники, импортировать отдельные переводы без конфликтов, объединить в интеграционной ветке, проверить и только затем обновить dev. Force push и публикация в main запрещены и не выполнялись.

## 31 октября — объединение v170 без ожидания Claude

Предыдущие записи об ожидании PR и серверных refs — история 27 октября. На начало новой сессии GitHub: Claude **d70b56fb9b97368fc043a294fb094952caeec952**, dev **и main уже afa5a19abf3f0d06d273046750e09b5cfac41758**, v169. Main обновлена до начала наших действий; нами не переключалась и не менялась. GitHub compare: все 14 коммитов Claude уже являются предками dev, после них два коммита переводов. Объединяется актуальная dev с нашими c02a978/f8f58dd, повторный перенос данных Claude не нужен.

Обычный Git не имеет сетевого доступа (DNS github.com недоступен). Через разрешённое read-only подключение GitHub прочитаны оригинальные объекты: SHA сверены для 10 недостающих commits, 5 деревьев актуальной dev, 21 текстового blob до использования. Исходные коммиты не пересозданы с другими хешами; серверные refs не менялись. Это не полный fetch partial clone: промежуточные деревья старых commits могут потребовать обычного fetch. Все ветки, прежние коммиты и 920c099 сохранены.

Конфликты — только добавления журнала и ru.js. Сохранены обе стороны: 113 переводов Claude, 20 последующих подписей dev, шесть технических переводов нашей ветки. Университетские данные и award-details совпадают с afa5a19. data/match.js, фотографии, workflows и схема не меняются. Предложенный foundedNote отложен; исследовательское пояснение сохранено.

| Область | Исправлено / проверено | Осталось / требует проверки |
|---|---|---|
| Даты | 59 cycleEvidence, 31 исправленное ежегодное правило; с прежним Acadia в CA 32 annual-rule | Схема проверена для всех записей; не все официальные страницы независимо перечитаны |
| Awards | Все 50 CA имеют описание крупнейшей найденной награды или объяснение неопределённости; domestic-only Queen’s MAA и Bishop’s Goldbloom исключены | Неполные опубликованные суммы/renewal, eligibility StFX McKenna и предыдущие циклы не объявлены подтверждёнными |
| Направления | 144 новых тега относительно 0fd4d6a, с bachelor/programme, URL, датой и языком | Все 50 списков partial; полный аудит языков/кампусов не закончен |
| SAT/ACT | Unknown не превращается в optional; у Brock/SMU сохранены ограниченные правила | Общая политика неизвестна у Ottawa, Saskatchewan, Laurier, Acadia, MRU, UNBC, VIU, UFV, Laurentian; полный Fall 2027/ACT scope Brock/SMU тоже не установлен |
| Бюджет | Прежние scoped Business-примеры сохранены; неизвестное не становится нулём | AnnualCost отсутствует у Western, Manitoba, Winnipeg, MSVU, TRU, VIU, Capilano |
| Остальное | 370 учреждений, 6 стран, CA 50; новых учреждений нет | Полные Uzbekistan requirements у исходных 21; Windsor direct application fee; Lesley Fall 2027; SRH/Karlshochschule photos |

Отчёт Claude и handoff найдены в research/claude-v159-*. Его числа 294 источника / 135 тегов устарели: фактически **324** записи реестра / **144** новых тега. Каждая запись имеет HTTPS URL, цитату и дату чтения. Это проверка реестра, не независимое подтверждение всех 324 фактов. В раннем сообщении текущей сессии число 325 было неточным; машинный подсчёт — 324.

Независимое чтение официального HTML 31 октября (без скачивания PDF/изображений и обхода защиты):

- [Toronto deadlines](https://future.utoronto.ca/deadlines): «2027 admissions Deadlines to apply»; отдельные programme/faculty/document deadlines. Цикл установлен контекстом.
- [Windsor Global Lancer](https://www.future.uwindsor.ca/global-lancer-scholarship/): «up to $24,000 over four years»; international undergraduate directly from full-time secondary school. Это не application fee.
- [Queen’s MAA](https://www.queensu.ca/registrar/financial-aid/application-required/future-students/major-awards): «Available to a Canadian citizen, permanent resident of Canada, or Protected Person.» Исключение подтверждено.
- [Bishop’s Goldbloom](https://www.ubishops.ca/admissions/scholarships-awards-bursaries/michael-goldbloom-excellence-scholarships/): «be citizens or permanent residents of Canada». Срок 2026 не перенесён в 2027.
- [VIU entrance awards](https://services.viu.ca/financial-aid-awards/viu-entrance-awards): Fall 2027, international award C$5,000 × 20; 28 февраля 2027 в 11:59 pm, зона не названа. Не выдумана.
- [StFX McKenna](https://www.stfx.ca/mckennascholars): C$125,000/four years, Fall 2027; международная eligibility не установлена общим упоминанием всех факультетов.
- [Ottawa awards](https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview): C$7,500/term, C$60,000/four years, eligible undergraduate English programmes. Maximum 12 instalments не превращён в самостоятельно вычисленные C$90,000.
- [Trent awards](https://www.trentu.ca/international/discover-trent/tuition-scholarships/scholarships): competitive, до C$15,000/year / C$60,000/four years; ежегодный February 15 не устанавливает набор.
- [Concordia Actuarial Mathematics](https://www.concordia.ca/academics/undergraduate/actuarial-mathematics.html): BA/BSc, SGW campus; [официальная политика](https://www.concordia.ca/admissions/undergraduate/requirements/english-language-proficiency.html): «English is the language of instruction at Concordia.»
- [UFV Mathematics](https://www.ufv.ca/programs/science/mathematics-bsc-or-ba/): bachelor BA/BSc, Abbotsford; [Calendar 2026/27](https://www.ufv.ca/calendar/current/General/EnglishProficiency.htm): «English is the language of instruction at UFV.» Это официальное правило, не вывод из языка сайта.
- [UQAM Psychology 6589](https://etudier.uqam.ca/programme?code=6589): конкретный baccalauréat; французская запись не становится английским маршрутом.

297 passed, 0 failed: прежние 293 плюс четыре проверки интеграции — все переданные переводы, English evidence, собственный срок VIU без timezone/утечки в другой award, исключённые domestic-only awards. Полная staging-сборка v170: 377 страниц noindex, minify data identical. Дальнейшая браузерная проверка и отправка фиксируются по фактическому результату; успешные тесты не закрывают исследования.

Интегрированные через актуальную dev коммиты Claude: bfda712, 85f64c4, 93e43e6, 47fc95f, ded15b7, e046f3b, ceefbb1, 42ca618, a1c3f9e, a3a5f6f, 6bd6151, 4425a48, 1555972, d70b56f; также сохранены коммиты dev 2fdd620 и afa5a19. Это уже опубликованная чужая история, а не новый merge Claude напрямую в main.

Исходные 21 незавершённое Uzbekistan research: McMaster, Ottawa, Queen’s, SFU, Saskatchewan, Windsor, Regina, Laurier, UPEI, StFX, Mount Allison, Bishop’s, Lethbridge, MSVU, TRU, UNBC, UFV, Capilano, UQAM, Sherbrooke, Moncton. У части установлен документ/часть требований; слово «незавершённое» не означает полное отсутствие найденных сведений. Прежние условные примеры других школьных систем и исторические таблицы не подтверждают пригодность конкретного узбекского документа для Fall 2027.

12 095 внутренних ссылок / 377 страниц — pass, включая базу /unipath/staging/ и noindex. Прямая браузерная сеть этой сессии запрещена даже для localhost (ERR_NETWORK_ACCESS_DENIED); web-доступ к опубликованному Pages тоже не удался. Поэтому новая Chrome-проверка выполняется как **офлайн-проверка артефакта**: Playwright подставляет файлы из dist на те же локальные URL без сетевых соединений. Это не проверка доступности Pages/CDN, не измерение живой сети и не обход Cloudflare. Production widget и настройки не менялись. При восстановлении сети нужна отдельная фактическая проверка опубликованного staging.

### Завершённые проверки объединённого артефакта v170

Chrome **156.0.8078.74**, 224 сочетания: 14 маршрутов × RU/EN × light/dark × 360/390/768/1280. Горизонтальное переполнение, незагруженные видимые изображения и неподписанные проверяемые поля: issues=[]; исключений приложения не наблюдалось. В консоли зарегистрирована сетевая ошибка двух внешних ресурсов: jsDelivr flag font и Cloudflare SDK (ERR_NAME_NOT_RESOLVED). Это реальные ограничения проверки, они не удалены из результата. Фактическая доступность этих ресурсов в обычном сеансе не установлена. В офлайн-режиме нельзя считать размеры ресурсов/readyMs измерением реальной сжатой сетевой загрузки.

Проверены budget=0 и сохранение избранного/сравнения, фильтр канадских новостей, отдельные непроверенные направления, прямые static Acadia/Canada и reload, переход из /unipath/staging/university/... в /unipath/staging/#/match. Все шесть сетевых fault/recovery сценариев успешны: failed/stalled translation, failed/throwing/stalled router, static-route base. Клавиатурное меню и country picker возвращают фокус при Escape. Olin 750×536 и TUJ 320×240 реально декодированы браузером из файлов артефакта, атрибуция есть; при искусственной ошибке фото fallback работает и не объявляет отказ JS. Скриншоты мобильных match и translation failure просмотрены визуально. I18N.missing=460 включает собственные имена и не объявляется нулём. Safari, Firefox, Edge, реальные телефоны и screen reader в этой сессии не проверены.

Локальные доказательства: outputs/integration-v170-chrome-quality.json, v170-failure-browser.json, v170-keyboard-photos.json, v170-data-review.json (вне репозитория). Итоговая локальная ревизия — merge-коммит этого отчёта в codex/staging-quality, версия **v170**, родители c02a978 и afa5a19. Проверенный источник данных Claude — d70b56f через актуальную dev. Статус отправки/Actions и точный итоговый SHA фиксируются в отдельной передаче после создания коммита; публикация в main не разрешена и не выполняется.
