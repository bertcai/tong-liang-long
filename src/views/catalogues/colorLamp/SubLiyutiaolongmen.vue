<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">鲤鱼跳龙门</div>
        <div class="pinyin">lǐ yú tiào lóng mén</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const caseIn = () => {
  console.log('caseIn lǐ yú tiào lóng mén')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/colorlamp/liyutiaolongmen.svg') no-repeat;
}
</style>
