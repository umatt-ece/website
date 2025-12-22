<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const activeFilter = ref('All')
const filters = ['All', 'Mechanical', 'Electrical', 'Software', 'Business']

// Stats for hero
const stats = [
  { number: '25+', label: 'Active Members' },
  { number: '5', label: 'Departments' },
  { number: '4', label: 'Leadership Roles' }
]

const departments = [
  {
    icon: 'gear',
    color: 'blue',
    title: 'Mechanical Engineering',
    description:
      'Design and development of chassis, drivetrain, and mechanical systems for optimal performance.',
    members: '8 Members'
  },
  {
    icon: 'bolt',
    color: 'gold',
    title: 'Electrical Engineering',
    description:
      'Power systems, motor control, and electrical integration for autonomous operation.',
    members: '6 Members'
  },
  {
    icon: 'code',
    color: 'blue',
    title: 'Software Development',
    description: 'Autonomous navigation algorithms, computer vision, and control system software.',
    members: '7 Members'
  },
  {
    icon: 'chart',
    color: 'gold',
    title: 'Business & Strategy',
    description: 'Project management, sponsorship acquisition, and strategic planning.',
    members: '3 Members'
  },
  {
    icon: 'palette',
    color: 'blue',
    title: 'Design & Media',
    description: 'Visual branding, documentation, social media, and presentation materials.',
    members: '2 Members'
  }
]

const leaders = [
  {
    name: 'Alex Johnson',
    role: 'Team Captain',
    program: 'Mechanical Engineering',
    year: '4th Year',
    initials: 'AJ',
    bio: 'Leading overall team strategy and competition preparation.'
  },
  {
    name: 'Sarah Chen',
    role: 'Technical Lead',
    program: 'Computer Engineering',
    year: '3rd Year',
    initials: 'SC',
    bio: 'Overseeing technical development and integration.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Project Manager',
    program: 'Industrial Engineering',
    year: '4th Year',
    initials: 'MR',
    bio: 'Managing timelines, resources, and team coordination.'
  },
  {
    name: 'Emma Thompson',
    role: 'Outreach Lead',
    program: 'Business Administration',
    year: '2nd Year',
    initials: 'ET',
    bio: 'Handling sponsorships and community engagement.'
  }
]

const teamMembers = [
  { name: 'David Kim', role: 'Mechanical', year: '3rd Year', initials: 'DK' },
  { name: 'Lisa Wang', role: 'Electrical', year: '2nd Year', initials: 'LW' },
  { name: 'James Wilson', role: 'Software', year: '4th Year', initials: 'JW' },
  { name: 'Maria Garcia', role: 'Mechanical', year: '3rd Year', initials: 'MG' },
  { name: 'Ryan Taylor', role: 'Electrical', year: '2nd Year', initials: 'RT' },
  { name: 'Sophie Brown', role: 'Software', year: '3rd Year', initials: 'SB' },
  { name: 'Chris Lee', role: 'Mechanical', year: '4th Year', initials: 'CL' },
  { name: 'Anna Davis', role: 'Business', year: '2nd Year', initials: 'AD' },
  { name: 'Tom Anderson', role: 'Software', year: '3rd Year', initials: 'TA' },
  { name: 'Kevin Zhang', role: 'Electrical', year: '4th Year', initials: 'KZ' },
  { name: 'Emily Park', role: 'Mechanical', year: '2nd Year', initials: 'EP' },
  { name: 'Jason Lee', role: 'Software', year: '3rd Year', initials: 'JL' }
]

