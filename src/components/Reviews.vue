<template>
  <Navbar />
  <div>
    <div class="card_container">
      <h3>
        {{ about }}
      </h3>
    </div>
    <div>
      <form class="mb-3">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label>Product(s)</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label></label>
          <input
            type="number"
            max="5"
            min="1"
            class="form-control"
            placeholder="5"
          />
        </div>
        <button type="submit" class="btn btn-primary">Add Review</button>
      </form>
    </div>
    <div class="reviews">
      <h2>Reviews:</h2>
      <div
        id="oneReview"
        v-for="review in reversedReviews"
        v-bind:key="review.id"
      >
        <p>Name: {{ review.name }}</p>
        <p>Message: {{ review.message }}</p>
        <p>Product: {{ review.product }}</p>
        <p>Rating: {{ review.stars }}</p>
      </div>
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
  //   using computed to define extra rules to the new copy of reviews data
  computed: {
    reversedReviews() {
      return this.reviews.slice().reverse();
    },
  },
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

.reviews {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
#oneReview {
  border: 1px solid black;
  margin: 5px;
  width: 250px;
  height: 220px;
}
</style>
