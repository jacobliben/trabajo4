(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add_car_boss/add_car_boss"],{2797:function(e,t,n){},6039:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{received_msg:"",items:[{value:"123",tel:"",name:"自己承运"},{value:"USA",tel:"139XXXX6153",name:"张大明"},{value:"CHN",tel:"133XXXX2187",name:"李小赵"},{value:"BRA",tel:"133XXXX2187",name:"王自钱"}]}},methods:{checkboxChange:function(e){var t=this.items,n=e.detail.value;console.log(e);for(var a=0,c=t.length;a<c;++a){var u=t[a];n.includes(u.value)?this.$set(u,"checked",!0):this.$set(u,"checked",!1)}},requestAddCarBoss:function(){e.connectSocket({url:"ws://echo.websocket.org"}),e.onSocketOpen((function(t){!0,e.sendSocketMessage({data:"您好，黄贤勇现在添加您为车老板，您可以接受或者拒绝"}),e.onSocketMessage((function(e){console.log("收到服务器内容："+e.data)}))}))}}};t.default=n}).call(this,n("543d")["default"])},"75f2":function(e,t,n){"use strict";(function(e){n("c5c7");a(n("66fd"));var t=a(n("7bc7"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7bc7":function(e,t,n){"use strict";n.r(t);var a=n("be8a"),c=n("ae33");for(var u in c)"default"!==u&&function(e){n.d(t,e,(function(){return c[e]}))}(u);n("cba5");var o,r=n("f0c5"),s=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"3fd331d6",null,!1,a["a"],o);t["default"]=s.exports},ae33:function(e,t,n){"use strict";n.r(t);var a=n("6039"),c=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=c.a},be8a:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var c=function(){var e=this,t=e.$createElement;e._self._c},u=[]},cba5:function(e,t,n){"use strict";var a=n("2797"),c=n.n(a);c.a}},[["75f2","common/runtime","common/vendor"]]]);