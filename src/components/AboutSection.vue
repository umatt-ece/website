<script setup>
import teamPhoto from '@/assets/images/competition-team-photo-2025.jpg';
</script>

<template>
  <section id="about" class="about-section" aria-labelledby="about-heading">
    <!-- Background decoration elements -->
    <div class="bg-decoration bg-circle-1"></div>
    <div class="bg-decoration bg-circle-2"></div>
    <div class="bg-decoration bg-pattern"></div>
    
    <div class="container">
      <!-- Section header (now centralized) -->
      <header class="section-header">
        <h2 id="about-heading" class="section-heading">
          About <span class="highlight">UMATT</span>
        </h2>
        <div class="heading-underline"></div>
      </header>
      
      <div class="about-content">
        <!-- Left Column: Image with enhanced presentation -->
        <div class="about-image-column">
          <div class="image-frame">
            <div class="image-container">
              <img
                :src="teamPhoto"
                alt="UMATT team working on their quarter-scale tractor"
                class="about-image"
              />
              <div class="image-overlay">
                <div class="image-badge">
                  <span class="badge-text">Competition 2025</span>
                </div>
              </div>
            </div>
            <div class="image-accent top-right"></div>
            <div class="image-accent bottom-left"></div>
          </div>
        </div>
        
        <!-- Right Column: Text and Stats -->
        <div class="about-text-column">
          <p class="about-description">
            UMATT is a multidisciplinary student design team at the University of Manitoba
            dedicated to building a quarter-scale tractor for an annual engineering competition.
            Our team combines knowledge from engineering, agriculture, and business to create
            innovative solutions.
          </p>
          
          <h3 class="stats-heading">Why Join UMATT?</h3>
          
          <!-- Redesigned stat cards with counter animation -->
          <div class="about-stats">
            <!-- Stat Card 1 -->
            <div class="stat-card" tabindex="0">
              <div class="stat-icon-wrapper">
                <i class="pi pi-users stat-icon" aria-hidden="true"></i>
              </div>
              <div class="stat-details">
                <h4 class="stat-title">Diverse Team</h4>
                <p class="stat-desc">Students from multiple disciplines</p>
              </div>
              <div class="stat-hover-indicator"></div>
            </div>
            
            <!-- Stat Card 2 -->
            <div class="stat-card" tabindex="0">
              <div class="stat-icon-wrapper">
                <i class="pi pi-lightbulb stat-icon" aria-hidden="true"></i>
              </div>
              <div class="stat-details">
                <h4 class="stat-title">Innovation</h4>
                <p class="stat-desc">Cutting-edge design solutions</p>
              </div>
              <div class="stat-hover-indicator"></div>
            </div>
            
            <!-- Stat Card 3 -->
            <div class="stat-card" tabindex="0">
              <div class="stat-icon-wrapper">
                <i class="pi pi-book stat-icon" aria-hidden="true"></i>
              </div>
              <div class="stat-details">
                <h4 class="stat-title">Learning</h4>
                <p class="stat-desc">Hands-on practical experience</p>
              </div>
              <div class="stat-hover-indicator"></div>
            </div>
            
            <!-- Stat Card 4 -->
            <div class="stat-card" tabindex="0">
              <div class="stat-icon-wrapper">
                <i class="pi pi-star stat-icon" aria-hidden="true"></i>
              </div>
              <div class="stat-details">
                <h4 class="stat-title">Achievement</h4>
                <p class="stat-desc">Proven competition success</p>
              </div>
              <div class="stat-hover-indicator"></div>
            </div>
          </div>
          
          <!-- CTA Button -->
          <div class="about-cta">
            <router-link to="/join" class="cta-button">Join Our Team</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style scoped>
/* Main section styling */
.about-section {
  padding: 6rem 1.5rem;
  background: var(--background-white, #ffffff);
  position: relative;
  overflow: hidden;
}

/* Background decorations */
.bg-decoration {
  position: absolute;
  z-index: 0;
  pointer-events: none;
}

.bg-circle-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(242, 169, 0, 0.05) 0%, rgba(242, 169, 0, 0) 70%);
  border-radius: 50%;
  top: -50px;
  right: -100px;
}

.bg-circle-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(56, 94, 157, 0.04) 0%, rgba(56, 94, 157, 0) 70%);
  border-radius: 50%;
  bottom: -150px;
  left: -100px;
}

