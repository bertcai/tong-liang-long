<template>
  <BaseLayout sub-title="hhll" active="catalogues">
    <template #logo>
      <img src="@/assets/img/catalogues/logo.svg" width="164px" height="165px" />
    </template>
    <div class="wrapper">
      <div class="left">
        <!-- <div class="title-box">
          <div class="title">
            <img src="@/assets/img/sub-title-icon.svg" />
            {{ active.showTitleString }}
          </div>
        </div> -->
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
      <div class="right" v-if="!isIndex && !isDetail">
        <div class="side-nav">
          <SideNav :navList="navList" v-model:active="active" />
        </div>
      </div>
      <div class="subtitle" v-if="isDetail">
        <div class="art-word" @click="backToLayout">
          <h1>{{ active.title }}</h1>
          <p>{{ active.pinyin }}</p>
        </div>
        <div class="logo" @click="backToIndex">
          <img src="@/assets/img/catalogues/colorlamp/logo.svg" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const navList = [
  {
    title: '牌灯',
    link: '/catalogues/colorlamp/layout/paideng',
    code: 'paideng',
    pinyin: 'pái dēng',
    showTitleString: '牌灯'
  },
  {
    title: '猪啃南瓜',
    link: '/catalogues/colorlamp/layout/zhukennangua',
    code: 'zhukennangua',
    pinyin: 'zhū kěn nán guā',
    showTitleString: '猪啃南瓜'
  },
  {
    title: '泥鳅吃汤圆',
    link: '/catalogues/colorlamp/layout/niqiuchitangyuan',
    code: 'niqiuchitangyuan',
    pinyin: 'ní qiū chī tāng yuán',
    showTitleString: '泥鳅吃汤圆'
  },
  {
    title: '亮狮',
    link: '/catalogues/colorlamp/layout/liangshi',
    code: 'liangshi',
    pinyin: 'liàng shī',
    showTitleString: '亮狮'
  },
  {
    title: '三条鲹',
    link: '/catalogues/colorlamp/layout/santiaoshen',
    code: 'santiaoshen',
    pinyin: 'sān tiáo shēn',
    showTitleString: '三条鲹'
  },
  {
    title: '鲤鱼跳龙门',
    link: '/catalogues/colorlamp/layout/liyutiaolongmen',
    code: 'liyutiaolongmen',
    pinyin: 'lǐ yú tiào lóng mén',
    showTitleString: '鲤鱼跳龙门'
  },
  {
    title: '十八学士',
    link: '/catalogues/colorlamp/layout/shibaxueshi',
    code: 'shibaxueshi',
    pinyin: 'shí bā xué shì',
    showTitleString: '十八学士'
  }
]

const active = ref(navList[0])
const isIndex = ref(false)
const isDetail = ref(false)

onMounted(() => {
  const link = route.fullPath.split('?')[0]
  active.value = navList.find((item) => link.includes(item.link)) || navList[0]
  if (link === '/catalogues/colorlamp/layout') {
    isIndex.value = true
  } else {
    isIndex.value = false
  }
  if (link.split('/').length > 5) {
    isDetail.value = true
  } else {
    isDetail.value = false
  }
})

watch(route, () => {
  const link = route.fullPath.split('?')[0]
  active.value = navList.find((item) => link.includes(item.link)) || navList[0]
  if (link === '/catalogues/colorlamp/layout') {
    isIndex.value = true
  } else {
    isIndex.value = false
  }
  if (link.split('/').length > 5) {
    isDetail.value = true
  } else {
    isDetail.value = false
  }
})

const backToLayout = () => {
  isDetail.value = false
  router.push(active.value.link.split('/').slice(0, 5).join('/'))
}

const backToIndex = () => {
  isDetail.value = false
  router.push('/catalogues/colorlamp/layout')
}
</script>

<style>
@keyframes blink-subtitle {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

</style>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
  position: relative;
  .left {
    display: flex;
    flex-direction: column;
    flex: 1;
    .title-box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-left: 182px;
      width: 100%;
      height: 100%;
      .title {
        display: flex;
        align-items: center;
        color: #e92f93;
        font-family: STLiti;
        font-size: 62px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        img {
          margin-right: 6px;
        }
      }
    }
    .content {
      margin-top: 36px;
      display: flex;
      justify-content: center;
      height: 100%;
    }
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
  }
  .subtitle {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    animation: blink-subtitle 2s infinite;
    .art-word {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: center;
      margin-right: 9px;
      cursor: pointer;
      h1 {
        text-align: right;
        font-family: STLiti;
        font-size: 86px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background-image: -webkit-linear-gradient(
          360deg,
          #00c6fb 0%,
          #00b5f8 14.37%,
          #0074ee 72.55%,
          #005bea 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        color: #fff1f9;
        text-align: right;
        font-family: 'LithosPro';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 3.4px;
        padding-right: 9px;
        margin-top: -13px;
      }
    }
    .logo {
      cursor: pointer;
    }
  }
}
</style>
