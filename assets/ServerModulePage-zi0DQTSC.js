import{j as g,B as I,K as E,an as M}from"./vendor-BSKtVf9T.js";import{h as P,r as c}from"./react-2exx_T2n.js";import{g as v}from"./index-CHab5ASO.js";import"./utils-BaPyqcQ7.js";const $=(t,n)=>{var u,d;const s=((d=(u=t==null?void 0:t.response)==null?void 0:u.data)==null?void 0:d.detail)||(t==null?void 0:t.detail)||(t==null?void 0:t.message);return typeof s=="string"?s:(s==null?void 0:s.message)||JSON.stringify(s)||n},U=t=>JSON.stringify(t??null).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),N=(t,n)=>`<script>
(function () {
  var initial = ${U(t)};
  window.__MIDDAR_MODULE_CONFIG__ = ${U(n)} || {};
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
<\/script>`,A=(t,n,s,u)=>{const d=N(s,u);return t.trimStart().toLowerCase().startsWith("<!doctype html")||t.trimStart().toLowerCase().startsWith("<html")?t.replace(/<script\b/i,`${d}<script`):`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>${n}</style>${d}</head><body>${t}</body></html>`};function T(){const{moduleKey:t,pageKey:n}=P(),s=c.useRef(null),u=c.useRef(0),d=c.useRef(null),f=c.useRef(new Map),[o,b]=c.useState({loading:!0,html:"",css:"",moduleState:{},moduleConfig:{},error:null}),k=c.useCallback(async()=>{var a;const i=++u.current;(a=d.current)==null||a.abort();const r=new AbortController;d.current=r,b(l=>({...l,loading:!0,error:null}));try{const{data:l}=await v.get(`/modules/${encodeURIComponent(t)}/pages/${encodeURIComponent(n)}/render`,{signal:r.signal});if(i!==u.current||r.signal.aborted)return;b({loading:!1,html:String(l.html||""),css:String(l.css||"").replace(/<\/?style[^>]*>/gi,""),moduleState:l.state||{},moduleConfig:l.config||{},error:null})}catch(l){if(i!==u.current||r.signal.aborted)return;b({loading:!1,html:"",css:"",moduleState:{},moduleConfig:{},error:$(l,"Failed to load module page")})}},[t,n]);c.useEffect(()=>(k(),()=>{u.current+=1}),[k]);const j=c.useCallback(async(i,r={})=>{try{r.page_key=n,await v.post(`/modules/${encodeURIComponent(t)}/actions/${encodeURIComponent(i)}`,r),await k()}catch(a){b(l=>({...l,error:(a==null?void 0:a.detail)||(a==null?void 0:a.message)||"Action failed"}))}},[k,t,n]),_=c.useCallback(async i=>{if(!(!i||typeof i!="object"))try{await v.put(`/modules/${encodeURIComponent(t)}/state`,{state:i})}catch(r){b(a=>({...a,error:$(r,"State save failed")}))}},[t]);c.useEffect(()=>{const i=r=>{var a,l,q;if(!(!s.current||r.source!==s.current.contentWindow)){if(((a=r.data)==null?void 0:a.type)==="middar:request"){const R=r.source,{id:L,operation:S,data:e}=r.data,w=C=>{var h;R===((h=s.current)==null?void 0:h.contentWindow)&&R.postMessage({type:"middar:response",id:L,...C},"*")};(async()=>{var C,h;try{let m;if(S==="bootstrap"&&t==="livestock"){const y=(e==null?void 0:e.page_key)||n,p=`bootstrap:${y}:${(e==null?void 0:e.list_key)||""}`;(C=f.current.get(p))==null||C.abort();const x=new AbortController;if(f.current.set(p,x),m=await v.get(`/modules/${encodeURIComponent(t)}/pages/${encodeURIComponent(y)}/bootstrap`,{params:{page_size:Math.min(Math.max(Number((e==null?void 0:e.page_size)||50),1),100),cursor:(e==null?void 0:e.cursor)||void 0,field:(e==null?void 0:e.field)||void 0,value:(e==null?void 0:e.value)||void 0,list_key:(e==null?void 0:e.list_key)||void 0,q:(e==null?void 0:e.q)||void 0,stage:(e==null?void 0:e.stage)||void 0},signal:x.signal}),f.current.get(p)!==x)return;w({data:m.data})}else if(S==="lookup"&&["items","livestock-items","livestock-feed-items","livestock-slaughtered-items","suppliers","stores","branches","taxes","customers","payment-methods"].includes(e==null?void 0:e.key)){const y=String(e.key);(h=f.current.get(y))==null||h.abort();const p=new AbortController;if(f.current.set(y,p),m=await v.get(`/modules/${encodeURIComponent(t)}/lookups/${encodeURIComponent(e.key)}`,{params:{q:String(e.query||"").slice(0,100)},signal:p.signal}),f.current.get(y)!==p)return;w({data:m.data.items})}else S==="action"&&typeof(e==null?void 0:e.action)=="string"?(m=await v.post(`/modules/${encodeURIComponent(t)}/actions/${encodeURIComponent(e.action)}`,{...e.payload,page_key:n}),w({data:m.data.data})):w({error:"Unsupported module request"})}catch(m){w({error:$(m,"Module request failed")})}})();return}((l=r.data)==null?void 0:l.type)==="middar:action"&&j(r.data.action,r.data.payload||{}),((q=r.data)==null?void 0:q.type)==="middar:state:save"&&_(r.data.state)}};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)},[j,_,t,n]);const O=c.useMemo(()=>A(o.html,o.css,o.moduleState,o.moduleConfig),[o.html,o.css,o.moduleState,o.moduleConfig]);return o.loading?g.jsxs(I,{sx:{p:3},"aria-busy":"true","aria-label":"Loading module",children:[g.jsx(E,{variant:"rounded",height:56,sx:{mb:2}}),g.jsx(E,{variant:"rounded",height:"calc(100vh - 170px)"})]}):o.error?g.jsx(M,{severity:"error",sx:{m:2},children:o.error}):g.jsxs(I,{sx:{width:"100%",height:"calc(100vh - 48px)",minHeight:0,overflow:"hidden"},children:[g.jsx("iframe",{ref:s,title:`${t}-${n}`,sandbox:"allow-scripts",srcDoc:O,style:{display:"block",width:"100%",height:"100%",border:0},onLoad:i=>{i.currentTarget.contentWindow.postMessage({type:"middar:init",moduleKey:t,pageKey:n,state:o.moduleState||{}},"*")}},`${t}/${n}`),o.error&&g.jsx(M,{severity:"error",children:o.error})]})}export{T as default};
