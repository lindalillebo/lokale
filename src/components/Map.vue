<template>
  <div>
    <GmapMap
      id="map"
      ref="map"
      :center="defaultMapOptions.center"
      :zoom="defaultMapOptions.zoom"
      map-type-id="terrain"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [],
      defaultMapOptions: {
        zoom: 11,
        minZoom: 3,
        currentPlace: null,
        center: {
          lat: 62.472229,
          lng: 6.149482,
        },
      },
    };
  },
  methods: {
    mounted() {
        this.findPlace();
      },
      setPlace(place) {
        this.currentPlace = place;
      },
      findPlace: function() {
        navigator.geolocation.getCurrentPosition(posistion => {
          this.center = {
            lat: posistion.coords.latitude,
            lng: posistion.coords.longitude
          };
        });
    },
  },
};
</script>

<style lang="scss" scoped>
button::after {
  border: none;
}
button:hover {
  border: none;
}
</style>
