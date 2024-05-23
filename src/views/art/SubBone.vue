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
    <div v-if="active === 'treasure'" class="treasure-box">
      <div class="treasure">
        <img
          class="treasure-img"
          :src="listObj.treasure.find((item) => item.code === subActive)?.src"
        />
      </div>
      <img
        :src="listObj.treasure.find((item) => item.code === subActive)?.titleSrc"
        class="title"
      />
    </div>
    <div v-if="active !== 'head'" class="chart-changer">
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
    <div v-if="active === 'head'" class="mask" ref="mask"></div>
    <div v-if="active === 'head'" class="tongliang-mask">
      <div
        v-for="item in lampTypes"
        :key="item.code"
        :class="['lamp-type-box']"
        :id="item.code"
        @mouseover="hoverLamp(item.code)"
        @mouseleave="leaveLamp(item.code)"
      >
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import { onMounted, onBeforeUnmount, ref, type Ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import head from '@/assets/img/art/bone/head.gif'
import bodyOrder from '@/assets/img/art/bone/bodyOrder.gif'
import bodyMethod from '@/assets/img/art/bone/bodyMethod.gif'
import tailHard from '@/assets/img/art/bone/tailHard.gif'
import tailWing from '@/assets/img/art/bone/tailWing.gif'
import tailAssemble from '@/assets/img/art/bone/tailAssemble.gif'
import treasure1 from '@/assets/img/art/bone/treasure1.gif'
import treasure2 from '@/assets/img/art/bone/treasure2.gif'
import treasure3 from '@/assets/img/art/bone/treasure3.gif'
import ord1 from '@/assets/img/art/bone/ord1.svg'
import ord2 from '@/assets/img/art/bone/ord2.svg'
import ord3 from '@/assets/img/art/bone/ord3.svg'
import zhalongshe from '@/assets/img/art/bone/zhalongshe.gif'
import zhaxiongbao from '@/assets/img/art/bone/zhaxiongbao.gif'
import shangexiahe from '@/assets/img/art/bone/shangexiahe.gif'
import zhalongbi from '@/assets/img/art/bone/zhalongbi.gif'
import zhalongjiao from '@/assets/img/art/bone/zhalongjiao.gif'
import zhalongjing from '@/assets/img/art/bone/zhalongjing.gif'
import zhalongsai from '@/assets/img/art/bone/zhalongsai.gif'

const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const router = useRouter()
const route = useRoute()
const active = ref('origin')
const activeUrl = ref('')
const list = [
  { code: 'head', title: '扎制龙头', src: head, showSubTitle: '扎制龙头' },
  { code: 'body', title: '扎制龙身' },
  { code: 'tail', title: '扎制龙尾' },
  { code: 'treasure', title: '扎制龙宝' }
]

const subActive = ref('')

const listObj = {
  body: [
    { title: '顺序', code: 'order', src: bodyOrder, showSubTitle: '扎制龙身' },
    { title: '方法', code: 'method', src: bodyMethod, showSubTitle: '绑扎方法' }
  ],
  tail: [
    { title: '硬栋', code: 'hard', src: tailHard, showSubTitle: '扎制龙尾硬栋' },
    { title: '尾翼', code: 'wing', src: tailWing, showSubTitle: '扎制尾翼' },
    { title: '组装', code: 'assemble', src: tailAssemble, showSubTitle: '组装硬栋、尾翼' }
  ],
  treasure: [
    { title: '1', code: '1', src: treasure1, titleSrc: ord1, showSubTitle: '扎制龙宝' },
    { title: '2', code: '2', src: treasure2, titleSrc: ord2, showSubTitle: '扎制龙宝' },
    { title: '3', code: '3', src: treasure3, titleSrc: ord3, showSubTitle: '扎制龙宝' }
  ]
}

const app = document.querySelector('#app') as any
const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  changeSubTitle(list.find((item) => item.code === active.value)?.showSubTitle || '')
  if (code !== 'head') {
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
  if (code === 'treasure') {
    app.style.background = ''
  }
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
  const currentRegion = (route.query.region as string) || 'head'
  const currentSubActive = route.query.subActive as string
  active.value = currentRegion || 'head'
  activeUrl.value = list.find((item) => item.code === active.value)?.src + '?' + Math.random() || ''
  changeSubTitle(list.find((item) => item.code === active.value)?.showSubTitle || '')
  if (currentRegion !== 'head') {
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
  }
  app.style.background = `url(${activeUrl.value}) no-repeat`
  if (active.value === 'treasure') {
    app.style.background = ''
  }
})

onBeforeUnmount(() => {
  app.style.background = ''
})

const mask = ref() as Ref<HTMLElement>

const lampTypes = ref([
  { code: 'zhalongshe', name: '扎龙舌', src: zhalongshe },
  { code: 'zhaxiongbao', name: '扎雄包', src: zhaxiongbao },
  { code: 'shangexiahe', name: '上颚下颌', src: shangexiahe },
  { code: 'zhalongbi', name: '扎龙鼻', src: zhalongbi },
  { code: 'zhalongjiao', name: '扎龙角', src: zhalongjiao },
  { code: 'zhalongjing', name: '扎龙颈', src: zhalongjing },
  { code: 'zhalongsai', name: '扎龙腮', src: zhalongsai }
])

const hoverLamp = async (code: string) => {
  console.log(code)
  const url = lampTypes.value!.find((item) => item.code === code)?.src + '?' + Math.random() || ''
  mask.value!.style.background = `url(${url}) no-repeat`
  mask.value!.style.backgroundSize = 'cover'
  app.style.background = ''
}

const leaveLamp = (code: string) => {
  mask.value!.style.background = ''
  mask.value!.style.backgroundSize = ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  console.log(code)
}
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
  .treasure-box {
    width: 700px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    .treasure-img {
      width: 536px;
      height: 533px;
      border-radius: 302.552px;
      background: linear-gradient(
        179deg,
        #e8198b -5.65%,
        rgba(233, 50, 149, 0.75) 16.41%,
        rgba(236, 115, 173, 0.23) 63.15%,
        rgba(238, 146, 185, 0) 84.1%
      );
    }
    .title {
      position: absolute;
      top: 0;
      left: 580px;
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  z-index: -1;
}
.tongliang-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  .lamp-type-box {
    display: flex;
    align-items: flex-start;
    .circle {
      width: 175px;
      height: 175px;
      border-radius: 50%;
    }
    &#zhalongshe {
      position: absolute;
      top: 680px;
      left: 1050px;
    }
    &#zhaxiongbao {
      position: absolute;
      top: 654px;
      left: 642px;
    }
    &#shangexiahe {
      position: absolute;
      top: 331px;
      left: 680.7px;
    }
    &#zhalongbi {
      position: absolute;
      top: 403px;
      left: 961px;
    }
    &#zhalongjiao {
      position: absolute;
      top: 518px;
      left: 1230.6px;
    }
    &#zhalongjing {
      position: absolute;
      top: 438.6px;
      left: 410.5px;
    }
    &#zhalongsai {
      position: absolute;
      top: 535px;
      left: 1496px;
    }
  }
}
</style>
