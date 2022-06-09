(()=>{"use strict";var r,n,e,o,t,a,A,i,c,p,d,s,C,l,u={890:(r,n,e)=>{e.d(n,{Z:()=>i});var o=e(537),t=e.n(o),a=e(645),A=e.n(a)()(t());A.push([r.id,"body {\r\n    background-color:rgb(214, 206, 186);\r\n    font-family: Arial, Helvetica, sans-serif;    \r\n}\r\n.container {\r\n    width: 900px;\r\n    height: 600px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    padding: 10px;\r\n}\r\n.heading {\r\n    text-align: center;\r\n}\r\n.textarea {\r\n    display: block;\r\n    width: 680px;\r\n    height: 200px;\r\n    margin: 20px auto;\r\n    padding: 10px;\r\n}\r\n.keyboard-container {\r\n    width: 700px;\r\n    height: 200px;\r\n    margin: 10px auto;\r\n    padding: 10px;\r\n}\r\n.keyboard {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    gap: 3px ;\r\n    \r\n}\r\n.btn{ \r\n    min-width: 40px;\r\n    height: 40px;\r\n    background-color: burlywood;\r\n    font-family: 'Courier New', Courier, monospace;   \r\n    font-size: 20px;   \r\n    font-weight: bold;\r\n    border-radius: 4px;\r\n    position: relative;\r\n    box-shadow: 5px 5px 5px burlywood;    \r\n    transition: all .3s;\r\n}\r\n.btn:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(239, 133, 57);\r\n    border-radius: 5px;\r\n}\r\n.Tab {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Del {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Backspace {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Caps {\r\n    min-width: 85px;\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Enter {\r\n    min-width: 105px;\r\n    background-color: rgb(213, 109, 35);\r\n\r\n}\r\n.Shift {\r\n    min-width: 100px;\r\n    background-color: rgb(213, 109, 35);\r\n\r\n}\r\n.Whitespace {\r\n    min-width: 270px;\r\n    content: '';\r\n    color: rgba(255,255,255,0);\r\n}\r\n.Ctrl {\r\n    max-width: 55px;\r\n    padding: 1px 2px;\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Alt {\r\n    width: 55px;\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Win {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.active {\r\n    background-color: rgb(239, 133, 57);\r\n    border-radius: 5px;\r\n    top: 2px;\r\n    left: 2px;\r\n}\r\n.clicked {\r\n    background-color: rgb(239, 133, 57);\r\n    border-radius: 5px;\r\n    top: 2px;\r\n    left: 2px;\r\n}\r\n.hello {\r\n    color:rgb(0, 46, 0);  \r\n    font-family: 'Courier New', Courier, monospace;      \r\n}\r\n.footer {\r\n    margin: 60px 100px;\r\n    text-align: right;\r\n}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA;IACI,mCAAmC;IACnC,yCAAyC;AAC7C;AACA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,SAAS;;AAEb;AACA;IACI,eAAe;IACf,YAAY;IACZ,2BAA2B;IAC3B,8CAA8C;IAC9C,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,iCAAiC;IACjC,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,mCAAmC;IACnC,kBAAkB;AACtB;AACA;IACI,mCAAmC;AACvC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,eAAe;IACf,mCAAmC;AACvC;AACA;IACI,gBAAgB;IAChB,mCAAmC;;AAEvC;AACA;IACI,gBAAgB;IAChB,mCAAmC;;AAEvC;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,0BAA0B;AAC9B;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,mCAAmC;AACvC;AACA;IACI,WAAW;IACX,mCAAmC;AACvC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,mCAAmC;IACnC,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;AACA;IACI,mCAAmC;IACnC,kBAAkB;IAClB,QAAQ;IACR,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,8CAA8C;AAClD;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB",sourcesContent:["body {\r\n    background-color:rgb(214, 206, 186);\r\n    font-family: Arial, Helvetica, sans-serif;    \r\n}\r\n.container {\r\n    width: 900px;\r\n    height: 600px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    padding: 10px;\r\n}\r\n.heading {\r\n    text-align: center;\r\n}\r\n.textarea {\r\n    display: block;\r\n    width: 680px;\r\n    height: 200px;\r\n    margin: 20px auto;\r\n    padding: 10px;\r\n}\r\n.keyboard-container {\r\n    width: 700px;\r\n    height: 200px;\r\n    margin: 10px auto;\r\n    padding: 10px;\r\n}\r\n.keyboard {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    gap: 3px ;\r\n    \r\n}\r\n.btn{ \r\n    min-width: 40px;\r\n    height: 40px;\r\n    background-color: burlywood;\r\n    font-family: 'Courier New', Courier, monospace;   \r\n    font-size: 20px;   \r\n    font-weight: bold;\r\n    border-radius: 4px;\r\n    position: relative;\r\n    box-shadow: 5px 5px 5px burlywood;    \r\n    transition: all .3s;\r\n}\r\n.btn:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(239, 133, 57);\r\n    border-radius: 5px;\r\n}\r\n.Tab {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Del {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Backspace {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Caps {\r\n    min-width: 85px;\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Enter {\r\n    min-width: 105px;\r\n    background-color: rgb(213, 109, 35);\r\n\r\n}\r\n.Shift {\r\n    min-width: 100px;\r\n    background-color: rgb(213, 109, 35);\r\n\r\n}\r\n.Whitespace {\r\n    min-width: 270px;\r\n    content: '';\r\n    color: rgba(255,255,255,0);\r\n}\r\n.Ctrl {\r\n    max-width: 55px;\r\n    padding: 1px 2px;\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Alt {\r\n    width: 55px;\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.Win {\r\n    background-color: rgb(213, 109, 35);\r\n}\r\n.active {\r\n    background-color: rgb(239, 133, 57);\r\n    border-radius: 5px;\r\n    top: 2px;\r\n    left: 2px;\r\n}\r\n.clicked {\r\n    background-color: rgb(239, 133, 57);\r\n    border-radius: 5px;\r\n    top: 2px;\r\n    left: 2px;\r\n}\r\n.hello {\r\n    color:rgb(0, 46, 0);  \r\n    font-family: 'Courier New', Courier, monospace;      \r\n}\r\n.footer {\r\n    margin: 60px 100px;\r\n    text-align: right;\r\n}"],sourceRoot:""}]);const i=A},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var A={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var p=0;p<r.length;p++){var d=[].concat(r[p]);o&&A[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),n.push(d))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */"),A=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(A).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var a={},A=[],i=0;i<r.length;i++){var c=r[i],p=o.base?c[0]+o.base:c[0],d=a[p]||0,s="".concat(p," ").concat(d);a[p]=d+1;var C=e(s),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==C)n[C].references++,n[C].updater(l);else{var u=t(l,o);o.byIndex=i,n.splice(i,0,{identifier:s,updater:u,references:1})}A.push(s)}return A}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var A=0;A<a.length;A++){var i=e(a[A]);n[i].references--}for(var c=o(r,t),p=0;p<a.length;p++){var d=e(a[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},g={};function b(r){var n=g[r];if(void 0!==n)return n.exports;var e=g[r]={id:r,exports:{}};return u[r](e,e.exports,b),e.exports}b.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return b.d(n,{a:n}),n},b.d=(r,n)=>{for(var e in n)b.o(n,e)&&!b.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},b.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),b.nc=void 0,r=b(379),n=b.n(r),e=b(795),o=b.n(e),t=b(569),a=b.n(t),A=b(565),i=b.n(A),c=b(216),p=b.n(c),d=b(589),s=b.n(d),C=b(890),(l={}).styleTagTransform=s(),l.setAttributes=i(),l.insert=a().bind(null,"head"),l.domAPI=o(),l.insertStyleElement=p(),n()(C.Z,l),C.Z&&C.Z.locals&&C.Z.locals,document.body.appendChild(function(){const r=document.createElement("div");r.className="container";const n=document.createElement("h1");n.className="heading",n.innerText="Введите целые числа через запятую",r.appendChild(n);const e=document.createElement("form");textArea.className="form",r.appendChild(e);const o=document.createElement("input");o.className="input",e.appendChild(o);const t=document.createElement("button");return t.className="button",t.innerText="ОК",e.appendChild(t),r}())})();
//# sourceMappingURL=bundle.js.map