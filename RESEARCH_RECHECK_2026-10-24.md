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
| SAT/ACT Канады | Точный список 11 извлечён; официальные страницы каждой записи проверены в указанной области; общие политики остаются null | Требуется завершить проверку каждой школьной системы/факультета; отсутствие SAT на общей странице не доказывает optional |
| Документы Узбекистана | Точный список 21 извлечён; Ottawa, UNBC, Capilano и Sherbrooke получили частичные подтверждения с ограничениями | Оценки, предметы и подготовка не подтверждены повсеместно; общий пункт проверки не закрыт |
| Windsor application fee | Проверенные страницы не установили стоимость прямой международной заявки | Оставлено неизвестным; депозит C$2,000 и graduate fee не подставляются |
| Направления и links.programs | После общей проверки 50 назначений: 47 ведут на проверенные каталоги, 3 неверные ссылки на стоимость убраны; UFV получил два подтверждённых бакалаврских направления | Каталоги Alberta/Brock/Winnipeg не подтверждены из-за 403; полнота направлений и язык конкретных маршрутов UFV требуют исследования |
| Годовая стоимость Канады | На текущей базе отсутствуют 12 annualCost, а не 14 старого аудита | 12 пробелов повторно исследованы; остаются per-credit/per-course, прежние циклы, конфликты или недоступные источники; годовые суммы не угаданы |
| Старые бюджетные/языковые регрессии | Воспроизведены и защищены техническими тестами; подробности SITE_QUALITY_REPORT.md | Повторить после следующих изменений данных |
| Канадские новости | Фильтр всех шести стран; добавлено открытие Early Admission MRU Fall 2027 по официальному календарю | Никаких вымышленных новостей или дат публикации; других вузов это объявление не касается |
| Свободные фото Olin, Temple Japan, SRH Berlin, Karlshochschule | По явному разрешению владельца добавлены Olin (2002) и TUJ Setagaya (2019), с авторами, лицензиями и видимыми годами | У SRH и Karlshochschule остаются заглушки: подходящий свободный объект не подтверждён |
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

## Дополнения v147

Все источники ниже прочитаны 24 октября 2026.

* Mount Royal, международный бакалавриат, **Fall 2027**:
  https://www.mtroyal.ca/Admission/DatesDeadlines/index.htm — “Fall Semester 2027”.
  Сохранены 1 февраля (Early Admission), 1 марта (стипендии), 1 мая
  (международная заявка), отдельно добавлено 15 мая (документы). Никакого
  точного времени/зоны источник не устанавливает. Некоторые программы
  закрываются раньше; для срока заявки есть исключение IRPR 214.
  Открытие приёма 1 октября 2026 подтверждено тем же календарём, дата публикации
  неизвестна. Стипендиальный период начинается отдельно 1 ноября.
  Старая общая https://www.mtroyal.ca/InternationalStudents/Admissionrequirements/index.htm
  показывает 1 апреля/1 мая без года. Для установленных дат Fall 2027 использован
  явно названный календарь, расхождение не скрыто.
* American, **AU Emerging Global Leader, international first-year, Fall 2027**:
  https://www.american.edu/admissions/international/au-egls-apply.cfm —
  “full tuition, room, and board”; “January 15, 2027”. Два получателя,
  отдельная заявка после Common Application, эссе, документы и официальные
  результаты английского к указанному сроку. Дополнительные конкурсные
  partial EGL до $40,000/год — отдельное предложение в том же процессе.
  Продление до четырёх лет зависит от удовлетворительной успеваемости.
  Страховка, книги, перелёты, налоги и прочие расходы не покрыты.
  Приблизительные $4,000 непокрытых расходов из award page не превращены
  в гарантированный бюджет и не заменяют проверенную стоимость страховки.
  Запись удалена из устаревшего списка `awardNotDescribed`, чтобы слой данных
  не отменял новое исследование. Ни одна конкурсная сумма не вычитается в match.
* UFV, два **bachelor** маршрута, текущие страницы без указанного учебного года:
  https://www.ufv.ca/business/programs/bba/ — “Abbotsford campus”;
  https://www.ufv.ca/programs/computing/computing-science-bsc/ —
  “Abbotsford campus; some courses offered in Chilliwack”. Подтверждены
  business и computer-science, статус partial. Язык этих маршрутов отдельно
  не установлен: `language: null`, строгий английский фильтр их не включает.
  Это не добавление нового университета и не объявление полноты программы.

