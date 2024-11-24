import{t as z,a as R,e as D}from"../chunks/disclose-version.Rx5FR0e_.js";import{p as H,f as I,s as o,c as r,t as J,g as e,a as l,b as i,d as L,r as a,n as N}from"../chunks/runtime.DLNDJtKJ.js";import{s as h}from"../chunks/render.BcKmsnHn.js";import{i as P}from"../chunks/if.D1uSsI8A.js";import{r as w}from"../chunks/attributes.Bu49k65J.js";import{b as y}from"../chunks/input.B8MJ_C9M.js";import{p as _}from"../chunks/proxy.Bb2uB7gI.js";var Q=z(`<div class="grid grid-cols-3 gap-6 mt-10"><div class="relative bg-center bg-cover rounded-lg shadow-lg" style="background-image: url('https://i.imgur.com/zs2t3ad.jpeg'); aspect-ratio: 3/2;"><p class="absolute inset-0 flex  text-white text-[5vw] top-[10%] left-[20%]"> </p></div> <div class="relative bg-center bg-cover rounded-lg shadow-lg" style="background-image: url('https://i.imgur.com/nc7BaOE.jpeg'); aspect-ratio: 3/2;"><p class="absolute inset-0 flex  text-white text-[5vw] top-[40%] left-[30%]"> </p></div> <div class="relative bg-center bg-cover rounded-lg shadow-lg" style="background-image: url('https://i.imgur.com/9925v7G.jpeg'); aspect-ratio: 3/2;"><p class="absolute inset-0 flex  text-white text-[5vw] top-[10%] left-[30%]"> </p></div></div>`),T=z(`<form class="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6"><div><label for="ratingSelf" class="block mb-2 text-sm font-medium text-gray-900">Your Rating:</label> <input id="ratingSelf" type="text" placeholder="Enter your rating" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" required></div> <div><label for="ratingOpp" class="block mb-2 text-sm font-medium text-gray-900">Opponent Rating:</label> <input id="ratingOpp" type="text" placeholder="Enter opponent's rating" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" required></div> <div><label for="kfac" class="block mb-2 text-sm font-medium text-gray-900">K Factor:</label> <input id="kfac" type="text" placeholder="Enter K Factor" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500" required></div> <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">Calculate</button></form> <!>`,1);function re(B,C){H(C,!0);let n=l(2e3),g=l(2e3),s=l(25),d=l(void 0),u=l(void 0),c=l(void 0);var k=T(),p=I(k),b=r(p),$=o(r(b),2);w($),a(b);var v=o(b,2),F=o(r(v),2);w(F),a(v);var O=o(v,2),E=o(r(O),2);w(E),a(O),N(2),a(p);var G=o(p,2);P(G,()=>e(d),t=>{var f=Q(),m=r(f),j=r(m),M=r(j);a(j),a(m);var x=o(m,2),q=r(x),Y=r(q);a(q),a(x);var S=o(x,2),K=r(S),A=r(K);a(K),a(S),a(f),J(()=>{h(M,`${(e(d)>0?"+":"")??""}${e(d)??""}`),h(Y,`${(e(u)>0?"+":"")??""}${e(u)??""}`),h(A,`${(e(c)>0?"-":"")??""}${e(c)??""}`)}),R(t,f)}),D("submit",p,()=>{const t=1/(1+Math.pow(10,(e(g)-e(n))/400));i(d,_((e(s)*(1-t)).toFixed(2))),i(u,_((e(s)*(.5-t)).toFixed(2))),i(c,_((e(s)*(0-t)).toFixed(2)))}),y($,()=>e(n),t=>i(n,t)),y(F,()=>e(g),t=>i(g,t)),y(E,()=>e(s),t=>i(s,t)),R(B,k),L()}export{re as component};