<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="layout">
    <Navbar />
    
    <main class="layout__content">
      <Suspense>
        <template #fallback>
          <PageSkeleton />
        </template>
        <template #default>
          <RouterView />
        </template>
      </Suspense>
    </main>
    
    <Footer />
  </div>
</template>
  
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/Components/NavbarView.vue'
import Footer from '@/Components/FooterView.vue'
import PageSkeleton from '@/Components/PageSkeleton.vue'
</script>
  
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout__content {
  flex: 1;
  padding-top: 4.5rem; /* Match navbar desktop height */
  transition: padding-top var(--transition-normal, 0.3s) var(--transition-timing, cubic-bezier(0.16, 1, 0.3, 1));
}

/* Match the same media query breakpoints as in navbar */
@media (max-width: 900px) {
  .layout__content {
    padding-top: 4rem;
  }
}

@media (max-width: 500px) {
  .layout__content {
    padding-top: 3.8rem;
  }
}

@media (max-width: 350px) {
  .layout__content {
    padding-top: 3.5rem;
  }
}
</style>
