<template>
  <div v-show="state === 'success' && showMask === false" id="gameGif" class="gif"></div>
  <div class="wrapper">
    <div v-if="state === 'interview' || state === 'chapter'" class="mp4">
      <video
        ref="video"
        src="@/assets/img/dance/game/interview.mp4"
        controls
        autoplay
        loop
        muted
        playsinline
        preload="auto"
      ></video>
    </div>
    <div
      class="map"
      ref="gameFrame"
      id="gameFrame"
      @pointermove="moveBall"
      @mousemove="moveBall"
      :class="game"
    >
      <img v-if="state === 'playing'" :src="countdownUrl" class="countdown" />
      <img
        v-show="showBall && state === 'playing'"
        src="@/assets/img/dance/game/ball.png"
        id="ball"
        class="ball"
      />
      <img v-show="state === 'playing'" :src="list.find((item) => item.code === game)?.map" />
      <div class="start"></div>
      <div
        class="end"
        @mouseenter="caseEnd"
        @mouseleave="leaveEnd"
        @pointerenter="caseEnd"
        @pointerleave="leaveEnd"
      ></div>
      <div class="attr start"></div>
      <div class="attr end"></div>
    </div>
    <div class="tip">温馨提示：到达终点后需<span>停留2秒</span>方可判定成功哦！</div>
  </div>
  <div v-if="showMask" class="mask" ref="mask">
    <div class="modal">
      <div class="title">{{ state === 'success' ? '恭喜你' : '很遗憾' }}</div>
      <div class="header">{{ state === 'success' ? '挑战成功' : '挑战失败' }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch, onMounted, onUnmounted } from 'vue'
import { init } from 'touchfree/src'
import yylmBg from '@/assets/img/dance/game/yylm-bg.svg'
import yylmMap from '@/assets/img/dance/game/yylm-map.svg'
import yylmGif from '@/assets/img/dance/game/yylm-fn.gif'
import gtplBg from '@/assets/img/dance/game/gtpl-bg.svg'
import gtplMap from '@/assets/img/dance/game/gtpl-map.svg'
import gtplGif from '@/assets/img/dance/game/gtpl-fn.gif'
import blghBg from '@/assets/img/dance/game/blgh-bg.svg'
import blghMap from '@/assets/img/dance/game/blgh-map.svg'
import blghGif from '@/assets/img/dance/game/blgh-fn.gif'
import countdown from '@/assets/img/dance/game/countdown.gif'
const game = ref('blgh')

const app = document.querySelector('#app') as any
const changeSubTitle = inject('changeSubTitle') as (title: string) => void
const list = [
  { title: '鱼跃龙门', code: 'yylm', bg: yylmBg, map: yylmMap, gif: yylmGif },
  { title: '高塔盘龙', code: 'gtpl', bg: gtplBg, map: gtplMap, gif: gtplGif },
  { title: '八龙归海', code: 'blgh', bg: blghBg, map: blghMap, gif: blghGif }
]

const showBall = ref(false)
const mask = ref(null)
const showMask = ref(false)
const gameFrame = ref(null)
const state = ref('interview')

const successTimer = ref()

const moveBall = (event: { clientX: number; clientY: number }) => {
  showBall.value = true
  const ball = document.getElementById('ball') as any
  const wrapper = document.getElementById('gameFrame') as any

  const wrapperRect = wrapper.getBoundingClientRect()

  // 计算ball的位置（以鼠标在ball中心点为准）
  const ballX = event.clientX - wrapperRect.left
  const ballY = event.clientY - wrapperRect.top

  // if (ballX < 0 || ballX > wrapperRect.width || ballY < 0 || ballY > wrapperRect.height) {
  //   showBall.value = false
  //   return
  // }

  // 设置ball的新位置
  ball.style.left = ballX + 'px'
  ball.style.top = ballY + 'px'
}

const caseEnd = () => {
  console.log('caseEnd')
  if (successTimer.value) {
    clearTimeout(successTimer.value)
  }
  successTimer.value = setTimeout(() => {
    console.log('success')
    successTimer.value = null
    showBall.value = false
    clearTimeout(failTimer.value)
    state.value = 'success'
    const gameGif = document.getElementById('gameGif') as any
    gameGif.style.backgroundImage = `url(${list.find((item) => item.code === game.value)?.gif + '?' + Date.now()})`
    setTimeout(() => {
      showMask.value = true
      localStorage.setItem('gameState', 'success')
    }, 5000)
  }, 2000)
}

const leaveEnd = () => {
  console.log('leaveEnd')
  if (successTimer.value) {
    clearTimeout(successTimer.value)
    successTimer.value = null
  }
}

