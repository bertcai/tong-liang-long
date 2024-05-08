<template>
  <div class="wrapper">
    <div class="region-changer">
      <div
        class="item"
        :key="item.code"
        v-for="item in list"
        :class="active === item.code ? 'active' : ''"
        @click="clickRegion(item.code)"
      >
        {{ item.title }}
      </div>
    </div>
    <div v-if="active === 'tongliang'" class="tongliang-mask" ref="mask">
      <div
        v-for="item in lampTypes"
        :key="item.code"
        :class="['lamp-type-box', `${item.code.endsWith('long') ? 'align-left' : 'align-right'}`]"
        :id="item.code"
        @mouseover="hoverLamp(item.code)"
        @mouseleave="leaveLamp(item.code)"
      >
        <div class="circle"></div>
        <div class="name">
          {{ item.name }}
        </div>
      </div>
      <div class="tip">
        <img src="@/assets/img/science/map/tip.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import region1 from '@/assets/img/science/region1.gif'
import region2 from '@/assets/img/science/region2.gif'
import region3 from '@/assets/img/science/region3.gif'
import huolong from '@/assets/img/science/map/huolong.png'
import darulong from '@/assets/img/science/map/darulong.png'
import daocaolong from '@/assets/img/science/map/daocaolong.png'
import huangjinglong from '@/assets/img/science/map/huangjinglong.png'
import bandenglong from '@/assets/img/science/map/bandenglong.png'
import xiaocailong from '@/assets/img/science/map/xiaocailong.png'
import hehualong from '@/assets/img/science/map/hehualong.png'
import zhubanglong from '@/assets/img/science/map/zhubanglong.png'
import sunkelong from '@/assets/img/science/map/sunkelong.png'
import zhenglong from '@/assets/img/science/map/zhenglong.png'
import nanguapeng from '@/assets/img/science/map/nanguapeng.png'
import kaishanhu from '@/assets/img/science/map/kaishanhu.png'
import zhukennangua from '@/assets/img/science/map/zhukennangua.png'
import yuyuelongmen from '@/assets/img/science/map/yuyuelongmen.png'
import niqiuchitangyuan from '@/assets/img/science/map/niqiuchitangyuan.png'
import santiaoshen from '@/assets/img/science/map/santiaoshen.png'
import shibaxueshi from '@/assets/img/science/map/shibaxueshi.png'
import bengkejing from '@/assets/img/science/map/bengkejing.png'
import liangshi from '@/assets/img/science/map/liangshi.png'
import xiniuwangyue from '@/assets/img/science/map/xiniuwangyue.png'
import gaotailongshi from '@/assets/img/science/map/gaotailongshi.png'
import yantatiming from '@/assets/img/science/map/yantatiming.png'

const random = ref(0)
const region1S = ref(region1 + '?' + random.value)
const region2S = ref(region2 + '?' + random.value)
const region3S = ref(region3 + '?' + random.value)
const router = useRouter()
const route = useRoute()
const active = ref('lamp')
const mask = ref() as Ref<HTMLElement>
const app = document.querySelector('#app') as Element
const list = [
  { code: 'lamp', title: '全国龙灯', src: region1S },
  { code: 'dance', title: '全国龙舞', src: region2S },
  { code: 'tongliang', title: '铜梁地区', src: region3S }
]

const lampTypes = ref([
  { code: 'huolong', name: '火龙', src: huolong },
  { code: 'darulong', name: '大蠕龙', src: darulong },
  { code: 'daocaolong', name: '稻草龙', src: daocaolong },
  { code: 'huangjinglong', name: '黄荆龙', src: huangjinglong },
  { code: 'bandenglong', name: '板凳龙', src: bandenglong },
  { code: 'xiaocailong', name: '小彩龙', src: xiaocailong },
  { code: 'hehualong', name: '荷花龙', src: hehualong },
  { code: 'zhubanglong', name: '竹梆龙', src: zhubanglong },
  { code: 'sunkelong', name: '笋壳龙', src: sunkelong },
  { code: 'zhenglong', name: '正龙', src: zhenglong },
  { code: 'nanguapeng', name: '南瓜棚', src: nanguapeng },
  { code: 'kaishanhu', name: '开山虎', src: kaishanhu },
  { code: 'zhukennangua', name: '猪啃南瓜', src: zhukennangua },
  { code: 'yuyuelongmen', name: '鱼跃龙门', src: yuyuelongmen },
  { code: 'niqiuchitangyuan', name: '泥鳅吃汤圆', src: niqiuchitangyuan },
  { code: 'santiaoshen', name: '三条鲹', src: santiaoshen },
  { code: 'shibaxueshi', name: '十八学士', src: shibaxueshi },
  { code: 'bengkejing', name: '蚌壳精', src: bengkejing },
  { code: 'liangshi', name: '亮狮', src: liangshi },
  { code: 'xiniuwangyue', name: '犀牛望月', src: xiniuwangyue },
  { code: 'gaotailongshi', name: '高台龙狮', src: gaotailongshi },
  { code: 'yantatiming', name: '雁塔题名', src: yantatiming }
])

