import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/history', name: 'history', component: () => import('../views/history/index.vue'),
    },
    {
      path: '/history/layout', name: 'history-layout', component: () => import('../views/history/LayoutView.vue'),
      redirect: '/history/layout/origin',
      children: [
        { path: 'origin', name: 'origin', component: () => import('../views/history/SubOrigin.vue') },
        { path: 'development', name: 'development', component: () => import('../views/history/SubDevelopment.vue') },
      ]
    },
    { path: '/science', name: 'science', component: () => import('../views/science/index.vue') },
    {
      path: '/science/layout', name: 'science-layout', component: () => import('../views/science/LayoutView.vue'),
      redirect: '/science/layout/concept',
      children: [
        { path: 'concept', name: 'concept', component: () => import('../views/science/SubConcept.vue') },
        { path: 'originality', name: 'originality', component: () => import('../views/science/SubOriginality.vue') },
        { path: 'wordcloud', name: 'wordcloud', component: () => import('../views/science/SubWordCloud.vue') },
        { path: 'regional', name: 'regional', component: () => import('../views/science/SubRegional.vue') },
        { path: 'activity', name: 'activity', component: () => import('../views/science/SubActivity.vue') },
        { path: 'inheritor', name: 'inheritor', component: () => import('../views/science/SubInheritor.vue') },
        { path: 'folklore', name: 'folklore', component: () => import('../views/science/SubFolklore.vue') },
        { path: 'image', name: 'image', component: () => import('../views/science/SubImage.vue') },
      ]
    },
    { path: '/catalogues', name: 'catalogues', component: () => import('../views/catalogues/index.vue') },
    { path: '/catalogues/entrance', name: 'entrance', component: () => import('../views/catalogues/EntranceView.vue') },
    {
      path: '/catalogues/colorlamp/layout', name: 'colorlamp-layout', component: () => import('../views/catalogues/colorLamp/LayoutView.vue'),
      redirect: '/catalogues/colorlamp/layout/paideng',
      children: [
        { path: '', name: 'colorlamp-index', component: () => import('../views/catalogues/colorLamp/index.vue') },
        { path: 'paideng', name: 'paideng', component: () => import('../views/catalogues/colorLamp/SubPaideng.vue') },
        { path: 'paideng/detail', name: 'paideng-detail', component: () => import('../views/catalogues/colorLamp/SubPaidengDetail.vue') },
        { path: 'zhukennangua', name: 'zhukennangua', component: () => import('../views/catalogues/colorLamp/SubZhukennangua.vue') },
        { path: 'zhukennangua/detail', name: 'zhukennangua-detail', component: () => import('../views/catalogues/colorLamp/SubZhukennanguaDetail.vue') },
        { path: 'niqiuchitangyuan', name: 'niqiuchitangyuan', component: () => import('../views/catalogues/colorLamp/SubNiqiuchitangyuan.vue') },
        { path: 'niqiuchitangyuan/detail', name: 'niqiuchitangyuan-detail', component: () => import('../views/catalogues/colorLamp/SubNiqiuchitangyuanDetail.vue') },
        { path: 'liangshi', name: 'liangshi', component: () => import('../views/catalogues/colorLamp/SubLiangshi.vue') },
        { path: 'liangshi/detail', name: 'liangshi-detail', component: () => import('../views/catalogues/colorLamp/SubLiangshiDetail.vue') },
        { path: 'santiaoshen', name: 'santiaoshen', component: () => import('../views/catalogues/colorLamp/SubSantiaoshen.vue') },
        { path: 'santiaoshen/detail', name: 'santiaoshen-detail', component: () => import('../views/catalogues/colorLamp/SubSantiaoshenDetail.vue') },
        { path: 'liyutiaolongmen', name: 'liyutiaolongmen', component: () => import('../views/catalogues/colorLamp/SubLiyutiaolongmen.vue') },
        { path: 'liyutiaolongmen/detail', name: 'liyutiaolongmen-detail', component: () => import('../views/catalogues/colorLamp/SubLiyutiaolongmenDetail.vue') },
        { path: 'shibaxueshi', name: 'shibaxueshi', component: () => import('../views/catalogues/colorLamp/SubShibaxueshi.vue') },
        { path: 'shibaxueshi/detail', name: 'shibaxueshi-detail', component: () => import('../views/catalogues/colorLamp/SubShibaxueshiDetail.vue') },
        { path: 'xiniuwangyue', name: 'xiniuwangyue', component: () => import('../views/catalogues/colorLamp/SubXiniuwangyue.vue') },
        { path: 'xiniuwangyue/detail', name: 'xiniuwangyue-detail', component: () => import('../views/catalogues/colorLamp/SubXiniuwangyueDetail.vue') },
      ]
    },
    {
      path: '/catalogues/dragonlamp/layout', name: 'dragonlamp-layout', component: () => import('../views/catalogues/dragonLamp/LayoutView.vue'),
      redirect: '/catalogues/dragonlamp/layout/darulong',
      children: [
        { path: '', name: 'dragonlamp-index', component: () => import('../views/catalogues/dragonLamp/index.vue') },
        { path: 'darulong', name: 'darulong', component: () => import('../views/catalogues/dragonLamp/SubDarulong.vue') },
        { path: 'darulong/detail', name: 'darulong-detail', component: () => import('../views/catalogues/dragonLamp/SubDarulongDetail.vue') },
        { path: 'bandenglong', name: 'bandenglong', component: () => import('../views/catalogues/dragonLamp/SubBandenglong.vue') },
        { path: 'bandenglong/detail', name: 'bandenglong-detail', component: () => import('../views/catalogues/dragonLamp/SubBandenglongDetail.vue') },
        { path: 'cailong', name: 'cailong', component: () => import('../views/catalogues/dragonLamp/SubCailong.vue') },
        { path: 'cailong/detail', name: 'cailong-detail', component: () => import('../views/catalogues/dragonLamp/SubCailongDetail.vue') },
        { path: 'zhubanglong', name: 'zhubanglong', component: () => import('../views/catalogues/dragonLamp/SubZhubanglong.vue') },
        { path: 'zhubanglong/detail', name: 'zhubanglong-detail', component: () => import('../views/catalogues/dragonLamp/SubZhubanglongDetail.vue') },
        { path: 'zhenglong', name: 'zhenglong', component: () => import('../views/catalogues/dragonLamp/SubZhenglong.vue') },
        { path: 'zhenglong/detail', name: 'zhenglong-detail', component: () => import('../views/catalogues/dragonLamp/SubZhenglongDetail.vue') },
        { path: 'huolong', name: 'huolong', component: () => import('../views/catalogues/dragonLamp/SubHuolong.vue') },
        { path: 'huolong/detail', name: 'huolong-detail', component: () => import('../views/catalogues/dragonLamp/SubHuolongDetail.vue') },
        { path: 'huangjinglong', name: 'huangjinglong', component: () => import('../views/catalogues/dragonLamp/SubHuangjinglong.vue') },
        { path: 'huangjinglong/detail', name: 'huangjinglong-detail', component: () => import('../views/catalogues/dragonLamp/SubHuangjinglongDetail.vue') },
        { path: 'hehualong', name: 'hehualong', component: () => import('../views/catalogues/dragonLamp/SubHehualong.vue') },
        { path: 'hehualong/detail', name: 'hehualong-detail', component: () => import('../views/catalogues/dragonLamp/SubHehualongDetail.vue') },
        { path: 'daocaolong', name: 'daocaolong', component: () => import('../views/catalogues/dragonLamp/SubDaocaolong.vue') },
        { path: 'daocaolong/detail', name: 'daocaolong-detail', component: () => import('../views/catalogues/dragonLamp/SubDaocaolongDetail.vue') },
        { path: 'jingjilong', name: 'jingjilong', component: () => import('../views/catalogues/dragonLamp/SubJingjilong.vue') },
        { path: 'jingjilong/detail', name: 'jingjilong-detail', component: () => import('../views/catalogues/dragonLamp/SubJingjilongDetail.vue') },
      ]
    },
    { path: '/art', name: 'art', component: () => import('../views/art/index.vue') },
    {
      path: '/art/layout', name: 'art-layout', component: () => import('../views/art/LayoutView.vue'),
      redirect: '/art/layout/intraduction',
      children: [
        { path: 'intraduction', name: 'intraduction', component: () => import('../views/art/SubIntraduction.vue') },
        { path: 'material', name: 'material', component: () => import('../views/art/SubMaterial.vue') },
        { path: 'preparation', name: 'preparation', component: () => import('../views/art/SubPreparation.vue') },
        { path: 'bone', name: 'bone', component: () => import('../views/art/SubBone.vue') },
        { path: 'mounting', name: 'mounting', component: () => import('../views/art/SubMounting.vue') },
        { path: 'painting', name: 'painting', component: () => import('../views/art/SubPainting.vue') },
        { path: 'assembling', name: 'assembling', component: () => import('../views/art/SubAssembling.vue') },
      ]
    },
    { path: '/dance', name: 'dance', component: () => import('../views/dance/index.vue') },
    {
      path: '/dance/layout', name: 'dance-layout', component: () => import('../views/dance/LayoutView.vue'),
      redirect: '/dance/layout/baseaction',
      children: [
        { path: 'baseaction', name: 'd-baseaction', component: () => import('../views/dance/SubBaseAction.vue') },
        { path: 'hardaction', name: 'd-hardaction', component: () => import('../views/dance/SubHardAction.vue') },
        { path: 'groupaction', name: 'd-groupaction', component: () => import('../views/dance/SubGroupAction.vue') },
        { path: 'hand', name: 'hand', component: () => import('../views/dance/SubHand.vue') },
      ]
    },

  ]
})

export default router
