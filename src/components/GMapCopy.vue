<template>
  <GoogleMap
    :api-key="API_KEY"
    style="width: 100%; height: 300px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 30.266926, lng: -97.750519 };
    const API_KEY = process.env.VUE_APP_GOOGLEMAPS_KEY;
    return { center, API_KEY };
  },
});
</script>