const activeUrl = ref('')

const hoverLamp = async (code: string) => {
  console.log(code)
  const url = lampTypes.value!.find((item) => item.code === code)?.src || ''
  mask.value!.style.background = `url(${url}) no-repeat`
  mask.value!.style.backgroundSize = 'cover'
  app.style.background = ''
}

const leaveLamp = (code: string) => {
  mask.value!.style.background = ''
  mask.value!.style.backgroundSize = ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
  console.log(code)
}

const clickRegion = (code: string) => {
  active.value = code
  router.push({ query: { region: code } })
  activeUrl.value =
    list.find((item) => item.code === active.value)?.src.value + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
}
onMounted(() => {
  const currentRegion = route.query.region as string
  active.value = currentRegion || 'lamp'
  activeUrl.value =
    list.find((item) => item.code === active.value)?.src.value + '?' + Math.random() || ''
  app.style.background = `url(${activeUrl.value}) no-repeat`
})

onBeforeUnmount(() => {})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-start;
  padding-top: 10px;
  width: 100%;
  .region-changer {
    margin-left: 90px;
    margin-top: 270px;
    z-index: 100;
    .item {
      width: 127px;
      height: 43px;
      margin-bottom: 31px;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.4;
      cursor: pointer;
      &.active {
        background: url('@/assets/img/science/region-link-bg.svg');
        opacity: 1;
      }
    }
  }
  .tongliang-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 1920px;
    height: 1080px;
    .tip {
      position: absolute;
      top: 780px;
      left: 1647px;
    }
    .lamp-type-box {
      display: flex;
      align-items: flex-start;
      &.align-left {
        justify-content: flex-start;
        flex-direction: row-reverse;
      }
      &.align-right {
        justify-content: flex-start;
      }
      .name {
        width: 15px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        opacity: 0;
      }
      .circle {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      &#huolong {
        /* 火龙 */
        position: absolute;
        top: 292px;
        left: 359px;
      }
      &#darulong {
        /* 大蠕龙 */
        position: absolute;
        top: 336px;
        left: 528px;
      }
      &#daocaolong {
        /* 稻草龙 */
        position: absolute;
        top: 426px;
        left: 346px;
      }
      &#huangjinglong {
        /* 黄荆龙 */
        position: absolute;
        top: 567px;
        left: 353px;
      }
      &#bandenglong {
        /* 板凳龙 */
        position: absolute;
        top: 640px;
        left: 505px;
      }
      &#xiaocailong {
        /* 小彩龙 */
        position: absolute;
        top: 735px;
        left: 414px;
      }
      &#hehualong {
        /* 荷花龙 */
        position: absolute;
        top: 830px;
        left: 328px;
      }
      &#zhubanglong {
        /* 竹梆龙 */
        position: absolute;
        top: 893px;
        left: 465px;
      }
      &#sunkelong {
        /* 笋壳龙 */
        position: absolute;
        top: 891.67px;
        left: 613px;
      }
      &#zhenglong {
        /* 正龙 */
        position: absolute;
        top: 938px;
        left: 739.48px;
      }
      &#nanguapeng {
        /* 南瓜棚 */
        position: absolute;
        top: 169.4px;
        left: 850.99px;
      }
      &#kaishanhu {
        /* 开山虎 */
        position: absolute;
        top: 239.61px;
        left: 994px;
      }
      &#zhukennangua {
        /* 猪啃南瓜 */
        position: absolute;
        top: 174px;
        left: 1130px;
      }
      &#yuyuelongmen {
        /* 鱼跃龙门 */
        position: absolute;
        top: 261px;
        left: 1246px;
      }
      &#niqiuchitangyuan {
        /* 泥鳅吃汤圆 */
        position: absolute;
        top: 284px;
        left: 1392px;
      }
      &#santiaoshen {
        /* 三条鲹 */
        position: absolute;
        top: 439px;
        left: 1361px;
      }
      &#shibaxueshi {
        /* 十八学士 */
        position: absolute;
        top: 562px;
        left: 1458px;
      }
      &#bengkejing {
        /* 蚌壳精 */
        position: absolute;
        top: 675px;
        left: 1346px;
      }
      &#liangshi {
        /* 亮狮 */
        position: absolute;
        top: 803.99px;
        left: 1285px;
      }
      &#xiniuwangyue {
        /* 犀牛望月 */
        position: absolute;
        top: 802px;
        left: 1429px;
      }
      &#gaotailongshi {
        /* 高台龙狮 */
        position: absolute;
        top: 904.49px;
        left: 1092.67px;
      }
      &#yantatiming {
        /* 雁塔题名 */
        position: absolute;
        top: 909px;
        left: 1228px;
      }
    }
  }
}
</style>

<style>
.science-region-lamp {
  background: url('@/assets/img/science/region1.gif') no-repeat;
  background-size: cover;
}
.science-region-dance {
  background: url('@/assets/img/science/region2.gif') no-repeat;
  background-size: cover;
}
.science-region-tongliang {
  background: url('@/assets/img/science/region3.gif') no-repeat;
  background-size: cover;
}
</style>
