(()=>{var n={890:(n,e,r)=>{"use strict";r.d(e,{Z:()=>c});var t=r(537),a=r.n(t),o=r(645),s=r.n(o)()(a());s.push([n.id,"body {\r\n    background-color:rgb(214, 206, 186);\r\n    font-family: Arial, Helvetica, sans-serif;    \r\n}\r\n\r\n.container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    padding: 10px;\r\n}\r\n\r\n.heading {\r\n    text-align: center;\r\n    font-size: large;\r\n}\r\n\r\n.form {\r\n    display: block;\r\n    margin: 20px auto;\r\n    padding: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.input {\r\n    width: 30vw;\r\n}\r\n\r\n.answer {\r\n    text-align: center;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.danger {\r\n    color: red;\r\n}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;IACI,mCAAmC;IACnC,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd",sourcesContent:["body {\r\n    background-color:rgb(214, 206, 186);\r\n    font-family: Arial, Helvetica, sans-serif;    \r\n}\r\n\r\n.container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    padding: 10px;\r\n}\r\n\r\n.heading {\r\n    text-align: center;\r\n    font-size: large;\r\n}\r\n\r\n.form {\r\n    display: block;\r\n    margin: 20px auto;\r\n    padding: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.input {\r\n    width: 30vw;\r\n}\r\n\r\n.answer {\r\n    text-align: center;\r\n    font-size: 1.3em;\r\n}\r\n\r\n.danger {\r\n    color: red;\r\n}"],sourceRoot:""}]);const c=s},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(t)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);t&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},537:n=>{"use strict";n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(a," */"),s=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(s).concat([o]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},s=[],c=0;c<n.length;c++){var i=n[c],u=t.base?i[0]+t.base:i[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var p=r(d),A={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var f=a(A,t);t.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var c=r(o[s]);e[c].references--}for(var i=t(n,a),u=0;u<o.length;u++){var l=r(o[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=i}}},569:n=>{"use strict";var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{"use strict";n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},122:n=>{n.exports=n=>{let e=1/0,r=1/0;for(const t of n)if(/\d/.test(t)){const n=parseFloat(t);if(n<e){const t=e;e=n,r=t}else n<r&&(r=n)}return e===1/0?null:r===1/0?e:e+r}},10:n=>{n.exports=n=>{const e=document.querySelector(".container"),r=document.querySelector(".input"),t=document.querySelector(".form"),a=document.createElement("div");a.className="answer",e.appendChild(a),r.focus(),t.addEventListener("submit",(e=>{e.preventDefault();const t=r.value.split(","),o=n(t);null===o?(a.classList.add("danger"),a.innerText="Данное выражение не может быть обработано."):(a.classList.remove("danger"),a.innerHTML=`Сумма двух минимальных чисел равна <strong>${o}</strong>`),r.value="",r.focus()}))}},205:n=>{n.exports=()=>{const n=document.createElement("div");n.className="container";const e=document.createElement("h1");e.className="heading",e.innerText="Введите целые числа через запятую",n.appendChild(e);const r=document.createElement("form");r.className="form",n.appendChild(r);const t=document.createElement("input");t.className="input",r.appendChild(t);const a=document.createElement("button");a.className="button",a.innerText="ОК",r.appendChild(a),document.body.appendChild(n)}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{"use strict";var n=r(379),e=r.n(n),t=r(795),a=r.n(t),o=r(569),s=r.n(o),c=r(565),i=r.n(c),u=r(216),l=r.n(u),d=r(589),p=r.n(d),A=r(890),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(A.Z,f),A.Z&&A.Z.locals&&A.Z.locals;var m=r(205),v=r.n(m),g=r(10),h=r.n(g),C=r(122),y=r.n(C);v()(),h()(y())})()})();
//# sourceMappingURL=bundle.js.map