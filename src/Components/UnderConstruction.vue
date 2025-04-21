<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const goBack = () => {
  router.push('/');
};
</script>

<template>
  <div class="construction" :class="{ 'is-visible': isVisible }">
    <div class="construction__container">
      <!-- Icon/Visual Element -->
      <div class="construction__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10.5 20.5a1 1 0 0 0 3 0v-2a3 3 0 0 0-3-3h-1a2 2 0 0 1-2-2 2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8"/>
          <path d="M12 6V3"/>
          <path d="m9 6 3-3 3 3"/>
          <rect x="4" y="13" width="16" height="2" rx="1"/>
          <path d="M2 14h2"/>
          <path d="M20 14h2"/>
          <path d="m5 10 1.5-3"/>
          <path d="M18 13c.9-1.25 1.5-2 1.5-3"/>
        </svg>
      </div>
      
      <!-- Header -->
      <h1 class="construction__title">
        Under Construction
      </h1>
      
      <!-- Message -->
      <p class="construction__message">
        We're working hard to bring you this page. Check back soon for updates!
      </p>
      
      <!-- Action buttons -->
      <div class="construction__actions">
        <button class="construction__button construction__button--primary" @click="goBack">
          Return to Home
        </button>
      </div>
      
      <!-- Progress indicator -->
      <div class="construction__progress">
        <div class="construction__progress-bar">
          <div class="construction__progress-indicator"></div>
        </div>
        <p class="construction__progress-text">Progress: In Development</p>
      </div>
      
      <!-- UMATT branding -->
      <div class="construction__branding">
        <p class="construction__branding-text">
          University of Manitoba Association of Tiny Tractors
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mobile-first approach with CSS variables for theming */
:root {
  --animation-duration: 0.6s;
  --animation-timing: cubic-bezier(0.16, 1, 0.3, 1);
}

.construction {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: clamp(1rem, 5vw, 3rem);
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity var(--animation-duration) var(--animation-timing),
              transform var(--animation-duration) var(--animation-timing);
}

.construction.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.construction__container {
  max-width: 36rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 1rem;
  padding: clamp(1.5rem, 5vw, 3rem);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
}

.construction__icon {
  width: clamp(5rem, 15vw, 8rem);
  height: clamp(5rem, 15vw, 8rem);
  color: var(--umatt-c-medium-blue, #385E9D);
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.construction__title {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 700;
  color: #333;
  margin: 0 0 1rem 0;
  position: relative;
}

.construction__title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(3rem, 30%, 5rem);
  height: 0.25rem;
  background-color: var(--umatt-c-gold, #F2A900);
  border-radius: 0.125rem;
}

.construction__message {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
  max-width: 30rem;
}

.construction__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 18rem;
  margin-bottom: 2rem;
}

.construction__button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  border-radius: 2rem;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
}

.construction__button--primary {
  background-color: var(--umatt-c-medium-blue, #385E9D);
  color: white;
  box-shadow: 0 0.25rem 1rem rgba(56, 94, 157, 0.25);
}

.construction__button--primary:hover {
  background-color: #2d4a7d;
  transform: translateY(-0.25rem);
  box-shadow: 0 0.5rem 1.5rem rgba(56, 94, 157, 0.35);
}

.construction__button--primary:active {
  transform: translateY(0);
}

.construction__progress {
  width: 100%;
  max-width: 20rem;
  margin-bottom: 2rem;
}

.construction__progress-bar {
  width: 100%;
  height: 0.5rem;
  background-color: #e9ecef;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.construction__progress-indicator {
  width: 35%;
  height: 100%;
  background: linear-gradient(90deg, var(--umatt-c-medium-blue, #385E9D), var(--umatt-c-light-blue, #6BBBDB));
  border-radius: 1rem;
  animation: pulse 2s ease-in-out infinite;
}

.construction__progress-text {
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #6c757d;
  margin: 0;
}

.construction__branding {
  margin-top: 1rem;
}

.construction__branding-text {
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  color: #888;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.75rem);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Tablet+ Responsive adjustments */
@media (min-width: 640px) {
  .construction__actions {
    flex-direction: row;
    justify-content: center;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .construction,
  .construction.is-visible,
  .construction__icon,
  .construction__progress-indicator {
    animation: none;
    transition: none;
    transform: none;
  }
  
  .construction {
    opacity: 1;
  }
}
</style>