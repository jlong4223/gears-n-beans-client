<template>
  <div>
    <h1>Map</h1>
  </div>
  <div id="maphere">
    <g-map :disableUI="false" :zoom="12" :mapType="roadmap">><GMap /> </g-map>
  </div>
</template>

<script>
import GMap from "./GMap";

export default {
  name: "MapHolder",
  components: {
    GMap,
  },
};
</script>

<style scoped>
#maphere {
  width: 50%;
}
</style>
