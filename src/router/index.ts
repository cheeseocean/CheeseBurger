import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

export const LOGIN_PATH = '/login'
export const FIND_PASSWORD_PATH = '/find-password'
export const REGISTRE_PATH = '/register'
export const INDEX_PATH = '/index'
export const COMMUNITY_PATH = '/community'
export const CREATION_PATH = '/creation'
export const HIDE_MENU_PATH_SET = new Set([LOGIN_PATH, FIND_PASSWORD_PATH, REGISTRE_PATH]) // 需隐藏菜单的路由列表
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: INDEX_PATH
  },
  {
    path: LOGIN_PATH, // 登录
    name: 'Login',
    component: () => import('@/views/user/login/login.vue')
  },
  {
    path: FIND_PASSWORD_PATH, // 找回密码
    name: 'FindPassword',
    component: () => import('@/views/user/find-password/find-password.vue')
  },
  {
    path: REGISTRE_PATH, // 注册
    name: 'Register',
    component: () => import('@/views/user/register/register.vue')
  },
  {
    path: INDEX_PATH, // 首页
    name: 'Index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: COMMUNITY_PATH, // 云社区
    name: 'Community',
    component: () => import('@/views/community/community.vue')
  }, {
    path: CREATION_PATH, // 创作中心
    name: 'Creation',
    component: () => import('@/views/creation/creation.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
