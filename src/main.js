import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router/index'
import { loadFonts } from './plugins/webfontloader'

import "@/assets/css/common.css"

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
