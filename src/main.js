import { createApp } from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "@/router/index"
import { loadFonts } from "./plugins/webfontloader"
import LoadScript from "vue-plugin-load-script"

import "@/assets/css/common.css"
import { createPinia } from 'pinia'
import { loadScript } from "vue-plugin-load-script"
import mitt from 'mitt'


loadFonts()

// external js
loadScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=g4ov44vyd8")
.then(() => {
})
.catch(() => {
  // Failed to fetch script
});

const emitter = mitt();


const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);
app.use(LoadScript);
app.config.globalProperties.emitter = emitter;
app.mount("#app");