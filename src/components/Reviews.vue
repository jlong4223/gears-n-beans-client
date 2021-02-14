<template>
  <Navbar />
  <div>
    <div class="card_container">
      <h3>
        {{ about }}
      </h3>
    </div>
    <div id="mainformdiv">
      <div id="formdiv">
        <!-- @submit.prevent is preventDefault() -->
        <!-- TODO figure out how to reload the reviews after submit without loading entire page  -->

        <form @submit.prevent="addReview" class="mb-3">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              v-model="review.name"
              id="name"
            />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              class="form-control"
              v-model="review.message"
              id="message"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Product(s)</label>
            <input
              type="text"
              class="form-control"
              v-model="review.product"
              id="product"
            />
          </div>
          <div class="form-group">
            <label>Rating</label>
            <input
              type="number"
              max="5"
              min="1"
              class="form-control"
              placeholder="5"
              v-model="review.stars"
              id="stars"
            />
          </div>
          <button type="submit" class="btn btn-primary">Add Review</button>
        </form>
      </div>
    </div>
    <h2>Reviews:</h2>
    <div class="reviews">
      <div
        id="oneReview"
        v-for="review in reversedReviews"
        v-bind:key="review._id"
      >
        <p>Name: {{ review.name }}</p>
        <p>Message: {{ review.message }}</p>
        <p>Product: {{ review.product }}</p>
        <p>Rating: {{ review.stars }}</p>
        <button @click="deleteReview(review._id)">Delete</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
const BASE_URL = "https://gearsbeans-api.herokuapp.com/";
// const BASE_URL = "http://localhost:3001/";
export default {
  name: "Reviews",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    error: "",
    reviews: [],
    review: {
      name: "",
      message: "",
      product: "",
      stars: 0,
    },
    about: "Check out our reviews",
  }),
  //   using computed to define extra rules to the new copy of reviews data
  computed: {
    reversedReviews() {
      return this.reviews.slice().reverse();
    },
  },
  created() {
    fetch(BASE_URL + "reviews")
      .then((res) => res.json())
      .then((results) => {
        this.reviews = results;
      });
  },
  methods: {
    async addReview() {
      console.log(this.review);
      await fetch(BASE_URL + "reviews", {
        method: "POST",
        body: JSON.stringify(this.review),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.details) {
            const error = result.details
              .map((detail) => detail.message)
              .join(".");
            this.error = error;
          } else {
            this.error = "";
            this.reviews.push(result);
          }
        });
    },
    async deleteReview(id) {
      await fetch(BASE_URL + `reviews/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
    },
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

h2 {
  text-align: center;
}

.reviews {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
#oneReview {
  border: 1px solid black;
  margin: 5px;
  width: 250px;
  height: 220px;
}
#formdiv {
  width: 350px;
}
#mainformdiv {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
