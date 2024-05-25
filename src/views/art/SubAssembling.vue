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
import head from '@/assets/img/art/assembling/head.gif'
import body from '@/assets/img/art/assembling/body.gif'
import handle from '@/assets/img/art/assembling/handle.gif'
const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const router = useRouter()
const route = useRoute()
const active = ref('head')
const activeUrl = ref('')
const list = [
  { title: '安置龙头', code: 'head', src: head, showSubTitle: '安置龙头' },
  { title: '安置龙把子', code: 'handle', src: handle, showSubTitle: '安置龙把子' },
  { title: '串联组织龙体', code: 'body', src: body, showSubTitle: '串联组织龙体' }
]

const activeChart = ref('head')

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
  active.value = currentRegion || 'head'
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
      width: 175px;
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
        background: url('@/assets/img/art/assembling/link-bg.svg');
        opacity: 1;
      }
    }
  }
}
</style>
