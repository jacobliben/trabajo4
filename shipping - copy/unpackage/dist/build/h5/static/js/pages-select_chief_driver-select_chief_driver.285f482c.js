(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-select_chief_driver-select_chief_driver","pages-company_business_info-company_business_info","pages-vehicle-vehicle"],{"06c5":function(t,e,r){"use strict";r("a630"),r("fb6a"),r("d3b7"),r("25f0"),r("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=i(r("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(t){if("string"===typeof t)return(0,n.default)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.default)(t,e):void 0}}},"1ada":function(t,e,r){"use strict";var n=r("4ea4");r("99af"),r("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r("2909"));r("96cf");var a=n(r("1da1")),o={data:function(){return{load_more:!0,driverWorkStatusOptions:[],driver_work_status_index:0,driverWorkStatusSendValue:[],driverVehicleClassOptions:[],driver_vehicle_class_index:0,driverName:"",driverIdNumber:"",driverWorkStatus:"",driverPhone:"",driverVehicleClass:"",drivers_list:[],current:-1,chief_driver_choosen:"",chief_driver_id:"",queryParams:{pageNum:1,pageSize:5}}},created:function(){this.getDriverWorkStatusOptions(),this.getDriverVehicleClassOptions()},mounted:function(){this.searchDriver()},methods:{searchDriverBtn:function(){this.drivers_list=[],this.queryParams.pageNum=1,this.queryParams.pageSize=1e3,this.searchDriver()},getDriverWorkStatusOptions:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t,r=uni.getStorageSync("token"),e.next=4,t.$request({url:"/system/dict/data/type/vehicle_work_status",header:{Authorization:r}});case 4:n=e.sent,t.driverWorkStatusOptions=n.data.data.map((function(t){return t.dictLabel})),t.driverWorkStatusSendValue=n.data.data.map((function(t){return t.dictValue})),t.driverWorkStatusOptions.unshift("请选择工作状态");case 8:case"end":return e.stop()}}),e)})))()},getDriverVehicleClassOptions:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t,r=uni.getStorageSync("token"),e.next=4,t.$request({url:"/system/dict/data/type/driver_vehicle_class",header:{Authorization:r}});case 4:n=e.sent,t.driverVehicleClassOptions=n.data.data.map((function(t){return t.dictLabel})),t.driverVehicleClassOptions.unshift("请选择准驾车型");case 7:case"end":return e.stop()}}),e)})))()},searchDriverName:function(t){this.driverName=t.target.value},searchDriverIdNumber:function(t){this.driverIdNumber=t.target.value},bindPickerDriverWorkStatusChange:function(t){this.driver_work_status_index=t.target.value;var e=this.driver_work_status_index;this.driverWorkStatus=this.driverWorkStatusSendValue[e-1]},searchDriverPhone:function(t){this.driverPhone=t.target.value},upper:function(t){},lower:function(t){var e=this;setTimeout((function(){e.queryParams.pageNum+=1,e.load_more&&e.searchDriver()}),1e3)},radioChange:function(t){uni.setStorageSync("chief_driver_choosen",t.target.value),uni.navigateTo({url:"/pages/choosing_driver/choosing_driver"})},searchDriver:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r,n,a,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.queryParams,n=t.driverName,a=t.driverIdNumber,o=t.driverPhone,s=uni.getStorageSync("token"),e.next=7,t.$request({url:"/app/driver/list?driverName=".concat(n,"&driverIdNumber=").concat(a,"&driverPhone=").concat(o),header:{Authorization:s},data:r});case 7:if(c=e.sent,t.queryParams.pageNum*t.queryParams.pageSize>=c.data.total&&(t.load_more=!1),!(t.drivers_list.length<c.data.total)){e.next=13;break}t.drivers_list=[].concat((0,i.default)(t.drivers_list),(0,i.default)(c.data.rows)),e.next=15;break;case 13:return uni.showToast({title:"没有更多的信息了",icon:"none"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e)})))()}}};e.default=o},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function s(t){n(o,i,a,s,c,"next",t)}function c(t){n(o,i,a,s,c,"throw",t)}s(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2909:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var n=s(r("6005")),i=s(r("db90")),a=s(r("06c5")),o=s(r("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,n.default)(t)||(0,i.default)(t)||(0,a.default)(t)||(0,o.default)()}},3427:function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"57a6":function(t,e,r){var n=r("9b9b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("575237d0",n,!0,{sourceMap:!1,shadowMode:!1})},6005:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=i(r("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t))return(0,n.default)(t)}},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"75af":function(t,e,r){"use strict";var n=r("57a6"),i=r.n(n);i.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=m;var d="suspendedStart",f="suspendedYield",v="executing",h="completed",p={},b={};b[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(D([])));g&&g!==n&&i.call(g,o)&&(b=g);var w=C.prototype=x.prototype=Object.create(b);k.prototype=w.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},S(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,r,n){var i=new O(m(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=D,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function m(t,e,r,n){var i=e&&e.prototype instanceof x?e:x,a=Object.create(i.prototype),o=new N(n||[]);return a._invoke=P(t,r,o),a}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function k(){}function C(){}function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(r,n,a,o){var s=_(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(s.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function P(t,e,r){var n=d;return function(i,a){if(n===v)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw a;return I()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=j(o,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var c=_(t,e,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=_(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function D(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b9b":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".vehicle-has-approved-body[data-v-380b3fa8]{background-color:#fff}.scroll-Y[data-v-380b3fa8]{height:%?800?%}.vehicle_content[data-v-380b3fa8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.vehicle_content .left[data-v-380b3fa8]{width:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.vehicle_content .left .truck[data-v-380b3fa8]{width:%?50?%;height:%?50?%;margin:%?5?% %?30?%}.vehicle_content .right[data-v-380b3fa8]{width:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#aaa;padding-right:%?20?%}.vehicle_content .right .id[data-v-380b3fa8]{color:#ddd;font-size:%?15?%}.work_state[data-v-380b3fa8]{color:#ddd;margin-right:%?10?%;font-size:%?15?%;border:%?1?% solid #ddd;padding:%?5?%}.driverPhone[data-v-380b3fa8]{color:#0081ff;font-size:%?15?%}.btn[data-v-380b3fa8]{color:#fff;background-color:#0081ff;height:%?60?%;width:%?80?%}.one_vehicle[data-v-380b3fa8]{background-color:#fff;border:%?1?% solid #c8c7cc;border-radius:%?10?%;width:90%;margin-left:5%;margin-bottom:%?20?%}.one_vehicle .first-row[data-v-380b3fa8]{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.one_vehicle .first-row .vehicle-no[data-v-380b3fa8]{font-weight:700}.one_vehicle .first-row .vehicle_state[data-v-380b3fa8]{font-size:%?22?%;color:#39b54a}",""]),t.exports=e},bc3d:function(t,e,r){"use strict";r.r(e);var n=r("1ada"),i=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},c224:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"vehicle-has-approved-body"},[r("v-uni-view",{staticClass:"cu-bar search bg-white"},[r("v-uni-text",{staticClass:"margin-left"},[t._v("姓名")]),r("v-uni-view",{staticClass:"search-form round"},[r("v-uni-text",{staticClass:"cuIcon-search"}),r("v-uni-input",{attrs:{placeholder:"通过姓名搜索",type:"text","selection-start":"-1","selection-end":"-1",cursor:"-1"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchDriverName.apply(void 0,arguments)}}})],1)],1),r("v-uni-view",{staticClass:"cu-bar search bg-white"},[r("v-uni-text",{staticClass:"margin-left"},[t._v("身份证号码")]),r("v-uni-view",{staticClass:"search-form round"},[r("v-uni-text",{staticClass:"cuIcon-search"}),r("v-uni-input",{attrs:{placeholder:"通过身份证号码搜索",type:"text","selection-start":"-1","selection-end":"-1",cursor:"-1"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchDriverIdNumber.apply(void 0,arguments)}}})],1)],1),r("v-uni-view",{staticClass:"cu-bar search bg-white"},[r("v-uni-text",{staticClass:"margin-left"},[t._v("手机号码")]),r("v-uni-view",{staticClass:"search-form round"},[r("v-uni-text",{staticClass:"cuIcon-search"}),r("v-uni-input",{attrs:{placeholder:"通过手机号码搜索",type:"text","selection-start":"-1","selection-end":"-1",cursor:"-1"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchDriverPhone.apply(void 0,arguments)}}})],1),r("v-uni-view",{staticClass:"action"},[r("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur round",attrs:{role:"button","aria-disabled":"false"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchDriverBtn.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),r("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-y":"true","lower-threshold":"200","enable-flex":"true"},on:{scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.upper.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[r("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.drivers_list,(function(e,n){return r("v-uni-label",{key:e.value},[r("v-uni-view",{staticClass:"one_vehicle"},[r("v-uni-view",{staticClass:"first-row"},[r("v-uni-view",{staticClass:"vehicle-no"},[t._v(t._s(e.driverName))]),r("v-uni-view",[r("v-uni-text",{staticClass:"work_state"},[t._v("手机号")]),r("v-uni-text",{staticClass:"driverPhone"},[t._v(t._s(e.driverPhone))])],1),r("v-uni-view",[r("v-uni-text",{staticClass:"work_state"},[t._v("工作状态")]),r("v-uni-text",{staticClass:"vehicle_state"},[t._v("空闲")])],1)],1),r("v-uni-view",{staticClass:"vehicle_content"},[r("v-uni-view",{staticClass:"left"},[r("v-uni-view",[r("v-uni-image",{staticClass:"truck",attrs:{src:"/static/truck.png",mode:"aspectFit"}})],1),r("v-uni-view",[r("v-uni-text",{staticClass:"driverVehicleClass"},[t._v("准驾车型/")]),r("v-uni-text",[t._v(t._s(e.driverVehicleClass))])],1)],1),r("v-uni-view",{staticClass:"right"},[r("v-uni-view",{staticClass:"id"},[t._v("身份证号码")]),r("v-uni-view",{staticClass:"driverIdNumber"},[t._v(t._s(e.driverIdNumber))])],1),r("v-uni-radio",{attrs:{value:JSON.stringify(e),checked:n===t.current}})],1)],1)],1)})),1)],1)],1)},a=[]},d0390:function(t,e,r){"use strict";r.r(e);var n=r("c224"),i=r("bc3d");for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);r("75af");var o,s=r("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"380b3fa8",null,!1,n["a"],o);e["default"]=c.exports},db90:function(t,e,r){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}}]);