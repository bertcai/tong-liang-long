<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">竞技龙</div>
        <div class="pinyin">jìng jì lóng</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const caseIn = () => {
  console.log('caseIn jìng jì lóng')
  router.push('/catalogues/dragonlamp/layout/jingjilong/detail')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/dragonlamp/darulong.svg') no-repeat;
}
</style>
