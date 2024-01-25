import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "font-bold",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/MovieApp/MovieListView.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import("../views/MovieApp/MovieDetailsView.vue"),
      props: (route) => ({ id: Number(route.params.id) }),
    },
    {
      path: "/games",
      name: "games",
      component: () => import("../views/GamesView.vue"),
    },
    {
      path: "/aquarium",
      name: "aquarium",
      component: () => import("../views/AquariumView.vue"),
    },
  ],
});

export default router;
