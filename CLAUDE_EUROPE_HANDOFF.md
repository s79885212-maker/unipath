# Передача Claude: европейский стартовый пакет UniPath

## Ветки и границы
- Draft PR: https://github.com/s79885212-maker/unipath/pull/32 → dev. Ветка codex/europe-foundation. НЕ сливать и НЕ публиковать.
- База dev: f064ff8776ff8fa4f6839acdf25dc9dda6b6be30, v269; PR31 уже merged только в dev. Мобильное сравнение может выпускаться независимо.
- Main/production:129c5b96a4562455919a1fc5f18bb7ef1044123f, v268. Наша работа main/dev не меняет.
- Текущий локальный кандидат:v272,548 уникальных профилей,9 стран. Исходные540 записей шести стран сохранены.

## Сохранённые пакеты
1. Италия:110bf094e512ae9b0b581564a4ed51a3fb4bb7f0, v270. Bocconi Management и Bologna Economics and Finance. Первый push сделан до продолжения исследования.
2. Франция:b3d0600b097da9a12788723e1808e0ba925ba5e3, v271. École Polytechnique BSc, ESSEC Global BBA Cergy и EPITA Computer Science Le Kremlin-Bicêtre.
3. Испания:v272, финальный SHA указан в head PR. UC3M Data Science and Engineering Leganés; IE Computer Science and AI Madrid/Segovia по маршруту; UAB Business Administration English Bellaterra.

## Файлы и генерация
- research/europe/country-it.json, country-fr.json, country-es.json — двуязычные исходные записи с источниками и пробелами.
- tools/europe_batch.py → data/country.it.js/.fr.js/.es.js и data/universities.it.js/.fr.js/.es.js; также manifest.json, annualCost и RU-словарь. Генератор не скачивает источники.
- data/i18n/ru.js — единственный исходный RU-словарь; packed ru.<country>.js генерируются сборкой.
- Подключение стран: index.html, build-artifact.py, tools/prerender.py. Перечень направлений частичный, а не утверждение об отсутствии других программ.
- assets/js/app.js: Europe/Rome для подтверждённого времени Bocconi; явно неизвестный тип учреждения больше не становится частным в сравнении. Отдельный мобильный фикс PR31 не переписывался.
- tests/europe.js — регрессии пакета, годов/смет/тестов/дедлайнов; исходные проверки540 карточек сохранены.

## Проверки — PowerShell из корня checkout
```powershell
python -X utf8 tools/europe_batch.py
node tests/run.js
$env:BASE_PATH='/unipath/'; $env:SITE_URL='https://s79885212-maker.github.io/unipath'
Remove-Item Env:STAGING -ErrorAction SilentlyContinue
python -X utf8 build-artifact.py
node tests/links.js
node tools/europe_browser.cjs http://127.0.0.1:8781/unipath/ research/europe/final-production-browser.json
$env:BASE_PATH='/unipath/staging/'; $env:SITE_URL='https://s79885212-maker.github.io/unipath/staging'; $env:STAGING='1'
python -X utf8 build-artifact.py
node tests/links.js
node tools/europe_browser.cjs http://127.0.0.1:8781/unipath/staging/ research/europe/final-staging-browser.json
python -X utf8 tools/europe_links.py
```
Browser helper maps local dist into the named local URL; no server, public bypass or deployment. It uses Chrome and an environment-specific Playwright path; adjust PLAYWRIGHT_MODULE/Chrome executable on another machine. Do not disable access protection. Python3/Node are required.

## Результаты и ограничения
Точная сводка: research/europe/final-checks.json. Полная таблица8 вузов и очередь: research/europe/REVIEW.md. Протоколы: tests.log, production/staging-build.log, production/staging-links.log, final-*-browser.json, external-links.json. Скриншоты в той же папке.
653 теста проходят. Production проверен:558 страниц,24 574 внутренних ссылки;32 открытия карточек RU/EN390/1280 и16 сценариев каталога/поиска/сравнения/reload, ошибок0. Staging также:558 страниц,24 574 ссылки,32 открытия карточек и16 сценариев; дополнительно русские города, удаление третьего вуза и сохранение двух после reload. Ошибок0.
Это локальные сборки, НЕ проверка опубликованной Европы. Нет реального iPhone/Threads/Safari/WebKit. GitHub Actions для PR не настроены: workflow запускает тесты при push dev, мы dev не пушим.
45 внешних ссылок:41 HTTP200,5 редиректов,0 ответов404/410;4 сетевых ошибки TLS/DNS описаны отдельно. Блокировку/сетевую ошибку не считать доказательством мёртвой ссылки.
Фото оставлены штатными заглушками; авторы/лицензии не выдуманы.

## Следующие источники и вопросы
1. Bologna CLEF2027/28: https://corsi.unibo.it/1cycle/EconomicsFinance/how-to-enrol — точный call, тест, язык и переменная плата; не выводить SAT из ссылки в меню.
2. Polytechnique: https://programmes.polytechnique.edu/en/bachelor/admissions/admissions-criteria-and-procedure — заголовок2026 конфликтует с таблицей дат2026–2027; до уточнения не добавлять подтверждённые события. Нужен год цены€19 600.
3. ESSEC: https://essec.edu/en/program/global-bba-international/ — восстановить раунды2027, разрешить конфликт рекомендаций, срок/продление стипендии. Cergy не получает Rabat-only DET/French правила.
4. EPITA: https://www.epita.fr/en/bsc-computer-science-program-overview/ и https://www.epita.fr/en/fees-and-funding/ — срок2027, частота€200 допсборов; французскийB2 нужен к выпуску, не к приёму.
5. UC3M: https://www.uc3m.es/bachelor-degree/admission/application/international-students/non-european и https://www.uc3m.es/bachelor-degree/language/level-required — IELTS5,5 подтверждает язык в первый год, не установлен как вступительный минимум; нужны условия2027 и новый тариф.
6. IE: https://www.ie.edu/university/admission/access-to-university/freshmen-students/ — IELTS7 минимум,7,5 рекомендация; уточнить роль новогоTOEFL5,0, секции и выбранный кампус.
7. UAB: https://studyincatalonia.gencat.cat/en/plan-your-studies/accreditations-recognitions — иностранная школьная квалификация; не подставлять validation университетского обучения. Уточнить IELTS/TOEFL и тариф вне ЕС2027.
8. Возможный третий итальянский вуз Padua Information Engineering: https://www.unipd.it/en/corsi-di-laurea/information-engineering и https://www.unipd.it/en/ammissioni-information-engineering — пока исследование, НЕ добавлен.
Полные бюджеты проживания и право конкретного кандидата на помощь ещё не установлены. Конкурсная помощь не вычитается. Не выдавать предыдущий цикл/сбор за кредит за полный бюджет Fall2027.

Обновляйте эту передачу, отчёты и PR после каждого проверенного пакета. Commit/push обычные, без force.
