(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/change_phone/change_phone"],{4824:function(e,t,n){"use strict";(function(e){n("c5c7");o(n("66fd"));var t=o(n("b1ab"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"4c9c":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"77ec":function(e,t,n){"use strict";n.r(t);var o=n("eb98"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},"89e9":function(e,t,n){"use strict";var o=n("9f5b"),r=n.n(o);r.a},"9f5b":function(e,t,n){},b1ab:function(e,t,n){"use strict";n.r(t);var o=n("4c9c"),r=n("77ec");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("89e9");var c,u=n("f0c5"),i=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"c37bf404",null,!1,o["a"],c);t["default"]=i.exports},eb98:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o,r,a,c){try{var u=e[a](c),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function u(e){a(c,o,r,u,i,"next",e)}function i(e){a(c,o,r,u,i,"throw",e)}u(void 0)}))}}var u=n("6802"),i={data:function(){return{old_phone:"",user:"",tel_num2:"",veri_code:"",phone:"",code:"",codeDisabled:!0,codeText:"获取",is_correct:!1}},onLoad:function(){this.user=e.getStorageSync("user_info"),this.old_phone=this.user.data.user.phonenumber},methods:{getNewMobile:function(e){this.tel_num2=e.target.value,this.phone=e.target.value},checkPhone:function(){var t=this;return c(o.default.mark((function n(){var r,a;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.phone,11!=t.phone.length){n.next=8;break}return n.next=4,t.$request({url:"/validUser",method:"POST",data:{mobile:r}});case 4:a=n.sent,"该手机号尚未注册"==a.data.msg?(e.showToast({title:"该手机号可以被注册",icon:"none"}),t.codeDisabled=!1):(e.showToast({title:"该手机号已被注册过了！",icon:"none"}),t.tel_num2="",t.codeDisabled=!0),n.next=11;break;case 8:e.showToast({title:"手机号格式不正确,请重输",icon:"none"}),t.tel_num="",t.codeDisabled=!0;case 11:case"end":return n.stop()}}),n)})))()},getVerifyCode:function(e){this.veri_code=e.target.value,this.code=e.target.value},getCode:function(){var t=this;return c(o.default.mark((function n(){var r,a,c;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,n.next=3,t.$request({url:"/getRegistCode/"+t.phone});case 3:n.sent,e.showToast({title:"验证码已发送",icon:"none"}),t.codeDisabled=!0,a=60,c=setInterval((function(){a--,a>0?r.codeText=a+"s":(r.codeText="重新获取",clearInterval(c),r.codeDisabled=!1)}),1e3);case 8:case"end":return n.stop()}}),n)})))()},formSubmit:function(t){var n=this;return c(o.default.mark((function r(){var a,c,i,s,l,d,f;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(console.log("form发生了submit事件，携带数据为："+JSON.stringify(t.detail.value)),a=[{name:"cellphone",checkType:"phoneno",errorMsg:"手机号格式有误"},{name:"verify_code",rule:/^[0-9a-zA-Z]{4,10}$/,errorMsg:"验证码格式有误"}],!(null==n.code||""==n.code||n.code.length<4)){o.next=6;break}return e.showToast({title:"验证码至少4位,请输入",icon:"none"}),n.veri_code="",o.abrupt("return");case 6:if(c=t.detail.value,i=n.phone,s=n.code,l=u.check(c,a),d=e.getStorageSync("token"),!l){o.next=19;break}return o.next=14,n.$request({url:"/system/user/profile/updateUserPhone?phone=".concat(i,"&code=").concat(s),method:"PUT",header:{Authorization:d}});case 14:f=o.sent,console.log(f,"183"),200==f.data.code?e.reLaunch({url:"/pages/login_general/login_general"}):e.showToast({title:f.data.msg,icon:"none"}),o.next=20;break;case 19:""!=u.error?e.showToast({title:u.error,icon:"none"}):e.showToast({title:"格式有误!",icon:"none"});case 20:case"end":return o.stop()}}),r)})))()}}};t.default=i}).call(this,n("543d")["default"])}},[["4824","common/runtime","common/vendor"]]]);