from pathlib import Path
import json,collections
r=Path('research/admissions-120')
records=json.loads((r/'requirements.json').read_text(encoding='utf8'))
counts=dict(collections.Counter(x['country'] for x in records.values()))
p=r/'progress.md'
p.write_text(p.read_text(encoding='utf8')+'\n\n## Промежуточное сохранение v256 — 99 записей\n\n'+str(counts)+'; до цели осталось 21. Последние две записи: Sejong и Pusan, применимые разделы официальных руководств Spring 2027. Осенний набор не предполагается. У Pusan сохранены повышенные требования по категории гражданства; у Sejong разделены английский, корейский и подготовительный маршруты.\n\n611 passed, 0 failed. Production v255 и внутренние ссылки прошли: 547 страниц, 20817 внутренних ссылок. Chrome на точной сборке v255: 138 открытий 69 карточек RU/EN и 2 сценария формы, ошибок/переполнения нет (browser-v255.json). Это не браузерная проверка нынешних 99 карточек. Найдено непереведённое составное название источника/цикла: отдельные текстовые узлы исправлены; повтор браузера ещё нужен. WebKit отсутствует.\n\nСледом: 17 US и 4 KR; самопроверка 18, финальные сборки/браузер/PR/staging. Main и PR №27 не изменены.\n',encoding='utf8')
p=Path('index.html');p.write_text(p.read_text(encoding='utf8').replace('?v=255','?v=256'),encoding='utf8')
p=Path('AUDIT_EXPANSION_PROGRESS.md');p.write_text(p.read_text(encoding='utf8')+'\n\n## v256 — требования 99 существующих вузов, 19 ноября 2026\n43 US, 15 CA, 15 UK, 10 DE, 10 JP, 6 KR. Уточнены языковые/академические маршруты, исключения и области применения. 611 passed, 0 failed; предыдущая точная сборка v255: 138 открытий Chrome, обе локали; текущая партия ещё не завершена и не опубликована. Прогресс и очередь: research/admissions-120.\n',encoding='utf8')
