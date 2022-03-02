<template>
  <div class="personal-box">
    <header>
      <div class="avatar-box">
        <div class="flex al-i-center">
          <van-icon class="avatar" name="user-circle-o"/>
          <span class="ml-10">游客4872</span>
        </div>
        <span>空间 &gt;</span>
      </div>
      <div class="head-tab-box">
        <div class="tab">
          <span class="co-black">199</span>
          <span>动态</span>
        </div>
        <div class="tab">
          <span class="co-black">9999</span>
          <span>粉丝</span>
        </div>
        <div class="tab">
          <span class="co-black">1</span>
          <span>关注</span>
        </div>
      </div>
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
      <div class="nav-box">
        <nav>
          <van-icon name="fire-o"/>
          <span>睡眠报告</span>
        </nav>
        <nav>
          <van-icon name="fire-o"/>
          <span>我喜欢的</span>
        </nav>
        <nav>
          <van-icon name="fire-o"/>
          <span>我的插单</span>
        </nav>
        <nav>
          <van-icon name="fire-o"/>
          <span>消息中心</span>
        </nav>
      </div>
    </main>
    <footer>
      <van-cell title="播放历史" is-link/>
      <van-cell title="更换图标" is-link/>
      <van-cell title="设置" is-link/>
      <van-cell title="设置2" is-link/>
    </footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "~@/assets/css/public.scss";

.personal-box {
  background: #f5f5f5;
  padding-bottom: 10px;

  header {
    font-size: 14px;
    color: darkgrey;

    .avatar-box {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }

    .avatar {
      font-size: 50px;
      color: darkgrey;
    }

    .head-tab-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .tab {
      display: flex;
      flex: 1;
      height: 40px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border-right: 1px solid #ccc;

      &:last-of-type {
        border-right: none;
      }
    }
  }

  main {

    .card-box {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }

    .card {
      width: 45%;
      border-radius: 10px;
      padding: 10px;
      background: #42b983;
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
      margin: 20px 10px 0;
    }

    .left {
      display: flex;
      align-items: center;
      height: 80px;
    }

    .van-icon {
      font-size: 24px;
    }

    .nav-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      margin: 20px 10px 0;
      padding: 15px;
      color: grey;
      border-radius: 10px;
      background: #fff;
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .van-icon {
      font-size: 30px;
      margin-bottom: 5px;
    }
  }

  footer {
    border-radius: 10px;
    background: #fff;
    padding: 0 5px;
    margin: 20px 10px 0;
  }
}
</style>
