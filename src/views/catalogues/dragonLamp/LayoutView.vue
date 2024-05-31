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
          <img src="@/assets/img/catalogues/dragonlamp/logo.svg" />
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
    title: '大蠕龙',
    link: '/catalogues/dragonlamp/layout/darulong',
    code: 'darulong',
    pinyin: 'dà rú lóng',
    showTitleString: '大蠕龙'
  },
  {
    title: '板凳龙',
    link: '/catalogues/dragonlamp/layout/bandenglong',
    code: 'bandenglong',
    pinyin: 'bǎn dèng lóng',
    showTitleString: '板凳龙'
  },
  {
    title: '小彩龙',
    link: '/catalogues/dragonlamp/layout/cailong',
    code: 'cailong',
    pinyin: 'xiǎo cǎi lóng',
    showTitleString: '小彩龙'
  },
  {
    title: '竹梆龙',
    link: '/catalogues/dragonlamp/layout/zhubanglong',
    code: 'zhubanglong',
    pinyin: 'zhú bàng lóng',
    showTitleString: '竹梆龙'
  },
  {
    title: '正龙',
    link: '/catalogues/dragonlamp/layout/zhenglong',
    code: 'zhenglong',
    pinyin: 'zhèng lóng',
    showTitleString: '正龙'
  },
  {
    title: '火龙',
    link: '/catalogues/dragonlamp/layout/huolong',
    code: 'huolong',
    pinyin: 'huǒ lóng',
    showTitleString: '火龙'
  },
  {
    title: '黄荆龙',
    link: '/catalogues/dragonlamp/layout/huangjinglong',
    code: 'huangjinglong',
    pinyin: 'huáng jīng lóng',
    showTitleString: '黄荆龙'
  },
  {
    title: '荷花龙',
    link: '/catalogues/dragonlamp/layout/hehualong',
    code: 'hehualong',
    pinyin: 'hé huā lóng',
    showTitleString: '荷花龙'
  },
  {
    title: '稻草龙',
    link: '/catalogues/dragonlamp/layout/daocaolong',
    code: 'daocaolong',
    pinyin: 'dào cǎo lóng',
    showTitleString: '稻草龙'
  }
]

const active = ref(navList[0])
const isIndex = ref(false)
const isDetail = ref(false)

onMounted(() => {
  const link = route.fullPath.split('?')[0]
  console.log(route)
  active.value = navList.find((item) => link.includes(item.link)) || navList[0]
  if (link === '/catalogues/dragonlamp/layout') {
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
  if (link === '/catalogues/dragonlamp/layout') {
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
  router.push('/catalogues/dragonlamp/layout')
}
</script>

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
          180deg,
          #e8198b -0.02%,
          #e93295 24.57%,
          #ec73ad 76.66%,
          #ee92b9 100%
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
