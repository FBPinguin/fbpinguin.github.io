import{t as v,a as g,e as U}from"../chunks/disclose-version.BR_FhQOl.js";import"../chunks/legacy.CeKprrr4.js";import{aj as V,al as m,s as a,c as o,t as W,g as e,F as n,am as Z,r,ao as ee}from"../chunks/runtime.kQpuWS4R.js";import{s as T}from"../chunks/render.DIOeoHru.js";import{i as G}from"../chunks/if.CV_ZTkyD.js";import{e as te,i as re}from"../chunks/each.DEFStG-j.js";import{s as oe,r as B}from"../chunks/attributes.b9cWCPV0.js";import{s as N}from"../chunks/class.Ct6HwxZN.js";import{t as H}from"../chunks/transitions.CopsqBgV.js";import{b as I,a as ae}from"../chunks/input.Bf0afcYx.js";import{p as O}from"../chunks/proxy.DD46p4iB.js";import{f as se,b as le}from"../chunks/index.3PmwA8Kz.js";var ie=v('<tr class="odd:bg-white even:bg-gray-50 border-b"><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"></th><td class="px-6 py-4"><a class="text-blue-600 dark:text-blue-500 hover:underline" target="_blank"> </a></td><td class="px-6 py-4"> </td></tr>'),ne=v("<p>I am loading...</p>"),de=v('<p style="color: red"> </p>'),pe=v('<div class="container-fluid container border svelte-1cc8oa6"><form><div><label for="name" class="block mb-2 text-sm font-medium text-gray-900">Lichess team id:</label> <input autocomplete="off" id="name" placeholder="Name" type="text" required></div> <div><label for="fen" class="block mb-2 text-sm font-medium text-gray-900">Position FEN:</label> <input autocomplete="off" id="fen" placeholder="FEN" type="text" required></div> <div class="relative"><label for="checkbox" class="block mb-2 text-sm font-medium text-gray-900">Playing with:</label> <label class="inline-flex items-center mb-5 cursor-pointer"><input type="checkbox" class="sr-only peer"> <div></div> <span class="ms-3 text-sm font-medium text-gray-900"> </span></label> <button type="submit" id="submit-button">Search</button></div></form> <table class="w-full text-sm text-left rtl:text-right text-gray-500"><thead class="text-xs text-gray-700 uppercase bg-gray-50"><tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Games played</th></tr></thead><tbody id="results"></tbody></table> <!> <!></div>');function ce(P,u){V(u,!0);function x(t,{speed:s=1}){if(!(t.childNodes.length===1&&t.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const l=t.textContent;return{duration:l.length/(s*.01),tick:h=>{const f=Math.trunc(l.length*h);t.textContent=l.slice(0,f)}}}let d=m("sbo"),p=m(!0),E=m("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1"),b=m(O([])),i=m(!1);var C=pe(),y=o(C),j=o(y),w=a(o(j),2);B(w),r(j);var q=a(j,2),k=a(o(q),2);B(k),r(q);var D=a(q,2),F=a(o(D),2),_=o(F);B(_);var K=a(_,2),L=a(K,2),J=o(L,!0);r(L),r(F);var R=a(F,2);r(D),r(y);var Q=a(y,2),X=a(o(Q));te(X,21,()=>e(b),re,(t,s,c)=>{var l=ie(),S=o(l);S.textContent=c+1;var h=a(S),f=o(h),Y=o(f,!0);r(f),r(h);var z=a(h),A=o(z,!0);r(z),r(l),W(()=>{oe(f,"href","https://lichess.org/@/"+e(s).name),T(Y,e(s).name),T(A,e(s).games)}),H(1,l,()=>se,()=>({x:200+20*c,duration:2e3+100*c})),H(2,l,()=>le),g(t,l)}),r(X),r(Q);var $=a(Q,2);G($,()=>e(i),t=>{var s=ne();H(1,s,()=>x,()=>({speed:.3})),g(t,s)});var M=a($,2);G(M,()=>{var t;return((t=e(b))==null?void 0:t.status)==="error"},t=>{var s=de(),c=o(s,!0);r(s),W(()=>{var l;return T(c,(l=e(b))==null?void 0:l.message)}),g(t,s)}),r(C),W(()=>{N(w,e(i)?"bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),w.disabled=e(i),N(k,e(i)?"bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"),k.disabled=e(i),_.disabled=e(i),N(K,`${"relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-black"+(e(i)?" cursor-not-allowed":"")} svelte-1cc8oa6`),T(J,e(p)?"Black":"White"),N(R,e(i)?"absolute right-4 top-4 bg-red text-red-700 font-semibold  py-2 px-4 border border-red-500 cursor-not-allowed rounded":"absolute right-4 top-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"),R.disabled=e(i)}),U("submit",y,async()=>{n(b,O([])),n(i,!0);const t=await fetch("https://roughy-daring-wahoo.ngrok-free.app/",{method:"POST",body:JSON.stringify({team:e(d),fen:e(E),white:!e(p)}),headers:{"Content-Type":"application/json"}});n(b,O(await t.json())),n(i,!1)}),I(w,()=>e(d),t=>n(d,t)),I(k,()=>e(E),t=>n(E,t)),ae(_,()=>e(p),t=>n(p,t)),g(P,C),Z()}var ue=v(`<div class="grid"><div class="bg-red-100 place-self-center p-6 rounded-lg my-[150px]"><h1 class="text-5xl font-bold py-10">Team checker</h1> <div class="border-solid border-2 border-red-400"><!></div></div> <div class="bg-zinc-300 p-3 rounded m-3"><h1 class="text-5xl font-bold">How to use it!</h1> <h2 class="font-bold text-xl">What is it useful for?</h2> <p>When preparing for an opponent for an otb game, in order to prepare to the fullest it would be useful to know their chess account.</p> <p>Sadly people (usually) dont go around advertising their account, but if you know what chess club they play at and you know what opening they play (for example from the database).</p> <p>You might want to check every account in the lichess team for this chessclub to see if you can find your opponent, however this would be very boring.</p> <p>Therefore this tool! This is precisely created for that purpose, to automate that process.</p> <p> </p> <h2 class="font-bold text-xl">How do i get the lichess team id?</h2> <p>The easiest way is to look at the url of the lichess team</p> <img src="https://i.imgur.com/Q3XhTC8.png" alt="instructions"> <p> </p> <h2 class="font-bold text-xl">How do i get the lichess team id?</h2> <p>The FEN is the position you want to check the team for. The easiest was is just to use lichess' analysis tool</p> <img class="h-96" src="https://i.imgur.com/pakQPuD.png" alt="instructions"> <p> </p> <h2 class="font-bold text-xl">What color do i choose?</h2> <p>Lastly you want to choose which color the opponent is in the position</p></div></div>`);function Ne(P){var u=ue(),x=o(u),d=a(o(x),2),p=o(d);ce(p,{}),r(d),r(x),ee(2),r(u),g(P,u)}export{Ne as component};
