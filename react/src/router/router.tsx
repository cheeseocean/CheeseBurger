import Login from "../views/user/login/login";
import FindPassword from "../views/user/find-password/find-password";
import Register from "../views/user/register/register";
import Index from "@/views/index";
import Community from "@/views/community/community";
import Creation from "@/views/creation/creation";

export const login = {
  path: '/login',
  element: <Login/>
}
export const findPassword = {
  path: '/find-password',
  element: <FindPassword/>
}
export const register = {
  path: '/register',
  element: <Register/>
}

export const index = {
  path: '/index',
  element: <Index/>
}
export const community = {
  path: '/community',
  element: <Community/>
}
export const creation = {
  path: '/creation',
  element: <Creation/>
}
export const HIDE_MENU_PATH_SET = new Set([login.path, findPassword.path, register.path]) // 需隐藏菜单的路由列表
