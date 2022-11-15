import {createRouter, createWebHistory} from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    alias: "/home",
    component: () => import("@/views/MainView.vue"),
    meta: {
      title: "",
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;