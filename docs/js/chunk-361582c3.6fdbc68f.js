(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-361582c3"],{"5a1a":function(n,e,a){"use strict";a("fd91")},cded:function(n,e,a){"use strict";a.r(e);var t=a("7a23"),c={class:"main methods"},o=Object(t["f"])("pre",null,[Object(t["e"])("      "),Object(t["f"])("code",{class:"language-javascript"},"\n        // Example Code\n        var example = new Tokenizer({\n          url: '', // Optional - Only pass if using a different domain than your on\n          apikey: 'key here',\n          container: document.querySelector('#div container'),\n\n          // Callback to identify when iframe has been loaded\n          onLoad: () => {\n            console.log('iframe loaded')\n          },\n\n          // Callback to identify when a valid cc has been inputed\n          validCard: (card: object) => {\n            console.log(card)\n            // card.isValid // Boolean\n            // card.bin // Object of bin data\n\n            // If you need to check if surchargable\n            // Pass state and card bin data\n            var isSurchargable = example.isSurchargable(state, card.bin)\n            console.log(isSurchargable)\n          },\n\n          // Callback after payment was submitted\n          submission: (resp) => {\n            console.log(resp)\n          }\n        })\n\n        // Set expiration date on card payment\n        example.setExpDate('09/12')\n\n        // Submit payment\n        example.submit()\n      "),Object(t["e"])("\n    ")],-1);function i(n,e,a,i,r,d){return Object(t["o"])(),Object(t["d"])("div",c,[o])}var r=Object(t["g"])({name:"Methods",data:function(){return{}}});a("5a1a");r.render=i;e["default"]=r},fd91:function(n,e,a){}}]);
//# sourceMappingURL=chunk-361582c3.6fdbc68f.js.map