### Исправленные каталоги

Это проверка назначения ссылок, а не подтверждение всех программ/языков.
Область: undergraduate, где каталог общий — нужна фильтрация уровня.
Набор не приписан, если каталог его не называет. Дата просмотра всех: 24.10.2026.

| Вуз | URL | Короткий заголовок/подтверждение |
|---|---|---|
| Mount Allison | https://mta.ca/academics/programs-and-degrees | “Programs and degrees” |
| Ottawa | https://www.uottawa.ca/study/undergraduate-studies/undergraduate-programs | “Undergraduate programs” |
| UQAM | https://etudier.uqam.ca/programmes | “Programmes” |
| Queen’s | https://www.queensu.ca/admission/undergraduate-programs | “Undergraduate Programs” |
| UPEI | https://www.upei.ca/programs?field_program_level_value=undergraduate | “Undergraduate Programs” |
| McMaster | https://future.mcmaster.ca/programs/ | “Undergraduate Programs” |
| UFV | https://international.ufv.ca/future-students/programs/ | “UFV programs available to international students” |
| Laurentian | https://laurentian.ca/academics/undergraduate-programs | “Undergraduate Programs at Laurentian” |
| Windsor | https://www.future.uwindsor.ca/programs/?p-level=undergraduate | “Programs”; каталог зависит от JavaScript, отдельные программы не переписаны |

### Фотографии: результат поиска

* Olin: https://commons.wikimedia.org/wiki/File:Olin_College_Great_Lawn.jpg —
  Michael Maloney, CC BY-SA 3.0; подтверждён great lawn Olin, историческое фото.
* Temple Japan: https://commons.wikimedia.org/wiki/File:TUJ_Setagaya.jpg —
  Temple University Japan, CC BY-SA 4.0; Tokyo campus at Showa Women’s University,
  26.07.2019, 320×240. Старые фотографии Azabu не подменяют нынешний кампус.
* Владелец явно разрешил скачать оба указанных файла. Оригиналы скачаны без
  изменения содержимого, визуально просмотрены; thumb.jpg — копия тех же байтов.
  Автор, лицензия и страница файла добавлены в data/photos.js.
* SRH: поиск Commons дал старые логотипы и здания других школ группы; подходящий
  снимок актуального Berlin campus не подтверждён. Karlshochschule: логотипы
  и портрет президента не подходят как фото кампуса. Заглушки сохранены;
  утверждения, что свободных фото вообще не существует, не делаем.

## Проверки

Первый набор исследовательских исправлений: **251 passed, 0 failed**.
Добавлены проверки точной связи ежегодного правила Acadia, отсутствия утечки
этой даты в initial offer/другой набор/категорию, а также отдельной страховки AU.
Сведения о браузерах и полной прежней технической матрице — SITE_QUALITY_REPORT.md.
После нового изменения данных сборку и целевые браузерные проверки требуется
повторить; опубликованный staging этим документом не подтверждается.

После v146 повторены локальная staging-сборка (376 статических страниц,
377 HTML с noindex) и **128** проверок Chrome 155.0.8059.86: 8 разделов,
RU/EN, light/dark, ширины 360/390/768/1280. Ошибок JS, неудачных запросов и
зафиксированных проблем разметки в этой матрице нет. Это ограниченный результат
проверок, а не заявление об отсутствии всех ошибок. После v147: **254 passed,
0 failed**; финальная сборка/целевые браузерные проверки ещё предстоят.

## Дополнения v148: SAT/ACT, Capilano, фотографии

Все 11 общих политик остаются `null`. Это результат ограниченной проверки,
а не заключение о наличии/отсутствии обязательного теста. В карточках теперь
сохранены источник, дата 24.10.2026 и объяснение области проверки вместо
прежнего общего «Not checked on the pages read». Числовые условия специальных
категорий не стали универсальными минимумами в подборе. Ни один пункт
`verification.unconfirmed: test policy` не закрыт.

