import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import qs from 'qs'

import '../node_modules/animate.css/animate.css'

axios.defaults.baseURL = 'http://www.kbftech.cn/city/api/'

axios.defaults.method = 'post'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = false

// 添加响应拦截器
// axios.interceptors.request.use(
//   config => {
//     if (config.method === 'post') {
//       config.data = qs.stringify(config.data)
//     }
//     return config
//   },
//   error => {
//     console.log(error)
//     Promise.reject(error)
//   }
// )

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
