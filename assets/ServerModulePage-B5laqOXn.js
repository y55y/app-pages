import{j as d,an as O,B as S,K as C}from"./vendor-BSKtVf9T.js";import{h as D,r as u}from"./react-2exx_T2n.js";import{g as v}from"./index-B1eyHn7f.js";import"./utils-BaPyqcQ7.js";const $=(t,r)=>{var c,m;const s=((m=(c=t==null?void 0:t.response)==null?void 0:c.data)==null?void 0:m.detail)||(t==null?void 0:t.detail)||(t==null?void 0:t.message);return typeof s=="string"?s:(s==null?void 0:s.message)||JSON.stringify(s)||r},L=t=>JSON.stringify(t??null).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),J=(t,r)=>`<script>
(function () {
  var initial = ${L(t)};
  window.__MIDDAR_MODULE_CONFIG__ = ${L(r)} || {};
  var pending = new Map();
  var sequence = 0;
  window.middar = {
    request: function (operation, data) {
      return new Promise(function (resolve, reject) {
        var id = 'rpc-' + (++sequence);
        var timer = setTimeout(function () { pending.delete(id); reject(new Error('انتهت مهلة الاتصال؛ حدّث الصفحة للتحقق من النتيجة قبل إعادة العملية')); }, 60000);
        pending.set(id, { resolve: resolve, reject: reject, timer: timer });
        window.parent.postMessage({ type: 'middar:request', id: id, operation: operation, data: data }, '*');
      });
    }
  };
  window.addEventListener('message', function (event) {
    if (event.source !== window.parent || event.data?.type !== 'middar:response') return;
    var request = pending.get(event.data.id);
    if (!request) return;
    clearTimeout(request.timer);
    pending.delete(event.data.id);
    if (event.data.error) request.reject(new Error(event.data.error));
    else request.resolve(event.data.data);
  });
  // ponytail: UI submits use RPC in the forms-disabled sandbox; programmatic callers use middar.request.
  window.addEventListener('click', function (event) {
    var button = event.target.closest('button, input[type="submit"], input[type="image"]');
    if (event.defaultPrevented || !button || button.type !== 'submit' || button.disabled || !button.form) return;
    event.preventDefault();
    var form = button.form;
    if (form.noValidate || button.formNoValidate || form.reportValidity()) {
      form.dispatchEvent(new SubmitEvent('submit', { bubbles: true, cancelable: true, submitter: button }));
    }
  });
  window.addEventListener('keydown', function (event) {
    if (event.defaultPrevented || event.key !== 'Enter' || event.isComposing || event.target.tagName !== 'INPUT' || !event.target.form) return;
    var button = event.target.form.querySelector('button[type="submit"], input[type="submit"]');
    if (button) { event.preventDefault(); button.click(); }
  });
  var key = 'barnflow_ar_demo_v2';
  var memory = Object.create(null);
  if (initial && typeof initial === 'object') memory[key] = JSON.stringify(initial);
  var storage = {
    get length() { return Object.keys(memory).length; },
    key: function (index) { return Object.keys(memory)[index] || null; },
    getItem: function (name) { return Object.prototype.hasOwnProperty.call(memory, name) ? memory[name] : null; },
    setItem: function (name, value) {
      memory[name] = String(value);
      if (name === key && window.parent && window.parent !== window) {
        try { window.parent.postMessage({ type: 'middar:state:save', state: JSON.parse(memory[name]) }, '*'); } catch (_) {}
      }
    },
    removeItem: function (name) {
      delete memory[name];
      if (name === key && window.parent && window.parent !== window) window.parent.postMessage({ type: 'middar:state:save', state: {} }, '*');
    },
    clear: function () { memory = Object.create(null); }
  };
  try { Object.defineProperty(window, 'localStorage', { configurable: true, value: storage }); } catch (_) { try { window.localStorage = storage; } catch (__) {} }
})();
<\/script>`,T=(t,r,s,c)=>{const m=J(s,c);return t.trimStart().toLowerCase().startsWith("<!doctype html")||t.trimStart().toLowerCase().startsWith("<html")?t.replace(/<script\b/i,`${m}<script`):`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>${r}</style>${m}</head><body>${t}</body></html>`};function V(){const{moduleKey:t,pageKey:r}=D(),s=u.useRef(null),c=u.useRef(0),m=u.useRef(null),f=u.useRef(new Map),[R,q]=u.useState(!1),[o,b]=u.useState({loading:!0,html:"",css:"",moduleState:{},moduleConfig:{},error:null}),k=u.useCallback(async()=>{var a;const i=++c.current;(a=m.current)==null||a.abort();const n=new AbortController;m.current=n,q(!1),b(l=>({...l,loading:!0,error:null}));try{const{data:l}=await v.get(`/modules/${encodeURIComponent(t)}/pages/${encodeURIComponent(r)}/render`,{signal:n.signal});if(i!==c.current||n.signal.aborted)return;b({loading:!1,html:String(l.html||""),css:String(l.css||"").replace(/<\/?style[^>]*>/gi,""),moduleState:l.state||{},moduleConfig:l.config||{},error:null})}catch(l){if(i!==c.current||n.signal.aborted)return;b({loading:!1,html:"",css:"",moduleState:{},moduleConfig:{},error:$(l,"Failed to load module page")})}},[t,r]);u.useEffect(()=>(k(),()=>{c.current+=1}),[k]);const I=u.useCallback(async(i,n={})=>{try{n.page_key=r,await v.post(`/modules/${encodeURIComponent(t)}/actions/${encodeURIComponent(i)}`,n),await k()}catch(a){b(l=>({...l,error:(a==null?void 0:a.detail)||(a==null?void 0:a.message)||"Action failed"}))}},[k,t,r]),E=u.useCallback(async i=>{if(!(!i||typeof i!="object"))try{await v.put(`/modules/${encodeURIComponent(t)}/state`,{state:i})}catch(n){b(a=>({...a,error:$(n,"State save failed")}))}},[t]);u.useEffect(()=>{const i=n=>{var a,l,M;if(!(!s.current||n.source!==s.current.contentWindow)){if(((a=n.data)==null?void 0:a.type)==="middar:request"){const U=n.source,{id:N,operation:j,data:e}=n.data,w=x=>{var h;U===((h=s.current)==null?void 0:h.contentWindow)&&U.postMessage({type:"middar:response",id:N,...x},"*")};(async()=>{var x,h;try{let p;if(j==="bootstrap"&&t==="livestock"){const y=(e==null?void 0:e.page_key)||r,g=`bootstrap:${y}:${(e==null?void 0:e.list_key)||""}`;(x=f.current.get(g))==null||x.abort();const _=new AbortController;if(f.current.set(g,_),p=await v.get(`/modules/${encodeURIComponent(t)}/pages/${encodeURIComponent(y)}/bootstrap`,{params:{page_size:Math.min(Math.max(Number((e==null?void 0:e.page_size)||50),1),100),cursor:(e==null?void 0:e.cursor)||void 0,field:(e==null?void 0:e.field)||void 0,value:(e==null?void 0:e.value)||void 0,list_key:(e==null?void 0:e.list_key)||void 0,q:(e==null?void 0:e.q)||void 0,stage:(e==null?void 0:e.stage)||void 0},signal:_.signal}),f.current.get(g)!==_)return;w({data:p.data})}else if(j==="lookup"&&["items","livestock-items","livestock-feed-items","livestock-slaughtered-items","suppliers","stores","branches","taxes","customers","payment-methods"].includes(e==null?void 0:e.key)){const y=String(e.key);(h=f.current.get(y))==null||h.abort();const g=new AbortController;if(f.current.set(y,g),p=await v.get(`/modules/${encodeURIComponent(t)}/lookups/${encodeURIComponent(e.key)}`,{params:{q:String(e.query||"").slice(0,100)},signal:g.signal}),f.current.get(y)!==g)return;w({data:p.data.items})}else j==="action"&&typeof(e==null?void 0:e.action)=="string"?(p=await v.post(`/modules/${encodeURIComponent(t)}/actions/${encodeURIComponent(e.action)}`,{...e.payload,page_key:r}),w({data:p.data.data})):w({error:"Unsupported module request"})}catch(p){w({error:$(p,"Module request failed")})}})();return}((l=n.data)==null?void 0:l.type)==="middar:action"&&I(n.data.action,n.data.payload||{}),((M=n.data)==null?void 0:M.type)==="middar:state:save"&&E(n.data.state)}};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)},[I,E,t,r]);const A=u.useMemo(()=>T(o.html,o.css,o.moduleState,o.moduleConfig),[o.html,o.css,o.moduleState,o.moduleConfig]);return o.loading?d.jsx(P,{}):o.error?d.jsx(O,{severity:"error",sx:{m:2},children:o.error}):d.jsxs(S,{sx:{position:"relative",width:"100%",height:"calc(100vh - 48px)",minHeight:0,overflow:"hidden"},children:[!R&&d.jsx(S,{sx:{position:"absolute",inset:0},children:d.jsx(P,{})}),d.jsx("iframe",{ref:s,title:`${t}-${r}`,sandbox:"allow-scripts",srcDoc:A,style:{display:"block",width:"100%",height:"100%",border:0,visibility:R?"visible":"hidden"},onLoad:i=>{i.currentTarget.contentWindow.postMessage({type:"middar:init",moduleKey:t,pageKey:r,state:o.moduleState||{}},"*"),q(!0)}},`${t}/${r}`),o.error&&d.jsx(O,{severity:"error",children:o.error})]})}function P(){return d.jsxs(S,{sx:{p:3},role:"status","aria-busy":"true","aria-label":"Loading module",children:[d.jsx(C,{variant:"rounded",height:56,sx:{mb:2}}),d.jsx(C,{variant:"rounded",height:130,sx:{mb:2}}),d.jsx(S,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr 1fr",md:"repeat(5, 1fr)"},gap:2,mb:2},children:Array.from({length:5},(t,r)=>d.jsx(C,{variant:"rounded",height:100},r))}),Array.from({length:6},(t,r)=>d.jsx(C,{variant:"rounded",height:38,sx:{mb:1}},r))]})}export{V as default};
