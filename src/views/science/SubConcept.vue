<template>
  <div class="wrapper">
    <div class="flourish-embed flourish-hierarchy" data-src="visualisation/17848323"></div>
    <div class="description">
      <div class="item">
        <div class="color"></div>
        <div class="text"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
useScriptTag('https://public.flourish.studio/resources/embed.js')
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 220px;
  margin-top: 10px;
  .description {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .item {
      .color {
      }
      .text {
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
  background: #fff;
}
</style>
<style>
iframe {
  height: 650px !important;
}
</style>
