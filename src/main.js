import { createApp } from 'vue'
import App from '@/App.vue'
import uiComponents from '@/ui'
import '@/assets/index.css'

const app = createApp(App)

uiComponents.forEach((x) => app.component(x.__name, x))

app.mount('#app')
