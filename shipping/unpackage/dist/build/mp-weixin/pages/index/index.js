(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"46e0":function(e,t,n){"use strict";var i=n("e827"),o=n.n(i);o.a},"5c38":function(e,t,n){"use strict";(function(e){n("c5c7");i(n("66fd"));var t=i(n("effb"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"8df3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a")),o=n("2f62"),a=r(n("b8a8"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,i,o,a,r){try{var c=e[a](r),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(i,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function r(e){c(a,i,o,r,s,"next",e)}function s(e){c(a,i,o,r,s,"throw",e)}r(void 0)}))}}var u,l,f,d,g,p=function(){n.e("components/min-badge/min-badge").then(function(){return resolve(n("462c"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/cmd-notice-bar/cmd-notice-bar").then(function(){return resolve(n("a63d"))}.bind(null,n)).catch(n.oe)},_={data:function(){return{title:"",title2:"",show_shipping_list:!0,shipping_info_list:[],notice_message:"您好，黄贤勇现在添加您为车老板，您可以接受或者拒绝",show_notice:!0,distance_to_origin:[],queryParams:{pageNum:1,pageSize:10}}},computed:(0,o.mapState)(["hasLogin","uerInfo"]),components:{cmdNoticeBar:h,minBadge:p},onLoad:function(){},onShow:function(){try{e.removeStorageSync("nav_state")}catch(n){}var t=this;this.gotRouter(),this.user=e.getStorageSync("user_info"),this.user&&void 0!=this.user&&null!=this.user||e.navigateTo({url:"/pages/login/login"}),this.shipping_info_list=[{place_of_delivery:"南京栖霞",place_of_destiny:"徐州下淀",goods:"润滑油 500吨",vehicle:"13米高栏车",price_num:9800},{place_of_delivery:"上海外高桥",place_of_destiny:"徐州杨庄",goods:"车架 50吨",vehicle:"10米高栏车",price_num:7800}],this.getShippingInfoList();t=this;t.shipping_info_list&&t.shipping_info_list.length>0&&e.getLocation({type:"gcj02",geocode:!0,success:function(n){t.locationValue=n,u=n.latitude,l=n.longitude;for(var i=0;i<t.shipping_info_list.length;i++)e.request({url:"https://restapi.amap.com/v3/geocode/geo?address=".concat(t.shipping_info_list[i].iscmShipper.shipperAddress,"&key=ae8b30ff7c227fb962010579230bf568"),success:function(n){f=n.data.geocodes[0].location.split(","),d=parseFloat(f[1]),g=parseFloat(f[0]),e.request({url:"https://restapi.amap.com/v3/direction/driving?origin=".concat(l,"%2C").concat(u,"&destination=").concat(g,"%2C").concat(d,"&key=ae8b30ff7c227fb962010579230bf568"),success:function(e){var n=parseFloat(e.data.route.paths[0].distance)/1e3;n=n.toFixed(2),t.distance_to_origin.push(n)}})}})},fail:function(n){e.showToast({title:"获取地址失败",icon:"none"}),t.locationValue=n}})},methods:{requestAndroidPermission:function(t){return s(i.default.mark((function n(){var o,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.default.requestAndroidPermission(t);case 2:o=n.sent,r=1==o?"已获得授权":0==o?"未获得授权":"被永久拒绝权限",e.showModal({content:t+r,showCancel:!1});case 5:case"end":return n.stop()}}),n)})))()},gotRouter:function(){var e=this;return s(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$getRouters({});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},getShippingInfoList:function(){var t=this;return s(i.default.mark((function n(){var o,a,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.queryParams.waybillStatus=t.$waitAccept,o=t.queryParams,a=e.getStorageSync("token"),n.next=5,t.$request({url:"/app/waybill/list",header:{Authorization:a},data:o});case 5:if(r=n.sent,r.data.rows&&0!=r.data.rows.length){n.next=11;break}return t.show_shipping_list=!1,n.abrupt("return");case 11:r.data.rows.length>2?t.shipping_info_list=r.data.rows.splice(2):t.shipping_info_list=r.data.rows;case 12:case"end":return n.stop()}}),n)})))()},goMessage:function(){e.navigateTo({url:"/pages/info_center/info_center"})},goShippingOrder:function(){e.switchTab({url:"/pages/shipping_order/shipping_order"})},noticeOk:function(){this.show_notice=!1,e.navigateTo({url:"/pages/about_car_boss/about_car_boss"})},goDriverHome:function(){this.show_notice=!1,e.navigateTo({url:"/pages/driver_home/driver_home"})},goDespatching:function(){e.setStorageSync("nav_state","dispatching"),e.switchTab({url:"/pages/way_bill/way_bill"})},goCalculatingKm:function(){e.navigateTo({url:"/pages/calc_miles/calc_miles"})},goReceiving:function(){e.setStorageSync("nav_state","receiving"),e.switchTab({url:"/pages/way_bill/way_bill"})},goClientService:function(){e.navigateTo({url:"/pages/client_service/client_service"})},goLoading:function(){e.setStorageSync("nav_state","loading"),e.switchTab({url:"/pages/way_bill/way_bill"})},goOrderReceiving:function(){e.setStorageSync("nav_state","order-receiving"),e.switchTab({url:"/pages/shipping_order/shipping_order"})},goOrderDistributing:function(){e.setStorageSync("nav_state","order-distributing"),e.switchTab({url:"/pages/shipping_order/shipping_order"})},letsScan:function(){var t=this,n=e.getStorageSync("token");e.scanCode({onlyFromCamera:!0,success:function(){var e=s(i.default.mark((function e(o){var a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("条码类型："+o.scanType),console.log("条码内容："+o.result),a=3,e.next=5,t.$request({url:"/loginByQrCode/".concat(o.result,"/").concat(a),header:{Authorization:n}});case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));function o(t){return e.apply(this,arguments)}return o}()})},phoneCall:function(){e.makePhoneCall({phoneNumber:"051687739070"})},logout:function(){try{e.removeStorageSync("token"),e.removeStorageSync("user_info"),this.user=""}catch(t){}try{e.clearStorageSync()}catch(t){}}}};t.default=_}).call(this,n("543d")["default"])},b04b:function(e,t,n){"use strict";n.r(t);var i=n("8df3"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},c255:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={minBadge:function(){return n.e("components/min-badge/min-badge").then(n.bind(null,"462c"))}},o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},e827:function(e,t,n){},effb:function(e,t,n){"use strict";n.r(t);var i=n("c255"),o=n("b04b");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("46e0");var r,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"3a7bef48",null,!1,i["a"],r);t["default"]=s.exports}},[["5c38","common/runtime","common/vendor"]]]);