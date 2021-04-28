import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Invoices',
    component: () => import('../views/Invoices.vue')
  },
  {
    path: '/:id',
    name: 'Invoice',
    component: () => import('../views/Invoice.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
