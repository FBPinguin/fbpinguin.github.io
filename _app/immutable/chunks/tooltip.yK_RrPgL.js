import{d as T,t as c,a as m,g as k}from"./disclose-version.C6Ni2mBd.js";import{w as E,a7 as F,ag as _,z as N,N as A,F as R,_ as X,ai as Y,ax as j,q as n,aj as f,c as d,s as q,t as w,g as l,ak as z,r as u}from"./runtime.F2d5dMTX.js";import{s as C}from"./render.uhtrPhGq.js";import{i as H}from"./if.CnPO98rw.js";import{s as L}from"./attributes.CMiiBzYm.js";import{p as M}from"./props.B8qPwHTS.js";function O(e,a,...o){var t=e,r=_,s;E(()=>{r!==(r=a())&&(s&&(A(s),s=null),s=N(()=>r(t,...o)))},F),R&&(t=X)}function P(e,a,o,t){n(a,!0),n(o,e.pageX+5),n(t,e.pageY+5)}function S(e,a,o){n(a,e.pageX+5),n(o,e.pageY+5)}var B=c('<div class="tooltip svelte-kciua8"> </div>'),D=c("<div><!></div> <!>",1);function V(e,a){Y(a,!0);let o=M(a,"title",3,""),t=f(!1),r=f(void 0),s=f(void 0);function g(){n(t,!1)}var v=D(),i=j(v);i.__mouseover=[P,t,r,s],i.__mousemove=[S,r,s];var h=d(i);O(h,()=>a.children??_),u(i);var x=q(i,2);H(x,()=>l(t),b=>{var p=B(),y=d(p,!0);u(p),w(()=>{L(p,"style",`top: ${l(s)??""}px; left: ${l(r)??""}px;`),C(y,o())}),m(b,p)}),k("mouseleave",i,g),m(e,v),z()}T(["mouseover","mousemove"]);export{V as T,O as s};
