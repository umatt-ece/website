<script setup>
const socials = [
  {
    name: 'Facebook',
    description: 'Stay updated with our latest builds, competition results, and team events.',
    icon: 'facebook',
    color: '#1877F2',
    link: '#'
  },
  {
    name: 'Instagram',
    description: 'Behind-the-scenes photos, team culture, and workshop action @umatt_team.',
    icon: 'instagram',
    color: '#E4405F',
    link: '#'
  },
  {
    name: 'LinkedIn',
    description: 'Connect with alumni, read testimonials, and explore career opportunities.',
    icon: 'linkedin',
    color: '#0A66C2',
    link: '#'
  }
]

const testimonials = [
  {
    name: 'John Smith',
    role: 'Mechanical Engineer, Class of 2020',
    quote: 'UMATT gave me the practical skills and confidence that set me apart in my career. The teamwork and problem-solving experience is invaluable.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Electrical Engineer, Class of 2019',
    quote: 'Being part of UMATT was the highlight of my university experience. I learned more in one year with the team than in any classroom.'
  }
]
</script>

<template>
  <section class="community-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Connect With Us</span>
        <h2 class="section-title">In the <span class="highlight">Community</span></h2>
        <p class="section-subtitle">Follow our journey and connect with us</p>
      </div>
      
      <div class="socials-grid">
        <a 
          v-for="(social, index) in socials" 
          :key="index" 
          :href="social.link"
          class="social-card"
        >
          <div class="social-icon" :style="{ background: social.color }">
            <svg v-if="social.icon === 'facebook'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <svg v-else-if="social.icon === 'instagram'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
          <h3 class="social-name">{{ social.name }}</h3>
          <p class="social-description">{{ social.description }}</p>
          <span class="social-link">
            Visit
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </span>
        </a>
      </div>
      
      <div class="testimonials-section">
        <h3 class="testimonials-title">Alumni Testimonials</h3>
        <div class="testimonials-grid">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index" 
            class="testimonial-card"
          >
            <div class="testimonial-avatar">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="testimonial-content">
              <div class="testimonial-header">
                <h4 class="testimonial-name">{{ testimonial.name }}</h4>
                <p class="testimonial-role">{{ testimonial.role }}</p>
              </div>
              <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.community-section {
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
}

.socials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.social-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid var(--border-light);
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
}

.social-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.social-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
}

.social-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.social-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-blue-medium);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.social-card:hover .social-link {
  gap: 0.75rem;
}

.testimonials-section {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.testimonials-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 2.5rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  display: flex;
  gap: 1.25rem;
  background: var(--bg-secondary);
  border-radius: 14px;
  padding: 1.5rem;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-blue-medium), var(--color-blue-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.testimonial-content {
  flex: 1;
}

.testimonial-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.testimonial-role {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  margin-bottom: 0.75rem;
}

.testimonial-quote {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  line-height: 1.6;
  font-style: italic;
}

@media (max-width: 768px) {
  .community-section {
    padding: 4rem 0;
  }
  
  .testimonials-section {
    padding: 2rem 1.5rem;
  }
  
  .testimonial-card {
    flex-direction: column;
    text-align: center;
  }
  
  .testimonial-avatar {
    margin: 0 auto;
  }
}
</style>
