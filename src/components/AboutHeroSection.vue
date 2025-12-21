<script setup>
</script>

<template>
  <section class="about-hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="content-grid">
        <div class="text-content">
          <div class="hero-badge">
            <span>🎓 Manitoba Engineering Society Member</span>
          </div>
          <h1 class="hero-title">About <span class="highlight">UMATT</span></h1>
          <h2 class="hero-subtitle">University of Manitoba Association of Tiny Tractors</h2>
          <p class="hero-description">
            A multidisciplinary student design team building quarter-scale tractors 
            for the annual ASABE international competition.
          </p>
        </div>
        <div class="image-content">
          <div class="hero-image">
            <img 
              src="@/assets/images/competition-team-photo-2024.jpg" 
              alt="UMATT Team working on tractor"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #385E9D 0%, #2D4A7D 100%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(242, 169, 0, 0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-content {
  color: white;
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
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.1;
}

.hero-title .highlight {
  color: var(--color-gold);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  max-width: 500px;
}

.image-content {
  display: flex;
  justify-content: center;
}

.hero-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .hero-description {
    margin: 0 auto;
  }
  
  .hero-image {
    max-width: 400px;
  }
}

@media (max-width: 576px) {
  .about-hero {
    min-height: auto;
  }
  
  .hero-content {
    padding: 5rem 1.5rem 3rem;
  }
}
</style>
