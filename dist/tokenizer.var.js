var Tokenizer=function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";e.__esModule=!0;var n="{{formUrl}}",r="http://localhost:8082",o="/api/tokenizer",s=function(){function t(t){var e,i=this;if(this.settings={id:"",apikey:""},this.onLoad=function(){},this.submission=function(){},this.validate(t),!t.apikey)throw new Error("apikey must be set!");this.apikey=t.apikey,this.url=t.url||n,t.url||-1===window.location.href.indexOf("localhost")?this.url=this.url.replace(/\/$/,"")+o:this.url=r.replace(/\/$/,"")+o,this.url+="/"+this.apikey,e="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=e,this.id=this.uuid(),"object"==typeof t.settings&&(this.settings=t.settings),t.onLoad&&(this.onLoad=t.onLoad),t.submission&&(this.submission=t.submission),window.addEventListener("message",function(t){i.messageListener(t)}),this.iframe=this.buildIframe(),this.iframe.onload=function(){i.settings.id=i.id,i.settings.apikey=i.apikey,i.setSettings(i.settings),i.onLoad()},this.container.appendChild(this.iframe)}return t.prototype.create=function(){},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.submit=function(){this.postMessage({event:"submit",data:{}})},t.prototype.setExpDate=function(t){this.postMessage({event:"setExpDate",data:{value:t}})},t.prototype.postMessage=function(t){var e=this.iframe.contentWindow;if(null!==e){var i=JSON.stringify(t);e.postMessage(i,"*")}},t.prototype.uuid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},t.prototype.buildIframe=function(){var t=document.createElement("iframe");return t.src=this.url,t.style.display="block",t.style.border="none",t.style.margin="0px",t.style.padding="0px",t.style.width="1px",t.style.minWidth="100%",t.style.height="30px",t.style.overflow="hidden",t.style.backgroundColor="transparent",t.style.transition="all .3s ease-out",t.frameBorder="0",t},t.prototype.setSettings=function(t){this.postMessage({event:"setSettings",data:t})},t.prototype.updateHeight=function(t){t&&(this.iframe.style.height=t+"px")},t.prototype.messageListener=function(t){try{var e=JSON.parse(t.data),i=e.id;if(this.id!==i)return;var n=e.event,r=e.data;if(!n)return;switch(n){case"submission":this.submission(r);break;case"setHeight":this.updateHeight(r.height)}}catch(t){}},t}();e.default=s}]).default;