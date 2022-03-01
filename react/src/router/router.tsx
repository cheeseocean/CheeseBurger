import Login from "@/views/user/login/login";
import FindPassword from "@/views/user/find-password/find-password";
import Register from "@/views/user/register/register";
import Index from "@/views/index";
import Community from "@/views/community/community";
import Creation from "@/views/creation/creation";
import Videos from "@/views/videos/videos";
import Personal from "@/views/personal/personal";

export const login = {
  path: '/login', // 登录
  element: <Login/>
}
export const findPassword = {
  path: '/find-password', // 找回密码
  element: <FindPassword/>
}
export const register = {
  path: '/register', // 注册
  element: <Register/>
}

export const index = {
  path: '/index', // 首页
  element: <Index/>
}
export const community = {
  path: '/community', // 云社区
  element: <Community/>
}
export const creation = {
  path: '/creation', // 创作中心
  element: <Creation/>
}
export const videos = {
  path: '/videos', // 云视频
  element: <Videos/>
}
export const personal = {
  path: '/personal', // 个人中心
  element: <Personal/>
}
export const HIDE_MENU_PATH_SET = new Set([login.path, findPassword.path, register.path]) // 需隐藏菜单的路由列表
