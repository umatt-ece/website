<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isVisible = ref(false);
// Default to 0, but make sure this doesn't exceed array length
const activeTab = ref(0);

// Import sponsor logos with correct file paths
import asabeLogo from '@/assets/images/sponsors/sponsor-asabe.jpg';
import vehicleMediaLogo from '@/assets/images/sponsors/sponsor-vehicle-technology-centre.png';
import macdonLogo from '@/assets/images/sponsors/sponsor-macdon.png';
import friendsOfEngineeringLogo from '@/assets/images/sponsors/sponsor-friends-of-engineering.png';
import extremeMachineLogo from '@/assets/images/sponsors/sponsor-extreme-machine-corp.jpg';
import elmersLogo from '@/assets/images/sponsors/sponsor-elmers.webp';
import engEndowmentLogo from '@/assets/images/sponsors/sponsor-eng-endowment.png';
import matexLogo from '@/assets/images/sponsors/sponsor-matex.png';
import yaktaLogo from '@/assets/images/sponsors/sponsor-yakta.svg';

// Sponsor data organized by tier - make sure this isn't empty
const tiers = [
  {
    name: "Premier Partners",
    description: "Our highest level of sponsorship, these partners make our competitions possible.",
    sponsors: [
      {
        id: 1,
        name: "MacDon",
        logo: macdonLogo,
        link: "https://www.macdon.com/",
        description: "Agricultural harvesting equipment manufacturer"
      },
      {
        id: 2,
        name: "Elmers Manufacturing",
        logo: elmersLogo,
        link: "https://elmersmfg.com/",
        description: "Agricultural equipment manufacturer"
      }
    ]
  },
  {
    name: "Gold Supporters",
    description: "Major contributors to our design and build process.",
    sponsors: [
      {
        id: 3,
        name: "Friends of Engineering",
        logo: friendsOfEngineeringLogo,
        link: "https://www.friendsofengineering.ca/",
        description: "Supporting engineering education and initiatives"
      },
      {
        id: 4,
        name: "Extreme Machine Corp",
        logo: extremeMachineLogo,
        link: "https://www.extrememachine.com/",
        description: "Precision machining and manufacturing"
      },
      {
        id: 5,
        name: "Engineering Endowment",
        logo: engEndowmentLogo,
        link: "#",
        description: "Engineering scholarship and project funding"
      }
    ]
  },
  // Add the third tier if not already there
  {
    name: "Supporting Organizations",
    description: "Organizations that provide essential support and resources.",
    sponsors: [
      {
        id: 6,
        name: "Vehicle Technology Centre",
        logo: vehicleMediaLogo, 
        link: "https://vehicletechnologycentre.com/",
        description: "Specialized automotive industry solutions"
      },
      {
        id: 7,
        name: "ASABE",
        logo: asabeLogo,
        link: "https://www.asabe.org/",
        description: "American Society of Agricultural and Biological Engineers"
      },
      {
        id: 8,
        name: "Matex",
        logo: matexLogo,
        link: "#",
        description: "Materials and manufacturing solutions"
      },
      {
        id: 9,
        name: "Yakta",
        logo: yaktaLogo,
        link: "#",
        description: "Engineering and technical solutions"
      }
    ]
  }
];

// Fix: Add safety check to the computed property
const activeTier = computed(() => {
  // Make sure we have tiers and the index is valid
  if (tiers.length === 0 || activeTab.value >= tiers.length) {
    return {
      name: "No sponsors available",
      description: "Please check back later for our sponsors.",
      sponsors: []
    };
  }
  return tiers[activeTab.value];
});

function handleSponsorClick() {
  router.push('/sponsor');
}

function handleContactClick() {
  router.push('/contact');
}

