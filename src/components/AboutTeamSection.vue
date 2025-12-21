<script setup>
const roles = [
  {
    title: 'Lead Design',
    description: 'Oversees design strategy and CAD modeling',
    color: 'blue'
  },
  {
    title: 'Electrical',
    description: 'Manages wiring and electronic systems',
    color: 'gold'
  },
  {
    title: 'Mechanical',
    description: 'Handles drivetrain and structural components',
    color: 'blue'
  },
  {
    title: 'Fabrication',
    description: 'Builds and assembles physical components',
    color: 'gold'
  }
]
</script>

<template>
  <section class="team-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Our People</span>
        <h2 class="section-title">Team & <span class="highlight">Culture</span></h2>
        <p class="section-subtitle">
          A collaborative environment where students from diverse backgrounds come 
          together to learn, innovate, and build lasting friendships.
        </p>
      </div>
      
      <div class="quote-banner">
        <svg class="quote-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
        </svg>
        <p class="quote-text">
          "Working with UMATT has been transformative. The hands-on experience, 
          mentorship, and collaborative spirit have prepared me for real-world 
          engineering challenges in ways the classroom never could."
        </p>
        <span class="quote-author">— Current Team Member</span>
      </div>
      
      <div class="roles-grid">
        <div 
          v-for="(role, index) in roles" 
          :key="index" 
          class="role-card"
          :class="role.color"
        >
          <div class="role-icon">
            <svg v-if="role.title === 'Lead Design'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <svg v-else-if="role.title === 'Electrical'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <svg v-else-if="role.title === 'Mechanical'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          <h3 class="role-title">{{ role.title }}</h3>
          <p class="role-description">{{ role.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
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
  margin-bottom: 3rem;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.quote-banner {
  background: linear-gradient(135deg, rgba(56, 94, 157, 0.08) 0%, rgba(242, 169, 0, 0.08) 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 4rem;
}

.quote-icon {
  color: var(--color-gold);
  margin-bottom: 1.5rem;
}

.quote-text {
  font-size: 1.25rem;
  color: var(--text-primary);
  font-style: italic;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 1.5rem;
}

.quote-author {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-tertiary);
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.role-card {
  background: var(--card-bg);
  border-radius: 14px;
  padding: 2rem 1.5rem;
  text-align: center;
  border: 2px solid var(--border-light);
  transition: all 0.3s ease;
}

.role-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.role-card.blue {
  border-color: var(--color-blue-medium);
}

.role-card.gold {
  border-color: var(--color-gold);
}

.role-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.role-card.blue .role-icon {
  background: rgba(56, 94, 157, 0.1);
  color: var(--color-blue-medium);
}

.role-card.gold .role-icon {
  background: rgba(242, 169, 0, 0.15);
  color: var(--color-gold-dark);
}

.role-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.role-description {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .team-section {
    padding: 4rem 0;
  }
  
  .quote-banner {
    padding: 2rem 1.5rem;
  }
  
  .quote-text {
    font-size: 1.1rem;
  }
}
</style>
