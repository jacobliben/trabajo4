(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/receiving_shipping_order/receiving_shipping_order"],{2136:function(t,e,n){"use strict";(function(t){n("c5c7");r(n("66fd"));var e=r(n("9820"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"2d77":function(t,e,n){},3204:function(t,e,n){"use strict";n.r(e);var r=n("ad09"),i=n("cdc8");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("582e");var a,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"6f0a537a",null,!1,r["a"],a);e["default"]=c.exports},"36e8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=o(n("3204"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return f(t)||s(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){l(o,r,i,a,u,"next",t)}function u(t){l(o,r,i,a,u,"throw",t)}a(void 0)}))}}var _={data:function(){return{receiving_shipping_order_list:[],id_token:"",show_not_found:!1,now_state:this.transporte_state,queryParams:{pageNum:1,pageSize:10}}},props:["transporte_state"],components:{infoNotFound:i.default},mounted:function(){console.log(this.now_state,"955"),t.setNavigationBarTitle({title:"".concat(this.now_state.text)}),this.getReceivingShippingOrderList()},methods:{upper:function(t){},lower:function(t){this.queryParams.pageNum+=this.queryParams.pageSize,this.getReceivingShippingOrderList()},phoneCall:function(e){t.makePhoneCall({phoneNumber:e})},goAcceptShippingOrder:function(e){var n=this;t.setStorageSync("accepted_shipping_orders",e),"运单接收"===this.now_state.text?t.navigateTo({url:"/pages/accept_shippig_order/accept_shippig_order?btn_title=".concat(n.now_state.btn)}):"分配运力"===this.now_state.text&&t.navigateTo({url:"/pages/choosing_driver/choosing_driver?btn_title=".concat(n.now_state.btn)})},copy:function(e){t.setClipboardData({data:e,success:function(){t.showToast({title:"copy"})}})},getReceivingShippingOrderList:function(){var e=this;return p(r.default.mark((function n(){var i,o,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.queryParams.waybillStatus=e.now_state.waybillStatus,i=e.queryParams,o=t.getStorageSync("token"),n.next=5,e.$request({url:"/app/waybill/list",header:{Authorization:o},data:i});case 5:if(u=n.sent,0!=u.data.total){n.next=9;break}return setTimeout((function(){e.show_not_found=!0}),30),n.abrupt("return");case 9:e.receiving_shipping_order_list.length<u.data.total?(e.receiving_shipping_order_list=[].concat(a(e.receiving_shipping_order_list),a(u.data.rows)),e.show_not_found=!1):t.showToast({title:"没有更多的信息了",icon:"none"}),t.setStorageSync("receiving_shipping_order_list",e.receiving_shipping_order_list);case 11:case"end":return n.stop()}}),n)})))()}}};e.default=_}).call(this,n("543d")["default"])},"3cfb":function(t,e,n){"use strict";var r=n("6037"),i=n.n(r);i.a},"582e":function(t,e,n){"use strict";var r=n("2d77"),i=n.n(r);i.a},6037:function(t,e,n){},9820:function(t,e,n){"use strict";n.r(e);var r=n("f1d9"),i=n("d2cd");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3cfb");var a,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"28de2476",null,!1,r["a"],a);e["default"]=c.exports},ad09:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},cdc8:function(t,e,n){"use strict";n.r(e);var r=n("d344"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},d2cd:function(t,e,n){"use strict";n.r(e);var r=n("36e8"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},d344:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},methods:{}};e.default=r},f1d9:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["2136","common/runtime","common/vendor"]]]);