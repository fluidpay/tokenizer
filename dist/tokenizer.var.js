var Tokenizer=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";e.__esModule=!0;var i=function(){function t(t){var e,n=this;if(this.settings={id:"",apikey:"",amount:"",paaySandbox:!1},this.onLoad=function(){},this.validCard=function(){},this.onPaymentChange=function(){},this.submission=function(){},this.validate(t),!t.apikey)throw new Error("apikey must be set!");this.apikey=t.apikey,this.url=t.url&&""!==t.url?t.url:"{{formUrl}}",t.url||-1===window.location.href.indexOf("localhost")?this.url=this.url.replace(/\/$/,"")+"/api/tokenizer":this.url="http://localhost:8082".replace(/\/$/,"")+"/api/tokenizer",this.url+="/"+this.apikey,t.amount&&(this.amount=t.amount),this.paaySandbox=!1,t.paaySandbox&&(this.paaySandbox=t.paaySandbox),e="string"==typeof t.container?document.querySelector(t.container):t.container,this.container=e,this.id=this.uuid(),"object"==typeof t.settings&&(this.settings=t.settings),t.onLoad&&(this.onLoad=t.onLoad),t.validCard&&(this.validCard=t.validCard),t.onPaymentChange&&(this.onPaymentChange=t.onPaymentChange),t.submission&&(this.submission=t.submission),window.addEventListener("message",(function(t){n.messageListener(t)})),this.iframe=this.buildIframe(),this.iframe.onload=function(){n.settings.id=n.id,n.settings.apikey=n.apikey,n.settings.amount=n.amount,n.settings.paaySandbox=n.paaySandbox,n.setSettings(n.settings),n.onLoad()},this.container.appendChild(this.iframe)}return t.prototype.create=function(){},t.prototype.validate=function(t){if(!("string"==typeof t.container?document.querySelector(t.container):t.container))throw new Error("Could not find container")},t.prototype.isSurchargeable=function(t,e){return""!==t&&(-1===["CO","CT","ME","MA"].indexOf(t.toUpperCase())&&!(!e||!e.card_type||"credit"!==e.card_type.toLowerCase()))},t.prototype.submit=function(t){this.postMessage({event:"submit",data:{amount:t}})},t.prototype.setExpDate=function(t){this.postMessage({event:"setExpDate",data:{value:t}})},t.prototype.postMessage=function(t){var e=this.iframe.contentWindow;if(null!==e){var n=JSON.stringify(t);e.postMessage(n,"*")}},t.prototype.uuid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},t.prototype.buildIframe=function(){var t=document.createElement("iframe");return t.src=this.url,t.style.display="block",t.style.border="none",t.style.margin="0px",t.style.padding="0px",t.style.width="1px",t.style.minWidth="100%",t.style.height="30px",t.style.overflow="hidden",t.style.backgroundColor="transparent",t.style.transition="all .3s ease-out",t.frameBorder="0",t},t.prototype.setSettings=function(t){this.postMessage({event:"setSettings",data:t})},t.prototype.updateHeight=function(t){t&&(this.iframe.style.height=t+"px")},t.prototype.messageListener=function(t){try{var e=JSON.parse(t.data),n=e.id;if(this.id!==n)return;var i=e.event,o=e.data;if(!i)return;switch(i){case"submission":this.submission(o);break;case"validCard":this.validCard(o);break;case"onPaymentChange":this.onPaymentChange(o.type);break;case"setHeight":this.updateHeight(o.height)}}catch(t){}},t}();e.default=i}]).default;