<template>
  <Navbar />
  <div>
    <div class="card_container">
      <h3>
        {{ about }}
      </h3>
    </div>
    <div v-for="review in reviews" v-bind:key="review.id">
      <h4>{{ review.name }}</h4>
      <h4>{{ review.message }}</h4>
      <h4>{{ review.product }}</h4>
      <h4>{{ review.stars }}</h4>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
const BASE_URL = "https://gearsbeans-api.herokuapp.com/";
export default {
  name: "Reviews",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    error: "",
    reviews: [],
    about: "Check out our reviews",
  }),
  mounted() {
    fetch(BASE_URL + "reviews")
      .then((res) => res.json())
      .then((results) => {
        this.reviews = results;
      });
  },
};
</script>

<style scoped>
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
h3 {
  text-align: center;
  width: 700px;
  background-color: transparent;
  color: white;
  font-size: 45px;
}
</style>
