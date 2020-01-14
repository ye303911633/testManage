import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/Index'),
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/Article')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*
  导航守卫，负责路由路径的判断
*/
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    token ? next() : next({ name: 'Login' })
  }
})

export default router
