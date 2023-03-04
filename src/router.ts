import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/password-generator',
    name: 'password-generator',
    component: () => import('@/pages/PasswordGenerator.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { router }
