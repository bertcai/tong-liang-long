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
    title: '大蠕龙',
    link: '/catalogues/dragonlamp/layout/darulong',
    code: 'darulong',
    showTitleString: '大蠕龙'
  },
  {
    title: '板凳龙',
    link: '/catalogues/dragonlamp/layout/bandenglong',
    code: 'bandenglong',
    showTitleString: '板凳龙'
  },
  {
    title: '彩龙',
    link: '/catalogues/dragonlamp/layout/cailong',
    code: 'cailong',
    showTitleString: '彩龙'
  },
  {
    title: '竹梆龙',
    link: '/catalogues/dragonlamp/layout/zhubanglong',
    code: 'zhubanglong',
    showTitleString: '竹梆龙'
  },
  {
    title: '正龙',
    link: '/catalogues/dragonlamp/layout/zhenglong',
    code: 'zhenglong',
    showTitleString: '正龙'
  },
  {
    title: '火龙',
    link: '/catalogues/dragonlamp/layout/huolong',
    code: 'huolong',
    showTitleString: '火龙'
  },
  {
    title: '黄荆龙',
    link: '/catalogues/dragonlamp/layout/huangjinglong',
    code: 'huangjinglong',
    showTitleString: '黄荆龙'
  },
  {
    title: '荷花龙',
    link: '/catalogues/dragonlamp/layout/hehualong',
    code: 'hehualong',
    showTitleString: '荷花龙'
  },
  {
    title: '稻草龙',
    link: '/catalogues/dragonlamp/layout/daocaolong',
    code: 'daocaolong',
    showTitleString: '稻草龙'
  },
  {
    title: '竞技龙',
    link: '/catalogues/dragonlamp/layout/jingjilong',
    code: 'jingjilong',
    showTitleString: '竞技龙'
  }
]

const active = ref(navList[0])
const isIndex = ref(false)

onMounted(() => {
  const link = route.fullPath
  console.log(route)
  active.value = navList.find((item) => item.link === link) || navList[0]
  if (link === '/catalogues/dragonlamp/layout') {
    isIndex.value = true
  }
})
watch(route, () => {
  const link = route.fullPath
  active.value = navList.find((item) => item.link === link) || navList[0]
  if (link === '/catalogues/dragonlamp/layout') {
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
  position: relative;
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
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
