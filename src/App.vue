<template>
  <v-app id="inspire">
    <router-view>
      <app-bar :menuList="menuList"
               @toggle-btn-click="drawer=!drawer"></app-bar>
      <side-bar :drawer="drawer"></side-bar>
      <main-view></main-view>
    </router-view>
  </v-app>
</template>

<script>
import MainView from "@/views/MainView.vue"
import AppBar from "@/components/AppBar.vue"
import SideBar from "@/components/SideBar.vue"
import { loadScript } from "vue-plugin-load-script"

export default {
  name: "App",

  components: {
    MainView, AppBar, SideBar
  },

  data: () => ({
    drawer: false,
    menuList: [
      "Dashboard",
      "Messages",
      "Profile",
      "Updates",
    ],
  }),
  methods: {
    test() {
    }
  },
  created() {
    // external js
    loadScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=g4ov44vyd8")
      .then(() => {
      })
      .catch(() => {
        // Failed to fetch script
      });
  }
}
</script>