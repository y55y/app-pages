import{r as i,j as o,B as z,n as N,I as L,as as X,G as p,S as Z,$ as ee,a0 as te,bG as oe,bH as ne,bI as re}from"./index-CK2eHZDS.js";import{d as ae,A as se}from"./AdapterDayjs-DckWbV4k.js";import{g as ie}from"./userinfo-Dj6RO7mX.js";import{d as W,A as le,a as ce}from"./ag-theme-alpine-DnlVQJ0Z.js";import{d as de}from"./Delete-nHBTa-3K.js";import{A as q}from"./AutocompleteEditor-DwHc9yy6.js";import{s as ue}from"./payment-KmgVbcvK.js";import{A as ge,E as he}from"./AddCategoryDialog-8kGKhcgc.js";import{D as me,a as xe,b as pe}from"./DialogContent-B6RC-5yg.js";import{T as j}from"./TextField--NRucxkR.js";import{L as fe,D as ye}from"./DatePicker-CWdWvRtF.js";import{A as T}from"./Autocomplete-DwoJzscJ.js";import{I as V}from"./InputAdornment-B3MGI1qD.js";import"./DialogTitle-Do-b2gQd.js";import"./FormHelperText-DhsFkHK6.js";import"./ListItem-D-HS7Szc.js";const Ce=({rowData:f,setRowData:y,accounts:a,costCenters:h})=>{const[S,E]=i.useState([]),[m,D]=i.useState(null);i.useEffect(()=>{if(f&&f.length>0){const e=f.reduce((g,C)=>g+(parseFloat(C.debit)||0),0),r=f.reduce((g,C)=>g+(parseFloat(C.credit)||0),0);E([{account:"الاجمالي",description:"",debit:e,credit:r}])}else E([{account:"الاجمالي",description:"",debit:0,credit:0}])},[f]);const v=e=>typeof e=="number"&&!isNaN(e)?e.toFixed(2):"",l=()=>{y(e=>[...e,{account:"",accId:"",description:"",debit:0,credit:0}])},w=[{headerName:"الحساب",field:"account",editable:e=>!e.node.rowPinned,cellEditor:q,cellEditorParams:e=>({value:e.value,options:a,getOptionLabel:r=>`${r.accId} - ${r.accName}`,additionalFields:["accId"],addNewRow:l,api:e.api,rowIndex:e.node.rowIndex,column:e.column}),rowDrag:!0,suppressKeyboardEvent:e=>e.event.key==="Enter"&&e.editing},{headerName:"الوصف",field:"description",editable:e=>!e.node.rowPinned,cellEditor:"agTextCellEditor",valueParser:e=>{if(e.newValue==="/"){const r=e.node.rowIndex;if(r>0)return e.api.getDisplayedRowAtIndex(r-1).data.description}return e.newValue}},{headerName:"مركز التكلفة",field:"costCenter",editable:e=>!e.node.rowPinned,cellEditor:q,cellEditorParams:e=>({value:e.value,options:h,getOptionLabel:r=>`${r.CostID} - ${r.CostName}`,addNewRow:l,api:e.api,rowIndex:e.node.rowIndex,column:e.column}),suppressKeyboardEvent:e=>e.event.key==="Enter"&&e.editing},{headerName:"مدين",field:"debit",editable:e=>!e.node.rowPinned,valueParser:e=>{if(e.newValue==="/"){const g=e.api.getModel().rowsToDisplay.reduce((c,d)=>d!==e.node?c+(d.data.credit||0):c,0),C=e.api.getModel().rowsToDisplay.reduce((c,d)=>d!==e.node?c+(d.data.debit||0):c,0);return Math.max(0,g-C)}const r=parseInt(e.newValue,10);return r>0?r:0},valueFormatter:e=>v(e.value),onCellValueChanged:e=>{e.newValue&&(e.data.credit=0,e.api.refreshCells({rowNodes:[e.node],columns:["credit"]}))}},{headerName:"دائن",field:"credit",editable:e=>!e.node.rowPinned,valueParser:e=>{if(e.newValue==="/"){const g=e.api.getModel().rowsToDisplay.reduce((c,d)=>d!==e.node?c+(d.data.credit||0):c,0),C=e.api.getModel().rowsToDisplay.reduce((c,d)=>d!==e.node?c+(d.data.debit||0):c,0);return Math.max(0,C-g)}const r=parseInt(e.newValue,10);return r>0?r:0},valueFormatter:e=>v(e.value),onCellValueChanged:e=>{e.newValue&&(e.data.debit=0,e.api.refreshCells({rowNodes:[e.node],columns:["debit"]}))}}],u=e=>{const r=[];e.api.forEachNode(g=>{r.push(g.data)}),y(r)},P=e=>{const r=[...f];r[e.node.rowIndex]=e.data,y(r)},A=()=>{m&&(y(e=>e.filter(r=>r!==m)),D(null))},k=e=>{const r=e.api.getSelectedRows();D(r.length>0?r[0]:null)};return o.jsxs("div",{children:[o.jsxs(z,{sx:{display:"flex",gap:"10px",marginBottom:"10px"},children:[o.jsx(N,{variant:"outlined",color:"primary",startIcon:o.jsx(W,{}),onClick:l,children:"اضف صف"}),o.jsx(N,{variant:"outlined",color:"error",startIcon:o.jsx(de,{}),onClick:A,disabled:!m,children:"حذف الصف"})]}),o.jsx("div",{className:"ag-theme-alpine",style:{height:400,width:"100%"},children:o.jsx(le,{rowData:f,columnDefs:w,rowDragManaged:!0,animateRows:!0,onRowDragEnd:u,onCellValueChanged:P,enableRtl:!0,defaultColDef:{flex:1},rowSelection:"single",pinnedBottomRowData:S,onSelectionChanged:k})})]})},Fe=({open:f,onClose:y})=>{const[a,h]=i.useState({entryNumber:"",entryDate:ae(),notes:"",locationId:"",category:""}),[S,E]=i.useState([]),[m,D]=i.useState([]),[v,l]=i.useState(!1),[w,u]=i.useState(""),[P,A]=i.useState(!1),[k,e]=i.useState(!1),[r,g]=i.useState(null),[C,c]=i.useState([]),[d,$]=i.useState([]),[I,B]=i.useState([{account:"",accId:"",description:"",debit:0,credit:0}]);i.useEffect(()=>{(async()=>{try{const n=await ue(["AccList","CategoryList","CostCenter"]),x=n.AccList.map(b=>({accId:b.AccID,accName:b.AccName}));console.log("costCenters:",n.CostCenter),c(x),D(n.CategoryList),$(n.CostCenter)}catch(n){console.error("Error fetching payment methods:",n)}})()},[]);const G=()=>{A(!0)},Y=t=>{D([...m,t]),h({...a,category:t.CategoryID}),u("تم إضافة التصنيف الجديد بنجاح"),l(!0)},_=()=>{const t=m.find(n=>n.CategoryID===a.category);t?(g(t),e(!0)):(u("يرجى اختيار تصنيف أولاً"),l(!0))},H=async t=>{try{if(t===null){const n=m.filter(x=>x.CategoryID!==r.CategoryID);D(n),h({...a,category:""}),u("تم حذف التصنيف بنجاح")}else{await oe(t.CategoryID,t);const n=m.map(x=>x.CategoryID===t.CategoryID?t:x);D(n),h({...a,category:t.CategoryID}),u("تم تحديث التصنيف بنجاح")}l(!0)}catch(n){console.error("Error updating category:",n),u("حدث خطأ أثناء تحديث التصنيف"),l(!0)}};i.useEffect(()=>{K()},[]);const K=async()=>{try{const t=await ie();t&&Array.isArray(t.stores)?(E(t.stores),t.stores.length>0&&h(n=>({...n,locationId:t.stores[0].StoreID}))):console.error("Fetched data does not contain stores array:",t)}catch(t){console.error("Error fetching locations:",t.message)}};i.useEffect(()=>{(async()=>{try{const n=await ne();h(x=>({...x,entryNumber:n}))}catch(n){console.error("Error fetching next entry ID:",n)}})()},[]);const M=t=>{h({...a,[t.target.name]:t.target.value})},O=(t,n)=>{n!=="clickaway"&&l(!1)},J=t=>{h({...a,entryDate:t})},F=async t=>{if(t.preventDefault(),I.find(s=>(s.description||s.credit>0||s.debit>0)&&!s.accId)){u("يجب اضافة حساب لحفظ الصف"),l(!0);return}const x=I.reduce((s,R)=>s+Number(R.debit),0),b=I.reduce((s,R)=>s+Number(R.credit),0);if(x!==b){u("المدين لا يساوي الدائن"),l(!0);return}if(x<=0||b<=0){u("الاجمالي يجب ان يكون اعلى من صفر"),l(!0);return}const Q=I.filter(s=>s.accId);console.log(I);const U={qidID:a.entryNumber,qidIstore:a.locationId||"",qidnote:a.notes,qidDate:a.entryDate.format("YYYY-MM-DD"),qidType:a.category,entries:Q.map(s=>({qidEAcc:s.accId,qidEAmountD:s.debit,qidEAmountC:s.credit,qidEnote:s.description,qidCostcenter:s.costCenterId||""}))};try{const s=await re(U);u("تم إنشاء القيد بنجاح"),l(!0),y()}catch(s){console.error("Error submitting entry:",s),u("حدث خطأ أثناء إنشاء القيد"),l(!0)}};return o.jsxs(me,{open:f,onClose:y,maxWidth:"md",fullWidth:!0,sx:{"& .MuiDialog-paper":{maxWidth:"80%",width:"80%"}},children:[o.jsx(L,{"aria-label":"close",onClick:y,sx:{position:"absolute",right:8,top:8,color:t=>t.palette.grey[500]},children:o.jsx(X,{})}),o.jsx(xe,{children:o.jsxs("form",{onSubmit:F,children:[o.jsx(z,{sx:{p:2.5},children:o.jsxs(p,{container:!0,spacing:2,children:[o.jsx(p,{item:!0,xs:12,sm:6,children:o.jsxs(p,{container:!0,spacing:2,children:[o.jsx(p,{item:!0,xs:6,children:o.jsx(j,{fullWidth:!0,label:"رقم القيد",size:"small",name:"entryNumber",value:a.entryNumber,onChange:M,disabled:!0})}),o.jsx(p,{item:!0,xs:12,children:o.jsx(j,{fullWidth:!0,multiline:!0,rows:3,label:"ملاحظات",size:"small",name:"notes",value:a.notes,onChange:M})})]})}),o.jsx(p,{item:!0,xs:12,sm:2}),o.jsx(p,{item:!0,xs:12,sm:4,children:o.jsxs(p,{container:!0,spacing:2,children:[o.jsx(p,{item:!0,xs:12,children:o.jsx(fe,{dateAdapter:se,children:o.jsx(ye,{label:"تاريخ القيد",value:a.entryDate,slotProps:{textField:{fullWidth:!0,size:"small"}},onChange:J,renderInput:t=>o.jsx(j,{...t,fullWidth:!0,size:"small"})})})}),o.jsx(p,{item:!0,xs:12,children:o.jsx(T,{fullWidth:!0,options:S,getOptionLabel:t=>t?t.StoreName:"",renderInput:t=>o.jsx(j,{...t,label:"الموقع",size:"small"}),value:S.find(t=>t.StoreID===a.locationId)||null,onChange:(t,n)=>{h({...a,locationId:n?n.StoreID:""})},isOptionEqualToValue:(t,n)=>t.StoreID===n.StoreID,noOptionsText:"لا توجد مواقع",renderOption:(t,n)=>i.createElement("li",{...t,key:n.StoreID},n.StoreName)})}),o.jsx(p,{item:!0,xs:12,children:o.jsx(T,{fullWidth:!0,options:m,value:m.find(t=>t.CategoryID===a.category)||m[0]||null,onChange:(t,n)=>{h({...a,category:n?n.CategoryID:null})},getOptionLabel:t=>t.CategoryName||"",isOptionEqualToValue:(t,n)=>t.CategoryID===n.CategoryID,renderInput:t=>o.jsx(j,{...t,label:"التصنيف",size:"small",InputProps:{...t.InputProps,startAdornment:o.jsxs(o.Fragment,{children:[o.jsx(V,{position:"start",children:o.jsx(L,{onClick:G,size:"small",children:o.jsx(W,{sx:{color:"#2196f3"}})})}),t.InputProps.startAdornment]}),endAdornment:o.jsxs(o.Fragment,{children:[t.InputProps.endAdornment,o.jsx(V,{position:"end",children:o.jsx(L,{onClick:_,size:"small",children:o.jsx(ce,{sx:{color:"#2196f3"}})})})]})}})})})]})})]})}),o.jsx(Ce,{rowData:I,setRowData:B,accounts:C,costCenters:d})]})}),o.jsx(pe,{children:o.jsxs(Z,{direction:"row",spacing:1.5,children:[o.jsx(N,{onClick:y,color:"primary",children:"إلغاء"}),o.jsx(N,{onClick:F,color:"primary",variant:"contained",children:"حفظ"})]})}),o.jsx(ee,{open:v,autoHideDuration:6e3,onClose:O,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:o.jsx(te,{onClose:O,severity:w.includes("نجاح")?"success":"error",sx:{width:"100%",display:"flex",justifyContent:"center","& .MuiAlert-message":{width:"100%",textAlign:"center"}},children:w})}),o.jsx(ge,{open:P,onClose:()=>A(!1),onSave:Y}),o.jsx(he,{open:k,onClose:()=>e(!1),category:r,onSave:H})]})};export{Fe as default};
