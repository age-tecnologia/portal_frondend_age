if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>n(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.912f8325.css",revision:null},{url:"/img/age_orange.57916d66.png",revision:null},{url:"/index.html",revision:"b922a50a81e9f41150ddf2f97ebfc1dc"},{url:"/js/app.aea91699.js",revision:null},{url:"/js/chunk-vendors.6150c2b9.js",revision:null},{url:"/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
