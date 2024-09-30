import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: () => import('../views/IntroductionView.vue')
    },
    {
      path: '/details',
      name: 'Details',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/challenges',
      name: 'Challenges',
      component: () => import('../views/ChallengesView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/end',
      name: 'End',
      component: () => import('../views/EndView.vue')
    }
  ]
})

export default router
