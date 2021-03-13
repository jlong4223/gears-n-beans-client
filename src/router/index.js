import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Services from "@/components/Services.vue";
import Products from "@/components/Products.vue";
import NotFound from "@/components/NotFound.vue";
import CartCheckout from "@/components/CartCheckout.vue";
import ThankYou from "@/components/ThankYou.vue";
import Reviews from "@/components/Reviews.vue";
import ContactForm from "@/components/ContactForm.vue";

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
    path: "/cart-checkout",
    name: "CartCheckout",
    component: CartCheckout,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  },
  {
    path: "/contact",
    name: "ContactForm",
    component: ContactForm,
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
