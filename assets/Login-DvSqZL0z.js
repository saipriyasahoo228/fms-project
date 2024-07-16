import{j as s,r as u,o as X}from"./index-K7U7e95_.js";import{c as ee,g as U,a as W,s as T,_ as i,u as F,b as L,d as q,e as H,f as re,T as oe,R as te,D as se,G as ne,h as _,i as ae,j as A,k as G,l as le,m as ie,n as $,o as ce,p as ue,B as P,S as de}from"./IconButton-DDU6yx0X.js";import{r as me,M as z}from"./MenuItem-Cph74Sky.js";import{C as pe}from"./Container-DU-2yFqM.js";import{u as fe,A as ge}from"./Alert-BDIJcloz.js";import{T as N,F as he,I as xe}from"./TextField-YXPWbOlt.js";import{C as ve,G as O}from"./CircularProgress-CyhyCx0c.js";import{B as be}from"./Button--os4TnKT.js";const ye=ee(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function je(e){return U("MuiAvatar",e)}W("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Ce=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Se=e=>{const{classes:r,variant:o,colorDefault:t}=e;return H({root:["root",o,t&&"colorDefault"],img:["img"],fallback:["fallback"]},je,r)},ke=T("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[o.variant],o.colorDefault&&r.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:i({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:i({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),Re=T("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),we=T(ye,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});function Pe({crossOrigin:e,referrerPolicy:r,src:o,srcSet:t}){const[n,a]=u.useState(!1);return u.useEffect(()=>{if(!o&&!t)return;a(!1);let l=!0;const c=new Image;return c.onload=()=>{l&&a("loaded")},c.onerror=()=>{l&&a("error")},c.crossOrigin=e,c.referrerPolicy=r,c.src=o,t&&(c.srcset=t),()=>{l=!1}},[e,r,o,t]),n}const Te=u.forwardRef(function(r,o){const t=F({props:r,name:"MuiAvatar"}),{alt:n,children:a,className:l,component:c="div",slots:d={},slotProps:b={},imgProps:x,sizes:y,src:g,srcSet:v,variant:j="circular"}=t,S=L(t,Ce);let h=null;const k=Pe(i({},x,{src:g,srcSet:v})),m=g||v,p=m&&k!=="error",C=i({},t,{colorDefault:!p,component:c,variant:j}),f=Se(C),[M,w]=fe("img",{className:f.img,elementType:Re,externalForwardedProps:{slots:d,slotProps:{img:i({},x,b.img)}},additionalProps:{alt:n,src:g,srcSet:v,sizes:y},ownerState:C});return p?h=s.jsx(M,i({},w)):a||a===0?h=a:m&&n?h=n[0]:h=s.jsx(we,{ownerState:C,className:f.fallback}),s.jsx(ke,i({as:c,ownerState:C,className:q(f.root,l),ref:o},S,{children:h}))}),Z=u.createContext(null);function K(){return u.useContext(Z)}const Me=typeof Symbol=="function"&&Symbol.for,Ae=Me?Symbol.for("mui.nested"):"__THEME_NESTED__";function Ee(e,r){return typeof r=="function"?r(e):i({},e,r)}function De(e){const{children:r,theme:o}=e,t=K(),n=u.useMemo(()=>{const a=t===null?o:Ee(t,o);return a!=null&&(a[Ae]=t!==null),a},[o,t]);return s.jsx(Z.Provider,{value:n,children:r})}const V={};function B(e,r,o,t=!1){return u.useMemo(()=>{const n=e&&r[e]||r;if(typeof o=="function"){const a=o(n),l=e?i({},r,{[e]:a}):a;return t?()=>l:l}return e?i({},r,{[e]:o}):i({},r,o)},[e,r,o,t])}function Fe(e){const{children:r,theme:o,themeId:t}=e,n=re(V),a=K()||V,l=B(t,n,o),c=B(t,a,o,!0),d=l.direction==="rtl";return s.jsx(De,{theme:c,children:s.jsx(oe.Provider,{value:l,children:s.jsx(te,{value:d,children:s.jsx(se,{value:l==null?void 0:l.components,children:r})})})})}const Le=(e,r)=>i({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!e.vars&&{colorScheme:e.palette.mode}),Ie=e=>i({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),_e=(e,r=!1)=>{var o;const t={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,c])=>{var d;t[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(d=c.palette)==null?void 0:d.mode}});let n=i({html:Le(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:i({margin:0},Ie(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},t);const a=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return a&&(n=[n,a]),n};function $e(e){const r=F({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:t=!1}=r;return s.jsxs(u.Fragment,{children:[s.jsx(ne,{styles:n=>_e(n,t)}),o]})}function ze(e){return U("MuiLink",e)}const Ne=W("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Oe=e=>Y[e]||e,Ve=({theme:e,ownerState:r})=>{const o=Oe(r.color),t=_(e,`palette.${o}`,!1)||r.color,n=_(e,`palette.${o}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:ae(t,.4)},Be=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Ue=e=>{const{classes:r,component:o,focusVisible:t,underline:n}=e,a={root:["root",`underline${G(n)}`,o==="button"&&"button",t&&"focusVisible"]};return H(a,ze,r)},We=T(A,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[`underline${G(o.underline)}`],o.component==="button"&&r.button]}})(({theme:e,ownerState:r})=>i({},r.underline==="none"&&{textDecoration:"none"},r.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},r.underline==="always"&&i({textDecoration:"underline"},r.color!=="inherit"&&{textDecorationColor:Ve({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),r.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ne.focusVisible}`]:{outline:"auto"}})),qe=u.forwardRef(function(r,o){const t=F({props:r,name:"MuiLink"}),{className:n,color:a="primary",component:l="a",onBlur:c,onFocus:d,TypographyClasses:b,underline:x="always",variant:y="inherit",sx:g}=t,v=L(t,Be),{isFocusVisibleRef:j,onBlur:S,onFocus:h,ref:k}=le(),[m,p]=u.useState(!1),C=ie(o,k),f=R=>{S(R),j.current===!1&&p(!1),c&&c(R)},M=R=>{h(R),j.current===!0&&p(!0),d&&d(R)},w=i({},t,{color:a,component:l,focusVisible:m,underline:x,variant:y}),Q=Ue(w);return s.jsx(We,i({color:a,className:q(Q.root,n),classes:b,component:l,onBlur:f,onFocus:M,ref:C,ownerState:w,variant:y,sx:[...Object.keys(Y).includes(a)?[]:[{color:a}],...Array.isArray(g)?g:[g]]},v))}),He=["theme"];function Ge(e){let{theme:r}=e,o=L(e,He);const t=r[$];return s.jsx(Fe,i({},o,{themeId:t?$:void 0,theme:t||r}))}var I={},Ze=ce;Object.defineProperty(I,"__esModule",{value:!0});var J=I.default=void 0,Ke=Ze(me()),Ye=s;J=I.default=(0,Ke.default)((0,Ye.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"}),"LockOutlined");const Je=""+new URL("industry4-DCW0z_sx.jpg",import.meta.url).href,Qe=ue({palette:{primary:{main:"#1976d2",contrastText:"#ffffff"},secondary:{main:"#ffffff",contrastText:"#1976d2"}}}),E="admin",D="operator",Xe={[E]:{username:"adminUser",password:"Admin@123"},[D]:{username:"operatorUser",password:"Operator@123"}},ir=()=>{const[e,r]=u.useState(""),[o,t]=u.useState(""),[n,a]=u.useState(""),[l,c]=u.useState(""),[d,b]=u.useState(""),[x,y]=u.useState(""),[g,v]=u.useState(!1),[j,S]=u.useState(""),h=X(),k=m=>{m.preventDefault();let p=!0;e?c(""):(c("Username is required"),p=!1),o?/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{8,}$/.test(o)?b(""):(b("Password must be at least 8 characters, start with a capital letter, and include a special character"),p=!1):(b("Password is required"),p=!1),n?y(""):(y("Role is required"),p=!1),p&&(v(!0),setTimeout(()=>{try{const f=Xe[n];f&&f.username===e&&f.password===o?(console.log("Login successful"),alert("Login successful"),n===E?h("/dashboard"):n===D&&h("/appsidebar1")):(console.error("Error logging in: Invalid credentials"),alert("Login failed. Please check your credentials and try again."))}catch(f){console.error("Network error:",f),S("Network error occurred. Please try again later.")}finally{v(!1)}},2e3))};return s.jsx(Ge,{theme:Qe,children:s.jsx(P,{sx:{backgroundImage:`url(${Je})`,backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",objectFit:"fill"},children:s.jsxs(pe,{component:"main",maxWidth:"xs",sx:{backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:"20px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",padding:"20px"},children:[s.jsx($e,{}),s.jsxs(P,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx(Te,{sx:{m:1,bgcolor:"primary.main"},children:s.jsx(J,{})}),s.jsx(A,{component:"h1",variant:"h5",color:"primary",children:"Sign in"}),s.jsxs(P,{component:"form",onSubmit:k,noValidate:!0,sx:{mt:1},children:[j&&s.jsx(ge,{severity:"error",sx:{width:"100%"},children:j}),s.jsx(N,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:e,onChange:m=>r(m.target.value),error:!!l,helperText:l,sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"primary.main"}},"& .MuiInputLabel-root":{color:"rgba(0, 0, 0, 0.6)","&.Mui-focused":{color:"primary.main"}}}}),s.jsx(N,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:o,onChange:m=>t(m.target.value),error:!!d,helperText:d,sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"primary.main"}},"& .MuiInputLabel-root":{color:"rgba(0, 0, 0, 0.6)","&.Mui-focused":{color:"primary.main"}}}}),s.jsxs(he,{fullWidth:!0,margin:"normal",required:!0,children:[s.jsx(xe,{id:"role-label",children:"Role"}),s.jsxs(de,{labelId:"role-label",id:"role",value:n,onChange:m=>a(m.target.value),label:"Role",error:!!x,children:[s.jsx(z,{value:E,children:"Admin"}),s.jsx(z,{value:D,children:"Operator"})]}),x&&s.jsx(A,{color:"error",children:x})]}),s.jsx(P,{sx:{display:"flex",justifyContent:"center",mt:2},children:g&&s.jsx(ve,{})}),s.jsx(be,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"primary.main",color:"primary.contrastText",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)","&:hover":{backgroundColor:"primary.dark"}},disabled:g,children:"Sign In"}),s.jsx(O,{container:!0,children:s.jsx(O,{item:!0,xs:!0,children:s.jsx(qe,{href:"#",variant:"body2",sx:{color:"primary.main"},children:"Forgot password?"})})})]})]})]})})})};export{ir as default};
