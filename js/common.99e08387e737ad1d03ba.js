(()=>{"use strict";var e,t={2442:()=>{const e={gifContainer:document.querySelector("#gifContainer"),searchInput:document.querySelector("#searchInput"),showMore:document.querySelector("#showMore"),offset:0,limit:12},t="https://api.giphy.com/v1/gifs",o="RgWTMk7a1a0rM1Wa3zP1hUI8vjjJ2qZ8",n=e=>fetch(e).then((e=>e.ok?e.json():Promise.reject(e.statusText))).catch((e=>console.error(e))),r=t=>{t.forEach((t=>{const o=document.createElement("img");o.classList.add("grid-item"),o.src=t.images.fixed_height.url,e.gifContainer.appendChild(o)}))},a=()=>{let t=e.searchInput.value;t.trim()?s(t):c()},i=t=>{let o=t.pagination.total_count;r(t.data),e.showMore.style.display="flex",e.offset+=e.limit,e.offset>=o&&(e.showMore.style.display="none")},c=()=>{n("".concat(t,"/trending?api_key=").concat(o,"&limit=").concat(e.limit,"&offset=").concat(e.offset)).then((e=>{i(e)})).catch((e=>console.error(e)))},s=a=>{n("".concat(t,"/search?api_key=").concat(o,"&q=").concat(a,"&limit=").concat(e.limit,"&offset=").concat(e.offset)).then((e=>{if(0===e.data.length)return n("".concat(t,"/search?api_key=").concat(o,"&q=not+found&limit=9"));i(e)})).then((e=>{if(e&&e.data){const t=e.data[Math.floor(Math.random()*e.data.length)];r([t])}})).catch((e=>console.error(e)))};window.addEventListener("DOMContentLoaded",a),e.showMore.addEventListener("click",(()=>a())),e.searchInput.addEventListener("input",function(e,t){let o;return function(){clearTimeout(o),o=setTimeout((()=>e.apply(this,arguments)),1500)}}((()=>{e.offset=0,e.gifContainer.innerHTML="",e.showMore.style.display="none",a()}))),e.searchInput.addEventListener("keydown",(e=>"Enter"===e.key&&e.preventDefault()))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={592:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,i=o[0],c=o[1],s=o[2],l=0;if(i.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var f=s(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},o=self.webpackChunkwebpack=self.webpackChunkwebpack||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.O(void 0,[981],(()=>n(6981)));var r=n.O(void 0,[981],(()=>n(2442)));r=n.O(r)})();