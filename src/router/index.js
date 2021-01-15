import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Services from "@/components/Services.vue";
import Products from "@/components/Products.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
