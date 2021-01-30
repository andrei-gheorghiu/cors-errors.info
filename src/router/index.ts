import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Faqs from '../views/Faqs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/faq'
  }, {
    path: '/faq',
    name: 'Faq',
    component: Faqs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
