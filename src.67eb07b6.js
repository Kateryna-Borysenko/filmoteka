parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/header/mobile-1x.png":[["mobile-1x.b78e186a.png","jxYx"],"jxYx"],"./../images/header/mobile-2x.png":[["mobile-2x.8e3ccb90.png","LK2h"],"LK2h"],"./../images/header/tablet-1x.png":[["tablet-1x.87b57e6c.png","cywj"],"cywj"],"./../images/header/tablet-2x.png":[["tablet-2x.20999315.png","AJwi"],"AJwi"],"./../images/header/desktop-1x.png":[["desktop-1x.3719207c.png","Agil"],"Agil"],"./../images/header/desktop-2x.png":[["desktop-2x.a2502fe1.png","r2j6"],"r2j6"],"./../images/header/second-mobile-1x.png":[["second-mobile-1x.d9f0ef06.png","vDJt"],"vDJt"],"./../images/header/second-mobile-2x.png":[["second-mobile-2x.28c02602.png","zBNK"],"zBNK"],"./../images/header/second-tablet-1x.png":[["second-tablet-1x.730ebf9e.png","J6dA"],"J6dA"],"./../images/header/second-tablet-2x.png":[["second-tablet-2x.cfd26c42.png","FKLt"],"FKLt"],"./../images/header/second-desktop-1x.png":[["second-desktop-1x.94d58b2b.png","ZlWY"],"ZlWY"],"./../images/header/second-desktop-2x.png":[["second-desktop-2x.6a00e3c9.png","lSDC"],"lSDC"]}],"dZIy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;const e=document.querySelector(".movies-gallery");async function t(t){const a=t.map(({title:e,release_date:t,poster_path:a,id:r})=>{return{title:e,releaseYear:new Date(t).getFullYear(),poster_path:a,id:r}});return Promise.all(a.map(({title:e,releaseYear:t,poster_path:a,id:r})=>{const s=document.createElement("img");return s.src=`https://image.tmdb.org/t/p/w500${a}`,s.classList.add("movies"),s.dataset.id=r,new Promise(a=>{s.onload=(()=>a({title:e,releaseYear:t,imgL:s}))})})).then(t=>{e.innerHTML=t.map(({title:e,releaseYear:t,imgL:a})=>`<div class="movies-card">\n      ${a.outerHTML}\n      <p class="movies_name">\n        ${e} <br/>\n        <span class="genre">Drama | ${t}</span>\n      </p></div>`).join("")})}
},{}],"o8lo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderNumberPag=s;var e=n(require("./api-service")),t=n(require("./make-markup"));function n(e){return e&&e.__esModule?e:{default:e}}const a=document.querySelector(".movies-gallery"),u=document.querySelector("#header-contain-input"),r=document.querySelector(".pagination-list"),i=document.querySelector(".pagination-row-left"),o=document.querySelector(".pagination-row-right");function c(n){const a=+n.target.dataset.pagnumber;a&&(e.default.changePage(a),e.default.fetchMovies().then(e=>{(0,t.default)(e)}))}function d(n){e.default.changePage(e.default.page-1),e.default.fetchMovies().then(e=>{(0,t.default)(e)})}function l(n){e.default.changePage(e.default.page+1),e.default.fetchMovies().then(e=>{(0,t.default)(e)})}function s(t,n){const a=window.innerWidth<768;let u=[];if(n<=5||n<=9&&!a){for(let t=1;t<=n;t++)u.push(f(t,t===e.default.page));return void(r.innerHTML=u.join(""))}const i=t-1,o=n-t;let c=2,d=2;i<2?(c=i,d+=2-i):i<5&&!a&&(c=i,d+=5-i-1),o<2?(d=o,c+=2-o):o<5&&!a&&(d=o,c+=5-o-1),i>4&&!a&&(u.push(f(1)),u.push(f("...",!1,"prev")));for(let r=c;r>=0;r--)u.push(f(t-r,t-r===e.default.page));for(let e=1;e<=d;e++)u.push(f(+t+e));o>4&&!a&&(u.push(f("...",!1,"next")),u.push(f(n))),r.innerHTML=u.join("");const l=document.querySelector('[data-pagnumber="prev"]'),p=document.querySelector('[data-pagnumber="next"]');l&&l.addEventListener("click",e=>{s(+t-5,n)}),p&&p.addEventListener("click",e=>{s(+t+5,n)})}function f(e,t=!1,n){return`<li class="pagination-item">\n<button class="pagination-btn ${t?"pagination-btn__active":""}" data-pagnumber="${n||e}" type="button">${e}</button>\n</li>`}r.addEventListener("click",c),i.addEventListener("click",d),o.addEventListener("click",l),window.addEventListener("resize",t=>{s(e.default.page,e.default.totalPages)});
},{"./api-service":"hC31","./make-markup":"dZIy"}],"hC31":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./pagination.js");function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const i=document.querySelector(".pagination-row-left"),a=document.querySelector(".pagination-row-right");class s{constructor(){t(this,"BASE_URL","https://api.themoviedb.org/3"),t(this,"API_KEY","87f9885ae1efa5e26738121aab64796c"),this.inputText="",this.page=1,this.totalPages=null}fetchMovies(){let t=this.inputText?`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${encodeURIComponent(this.inputText)}`:`${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}&page=${this.page}`;return fetch(t).then(e=>e.ok?e.json():Promise.reject(new Error("Error"))).then(t=>(t.total_pages!==this.totalPages&&(this.totalPages=t.total_pages),(0,e.renderNumberPag)(this.page,this.totalPages),t.results))}getMovieData(e){return fetch(`${this.BASE_URL}/movie/${e}?api_key=${this.API_KEY}`).then(e=>e.ok?e.json():Promise.reject(new Error("Error")))}get inputValue(){return this.inputText}set inputValue(e){this.inputText=e}changePage(e){1===e?i.disabled=!0:i.disabled&&(i.disabled=!1),e===this.totalPages?a.disabled=!0:a.disabled&&(a.disabled=!1),this.page=e}}const r=new s;var o=r;exports.default=o;
},{"./pagination.js":"o8lo"}],"e0I3":[function(require,module,exports) {
"use strict";function t({poster_path:t,original_title:a,vote_average:l,vote_count:e,popularity:n,genres:s,overview:i}){const o=s.map(t=>t.name).join(", "),c=n.toFixed(1),_=a.toUpperCase();return`\n    <img class="modal-content__img" src="https://image.tmdb.org/t/p/w500${t}" alt="${a}" />\n    <div class="wrap">\n      <h1 class="modal-content__title">${a}</h1>\n      <div class="info-wrap modal-content__info-wrap">\n        <ul class="category-list">\n          <li class="category-list__item">Vote / Votes</li>\n          <li class="category-list__item">Popularity</li>\n          <li class="category-list__item">Original Title</li>\n          <li class="category-list__item">Genre</li>\n        </ul>\n        <ul class="category-value-list modal-content__category-value-list">\n          <li class="category-value-list__item"><span class="category-value-list__item_bg-color">${l}</span\n              class=""><span class="category-value-list__item_font-color"> / </span> ${e} </li>\n          <li class="category-value-list__item">${c}</li>\n          <li class="category-value-list__item">${_}</li>\n          <li class="category-value-list__item">${o}</li>\n        </ul>\n      </div>\n      <button class="modal-content__trailer-btn">watch the trailer</button>\n      <h2 class="modal-content__subtitle">About</h2>\n      <p class="modal-content__description">${i}</p>\n      <div class="btn-wrap content__btn-wrap">\n          <button class="btn-wrap__btn active" data-action="watched">add to Watched</button>\n          <button class="btn-wrap__btn " data-action="queue">add to queue</button>\n        </div>\n    `}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"WcsN":[function(require,module,exports) {
"use strict";var e=a(require("./markupSingleMovie")),t=a(require("./api-service")),o=a(require("./make-markup"));function a(e){return e&&e.__esModule?e:{default:e}}const c={gallery:document.querySelector(".movies-gallery"),modalwrap:document.querySelector(".output-js"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body"),backdrop:document.querySelector(".backdrop")};function d(){c.modal.classList.toggle("is-hidden"),c.body.classList.toggle("no-scroll")}const n=function(e){console.log(e.code),"Escape"===e.code&&(c.modal.classList.add("is-hidden"),c.body.classList.toggle("no-scroll"))},r=()=>JSON.parse(localStorage.getItem("QUEUE"))||[],l=()=>JSON.parse(localStorage.getItem("WATCHED"))||[];function i(o){if("IMG"!==o.target.tagName)return;d();const a=o.target,n=Number(a.dataset.id);t.default.getMovieData(n).then(t=>{const o=(0,e.default)(t);c.modalwrap.innerHTML=o;const a=document.querySelector('[data-action="queue"]');document.querySelector('[data-action="watched"]').addEventListener("click",function(){const e=l();e.find(e=>e.id===t.id)||localStorage.setItem("WATCHED",JSON.stringify([...e,t]))}),a.addEventListener("click",function(){const e=r();e.find(e=>e.id===t.id)||localStorage.setItem("QUEUE",JSON.stringify([...e,t]))})})}c.closeModalBtn.addEventListener("click",d),c.gallery.addEventListener("click",i),window.addEventListener("keydown",n);
},{"./markupSingleMovie":"e0I3","./api-service":"hC31","./make-markup":"dZIy"}],"Brfe":[function(require,module,exports) {
"use strict";var e=u(require("./api-service")),t=u(require("./make-markup"));function u(e){return e&&e.__esModule?e:{default:e}}const a=document.querySelector("#header-contain-input"),r=u=>{e.default.inputText=event.target.value,e.default.fetchMovies().then(e=>{(0,t.default)(e)}),""===event.target.value&&n()};a.addEventListener("input",r);const n=()=>{e.default.fetchMovies().then(e=>{(0,t.default)(e)}).catch(e=>handleError(e))};n();
},{"./api-service":"hC31","./make-markup":"dZIy"}],"Sc1o":[function(require,module,exports) {
window.addEventListener("load",e=>{let o=document.querySelector(".loading");setTimeout(()=>{o.classList.remove("loading")},1e3)});
},{}],"EZ65":[function(require,module,exports) {
var t=document.querySelector(".stt"),n=window.innerHeight,e=function(){document.addEventListener("scroll",function(e){n<=window.scrollY?t.classList.add("stt__active"):e.target.scrollingElement.scrollTop<=n&&(t.classList.remove("stt__active"),t.style.pointerEvents="auto")})},o=function(){t.addEventListener("click",function(){var n=window.scrollY,e=0,o=n;t.style.pointerEvents="none";requestAnimationFrame(function t(){o-=5*(e+=1),window.scrollTo(0,o),o>0&&requestAnimationFrame(t)})})},i=function(){e(),o()};document.addEventListener("DOMContentLoaded",i);
},{}],"b5Ik":[function(require,module,exports) {
document.getElementById("year").innerHTML=(new Date).getFullYear();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/api-service"),require("./js/modal-window"),require("./js/render-movies"),require("./js/make-markup"),require("./js/pagination"),require("./js/markupSingleMovie"),require("./js/spinner"),require("./js/back-to-top"),require("./js/footer");
},{"./sass/main.scss":"clu1","./js/api-service":"hC31","./js/modal-window":"WcsN","./js/render-movies":"Brfe","./js/make-markup":"dZIy","./js/pagination":"o8lo","./js/markupSingleMovie":"e0I3","./js/spinner":"Sc1o","./js/back-to-top":"EZ65","./js/footer":"b5Ik"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-moviesProject-g1/src.67eb07b6.js.map