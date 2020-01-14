import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* 注册全局过滤时间器 */
Vue.filter('formate', (data) => {
  let a = new Date(data)

  let Y = a.getFullYear()
  let M = a.getMonth() + 1
  let D = a.getDay()

  let H = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()

  function fn (b) {
    let res = b < 10 ? '0' + b : b
    return res
  }

  return `${Y}-${fn(M)}-${fn(D)} ${fn(H)}:${fn(m)}:${fn(s)}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
