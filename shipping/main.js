import Vue from 'vue'
import App from './App'
import store from './store'

import { myRequest } from './util/api.js'
import { myPhoto } from './util/uploadphoto.js'
import { myImage } from './util/takephoto.js'

import { getRegistDicts,getRouters,getDicts } from './util/data.js'
import { myRegisterCarrier } from './util/registCarrier.js'
//常量及校验规则等
import * as pattern from '@/util/pattern.js';
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$request = myRequest
Vue.prototype.$upload = myPhoto
Vue.prototype.$photo = myImage

Vue.prototype.$waitAccept= 28//待接收    
Vue.prototype.$waitSendDispatch= 30//待派车 
Vue.prototype.$waitAuditLoadInfo= 33//待装货
Vue.prototype.$waitSign = 50        //待签收
Vue.prototype.$waitDepart = 40//待发车
Vue.prototype.$waitConfirmReceipt = 80   //待确认收货
Vue.prototype.$finished =90 //已完成

Vue.prototype.$getRegistDicts = getRegistDicts
Vue.prototype.$getDicts = getDicts
Vue.prototype.$getRouters = getRouters
Vue.prototype.$registCarrier = myRegisterCarrier
Vue.prototype.pattern = pattern

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()


