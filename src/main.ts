import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { Icon } from '@iconify/vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(createPinia())
app.use(router)
app.component('Icon', Icon)
app.mount('#app')
