(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personal_info/personal_info"],{"2c33":function(t,e,a){"use strict";var n=a("2f86"),r=a.n(n);r.a},"2f86":function(t,e,a){},3850:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,a,n,r,i,o){try{var c=t[i](o),u=c.value}catch(s){return void a(s)}c.done?e(u):Promise.resolve(u).then(n,r)}function o(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var o=t.apply(e,a);function c(t){i(o,n,r,c,u,"next",t)}function u(t){i(o,n,r,c,u,"throw",t)}c(void 0)}))}}var c=function(){a.e("components/register/input_id").then(function(){return resolve(a("15ab"))}.bind(null,a)).catch(a.oe)},u=function(){a.e("components/xfl-select/xfl-select").then(function(){return resolve(a("00e2"))}.bind(null,a)).catch(a.oe)},s=function(){Promise.all([a.e("common/vendor"),a.e("components/ss-select-city/index")]).then(function(){return resolve(a("7cf7"))}.bind(null,a)).catch(a.oe)},l={data:function(){return{personal_account:"ZY431423456",disabled:!0,active:!1,active_two_step:!1,active_three_step:!1,imgAvatarUrl:"/static/camera2.png",imgTrailerDrivingCertificateUrl:"/static/camera2.png",imgTractorDrivingCertificateUrl:"/static/camera2.png",imgManCarPhotoUrl:"/static/camera2.png",tachar_avatar:!1,tachar_trailer_driving_certificate:!1,tachar_tractor_driving_certificate:!1,params:{},user:"",email_got:""}},components:{inputId:c,xflSelect:u,ssSelectCity:s},onLoad:function(e){this.user=t.getStorageSync("user_info"),this.email_got=this.user.data.user.email,e.email&&(this.email_got=e.email),console.log(this.user,"123"),this.imgAvatarUrl="http://10.22.2.138:8080"+this.user.data.user.avatar},onShow:function(){this.user=t.getStorageSync("user_info"),this.imgAvatarUrl=t.getStorageSync("user_avatar")||"http://10.22.2.138:8080"+this.user.data.user.avatar},methods:{radioCarChange:function(t){},bindTextAreaBlur:function(t){},goChangePassword:function(){t.navigateTo({url:"/pages/change_password/change_password"})},goChangePhone:function(){t.navigateTo({url:"/pages/change_phone/change_phone"})},goProfile:function(){t.navigateTo({url:"/pages/profile/profile"})},uploadAvatar:function(e){var a=this;return o(n.default.mark((function e(){var r,i;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=a,i=t.getStorageSync("token"),e.next=4,a.$photo({success:function(e){return o(n.default.mark((function a(){var o;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:o=e.tempFilePaths,r.imgAvatarUrl=o[0],t.setStorageSync("user_avatar",r.imgAvatarUrl),r.tachar_avatar=!0,r.params.avatarfile=r.imgAvatarUrl,r.params,r.imgAvatarUrl,t.uploadFile({url:"http://10.22.2.138:8080/system/user/profile/avatar",filePath:o[0],name:"avatarfile",header:{Authorization:i,"Content-Type":"multipart/form-data"},success:function(e){t.showToast({title:"保存成功!"}),console.log("请求成功_______________",e),setTimeout((function(){t.reLaunch({url:"/pages/accounts/accounts?avatar=".concat(r.imgAvatarUrl)})}),200)},fail:function(t){console.log("请求失败_______________",t)}});case 8:case"end":return a.stop()}}),a)})))()}});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))()},goDriverIdentifying:function(){t.navigateTo({url:"/pages/file_identifying/file_identifying"})},cancelAvatar:function(){this.imgAvatarUrl="/static/camera2.png",setTimeout((function(){t.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_avatar=!1},goChangeIdentity:function(){t.navigateTo({url:"/pages/change_identity/change_identity"})},callService:function(){t.makePhoneCall({phoneNumber:"051687739339"})},goFileIdentifying:function(){t.navigateTo({url:"/pages/file_identifying/file_identifying"})},goChooseCompany:function(){t.navigateTo({url:"/pages/choose_company/choose_company"})}}};e.default=l}).call(this,a("543d")["default"])},"3da4":function(t,e,a){"use strict";a.r(e);var n=a("9a89"),r=a("bc3b");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("2c33");var o,c=a("f0c5"),u=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"4ea7abe7",null,!1,n["a"],o);e["default"]=u.exports},"994d":function(t,e,a){"use strict";(function(t){a("c5c7");n(a("66fd"));var e=n(a("3da4"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"9a89":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},bc3b:function(t,e,a){"use strict";a.r(e);var n=a("3850"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a}},[["994d","common/runtime","common/vendor"]]]);