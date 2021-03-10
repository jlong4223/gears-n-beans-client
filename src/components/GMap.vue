<template>
  <div class="map" ref="mapDivRef"></div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "GMap",
  props: {
    center: { lat: Number, lng: Number },
    zoom: Number,
    mapType: String,
    disableUI: Boolean,
  },
  setup(props) {
    const map = ref(null);
    const mapDivRef = ref(null);

    // load in the google script
    onMounted(() => {
      const key = process.env.VUE_APP_GOOGLEMAPS_KEY;
      // create the script element to load the api
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: props.mapType || "hybrid",
        zoom: props.zoom || 8,
        disableDefaultUI: props.disableUI || false,
        center: props.center || { lat: 30.2672, lng: 97.7431 },
      });
    };

    return {
      mapDivRef,
    };
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
  background-color: azure;
  /* border: 3px solid rgb(221, 252, 221); */
}
</style>
