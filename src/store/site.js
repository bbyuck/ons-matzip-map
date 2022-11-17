import { defineStore } from 'pinia'

export const useSiteStore = defineStore("site", {
  state: () => ({
    siteInfo: [
      {
        siteCd: "SI-00",
        name: "올리브네트웍스 본사",
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
  }),
  getters: {
    getNames() {
      let nameList = []
      for (let i in this.siteInfo) {
        nameList.push(this.siteInfo[i].name);
      }
      return nameList;
    }
  },
  actions: {

  }
})