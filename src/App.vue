<template>
  <v-app id="inspire">
    <router-view>
      <app-bar :menuList="menuList"></app-bar>
      <side-bar></side-bar>
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
    menuList: [
      "Dashboard",
      "Messages",
      "Profile",
      "Updates",
    ],
  }),
  methods: {},
  created() {
    // external js
    loadScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=g4ov44vyd8")
      .then(() => {
        console.log("네이버 지도 API 로드 완료");
      })
      .catch(() => {
        // Failed to fetch script
      });
  },
}
</script>