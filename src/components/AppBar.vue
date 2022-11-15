<template>
  <v-app-bar elevation="1" extended extension-height="13" absolute>
    <div class="border-logo">
      <!-- CJ ONS 로고 -->
      <router-link to="home">
        <img class="logo" :src="logo" alt="">
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon @click="$emit('toggleBtnClick', true)">
      <v-icon color="red" size="30">mdi-heart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: ['menuList'],
  data: () => ({
    logo: require("@/assets/img/CJONS_CI.png")
  }),
  methods: {
    
  }
}
</script>

<style scoped>

.border-logo {
  width: 15em;
  margin: 0.8em;
  margin-top: 1.5em;
}

.logo {
  display: inline-block;
  width: 100%;
}

</style>