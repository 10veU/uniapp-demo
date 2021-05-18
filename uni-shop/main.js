import Vue from 'vue'
import App from './App'
import {apiRequest} from './util/api.js'

Vue.prototype.$apiRequest = apiRequest
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
