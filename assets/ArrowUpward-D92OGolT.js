import{K as y,J as R,a7 as b,M as U,_ as o,n as _,b1 as u,r as S,U as $,Q as A,j as v,c as M,V as j,t as V}from"./index-CP_oUt-m.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function K(t){return parseFloat(t)}function L(t){return y("MuiSkeleton",t)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const N=["animation","className","component","height","style","variant","width"];let r=t=>t,p,g,m,f;const B=t=>{const{classes:a,variant:e,animation:n,hasChildren:i,width:l,height:s}=t;return j({root:["root",e,n,i&&"withChildren",i&&!l&&"fitContent",i&&!s&&"heightAuto"]},L,a)},E=b(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),F=b(g||(g=r`
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
`)),I=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=X(t.shape.borderRadius)||"px",n=K(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:_(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(m||(m=r`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),E),({ownerState:t,theme:a})=>t.animation==="wave"&&u(f||(f=r`
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
    `),F,(a.vars||a).palette.action.hover)),P=S.forwardRef(function(a,e){const n=$({props:a,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:s="span",height:d,style:C,variant:k="text",width:w}=n,h=A(n,N),c=o({},n,{animation:i,component:s,variant:k,hasChildren:!!h.children}),x=B(c);return v.jsx(I,o({as:s,ref:e,className:M(x.root,l),ownerState:c},h,{style:o({width:w,height:d},C)}))}),W=P,z=V(v.jsx("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");export{z as A,W as S};