const filteredMembers = computed(() => {
  if (activeFilter.value === 'All') {
    return teamMembers
  }
  return teamMembers.filter((m) => m.role === activeFilter.value)
})

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
  <div class="team-page">
    <!-- Hero Section -->
    <section class="team-hero">
      <div class="hero-background">
        <div class="hero-image-bg"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span>👥 Our People</span>
        </div>
        <h1 class="hero-title">Meet Our <span class="highlight">Team</span></h1>
        <p class="hero-description">
          Passionate engineering students from diverse backgrounds, united by a shared vision to
          build the future of autonomous agricultural systems.
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
          <RouterLink to="/about" class="btn btn-secondary">About UMATT</RouterLink>
        </div>
      </div>
    </section>

    <!-- Team Structure Section -->
    <section class="team-structure">
      <div class="container">
        <div class="section-header">
          <span class="section-label">How We Work</span>
          <h2 class="section-title">Team <span class="highlight">Structure</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            Our multidisciplinary team is organized into specialized departments, each contributing
            unique expertise to our tractor project.
          </p>
        </div>

        <div class="departments-grid">
          <div
            v-for="(dept, index) in departments"
            :key="index"
            class="department-card animate-on-scroll"
            :class="dept.color"
          >
            <div class="dept-number">0{{ index + 1 }}</div>
            <div class="dept-icon">
              <svg
                v-if="dept.icon === 'gear'"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                />
              </svg>
              <svg
                v-else-if="dept.icon === 'bolt'"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <svg
                v-else-if="dept.icon === 'code'"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <svg
                v-else-if="dept.icon === 'chart'"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"
                />
              </svg>
            </div>
            <h3 class="dept-title">{{ dept.title }}</h3>
            <p class="dept-description">{{ dept.description }}</p>
            <div class="dept-footer">
              <span class="dept-members">{{ dept.members }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="leadership-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Leadership</span>
          <h2 class="section-title">Our <span class="highlight">Leaders</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            Meet the dedicated individuals driving UMATT's mission forward with passion and
            expertise.
          </p>
        </div>

        <div class="leaders-grid">
          <div
            v-for="(leader, index) in leaders"
            :key="index"
            class="leader-card animate-on-scroll"
          >
            <div class="leader-header">
              <div class="leader-avatar">
                {{ leader.initials }}
              </div>
              <div class="leader-badge">{{ leader.role }}</div>
            </div>
            <div class="leader-info">
              <h3 class="leader-name">{{ leader.name }}</h3>
              <p class="leader-program">{{ leader.program }} · {{ leader.year }}</p>
              <p class="leader-bio">{{ leader.bio }}</p>
            </div>
            <div class="leader-socials">
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Email">
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
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="members-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">The Team</span>
          <h2 class="section-title">Our <span class="highlight">Members</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            Every member brings unique skills and passion to make our vision a reality.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-container">
          <div class="filter-tabs">
            <button
              v-for="filter in filters"
              :key="filter"
              @click="activeFilter = filter"
              class="filter-btn"
              :class="{ active: activeFilter === filter }"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <!-- Members Grid -->
        <div class="members-grid">
          <div
            v-for="(member, index) in filteredMembers"
            :key="index"
            class="member-card animate-on-scroll"
          >
            <div class="member-avatar">
              {{ member.initials }}
            </div>
            <div class="member-info">
              <h4 class="member-name">{{ member.name }}</h4>
              <span class="member-role">{{ member.role }}</span>
              <span class="member-year">{{ member.year }}</span>
            </div>
          </div>
        </div>

        <div v-if="filteredMembers.length === 0" class="no-results">
          <p>No members found in this department.</p>
        </div>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="culture-section">
      <div class="container">
        <div class="culture-grid">
          <div class="culture-content">
            <span class="section-label">Team Culture</span>
            <h2 class="section-title">Why We <span class="highlight">Love</span> What We Do</h2>
            <p class="culture-text">
              At UMATT, we believe that great engineering happens when passionate people come
              together with a shared purpose. Our team culture emphasizes learning, collaboration,
              and mutual support.
            </p>
            <div class="culture-values">
              <div class="culture-value">
                <div class="value-icon blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <div>
                  <h4>Collaborative Spirit</h4>
                  <p>We learn from each other and grow together.</p>
                </div>
              </div>
              <div class="culture-value">
                <div class="value-icon gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <div>
                  <h4>Excellence Driven</h4>
                  <p>We strive to exceed expectations in every project.</p>
                </div>
              </div>
              <div class="culture-value">
                <div class="value-icon blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4>Flexible & Inclusive</h4>
                  <p>Work around your schedule and learn at your pace.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="culture-image-wrapper">
            <div class="culture-image">
              <img src="@/assets/images/competition-team-photo-2024.jpg" alt="UMATT Team Culture" />
            </div>
            <div class="culture-quote">
              <svg
                class="quote-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"
                />
              </svg>
              <p>"Being part of UMATT has been the highlight of my university experience."</p>
              <span>— Team Member</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join CTA Section - Focused Single Card Style -->
    <section class="join-cta-section">
      <div class="container">
        <div class="join-cta-wrapper">
          <div class="join-cta-content">
            <span class="cta-eyebrow">Join Our Team</span>
            <h2 class="cta-heading">Ready to Build the Future of <span class="text-gold">Agriculture</span>?</h2>
            <p class="cta-description">
              We're always looking for passionate students who want to make a difference. No prior experience required—just bring your enthusiasm and willingness to learn.
            </p>
            <ul class="cta-benefits">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Hands-on engineering experience
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Build your professional network
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                Compete at international events
              </li>
            </ul>
            <RouterLink to="/join" class="cta-button">
              <span>Apply Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </RouterLink>
          </div>
          <div class="join-cta-visual">
            <div class="visual-icon">
              <svg width="80" height="80" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.90625 9C6.90625 6.61305 7.85446 4.32387 9.54229 2.63604C11.2301 0.948212 13.5193 0 15.9062 0C18.2932 0 20.5824 0.948212 22.2702 2.63604C23.958 4.32387 24.9062 6.61305 24.9062 9C24.9062 11.3869 23.958 13.6761 22.2702 15.364C20.5824 17.0518 18.2932 18 15.9062 18C13.5193 18 11.2301 17.0518 9.54229 15.364C7.85446 13.6761 6.90625 11.3869 6.90625 9ZM0.15625 33.9117C0.15625 26.9859 5.76719 21.375 12.693 21.375H19.1195C26.0453 21.375 31.6562 26.9859 31.6562 33.9117C31.6562 35.0648 30.7211 36 29.568 36H2.24453C1.09141 36 0.15625 35.0648 0.15625 33.9117ZM35.5938 21.9375V17.4375H31.0938C30.1586 17.4375 29.4062 16.6852 29.4062 15.75C29.4062 14.8148 30.1586 14.0625 31.0938 14.0625H35.5938V9.5625C35.5938 8.62734 36.3461 7.875 37.2812 7.875C38.2164 7.875 38.9688 8.62734 38.9688 9.5625V14.0625H43.4688C44.4039 14.0625 45.1562 14.8148 45.1562 15.75C45.1562 16.6852 44.4039 17.4375 43.4688 17.4375H38.9688V21.9375C38.9688 22.8727 38.2164 23.625 37.2812 23.625C36.3461 23.625 35.5938 22.8727 35.5938 21.9375Z" fill="#F2A900"/>
              </svg>
            </div>
            <div class="visual-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-page {
  font-family: 'Poppins', sans-serif;
}

