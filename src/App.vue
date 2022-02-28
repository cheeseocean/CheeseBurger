<template>
  <div class="main">
    <router-view/>
    <van-tabbar v-if="!HIDE_MENU_PATH_SET.has($route.path)" route>
      <van-tabbar-item icon="home-o" :to="INDEX_PATH">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot :to="COMMUNITY_PATH">云社区</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5" :to="CREATION_PATH">云创作</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">创作中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {HIDE_MENU_PATH_SET, INDEX_PATH, COMMUNITY_PATH, CREATION_PATH} from "@/router";

const active = ref(0)
</script>
<style lang="scss" scoped>
.main {
  padding: 0 15px;
  max-width: 750PX;
  max-height: 600PX;
}
</style>
