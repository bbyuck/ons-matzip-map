<template>
  <div>
    <v-main>
      <v-container>
        <div v-for="(foodRow, i) in foodStore.group" :key="foodRow.cd + i">
          <v-row v-if="i % 2 == 0">
            <v-col v-for="(foodCell, j) in foodStore.group" :key="foodCell.cd + j" cols="6">
              <div v-if="i == j || j == i + 1">
                <v-card height="100">
                  <v-btn width="100%" height="100"
                    @click="btnAction(foodCell)">
                    {{ foodCell.name }}
                  </v-btn>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
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
      siteStore: undefined
    }),
    methods: {
      btnAction(foodGroup) {
        // 사이트별 분기
        // 음식 group별 분기
        this.foodStore.selectFoodGroup(foodGroup);
        this.commonStore.toggleDialog();
        this.emitter.emit("openMap")
      }
    },
    created() {
      this.commonStore = useCommonStore();
      this.foodStore = useFoodStore();
      this.siteStore = useSiteStore();
    },
  }
</script>

<style>
.card-btn {
  width: 100%;
}
</style>