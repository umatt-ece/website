<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';

// Import sponsor logos
import asabeLogo from '@/assets/images/sponsors/sponsor-asabe.jpg';
import vehicleMediaLogo from '@/assets/images/sponsors/sponsor-vehicle-technology-centre.png';
import macdonLogo from '@/assets/images/sponsors/sponsor-macdon.png';
import friendsOfEngineeringLogo from '@/assets/images/sponsors/sponsor-friends-of-engineering.png';
import extremeMachineLogo from '@/assets/images/sponsors/sponsor-extreme-machine-corp.jpg';
import elmersLogo from '@/assets/images/sponsors/sponsor-elmers.webp';
import engEndowmentLogo from '@/assets/images/sponsors/sponsor-eng-endowment.png';
import matexLogo from '@/assets/images/sponsors/sponsor-matex.png';
import yaktaLogo from '@/assets/images/sponsors/sponsor-yakta.svg';

// Sponsor data with more structured categorization
const sponsors = reactive({
  featured: [
    {
      id: 1,
      name: "MacDon",
      logo: macdonLogo,
      link: "https://www.macdon.com/",
      size: "large"
    },
    {
      id: 2,
      name: "Vehicle Technology Centre",
      logo: vehicleMediaLogo,
      link: "https://vehicletechnologycentre.com/",
      size: "large" 
    }
  ],
  standard: [
    {
      id: 3,
      name: "Friends of Engineering",
      logo: friendsOfEngineeringLogo,
      link: "https://www.friendsofengineering.ca/"
    },
    {
      id: 4,
      name: "Extreme Machine Corp",
      logo: extremeMachineLogo,
      link: "https://www.extrememachine.com/"
    },
    {
      id: 5,
      name: "Engineering Endowment",
      logo: engEndowmentLogo,
      link: "#"
    },
    {
      id: 6,
      name: "Elmers Manufacturing",
      logo: elmersLogo,
      link: "https://elmersmfg.com/"
    },
    {
      id: 7,
      name: "ASABE",
      logo: asabeLogo,
      link: "https://www.asabe.org/"
    },
    {
      id: 8,
      name: "Matex",
      logo: matexLogo,
      link: "#"
    },
    {
      id: 9,
      name: "Yakta",
      logo: yaktaLogo,
      link: "#"
    }
  ]
});

// All sponsors for marquee effect
const allSponsors = computed(() => [
  ...sponsors.featured,
  ...sponsors.standard
]);

// Animation state with better performance using requestAnimationFrame
const animation = reactive({
  running: false,
  paused: false,
  speed: 0.8,
  frame: null,
  timestamp: 0
});

// UI state
const ui = reactive({
  showTooltip: false,
  activeTooltip: null,
  prefersReducedMotion: false,
  isVisible: false,
  isFirstViewComplete: false
});

// DOM references
const containerRef = ref(null);
const marqueeRef = ref(null);
const contentRef = ref(null);
const duplicateRef = ref(null);

// Handle scroll animation using requestAnimationFrame for better performance
const animateScroll = (timestamp) => {
  if (!animation.timestamp) {
    animation.timestamp = timestamp;
  }
  
  const elapsed = timestamp - animation.timestamp;
  
  if (elapsed > 16 && !animation.paused && marqueeRef.value) {
    marqueeRef.value.scrollLeft += animation.speed;
    
    // Reset scroll when needed for infinite effect
    if (contentRef.value && marqueeRef.value.scrollLeft >= contentRef.value.offsetWidth) {
      marqueeRef.value.scrollLeft = 0;
    }
    
    animation.timestamp = timestamp;
  }
  
  if (animation.running) {
    animation.frame = requestAnimationFrame(animateScroll);
  }
};

// Animation control functions
const startAnimation = () => {
  if (animation.running || ui.prefersReducedMotion) return;
  animation.running = true;
  animation.frame = requestAnimationFrame(animateScroll);
};

const stopAnimation = () => {
  if (!animation.running) return;
  animation.running = false;
  if (animation.frame) {
    cancelAnimationFrame(animation.frame);
    animation.frame = null;
  }
  animation.timestamp = 0;
};

const pauseAnimation = () => {
  animation.paused = true;
};

const resumeAnimation = () => {
  animation.paused = false;
};

// Handle reduced motion preference
const checkReducedMotion = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  ui.prefersReducedMotion = mediaQuery.matches;
  
  if (ui.prefersReducedMotion) {
    stopAnimation();
  } else if (!animation.running && ui.isVisible) {
    startAnimation();
  }
  
  return mediaQuery;
};

