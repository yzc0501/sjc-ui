import { createApp } from 'vue'
import App from './App.vue'
import SjcUi from '../packages'

const app = createApp(App)
app.use(SjcUi)
app.mount('#app')
