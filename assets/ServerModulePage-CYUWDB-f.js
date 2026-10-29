import{j as l,B as C,x as I,an as j}from"./vendor-BSKtVf9T.js";import{h as R,r as u}from"./react-2exx_T2n.js";import{g as p}from"./index-cI9ZefCX.js";import"./utils-BaPyqcQ7.js";const w=(e,n)=>{var d,r;const a=((r=(d=e==null?void 0:e.response)==null?void 0:d.data)==null?void 0:r.detail)||(e==null?void 0:e.detail)||(e==null?void 0:e.message);return typeof a=="string"?a:(a==null?void 0:a.message)||JSON.stringify(a)||n},$=e=>JSON.stringify(e??null).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),_=(e,n)=>`<script>
(function () {
  var initial = ${$(e)};
  window.__MIDDAR_MODULE_CONFIG__ = ${$(n)} || {};
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
<\/script>`,O=(e,n,a,d)=>{const r=_(a,d);return e.trimStart().toLowerCase().startsWith("<!doctype html")||e.trimStart().toLowerCase().startsWith("<html")?e.replace(/<script\b/i,`${r}<script`):`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>${n}</style>${r}</head><body>${e}</body></html>`};function N(){const{moduleKey:e,pageKey:n}=R(),a=u.useRef(null),d=u.useRef(0),[r,m]=u.useState({loading:!0,html:"",css:"",moduleState:{},moduleConfig:{},error:null}),f=u.useCallback(async()=>{const o=++d.current;m(t=>({...t,loading:!0,error:null}));try{const{data:t}=await p.get(`/modules/${encodeURIComponent(e)}/pages/${encodeURIComponent(n)}/render`);if(o!==d.current)return;m({loading:!1,html:String(t.html||""),css:String(t.css||"").replace(/<\/?style[^>]*>/gi,""),moduleState:t.state||{},moduleConfig:t.config||{},error:null})}catch(t){if(o!==d.current)return;m({loading:!1,html:"",css:"",moduleState:{},moduleConfig:{},error:w(t,"Failed to load module page")})}},[e,n]);u.useEffect(()=>(f(),()=>{d.current+=1}),[f]);const v=u.useCallback(async(o,t={})=>{try{t.page_key=n,await p.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(o)}`,t),await f()}catch(s){m(g=>({...g,error:(s==null?void 0:s.detail)||(s==null?void 0:s.message)||"Action failed"}))}},[f,e,n]),b=u.useCallback(async o=>{if(!(!o||typeof o!="object"))try{await p.put(`/modules/${encodeURIComponent(e)}/state`,{state:o})}catch(t){m(s=>({...s,error:w(t,"State save failed")}))}},[e]);if(u.useEffect(()=>{const o=t=>{var s,g,h;if(!(!a.current||t.source!==a.current.contentWindow)){if(((s=t.data)==null?void 0:s.type)==="middar:request"){const S=t.source,{id:E,operation:k,data:i}=t.data,y=c=>{var x;S===((x=a.current)==null?void 0:x.contentWindow)&&S.postMessage({type:"middar:response",id:E,...c},"*")};(async()=>{try{let c;k==="lookup"&&["items","livestock-items","livestock-feed-items","suppliers","stores","branches","taxes","customers","payment-methods"].includes(i==null?void 0:i.key)?(c=await p.get(`/modules/${encodeURIComponent(e)}/lookups/${encodeURIComponent(i.key)}`,{params:{q:String(i.query||"").slice(0,100)}}),y({data:c.data.items})):k==="action"&&typeof(i==null?void 0:i.action)=="string"?(c=await p.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(i.action)}`,{...i.payload,page_key:n}),y({data:c.data.data})):y({error:"Unsupported module request"})}catch(c){y({error:w(c,"Module request failed")})}})();return}((g=t.data)==null?void 0:g.type)==="middar:action"&&v(t.data.action,t.data.payload||{}),((h=t.data)==null?void 0:h.type)==="middar:state:save"&&b(t.data.state)}};return window.addEventListener("message",o),()=>window.removeEventListener("message",o)},[v,b,e,n]),r.loading)return l.jsx(C,{sx:{p:4,textAlign:"center"},children:l.jsx(I,{})});if(r.error)return l.jsx(j,{severity:"error",sx:{m:2},children:r.error});const q=O(r.html,r.css,r.moduleState,r.moduleConfig);return l.jsxs(C,{sx:{width:"100%",height:"calc(100vh - 48px)",minHeight:0,overflow:"hidden"},children:[l.jsx("iframe",{ref:a,title:`${e}-${n}`,sandbox:"allow-scripts",srcDoc:q,style:{display:"block",width:"100%",height:"100%",border:0},onLoad:o=>{o.currentTarget.contentWindow.postMessage({type:"middar:init",moduleKey:e,pageKey:n,state:r.moduleState||{}},"*")}},`${e}/${n}`),r.error&&l.jsx(j,{severity:"error",children:r.error})]})}export{N as default};
