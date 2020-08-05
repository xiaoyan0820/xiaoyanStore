// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue核心文件
import Vue from 'vue'
//引入根组件 可以省略.js后缀 也可省略.vue
import App from './App'
//引入路由文件
import router from './router'
import store from './store'
//定义中央事件总线 把vue实例化 挂载到vue原型上
Vue.prototype.$Event = new Vue();
//引入 axios
import axios from 'axios'
Vue.prototype.$http = axios
//引入vantUI框架
import VantUI from 'vant'
import 'vant/lib/index.css'
//重新创建自定义实例
//我可以给AXIOS实例添加很多自定义的属性
// let http = axios.create({
//   // /api是把http://localhost:3000地址重启
//   //上线之后可以把基础地址更换成为域名
//  // baseURL:'/api'
// })
Vue.use(VantUI)
//是否开启生产环境的提示
Vue.config.productionTip = false
//引入清除默认样式文件
import './assets/css/reset.css'
import './assets/js/remScale.js'
//全局引入阿里图标库
import './assets/font/iconfont.css'
//封装一个全局组件
import gCom from './common'
console.log(gCom,'模块 对象')
//对对象进行循环
for(let i in gCom){
  console.log(i,'是谁')
  Vue.component(i,gCom[i])
}
/* eslint-disable no-new */
//创建vue实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },//注册组件
  template: '<App/>'//根组件的渲染
})
{/* <App/>相当于<APP></APP> */}