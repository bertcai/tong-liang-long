<template>
  <RouterView />
</template>

<script setup lang="ts">
import { init, registerEventCallback } from 'touchfree/src'
import type { TouchFreeInputAction } from 'touchfree/src'
import { RouterLink, RouterView } from 'vue-router'

init()
</script>
