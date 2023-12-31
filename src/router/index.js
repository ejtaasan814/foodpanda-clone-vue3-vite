import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home | Foodpanda'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'About-us | Foodpanda'
      }
    },
    {
      path: '/newsroom',
      name: 'newsroom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NewsroomView.vue'),
      meta: {
        title: 'Newsroom | Foodpanda'
      }
    },
    {
      path: '/panda-ads',
      name: 'panda-ads',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/PandaAdsView.vue'),
      meta: {
        title: 'panda ads | Foodpanda'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact | Foodpanda'
      }
    },

  ]
})

const DEFAULT_TITLE = 'Foodpanda';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router
