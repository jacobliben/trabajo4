(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-camera-idcard-idcard"],{3596:function(e,t,i){"use strict";i.r(t);var a=i("c02c"),n=i("55dc");for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);i("7a6a");var s,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"66f6a22e",null,!1,a["a"],s);t["default"]=r.exports},"44be":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=null,n={data:function(){return{poenCarmeInterval:null,dotype:"face",message:"",aspect:"2:3",cameraWidth:"",cameraHeight:"",windowWidth:"",windowHeight:"",camerastate:!1,livePusher:null,snapshotsrc:null}},onLoad:function(e){a=this,this.dotype=e.dotype,this.initCamera()},onReady:function(){this.livePusher=uni.createLivePusherContext("livePusher",this),this.startPreview(),this.poenCarme()},methods:{poenCarme:function(){},initCamera:function(){uni.getSystemInfo({success:function(e){a.windowWidth=e.windowWidth,a.windowHeight=e.windowHeight,a.cameraWidth=e.windowWidth,a.cameraHeight=1.5*e.windowWidth}})},startPreview:function(){this.livePusher.startPreview({success:function(e){}})},stopPreview:function(){this.livePusher.stopPreview({success:function(e){a.camerastate=!1}})},statechange:function(e){1007==e.detail.code?a.camerastate=!0:-1301==e.detail.code&&(a.camerastate=!1)},back:function(){uni.navigateBack()},snapshot:function(){var e=this;uni.chooseImage({count:1,sourceType:["camera"],success:function(t){e.snapshotsrc=t.tempFilePaths[0],e.stopPreview(),e.setImage(),uni.navigateBack()}})},flip:function(){this.livePusher.switchCamera()},setImage:function(){var e=getCurrentPages(),t=e[e.length-2];t.$vm.setImage({path:a.snapshotsrc,dotype:this.dotype})}}};t.default=n},"51fa":function(e,t,i){var a=i("8e44");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("9c0a1114",a,!0,{sourceMap:!1,shadowMode:!1})},"55dc":function(e,t,i){"use strict";i.r(t);var a=i("44be"),n=i.n(a);for(var c in a)"default"!==c&&function(e){i.d(t,e,(function(){return a[e]}))}(c);t["default"]=n.a},"7a6a":function(e,t,i){"use strict";var a=i("51fa"),n=i.n(a);n.a},"8e44":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".live-camera .preview[data-v-66f6a22e]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.live-camera .preview .outline-box[data-v-66f6a22e]{position:absolute;top:0;left:0;bottom:0;z-index:99;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.live-camera .preview .outline-box .outline-img[data-v-66f6a22e]{width:%?750?%;height:%?1125?%}.live-camera .preview .remind[data-v-66f6a22e]{position:absolute;top:%?880?%;width:%?750?%;z-index:100;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.live-camera .preview .remind .remind-text[data-v-66f6a22e]{color:#ddd;font-weight:700}.live-camera .menu[data-v-66f6a22e]{position:absolute;left:0;bottom:0;width:%?750?%;height:%?180?%;z-index:98;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.live-camera .menu .menu-mask[data-v-66f6a22e]{position:absolute;left:0;bottom:0;width:%?750?%;height:%?180?%;z-index:98}.live-camera .menu .menu-back[data-v-66f6a22e]{position:absolute;left:%?30?%;bottom:%?50?%;width:%?80?%;height:%?80?%;z-index:99;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.live-camera .menu .menu-snapshot[data-v-66f6a22e]{width:%?130?%;height:%?130?%;z-index:99}.live-camera .menu .menu-flip[data-v-66f6a22e]{position:absolute;right:%?30?%;bottom:%?50?%;width:%?80?%;height:%?80?%;z-index:99;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""]),e.exports=t},c02c:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"live-camera",style:{width:e.windowWidth,height:e.windowHeight}},[i("v-uni-view",{staticClass:"preview",style:{width:e.windowWidth,height:e.windowHeight-80}},[i("v-uni-live-pusher",{ref:"livePusher",staticClass:"livePusher",style:{width:e.cameraWidth,height:e.cameraHeight},attrs:{id:"livePusher",mode:"FHD",beauty:"0",whiteness:"0",aspect:e.aspect,"min-bitrate":"6000","audio-quality":"16KHz","device-position":"back","auto-focus":!0,muted:!0,"enable-camera":!0,"enable-mic":!1,zoom:!1},on:{statechange:function(t){arguments[0]=t=e.$handleEvent(t),e.statechange.apply(void 0,arguments)}}}),i("v-uni-cover-view",{staticClass:"remind"},[i("v-uni-text",{staticClass:"remind-text"},[e._v(e._s(e.message))])],1),i("v-uni-cover-view",{staticClass:"outline-box",style:{width:e.windowWidth,height:e.windowHeight-80}},[i("v-uni-cover-image",{staticClass:"outline-img",attrs:{src:"idcardface"==e.dotype?"/static/live-camera/outline/idcardface.png":"/static/live-camera/outline/idcardbadge.png"}})],1)],1),i("v-uni-view",{staticClass:"menu"},[i("v-uni-cover-image",{staticClass:"menu-mask",attrs:{src:"/static/live-camera/bar.png"}}),i("v-uni-cover-image",{staticClass:"menu-back",attrs:{src:"/static/live-camera/back.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}}),i("v-uni-cover-image",{staticClass:"menu-snapshot",attrs:{src:"/static/live-camera/shutter.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.snapshot.apply(void 0,arguments)}}}),i("v-uni-cover-image",{staticClass:"menu-flip",attrs:{src:"/static/live-camera/flip.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.flip.apply(void 0,arguments)}}})],1)],1)},c=[]}}]);