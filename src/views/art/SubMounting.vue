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
import { onMounted, onBeforeUnmount, ref, type Ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import bias from '@/assets/img/art/mounting/bias.gif'
import hang from '@/assets/img/art/mounting/hang.gif'
const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const router = useRouter()
const route = useRoute()
const active = ref('bias')
const activeUrl = ref('')
const list = [
  { title: '斜放裱糊', code: 'bias', src: bias, showSubTitle: '裱褙' },
  { title: '悬挂裱糊', code: 'hang', src: hang, showSubTitle: '裱糊' }
]

const activeChart = ref('bias')

const app = document.querySelector('#app') as any
const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  changeSubTitle(list.find((item) => item.code === active.value)?.showSubTitle || '')
}

onMounted(() => {
  const currentRegion = route.query.region as string
  active.value = currentRegion || 'bias'
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
})

onBeforeUnmount(() => {
  app.style.background = ''
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
    z-index: 100;
    .item {
      padding: 4px 14px 0 14px;
      text-align: justify;
      text-align-last: justify;
      width: 127px;
      height: 43px;
      margin-bottom: 31px;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
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
