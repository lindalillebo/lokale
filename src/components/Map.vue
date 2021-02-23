<template>
  <div>
    <google-map
      id="map"
      ref="map"
      :center="defaultMapOptions.center"
      :zoom="defaultMapOptions.zoom"
    >
      <google-map-marker
        v-for="(marker, index) in markersList"
        :key="index"
        :title="marker.title"
        :position="marker.position"
        @click="center=marker"
      ></google-map-marker>
    </google-map>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      markersList: [],
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
    mounted () {
    //   this.findPlace();
    // },
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // findPlace: function() {
    //   navigator.geolocation.getCurrentPosition(posistion => {
    //     this.center = {
    //       lat: posistion.coords.latitude,
    //       lng: posistion.coords.longitude
    //     };
    //   });
    }
  }
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
