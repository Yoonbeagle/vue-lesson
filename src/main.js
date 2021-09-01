import { createApp } from 'vue' // import router from './router' 대체
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
