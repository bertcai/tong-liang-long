<template>
  <BaseLayout sub-title="hhll" active="science">
    <template #logo>
      <img src="@/assets/img/science/logo.svg" width="164px" height="165px" />
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
    title: '铜梁龙的复合概念',
    link: '/science/layout/concept',
    code: 'concept',
    showTitleString: '何谓铜梁龙'
  },
  {
    title: '创意来源',
    link: '/science/layout/originality',
    code: 'originality',
    showTitleString: '创意来源'
  },
  {
    title: '希冀词云',
    link: '/science/layout/wordcloud',
    code: 'wordcloud',
    showTitleString: '希冀词云'
  },
  {
    title: '地区分布',
    link: '/science/layout/regional',
    code: 'regional',
    showTitleString: '龙灯龙舞地区分布'
  },
  {
    title: '重要活动与荣誉',
    link: '/science/layout/activity',
    code: 'activity',
    showTitleString: '重要活动与荣誉'
  },
  {
    title: '基础动作',
    link: '/science/layout/baseaction',
    code: 'baseaction',
    showTitleString: '基础动作'
  },
  {
    title: '难度动作',
    link: '/science/layout/hardaction',
    code: 'hardaction',
    showTitleString: '难度动作'
  },
  {
    title: '组图造型动作',
    link: '/science/layout/groupaction',
    code: 'groupaction',
    showTitleString: '组图造型动作'
  },
  {
    title: '图案纹样',
    link: '/science/layout/image',
    code: 'image',
    showTitleString: '图案纹样'
  }
]

const active = ref(navList[0])

onMounted(() => {
  const link = route.fullPath.split('?').shift()
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
