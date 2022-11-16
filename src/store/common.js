import { defineStore } from 'pinia'

export const useCommonStore = defineStore("common", {
  id: "common",
  state: () => ({
    drawer: false
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
})