import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
// 生产提示
Vue.config.productionTip = false

//导入网络请求的包
import {$http} from '@escook/request-miniprogram'
uni.$http = $http
//请求根路径
$http.baseUrl = ' https://api-hmugo-web.itheima.net'
// 请求拦截器
$http.beforeRequest = function(options) {
  uni.showLoading({
    title:"数据加载中..."
  })
}
//响应拦截器
$http.afterRequest = function() {
  uni.hideLoading()
}
// 封装弹框的方法
uni.$showMsg = function(title = '数据加载失败！', duration = 1500){
  uni.showToast({
      title,
      duration,
      icon: 'none',
    })
}


App.mpType = 'app'
const app = new Vue({
  ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif