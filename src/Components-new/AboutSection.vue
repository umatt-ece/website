<template>
  <section id="about" class="about-section" aria-labelledby="about-heading">
    <div class="container">
      <div class="about-content">
        <!-- Left Column: Text and Stats -->
        <div class="about-text-column">
          <header class="about-header">
            <h2 id="about-heading" class="section-heading">About <span class="highlight">UMATT</span></h2>
            <div class="heading-underline"></div>
          </header>
          
          <p class="about-description">
            UMATT is a multidisciplinary student design team at the University of Manitoba
            dedicated to building a quarter-scale tractor for an annual engineering competition.
            Our team combines knowledge from engineering, agriculture, and business to create
            innovative solutions.
          </p>
          
          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <i class="pi pi-users stat-icon"></i>
              </div>
              <div class="stat-details">
                <h3 class="stat-title">Diverse Team</h3>
                <p class="stat-desc">Students from multiple disciplines</p>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <i class="pi pi-lightbulb stat-icon"></i>
              </div>
              <div class="stat-details">
                <h3 class="stat-title">Innovation</h3>
                <p class="stat-desc">Cutting-edge design solutions</p>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <i class="pi pi-book stat-icon"></i>
              </div>
              <div class="stat-details">
                <h3 class="stat-title">Learning</h3>
                <p class="stat-desc">Hands-on practical experience</p>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <i class="pi pi-star stat-icon"></i>
              </div>
              <div class="stat-details">
                <h3 class="stat-title">Achievement</h3>
                <p class="stat-desc">Proven competition success</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column: Image -->
        <div class="about-image-column">
          <div class="image-container">
            <img
              loading="lazy"
              src="@/assets/images/competition-team-photo-2024.jpg"
              alt="UMATT team working on their quarter-scale tractor"
              class="about-image"
            />
            <div class="image-overlay">
              <div class="image-badge">Est. 2010</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic for this component
</script>

<style scoped>
.about-section {
  padding: 5rem 1.5rem;
  background: var(--background-white, #ffffff);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

/* Text Column */
.about-text-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-header {
  margin-bottom: 1.5rem;
  position: relative;
}

.section-heading {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--black, #000000);
  line-height: 1.2;
  position: relative;
  margin-bottom: 0.75rem;
}

.highlight {
  color: var(--umatt-c-medium-blue, #385E9D);
}

.heading-underline {
  width: 80px;
  height: 4px;
  background: var(--umatt-c-gold, #F2A900);
  border-radius: 2px;
}

.about-description {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: #333;
  max-width: 600px;
}

/* Stats Section */
.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-card {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  background: rgba(242, 169, 0, 0.05);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.stat-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--umatt-c-medium-blue, #385E9D);
  border-radius: 50%;
  flex-shrink: 0;
}

.stat-icon {
  font-size: 1.25rem;
  color: white;
}

.stat-details {
  display: flex;
  flex-direction: column;
}

.stat-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: var(--black, #000000);
}

.stat-desc {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

/* Image Column */
.about-image-column {
  position: relative;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: scale(1.02);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4/3;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.image-badge {
  background: var(--umatt-c-gold, #F2A900);
  color: var(--black, #000000);
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .about-content {
    gap: 2rem;
  }
  
  .section-heading {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1.25rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-text-column {
    order: 2;
  }
  
  .about-image-column {
    order: 1;
  }
  
  .about-description {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .about-section {
    padding: 3rem 1rem;
  }
  
  .section-heading {
    font-size: 2rem;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-card {
    padding: 0.75rem;
  }
  
  .stat-icon-wrapper {
    width: 40px;
    height: 40px;
  }
}
</style>