<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const activeFilter = ref('All')
const filters = ['All', 'Mechanical', 'Electrical', 'Software', 'Business']

const departments = [
  {
    icon: 'gear',
    color: 'blue',
    title: 'Mechanical Engineering',
    description: 'Design and development of chassis, drivetrain, and mechanical systems for optimal performance and durability.',
    members: '8 Members'
  },
  {
    icon: 'bolt',
    color: 'gold',
    title: 'Electrical Engineering',
    description: 'Power systems, motor control, and electrical integration for autonomous navigation and operation.',
    members: '6 Members'
  },
  {
    icon: 'code',
    color: 'blue',
    title: 'Software Development',
    description: 'Autonomous navigation algorithms, computer vision, and control system software development.',
    members: '7 Members'
  },
  {
    icon: 'chart',
    color: 'gold',
    title: 'Business & Strategy',
    description: 'Project management, sponsorship acquisition, and strategic planning for team operations.',
    members: '3 Members'
  },
  {
    icon: 'palette',
    color: 'blue',
    title: 'Design & Media',
    description: 'Visual branding, documentation, social media, and presentation materials for competitions.',
    members: '2 Members'
  }
]

const leaders = [
  {
    name: 'Alex Johnson',
    role: 'Team Captain',
    program: 'Mechanical Engineering, 4th Year',
    initials: 'AJ'
  },
  {
    name: 'Sarah Chen',
    role: 'Technical Lead',
    program: 'Computer Engineering, 3rd Year',
    initials: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Project Manager',
    program: 'Industrial Engineering, 4th Year',
    initials: 'MR'
  },
  {
    name: 'Emma Thompson',
    role: 'Outreach Lead',
    program: 'Business Administration, 2nd Year',
    initials: 'ET'
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
  { name: 'Kevin Zhang', role: 'Electrical', year: '4th Year', initials: 'KZ' }
]

const filteredMembers = computed(() => {
  if (activeFilter.value === 'All') {
    return teamMembers
  }
  return teamMembers.filter(m => m.role === activeFilter.value)
})
</script>

<template>
  <div class="team-page">
    <!-- Hero Section -->
    <section class="team-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span>👥 Our People</span>
        </div>
        <h1 class="hero-title">Meet Our <span class="highlight">Team</span></h1>
        <p class="hero-description">
          Passionate engineering students building the future of autonomous agricultural 
          systems through innovation, collaboration, and dedication to excellence.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">25+</span>
            <span class="stat-label">Active Members</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5</span>
            <span class="stat-label">Departments</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">3</span>
            <span class="stat-label">Years Active</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Structure Section -->
    <section class="team-structure">
      <div class="container">
        <div class="section-header">
          <span class="section-label">How We Work</span>
          <h2 class="section-title">Team <span class="highlight">Structure</span></h2>
          <p class="section-subtitle">
            Our multidisciplinary team is organized into specialized departments, 
            each contributing unique expertise to our tractor project.
          </p>
        </div>
        
        <div class="departments-grid">
          <div 
            v-for="(dept, index) in departments" 
            :key="index" 
            class="department-card"
            :class="dept.color"
          >
            <div class="dept-icon">
              <svg v-if="dept.icon === 'gear'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              <svg v-else-if="dept.icon === 'bolt'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              <svg v-else-if="dept.icon === 'code'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              <svg v-else-if="dept.icon === 'chart'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="13.5" cy="6.5" r=".5"/>
                <circle cx="17.5" cy="10.5" r=".5"/>
                <circle cx="8.5" cy="7.5" r=".5"/>
                <circle cx="6.5" cy="12.5" r=".5"/>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
              </svg>
            </div>
            <h3 class="dept-title">{{ dept.title }}</h3>
            <p class="dept-description">{{ dept.description }}</p>
            <span class="dept-members">{{ dept.members }}</span>
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
          <p class="section-subtitle">
            Meet the dedicated leaders driving UMATT's mission forward.
          </p>
        </div>
        
        <div class="leaders-grid">
          <div v-for="(leader, index) in leaders" :key="index" class="leader-card">
            <div class="leader-avatar">
              {{ leader.initials }}
            </div>
            <h3 class="leader-name">{{ leader.name }}</h3>
            <span class="leader-role">{{ leader.role }}</span>
            <p class="leader-program">{{ leader.program }}</p>
            <div class="leader-socials">
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
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
          <h2 class="section-title">Our Amazing <span class="highlight">Members</span></h2>
          <p class="section-subtitle">
            Every member brings unique skills and passion to make our vision a reality.
          </p>
        </div>
        
        <!-- Filter Tabs -->
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
        
        <!-- Members Grid -->
        <div class="members-grid">
          <div v-for="(member, index) in filteredMembers" :key="index" class="member-card">
            <div class="member-avatar">
              {{ member.initials }}
            </div>
            <h4 class="member-name">{{ member.name }}</h4>
            <span class="member-role">{{ member.role }}</span>
            <span class="member-year">{{ member.year }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Join CTA Section -->
    <section class="join-cta">
      <div class="cta-background">
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Join <span class="highlight">UMATT?</span></h2>
          <p class="cta-description">
            We're always looking for passionate students who want to make a difference 
            in autonomous agricultural technology. Join us in building the future!
          </p>
          
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v4"/>
                  <path d="m6.34 7.34 2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="m6.34 16.66 2.83-2.83"/>
                  <path d="M12 18v4"/>
                  <path d="m17.66 16.66-2.83-2.83"/>
                  <path d="M22 12h-4"/>
                  <path d="m17.66 7.34-2.83 2.83"/>
                </svg>
              </div>
              <h3 class="benefit-title">Hands-on Experience</h3>
              <p class="benefit-description">Work on real engineering projects with cutting-edge technology</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 class="benefit-title">Build Networks</h3>
              <p class="benefit-description">Connect with industry professionals and like-minded peers</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                </svg>
              </div>
              <h3 class="benefit-title">Compete & Win</h3>
              <p class="benefit-description">Represent UM in national and international competitions</p>
            </div>
          </div>
          
          <div class="cta-actions">
            <RouterLink to="/join" class="btn btn-primary">
              Apply Now
            </RouterLink>
            <RouterLink to="/about" class="btn btn-secondary">
              Learn More
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-page {
  font-family: Poppins, sans-serif;
}

/* ============================================
   HERO SECTION
   ============================================ */
.team-hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #385E9D 0%, #2D4A7D 100%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(242, 169, 0, 0.15) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 6rem 2rem 4rem;
  max-width: 800px;
}

.hero-badge {
  display: inline-block;
  background: rgba(242, 169, 0, 0.2);
  border: 1px solid var(--color-gold);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-gold);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-title .highlight {
  color: var(--color-gold);
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
}

/* ============================================
   COMMON SECTION STYLES
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
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
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.department-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.department-card.blue:hover {
  border-color: var(--color-blue-medium);
}

.department-card.gold:hover {
  border-color: var(--color-gold);
}

.dept-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
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
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.dept-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.dept-members {
  font-size: 0.875rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.leader-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: var(--color-gold);
}

.leader-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-blue-medium), #2c4a7d);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.leader-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.leader-role {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-blue-medium);
  margin-bottom: 0.5rem;
}

.leader-program {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  margin-bottom: 1.25rem;
}

.leader-socials {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 36px;
  height: 36px;
  background: var(--bg-secondary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-blue-medium);
  color: white;
}

/* ============================================
   MEMBERS SECTION
   ============================================ */
.members-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--bg-secondary);
  color: var(--text-tertiary);
}

