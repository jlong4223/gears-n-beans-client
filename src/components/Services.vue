<template>
  <Navbar />
  <div>
    <div class="card_container">
      <h3>
        {{ about }}
      </h3>
    </div>
    <div class="card_holder">
      <div v-for="service in services" v-bind:key="service.id">
        <div class="card_base">
          <h2>{{ service.name }}</h2>
          <h4>{{ service.description }}</h4>
          <div>
            <img :src="`${service.image}`" alt="pic" />
          </div>
          <br />
          <h4>${{ service.price }}</h4>
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
  name: "Services",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    error: "",
    services: [],
    about: "Led by master mechanics, we can repair and build almost any bike.",
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
h1,
h4,
h2 {
  background-color: transparent;
}
h3 {
  text-align: center;
  width: 700px;
  background-color: transparent;
  color: white;
  font-size: 45px;
}

img {
  width: 250px;
  border-radius: 5px;
}
</style>
