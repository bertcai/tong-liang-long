<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">三条鲹</div>
        <div class="pinyin">sān tiáo shēn</div>
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
  router.push('/catalogues/colorlamp/layout/santiaoshen/detail')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/colorlamp/santiaoshen.svg') no-repeat;
}
</style>
