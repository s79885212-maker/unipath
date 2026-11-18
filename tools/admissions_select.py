from pathlib import Path
import json
root=Path('research/admissions-120')
rows=json.loads((root/'inventory-before.json').read_text())['rows'];byid={r['id']:r for r in rows}
us='savannah-college-of-art-and-design university-of-pittsburgh university-of-virginia university-of-florida dillard-university elmira-college marist-university bentley-university university-of-washington university-of-california-davis university-of-california-irvine university-of-california-merced indiana-university-bloomington brigham-young-university university-of-texas-at-dallas university-of-the-pacific wheaton-college-illinois saint-marys-college-indiana wheaton-college-massachusetts stonehill-college the-college-of-new-jersey baruch-college towson-university suny-esf john-jay-college salve-regina-university st-bonaventure-university manhattan-university st-john-fisher-university wentworth-institute-of-technology berry-college appalachian-state-university tuskegee-university college-of-charleston loyola-university-new-orleans university-of-tampa georgia-college-state-university western-carolina-university louisiana-tech-university middle-tennessee-state-university murray-state-university calvin-university dordt-university valparaiso-university elmhurst-university rockhurst-university baldwin-wallace-university indiana-wesleyan-university university-of-northern-iowa grand-valley-state-university rhode-island-school-of-design bryant-university siena-university le-moyne-college suny-new-paltz stockton-university high-point-university hampton-university university-of-west-florida milwaukee-school-of-engineering'
selection={
 'us':us.split(),
 'ca':'universite-de-montreal universite-laval universite-du-quebec-a-montreal universite-de-sherbrooke universite-de-moncton brock-university wilfrid-laurier-university trent-university acadia-university mount-royal-university laurentian-university university-of-ottawa york-university carleton-university dalhousie-university'.split(),
 'uk':'university-of-sussex university-of-strathclyde university-of-greenwich coventry-university university-of-westminster sheffield-hallam-university oxford-brookes-university de-montfort-university university-of-hertfordshire university-of-huddersfield middlesex-university nottingham-trent-university university-of-salford university-of-derby birmingham-city-university'.split(),
 'de':'frankfurt-school technical-university-of-munich fau-erlangen-nurnberg university-of-freiburg leuphana-university-luneburg rhine-waal-university anhalt-university technische-hochschule-ingolstadt university-of-cologne deggendorf-institute-of-technology'.split(),
 'jp':'osaka-university nagoya-university hitotsubashi-university meiji-university hosei-university waseda-university tohoku-university institute-of-science-tokyo rikkyo-university okayama-university'.split(),
 'kr':'handong-global-university gist inha-university konkuk-university pusan-national-university dgist sejong-university kyungpook-national-university dongguk-university soongsil-university'.split()}
targets={'us':60,'ca':15,'uk':15,'de':10,'jp':10,'kr':10}
for c,ids in selection.items():
 assert len(ids)==targets[c],(c,len(ids))
 for id in ids:assert id in byid and byid[id]['country']==c,id
assert len(set(id for ids in selection.values() for id in ids))==120
(root/'selection.json').write_text(json.dumps(selection,indent=2)+'\n')
progress=[{'id':id,'country':c,'stage':'selected','sources':[],'unknown':[]} for c,ids in selection.items() for id in ids]
if not (root/'review.json').exists():(root/'review.json').write_text(json.dumps(progress,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
for c,ids in selection.items():
 print('\n'+c)
 for id in ids:
  r=byid[id];sources=[]
  if r['languageSource']:sources.append(r['languageSource'])
  if r['sat'].get('source'):sources.append(r['sat']['source'])
  sources.extend(s['url'] for s in r['sources'] if any(k in s.get('label','').lower() for k in ['english','language','international','admission','apply','testing','undergraduate']))
  print(id, json.dumps(r['links']),json.dumps(list(dict.fromkeys(sources))[:5]))
