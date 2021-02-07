<template>
  <Navbar />
  <div>reviews page</div>
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

<style scoped></style>
