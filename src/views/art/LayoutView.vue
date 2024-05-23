<template>
  <BaseLayout sub-title="hhll" active="art">
    <template #logo>
      <img src="@/assets/img/art/logo.svg" width="164px" height="165px" />
    </template>
    <div class="wrapper">
      <div class="left">
        <div class="title-box">
          <div class="title">
            <img src="@/assets/img/sub-title-icon.svg" />
            {{ subTitle }}
          </div>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
      <div class="right">
        <div class="side-nav">
          <SideNav :navList="navList" v-model:active="active" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const subTitle = ref('')
const changeSubTitle = (title: string) => {
  subTitle.value = title
}
provide('changeSubTitle', changeSubTitle)

const navList = [
  {
    title: '工艺介绍',
    link: '/art/layout/intraduction',
    code: 'intraduction',
    showTitleString: '彩扎工艺的起源'
  },
  {
    title: '工具材料',
    link: '/art/layout/material',
    code: 'material',
    showTitleString: '彩扎工艺的起源'
  },
  {
    title: '准备工作',
    link: '/art/layout/preparation',
    code: 'preparation',
    showTitleString: '准备工作'
  },
  {
    title: '扎骨工艺',
    link: '/art/layout/bone',
    code: 'bone',
    showTitleString: '扎骨'
  },
  {
    title: '裱褙工艺',
    link: '/art/layout/mounting',
    code: 'mounting',
    showTitleString: '裱褙'
  },
  {
    title: '彩绘工艺',
    link: '/art/layout/painting',
    code: 'painting',
    showTitleString: '彩绘'
  },
  {
    title: '总装工艺',
    link: '/art/layout/assembling',
    code: 'assembling',
    showTitleString: '总装'
  }
]

const active = ref(navList[0])

onMounted(() => {
  const link = route.fullPath.split('?')[0]
  active.value = navList.find((item) => item.link === link) || navList[0]
  subTitle.value = active.value.showTitleString
})

watch(
  () => active.value,
  (value) => {
    subTitle.value = value.showTitleString
  }
)
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
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