// Intersection observer to start animation only when visible
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      ui.isVisible = entry.isIntersecting;
      
      if (entry.isIntersecting) {
        if (!ui.prefersReducedMotion && !animation.running) {
          startAnimation();
        }
        if (!ui.isFirstViewComplete) {
          ui.isFirstViewComplete = true;
        }
      } else if (animation.running) {
        stopAnimation();
      }
    });
  }, { threshold: 0.2 });
  
  if (containerRef.value) {
    observer.observe(containerRef.value);
  }
  
  return observer;
};

// Setup tooltip behavior
const showTooltip = (sponsor) => {
  ui.activeTooltip = sponsor;
  ui.showTooltip = true;
};

const hideTooltip = () => {
  ui.showTooltip = false;
};

// Lifecycle hooks
onMounted(() => {
  // Clone content for infinite scroll
  if (contentRef.value && marqueeRef.value) {
    duplicateRef.value = contentRef.value.cloneNode(true);
    marqueeRef.value.appendChild(duplicateRef.value);
  }
  
  // Check reduced motion preference
  const mediaQuery = checkReducedMotion();
  mediaQuery.addEventListener('change', checkReducedMotion);
  
  // Setup visibility observer and start animation if visible
  const observer = setupIntersectionObserver();
  
  // Cleanup function to return
  onUnmounted(() => {
    stopAnimation();
    mediaQuery.removeEventListener('change', checkReducedMotion);
    observer.disconnect();
  });
});
</script>

<template>
  <section 
    ref="containerRef"
    class="sponsors-section"
    :class="{ 'is-first-view': ui.isFirstViewComplete }"
    aria-labelledby="sponsors-heading"
  >
    <div class="sponsors-container">
      <!-- Elegant section header -->
      <div class="sponsors-header">
        <h2 id="sponsors-heading" class="sponsors-heading">
          <span class="sponsors-label">Our Sponsors</span>
        </h2>
      </div>
      
      <!-- Featured sponsors grid with larger display -->
      <div 
        v-if="sponsors.featured.length" 
        class="featured-sponsors"
        :class="{ 'reduced-motion': ui.prefersReducedMotion }"
      >
        <a
          v-for="sponsor in sponsors.featured"
          :key="`featured-${sponsor.id}`"
          :href="sponsor.link"
          target="_blank"
          rel="noopener noreferrer"
          class="featured-sponsor"
          :class="{ 'featured-sponsor--large': sponsor.size === 'large' }"
          @mouseenter="showTooltip(sponsor)"
          @mouseleave="hideTooltip"
        >
          <div class="sponsor-frame">
            <img 
              :src="sponsor.logo" 
              :alt="`${sponsor.name} logo`" 
              class="sponsor-logo" 
              loading="lazy"
            />
          </div>
          <div 
            v-if="ui.showTooltip && ui.activeTooltip?.id === sponsor.id"
            class="sponsor-tooltip"
          >
            {{ sponsor.name }}
          </div>
        </a>
      </div>
      
      <!-- Smooth infinite marquee for the rest of sponsors -->
      <div 
        ref="marqueeRef"
        class="sponsors-marquee"
        :class="{ 'reduced-motion': ui.prefersReducedMotion }"
        @mouseenter="pauseAnimation"
        @mouseleave="resumeAnimation"
        @touchstart="pauseAnimation"
        @touchend="resumeAnimation"
        @touchcancel="resumeAnimation"
      >
        <div ref="contentRef" class="marquee-content">
          <a
            v-for="sponsor in sponsors.standard"
            :key="`standard-${sponsor.id}`"
            :href="sponsor.link"
            target="_blank"
            rel="noopener noreferrer"
            class="standard-sponsor"
            @mouseenter="showTooltip(sponsor)"
            @mouseleave="hideTooltip"
          >
            <div class="sponsor-frame">
              <img 
                :src="sponsor.logo" 
                :alt="`${sponsor.name} logo`" 
                class="sponsor-logo" 
                loading="lazy"
              />
            </div>
            <div 
              v-if="ui.showTooltip && ui.activeTooltip?.id === sponsor.id"
              class="sponsor-tooltip"
            >
              {{ sponsor.name }}
            </div>
          </a>
        </div>
      </div>
      
      <!-- Sponsor CTA -->
      <div class="sponsors-cta">
        <p class="cta-text">Join our community of sponsors and help drive innovation.</p>
        <a href="#contact" class="cta-button">Become a Sponsor</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Modern, clean design with subtle 3D effects and better organization */
.sponsors-section {
  padding: 4rem 0;
  position: relative;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  overflow: hidden;
}

/* Glass morphism effect for container */
.sponsors-container {
  max-width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Section heading with modern design */
.sponsors-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
}

.sponsors-heading {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 500;
  color: #595959;
  letter-spacing: 0.05em;
  display: inline-block;
  position: relative;
  margin: 0;
}

