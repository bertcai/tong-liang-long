<template>
  <div class="wrapper">
    <div v-if="state === 'interview'" class="interview">
      <div class="title">{{ stateTitleList[state] }}</div>
      <img class="desc" src="@/assets/img/dance/hand/interview-desc.svg" />
      <div class="confirm" @click="clickConfirm">
        <span>明白了</span>
      </div>
    </div>
    <div v-if="state === 'playing'" class="playing" @click="state = 'finish'">
      <div class="title">{{ stateTitleList[state] }}</div>
    </div>
    <div v-if="state === 'chapter'" class="chapter">
      <div class="title">请选择下面任意关卡进行挑战</div>
      <div class="list">
        <div class="item yylm" @click="open('yylm')"></div>
        <div class="item gtpl" @click="open('gtpl')"></div>
        <div class="item blgh" @click="open('blgh')"></div>
      </div>
    </div>
    <div v-if="state === 'finish'" class="interview">
      <div class="title">{{ stateTitleList[state] }}</div>
      <div class="header">{{ success ? '挑战成功' : '挑战失败' }}</div>
      <div class="operate">
        <div class="confirm" @click="repeat">
          <span>再试一次</span>
        </div>
        <div class="confirm" @click="toList">
          <span>重新选择</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mainBg from '@/assets/img/dance/hand/main-bg.png'
import { onMounted, ref } from 'vue'
const app = document.querySelector('#app') as any

const state = ref('finish')
const stateTitleList = {
  interview: '【游戏说明】',
  chapter: '请选择下面任意关卡进行挑战',
  playing: '【游戏中】',
  finish: '【游戏结束】'
}

const success = ref(false)

const showChapter = ref(true)
const clickConfirm = () => {
  console.log('clickConfirm')
  state.value = 'chapter'
}

const open = (name: string) => {
  console.log('open', name)
  state.value = 'playing'
  localStorage.setItem('gameState', 'playing')
  localStorage.setItem('gameType', name)
}
const repeat = () => {
  console.log('repeat')
  state.value = 'playing'
}

const toList = () => {
  console.log('toList')
  state.value = 'chapter'
}
onMounted(() => {
  app.style.background = `url(${mainBg}) no-repeat`
  window.addEventListener('storage', (event) => {
    console.log(event.key, event.newValue)
    if (event.key === 'gameState') {
      state.value = event.newValue || 'chapter'
    }
    if (event.key === 'gameResult') {
      success.value = event.newValue === 'success'
    }
  })
})
</script>

<style scoped>
.wrapper {
  display: flex;
  padding-top: 10px;
  width: 100%;
  justify-content: center;
  .playing {
    margin-top: 83px;
    width: 1253px;
    height: 654px;
    background: url(@/assets/img/dance/hand/playing.svg) no-repeat;
    .title {
      margin-top: -37px;
    }
  }
  .interview {
    margin-top: 83px;
    width: 1253px;
    height: 654px;
    background: url(@/assets/img/dance/hand/interview-bg.svg) no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
      margin-top: -37px;
    }
    .header {
      margin-top: 178px;
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
    .operate {
      margin-top: 78px;
      display: flex;
      justify-content: space-between;
      width: 766px;
      .confirm {
        margin-top: 0;
      }
    }
    .desc {
      width: 694px;
      height: 221px;
      margin-top: 171px;
    }
    .confirm {
      cursor: pointer;
      margin-top: 57px;
      width: 278px;
      height: 76px;
      flex-shrink: 0;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
        188deg,
        rgba(234, 24, 139, 0.29) -2.6%,
        rgba(233, 50, 149, 0.2175) 20.21%,
        rgba(236, 115, 173, 0.069) 68.55%,
        rgba(238, 146, 185, 0) 90.21%
      );

      span {
        background: linear-gradient(
          356deg,
          #c7eafd 3.38%,
          #c9dbf5 44.59%,
          #da74bc 97.93%,
          #e43299 125.97%,
          #e8198b 147.74%
        );
        background-clip: text;
        font-family: jiangxizhuokai;
        font-size: 38px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .chapter {
    margin-top: 112px;
    .title {
      margin-top: -66px;
    }
    .list {
      margin-top: 27px;
      display: flex;
      gap: 8px;
      width: 1174px;
      height: 547px;
      .item {
        width: 386px;
        height: 547px;
        cursor: pointer;
      }
      .yylm {
        background: url(@/assets/img/dance/hand/yylm.svg);
        &:hover {
          background: url(@/assets/img/dance/hand/yylm-hover.svg);
        }
      }
      .gtpl {
        background: url(@/assets/img/dance/hand/gtpl.svg);
        &:hover {
          background: url(@/assets/img/dance/hand/gtpl-hover.svg);
        }
      }
      .blgh {
        background: url(@/assets/img/dance/hand/blgh.svg);
        &:hover {
          background: url(@/assets/img/dance/hand/blgh-hover.svg);
        }
      }
    }
  }
  .title {
    text-align: center;
    font-family: 'FZLiShu-II-S06S';
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: linear-gradient(0deg, #fff1eb -0.02%, #c5e5f5 65.54%, #ace0f9 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
