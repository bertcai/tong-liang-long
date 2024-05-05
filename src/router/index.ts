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
    { path: '/history/origin', name: 'origin', component: () => import('../views/history/OriginView.vue') },
    { path: '/science', name: 'science', component: () => import('../views/science/index.vue') },
    { path: '/science/concept', name: 'concept', component: () => import('../views/science/ConceptView.vue') },
    { path: '/catalogues', name: 'catalogues', component: () => import('../views/catalogues/index.vue') },
    { path: '/catalogues/entrance', name: 'entrance', component: () => import('../views/catalogues/EntranceView.vue') },
    { path: '/art', name: 'art', component: () => import('../views/art/index.vue') },
    { path: '/art/introduction', name: 'introduction', component: () => import('../views/art/IntroductionView.vue') },
    { path: '/dance', name: 'dance', component: () => import('../views/dance/index.vue') },
    { path: '/dance/base-action', name: 'base-action', component: () => import('../views/dance/BaseActionView.vue') },
  ]
})

export default router
