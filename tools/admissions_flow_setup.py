from pathlib import Path
p=Path('tools/release_review_browser.cjs').read_text(encoding='utf8')
start=p.index('async function profiles(');end=p.index('async function scenarios(',start)
p=p[:start]+p[end:]
p=p.replace("const selected=JSON.parse(fs.readFileSync('research/release-review-v250/selection.json','utf8'));", "const selected={us:'brigham-young-university',ca:'wilfrid-laurier-university',uk:'middlesex-university',de:'rhine-waal-university',jp:'nagoya-university',kr:'sejong-university'};")
p=p.replace("'research/release-review-v250'","'research/admissions-120'")
p=p.replace("else await Promise.all([profiles(browser,'ru',process.argv.includes('--sample')?1280:360),profiles(browser,'en',process.argv.includes('--sample')?390:1280)]);","else throw Error('Use --flows for this scenario runner');")
p=p.replace("(live?'live':'local')+(process.argv.includes('--sample')", "(live?'live':'local')+(root.includes('/staging/')?'-staging':'-production')+(process.argv.includes('--sample')")
needle="    result.scenarios.push({lang,width,savedCompareCalendar:"
idx=p.index(needle)
p=p[:idx]+"    await p.locator('[data-lang-toggle]').click();await loaded(p,lang==='ru'?'en':'ru');\n    assert.equal(await p.evaluate(()=>UP.savedGet().length),5,'Saved state survives language switch');\n    await p.locator('[data-lang-toggle]').click();await loaded(p,lang);\n"+p[idx:]
Path('tools/admissions_flows.cjs').write_text(p,encoding='utf8')
p=Path('index.html');p.write_text(p.read_text(encoding='utf8').replace('?v=257','?v=258'),encoding='utf8')
p=Path('AUDIT_EXPANSION_PROGRESS.md');p.write_text(p.read_text(encoding='utf8')+'\n\n## v258 — индекс поиска использует проверенные маршруты\nВоспроизведён пропуск Northern Iowa по запросу IELTS 6: индекс создавался раньше движка требований и сохранял прежнее значение. Индекс теперь напрямую читает проверенный слой, включая местные экзамены. Добавлены регрессии для Northern Iowa и Sejong TOPIK. Итоговые сборки/протоколы этого спринта — research/admissions-120/validation.md.\n',encoding='utf8')
