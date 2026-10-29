import{j as u,B as C,x as _,an as k}from"./vendor-BSKtVf9T.js";import{h as I,r as l}from"./react-2exx_T2n.js";import{g as p}from"./index-9QIfhSRf.js";import"./utils-BaPyqcQ7.js";const w=(e,a)=>{var d,r;const n=((r=(d=e==null?void 0:e.response)==null?void 0:d.data)==null?void 0:r.detail)||(e==null?void 0:e.detail)||(e==null?void 0:e.message);return typeof n=="string"?n:(n==null?void 0:n.message)||JSON.stringify(n)||a},$=e=>JSON.stringify(e??null).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),O=(e,a)=>`<script>
(function () {
  var initial = ${$(e)};
  window.__MIDDAR_MODULE_CONFIG__ = ${$(a)} || {};
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
<\/script>`,E=(e,a,n,d)=>{const r=O(n,d);return e.trimStart().toLowerCase().startsWith("<!doctype html")||e.trimStart().toLowerCase().startsWith("<html")?e.replace(/<script\b/i,`${r}<script`):`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>${a}</style>${r}</head><body>${e}</body></html>`};function A(){const{moduleKey:e,pageKey:a}=I(),n=l.useRef(null),d=l.useRef(0),[r,m]=l.useState({loading:!0,html:"",css:"",moduleState:{},moduleConfig:{},error:null}),g=l.useCallback(async()=>{const o=++d.current;m(t=>({...t,loading:!0,error:null}));try{const{data:t}=await p.get(`/modules/${encodeURIComponent(e)}/pages/${encodeURIComponent(a)}/render`);if(o!==d.current)return;m({loading:!1,html:String(t.html||""),css:String(t.css||"").replace(/<\/?style[^>]*>/gi,""),moduleState:t.state||{},moduleConfig:t.config||{},error:null})}catch(t){if(o!==d.current)return;m({loading:!1,html:"",css:"",moduleState:{},moduleConfig:{},error:w(t,"Failed to load module page")})}},[e,a]);l.useEffect(()=>(g(),()=>{d.current+=1}),[g]);const h=l.useCallback(async(o,t={})=>{try{t.page_key=a,await p.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(o)}`,t),await g()}catch(s){m(f=>({...f,error:(s==null?void 0:s.detail)||(s==null?void 0:s.message)||"Action failed"}))}},[g,e,a]),v=l.useCallback(async o=>{if(!(!o||typeof o!="object"))try{await p.put(`/modules/${encodeURIComponent(e)}/state`,{state:o})}catch(t){m(s=>({...s,error:w(t,"State save failed")}))}},[e]);if(l.useEffect(()=>{const o=t=>{var s,f,S;if(!(!n.current||t.source!==n.current.contentWindow)){if(((s=t.data)==null?void 0:s.type)==="middar:request"){const b=t.source,{id:R,operation:x,data:i}=t.data,y=c=>{var j;b===((j=n.current)==null?void 0:j.contentWindow)&&b.postMessage({type:"middar:response",id:R,...c},"*")};(async()=>{try{let c;x==="lookup"&&["items","livestock-items","livestock-feed-items","suppliers","stores","branches","taxes","customers","payment-methods"].includes(i==null?void 0:i.key)?(c=await p.get(`/modules/${encodeURIComponent(e)}/lookups/${encodeURIComponent(i.key)}`,{params:{q:String(i.query||"").slice(0,100)}}),y({data:c.data.items})):x==="action"&&typeof(i==null?void 0:i.action)=="string"?(c=await p.post(`/modules/${encodeURIComponent(e)}/actions/${encodeURIComponent(i.action)}`,{...i.payload,page_key:a}),y({data:c.data.data})):y({error:"Unsupported module request"})}catch(c){y({error:w(c,"Module request failed")})}})();return}((f=t.data)==null?void 0:f.type)==="middar:action"&&h(t.data.action,t.data.payload||{}),((S=t.data)==null?void 0:S.type)==="middar:state:save"&&v(t.data.state)}};return window.addEventListener("message",o),()=>window.removeEventListener("message",o)},[h,v,e,a]),r.loading)return u.jsx(C,{sx:{p:4,textAlign:"center"},children:u.jsx(_,{})});if(r.error)return u.jsx(k,{severity:"error",sx:{m:2},children:r.error});const q=E(r.html,r.css,r.moduleState,r.moduleConfig);return u.jsxs(C,{sx:{width:"100%",height:"calc(100vh - 48px)",minHeight:0,overflow:"hidden"},children:[u.jsx("iframe",{ref:n,title:`${e}-${a}`,sandbox:"allow-scripts",srcDoc:q,style:{display:"block",width:"100%",height:"100%",border:0},onLoad:o=>{o.currentTarget.contentWindow.postMessage({type:"middar:init",moduleKey:e,pageKey:a,state:r.moduleState||{}},"*")}},`${e}/${a}`),r.error&&u.jsx(k,{severity:"error",children:r.error})]})}export{A as default};
