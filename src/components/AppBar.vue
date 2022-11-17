<template>
  <v-app-bar elevation="1" :absolute="true">
    <div class="border-logo">
      <!-- CJ ONS 로고 -->
      <router-link to="home">
        <img class="logo" :src="logo" alt="">
      </router-link>
    </div>
    <v-spacer></v-spacer>

    <!-- select box -->
    <v-select
      prepend-icon="mdi-map"
      class="select-site"
      label="Site"
      :items="siteStore.siteInfo"
      :item-title="'name'"
      :item-value="'siteCd'"
      variant="underlined"
      v-model="siteStore.selectedSite"
    ></v-select>
  </v-app-bar>
</template>

<script>
import { useCommonStore } from "@/store/common"
import { useSiteStore } from "@/store/site"

export default {
  props: ['menuList'],
  data: () => ({
    logo: require("@/assets/img/CJONS_CI.png"),
    commonStore: undefined,
    siteStore: undefined,
  }),
  methods: {

  },
  created() {
    this.commonStore = useCommonStore();
    this.siteStore = useSiteStore();
  }
}
</script>

<style scoped>

.select-site {
  width: 60%;
  margin: 0.8em;
  margin-top: 1.5em;
}

.border-logo {
  width: 15%;
  margin: 0.8em;
  margin-top: 1.2em;
}

.logo {
  display: inline-block;
  width: 100%;
}

</style>