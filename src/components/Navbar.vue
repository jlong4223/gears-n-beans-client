<template>
  <div id="mainDiv">
    <div id="logo">
      <img src="https://i.imgur.com/ryVp0LU.png" alt="logo" />
    </div>
    <div id="nav">
      <router-link class="link" to="/">Home &nbsp; |</router-link>
      <router-link class="link" to="/services">Services &nbsp; |</router-link>
      <router-link class="link" to="/products">Coffee Products</router-link>
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
}
#mainDiv {
  margin-top: 10px;
}
</style>
