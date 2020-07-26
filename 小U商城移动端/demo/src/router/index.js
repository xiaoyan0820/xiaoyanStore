import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//引入一级路由
// import Index from '@/components/pages/index'
// import Classify from '@/components/pages/classify'
const   Classify = ()=> Promise.resolve(import('@/components/pages/classify'))
const   Index = ()=> Promise.resolve(import('@/components/pages/index'))
const   ProDetail = ()=> Promise.resolve(import('@/components/pages/proDetail'))
const   Register = ()=> Promise.resolve(import('@/components/pages/register'))
const   Login = ()=> Promise.resolve(import('@/components/pages/login'))
//引入二级路由
// import Car from '@/components/views/car'
// import Mine from '@/components/views/mine'
// import Home from '@/components/views/home/home'
// import List from '@/components/views/list'
// import Order from '@/components/views/order'
const    Car = ()=> Promise.resolve(import('@/components/views/car'))
const  Mine = ()=> Promise.resolve(import('@/components/views/mine'))
const  Home  = ()=> Promise.resolve(import('@/components/views/home/home'))
const   List = ()=> Promise.resolve(import('@/components/views/list'))
const   Order= ()=> Promise.resolve(import('@/components/views/order'))
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        //二级路由
        {
          path:'/home',
          component:Home
        },
        {
          path:'/car',
          component:Car
        },
        {
          path:'/mine',
          component:Mine
        },
        {
          path:'/list',
          component:List
        },
        {
          path:'/order',
          component:Order
        },
        // 二级路由重定向
        {
          path:'',
          redirect:'/home'
        },
      ]
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/proDetail',
      component:ProDetail
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/login',
      component:Login
    },
    //一级路由重定向
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
