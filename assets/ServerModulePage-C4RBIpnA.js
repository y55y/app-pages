import{j as f,B as _,K as E,an as M}from"./vendor-BSKtVf9T.js";import{h as N,r as d}from"./react-2exx_T2n.js";import{g}from"./index-ecj4pKfF.js";import"./utils-BaPyqcQ7.js";const j=(e,n)=>{var c,u;const s=((u=(c=e==null?void 0:e.response)==null?void 0:c.data)==null?void 0:u.detail)||(e==null?void 0:e.detail)||(e==null?void 0:e.message);return typeof s=="string"?s:(s==null?void 0:s.message)||JSON.stringify(s)||n},U=e=>JSON.stringify(e??null).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),P=(e,n)=>`<script>
(function () {
  var initial = ${U(e)};
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
<\/script>`,A=(e,n,s,c)=>{const u=P(s,c);return e.trimStart().toLowerCase().startsWith("<!doctype html")||e.trimStart().toLowerCase().startsWith("<html")?e.replace(/<script\b/i,`${u}<script`):`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>${n}</style>${u}</head><body>${e}</body></html>`};function T(){const{moduleKey:e,pageKey:n}=N(),s=d.useRef(null),c=d.useRef(0),u=d.useRef(null),C=d.useRef(new Map),k=d.useRef(null),[o,y]=d.useState({loading:!0,html:"",css:"",moduleState:{},moduleConfig:{},error:null}),w=d.useCallback(async()=>{var a;const i=++c.current;(a=u.current)==null||a.abort();const r=new AbortController;u.current=r,y(l=>({...l,loading:!0,error:null}));try{const{data:l}=await g.get(`/modules/${encodeURIComponent(e)}/pages/${encodeURIComponent(n)}/render`,{signal:r.signal});if(i!==c.current||r.signal.aborted)return;y({loading:!1,html:String(l.html||""),css:String(l.css||"").replace(/<\/?style[^>]*>/gi,""),moduleState:l.state||{},moduleConfig:l.config||{},error:null})}catch(l){if(i!==c.current||r.signal.aborted)return;y({loading:!1,html:"",css:"",moduleState:{},moduleConfig:{},error:j(l,"Failed to load module page")})}},[e,n]);d.useEffect(()=>(w(),()=>{c.current+=1}),[w]);const R=d.useCallback(async(i,r={})=>{try{r.page_key=n,await g.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(i)}`,r),await w()}catch(a){y(l=>({...l,error:(a==null?void 0:a.detail)||(a==null?void 0:a.message)||"Action failed"}))}},[w,e,n]),$=d.useCallback(async i=>{if(!(!i||typeof i!="object"))try{await g.put(`/modules/${encodeURIComponent(e)}/state`,{state:i})}catch(r){y(a=>({...a,error:j(r,"State save failed")}))}},[e]);d.useEffect(()=>{const i=r=>{var a,l,q;if(!(!s.current||r.source!==s.current.contentWindow)){if(((a=r.data)==null?void 0:a.type)==="middar:request"){const I=r.source,{id:L,operation:S,data:t}=r.data,v=h=>{var b;I===((b=s.current)==null?void 0:b.contentWindow)&&I.postMessage({type:"middar:response",id:L,...h},"*")};(async()=>{var h,b;try{let m;if(S==="bootstrap"&&e==="livestock"){(h=k.current)==null||h.abort();const p=new AbortController;if(k.current=p,m=await g.get(`/modules/${encodeURIComponent(e)}/pages/${encodeURIComponent(n)}/bootstrap`,{params:{page_size:Math.min(Math.max(Number((t==null?void 0:t.page_size)||50),1),100),cursor:(t==null?void 0:t.cursor)||void 0,field:(t==null?void 0:t.field)||void 0,value:(t==null?void 0:t.value)||void 0},signal:p.signal}),k.current!==p)return;v({data:m.data})}else if(S==="lookup"&&["items","livestock-items","livestock-feed-items","suppliers","stores","branches","taxes","customers","payment-methods"].includes(t==null?void 0:t.key)){const p=String(t.key);(b=C.current.get(p))==null||b.abort();const x=new AbortController;if(C.current.set(p,x),m=await g.get(`/modules/${encodeURIComponent(e)}/lookups/${encodeURIComponent(t.key)}`,{params:{q:String(t.query||"").slice(0,100)},signal:x.signal}),C.current.get(p)!==x)return;v({data:m.data.items})}else S==="action"&&typeof(t==null?void 0:t.action)=="string"?(m=await g.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(t.action)}`,{...t.payload,page_key:n}),v({data:m.data.data})):v({error:"Unsupported module request"})}catch(m){v({error:j(m,"Module request failed")})}})();return}((l=r.data)==null?void 0:l.type)==="middar:action"&&R(r.data.action,r.data.payload||{}),((q=r.data)==null?void 0:q.type)==="middar:state:save"&&$(r.data.state)}};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)},[R,$,e,n]);const O=d.useMemo(()=>A(o.html,o.css,o.moduleState,o.moduleConfig),[o.html,o.css,o.moduleState,o.moduleConfig]);return o.loading?f.jsxs(_,{sx:{p:3},"aria-busy":"true","aria-label":"Loading module",children:[f.jsx(E,{variant:"rounded",height:56,sx:{mb:2}}),f.jsx(E,{variant:"rounded",height:"calc(100vh - 170px)"})]}):o.error?f.jsx(M,{severity:"error",sx:{m:2},children:o.error}):f.jsxs(_,{sx:{width:"100%",height:"calc(100vh - 48px)",minHeight:0,overflow:"hidden"},children:[f.jsx("iframe",{ref:s,title:`${e}-${n}`,sandbox:"allow-scripts",srcDoc:O,style:{display:"block",width:"100%",height:"100%",border:0},onLoad:i=>{i.currentTarget.contentWindow.postMessage({type:"middar:init",moduleKey:e,pageKey:n,state:o.moduleState||{}},"*")}},`${e}/${n}`),o.error&&f.jsx(M,{severity:"error",children:o.error})]})}export{T as default};
