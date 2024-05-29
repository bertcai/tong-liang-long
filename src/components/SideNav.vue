<template>
  <div class="nav">
    <div
      class="nav-item"
      v-for="(item, index) in navList"
      :class="active.code === item.code ? 'active' : ''"
      :key="index"
    >
      <div class="text-wrapper">
        <router-link @click="clickRouterLink(index)" :to="item.link">{{ item.title }}</router-link>
      </div>
      <div class="logo">
        <img src="@/assets/img/side-nav-icon.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  navList: { title: string; link: string; code: string; showTitleString: string }[]
  active: { title: string; link: string; code: string; showTitleString: string }
}>()

const emit = defineEmits(['update:active'])

const clickRouterLink = (index: string | number) => {
  if (props.navList[index as number].link === '/dance/layout/hand') {
    const hasOpen = localStorage.getItem('openGameFrame')
    if (hasOpen !== 'true') {
      localStorage.setItem('openGameFrame', 'true')
      window.open('/dance/layout/game', '_blank')
    }
  }
  emit('update:active', props.navList[index as number])
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .nav-item {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 37px;
    cursor: pointer;
    text-align: right;
    font-family: FZMingShangTiS-R-GB;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 111.25%; /* 35.6px */
    margin-bottom: 6px;
    opacity: 0.44;
    .logo {
      width: 18px;
      margin-left: 8px;
      display: flex;
      justify-content: center;
      img {
        margin-left: 8px;
        height: 37px;
      }
    }
    &:hover {
      opacity: 1;
    }
    &.active {
      font-size: 32px;
      height: 69px;
      opacity: 1;
      .text-wrapper {
        height: 40px;
        display: flex;
        align-items: center;
        background-image: url('@/assets/img/active-link-bg.png');
        background-size: 120% 135%;
        background-position: center;
      }
      img {
        height: 69px;
      }
    }
  }
}
</style>
