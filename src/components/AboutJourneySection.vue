<script setup>
const milestones = [
  {
    title: 'Founded',
    year: '2005',
    description: 'Established by passionate University of Manitoba students across multiple disciplines with a vision to compete at the highest level.',
    color: 'blue'
  },
  {
    title: '1st Place Victory',
    year: '2021',
    description: 'First place in IQS subcategories at the ASABE Competition, showcasing excellence in innovation, quality, and safety.',
    color: 'gold'
  },
  {
    title: 'Continuous Growth',
    year: '2019–Present',
    description: 'Continuous innovation and competition participation, building stronger tractors and fostering the next generation of engineers.',
    color: 'blue'
  }
]
</script>

<template>
  <section class="journey-section">
    <div class="container">
      <div class="section-header">
        <div class="section-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <span class="section-label">Our History</span>
        <h2 class="section-title">Our <span class="highlight">Journey</span></h2>
        <p class="section-subtitle">Milestones and achievements that define our legacy</p>
      </div>
      
      <div class="timeline">
        <div 
          v-for="(milestone, index) in milestones" 
          :key="index" 
          class="timeline-item"
          :class="milestone.color"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-year">{{ milestone.year }}</span>
              <h3 class="timeline-title">{{ milestone.title }}</h3>
            </div>
            <p class="timeline-description">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-icon {
  width: 64px;
  height: 64px;
  background: var(--color-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--color-brown);
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

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--color-blue-medium), var(--color-gold));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -3rem;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid var(--card-bg);
  transform: translateX(-50%);
  margin-left: 1.5px;
}

.timeline-item.blue .timeline-marker {
  background: var(--color-blue-medium);
}

.timeline-item.gold .timeline-marker {
  background: var(--color-gold);
}

.timeline-content {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.timeline-item.blue .timeline-content {
  border-top: 4px solid var(--color-blue-medium);
}

.timeline-item.gold .timeline-content {
  border-top: 4px solid var(--color-gold);
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.timeline-year {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
}

.timeline-item.blue .timeline-year {
  background: rgba(56, 94, 157, 0.1);
  color: var(--color-blue-medium);
}

.timeline-item.gold .timeline-year {
  background: rgba(242, 169, 0, 0.15);
  color: var(--color-gold-dark);
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.timeline-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .journey-section {
    padding: 4rem 0;
  }
  
  .timeline {
    padding-left: 2.5rem;
  }
  
  .timeline-marker {
    left: -2.5rem;
    width: 16px;
    height: 16px;
  }
  
  .timeline-content {
    padding: 1.5rem;
  }
}
</style>
