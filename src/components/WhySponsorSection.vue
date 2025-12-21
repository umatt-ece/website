<script setup>
const benefits = [
  {
    icon: 'visibility',
    title: 'Brand Visibility',
    description:
      'Showcase your brand to future engineers, industry professionals, and academic institutions across North America at competitions and events.'
  },
  {
    icon: 'talent',
    title: 'Talent Pipeline',
    description:
      'Connect directly with skilled engineering students who demonstrate practical problem-solving abilities and hands-on technical expertise.'
  },
  {
    icon: 'innovation',
    title: 'Innovation Access',
    description:
      'Gain insights through direct interaction with cutting-edge designs and solutions from emerging engineers in agricultural technology.'
  },
  {
    icon: 'community',
    title: 'Community Impact',
    description:
      'Support practical education and help develop the next generation of skilled professionals who will shape the future of agriculture.'
  }
]
</script>

<template>
  <section class="why-sponsor">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Why Partner With Us</span>
        <h2 class="section-title">Benefits of <span class="highlight">Sponsorship</span></h2>
        <p class="section-subtitle">
          Join a network of industry leaders supporting innovation in agricultural engineering
        </p>
      </div>

      <div class="benefits-grid">
        <div v-for="(benefit, index) in benefits" :key="index" class="benefit-card">
          <div class="benefit-icon">
            <svg
              v-if="benefit.icon === 'visibility'"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <svg
              v-else-if="benefit.icon === 'talent'"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <svg
              v-else-if="benefit.icon === 'innovation'"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
            <svg
              v-else-if="benefit.icon === 'community'"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-description">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-sponsor {
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
  margin-bottom: 1rem;
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
  max-width: 600px;
  margin: 0 auto;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  text-align: center;
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-gold);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(56, 94, 157, 0.1), rgba(56, 94, 157, 0.05));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--color-blue-medium);
  transition: all 0.3s ease;
}

.benefit-card:hover .benefit-icon {
  background: var(--color-blue-medium);
  color: white;
  transform: scale(1.1);
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.benefit-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .why-sponsor {
    padding: 4rem 0;
  }

  .benefits-grid {
    gap: 1.5rem;
  }

  .benefit-card {
    padding: 2rem 1.5rem;
  }
}
</style>
