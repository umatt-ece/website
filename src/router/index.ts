import { createRouter, createWebHistory } from 'vue-router'
import UnderConstruction from '../Components/UnderConstruction.vue'

// Define routes for the application
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: UnderConstruction
  },
  {
    path: '/team',
    name: 'Team',
    component: UnderConstruction
  },
  {
    path: '/contact',
    name: 'Contact',
    component:  UnderConstruction
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: UnderConstruction
  },
  {
    path: '/join',
    name: 'join',
    component: UnderConstruction
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // Handle both route navigation and hash navigation
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
