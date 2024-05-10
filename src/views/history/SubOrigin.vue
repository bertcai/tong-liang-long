<template>
  <div class="wrapper">
    <img class="full-screen" :src="gifS" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gif from '@/assets/img/history/origin.gif'
const random = ref(0)
let gifS = ref(gif + '?' + random.value)
onMounted(() => {
  random.value = Date.now()
  gifS.value = gif + '?' + random.value
  console.log(gifS.value)
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-end;
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
