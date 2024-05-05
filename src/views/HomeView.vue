<template>
  <div class="wrapper">
    <div class="title title-font">
      <img src="@/assets/img/logo.svg" style="margin-right: 8px" />
      龙韵灯彩图典
    </div>
    <div class="main-content">
      <div class="fish">
        <img src="@/assets/img/fish.svg" />
      </div>
      <div class="start" @click="toHistoryPage()">
        <img src="@/assets/img/start.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toHistoryPage = () => {
  router.push('/history')
}
</script>
<style scoped lang="less">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  .title {
    display: flex;
    position: absolute;
    top: 80px;
    left: 128px;
    width: 221px;
    height: 27px;
  }
  .main-content {
    width: 717.69px;
    height: 776px;
    position: relative;
    .start {
      position: absolute;
      border-radius: 16px;
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(254, 225, 241, 0.11);
      bottom: 42px;
      left: 314px;
      /**
       * 闪烁动画 1s 无限循环 透明度 0.5-1
       */
      animation: blink 2s infinite;
      cursor: pointer;
    }
  }
}
</style>
