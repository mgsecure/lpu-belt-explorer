import{aH as m,bm as i,aG as u}from"./index-55f0431c.js";function c(s,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in s)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(s,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}};(function(s,a){(function(n,e){s.exports=e(i)})(u,function(n){function e(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var t=e(n),o={name:"oc-lnc",weekdays:"dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),weekdaysShort:"Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"),weekdaysMin:"dg_dl_dm_dc_dj_dv_ds".split("_"),months:"genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),monthsShort:"gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a] H:mm",LLLL:"dddd D MMMM [de] YYYY [a] H:mm"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"unas segondas",m:"una minuta",mm:"%d minutas",h:"una ora",hh:"%d oras",d:"un jorn",dd:"%d jorns",M:"un mes",MM:"%d meses",y:"un an",yy:"%d ans"},ordinal:function(r){return r+"º"}};return t.default.locale(o,null,!0),o})})(_);var d=_.exports;const l=m(d),p=c({__proto__:null,default:l},[d]);export{p as o};
