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
        <svg class="big-gear" fill="#385E9D" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="143px" height="183px" viewBox="0 0 45.97 45.97" xml:space="preserve" stroke="#385E9D" stroke-width="0.00045973000000000005"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M43.454,18.443h-2.437c-0.453-1.766-1.16-3.42-2.082-4.933l1.752-1.756c0.473-0.473,0.733-1.104,0.733-1.774 c0-0.669-0.262-1.301-0.733-1.773l-2.92-2.917c-0.947-0.948-2.602-0.947-3.545-0.001l-1.826,1.815 C30.9,6.232,29.296,5.56,27.529,5.128V2.52c0-1.383-1.105-2.52-2.488-2.52h-4.128c-1.383,0-2.471,1.137-2.471,2.52v2.607 c-1.766,0.431-3.38,1.104-4.878,1.977l-1.825-1.815c-0.946-0.948-2.602-0.947-3.551-0.001L5.27,8.205 C4.802,8.672,4.535,9.318,4.535,9.978c0,0.669,0.259,1.299,0.733,1.772l1.752,1.76c-0.921,1.513-1.629,3.167-2.081,4.933H2.501 C1.117,18.443,0,19.555,0,20.935v4.125c0,1.384,1.117,2.471,2.501,2.471h2.438c0.452,1.766,1.159,3.43,2.079,4.943l-1.752,1.763 c-0.474,0.473-0.734,1.106-0.734,1.776s0.261,1.303,0.734,1.776l2.92,2.919c0.474,0.473,1.103,0.733,1.772,0.733 s1.299-0.261,1.773-0.733l1.833-1.816c1.498,0.873,3.112,1.545,4.878,1.978v2.604c0,1.383,1.088,2.498,2.471,2.498h4.128 c1.383,0,2.488-1.115,2.488-2.498v-2.605c1.767-0.432,3.371-1.104,4.869-1.977l1.817,1.812c0.474,0.475,1.104,0.735,1.775,0.735 c0.67,0,1.301-0.261,1.774-0.733l2.92-2.917c0.473-0.472,0.732-1.103,0.734-1.772c0-0.67-0.262-1.299-0.734-1.773l-1.75-1.77 c0.92-1.514,1.627-3.179,2.08-4.943h2.438c1.383,0,2.52-1.087,2.52-2.471v-4.125C45.973,19.555,44.837,18.443,43.454,18.443z M22.976,30.85c-4.378,0-7.928-3.517-7.928-7.852c0-4.338,3.55-7.85,7.928-7.85c4.379,0,7.931,3.512,7.931,7.85 C30.906,27.334,27.355,30.85,22.976,30.85z"></path> </g> </g> </g></svg>
        <svg class="small-gear" fill="#385E9D" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="102px" height="102px" viewBox="0 0 45.97 45.97" xml:space="preserve" stroke="#385E9D" stroke-width="0.00045973000000000005"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M43.454,18.443h-2.437c-0.453-1.766-1.16-3.42-2.082-4.933l1.752-1.756c0.473-0.473,0.733-1.104,0.733-1.774 c0-0.669-0.262-1.301-0.733-1.773l-2.92-2.917c-0.947-0.948-2.602-0.947-3.545-0.001l-1.826,1.815 C30.9,6.232,29.296,5.56,27.529,5.128V2.52c0-1.383-1.105-2.52-2.488-2.52h-4.128c-1.383,0-2.471,1.137-2.471,2.52v2.607 c-1.766,0.431-3.38,1.104-4.878,1.977l-1.825-1.815c-0.946-0.948-2.602-0.947-3.551-0.001L5.27,8.205 C4.802,8.672,4.535,9.318,4.535,9.978c0,0.669,0.259,1.299,0.733,1.772l1.752,1.76c-0.921,1.513-1.629,3.167-2.081,4.933H2.501 C1.117,18.443,0,19.555,0,20.935v4.125c0,1.384,1.117,2.471,2.501,2.471h2.438c0.452,1.766,1.159,3.43,2.079,4.943l-1.752,1.763 c-0.474,0.473-0.734,1.106-0.734,1.776s0.261,1.303,0.734,1.776l2.92,2.919c0.474,0.473,1.103,0.733,1.772,0.733 s1.299-0.261,1.773-0.733l1.833-1.816c1.498,0.873,3.112,1.545,4.878,1.978v2.604c0,1.383,1.088,2.498,2.471,2.498h4.128 c1.383,0,2.488-1.115,2.488-2.498v-2.605c1.767-0.432,3.371-1.104,4.869-1.977l1.817,1.812c0.474,0.475,1.104,0.735,1.775,0.735 c0.67,0,1.301-0.261,1.774-0.733l2.92-2.917c0.473-0.472,0.732-1.103,0.734-1.772c0-0.67-0.262-1.299-0.734-1.773l-1.75-1.77 c0.92-1.514,1.627-3.179,2.08-4.943h2.438c1.383,0,2.52-1.087,2.52-2.471v-4.125C45.973,19.555,44.837,18.443,43.454,18.443z M22.976,30.85c-4.378,0-7.928-3.517-7.928-7.852c0-4.338,3.55-7.85,7.928-7.85c4.379,0,7.931,3.512,7.931,7.85 C30.906,27.334,27.355,30.85,22.976,30.85z"></path> </g> </g> </g></svg>
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
  position: relative;
  width: 100%;
  height: clamp(5rem, 15vw, 8rem);
  color: var(--umatt-c-medium-blue, #385E9D);
  margin-bottom: 1.5rem;
  left:0;

}

.construction__icon svg {
  position: absolute;
  width: 100%;
  height: 100%;

}

.construction__icon .big-gear {
  left: clamp(-2rem, -8vw,1rem);
  animation: rotate-right 6s linear infinite;
}
.construction__icon .small-gear {
  right: clamp(-4.5rem, -7vw, 1rem);
  height: 70%;
  animation: rotate-left 4s linear infinite;
}

@keyframes rotate-right {
  0% {
    transform:  rotate(0deg);
  }
  50% {
    transform:rotate(180deg);
  }
  100% {
    transform:rotate(360deg);
  }
  
}

@keyframes rotate-left {
  0% {
    transform:  rotate(0deg);
  }
  50% {
    transform:  rotate(-180deg);
  }
  100% {
    transform:  rotate(-360deg);
  }
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