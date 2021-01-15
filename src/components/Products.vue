<template>
  <div>
    <h1>Products</h1>
  </div>
</template>

<script>
const BASE_URL = "http://localhost:3001/";
export default {
  name: "Products",
  data: () => ({
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
