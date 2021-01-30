import { createApp } from 'vue'
import App from './App.vue'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import store from './store'
import router from './router'

import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

createApp(App)
  .use(router)
  .use(store)
  .use(PerfectScrollbar)
  .mount('#app')
