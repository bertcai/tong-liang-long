<template>
  <div class="wrapper">
    <div class="circle">
      <router-link class="link paideng" to="/catalogues/colorlamp/layout/paideng">牌灯</router-link>
      <router-link class="link shibaxueshi" to="/catalogues/colorlamp/layout/shibaxueshi"
        >十八学士</router-link
      >
      <router-link class="link zhukennangua" to="/catalogues/colorlamp/layout/zhukennangua"
        >猪啃南瓜</router-link
      >
      <router-link class="link liyutiaolongmen" to="/catalogues/colorlamp/layout/liyutiaolongmen"
        >鲤鱼跳龙门</router-link
      >
      <router-link class="link niqiuchitangyuan" to="/catalogues/colorlamp/layout/niqiuchitangyuan"
        >泥鳅吃汤圆</router-link
      >
      <router-link class="link santiaoshen" to="/catalogues/colorlamp/layout/santiaoshen"
        >三条鲹</router-link
      >
      <router-link class="link liangshi" to="/catalogues/colorlamp/layout/liangshi"
        >亮狮</router-link
      >
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
    &:hover {
      opacity: 1;
      font-size: 48px;
    }
  }
  .circle {
    width: 812px;
    height: 812px;
    position: relative;
    background: url('@/assets/img/catalogues/colorlamp/index-bg.svg') no-repeat center;
    .paideng {
      position: absolute;
      top: 76px;
      left: 369px;
    }
    .shibaxueshi {
      position: absolute;
      top: 205px;
      left: 95px;
    }
    .zhukennangua {
      position: absolute;
      top: 205px;
      right: 96px;
    }
    .liyutiaolongmen {
      position: absolute;
      top: 428px;
      left: 75px;
    }
    .niqiuchitangyuan {
      position: absolute;
      top: 428px;
      right: 56px;
    }
    .santiaoshen {
      position: absolute;
      bottom: 119px;
      left: 217px;
    }
    .liangshi {
      position: absolute;
      bottom: 119px;
      right: 229px;
    }
  }
}
</style>
