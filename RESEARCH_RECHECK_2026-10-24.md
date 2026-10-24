# Повторная проверка UniPath — 24 октября 2026

Рабочий документ, исследование продолжается. Проверка источника и успешный тест
не означают, что все сведения университета исследованы.

## Состояние веток и сохранность

На начало проверки `origin/main` и `origin/dev` указывают на
`a468bd39c56077e195efa82da10c11ea76cd91e1` (v144). Рабочая ветка
`codex/site-quality` сохраняет технический коммит `920c0992061390c268de47e0dcbd8a3d81203644`.
Обновлений dev поверх его базы на момент проверки не найдено; сбросов и
перезаписи изменений не было. Main не менялся. Временные цитаты с компьютера
друга недоступны и доказательствами не считаются.

## Что сделано, что остаётся

| Проверка | Результат | Что ещё нужно |
|---|---|---|
| Неверное подтверждение цикла по дате просмотра | Технический механизм исправлен в 920c099: без структурированного доказательства цикл не считается подтверждённым | Источники всех прежних дат требуют проверки; это не утверждение, что все прежние даты неверны |
| Acadia: автоматическая и дополнительная стипендии, 1 марта 2027 | Источник повторно прочитан; предложения разделены; дополнительным формам присвоено ежегодное правило без года и точная связь с award | Подтверждение конкретного будущего набора отсутствует |
| American: учебный год стоимости | Подтверждены 2026–27, опубликованный COA $87,374 и отдельно страховка $2,759 | 2027–28 не подтверждён; визовая смета имеет другое назначение |
| Lesley 2027 | Повторная проверка: источник всё ещё обозначен Fall 2026 | Сроки 2027 не опубликованы в проверенном источнике |
| SAT/ACT Канады | Точный список 11 извлечён из текущих записей | Требуется завершить проверку каждой школьной системы/факультета; отсутствие SAT на общей странице не доказывает optional |
| Документы Узбекистана | Точный список 21 извлечён; Ottawa и UNBC получили частичные подтверждённые сведения с ограничениями | Оценки, предметы и подготовка не подтверждены повсеместно; общий пункт проверки не закрыт |
| Windsor application fee | Проверенные страницы не установили стоимость прямой международной заявки | Оставлено неизвестным; депозит C$2,000 и graduate fee не подставляются |
| Направления и links.programs | Подтверждена необходимость проверки: ряд ссылок ведёт на стоимость, сроки и стипендии | Исправить проверенные ссылки на каталоги; не расширять направления без оснований |
| Годовая стоимость Канады | На текущей базе отсутствуют 12 annualCost, а не 14 старого аудита | Проверить возможные официальные годовые сметы; per-credit/per-course не превращать в годовые |
| Старые бюджетные/языковые регрессии | Воспроизведены и защищены техническими тестами; подробности SITE_QUALITY_REPORT.md | Повторить после следующих изменений данных |
| Канадские новости | Фильтр всех шести стран и пустое состояние реализованы | Подтверждённые канадские новости ещё не добавлены |
| Свободные фото Olin, Temple Japan, SRH Berlin, Karlshochschule | Заглушки сохранены | Проверить страницы Commons, объект, автора и лицензию |
| Публикация staging | Локальная сборка и проверки возможны | GitHub connector: 403; обычный Git не получил учётные данные через Credential Manager; удалённое обновление не подтверждено |

## Подтверждающие источники этого изменения

Все страницы просмотрены **24 октября 2026**. Цитаты короткие; остальные
пояснения — пересказ. Где цикл не указан, дата просмотра его не заменяет.

