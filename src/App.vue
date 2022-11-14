<template>
  <v-app id="inspire">
    <router-view>
      <app-bar :menuList="menuList"></app-bar>
      <main-view></main-view>
    </router-view>
  </v-app>
</template>

<script>
import MainView from '@/views/MainView.vue'
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'App',

  components: {
    MainView, AppBar
  },

  data: () => ({
    // menu -> db조회로 변경
    menuList: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>