.sponsors-label {
  position: relative;
  display: inline-block;
  padding: 0 0.5rem;
}

.sponsors-label::before,
.sponsors-label::after {
  content: '';
  position: absolute;
  top: 50%;
  height: 1px;
  width: 100vw;
  background: linear-gradient(90deg, 
    rgba(0,0,0,0.08) 0%, 
    rgba(0,0,0,0.03) 100%);
}

.sponsors-label::before {
  right: 100%;
  margin-right: 1.5rem;
}

.sponsors-label::after {
  left: 100%;
  margin-left: 1.5rem;
}

/* Featured sponsors section */
.featured-sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Only animate once */
.is-first-view .featured-sponsors {
  animation: none;
  opacity: 1;
  transform: translateY(0);
}

.featured-sponsor {
  flex: 1 1 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 300px;
  transition: transform 0.3s ease;
}

.featured-sponsor--large {
  flex-basis: 250px;
}

/* Standard sponsors marquee */
.sponsors-marquee {
  margin: 2rem 0;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  white-space: nowrap;
  position: relative;
}

.sponsors-marquee::-webkit-scrollbar {
  display: none;
}

.marquee-content {
  display: inline-flex;
  align-items: center;
  padding: 1rem 0;
}

.standard-sponsor {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem;
  position: relative;
}

/* Sponsor frame with modern 3D effect */
.sponsor-frame {
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Featured sponsors have larger frames */
.featured-sponsor .sponsor-frame {
  height: 120px;
  width: 100%;
}

.featured-sponsor--large .sponsor-frame {
  height: 140px;
}

.standard-sponsor .sponsor-frame {
  height: 80px;
  width: 140px;
}

/* Logo styling */
.sponsor-logo {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  filter: grayscale(1) opacity(0.7);
  transition: filter 0.4s ease, transform 0.4s ease;
}

/* Hover effects */
.featured-sponsor:hover .sponsor-frame,
.standard-sponsor:hover .sponsor-frame {
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 6px 10px rgba(0, 0, 0, 0.05),
    0 0 1px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.featured-sponsor:hover .sponsor-logo,
.standard-sponsor:hover .sponsor-logo {
  filter: grayscale(0) opacity(1);
  transform: scale(1.05);
}

/* Tooltip styling */
.sponsor-tooltip {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  animation: fadeIn 0.2s ease forwards;
  z-index: 100;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* CTA styling */
.sponsors-cta {
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background: linear-gradient(135deg, 
    rgba(56, 94, 157, 0.03) 0%, 
    rgba(242, 169, 0, 0.06) 100%);
  border-radius: 12px;
  opacity: 0;
  animation: fadeIn 0.8s ease 0.3s forwards;
}

.is-first-view .sponsors-cta {
  animation: none;
  opacity: 1;
}

.cta-text {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #595959;
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: var(--umatt-c-medium-blue, #385E9D);
  color: white;
  font-weight: 500;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
}

.cta-button:hover {
  background-color: var(--umatt-c-gold, #F2A900);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(242, 169, 0, 0.2);
}

/* Reduced motion accommodations */
@media (prefers-reduced-motion: reduce) {
  .featured-sponsors,
  .sponsors-cta {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  .featured-sponsor:hover .sponsor-frame,
  .standard-sponsor:hover .sponsor-frame,
  .featured-sponsor:hover .sponsor-logo,
  .standard-sponsor:hover .sponsor-logo,
  .cta-button:hover {
    transform: none;
  }
}

.reduced-motion .sponsor-frame,
.reduced-motion .sponsor-logo {
  transition: none;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .sponsors-container {
    max-width: 85%;
  }
  
  .featured-sponsors {
    gap: 2.5rem;
  }
  
  .standard-sponsor .sponsor-frame {
    height: 90px;
    width: 160px;
  }
}

@media (min-width: 1024px) {
  .sponsors-section {
    padding: 6rem 0;
  }
  
  .sponsors-container {
    max-width: 1200px;
  }
  
  .sponsor-frame {
    padding: 1.5rem;
  }
  
  .featured-sponsor .sponsor-frame {
    height: 140px;
  }
  
  .featured-sponsor--large .sponsor-frame {
    height: 160px;
  }
  
  .standard-sponsor .sponsor-frame {
    height: 100px;
    width: 180px;
  }
}

@media (max-width: 640px) {
  .sponsors-section {
    padding: 3rem 0;
  }
  
  .featured-sponsor .sponsor-frame {
    height: 100px;
  }
  
  .featured-sponsor--large .sponsor-frame {
    height: 120px;
  }
  
  .standard-sponsor .sponsor-frame {
    height: 70px;
    width: 120px;
  }
}
</style>