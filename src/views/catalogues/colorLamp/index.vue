<template>
  <div class="wrapper">
    <div class="circle">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div class="row-center">
        <span class="link" to="/catalogues/colorlamp/layout/xiniuwangyue"> </span>
        <router-link class="link" to="/catalogues/colorlamp/layout/paideng">牌灯</router-link>
      </div>
      <div class="row-space-between">
        <router-link class="link" to="/catalogues/colorlamp/layout/shibaxueshi"
          >十八学士</router-link
        >
        <router-link class="link" to="/catalogues/colorlamp/layout/zhukennangua"
          >猪啃南瓜</router-link
        >
      </div>
      <div class="row-space-between">
        <router-link class="link" to="/catalogues/colorlamp/layout/liyutiaolongmen"
          >鲤鱼跳龙门</router-link
        >
        <router-link class="link" to="/catalogues/colorlamp/layout/niqiuchitangyuan"
          >泥鳅吃汤圆</router-link
        >
      </div>
      <div class="row-center">
        <router-link class="link" to="/catalogues/colorlamp/layout/santiaoshen">三条鲹</router-link>
        <router-link class="link" to="/catalogues/colorlamp/layout/liangshi">亮狮</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
    font-family: FZMingShangTiS-R-GB;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    opacity: 0.44;
    height: 54px;
    width: 240px;
    &:hover {
      opacity: 1;
      font-size: 48px;
    }
  }
  .circle {
    width: 900px;
    display: flex;
    flex-direction: column;
    gap: 130px;
    position: relative;
    .row-center {
      display: flex;
      justify-content: center;
      gap: 80px;
    }
    .row-space-between {
      display: flex;
      justify-content: space-between;
    }
    .line1 {
      position: absolute;
      top: 50%;
      transform: rotate(45deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .line2 {
      position: absolute;
      top: 50%;
      transform: rotate(135deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .line3 {
      position: absolute;
      top: 50%;
      transform: rotate(0deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .line4 {
      position: absolute;
      top: 50%;
      transform: rotate(90deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
  }
}
</style>
