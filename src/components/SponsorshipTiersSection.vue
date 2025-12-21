<script setup>
const tiers = [
  {
    name: 'Premier Partner',
    price: '$5,000+',
    featured: true,
    color: '#F2A900',
    benefits: [
      'Prominent logo on tractor',
      'Large logo on team apparel',
      'Recognition in all presentations',
      'Social media highlights',
      'Featured in competition materials',
      'Team engagement opportunities',
      'Exclusive recruiting access',
      'Tractor demonstration opportunity'
    ]
  },
  {
    name: 'Gold Supporter',
    price: '$2,500 - $4,999',
    featured: false,
    color: '#D4AF37',
    benefits: [
      'Logo placement on tractor',
      'Logo on team apparel',
      'Recognition in presentations',
      'Social media recognition',
      'Featured in competition materials',
      'Team engagement opportunities'
    ]
  },
  {
    name: 'Silver Supporter',
    price: '$1,000 - $2,499',
    featured: false,
    color: '#A8A8A8',
    benefits: [
      'Logo placement on tractor',
      'Logo on team apparel',
      'Recognition in presentations',
      'Social media recognition'
    ]
  },
  {
    name: 'Bronze Supporter',
    price: '$500 - $999',
    featured: false,
    color: '#CD7F32',
    benefits: ['Logo placement on tractor', 'Logo on team apparel', 'Social media recognition']
  }
]
</script>

<template>
  <section id="sponsorship-tiers" class="sponsorship-tiers">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Investment Levels</span>
        <h2 class="section-title">Sponsorship <span class="highlight">Packages</span></h2>
        <p class="section-subtitle">
          Choose the partnership level that aligns with your organization's goals
        </p>
      </div>

      <div class="tiers-grid">
        <div
          v-for="(tier, index) in tiers"
          :key="index"
          class="tier-card"
          :class="{ featured: tier.featured }"
        >
          <div class="tier-accent" :style="{ background: tier.color }"></div>
          <div v-if="tier.featured" class="featured-badge">Most Popular</div>

          <div class="tier-header">
            <h3 class="tier-name">{{ tier.name }}</h3>
            <div class="tier-price">{{ tier.price }}</div>
          </div>

          <ul class="tier-benefits">
            <li v-for="(benefit, i) in tier.benefits" :key="i">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{{ benefit }}</span>
            </li>
          </ul>

          <a href="#contact-section" class="tier-button" :class="{ primary: tier.featured }">
            Become a Sponsor
          </a>
        </div>
      </div>

      <div class="custom-support">
        <div class="custom-card">
          <div class="custom-icon">
            <svg
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
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <div class="custom-content">
            <h4>In-Kind Donations Welcome</h4>
            <p>
              We also accept materials, equipment, manufacturing services, and technical expertise.
              These contributions are valued at market rate when determining sponsorship tier.
            </p>
          </div>
          <a href="#contact-section" class="custom-button">Discuss Options</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sponsorship-tiers {
  padding: 6rem 0;
  background: var(--bg-secondary);
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

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.tier-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.tier-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.tier-card.featured {
  border-color: var(--color-gold);
  box-shadow: 0 10px 40px rgba(242, 169, 0, 0.15);
}

.tier-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--color-gold);
  color: var(--color-black);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  text-transform: uppercase;
}

.tier-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
}

.tier-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.tier-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-blue-medium);
}

.tier-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
}

.tier-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.6rem 0;
  font-size: 0.9rem;
  color: var(--text-tertiary);
  border-bottom: 1px solid var(--border-light);
}

.tier-benefits li:last-child {
  border-bottom: none;
}

.tier-benefits li svg {
  color: var(--color-gold);
  flex-shrink: 0;
  margin-top: 2px;
}

.tier-button {
  display: block;
  text-align: center;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border-medium);
}

.tier-button:hover {
  background: var(--color-blue-medium);
  color: white;
  border-color: var(--color-blue-medium);
}

.tier-button.primary {
  background: var(--color-gold);
  color: var(--color-black);
  border-color: var(--color-gold);
}

.tier-button.primary:hover {
  background: var(--color-gold-dark);
  border-color: var(--color-gold-dark);
}

.custom-support {
  margin-top: 2rem;
}

.custom-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 2px dashed var(--border-medium);
  flex-wrap: wrap;
}

.custom-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(56, 94, 157, 0.1), rgba(56, 94, 157, 0.05));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-blue-medium);
  flex-shrink: 0;
}

.custom-content {
  flex: 1;
  min-width: 250px;
}

.custom-content h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.custom-content p {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.6;
}

.custom-button {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--color-blue-medium);
  border: 2px solid var(--color-blue-medium);
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.custom-button:hover {
  background: var(--color-blue-medium);
  color: white;
}

@media (max-width: 768px) {
  .sponsorship-tiers {
    padding: 4rem 0;
  }

  .custom-card {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .custom-button {
    width: 100%;
  }
}
</style>
