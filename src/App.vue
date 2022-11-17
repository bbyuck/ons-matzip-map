<template>
  <v-app id="inspire">
    <router-view>
      <app-bar :menuList="menuList"></app-bar>
      <map-bar></map-bar>
      <main-view></main-view>
    </router-view>
  </v-app>
</template>

<script>
import MainView from "@/views/MainView.vue"
import AppBar from "@/components/AppBar.vue"
// import SideBar from "@/components/SideBar.vue"
import MapBar from "@/components/MapBar.vue"

export default {
  name: "App",
  components: {
    MainView, AppBar, MapBar
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
}
</script>