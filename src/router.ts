import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: () => import('@/docs/pages/home.vue')
    },
    {
      path: '/methods',
      component: () => import('@/docs/pages/methods.vue')
    },
    {
      path: '/styles',
      component: () => import('@/docs/pages/styles.vue')
    },
    {
      path: '/sections',
      component: () => import('@/docs/pages/sections.vue')
    },
    {
      path: '/payments',
      component: () => import('@/docs/pages/payments.vue')
    },
    {
      path: '/stripe',
      component: () => import('@/docs/pages/stripe.vue')
    },
    {
      path: '/calculatefees',
      component: () => import('@/docs/pages/calculatefees.vue')
    },
    {
      path: '/threeds',
      component: () => import('@/docs/pages/threeds.vue')
    },
    {
      path: '/apple-pay',
      component: () => import('@/docs/pages/apple-pay.vue')
    }
  ]
})
