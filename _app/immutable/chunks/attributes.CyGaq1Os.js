import{a0 as f,A as c,a1 as t,a2 as v,a3 as h}from"./runtime.BIG9PkTb.js";import{b as g}from"./disclose-version.CHg3_Yus.js";function u(r){if(c){var s=!1,o=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var a=r.value;i(r,"value",null),r.value=a}if(r.hasAttribute("checked")){var e=r.checked;i(r,"checked",null),r.checked=e}}};r.__on_r=o,h(o),g()}}function i(r,s,o,a){var e=r.__attributes??(r.__attributes={});c&&(e[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||e[s]!==(e[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[t]=o),o==null?r.removeAttribute(s):typeof o!="string"&&n(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var d=new Map;function n(r){var s=d.get(r.nodeName);if(s)return s;d.set(r.nodeName,s=[]);for(var o,a=f(r),e=Element.prototype;e!==a;){o=v(a);for(var _ in o)o[_].set&&s.push(_);a=f(a)}return s}export{u as r,i as s};