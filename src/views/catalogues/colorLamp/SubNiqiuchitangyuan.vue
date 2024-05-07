<template>
  <div class="lamp-wrapper">
    <div class="circle">
      <div class="box bg">
        <div class="title">泥鳅吃汤圆</div>
        <div class="pinyin">ní qiū chī tāng yuán</div>
        <div class="case-in" @click="caseIn">进入</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const caseIn = () => {
  console.log('caseIn ní qiū chī tāng yuán')
}
</script>

<style scoped>
.box.bg {
  background: url('@/assets/img/catalogues/colorlamp/niqiuchitangyuan.svg') no-repeat;
}
</style>
