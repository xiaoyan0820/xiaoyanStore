import Vue from 'vue'
import Router from 'vue-router'
//解决冗余路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  //路由模式
  mode: 'history',
  routes: [{
      path: '/login',
      component: () => import('@/components/pages/login')
    },
    {
      path: '/index',
      component: () => import('@/components/pages/index'),
      children: [{
          path: '/menu',
          component: () => import('@/components/views/menu'),
          meta: { //自定义对象
            name: '菜单管理'
          }
        },
        {
          path: '/user',
          component: () => import('@/components/views/user'),
          meta: { //自定义对象
            name: '管理员管理'
          }
        },
        {
          path: '/goods',
          component: () => import('@/components/views/goods/goods'),
          meta:{
            name:'商品管理'
          }
        }, {
          path: '/home',
          component: () => import('@/components/views/home')
        },
        {
          path: '/role',
          component: () => import('@/components/views/role'),
          meta: {
            name: '角色管理'
          }
        },
        {
            path: '/sort',
            component: () => import('@/components/views/sort'),
            meta: {
              name: '商品分类'
            }
          },
          {
            path: '/specs',
            component: () => import('@/components/views/specs'),
            meta: {
              name: '商品规格'
            }
          },
          {
            path: '/banner',
            component: () => import('@/components/views/banner/banner'),
            meta: {
              name: '轮播图管理'
            }
          },
          {
            path: '/banner1',
            component: () => import('@/components/views/banner1'),
            meta: {
              name: '轮播图管理1'
            }
          },
          {
            path: '/seck',
            component: () => import('@/components/views/seck/seck'),
            meta: {
              name: '秒杀管理'
            }
          },
          {
            path: '/member',
            component: () => import('@/components/views/member/member'),
            meta: {
              name: '会员管理'
            }
          },
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

//路由导航守卫之钩子函数
router.beforeEach((to, from, next) => {
  //如果跳转的页面是登录页 ，就继续
  if (to.path == '/login') {
    next()
    return
  }
  //如果缓存没数据，就重新登录
  if(!sessionStorage.getItem('userInfo')){
      next('/login')
  }
  //如果你的缓存有值 你就可以继续
  next()

})
export default router

