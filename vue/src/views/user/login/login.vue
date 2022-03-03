<template>
  <h3 class="title">登录</h3>
  <van-form @submit="login">
    <van-cell-group inset>
      <van-field v-model="username" name="用户名" clearable label="用户名" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field v-model="password" type="password" name="密码" clearable label="密码" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]"/>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button type="primary" block round native-type="submit">登录</van-button>
      <div class="flex jst-cnt-between fs-14 mt-10">
        <router-link to="/find-password" class="co-blue">忘记密码?</router-link>
        <router-link to="/register" class="co-blue">注册</router-link>
      </div>
    </div>
    <div class="icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="icon" viewBox="0 0 16 16">
        <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
      <svg class="icon ml-10" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2732" width="30" height="30">
        <path
            d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512"
            fill="#FBBC05" p-id="2733"></path>
        <path
            d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88"
            fill="#EA4335" p-id="2734"></path>
        <path
            d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776"
            fill="#34A853" p-id="2735"></path>
        <path
            d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667"
            fill="#4285F4" p-id="2736"></path>
      </svg>
    </div>
  </van-form>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import http from '@/http/http'
import base64 from 'base-64'
import {useRouter} from 'vue-router'
import {INDEX_PATH} from '@/router'

const username = ref('')
const password = ref('')
const router = useRouter()

function login() {
  console.log('login')
  const formData = new FormData()
  formData.append('username', username.value)
  formData.append('password', base64.encode(password.value))
  http.post('', formData,
      {headers: {'Content-Type': 'multipart/form-data'}}).then(r => console.log(r))
  router.push(INDEX_PATH)
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/public.scss";

.title {
  color: $primary-color;
  margin-top: 150px;
  margin-bottom: 50px;
  text-align: center;
}

.icons {
  margin-top: 150px;
  text-align: center;

  .icon {
    width: 30px;
    height: 30px;
  }
}
</style>
