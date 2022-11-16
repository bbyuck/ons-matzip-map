<template>
  <div>
    <v-navigation-drawer  location="right"
                          v-model="commonStore.drawer"
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
  </div>
</template>

<script>
import { useCommonStore } from "@/store/common"

export default {
  data: () => ({
    commonStore: undefined
  }),
  created() {
    this.commonStore = useCommonStore();
  }
}
</script>

<style>

</style>