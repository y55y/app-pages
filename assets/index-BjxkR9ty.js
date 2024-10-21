import{r as m,j as e,I as w,as as R,B as C,G as s,m as N,D as O,n as $,$ as B,a0 as P}from"./index-CK2eHZDS.js";import{I as G}from"./InputFileUpload-CZCawxZ7.js";import{g as L,c as U}from"./client-BiKSUi9J.js";import{D as q,a as H,b as _}from"./DialogContent-B6RC-5yg.js";import{D as J}from"./DialogTitle-Do-b2gQd.js";import{T as K,a as g}from"./Tabs-DcU0Kiic.js";import{T as i}from"./TextField--NRucxkR.js";import{A as Q}from"./Autocomplete-DwoJzscJ.js";import"./formik.esm-BfSmdhbL.js";import"./CardMedia-B8d1hyj_.js";import"./Delete-nHBTa-3K.js";import"./FormHelperText-DhsFkHK6.js";import"./KeyboardArrowRight-CmUX_fuU.js";const v=({children:l,value:t,index:a,...c})=>e.jsx("div",{role:"tabpanel",hidden:t!==a,id:`tabpanel-${a}`,"aria-labelledby":`tab-${a}`,...c,children:t===a&&e.jsx(C,{sx:{p:3},children:l})}),X=({formData:l,handleInputChange:t,errors:a,mainAccounts:c})=>e.jsxs(s,{container:!0,spacing:N,children:[e.jsx(s,{item:!0,xs:12,sm:6,md:3,children:e.jsx(i,{fullWidth:!0,label:"رقم العميل",name:"code",value:l.code,onChange:t,error:!!a.id,helperText:a.id,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4.5,children:e.jsx(i,{fullWidth:!0,label:"اسم العميل",name:"Name",value:l.Name,onChange:t,error:!!a.Name,helperText:a.Name,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4.5,children:e.jsx(Q,{fullWidth:!0,options:c,getOptionLabel:r=>`${r.Code} - ${r.Name}`,value:c.find(r=>r.ClientID===l.ClientMain)||null,onChange:(r,x)=>{t({target:{name:"ClientMain",value:x?x.ClientID:""}})},renderInput:r=>e.jsx(i,{...r,label:"تصنيف العميل",error:!!a.ClientMain,helperText:a.ClientMain,size:"small"})})})]}),Y=({formData:l,handleInputChange:t,errors:a})=>e.jsxs(s,{container:!0,spacing:N,children:[e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"اسم الشركة",name:"company",value:l.company,onChange:t,error:!!a.company,helperText:a.company,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"العلامة التجارية",name:"brand",value:l.brand,onChange:t,error:!!a.brand,helperText:a.brand,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"رقم الهاتف",name:"mobileNumber",value:l.mobileNumber,onChange:t,error:!!a.mobileNumber,helperText:a.mobileNumber,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"الايميل",name:"emailAddress",value:l.emailAddress,onChange:t,error:!!a.emailAddress,helperText:a.emailAddress,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"الرقم الضريبي",name:"vat",value:l.vat,onChange:t,error:!!a.vat,helperText:a.vat,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:12,children:e.jsx(i,{fullWidth:!0,label:"العنوان",name:"address",multiline:!0,value:l.address,onChange:t,error:!!a.address,helperText:a.address,size:"small"})})]}),Z=({formData:l,handleInputChange:t,errors:a})=>e.jsxs(s,{container:!0,spacing:N,children:[e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"اسم الشخص",name:"contactName",value:l.contactName,onChange:t,error:!!a.contactName,helperText:a.contactName,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"رقم الشخص",name:"phoneNumber",value:l.phoneNumber,onChange:t,error:!!a.phoneNumber,helperText:a.phoneNumber,size:"small"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:4,children:e.jsx(i,{fullWidth:!0,label:"ايميل الشخص",name:"contactEmail",value:l.contactEmail,onChange:t,error:!!a.contactEmail,helperText:a.contactEmail,size:"small"})})]}),xe=({onClientCreated:l,onClose:t,mainAccounts:a,selectedRowId:c})=>{console.log("selectedRowId:",c);const[r,x]=m.useState({id:"",Name:"",code:"",accNo:"",company:"",brand:"",customerGroup:"",mobileNumber:"",emailAddress:"",vat:"",address:"",notes:"",balance:"",contactName:"",phoneNumber:"",contactEmail:"",ClientType:"2",ClientMain:c||(a&&a.length>0?a[0].ClientID:""),avatar:null}),[u,W]=m.useState({}),[S,h]=m.useState(!1),[z,p]=m.useState(""),[k,j]=m.useState("success"),[b,E]=m.useState(0),T=()=>{t&&t()};m.useEffect(()=>{(async()=>{try{const o=await L(2);x(d=>({...d,code:o}))}catch(o){console.error("Failed to fetch the next client code:",o),j("error"),p("Error fetching client code. Please try again."),h(!0)}})()},[]);const f=n=>{const{name:o,value:d}=n.target;x({...r,[o]:d})},F=n=>{const o=new FileReader;o.onload=()=>{const d=o.result.split(",")[1];x(I=>({...I,avatar:d}))},o.onerror=d=>{console.error("FileReader error:",d)},o.readAsDataURL(n)},M=()=>{const n={};return r.Name||(n.Name=".الاسم اجباري"),W(n),Object.keys(n).length===0},D=async()=>{if(!M()){j("error"),p("Please fill in all required fields."),h(!0);return}try{const n=await U(r);console.log("Client created:",n),console.log(n.clientId),j("success"),p("Client saved successfully!"),h(!0),l&&l(n),typeof t=="function"&&t()}catch(n){console.error("Error creating client:",n),j("error"),p("Failed to save client. Please try again."),h(!0)}},y=()=>{h(!1)},A=(n,o)=>{E(o)};return e.jsxs(q,{open,onClose:T,fullWidth:!0,maxWidth:"md",sx:{"& .MuiDialog-paper":{maxWidth:"80%",width:"80%"}},children:[e.jsxs(J,{children:["اضافة عميل جديد",e.jsx(w,{"aria-label":"close",onClick:T,sx:{position:"absolute",right:8,top:8,color:n=>n.palette.grey[500]},children:e.jsx(R,{})})]}),e.jsx(H,{children:e.jsxs(C,{sx:{p:2.5},children:[e.jsx(s,{container:!0,spacing:N,children:e.jsx(s,{item:!0,xs:12,sm:6,md:6,children:e.jsxs(C,{sx:{border:"1px solid #ccc",p:2,borderRadius:1,mb:2},children:[e.jsx(C,{sx:{fontWeight:"bold",mb:1,backgroundColor:"#ede7f66b",p:1,borderRadius:"4px"},children:"الرئيسية"}),e.jsx(X,{formData:r,handleInputChange:f,errors:u,mainAccounts:a})]})})}),e.jsxs(K,{value:b,onChange:A,"aria-label":"Client Information Tabs",children:[e.jsx(g,{label:"معلومات الشركة",id:"tab-0","aria-controls":"tabpanel-0"}),e.jsx(g,{label:"معلومات التواصل",id:"tab-1","aria-controls":"tabpanel-1"}),e.jsx(g,{label:"رفع صورة",id:"tab-2","aria-controls":"tabpanel-2"}),e.jsx(g,{label:"ملاحظات",id:"tab-3","aria-controls":"tabpanel-3"})]}),e.jsx(v,{value:b,index:0,children:e.jsx(Y,{formData:r,handleInputChange:f,errors:u})}),e.jsx(v,{value:b,index:1,children:e.jsx(Z,{formData:r,handleInputChange:f,errors:u})}),e.jsx(v,{value:b,index:2,children:e.jsx(G,{handleFileSelect:F})}),e.jsx(v,{value:b,index:3,children:e.jsx(i,{fullWidth:!0,label:"ملاحظات",name:"notes",multiline:!0,value:r.notes,onChange:f,error:!!u.notes,size:"small",helperText:u.notes})})]})}),e.jsx(O,{sx:{my:3}}),e.jsx(_,{children:e.jsx(s,{container:!0,justifyContent:"flex-end",children:e.jsx(s,{item:!0,children:e.jsx($,{variant:"contained",size:"large",onClick:D,children:"حفظ"})})})}),e.jsx(B,{open:S,autoHideDuration:4e3,onClose:y,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(P,{onClose:y,severity:k,sx:{width:"100%"},children:z})})]})};export{xe as default};
