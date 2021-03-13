<template>
  <div id="contactPage">
    <Navbar />
    <main id="form">
      <h1>This is the contact form page</h1>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  name: "ContactForm",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
#contactPage {
  display: flex;
  flex-direction: column;
}
#form {
  height: 500px;
}
</style>
