<template>
  <header>
    <van-icon color="#409eff" class="avatar" name="user-circle-o"/>
    <span class="ml-10">游客4872</span>
  </header>
  <main>
    <div class="card-box">
      <div class="card">
        会员
      </div>
      <div class="card">
        声音卡
      </div>
    </div>
    <div class="main-card">
      <div class="left">
        <van-icon name="flower-o"/>
        <span>近期睡眠报告</span>
      </div>
      <span>查看详情></span>
    </div>
  </main>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "~@/assets/css/public.scss";

header {
  padding-top: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  background: #42b983;

  .avatar {
    font-size: 40px;
    color: $primary-color;
  }
}

main {

  .card-box {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    .card {
      width: 45%;
      border-radius: 10px;
      padding: 10px;
      background: #42b983;
    }
  }

  .main-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    background: #273D3D;
    font-size: 14px;
    color: #fff;
    margin-top: 20px;

    .left {
      display: flex;
      align-items: center;
    }

    .van-icon {
      font-size: 24px;
    }
  }
}
</style>