// Observer for scroll-based animations
onMounted(() => {
  // Make sure activeTab is valid
  if (activeTab.value >= tiers.length) {
    activeTab.value = 0;
  }
  
  // Initial visibility
  setTimeout(() => {
    isVisible.value = true;
  }, 300);

  // Set up intersection observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe elements
  document.querySelectorAll('.observe-me').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section id="sponsors" class="sponsors-section" aria-labelledby="sponsors-title">
    <!-- Section accent elements -->
    <div class="accent-shape shape-1"></div>
    <div class="accent-shape shape-2"></div>
    
    <div class="sponsors-container" :class="{ 'is-visible': isVisible }">
      <!-- Section header -->
      <header class="sponsors-header observe-me">
        <span class="section-badge">Our Partners</span>
        <h2 id="sponsors-title" class="sponsors-title">
          Driving <span class="text-highlight">Innovation</span> Together
        </h2>
        <div class="title-accent"></div>
        <p class="sponsors-intro">
          We're incredibly grateful to our sponsors who make our engineering journey possible. 
          Their support enables our team to design, build, and compete with our tiny tractors 
          while developing the next generation of agricultural innovation.
        </p>
      </header>
      
      <!-- Tabbed tier navigation -->
      <div class="tier-tabs observe-me">
        <button 
          v-for="(tier, index) in tiers" 
          :key="`tab-${index}`"
          class="tier-tab" 
          :class="{ 'active': activeTab === index }"
          @click="activeTab = index"
          :aria-selected="activeTab === index"
          role="tab"
        >
          <span class="tab-text">{{ tier.name }}</span>
        </button>
      </div>
      
      <!-- Active tier display -->
      <div class="tier-content observe-me">
        <div class="tier-description">
          <p>{{ activeTier?.description || 'Please select a sponsorship tier.' }}</p>
        </div>
        
        <!-- Key issue: Add :key to force re-rendering when activeTab changes -->
        <div 
          :key="`tier-content-${activeTab}`" 
          class="sponsors-grid" 
          :class="`tier-${activeTab}`" 
          v-if="activeTier && activeTier.sponsors && activeTier.sponsors.length"
        >
          <div 
            v-for="sponsor in activeTier.sponsors" 
            :key="`sponsor-${sponsor.id}`"
            class="sponsor-card"
          >
            <a 
              :href="sponsor.link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="sponsor-link"
              :aria-label="`Visit ${sponsor.name} website`"
            >
              <div class="sponsor-logo-container">
                <img 
                  :src="sponsor.logo" 
                  :alt="`${sponsor.name} logo`" 
                  class="sponsor-logo" 
                  loading="lazy"
                />
                <div class="logo-overlay">
                  <span class="visit-text">Visit Site</span>
                </div>
              </div>
              <div class="sponsor-info">
                <h4 class="sponsor-name">{{ sponsor.name }}</h4>
                <p class="sponsor-description">{{ sponsor.description }}</p>
              </div>
            </a>
          </div>
        </div>
        <div v-else class="empty-sponsors-message">
          No sponsors to display in this tier.
        </div>
      </div>
      
      <!-- Sponsor showcase -->
      <div class="sponsor-showcase observe-me">
        <div class="showcase-content">
          <div class="showcase-text">
            <h3 class="showcase-title">Trusted by Industry Leaders</h3>
            <p class="showcase-description">
              Our sponsors represent the best in agricultural engineering and manufacturing, 
              providing mentorship, resources, and industry connections that prepare our team members 
              for successful careers in engineering.
            </p>
            <div class="showcase-stats">
              <div class="stat-item">
                <span class="stat-number">{{ tiers.reduce((acc, tier) => acc + tier.sponsors.length, 0) }}</span>
                <span class="stat-label">Total Sponsors</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">5+</span>
                <span class="stat-label">Years of Support</span>
              </div>
            </div>
          </div>
          <div class="logo-cloud">
            <div 
              v-for="(tier, tierIndex) in tiers" 
              :key="`tier-cloud-${tierIndex}`"
              class="logo-cloud-tier"
            >
            <a v-bind = "{ href: sponsor.link, target: '_blank', rel: 'noopener noreferrer' }"
                v-for="sponsor in tier.sponsors" 
                :key="`cloud-${sponsor.id}`"
                class="cloud-logo-container"
              >
              
                
                  <img
                    :src="sponsor.logo"
                    :alt="`${sponsor.name}`"
                    class="cloud-logo"
                    loading="lazy"
                  />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to action -->
      <div class="sponsors-cta observe-me">
        <div class="cta-content">
          <div class="cta-badge">Partnership Opportunity</div>
          <h3 class="cta-title">Become a Sponsor Today</h3>
          <p class="cta-text">
            Support the next generation of agricultural engineering talent and gain visibility 
            in the industry while connecting with top engineering students.
          </p>
          <div class="benefits-list">
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span class="benefit-text">Brand visibility at competitions</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span class="benefit-text">Access to talented engineering students</span>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span class="benefit-text">Support agricultural innovation</span>
            </div>
          </div>
          <div class="cta-actions">
            <button @click="handleSponsorClick" class="cta-button primary">
              Sponsorship Packages
            </button>
            <button @click="handleContactClick" class="cta-button secondary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Main section styling */
.sponsors-section {
  padding: 8rem 1.5rem;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
  position: relative;
  overflow: hidden;
  color: #2c3e50;
}

.section-badge {
  display: inline-block;
  background: linear-gradient(to right, var(--color-gold, #F2A900), #e19500);
  color: #000;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 12px rgba(242, 169, 0, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.accent-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.07;
  z-index: 0;
  filter: blur(50px);
}

.shape-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--color-gold, #F2A900) 0%, transparent 70%);
  top: -100px;
  right: -200px;
  animation: float-slow 30s ease-in-out infinite alternate;
}

.shape-2 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, var(--color-blue-medium, #385E9D) 0%, transparent 70%);
  bottom: -300px;
  left: -250px;
  animation: float-slow 25s ease-in-out infinite alternate-reverse;
}

.sponsors-container {
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
  position: relative;
  z-index: 1;
}

.sponsors-container.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Header styling */
.sponsors-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.sponsors-title {
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 800;
  color: #212529;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.text-highlight {
  background: linear-gradient(104deg, var(--color-gold, #F2A900), var(--color-brown, #4F2C1D));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
}

.title-accent {
  width: 80px;
  height: 4px;
  background: var(--color-gold, #F2A900);
  margin: 1.5rem auto 2rem;
  border-radius: 2px;
}

.sponsors-intro {
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  line-height: 1.7;
  color: #495057;
}

/* Tier tabs */
.tier-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tier-tab {
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tier-tab:hover {
  border-color: var(--color-blue-medium, #385E9D);
  color: var(--color-blue-medium, #385E9D);
  background-color: rgba(56, 94, 157, 0.05);
  transform: translateY(-2px);
}

.tier-tab.active {
  background-color: var(--color-blue-medium, #385E9D);
  color: white;
  border-color: var(--color-blue-medium, #385E9D);
  box-shadow: 0 6px 16px rgba(56, 94, 157, 0.25);
}

.tab-text {
  position: relative;
  z-index: 2;
}

/* Tier content */
.tier-content {
  margin-bottom: 6rem;
}

.tier-description {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #64748b;
  font-size: 1.1rem;
}

/* Sponsor grid */
.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  align-items: stretch;
}

/* Tier-specific grid adjustments */
.tier-0 {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

/* Sponsor card */
.sponsor-card {
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.05),
    0 5px 10px rgba(0, 0, 0, 0.03);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform: translateY(0);
}

.sponsor-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.05);
}

/* Sponsor link */
.sponsor-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Logo container */
.sponsor-logo-container {
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: linear-gradient(to bottom, #fcfcfc, #f5f8fc);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

/* Logo overlay */
.logo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(56, 94, 157, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.sponsor-card:hover .logo-overlay {
  opacity: 1;
}

.visit-text {
  color: white;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  transform: translateY(20px);
  transition: transform 0.4s ease;
  font-size: 0.95rem;
}

.sponsor-card:hover .visit-text {
  transform: translateY(0);
}

/* Logo styling */
.sponsor-logo {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  transition: all 0.4s ease;
  filter: grayscale(20%);
}

.sponsor-card:hover .sponsor-logo {
  transform: scale(1.05);
  filter: grayscale(0%);
}

/* Premier partners get slightly larger logos */
.tier-0 .sponsor-logo-container {
  height: 220px;
}

/* Sponsor info */
.sponsor-info {
  padding: 1.75rem 2rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sponsor-name {
  font-weight: 700;
  color: #2d3748;
  font-size: 1.35rem;
  margin: 0 0 0.75rem;
}

.sponsor-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Sponsor showcase */
.sponsor-showcase {
  margin-bottom: 6rem;
  padding: 4rem 0;
  background: linear-gradient(to right, rgba(56, 94, 157, 0.03), rgba(242, 169, 0, 0.03));
  border-radius: 20px;
  overflow: hidden;
}

.showcase-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.showcase-text {
  padding: 0 2rem;
  text-align: center;
}

.showcase-title {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.showcase-description {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 2.5rem;
}

.showcase-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-gold, #F2A900);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

/* Logo cloud */
.logo-cloud {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.logo-cloud-tier {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.cloud-logo-container {
  padding: 1rem;
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 80px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.cloud-logo-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.cloud-logo {
  max-width: 85%;
  max-height: 85%;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.cloud-logo-container:hover .cloud-logo {
  filter: grayscale(0%);
  opacity: 1;
}

/* Call to action */
.sponsors-cta {
  background: linear-gradient(135deg, var(--color-blue-medium, #385E9D), #2a4577);
  border-radius: 20px;
  padding: 0;
  color: white;
  overflow: hidden;
  position: relative;
}

.sponsors-cta::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.2;
}

.cta-content {
  position: relative;
  z-index: 1;
  padding: 4rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cta-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-text {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 500px;
  margin: 0 auto 3rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
}

.benefit-icon {
  color: var(--color-gold, #F2A900);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: rgba(242, 169, 0, 0.15);
  border-radius: 50%;
  padding: 0.5rem;
}

.benefit-text {
  text-align: left;
}

.cta-actions {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2.25rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  cursor: pointer;
  border: none;
}

.cta-button.primary {
  background-color: var(--color-gold, #F2A900);
  color: #000;
  box-shadow: 0 8px 20px rgba(242, 169, 0, 0.25);
}

.cta-button.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(242, 169, 0, 0.35);
}

.cta-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-5px);
}

/* Animation for observed elements */
.observe-me {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.observe-me.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.empty-sponsors-message {
  text-align: center;
  padding: 3rem;
  color: #64748b;
  font-size: 1.1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}

@keyframes float-slow {
  0% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
  100% { transform: translate(30px, -30px); }
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .showcase-content {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  
  .showcase-text {
    flex: 1;
    text-align: left;
    padding-left: 3rem;
  }
  
  .logo-cloud {
    flex: 1;
  }
  
  .showcase-stats {
    justify-content: flex-start;
  }
  
  .showcase-description {
    margin: 0 0 2.5rem;
  }
}

@media (max-width: 768px) {
  .sponsors-section {
    padding: 5rem 1.25rem;
  }
  
  .sponsors-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .sponsor-logo-container {
    height: 180px;
    padding: 1.75rem;
  }
  
  .tier-0 .sponsor-logo-container {
    height: 200px;
  }
  
  .cta-content {
    padding: 3rem 2rem;
  }
  
  .tier-content {
    margin-bottom: 4rem;
  }
  
  .sponsor-showcase {
    margin-bottom: 4rem;
  }
}

@media (max-width: 640px) {
  .sponsors-grid {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
  
  .cta-content {
    padding: 2.5rem 1.5rem;
  }
  
  .benefit-item {
    font-size: 1rem;
  }
  
  .tier-tabs {
    flex-direction: column;
    gap: 0.75rem;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .tier-tab {
    width: 100%;
  }
  
  .cloud-logo-container {
    width: 100px;
    height: 70px;
  }
  
  .sponsor-card .sponsor-info {
    padding: 1.5rem;
  }
}

/* Accessibility: reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  .sponsors-container,
  .sponsor-card,
  .sponsor-logo,
  .cta-button,
  .observe-me,
  .accent-shape,
  .cloud-logo-container,
  .cloud-logo,
  .visit-text {
    transition: none;
    animation: none;
    transform: none;
  }
  
  .sponsors-container,
  .observe-me {
    opacity: 1;
  }
  
  .sponsor-card {
    opacity: 1;
  }
}
</style>