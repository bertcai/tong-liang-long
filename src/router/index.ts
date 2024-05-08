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
        { path: 'baseaction', name: 'baseaction', component: () => import('../views/science/SubInheritor.vue') },
        { path: 'hardaction', name: 'hardaction', component: () => import('../views/science/SubHardAction.vue') },
        { path: 'groupaction', name: 'groupaction', component: () => import('../views/science/SubGroupAction.vue') },
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
        { path: 'zhukennangua', name: 'zhukennangua', component: () => import('../views/catalogues/colorLamp/SubZhukennangua.vue') },
        { path: 'niqiuchitangyuan', name: 'niqiuchitangyuan', component: () => import('../views/catalogues/colorLamp/SubNiqiuchitangyuan.vue') },
        { path: 'liangshi', name: 'liangshi', component: () => import('../views/catalogues/colorLamp/SubLiangshi.vue') },
        { path: 'santiaoshen', name: 'santiaoshen', component: () => import('../views/catalogues/colorLamp/SubSantiaoshen.vue') },
        { path: 'liyutiaolongmen', name: 'liyutiaolongmen', component: () => import('../views/catalogues/colorLamp/SubLiyutiaolongmen.vue') },
        { path: 'shibaxueshi', name: 'shibaxueshi', component: () => import('../views/catalogues/colorLamp/SubShibaxueshi.vue') },
        { path: 'xiniuwangyue', name: 'xiniuwangyue', component: () => import('../views/catalogues/colorLamp/SubXiniuwangyue.vue') },
      ]
    },
    {
      path: '/catalogues/dragonlamp/layout', name: 'dragonlamp-layout', component: () => import('../views/catalogues/dragonLamp/LayoutView.vue'),
      redirect: '/catalogues/dragonlamp/layout/darulong',
      children: [
        { path: '', name: 'dragonlamp-index', component: () => import('../views/catalogues/dragonLamp/index.vue') },
        { path: 'darulong', name: 'darulong', component: () => import('../views/catalogues/dragonLamp/SubDarulong.vue') },
        { path: 'bandenglong', name: 'bandenglong', component: () => import('../views/catalogues/dragonLamp/SubBandenglong.vue') },
        { path: 'cailong', name: 'cailong', component: () => import('../views/catalogues/dragonLamp/SubCailong.vue') },
        { path: 'zhubanglong', name: 'zhubanglong', component: () => import('../views/catalogues/dragonLamp/SubZhubanglong.vue') },
        { path: 'zhenglong', name: 'zhenglong', component: () => import('../views/catalogues/dragonLamp/SubZhenglong.vue') },
        { path: 'huolong', name: 'huolong', component: () => import('../views/catalogues/dragonLamp/SubHuolong.vue') },
        { path: 'huangjinglong', name: 'huangjinglong', component: () => import('../views/catalogues/dragonLamp/SubHuangjinglong.vue') },
        { path: 'hehualong', name: 'hehualong', component: () => import('../views/catalogues/dragonLamp/SubHehualong.vue') },
        { path: 'daocaolong', name: 'daocaolong', component: () => import('../views/catalogues/dragonLamp/SubDaocaolong.vue') },
        { path: 'jingjilong', name: 'jingjilong', component: () => import('../views/catalogues/dragonLamp/SubJingjilong.vue') },
      ]
    },
    { path: '/art', name: 'art', component: () => import('../views/art/index.vue') },
    {
      path: '/art/layout', name: 'art-layout', component: () => import('../views/art/LayoutView.vue'),
      children: [
        { path: 'intraduction', name: 'intraduction', component: () => import('../views/art/SubIntraduction.vue') },
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
        { path: 'routine', name: 'routine', component: () => import('../views/dance/SubRoutine.vue') },
      ]
    },

  ]
})

export default router
