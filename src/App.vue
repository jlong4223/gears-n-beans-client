<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/products">Coffee Products</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
// imported components go below this comment

export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: whitesmoke;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
