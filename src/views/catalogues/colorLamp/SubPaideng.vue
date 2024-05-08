<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box">
        <div class="title">牌灯</div>
        <div class="pinyin">pái dēng</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const caseIn = () => {
  console.log('caseIn paideng')
  router.push('/catalogues/colorlamp/layout/paideng/detail')
}
</script>

<style scoped>
.box {
  background: url('@/assets/img/catalogues/colorlamp/paideng.svg') no-repeat;
}
</style>
