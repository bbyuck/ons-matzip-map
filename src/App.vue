<template>
  <v-app id="inspire">
    <router-view>
      <app-bar></app-bar>
      <map-dialog></map-dialog>
      <main-view></main-view>
    </router-view>
  </v-app>
</template>

<script>
import MainView from "@/views/MainView.vue"
import AppBar from "@/components/AppBar.vue"
import MapDialog from "@/components/MapDialog.vue"

export default {
  name: "App",
  components: {
    MainView, AppBar, MapDialog
  },

  data: () => ({

  }),
  methods: {},
}
</script>