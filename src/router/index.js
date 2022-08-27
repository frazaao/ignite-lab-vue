import { createRouter, createWebHistory } from "vue-router";
import LessonsPage from "@/pages/LessonsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LessonsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
