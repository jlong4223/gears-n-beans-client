<template>
  <Navbar />
  <About />
  <Footer />
</template>

<script>
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    Navbar,
    About,
    Footer,
  },
};
</script>

<style scoped></style>
