<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">黄荆龙</div>
        <div class="pinyin">huáng jīng lóng</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const caseIn = () => {
  console.log('caseIn huáng jīng lóng')
  router.push('/catalogues/dragonlamp/layout/huangjinglong/detail')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/dragonlamp/huangjinglong.svg') no-repeat;
}
</style>
