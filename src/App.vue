<template>
  <div id="app">
    <Products />
  </div>
</template>

<script>
import Products from "./components/Products";

export default {
  name: "App",
  components: {
    Products,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
