<template>
  <div class="wrapper">
    <img v-show="showAll" class="full-screen" :src="fullImgUrl" />
    <img v-show="showActivity" class="full-screen" :src="activityPng" />
    <img v-show="showHonour" class="full-screen" :src="honourPng" />
    <div class="changer">
      <div class="item" @mouseover="showA" @mouseleave="leave">
        <div class="color">
          <img src="@/assets/img/science/honour-btn.svg" />
        </div>
        <div class="text">赛事荣誉</div>
      </div>
      <div class="item" @mouseover="showH" @mouseleave="leave">
        <div class="color">
          <img src="@/assets/img/science/activity-btn.svg" />
        </div>
        <div class="text">重要活动</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import activityGif from '@/assets/img/science/activity.gif'
import activityPng from '@/assets/img/science/activity.png'
import honourPng from '@/assets/img/science/honour.png'

const fullImgUrl = ref(activityGif)
const showAll = ref(true)
const showActivity = ref(false)
const showHonour = ref(false)

const showA = () => {
  showAll.value = false
  showActivity.value = true
  showHonour.value = false
}

const showH = () => {
  showAll.value = false
  showActivity.value = false
  showHonour.value = true
}

const leave = () => {
  showAll.value = true
  showActivity.value = false
  showHonour.value = false
}

onMounted(() => {
  fullImgUrl.value = activityGif + '?' + Date.now()
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
}
.full-screen {
  width: 1920px;
  height: 1080px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.changer {
  margin-top: 352px;
  margin-right: 192px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .item {
    margin-top: 26px;
    cursor: pointer;
    .text {
      margin-top: 10px;
    }
  }
}
</style>
