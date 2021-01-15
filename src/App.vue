<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/products">Products</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
// imported components go below this comment

// TODO - move the below data to the services component - defined variables for fetch
const BASE_URL = "http://localhost:3001/";

export default {
  name: "App",
  components: {},
  data: () => ({
    error: "",
    products: [],
    services: [],
  }),

  mounted() {
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
