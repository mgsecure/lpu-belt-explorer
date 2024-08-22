import{U as w,r as o,j as t,R as h,a5 as b,v as S,a3 as T,a4 as I,p as R,T as L,I as W,a1 as G,O as P,P as E,Q as B}from"./index-55f0431c.js";import{u as F}from"./usePageTitle-9482030c.js";import{u as x}from"./useWindowSize-5f4836e8.js";import{I as M,g as k}from"./ImageViewer-95214891.js";import{M as y}from"./index-df77d72b.js";import{d as g,I as A}from"./Search-d59a720d.js";import{A as O}from"./Autocomplete-9bf83db1.js";import{T as U}from"./TextField-ae88ada6.js";import"./useDocumentTitle-530e2d42.js";import"./Link-e23f493d.js";import"./Dialog-f187bda6.js";import"./LinearProgress-5fcfe218.js";import"./Select-d0af052f.js";function $({entry:e,highlighted:r}){const[s,a]=w(),{width:p}=x(),d=p<500?110:150,{term:m,media:{thumbnailUrl:u}={}}=e,[l,i]=o.useState(()=>s.get("image")==="1"&&r),n=o.useCallback(()=>{i(!0),s.set("image","1"),s.set("term",m),a(s)},[s,a,m]),f=o.useCallback(()=>{i(!1),s.delete("image"),a(s)},[s,a]);return u?t.jsxs(h.Fragment,{children:[t.jsx("div",{style:{margin:"6px 0px 12px 20px",float:"right",textAlign:"center",fontSize:"0.85rem"},children:t.jsx("img",{alt:m,src:u,style:{width:d,cursor:"pointer"},onClick:n})}),l&&t.jsx(M,{media:[e.media],openIndex:0,onClose:f,shareParams:{term:e.term}})]}):null}function z({entry:e,highlighted:r}){const s=o.useRef(),[a,p]=o.useState(!1),c={maxWidth:700,marginLeft:"auto",marginRight:"auto",padding:"0px 20px",borderRadius:0,backgroundColor:r?"#222":void 0};o.useEffect(()=>{r&&s&&!a&&setTimeout(()=>{p(!0),window.scrollTo({left:0,top:s.current.offsetTop-74})},0)},[r,e,a]);const d=o.useMemo(()=>{var i;let l=`\`${e.term}\`. ${e.definition}`;if((i=e.media)!=null&&i.title){const n=e.media.title.charAt(0).toLowerCase()+(e==null?void 0:e.media.title.slice(1));l+=` (Photo ${n})`}return l},[e]),u={code:({children:l})=>{const n=`https://share.lpubelts.com/?term=${encodeURI(l)}`,f=o.useCallback(async v=>{v.preventDefault(),await navigator.clipboard.writeText(n),S("Link copied to clipboard.")},[n]),C={fontWeight:700,fontSize:"1.1rem",marginBottom:4,color:"#fff",cursor:"pointer",textDecoration:"none"};return t.jsx("a",{style:C,onClick:f,href:n,children:l})}};return t.jsx(b,{style:c,ref:s,children:t.jsxs("div",{style:{color:"#ddd"},children:[t.jsx($,{entry:e,highlighted:r}),t.jsx(y,{components:u,children:d})]})})}const D="Definitions can be tricky, and this is certainly true when it comes to locks. We've done our best to come up with accurate, concise definitions for terms **as they are generally used in Lock Pickers United contexts**. Many terms have multiple meanings and connotations. Regional differences, between Europe and the US for example, can be significant. We've had spirited debates involving very experienced locksport enthusiasts and locksmiths over seemingly simple definitions ... language is evolving and some of the terminology here is still being settled. &nbsp; &nbsp; *Enjoy!*";function q(){const e={maxWidth:700,marginLeft:"auto",marginRight:"auto",padding:"6px 20px",borderBottom:"1px solid #333",borderTop:"1px solid #333",borderRadius:0};return t.jsx(b,{style:e,children:t.jsx(y,{children:D})})}function N(){const e=T(),r=o.useMemo(()=>{const{term:s}=I.parse(e.search);return s&&s.toLowerCase()},[e.search]);return t.jsxs("div",{style:{margin:8,paddingBottom:32,marginLeft:"auto",marginRight:"auto",marginTop:16,marginButtom:16},children:[t.jsx(q,{}),H.map((s,a)=>t.jsx(z,{entry:s,highlighted:r===s.termLowerCased},a))]})}const H=k.map(e=>({...e,termLowerCased:e.term.toLowerCase()}));function K(){const{isMobile:e}=x(),r={maxWidth:450},s=R(),a=o.useRef(),p=o.useCallback((i,n)=>{n?j.includes(n)&&s(`/glossary?term=${n}`):s("/glossary")},[s]),[c,d]=o.useState(!1),m=o.useCallback(()=>{d(!0),setTimeout(()=>a.current.focus(),15)},[]),u=o.useCallback(()=>d(!1),[]),l=c&&e?{width:"auto",position:"fixed",left:60,right:0,paddingRight:16,maxWidth:"unset",zIndex:9999999,backgroundColor:"#272727"}:{};return t.jsxs(h.Fragment,{children:[!c&&e&&t.jsx(L,{title:"Search",arrow:!0,disableFocusListener:!0,children:t.jsx(W,{color:"inherit",onClick:m,children:t.jsx(g,{})})}),(c||!e)&&t.jsx(O,{selectOnFocus:!0,clearOnEscape:!0,handleHomeEndKeys:!0,fullWidth:!0,style:{...r,...l},options:j,onChange:p,renderInput:i=>t.jsx(U,{...i,placeholder:"Search Glossary",variant:"standard",color:"secondary",inputRef:a,InputProps:{...i.InputProps,startAdornment:t.jsx(A,{position:"start",children:t.jsx(g,{})})}})}),t.jsx(G,{invisible:!0,open:c&&e,onClick:u})]})}const j=[...new Set(k.map(e=>e.term))];function ne(){const{isMobile:e}=x();F("Glossary");const r=t.jsxs(h.Fragment,{children:[t.jsx(K,{}),!e&&t.jsx("div",{style:{flexGrow:1}})]});return t.jsxs(h.Fragment,{children:[t.jsx(P,{title:"Glossary",extras:r}),t.jsx(N,{}),t.jsx(E,{}),t.jsx(B,{feature:"glossary"})]})}export{ne as default};
