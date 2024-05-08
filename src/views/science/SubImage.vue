<template>
  <Vue3Lottie class="fullscreen" :animationData="animationJson" :height="1080" :width="1920" />
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import animationJson from '@/assets/lottie/science/image.json'
</script>

<style scoped>
.fullscreen {
  position: fixed;
  background: transparent;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
