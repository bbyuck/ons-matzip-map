import { createApp } from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "@/router/index"
import { loadFonts } from "./plugins/webfontloader"
import LoadScript from "vue-plugin-load-script"

import "@/assets/css/common.css"
import { createPinia } from 'pinia'
import { loadScript } from "vue-plugin-load-script"


loadFonts()

// external js
loadScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=g4ov44vyd8")
.then(() => {
  console.log(foodStore.selectedFoodGroup.name + " 지도 로드 완료!");
})
.catch(() => {
  // Failed to fetch script
});


createApp(App)
.use(createPinia())
.use(vuetify)
.use(router)
.use(LoadScript)
.mount("#app")