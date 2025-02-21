<template>
  <section id="about" class="about-section" aria-labelledby="about-title">
    <div class="about-content">
      <!-- Left Column: Text and Stats -->
      <div class="about-left">
        <div class="about-text">
          <h2 id="about-title" class="about-title">About UMATT</h2>
          <p class="about-description">
            UMATT is a multidisciplinary student design team at the University of Manitoba
            dedicated to building a quarter-scale tractor for an annual engineering competition.
          </p>
          <div class="about-stats">
            <div class="stat-item">
              <i class="pi pi-users stat-icon"></i>
              <span>Diverse Team</span>
            </div>
            <div class="stat-item">
              <i class="pi pi-lightbulb stat-icon"></i>
              <span>Innovation</span>
            </div>
            <div class="stat-item">
              <i class="pi pi-book stat-icon"></i>
              <span>Learning</span>
            </div>
            <div class="stat-item">
              <i class="pi pi-star stat-icon"></i>
              <span>Achievement</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Right Column: Image -->
      <div class="about-right">
        <img
          loading="lazy"
          src="@/assets/images/competition-team-photo-2024.jpg"
          alt="UMATT team working on their quarter-scale tractor"
          class="about-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic for this component
</script>

<style scoped>
/* Base styling for AboutSection */
.about-section {
  padding: 80px 40px 36px;
  background: var(--background-white);
  width: 100%;
  box-sizing: border-box;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.about-left {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-right {
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-title {
  font-size: 2.5rem; /* Approx equivalent to text-4xl */
  font-weight: bold;
  margin-bottom: 12px;
  color: var(--black);
}

.about-description {
  font-size: 1.125rem; /* Approx equivalent to text-lg */
  line-height: 1.5;
  margin-bottom: 36px;
  color: var(--black);
}

/* Stats: Set up as a 2x2 grid */
.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: var(--black);
}

.stat-icon {
  font-size: 1.5rem;
  color: var(--umatt-c-medium-blue);
}


/* Image */
.about-image {
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  .about-section {
    padding: 40px 20px;
  }
}
</style>