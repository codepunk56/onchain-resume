(this["webpackJsonponchain-resume"]=this["webpackJsonponchain-resume"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n.n(r),a=n(8),s=n.n(a),i=(n(14),n(9)),o=n(1),u=n.n(o),h=n(3),d=n(6),l=(n(16),n(0));var j=function(){var t=Object(r.useState)(""),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),o=s[0],j=s[1],p=Object(r.useState)(""),f=Object(d.a)(p,2),b=f[0],x=f[1];function O(){return(O=Object(h.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(e.target.value);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e){var n="";return"mainnet"!=e&&(n="-".concat(e)),"https://api".concat(n,".etherscan.io/api?module=account&action=txlist&address=").concat(t,"&startblock=0&endblock=99999999&apikey=").concat("QKASTDMZF1KG4EU9X8JEHQ8979SSPS996H")}function v(t){return k.apply(this,arguments)}function k(){return k=Object(h.a)(u.a.mark((function t(e){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=m(n,e),c=[],x("Loading ".concat(e," data")),t.next=5,fetch(r).then((function(t){return t.json()})).then(function(){var t=Object(h.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((a=n.result).length>0)){t.next=6;break}if(!((c=a.filter((function(t){return""!=t.contractAddress})).map((function(t){return t.contractAddress}))).length>0)){t.next=6;break}return t.next=6,Promise.all(c.map(function(){var t=Object(h.a)(u.a.mark((function t(n,c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=m(n,e),t.next=3,fetch(r).then((function(t){return t.json()})).then((function(t){j((function(r){return[].concat(Object(i.a)(r),[{network:e,contractAddress:n,transactionsCount:t.result.length}])}))}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function g(){return(g=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(""),j([]),t.next=4,v("mainnet");case 4:return t.next=6,v("ropsten");case 6:return t.next=8,v("rinkeby");case 8:return t.next=10,v("kovan");case 10:return t.next=12,v("goerli");case 12:x("");case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)("div",{className:"input-section",children:[Object(l.jsx)("input",{onChange:function(t){return O.apply(this,arguments)},placeholder:"Ethereum address"}),Object(l.jsx)("button",{onClick:function(){return g.apply(this,arguments)},disabled:0!=b.length,children:"Submit "})]}),b.length>0&&Object(l.jsx)("div",{className:"loading-text",children:b}),o.length>0&&Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Network"}),Object(l.jsx)("th",{children:"Contract address"}),Object(l.jsx)("th",{children:"No of txns"})]})}),Object(l.jsx)("tbody",{children:o.map((function(t,e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.network}),Object(l.jsx)("td",{children:t.contractAddress}),Object(l.jsx)("td",{children:t.transactionsCount})]},e)}))})]})]})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.5b332133.chunk.js.map