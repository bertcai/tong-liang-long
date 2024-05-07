<template>
  <BaseLayout sub-title="hhll" active="dance">
    <template #logo>
      <img src="@/assets/img/dance/logo.svg" width="164px" height="165px" />
    </template>
    <div class="wrapper">
      <div class="left">
        <div class="title-box">
          <div class="title">
            <img src="@/assets/img/sub-title-icon.svg" />
            {{ active.showTitleString }}
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
import { onMounted, ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navList = [
  {
    title: '基础动作',
    link: '/dance/layout/baseaction',
    code: 'baseaction',
    showTitleString: '基础动作'
  },
  {
    title: '难度动作',
    link: '/dance/layout/hardaction',
    code: 'hardaction',
    showTitleString: '难度动作'
  },
  {
    title: '组图造型动作',
    link: '/dance/layout/groupaction',
    code: 'groupaction',
    showTitleString: '组图造型动作'
  },
  {
    title: '套路',
    link: '/dance/layout/routine',
    code: 'routine',
    showTitleString: '套路'
  }
]

const active = ref(navList[0])

onMounted(() => {
  const link = route.fullPath
  console.log(route)
  active.value = navList.find((item) => item.link === link) || navList[0]
})
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
}
</style>