| Факт и категория | Официальный URL | Подтверждающая выдержка | Ограничения |
|---|---|---|---|
| American, first-year full-time, on-campus, осень 2026 + весна 2027 | https://www.american.edu/financialaid/cost-of-attendance/undergraduate-first-year-students.cfm | “First-Year Students, Living On Campus, 2026-2027”; “Total COA” | $87,374 за 9 месяцев; обучение $62,680; $54 federal loan fee может не относиться к иностранцам. Не визовая смета и не 2027–28 |
| American, годовая медицинская страховка, 01.08.2026–31.07.2027 | https://www.american.edu/finance/studentaccounts/tuition-and-fees-information.cfm | “Health Insurance Rates 2026-2027” | $2,759 отдельно от COA; возможен одобренный waiver при эквивалентном покрытии. $90,133 вместе — расчёт UniPath, не опубликованный вузом total |
| Lesley, first-time undergraduate, Fall 2026 | https://lesley.edu/admissions/undergraduate-students/how-to-apply-undergraduate | “Early Action Deadline – Fall 2026: December 1” | RD 17 февраля также Fall 2026. Старые даты не переносятся на 2027. Страница содержит разные сроки ответа (две недели и 72 часа), новую точную гарантию ответа не вводим |
| Acadia, undergraduate Canadian/international: дополнительные вступительные awards | https://www2.acadiau.ca/student-services/scholarships-financial-aid/future-students/entrance-scholarships.html | “Complete the scholarship application by March 1st.” | Год отсутствует. Автоматический initial offer C$500–2,500 отделён от дополнительных award-specific предложений до C$80,000 за четыре года. Ряд именных awards ограничен канадскими/новошотландскими школами |
| Ottawa, Uzbekistan, direct-entry undergraduate qualification | https://www.uottawa.ca/study/undergraduate-studies/international-applicants | “Certificate of Completed Secondary Education or Certificate of Secondary Education or Attestat o Srednem Obrazovanii” | Перечень квалификаций, не исчерпывающие требования программы. Отдельного подтверждения оценок, предметов, подготовки и набора 2027 нет |
| UNBC, Uzbekistan general undergraduate entry | https://www.unbc.ca/sites/default/files/sections/admissions/undergraduate/uzbekistan-admissionrequirementssept2021.pdf | “Akademik Litsey Diplomi”; “Kasb-Hunar Kolleji Diplomi”; “final grade of 3 (5-point) or higher” | Памятка версии 2021 03 по-прежнему связана с текущей официальной страницей требований. Не подтверждает 2027 и не устанавливает приём с обычным школьным Attestat. Предметы программы и английский проверяются отдельно |

UNBC: актуальная страница, ведущая к памятке:
https://www.unbc.ca/programs-and-admissions/undergraduate/international-admission-requirements-undergraduate-studies.
PDF прочитан через просмотр официального документа, локально не скачивался.
American прочитан через доступные официальные HTML-страницы; проверки на бота
не обходились. Python-клиент на этих страницах сообщил ошибку доверия TLS;
проверка сертификатов не отключалась.

## Точные исходные очереди

SAT/ACT (11; `academics.sat.policy == null`): University of Ottawa;
University of Saskatchewan; Brock University; Wilfrid Laurier University;
Acadia University; Saint Mary’s University; Mount Royal University;
University of Northern British Columbia; Vancouver Island University;
University of the Fraser Valley; Laurentian University.

Узбекистан (21; текущий `verification.unconfirmed`): McMaster University;
University of Ottawa; Queen’s University; Simon Fraser University;
University of Saskatchewan; University of Windsor; University of Regina;
Wilfrid Laurier University; University of Prince Edward Island;
St. Francis Xavier University; Mount Allison University; Bishop’s University;
University of Lethbridge; Mount Saint Vincent University;
Thompson Rivers University; University of Northern British Columbia;
University of the Fraser Valley; Capilano University;
Université du Québec à Montréal; Université de Sherbrooke;
Université de Moncton.

Отсутствующие annualCost (12): Western, Manitoba, Guelph, Concordia, UPEI,
Saint Mary’s, Winnipeg, Mount Saint Vincent, Thompson Rivers, UNBC, VIU,
Capilano. Windsor и UNB уже исправлены в актуальном dev; повторно не менялись.

## Незавершённые проверки источников

* Laurier: https://www.wlu.ca/future-students/undergraduate/admissions/assets/resources/sat-act-curriculum.html
  прямо относится к homeschool; это не всеобщая test-optional политика.
  https://www.wlu.ca/future-students/undergraduate/admissions/requirements/international.html
  не даёт отдельного описания Узбекистана. Unknown сохраняется.
* UPEI: https://www.upei.ca/admission-requirements/country-specific-requirements
  не содержит Узбекистана. Российский Attestat и 4/5 не переносятся на Узбекистан.
* McMaster: https://future.mcmaster.ca/apply/curriculum-requirements/ —
  прочитанные описания других систем не подтверждают узбекскую квалификацию.
* Windsor: https://future.uwindsor.ca/apply-international и
  https://www.uwindsor.ca/finance/788/fees-and-charges — стоимость прямой
  международной заявки не установлена. Депозит не application fee.
* Brock: текущая ссылка календаря показывает 2024–2025, handbook недоступен
  HTML-клиенту (403). Старые документы нельзя объявлять правилами 2027.

## Проверки

Первый набор исследовательских исправлений: **251 passed, 0 failed**.
Добавлены проверки точной связи ежегодного правила Acadia, отсутствия утечки
этой даты в initial offer/другой набор/категорию, а также отдельной страховки AU.
Сведения о браузерах и полной прежней технической матрице — SITE_QUALITY_REPORT.md.
После нового изменения данных сборку и целевые браузерные проверки требуется
повторить; опубликованный staging этим документом не подтверждается.
