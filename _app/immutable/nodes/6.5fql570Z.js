import{t as j,a as w}from"../chunks/disclose-version.Rx5FR0e_.js";import{p as U,b as q,a as E,f as S,g as k,s as f,c as i,t as A,d as B,r as c}from"../chunks/runtime.DLNDJtKJ.js";import{i as G}from"../chunks/if.D1uSsI8A.js";import{s as m}from"../chunks/class.BUTg6TpR.js";import{t as I}from"../chunks/transitions.B4jS6tjN.js";import{s as J,b as T}from"../chunks/store.DnPK2LHy.js";import{e as W,c as X}from"../chunks/index.CxZh2IK7.js";import{o as C}from"../chunks/index-client.DKQjo4Xf.js";const D=/[&"<]/g;function N(s,r){const a=String(s??""),t=D;t.lastIndex=0;let e="",o=0;for(;t.test(a);){const n=t.lastIndex-1,l=a[n];e+=a.substring(o,n)+(l==="&"?"&amp;":l==='"'?"&quot;":"&lt;"),o=n+1}return e+a.substring(o)}const y={translate:new Map([[!0,"yes"],[!1,"no"]])};function g(s,r,a=!1){if(r==null||!r&&a||r===""&&s==="class")return"";const t=s in y&&y[s].get(r)||r,e=a?"":`="${N(t)}"`;return` ${s}${e}`}const O=""+new URL("../assets/1.CtNWsGJX.png",import.meta.url).href,F=""+new URL("../assets/2.tezqh4cJ.png",import.meta.url).href,H=""+new URL("../assets/3.DfatWyBx.png",import.meta.url).href,K=""+new URL("../assets/4.BAE-S823.png",import.meta.url).href;var P=j('<div class="text-9xl absolute bottom-1/2 left-1/3" style="margin:auto">Super gedaan! ga maar opzoek naar jouw cadeau!!!</div>'),Q=j(`<!> <div class="grid grid-rows-2 grid-cols-2 gap-0 "><a href="./catchthebutton"><img${g("src",O)} alt="cool person"></a> <a href="./suprise/waariswaldo"><img${g("src",F)} alt="cool person"></a> <a class="justify-self-end" href="./suprise/balletjeballetje"><img${g("src",H)} alt="cool person"></a> <a href="./suprise/quiz"><img${g("src",K)} alt="cool person"></a></div>`,1);function ot(s,r){U(r,!0);const a=J(),t=()=>T(X,"$chal",a);function e($,{duration:h}){return{duration:h,css:u=>{const b=W(u);return`
					transform: scale(${b}) rotate(${b*1080}deg);
					color: hsl(
						${Math.trunc(u*360)},
						${Math.min(100,1e3*(1-u))}%,
						${Math.min(50,500*(1-u))}%
					);`}}}let o=E(!1);C(()=>{q(o,!0)});var n=Q(),l=S(n);G(l,()=>t().chal1&&t().chal2&&t().chal3&&t().chal4&&k(o),$=>{var h=P();I(1,h,()=>e,()=>({duration:8e3})),w($,h)});var _=f(l,2),p=i(_),R=i(p);c(p);var d=f(p,2),M=i(d);c(d);var x=f(d,2),z=i(x);c(x);var v=f(x,2),L=i(v);c(v),c(_),A(()=>{m(p,t().chal1?"justify-self-end select-none":"justify-self-end blur-3xl select-none"),m(R,t().chal1?"max-h-96":"blur-3xl max-h-96"),m(M,t().chal2?"max-h-96":"blur-3xl max-h-96"),m(z,t().chal3?"max-h-80":"blur-3xl max-h-80"),m(L,t().chal4?"max-h-80":"blur-3xl max-h-80")}),w(s,n),B()}export{ot as component};
