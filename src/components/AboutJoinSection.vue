<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="join-section">
    <div class="join-background">
      <div class="join-overlay"></div>
    </div>
    <div class="container">
      <div class="join-content">
        <div class="join-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <line x1="20" y1="8" x2="20" y2="14"/>
            <line x1="23" y1="11" x2="17" y2="11"/>
          </svg>
        </div>
        
        <h2 class="join-title">Become a <span class="highlight">Member</span></h2>
        <p class="join-subtitle">Open to all University of Manitoba students</p>
        <p class="join-description">
          Active ASABE membership required. Join us to gain hands-on engineering experience, 
          build your portfolio, and compete on the national stage.
        </p>
        
        <div class="join-actions">
          <RouterLink to="/join" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 2 11 13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Join the Team
          </RouterLink>
          <a href="mailto:umattinfo@gmail.com" class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Us
          </a>
        </div>
        
        <div class="info-box">
          <h3 class="info-title">Upcoming Info Sessions</h3>
          <p class="info-description">
            Learn more about UMATT, meet current members, and discover how you can 
            contribute to our next championship tractor.
          </p>
          <RouterLink to="/join" class="info-link">
            View Schedule
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.join-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.join-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #385E9D 0%, #2D4A7D 100%);
}

.join-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(242, 169, 0, 0.15) 0%, transparent 50%);
}

.container {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.join-content {
  text-align: center;
  color: white;
}

.join-icon {
  width: 80px;
  height: 80px;
  background: var(--color-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: var(--color-brown);
}

.join-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.join-title .highlight {
  color: var(--color-gold);
}

.join-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
}

.join-description {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.join-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
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
  color: var(--color-brown);
}

.btn-primary:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(242, 169, 0, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
}

.info-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.info-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.info-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-gold);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.info-link:hover {
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .join-section {
    padding: 4rem 0;
  }
  
  .join-actions {
    flex-direction: column;
    padding: 0 1rem;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .info-box {
    padding: 2rem 1.5rem;
  }
}
</style>
