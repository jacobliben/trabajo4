(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-change_phone-change_phone","pages-company_business_info-company_business_info","pages-vehicle-vehicle"],{"1da1":function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,u,"next",e)}function u(e){n(a,o,i,c,u,"throw",e)}c(void 0)}))}}r("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},"5e5d":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",[r("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-text",{staticClass:"title"},[e._v("原手机号码")]),r("v-uni-input",{attrs:{type:"number",maxlength:"11",name:"cellphone",placeholder:"请输入原手机",value:e.old_phone,disabled:!0,focus:!0},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getmobile.apply(void 0,arguments)}}})],1),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-text",{staticClass:"title"},[e._v("更换手机号码")]),r("v-uni-text",{staticClass:"red"},[e._v("*")]),r("v-uni-input",{attrs:{type:"text",placeholder:"请输入新手机号",maxlength:"11",value:e.tel_num2,name:"mobile"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getNewMobile.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.checkPhone.apply(void 0,arguments)}}})],1),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-text",{staticClass:"title"},[e._v("验证码")]),r("v-uni-text",{staticClass:"red"},[e._v("*")]),r("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入您收到的验证码",value:e.veri_code,name:"verify_code"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getVerifyCode.apply(void 0,arguments)}}}),r("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{role:"button",size:"mini",disabled:e.codeDisabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v(e._s(e.codeText))])],1),r("v-uni-view",{staticClass:"btn-row"},[r("v-uni-button",{staticClass:"cu-btn bg-gradual-green round bg-blue",attrs:{"form-type":"submit"}},[e._v("确认提交")])],1)],1)],1)},i=[]},6802:function(e,t,r){r("c975"),r("a9e3"),r("4d63"),r("ac1f"),r("25f0"),r("1276"),e.exports={error:"",check:function(e,t){for(var r=0;r<t.length;r++){if(!t[r].checkType)return!0;if(!t[r].name)return!0;if(!t[r].errorMsg)return!0;if(!e[t[r].name])return this.error=t[r].errorMsg,!1;switch(t[r].checkType){case"string":var n=new RegExp("^.{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"int":n=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[r].checkRule+"}$");if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[r].name]))return this.error=t[r].errorMsg,!1;var o=t[r].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[r].name]>o[1]||e[t[r].name]<o[0])return this.error=t[r].errorMsg,!1;break;case"betweenD":n=/^-?[1-9][0-9]?$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;o=t[r].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[r].name]>o[1]||e[t[r].name]<o[0])return this.error=t[r].errorMsg,!1;break;case"betweenF":n=/^-?[0-9][0-9]?.+[0-9]+$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;o=t[r].checkRule.split(",");if(o[0]=Number(o[0]),o[1]=Number(o[1]),e[t[r].name]>o[1]||e[t[r].name]<o[0])return this.error=t[r].errorMsg,!1;break;case"same":if(e[t[r].name]!=t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"notsame":if(e[t[r].name]==t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"email":n=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"phoneno":n=/^1[0-9]{10,10}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"zipcode":n=/^[0-9]{6}$/;if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"reg":n=new RegExp(t[r].checkRule);if(!n.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"in":if(-1==t[r].checkRule.indexOf(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"notnull":if(null==e[t[r].name]||e[t[r].name].length<1)return this.error=t[r].errorMsg,!1;break}}return!0},isNumber:function(e){return e=Number(e),NaN!=e}}},"77ec":function(e,t,r){"use strict";r.r(t);var n=r("9b5d"),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"885a":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,".red[data-v-7682683b]{color:red}.acuerdo[data-v-7682683b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;text-decoration:none;width:100%}.terms[data-v-7682683b]{color:#429bff;margin-left:%?10?%}.user-password[data-v-7682683b]{position:relative}.end-icon[data-v-7682683b]{position:absolute;top:%?5?%;right:%?0?%}.btn-row[data-v-7682683b]{width:100%;margin-top:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.current-btn[data-v-7682683b]{background-color:#0081ff;color:#fff}.disabled-btn[data-v-7682683b]{background-color:#ddd}",""]),e.exports=t},"96cf":function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof e,l=t.regeneratorRuntime;if(l)s&&(e.exports=l);else{l=t.regeneratorRuntime=s?e.exports:{},l.wrap=w;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(C([])));b&&b!==n&&o.call(b,a)&&(g=b);var y=E.prototype=k.prototype=Object.create(g);_.prototype=y.constructor=E,E.constructor=_,E[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(y),e},l.awrap=function(e){return{__await:e}},L(M.prototype),M.prototype[c]=function(){return this},l.AsyncIterator=M,l.async=function(e,t,r,n){var o=new M(w(e,t,r,n));return l.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=C,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(e,t,r,n){var o=t&&t.prototype instanceof k?t:k,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=T(e,r,a),i}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function E(){}function L(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function M(e){function t(r,n,i,a){var c=x(e[r],e,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return t("throw",e,i,a)}))}a(c.arg)}var r;function n(e,n){function o(){return new Promise((function(r,o){t(e,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function T(e,t,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return O()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(e,t,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function N(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,N(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function C(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){while(++n<e.length)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9b5d":function(e,t,r){"use strict";var n=r("4ea4");r("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var o=n(r("1da1")),i=r("6802"),a={data:function(){return{old_phone:"",user:"",tel_num2:"",veri_code:"",phone:"",code:"",codeDisabled:!0,codeText:"获取",is_correct:!1}},onLoad:function(){this.user=uni.getStorageSync("user_info"),this.old_phone=this.user.data.user.phonenumber},methods:{getNewMobile:function(e){this.tel_num2=e.target.value,this.phone=e.target.value},checkPhone:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.phone,11!=e.phone.length){t.next=8;break}return t.next=4,e.$request({url:"/validUser",method:"POST",data:{mobile:r}});case 4:n=t.sent,"该手机号尚未注册"==n.data.msg?(uni.showToast({title:"该手机号可以被注册",icon:"none"}),e.codeDisabled=!1):(uni.showToast({title:"该手机号已被注册过了！",icon:"none"}),e.tel_num2="",e.codeDisabled=!0),t.next=11;break;case 8:uni.showToast({title:"手机号格式不正确,请重输",icon:"none"}),e.tel_num="",e.codeDisabled=!0;case 11:case"end":return t.stop()}}),t)})))()},getVerifyCode:function(e){this.veri_code=e.target.value,this.code=e.target.value},getCode:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,t.next=3,e.$request({url:"/getRegistCode/"+e.phone});case 3:t.sent,uni.showToast({title:"验证码已发送",icon:"none"}),e.codeDisabled=!0,n=60,o=setInterval((function(){n--,n>0?r.codeText=n+"s":(r.codeText="重新获取",clearInterval(o),r.codeDisabled=!1)}),1e3);case 8:case"end":return t.stop()}}),t)})))()},formSubmit:function(e){var t=this;return(0,o.default)(regeneratorRuntime.mark((function r(){var n,o,a,c,u,s,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=[{name:"cellphone",checkType:"phoneno",errorMsg:"手机号格式有误"},{name:"verify_code",rule:/^[0-9a-zA-Z]{4,10}$/,errorMsg:"验证码格式有误"}],!(null==t.code||""==t.code||t.code.length<4)){r.next=5;break}return uni.showToast({title:"验证码至少4位,请输入",icon:"none"}),t.veri_code="",r.abrupt("return");case 5:if(o=e.detail.value,a=t.phone,c=t.code,u=i.check(o,n),s=uni.getStorageSync("token"),!u){r.next=17;break}return r.next=13,t.$request({url:"/system/user/profile/updateUserPhone?phone=".concat(a,"&code=").concat(c),method:"PUT",header:{Authorization:s}});case 13:l=r.sent,200==l.data.code?uni.reLaunch({url:"/pages/login_general/login_general"}):uni.showToast({title:l.data.msg,icon:"none"}),r.next=18;break;case 17:""!=i.error?uni.showToast({title:i.error,icon:"none"}):uni.showToast({title:"格式有误!",icon:"none"});case 18:case"end":return r.stop()}}),r)})))()}}};t.default=a},a915:function(e,t,r){var n=r("885a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("4f06").default;o("5da9b776",n,!0,{sourceMap:!1,shadowMode:!1})},b1ab:function(e,t,r){"use strict";r.r(t);var n=r("5e5d"),o=r("77ec");for(var i in o)"default"!==i&&function(e){r.d(t,e,(function(){return o[e]}))}(i);r("e84a");var a,c=r("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"7682683b",null,!1,n["a"],a);t["default"]=u.exports},e84a:function(e,t,r){"use strict";var n=r("a915"),o=r.n(n);o.a}}]);