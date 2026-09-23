# -*- coding: utf-8 -*-
"""Shared writer for new university records."""
import io

def js(v):
    """Python value -> JavaScript literal (None becomes null)."""
    if v is None:
        return 'null'
    if v is True:
        return 'true'
    if v is False:
        return 'false'
    return repr(v)

def build(r):
    return f"""
{{
  id: '{r['id']}',
  name: {r['name']!r},
  shortName: {js(r['short'])},
  country: '{r['country']}',
  city: {r['city']!r},
  region: {js(r.get('region'))},
  type: {r['type']!r},
  brand: {{ c1: '{r['c1']}', c2: '{r['c2']}', initials: '{r['initials']}' }},
  description: {r['desc']!r},
  englishTaught: {r['englishTaught']},
  languageOfInstruction: {js(r['loi'])},
  programs: {r['programs']},
  englishTaughtPrograms: {r['engPrograms']},
  programNote: {js(r['programNote'])},
  links: {r['links']},
  admissions: {{
    platforms: {r['platforms']},
    deadlines: {r['deadlines']},
    applicationFee: {r['fee']},
    documents: {r['documents']},
    recommendations: {js(r.get('recs'))},
    essay: {js(r.get('essay'))},
    interview: {js(r.get('interview'))},
    notes: {r['notes']}
  }},
  english: {{
    ielts: {r['ielts']},
    toefl: {r['toefl']},
    duolingo: {r['duolingo']},
    waiver: {js(r['waiver'])},
    note: {js(r['engNote'])}
  }},
  academics: {{
    gpa: null,
    sat: {{ policy: '{r.get('satPolicy','not-applicable')}', note: {js(r['satNote'])} }},
    act: {{ policy: '{r.get('satPolicy','not-applicable')}', note: 'The US test-optional classification does not apply to this admission route.' }},
    otherTests: {js(r['otherTests'])},
    internationalQualifications: {js(r['quals'])}
  }},
  costs: {r['costs']},
  scholarships: {r['scholarships']},
  photos: {{ main: null, gallery: [], city: null }},
  sources: {r['sources']},
  verification: {{ level: {r.get('level','partial')!r}, checked: {r['checked']}, unconfirmed: {r['unconfirmed']} }},
  lastVerified: '2026-09-23'
}},
"""

def append(path, records):
    out = ''.join(build(r) for r in records)
    s = io.open(path, encoding='utf-8').read().rstrip()
    assert s.endswith(');'), s[-40:]
    cut = s[:-2].rstrip()
    if cut.endswith('}'):
        cut += ','
    io.open(path, 'w', encoding='utf-8').write(cut + '\n' + out + ');\n')
    return len(records)
