import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login', // 登录
    name: 'Login',
    component: () => import('@/views/user/Login.vue')
  },
  {
    path: '/find-password', // 找回密码
    name: 'FindPassword',
    component: () => import('@/views/user/FindPassword.vue')
  },
  {
    path: '/register', // 注册
    name: 'Register',
    component: () => import('@/views/user/Register.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
