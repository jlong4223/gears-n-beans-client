<template>
  <div>
    <h1>Map</h1>
  </div>
  <div id="maphere">
    <g-map :disableUI="false" :zoom="12"><GMap /></g-map>
  </div>
</template>

<script>
// import GMap from "./GMap.vue";
// import GMapCopy from "./GMapCopy";

export default {
  name: "MapHolder",
  components: {
    // GMapCopy,
    // GMap,
  },
};
</script>

<style scoped>
#maphere {
  width: 50%;
}
</style>
