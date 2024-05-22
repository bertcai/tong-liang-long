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
    <div class="content">
      <div class="bar">
        <div class="item">年代</div>
        <div class="item">{{ active === 'tool' ? '主要工具' : '主要材料' }}</div>
        <div class="item">工艺</div>
      </div>
      <div v-if="active === 'tool'" class="flourish-embed">
        <iframe
          src="https://flo.uri.sh/visualisation/17936013/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      </div>
      <div v-if="active === 'material'" class="flourish-embed">
        <iframe
          src="https://flo.uri.sh/visualisation/17944235/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import { onMounted, onBeforeUnmount, ref, type Ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const router = useRouter()
const route = useRoute()
const active = ref('tool')
const list = [
  { code: 'tool', title: '主要工具', src: origin, showSubTitle: '主要工具' },
  { code: 'material', title: '主要材料', showSubTitle: '主要材料' }
]

const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  changeSubTitle(list.find((item) => item.code === active.value)?.showSubTitle || '')
}
onMounted(() => {
  const currentRegion = route.query.region as string
  active.value = currentRegion || 'tool'
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
      width: 127px;
      height: 43px;
      margin-bottom: 31px;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.4;
      cursor: pointer;
      &.active {
        background: url('@/assets/img/science/region-link-bg.svg');
        opacity: 1;
      }
    }
  }
}
.content {
  position: absolute;
  width: 1256px;
  left: 305px;
  bottom: 31px;
  display: flex;
  flex-direction: column;
  .bar {
    color: #e92f93;
    font-family: STLiti;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: space-between;
  }
}
.flourish-embed {
  width: 1256px;
  height: 633px;
}
:deep(.flourish-embed iframe) {
  height: 633px !important;
  width: 100%;
}
</style>
