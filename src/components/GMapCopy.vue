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
    const center = { lat: 40.689247, lng: -74.044502 };
    const API_KEY = "AIzaSyAX2UsD6kMq5dalMOx5_o0cJe_GHRLd_Nw";
    return { center, API_KEY };
  },
});
</script>
