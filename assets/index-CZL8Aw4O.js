import{r as c,j as e,B as y,n as j}from"./index-CK2eHZDS.js";import{g as k}from"./fetchdata-7caSym0v.js";import q from"./index-BjxkR9ty.js";import M from"./index-DJg9o3Ha.js";import{B as L}from"./index-DSVdJgwI.js";import{A as $}from"./AccountStatement-BBMimeTY.js";import{a as z,d as G,e as K}from"./client-BiKSUi9J.js";import{D as w,a as R,b as F}from"./DialogContent-B6RC-5yg.js";import{D as v}from"./DialogTitle-Do-b2gQd.js";import{T as f}from"./TextField--NRucxkR.js";import{A as O}from"./Autocomplete-DwoJzscJ.js";import{C as B}from"./CircularProgress-CbH74Q3r.js";import{D as H}from"./DialogContentText-BTgKtHs8.js";import"./InputFileUpload-CZCawxZ7.js";import"./formik.esm-BfSmdhbL.js";import"./CardMedia-B8d1hyj_.js";import"./Delete-nHBTa-3K.js";import"./FormHelperText-DhsFkHK6.js";import"./Tabs-DcU0Kiic.js";import"./KeyboardArrowRight-CmUX_fuU.js";import"./DeleteComponent-B9Nv_Ya4.js";import"./MessageSnackbar-CYglifX9.js";import"./Search-BXw6LGI1.js";import"./InputAdornment-B3MGI1qD.js";import"./DataGrid-BEzGpxqb.js";import"./typeof-QjJsDpFa.js";import"./MenuItem-CGopNoQ2.js";import"./Checkbox-CKFEckdw.js";import"./Skeleton-DhBIoPx7.js";import"./TablePagination-0KQBaQp2.js";import"./TableCell-BJINaop2.js";import"./FormControlLabel-Bwr4sx4_.js";import"./SubCard-CzQO0sgK.js";import"./index-B-q1d0Qz.js";import"./TableRow-Cpxk0AAS.js";import"./TableHead-CqBhAkUl.js";const J=({open:S,onClose:d,addType:D,rows:A,selectedRowId:b,mainAccounts:u,setMessage:h})=>{const[t,m]=c.useState({accountName:"",notes:"",accountNumber:"",mainAccount:null,accountType:1,permission:null,Ref:""}),[o,g]=c.useState({}),[C,p]=c.useState(!1);c.useEffect(()=>{const n=u.find(l=>l.ClientID===b);n&&i("mainAccount")(null,n)},[b,u]);const E=n=>{if(!n){const r=u.filter(x=>x.Father===0);let a;r.length>0?a=((Math.max(...r.map(I=>parseInt(I.Code)))||0)+1).toString():a="1",m(x=>({...x,accountNumber:a,accountType:1}));return}const l=n.AccD?1:0,s=D===1?u.filter(r=>r.Father===n.ClientID):A.filter(r=>r.Father===n.ClientID);let N;s.length>0?N=(Math.max(...s.map(a=>parseInt(a.Code)))+1).toString():N=n.Code+(D===1?"01":"001"),m(r=>({...r,accountNumber:N,accountType:l}))},i=n=>(l,s)=>{n==="mainAccount"?(m({...t,mainAccount:s}),E(s)):m(n==="permission"?{...t,[n]:s}:n==="accountType"?{...t,accountType:parseInt(l.target.value)}:{...t,[n]:l.target.value}),g({...o,[n]:""})},T=async()=>{const n={};if(t.accountName.trim()||(n.accountName="اسم مجموعة العميل مطلوب"),t.accountNumber.trim()||(n.accountNumber="رقم مجموعة العميل مطلوب"),Object.keys(n).length>0){g(n);return}p(!0);try{const l={ClientMainType:2,ClientMainID:t.accountNumber,ClientMainName:t.accountName,Father:t.mainAccount?t.mainAccount.ClientID:0,Note:t.notes,Ref:t.Ref};await z(l),d(),h({open:!0,type:"success",text:"تمت إضافة مجموعة العملاء بنجاح"})}catch(l){console.error("Error submitting form:",l),h({open:!0,type:"error",text:"حدث خطأ أثناء إضافة مجموعة العملاء"})}finally{p(!1)}};return e.jsxs(w,{open:S,onClose:d,maxWidth:"sm",fullWidth:!0,children:[e.jsx(v,{children:"اضافة مجموعة عملاء"}),e.jsx(R,{children:e.jsxs(y,{sx:{display:"flex",justifyContent:"space-between",gap:2},children:[e.jsxs(y,{sx:{flex:1},children:[e.jsx(f,{label:"اسم مجموعة العملاء",value:t.accountName,onChange:i("accountName"),fullWidth:!0,required:!0,margin:"normal",error:!!o.accountName,helperText:o.accountName}),e.jsx(f,{label:"رقم المرجع",value:t.Ref,onChange:i("Ref"),type:"number",fullWidth:!0,margin:"normal",error:!!o.Ref,helperText:o.Ref}),e.jsx(f,{label:"ملاحظات",value:t.notes,onChange:i("notes"),fullWidth:!0,margin:"normal",multiline:!0,rows:4})]}),e.jsxs(y,{sx:{flex:1},children:[e.jsx(f,{label:"رقم مجموعة العملاء",value:t.accountNumber,onChange:i("accountNumber"),type:"number",fullWidth:!0,required:!0,margin:"normal",error:!!o.accountNumber,helperText:o.accountNumber}),e.jsx(O,{options:u,getOptionLabel:n=>`${n.Code} - ${n.Name}`,value:t.mainAccount||null,onChange:i("mainAccount"),renderInput:n=>e.jsx(f,{...n,label:"مجموعة العملاء",margin:"normal"}),fullWidth:!0})]})]})}),e.jsxs(F,{children:[e.jsx(j,{onClick:d,color:"secondary",children:"إلغاء"}),e.jsx(j,{onClick:T,color:"primary",variant:"contained",disabled:C,children:C?e.jsxs(e.Fragment,{children:["قيد الاضافة",e.jsx(B,{size:24,sx:{ml:1}})]}):"إضافة مجموعة عملاء"})]})]})},Q=({open:S,onClose:d,rows:D,setSelectedRowId:A,selectedRowId:b,mainAccounts:u,setMessage:h})=>{const[t,m]=c.useState({accountName:"",notes:"",accountNumber:"",mainAccount:null,Ref:"",Code:""}),[o,g]=c.useState({}),[C,p]=c.useState(!1),[E,i]=c.useState(!1);c.useEffect(()=>{if(b){const r=u.find(a=>a.ClientID===b);r&&m({accountName:r.Name,notes:r.Note||"",accountNumber:r.ClientID,mainAccount:u.find(a=>a.ClientID===r.Father)||null,Ref:r.Ref||"",Code:r.Code})}},[b,D,u]);const T=()=>{i(!0)},n=async()=>{p(!0);try{await G(t.accountNumber),A(null),h({open:!0,type:"success",text:"تم حذف العميل بنجاح"}),d()}catch(r){console.error("Error deleting account:",r),h({open:!0,type:"error",text:"حدث خطأ أثناء حذف العميل"})}finally{p(!1),i(!1)}},l=()=>{i(!1)},s=r=>(a,x)=>{m(r==="mainAccount"?{...t,mainAccount:x}:{...t,[r]:a.target.value}),g({...o,[r]:""})},N=async()=>{const r={};if(t.accountName.trim()||(r.accountName="اسم العميل مطلوب"),String(t.accountNumber).trim()||(r.accountNumber="رقم العميل مطلوب"),Object.keys(r).length>0){g(r);return}p(!0);try{const a={ClientMainType:2,ClientMainID:t.accountNumber,ClientMainName:t.accountName,Father:t.mainAccount?t.mainAccount.ClientID:0,Note:t.notes,Ref:t.Ref};await K(a),h({open:!0,type:"success",text:"تم تحديث بيانات العميل بنجاح"}),d()}catch(a){console.error("Error updating form:",a),h({open:!0,type:"error",text:"حدث خطأ أثناء تحديث بيانات العميل"})}finally{p(!1)}};return e.jsxs(w,{open:S,onClose:d,maxWidth:"sm",fullWidth:!0,children:[e.jsx(v,{children:"تعديل مجموعة عميل"}),e.jsx(R,{children:e.jsxs(y,{sx:{display:"flex",justifyContent:"space-between",gap:2},children:[e.jsxs(y,{sx:{flex:1},children:[e.jsx(f,{label:"اسم العميل",value:t.accountName,onChange:s("accountName"),fullWidth:!0,required:!0,margin:"normal",error:!!o.accountName,helperText:o.accountName}),e.jsx(f,{label:"رقم المرجع",value:t.Ref,onChange:s("Ref"),type:"number",fullWidth:!0,margin:"normal",error:!!o.Ref,helperText:o.Ref}),e.jsx(f,{label:"ملاحظات",value:t.notes,onChange:s("notes"),fullWidth:!0,margin:"normal",multiline:!0,rows:4})]}),e.jsxs(y,{sx:{flex:1},children:[e.jsx(f,{label:"رقم العميل",value:t.Code,onChange:s("Code"),type:"number",fullWidth:!0,required:!0,margin:"normal",error:!!o.Code,helperText:o.Code,disabled:!0}),e.jsx(O,{options:u.filter(r=>{const a=r.ClientID!==t.accountNumber,x=I=>{if(I.Father===t.accountNumber)return!1;const W=u.find(P=>P.ClientID===I.Father);return W?x(W):!0};return a&&x(r)}),getOptionLabel:r=>`${r.Code} - ${r.Name}`,value:t.mainAccount||null,onChange:s("mainAccount"),renderInput:r=>e.jsx(f,{...r,label:"العميل الرئيسي",margin:"normal"}),fullWidth:!0})]})]})}),e.jsxs(F,{children:[e.jsx(j,{onClick:T,color:"error",variant:"outlined",disabled:C,children:"حذف"}),e.jsx(y,{sx:{flexGrow:1}}),e.jsx(j,{onClick:d,color:"secondary",children:"إلغاء"}),e.jsx(j,{onClick:N,color:"primary",variant:"contained",disabled:C,children:C?e.jsxs(e.Fragment,{children:["قيد الحفظ",e.jsx(B,{size:24,sx:{ml:1}})]}):"حفظ التغييرات"})]}),e.jsxs(w,{open:E,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(v,{id:"alert-dialog-title",children:"تأكيد الحذف"}),e.jsx(R,{children:e.jsx(H,{id:"alert-dialog-description",children:"هل أنت متأكد من حذف هذا العميل؟"})}),e.jsxs(F,{children:[e.jsx(j,{onClick:l,children:"إلغاء"}),e.jsx(j,{onClick:n,autoFocus:!0,children:"تأكيد"})]})]})]})},Re=()=>{const[S,d]=c.useState([]),[D,A]=c.useState([]),[b,u]=c.useState(0),[h,t]=c.useState(!1),[m,o]=c.useState(0),g=[{text:"كشف حساب",component:$,isDisabled:!1},{text:"Edit Client",component:M,isDisabled:!1}],C=[{field:"Code",headerName:"الرقم",flex:1},{field:"Name",headerName:"العميل",flex:1},{field:"MobileNumber",headerName:"رقم الجوال",flex:1},{field:"vat",headerName:"الرقم الضريبي",flex:1},{field:"Balance",headerName:"الرصيد",flex:1}],p=async()=>{try{const i=await k("/api/client/list/main",{type:2});d(i)}catch(i){console.error("Error fetching client tree data:",i)}},E=async(i,T,n,l,s,N,r)=>{try{t(!0);const a=await k("/api/client/list/sub",{Father:i,page:T,pageSize:n,type:2,rowID:l,search:s,field:N,sort:r});t(!1),A(a.data),u(a.totalRows),a.page!==null&&o(a.page)}catch(a){console.error("Error fetching client tree data:",a),t(!1)}};return c.useEffect(()=>{p()},[]),e.jsx(L,{mainData:S,rows:D,dataKey:"ClientID",dataCode:"Code",fetchTreeData:p,fetchSubTreeData:E,columns:C,apiSearchEndpoint:"api/client/search",PopupAddMain:J,PopupEditMain:Q,AddEntityComponent:q,EditEntityComponent:M,rowCount:b,isLoading:h,entityName:"عميل",mainName:"مجموعة",page:m,setPage:o,reportOptions:g})};export{Re as default};
