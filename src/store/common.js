import { defineStore } from 'pinia'

export const useCommonStore = defineStore("common", {
  state: () => ({
    dialog: false,
  }),
  actions: {
    toggleDialog() {
      this.dialog = !this.dialog;
    }
  }
})