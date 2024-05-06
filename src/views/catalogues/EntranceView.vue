<template>
  <BaseLayout active="catalogues" sub-title="entrance">
    <div class="wrapper">
      <div
        class="item"
        @mouseover="hover1 = true"
        @mouseleave="hover1 = false"
        @click="jumpTo('/catalogues/colorlamp/layout')"
      >
        <img v-if="hover1" src="@/assets/img/catalogues/caideng-in-hover.svg" />
        <img v-else src="@/assets/img/catalogues/caideng-in.svg" />
        <div class="text">彩灯类</div>
      </div>
      <div
        class="item"
        @mouseover="hover2 = true"
        @mouseleave="hover2 = false"
        @click="jumpTo('/catalogues/dragonlamp/layout')"
      >
        <img v-if="hover2" src="@/assets/img/catalogues/longdeng-in-hover.svg" />
        <img v-else src="@/assets/img/catalogues/longdeng-in.svg" />
        <div class="text">龙灯类</div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const hover1 = ref(false)
const hover2 = ref(false)

const jumpTo = (path: string) => {
  console.log(path)
  router.push(path)
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 585px;
    .text {
      margin-top: 32px;
      text-align: justify;
      color: #fff1f9;
      font-family: FZMingShangTiS-R-GB;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 111.25%; /* 33.375px */
    }
    &:hover {
    }
  }
}
</style>