| Вуз; категория | Прочитанный официальный источник | Короткая выдержка/область | Результат |
|---|---|---|---|
| Ottawa; American high school в США и за рубежом | https://www.uottawa.ca/study/undergraduate-studies/international-applicants/usa | “American high school program in the United States or abroad” | Явная SAT/ACT политика не установлена; не optional |
| Saskatchewan; home-based learner | https://admissions.usask.ca/requirements/home-based.php | “the SAT I”; “minimum score of 1100”; “minimum average of 24” | SAT/ACT допустимы в специальной оценке homeschool; общая политика и 2027 не установлены |
| Brock; undergraduate calendar | https://brocku.ca/webcal/current/undergrad/admi.html | “2024–2025” | Не подтверждает 2027; handbook 403 не обходился |
| Laurier; homeschooled | https://www.wlu.ca/future-students/undergraduate/admissions/assets/resources/sat-act-curriculum.html | “to support a homeschooled applicant, however it is not required” | Это не общий optional для других школьных систем |
| Acadia; American students | https://www2.acadiau.ca/admissions/application-process/american-students.html | “Admissions requirements for American students” | Явная общая SAT/ACT политика не установлена |
| Saint Mary’s; US-patterned high school | https://www.smu.ca/future-students/admissions/internationaladmissions/ | “US Patterned” | Предметы/оценки описаны, явная SAT/ACT политика не установлена |
| Mount Royal; international applicants | https://www.mtroyal.ca/InternationalStudents/Admissionrequirements/index.htm | “general and specific admission requirements” | Нет установленного общего правила SAT/ACT по системам |
| UNBC; country requirements / US | https://www.unbc.ca/programs-and-admissions/undergraduate/international-admission-requirements-undergraduate-studies | “United States of America” | Список квалификаций не доказывает optional |
| VIU; international / equivalencies | https://www.viu.ca/admissions/international | “High school completion equivalency list by country” | Школьные эквиваленты и языковые альтернативы не устанавливают общую SAT/ACT политику |
| UFV; international / programme prerequisites | https://international.ufv.ca/future-students/apply-to-ufv/admission-requirements/ | “General requirements”; “Program requirements” | Требуется отдельная политика по системе/программе |
| Laurentian; American curriculum / separate faculty prerequisites | https://laurentian.ca/academics/admissions/international/undergraduate-admissions | “High School Diploma”; “B average or better” | Явная SAT/ACT политика не установлена; не optional |

Для этих общих политик **2027 не подтверждён**; прочитанный standing page без
указанного цикла не выдаётся за правило конкретного будущего набора.

Capilano: текущая официальная страница
https://www.capilanou.ca/admissions/apply-to-capu/admission-requirements/international-students/
ссылается на
https://www.capilanou.ca/media/capilanouca/programs-amp-courses/capu-for-you/international-students/EQU-INTL-SEC-CURRICULA-202120-Web.pdf.
Стр. 10: “O'rta Ma'lumot To'g'risida Shahodatnoma”; “Attestat o Srednem Obrazovanii”.
Категория — international secondary-school completion equivalency, файл 2021.
Оценки, предметы, необходимость подготовки и набор 2027 этой строкой не
подтверждаются. Добавлена частичная квалификация с source/verified, общий
пункт Узбекистана остался открытым. Документ локально не скачивался.

Windsor: `applicationFee.amount: null` сохранён; добавлено объяснение повторной
проверки прямого международного маршрута. Депозит/graduate fee не подставлены.

Одобренные владельцем оригиналы фото:

| Объект | Автор / лицензия | Размер и SHA-256 оригинала |
|---|---|---|
| Olin College Great Lawn, 2002 | Michael Maloney / CC BY-SA 3.0 | 750×536, 189141 bytes; `33d818ded15e4a79111ede481d41bc40a7a03da1ef8a31b62a65f7196ce4da9f` |
| Temple Japan Setagaya, 26.07.2019 | Temple University Japan / CC BY-SA 4.0 | 320×240, 38628 bytes; `e743c4566faad20b92ca9bd613a9502fe1d61250bb8a67e4144c1be3fe2b1269` |

