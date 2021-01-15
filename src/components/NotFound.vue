<template>
  <Navbar />
  <div id="notfound">
    <h1>Oops...404 Not Found</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "NotFound",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
#notfound {
  display: flex;
  justify-content: center;
}
</style>
