import { createApp } from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "@/router/index"
import { loadFonts } from "./plugins/webfontloader"
import LoadScript from "vue-plugin-load-script"

import "@/assets/css/common.css"
import { createPinia } from 'pinia'

loadFonts()

createApp(App)
  .use(createPinia())
  .use(vuetify)
  .use(router)
  .use(LoadScript)
  .mount("#app")