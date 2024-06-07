import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import uiComponents from '@/ui'
import '@/assets/index.css'


const pinia = createPinia()
const app = createApp(App)

uiComponents.forEach((x) => app.component(x.__name, x))

app.use(pinia)
app.mount('#app')
