<template>
  <div class="wrapper">
    <div class="img">
      <img src="@/assets/img/science/concept.png" />
    </div>
    <div class="description">
      <div class="item">
        <div class="color"></div>
        <div class="text"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .description {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .item {
      .color {
      }
      .text {
        font-family: Inter;
        color: #fee1f1;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
</style>
