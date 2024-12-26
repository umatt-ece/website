import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Create a Vue3 application
const app = createApp(App)

// Include 'router' for single page application (SPA) navigation
app.use(router)
// Include 'PrimeVue' for Vue components and styling
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.mount('#app')
