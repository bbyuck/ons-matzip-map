<template>
  <v-app-bar elevation="1" extended="true" extension-height="13" absolute>
    <div class="border-logo">
      <!-- CJ ONS 로고 -->
      <router-link to="home">
        <img class="logo" :src="logo" alt="">
      </router-link>
    </div>

    <div align="right">
      <v-select
        label="Select"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      ></v-select>
    </div>
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