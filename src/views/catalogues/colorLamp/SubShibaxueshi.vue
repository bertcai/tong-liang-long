<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">十八学士</div>
        <div class="pinyin">shí bā xué shì</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const caseIn = () => {
  console.log('caseIn shí bā xué shì')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/colorlamp/shibaxueshi.svg') no-repeat;
}
</style>
