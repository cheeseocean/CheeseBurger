<template>
  <h3 class="title">登录</h3>
  <van-form @submit="login">
    <van-cell-group inset>
      <van-field v-model="username" name="用户名" clearable label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field v-model="password" type="password" name="密码" clearable label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]"/>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button type="primary" block round native-type="submit">登录</van-button>
      <div class="flex jst-cnt-between fs-14 mt-10">
        <router-link to="/find-password" class="co-blue">忘记密码?</router-link>
        <router-link to="/register" class="co-blue">注册</router-link>
      </div>
    </div>
  </van-form>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const username = ref('')
const password = ref('')

function login() {
  console.log('login')
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
</style>