const countdownUrl = ref(countdown + '?' + Date.now())
watch(
  () => state.value,
  (value) => {
    if (value === 'playing') {
      countdownUrl.value = countdown + '?' + Date.now()
    }
  }
)

watch(
  () => game.value,
  (value) => {
    console.log(value)
    changeSubTitle(list.find((item) => item.code === value)?.title || '')
    app.style.backgroundImage = `url(${list.find((item) => item.code === value)?.bg})`
  },
  { immediate: true }
)

const failTimer = ref()

onMounted(() => {
  game.value = localStorage.getItem('gameType') || 'yylm'
  window.addEventListener('storage', (event) => {
    if (event.key === 'gameType') {
      game.value = event.newValue || 'yylm'
    }
    if (event.key === 'gameState') {
      state.value = event.newValue || 'interview'
      clearTimeout(successTimer.value)
      clearTimeout(failTimer.value)
      if (state.value === 'chapter' || state.value === 'interview') {
        showMask.value = false
        app.style.backgroundImage = `url(${list.find((item) => item.code === game.value)?.bg})`
      }
      if (state.value === 'playing') {
        showMask.value = false
        app.style.backgroundImage = `url(${list.find((item) => item.code === game.value)?.bg})`
        failTimer.value = setTimeout(() => {
          state.value = 'fail'
          showMask.value = true
          localStorage.setItem('gameState', 'fail')
          clearTimeout(successTimer.value)
        }, 45000)
      }
    }
  })
  window.addEventListener('beforeunload', () => localStorage.setItem('openGameFrame', 'false'))
  init()
})

onUnmounted(() => {
  window.removeEventListener('beforeunload', () => localStorage.setItem('openGameFrame', 'false'))
})
</script>

<style scoped>
.mp4 {
  position: fixed;
  width: 1920px;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 999;
}
.gif {
  position: fixed;
  width: 1920px;
  height: 1080px;
  top: 0;
  left: 0;
}
.mask {
  position: fixed;
  width: 1920px;
  height: 1080px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9 /*  */);
  z-index: 999;
  .modal {
    margin-top: 299px;
    background-image: url(@/assets/img/dance/game/modal.svg);
    width: 1011.596px;
    height: 528px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-top: 152px;
      text-align: center;
      font-family: Inter;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.7;
    }
    .header {
      margin-top: 13px;
      text-align: center;
      font-family: 'FZLiShu-II-S06S';
      font-size: 90px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background: linear-gradient(0deg, #fff1eb -0.02%, #c5e5f5 65.54%, #ace0f9 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.wrapper {
  display: flex;
  padding-top: 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  .map {
    width: fit-content;
    position: relative;
    padding: 4px;
    .countdown {
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .start {
    width: 145px;
    height: 145px;
    background: url(@/assets/img/dance/game/start.svg);
  }
  .end {
    width: 145px;
    height: 145px;
    background: url(@/assets/img/dance/game/end.svg);
  }
  .attr {
    width: 61px;
    height: 95px;
    background: url(@/assets/img/dance/game/attr.svg);
  }
  .yylm {
    width: 1539px;
    height: 682px;
    position: absolute;
    left: 140px;
    bottom: 51px;
    .start {
      position: absolute;
      left: -107px;
      bottom: 38px;
    }
    .end {
      position: absolute;
      right: -63px;
      bottom: 145px;
    }
    .attr.start {
      position: absolute;
      left: 39px;
      bottom: 49px;
    }
    .attr.end {
      position: absolute;
      right: 43px;
      bottom: 81px;
    }
  }
  .gtpl {
    width: 1447px;
    height: 654px;
    position: absolute;
    left: 214px;
    bottom: 107px;
    .start {
      position: absolute;
      left: 512px;
      bottom: -22px;
    }
    .end {
      position: absolute;
      left: 586px;
      top: -56px;
    }
    .attr.start {
      position: absolute;
      left: 693px;
      bottom: 36px;
    }
    .attr.end {
      position: absolute;
      left: 652px;
      top: 58px;
    }
  }
  .blgh {
    width: 1357px;
    height: 618px;
    position: absolute;
    left: 255px;
    bottom: 87px;
    .start {
      position: absolute;
      top: 2px;
      left: 577px;
    }
    .end {
      position: absolute;
      left: 320px;
      top: 291px;
    }
    .attr.start {
      position: absolute;
      left: 510px;
      top: 39px;
    }
    .attr.end {
      position: absolute;
      left: 465px;
      top: 256px;
    }
  }
  .tip {
    position: absolute;
    bottom: -20px;
    color: #fff1f9;
    text-align: center;
    font-family: jiangxizhuokai;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    span {
      color: #e92f93;
    }
  }
  .ball {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}
</style>
