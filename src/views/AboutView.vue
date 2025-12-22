<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// Stats for hero
const stats = [
  { number: '2005', label: 'Founded' },
  { number: '25+', label: 'Members' },
  { number: '15+', label: 'Competitions' }
]

// Core values
const values = [
  {
    icon: 'innovation',
    title: 'Innovation',
    description:
      'Pushing boundaries in agricultural technology through creative engineering solutions.',
    color: 'blue'
  },
  {
    icon: 'teamwork',
    title: 'Teamwork',
    description: 'Collaborating across disciplines to achieve goals impossible to reach alone.',
    color: 'gold'
  },
  {
    icon: 'excellence',
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we design and build.',
    color: 'blue'
  },
  {
    icon: 'learning',
    title: 'Learning',
    description: 'Growing through hands-on experience and continuous improvement.',
    color: 'gold'
  }
]

// What we do
const activities = [
  {
    icon: 'design',
    title: 'Design & Engineer',
    description:
      'Create innovative quarter-scale tractor designs using advanced CAD software and engineering principles.',
    color: 'blue'
  },
  {
    icon: 'build',
    title: 'Build & Fabricate',
    description:
      'Transform designs into reality through precision manufacturing and hands-on assembly.',
    color: 'gold'
  },
  {
    icon: 'compete',
    title: 'Compete & Win',
    description:
      'Represent University of Manitoba at the annual ASABE international tractor competition.',
    color: 'blue'
  },
  {
    icon: 'collaborate',
    title: 'Learn & Grow',
    description:
      'Develop professional skills through mentorship, teamwork, and real-world project experience.',
    color: 'gold'
  }
]

// Timeline milestones
const milestones = [
  {
    year: '2005',
    title: 'Team Founded',
    description:
      'UMATT was established by passionate University of Manitoba engineering students with a vision to compete at the highest level.',
    color: 'blue'
  },
  {
    year: '2021',
    title: '1st Place Victory',
    description:
      'Achieved first place in IQS subcategories at the ASABE Competition, showcasing excellence in innovation, quality, and safety.',
    color: 'gold'
  },
  {
    year: '2024',
    title: 'Continued Excellence',
    description:
      'Continuous innovation and competition participation, building stronger tractors and developing the next generation of engineers.',
    color: 'blue'
  }
]

// Departments
const departments = [
  { title: 'Design', description: 'CAD modeling & strategy', color: 'blue' },
  { title: 'Electrical', description: 'Wiring & electronics', color: 'gold' },
  { title: 'Mechanical', description: 'Drivetrain & structure', color: 'blue' },
  { title: 'Fabrication', description: 'Manufacturing & assembly', color: 'gold' }
]

