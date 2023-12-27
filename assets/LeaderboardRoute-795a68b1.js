import{r as d,m as v,l as m,n as h,b as p,o as C,_ as T,j as a,c as j,p as R,t as f,J as q,q as M,K as J,A as X,x as G,w as I,R as O}from"./index-647e793f.js";import{W as K,X as V,Y as Z,Z as Q,d as ee,T as te,U as oe,V as ae}from"./Nav-197ec31b.js";import{L as se}from"./LinearProgress-7f69bf67.js";const ne=d.createContext(),E=ne;function re(e){return v("MuiTable",e)}m("MuiTable",["root","stickyHeader"]);const le=["className","component","padding","size","stickyHeader"],ie=e=>{const{classes:t,stickyHeader:o}=e;return R({root:["root",o&&"stickyHeader"]},re,t)},ce=h("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":p({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),A="table",de=d.forwardRef(function(t,o){const s=C({props:t,name:"MuiTable"}),{className:l,component:n=A,padding:i="normal",size:r="medium",stickyHeader:c=!1}=s,u=T(s,le),b=p({},s,{component:n,padding:i,size:r,stickyHeader:c}),w=ie(b),z=d.useMemo(()=>({padding:i,size:r,stickyHeader:c}),[i,r,c]);return a.jsx(E.Provider,{value:z,children:a.jsx(ce,p({as:n,role:n===A?null:"table",ref:o,className:j(w.root,l),ownerState:b},u))})}),pe=de,ue=d.createContext(),N=ue;function be(e){return v("MuiTableBody",e)}m("MuiTableBody",["root"]);const ge=["className","component"],xe=e=>{const{classes:t}=e;return R({root:["root"]},be,t)},ye=h("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),fe={variant:"body"},P="tbody",ve=d.forwardRef(function(t,o){const s=C({props:t,name:"MuiTableBody"}),{className:l,component:n=P}=s,i=T(s,ge),r=p({},s,{component:n}),c=xe(r);return a.jsx(N.Provider,{value:fe,children:a.jsx(ye,p({className:j(c.root,l),as:n,ref:o,role:n===P?null:"rowgroup",ownerState:r},i))})}),me=ve;function he(e){return v("MuiTableContainer",e)}m("MuiTableContainer",["root"]);const Ce=["className","component"],Te=e=>{const{classes:t}=e;return R({root:["root"]},he,t)},je=h("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Re=d.forwardRef(function(t,o){const s=C({props:t,name:"MuiTableContainer"}),{className:l,component:n="div"}=s,i=T(s,Ce),r=p({},s,{component:n}),c=Te(r);return a.jsx(je,p({ref:o,as:n,className:j(c.root,l),ownerState:r},i))}),we=Re;function $e(e){return v("MuiTableCell",e)}const ke=m("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),He=ke,Me=["align","className","component","padding","scope","size","sortDirection","variant"],Ne=e=>{const{classes:t,variant:o,align:s,padding:l,size:n,stickyHeader:i}=e,r={root:["root",o,i&&"stickyHeader",s!=="inherit"&&`align${f(s)}`,l!=="normal"&&`padding${f(l)}`,`size${f(n)}`]};return R(r,$e,t)},ze=h("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${f(o.size)}`],o.padding!=="normal"&&t[`padding${f(o.padding)}`],o.align!=="inherit"&&t[`align${f(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>p({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?q(M(e.palette.divider,1),.88):J(M(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${He.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),Ue=d.forwardRef(function(t,o){const s=C({props:t,name:"MuiTableCell"}),{align:l="inherit",className:n,component:i,padding:r,scope:c,size:u,sortDirection:b,variant:w}=s,z=T(s,Me),g=d.useContext(E),k=d.useContext(N),U=k&&k.variant==="head";let $;i?$=i:$=U?"th":"td";let H=c;$==="td"?H=void 0:!H&&U&&(H="col");const S=w||k&&k.variant,_=p({},s,{align:l,component:$,padding:r||(g&&g.padding?g.padding:"normal"),size:u||(g&&g.size?g.size:"medium"),sortDirection:b,stickyHeader:S==="head"&&g&&g.stickyHeader,variant:S}),Y=Ne(_);let L=null;return b&&(L=b==="asc"?"ascending":"descending"),a.jsx(ze,p({as:$,ref:o,className:j(Y.root,n),"aria-sort":L,scope:H,ownerState:_},z))}),x=Ue;function Se(e){return v("MuiTableHead",e)}m("MuiTableHead",["root"]);const _e=["className","component"],Le=e=>{const{classes:t}=e;return R({root:["root"]},Se,t)},Ae=h("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),Pe={variant:"head"},B="thead",Be=d.forwardRef(function(t,o){const s=C({props:t,name:"MuiTableHead"}),{className:l,component:n=B}=s,i=T(s,_e),r=p({},s,{component:n}),c=Le(r);return a.jsx(N.Provider,{value:Pe,children:a.jsx(Ae,p({as:n,className:j(c.root,l),ref:o,role:n===B?null:"rowgroup",ownerState:r},i))})}),De=Be;function We(e){return v("MuiTableRow",e)}const Oe=m("MuiTableRow",["root","selected","hover","head","footer"]),D=Oe,Ee=["className","component","hover","selected"],Fe=e=>{const{classes:t,selected:o,hover:s,head:l,footer:n}=e;return R({root:["root",o&&"selected",s&&"hover",l&&"head",n&&"footer"]},We,t)},Ye=h("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${D.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${D.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:M(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:M(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),W="tr",qe=d.forwardRef(function(t,o){const s=C({props:t,name:"MuiTableRow"}),{className:l,component:n=W,hover:i=!1,selected:r=!1}=s,c=T(s,Ee),u=d.useContext(N),b=p({},s,{component:n,hover:i,selected:r,head:u&&u.variant==="head",footer:u&&u.variant==="footer"}),w=Fe(b);return a.jsx(Ye,p({as:n,ref:o,className:j(w.root,l),role:n===W?null:"row",ownerState:b},c))}),F=qe;function Je(){const e={border:0,padding:"4px 12px",backgroundColor:"#000"};return a.jsx(De,{children:a.jsxs(F,{children:[a.jsx(x,{align:"center",style:e,children:"#"}),a.jsx(x,{style:{fontWeight:700,fontSize:"1.2rem",border:0,padding:"4px 16px 4px 0px",backgroundColor:"#000"},children:"Name"},"Display Name"),a.jsx(x,{align:"center",style:e,children:a.jsx(K,{})}),a.jsx(x,{align:"center",style:e,children:a.jsx(V,{})}),a.jsx(x,{align:"center",style:e,children:a.jsx(Z,{})}),a.jsx(x,{align:"center",style:e,children:a.jsx(Q,{})})]})})}function y({align:e="center",user:t,leader:o,value:s}){const{displayName:l,id:n}=o,i=(t==null?void 0:t.uid)===n,r=l?"#eee":"#bbb",c=i?{fontWeight:600,color:"#4db013"}:{fontWeight:500,color:r},u={color:r};return a.jsx(x,{align:e,sx:u,style:c,children:s})}function Xe({index:e,leader:t,user:o}){return a.jsxs(F,{sx:{"&:nth-of-type(even) td, &:nth-of-type(even) th":{backgroundColor:"#000"},"td, th":{padding:"6px 2px",border:0}},children:[a.jsx(y,{leader:t,user:o,value:e+1}),a.jsx(y,{leader:t,user:o,value:t.displayName||"Anonymous",align:"left"}),a.jsx(y,{leader:t,user:o,value:t.own}),a.jsx(y,{leader:t,user:o,value:t.picked}),a.jsx(y,{leader:t,user:o,value:t.recorded}),a.jsx(y,{leader:t,user:o,value:t.wishlist})]},t.id)}function Ge(){const{user:e}=d.useContext(X),[t,o]=d.useState({data:[],metadata:{}}),[s,l]=d.useState(!0);d.useEffect(()=>{const r=async()=>{const u=await(await fetch(Ke)).json();o(u),l(!1)};try{r()}catch(c){console.error("Error loading leaderboard data.",c),G("Error loading leaderboard data. Please reload the page.",{autoHideDuration:null,action:a.jsx(I,{color:"secondary",onClick:()=>window.location.reload(),children:"Refresh"})}),l(!1)}},[]);const n=s?"####-##-## ##:##":ee(t.metadata.updatedDateTime).format("MM/DD/YY hh:mm"),i=s?Ie:t.data;return a.jsxs(O.Fragment,{children:[s&&a.jsx(se,{variant:"indeterminate",color:"secondary"}),a.jsxs("div",{style:{maxWidth:700,padding:8,backgroundColor:"#000",marginLeft:"auto",marginRight:"auto",marginTop:16},children:[a.jsx(we,{sx:{height:"78vh",backgroundColor:"#111"},children:a.jsxs(pe,{stickyHeader:!0,children:[a.jsx(Je,{}),a.jsx(me,{children:i.map((r,c)=>a.jsx(Xe,{index:c,leader:r,user:e},r.id))})]})}),a.jsxs(te,{variant:"caption",align:"right",component:"div",style:{width:"100%",marginTop:8},children:["Last updated: ",n," GMT"]})]})]})}const Ie=[...Array(40)].map((e,t)=>({id:t,displayName:"........................",own:"---",picked:"---",recorded:"---",wishlist:"--"})),Ke="https://explore.lpubelts.com/leaderboard/leaderboardData.json";function et(){return a.jsxs(O.Fragment,{children:[a.jsx(oe,{title:"Collection Leaderboard"}),a.jsx(Ge,{}),a.jsx(ae,{})]})}export{et as default};
