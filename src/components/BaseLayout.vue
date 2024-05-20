<template>
  <div class="base-layout">
    <div class="nav">
      <div class="nav-item" :class="active === 'history' ? 'active' : ''">
        <router-link to="/history">灯史</router-link>
      </div>
      <div class="split"></div>
      <div class="nav-item" :class="active === 'science' ? 'active' : ''">
        <router-link to="/science">灯学</router-link>
      </div>
      <div class="split"></div>
      <div class="nav-item" :class="active === 'catalogues' ? 'active' : ''">
        <router-link to="/catalogues">灯录</router-link>
      </div>
      <div class="split"></div>
      <div class="nav-item" :class="active === 'art' ? 'active' : ''">
        <router-link to="/art">灯艺</router-link>
      </div>
      <div class="split"></div>
      <div class="nav-item" :class="active === 'dance' ? 'active' : ''">
        <router-link to="/dance">灯舞</router-link>
      </div>
    </div>
    <div class="logo" @click="toIndex">
      <slot name="logo"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps<{
  subTitle: string
  active: string
}>()

const toIndex = () => {
  router.push('/')
}
</script>

<style scoped>
.base-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 80px;
  height: 100vh;
  .nav {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 20px;
    z-index: 100;
    .split {
      width: 2px;
      height: 22px;
      background-color: #fff;
      margin: 0 50px;
    }
    .nav-item {
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 85px;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      text-align: justify;
      font-family: FZMingShangTiS-R-GB;
      cursor: pointer;
      &.active {
        background-image: url('@/assets/img/active-link-bg.svg');
        background-position: center;
        background-size: 100%;
      }
      &:hover {
        background-image: url('@/assets/img/active-link-bg.svg');
        background-position: center;
        background-size: 100%;
      }
    }
  }
  .logo {
    position: absolute;
    top: 79px;
    left: 89px;
    cursor: pointer;
    z-index: 100;
  }
  .content {
    margin-top: 30px;
    height: 100%;
  }
}
</style>
