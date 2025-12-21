<script setup>
const competitionDetails = {
  name: 'International Quarter Scale Tractor Student Design Competition',
  location: 'Peoria, Illinois',
  organizer: 'ASABE',
  teams: '20-30 Universities'
}
</script>

<template>
  <section class="competition-info">
    <div class="container">
      <div class="content-wrapper">
        <div class="image-side">
          <div class="image-container">
            <img
              src="@/assets/images/competition-team-photo-2024.jpg"
              alt="UMATT team at competition"
              loading="lazy"
            />
            <div class="image-overlay">
              <span class="image-caption">2024 Competition Team</span>
            </div>
          </div>
          <div class="floating-card">
            <div class="card-icon">🏆</div>
            <div class="card-text">
              <strong>1st Place Overall</strong>
              <span>2021 Competition</span>
            </div>
          </div>
        </div>

        <div class="text-side">
          <span class="section-label">The Competition</span>
          <h2 class="section-title">Where Your <span class="highlight">Brand</span> Competes</h2>

          <p class="section-description">
            The ASABE Quarter Scale Tractor Competition challenges university teams to design,
            build, and present a quarter-scale tractor. Teams are evaluated on design innovation,
            performance testing, maneuverability, and engineering practices.
          </p>

          <div class="details-grid">
            <div class="detail-item">
              <div class="detail-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div class="detail-content">
                <span class="detail-label">Location</span>
                <span class="detail-value">{{ competitionDetails.location }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div class="detail-content">
                <span class="detail-label">Participants</span>
                <span class="detail-value">{{ competitionDetails.teams }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div class="detail-content">
                <span class="detail-label">Organized By</span>
                <span class="detail-value">{{ competitionDetails.organizer }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>
              </div>
              <div class="detail-content">
                <span class="detail-label">Event</span>
                <span class="detail-value">Annual Competition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.competition-info {
  padding: 6rem 0;
  background: var(--bg-primary);
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.image-side {
  position: relative;
}

.image-container {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  position: relative;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 1.5rem 1.5rem;
}

.image-caption {
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

.floating-card {
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  background: var(--card-bg);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--border-light);
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  display: flex;
  flex-direction: column;
}

.card-text strong {
  font-size: 0.95rem;
  color: var(--text-primary);
}

.card-text span {
  font-size: 0.8rem;
  color: var(--text-tertiary);
}

.text-side {
  padding-left: 1rem;
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
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-title .highlight {
  color: var(--color-gold);
}

.section-description {
  font-size: 1rem;
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.detail-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.detail-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--color-blue-medium), #2c4a7d);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.detail-content {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  margin-bottom: 0.25rem;
}

.detail-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .text-side {
    padding-left: 0;
  }

  .floating-card {
    right: 1rem;
    bottom: -1rem;
  }
}

@media (max-width: 576px) {
  .competition-info {
    padding: 4rem 0;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .floating-card {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 1rem;
  }
}
</style>
