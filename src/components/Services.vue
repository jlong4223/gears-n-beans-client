<template>
  <Navbar />
  <div class="card_container">
    <div class="card_holder">
      <div class="card_base">
        <div v-for="service in services" v-bind:key="service.id">
          <h1>{{ service.name }}</h1>
        </div>
      </div>
    </div>
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
.card_base {
  box-sizing: border-box;
  width: 300px;
  margin: 0 20px 20px 0;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.card_holder {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
