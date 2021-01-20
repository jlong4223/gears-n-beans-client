<template>
  <div>
    <div class="map"></div>
  </div>
</template>

<script>
// import { ref, onMounted } from "vue";
export default {
  name: "GMapCopy",
  data() {
    return {
      map: null,
      mapCenter: { lat: 0, lng: 0 },
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new window.google.maps.Map(document.getElementById("map"), {
        center: this.mapCenter,
        zoom: true,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: true,
        mapTypeControl: true,
        fullScreenControl: true,
        zoomControl: true,
      });
    },
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
  background-color: azure;
  border: 3px solid green;
}
</style>
