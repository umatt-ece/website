import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

// Create a Vue3 application
const app = createApp(App)

// Include 'router' for single page application (SPA) navigation
app.use(router)
// Include 'PrimeVue' for Vue components and styling
app.use(PrimeVue);
app.use(ToastService) // Register ToastService globally

// Register PrimeVue components

app.mount('#app')
