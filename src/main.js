import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import uiComponents from '@/ui'
import '@/assets/app.css'


const pinia = createPinia()
const app = createApp(App)

uiComponents.forEach((x) => { console.log(x.__name); app.component(x.__name, x) })

app.use(pinia)
app.mount('#app')
