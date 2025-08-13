<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const tagline = ref('Tiny tractors, massive opportunities');
const isLoaded = ref(false);
const mousePosition = ref({ x: 0, y: 0 });

function handleJoin() {
  router.push('/join');
}

function handleSponsor() {
  router.push('/sponsor');
}

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  const x = (clientX / window.innerWidth) - 0.5;
  const y = (clientY / window.innerHeight) - 0.5;
  mousePosition.value = { x, y };
}

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
  
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <section class="hero-section" aria-label="Welcome to UMATT">
    <div class="hero-background">
      <div class="overlay"></div>
      <div class="gradient-overlay"></div>
      <div class="pattern-overlay"></div>
    </div>
    
    <div class="content-wrapper">
      <div class="hero-content" :class="{ 'loaded': isLoaded }">
     
        
        <!-- Team name with enhanced styling -->
        <div class="team-title">
          <h1 class="university-name">University of Manitoba</h1>
          <h2 class="association-name">Association of <span class="highlight">Tiny Tractors</span></h2>
        </div>
        
        <!-- Tagline with improved styling -->
        <div class="tagline-container">
          <p class="tagline">{{ tagline }}</p>
          <div class="tagline-underline"></div>
        </div>
        
        <!-- Improved responsive CTA container -->
        <div class="cta-container">
          <button class="cta-button primary" @click="handleJoin">
            <span class="button-bg"></span>
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
            <span class="button-bg"></span>
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
       
       <!-- Improved scroll indicator -->
       <div class="scroll-indicator">
          <div class="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="scroll-text">Explore More</div>
        </div>
    </div>
    
    <!-- Enhanced visual decorations -->
    <div class="hero-accent-shapes">
      <div class="accent-shape shape-1" 
           :style="{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }"></div>
      <div class="accent-shape shape-2"
           :style="{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` }"></div>
      <div class="accent-shape shape-3"
           :style="{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }"></div>
      <div class="accent-shape shape-4"
           :style="{ transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)` }"></div>
    </div>
  </section>
</template>

<style scoped>
/* Base styles */
.hero-section {
  position: relative;
  height: calc(100vh - var(--navbar-height));
  width: 100%;
  padding-top: var(--navbar-height);
  margin-top: 0;
  overflow: hidden;
  color: var(--color-white, #ffffff);
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
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.45) 50%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('@/assets/images/competition-group-photo-2024.jpg') no-repeat center center;
  background-size: cover;
  transform-origin: center;
  animation: subtle-zoom 20s ease-out forwards;
  filter: saturate(1.1) brightness(1.05);
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  opacity: 0.7;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.25;
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
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  margin-top: -4rem;
}

