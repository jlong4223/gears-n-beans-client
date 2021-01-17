<template>
  <Navbar />
  <div>
    <div class="card_container">
      <h3>
        At Gears N' Beans, our goal is to provide phenomenal coffees that are
        traceable, transparent and consistent.
      </h3>
    </div>
    <div class="card_holder">
      <div class="cardhere" v-for="product in products" v-bind:key="product.id">
        <div class="card_base">
          <h1>{{ product.name }}</h1>
          <h4>{{ product.description }}</h4>
          <div>
            <img :src="`${product.image}`" alt="pic" />
          </div>
          <h4>${{ product.price }}</h4>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
const BASE_URL = "http://localhost:3001/";
export default {
  name: "Products",
  components: {
    Navbar,
    Footer,
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  /* border: 1px solid green; */
}

.card_container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://thumbs.dreamstime.com/b/various-home-made-produce-sale-empty-coffee-shop-cafe-bakery-johannesburg-south-africa-december-180640108.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

h1,
h4 {
  background-color: transparent;
}
h3,
h2 {
  text-align: center;
  width: 700px;
  background-color: transparent;
  color: white;
  font-size: 45px;
}
img {
  width: 250px;
}
</style>