// Animation observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-background">
        <div class="hero-image-bg"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span>🎓 Manitoba Engineering Society Member</span>
        </div>
        <h1 class="hero-title">About <span class="highlight">UMATT</span></h1>
        <h2 class="hero-subtitle">University of Manitoba Association of Tiny Tractors</h2>
        <p class="hero-description">
          A multidisciplinary student design team uniting engineering, agriculture, and business
          students to design, fabricate, and compete with quarter-scale tractors at the annual ASABE
          international competition.
        </p>
        <div class="hero-stats">
          <div v-for="(stat, index) in stats" :key="index" class="hero-stat">
            <span class="hero-stat-number">{{ stat.number }}</span>
            <span class="hero-stat-label">{{ stat.label }}</span>
          </div>
        </div>
        <div class="hero-actions">
          <RouterLink to="/join" class="btn btn-primary">
            Join Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </RouterLink>
          <RouterLink to="/team" class="btn btn-secondary">Meet the Team</RouterLink>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-content">
            <span class="section-label">Our Purpose</span>
            <h2 class="section-title">Our <span class="highlight">Mission</span></h2>
            <p class="mission-text">
              UMATT unites students from diverse backgrounds to design, fabricate, and compete with
              quarter-scale tractors, focusing on performance, manufacturability, serviceability,
              safety, ergonomics, and innovation.
            </p>
            <p class="mission-text">
              We bridge the gap between classroom theory and real-world application, preparing
              students for successful careers in engineering and agriculture.
            </p>
          </div>
          <div class="mission-quote">
            <div class="quote-card">
              <svg
                class="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"
                />
              </svg>
              <p class="quote-text">
                "Building tomorrow's agricultural innovation through hands-on engineering excellence
                and interdisciplinary collaboration."
              </p>
              <span class="quote-author">— UMATT Team Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What Drives Us</span>
          <h2 class="section-title">Core <span class="highlight">Values</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">The principles that guide everything we do</p>
        </div>

        <div class="values-grid">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="value-card animate-on-scroll"
            :class="value.color"
          >
            <div class="value-icon">
              <svg
                v-if="value.icon === 'innovation'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2v4" />
                <path d="m6.34 7.34 2.83 2.83" />
                <path d="M2 12h4" />
                <path d="m6.34 16.66 2.83-2.83" />
                <path d="M12 18v4" />
                <path d="m17.66 16.66-2.83-2.83" />
                <path d="M22 12h-4" />
                <path d="m17.66 7.34-2.83 2.83" />
              </svg>
              <svg
                v-else-if="value.icon === 'teamwork'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
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
              <svg
                v-else-if="value.icon === 'excellence'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
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
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="what-we-do-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Work</span>
          <h2 class="section-title">What We <span class="highlight">Do</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">Transforming engineering theory into competitive reality</p>
        </div>

        <div class="activities-grid">
          <div
            v-for="(activity, index) in activities"
            :key="index"
            class="activity-card animate-on-scroll"
            :class="activity.color"
          >
            <div class="activity-number">0{{ index + 1 }}</div>
            <div class="activity-icon">
              <svg
                v-if="activity.icon === 'design'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
              <svg
                v-else-if="activity.icon === 'build'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                />
              </svg>
              <svg
                v-else-if="activity.icon === 'compete'"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 20V10" />
                <path d="M12 20V4" />
                <path d="M6 20v-6" />
              </svg>
            </div>
            <h3 class="activity-title">{{ activity.title }}</h3>
            <p class="activity-description">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our History</span>
          <h2 class="section-title">Our <span class="highlight">Journey</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">Key milestones that define our legacy</p>
        </div>

        <div class="timeline">
          <div
            v-for="(milestone, index) in milestones"
            :key="index"
            class="timeline-item animate-on-scroll"
            :class="milestone.color"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ milestone.year }}</div>
              <h3 class="timeline-title">{{ milestone.title }}</h3>
              <p class="timeline-description">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Structure Section -->
    <section class="team-section">
      <div class="container">
        <div class="team-grid">
          <div class="team-content">
            <span class="section-label">Our People</span>
            <h2 class="section-title">Team <span class="highlight">Structure</span></h2>
            <p class="team-text">
              Our multidisciplinary team brings together students from engineering, agriculture,
              computer science, and business. Each member contributes unique skills to create a
              cohesive, high-performing unit.
            </p>
            <div class="departments-grid">
              <div
                v-for="(dept, index) in departments"
                :key="index"
                class="dept-card"
                :class="dept.color"
              >
                <h4 class="dept-title">{{ dept.title }}</h4>
                <p class="dept-description">{{ dept.description }}</p>
              </div>
            </div>
            <RouterLink to="/team" class="text-link">
              View Full Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </RouterLink>
          </div>
          <div class="team-image-wrapper">
            <div class="team-image">
              <img
                src="@/assets/images/competition-group-photo-2024.jpg"
                alt="UMATT Team working together"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Banner -->
    <section class="testimonial-section">
      <div class="container">
        <div class="testimonial-card">
          <svg
            class="testimonial-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"
            />
          </svg>
          <p class="testimonial-text">
            "Working with UMATT has been transformative. The hands-on experience, mentorship, and
            collaborative spirit have prepared me for real-world engineering challenges in ways the
            classroom never could."
          </p>
          <div class="testimonial-author">
            <div class="author-avatar">JD</div>
            <div class="author-info">
              <span class="author-name">John Daniels</span>
              <span class="author-role">Mechanical Engineering, Class of 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section - Modern Card Style -->
    <section class="cta-section">
      <div class="cta-background"></div>
      <div class="container">
        <header class="cta-header">
          <h2 class="cta-title">Ready to Get <span class="text-gold">Involved</span>?</h2>
          <p class="cta-subtitle">Join our mission to revolutionize agricultural technology</p>
        </header>
        
        <div class="cta-cards">
          <div class="cta-card cta-card-join">
            <div class="card-accent"></div>
            <div class="card-body">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </div>
              <h3 class="card-title">Join Our Team</h3>
              <p class="card-text">Be part of our innovative student team. No experience required—just passion and dedication.</p>
              <ul class="card-perks">
                <li>Hands-on engineering experience</li>
                <li>Build your professional network</li>
                <li>Compete at international events</li>
              </ul>
              <RouterLink to="/join" class="card-btn">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </RouterLink>
            </div>
          </div>
          
          <div class="cta-card cta-card-sponsor">
            <div class="card-accent"></div>
            <div class="card-body">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 class="card-title">Become a Sponsor</h3>
              <p class="card-text">Support the next generation of agricultural engineers and make a lasting impact.</p>
              <ul class="card-perks">
                <li>Brand visibility at competitions</li>
                <li>Access to emerging talent</li>
                <li>Community partnership opportunities</li>
              </ul>
              <RouterLink to="/sponsor" class="card-btn card-btn-gold">
                Partner With Us
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  font-family: 'Poppins', sans-serif;
}

