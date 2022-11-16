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
}
</script>