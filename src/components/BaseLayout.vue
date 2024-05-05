<template>
  <div class="base-layout">
    <div class="nav">
      <div class="nav-item" :class="active === 'history' ? 'active' : ''">
        <router-link to="/history">灯史</router-link>
      </div>
      <div class="nav-item" :class="active === 'science' ? 'active' : ''">
        <router-link to="/science">灯学</router-link>
      </div>
      <div class="nav-item" :class="active === 'catalogues' ? 'active' : ''">
        <router-link to="/catalogues">灯录</router-link>
      </div>
      <div class="nav-item" :class="active === 'art' ? 'active' : ''">
        <router-link to="/art">灯艺</router-link>
      </div>
      <div class="nav-item" :class="active === 'dance' ? 'active' : ''">
        <router-link to="/dance">灯舞</router-link>
      </div>
    </div>
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  subTitle: string
  active: string
}>()
</script>

<style scoped>
.base-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 80px;
  .nav {
    display: flex;
    justify-content: end;
    padding: 0 20px;
    .nav-item {
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 69px;
      width: 109px;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      text-align: justify;
      font-family: FZMingShangTiS-R-GB;
      &.active {
        background-image: url('@/assets/img/active-link-bg.svg');
      }
      &:hover {
        background-image: url('@/assets/img/active-link-bg.svg');
      }
    }
  }
  .logo {
    position: absolute;
    top: 80px;
    left: 90px;
  }
  .content {
    margin-top: 42px;
  }
}
</style>