/* ============================================
   HERO SECTION
   ============================================ */
.about-hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-image-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/competition-team-photo-2024.jpg') no-repeat center center;
  background-size: cover;
  transform: scale(1.05);
  animation: subtle-zoom 20s ease-out forwards;
}

@keyframes subtle-zoom {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 8rem 2rem 6rem;
  text-align: center;
  color: white;
}

.hero-badge {
  display: inline-block;
  background: var(--color-gold);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-brown);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 8px 25px rgba(242, 169, 0, 0.35);
  animation: fade-in-down 0.8s ease-out;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: clamp(2.75rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.1;
  animation: fade-in-up 0.8s ease-out 0.2s both;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title .highlight {
  color: var(--color-gold);
  text-shadow: 0 2px 20px rgba(242, 169, 0, 0.4);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  animation: fade-in-up 0.8s ease-out 0.3s both;
}

.hero-description {
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fade-in-up 0.8s ease-out 0.4s both;
}

/* Inline Hero Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
  animation: fade-in-up 0.8s ease-out 0.5s both;
}

.hero-stat {
  text-align: center;
}

.hero-stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.hero-stat-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: fade-in-up 0.8s ease-out 0.6s both;
}

/* ============================================
   COMMON STYLES
   ============================================ */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-brown);
  background: var(--color-gold);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(242, 169, 0, 0.2);
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

.title-underline {
  width: 80px;
  height: 4px;
  background: var(--color-gold);
  margin: 1rem auto 1.5rem;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-tertiary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--color-gold);
  color: var(--color-brown);
}

.btn-primary:hover {
  background: var(--color-gold-dark);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(242, 169, 0, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-blue-medium);
  font-weight: 600;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
}

.text-link:hover {
  color: var(--color-gold);
  gap: 0.75rem;
}

/* ============================================
   MISSION SECTION
   ============================================ */
.mission-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mission-content .section-label,
.mission-content .section-title {
  text-align: left;
}

