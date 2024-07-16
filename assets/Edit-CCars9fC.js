import{a as f,g as k,s as g,k as c,i as x,q as z,r as D,u as S,b as $,_ as l,d as m,e as C,j as M,t as T,o as j}from"./IconButton-DDU6yx0X.js";import{r as y,j as n}from"./index-K7U7e95_.js";import{S as _}from"./FormControlLabel-B_AzigHb.js";import{r as B}from"./MenuItem-Cph74Sky.js";function N(t){return k("MuiSwitch",t)}const o=f("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),E=["className","color","edge","size","sx"],I=t=>{const{classes:a,edge:e,size:s,color:d,checked:r,disabled:i}=t,h={root:["root",e&&`edge${c(e)}`,`size${c(s)}`],switchBase:["switchBase",`color${c(d)}`,r&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=C(h,N,a);return l({},a,v)},O=g("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,e.edge&&a[`edge${c(e.edge)}`],a[`size${c(e.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),P=g(_,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.switchBase,{[`& .${o.input}`]:a.input},e.color!=="default"&&a[`color${c(e.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:x(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,a])=>a.main&&a.light).map(([a])=>({props:{color:a},style:{[`&.${o.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:x(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?z(t.palette[a].main,.62):D(t.palette[a].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]})),U=g("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),q=g("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Z=y.forwardRef(function(a,e){const s=S({props:a,name:"MuiSwitch"}),{className:d,color:r="primary",edge:i=!1,size:h="medium",sx:v}=s,R=$(s,E),p=l({},s,{color:r,edge:i,size:h}),u=I(p),b=n.jsx(q,{className:u.thumb,ownerState:p});return n.jsxs(O,{className:m(u.root,d),sx:v,ownerState:p,children:[n.jsx(P,l({type:"checkbox",icon:b,checkedIcon:b,ref:e,ownerState:p},R,{classes:l({},u,{root:u.switchBase})})),n.jsx(U,{className:u.track,ownerState:p})]})});function L(t){return k("MuiDialogContentText",t)}f("MuiDialogContentText",["root"]);const A=["children","className"],F=t=>{const{classes:a}=t,s=C({root:["root"]},L,a);return l({},a,s)},X=g(M,{shouldForwardProp:t=>T(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,a)=>a.root})({}),tt=y.forwardRef(function(a,e){const s=S({props:a,name:"MuiDialogContentText"}),{className:d}=s,r=$(s,A),i=F(r);return n.jsx(X,l({component:"p",variant:"body1",color:"text.secondary",ref:e,ownerState:r,className:m(i.root,d)},s,{classes:i}))});var w={},V=j;Object.defineProperty(w,"__esModule",{value:!0});var W=w.default=void 0,G=V(B()),H=n;W=w.default=(0,G.default)((0,H.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");export{tt as D,Z as S,W as d};