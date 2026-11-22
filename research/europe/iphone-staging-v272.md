## Живые проверки v272 — завершённая часть

Staging: https://s79885212-maker.github.io/unipath/staging/?lang=ru
SHA:e5b7e352dd1c093be5cbc63f64e64d993b0f0adf. Deploy success:https://github.com/s79885212-maker/unipath/actions/runs/45050923152

- Chrome157, RU390light/EN360dark/RU1280light: Yale+Princeton, третийHarvard, удаление/reload проходят; обе колонки и значения одной строки видны, нижняя панель не перекрывает таблицу.
- Bologna+ESSEC+UC3M: те же3 конфигурации проходят. Дополнительно после удаления ESSEC и reload переключение RU→EN→RU сохраняет Bologna+UC3M.
- Все8 профилей RU/EN390/1280:32 прямых открытия;16 сценариев фильтров/поиска/сравнения;0 ошибок.
- Живой каталог:548 уникальных,IT2/FR3/ES3; noindex сохранён.
- Подбор Fall2027 €35,000 в RU/EN: Bocconi/ESSEC/EPITA/IE показывают только tuition-within-budget с предупреждением о расходах на жизнь; Bologna/Polytechnique/UC3M/UAB остаютсяunknown. Полных совпадений нет. Неустановленная политикаSAT не сталаoptional.

**Найдено:** запрос«Гарвард» даёт0. В data отсутствует русский алиас Harvard (также отсутствует в прежней main); это не регрессия Европы. Готовится отдельная минимальная правка в codex/harvard-ru-search с регрессионным тестом. Она пока не входит в staging v272. РеальныйiPhone/Safari/Threads **ожидается**.