<template>
  <div class="wrapper">
    <div class="circle">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div class="line5"></div>
      <div class="row-center">
        <span class="link" disabled to="/catalogues/dragonlamp/layout/jingjilong"></span>
        <router-link class="link" to="/catalogues/dragonlamp/layout/darulong">大蠕龙</router-link>
      </div>
      <div class="row-center2">
        <router-link class="link" to="/catalogues/dragonlamp/layout/daocaolong">稻草龙</router-link>
        <router-link class="link" to="/catalogues/dragonlamp/layout/bandenglong"
          >板凳龙</router-link
        >
      </div>
      <div class="row-space-between">
        <router-link class="link" to="/catalogues/dragonlamp/layout/hehualong">荷花龙</router-link>
        <router-link class="link" to="/catalogues/dragonlamp/layout/cailong">小彩龙</router-link>
      </div>
      <div class="row-center2">
        <router-link class="link" to="/catalogues/dragonlamp/layout/huangjinglong"
          >黄荆龙</router-link
        >
        <router-link class="link" to="/catalogues/dragonlamp/layout/zhubanglong"
          >竹梆龙</router-link
        >
      </div>
      <div class="row-center">
        <router-link class="link" to="/catalogues/dragonlamp/layout/huolong">火龙</router-link>
        <router-link class="link" to="/catalogues/dragonlamp/layout/zhenglong">正龙</router-link>
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
    width: 220px;
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
    }
    .row-center2 {
      display: flex;
      justify-content: center;
      gap: 350px;
    }
    .row-space-between {
      display: flex;
      justify-content: space-between;
    }
    .line1 {
      position: absolute;
      top: 50%;
      transform: scale(0.8) rotate(90deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .line2 {
      position: absolute;
      top: 50%;
      transform: scale(0.8) rotate(126deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .line3 {
      position: absolute;
      top: 50%;
      transform: scale(0.8) rotate(162deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .line4 {
      position: absolute;
      top: 50%;
      transform: scale(0.8) rotate(198deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .line5 {
      position: absolute;
      top: 50%;
      transform: scale(0.8) rotate(233deg);
      width: 100%;
      height: 1px;
      background: #fff;
    }
  }
}
</style>
