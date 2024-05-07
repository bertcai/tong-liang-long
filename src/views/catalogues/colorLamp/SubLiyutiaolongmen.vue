<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box">
        <div class="title">鲤鱼跳龙门</div>
        <div class="pinyin">pái dēng</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const caseIn = () => {
  console.log('caseIn paideng')
}
</script>

<style scoped>
.box {
  background: url('@/assets/img/catalogues/colorlamp/paideng.svg') no-repeat;
}
</style>
