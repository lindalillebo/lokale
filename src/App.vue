<template>
  <div id="app">
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    "my-footer": Footer,
  },
  name: "App",
  created() {

  },
};
</script>