.bg-pattern {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23385E9D' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Section header - new centralized style */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-heading {
  font-size: 3rem;
  font-weight: 800;
  color: var(--black, #000000);
  line-height: 1.1;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
  position: relative;
}

.highlight {
  color: var(--umatt-c-medium-blue, #385E9D);
  position: relative;
}

.heading-underline {
  width: 80px;
  height: 4px;
  background-color: var(--umatt-c-gold);
  border-radius: 2px;
  margin: 0 auto;
}

@keyframes underlineGlow {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

/* Content grid - switched order for visual interest */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Text Column styling */
.about-text-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-description {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: #333;
  max-width: 600px;
}

/* Stats heading */
.stats-heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--umatt-c-medium-blue, #385E9D);
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1rem;
  border-left: 3px solid var(--umatt-c-gold, #F2A900);
}

/* Enhanced Stats Section */
.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

/* Stat Card - completely redesigned */
.stat-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: pointer;
}

.stat-card:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(56, 94, 157, 0.3);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.08);
}

.stat-hover-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0%;
  background: var(--umatt-c-gold, #F2A900);
  transition: height 0.3s ease;
}

.stat-card:hover .stat-hover-indicator {
  height: 100%;
}

/* Icon wrapper - enhanced */
.stat-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, var(--umatt-c-medium-blue, #385E9D), #2c4a7d);
  border-radius: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;
  box-shadow: 0 6px 12px rgba(56, 94, 157, 0.15);
}

.stat-card:hover .stat-icon-wrapper {
  transform: scale(1.1);
  background: linear-gradient(135deg, var(--umatt-c-gold, #F2A900), #d99600);
}

.stat-icon {
  font-size: 1.35rem;
  color: white;
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1);
}

/* Stat details */
.stat-details {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 0.5rem;
}

.stat-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 0.4rem 0;
  color: var(--black, #000000);
}

.stat-desc {
  font-size: 0.9rem;
  color: #555;
  margin: 0;
  line-height: 1.5;
}

/* CTA Button - new addition */
.about-cta {
  margin-top: 1rem;
}

.cta-button {
  display: inline-block;
  background: var(--umatt-c-medium-blue, #385E9D);
  color: white;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 6px 15px rgba(56, 94, 157, 0.25);
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  background: var(--umatt-c-gold, #F2A900);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(242, 169, 0, 0.3);
}

/* Enhanced Image Column */
.about-image-column {
  position: relative;
}

.image-frame {
  position: relative;
  padding: 15px;
}

/* Image accent corners */
.image-accent {
  position: absolute;
  width: 40px;
  height: 40px;
}

.top-right {
  top: 0;
  right: 0;
  border-top: 4px solid var(--umatt-c-gold, #F2A900);
  border-right: 4px solid var(--umatt-c-gold, #F2A900);
}

.bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 4px solid var(--umatt-c-medium-blue, #385E9D);
  border-left: 4px solid var(--umatt-c-medium-blue, #385E9D);
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.image-container:hover {
  transform: scale(1.02) rotate(1deg);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4/3;
  transition: transform 0.5s ease;
}

.image-container:hover .about-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2) 50%, transparent);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.image-badge {
  position: relative;
  background: var(--umatt-c-gold, #F2A900);
  color: black;
  font-weight: 700;
  padding: 0.6rem 1.25rem;
  border-radius: 30px;
  font-size: 0.95rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin-bottom: -8px;
}

.image-container:hover .image-badge {
  transform: translateY(-5px);
}

/* Responsive Adjustments - improved responsive behavior */
@media (max-width: 1200px) {
  .about-section {
    padding: 5rem 2rem;
  }
  
  .section-heading {
    font-size: 2.75rem;
  }
  
  .about-content {
    gap: 3rem;
  }
}

@media (max-width: 1024px) {
  .section-heading {
    font-size: 2.5rem;
  }
  
  .about-stats {
    gap: 1.25rem;
  }
  
  .stat-card {
    padding: 1.1rem 1.25rem;
  }
  
  .image-accent {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
  
  .about-image-column {
    order: 1;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .about-text-column {
    order: 2;
  }
  
  .about-description {
    max-width: 100%;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1.5rem;
  }
  
  .section-heading {
    font-size: 2.25rem;
  }
  
  .stats-heading {
    font-size: 1.35rem;
  }
}

@media (max-width: 640px) {
  .about-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1rem 1.25rem;
  }
  
  .stat-icon-wrapper {
    width: 46px;
    height: 46px;
  }
  
  .stat-title {
    font-size: 1.05rem;
  }
  
  .section-heading {
    font-size: 2rem;
  }
  
  .about-description {
    font-size: 1rem;
    line-height: 1.7;
  }
  
  .cta-button {
    width: 100%;
    text-align: center;
    padding: 0.8rem 1rem;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 3.5rem 1.25rem;
  }
  
  .image-frame {
    padding: 10px;
  }
  
  .section-heading {
    font-size: 1.85rem;
  }
  
  .section-header {
    margin-bottom: 2.5rem;
  }
  
  .stats-heading {
    font-size: 1.25rem;
  }
}
</style>