import{r as a,K as f,p as T,a0 as y,v as i,j as e,a5 as F,a6 as S,R as u,a7 as R,t as d,a8 as Y,M as $,O as z,P as G,Q as M}from"./index-55f0431c.js";import{u as U}from"./useDocumentTitle-530e2d42.js";import{l as V}from"./LPU-c3fa7122.js";import{C as Z}from"./CopyProfileLinkButton-bc172f75.js";import{L as _}from"./LoadingDisplay-9c0d557e.js";import{T as q}from"./TextField-ae88ada6.js";import{P as H}from"./MustBeLoggedIn-f7bf032e.js";import{L as I}from"./LinearProgress-5fcfe218.js";import"./Link-e23f493d.js";import"./Select-d0af052f.js";function K(){const{lockCollection:t,updateProfileDisplayName:n,deleteAllUserData:s}=a.useContext(f),[r,x]=a.useState(t.displayName||""),[m,p]=a.useState(null),[j,h]=a.useState(!1),g=T(),{user:c}=a.useContext(y),b=a.useCallback(o=>{const{value:k}=o.target;x(k)},[]),C=a.useCallback(o=>o.target.select(),[]),v=a.useCallback(async()=>{try{await n(r),i("Profile updated")}catch(o){console.error("Error while updating profile",o),i("Error while updating profile")}},[n,r]),w=a.useCallback(async()=>{try{await n(null),x(""),i("Display Name cleared")}catch(o){console.error("Error while updating profile",o),i("Error while updating profile")}},[n]),D=a.useCallback(()=>{g(`/profile/${c.uid}`)},[g,c.uid]),P=a.useCallback(o=>{o.preventDefault(),o.stopPropagation(),p(o.currentTarget)},[]),L=a.useCallback(async()=>{h(!0),await s(c.uid),p(null),h(!1),i("All data has been deleted")},[s,c]),l=r.length>0&&!O.test(r.toString()),A=r.length===0||r===(t==null?void 0:t.displayName),N=l?"Display name must only include A-Z, 0-9, _ and -.":"",B=r.length>0?"Edit Profile":"Create Profile",E=r.length>0?` (${r}) `:"";return e.jsxs(F,{style:{maxWidth:380,marginLeft:"auto",marginRight:"auto",marginTop:16,marginBottom:46},children:[e.jsx(S,{title:B,action:null}),j?e.jsx(_,{}):e.jsxs(u.Fragment,{children:[e.jsxs(R,{children:[t!=null&&t.displayName?e.jsxs("div",{style:{marginBottom:10},children:["Your display name ",E," shows up on the leaderboard and your profile can be shared with others.",e.jsx("br",{}),e.jsx("br",{}),"Your Google login information will never be displayed to other users."]}):e.jsxs("div",{style:{marginBottom:10},children:["Your display name will show up on the leaderboard and your profile can be shared with others.",e.jsx("br",{}),e.jsx("br",{}),"Your Google login information will never be displayed to other users."]}),e.jsx("br",{}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(q,{error:l,variant:"outlined",color:"secondary",label:"Display Name",helperText:N,value:r||"",onChange:b,onFocus:C,inputProps:{maxLength:32},size:"small",style:{width:260}}),e.jsx(d,{variant:"outlined",color:l?void 0:"success",onClick:v,disabled:l||A,style:{marginLeft:16,marginRight:0,marginBottom:10,height:40},children:"Save"})]})]}),e.jsx(Y,{children:e.jsxs("div",{style:{width:"100%",textAlign:"center",margin:"10px 0px 10px 0px"},children:[(t==null?void 0:t.displayName)&&e.jsx(d,{variant:"outlined",color:"info",onClick:w,disabled:l,style:{marginBottom:10,color:"#4972ab",padding:"5px 19px"},children:"Clear Display Name"}),e.jsx(d,{variant:"outlined",color:"info",onClick:D,style:{marginLeft:15,marginBottom:10,color:"#4972ab",padding:"5px 19px"},children:"View Profile"})]})}),e.jsxs("div",{style:{width:"100%",textAlign:"center",margin:"10px 0px 10px 0px"},children:[e.jsx(d,{variant:"outlined",color:"info",onClick:P,style:{marginBottom:10,color:"#4972ab",padding:"5px 110px"},children:"Delete All Data"}),e.jsxs($,{anchorEl:m,open:!!m,onClose:()=>p(null),children:[e.jsxs("div",{style:{padding:20,textAlign:"center"},children:["This will permanently delete all of your data.",e.jsx("br",{}),"Are you sure?"]}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(d,{style:{marginBottom:10,color:"#000"},variant:"contained",onClick:L,edge:"start",color:"error",children:"Delete"})})]})]})]})]})}const O=/^[\sa-zA-Z0-9_-]{1,32}$/;function se(){const{authLoaded:t,isLoggedIn:n}=a.useContext(y),{dbLoaded:s}=a.useContext(f);U("LPU Belt Explorer - Edit Profile");const r=e.jsx(u.Fragment,{children:e.jsx(Z,{page:"collection"})});return e.jsxs(u.Fragment,{children:[e.jsx(z,{title:"Edit Profile",extras:r}),(!t||!s)&&e.jsxs(u.Fragment,{children:[e.jsx(I,{variant:"indeterminate",color:"secondary"}),e.jsx("img",{alt:"Loading",src:V,style:{marginLeft:"auto",marginRight:"auto",display:"block"}})]}),t&&!n&&e.jsx(H,{}),t&&n&&s&&e.jsx(K,{}),e.jsx(G,{}),e.jsx(M,{feature:"editprofile"})]})}export{se as default};
