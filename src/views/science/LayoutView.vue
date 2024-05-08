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
            {{ subTitle || active.showTitleString }}
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
import { onMounted, ref, watch } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const subRegionlist = [
  { code: 'lamp', title: '全国龙灯', showTitleString: '龙灯龙舞地区分布' },
  { code: 'dance', title: '全国龙舞', showTitleString: '龙灯龙舞地区分布' },
  { code: 'tongliang', title: '铜梁地区', showTitleString: '龙灯龙舞分布图' }
]

const subTitle = ref('')

const navList = [
  {
    title: '复合概念',
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
    title: '活动荣誉',
    link: '/science/layout/activity',
    code: 'activity',
    showTitleString: '重要活动与荣誉'
  },
  {
    title: '图案纹样',
    link: '/science/layout/image',
    code: 'image',
    showTitleString: '图案纹样'
  },
  {
    title: '传承人',
    link: '/science/layout/inheritor',
    code: 'inheritor',
    showTitleString: '传承人'
  },
  {
    title: '民俗活动',
    link: '/science/layout/folklore',
    code: 'folklore',
    showTitleString: '民俗活动'
  }
]

const active = ref(navList[0])

onMounted(() => {
  const link = route.fullPath.split('?').shift()
  const query = route.fullPath.split('=').pop()
  console.log(route)
  active.value = navList.find((item) => item.link === link) || navList[0]
  subTitle.value = subRegionlist.find((item) => item.code === query)?.showTitleString || ''
})

watch(route, () => {
  const query = route.fullPath.split('=').pop()
  subTitle.value = subRegionlist.find((item) => item.code === query)?.showTitleString || ''
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
