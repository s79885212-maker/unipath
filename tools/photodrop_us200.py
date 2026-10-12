# Drops photos of a recorded institution by their current number, working on data/photos.js (the authoritative list after merging):
#   photodrop.py id:2,3 [--files-done id]   -> removes the files, renumbers the rest, rebuilds thumb.jpg, rewrites the entry.
# With "id=1,3" the files are assumed to be already removed/renumbered and only the entry is rewritten.
import sys, io, json, re, os, subprocess
ROOT='/Users/salmonashurmamadov/Desktop/IL9/WORK'
p=ROOT+'/data/photos.js'; s=io.open(p,encoding='utf-8').read()
for arg in sys.argv[1:]:
    files_done = '=' in arg
    uid, ns = re.split('[:=]', arg); drop=set(int(n) for n in ns.split(','))
    m=re.search(r'(?m)^  "%s": (\[.*\])(,?)\s*$' % re.escape(uid), s)
    assert m, uid
    shots=json.loads(m.group(1)); folder=os.path.join(ROOT,'assets/img/universities',uid)
    keep=[g for i,g in enumerate(shots,1) if i not in drop]
    if not files_done:
        for n in drop:
            f=os.path.join(folder,'%d.jpg'%n)
            if os.path.exists(f): os.remove(f)
        for i,g in enumerate(keep,1):
            old=os.path.join(ROOT,g['src']); new=os.path.join(folder,'%d.jpg'%i)
            if old!=new and os.path.exists(old): os.rename(old,new)
    for i,g in enumerate(keep,1): g['src']='assets/img/universities/%s/%d.jpg'%(uid,i)
    if keep:
        subprocess.run(['sips','-s','format','jpeg','-s','formatOptions','60','-Z','560',os.path.join(folder,'1.jpg'),'--out',os.path.join(folder,'thumb.jpg')],capture_output=True)
        s=s.replace(m.group(0),'  "%s": %s%s' % (uid, json.dumps(keep,ensure_ascii=False), m.group(2)))
    else:
        t=os.path.join(folder,'thumb.jpg')
        if os.path.exists(t): os.remove(t)
        s=s.replace(m.group(0)+'\n','')
        s=re.sub(r',\n\};\s*$', '\n};\n', s)
    print(uid,'now',len(keep), sorted(os.listdir(folder)) if os.path.isdir(folder) else '-')
io.open(p,'w',encoding='utf-8').write(s)
