<template>
  <RouterView />
</template>

<script setup lang="ts">
import { init, registerEventCallback } from 'touchfree/src'
import type { TouchFreeInputAction } from 'touchfree/src'
import { RouterLink, RouterView } from 'vue-router'
// import Leap from 'leapjs'

// const handleTouchFreeInput = (action: TouchFreeInputAction) => {
//   console.log('handleTouchFreeInput', action.InputType)
// }

// registerEventCallback('transmitInputAction', (action) => {
//   console.log('handleTouchFreeInput', action)
// })

init()
</script>
