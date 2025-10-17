import{r as d,c as b}from"./react-DDwWrNq9.js";import{f as w,P as f,h as p,c as l}from"./card-D31IeaR0.js";import{j as c}from"./vendor-h5bvcGcX.js";function P(e,r=globalThis==null?void 0:globalThis.document){const t=w(e);d.useEffect(()=>{const a=o=>{o.key==="Escape"&&t(o)};return r.addEventListener("keydown",a,{capture:!0}),()=>r.removeEventListener("keydown",a,{capture:!0})},[t,r])}var x="Arrow",u=d.forwardRef((e,r)=>{const{children:t,width:a=10,height:o=5,...s}=e;return c.jsx(f.svg,{...s,ref:r,width:a,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:c.jsx("polygon",{points:"0,0 30,0 15,10"})})});u.displayName=x;var L=u;function _(e){const[r,t]=d.useState(void 0);return p(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const a=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let i,n;if("borderBoxSize"in s){const h=s.borderBoxSize,y=Array.isArray(h)?h[0]:h;i=y.inlineSize,n=y.blockSize}else i=e.offsetWidth,n=e.offsetHeight;t({width:i,height:n})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}else t(void 0)},[e]),r}var E="Portal",g=d.forwardRef((e,r)=>{var n;const{container:t,...a}=e,[o,s]=d.useState(!1);p(()=>s(!0),[]);const i=t||o&&((n=globalThis==null?void 0:globalThis.document)==null?void 0:n.body);return i?b.createPortal(c.jsx(f.div,{...a,ref:r}),i):null});g.displayName=E;/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],j=l("calendar",k);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],T=l("eye",S);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],H=l("trending-up",m);var z=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),A="VisuallyHidden",v=d.forwardRef((e,r)=>c.jsx(f.span,{...e,ref:r,style:{...z,...e.style}}));v.displayName=A;var O=v;export{j as C,T as E,g as P,L as R,H as T,z as V,_ as a,O as b,P as u};
