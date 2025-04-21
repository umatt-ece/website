<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router';

const tagline = ref('Innovating Small-Scale Agricultural Engineering');
const isLoaded = ref(false);

function handleJoin() {
  router.push('/join');
}

function handleSponsor() {
  router.push('/sponsor');
}


onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <section class="hero-section" aria-label="Welcome to UMATT">
    <div class="hero-background">
      <div class="overlay"></div>
      <div class="pattern-overlay"></div>
    </div>
    
    <div class="content-wrapper">
      <div class="hero-content" :class="{ 'loaded': isLoaded }">
        <!-- Team name with two-part styling -->
        <div class="team-title">
          <h1 class="university-name">University of Manitoba</h1>
          <h2 class="association-name">Association of <span class="highlight">Tiny Tractors</span></h2>
        </div>
        
        <!-- Tagline with enhanced styling -->
        <div class="tagline-container">
          <p class="tagline">{{ tagline }}</p>
        </div>
        
        <!-- Improved responsive CTA container -->
        <div class="cta-container">
          <button class="cta-button primary" @click="handleJoin">
            <span class="button-text">Join Our Team</span>
            <span class="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
          </button>
          
          <button class="cta-button secondary" @click="handleSponsor">
            <span class="button-text">Become a Sponsor</span>
            <span class="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </span>
          </button>
        </div>
        
       
      </div>
       <!-- Scroll indicator -->
       <div class="scroll-indicator">
          <span class="arrow"></span>
          <span class="text">Scroll to explore</span>
        </div>
    </div>
    
    <!-- Visual decorations -->
    <div class="hero-accent-shapes">
      <div class="accent-shape shape-1"></div>
      <div class="accent-shape shape-2"></div>
      <div class="accent-shape shape-3"></div>
    </div>
  </section>
</template>

<style scoped>
/* Base styles */
.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  color: var(--umatt-c-white, #ffffff);
  font-family: 'Poppins', sans-serif;
}

/* Background elements */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url('@/assets/images/competition-group-photo-2024.jpg') no-repeat center center;
  background-size: cover;
  transform-origin: center;
  animation: subtle-zoom 15s ease-out forwards;
  filter: saturate(1.1);
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
}

/* Layout structure */
.content-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.hero-content.loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Team title styling */
.team-title {
  text-align: center;
  max-width: 900px;
  margin-bottom: 1.5rem;
  animation: fade-in 1s ease-out forwards 0.5s;
  opacity: 0;
  width: 100%;
}

.university-name {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 500;
  letter-spacing: 0.03em;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  color: var(--umatt-c-white, #ffffff);
  line-height: 1.2;
  position: relative;
  display: inline-block;
}

.university-name::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background-color: var(--umatt-c-gold, #F2A900);
  opacity: 0.7;
}

.association-name {
  font-size: clamp(2rem, 7vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 1rem 0 0 0;
  line-height: 1.1;
  text-transform: uppercase;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 240, 240, 0.9) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.highlight {
  color: var(--umatt-c-gold, #F2A900);
  position: relative;
  font-weight: 800;
  animation: text-pulse 3s ease-in-out infinite;
  display: inline-block;
}

/* Tagline styling */
.tagline-container {
  margin: 1.5rem 0 2.5rem;
  text-align: center;
  width: 100%;
  max-width: 800px;
  animation: fade-in 1s ease-out forwards 0.8s;
  opacity: 0;
}

.tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 300;
  letter-spacing: 0.02em;
  margin: 0;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}

/* CTA Buttons */
.cta-container {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  opacity: 0;
  animation: fade-in 1s ease-out forwards 1.1s;
}

.cta-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.9rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  overflow: hidden;
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  flex: 1;
  min-width: 180px;
  max-width: 250px;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  transform: skewX(-20deg);
  transition: all 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button.primary {
  background-color: var(--umatt-c-medium-blue, #385E9D);
  color: var(--umatt-c-white, #ffffff);
  box-shadow: 0 4px 15px rgba(56, 94, 157, 0.3);
}

.cta-button.primary:hover {
  background-color: #2d4a7d;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(56, 94, 157, 0.5);
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--umatt-c-white, #ffffff);
  border: 2px solid var(--umatt-c-gold, #F2A900);
  box-shadow: 0 4px 15px rgba(242, 169, 0, 0.15);
}

.cta-button.secondary:hover {
  background-color: var(--umatt-c-gold, #F2A900);
  color: #000;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(242, 169, 0, 0.35);
}

.button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.cta-button:hover .button-icon {
  transform: translateX(3px);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  margin: 0 auto;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fade-in 1s ease-out forwards 1.4s;
}

.arrow {
  width: 20px;
  height: 20px;
  border-left: 2px solid var(--umatt-c-white, #ffffff);
  border-bottom: 2px solid var(--umatt-c-white, #ffffff);
  transform: rotate(-45deg);
  margin-bottom: 0.5rem;
  animation: bounce 2s infinite 1.5s;
}

.scroll-indicator .text {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

/* Accent shapes for visual interest */
.hero-accent-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.accent-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.12;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--umatt-c-gold, #F2A900) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.shape-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--umatt-c-medium-blue, #385E9D) 0%, transparent 70%);
  bottom: -200px;
  left: -200px;
}

.shape-3 {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, var(--umatt-c-light-blue, #6BBBDB) 0%, transparent 70%);
  top: 25%;
  right: 15%;
}

/* Animations */
@keyframes subtle-zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(-45deg);
  }
  40% {
    transform: translateY(-10px) rotate(-45deg);
  }
  60% {
    transform: translateY(-5px) rotate(-45deg);
  }
}

@keyframes text-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

/* Improved responsive adjustments */
@media (max-width: 768px) {
  .cta-container {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
  
  .university-name {
    margin-bottom: 0.8rem;
  }
  
  .accent-shape {
    opacity: 0.08;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 0 0.5rem;
  }
  
  .university-name {
    font-size: 1.25rem;
  }
  
  .association-name {
    font-size: 1.75rem;
  }
  
  .tagline {
    font-size: 1rem;
  }
  
  .scroll-indicator {
    bottom: 1.5rem;
  }
  
  .cta-button {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .overlay,
  .scroll-indicator,
  .arrow,
  .cta-button::before,
  .highlight {
    animation: none;
    transition: none;
  }
  
  .hero-content,
  .team-title,
  .tagline-container,
  .cta-container {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>