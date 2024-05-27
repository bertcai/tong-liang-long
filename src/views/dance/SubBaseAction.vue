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
    <div class="chart-changer">
      <div
        class="item"
        :key="item.code"
        v-for="item in listObj[active as keyof typeof listObj]"
        :class="subActive === item.code ? 'active' : ''"
        @click="clickChart(item.code)"
      >
        <div class="inner">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import step1 from '@/assets/img/dance/base/step1.gif'
import step2 from '@/assets/img/dance/base/step2.gif'
import step3 from '@/assets/img/dance/base/step3.gif'
import step4 from '@/assets/img/dance/base/step4.gif'
import step5 from '@/assets/img/dance/base/step5.gif'
import step6 from '@/assets/img/dance/base/step6.gif'
import step7 from '@/assets/img/dance/base/step7.gif'
import step8 from '@/assets/img/dance/base/step8.gif'
import handle1 from '@/assets/img/dance/base/handle1.gif'
import handle2 from '@/assets/img/dance/base/handle2.gif'
import handle3 from '@/assets/img/dance/base/handle3.gif'
import handle4 from '@/assets/img/dance/base/handle4.gif'
import handle5 from '@/assets/img/dance/base/handle5.gif'
import action1 from '@/assets/img/dance/base/action1.gif'
import action2 from '@/assets/img/dance/base/action2.gif'
import action3 from '@/assets/img/dance/base/action3.gif'
import dance1 from '@/assets/img/dance/base/dance1.gif'
import dance2 from '@/assets/img/dance/base/dance2.gif'
import dance3 from '@/assets/img/dance/base/dance3.gif'

const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const router = useRouter()
const route = useRoute()
const active = ref('step')
const activeUrl = ref('')
const list = [
  { code: 'step', title: '基础步法' },
  { code: 'handle', title: '基础把位' },
  { code: 'action', title: '基础翻滚动作' },
  { code: 'dance', title: '基础舞法' }
]

const subActive = ref('')

const listObj = {
  step: [
    { title: '1', code: '1', src: step1, titleSrc: step1, showSubTitle: '大八字步' },
    { title: '2', code: '2', src: step2, titleSrc: step2, showSubTitle: '丁字步' },
    { title: '3', code: '3', src: step3, titleSrc: step3, showSubTitle: '弓箭步' },
    { title: '4', code: '4', src: step4, titleSrc: step4, showSubTitle: '合步' },
    { title: '5', code: '5', src: step5, titleSrc: step5, showSubTitle: '矮步' },
    { title: '6', code: '6', src: step6, titleSrc: step6, showSubTitle: '侧滑步' },
    { title: '7', code: '7', src: step7, titleSrc: step7, showSubTitle: '腾越' },
    { title: '8', code: '8', src: step8, titleSrc: step8, showSubTitle: '穿越' }
  ],
  handle: [
    { title: '1', code: '1', src: handle1, titleSrc: handle1, showSubTitle: '握把' },
    { title: '2', code: '2', src: handle2, titleSrc: handle2, showSubTitle: '举把' },
    { title: '3', code: '3', src: handle3, titleSrc: handle3, showSubTitle: '滑把' },
    { title: '4', code: '4', src: handle4, titleSrc: handle4, showSubTitle: '换把' },
    { title: '5', code: '5', src: handle5, titleSrc: handle5, showSubTitle: '端把' }
  ],
  action: [
    { title: '1', code: '1', src: action1, titleSrc: action1, showSubTitle: '前滚翻' },
    { title: '2', code: '2', src: action2, titleSrc: action2, showSubTitle: '侧滚翻' },
    { title: '3', code: '3', src: action3, titleSrc: action3, showSubTitle: '侧手翻' }
  ],
  dance: [
    { title: '1', code: '1', src: dance1, titleSrc: dance1, showSubTitle: '原地“8”字舞龙' },
    { title: '2', code: '2', src: dance2, titleSrc: dance2, showSubTitle: '原地“8”字转体舞龙' },
    { title: '3', code: '3', src: dance3, titleSrc: dance3, showSubTitle: '单侧“8”字舞龙' }
  ]
}

const app = document.querySelector('#app') as any
const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  subActive.value = listObj[code as keyof typeof listObj][0].code
  router.push({ query: { region: code, subActive: subActive.value } })
  activeUrl.value =
    listObj[code as keyof typeof listObj].find((item) => item.code === subActive.value)?.src +
      '?' +
      Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  changeSubTitle(
    listObj[code as keyof typeof listObj].find((item) => item.code === subActive.value)
      ?.showSubTitle || ''
  )
}

const clickChart = (code: string) => {
  subActive.value = code
  router.push({ query: { region: active.value, subActive: code } })
  activeUrl.value =
    listObj[active.value as keyof typeof listObj].find((item) => item.code === subActive.value)
      ?.src +
      '?' +
      Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  changeSubTitle(
    listObj[active.value as keyof typeof listObj].find((item) => item.code === subActive.value)
      ?.showSubTitle || ''
  )
  if (active.value === 'treasure') {
    app.style.background = ''
  }
}

onMounted(() => {
  const currentRegion = (route.query.region as string) || 'step'
  const currentSubActive = route.query.subActive as string
  active.value = currentRegion || 'step'
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  subActive.value = currentSubActive || listObj[currentRegion as keyof typeof listObj][0].code
  activeUrl.value =
    listObj[currentRegion as keyof typeof listObj].find((item) => item.code === subActive.value)
      ?.src +
      '?' +
      Math.random() || ''
  changeSubTitle(
    listObj[currentRegion as keyof typeof listObj].find((item) => item.code === subActive.value)
      ?.showSubTitle || ''
  )
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
      width: 176px;
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
        background: url('@/assets/img/art/assembling/link-bg.svg') no-repeat;
        opacity: 1;
      }
    }
  }
  .chart-changer {
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    .item {
      width: 62px;
      height: 62px;
      background: url('@/assets/img/art/intraduction/chart-link-bg.svg');
      color: #3f0022;
      text-align: center;
      font-family: FZHuaLi-M14S;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      .inner {
        width: 46px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('@/assets/img/art/intraduction/chart-link-bg-inner.svg');
      }
      &.active .inner {
        color: #fff1f9;
        background: url('@/assets/img/art/intraduction/chart-link-bg-inner-active.svg');
      }
    }
  }
}
</style>
