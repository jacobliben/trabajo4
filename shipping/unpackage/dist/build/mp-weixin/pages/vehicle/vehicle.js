(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vehicle/vehicle","components/xfl-select/xfl-select"],{"00e2":function(e,t,i){"use strict";i.r(t);var n=i("db1a"),a=i("db74");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("6b9a");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"4a8a7d3a",null,!1,n["a"],s);t["default"]=c.exports},"2e27":function(e,t,i){"use strict";i.r(t);var n=i("97cd"),a=i("4a26");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("49c8");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5129ddb7",null,!1,n["a"],s);t["default"]=c.exports},"2eef":function(e,t,i){"use strict";(function(e){i("c5c7");n(i("66fd"));var t=n(i("2e27"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"49c8":function(e,t,i){"use strict";var n=i("b63a"),a=i.n(n);a.a},"4a26":function(e,t,i){"use strict";i.r(t);var n=i("a46a"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"6b9a":function(e,t,i){"use strict";var n=i("954e"),a=i.n(n);a.a},"954e":function(e,t,i){},"97cd":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uniNumberBox:function(){return i.e("uni_modules/uni-number-box/components/uni-number-box/uni-number-box").then(i.bind(null,"5ccc"))}},a=function(){var e=this,t=e.$createElement;e._self._c},r=[]},a46a:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=s(i("a34a")),r=(s(i("00e2")),i("2e4a"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t,i,n,a,r,s){try{var o=e[r](s),c=o.value}catch(l){return void i(l)}o.done?t(c):Promise.resolve(c).then(n,a)}function c(e){return function(){var t=this,i=arguments;return new Promise((function(n,a){var r=e.apply(t,i);function s(e){o(r,n,a,s,c,"next",e)}function c(e){o(r,n,a,s,c,"throw",e)}s(void 0)}))}}var l={data:function(){return{isPerson:!1,disabled:!0,active:!1,plate_number:"",params:{the_step:4,active_one_step:!0,active_two_step:!0,active_three_step:!0},params_vehicle:{},vin:"",vehicleBrands:"",vehicle_weight:"",rating_weight:"",road_transpor_num:"",vehicleAxlenum:"",length:"",width:"",height:"",imgDriverLicenseUrl:"/static/id-front.png",imgTransportLicenseUrl:"/static/TransportLicense.png",imgVehicleLicenseFirstUrl:"/static/vehicle_license.jpg",imgVehicleLicenseSecondUrl:"/static/id-front.png",imgDraggingCarPhotoUrl:"/static/id-front.png",imgDraggingTransportPhotoUrl:"/static/id-front.png",imgHangingCarPhotoUrl:"/static/vehicle_license.jpg",imgPeopleVehicleUrl:"/static/people_vehicle.jpg",tachar_driver_license:!1,tachar_transport_license:!1,tachar_vehicle_license_first:!1,tachar_vehicle_license_second:!1,tachar_dragging_car:!1,tachar_dragging_transport:!1,tachar_hanging_car:!1,tachar_people_vehicle:!1,is_ordinary:!1,plate_type_index:1,plate_color_index:0,list:["黄牌"],plate_type_list:["小型汽车号牌","大型汽车号牌","其他号牌"],car_items:[{value:"ordinary",name:"普通货车"},{value:"semi-camion",name:"半挂车"}],car_current:1,energy_items:[{value:"1",name:"新能源"},{value:"2",name:"非新能源"}],energy_current:1,energy_type:"非新能源",vehicleEnergyTypeOptions:[],box_length_list:[],box_length_index:0,vehicleCargoBoxLengthOptions:[],vehicleCargoBoxLengthSendValue:[]}},components:{},created:function(){this.isPerson=e.getStorageSync("in_personal_registering"),this.params.whetherNewEnergy=2,this.getCarTypes(),this.getVehiclePlateTypeOptions(),this.getVehiclePlateColorOptions(),this.getVehicleEnergyTypeOptions(),this.getVehicleCargoBoxLengthOptions(),this.params_vehicle=e.getStorageSync("params_vehicle")},mounted:function(){var e=this.params_vehicle.whetherNewEnergy||2;this.energy_current=e-1,103==this.params_vehicle.vehicleSpecies?(this.is_ordinary=!0,this.car_current=0):303==this.params_vehicle.vehicleSpecies&&(this.is_ordinary=!1,this.car_current=1),this.plate_number=this.params_vehicle.vehiclePlateNumber||"","02"==this.params_vehicle.vehiclePlateType?this.plate_type_index=0:"01"==this.params_vehicle.vehiclePlateType?this.plate_type_index=1:"99"==this.params_vehicle.vehiclePlateType&&(this.plate_type_index=2),this.vehicleBrands=this.params_vehicle.vehicleBrands||"",this.vehicle_weight=this.params_vehicle.vehicleLadenWeight||"",this.rating_weight=this.params_vehicle.vehicleTonnage||"",this.road_transpor_num=this.params_vehicle.vehicleRoadcertNo,this.vin=this.params_vehicle.vehicleVincode||"",this.vehicleAxlenum=this.params_vehicle.vehicleAxlenum||"",this.length=this.params_vehicle.vehicleLength||"",this.width=this.params_vehicle.vehicleWidth||"",this.height=this.params_vehicle.vehicleHeight||"",this.params=this.params_vehicle||{},this.params_vehicle.vehicleTonnage&&(this.disabled=!1,this.active=!0)},methods:{detailImage:function(e,t){plus.io.resolveLocalFileSystemURL(e,(function(e){e.file((function(e){var i=new plus.io.FileReader;i.readAsDataURL(e),i.onloadend=function(e){t(e.target.result)}}))}))},bindPickerColorChange:function(e){console.log("picker发送选择改变，携带值为",e),this.plate_color_index=e.target.value,0==e.target.value&&(this.params.vehiclePlateColor="2"),this.plate_color_index=0,this.params.vehiclePlateColor="2"},bindPickerChange:function(e){console.log("picker发送选择改变01，携带值为",e.target.value),this.plate_type_index=e.target.value,0==e.target.value?this.params.vehiclePlateType="02":1==e.target.value?this.params.vehiclePlateType="01":2==e.target.value&&(this.params.vehiclePlateType="99")},bindPickercargoBoxLengthChange:function(e){console.log("picker发送选择改变，携带值为BoxLength",e.target.value),this.box_length_index=e.target.value;var t=this.box_length_index-1;this.params.cargoBoxLength=this.vehicleCargoBoxLengthSendValue[t]},getCarTypes:function(){var e=this;return c(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$getRegistDicts("iscm_vehicle_species");case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},getVehiclePlateTypeOptions:function(){var e=this;return c(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$getRegistDicts("vehicle_plate_type");case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},getVehiclePlateColorOptions:function(){var e=this;return c(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$getRegistDicts("vehicle_plate_color");case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},getVehicleEnergyTypeOptions:function(){var e=this;return c(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$getRegistDicts("vehicle_energy_type");case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},getVehicleCargoBoxLengthOptions:function(){var e=this;return c(a.default.mark((function t(){var i,n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$getRegistDicts("vehicle_length");case 2:i=t.sent,console.log(e.vehicleCargoBoxLengthOptions,"货箱长度"),e.vehicleCargoBoxLengthOptions=i,e.vehicleCargoBoxLengthOptions=e.vehicleCargoBoxLengthOptions.data.data.map((function(e){return e.dictLabel})),e.box_length_list=e.vehicleCargoBoxLengthOptions,e.box_length_list.unshift("请选择货箱长度"),e.vehicleCargoBoxLengthSendValue=i.data.data.map((function(e){return e.dictValue})),n=e.params_vehicle.cargoBoxLength,e.box_length_index=e.vehicleCargoBoxLengthSendValue.findIndex((function(e){return e==n}))+1;case 11:case"end":return t.stop()}}),t)})))()},radioEnergyChange:function(e){this.params.whetherNewEnergy=parseInt(e.target.value)},radioCarChange:function(e){console.log(e.target.value,"car"),"ordinary"==e.target.value?(this.is_ordinary=!0,this.params.vehicleSpecies=103):(this.is_ordinary=!1,this.params.vehicleSpecies=303)},getCarNo:function(e){this.params.vehiclePlateNumber=e.detail.value},getCarBrand:function(e){this.params.vehicleBrands=e.detail.value,this.vehicleBrands=e.detail.value},getPlateColor:function(e){"黄牌"==e.newVal&&(this.params.vehiclePlateColor="2")},getVehicleWeight:function(e){this.params.vehicleLadenWeight=e.detail.value},getRatingWeight:function(e){this.params.vehicleTonnage=e.detail.value},getRoadTransportNo:function(e){this.params.vehicleRoadcertNo=e.detail.value,this.disabled=!1,this.active=!0},getVehicleVinCode:function(e){this.params.vehicleVincode=e.detail.value},getVehicleAxlenum:function(e){this.params.vehicleAxlenum=e},getVehicleLength:function(e){this.params.vehicleLength=e.detail.value},getVehicleWidth:function(e){this.params.vehicleWidth=e.detail.value},getVehicleHeight:function(e){this.params.vehicleHeight=e.detail.value},takephoto:function(e){var t=this;return c(a.default.mark((function i(){return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=t,"vehicle_license_first"!=e.currentTarget.dataset.index){i.next=7;break}return i.next=4,t.$photo({success:function(e){return c(a.default.mark((function t(){var i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,n.imgVehicleLicenseFirstUrl=i[0],n.tachar_vehicle_license_first=!0,t.next=5,n.$upload({url:r.ossLocation.vehicle.first,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}});case 4:i.sent,i.next=29;break;case 7:if("vehicle_license_second"!=e.currentTarget.dataset.index){i.next=13;break}return i.next=10,t.$photo({success:function(e){return c(a.default.mark((function t(){var i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,n.imgVehicleLicenseSecondUrl=i[0],n.tachar_vehicle_license_second=!0,t.next=5,n.$upload({url:r.ossLocation.vehicle.second,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}});case 10:i.sent,i.next=29;break;case 13:if("vehicle_transport_license"!=e.currentTarget.dataset.index){i.next=19;break}return i.next=16,t.$photo({success:function(e){return c(a.default.mark((function t(){var i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,n.imgTransportLicenseUrl=i[0],n.tachar_transport_license=!0,t.next=5,n.$upload({url:r.ossLocation.vehicle.road,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}});case 16:i.sent,i.next=29;break;case 19:if("trailer_license_photo_first"!=e.currentTarget.dataset.index){i.next=25;break}return i.next=22,t.$photo({success:function(e){return c(a.default.mark((function t(){var i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,n.imgHangingCarPhotoUrl=i[0],n.tachar_hanging_car=!0,t.next=5,n.$upload({url:r.ossLocation.trailer.first,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}});case 22:i.sent,i.next=29;break;case 25:if("people_vehicle_photo"!=e.currentTarget.dataset.index){i.next=29;break}return i.next=28,t.$photo({success:function(e){return c(a.default.mark((function t(){var i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.tempFilePaths,n.imgPeopleVehicleUrl=i[0],n.tachar_people_vehicle=!0,t.next=5,n.$upload({url:r.ossLocation.vehicle.rc,file_path:i[0]});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()}});case 28:i.sent;case 29:case"end":return i.stop()}}),i)})))()},uploadDriverLicense:function(){n=this,e.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(t){var i=t.tempFilePaths;n.imgDriverLicenseUrl=i[0],n.tachar_driver_license=!0;var a=e.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:i[0],name:"file",formData:{user:"test"},success:function(t){e.showToast({title:"上传成功"})}});a.onProgressUpdate((function(e){n.percent=e.progress,console.log("上传进度"+e.progress),console.log("已经上传的数据长度"+e.totalBytesSent),console.log("预期需要上传的数据总长度"+e.totalBytesExpectedToSend)}))},error:function(e){console.log(e)}})},uploadDraggingCarPhoto:function(){n=this,e.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(t){var i=t.tempFilePaths;n.imgDraggingCarPhotoUrl=i[0],n.tachar_dragging_car=!0;var a=e.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:i[0],name:"file",formData:{user:"test"},success:function(t){e.showToast({title:"上传成功"}),n.disabled=!1,n.active=!0}});a.onProgressUpdate((function(e){n.percent=e.progress,console.log("上传进度"+e.progress),console.log("已经上传的数据长度"+e.totalBytesSent),console.log("预期需要上传的数据总长度"+e.totalBytesExpectedToSend)}))},error:function(e){console.log(e)}})},uploadDraggingTransportPhoto:function(){n=this,e.chooseImage({count:1,sizeType:["original","compressed"],header:{Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFiNWZiNTNkLTE3YzItNGVhZS1hNmU5LTc4MGQ2YTA3MGFmMiJ9.wq_R8uafaVC2irYT_AfvY6KLKja224RLgset5-JEG4aMPRjUv8-tZqEFKiS2cvLFVOYW6T2oF9LK5SyDIbchmQ"},success:function(t){var i=t.tempFilePaths;n.imgDraggingTransportPhotoUrl=i[0],n.tachar_dragging_transport=!0;var a=e.uploadFile({url:"http://182.61.138.90:8081/iscm/dispatch",filePath:i[0],name:"file",formData:{user:"test"},success:function(t){e.showToast({title:"上传成功"}),n.disabled=!1,n.active=!0}});a.onProgressUpdate((function(e){n.percent=e.progress,console.log("上传进度"+e.progress),console.log("已经上传的数据长度"+e.totalBytesSent),console.log("预期需要上传的数据总长度"+e.totalBytesExpectedToSend)}))},error:function(e){console.log(e)}})},cancelHangingCar:function(){this.imgHangingCarPhotoUrl="/static/vehicle_license.jpg",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_hanging_car=!1},cancelDraggingCar:function(){this.imgDraggingCarPhotoUrl="/static/id-front.png",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_dragging_car=!1},cancelDraggingTransport:function(){this.imgDraggingTransportPhotoUrl="/static/id-front.png",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_dragging_transport=!1},cancelDriverLicense:function(){this.imgDriverLicenseUrl="/static/id-front.png",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_driver_license=!1},cancelTransportLicense:function(){this.imgTransportLicenseUrl="/static/TransportLicense.png",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_transport_license=!1},cancelVehicleLicenseFirst:function(){this.imgVehicleLicenseFirstUrl="/static/vehicle_license.jpg",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_vehicle_license_first=!1},cancelVehicleLicenseSecond:function(){this.imgVehicleLicenseSecondUrl="/static/id-front.png",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_vehicle_license_second=!1},cancelPeopleVehicle:function(){this.imgPeopleVehicleUrl="/static/people_vehicle.jpg",setTimeout((function(){e.showToast({title:"删除照片成功，请重新选择",icon:"none"})}),500),this.tachar_people_vehicle=!1},formSubmit:function(t){var i=this;return c(a.default.mark((function t(){var n,r,s,o,c;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i.params.vehicleLicensePhotoFirst=e.getStorageSync("vehicleLicensePhotoFirst"),!(null==i.params.vehicleLicensePhotoFirst||""==i.params.vehicleLicensePhotoFirst||i.params.vehicleLicensePhotoFirst.length<1)){t.next=4;break}return e.showToast({title:"未提交行驶证主副页, 请提交",icon:"none"}),t.abrupt("return");case 4:if(i.params.vehicleRoadcertPhoto=e.getStorageSync("vehicleRoadcertPhoto"),!(null==i.params.vehicleRoadcertPhoto||""==i.params.vehicleRoadcertPhoto||i.params.vehicleRoadcertPhoto.length<1)){t.next=8;break}return e.showToast({title:"未提交道路运输证, 请提交",icon:"none"}),t.abrupt("return");case 8:if((null==i.params.whetherNewEnergy||""==i.params.whetherNewEnergy||i.params.whetherNewEnergy.length<1)&&(i.params.whetherNewEnergy=2),(null==i.params.vehicleSpecies||""==i.params.vehicleSpecies||i.params.vehicleSpecies.length<1)&&(i.params.vehicleSpecies=303),(null==i.params.vehiclePlateType||""==i.params.vehiclePlateType||i.params.vehiclePlateType.length<1)&&(i.params.vehiclePlateType="02"),(null==i.params.vehiclePlateColor||""==i.params.vehiclePlateColor||i.params.vehiclePlateColor.length<1)&&(i.params.vehiclePlateColor="2"),n=i.params.vehiclePlateNumber,r=/^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/,s=/^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF])))$/,o=/^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/,c=n.substr(-1),"挂"!=c){t.next=21;break}return e.showToast({title:"请勿输入挂车车牌",icon:"none"}),i.plate_num="",t.abrupt("return");case 21:if(r.test(n)){t.next=27;break}return e.showToast({title:"车牌号不正确",icon:"none"}),i.plate_num="",t.abrupt("return");case 27:if(!s.test(n)){t.next=37;break}if("新能源"!=i.energy_type){t.next=32;break}console.log("车牌号正确"),t.next=35;break;case 32:return e.showToast({title:"车牌号不正确，请确认是否为新能源车",icon:"none"}),i.plate_num="",t.abrupt("return");case 35:t.next=45;break;case 37:if(!o.test(n)){t.next=45;break}if("非新能源"!=i.energy_type){t.next=42;break}console.log("车牌号正确"),t.next=45;break;case 42:return e.showToast({title:"车牌号不正确，请确认是否为非新能源车",icon:"none"}),i.plate_num="",t.abrupt("return");case 45:if(!(null==i.params.vehicleLadenWeight||""==i.params.vehicleLadenWeight||i.params.vehicleLadenWeight.length<1)){t.next=48;break}return e.showToast({title:"未输入车辆总质量, 请输入",icon:"none"}),t.abrupt("return");case 48:if(!(null==i.params.vehicleTonnage||""==i.params.vehicleTonnage||i.params.vehicleTonnage.length<1)){t.next=51;break}return e.showToast({title:"未输入核定载质量, 请输入",icon:"none"}),t.abrupt("return");case 51:if(!(null==i.params.vehicleRoadcertNo||""==i.params.vehicleRoadcertNo||i.params.vehicleRoadcertNo.length<1)){t.next=54;break}return e.showToast({title:"未输入道路运输证号, 请输入",icon:"none"}),t.abrupt("return");case 54:if(!(null==i.params.vehicleAxlenum||""==i.params.vehicleAxlenum||i.params.vehicleAxlenum.length<1)){t.next=57;break}return e.showToast({title:"未输入车轴数, 请输入",icon:"none"}),t.abrupt("return");case 57:i.params.the_step=4,i.params.active_one_step=!0,i.params.active_two_step=!0,i.params.active_three_step=!0,i.params.active_four_step=!0,i.params.active_five_step=!1,e.setStorageSync("params_vehicle",i.params),i.$emit("register_vehicle_params",i.params);case 65:case"end":return t.stop()}}),t)})))()},backBusiness:function(){this.params.the_step=2,this.params.active_one_step=!0,this.params.active_two_step=!0,this.params.active_three_step=!1,this.params.active_four_step=!1,this.params.active_five_step=!1,e.setStorageSync("params_vehicle",this.params),this.$emit("register_vehicle_params",this.params)}}};t.default=l}).call(this,i("543d")["default"])},b63a:function(e,t,i){},db1a:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},r=[]},db74:function(e,t,i){"use strict";i.r(t);var n=i("fcdc"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},fcdc:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("66fd"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}function c(e,t){return f(e)||p(e,t)||h(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){if(e){if("string"===typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function p(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0)if(i.push(s.value),t&&i.length===t)break}catch(c){a=!0,r=c}finally{try{n||null==o["return"]||o["return"]()}finally{if(a)throw r}}return i}}function f(e){if(Array.isArray(e))return e}n.default.__xfl_select=n.default.__xfl_select||new n.default;var v={name:"xfl-select",props:{list:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},focusShowList:null,initValue:null,isCanInput:{type:Boolean,default:!1},selectHideType:{type:String,default:"hideAll"},placeholder:{type:String,default:"请选择"},style_Container:{type:String,default:""},disabled:{type:Boolean,default:!1},showItemNum:{type:Number,default:5},listShow:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0}},data:function(){return{isShowList:!1,selectText:"",activeIndex:-1,isRotate:!1,listTop__:50}},watch:{listShow:function(e,t){this.onDataChange_listShow(e,t)}},computed:{focusShowList__:function(){return null!=this.focusShowList&&this.focusShowList},listBoxHeight__:function(){var e=2;return this.showItemNum*e},showInput:function(){return this.isCanInput&&!this.disabled},innerList:function(){var e=[],t=this.list;return t.forEach((function(t,i){var n="object"===typeof t&&"value"in t?t.value:t,a="object"===typeof t&&1==t.disabled;e.push({isActive:!1,value:n,disabled:a})})),e}},mounted:function(){n.default.__xfl_select.$on("open",this.onOtherXflSelectOpen),this.switchMgr=new g(this.onListShow,this.onListHide),this.onDataChange_listShow(this.listShow,null),this.init()},beforeDestroy:function(){n.default.__xfl_select.$off("open",this.onOtherXflSelectOpen)},methods:{onOtherXflSelectOpen:function(e){"independent"!==this.selectHideType&&"hideOthers"!==this.selectHideType&&e!==this&&this.switchMgr.close(100)},init:function(){this.clearInput(),this.setInput(this.initValue),this.changeActiveIndex(this.initValue),this.getInputBoxHeight()},getInputBoxHeight:function(){var e=this,t=this;d(".show-box",t,(function(t){if(t){var i=6;e.listTop__=t[0].height+i}}))},getIndex:function(e){var t=m(this.innerList,e,"value");return t},itemIsDisabled:function(e){return this.innerList[e].disabled},itemIsActive:function(e){return e===this.activeIndex},onDataChange_listShow:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?this.switchMgr.open():this.switchMgr.close(100)},onFocus:function(e){this.focusShowList__&&this.switchMgr.open(),this.$emit("focus",e)},onBlur:function(e){this.focusShowList__&&this.switchMgr.close(100),this.$emit("blur",e)},onUpperClick:function(){this.disabled||(this.switchMgr.toggle("auto",-1,100),this.$emit("input-click"))},onClear:function(){this.clearItemActive(),this.clearInput(),this.$emit("clear")},onInput:function(e){var t=e.detail.value;this.changeActiveIndex(t),this.$emit("input",e)},clearInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.placeholder=null==e?this.placeholder:e,this.selectText=this.showInput?"":this.placeholder},setInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=e&&(this.selectText=e)},changeActiveIndex:function(e){if(null!=e){var t=e,i=e;"number"!==typeof e?t=this.getIndex(i):i=this.innerList[t].value,t>-1?!this.itemIsActive(t)&&this.setItemActive(t,i):this.clearItemActive(),this.setInput(i)}},clearItemActive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;e<0&&(this.activeIndex=-1)},setItemActive:function(e,t){this.itemIsDisabled(e)||(this.activeIndex=e)},onListClick:function(){},onClickItem:function(e,t){this.itemIsDisabled(e)?this.switchMgr.open():(this.switchMgr.close(100),this.disabled||this.itemIsActive(e)||(this.clearItemActive(),this.setItemActive(e,t),this.$emit("change",{newVal:t,oldVal:this.selectText,index:e,orignItem:this.list[e]}),this.setInput(t)))},onListHide:function(){this.isRotate=!1,this.isShowList=!1,this.$emit("visible-change",!1)},onListShow:function(){this.isShowList=!0,this.isRotate=!0,this.$emit("visible-change",!0),"independent"!==this.selectHideType&&"hideSelf"!==this.selectHideType&&n.default.__xfl_select.$emit("open",this)}}};function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.selector,a=void 0===i?"selector":i,r=t.component,s=void 0===r?null:r,o=t.attemptSpaceTime,l=void 0===o?16:o,h=t.attemptSpaceRate,u=void 0===h?1.5:h,p=t.totalAttemptNum,f=void 0===p?8:p,v=t.id,d=void 0===v||v,g=t.dataset,m=void 0===g||g,_=t.rect,y=void 0===_||_,x=t.size,w=void 0===x||x,T=t.scrollOffset,L=void 0===T||T,S=t.properties,P=void 0===S?[]:S,I=t.computedStyle,k=void 0===I?[]:I,A=t.context,C=void 0===A||A,V=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,O=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,F=arguments;a="string"===typeof F[0]?F[0]:String(a),"function"!==typeof F[1]&&(s=F[1],V=F[2],O=F[3]),!s instanceof n.default&&(s=null);var U={selector:a,attemptSpaceTime:l,totalAttemptNum:f,attemptSpaceRate:u,id:d,dataset:m,rect:y,size:w,scrollOffset:L,properties:P,computedStyle:k,context:C},B=e.createSelectorQuery();s&&B.in(s);var N,D="viewport"===a?B.selectViewport():B.selectAll(a);return D.fields(U),"function"!==typeof V&&(N=new Promise((function(e){return V=e}))),b((function(e,t){B.exec((function(i){var n=c(i,1),a=n[0];a&&0===a.length&&(a=null),a||f<=t?"function"===typeof V&&V.call(O,a):e(l),l=Math.round(l*u)}))}))(),N}t.default=v;var g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,e),this.onopen=t,this.onclose=i,this.isOpen=!1}return o(e,[{key:"toggle",value:function(){var e,t,i,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";"close"!==a&&"open"!==a&&(a=this.isOpen?"close":"open");for(var r,s=0;s<(arguments.length<=1?0:arguments.length-1);s++)switch(r=s+1<1||arguments.length<=s+1?void 0:arguments[s+1],typeof r){case"number":null==e?e=r:t=r;break;case"string":null==i?i=r:n=r;break}var o="open"===a?e:t,c="open"===a?i:n;this.change(a,null==o?-1:o,null==c?"both":c)}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";this.change("open",e,t)}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";this.change("close",e,t)}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"both";"open"===e?(clearTimeout(this.openTimer),this.openTimer=null):"close"===e?(clearTimeout(this.closeTimer),this.closeTimer=null):"both"===e&&(clearTimeout(this.closeTimer),this.closeTimer=null,clearTimeout(this.openTimer),this.openTimer=null)}},{key:"change",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"both";if(this.cancel(n),!(this.isOpen&&"open"===e||!this.isOpen&&"close"===e)){var a="on"+e;i<0?(this.isOpen="open"===e,"function"===typeof this[a]&&this[a]()):this[e+"Timer"]=setTimeout((function(){t.isOpen="open"===e,"function"===typeof t[a]&&t[a]()}),i)}}}]),e}();function m(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=-1;return i&&("string"===typeof i?i=i.split(/\s*[\,\.]\s*/):Array.isArray(i)||(i="")),_(e,(function(e,r,s){if(i&&(e=y(e,i)),"function"===typeof n?n(e,t,arrElem,r,s):e===t)return a=r,!1})),a}function _(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e||"function"===typeof e||"function"!==typeof t)return e;var n=Object.keys(e),a=e.length,r="number"==typeof a&&a>-1&&a%1==0&&a<=9007199254740991;if(r){for(var s,o=/^(?:0|[1-9]\d*)$/,c=9007199254740991,l=[],h=0;h<n.length;h++)s=n[h],o.test(s)&&+s<=c&&l.push(s);n=l}for(var u=0;u<n.length;u++)if(!1===t.call(i,e[n[u]],n[u],e))break;return e}function y(e,t){for(var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=0,s=e,o=t.length;r<o;r++){if(!s||"object"!==typeof s)return;if(i=t[r],r===o-1){if(void 0===n)return s[i];s[i]=n}else{if(!s[i]||"object"!==typeof s[i]){if(!a||void 0===n)return;s[i]={}}s=s[i]}}}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=function(e){return e=parseInt(e),!isNaN(e)&&isFinite(e)||(e=-1),e},n=[],a=function(e){if(null==e){for(var t=0;t<n.length;t++)clearTimeout(n[t]);n.length=0}else{var i=n.indexOf(e);i>-1&&(clearTimeout(n[i]),n.splice(i,1))}},r=0,s=function s(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";if("new"===c)a();else if("old"===c&&n.length>0)return;if(o=i(o),o<0)e.call(t,s,++r,n);else{var l=setTimeout((function(){a(l),e.call(t,s,++r,n)}),o);n.push(l)}};return s}}).call(this,i("543d")["default"])}},[["2eef","common/runtime","common/vendor"]]]);