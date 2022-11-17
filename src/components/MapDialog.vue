<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="commonStore.dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="commonStore.toggleDialog"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ siteStore.selectedSite.name }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                variant="text"
                @click="commonStore.dialog = false"
              >
                버튼
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-container fluid class="grow d-flex flex-column flex-nowrap">
            <v-row class="shirink">
              <v-col cols="12">
                <v-card>
                  <div id="map" style="width:100%; height:60vh"></div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { useCommonStore } from "@/store/common"
import { useFoodStore } from "@/store/food"
import { useSiteStore } from "@/store/site"

export default {
  data: () => ({
    commonStore: undefined,
    foodStore: undefined,
    siteStore: undefined,
    mapOptions: undefined,
    map: undefined
  }),
  created() {
    this.commonStore = useCommonStore();
    this.foodStore = useFoodStore();
    this.siteStore = useSiteStore();
  },
}
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>