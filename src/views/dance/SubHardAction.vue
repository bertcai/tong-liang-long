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
    <div class="hover-changer">
      <div
        class="item"
        :key="item.title"
        v-for="item in listObj[active as keyof typeof listObj]"
        @mouseover="hoverLamp(item.title)"
        @mouseleave="leaveLamp(item.title)"
      >
        <div class="img">
          <img :src="item.linkBg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type Ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import eightA from '@/assets/img/dance/hard/eightA.png'
import eightALinkBg from '@/assets/img/dance/hard/eightALinkBg.png'
import eightB from '@/assets/img/dance/hard/eightB.png'
import eightBLinkBg from '@/assets/img/dance/hard/eightBLinkBg.png'
import eightC from '@/assets/img/dance/hard/eightC.png'
import eightCLinkBg from '@/assets/img/dance/hard/eightCLinkBg.png'
import swimA from '@/assets/img/dance/hard/swimA.png'
import swimALinkBg from '@/assets/img/dance/hard/swimALinkBg.png'
import swimB from '@/assets/img/dance/hard/swimB.png'
import swimBLinkBg from '@/assets/img/dance/hard/swimBLinkBg.png'
import jumpA from '@/assets/img/dance/hard/jumpA.png'
import jumpALinkBg from '@/assets/img/dance/hard/jumpALinkBg.png'
import jumpB from '@/assets/img/dance/hard/jumpB.png'
import jumpBLinkBg from '@/assets/img/dance/hard/jumpBLinkBg.png'
import jumpC from '@/assets/img/dance/hard/jumpC.png'
import jumpCLinkBg from '@/assets/img/dance/hard/jumpCLinkBg.png'
import rollA from '@/assets/img/dance/hard/rollA.png'
import rollALinkBg from '@/assets/img/dance/hard/rollALinkBg.png'
import rollB from '@/assets/img/dance/hard/rollB.png'
import rollBLinkBg from '@/assets/img/dance/hard/rollBLinkBg.png'
import rollC from '@/assets/img/dance/hard/rollC.png'
import rollCLinkBg from '@/assets/img/dance/hard/rollCLinkBg.png'
const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const router = useRouter()
const route = useRoute()
const active = ref('eight')
const activeUrl = ref('')
const list = [
  { title: '“8”字舞龙动作', code: 'eight', showSubTitle: '“8”字舞龙动作' },
  { title: '游龙动作', code: 'swim', showSubTitle: '游龙动作' },
  { title: '穿腾动作', code: 'jump', showSubTitle: '穿腾动作' },
  { title: '翻滚动作', code: 'roll', showSubTitle: '翻滚动作' }
]

const listObj = {
  eight: [
    { title: 'A级', src: eightA, linkBg: eightALinkBg },
    { title: 'B级', src: eightB, linkBg: eightBLinkBg },
    { title: 'C级', src: eightC, linkBg: eightCLinkBg }
  ],
  swim: [
    { title: 'A级', src: swimA, linkBg: swimALinkBg },
    { title: 'B级', src: swimB, linkBg: swimBLinkBg }
  ],
  jump: [
    { title: 'A级', src: jumpA, linkBg: jumpALinkBg },
    { title: 'B级', src: jumpB, linkBg: jumpBLinkBg },
    { title: 'C级', src: jumpC, linkBg: jumpCLinkBg }
  ],
  roll: [
    { title: 'A级', src: rollA, linkBg: rollALinkBg },
    { title: 'B级', src: rollB, linkBg: rollBLinkBg },
    { title: 'C级', src: rollC, linkBg: rollCLinkBg }
  ]
}

const activeChart = ref('eight')

const app = document.querySelector('#app') as any
const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  activeUrl.value = listObj[active.value as keyof typeof listObj][0].src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  changeSubTitle(list.find((item) => item.code === active.value)?.showSubTitle || '')
}

onMounted(() => {
  const currentRegion = route.query.region as string
  active.value = currentRegion || 'eight'
  activeUrl.value = listObj[active.value as keyof typeof listObj][0].src + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
})

const hoverLamp = async (code: string) => {
  console.log(code)
  const url =
    listObj[active.value as keyof typeof listObj].find((item) => item.title === code)?.src +
      '?' +
      Math.random() || ''
  app.style.background = `url(${url}) no-repeat`
}

const leaveLamp = (code: string) => {
  app.style.background = `url(${activeUrl.value}) no-repeat`
  console.log(code)
}

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
      width: 181px;
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
  .hover-changer {
    width: 117.209px;
    height: 390px;
    position: absolute;
    left: 1440px;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
