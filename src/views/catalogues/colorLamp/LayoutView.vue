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
      <div class="right" v-if="!isIndex">
        <div class="side-nav">
          <SideNav :navList="navList" v-model:active="active" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navList = [
  {
    title: '牌灯',
    link: '/catalogues/colorlamp/layout/paideng',
    code: 'paideng',
    showTitleString: '牌灯'
  },
  {
    title: '猪啃南瓜',
    link: '/catalogues/colorlamp/layout/zhukennangua',
    code: 'zhukennangua',
    showTitleString: '猪啃南瓜'
  },
  {
    title: '泥鳅吃汤圆',
    link: '/catalogues/colorlamp/layout/niqiuchitangyuan',
    code: 'niqiuchitangyuan',
    showTitleString: '泥鳅吃汤圆'
  },
  {
    title: '亮狮',
    link: '/catalogues/colorlamp/layout/liangshi',
    code: 'liangshi',
    showTitleString: '亮狮'
  },
  {
    title: '三条鲹',
    link: '/catalogues/colorlamp/layout/santiaoshen',
    code: 'santiaoshen',
    showTitleString: '三条鲹'
  },
  {
    title: '鲤鱼跳龙门',
    link: '/catalogues/colorlamp/layout/liyutiaolongmen',
    code: 'liyutiaolongmen',
    showTitleString: '鲤鱼跳龙门'
  },
  {
    title: '十八学士',
    link: '/catalogues/colorlamp/layout/shibaxueshi',
    code: 'shibaxueshi',
    showTitleString: '十八学士'
  },
  {
    title: '犀牛望月',
    link: '/catalogues/colorlamp/layout/xiniuwangyue',
    code: 'xiniuwangyue',
    showTitleString: '犀牛望月'
  }
]

const active = ref(navList[0])
const isIndex = ref(false)

onMounted(() => {
  const link = route.fullPath
  console.log(route)
  active.value = navList.find((item) => item.link === link) || navList[0]
  if (link === '/catalogues/colorlamp/layout') {
    isIndex.value = true
  }
})

watch(route, () => {
  const link = route.fullPath
  active.value = navList.find((item) => item.link === link) || navList[0]
  if (link === '/catalogues/colorlamp/layout') {
    isIndex.value = true
  } else {
    isIndex.value = false
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
  .left {
    display: flex;
    flex-direction: column;
    flex: 1;
    .title-box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-left: 180px;
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
      display: flex;
      justify-content: center;
      height: 100%;
    }
  }
  .right {
  }
}
</style>
