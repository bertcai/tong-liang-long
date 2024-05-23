<template>
  <div class="wrapper"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type Ref, inject } from 'vue'
import preparation from '@/assets/img/art/preparation.gif'

const app = document.querySelector('#app') as any
const activeUrl = ref('')
activeUrl.value = preparation + '?' + Math.random() || ''

onMounted(() => {
  activeUrl.value = preparation + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
})

onBeforeUnmount(() => {
  app.style.background = ''
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
  width: 100%;
}
</style>
