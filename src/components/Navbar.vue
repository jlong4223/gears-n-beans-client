<template>
  <div id="mainDiv">
    <div id="logo">
      <router-link to="/">
        <img src="https://i.imgur.com/ryVp0LU.png" alt="logo" />
      </router-link>
    </div>
    <div id="nav">
      <router-link class="link" to="/">Home &nbsp; |</router-link>
      <router-link class="link" to="/services"
        >Bike Services &nbsp; |</router-link
      >
      <router-link class="link" to="/products"
        >Coffee Products &nbsp; |</router-link
      >
      <router-link class="link" to="/reviews">Reviews</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#logo {
  display: flex;
  justify-content: center;
  /* border: 1px solid green; */
}
img {
  width: 250px;
}
#nav {
  display: flex;
  justify-content: center;
}
.link {
  margin: 10px;
  text-decoration: none;
  font-size: 18px;
  color: black;
}

#mainDiv {
  margin-top: 10px;
}

@media screen and (max-width: 750px) {
  img {
    width: 150px;
  }
  .link {
    font-size: 12px;
  }
}
</style>
