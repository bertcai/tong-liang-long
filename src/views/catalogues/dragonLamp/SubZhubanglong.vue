<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">竹梆龙</div>
        <div class="pinyin">zhú bāng lóng</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const caseIn = () => {
  console.log('caseIn zhú bāng lóng')
  router.push('/catalogues/dragonlamp/layout/zhubanglong/detail')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/dragonlamp/zhubanglong.svg') no-repeat;
  width: 746px;
  height: 746px;
}
</style>
