import { createApp } from 'vue'
import App from './App.vue'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(PerfectScrollbar)
app.mount('#app')
