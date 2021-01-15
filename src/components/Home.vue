<template>
  <Navbar />
  <About />
</template>

<script>
import Navbar from "./Navbar";
import About from "./About";

export default {
  name: "Home",
  components: {
    Navbar,
    About,
  },
};
</script>

<style scoped></style>