Страницы файла и лицензии указаны в разделе фотографий выше и в data/photos.js;
каждая карточка показывает атрибуцию. Оригиналы и thumbnail сохранены без
изменения байтов; изображения просмотрены, объект соответствует описанию.
Невысокое разрешение TUJ и исторический возраст обоих фото явно обозначены.
После изменения **254 passed, 0 failed**.

## Дополнения v149: вся очередь каталогов и документы Узбекистана

По всем **50** канадским `links.programs` составлен отдельный реестр
`research/2026-10-24-catalogues.json`: URL, короткая выдержка заголовка,
дата, область проверки и результат. **47** назначений проверены как каталоги.
Каталоги могут включать несколько уровней и требовать фильтра уровня;
Guelph/Windsor и ряд других зависят от JavaScript. Полнота направлений и
условия языка/кампуса из наличия каталога не выводятся.
У Alberta/Brock/Winnipeg запросы каталогов вернули 403; они не обходились.
Прежний `links.programs` у всех трёх был буквально равен `links.cost`
(калькулятор/страница tuition). Эти неверные кнопки убраны (`null`), в
unconfirmed добавлен каталог. Официальный сайт и сведения о стоимости сохранены.

Полная таблица **21** узбекского вопроса с источниками и ограничениями:
`research/2026-10-24-uzbekistan.md`. Частичные сведения получены для **4**:
Ottawa, UNBC, Capilano, Sherbrooke. Для остальных оставлен честный неизвестный
результат, ссылка на проверенные общие требования и дата. Сохранены ранее
подтверждённые ограниченные пояснения Bishop’s. Российские 4/5 из узбекского
пояснения UPEI убраны: это не узбекское требование. Ни один общий пункт 21 не
закрыт как полностью исследованный. У Sherbrooke общий официальный принцип
13 лет и инженерный подготовительный сертификат отделены от устаревшей
узбекской памятки с обновлением 2006 года внутри справочника 2022.

### Перепроверка 12 пробелов годовой стоимости

Дата просмотра источников: 24.10.2026. Ни одна кредитная/курсовая ставка не
умножена на предположительную нагрузку, неизвестная стоимость не заменена нулём.
Существующие сведения о цене не объявлены новыми подтверждёнными годовыми
сметами только потому, что общая страница доступна.

| Вуз | Официальная страница | Почему annualCost не заполнен |
|---|---|---|
| Western | https://welcome.uwo.ca/next-steps/finances/index.html | Всё ещё “estimates based on 2025-26 tuition”; предыдущий цикл |
| Manitoba | https://umanitoba.ca/registrar/tuition-fees/undergraduate | “Tuition rates per credit hour”; состав teaching units и обязательных сборов индивидуален |
| Guelph | https://www.uoguelph.ca/admission/undergraduate/international/funding | Оценки на 2025–26, несмотря на новые стипендиальные строки Winter/Fall 2027 |
| Concordia | https://www.concordia.ca/students/financial/tuition-fees/rates/undergrad.html | “per credit”; отдельные факультеты/сборы, нет универсального подтверждённого total |
| UPEI | https://calendar.upei.ca/current/chapter/tuition-and-fees-2/ | Раздел 2026–27, стоимость по курсам + international fee; полная годовая нагрузка/смета не установлена |
| Saint Mary’s | https://www.smu.ca/future-students/moneymatters/tuitionandfees/ | “per course (half credit)”; полная годовая смета не подтверждена |
| Winnipeg | https://www.uwinnipeg.ca/fees/tuition.html | Повторный запрос 403, прежняя цена по курсам не превращена в новую годовую |
| Mount Saint Vincent | https://www.msvu.ca/future-students/money-matters/tuition-fees/ | Существующий конфликт официальных сумм сохранён; страница показывает сценарии 2026–27, одной бесспорной суммы не выбрано |
| TRU | https://www.tru.ca/truworld/future-students/fees.html | Страница содержит несколько intake years и ставки за кредит/полную степень; total degree не годовая стоимость; прежний цикл не переносится на 2027 |
| UNBC | https://www.unbc.ca/calendar/undergraduate/fees | “$1,040.15 per credit hour”; универсальная годовая нагрузка не назначена |
| VIU | https://www.viu.ca/admissions/tuition-fee-schedule | Новый HTML-ответ клиент получил со сжатием, содержание не подтверждено этим чтением; прежняя per-credit запись не изменена |
| Capilano | https://www.capilanou.ca/admissions/fees--finances/tuition--fees/tuition--other-fees/ | Общий раздел доступен; полная годовая смета для конкретного международного маршрута не установлена |

