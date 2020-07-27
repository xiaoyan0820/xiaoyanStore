// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入重置样式
import '@/assets/css/reset.css'

Vue.config.productionTip = false

//引入vantUI框架
import VantUI from 'vant'
import 'vant/lib/index.css'

//封装一个图片的服务器
Vue.prototype.$imgUrl = 'http://localhost:3000'

Vue.use(VantUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
