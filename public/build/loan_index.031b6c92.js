(self.webpackChunk=self.webpackChunk||[]).push([[274],{485:(t,e,r)=>{r(9693),r(228),r(7522),console.log("loan index.js ok.");var s=function(t){var e=t.currentTarget.closest("tr"),r=t.currentTarget.dataset.id;if(e.classList.contains("shown")){document.getElementById("info"+r).remove(),t.currentTarget.innerHTML="+",e.classList.remove("shown")}else{var s=t.currentTarget.dataset.ajax,n=new XMLHttpRequest;n.withCredentials=!0,n.open("POST",s,!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onload=function(){if(this.status>=200&&this.status<400){console.log(this.response);var t=document.createElement("tr");t.id="info"+r;var s=document.createElement("td");s.colSpan=9,s.innerHTML=this.response,t.appendChild(s),e.after(t),e.classList.add("shown")}else console.log("Server error")},n.onerror=function(){console.log("Connection error")},n.send(),t.currentTarget.innerHTML="-"}};document.querySelectorAll(".infos_pos").forEach((function(t){return t.addEventListener("click",s)}))},7612:(t,e,r)=>{"use strict";var s=r(2960).forEach,n=r(6834)("forEach");t.exports=n?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},6834:(t,e,r)=>{"use strict";var s=r(3689);t.exports=function(t,e){var r=[][t];return!!r&&s((function(){r.call(null,e||function(){return 1},1)}))}},6338:t=>{"use strict";t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},3265:(t,e,r)=>{"use strict";var s=r(6420)("span").classList,n=s&&s.constructor&&s.constructor.prototype;t.exports=n===Object.prototype?void 0:n},5073:(t,e,r)=>{"use strict";var s=r(3043),n=r(926);t.exports=s?{}.toString:function(){return"[object "+n(this)+"]"}},9693:(t,e,r)=>{"use strict";var s=r(9989),n=r(7612);s({target:"Array",proto:!0,forced:[].forEach!==n},{forEach:n})},228:(t,e,r)=>{"use strict";var s=r(3043),n=r(1880),o=r(5073);s||n(Object.prototype,"toString",o,{unsafe:!0})},7522:(t,e,r)=>{"use strict";var s=r(9037),n=r(6338),o=r(3265),i=r(7612),a=r(5773),c=function(t){if(t&&t.forEach!==i)try{a(t,"forEach",i)}catch(e){t.forEach=i}};for(var u in n)n[u]&&c(s[u]&&s[u].prototype);c(o)}},t=>{t.O(0,[702,401],(()=>{return e=485,t(t.s=e);var e}));t.O()}]);