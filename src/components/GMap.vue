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
    // the google map object
    const map = ref(null);

    // the map element in the templste
    const mapDivRef = ref(null);

    // load in the google script
    // TODO look into vue hooks mounted on onMounted?
    onMounted(() => {
      // key is is the .env file
      //   const key = process.env.VUE_APP_GOOGLEMAPS_KEY;

      // create the script element to load
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAX2UsD6kMq5dalMOx5_o0cJe_GHRLd_Nw&callback=initMap"
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    /**
     * this function is called as soon as the map is initialized
     */
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
  border: 3px solid green;
}
</style>
