if(!self.define){let e,r={};const c=(c,o)=>(c=new URL(c+".js",o).href,r[c]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=r,document.head.appendChild(e)}else e=c,importScripts(c),r()})).then((()=>{let e=r[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(o,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let s={};const l=e=>c(e,n),f={module:{uri:n},exports:s,require:l};r[n]=Promise.all(o.map((e=>f[e]||l(e)))).then((e=>(i(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/check-my-repo/css/app.85e57d7d.css",revision:null},{url:"/check-my-repo/frontend.json",revision:"5386c2b553b81493f6e7e5b399cf4d94"},{url:"/check-my-repo/img/box.96eb7ca2.svg",revision:null},{url:"/check-my-repo/img/check-circle.eea445fc.svg",revision:null},{url:"/check-my-repo/img/external-link.cb89befa.svg",revision:null},{url:"/check-my-repo/img/x-circle.6ce42bf9.svg",revision:null},{url:"/check-my-repo/index.html",revision:"a708defe9b51e16c6d954ff43d59b316"},{url:"/check-my-repo/js/app.f0db3aed.js",revision:null},{url:"/check-my-repo/js/chunk-vendors.5ae652bf.js",revision:null},{url:"/check-my-repo/logo.png",revision:"f003fc4aae864c738e2fdd41ff0e6715"},{url:"/check-my-repo/logo.svg",revision:"d16ebdb9c003e86a269fa348c6445094"},{url:"/check-my-repo/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/check-my-repo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
