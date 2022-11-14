<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      
      <!-- CJ ONS 로고 -->
      <router-link class="logo" to="home">
        <img class="logo" :src="logo" alt="">
      </router-link>

      <v-btn
        v-for="menu in menuList"
        :key="menu"
        variant="text"
      >
        {{ menu }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          density="compact"
          hide-details
          variant="solo"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  props: ['menuList'],
  data: () => ({
    logo: require("@/assets/img/CJONS_CI.png")
  }),
}
</script>

<style scoped>
.logo {
  display: inline-block;
  width: 15%;
}

img.logo {
  width: 100%;
}
</style>