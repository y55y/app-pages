import{P as p,r as C,j as e,S as R,V as j,I as y,z as L,B as te,W as ne,k as f,N as F,h as ae,R as k,Z as ie,T as le,n as _,q as z,O as re,K as ce,aB as oe,G as $,m as de,M as he,a_ as me}from"./index-CK2eHZDS.js";import{d as ue}from"./Search-BXw6LGI1.js";import{d as pe,a as xe,T as ge,v as fe,b as je,c as be}from"./EditTwoTone-DpwzjxCu.js";import{d as ye}from"./PrintTwoTone-6qO7arNh.js";import{F as Se,d as Te}from"./AddTwoTone-NMCIR7d0.js";import{T as Ce}from"./TextField--NRucxkR.js";import{I as De}from"./InputAdornment-B3MGI1qD.js";import{d as Pe}from"./Delete-nHBTa-3K.js";import{T as ke}from"./TableHead-CqBhAkUl.js";import{b as v,T as Re,a as Ie,c as qe}from"./TableRow-Cpxk0AAS.js";import{T as c}from"./TableCell-BJINaop2.js";import{C as H}from"./Checkbox-CKFEckdw.js";import"./Avatar-BcLFIjkA.js";import{d as ze}from"./payment-KmgVbcvK.js";import{d as ve}from"./DeleteTwoTone-B6ncKXH3.js";import{T as we}from"./TablePagination-0KQBaQp2.js";import{D as Ee,a as Ae,b as _e}from"./DialogContent-B6RC-5yg.js";import{D as $e}from"./DialogTitle-Do-b2gQd.js";import{D as Oe}from"./DialogContentText-BTgKtHs8.js";import"./FormHelperText-DhsFkHK6.js";import"./KeyboardArrowRight-CmUX_fuU.js";import"./MenuItem-CGopNoQ2.js";const B=({row:t,setRows:l,id:a})=>{const[n,o]=C.useState(""),h=r=>{const g=r==null?void 0:r.target.value;if(o(g||""),g){const i=t==null?void 0:t.filter(b=>{let S=!0;const I=["id","clientID","amount","date","reference","type","status","company","name"];let d=!1;return I.forEach(T=>{b[T].toString().toLowerCase().includes(g.toString().toLowerCase())&&(d=!0)}),d||(S=!1),S});l(i)}else l(t)};return e.jsxs(R,{direction:{xs:"column",sm:"row"},sx:{p:3},alignItems:"center",justifyContent:"space-between",spacing:2,children:[e.jsx(Ce,{InputProps:{startAdornment:e.jsx(De,{position:"start",children:e.jsx(ue,{fontSize:"small"})})},onChange:h,placeholder:"البحث عن سند",value:n,size:"small",sx:{width:{xs:1,sm:"auto"}}}),e.jsxs(R,{direction:"row",alignItems:"center",spacing:1.25,children:[e.jsx(j,{title:"Copy",children:e.jsx(y,{size:"large",children:e.jsx(pe,{})})}),e.jsx(j,{title:"Print",children:e.jsx(y,{size:"large",children:e.jsx(ye,{})})}),e.jsx(j,{title:"Filter",children:e.jsx(y,{size:"large",children:e.jsx(xe,{})})}),e.jsx(j,{title:"Add Payment",children:e.jsx(Se,{color:"primary",size:"small",component:L,to:"/apps/invoice/accounting/entry/add",sx:{boxShadow:"none",width:32,height:32,minHeight:32},children:e.jsx(Te,{fontSize:"small"})})})]})]})};B.propTypes={row:p.array,setRows:p.func};const Le=[{id:"id",numeric:!0,label:"الرقم"},{id:"date",numeric:!1,label:"التاريخ"},{id:"store",numeric:!1,label:"الفرع",align:"center"},{id:"debet",numeric:!1,label:"الطرف المدين",align:"center"},{id:"credit",numeric:!1,label:"الطرف الدائن",align:"center"},{id:"closed",numeric:!1,label:"الحالة",align:"center"},{id:"amount",numeric:!1,label:"المبلغ",align:"center"},{id:"notes",numeric:!1,label:"الملاحظات",align:"center"},{id:"category",numeric:!1,label:"التصنيف",align:"center"}],M=({numSelected:t})=>e.jsx(ne,{sx:{p:0,px:1,...t>0&&{color:"secondary.main"}},children:t>0?e.jsxs(R,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[e.jsxs(f,{color:"inherit",variant:"h4",children:[t," Selected"]}),e.jsx(j,{title:"Delete",children:e.jsx(y,{size:"large",children:e.jsx(Pe,{fontSize:"small"})})})]}):e.jsx(f,{variant:"h6",id:"tableTitle",children:"Payment Records"})});M.propTypes={numSelected:p.number.isRequired};const N=({onSelectAllClick:t,order:l,orderBy:a,numSelected:n,rowCount:o,onRequestSort:h,selected:r})=>{const g=i=>b=>{h(b,i)};return e.jsx(ke,{children:e.jsxs(v,{children:[e.jsx(c,{padding:"checkbox",sx:{pl:3},children:e.jsx(H,{color:"primary",indeterminate:n>0&&n<o,checked:o>0&&n===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),n>0&&e.jsx(c,{padding:"none",colSpan:8,children:e.jsx(M,{numSelected:r.length})}),n<=0&&Le.map((i,b)=>e.jsx(c,{align:i.align,padding:i.disablePadding?"none":"normal",sortDirection:a===i.id?l:void 0,children:e.jsxs(ge,{active:a===i.id,direction:a===i.id?l:void 0,onClick:g(i.id),children:[i.label,a===i.id?e.jsx(te,{component:"span",sx:fe,children:l==="desc"?"sorted descending":"sorted ascending"}):null]})},b)),n<=0&&e.jsx(c,{sortDirection:!1,align:"center",sx:{pr:3},children:"الإجراءات"})]})})};N.propTypes={selected:p.array,numSelected:p.number.isRequired,onRequestSort:p.func.isRequired,onSelectAllClick:p.func.isRequired,order:p.oneOf(["asc","desc"]).isRequired,orderBy:p.string.isRequired,rowCount:p.number.isRequired};function O(t,l,a){return l[a]<t[a]?-1:l[a]>t[a]?1:0}const Fe=(t,l)=>t==="desc"?(a,n)=>O(a,n,l):(a,n)=>-O(a,n,l);function He(t,l){const a=t.map((n,o)=>[n,o]);return a.sort((n,o)=>{const h=l(n[0],o[0]);return h!==0?h:n[1]-o[1]}),a.map(n=>n[0])}const V=({rows:t,setRows:l})=>{const a=F(),[n,o]=C.useState(null),[h,r]=C.useState(!1),g=ae();console.log("Payment List - Table rows:",t);const[i,b]=k.useState("desc"),[S,I]=k.useState("id"),[d,T]=k.useState([]),[D,w]=k.useState(0),[P,G]=k.useState(10),K=(s,u)=>{b(S===u&&i==="asc"?"desc":"asc"),I(u)},W=s=>{if(s.target.checked){if(d.length>0)T([]);else{const u=t.map(m=>m.name);T(u)}return}T([])},E=(s,u)=>{const m=d.indexOf(u);let x=[];m===-1?x=x.concat(d,u):m===0?x=x.concat(d.slice(1)):m===d.length-1?x=x.concat(d.slice(0,-1)):m>0&&(x=x.concat(d.slice(0,m),d.slice(m+1))),T(x)},Q=(s,u)=>{w(u)},Z=s=>{s!=null&&s.target.value&&G(parseInt(s==null?void 0:s.target.value,10)),w(0)},J=s=>d.indexOf(s)!==-1,A=D>0?Math.max(0,(1+D)*P-t.length):0,U=async()=>{try{await ze(n),console.log("Payment deleted successfully"),window.location.reload()}catch(s){console.error("Error deleting payment:",s)}r(!1)},X=s=>{switch(s){case!1:return{closedlabel:"مسودة",closedcolor:"black",closedchipcolor:z("#D3D3D3",.3)};case!0:return{closedlabel:"مكتمل",closedcolor:"success.dark",closedchipcolor:z(g.palette.success.light,.5)};default:return{closedlabel:"مسودة",closedcolor:"black",closedchipcolor:z("#D3D3D3",.3)}}};return e.jsxs(e.Fragment,{children:[e.jsx(Re,{children:e.jsxs(Ie,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[e.jsx(N,{numSelected:d.length,order:i,orderBy:S,onSelectAllClick:W,onRequestSort:K,rowCount:t.length,selected:d}),e.jsxs(qe,{children:[He(t,Fe(i,S)).slice(D*P,D*P+P).map((s,u)=>{if(typeof s=="number")return null;const m=J(s.name),x=`enhanced-table-checkbox-${u}`,{closedlabel:Y,closedcolor:ee,closedchipcolor:se}=X(s.closed);return e.jsxs(v,{hover:!0,role:"checkbox","aria-checked":m,tabIndex:-1,selected:m,children:[e.jsx(c,{padding:"checkbox",sx:{pl:3},onClick:q=>E(q,s.account_name),children:e.jsx(H,{color:"primary",checked:m,inputProps:{"aria-labelledby":x}})}),e.jsx(c,{onClick:q=>E(q,s.account_name),sx:{cursor:"pointer"},children:e.jsxs(f,{variant:"h5",children:["#",s.qidID]})}),e.jsx(c,{children:e.jsx(f,{children:s.qidDate})}),e.jsx(c,{align:"center",children:e.jsx(f,{variant:"h5",children:s.qidIstore})}),e.jsx(c,{align:"center",children:e.jsx(f,{variant:"h5",children:s.AccNameDebit})}),e.jsx(c,{align:"center",children:e.jsx(f,{variant:"h5",children:s.AccNameCredit})}),e.jsx(c,{align:"center",children:e.jsx(ie,{label:Y,size:"small",sx:{bgcolor:g.palette.mode===le.DARK?"dark.main":se,color:ee,cursor:"pointer"}})}),e.jsx(c,{align:"center",children:e.jsx(f,{variant:"h5",children:s.amount})}),e.jsx(c,{align:"center",children:e.jsx(f,{variant:"h5",children:s.qidnote})}),e.jsx(c,{align:"center",children:e.jsx(f,{variant:"h5",children:s.category})}),e.jsx(c,{align:"center",sx:{pr:3},children:e.jsxs(R,{direction:"row",alignItems:"center",spacing:1,justifyContent:"center",children:[e.jsx(j,{title:"View",children:e.jsx(y,{color:"primary",size:"small","aria-label":"View",component:L,to:`/apps/invoice/accounting/entry/view/${s.qidID}`,children:e.jsx(je,{sx:{fontSize:"1.3rem"}})})}),e.jsx(j,{title:"Edit",children:e.jsx(y,{color:"secondary",size:"small","aria-label":"Edit",onClick:()=>a(`/apps/invoice/accounting/entry/edit/${s.qidID}`),children:e.jsx(be,{sx:{fontSize:"1.3rem"}})})}),e.jsx(j,{title:"Delete",children:e.jsx(y,{color:"error",size:"small","aria-label":"Delete",onClick:()=>{o(s.id),r(!0)},children:e.jsx(ve,{sx:{fontSize:"1.3rem"}})})})]})})]},u)}),A>0&&e.jsx(v,{sx:{height:53*A},children:e.jsx(c,{colSpan:9})})]})]})}),e.jsx(we,{rowsPerPageOptions:[10,25],component:"div",count:t.length,rowsPerPage:P,page:D,onPageChange:Q,onRowsPerPageChange:Z}),e.jsxs(Ee,{open:h,onClose:()=>r(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx($e,{id:"alert-dialog-title",children:"Delete Payment"}),e.jsx(Ae,{children:e.jsx(Oe,{id:"alert-dialog-description",children:"Are you sure you want to delete this payment?"})}),e.jsxs(_e,{children:[e.jsx(_,{onClick:()=>r(!1),color:"primary",children:"Cancel"}),e.jsx(_,{onClick:U,color:"primary",autoFocus:!0,children:"Delete"})]})]})]})};V.propTypes={rows:p.array,setRows:p.func.isRequired};const os=()=>{const{id:t}=re(),l=F(),a=ce(),{entrylistdata:n}=oe(r=>r.accounting),[o,h]=C.useState([]);return C.useEffect(()=>{(async()=>{await a(me())})()},[a]),C.useEffect(()=>{if(t){const r=parseInt(t,10);if(r<1||r>2)l("/");else{const g=n.filter(i=>r===1?i.qidBy:!i.qidBy);h(g)}}else h(n)},[t,n,l]),e.jsx($,{container:!0,spacing:de,children:e.jsx($,{item:!0,xs:12,children:e.jsxs(he,{content:!1,children:[e.jsx(B,{row:o,setRows:h,id:t}),e.jsx(V,{rows:o,setRows:h})]})})})};export{os as default};
