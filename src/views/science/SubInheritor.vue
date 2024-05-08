<template>
  <div class="wrapper">
    <img class="full-screen" :src="fullImgUrl" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import inheritorGif from '@/assets/img/science/inheritor.gif'

const fullImgUrl = ref(inheritorGif)

onMounted(() => {
  fullImgUrl.value = inheritorGif + '?' + Date.now()
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
