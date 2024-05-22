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
    <div v-if="active === 'flow'" class="flourish-embed">
      <iframe
        src="https://flo.uri.sh/visualisation/17892352/embed"
        title="Interactive or visual content"
        class="flourish-embed-iframe"
        frameborder="0"
        scrolling="no"
        style="width: 100%; height: 600px"
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
    </div>
    <div v-if="active === 'chart'" class="chart-changer">
      <div
        class="item"
        :key="item.code"
        v-for="item in chartList"
        :class="activeChart === item.code ? 'active' : ''"
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
import { useScriptTag } from '@vueuse/core'
import { onMounted, onBeforeUnmount, ref, type Ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import origin from '@/assets/img/art/intraduction/origin.gif'
import head from '@/assets/img/art/intraduction/head.gif'
import body from '@/assets/img/art/intraduction/body.gif'
import tail from '@/assets/img/art/intraduction/tail.gif'
import treasure from '@/assets/img/art/intraduction/treasure.gif'

const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const router = useRouter()
const route = useRoute()
const active = ref('origin')
const activeUrl = ref('')
const list = [
  { code: 'origin', title: '工艺起源', src: origin, showSubTitle: '彩扎工艺的起源' },
  { code: 'flow', title: '工艺流程', showSubTitle: '龙灯彩扎工艺的工序' },
  { code: 'chart', title: '龙的图解' }
]

const activeChart = ref('flow')
const chartList = [
  { code: 'head', title: '龙头', src: head, showSubTitle: '龙头图解' },
  { code: 'body', title: '龙身', src: body, showSubTitle: '龙身图解' },
  { code: 'tail', title: '龙尾', src: tail, showSubTitle: '龙尾图解' },
  { code: 'treasure', title: '龙宝', src: treasure, showSubTitle: '龙宝图解' }
]

const app = document.querySelector('#app') as any
const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  changeSubTitle(list.find((item) => item.code === active.value)?.showSubTitle || '')
  if (code === 'chart') {
    activeChart.value = 'head'
    router.push({ query: { region: 'chart', chart: 'head' } })
    changeSubTitle(chartList.find((item) => item.code === activeChart.value)?.showSubTitle || '')
    activeUrl.value =
      chartList.find((item) => item.code === activeChart.value)?.src + '?' + Math.random() || ''
    app.style.background = `url(${activeUrl.value}) no-repeat`
  }
}

const clickChart = (code: string) => {
  activeChart.value = code
  router.push({ query: { region: 'chart', chart: code } })
  activeUrl.value =
    chartList.find((item) => item.code === activeChart.value)?.src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  changeSubTitle(chartList.find((item) => item.code === activeChart.value)?.showSubTitle || '')
}

onMounted(() => {
  const currentRegion = route.query.region as string
  const currentChart = route.query.chart as string
  active.value = currentRegion || 'origin'
  if (currentRegion === 'chart') {
    activeChart.value = currentChart || 'head'
  }
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  if (currentRegion === 'chart') {
    activeUrl.value =
      chartList.find((item) => item.code === activeChart.value)?.src + '?' + Math.random() || ''
  }
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
  .chart-changer {
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    position: absolute;
    bottom: -8px;
    left: 692px;
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
.flourish-embed {
  position: absolute;
  left: 279px;
  bottom: 210px;
  width: 1295px;
  height: 384px;
}
:deep(.flourish-embed iframe) {
  height: 384px !important;
}
</style>
