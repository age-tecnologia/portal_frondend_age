if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const e=s||("document"in self?document.currentScript.src:"")||location.href;if(l[e])return;let u={};const o=s=>n(s,e),c={module:{uri:e},exports:u,require:o};l[e]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ageportal"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/112.45f302b7.css",revision:null},{url:"/css/113.02f496ea.css",revision:null},{url:"/css/135.276c4171.css",revision:null},{url:"/css/234.022f4429.css",revision:null},{url:"/css/259.64279161.css",revision:null},{url:"/css/301.ae2bcc7c.css",revision:null},{url:"/css/39.1aa67ef1.css",revision:null},{url:"/css/401.61837cec.css",revision:null},{url:"/css/419.e338447b.css",revision:null},{url:"/css/441.2e79ed0c.css",revision:null},{url:"/css/461.52bd89d3.css",revision:null},{url:"/css/47.f4553cde.css",revision:null},{url:"/css/48.c8f81287.css",revision:null},{url:"/css/527.6cbf6f18.css",revision:null},{url:"/css/59.43b8c827.css",revision:null},{url:"/css/60.f005869c.css",revision:null},{url:"/css/656.5f205900.css",revision:null},{url:"/css/678.6c9db367.css",revision:null},{url:"/css/691.947546af.css",revision:null},{url:"/css/737.b39d40a3.css",revision:null},{url:"/css/842.d783414a.css",revision:null},{url:"/css/855.2909b02a.css",revision:null},{url:"/css/871.f43e45ea.css",revision:null},{url:"/css/875.be4e0aef.css",revision:null},{url:"/css/944.a2bcf07f.css",revision:null},{url:"/css/948.e8e3dde4.css",revision:null},{url:"/css/966.66a0a1b8.css",revision:null},{url:"/css/98.33b89ac4.css",revision:null},{url:"/css/app.17fa6a20.css",revision:null},{url:"/img/acelerador.8296a6cb.png",revision:null},{url:"/img/age_orange.57916d66.png",revision:null},{url:"/img/age_orange_grey.83a59ba0.png",revision:null},{url:"/img/comissao2.c611fe01.png",revision:null},{url:"/img/congratulations.ad0b20c0.png",revision:null},{url:"/img/dinheiro0.b3426db6.png",revision:null},{url:"/img/dinheiro1.38fbe42e.png",revision:null},{url:"/img/dinheiro2.4ee8caec.png",revision:null},{url:"/img/dinheiro3.344266c0.png",revision:null},{url:"/img/dinheiro4.3750dce7.png",revision:null},{url:"/img/estrela.3949d29a.png",revision:null},{url:"/img/letsgo.25dc3320.png",revision:null},{url:"/img/logo_orange.d9b0681f.png",revision:null},{url:"/img/running-2.150a94b8.png",revision:null},{url:"/img/running.1450b9e8.png",revision:null},{url:"/img/valor_estrela.bcdafcec.png",revision:null},{url:"/index.html",revision:"e85ffc4f51090929deccb7af0b5fde7e"},{url:"/js/112.a66260ba.js",revision:null},{url:"/js/113.b53db638.js",revision:null},{url:"/js/135.66d7b3c7.js",revision:null},{url:"/js/234.2b83484b.js",revision:null},{url:"/js/259.4a38da20.js",revision:null},{url:"/js/301.49e55882.js",revision:null},{url:"/js/39.b0bac6a0.js",revision:null},{url:"/js/401.20e98d38.js",revision:null},{url:"/js/419.aadca18d.js",revision:null},{url:"/js/441.805bb61d.js",revision:null},{url:"/js/461.95dafff1.js",revision:null},{url:"/js/47.6e9c53ef.js",revision:null},{url:"/js/48.eb62b5e9.js",revision:null},{url:"/js/527.932af8df.js",revision:null},{url:"/js/59.6c8aaf92.js",revision:null},{url:"/js/60.57d71a1a.js",revision:null},{url:"/js/632.0839087a.js",revision:null},{url:"/js/656.581e931d.js",revision:null},{url:"/js/678.bcb98c0c.js",revision:null},{url:"/js/691.9898a405.js",revision:null},{url:"/js/737.22abc947.js",revision:null},{url:"/js/797.8593ead9.js",revision:null},{url:"/js/842.e687e5c6.js",revision:null},{url:"/js/855.d15f084d.js",revision:null},{url:"/js/871.b2e3b591.js",revision:null},{url:"/js/875.b40f0e25.js",revision:null},{url:"/js/944.ae00f357.js",revision:null},{url:"/js/948.8c4a6332.js",revision:null},{url:"/js/95.6b03363d.js",revision:null},{url:"/js/966.d47d49d1.js",revision:null},{url:"/js/98.0bdec3db.js",revision:null},{url:"/js/app.e88ef08a.js",revision:null},{url:"/js/chunk-vendors.e4632614.js",revision:null},{url:"/manifest.json",revision:"f95f93af103df1ebe0bc7eae080865fa"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
