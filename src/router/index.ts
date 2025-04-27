import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// Use dynamic imports for route components
const HomeView = () => import(/* webpackChunkName: "home" */  /* webpackPrefetch: true */ '@/views/HomeView.vue')
const UnderConstruction = () => import( /* webpackPrefetch: true */ /* webpackChunkName: "under-construction" */'@/views/UnderConstruction.vue')

// Define routes for the application
export const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        /* webpackChunkName: "home" */
        /* webpackPrefetch: true */
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        /* webpackChunkName: "join" */
        /* webpackPrefetch: true */
        path: '/join',
        name: 'join',
        component: UnderConstruction

      },
      {
        /* webpackChunkName: "about" */
        /* webpackPrefetch: true */

        path: '/about',
        name: 'about',
        component: UnderConstruction
      },
      {
        /* webpackChunkName: "team" */
        /* webpackPrefetch: true */
        path: '/team',
        name: 'team',
        component: UnderConstruction
      },
      {
        /* webpackChunkName: "contact" */
        /* webpackPrefetch: true */

        path: '/contact',
        name: 'contact',
        component: UnderConstruction

      },
      {
        /* webpackChunkName: "sponsor" */
        /* webpackPrefetch: true */
        path: '/sponsor',
        name: 'sponsor',
        component: UnderConstruction
      }

    ]
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
