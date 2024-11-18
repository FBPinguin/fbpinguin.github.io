import{t as S,a as E,g as V}from"../chunks/disclose-version.C6Ni2mBd.js";import"../chunks/legacy.D14qz0Bj.js";import{F as J,ai as Y,aj as P,s as n,c as i,t as L,g as r,q as y,ak as Z,r as l}from"../chunks/runtime.F2d5dMTX.js";import{s as B}from"../chunks/render.uhtrPhGq.js";import{i as tt}from"../chunks/if.CnPO98rw.js";import{e as et,i as rt}from"../chunks/each.C35xrm4-.js";import{s as at,r as O}from"../chunks/attributes.CMiiBzYm.js";import{t as K}from"../chunks/transitions.Cm22BhUB.js";import{b as W,a as ot}from"../chunks/input.CnCmtiFU.js";import{p as M}from"../chunks/proxy.2jZTpyhR.js";function q(t,e){var c=t.__className,s=st(e);J&&t.className===s?t.__className=s:(c!==s||J&&t.className!==s)&&(e==null?t.removeAttribute("class"):t.className=s,t.__className=s)}function st(t){return t??""}function lt(t){const e=t-1;return e*e*e+1}function nt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Q(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function it(t,{delay:e=0,duration:c=400,easing:s=nt,amount:b=5,opacity:h=0}={}){const d=getComputedStyle(t),a=+d.opacity,f=d.filter==="none"?"":d.filter,m=a*(1-h),[x,g]=Q(b);return{delay:e,duration:c,easing:s,css:(_,u)=>`opacity: ${a-m*u}; filter: ${f} blur(${u*x}${g});`}}function ct(t,{delay:e=0,duration:c=400,easing:s=lt,x:b=0,y:h=0,opacity:d=0}={}){const a=getComputedStyle(t),f=+a.opacity,m=a.transform==="none"?"":a.transform,x=f*(1-d),[g,_]=Q(b),[u,T]=Q(h);return{delay:e,duration:c,easing:s,css:(w,k)=>`
			transform: ${m} translate(${(1-w)*g}${_}, ${(1-w)*u}${T});
			opacity: ${f-x*k}`}}var dt=S('<tr class="odd:bg-white even:bg-gray-50 border-b"><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"></th><td class="px-6 py-4"><a class="text-blue-600 dark:text-blue-500 hover:underline" target="_blank"> </a></td><td class="px-6 py-4"> </td></tr>'),ut=S("<p>I am loading...</p>"),pt=S('<div class="container-fluid container border svelte-1cc8oa6"><form><div><label for="name" class="block mb-2 text-sm font-medium text-gray-900">Lichess team name:</label> <input autocomplete="off" id="name" placeholder="Name" type="text" required></div> <div><label for="fen" class="block mb-2 text-sm font-medium text-gray-900">Position FEN:</label> <input autocomplete="off" id="fen" placeholder="FEN" type="text" required></div> <div class="relative"><label for="checkbox" class="block mb-2 text-sm font-medium text-gray-900">Playing with:</label> <label class="inline-flex items-center mb-5 cursor-pointer"><input type="checkbox" class="sr-only peer"> <div></div> <span class="ms-3 text-sm font-medium text-gray-900"> </span></label> <button type="submit" id="submit-button">Search</button></div></form> <table class="w-full text-sm text-left rtl:text-right text-gray-500"><thead class="text-xs text-gray-700 uppercase bg-gray-50"><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Games played</th></tr></thead><tbody id="results"></tbody></table> <!></div>');function bt(t,e){Y(e,!0);function c(o,{speed:v=1}){if(!(o.childNodes.length===1&&o.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const p=o.textContent;return{duration:p.length/(v*.01),tick:N=>{const $=Math.trunc(p.length*N);o.textContent=p.slice(0,$)}}}let s=P("sbo"),b=P(!0),h=P("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1"),d=P(M([])),a=P(!1);var f=pt(),m=i(f),x=i(m),g=n(i(x),2);O(g),l(x);var _=n(x,2),u=n(i(_),2);O(u),l(_);var T=n(_,2),w=n(i(T),2),k=i(w);O(k);var R=n(k,2),A=n(R,2),X=i(A,!0);l(A),l(w);var D=n(w,2);l(T),l(m);var F=n(m,2),G=n(i(F));et(G,21,()=>r(d),rt,(o,v,C)=>{var p=dt(),j=i(p);j.textContent=C+1;var N=n(j),$=i(N),H=i($,!0);l($),l(N);var I=n(N),U=i(I,!0);l(I),l(p),L(()=>{at($,"href","https://lichess.org/@/"+r(v).name),B(H,r(v).name),B(U,r(v).games)}),K(1,p,()=>ct,()=>({x:200+20*C,duration:2e3+100*C})),K(2,p,()=>it),E(o,p)}),l(G),l(F);var z=n(F,2);tt(z,()=>r(a),o=>{var v=ut();K(1,v,()=>c,()=>({speed:.3})),E(o,v)}),l(f),L(()=>{q(g,r(a)?"bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),g.disabled=r(a),q(u,r(a)?"bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),u.disabled=r(a),k.disabled=r(a),q(R,`${"relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-black"+(r(a)?" cursor-not-allowed":"")} svelte-1cc8oa6`),B(X,r(b)?"Black":"White"),q(D,r(a)?"absolute right-4 top-4 bg-red text-red-700 font-semibold  py-2 px-4 border border-red-500 cursor-not-allowed rounded":"absolute right-4 top-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"),D.disabled=r(a)}),V("submit",m,async()=>{y(d,M([])),y(a,!0);const o=await fetch("http://192.168.178.10:5000",{method:"POST",body:JSON.stringify({team:r(s),fen:r(h),white:!r(b)}),headers:{"Content-Type":"application/json"}});y(d,M(await o.json())),y(a,!1)}),W(g,()=>r(s),o=>y(s,o)),W(u,()=>r(h),o=>y(h,o)),ot(k,()=>r(b),o=>y(b,o)),E(t,f),Z()}var ft=S('<div class="grid place-items-center"><!></div>');function $t(t){var e=ft(),c=i(e);bt(c,{}),l(e),E(t,e)}export{$t as component};
