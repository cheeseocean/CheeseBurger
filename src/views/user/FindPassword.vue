<template>
  <h3 class="title">找回密码</h3>
  <van-form>
    <van-cell-group inset @submit="findPassword">
      <van-field v-model="username" name="用户名" clearable label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field v-model="email" type="password" name="邮箱" clearable label="邮箱" placeholder="邮箱" :rules="[{ required: true, message: '请填写邮箱' }]"/>
      <van-field v-model="code" center clearable label="邮箱验证码" placeholder="邮箱验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button type="primary" block round native-type="submit">提交</van-button>
      <div class="flex jst-cnt-between fs-14 mt-10">
        <router-link to="/login" class="co-blue">登录</router-link>
        <router-link to="/register" class="co-blue">注册</router-link>
      </div>
    </div>
  </van-form>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const username = ref('')
const email = ref('')
const code = ref('')

function findPassword() {
  console.log('找回密码')
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
