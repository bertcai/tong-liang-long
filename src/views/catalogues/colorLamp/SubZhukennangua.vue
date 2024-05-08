<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">猪啃南瓜</div>
        <div class="pinyin">zhū kěn nán guā</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const caseIn = () => {
  console.log('caseIn zhū kěn nán guā')
  router.push('/catalogues/colorlamp/layout/zhukennangua/detail')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/colorlamp/zhukennangua.svg') no-repeat;
}
</style>
