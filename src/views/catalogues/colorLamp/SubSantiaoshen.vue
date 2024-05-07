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
const caseIn = () => {
  console.log('caseIn paideng')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/colorlamp/santiaoshen.svg') no-repeat;
}
</style>
