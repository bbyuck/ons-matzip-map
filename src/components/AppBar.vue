<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-row class="align-center">
        <v-col class="left" cols="2">
          <!-- CJ ONS 로고 -->
          <v-sheet rounded="lg">
            <router-link class="logo" to="home">
              <img class="logo" :src="logo" alt="">
            </router-link>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet rounded="lg">
            <v-btn
              v-for="menu in menuList"
              :key="menu"
              variant="text"
            >
              {{ menu }}
            </v-btn>

            <v-spacer></v-spacer>

          </v-sheet>
        </v-col>
        <v-col> 
          <v-responsive max-width="260">
            <v-text-field
              class="align-right"
              density="compact"
              hide-details
              variant="solo"
            ></v-text-field>
          </v-responsive>
        </v-col>
      </v-row>
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
}

img.logo {
  width: 100%;
}
</style>