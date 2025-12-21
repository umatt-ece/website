<script setup>
</script>

<template>
  <section class="mission-section">
    <div class="container">
      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      </div>
      
      <span class="section-label">Our Purpose</span>
      <h2 class="section-title">Our <span class="highlight">Mission</span></h2>
      
      <p class="mission-text">
        UMATT unites engineering, agriculture, computer science and business students to 
        design, fabricate, and compete with a quarter-scale tractor each year, focusing on 
        performance, manufacturability, serviceability, safety, ergonomics, and innovation.
      </p>
      
      <div class="quote-box">
        <svg class="quote-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
        </svg>
        <p class="quote-text">
          "Building tomorrow's agricultural innovation through hands-on engineering 
          excellence and interdisciplinary collaboration."
        </p>
        <span class="quote-author">— UMATT Team Leadership</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-icon {
  width: 64px;
  height: 64px;
  background: var(--color-blue-medium);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
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
  margin-bottom: 2rem;
}

.section-title .highlight {
  color: var(--color-gold);
}

.mission-text {
  font-size: 1.15rem;
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: 3rem;
}

.quote-box {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2.5rem;
  border-left: 4px solid var(--color-gold);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.quote-icon {
  color: var(--color-gold);
  margin-bottom: 1rem;
}

.quote-text {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  font-style: italic;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.quote-author {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-blue-medium);
}

@media (max-width: 768px) {
  .mission-section {
    padding: 4rem 0;
  }
  
  .quote-box {
    padding: 2rem 1.5rem;
  }
}
</style>
