import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "about",
    component: () => import("../views/ProjectsViews/AboutView.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/BlogsViews/BlogsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