.mission-text {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.quote-card {
  background: linear-gradient(135deg, rgba(56, 94, 157, 0.08) 0%, rgba(242, 169, 0, 0.08) 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  border-left: 4px solid var(--color-gold);
}

.quote-icon {
  color: var(--color-gold);
  margin-bottom: 1.5rem;
}

.quote-text {
  font-size: 1.2rem;
  color: var(--text-primary);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.quote-author {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-blue-medium);
}

/* ============================================
   VALUES SECTION
   ============================================ */
.values-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.value-card {
  background: var(--card-bg, white);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.value-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.value-card.blue:hover {
  border-color: var(--color-blue-medium);
}

.value-card.gold:hover {
  border-color: var(--color-gold);
}

.value-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.value-card.blue .value-icon {
  background: var(--color-blue-medium);
  color: white;
}

.value-card.gold .value-icon {
  background: var(--color-gold);
  color: var(--color-brown);
}

.value-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.value-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
}

/* ============================================
   WHAT WE DO SECTION
   ============================================ */
.what-we-do-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.activity-card {
  background: var(--card-bg, white);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
}

.activity-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.activity-card.blue {
  background: linear-gradient(135deg, rgba(56, 94, 157, 0.05) 0%, white 100%);
}

.activity-card.gold {
  background: linear-gradient(135deg, rgba(242, 169, 0, 0.05) 0%, white 100%);
}

.activity-card.blue:hover {
  border-color: var(--color-blue-medium);
}

.activity-card.gold:hover {
  border-color: var(--color-gold);
}

.activity-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2.5rem;
  font-weight: 800;
  opacity: 0.08;
  line-height: 1;
}

.activity-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.activity-card.blue .activity-icon {
  background: var(--color-blue-medium);
  color: white;
}

.activity-card.gold .activity-icon {
  background: var(--color-gold);
  color: var(--color-brown);
}

.activity-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.activity-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
}

/* ============================================
   JOURNEY SECTION
   ============================================ */
.journey-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    180deg,
    var(--color-blue-medium),
    var(--color-gold),
    var(--color-blue-medium)
  );
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
  opacity: 0;
  transform: translateX(-20px);
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -3rem;
  top: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 4px solid var(--card-bg, white);
  transform: translateX(-50%);
  margin-left: 2px;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05);
}

.timeline-item.blue .timeline-marker {
  background: var(--color-blue-medium);
}

.timeline-item.gold .timeline-marker {
  background: var(--color-gold);
}

