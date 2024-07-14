<script setup lang="ts">
import Card from 'primevue/card'
import { homeCarousel } from '@/assets/images'
import Carousel from 'primevue/carousel'
</script>

<template>
  <div class="card">
    <Card class="card-view">
      <template #content>
        <Carousel :value="homeCarousel" :numVisible="1" :numScroll="1">
          <template #item="">
            ...
          </template>
        </Carousel>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>
