import{a as N,g as P,s as T,ao as F,aU as G,_ as r,bd as C,aW as d,be as x,bf as $,r as c,u as U,b as _,L as I,b1 as w,aY as E,j as M,c as O,d as H}from"./index-CK2eHZDS.js";function S(e){return P("MuiMenuItem",e)}const W=N("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=W,z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],D=(e,s)=>{const{ownerState:a}=e;return[s.root,a.dense&&s.dense,a.divider&&s.divider,!a.disableGutters&&s.gutters]},Y=e=>{const{disabled:s,dense:a,divider:t,disableGutters:l,selected:p,classes:o}=e,i=H({root:["root",a&&"dense",s&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},S,o);return r({},o,i)},q=T(F,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:D})(({theme:e,ownerState:s})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${x.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${x.inset}`]:{marginLeft:52},[`& .${$.root}`]:{marginTop:0,marginBottom:0},[`& .${$.inset}`]:{paddingLeft:36},[`& .${C.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${C.root} svg`]:{fontSize:"1.25rem"}}))),A=c.forwardRef(function(s,a){const t=U({props:s,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:k,role:R="menuitem",tabIndex:v,className:B}=t,V=_(t,z),f=c.useContext(I),m=c.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),u=c.useRef(null);w(()=>{l&&u.current&&u.current.focus()},[l]);const j=r({},t,{dense:m.dense,divider:g,disableGutters:i}),b=Y(t),L=E(u,a);let y;return t.disabled||(y=v!==void 0?v:-1),M.jsx(I.Provider,{value:m,children:M.jsx(q,r({ref:L,role:R,tabIndex:y,component:p,focusVisibleClassName:O(b.focusVisible,k),className:O(b.root,B)},V,{ownerState:j,classes:b}))})}),K=A;export{K as M};
