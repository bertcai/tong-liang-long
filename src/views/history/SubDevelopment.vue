<template>
  <div class="wrapper">
    <div class="img-wrapper">
      <div class="description-wrapper animate__animated animate__delay-3s animate__fadeIn">
        <div class="han">
          <img src="@/assets/img/history/description/han.svg" />
        </div>
        <div class="tangsong">
          <img src="@/assets/img/history/description/tangsong.svg" />
        </div>
        <div class="ming">
          <img src="@/assets/img/history/description/ming.svg" />
        </div>
        <div class="qing">
          <img src="@/assets/img/history/description/qing.svg" />
        </div>
        <div class="jianguochu">
          <img src="@/assets/img/history/description/jianguochu.svg" />
        </div>
        <div class="y1958">
          <img src="@/assets/img/history/description/1958.svg" />
        </div>
        <div class="gaigekaifang">
          <img src="@/assets/img/history/description/gaigekaifang.svg" />
        </div>
        <div class="y1980s">
          <img src="@/assets/img/history/description/1980s.svg" />
        </div>
        <div class="rujin">
          <img src="@/assets/img/history/description/rujin.svg" />
        </div>
      </div>
      <img :key="random" :src="gifS" />
      <div class="time-text-wrapper animate__animated animate__delay-4s animate__fadeIn">
        <div class="han">汉</div>
        <div class="tangsong">唐宋</div>
        <div class="ming">明</div>
        <div class="qing">清</div>
        <div class="jianguochu">建国初</div>
        <div class="y1958">1958</div>
        <div class="gaigekaifang">改革开放</div>
        <div class="y1980s">20世纪80年代</div>
        <div class="rujin">如今</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gif from '@/assets/img/history/develop.gif'
const random = ref(0)
let gifS = ref(gif + '?' + random.value)
onMounted(() => {
  random.value = Date.now()
  gifS.value = gif + '?' + random.value
  console.log(gifS.value)
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  .img-wrapper {
    position: relative;
    margin-top: 99px;
    width: 1590px;
    height: 610px;
    .description-wrapper {
      .han {
        position: absolute;
        top: 299px;
        left: 72px;
      }
      .tangsong {
        position: absolute;
        top: 173px;
        left: 235px;
      }
      .ming {
        position: absolute;
        top: 124px;
        left: 401px;
      }
      .qing {
        position: absolute;
        top: 72px;
        left: 556px;
      }
      .jianguochu {
        position: absolute;
        top: 202px;
        left: 743px;
      }
      .y1958 {
        position: absolute;
        top: 294px;
        left: 938px;
      }
      .gaigekaifang {
        position: absolute;
        top: 121px;
        left: 1103px;
      }
      .y1980s {
        position: absolute;
        top: 18px;
        left: 1261px;
      }
      .rujin {
        position: absolute;
        bottom: 582px;
        left: 1406px;
      }
    }
    .time-text-wrapper {
      color: #fee1f1;
      font-family: Inter;
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      .han {
        position: absolute;
        top: 575px;
        left: 51px;
      }
      .tangsong {
        position: absolute;
        top: 509px;
        left: 180px;
      }
      .ming {
        position: absolute;
        top: 473px;
        left: 338px;
      }
      .qing {
        position: absolute;
        top: 485px;
        left: 507px;
      }
      .jianguochu {
        position: absolute;
        top: 509px;
        left: 689px;
      }
      .y1958 {
        position: absolute;
        top: 524px;
        left: 853px;
      }
      .gaigekaifang {
        position: absolute;
        top: 487px;
        left: 1078px;
        width: 60px;
      }
      .y1980s {
        position: absolute;
        top: 385px;
        left: 1226px;
        width: 90px;
      }
      .rujin {
        position: absolute;
        bottom: 299px;
        left: 1378px;
      }
    }
  }
}
</style>
