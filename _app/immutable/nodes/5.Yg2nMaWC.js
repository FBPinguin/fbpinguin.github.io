import{t as Y,a as M,e as L}from"../chunks/disclose-version.Rx5FR0e_.js";import{p as P,f as Q,s as o,c as r,t as S,g as e,a as i,b as s,d as R,r as a,n as T}from"../chunks/runtime.DLNDJtKJ.js";import{s as $}from"../chunks/render.BcKmsnHn.js";import{i as U}from"../chunks/if.D1uSsI8A.js";import{r as F}from"../chunks/attributes.Bu49k65J.js";import{s as f}from"../chunks/class.BUTg6TpR.js";import{b as z}from"../chunks/input.B8MJ_C9M.js";import{p as j}from"../chunks/proxy.Bb2uB7gI.js";var V=Y(`<div class="grid grid-cols-3 gap-4"><div class="relative bg-center" style="background-image: url('https://i.imgur.com/zs2t3ad.jpeg'); background-size: cover; aspect-ratio: 3/2;"><p class="absolute inset-0 flex  text-white text-[5vw] top-[10%] left-[30%]"> </p></div> <div class="relative bg-center" style="background-image: url('https://i.imgur.com/nc7BaOE.jpeg'); background-size: cover; aspect-ratio: 3/2;"><p class="absolute inset-0 flex  text-white text-[5vw] top-[30%] left-[20%]"> </p></div> <div class="relative bg-center" style="background-image: url('https://i.imgur.com/9925v7G.jpeg'); background-size: cover; aspect-ratio: 3/2;"><p class="absolute inset-0 flex  text-white text-[5vw] top-[10%] left-[30%]"> </p></div></div>`),W=Y('<form><div><label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your rating:</label> <input autocomplete="off" id="name" placeholder="Name" type="text" required></div> <div><label for="fen" class="block mb-2 text-sm font-medium text-gray-900">Opponent rating:</label> <input autocomplete="off" id="fen" placeholder="FEN" type="text" required></div> <div><label for="fen" class="block mb-2 text-sm font-medium text-gray-900">K factor:</label> <input autocomplete="off" id="fen" placeholder="FEN" type="text" required> <button type="submit" id="submit-button">calculate</button></div> <div class="relative"></div></form> <!>',1);function se(A,C){P(C,!0);let p=!1,m=i(2e3),g=i(2e3),l=i(25),n=i(void 0),b=i(void 0),x=i(void 0);var q=W(),u=Q(q),_=r(u),c=o(r(_),2);F(c),a(_);var y=o(_,2),v=o(r(y),2);F(v),a(y);var E=o(y,2),d=o(r(E),2);F(d);var N=o(d,2);a(E),T(2),a(u);var D=o(u,2);U(D,()=>e(n),t=>{var h=V(),k=r(h),O=r(k),H=r(O);a(O),a(k);var w=o(k,2),B=r(w),I=r(B);a(B),a(w);var G=o(w,2),K=r(G),J=r(K);a(K),a(G),a(h),S(()=>{$(H,`${(e(n)>0?"+":"")??""}${e(n)??""}`),$(I,`${(e(b)>0?"+":e(b)<0?"-":"")??""}${e(b)??""}`),$(J,`${(e(x)>0?"-":"")??""}${e(x)??""}`)}),M(t,h)}),S(()=>{f(c,"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),c.disabled=p,f(v,"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),v.disabled=p,f(d,"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),d.disabled=p,f(N," right-4 top-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"),N.disabled=p}),L("submit",u,()=>{const t=1/(1+Math.pow(10,(e(g)-e(m))/400));s(n,j((e(l)*(1-t)).toFixed(2))),s(b,j((e(l)*(.5-t)).toFixed(2))),s(x,j((e(l)*(0-t)).toFixed(2)))}),z(c,()=>e(m),t=>s(m,t)),z(v,()=>e(g),t=>s(g,t)),z(d,()=>e(l),t=>s(l,t)),M(A,q),R()}export{se as component};