import Vue from 'vue'
import App from './App'

import { myRequest } from './util/api.js'


Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$request = myRequest


const app = new Vue({
    ...App
})
app.$mount()
