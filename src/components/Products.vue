<template>
  <div>
    <div v-for="product in products" v-bind:key="product.id">
      <h1>{{ product.name }}</h1>
      <h2>{{ product.description }}</h2>
      <h3>${{ product.price }}</h3>
    </div>
  </div>
</template>

<script>
const BASE_URL = "http://localhost:3001/";
export default {
  name: "Products",
  data: () => ({
    error: "",
    products: [],
  }),
  mounted() {
    fetch(BASE_URL + "products")
      .then((res) => res.json())
      .then((results) => {
        this.products = results;
      });
  },
  methods: {},
};
</script>

<style scoped></style>
