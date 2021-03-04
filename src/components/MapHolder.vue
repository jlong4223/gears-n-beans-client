<template>
  <div>
    <h3>Our Location:</h3>
  </div>
  <div id="maphere">
    <div><GMapCopy /></div>
  </div>
</template>

<script>
// import GMap from "./GMap.vue";
import GMapCopy from "./GMapCopy";

export default {
  name: "MapHolder",
  components: {
    GMapCopy,
    // GMap,
  },
};
</script>

<style scoped>
#maphere {
  width: 50%;
}
</style>
