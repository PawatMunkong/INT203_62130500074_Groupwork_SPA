import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import NavBar from './components/NavBar.vue'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.component('NavBar', NavBar)

app.mount('#app')