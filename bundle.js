!function(e){function t(t){for(var n,o,i=t[0],u=t[1],a=0,l=[];a<i.length;a++)o=i[a],r[o]&&l.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);l.length;)l.shift()()}var n={},r={0:0};var o={};var i={3:function(){return{"./mandelbrot_wasm":{__widl_f_time_with_label_:function(e,t){return n[2].exports.d(e,t)},__widl_f_time_end_with_label_:function(e,t){return n[2].exports.c(e,t)},__wbindgen_throw:function(e,t){return n[2].exports.b(e,t)}}}}};function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function(e){return u.p+""+e+".bundle.js"}(e),l=function(t){f.onerror=f.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return({1:[3]}[e]||[]).forEach(function(e){var n=o[e];if(n)t.push(n);else{var r,a=i[e](),l=fetch(u.p+""+{3:"88a5fe8bd23960b736e6"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(l),a]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(l,a);else{r=l.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,a)})}t.push(o[e]=r.then(function(t){return u.w[e]=(t.instance||t).exports}))}}),Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e},u.w={};var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var s=l;u(u.s=0)}([function(e,t,n){n.e(1).then(n.bind(null,1)).then(()=>{console.log("loaded!")})}]);