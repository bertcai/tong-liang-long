<template>
  <BaseLayout sub-title="hhll" active="history">
    <template #logo>
      <img src="@/assets/img/history/logo.svg" />
    </template>
    <div class="wrapper">
      <div class="title-box">
        <div class="title">
          <img src="@/assets/img/sub-title-icon.svg" />
          起源
        </div>
        <SideNav :navList="navList" active="origin" />
      </div>
      <div class="text">
        <div class="top">
          <img src="@/assets/img/history/top-bg.svg" />
        </div>
        <div class="content">
          铜梁龙灯（舞）历史沿革已久，其滥觞已无籍可考，<br />据现可查文献《铜梁县志》载：“上元张灯火，<br />
          自初八、九至十五日，辉煌达旦， 并扮演龙灯、狮灯及其它杂剧，<br />
          喧闹街市，有月逐人、尘随马之观。”<br />
          此时川东 平原一带亦有“大足朝佛，铜梁观灯，<br />
          合川看春”的民间谚语流传。<br />由此可见，清代 中期每逢元宵佳节，铜梁周边悠客、商贾，<br />
          四乡农工乡民，皆云集铜梁境内，争睹龙灯盛况，景致热闹非凡。
        </div>
        <div class="bottom">
          <img src="@/assets/img/history/bottom-bg.svg" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import SideNav from '@/components/SideNav.vue'

const navList = [
  { title: '铜梁龙的起源', link: '/history/origin', code: 'origin' },
  { title: '铜梁龙的发展', link: '/history/development', code: 'development' }
]
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
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
  .text {
    width: 999px;
    height: 376px;
    margin-top: 139px;
    .top {
      display: flex;
      justify-content: end;
    }
    .content {
      text-align: center;
      font-family: FZMingShangTiS-R-GB;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .bottom {
      display: flex;
      justify-content: start;
    }
  }
}
</style>
