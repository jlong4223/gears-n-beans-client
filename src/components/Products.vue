<template>
  <Navbar />
  <div>
    <div class="card_container">
      <h3>about area</h3>
    </div>
    <div class="card_holder">
      <div v-for="product in products" v-bind:key="product.id">
        <div class="card_base">
          <h1>{{ product.name }}</h1>
          <h4>{{ product.description }}</h4>
          <h4>${{ product.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
const BASE_URL = "http://localhost:3001/";
export default {
  name: "Products",
  components: {
    Navbar,
  },
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

.card_container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/05/empty-bikes.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
h3,
h2 {
  text-align: center;
  width: 700px;
  background-color: transparent;
  color: white;
  font-size: 45px;
}
</style>
