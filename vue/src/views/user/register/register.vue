<template>
  <h3 class="title">注册</h3>
  <van-form @submit="register">
    <van-cell-group inset>
      <van-field required v-model="username" name="用户名" clearable label="用户名" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field required v-model="password" type="password" name="密码" clearable label="密码" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]"/>
      <van-field required v-model="password2" type="password" name="确认密码" clearable label="确认密码" placeholder="请确认密码" :rules="[{ required: true, message: '请再次填写密码' }]"/>
      <van-field required v-model="email" name="邮箱" clearable label="邮箱" placeholder="请输入邮箱" :rules="[{ required: true, message: '请填写邮箱' }]"/>
      <van-field required v-model="code" center clearable label="邮箱验证码" placeholder="请输入验证码" :rules="[{ required: true, message: '请填写邮箱验证码' }]">
        <template #button>
          <code-button :validator="() => !!email" :request-config="{url: ''}"/>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button type="primary" block round native-type="submit">注册</van-button>
      <div class="flex jst-cnt-between fs-14 mt-10">
        <router-link to="/find-password" class="co-blue">忘记密码?</router-link>
        <router-link to="/login" class="co-blue">登录</router-link>
      </div>
    </div>
  </van-form>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import CodeButton from '@/components/user/code-button.vue'
import http from '@/http/http'
import {GenResponse} from '@/types/types'
import {Toast} from 'vant'

const username = ref('')
const email = ref('')
const password = ref('')
const password2 = ref('')
const code = ref('')

function register() {
  http.post<GenResponse>('/register', {username: username.value, password: password.value, email: email.value}).then(r => {
    if (r.status) return Toast.fail(r.message)
    Toast.success(r.message)
  })
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/public.scss";

.title {
  color: $primary-color;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
}
</style>
