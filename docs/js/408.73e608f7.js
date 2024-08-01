"use strict";(self["webpackChunkfluidpay_tokenizer"]=self["webpackChunkfluidpay_tokenizer"]||[]).push([[408],{507:function(e,t,n){n.d(t,{K:function(){return i}});const i="pub_0wUsHIlrkK1I6ADno5MfT10UjhR"},430:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function s(e){var t=a(e,"string");return"symbol"===i(t)?t:String(t)}function o(e,t,n){return t=s(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return u}});const r="{{formUrl}}",p="http://localhost:8082",l="/api/tokenizer";class u{constructor(e){if(o(this,"id",void 0),o(this,"apikey",void 0),o(this,"url",void 0),o(this,"amount",void 0),o(this,"iframe",void 0),o(this,"container",null),o(this,"settings",{id:"",apikey:"",amount:""}),o(this,"applePay",{btn:null}),o(this,"clickApplePay",(()=>{if(!ApplePaySession)return void console.warn("Apple Pay is not available");const e=this.settings?.payment?.applePay;if(!e)return void console.error("Apple Pay is missing from configuration");const t=["amex","chinaUnionPay","discover","interac","masterCard","privateLabel","visa","jcb","cartesBancaires","eftpos","electron","elo","maestro","vPay","mada"],n=new ApplePaySession(e.version||5,{countryCode:e.payment.countryCode,currencyCode:e.payment.currencyCode,total:e.payment.total,merchantCapabilities:e.payment.merchantCapabilities||["supports3DS"],supportedNetworks:e.payment.supportedNetworks||t,supportedCountries:e.payment.supportedCountries,lineItems:e.payment.lineItems,requiredBillingContactFields:e.payment.requiredBillingContactFields,requiredShippingContactFields:e.payment.requiredShippingContactFields});n.onvalidatemerchant=async t=>{fetch(`${this.url}/api/public/applepay/validatemerchant`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({PKeyCompany:e.key,AppleMerchantId:e.appleMerchantID,ValidationUrl:t.validationURL,domainName:e.domainName})}).then((e=>e.json())).then((e=>n.completeMerchantValidation(e))).catch((()=>{console.error("merchant validation failed"),n.completeMerchantValidation({error:"merchant validation failed"})}))},n.onpaymentauthorized=t=>{e.autoPay(t).then((e=>{this.submission({status:e}),"success"===e?n.completePayment(ApplePaySession.STATUS_SUCCESS):n.completePayment(ApplePaySession.STATUS_FAILURE)})).catch((()=>{n.completePayment(ApplePaySession.STATUS_FAILURE)}))};try{n.begin()}catch(i){console.error(i)}})),o(this,"onLoad",(()=>{})),o(this,"validCard",(()=>{})),o(this,"achOnChange",(()=>{})),o(this,"magStripeSwipe",(()=>{})),o(this,"onPaymentChange",(()=>{})),o(this,"submission",(()=>{})),o(this,"errorPass",(()=>{})),!e.apikey)throw new Error("apikey must be set!");this.apikey=e.apikey,this.url=e.url&&""!==e.url?e.url:r,e.amount&&(this.amount=e.amount),this.id=this.uuid(),"object"===typeof e.settings&&(this.settings=e.settings),e.onLoad&&(this.onLoad=e.onLoad),e.validCard&&(this.validCard=e.validCard),e.achOnChange&&(this.achOnChange=e.achOnChange),e.magStripeSwipe&&(this.magStripeSwipe=e.magStripeSwipe),e.onPaymentChange&&(this.onPaymentChange=e.onPaymentChange),e.submission&&(this.submission=e.submission),window.addEventListener("message",(e=>{this.messageListener(e)})),this.iframe=this.buildIframe(),this.waitForContainer(e.container,(e=>{if(!e)throw new Error("Could not find container");this.iframe.onload=()=>{this.settings.id=this.id,this.settings.apikey=this.apikey,this.settings.amount=this.amount,this.setSettings(this.settings),this.onLoad()},this.container=e,this.container.appendChild(this.iframe),this.initApplePay(e)}))}create(){}getApiKeyURL(){return this.getTokenizerURL()+"/"+this.apikey}getTokenizerURL(){const e=this.url;return window.location.href.includes("localhost")?p.replace(/\/$/,"")+l:e.replace(/\/$/,"")+l}initApplePay(e){if(!this.settings?.payment?.types?.includes("apple_pay")&&!this.settings?.payment?.applePay)return;document.head.insertAdjacentHTML("beforeend","\n    <style>\n      apple-pay-button {\n          --apple-pay-button-width: 100%;\n          --apple-pay-button-height: 20px;\n          border-radius: 4px;\n          border: solid 1px #DCDEE2;\n      }\n    </style>\n    ");const t=document.createElement("script"),n="https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js";t.setAttribute("src",n),t.setAttribute("async",""),t.setAttribute("crossorigin",""),document.head.appendChild(t),this.populateApplePayBtn(e)}populateApplePayBtn(e){this.applePay.btn=document.createElement("apple-pay-button"),this.applePay.btn.setAttribute("buttonstyle","white"),this.applePay.btn.setAttribute("type","pay"),this.applePay.btn.setAttribute("locale","en-US"),this.applePay.btn.onclick=this.clickApplePay,e.appendChild(this.applePay.btn)}hideAutoPayButtons(e){""!==e&&"apple_pay"!==e?(this.applePay.btn?.remove(),this.applePay.btn=null):this.waitForContainer(this.container,(e=>{e&&(this.applePay.btn||this.populateApplePayBtn(e))}))}isSurchargeable(e,t){const n=["CO","CT","ME","MA"];return""!==e&&(-1===n.indexOf(e.toUpperCase())&&!(!t||!t.card_type||"credit"!==t.card_type.toLowerCase()))}submit(e){this.getGuardianData().then((e=>{e.events?.length&&this.postMessage({event:"setGuardian",data:e})})).then((()=>{this.postMessage({event:"submit",data:{amount:e}})})).catch((()=>{this.postMessage({event:"submit",data:{amount:e}})}))}setExpDate(e){this.postMessage({event:"setExpDate",data:{value:e}})}setError(e){this.postMessage({event:"setError",data:{input:e}})}postMessage(e){const t=this.iframe.contentWindow;if(null!==t){const n=JSON.stringify(e);t.postMessage(n,"*")}}uuid(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}waitForContainer(e,t){if(!e)return void t(null);const n=Date.now(),i=1e3,a=1e4;(function s(){"string"!==typeof e||null===document.querySelector(e)?"string"!==typeof e&&e?t(e):setTimeout((()=>{a&&Date.now()-n>a?t(null):s()}),i):t(document.querySelector(e))})()}buildIframe(){const e=document.createElement("iframe");return e.src=this.getApiKeyURL(),e.setAttribute("allow","payment"),e.style.display="block",e.style.border="none",e.style.margin="0px",e.style.padding="0px",e.style.width="1px",e.style.minWidth="100%",e.style.height="30px",e.style.overflow="hidden",e.style.backgroundColor="transparent",e.style.transition="all .3s ease-out",e.frameBorder="0",e}setSettings(e){this.postMessage({event:"setSettings",data:e})}updateHeight(e){e&&(this.iframe.style.height=e+"px")}getGuardianData(){const e=window.Guardian;return e&&e.getData&&"function"===typeof e.getData?e.getData():Promise.reject()}messageListener(e){try{const t=JSON.parse(e.data),n=t.id;if(this.id!==n)return;const i=t.event,a=t.data;if(!i)return;switch(i){case"submission":this.submission(a);break;case"validCard":this.validCard(a);break;case"achOnChange":this.achOnChange(a);break;case"magStripeSwipe":this.magStripeSwipe(a);break;case"onPaymentChange":this.onPaymentChange(a.type),this.hideAutoPayButtons(a.type);break;case"setHeight":this.updateHeight(a.height);break}}catch(e){}}}},408:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(252),a=n(577);const s={class:"main home"},o=(0,i._)("pre",null,[(0,i.Uk)("      "),(0,i._)("code",{class:"language-javascript"},"\n        // Example Code\n        var example = new Tokenizer({\n          url: '', // Optional - Only pass if using a different domain than your on\n          apikey: 'key here',\n          container: document.querySelector('#div container'),\n          submission: (resp) => {\n            console.log(resp)\n          }\n        })\n\n        // Example submission\n        function submit() {\n          example.submit() // Use submission callback to deal with response\n        }\n      "),(0,i.Uk)("\n    ")],-1),r=(0,i._)("pre",null,[(0,i.Uk)("      "),(0,i._)("code",{class:"language-html"},'\n        // Example Html\n        <div id="container"></div>\n        <button onclick="submit()">Submit</button>\n      '),(0,i.Uk)("\n    ")],-1),p={class:"section example"},l={ref:"example"};function u(e,t,n,u,c,h){return(0,i.wg)(),(0,i.iD)("div",s,[o,r,(0,i._)("div",p,[(0,i._)("div",l,null,512),(0,i._)("button",{onClick:t[0]||(t[0]=t=>e.example.submit("1.00"))}," Pay "),(0,i._)("pre",null,(0,a.zw)(e.exampleResponse),1),(0,i._)("pre",null,(0,a.zw)(e.validCard),1)])])}var c=n(430),h=n(507),d=(0,i.aZ)({name:"Home",data(){return{example:null,exampleResponse:null,validCard:null}},mounted(){this.example=new c.Z({apikey:h.K,container:"#latediv",settings:{paay:{sandbox:!1}},submission:e=>{this.exampleResponse=e},validCard:e=>{this.validCard=e}});var e=this.$refs.example,t=document.createElement("div");t.id="latediv",setTimeout((()=>{e.appendChild(t)}),100)}}),m=n(744);const y=(0,m.Z)(d,[["render",u]]);var b=y}}]);
//# sourceMappingURL=408.73e608f7.js.map