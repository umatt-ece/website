<template>
  <div class="page-skeleton">
    <!-- Hero Section Skeleton -->
    <div class="hero-skeleton">
      <Skeleton height="400px" class="w-full mb-4"></Skeleton>
    </div>
    
    <!-- Content Sections -->
    <div class="content-skeleton max-w-screen-xl mx-auto px-4">
      <!-- Section 1: About -->
      <div class="section-skeleton mb-8">
        <Skeleton width="200px" height="40px" class="mb-4"></Skeleton>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 pr-0 lg:pr-4 mb-4">
            <Skeleton class="mb-2" height="20px"></Skeleton>
            <Skeleton class="mb-2" height="20px"></Skeleton>
            <Skeleton width="90%" class="mb-2" height="20px"></Skeleton>
            <Skeleton width="85%" class="mb-4" height="20px"></Skeleton>
            <Skeleton width="40%" height="36px"></Skeleton>
          </div>
          <div class="w-full lg:w-1/2">
            <Skeleton height="300px"></Skeleton>
          </div>
        </div>
      </div>
      
      <!-- Section 2: Features -->
      <div class="section-skeleton mb-8">
        <Skeleton width="250px" height="40px" class="mb-4"></Skeleton>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="i in 3" :key="i" class="feature-card">
            <Skeleton height="200px" class="mb-3" borderRadius="8px"></Skeleton>
            <Skeleton width="70%" height="24px" class="mb-2"></Skeleton>
            <Skeleton class="mb-2"></Skeleton>
            <Skeleton width="90%"></Skeleton>
          </div>
        </div>
      </div>
      
      <!-- Section 3: Team/Testimonials -->
      <div class="section-skeleton mb-8">
        <Skeleton width="180px" height="40px" class="mb-4 mx-auto"></Skeleton>
        <div class="flex flex-wrap justify-center">
          <div v-for="i in 4" :key="i" class="w-1/2 md:w-1/4 px-4 mb-6 text-center">
            <Skeleton shape="circle" size="120px" class="mb-3 mx-auto"></Skeleton>
            <Skeleton width="80%" height="24px" class="mb-2 mx-auto"></Skeleton>
            <Skeleton width="60%" class="mx-auto"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>

<style scoped>
.page-skeleton {
  animation: pulse 1.5s infinite ease-in-out;
  padding-bottom: 2rem;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}
</style>