.timeline-content {
  background: var(--card-bg, white);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.timeline-item.blue .timeline-content {
  border-top: 4px solid var(--color-blue-medium);
}

.timeline-item.gold .timeline-content {
  border-top: 4px solid var(--color-gold);
}

.timeline-year {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.timeline-item.blue .timeline-year {
  background: rgba(56, 94, 157, 0.1);
  color: var(--color-blue-medium);
}

.timeline-item.gold .timeline-year {
  background: rgba(242, 169, 0, 0.15);
  color: var(--color-gold-dark);
}

.timeline-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.timeline-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
}

/* ============================================
   TEAM SECTION
   ============================================ */
.team-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.team-content .section-label,
.team-content .section-title {
  text-align: left;
}

.team-text {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.departments-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.dept-card {
  padding: 1.25rem;
  border-radius: 12px;
  border: 2px solid var(--border-light);
  transition: all 0.3s ease;
}

.dept-card.blue {
  border-color: var(--color-blue-medium);
  background: rgba(56, 94, 157, 0.05);
}

.dept-card.gold {
  border-color: var(--color-gold);
  background: rgba(242, 169, 0, 0.05);
}

.dept-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.dept-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.dept-description {
  font-size: 0.85rem;
  color: var(--text-tertiary);
}

.team-image-wrapper {
  position: relative;
}

.team-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.team-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* ============================================
   TESTIMONIAL SECTION
   ============================================ */
.testimonial-section {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.testimonial-card {
  background: var(--card-bg, white);
  border-radius: 24px;
  padding: 4rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.testimonial-icon {
  color: var(--color-gold);
  margin-bottom: 2rem;
}

.testimonial-text {
  font-size: 1.35rem;
  color: var(--text-primary);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.author-avatar {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--color-blue-medium), var(--color-blue-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
}

.author-info {
  text-align: left;
}

.author-name {
  display: block;
  font-weight: 700;
  color: var(--text-primary);
  font-size: 1.1rem;
}

.author-role {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

/* ============================================
   CTA SECTION (Unique to About Page)
   ============================================ */
.cta-section {
  position: relative;
  padding: 6rem 2rem;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #5D4037 0%, #3E2723 100%);
  z-index: 0;
}

.cta-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 20% 80%, rgba(242, 169, 0, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(242, 169, 0, 0.1) 0%, transparent 40%);
}

.cta-section .container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
}

.cta-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.cta-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
}

.cta-title .text-gold {
  color: var(--color-gold);
}

.cta-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.cta-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.cta-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-accent {
  height: 4px;
  width: 100%;
}

.cta-card-join .card-accent {
  background: linear-gradient(90deg, #385E9D 0%, #4a7bc4 100%);
}

.cta-card-sponsor .card-accent {
  background: linear-gradient(90deg, #F2A900 0%, #FFB81C 100%);
}

.card-body {
  padding: 2.5rem;
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.cta-card-join .card-icon {
  background: rgba(33, 61, 107, 0.5);
  color: #385E9D;
}

.cta-card-sponsor .card-icon {
  background: rgba(242, 169, 0, 0.2);
  color: #F2A900;
}

.cta-card:hover .card-icon {
  transform: scale(1.1);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.25rem;
}

.card-perks {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.card-perks li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  padding: 0.4rem 0;
}

.cta-card-join .card-perks li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #5a8fd4;
  flex-shrink: 0;
}

.cta-card-sponsor .card-perks li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #F2A900;
  flex-shrink: 0;
}

.card-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background: #385E9D;
  color: #fff;
}

.card-btn svg {
  transition: transform 0.3s ease;
}

.card-btn:hover {
  background: #2d4d82;
  box-shadow: 0 6px 20px rgba(56, 94, 157, 0.4);
}

.card-btn:hover svg {
  transform: translateX(4px);
}

.card-btn-gold {
  background: #F2A900;
  color: #4F2C1D;
}

.card-btn-gold:hover {
  background: #d99500;
  box-shadow: 0 6px 20px rgba(242, 169, 0, 0.4);
}

/* ============================================
   ANIMATIONS
   ============================================ */
.animate-on-scroll {
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

/* ============================================
   RESPONSIVE STYLES
   ============================================ */
@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-description {
    margin: 0 auto 2rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image-wrapper {
    order: -1;
  }

  .image-decoration {
    display: none;
  }

  .hero-stats {
    gap: 2rem;
    flex-wrap: wrap;
  }

  .stat-number {
    font-size: 2rem;
  }

  .mission-grid,
  .team-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .mission-content .section-label,
  .mission-content .section-title,
  .team-content .section-label,
  .team-content .section-title {
    text-align: center;
  }

  .mission-text,
  .team-text {
    text-align: center;
  }

  .team-image-wrapper {
    order: -1;
  }

  .cta-cards {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .about-hero {
    min-height: auto;
  }

  .hero-content {
    padding: 5rem 1.5rem 3rem;
  }

  .hero-stats {
    padding: 1.5rem;
  }

  .mission-section,
  .values-section,
  .what-we-do-section,
  .journey-section,
  .team-section,
  .testimonial-section,
  .cta-section {
    padding: 4rem 1.5rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .quote-card,
  .testimonial-card {
    padding: 2rem 1.5rem;
  }

  .testimonial-text {
    font-size: 1.15rem;
  }

  .testimonial-author {
    flex-direction: column;
    gap: 0.75rem;
  }

  .author-info {
    text-align: center;
  }

  .timeline {
    padding-left: 2.5rem;
  }

  .timeline-marker {
    left: -2.5rem;
    width: 18px;
    height: 18px;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .departments-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 2.25rem;
  }

  .card-body {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1.25rem;
  }

  .hero-stats {
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }

  .cta-section {
    padding: 4rem 1.25rem;
  }

  .cta-title {
    font-size: 1.85rem;
  }

  .cta-subtitle {
    font-size: 1rem;
  }

  .card-body {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.35rem;
  }

  .card-perks li {
    font-size: 0.85rem;
  }
}
</style>
