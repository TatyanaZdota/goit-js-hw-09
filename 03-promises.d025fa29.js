function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");function u(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}({formEl:document.querySelector(".form"),delay:document.querySelector("[name=delay]"),step:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]")}).formEl.addEventListener("submit",(function(t){t.preventDefault();const{delay:o,step:n,amount:r}=t.currentTarget.elements;let i=Number(o.value),a=Number(n.value),d=Number(r.value);for(let t=1;t<=d;t++)u(t,i).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),i+=a}));
//# sourceMappingURL=03-promises.d025fa29.js.map
