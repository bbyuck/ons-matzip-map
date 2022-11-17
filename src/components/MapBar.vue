<template>
  <div>
    <v-navigation-drawer  location="bottom"
                          v-model="commonStore.drawer"
                          temporary
                          style="height:85vh">
      <v-container fluid class="grow d-flex flex-column flex-nowrap">
        <v-row class="shirink">
          <v-col cols="12">
            <v-card>
              <div id="map" style="width:100%; height:60vh"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { useCommonStore } from "@/store/common"
import { useFoodStore } from "@/store/food"
import { loadScript } from "vue-plugin-load-script"

export default {
  data: () => ({
    commonStore: undefined,
    foodStore: undefined,
    mapOptions: undefined,
    map: undefined
  }),
  created() {
    this.commonStore = useCommonStore();
    this.foodStore = useFoodStore();

    // external js
    loadScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=g4ov44vyd8")
      .then(() => {
        this.mapOptions = {
            center: new naver.maps.LatLng(37.551020, 126.972900),
            zoom: 15
        };
        this.map = new naver.maps.Map('map', this.mapOptions);

        console.log(foodStore.selectedFoodGroup.name + " 지도 로드 완료!");
      })
      .catch(() => {
        // Failed to fetch script
      });
  }
}
</script>

<style>

</style>