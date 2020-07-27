import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      component: () => import('@/pages/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      component: () => import('@/pages/register'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/address',
      component: () => import('@/pages/address')
    },
    {
      path: '/goodsList',
      component: () => import('@/pages/goodsList'),
      meta: {
        title: '商品列表'
      }
    },
    {
        path: '/detail',
        component: () => import('@/pages/detail'),
        meta: {
          title: '商品详情'
        }
      },
    {
      path: '/index',
      component: () => import('@/pages/index'),
      children: [{
          path: '/home',
          component: () => import('@/views/home'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/classify',
          component: () => import('@/views/classify'),
          meta: {
            title: '分类'
          }
        },
        {
          path: '/car',
          component: () => import('@/views/car'),
          meta: {
            title: '购物车'
          }
        },
        {
          path: '/mine',
          component: () => import('@/views/mine'),
          meta: {
            title: '个人中心'
          }
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
