<template>
  <div class="wrapper">
    <div class="region-changer">
      <div
        class="item"
        :key="item.code"
        v-for="item in list"
        :class="active === item.code ? 'active' : ''"
        @click="clickRegion(item.code)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const active = ref('lamp')
const app = document.querySelector('#app') as Element
const list = [
  { code: 'lamp', title: '全国龙灯' },
  { code: 'dance', title: '全国龙舞' },
  { code: 'tongliang', title: '铜梁地区' }
]

const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  app.className = `science-region-${active.value}`
}
onMounted(() => {
  const currentRegion = route.query.region as string
  active.value = currentRegion || 'lamp'
  app.className = `science-region-${active.value}`
})

onBeforeUnmount(() => {
  app.className = ''
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
  width: 100%;
  .region-changer {
    margin-left: 90px;
    margin-top: 270px;
    .item {
      width: 127px;
      height: 43px;
      margin-bottom: 31px;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.4;
      cursor: pointer;
      &.active {
        background: url('@/assets/img/science/region-link-bg.svg');
        opacity: 1;
      }
    }
  }
}
</style>

<style>
.science-region-lamp {
  background: url('@/assets/img/science/region1.gif') no-repeat;
  background-size: cover;
}
.science-region-dance {
  background: url('@/assets/img/science/region2.gif') no-repeat;
  background-size: cover;
}
.science-region-tongliang {
  background: url('@/assets/img/science/region3.gif') no-repeat;
  background-size: cover;
}
</style>
