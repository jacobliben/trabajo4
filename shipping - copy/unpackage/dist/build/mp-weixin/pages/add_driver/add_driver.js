(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add_driver/add_driver"],{"2a9d":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("a34a")),a=i("2e4a");function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i,r,a,n,s){try{var o=e[n](s),d=o.value}catch(c){return void i(c)}o.done?t(d):Promise.resolve(d).then(r,a)}function o(e){return function(){var t=this,i=arguments;return new Promise((function(r,a){var n=e.apply(t,i);function o(e){s(n,r,a,o,d,"next",e)}function d(e){s(n,r,a,o,d,"throw",e)}o(void 0)}))}}var d,c=function(){i.e("components/xfl-select/xfl-select").then(function(){return resolve(i("00e2"))}.bind(null,i)).catch(i.oe)},u=i("6802"),l={data:function(){var e=this.getDate({format:!0});return{disabled:!0,active:!1,disable_phone_change:!1,driver_name:"",driver_id:"",driver_tel:"",detail_address:"",issue_organization:"",qualificationCertNo:"",remark:"",imgDriverIDFrontUrl:"/static/id_front.jpg",imgDriverIDBackUrl:"/static/id-back.jpg",imgDriverLicensePhotoUrl:"/static/driving_license.jpg",imgDrivingCertificateUrl:"/static/roadcert.jpg",tachar_driver_id_front:!1,tachar_driver_id_back:!1,tachar_driver_license:!1,tachar_driving_certificate:!1,begin_date:e,expiry_date:e,driver_cert_begin_date:e,driver_cert_expiry_date:e,id_begin_date:e,id_expiry_date:e,list:["A2","B2"],index:0,params:{},received_info:[],btn_title:"",driver_cert_begin_date_has_input:!1,driver_cert_expiry_date_has_input:!1,expiry_date_has_input:!1,id_begin_date_has_input:!1,id_expiry_date_has_input:!1}},components:{xflSelect:c},computed:{endDate:function(){return this.getDate("end")}},onLoad:function(t){this.btn_title=t.btn_title,"修改"!=this.btn_title&&"查看"!=this.btn_title||(this.received_info=e.getStorageSync("driver_item"),this.disable_phone_change=!0,this.driver_name=this.received_info.driverName,this.driver_id=this.received_info.driverIdNumber,this.driver_tel=this.received_info.driverPhone,this.detail_address=this.received_info.driverAddress,("A2"==this.received_info.driverVehicleClass||"B2"==this.received_info.driverVehicleClass)&&this.index,this.issue_organization=this.received_info.driverIssuingOrganizations,this.received_info.drivercertValidPeriodFrom&&(this.driver_cert_begin_date=this.received_info.drivercertValidPeriodFrom||this.getDate({format:!0}),this.driver_cert_begin_date_has_input=!0),this.received_info.drivercertValidPeriodTo&&(this.driver_cert_expiry_date=this.received_info.drivercertValidPeriodTo||this.getDate({format:!0}),this.driver_cert_expiry_date_has_input=!0),this.qualificationCertNo=this.received_info.qualificationCertNo,this.received_info.qualificationCertExpireDate&&(this.expiry_date=this.received_info.qualificationCertExpireDate||this.getDate({format:!0}),this.expiry_date_has_input=!0),this.received_info.idcardValidPeriodFrom&&(this.id_begin_date=this.received_info.idcardValidPeriodFrom||this.getDate({format:!0}),this.id_begin_date_has_input=!0),this.received_info.idcardValidPeriodTo&&(this.id_expiry_date=this.received_info.idcardValidPeriodTo||this.getDate({format:!0}),this.id_expiry_date_has_input=!0),this.remark=this.received_info.remark,this.disabled=!1,this.active=!0)},created:function(){},mounted:function(){e.setNavigationBarTitle({title:"".concat(this.btn_title,"驾驶员")})},methods:{checkID:function(){var t=this;return o(r.default.mark((function i(){var a,n,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t.params.driverIdNumber,n=e.getStorageSync("token"),i.next=4,t.$request({url:"/app/driver/getByIdNumber/"+a,header:{Authorization:n}});case 4:s=i.sent,s.data.hasOwnProperty("data")?e.showToast({title:"该身份证号已被注册过,可直接绑定！",icon:"none"}):e.showToast({title:"该身份证号尚未被注册过,请继续！",icon:"none"});case 6:case"end":return i.stop()}}),i)})))()},detailImage:function(e,t){plus.io.resolveLocalFileSystemURL(e,(function(e){e.file((function(e){var i=new plus.io.FileReader;i.readAsDataURL(e),i.onloadend=function(e){t(e.target.result)}}))}))},bindPickerChange:function(e){console.log("picker发送选择改变，携带值为 准驾车型",e.target.value),this.index=e.target.value,0==this.index?this.params.driverVehicleClass="A2":1==this.index&&(this.params.driverVehicleClass="B2")},getDriverName:function(e){this.params.driverName=e.detail.value,this.params.driverCertificateType="201"},getDriverApprovedVehicleType:function(e){this.params.driverVehicleClass=e.newVal},getDriverCel:function(e){this.driver_tel=e.detail.value,this.params.driverPhone=e.detail.value,this.disabled=!1,this.active=!0},getAddress:function(e){this.params.driverAddress=e.target.value},getDriverID:function(e){this.driver_id=e.detail.value,this.params.driverIdNumber=e.detail.value,this.qualificationCertNo=this.params.driverIdNumber,this.params.qualificationCertNo=this.params.driverIdNumber},driverIssuingOrganizations:function(e){this.params.driverIssuingOrganizations=e.detail.value},getDrivingCertificateNum:function(e){this.params.qualificationCertNo=e.detail.value},bindDateChange:function(e){"license_begin_date"==e.currentTarget.dataset.index?(this.begin_date=e.target.value,this.params.qualificationCertStartDate=this.begin_date):"license_expiry_date"==e.currentTarget.dataset.index?(this.expiry_date=e.target.value,this.params.qualificationCertExpireDate=this.expiry_date,this.expiry_date_has_input=!0):"driver_cert_begin_date"==e.currentTarget.dataset.index?(this.driver_cert_begin_date=e.target.value,this.params.drivercertValidPeriodFrom=e.target.value,this.driver_cert_begin_date_has_input=!0):"driver_cert_expiry_date"==e.currentTarget.dataset.index?(this.driver_cert_expiry_date=e.target.value,this.params.drivercertValidPeriodTo=e.target.value,this.driver_cert_expiry_date_has_input=!0):"id_begin_date"==e.currentTarget.dataset.index?(this.id_begin_date=e.target.value,this.params.idcardValidPeriodFrom=e.target.value,this.id_begin_date_has_input=!0):"id_expiry_date"==e.currentTarget.dataset.index&&(this.id_expiry_date=e.target.value,this.params.idcardValidPeriodTo=e.target.value,this.id_expiry_date_has_input=!0)},getDate:function(e){var t=new Date,i=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=20),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(i,"-").concat(r,"-").concat(a)},takephoto:function(t){var i=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(d=i,"driver_id_front"!=t.currentTarget.dataset.index){n.next=5;break}e.chooseImage({count:1,sizeType:["original","compressed"],success:function(e){return o(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,d.imgDriverIDFrontUrl=i[0],d.tachar_driver_id_front=!0,t.next=5,d.$upload({url:a.ossLocation.driver.front,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},error:function(e){}}),n.next=19;break;case 5:if("driver_id_back"!=t.currentTarget.dataset.index){n.next=9;break}e.chooseImage({count:1,sizeType:["original","compressed"],success:function(e){return o(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,d.imgDriverIDBackUrl=i[0],d.tachar_driver_id_back=!0,t.next=5,d.$upload({url:a.ossLocation.driver.reverse,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},error:function(e){}}),n.next=19;break;case 9:if("driver_license_photo_first"!=t.currentTarget.dataset.index){n.next=15;break}return n.next=12,i.$photo({success:function(e){return o(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,d.imgDriverLicensePhotoUrl=i[0],d.tachar_driver_license=!0,t.next=5,d.$upload({url:a.ossLocation.driver.first,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}});case 12:n.sent,n.next=19;break;case 15:if("driving_certificate"!=t.currentTarget.dataset.index){n.next=19;break}return n.next=18,i.$photo({success:function(e){return o(r.default.mark((function t(){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,d.imgDrivingCertificateUrl=i[0],d.tachar_driving_certificate=!0,t.next=5,d.$upload({url:a.ossLocation.driver.cert,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}});case 18:n.sent;case 19:case"end":return n.stop()}}),n)})))()},cancelDriverIDFront:function(){this.imgDriverIDFrontUrl="/static/id_front.jpg",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_driver_id_front=!1},cancelDriverIDBack:function(){this.imgDriverIDBackUrl="/static/id-back.jpg",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_driver_id_back=!1},cancelDriverLicense:function(){this.imgDriverLicensePhotoUrl="/static/driving_license.jpg",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_driver_license=!1},cancelDrivingCertificate:function(){this.imgDrivingCertificateUrl="/static/roadcert.jpg",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_driving_certificate=!1},getRemark:function(e){this.params.remark=e.detail.value},backBusiness:function(){e.navigateBack({delta:1})},formSubmit:function(){var t=o(r.default.mark((function t(i){var a,n,s,o,d,c,l,h,_,v;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("添加"!=this.btn_title){t.next=45;break}if(this.params.idcardFront=e.getStorageSync("idcardFront"),!(null==this.params.idcardFront||""==this.params.idcardFront||this.params.idcardFront.length<1)){t.next=5;break}return e.showToast({title:"未提交驾驶员身份证正面, 请提交",icon:"none"}),t.abrupt("return");case 5:if(this.params.idcardBack=e.getStorageSync("idcardBack"),!(null==this.params.idcardBack||""==this.params.idcardBack||this.params.idcardBack.length<1)){t.next=9;break}return e.showToast({title:"未提交驾驶员身份证背面, 请提交",icon:"none"}),t.abrupt("return");case 9:if(this.params.drivingLicensePhotoFirst=e.getStorageSync("drivingLicensePhotoFirst"),!(null==this.params.drivingLicensePhotoFirst||""==this.params.drivingLicensePhotoFirst||this.params.drivingLicensePhotoFirst.length<1)){t.next=13;break}return e.showToast({title:"未提交机动车驾驶证主页, 请提交",icon:"none"}),t.abrupt("return");case 13:if(!(null==this.params.driverName||""==this.params.driverName||this.params.driverName.length<1)){t.next=16;break}return e.showToast({title:"未输入驾驶员姓名, 请输入",icon:"none"}),t.abrupt("return");case 16:if(!(null==this.params.driverIdNumber||""==this.params.driverIdNumber||this.params.driverIdNumber.length<18)){t.next=19;break}return e.showToast({title:"驾驶员身份证号不正确, 请重输",icon:"none"}),t.abrupt("return");case 19:if(!(null==this.params.driverPhone||""==this.params.driverPhone||this.params.driverPhone.length<1)){t.next=22;break}return e.showToast({title:"未输入驾驶员手机号码, 请输入",icon:"none"}),t.abrupt("return");case 22:if((null==this.params.driverVehicleClass||""==this.params.driverVehicleClass||this.params.driverVehicleClass.length<1)&&(this.params.driverVehicleClass="A2"),!(null==this.params.qualificationCertNo||""==this.params.qualificationCertNo||this.params.qualificationCertNo.length<1)){t.next=26;break}return e.showToast({title:"未输入从业资格号, 请输入",icon:"none"}),t.abrupt("return");case 26:if(console.log("form发生了submit事件，携带数据为："+JSON.stringify(i.detail.value)),a=[{name:"cellphone",checkType:"phoneno",errorMsg:"手机号格式不正确"}],n=i.detail.value,s=u.check(n,a),!s){t.next=41;break}return o=e.getStorageSync("token"),d=this.params,console.log(d,"518"),t.next=36,this.$request({url:"/app/driver/add",method:"POST",data:d,header:{Authorization:o}});case 36:c=t.sent,console.log(c,"加司机"),(c.data.msg="操作成功")?(e.showToast({title:c.data.msg}),setTimeout((function(){e.navigateTo({url:"/pages/driver_list/driver_list"})}),800)):e.showToast({title:c.data.msg,icon:"none"}),t.next=43;break;case 41:e.showToast({title:u.error,icon:"none"}),this.driver_tel="";case 43:t.next=58;break;case 45:if("修改"!=this.btn_title){t.next=58;break}return o=e.getStorageSync("token"),l=this.params,h=this.received_info,_={},Object.assign(_,l,h),console.log(_,"521"),e.showToast({title:"正在修改中...",icon:"none"}),t.next=55,this.$request({url:"/app/driver/edit",method:"PUT",data:_,header:{Authorization:o}});case 55:v=t.sent,console.log(v,"改司机"),(v.data.msg="操作成功")?(e.showToast({title:v.data.msg}),setTimeout((function(){e.navigateTo({url:"/pages/driver_list/driver_list"})}),800)):e.showToast({title:v.data.msg,icon:"none"});case 58:case"end":return t.stop()}}),t,this)})));function i(e){return t.apply(this,arguments)}return i}()}};t.default=l}).call(this,i("543d")["default"])},"4c52":function(e,t,i){"use strict";(function(e){i("c5c7");r(i("66fd"));var t=r(i("d41f"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},bbfa:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.driver_cert_begin_date_has_input=!0},e.e1=function(t){e.driver_cert_expiry_date_has_input=!0},e.e2=function(t){e.expiry_date_has_input=!0},e.e3=function(t){e.id_begin_date_has_input=!0},e.e4=function(t){e.id_expiry_date_has_input=!0})},n=[]},bebb:function(e,t,i){},d41f:function(e,t,i){"use strict";i.r(t);var r=i("bbfa"),a=i("e30f");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("e80e");var s,o=i("f0c5"),d=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"6e18aad2",null,!1,r["a"],s);t["default"]=d.exports},e30f:function(e,t,i){"use strict";i.r(t);var r=i("2a9d"),a=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},e80e:function(e,t,i){"use strict";var r=i("bebb"),a=i.n(r);a.a}},[["4c52","common/runtime","common/vendor"]]]);