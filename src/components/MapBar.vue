<template>
  <div>
    <v-navigation-drawer  location="bottom"
                          v-model="commonStore.drawer"
                          temporary>
      <v-container fluid class="grow d-flex flex-column flex-nowrap">
        <v-row class="shirink">
          <v-col cols="12">
            <v-card>
              <div id="map" style="width:100%; height:85vh"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { useCommonStore } from "@/store/common"
import { loadScript } from "vue-plugin-load-script"

export default {
  data: () => ({
    commonStore: undefined,
    mapOptions: undefined,
    map: undefined
  }),
  created() {
    this.commonStore = useCommonStore();

    // external js
    loadScript("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=g4ov44vyd8")
      .then(() => {
        console.log("네이버 지도 API 로드 완료");
        this.mapOptions = {
            center: new naver.maps.LatLng(37.551020, 126.972900),
            zoom: 15
        };
        this.map = new naver.maps.Map('map', this.mapOptions);
      })
      .catch(() => {
        // Failed to fetch script
      });
  }
}
</script>

<style>

</style>