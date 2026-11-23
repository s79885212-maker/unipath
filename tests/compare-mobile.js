'use strict';
module.exports = function (env) {
  var fs=require('fs'),path=require('path'),vm=require('vm'),U=env.U,g=env.global,ok=env.ok;
  var oldGet=g.document.getElementById,oldBody=g.document.body,selected=U.compareGet(),out={innerHTML:''},classes={};
  var tray={innerHTML:'',classList:{add:function(k){classes[k]=true;},remove:function(k){delete classes[k];}}};
  try {
    vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/js/pages.js'),'utf8'),g);
    U.compareSet(['yale-university','princeton-university']);
    g.document.getElementById=function(id){return id==='compare-out'?out:id==='compare-tray'?tray:null;};
    g.document.body={classList:{add:function(k){classes[k]=true;},remove:function(k){delete classes[k];}}};
    g.UPPages.renderCompare();
    ok(out.innerHTML.includes('Yale University')&&out.innerHTML.includes('Princeton University')&&
       /--compare-count:2/.test(out.innerHTML)&&/data-tray-remove="princeton-university"/.test(out.innerHTML),
       'Comparison retains Yale and Princeton, counts columns and provides in-table removal');
    U.renderTray();
    ok(!classes['is-open']&&!classes['tray-open'],'Comparison hides its redundant fixed tray without losing selections');
    U.compareToggle('harvard-university');g.UPPages.renderCompare();
    ok(U.compareGet().length===3&&/--compare-count:3/.test(out.innerHTML)&&out.innerHTML.includes('Harvard University'),
       'Comparison renders all three stored universities');
    U.compareToggle('princeton-university');g.UPPages.renderCompare();
    ok(U.compareGet().join(',')==='yale-university,harvard-university'&&/--compare-count:2/.test(out.innerHTML)&&!out.innerHTML.includes('Princeton University'),
       'Removing one university updates the stored list and comparison columns together');
    g.document.getElementById=function(id){return id==='compare-tray'?tray:null;};U.renderTray();
    ok(classes['is-open']&&classes['tray-open']&&tray.innerHTML.includes('Yale University')&&tray.innerHTML.includes('Harvard University'),
       'Leaving comparison restores the tray with the retained selections');
  } finally { g.document.getElementById=oldGet;g.document.body=oldBody;U.compareSet(selected); }
};