/* ============================================
   HERO SECTION
   ============================================ */
.team-hero {
  position: relative;
  min-height: 85vh;
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
  background: url('@/assets/images/competition-group-photo-2024.jpg') no-repeat center center;
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
  padding: 8rem 2rem 4rem;
  text-align: center;
  color: white;
}

.hero-badge {
  display: inline-block;
  background: var(--color-gold);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
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
  margin-bottom: 1.5rem;
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

.hero-description {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
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

/* ============================================
   TEAM STRUCTURE SECTION
   ============================================ */
.team-structure {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.department-card {
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

.department-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.department-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.department-card.blue {
  background: linear-gradient(135deg, rgba(56, 94, 157, 0.05) 0%, white 100%);
}

.department-card.gold {
  background: linear-gradient(135deg, rgba(242, 169, 0, 0.05) 0%, white 100%);
}

.department-card.blue:hover {
  border-color: var(--color-blue-medium);
}

.department-card.gold:hover {
  border-color: var(--color-gold);
}

.dept-number {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  opacity: 0.06;
  line-height: 1;
}

.dept-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.department-card.blue .dept-icon {
  background: var(--color-blue-medium);
  color: white;
}

.department-card.gold .dept-icon {
  background: var(--color-gold);
  color: var(--color-brown);
}

.dept-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.dept-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.dept-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--border-light);
}

.dept-members {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-blue-medium);
}

/* ============================================
   LEADERSHIP SECTION
   ============================================ */
.leadership-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.leader-card {
  background: var(--card-bg, white);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.leader-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.leader-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-gold);
}