.hero-content.loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Badge styling */
.hero-badge {
  background: var(--color-gold, #F2A900);
  color: #000;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 20px rgba(242, 169, 0, 0.25);
  transform: translateY(-20px);
  opacity: 0;
  animation: slide-in-top 0.7s cubic-bezier(.25,.46,.45,.94) forwards 0.3s;
}

/* Team title styling */
.team-title {
  text-align: center;
  max-width: 90%;
  margin-bottom: 1.5rem;
  animation: fade-in 1s ease-out forwards 0.5s;
  opacity: 0;
  width: 100%;
}

.university-name {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 500;
  letter-spacing: 0.05em;
  margin: 0 0 0.6rem 0;
  text-transform: uppercase;
  color: var(--color-white, #ffffff);
  line-height: 1.2;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.university-name::after {
  content: '';
  position: absolute;
  bottom: -0.6rem;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(3rem, 40%, 5rem);
  height: 2px;
  background-color: var(--color-gold, #F2A900);
  opacity: 0.8;
  border-radius: 1px;
}

.association-name {
  font-size: clamp(2rem, 7vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 1.2rem 0 0 0;
  line-height: 1.1;
  text-transform: uppercase;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 240, 240, 0.9) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.highlight {
  color: var(--color-gold, #F2A900);
  position: relative;
  font-weight: 800;
  animation: text-pulse 3s ease-in-out infinite;
  display: inline-block;
  text-shadow: 0 2px 15px rgba(242, 169, 0, 0.6);
}

/* Tagline styling */
.tagline-container {
  margin: 2rem 0 3rem;
  text-align: center;
  width: 100%;
  max-width: 800px;
  animation: fade-in 1s ease-out forwards 0.8s;
  opacity: 0;
  position: relative;
}

.tagline {
  font-size: clamp(1.15rem, 2.5vw, 1.6rem);
  font-weight: 300;
  letter-spacing: 0.03em;
  margin: 0 0 0.8rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  font-style: italic;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.tagline-underline {
  height: 1px;
  background: linear-gradient(
    90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 20%, 
    rgba(255, 255, 255, 0.5) 50%, 
    rgba(255, 255, 255, 0.3) 80%, 
    transparent 100%
  );
  width: 60%;
  margin: 0 auto;
}

/* CTA Buttons */
.cta-container {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 650px;
  opacity: 0;
  animation: fade-in 1s ease-out forwards 1.1s;
}

.cta-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  overflow: hidden;
  border: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex: 1;
  min-width: 200px;
  max-width: 280px;
}

.button-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.15) 100%);
  z-index: 1;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(-100%) skewX(-20deg);
}

.cta-button:hover .button-bg {
  transform: translateX(100%) skewX(-20deg);
}

.button-text, .button-icon {
  position: relative;
  z-index: 2;
}

.cta-button.primary {
  background: linear-gradient(45deg, #2d4a7d 0%, var(--color-blue-medium, #385E9D) 100%);
  color: var(--color-white, #ffffff);
  box-shadow: 
    0 10px 20px -10px rgba(56, 94, 157, 0.5),
    0 1px 3px rgba(0, 0, 0, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.1) inset;
}

.cta-button.primary:hover {
  background: linear-gradient(45deg, #243d68 0%, #2d4a7d 100%);
  transform: translateY(-3px);
  box-shadow: 
    0 14px 24px -8px rgba(56, 94, 157, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.2) inset;
}

.cta-button.secondary {
  background: transparent;
  color: var(--color-white, #ffffff);
  border: 2px solid var(--color-gold, #F2A900);
  box-shadow: 
    0 8px 15px -8px rgba(242, 169, 0, 0.4),
    0 1px 3px rgba(0, 0, 0, 0.1);
}

.cta-button.secondary:hover {
  background: var(--color-gold, #F2A900);
  color: #000;
  transform: translateY(-3px);
  box-shadow: 
    0 14px 24px -8px rgba(242, 169, 0, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.15);
}

.button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.cta-button:hover .button-icon {
  transform: translateX(4px);
}

/* Improved scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 3rem;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fade-in 1s ease-out forwards 1.4s;
}

.scroll-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroll-arrow span {
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
  margin: -6px;
  animation: scroll 2s infinite;
}

.scroll-arrow span:nth-child(1) {
  animation-delay: -0.4s;
}

.scroll-arrow span:nth-child(2) {
  animation-delay: -0.2s;
}

.scroll-arrow span:nth-child(3) {
  animation-delay: 0s;
}

.scroll-text {
  margin-top: 1.2rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.85;
  font-weight: 500;
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
  opacity: 0.2;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--color-gold, #F2A900) 0%, transparent 70%);
  top: -200px;
  right: -100px;
  filter: blur(50px);
}

.shape-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--color-blue-medium, #385E9D) 0%, transparent 70%);
  bottom: -250px;
  left: -200px;
  filter: blur(60px);
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, var(--color-light-blue, #00A3E0) 0%, transparent 70%);
  top: 20%;
  right: 10%;
  filter: blur(40px);
}

.shape-4 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, var(--color-engineering-orange, #C11718) 0%, transparent 70%);
  top: 60%;
  right: 30%;
  filter: blur(50px);
  opacity: 0.15;
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

@keyframes slide-in-top {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-15px, -15px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(15px, 15px);
  }
}

@keyframes text-pulse {
  0%, 100% {
    opacity: 1;
    text-shadow: 0 2px 15px rgba(242, 169, 0, 0.6);
  }
  50% {
    opacity: 0.9;
    text-shadow: 0 2px 10px rgba(242, 169, 0, 0.4);
  }
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .hero-section {
    height: calc(100vh - var(--navbar-height-mobile));
    padding-top: var(--navbar-height-mobile);
    margin-top: 0;
  }
  
  .cta-container {
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
  
  .university-name {
    margin-bottom: 0.8rem;
  }
  
  .team-title {
    margin-bottom: 1rem;
  }
  
  .tagline-container {
    margin: 1.5rem 0 2rem;
  }
  
  .hero-content {
    margin-top: -2rem;
  }
  
  .accent-shape {
    opacity: 0.15;
  }
}

@media (max-width: 500px) {
  .hero-section {
    height: calc(100vh - var(--navbar-height-small));
    padding-top: var(--navbar-height-small);
    margin-top: 0;
  }
  
  .hero-content {
    padding: 0 0.5rem;
    margin-top: -1rem;
  }
  
  .hero-badge {
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
    margin-bottom: 1rem;
  }
  
  .university-name {
    font-size: 1.25rem;
  }
  
  .association-name {
    font-size: 1.8rem;
    margin-top: 0.8rem;
  }
  
  .tagline {
    font-size: 1rem;
  }
  
  .tagline-container {
    margin: 1rem 0 1.5rem;
  }
  
  .scroll-indicator {
    bottom: 2rem;
  }
  
  .cta-button {
    padding: 0.9rem 1.2rem;
    font-size: 0.9rem;
    min-width: 160px;
  }
}

@media (max-width: 350px) {
  .hero-section {
    height: calc(100vh - var(--navbar-height-xs));
    padding-top: var(--navbar-height-xs);
    margin-top: 0;
  }
  
  .hero-content {
    padding: 0 0.3rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.1rem;
    font-size: 0.85rem;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .overlay,
  .scroll-indicator,
  .scroll-arrow span,
  .button-bg,
  .highlight,
  .accent-shape {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
  
  .hero-content,
  .team-title,
  .tagline-container,
  .cta-container,
  .hero-badge {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>