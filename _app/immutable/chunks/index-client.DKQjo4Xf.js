import{ap as o,w as i,ao as _,u as m,O as p}from"./runtime.DLNDJtKJ.js";function u(e){throw new Error("lifecycle_outside_component")}function x(e){o===null&&u(),i&&o.l!==null?d(o).m.push(e):_(()=>{const n=m(e);if(typeof n=="function")return n})}function v(e,n,{bubbles:c=!1,cancelable:a=!1}={}){return new CustomEvent(e,{detail:n,bubbles:c,cancelable:a})}function y(){const e=o;return e===null&&u(),(n,c,a)=>{var r;const t=(r=e.s.$$events)==null?void 0:r[n];if(t){const l=p(t)?t.slice():[t],s=v(n,c,a);for(const f of l)f.call(e.x,s);return!s.defaultPrevented}return!0}}function d(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{y as c,x as o};
