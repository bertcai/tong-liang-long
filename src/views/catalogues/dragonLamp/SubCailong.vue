<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">小彩龙</div>
        <div class="pinyin">xiǎo cǎi lóng</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const caseIn = () => {
  console.log('caseIn cǎi lóng')
  router.push('/catalogues/dragonlamp/layout/cailong/detail')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/dragonlamp/cailong.svg') no-repeat;
}
</style>
