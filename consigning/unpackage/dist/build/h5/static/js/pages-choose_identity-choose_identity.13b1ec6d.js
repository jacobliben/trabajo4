(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-choose_identity-choose_identity"],{"2bf5":function(i,n,t){"use strict";t.r(n);var e=t("6303"),r=t("7201");for(var a in r)"default"!==a&&function(i){t.d(n,i,(function(){return r[i]}))}(a);t("d21a");var o,s=t("f0c5"),c=Object(s["a"])(r["default"],e["b"],e["c"],!1,null,"361f66eb",null,!1,e["a"],o);n["default"]=c.exports},"316b":function(i,n,t){var e=t("24fb");n=e(!1),n.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.primer-frase[data-v-361f66eb]{width:90%;margin-left:5%;margin-bottom:%?30?%}.individual-driver[data-v-361f66eb]{border:%?1?% solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:90%;margin-left:5%;margin-bottom:%?20?%;padding:%?10?%}.individual-driver .left-side[data-v-361f66eb]{width:70%}.individual-driver .left-side .title[data-v-361f66eb]{font-size:%?30?%;font-weight:700;margin-bottom:%?10?%}.individual-driver .left-side .desc[data-v-361f66eb]{font-size:%?25?%;margin-bottom:%?10?%}.driver-img[data-v-361f66eb]{width:%?200?%;height:%?200?%}',""]),i.exports=n},6303:function(i,n,t){"use strict";var e;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return e}));var r=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("v-uni-view",[t("v-uni-view",{staticClass:"primer-frase"},[i._v("确实角色后，不能进行更改，请根据您的实际身份进行选择哦！")]),t("v-uni-view",{staticClass:"individual-driver radius",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.showDriverModal.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"left-side"},[t("v-uni-view",{staticClass:"title"},[i._v("我是个人托运人")]),t("v-uni-view",{staticClass:"desc"},[i._v("由个体本人托运货物，用本人银行卡结算费用")])],1),t("v-uni-view",[t("v-uni-image",{staticClass:"driver-img",attrs:{src:"/static/men.png",mode:""}})],1)],1),t("v-uni-view",{staticClass:"individual-driver radius",on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.showCompanyModal.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"left-side"},[t("v-uni-view",{staticClass:"title"},[i._v("我是企业托运人")]),t("v-uni-view",{staticClass:"desc"},[i._v("以公司名义注册平台高级会员,且具有开票资质")])],1),t("v-uni-view",[t("v-uni-image",{staticClass:"driver-img",attrs:{src:"/static/logistic-company.png",mode:""}})],1)],1)],1)},a=[]},7201:function(i,n,t){"use strict";t.r(n);var e=t("a626"),r=t.n(e);for(var a in e)"default"!==a&&function(i){t.d(n,i,(function(){return e[i]}))}(a);n["default"]=r.a},a626:function(i,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},onLoad:function(){try{uni.clearStorageSync()}catch(i){}},onShow:function(){try{uni.clearStorageSync()}catch(i){}},methods:{showDriverModal:function(){uni.showModal({content:"确认选择个人托运人，选择后不可更换！",cancelText:"取消",confirmText:"确定",success:function(i){i.confirm?(uni.setStorageSync("in_personal_consignor_registering",!0),uni.setStorageSync("in_company_consignor_registering",!1),uni.navigateTo({url:"/pages/register/register"})):i.cancel&&console.log("用户点击取消")}})},showCompanyModal:function(){uni.showModal({content:"确认选择企业托运人，选择后不可更换！",cancelText:"取消",confirmText:"确定",success:function(i){i.confirm?(uni.setStorageSync("in_personal_consignor_registering",!1),uni.setStorageSync("in_company_consignor_registering",!0),uni.navigateTo({url:"/pages/register/register"})):i.cancel&&console.log("用户点击取消")}})}}};n.default=e},b1ce:function(i,n,t){var e=t("316b");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var r=t("4f06").default;r("002ba35a",e,!0,{sourceMap:!1,shadowMode:!1})},d21a:function(i,n,t){"use strict";var e=t("b1ce"),r=t.n(e);r.a}}]);