const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DJbcpTSc.js","../chunks/disclose-version.Rx5FR0e_.js","../chunks/runtime.DLNDJtKJ.js","../chunks/snippet.BKE8YCc3.js","../chunks/legacy.CfhEwXYw.js","../chunks/render.BcKmsnHn.js","../chunks/each.BAGPGlPi.js","../chunks/attributes.Bu49k65J.js","../chunks/tooltip.Dw4sMVu-.js","../chunks/if.D1uSsI8A.js","../chunks/props.DxYHgD2G.js","../chunks/proxy.Bb2uB7gI.js","../chunks/store.DnPK2LHy.js","../assets/tooltip._sqn1G_2.css","../assets/0.Dse1-GWY.css","../nodes/1.AdrKWCmk.js","../chunks/entry.Ci7Lzk59.js","../chunks/index.C-lBnWT5.js","../nodes/2.SU_hzkAG.js","../nodes/3.DkTWtjwf.js","../chunks/transitions.B4jS6tjN.js","../chunks/index.CxZh2IK7.js","../nodes/4.DAiLBW6M.js","../chunks/input.B8MJ_C9M.js","../nodes/5.lqpeqQdQ.js","../chunks/class.BUTg6TpR.js","../nodes/6.5fql570Z.js","../chunks/index-client.DKQjo4Xf.js","../nodes/7.ByyWE447.js","../chunks/index.3PmwA8Kz.js","../assets/7.CPEe-sEy.css","../nodes/8.BttNGEJu.js","../nodes/9.hU8mfzz5.js","../chunks/this.BRt-ku6J.js","../assets/9.BqoXehEq.css","../nodes/10.GN3UxHgt.js","../assets/10.Bgsphgkj.css"])))=>i.map(i=>d[i]);
var B=a=>{throw TypeError(a)};var F=(a,t,r)=>t.has(a)||B("Cannot "+r);var u=(a,t,r)=>(F(a,t,"read from private field"),r?r.call(a):t.get(a)),O=(a,t,r)=>t.has(a)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,r),T=(a,t,r,o)=>(F(a,t,"write to private field"),o?o.call(a,r):t.set(a,r),r);import{m as J,a7 as W,i as Y,E as H,k as Q,o as X,a2 as Z,b as A,J as M,L as $,g,aI as tt,aJ as et,p as rt,ax as st,ao as at,a as x,aK as ot,f as L,D,s as nt,c as it,t as ct,r as ut,d as lt}from"../chunks/runtime.DLNDJtKJ.js";import{h as mt,m as _t,u as dt,s as ft}from"../chunks/render.BcKmsnHn.js";import{t as z,k as I,a as R,i as ht}from"../chunks/disclose-version.Rx5FR0e_.js";import{i as V}from"../chunks/if.D1uSsI8A.js";import{p as vt}from"../chunks/proxy.Bb2uB7gI.js";import{b as S}from"../chunks/this.BRt-ku6J.js";import{p as C}from"../chunks/props.DxYHgD2G.js";import{o as gt}from"../chunks/index-client.DKQjo4Xf.js";function j(a,t,r){J&&W();var o=a,n,c;Y(()=>{n!==(n=t())&&(c&&(Z(c),c=null),n&&(c=Q(()=>r(o,n))))},H),J&&(o=X)}function Et(a){return class extends yt{constructor(t){super({component:a,...t})}}}var E,m;class yt{constructor(t){O(this,E);O(this,m);var c;var r=new Map,o=(s,e)=>{var _=M(e);return r.set(s,_),_};const n=new Proxy({...t.props||{},$$events:{}},{get(s,e){return g(r.get(e)??o(e,Reflect.get(s,e)))},has(s,e){return e===$?!0:(g(r.get(e)??o(e,Reflect.get(s,e))),Reflect.has(s,e))},set(s,e,_){return A(r.get(e)??o(e,_),_),Reflect.set(s,e,_)}});T(this,m,(t.hydrate?mt:_t)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&tt(),T(this,E,n.$$events);for(const s of Object.keys(u(this,m)))s==="$set"||s==="$destroy"||s==="$on"||et(this,s,{get(){return u(this,m)[s]},set(e){u(this,m)[s]=e},enumerable:!0});u(this,m).$set=s=>{Object.assign(n,s)},u(this,m).$destroy=()=>{dt(u(this,m))}}$set(t){u(this,m).$set(t)}$on(t,r){u(this,E)[t]=u(this,E)[t]||[];const o=(...n)=>r.call(this,...n);return u(this,E)[t].push(o),()=>{u(this,E)[t]=u(this,E)[t].filter(n=>n!==o)}}$destroy(){u(this,m).$destroy()}}E=new WeakMap,m=new WeakMap;const bt="modulepreload",Pt=function(a,t){return new URL(a,t).href},U={},h=function(t,r,o){let n=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),_=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=Pt(l,o),l in U)return;U[l]=!0;const y=l.endsWith(".css"),k=y?'[rel="stylesheet"]':"";if(!!o)for(let d=s.length-1;d>=0;d--){const v=s[d];if(v.href===l&&(!y||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${k}`))return;const i=document.createElement("link");if(i.rel=y?"stylesheet":bt,y||(i.as="script"),i.crossOrigin="",i.href=l,_&&i.setAttribute("nonce",_),document.head.appendChild(i),y)return new Promise((d,v)=>{i.addEventListener("load",d),i.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function c(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return n.then(s=>{for(const e of s||[])e.status==="rejected"&&c(e.reason);return t().catch(c)})},Ct={};var Rt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),pt=z("<!> <!>",1);function Lt(a,t){rt(t,!0);let r=C(t,"components",23,()=>[]),o=C(t,"data_0",3,null),n=C(t,"data_1",3,null);st(()=>t.stores.page.set(t.page)),at(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),n(),t.stores.page.notify()});let c=x(!1),s=x(!1),e=x(null);gt(()=>{const b=t.stores.page.subscribe(()=>{g(c)&&(A(s,!0),ot().then(()=>{A(e,vt(document.title||"untitled page"))}))});return A(c,!0),b});const _=D(()=>t.constructors[1]);var l=pt(),y=L(l);V(y,()=>t.constructors[1],b=>{var i=I();const d=D(()=>t.constructors[0]);var v=L(i);j(v,()=>g(d),(P,w)=>{S(w(P,{get data(){return o()},get form(){return t.form},children:(f,At)=>{var q=I(),G=L(q);j(G,()=>g(_),(K,N)=>{S(N(K,{get data(){return n()},get form(){return t.form}}),p=>r()[1]=p,()=>{var p;return(p=r())==null?void 0:p[1]})}),R(f,q)},$$slots:{default:!0}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),R(b,i)},b=>{var i=I();const d=D(()=>t.constructors[0]);var v=L(i);j(v,()=>g(d),(P,w)=>{S(w(P,{get data(){return o()},get form(){return t.form}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),R(b,i)});var k=nt(y,2);V(k,()=>g(c),b=>{var i=Rt(),d=it(i);V(d,()=>g(s),v=>{var P=ht();ct(()=>ft(P,g(e))),R(v,P)}),ut(i),R(b,i)}),R(a,l),lt()}const jt=Et(Lt),qt=[()=>h(()=>import("../nodes/0.DJbcpTSc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),()=>h(()=>import("../nodes/1.AdrKWCmk.js"),__vite__mapDeps([15,1,2,4,5,12,16,17]),import.meta.url),()=>h(()=>import("../nodes/2.SU_hzkAG.js"),__vite__mapDeps([18,1,2,4,5,6,7,8,9,3,10,11,12,13]),import.meta.url),()=>h(()=>import("../nodes/3.DkTWtjwf.js"),__vite__mapDeps([19,1,2,9,6,7,20,5,12,21,17]),import.meta.url),()=>h(()=>import("../nodes/4.DAiLBW6M.js"),__vite__mapDeps([22,1,2,4,23,11]),import.meta.url),()=>h(()=>import("../nodes/5.lqpeqQdQ.js"),__vite__mapDeps([24,1,2,5,9,7,25,23]),import.meta.url),()=>h(()=>import("../nodes/6.5fql570Z.js"),__vite__mapDeps([26,1,2,9,25,20,5,12,21,17,27]),import.meta.url),()=>h(()=>import("../nodes/7.ByyWE447.js"),__vite__mapDeps([28,1,2,5,9,6,20,11,12,21,17,29,30]),import.meta.url),()=>h(()=>import("../nodes/8.BttNGEJu.js"),__vite__mapDeps([31,1,2,5,9,20,12,7,23,27,21,17]),import.meta.url),()=>h(()=>import("../nodes/9.hU8mfzz5.js"),__vite__mapDeps([32,1,2,11,27,9,20,5,12,21,17,3,33,10,34]),import.meta.url),()=>h(()=>import("../nodes/10.GN3UxHgt.js"),__vite__mapDeps([35,1,2,4,5,9,6,7,25,20,23,11,29,36]),import.meta.url)],Bt=[],Ft={"/":[2],"/catchthebutton":[3],"/chessbase-lichess-converter":[4],"/ratingcalc":[5],"/suprise":[6],"/suprise/balletjeballetje":[7],"/suprise/quiz":[8],"/suprise/waariswaldo":[9],"/teamchecker":[10]},Jt={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{Ft as dictionary,Jt as hooks,Ct as matchers,qt as nodes,jt as root,Bt as server_loads};
