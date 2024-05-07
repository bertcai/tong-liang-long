<template>
  <div class="wrapper">
    <div class="description">
      近几十年来，铜梁龙进行了创新设计，集狮头、鹿角、 虾腿、鳄鱼嘴、乌龟颈、蛇身、鱼鳞、蜃腹、鱼
      脊、虎掌、鹰爪、金鱼尾于龙一身。
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { onBeforeUnmount } from 'vue'
onMounted(() => {
  const app = document.querySelector('#app') as Element
  app.className = 'science-origin'
})

onBeforeUnmount(() => {
  const app = document.querySelector('#app') as Element
  app.className = ''
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  .description {
    width: 750px;
    color: #fff1f9;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
}
</style>
<style>
.science-origin {
  background-image: url('@/assets/img/science/origin.gif');
}
</style>
