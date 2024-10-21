import{r as J,bC as Q,f as X,i as Y,j as r,s as g,C as $,T as L,h as e0,e as t0,G as n,m as B,k as W,ay as r0,n as i0}from"./index-CK2eHZDS.js";import{C as a0}from"./CardMedia-B8d1hyj_.js";import{T as s0}from"./TextField--NRucxkR.js";import"./FormHelperText-DhsFkHK6.js";var V={exports:{}};(function(d,b){(function(T,C){d.exports=C(J)})(typeof self<"u"?self:Q,T=>(()=>{var C={156:i=>{i.exports=T}},F={};function m(i){var x=F[i];if(x!==void 0)return x.exports;var a=F[i]={exports:{}};return C[i](a,a.exports,m),a.exports}m.d=(i,x)=>{for(var a in x)m.o(x,a)&&!m.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:x[a]})},m.o=(i,x)=>Object.prototype.hasOwnProperty.call(i,x),m.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var _={};return(()=>{m.r(_),m.d(_,{default:()=>K,useStopwatch:()=>R,useTime:()=>H,useTimer:()=>P});var i=m(156);class x{static expiryTimestamp(e){const t=new Date(e).getTime()>0;return t||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),t}static onExpire(e){const t=e&&typeof e=="function";return e&&!t&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),t}}class a{static getTimeFromSeconds(e){const t=Math.ceil(e),s=Math.floor(t/86400),c=Math.floor(t%86400/3600),l=Math.floor(t%3600/60);return{totalSeconds:t,seconds:Math.floor(t%60),minutes:l,hours:c,days:s}}static getSecondsFromExpiry(e,t){const s=e-new Date().getTime();if(s>0){const c=s/1e3;return t?Math.round(c):c}return 0}static getSecondsFromPrevTime(e,t){const s=new Date().getTime()-e;if(s>0){const c=s/1e3;return t?Math.round(c):c}return 0}static getSecondsFromTimeNow(){const e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}static getFormattedTimeFromSeconds(e,t){const{seconds:s,minutes:c,hours:l}=a.getTimeFromSeconds(e);let f="",p=l;return t==="12-hour"&&(f=l>=12?"pm":"am",p=l%12),{seconds:s,minutes:c,hours:p,ampm:f}}}function E(o,e){const t=(0,i.useRef)();(0,i.useEffect)(()=>{t.current=o}),(0,i.useEffect)(()=>{if(!e)return()=>{};const s=setInterval(()=>{t.current&&t.current()},e);return()=>clearInterval(s)},[e])}const D=1e3;function O(o){if(!x.expiryTimestamp(o))return null;const e=a.getSecondsFromExpiry(o),t=Math.floor(1e3*(e-Math.floor(e)));return t>0?t:D}function P(){let{expiryTimestamp:o,onExpire:e,autoStart:t=!0}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[s,c]=(0,i.useState)(o),[l,f]=(0,i.useState)(a.getSecondsFromExpiry(s)),[p,y]=(0,i.useState)(t),[h,A]=(0,i.useState)(t),[j,S]=(0,i.useState)(O(s)),k=(0,i.useCallback)(()=>{x.onExpire(e)&&e(),y(!1),S(null)},[e]),G=(0,i.useCallback)(()=>{y(!1)},[]),w=(0,i.useCallback)(function(u){let I=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];S(O(u)),A(I),y(I),c(u),f(a.getSecondsFromExpiry(u))},[]),v=(0,i.useCallback)(()=>{const u=new Date;u.setMilliseconds(u.getMilliseconds()+1e3*l),w(u)},[l,w]),Z=(0,i.useCallback)(()=>{h?(f(a.getSecondsFromExpiry(s)),y(!0)):v()},[s,h,v]);return E(()=>{j!==D&&S(D);const u=a.getSecondsFromExpiry(s);f(u),u<=0&&k()},p?j:null),{...a.getTimeFromSeconds(l),start:Z,pause:G,resume:v,restart:w,isRunning:p}}function R(){let{autoStart:o,offsetTimestamp:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,s]=(0,i.useState)(a.getSecondsFromExpiry(e,!0)||0),[c,l]=(0,i.useState)(new Date),[f,p]=(0,i.useState)(t+a.getSecondsFromPrevTime(c||0,!0)),[y,h]=(0,i.useState)(o);E(()=>{p(t+a.getSecondsFromPrevTime(c,!0))},y?1e3:null);const A=(0,i.useCallback)(()=>{const k=new Date;l(k),h(!0),p(t+a.getSecondsFromPrevTime(k,!0))},[t]),j=(0,i.useCallback)(()=>{s(f),h(!1)},[f]),S=(0,i.useCallback)(function(){let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,G=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const w=a.getSecondsFromExpiry(k,!0)||0,v=new Date;l(v),s(w),h(G),p(w+a.getSecondsFromPrevTime(v,!0))},[]);return{...a.getTimeFromSeconds(f),start:A,pause:j,reset:S,isRunning:y}}function H(){let{format:o}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,t]=(0,i.useState)(a.getSecondsFromTimeNow());return E(()=>{t(a.getSecondsFromTimeNow())},1e3),{...a.getFormattedTimeFromSeconds(e,o)}}function K(o){if((0,i.useEffect)(()=>{console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")},[]),o.expiryTimestamp){const t=P(o);return{...t,startTimer:t.start,stopTimer:t.pause,resetTimer:()=>{}}}const e=R(o);return{...e,startTimer:e.start,stopTimer:e.pause,resetTimer:e.reset}}})(),_})())})(V);var n0=V.exports;const o0="data:image/svg+xml,%3csvg%20width='676'%20height='391'%20viewBox='0%200%20676%20391'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.09'%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%204.49133%20197.53)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20342.315%20387.578)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%2028.0057%20211.105)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20365.829%20374.002)'%20stroke='black'/%3e%3cpath%20d='M51.9531%20224.93L389.786%2029.8965'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20389.344%20360.428)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%2075.0345%20238.255)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20412.858%20346.852)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%2098.5488%20251.83)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20436.372%20333.277)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20122.063%20265.405)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20459.887%20319.703)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20145.578%20278.979)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20483.401%20306.127)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20169.092%20292.556)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20506.916%20292.551)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20192.597%20306.127)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20530.43%20278.977)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20216.111%20319.703)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20553.944%20265.402)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20239.626%20333.277)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20577.459%20251.827)'%20stroke='black'/%3e%3cpath%20d='M263.231%20346.905L601.064%20151.871'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20600.973%20238.252)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20286.654%20360.428)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20624.487%20224.677)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20310.169%20374.002)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20648.002%20211.102)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20333.683%20387.578)'%20stroke='black'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20671.516%20197.527)'%20stroke='black'/%3e%3c/g%3e%3c/svg%3e",c0="data:image/svg+xml,%3csvg%20width='676'%20height='391'%20viewBox='0%200%20676%20391'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.09'%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%204.49133%20197.53)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20342.315%20387.578)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%2028.0057%20211.105)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20365.829%20374.002)'%20stroke='%238492C4'/%3e%3cpath%20d='M51.9531%20224.93L389.786%2029.8965'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20389.344%20360.428)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%2075.0345%20238.255)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20412.858%20346.852)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%2098.5488%20251.83)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20436.372%20333.277)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20122.063%20265.405)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20459.887%20319.703)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20145.578%20278.979)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20483.401%20306.127)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20169.092%20292.556)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20506.916%20292.551)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20192.597%20306.127)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20530.43%20278.977)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20216.111%20319.703)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20553.944%20265.402)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20239.626%20333.277)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20577.459%20251.827)'%20stroke='%238492C4'/%3e%3cpath%20d='M263.231%20346.905L601.064%20151.871'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20600.973%20238.252)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20286.654%20360.428)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20624.487%20224.677)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20310.169%20374.002)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20648.002%20211.102)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(0.866041%20-0.499972%20-0.866041%20-0.499972%20333.683%20387.578)'%20stroke='%238492C4'/%3e%3cline%20y1='-0.5'%20x2='390.089'%20y2='-0.5'%20transform='matrix(-0.866041%20-0.499972%20-0.866041%200.499972%20671.516%20197.527)'%20stroke='%238492C4'/%3e%3c/g%3e%3c/svg%3e",l0="data:image/svg+xml,%3csvg%20width='676'%20height='391'%20viewBox='0%200%20676%20391'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='163.899'%20height='162.875'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20221%20181.945)'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M363%20100L504%20182L423%20228.5L362%20195L363%20100Z'%20fill='url(%23paint1_linear)'/%3e%3crect%20width='84.5792'%20height='84.0507'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20289.037%20220.875)'%20fill='%232196F3'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='80.6844'%20y1='161.798'%20x2='194.483'%20y2='24.0727'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232196F3'/%3e%3cstop%20offset='1'%20stop-color='%23E3F2FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='399'%20y1='121.5'%20x2='391'%20y2='215.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",m0="data:image/svg+xml,%3csvg%20width='713'%20height='400'%20viewBox='0%200%20713%20400'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='26.998'%20height='26.8293'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20291.67%2086.4912)'%20fill='%23E3F2FD'/%3e%3crect%20width='24.2748'%20height='24.1231'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20294.046%2087.48)'%20fill='%2390CAF9'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20d='M424.188%20172.48L412.163%20165.538V181.571L412.187%20181.558C412.311%20182.582%20413.051%20183.587%20414.408%20184.37L529.315%20250.707C532.301%20252.431%20537.144%20252.431%20540.131%20250.707L646.476%20189.313C648.071%20188.392%20648.814%20187.165%20648.705%20185.959V170.284L636.519%20177.32L531.569%20116.732C528.582%20115.008%20523.74%20115.008%20520.753%20116.732L424.188%20172.48Z'%20fill='url(%23paint0_linear)'/%3e%3c/g%3e%3crect%20width='135.283'%20height='145.169'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20409%20165.638)'%20fill='%2390CAF9'/%3e%3crect%20width='135.283'%20height='145.169'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20409%20165.638)'%20fill='url(%23paint1_linear)'/%3e%3crect%20width='128.598'%20height='137.995'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20415.002%20165.761)'%20fill='url(%23paint2_linear)'/%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20x='348.163'%20y='115.439'%20width='364.552'%20height='284.561'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='84'/%3e%3cfeGaussianBlur%20stdDeviation='32'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.129412%200%200%200%200%200.588235%200%200%200%200%200.952941%200%200%200%200.2%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear'%20x1='530.44'%20y1='158.777'%20x2='412.163'%20y2='183.719'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232196F3'/%3e%3cstop%20offset='1'%20stop-color='%23B1DCFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='1.14127'%20y1='6.08432'%20x2='46.0633'%20y2='95.9332'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FAFAFA'%20stop-opacity='0.74'/%3e%3cstop%20offset='1'%20stop-color='%2391CBFA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='-42.0844'%20y1='-101.822'%20x2='33.5428'%20y2='92.0592'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FAFAFA'%20stop-opacity='0.74'/%3e%3cstop%20offset='1'%20stop-color='%2391CBFA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",x0="data:image/svg+xml,%3csvg%20width='710'%20height='391'%20viewBox='0%200%20710%20391'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='26.9258'%20height='26.7576'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20161.088%20154.333)'%20fill='%23EDE7F6'/%3e%3crect%20width='24.9267'%20height='24.7709'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20162.809%20155.327)'%20fill='%23B39DDB'/%3e%3crect%20width='26.9258'%20height='26.7576'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20536.744%20181.299)'%20fill='%23EDE7F6'/%3e%3crect%20width='24.9267'%20height='24.7709'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20538.465%20182.292)'%20fill='%23B39DDB'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20d='M67.7237%20137.573V134.673H64.009V140.824L64.0177%20140.829C64.0367%20141.477%2064.4743%20142.121%2065.3305%20142.615L103.641%20164.733C105.393%20165.744%20108.232%20165.744%20109.983%20164.733L204.044%20110.431C204.879%20109.949%20205.316%20109.324%20205.355%20108.693L205.355%20108.692V108.68C205.358%20108.628%20205.358%20108.576%20205.355%20108.523L205.362%20102.335L200.065%20104.472L165.733%2084.6523C163.982%2083.6413%20161.142%2083.6413%20159.391%2084.6523L67.7237%20137.573Z'%20fill='url(%23paint0_linear)'/%3e%3c/g%3e%3crect%20width='115.933'%20height='51.5596'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%2062.1588%20134.683)'%20fill='%23673AB7'/%3e%3crect%20width='115.933'%20height='51.5596'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%2062.1588%20134.683)'%20fill='url(%23paint1_linear)'%20fill-opacity='0.3'/%3e%3cmask%20id='mask0'%20mask-type='alpha'%20maskUnits='userSpaceOnUse'%20x='64'%20y='78'%20width='141'%20height='81'%3e%3crect%20width='115.933'%20height='51.5596'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%2062.1588%20134.683)'%20fill='%23673AB7'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0)'%3e%3c/g%3e%3cmask%20id='mask1'%20mask-type='alpha'%20maskUnits='userSpaceOnUse'%20x='64'%20y='78'%20width='141'%20height='81'%3e%3crect%20width='115.933'%20height='51.5596'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%2062.1588%20134.683)'%20fill='%23673AB7'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1)'%3e%3crect%20width='64.3732'%20height='64.3732'%20rx='5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%20111.303%2081.6006)'%20fill='%235E35B1'/%3e%3crect%20opacity='0.7'%20x='0.866041'%20width='63.3732'%20height='63.3732'%20rx='4.5'%20transform='matrix(0.866041%20-0.499972%200.866041%200.499972%2079.1848%2087.8305)'%20stroke='%235E35B1'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20x='0.0090332'%20y='83.894'%20width='269.353'%20height='229.597'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='84'/%3e%3cfeGaussianBlur%20stdDeviation='32'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.403922%200%200%200%200%200.227451%200%200%200%200%200.717647%200%200%200%200.2%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear'%20x1='200.346'%20y1='102.359'%20x2='71.0293'%20y2='158.071'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23A491C8'/%3e%3cstop%20offset='1'%20stop-color='%23D7C5F8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='8.1531'%20y1='-0.145767'%20x2='57.1962'%20y2='72.3003'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";var U={},d0=Y;Object.defineProperty(U,"__esModule",{value:!0});var q=U.default=void 0,f0=d0(X()),z=r;q=U.default=(0,f0.default)([(0,z.jsx)("path",{d:"M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5",opacity:".3"},"0"),(0,z.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5zM7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42m12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42"},"1")],"NotificationsActiveTwoTone");const u0=g("div")({maxWidth:720,margin:"0 auto",position:"relative"}),N=g("div")({maxWidth:450,margin:"0 auto",textAlign:"center"}),p0=g("div")({maxWidth:450,margin:"0 auto"}),g0=g($)({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}),M=g("div")(({theme:d})=>({background:d.palette.mode===L.DARK?d.palette.dark.main:d.palette.secondary.light,color:d.palette.mode===L.DARK?d.palette.dark.light:d.palette.secondary.main,borderRadius:"12px",padding:"24px 0",textAlign:"center",fontWeight:700,fontSize:"3rem"})),y0=g("img")({position:"absolute",top:0,left:0,width:"100%",animation:"8s blink ease-in-out infinite"}),h0=g("img")({position:"absolute",top:0,left:0,width:"100%",animation:"15s wings ease-in-out infinite"}),k0=g("img")({position:"absolute",top:0,left:0,width:"100%",animation:"12s wings ease-in-out infinite"}),b0=()=>{const d=e0(),b=new Date;b.setSeconds(b.getSeconds()+3600*24*2-3600*15.5);const{seconds:T,minutes:C,hours:F,days:m}=n0.useTimer({expiryTimestamp:b});return r.jsx(g0,{children:r.jsx(t0,{children:r.jsxs(n,{container:!0,justifyContent:"center",spacing:B,children:[r.jsx(n,{item:!0,xs:12,children:r.jsx(N,{children:r.jsxs(n,{container:!0,spacing:B,children:[r.jsx(n,{item:!0,xs:12,children:r.jsx(W,{variant:"h1",children:"Coming Soon"})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(W,{variant:"body1",children:"Something new is on it's way"})})]})})}),r.jsx(n,{item:!0,xs:12,children:r.jsxs(u0,{children:[r.jsx(a0,{component:"img",image:d.palette.mode===L.DARK?c0:o0,title:"Slider5 image"}),r.jsx(y0,{src:l0,title:"Slider 1 image"}),r.jsx(h0,{src:m0,title:"Slider 2 image"}),r.jsx(k0,{src:x0,title:"Slider 3 image"})]})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(p0,{children:r.jsxs(n,{container:!0,spacing:B,children:[r.jsx(n,{item:!0,xs:3,children:r.jsx(M,{children:m})}),r.jsx(n,{item:!0,xs:3,children:r.jsx(M,{children:F})}),r.jsx(n,{item:!0,xs:3,children:r.jsx(M,{children:C})}),r.jsx(n,{item:!0,xs:3,children:r.jsx(M,{children:T})})]})})}),r.jsx(n,{item:!0,xs:12,children:r.jsx(N,{children:r.jsxs(n,{container:!0,spacing:B,alignItems:"center",children:[r.jsx(n,{item:!0,xs:!0,zeroMinWidth:!0,children:r.jsx(s0,{fullWidth:!0,label:"Email Address"})}),r.jsx(n,{item:!0,children:r.jsx(r0,{children:r.jsxs(i0,{variant:"contained",size:"large",children:[r.jsx(q,{sx:{fontSize:"1.3rem",mr:.75}})," Notify Me"]})})})]})})})]})})})};export{b0 as default};
