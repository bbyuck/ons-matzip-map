<template>
  <v-app id="inspire">
    <router-view>
      <app-bar :menuList="menuList"></app-bar>
      <v-navigation-drawer>
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
    appWidth: undefined,
    appHeight: undefined,
    // menu -> db조회로 변경
    menuList: [
      "Dashboard",
      "Messages",
      "Profile",
      "Updates",
    ],
  }),
  methods: {
    appResizeHandler() {
      this.appWidth = window.innerWidth;
      this.appHeight = window.innerHeight;
    }
  },
  /*
  mounted: () => {
    // console.log("width : " + window.innerWidth);
    // console.log("height : " + window.innerHeight);
    window.addEventListener("resize", this.appResizeHandler);
  }
  */
}
</script>