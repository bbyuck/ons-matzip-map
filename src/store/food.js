import { defineStore } from 'pinia'

export const useFoodStore = defineStore("food", {
  state: () => ({
    group: [
      {
        cd: "kor",
        name: "한식"
      },
      {
        cd: "chi",
        name: "중식"
      },
      {
        cd: "wes",
        name: "양식",
      },
      {
        cd: "jap",
        name: "일식"
      }
    ],
    selectedFoodGroup: {}
  }),
  actions: {
    selectFoodGroup(selectedFoodGroup) {
      this.selectedFoodGroup = selectedFoodGroup;
    }
  }
})