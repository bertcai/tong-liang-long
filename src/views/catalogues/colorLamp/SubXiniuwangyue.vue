<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box">
        <div class="title">犀牛望月</div>
        <div class="pinyin">xī niú wàng yuè</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const caseIn = () => {
  console.log('caseIn xī niú wàng yuè')
  router.push('/catalogues/colorlamp/layout/xiniuwangyue/detail')
}
</script>

<style scoped>
.box {
  background: url('@/assets/img/catalogues/colorlamp/paideng.svg') no-repeat;
}
</style>
