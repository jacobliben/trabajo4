(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vehicle_details/vehicle_details"],{"0e31":function(t,e,i){"use strict";i.r(e);var r=i("cd34"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"2f4b":function(t,e,i){"use strict";var r=i("7146"),n=i.n(r);n.a},"337d":function(t,e,i){"use strict";(function(t){i("c5c7");r(i("66fd"));var e=r(i("8594"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},7146:function(t,e,i){},8594:function(t,e,i){"use strict";i.r(e);var r=i("bdfc"),n=i("0e31");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("2f4b");var c,o=i("f0c5"),l=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"6d121dc6",null,!1,r["a"],c);e["default"]=l.exports},bdfc:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={xflSelect:function(){return i.e("components/xfl-select/xfl-select").then(i.bind(null,"00e2"))}},n=function(){var t=this,e=t.$createElement;t._self._c},a=[]},cd34:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n=function(){i.e("components/register/input_id").then(function(){return resolve(i("15ab"))}.bind(null,i)).catch(i.oe)},a=function(){i.e("components/xfl-select/xfl-select").then(function(){return resolve(i("00e2"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{disabled:!0,active:!1,active_two_step:!1,active_three_step:!1,imgTractorTrailerDrivingCertificateUrl:"/static/camera2.png",imgTrailerDrivingCertificateUrl:"/static/camera2.png",imgTractorDrivingCertificateUrl:"/static/camera2.png",imgManCarPhotoUrl:"/static/camera2.png",tachar_tractor_trailer_driving_certificate:!1,tachar_trailer_driving_certificate:!1,tachar_tractor_driving_certificate:!1,car_no:"",plate_color:"",list:["黄牌","蓝牌","绿牌","黄绿牌"],received_info:{},car_items:[{value:"ordinary",name:"普通货车"},{value:"semi-camion",name:"半挂车"}],energy_current:1,current:0}},components:{inputId:n,xflSelect:a},onLoad:function(e){this.received_info=t.getStorageSync("vehicle_item")},methods:{radioCarChange:function(t){},bindTextAreaBlur:function(t){console.log(t.detail.value)},getPlateColor:function(t){this.plate_color=t.newVal},getCarNo:function(t){this.car_no=t.detail.value},uploadTractorTrailerDrivingCertificate:function(){r=this,t.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(e){var i=e.tempFilePaths;r.imgTractorTrailerDrivingCertificateUrl=i[0],r.tachar_tractor_trailer_driving_certificate=!0;var n=t.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:i[0],name:"file",formData:{user:"test"},success:function(e){t.showToast({title:"上传成功"})}});n.onProgressUpdate((function(t){r.percent=t.progress,console.log("上传进度"+t.progress),console.log("已经上传的数据长度"+t.totalBytesSent),console.log("预期需要上传的数据总长度"+t.totalBytesExpectedToSend)}))},error:function(t){console.log(t)}})},uploadTrailerDrivingCertificate:function(){r=this,t.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(e){var i=e.tempFilePaths;r.imgTrailerDrivingCertificateUrl=i[0],r.tachar_trailer_driving_certificate=!0;var n=t.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:i[0],name:"file",formData:{user:"test"},success:function(e){t.showToast({title:"上传成功"}),r.disabled=!1,r.active=!0}});n.onProgressUpdate((function(t){r.percent=t.progress,console.log("上传进度"+t.progress),console.log("已经上传的数据长度"+t.totalBytesSent),console.log("预期需要上传的数据总长度"+t.totalBytesExpectedToSend)}))},error:function(t){console.log(t)}})},uploadTractorDrivingCertificate:function(){r=this,t.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(e){var i=e.tempFilePaths;r.imgTractorDrivingCertificateUrl=i[0],r.tachar_tractor_driving_certificate=!0;var n=t.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:i[0],name:"file",formData:{user:"test"},success:function(e){t.showToast({title:"上传成功"}),r.disabled=!1,r.active=!0}});n.onProgressUpdate((function(t){r.percent=t.progress,console.log("上传进度"+t.progress),console.log("已经上传的数据长度"+t.totalBytesSent),console.log("预期需要上传的数据总长度"+t.totalBytesExpectedToSend)}))},error:function(t){console.log(t)}})},cancelTractorTrailerDrivingCertificate:function(){this.imgTractorTrailerDrivingCertificateUrl="/static/camera2.png",setTimeout((function(){t.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_tractor_trailer_driving_certificate=!1},cancelTrailerDrivingCertificate:function(){this.imgTrailerDrivingCertificateUrl="/static/camera2.png",setTimeout((function(){t.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_trailer_driving_certificate=!1},cancelTractorDrivingCertificate:function(){this.imgTractorDrivingCertificateUrl="/static/camera2.png",setTimeout((function(){t.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_tractor_driving_certificate=!1},goChangeIdentity:function(){t.navigateTo({url:"/pages/change_identity/change_identity"})},callService:function(){var t=plus.android.importClass("android.content.Intent"),e=plus.android.importClass("android.net.Uri"),i=plus.android.runtimeMainActivity(),r=e.parse("13783712192"),n=new t("android.intent.action.CALL",r);i.startActivity(n)},goFileIdentifying:function(){t.navigateTo({url:"/pages/file_identifying/file_identifying"})}}};e.default=c}).call(this,i("543d")["default"])}},[["337d","common/runtime","common/vendor"]]]);