if(!self.define){let e,n={};const r=(r,s)=>(r=new URL(r+".js",s).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const t=e=>r(e,o),c={module:{uri:o},exports:l,require:t};n[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.7d974b6c.css",revision:null},{url:"/img/age_orange.57916d66.png",revision:null},{url:"/img/logo_orange.d9b0681f.png",revision:null},{url:"/index.html",revision:"d1cf2aa628c8dd596f9c696731daa429"},{url:"/js/app.8fe50f83.js",revision:null},{url:"/js/chunk-vendors.2574f82f.js",revision:null},{url:"/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