Эта проверка не исключает существования других официальных годовых смет.
Дальнейший поиск конкретных программ/нагрузки остаётся исследовательской задачей.

## Дополнения v150: реальные этапы Pearson и подтверждённый цикл UBC

24.10.2026 повторно прочитаны:

* https://future.utoronto.ca/pearson-scholarships — “September 2027”. Уже
  существовавшие даты Pearson 16 октября и 6 ноября сохранены, добавлена
  отдельная школьная номинация **9 октября 2026**. Требование ранней заявки
  на поступление обозначено `kind: admission` с точной ссылкой на award;
  это не общий срок поступления U of T. Сам конкурс и покрытие не открыты
  заново и не изменены без основания. Старые FAQ с датами 2025–26 не перенесены
  на новый цикл. На дату аудита номинация и ранняя заявка закрыты, стипендиальная
  форма до **6 ноября 2026** ещё впереди; это не даёт возможности участвовать
  без своевременной номинации и ранней заявки. Точное время/зона не назначены.
* https://you.ubc.ca/applying-ubc/dates-deadlines/ — “September 2027”.
  Четыре уже записанных события получили доказательство цикла: International
  Scholars 15.11.2026, общий admission 15.01.2027, документы International
  Scholars 31.01.2027, ELAS 15.02.2027. Опубликованные 23:59 PST для первых
  двух сохранены; документы не получили выдуманное время. Только два
  award-specific события связаны с International Scholars; январский общий
  admission и общий ELAS не копируются во все awards. Покрытие UBC этой
  проверкой дат повторно не исследовалось.

Карточка Largest award с точным id теперь показывает те же связанные даты,
что и таблица. Это применяется к Pearson, UBC International Scholars и AU EGL;
идентичность, категория и набор должны совпасть. Общие сроки не подставляются.
Отдельные документы/номинации/ранняя admission-заявка сохраняют свои категории.
Контракт расширен совместимо в DATA_DISPLAY_CONTRACT.md.

**257 passed, 0 failed**. Новая реальная регрессия фиксирует состояние Pearson
на 24.10.2026, не опираясь на дату запуска тестов, и отделяет award-specific
admission от общей ближайшей даты. До финального браузерного прогона результат
на удалённом staging не заявляется.

### Открытые исследования крупнейших awards

Новая подробная проверка AU EGL завершена в пределах описанного источника.
У большинства канадских вузов full-level award по-прежнему не исследован
исчерпывающе: 48 записей `fullRide.available: null` сохранены. Это не означает
«полной стипендии нет». Текущие частичные merit-списки не доказывают отсутствие
других awards. Найденные дополнительные следы Ontario Tech GLA всё ещё
обозначают CLOSED 2026–2027, а не открытый конкурс Fall 2027; сумма C$120,000
не превращена в утверждение полного покрытия. Сведения с тестового домена
Trent не перенесены в данные как подтверждённые новые правила. Нужна дальнейшая
проверка основных официальных страниц и конкретных циклов.

## Дополнение v151: ошибка восстановления новостного фильтра

Проверка в настоящем Chrome выявила функциональную ошибку, которой не было
видно по сборке или первоначальным DOM-тестам. При новой сессии сохранённый
`cycle` отсутствовал. Поиск допустимого цикла находил standing news с таким
же отсутствующим полем и присваивал фильтру `undefined` вместо `all`.
В результате канадская новость с `cycle: '2027'` присутствовала в данных,
но исчезала из списка. Показ пустого состояния был неверным.

Восстановление country/cycle теперь принимает только допустимые строки.
Регрессия проверяет новую сессию с общей новостью без года и канадским
объявлением с годом 2027. **258 passed, 0 failed**. Предыдущие 128 проверок
разметки не доказывали правильность этой функции; финальный браузерный
прогон должен отдельно подтвердить фактическую видимость Mount Royal.

