<template>
  <Navbar />
  <div v-for="service in services" v-bind:key="service.id">
    <h1>{{ service.name }}</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar";
const BASE_URL = "http://localhost:3001/";
export default {
  name: "Services",
  components: {
    Navbar,
  },
  data: () => ({
    error: "",
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

<style scoped>
h1 {
  color: green;
}
</style>
