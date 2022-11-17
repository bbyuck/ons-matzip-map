import { defineStore } from 'pinia'

export const useSiteStore = defineStore("site", {
  state: () => ({
    siteInfo: [
      {
        siteCd: "SI-00",
        name: "트윈시티 남산",
        posX: 37.551020,
        posY: 126.972900
      },
      {
        siteCd: "SI-01",
        name: "분당 비전월드",
        posX: 37.551020,
        posY: 126.972900
      },
      {
        siteCd: "SI-02",
        name: "CJ 제일제당 센터",
        posX: 37.551020,
        posY: 126.972900
      },
      {
        siteCd: "SI-03",
        name: "KDB생명타워",
        posX: 37.551020,
        posY: 126.972900
      },
      {
        siteCd: "SI-04",
        name: "CJ The Center",
        posX: 37.551020,
        posY: 126.972900
      },
      {
        siteCd: "SI-05",
        name: "용산 CGV",
        posX: 37.551020,
        posY: 126.972900
      }
    ],
    selectedSite: {
      siteCd: "SI-00",
      name: "트윈시티 남산",
      posX: 37.551020,
      posY: 126.972900
    }
  }),
  getters: {
    getPos() {
      let pos = {};
      for (let i in this.siteInfo) {
        if (this.selectedSiteCd == this.siteInfo[i].siteCd) {
          pos.posX = this.siteInfo[i].posX;
          pos.posY = this.siteInfo[i].posY;
        }
      }
      return pos;
    }
  },
  actions: {
    selectSite(selectedSite) {
      this.selectedSite = selectedSite;
    }
  }
})