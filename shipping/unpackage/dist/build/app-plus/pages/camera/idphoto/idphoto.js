!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(e,t){e.exports={"@VERSION":2}},function(e,t,n){"use strict";function i(e,t,n,i,o,r,a,s,c,u){var l,p="function"==typeof e?e.options:e;if(c){p.components||(p.components={});var d=Object.prototype.hasOwnProperty;for(var f in c)d.call(c,f)&&!d.call(p.components,f)&&(p.components[f]=c[f])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(p.mixins||(p.mixins=[])).push(u)),t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var h=p.render;p.render=function(e,t){return l.call(t),h(e,t)}}else{var m=p.beforeCreate;p.beforeCreate=m?[].concat(m,l):[l]}return{exports:e,options:p}}n.d(t,"a",(function(){return i}))},function(e,t,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(3).default,Vue.prototype.__$appStyle__)},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},function(e,t,n){"use strict";function i(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function r(e,t){switch(i(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];console[e].apply(console,n)},t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.shift();if(o())return t.push(t.pop().replace("at ","uni-app:///")),console[a].apply(console,t);var s=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,r)+"---END:JSON---"}catch(n){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=i(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),c="";if(s.length>1){var u=s.pop();c=s.join("---COMMA---"),0===u.indexOf(" at ")?c+=u:c+="---COMMA---"+u}else c=s[0];console[a](c)}},function(e,t,n){"use strict";var i=n(22),o=n(9),r=n(1);var a=Object(r.a)(o.default,i.b,i.c,!1,null,null,"4031ff32",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(25).default,this.options.style):Object.assign(this.options.style,n(25).default)}).call(a),t.default=a.exports},,,,function(e,t,n){"use strict";var i=n(10),o=n.n(i);t.default=o.a},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=null,i={data:function(){return{dotype:"idphoto",message:"",aspect:"2:3",cameraWidth:"",cameraHeight:"",windowWidth:"",windowHeight:"",camerastate:!1,livePusher:null,snapshotsrc:null}},onLoad:function(e){n=this,null!=e.dotype&&(this.dotype=e.dotype),this.initCamera()},onReady:function(){this.livePusher=uni.createLivePusherContext("livePusher",this),this.startPreview(),this.poenCarme()},methods:{poenCarme:function(){"Android"==plus.os.name&&(this.poenCarmeInterval=setInterval((function(){e("log",n.camerastate," at pages/camera/idphoto/idphoto.nvue:84"),n.camerastate||n.startPreview()}),2500))},initCamera:function(){uni.getSystemInfo({success:function(e){n.windowWidth=e.windowWidth,n.windowHeight=e.windowHeight,n.cameraWidth=e.windowWidth,n.cameraHeight=1.5*e.windowWidth}})},startPreview:function(){this.livePusher.startPreview({success:function(t){e("log",t," at pages/camera/idphoto/idphoto.nvue:107")}})},stopPreview:function(){this.livePusher.stopPreview({success:function(e){n.camerastate=!1}})},statechange:function(t){e("log",t," at pages/camera/idphoto/idphoto.nvue:123"),1007==t.detail.code?n.camerastate=!0:-1301==t.detail.code&&(n.camerastate=!1)},back:function(){uni.navigateBack()},snapshot:function(){this.livePusher.snapshot({success:function(e){n.snapshotsrc=e.message.tempImagePath,n.stopPreview(),n.setImage(),uni.navigateBack()}})},flip:function(){this.livePusher.switchCamera()},setImage:function(){var e=getCurrentPages();e[e.length-2].$vm.setImage({path:n.snapshotsrc,dotype:this.dotype})}}};t.default=i}).call(this,n(4).default)},function(e,t){e.exports={".preview":{".live-camera ":{justifyContent:["center",0,1,16],alignItems:["center",0,1,16]}},".outline-box":{".live-camera .preview ":{position:["absolute",0,2,17],top:[0,0,2,17],left:[0,0,2,17],bottom:[0,0,2,17],zIndex:[99,0,2,17],alignItems:["center",0,2,17],justifyContent:["center",0,2,17]}},".outline-img":{".live-camera .preview .outline-box ":{width:["750rpx",0,3,18],height:["1125rpx",0,3,18]}},".remind":{".live-camera .preview ":{position:["absolute",0,2,19],top:["880rpx",0,2,19],width:["750rpx",0,2,19],zIndex:[100,0,2,19],alignItems:["center",0,2,19],justifyContent:["center",0,2,19]}},".remind-text":{".live-camera .preview .remind ":{color:["#dddddd",0,3,20],fontWeight:["bold",0,3,20]}},".menu":{".live-camera ":{position:["absolute",0,1,21],left:[0,0,1,21],bottom:[0,0,1,21],width:["750rpx",0,1,21],height:["180rpx",0,1,21],zIndex:[98,0,1,21],alignItems:["center",0,1,21],justifyContent:["center",0,1,21]}},".menu-mask":{".live-camera .menu ":{position:["absolute",0,2,22],left:[0,0,2,22],bottom:[0,0,2,22],width:["750rpx",0,2,22],height:["180rpx",0,2,22],zIndex:[98,0,2,22]}},".menu-back":{".live-camera .menu ":{position:["absolute",0,2,23],left:["30rpx",0,2,23],bottom:["50rpx",0,2,23],width:["80rpx",0,2,23],height:["80rpx",0,2,23],zIndex:[99,0,2,23],alignItems:["center",0,2,23],justifyContent:["center",0,2,23]}},".menu-snapshot":{".live-camera .menu ":{width:["130rpx",0,2,24],height:["130rpx",0,2,24],zIndex:[99,0,2,24]}},".menu-flip":{".live-camera .menu ":{position:["absolute",0,2,25],right:["30rpx",0,2,25],bottom:["50rpx",0,2,25],width:["80rpx",0,2,25],height:["80rpx",0,2,25],zIndex:[99,0,2,25],alignItems:["center",0,2,25],justifyContent:["center",0,2,25]}},"@VERSION":2}},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["live-camera"],style:{width:e.windowWidth,height:e.windowHeight}},[n("view",{staticClass:["preview"],style:{width:e.windowWidth,height:e.windowHeight-80}},[n("live-pusher",{ref:"livePusher",staticClass:["livePusher"],style:{width:e.cameraWidth,height:e.cameraHeight},attrs:{id:"livePusher",mode:"FHD",beauty:"1",whiteness:"0",aspect:e.aspect,minBitrate:"1000",audioQuality:"16KHz",devicePosition:"back",autoFocus:!0,muted:!0,enableCamera:!0,enableMic:!1,zoom:!1},on:{statechange:e.statechange}}),n("cover-view",{staticClass:["remind"]},[n("u-text",{staticClass:["remind-text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.message))])]),n("cover-view",{staticClass:["outline-box"],style:{width:e.windowWidth,height:e.windowHeight-80}},[n("cover-image",{staticClass:["outline-img"],attrs:{src:"/static/live-camera/outline/idphotoskin.png"}})],1)],1),n("view",{staticClass:["menu"]},[n("cover-image",{staticClass:["menu-mask"],attrs:{src:"/static/live-camera/bar.png"}}),n("cover-image",{staticClass:["menu-back"],attrs:{src:"/static/live-camera/back.png"},on:{click:e.back}}),n("cover-image",{staticClass:["menu-snapshot"],attrs:{src:"/static/live-camera/shutter.png"},on:{click:e.snapshot}}),n("cover-image",{staticClass:["menu-flip"],attrs:{src:"/static/live-camera/flip.png"},on:{click:e.flip}})],1)])])},o=[]},,,function(e,t,n){"use strict";n.r(t);var i=n(11),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},,,,function(e,t,n){"use strict";n.r(t);n(2);var i=n(5);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),i.default.mpType="page",i.default.route="pages/camera/idphoto/idphoto",i.default.el="#root",new Vue(i.default)}]);