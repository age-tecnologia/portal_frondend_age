if(!self.define){let s,l={};const n=(n,i)=>(n=new URL(n+".js",i).href,l[n]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=l,document.head.appendChild(s)}else s=n,importScripts(n),l()})).then((()=>{let s=l[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const e=s||("document"in self?document.currentScript.src:"")||location.href;if(l[e])return;let u={};const c=s=>n(s,e),o={module:{uri:e},exports:u,require:c};l[e]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(r(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ageportal"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/112.45f302b7.css",revision:null},{url:"/css/113.02f496ea.css",revision:null},{url:"/css/135.276c4171.css",revision:null},{url:"/css/234.022f4429.css",revision:null},{url:"/css/259.64279161.css",revision:null},{url:"/css/301.ae2bcc7c.css",revision:null},{url:"/css/303.13d76a52.css",revision:null},{url:"/css/401.61837cec.css",revision:null},{url:"/css/419.e338447b.css",revision:null},{url:"/css/441.2e79ed0c.css",revision:null},{url:"/css/447.2af36e0d.css",revision:null},{url:"/css/47.f4553cde.css",revision:null},{url:"/css/529.7a3936cc.css",revision:null},{url:"/css/59.43b8c827.css",revision:null},{url:"/css/60.f005869c.css",revision:null},{url:"/css/633.52bd89d3.css",revision:null},{url:"/css/648.3571442a.css",revision:null},{url:"/css/678.6c9db367.css",revision:null},{url:"/css/691.947546af.css",revision:null},{url:"/css/737.b39d40a3.css",revision:null},{url:"/css/842.d783414a.css",revision:null},{url:"/css/871.f43e45ea.css",revision:null},{url:"/css/875.be4e0aef.css",revision:null},{url:"/css/883.7c288a9b.css",revision:null},{url:"/css/948.e8e3dde4.css",revision:null},{url:"/css/966.66a0a1b8.css",revision:null},{url:"/css/98.33b89ac4.css",revision:null},{url:"/css/app.17fa6a20.css",revision:null},{url:"/img/acelerador.8296a6cb.png",revision:null},{url:"/img/age_orange.57916d66.png",revision:null},{url:"/img/age_orange_grey.83a59ba0.png",revision:null},{url:"/img/comissao2.c611fe01.png",revision:null},{url:"/img/congratulations.ad0b20c0.png",revision:null},{url:"/img/dinheiro0.b3426db6.png",revision:null},{url:"/img/dinheiro1.38fbe42e.png",revision:null},{url:"/img/dinheiro2.4ee8caec.png",revision:null},{url:"/img/dinheiro3.344266c0.png",revision:null},{url:"/img/dinheiro4.3750dce7.png",revision:null},{url:"/img/estrela.3949d29a.png",revision:null},{url:"/img/letsgo.25dc3320.png",revision:null},{url:"/img/logo_orange.d9b0681f.png",revision:null},{url:"/img/running-2.150a94b8.png",revision:null},{url:"/img/running.1450b9e8.png",revision:null},{url:"/img/valor_estrela.bcdafcec.png",revision:null},{url:"/index.html",revision:"31c4db064c2d5d309867ad30488dedf0"},{url:"/js/112.9776576c.js",revision:null},{url:"/js/113.5763ca48.js",revision:null},{url:"/js/135.66d7b3c7.js",revision:null},{url:"/js/234.47b32c9c.js",revision:null},{url:"/js/259.44c0f020.js",revision:null},{url:"/js/269.56ef130d.js",revision:null},{url:"/js/301.e696d02c.js",revision:null},{url:"/js/303.340c029f.js",revision:null},{url:"/js/401.20e98d38.js",revision:null},{url:"/js/419.aadca18d.js",revision:null},{url:"/js/441.805bb61d.js",revision:null},{url:"/js/447.63a84770.js",revision:null},{url:"/js/47.6e9c53ef.js",revision:null},{url:"/js/529.35897036.js",revision:null},{url:"/js/59.fb879757.js",revision:null},{url:"/js/60.116fbe91.js",revision:null},{url:"/js/632.0839087a.js",revision:null},{url:"/js/633.ccc8ecee.js",revision:null},{url:"/js/648.a1da7d9a.js",revision:null},{url:"/js/678.bcb98c0c.js",revision:null},{url:"/js/691.84db410c.js",revision:null},{url:"/js/737.c9e7d4a3.js",revision:null},{url:"/js/797.dff78737.js",revision:null},{url:"/js/842.e687e5c6.js",revision:null},{url:"/js/871.ded177fc.js",revision:null},{url:"/js/875.ee91f027.js",revision:null},{url:"/js/883.8ca1df86.js",revision:null},{url:"/js/948.e44e5ea3.js",revision:null},{url:"/js/95.6b03363d.js",revision:null},{url:"/js/966.7d301cac.js",revision:null},{url:"/js/98.2e2a3de9.js",revision:null},{url:"/js/app.da040535.js",revision:null},{url:"/js/chunk-vendors.23d5a3e2.js",revision:null},{url:"/manifest.json",revision:"f95f93af103df1ebe0bc7eae080865fa"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
