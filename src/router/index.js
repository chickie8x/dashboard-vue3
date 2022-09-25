import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView/index.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView/index.vue"),
    },
    {
      path: "/dashboard/water",
      name: "water",
      component: () => import("../views/WaterView/index.vue"),
    },
    {
      path: "/dashboard/electric",
      name: "electric",
      component: () => import("../views/ElectricView/index.vue"),
    },
  ],
});

export default router;
