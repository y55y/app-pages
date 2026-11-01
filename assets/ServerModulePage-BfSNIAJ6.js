import{j as p,B as R,x as O,an as E}from"./vendor-BSKtVf9T.js";import{h as U,r as c}from"./react-2exx_T2n.js";import{g}from"./index-ZT3no5iT.js";import"./utils-BaPyqcQ7.js";const S=(e,r)=>{var l,m;const a=((m=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:m.detail)||(e==null?void 0:e.detail)||(e==null?void 0:e.message);return typeof a=="string"?a:(a==null?void 0:a.message)||JSON.stringify(a)||r},I=e=>JSON.stringify(e??null).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),P=(e,r)=>`<script>
(function () {
  var initial = ${I(e)};
  window.__MIDDAR_MODULE_CONFIG__ = ${I(r)} || {};
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
<\/script>`,L=(e,r,a,l)=>{const m=P(a,l);return e.trimStart().toLowerCase().startsWith("<!doctype html")||e.trimStart().toLowerCase().startsWith("<html")?e.replace(/<script\b/i,`${m}<script`):`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>${r}</style>${m}</head><body>${e}</body></html>`};function W(){const{moduleKey:e,pageKey:r}=U(),a=c.useRef(null),l=c.useRef(0),m=c.useRef(null),b=c.useRef(new Map),[n,f]=c.useState({loading:!0,html:"",css:"",moduleState:{},moduleConfig:{},error:null}),y=c.useCallback(async()=>{var o;const s=++l.current;(o=m.current)==null||o.abort();const t=new AbortController;m.current=t,f(i=>({...i,loading:!0,error:null}));try{const{data:i}=await g.get(`/modules/${encodeURIComponent(e)}/pages/${encodeURIComponent(r)}/render`,{signal:t.signal});if(s!==l.current||t.signal.aborted)return;f({loading:!1,html:String(i.html||""),css:String(i.css||"").replace(/<\/?style[^>]*>/gi,""),moduleState:i.state||{},moduleConfig:i.config||{},error:null})}catch(i){if(s!==l.current||t.signal.aborted)return;f({loading:!1,html:"",css:"",moduleState:{},moduleConfig:{},error:S(i,"Failed to load module page")})}},[e,r]);c.useEffect(()=>(y(),()=>{l.current+=1}),[y]);const k=c.useCallback(async(s,t={})=>{try{t.page_key=r,await g.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(s)}`,t),await y()}catch(o){f(i=>({...i,error:(o==null?void 0:o.detail)||(o==null?void 0:o.message)||"Action failed"}))}},[y,e,r]),x=c.useCallback(async s=>{if(!(!s||typeof s!="object"))try{await g.put(`/modules/${encodeURIComponent(e)}/state`,{state:s})}catch(t){f(o=>({...o,error:S(t,"State save failed")}))}},[e]);c.useEffect(()=>{const s=t=>{var o,i,j;if(!(!a.current||t.source!==a.current.contentWindow)){if(((o=t.data)==null?void 0:o.type)==="middar:request"){const $=t.source,{id:M,operation:q,data:d}=t.data,w=v=>{var u;$===((u=a.current)==null?void 0:u.contentWindow)&&$.postMessage({type:"middar:response",id:M,...v},"*")};(async()=>{var v;try{let u;if(q==="lookup"&&["items","livestock-items","livestock-feed-items","suppliers","stores","branches","taxes","customers","payment-methods"].includes(d==null?void 0:d.key)){const h=String(d.key);(v=b.current.get(h))==null||v.abort();const C=new AbortController;if(b.current.set(h,C),u=await g.get(`/modules/${encodeURIComponent(e)}/lookups/${encodeURIComponent(d.key)}`,{params:{q:String(d.query||"").slice(0,100)},signal:C.signal}),b.current.get(h)!==C)return;w({data:u.data.items})}else q==="action"&&typeof(d==null?void 0:d.action)=="string"?(u=await g.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(d.action)}`,{...d.payload,page_key:r}),w({data:u.data.data})):w({error:"Unsupported module request"})}catch(u){w({error:S(u,"Module request failed")})}})();return}((i=t.data)==null?void 0:i.type)==="middar:action"&&k(t.data.action,t.data.payload||{}),((j=t.data)==null?void 0:j.type)==="middar:state:save"&&x(t.data.state)}};return window.addEventListener("message",s),()=>window.removeEventListener("message",s)},[k,x,e,r]);const _=c.useMemo(()=>L(n.html,n.css,n.moduleState,n.moduleConfig),[n.html,n.css,n.moduleState,n.moduleConfig]);return n.loading?p.jsx(R,{sx:{p:4,textAlign:"center"},children:p.jsx(O,{})}):n.error?p.jsx(E,{severity:"error",sx:{m:2},children:n.error}):p.jsxs(R,{sx:{width:"100%",height:"calc(100vh - 48px)",minHeight:0,overflow:"hidden"},children:[p.jsx("iframe",{ref:a,title:`${e}-${r}`,sandbox:"allow-scripts",srcDoc:_,style:{display:"block",width:"100%",height:"100%",border:0},onLoad:s=>{s.currentTarget.contentWindow.postMessage({type:"middar:init",moduleKey:e,pageKey:r,state:n.moduleState||{}},"*")}},`${e}/${r}`),n.error&&p.jsx(E,{severity:"error",children:n.error})]})}export{W as default};
