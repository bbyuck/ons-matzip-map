<template>
  <v-app id="inspire">
    <router-view>
      <app-bar :menuList="menuList"
               @toggle-btn-click="drawer=!drawer"></app-bar>
      <v-navigation-drawer  location="right" 
                            v-model="drawer"
                            temporary>
        <v-list rounded="lg">
          <v-list-item
            v-for="n in 5"
            :key="n"
            link
          >
            <v-list-item-title>
              List Item {{ n }}
            </v-list-item-title>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item
            link
            color="grey-lighten-4"
          >
            <v-list-item-title>
              Refresh
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <main-view></main-view>
    </router-view>
  </v-app>
</template>

<script>
import MainView from "@/views/MainView.vue"
import AppBar from "@/components/AppBar.vue"


export default {
  name: "App",

  components: {
    MainView, AppBar
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
  }
}
</script>