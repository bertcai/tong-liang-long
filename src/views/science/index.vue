<template>
  <div class="wrapper">
    <div class="pre" @click="toHistory">
      <img class="art-text-btn" src="@/assets/img/text-shi.svg" />
    </div>
    <div class="main">
      <div class="title title-font">
        <img src="@/assets/img/logo.svg" style="margin-right: 8px" />
        龙韵灯彩图典
      </div>
      <div class="main-content">
        <div class="outside">
          <div class="inner">
            <img class="float-img" src="@/assets/img/science/main-content.svg" />
          </div>
          <div class="text">
            <img src="@/assets/img/science/dengxue.svg" />
          </div>
        </div>
      </div>
      <div class="case-in">
        <div class="outside">
          <div class="inner"></div>
        </div>
      </div>
      <div class="click-in" @click="toScienceConcept">
        <img src="@/assets/img/case-in-text.svg" />
      </div>
    </div>
    <div class="next" @click="toCatalogues">
      <img class="art-text-btn" src="@/assets/img/text-deng.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toScienceConcept = () => {
  router.push('/science/layout')
}

const toHistory = () => {
  router.push('/history')
}

const toCatalogues = () => {
  router.push('/catalogues')
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .pre {
    display: flex;
    align-items: center;
    flex: 0;
    min-width: 128px;
    height: 100%;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .title {
      display: flex;
      align-items: center;
      margin-top: 42px;
    }
    .main-content {
      width: 346px;
      height: 629px;
      margin-top: 78px;
      .outside {
        width: 346px;
        height: 629px;
        background-image: url('@/assets/img/outside-bg.svg');
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .inner {
          width: 313px;
          height: 599.955px;
          flex-shrink: 0;
          border-radius: 173px;
          background: linear-gradient(
            186deg,
            #e8198b 5.04%,
            rgba(233, 50, 149, 0.75) 26.87%,
            rgba(236, 115, 173, 0.23) 73.12%,
            rgba(238, 146, 185, 0) 93.84%
          );
          overflow: visible;
          position: relative;
          img {
            max-width: none;
            position: fixed;
            top: 254px;
            left: 50%;
            translate: -50%;
            /* 每2秒缩小10% */
            animation: zoom-decrise 6s infinite;
          }
        }
        .text {
          position: absolute;
          right: -133px;
          top: 79px;
        }
      }
    }
    .case-in {
      margin-top: 18px;
      .outside {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150.6px;
        height: 150.8px;
        background-image: url('@/assets/img/case-in-outside.svg');
        /* 每秒逆时针旋转10度 */
        animation: rotate-reverse 36s infinite;
        .inner {
          width: 67.155px;
          height: 67.155px;
          background-image: url('@/assets/img/case-in-inner.svg');
          /* 每秒顺时针旋转20度 */
          animation: rotate-forward 18s infinite;
        }
      }
    }
    .click-in {
      margin-top: 18px;
      animation: blink 2s infinite;
      cursor: pointer;
    }
  }
  .next {
    display: flex;
    align-items: center;
    flex: 0;
    height: 100%;
    min-width: 128px;
  }
}
</style>
