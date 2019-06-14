import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://www.yangfugui.com/ordering/api/'

axios.defaults.timeout = 2000
axios.defaults.deta = {
  'device-type': 'wechat'
}
axios.defaults.header = {
  'Accept': 'application/json',
  'content-type': 'application/x-www-form-urlencoded'
}

Vue.use(VueAxios, axios)
