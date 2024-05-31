<template>
  <div class="wrapper">
    <div class="circle">
      <router-link class="link darulong" to="/catalogues/dragonlamp/layout/darulong">大蠕龙</router-link>
      <router-link class="link daocaolong" to="/catalogues/dragonlamp/layout/daocaolong">稻草龙</router-link>
      <router-link class="link bandenglong" to="/catalogues/dragonlamp/layout/bandenglong">板凳龙</router-link>

      <router-link class="link hehualong" to="/catalogues/dragonlamp/layout/hehualong">荷花龙</router-link>
      <router-link class="link xiaocailong" to="/catalogues/dragonlamp/layout/cailong">彩龙</router-link>

      <router-link class="link huangjinglong" to="/catalogues/dragonlamp/layout/huangjinglong"
        >黄荆龙</router-link
      >
      <router-link class="link zhubanglong" to="/catalogues/dragonlamp/layout/zhubanglong">竹梆龙</router-link>
      <router-link class="link huolong" to="/catalogues/dragonlamp/layout/huolong">火龙</router-link>
      <router-link class="link zhenglong" to="/catalogues/dragonlamp/layout/zhenglong">正龙</router-link>
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
    background: url('@/assets/img/catalogues/dragonlamp/index-bg.svg') no-repeat center;
    .darulong {
      position: absolute;
      top: 74px;
      left: 353px;
    }
    .daocaolong {
      position: absolute;
      top: 154px;
      left: 150px;
    }
    .bandenglong {
      position: absolute;
      top: 154px;
      left: 551px;
    }
    .hehualong {
      position: absolute;
      top: 319px;
      left: 65px;
    }
    .xiaocailong {
      position: absolute;
      top: 319px;
      left: 675px;
    }
    .huangjinglong {
      position: absolute;
      top: 527px;
      left: 85px;
    }
    .zhubanglong {
      position: absolute;
      top: 527px;
      left: 623px;
    }
    .huolong {
      position: absolute;
      top: 668px;
      left: 242px;
    }
    .zhenglong {
      position: absolute;
      top: 668px;
      left: 481px;
    }
  }
}
</style>
