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
        <form @submit.prevent="addReview" class="mb-3">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              v-model="review.name"
              id="name"
              required
            />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              class="form-control"
              v-model="review.message"
              id="message"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label>Product(s)</label>
            <input
              type="text"
              class="form-control"
              v-model="review.product"
              id="product"
              required
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
              required
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
        <p><strong>Name:</strong> {{ review.name }}</p>
        <p><strong>Message:</strong> {{ review.message }}</p>
        <p><strong>Product:</strong> {{ review.product }}</p>
        <p><strong>Rating:</strong> {{ review.stars }}</p>
        <button
          class="btn btn-danger"
          id="deletebtn"
          @click="deleteReview(review._id)"
        >
          X
        </button>
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
  methods: {
    getReviews: async function() {
      const response = await fetch(BASE_URL + "reviews");
      const data = await response.json();
      this.reviews = data;
    },
    addReview: async function() {
      await fetch(BASE_URL + "reviews", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.review.name,
          message: this.review.message,
          product: this.review.product,
          stars: this.review.stars,
        }),
      });
      (this.review.name = ""),
        (this.review.message = ""),
        (this.review.product = ""),
        (this.review.stars = null);
      // Vue.forceUpdate();
      this.getReviews();
    },
    async deleteReview(id) {
      await fetch(BASE_URL + `reviews/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }),
        this.getReviews();
    },
  },
  created: function() {
    this.getReviews();
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
  /* height: 220px; */
  box-sizing: border-box;
  width: 300px;
  margin: 0 20px 20px 0;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* text-align: center; */
}
#deletebtn {
  width: 36px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

textarea {
  min-height: 30px;
  max-height: 270px;
}

@media screen and (max-width: 750px) {
  h3 {
    width: 280px;
    font-size: 20px;
  }
  .card_container {
    height: 300px;
  }
}
</style>
