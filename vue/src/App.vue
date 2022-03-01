<template>
  <div class="main">
    <router-view/>
    <van-tabbar v-if="!HIDE_MENU_PATH_SET.has($route.path)" route>
      <van-tabbar-item icon="home-o" :to="INDEX_PATH">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot :to="COMMUNITY_PATH">云社区</van-tabbar-item>
      <van-tabbar-item icon="search" dot :to="VIDEOS_PATH">云视频</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5" :to="CREATION_PATH">创作中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20" :to="PERSONAL_PATH">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts" setup>
import {HIDE_MENU_PATH_SET, INDEX_PATH, COMMUNITY_PATH, CREATION_PATH, VIDEOS_PATH, PERSONAL_PATH} from "@/router";

</script>
<style lang="scss" scoped>
.main {
  max-width: 540PX;
  width: 100%;
}
</style>
