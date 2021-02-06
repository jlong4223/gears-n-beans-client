import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// import Vue from "vue";
// import commercejs from "./commerce/configCommercejs";

// Vue.config.productionTip = false;

// Vue.mixin({
//   beforeCreate() {
//     this.$commerce = commercejs;
//   },
// });

createApp(App)
  .use(router)
  .mount("#app");
