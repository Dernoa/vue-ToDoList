import { createRouter, createWebHistory } from 'vue-router'
import aboutUs from '../../pages/aboutUs.vue'
import home from '../../pages/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/AboutUs',
      component: aboutUs
    }
  ],
})

export default router

