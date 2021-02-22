<template>
  <router-view></router-view>
</template>

<style lang="scss">

// Main demo style scss

// Check documentation for RTL css
// Update HTML with RTL attribute at public/index.html
/*@import "assets/css/style.vue.rtl";*/
</style>

<script>
import { OVERRIDE_LAYOUT_CONFIG } from "./core/services/store/config.module";

export default {
  name: "MetronicVue",
  mounted() {
    this.$store.dispatch(OVERRIDE_LAYOUT_CONFIG);
  }
};
</script>
