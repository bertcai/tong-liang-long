<template>
  <div class="wrapper">
    <div class="flourish-embed flourish-hierarchy" data-src="visualisation/17845020"></div>
    <div class="description">
      <div class="item" v-for="item in descriptionList" :key="item.text">
        <div class="color" :style="`background: ${item.color};`"></div>
        <div class="text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import { ref } from 'vue'
useScriptTag('https://public.flourish.studio/resources/embed.js')

const descriptionList = ref([
  {
    color: '#4328E7',
    text: '龙的造型'
  },
  {
    color: '#FF6283',
    text: '彩扎工艺'
  },
  {
    color: '#FFC502',
    text: '舞龙的音乐'
  },
  {
    color: '#1AA7EE',
    text: '龙的照明装置'
  },
  {
    color: '#88E99A',
    text: '服饰'
  },
  {
    color: '#9654E5',
    text: '舞龙的道具'
  },
  {
    color: '#F80',
    text: '龙舞的动作与组合'
  },
  {
    color: '#007D8E',
    text: '舞龙的烟火'
  },
  {
    color: '#29DAE4',
    text: '民风民俗'
  }
])
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .description {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 32px;
    width: 1090px;
    .item {
      width: 214px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 26px;
      .color {
        width: 70px;
        height: 13px;
      }
      .text {
        margin-left: 10px;
        font-family: Inter;
        color: #fee1f1;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
.flourish-embed {
  width: 1200px;
  height: 650px;
  /* background: #fff; */
}
</style>
<style>
iframe {
  height: 650px !important;
}
</style>
