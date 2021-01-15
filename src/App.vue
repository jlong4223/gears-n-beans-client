<template>
  <div id="app">
    <Products />
  </div>
</template>

<script>
// imported components
import Products from "./components/Products";

// defined variables for fetch
const BASE_URL = "http://localhost:3001/";

export default {
  name: "App",
  components: {
    Products,
  },
  data: () => ({
    error: "",
    products: [],
    services: [],
  }),

  mounted() {
    fetch(BASE_URL + "products")
      .then((res) => res.json())
      .then((results) => {
        this.products = results;
      }),
      fetch(BASE_URL + "services")
        .then((res) => res.json())
        .then((results) => {
          this.services = results;
        });
  },
  // methods are where CRUD routes go
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
