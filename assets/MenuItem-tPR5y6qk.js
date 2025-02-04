import{g as j,a as F,ag as T,s as L,_ as i,p as D,bn as R,r as u,u as P,b as E,j as x,c as $,d as G,aC as H,b7 as W,bo as w,aO as b,bp as O,bq as _,L as S,aE as z,aD as K}from"./index-Dgc8z9Lx.js";function q(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function J(t){return parseFloat(t)}function Q(t){return j("MuiSkeleton",t)}F("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Y=["animation","className","component","height","style","variant","width"];let f=t=>t,B,N,U,V;const Z=t=>{const{classes:e,variant:a,animation:s,hasChildren:o,width:r,height:n}=t;return G({root:["root",a,s,o&&"withChildren",o&&!r&&"fitContent",o&&!n&&"heightAuto"]},Q,e)},tt=T(B||(B=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),et=T(N||(N=f`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),at=L("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=q(t.shape.borderRadius)||"px",s=J(t.shape.borderRadius);return i({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:D(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&R(U||(U=f`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),tt),({ownerState:t,theme:e})=>t.animation==="wave"&&R(V||(V=f`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),et,(e.vars||e).palette.action.hover)),st=u.forwardRef(function(e,a){const s=P({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:r,component:n="span",height:d,style:l,variant:m="text",width:v}=s,c=E(s,Y),g=i({},s,{animation:o,component:n,variant:m,hasChildren:!!c.children}),h=Z(g);return x.jsx(at,i({as:n,ref:a,className:$(h.root,r),ownerState:g},c,{style:i({width:v,height:d},l)}))}),ut=st;function ot(t){return j("MuiMenuItem",t)}const nt=F("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),p=nt,it=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],rt=(t,e)=>{const{ownerState:a}=t;return[e.root,a.dense&&e.dense,a.divider&&e.divider,!a.disableGutters&&e.gutters]},lt=t=>{const{disabled:e,dense:a,divider:s,disableGutters:o,selected:r,classes:n}=t,l=G({root:["root",a&&"dense",e&&"disabled",!o&&"gutters",s&&"divider",r&&"selected"]},ot,n);return i({},n,l)},dt=L(H,{shouldForwardProp:t=>W(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>i({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${p.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${p.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${p.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${p.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${p.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${_.root}`]:{marginTop:0,marginBottom:0},[`& .${_.inset}`]:{paddingLeft:36},[`& .${w.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&i({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${w.root} svg`]:{fontSize:"1.25rem"}}))),ct=u.forwardRef(function(e,a){const s=P({props:e,name:"MuiMenuItem"}),{autoFocus:o=!1,component:r="li",dense:n=!1,divider:d=!1,disableGutters:l=!1,focusVisibleClassName:m,role:v="menuitem",tabIndex:c,className:g}=s,h=E(s,it),k=u.useContext(S),I=u.useMemo(()=>({dense:n||k.dense||!1,disableGutters:l}),[k.dense,n,l]),C=u.useRef(null);z(()=>{o&&C.current&&C.current.focus()},[o]);const A=i({},s,{dense:I.dense,divider:d,disableGutters:l}),y=lt(s),X=K(C,a);let M;return s.disabled||(M=c!==void 0?c:-1),x.jsx(S.Provider,{value:I,children:x.jsx(dt,i({ref:X,role:v,tabIndex:M,component:r,focusVisibleClassName:$(y.focusVisible,m),className:$(y.root,g)},h,{ownerState:A,classes:y}))})}),gt=ct;export{gt as M,ut as S};
