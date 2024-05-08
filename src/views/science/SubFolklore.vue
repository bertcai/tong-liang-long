<template>
  <div class="wrapper">
    <img class="full-screen" :src="fullImgUrl" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import folkLoreGif from '@/assets/img/science/folklore.gif'

const fullImgUrl = ref(folkLoreGif)

onMounted(() => {
  fullImgUrl.value = folkLoreGif
})
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
.full-screen {
  width: 1920px;
  height: 1080px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
