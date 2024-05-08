<template>
  <div class="wrapper">
    <div class="content">
      <div class="ancient animate__animated animate__fadeInLeft">是祭祀祖先的方式</div>
      <div class="sport animate__animated animate__fadeInLeft animate__delay-500ms">
        是民族传统的体育竞技
      </div>
      <div class="culture animate__animated animate__fadeInLeft animate__delay-1s">
        是一种文化传承
      </div>
      <div class="belief animate__animated animate__fadeInLeft animate__delay-1500ms">
        是自古以来对龙的信仰
      </div>
      <div class="hope animate__animated animate__fadeInLeft animate__delay-2s">
        是对美好生活的期盼
      </div>
      <div class="symbol animate__animated animate__fadeInLeft animate__delay-2500ms">
        是团圆和喜庆的象征
      </div>
      <div class="program animate__animated animate__fadeInLeft animate__delay-3s">
        是节气庆典的助兴节目
      </div>
      <img src="@/assets/img/science/wordcloud.svg" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  margin-top: 40px;
  margin-right: 337px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  .content {
    div {
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding-left: 25px;
      border-bottom: 2px solid transparent; /* 设置边框宽度 */
      border-image: url('@/assets/img/science/bottom-border-bg.svg') 0 0 100% 0 stretch;
      /* 比img低一层 */
      z-index: -1;
    }
  }
  .ancient {
    position: absolute;
    color: #ff8800;
    width: 400px;
    top: 117px;
    right: 447px;
  }
  .sport {
    position: absolute;
    color: #007d8e;
    width: 478px;
    top: 204px;
    right: 447px;
  }
  .culture {
    position: absolute;
    color: #ff819c;
    width: 549px;
    top: 292px;
    right: 447px;
  }
  .belief {
    position: absolute;
    color: #644aff;
    width: 607px;
    top: 379px;
    right: 447px;
  }
  .hope {
    position: absolute;
    width: 652px;
    color: #9654e5;
    top: 467px;
    right: 447px;
  }
  .symbol {
    position: absolute;
    color: #1aa7ee;
    width: 714px;
    top: 555px;
    right: 447px;
  }
  .program {
    position: absolute;
    color: #ffc502;
    width: 784px;
    top: 642px;
    right: 447px;
  }
}
.animate__delay-500ms {
  animation-delay: 0.5s;
}

.animate__delay-1500ms {
  animation-delay: 1.5s;
}

.animate__delay-2500ms {
  animation-delay: 2.5s;
}
</style>
