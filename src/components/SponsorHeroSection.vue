<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="sponsor-hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge">
        <span>🏆 Award-Winning Team</span>
      </div>
      <h1 class="hero-title">Partner with <span class="highlight">Innovation</span></h1>
      <p class="hero-description">
        Support the next generation of agricultural engineers and gain visibility with future
        industry leaders at the University of Manitoba.
      </p>
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-number">20+</span>
          <span class="stat-label">Universities Compete</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">1st</span>
          <span class="stat-label">Place 2021</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">100+</span>
          <span class="stat-label">Students Trained</span>
        </div>
      </div>
      <div class="hero-actions">
        <a href="#sponsorship-tiers" class="btn btn-primary">
          View Packages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
        <a href="#contact-section" class="btn btn-secondary"> Get In Touch </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sponsor-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/competition-group-photo-2024.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(56, 94, 157, 0.95) 0%,
    rgba(44, 74, 125, 0.9) 50%,
    rgba(32, 54, 93, 0.95) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 900px;
}

.hero-badge {
  display: inline-block;
  background: rgba(242, 169, 0, 0.2);
  border: 1px solid var(--color-gold);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-gold);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-title .highlight {
  color: var(--color-gold);
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.9);
  max-width: 650px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-gold);
  color: var(--color-black);
}

.btn-primary:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(242, 169, 0, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text-light);
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--text-light);
}

@media (max-width: 768px) {
  .sponsor-hero {
    min-height: 100vh;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
