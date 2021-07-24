import Vue from 'vue'
import App from './App'

import { myRequest } from './util/api.js'
import { myPhoto } from './util/uploadphoto.js'
import { myImage } from './util/takephoto.js'



Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$request = myRequest
Vue.prototype.$upload = myPhoto
Vue.prototype.$photo = myImage

const app = new Vue({
    ...App
})
app.$mount()
