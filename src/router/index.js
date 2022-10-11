import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView/index.vue"),
    },
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/DashboardView/index.vue"),
    },
  ],
});

export default router;
