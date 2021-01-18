<template>
  <Navbar />
  <div id="notfound">
    <h1>Oops...404 Not Found</h1>
  </div>
  <Footer />
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  name: "NotFound",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
#notfound {
  display: flex;
  justify-content: center;
  height: 400px;
}
</style>
