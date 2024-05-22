import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: () => import('@/layout/index.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    }
  ]
})

export default router