.filter-btn:hover {
  background: var(--border-medium);
}

.filter-btn.active {
  background: var(--color-blue-medium);
  color: white;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
}

.member-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border-color: var(--color-gold);
}

.member-avatar {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: var(--color-brown);
  font-size: 1rem;
  font-weight: 700;
}

.member-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.member-role {
  display: block;
  font-size: 0.8rem;
  color: var(--color-blue-medium);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.member-year {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

/* ============================================
   JOIN CTA SECTION
   ============================================ */
.join-cta {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #385E9D 0%, #2D4A7D 100%);
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 70%, rgba(242, 169, 0, 0.15) 0%, transparent 50%);
}

.join-cta .container {
  position: relative;
  z-index: 2;
}

.cta-content {
  text-align: center;
  color: white;
  max-width: 900px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  margin-bottom: 1.25rem;
}

.cta-title .highlight {
  color: var(--color-gold);
}

.cta-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 650px;
  margin: 0 auto 3rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 2rem 1.5rem;
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: rgba(242, 169, 0, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: var(--color-gold);
}

.benefit-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.benefit-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* ============================================
   RESPONSIVE STYLES
   ============================================ */
@media (max-width: 768px) {
  .team-hero {
    min-height: 80vh;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .team-structure,
  .leadership-section,
  .members-section,
  .join-cta {
    padding: 4rem 0;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .cta-actions {
    flex-direction: column;
    padding: 0 1rem;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 5rem 1.5rem 3rem;
  }
  
  .filter-tabs {
    gap: 0.35rem;
  }
  
  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
