<template>
  <GMapMap
    :center="center"
    :zoom="11"
    map-type-id="terrain"
    style="width: 100%; height: 440px; border: 3px solid rgb(230, 230, 230);"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 50.459436100234115, lng: 30.51343661907678 },
    };
  },
};
</script>
