(self.webpackChunk=self.webpackChunk||[]).push([[920],{9649:(t,r,e)=>{"use strict";e.d(r,{j:()=>i});e(8309);var n=e(4529),o=e.n(n);function i(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id-dapp";new(o())("#"+t),new(o())("#"+r);var n=document.getElementById(t),i=document.getElementById(r),u=document.getElementById(e);n.addEventListener("change",(function(){var t=this.closest("form"),n=t.method,a=t.action,c=new XMLHttpRequest;c.withCredentials=!0,c.open(n,a,!0),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.onload=function(){if(this.status>=200&&this.status<400){var t=(new DOMParser).parseFromString(this.response,"text/html");u.innerHTML=t.querySelector("#"+e).innerHTML,new(o())("#"+r)}else console.log("Server error")},c.onerror=function(){console.log("Connection error")};var s=new FormData(t);s.set(i.name,""),c.send(s)}))}},9139:(t,r,e)=>{"use strict";var n=e(4529),o=e.n(n),i=e(9649);console.log("farming/form.js loaded"),new(o())("#strategy_lp_coin1"),new(o())("#strategy_lp_coin2"),(0,i.j)("strategy_lp_blockchain","strategy_lp_dapp","id-dapp")},9662:(t,r,e)=>{var n=e(614),o=e(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},9670:(t,r,e)=>{var n=e(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},3072:(t,r,e)=>{var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),u=e(8113),a=i.process,c=i.Deno,s=a&&a.versions||c&&c.version,p=s&&s.v8;p&&(o=(n=p.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},4374:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,r,e)=>{var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,r,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,s=a&&(!n||n&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:s}},1702:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.bind,u=o.call,a=n&&i.bind(u,u);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},8173:(t,r,e)=>{var n=e(9662),o=e(8554);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(t,r,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},614:t=>{t.exports=function(t){return"function"==typeof t}},8554:t=>{t.exports=function(t){return null==t}},111:(t,r,e)=>{var n=e(614),o="object"==typeof document&&document.all,i=void 0===o&&void 0!==o;t.exports=i?function(t){return"object"==typeof t?null!==t:n(t)||t===o}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(5005),o=e(614),i=e(7976),u=e(3307),a=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,a(t))}},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(3353),u=e(9670),a=e(4948),c=TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,f="enumerable",l="configurable",v="writable";r.f=n?i?function(t,r,e){if(u(t),r=a(r),u(e),"function"==typeof t&&"prototype"===r&&"value"in e&&v in e&&!e.writable){var n=p(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:l in e?e.configurable:n.configurable,enumerable:f in e?e.enumerable:n.enumerable,writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(u(t),r=a(r),u(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},7976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},2140:(t,r,e)=>{var n=e(6916),o=e(614),i=e(111),u=TypeError;t.exports=function(t,r){var e,a;if("string"===r&&o(e=t.toString)&&!i(a=n(e,t)))return a;if(o(e=t.valueOf)&&!i(a=n(e,t)))return a;if("string"!==r&&o(e=t.toString)&&!i(a=n(e,t)))return a;throw u("Can't convert object to primitive value")}},4488:(t,r,e)=>{var n=e(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},5465:(t,r,e)=>{var n=e(7854),o=e(3072),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.25.0",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},7908:(t,r,e)=>{var n=e(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:(t,r,e)=>{var n=e(6916),o=e(111),i=e(2190),u=e(8173),a=e(2140),c=e(5112),s=TypeError,p=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=u(t,p);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},6330:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),u=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:(t,r,e)=>{var n=e(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(2597),u=e(9711),a=e(6293),c=e(3307),s=o("wks"),p=n.Symbol,f=p&&p.for,l=c?p:p&&p.withoutSetter||u;t.exports=function(t){if(!i(s,t)||!a&&"string"!=typeof s[t]){var r="Symbol."+t;a&&i(p,t)?s[t]=p[t]:s[t]=c&&f?f(r):l(r)}return s[t]}},8309:(t,r,e)=>{var n=e(9781),o=e(6530).EXISTS,i=e(1702),u=e(3070).f,a=Function.prototype,c=i(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,p=i(s.exec);n&&!o&&u(a,"name",{configurable:!0,get:function(){try{return p(s,c(this))[1]}catch(t){return""}}})}},t=>{t.O(0,[529],(()=>{return r=9139,t(t.s=r);var r}));t.O()}]);