.leader-header {
  background: linear-gradient(135deg, var(--color-blue-medium), #2c4a7d);
  padding: 2rem;
  text-align: center;
  position: relative;
}

.leader-avatar {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: var(--color-blue-medium);
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.leader-badge {
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-gold);
  color: var(--color-brown);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
}

.leader-info {
  padding: 2rem 1.5rem 1.5rem;
  text-align: center;
}

.leader-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.leader-program {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  margin-bottom: 1rem;
}

.leader-bio {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  line-height: 1.6;
}

.leader-socials {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.5rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: var(--bg-secondary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-blue-medium);
  color: white;
  transform: translateY(-2px);
}

/* ============================================
   MEMBERS SECTION
   ============================================ */
.members-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.filter-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.filter-tabs {
  display: inline-flex;
  gap: 0.5rem;
  background: var(--bg-secondary);
  padding: 0.5rem;
  border-radius: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: var(--text-tertiary);
}

.filter-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

.filter-btn.active {
  background: var(--color-blue-medium);
  color: white;
  box-shadow: 0 4px 12px rgba(56, 94, 157, 0.3);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.member-card {
  background: var(--card-bg, white);
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.member-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border-color: var(--color-gold);
}

.member-avatar {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: var(--color-brown);
  font-size: 1.1rem;
  font-weight: 700;
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.member-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.member-role {
  font-size: 0.85rem;
  color: var(--color-blue-medium);
  font-weight: 600;
}

.member-year {
  font-size: 0.8rem;
  color: var(--text-tertiary);
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: var(--text-tertiary);
}

/* ============================================
   CULTURE SECTION
   ============================================ */
.culture-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.culture-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.culture-content .section-label,
.culture-content .section-title {
  text-align: left;
}

.culture-text {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.culture-values {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.culture-value {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.value-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.value-icon.blue {
  background: var(--color-blue-medium);
  color: white;
}

.value-icon.gold {
  background: var(--color-gold);
  color: var(--color-brown);
}

.culture-value h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.culture-value p {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  line-height: 1.5;
}

.culture-image-wrapper {
  position: relative;
}

.culture-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.culture-image img {
  width: 100%;
  height: auto;
  display: block;
}

.culture-quote {
  position: absolute;
  bottom: -30px;
  left: -30px;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  max-width: 300px;
}

.quote-icon {
  color: var(--color-gold);
  margin-bottom: 0.75rem;
}

.culture-quote p {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.culture-quote span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-blue-medium);
}

/* ============================================
   JOIN CTA SECTION
   ============================================ */
/* ============================================
   JOIN CTA SECTION (Unique to Team Page)
   ============================================ */
.join-cta-section {
  background: linear-gradient(135deg, #5D4037 0%, #4E342E 100%);
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
}

.join-cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: radial-gradient(ellipse at 80% 50%, rgba(242, 169, 0, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.join-cta-section .container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.join-cta-wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}

.join-cta-content {
  max-width: 600px;
}

.cta-eyebrow {
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

.cta-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 1.25rem;
}

.cta-heading .text-gold {
  color: var(--color-gold);
}

.cta-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.75rem;
}

.cta-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cta-benefits li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.cta-benefits li svg {
  color: var(--color-gold);
  flex-shrink: 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.25rem;
  background: var(--color-gold);
  color: #3d2d24;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover {
  background: #ffbb33;
  box-shadow: 0 8px 25px rgba(242, 169, 0, 0.35);
  transform: translateY(-2px);
}

.cta-button:hover svg {
  transform: translateX(4px);
}

.join-cta-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-icon {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(242, 169, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.visual-icon svg {
  width: 80px;
  height: 80px;
}

.visual-decoration {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px dashed rgba(242, 169, 0, 0.2);
  animation: spin-slow 30s linear infinite;
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

  .culture-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .culture-content .section-label,
  .culture-content .section-title {
    text-align: center;
  }

  .culture-text {
    text-align: center;
  }

  .culture-values {
    max-width: 400px;
    margin: 0 auto;
  }

  .culture-image-wrapper {
    order: -1;
  }

  .culture-quote {
    position: relative;
    bottom: 0;
    left: 0;
    margin-top: -40px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .join-cta-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }

  .join-cta-content {
    max-width: 100%;
  }

  .cta-benefits {
    align-items: center;
  }

  .join-cta-visual {
    display: none;
  }
}

@media (max-width: 768px) {
  .team-hero {
    min-height: auto;
  }

  .hero-content {
    padding: 5rem 1.5rem 3rem;
  }

  .hero-stats {
    padding: 1.5rem;
  }

  .team-structure,
  .leadership-section,
  .members-section,
  .culture-section {
    padding: 4rem 1.5rem;
  }

  .join-cta-section {
    padding: 4rem 1.5rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  .cta-heading {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1.25rem;
  }

  .filter-tabs {
    padding: 0.35rem;
  }

  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .member-card {
    padding: 1.25rem 1rem;
  }

  .member-avatar {
    width: 56px;
    height: 56px;
  }

  .join-cta-section {
    padding: 3rem 1.25rem;
  }

  .cta-heading {
    font-size: 1.75rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .cta-benefits li {
    font-size: 0.95rem;
  }
}
</style>
