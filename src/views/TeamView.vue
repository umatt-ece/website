<script setup>
import TeamBanner from "@/Components/TeamBanner.vue";
import TeamInfo from "@/Components/TeamInfo.vue";

</script>

<template>
  <div class="layout">
    <TeamBanner />
    <TeamInfo />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base.scss' as *;

body {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  scroll-behavior: smooth;
}

.layout {
  position: relative;
  color: var(--umatt-c-black);
  background: #222020;
  z-index: 0;
  overflow-y: auto; /* Ensure vertical scrolling is enabled */
  overflow-x: hidden;
  scroll-snap-type: y mandatory; /* Set scroll-snap-type on the parent container */
  scrollbar-width: none;
  scroll-behavior: smooth;

}

.layout > * {
  scroll-snap-align: start; /* Set scroll-snap-align on the child elements */
  scrollbar-width: none;

}
</style>