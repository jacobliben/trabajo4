(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-file_identifying-file_identifying"],{"15ab":function(t,e,i){"use strict";i.r(e);var a=i("8d89"),n=i("c054");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("37fa");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"3e8133a0",null,!1,a["a"],r);e["default"]=o.exports},2519:function(t,e,i){"use strict";var a=i("ef8c"),n=i.n(a);n.a},"2bd7":function(t,e,i){t.exports=i.p+"static/img/after-sales-service.808a97a2.png"},"37fa":function(t,e,i){"use strict";var a=i("c33d"),n=i.n(a);n.a},"38f4":function(t,e,i){"use strict";i.r(e);var a=i("5dee"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"46a0":function(t,e,i){t.exports=i.p+"static/img/question.b01d19d4.png"},"5dee":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=a(i("15ab")),r=a(i("00e2")),c={data:function(){return{disabled:!0,active:!1,active_two_step:!1,active_three_step:!1,imgDriverLicenseUrl:"/static/camera2.png",imgTransportLicenseUrl:"/static/camera2.png",imgDrivingCertificateUrl:"/static/camera2.png",imgManCarPhotoUrl:"/static/camera2.png",tachar_driver_license:!1,tachar_transport_license:!1,tachar_driving_certificate:!1,tachar_man_car:!1,photo_id:!0,car_no:"",plate_color:"",list:["黄牌","蓝牌","绿牌","黄绿牌"],car_items:[{value:"ordinary",name:"普通货车"},{value:"semi-camion",name:"半挂车"}],energy_current:0}},components:{inputId:s.default,xflSelect:r.default},methods:{radioCarChange:function(t){},goInputID:function(){this.photo_id=!1},goPhotoID:function(){this.photo_id=!0},bindTextAreaBlur:function(t){},getPlateColor:function(t){this.plate_color=t.newVal},getCarNo:function(t){this.car_no=t.detail.value},uploadDriverLicense:function(){n=this,uni.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(t){var e=t.tempFilePaths;n.imgDriverLicenseUrl=e[0],n.tachar_driver_license=!0;uni.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:e[0],name:"file",formData:{user:"test"},success:function(t){uni.showToast({title:"上传成功"})}})},error:function(t){console.log(t)}})},uploadTransportLicense:function(){n=this,uni.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(t){var e=t.tempFilePaths;n.imgTransportLicenseUrl=e[0],n.tachar_transport_license=!0;uni.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:e[0],name:"file",formData:{user:"test"},success:function(t){uni.showToast({title:"上传成功"}),n.disabled=!1,n.active=!0}})}})},uploadDrivingCertificate:function(){n=this,uni.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(t){var e=t.tempFilePaths;n.imgDrivingCertificateUrl=e[0],n.tachar_driving_certificate=!0;uni.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:e[0],name:"file",formData:{user:"test"},success:function(t){uni.showToast({title:"上传成功"}),n.disabled=!1,n.active=!0}})}})},uploadManCarPhoto:function(){n=this,uni.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(t){var e=t.tempFilePaths;n.imgManCarPhotoUrl=e[0],n.tachar_man_car=!0;uni.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:e[0],name:"file",formData:{user:"test"},success:function(t){uni.showToast({title:"上传成功"}),n.disabled=!1,n.active=!0}})},error:function(t){console.log(t)}})},cancelDriverLicense:function(){this.imgDriverLicenseUrl="/static/camera2.png",setTimeout((function(){uni.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_driver_license=!1},cancelTransportLicense:function(){this.imgTransportLicenseUrl="/static/camera2.png",setTimeout((function(){uni.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_transport_license=!1},cancelDrivingCertificate:function(){this.imgDrivingCertificateUrl="/static/camera2.png",setTimeout((function(){uni.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_driving_certificate=!1},cancelManCar:function(){this.imgManCarPhotoUrl="/static/camera2.png",setTimeout((function(){uni.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_man_car=!1},goChangeIdentity:function(){uni.navigateTo({url:"/pages/change_identity/change_identity"})},callService:function(){var t=plus.android.importClass("android.content.Intent"),e=plus.android.importClass("android.net.Uri"),i=plus.android.runtimeMainActivity(),a=e.parse("051687739070"),n=new t("android.intent.action.CALL",a);i.startActivity(n)},goFileIdentifying:function(){uni.navigateTo({url:"/pages/file_identifying/file_identifying"})}}};e.default=c},"67d2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".current-state[data-v-bd6552ee]{margin-top:%?10?%;margin-left:%?10?%;margin-bottom:%?25?%;border-left:%?3?% solid #00f;padding-left:%?30?%;color:#000;font-size:%?30?%;font-weight:600;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.current-state .hand-input[data-v-bd6552ee]{color:#00f;font-size:%?20?%;font-weight:300;margin-right:10%}.notes[data-v-bd6552ee]{width:100%;padding:5%;border-bottom:%?1?% solid #ddd}.top-line[data-v-bd6552ee]{border-top:%?1?% solid #d5d5d8}.flex-bar[data-v-bd6552ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:5%;padding-right:5%;padding-top:%?15?%;padding-bottom:%?15?%}.truck-type[data-v-bd6552ee]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.name[data-v-bd6552ee]{color:#000}.ref-name[data-v-bd6552ee]{font-size:%?18?%;color:#999}.text-name[data-v-bd6552ee]{margin-left:5%;margin-bottom:%?20?%}.note-textarea[data-v-bd6552ee]{margin-left:5%;width:90%;height:%?200?%;background-color:#eee}.cell[data-v-bd6552ee]{margin-right:%?10?%}.star[data-v-bd6552ee]{color:red}.center[data-v-bd6552ee]{margin-top:%?30?%;text-align:center;color:#999}.center .change-identity[data-v-bd6552ee]{color:#0081ff;font-weight:700}.center .change-identity .wrong-identity[data-v-bd6552ee]{color:#999;font-weight:400}.img[data-v-bd6552ee]{width:%?100?%;height:%?50?%}.tachar[data-v-bd6552ee]{width:%?60?%;height:%?60?%;left:10%}.next-btn[data-v-bd6552ee]{margin-top:%?20?%;width:30%}.current-btn[data-v-bd6552ee]{background-color:#0081ff;color:#fff}.disabled-btn[data-v-bd6552ee]{background-color:#ddd}.red[data-v-bd6552ee]{color:red;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.red uni-view[data-v-bd6552ee]{margin-left:%?10?%}.after-sales-service[data-v-bd6552ee]{width:%?20?%;height:%?20?%;margin-right:%?10?%}",""]),t.exports=e},8136:function(t,e,i){"use strict";i.r(e);var a=i("9e34"),n=i("38f4");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("2519");var r,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"bd6552ee",null,!1,a["a"],r);e["default"]=o.exports},"8d89":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"notes"},[t._v("拍摄身份证正反面，注意反光，保证身份证的内容清晰")]),i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"one-line"},[i("v-uni-text",[t._v("姓名")]),i("v-uni-input",{attrs:{type:"text",name:"name",focus:!0},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getName.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"one-line"},[i("v-uni-text",[t._v("身份证号")]),i("v-uni-input",{attrs:{type:"idcard",name:"idcard",maxlength:"18"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getID.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"btn-row"},[i("v-uni-button",{staticClass:"next-btn",class:{"current-btn":t.active,"disabled-btn":!t.active},attrs:{disabled:t.disabled,"form-type":"submit"}},[t._v("下一步")])],1)],1)],1)},s=[]},"8f9f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{disabled:!0,active:!1,params:{name:"",id:""}}},methods:{getName:function(t){this.params.name=t.target.value},getID:function(t){this.params.id=t.target.value},formSubmit:function(t){var e=[{name:"name",checkType:"string",errorMsg:"姓名格式有误"},{name:"idcard",checkType:"int",checkRule:"18,18",errorMsg:"验证码格式有误"}],i=t.detail.value,a=graceChecker.check(i,e);a?uni.showToast({title:"验证通过!",icon:"none"}):uni.showToast({title:graceChecker.error,icon:"none"}),this.$emit(register_phone_params,this.params)}}};e.default=a},"9b89":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".notes[data-v-3e8133a0]{width:100%;padding:5%;border-bottom:%?1?% solid #ddd}.one-line[data-v-3e8133a0]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-left:5%}.one-line uni-text[data-v-3e8133a0]{margin-right:1vw;font-size:%?20?%;width:15%}.one-line uni-input[data-v-3e8133a0]{border:%?1?% solid #ddd}.next-btn[data-v-3e8133a0]{margin-top:2vh;width:30%}",""]),t.exports=e},"9e34":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={xflSelect:i("00e2").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"cu-steps"},[a("v-uni-view",{staticClass:"cu-item text-blue"},[a("v-uni-text",{staticClass:"num right ",attrs:{"data-index":"1"}}),t._v("身份认证")],1),a("v-uni-view",{staticClass:"cu-item text-blue "},[a("v-uni-text",{staticClass:"num right",attrs:{"data-index":"2"}}),t._v("资料认证")],1)],1),a("v-uni-view",{staticClass:"current-state"},[a("v-uni-text",[t._v("资料认证")])],1),t.photo_id?a("v-uni-view",{staticClass:"take-photo-id"},[a("v-uni-view",{staticClass:"notes"},[t._v("请上传相关证件照片")]),a("v-uni-view",{staticClass:"top-line flex-bar"},[a("v-uni-view",{staticClass:"name"},[t._v("驾驶证照片"),a("v-uni-text",{staticClass:"star"},[t._v("*")])],1),a("v-uni-view",{staticClass:"ref-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadDriverLicense.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:t.imgDriverLicenseUrl,mode:""}}),t.tachar_driver_license?a("v-uni-image",{staticClass:"tachar",attrs:{src:"/static/tachar.png",mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelDriverLicense.apply(void 0,arguments)}}}):t._e()],1)],1),a("v-uni-view",{staticClass:"top-line flex-bar"},[a("v-uni-view",{staticClass:"name"},[t._v("道路运输证照片"),a("v-uni-text",{staticClass:"star"},[t._v("*")])],1),a("v-uni-view",{staticClass:"ref-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadTransportLicense.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:t.imgTransportLicenseUrl,mode:""}}),t.tachar_transport_license?a("v-uni-image",{staticClass:"tachar",attrs:{src:"/static/tachar.png",mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelTransportLicense.apply(void 0,arguments)}}}):t._e()],1)],1),a("v-uni-view",{staticClass:"top-line flex-bar"},[a("v-uni-view",{staticClass:"name"},[t._v("车辆类型"),a("v-uni-text",{staticClass:"star"},[t._v("*")])],1),a("v-uni-view",{staticClass:"ref-name"},[a("v-uni-radio-group",{staticClass:"truck-type",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioCarChange.apply(void 0,arguments)}}},t._l(t.car_items,(function(e,i){return a("v-uni-label",{key:e.value,staticClass:"cell"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:e.value,checked:i===t.energy_current}})],1),a("v-uni-view",[t._v(t._s(e.name))])],1)})),1)],1)],1),a("v-uni-view",{staticClass:"top-line flex-bar"},[a("v-uni-view",{staticClass:"name"},[t._v("车牌颜色"),a("v-uni-text",{staticClass:"star"},[t._v("*")])],1),a("v-uni-view",{staticClass:"ref-name"},[a("xfl-select",{attrs:{list:t.list,clearable:!1,showItemNum:6,listShow:!1,isCanInput:!0,style_Container:"height: 50rpx; font-size: 16rpx;",placeholder:"选择颜色",selectHideType:"hideAll"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getPlateColor.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"top-line flex-bar"},[a("v-uni-view",{staticClass:"name"},[t._v("行驶证主副页"),a("v-uni-text",{staticClass:"star"},[t._v("*")])],1),a("v-uni-view",{staticClass:"ref-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadDrivingCertificate.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:t.imgDrivingCertificateUrl,mode:""}}),t.tachar_driving_certificate?a("v-uni-image",{staticClass:"tachar",attrs:{src:"/static/tachar.png",mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelDrivingCertificate.apply(void 0,arguments)}}}):t._e()],1)],1),a("v-uni-view",{staticClass:"top-line flex-bar"},[a("v-uni-view",{staticClass:"name"},[t._v("人车合照")]),a("v-uni-view",{staticClass:"ref-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadManCarPhoto.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:t.imgManCarPhotoUrl,mode:""}}),t.tachar_man_car?a("v-uni-image",{staticClass:"tachar",attrs:{src:"/static/tachar.png",mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelManCar.apply(void 0,arguments)}}}):t._e()],1)],1),a("v-uni-view",{staticClass:"top-line flex-bar"},[a("v-uni-view",{staticClass:"name"},[t._v("车牌号码")]),a("v-uni-view",{staticClass:"ref-name"},[a("v-uni-input",{attrs:{type:"text",placeholder:"请输入车牌号码"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getCarNo.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"top-line"},[a("v-uni-view",{staticClass:"text-name"},[t._v("备注说明")]),a("v-uni-view",{staticClass:"note-textarea"},[a("v-uni-textarea",{attrs:{placeholder:"请输入您认证过程中的特殊说明","placeholder-style":"font-size:20rpx; margin-left:10rpx;margin-top:10rpx;font-weight:200;"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTextAreaBlur.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",[a("v-uni-button",{staticClass:"next-btn",class:{"current-btn":t.active,"disabled-btn":!t.active},attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goFileIdentifying.apply(void 0,arguments)}}},[t._v("确认提交")])],1)],1):t._e(),t.photo_id?t._e():a("input-id"),a("v-uni-view",[a("v-uni-button",{staticClass:"next-btn  line-blue ",attrs:{plain:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e)}}},[t._v("暂不认证")])],1),a("v-uni-view",{staticClass:"center"},[a("v-uni-view",{staticClass:"change-identity"},[a("v-uni-text",{staticClass:"wrong-identity"},[t._v("角色选错了？")]),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goChangeIdentity.apply(void 0,arguments)}}},[t._v("变更角色")])],1),a("v-uni-view",{staticClass:"red"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callService.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"after-sales-service",attrs:{src:i("2bd7"),mode:""}}),a("v-uni-text",[t._v("联系客服")])],1),a("v-uni-view",[t._v("|")]),a("v-uni-view",[a("v-uni-image",{staticClass:"after-sales-service",attrs:{src:i("46a0"),mode:""}}),a("v-uni-text",[t._v("认证遇到问题")])],1)],1)],1)],1)},s=[]},c054:function(t,e,i){"use strict";i.r(e);var a=i("8f9f"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},c33d:function(t,e,i){var a=i("9b89");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f7664f5a",a,!0,{sourceMap:!1,shadowMode:!1})},ef8c:function(t,e,i){var a=i("67d2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7455a336",a,!0,{sourceMap:!1,shadowMode:!1})}}]);