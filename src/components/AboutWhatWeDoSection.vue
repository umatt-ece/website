<script setup>
const activities = [
  {
    icon: 'design',
    title: 'Design & Build',
    description: 'Design and build a fully functioning quarter-scale tractor for the ASABE 1/4 Scale Tractor Student Design Competition.',
    color: 'blue'
  },
  {
    icon: 'compete',
    title: 'Compete & Optimize',
    description: 'Optimize performance under competition rules including tractor pulls, maneuverability, and durability challenges.',
    color: 'gold'
  },
  {
    icon: 'integrate',
    title: 'Systems Integration',
    description: 'Integrate mechanical, electrical, and software systems into a cohesive, high-performance machine.',
    color: 'blue'
  },
  {
    icon: 'partner',
    title: 'Partner Collaboration',
    description: 'Collaborate with local partners and sponsors to bring cutting-edge technology to our designs.',
    color: 'gold'
  }
]
</script>

<template>
  <section class="what-we-do">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Our Work</span>
        <h2 class="section-title">What We <span class="highlight">Do</span></h2>
        <p class="section-subtitle">Transforming engineering theory into competitive reality</p>
      </div>
      
      <div class="activities-grid">
        <div 
          v-for="(activity, index) in activities" 
          :key="index" 
          class="activity-card"
          :class="activity.color"
        >
          <div class="activity-icon">
            <svg v-if="activity.icon === 'design'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z"/>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
              <path d="M2 2l7.586 7.586"/>
              <circle cx="11" cy="11" r="2"/>
            </svg>
            <svg v-else-if="activity.icon === 'compete'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
            <svg v-else-if="activity.icon === 'integrate'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <rect x="9" y="9" width="6" height="6"/>
              <path d="M9 1v3"/>
              <path d="M15 1v3"/>
              <path d="M9 20v3"/>
              <path d="M15 20v3"/>
              <path d="M20 9h3"/>
              <path d="M20 14h3"/>
              <path d="M1 9h3"/>
              <path d="M1 14h3"/>
            </svg>
            <svg v-else-if="activity.icon === 'partner'" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 6.1H3"/>
              <path d="M21 12.1H3"/>
              <path d="M15.1 18H3"/>
              <path d="m17 18 2 2 4-4"/>
            </svg>
          </div>
          <h3 class="activity-title">{{ activity.title }}</h3>
          <p class="activity-description">{{ activity.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.what-we-do {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-title .highlight {
  color: var(--color-gold);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-tertiary);
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.activity-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  text-align: center;
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.activity-card.blue {
  background: linear-gradient(135deg, rgba(56, 94, 157, 0.05) 0%, rgba(255, 255, 255, 1) 100%);
}

.activity-card.gold {
  background: linear-gradient(135deg, rgba(242, 169, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);
}

.activity-card.blue:hover {
  border-color: var(--color-blue-medium);
}

.activity-card.gold:hover {
  border-color: var(--color-gold);
}

.activity-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.activity-card.blue .activity-icon {
  background: var(--color-blue-medium);
  color: white;
}

.activity-card.gold .activity-icon {
  background: var(--color-gold);
  color: var(--color-brown);
}

.activity-card:hover .activity-icon {
  transform: scale(1.1);
}

.activity-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.activity-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .what-we-do {
    padding: 4rem 0;
  }
  
  .activities-grid {
    gap: 1.5rem;
  }
  
  .activity-card {
    padding: 2rem 1.5rem;
  }
}
</style>