Обычный Git проверен dry-run только для `HEAD:refs/heads/codex/site-quality`:
Credential Manager не стартует в текущей среде (`NtCreateDirectoryObject`,
`0xC0000022`), учётные данные не получены. Это не проверка прав владельца
GitHub и не ошибка 403 от самого GitHub. Через ранее отклонённое подключение
запись повторно не запрашивалась. Повторный read-only запрос публичного API:
main и dev всё ещё `a468bd39c56077e195efa82da10c11ea76cd91e1`.


## Дополнение v152: Ontario Tech и границы проверки awards

24.10.2026 на [официальной странице международного приёма Ontario Tech](https://admissions.ontariotechu.ca/applicant-information/international-applicants.php)
проверен явный контекст «Fall 2027» перед календарём. Четыре существовавших
события получили структурированное доказательство этого цикла: 29 января,
11 февраля (GLA), 31 марта и 3 мая. Год установлен контекстом страницы,
а не вычислением дня недели. Offer letter определяет фактический reply deadline.
GLA связан только с собственным событием 11 февраля по id/category/набору.
[Стипендиальный офис](https://safa.ontariotechu.ca/awards-bursaries-and-scholarships/undergraduate-student-finances/scholarships/scholarships-and-awards-for-international-students.php)
ещё описывает закрытый конкурс 2026–27. Открытие формы и все условия GLA
2027 не подтверждены. Отдельная Emergency Bursary 2027–28 не использована
как источник даты GLA. C$120,000 за четыре года не означает полного покрытия.

Реестр research/2026-10-24-award-review.json содержит первоначальную проверку
48 связанных официальных страниц: 40 читаемых HTML, 8 недоступных. Это
проверка охвата источников, а не завершённое исследование всех awards.
У всех 48 fullRide.available сохранено null. Дополнительные следы:

* [Mount Allison](https://mta.ca/costs-financial-aid/scholarships-and-awards-first-year-students):
  Class of 1968 Entrance Award покрывает tuition первого года, один получатель.
  Международная допустимость и цикл 2027 не установлены. Последующая
  стипендия при GPA 3.7 не названа гарантированным продлением этого award.
* [Saint Mary’s](https://www.smu.ca/future-students/moneymatters/scholarshipsawards/):
  правила Major Renewable 2027 ограничены Canadian citizens/permanent residents.
  Они не перенесены на отдельные автоматические Admission Scholarships.
* UNBC: отсутствие fully funded scholarship с проживанием не доказывает
  отсутствие полной tuition-стипендии. Отрицательный fullRide не назначен.
* Trent: результаты с тестового домена не использованы как новые правила.

Видимые названия разрешённых фотографий уточнены годом: Olin — исторический
снимок 2002, TUJ Setagaya — 2019. Ранее год был только в caption metadata,
которое галерея не выводит. Автор и лицензия сохранены.

## Дополнение v153: согласованная подпись покрытия Pearson
В браузере воспроизведена техническая ошибка: «Full tuition only» отрицало
подтверждённое поле housing=true, потому что meals=null не позволяло категории
стать full-ride. Общая подпись теперь «Full tuition covered», с существующим
русским переводом «Обучение покрывается полностью». Классификация, суммы и
исследовательские поля не менялись; неизвестное питание не подтверждалось.
Добавлена регрессия на реальной записи Pearson.


## Продолжение v154 — школьная система и границы SAT/ACT

Все источники ниже просмотрены 24.10.2026; учреждения не добавлялись.

| Факт / абитуриент | Источник и короткая выдержка | Границы подтверждения |
|---|---|---|
| Saint Mary’s, American School System, undergraduate, Halifax | https://smu-ca-public.courseleaf.com/undergraduate/recruitment-admission-services/ — «high school transcript, and SAT score results» | Официальный календарь 2026–27, действует с сентября 2026. SAT обязателен для этой школьной системы; ACT, минимум, узбекский документ и Fall 2027 не установлены. Календарь связан с https://www.smu.ca/academics/; это не американский SMU.edu |
| Brock, US Grade 12 diploma, пограничная заявка | https://brocku.ca/university-secretariat/faculty-handbook/section-3/ — «For borderline cases, SAT scores are helpful» | §3.3.3(c) устанавливает поддержку SAT в этой области; статус accepted, не общая optional-политика. ACT и 2027 не установлены. Старые библиотечные PDF с иными баллами не использованы |
| Mount Allison, International / Uzbekistan / BSc / High school student, Sackville | https://mta.ca/admissions/admission-requirements — «A university-preparatory math (pre-calculus) is required» | Результат селектора прочитан в браузере после VIEW RESULTS: language arts + обычно ещё четыре подготовительных курса, 65% по рассматриваемым курсам; индивидуальная оценка страны. Точное название узбекской квалификации, пересчёт шкалы, обязательная подготовка и 2027 не установлены. Выписки от учреждения, при необходимости нотариальные английские переводы |

Общая международная recruitment-страница Saint Mary’s SAT не упоминает;
это не отменяет требование официального календаря и не доказывает optional.
В академическом календаре иных систем есть отдельные разделы; неизвестное
не распространено на них. Оба ACT-поля остались null.

Существующее значение conditional используется без расширения схемы.
Его прежнее общее пояснение обещало, что все остальные системы принимаются
без SAT/ACT. Теперь интерфейс и подбор требуют проверить конкретную систему
и программу, не выводя правило остальных маршрутов из одного подтверждения.
SAT не становится optional в фильтре; минимальные баллы не выдуманы.

Изначальная очередь SAT/ACT 11 остаётся открытой для полной проверки:
у двух теперь записаны частичные scoped-статусы (SMU conditional / Brock accepted),
девять имеют unknown. Ни одна из этих двух проверок не подтверждает правила
Fall 2027 для всех школьных систем. Общие пункты verification не закрыты.
Mount Allison получил дополнительное частичное пояснение; точные узбекские
условия всех 21 ещё не считаются полностью проверенными.


## Продолжение v155 — SFU USES, Uggla и доступ к форме

Просмотр 24.10.2026. SFU, international high-school applicants, Fall 2027,
любая undergraduate degree при выполнении предметов основной программы:
https://www.sfu.ca/students/financial-aid/entrance/highschool/uses.html —
«8 x $17,500»; «The Fall 2027 USES application is temporarily unavailable».
Международная USES: C$140,000, в отдельных случаях возможна доплата
C$8,000/term по финансовой нуждаемости. Денежная сумма не означает полного
покрытия tuition/COA, средства конкурсные. Общая domestic шкала 20–60 тысяч
не является минимальной международной суммой. Условия продления ещё требуют
проверки. Связаны отдельные application 15.12.2026 и references/documents
31.01.2027. Портал временно недоступен, страница ожидает восстановление
02.11.2026; календарный срок не равен доступности формы. Источник пишет
11:59pm PCT; нестандартная аббревиатура не преобразована в выдуманный пояс.

https://www.sfu.ca/students/admission/fees-scholarships/uggla.html —
«only available to Domestic Canadian students». Поэтому её полное покрытие
не перенесено на иностранцев. У SFU fullRide.available остаётся null, а
ограниченная need-based доплата USES не названа meetsFullNeed.

https://www.sfu.ca/students/admission/apply/dates-deadlines/high-school/fall-term.html —
«Fall 2027 Term». Доказательство цикла добавлено к пяти существующим датам.
Контекст страницы подтверждает год, прежнее объяснение только датой чтения
заменено. February 7 Contemporary Arts имеет перечисленные исключения;
общие документы и ответ на offer не подставлены в scholarship dates.

Windsor: ссылка прямой international undergraduate заявки на официальной
https://future.uwindsor.ca/apply-international ведёт к OUAC Windsor 2027
https://www.ouac.on.ca/apply/windsorugrad/intl/en_CA/user/login.
Публичная страница входа fee не указывает. Вход/создание аккаунта не выполнялись,
сумма остаётся неизвестной. Lesley: повторное чтение того же официального
источника по-прежнему показывает Fall 2026, не переносится на 2027.

Git: повторный обычный push dry-run только собственной ветки снова завершился
ошибкой запуска Credential Manager, NtCreateDirectoryObject 0xC0000022.
Ни одна ветка GitHub не изменена; через коннектор запись не повторялась.
