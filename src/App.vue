<script setup lang="ts">
import {  RouterView } from 'vue-router'


/* =================================================================================================
 * App.vue
 * =================================================================================================
 * This is the entry point to our Single Page Application (SPA) that gets rendered by VueJs.
 * Components declared here (i.e. HTML within the <template> tag) will always be visible in
 * the 'app' (ex. the menu bar and footer). The <RouterView> is a special element that renders
 * a particular 'view' based on the current URL path (ex. http://website/displayed-view). The
 * mappings between URLs/views is located in `/src/router/index.ts`.
 */

</script>

<template>
  

  <RouterView class="router-view"/> <!-- renders 'views' based on current path url/path -->

</template>

<style scoped>


</style>
