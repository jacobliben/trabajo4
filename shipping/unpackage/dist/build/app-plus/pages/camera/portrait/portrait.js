!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=31)}([function(t,e){t.exports={"@VERSION":2}},function(t,e,n){"use strict";function i(t,e,n,i,r,o,s,a,u,c){var l,p="function"==typeof t?t.options:t;if(u){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var d in u)f.call(u,d)&&!f.call(p.components,d)&&(p.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(p.functional){p._injectStyles=l;var h=p.render;p.render=function(t,e){return l.call(e),h(t,e)}}else{var m=p.beforeCreate;p.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return i}))},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(3).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=r.a},,,,function(t,e,n){"use strict";var i=n(23),r=n(15),o=n(1);var s=Object(o.a)(r.default,i.b,i.c,!1,null,null,"66668170",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(27).default,this.options.style):Object.assign(this.options.style,n(27).default)}).call(s),e.default=s.exports},,,,,,,,function(t,e,n){"use strict";var i=n(16),r=n.n(i);e.default=r.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=null,r={data:function(){return{message:"\u8bf7\u62cd\u6444\u82db\u5b66\u52a0",aspect:"2:3",windowWidth:"",windowHeight:"",camerastate:!1,livePusher:null,snapshotsrc:null}},onLoad:function(t){i=this,this.initCamera()},onReady:function(){this.livePusher=uni.createLivePusherContext("livePusher",this),this.startPreview()},methods:{initCamera:function(){uni.getSystemInfo({success:function(t){i.windowWidth=t.windowWidth,i.windowHeight=t.windowHeight;var e=i.aliquot(i.windowWidth,i.windowHeight);i.aspect=i.windowWidth/e+":"+i.windowHeight/e}})},aliquot:function(t,e){return t%e==0?e:this.aliquot(e,t%e)},startPreview:function(){this.livePusher.startPreview({success:function(t){"startPreview:ok"!=t.errMsg&&"operateLivePusher:ok"!=t.errMsg||(i.camerastate=!0)}})},stopPreview:function(){this.livePusher.stopPreview({success:function(t){i.camerastate=!1}})},back:function(){uni.navigateBack()},snapshot:function(){this.livePusher.snapshot({success:function(t){i.snapshotsrc=t.message.tempImagePath,i.stopPreview(),i.setImage(),uni.navigateBack()}})},flip:function(){this.livePusher.switchCamera()},setImage:function(){var t=getCurrentPages();t[t.length-2].$vm.setImage({path:i.snapshotsrc})}}};e.default=r},function(t,e){t.exports={".live-camera":{"":{justifyContent:["center",0,0,16],alignItems:["center",0,0,16]}},".outline":{".live-camera ":{position:["absolute",0,1,17],top:[0,0,1,17],left:[0,0,1,17],bottom:[0,0,1,17],width:["750rpx",0,1,17],height:["1125rpx",0,1,17],zIndex:[99,0,1,17],alignItems:["center",0,1,17],justifyContent:["center",0,1,17]}},".remind":{".live-camera ":{position:["absolute",0,1,18],top:["880rpx",0,1,18],width:["750rpx",0,1,18],zIndex:[100,0,1,18],alignItems:["center",0,1,18],justifyContent:["center",0,1,18]}},".remind-text":{".live-camera .remind ":{color:["#dddddd",0,2,19],fontWeight:["bold",0,2,19]}},".menu":{".live-camera ":{position:["absolute",0,1,20],left:[0,0,1,20],bottom:[0,0,1,20],width:["750rpx",0,1,20],height:["180rpx",0,1,20],zIndex:[98,0,1,20],alignItems:["center",0,1,20],justifyContent:["center",0,1,20]}},".menu-mask":{".live-camera .menu ":{position:["absolute",0,2,21],left:[0,0,2,21],bottom:[0,0,2,21],width:["750rpx",0,2,21],height:["180rpx",0,2,21],zIndex:[98,0,2,21]}},".menu-back":{".live-camera .menu ":{position:["absolute",0,2,22],left:["30rpx",0,2,22],bottom:["50rpx",0,2,22],width:["80rpx",0,2,22],height:["80rpx",0,2,22],zIndex:[99,0,2,22],alignItems:["center",0,2,22],justifyContent:["center",0,2,22]}},".menu-snapshot":{".live-camera .menu ":{width:["130rpx",0,2,23],height:["130rpx",0,2,23],zIndex:[99,0,2,23]}},".menu-flip":{".live-camera .menu ":{position:["absolute",0,2,24],right:["30rpx",0,2,24],bottom:["50rpx",0,2,24],width:["80rpx",0,2,24],height:["80rpx",0,2,24],zIndex:[99,0,2,24],alignItems:["center",0,2,24],justifyContent:["center",0,2,24]}},"@VERSION":2}},,,,,,function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["live-camera"],style:{width:t.windowWidth,height:t.windowHeight}},[n("live-pusher",{ref:"livePusher",staticClass:["livePusher"],style:{width:t.windowWidth,height:t.windowHeight},attrs:{id:"livePusher",mode:"FHD",beauty:"0",whiteness:"0",aspect:t.aspect,minBitrate:"1000",audioQuality:"16KHz",devicePosition:"back",autoFocus:!0,muted:!0,enableCamera:!0,enableMic:!1,zoom:!1}}),n("cover-view",{staticClass:["remind"]},[n("u-text",{staticClass:["remind-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.message))])]),n("cover-view",{staticClass:["outline"]},[n("cover-image",{staticClass:["outline"],attrs:{src:"/static/live-camera/outline/portrait.png"}})],1),n("view",{staticClass:["menu"]},[n("cover-image",{staticClass:["menu-mask"],attrs:{src:"/static/live-camera/bar.png"}}),n("cover-image",{staticClass:["menu-back"],attrs:{src:"/static/live-camera/back.png"},on:{click:t.back}}),n("cover-image",{staticClass:["menu-snapshot"],attrs:{src:"/static/live-camera/shutter.png"},on:{click:t.snapshot}}),n("cover-image",{staticClass:["menu-flip"],attrs:{src:"/static/live-camera/flip.png"},on:{click:t.flip}})],1)],1)])},r=[]},,,,function(t,e,n){"use strict";n.r(e);var i=n(17),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=r.a},,,,function(t,e,n){"use strict";n.r(e);n(2);var i=n(7);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),i.default.mpType="page",i.default.route="pages/camera/portrait/portrait",i.default.el="#root",new Vue(i.default)}]);