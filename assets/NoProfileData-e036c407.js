import{r,a0 as h,af as m,p as u,j as s,R as g,a5 as p,a7 as f,x as j,a8 as k,t as C}from"./index-55f0431c.js";import{m as y}from"./ProfileHeader-8bab36ef.js";import{u as b}from"./useWindowSize-5f4836e8.js";import{B as w}from"./LoadingDisplay-9c0d557e.js";function L({collectionType:o}){const{user:t}=r.useContext(h),{userId:n}=m(),a=u(),{isMobile:i}=b(),c=i?{marginTop:32,maxWidth:700,marginLeft:8,marginRight:8,borderRadius:0}:{marginTop:32,maxWidth:700,marginLeft:"auto",marginRight:"auto",borderRadius:0},e=n===(t==null?void 0:t.uid),l=e?s.jsxs(g.Fragment,{children:[s.jsxs("span",{children:["There are no locks in your collection.",s.jsx("br",{}),'Browse the site and use the "My Collection" button to track locks that you own, picked, recorded, or wish to buy.',s.jsx("br",{})]}),s.jsx("img",{alt:"My Collection",src:y})]}):"There are no locks in this collection.",d=e?o==="safelocks"?"Explore Safe Locks":"Explore Locks":"Go Home",x=r.useCallback(()=>{a(o==="safelocks"?"/safelocks":"/locks")},[a,o]);return s.jsx(w,{alignContent:"center",children:s.jsxs(p,{style:c,children:[s.jsx(f,{children:s.jsx(j,{variant:"h6",align:"center",children:l})}),s.jsxs(k,{children:[s.jsx("div",{style:{width:"100%"}}),s.jsx(C,{variant:"outlined",color:"secondary",onClick:x,style:{whiteSpace:"nowrap",padding:"10px 30px",margin:10},children:d})]})]})})}export{L as N};
