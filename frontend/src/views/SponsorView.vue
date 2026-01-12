<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '@/api'

// FAQ state
const faqs = ref([
  {
    question: 'How are sponsorship funds utilized?',
    answer:
      'Sponsorship funds directly support design and manufacturing costs, competition travel expenses, equipment purchases, and educational resources for team members. Every dollar helps our students gain hands-on engineering experience.',
    isOpen: false
  },
  {
    question: 'What recognition do sponsors receive?',
    answer:
      'Depending on sponsorship level, recognition includes logo placement on our tractors, team apparel, presentations, social media, competition materials, and recruiting opportunities. Higher tiers receive more prominent placement and additional engagement opportunities.',
    isOpen: false
  },
  {
    question: 'Can we sponsor with in-kind donations?',
    answer:
      'Yes! We welcome in-kind donations of materials, equipment, manufacturing services, and technical expertise. These contributions are valued at market rate when determining your sponsorship tier benefits.',
    isOpen: false
  },
  {
    question: 'When is the best time to sponsor?',
    answer:
      'While we welcome support year-round, sponsorships finalized by September provide maximum visibility throughout our design and build phase leading up to the spring competition.',
    isOpen: false
  },
  {
    question: 'How can sponsors engage with the team?',
    answer:
      "Sponsors can visit our workshop, attend team presentations, participate in design reviews, host team visits to their facilities, and connect with students for recruitment purposes. We're flexible and eager to build meaningful partnerships.",
    isOpen: false
  }
])

function toggleFaq(index: number) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

// Contact form
const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  tier: '',
  message: ''
})

const submitted = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    // Call backend API via HTTP request
    const response = await api.submitSponsorInquiry({
      companyName: form.value.company,
      contactName: form.value.name,
      email: form.value.email,
      message: form.value.message || undefined
    })

    if (!response.success) {
      throw new Error(response.error || 'Failed to submit inquiry')
    }

    submitted.value = true
    form.value = { name: '', company: '', email: '', phone: '', tier: '', message: '' }
  } catch (error) {
    console.error('Sponsor form submission error:', error)
    errorMessage.value = error instanceof Error ? error.message : 'There was an error submitting your inquiry. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  submitted.value = false
  errorMessage.value = ''
}

// Sponsorship tiers
const tiers = [
  {
    name: 'Bronze Supporter',
    price: '$500 - $999',
    featured: false,
    color: 'bronze',
    benefits: ['Logo placement on tractor', 'Logo on team apparel', 'Social media recognition']
  },
  {
    name: 'Silver Supporter',
    price: '$1,000 - $2,499',
    featured: false,
    color: 'silver',
    benefits: [
      'Logo placement on tractor',
      'Logo on team apparel',
      'Recognition in presentations',
      'Social media recognition'
    ]
  },
  {
    name: 'Premier Partner',
    price: '$5,000+',
    featured: true,
    color: 'gold',
    benefits: [
      'Prominent logo on tractor',
      'Large logo on team apparel',
      'Recognition in all presentations',
      'Social media highlights',
      'Featured in competition materials',
      'Team engagement opportunities',
      'Exclusive recruiting access',
      'Tractor demonstration opportunity'
    ]
  },
  {
    name: 'Gold Supporter',
    price: '$2,500 - $4,999',
    featured: false,
    color: 'gold-alt',
    benefits: [
      'Logo placement on tractor',
      'Logo on team apparel',
      'Recognition in presentations',
      'Social media recognition',
      'Featured in competition materials',
      'Team engagement opportunities'
    ]
  }
]

// Benefits
const benefits = [
  {
    icon: 'visibility',
    title: 'Brand Visibility',
    description:
      'Showcase your brand to future engineers, industry professionals, and academic institutions across North America.'
  },
  {
    icon: 'talent',
    title: 'Talent Pipeline',
    description:
      'Connect directly with skilled engineering students who demonstrate practical problem-solving abilities.'
  },
  {
    icon: 'innovation',
    title: 'Innovation Access',
    description:
      'Gain insights through direct interaction with cutting-edge designs from emerging engineers.'
  },
  {
    icon: 'community',
    title: 'Community Impact',
    description:
      'Support practical education and help develop the next generation of skilled professionals.'
  }
]

// Stats
const stats = [
  { number: '20+', label: 'Universities Compete' },
  { number: '1st', label: 'Place 2021' },
  { number: '100+', label: 'Students Trained' }
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
  <div class="sponsor-page">
    <!-- Hero Section -->
    <section class="sponsor-hero">
      <div class="hero-background">
        <div class="hero-image-bg"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span>🏆 Award-Winning Team</span>
        </div>
        <h1 class="hero-title">Partner with <span class="highlight">Innovation</span></h1>
        <p class="hero-description">
          Support the next generation of agricultural engineers and gain visibility with future
          industry leaders at the University of Manitoba.
        </p>
        <div class="hero-stats">
          <div v-for="(stat, index) in stats" :key="index" class="hero-stat">
            <span class="hero-stat-number">{{ stat.number }}</span>
            <span class="hero-stat-label">{{ stat.label }}</span>
          </div>
        </div>
        <div class="hero-actions">
          <a href="#sponsorship-tiers" class="btn btn-primary">
            View Packages
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
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
          <a href="#contact-section" class="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>

    <!-- Why Sponsor Section -->
    <section class="why-sponsor">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Why Partner With Us</span>
          <h2 class="section-title">Benefits of <span class="highlight">Sponsorship</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            Join a network of industry leaders supporting innovation in agricultural engineering
          </p>
        </div>

        <div class="benefits-grid">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="benefit-card animate-on-scroll"
          >
            <div class="benefit-number">0{{ index + 1 }}</div>
            <div class="benefit-icon">
              <svg
                v-if="benefit.icon === 'visibility'"
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
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <svg
                v-else-if="benefit.icon === 'talent'"
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
                v-else-if="benefit.icon === 'innovation'"
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
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                />
              </svg>
            </div>
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-description">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Competition Info Section -->
    <section class="competition-info">
      <div class="container">
        <div class="competition-grid">
          <div class="competition-image-wrapper">
            <div class="competition-image">
              <img
                src="@/assets/images/competition-team-photo-2024.jpg"
                alt="UMATT team at competition"
                loading="lazy"
              />
            </div>
            <div class="floating-card">
              <div class="card-icon">🏆</div>
              <div class="card-text">
                <strong>1st Place Overall</strong>
                <span>2021 Competition</span>
              </div>
            </div>
          </div>

          <div class="competition-content">
            <span class="section-label">The Competition</span>
            <h2 class="section-title">Where Your <span class="highlight">Brand</span> Competes</h2>
            <p class="competition-description">
              The ASABE Quarter Scale Tractor Competition challenges university teams to design,
              build, and present a quarter-scale tractor. Teams are evaluated on design innovation,
              performance testing, maneuverability, and engineering practices.
            </p>

            <div class="details-grid">
              <div class="detail-item">
                <div class="detail-icon blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
                  <span class="detail-value">Peoria, Illinois</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
                  <span class="detail-value">20-30 Universities</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
                  <span class="detail-value">ASABE</span>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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

    <!-- Sponsorship Tiers Section -->
    <section id="sponsorship-tiers" class="sponsorship-tiers">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Investment Levels</span>
          <h2 class="section-title">Sponsorship <span class="highlight">Packages</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            Choose the partnership level that aligns with your organization's goals
          </p>
          <div class="download-cta">
            <a href="/2025-2026 Sponsorship Package Revision C.pdf" download class="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full Sponsor Package
            </a>
          </div>
        </div>

        <div class="tiers-grid">
          <div
            v-for="(tier, index) in tiers"
            :key="index"
            class="tier-card animate-on-scroll"
            :class="[tier.color, { featured: tier.featured }]"
          >
            <div v-if="tier.featured" class="featured-badge">Most Popular</div>
            <div class="tier-accent"></div>

            <div class="tier-header">
              <h3 class="tier-name">{{ tier.name }}</h3>
              <div class="tier-price">{{ tier.price }}</div>
            </div>

            <ul class="tier-benefits">
              <li v-for="(benefit, i) in tier.benefits" :key="i">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ benefit }}</span>
              </li>
            </ul>

            <a href="#contact-section" class="tier-button" :class="{ primary: tier.featured }">
              Become a Sponsor
            </a>
          </div>
        </div>

        <!-- In-Kind Support -->
        <div class="custom-support animate-on-scroll">
          <div class="custom-card">
            <div class="custom-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div class="custom-content">
              <h4>In-Kind Donations Welcome</h4>
              <p>
                We also accept materials, equipment, manufacturing services, and technical
                expertise. These contributions are valued at market rate when determining
                sponsorship tier.
              </p>
            </div>
            <a href="#contact-section" class="custom-button">Discuss Options</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Common Questions</span>
          <h2 class="section-title">Frequently Asked <span class="highlight">Questions</span></h2>
          <div class="title-underline"></div>
        </div>

        <div class="faq-list">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-item"
            :class="{ active: faq.isOpen }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <div class="faq-icon">
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </button>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact-section" class="contact-section">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-info">
            <span class="section-label">Get Started</span>
            <h2 class="section-title">Ready to <span class="highlight">Partner</span> With Us?</h2>
            <p class="contact-description">
              Fill out the form and our team will reach out to discuss how we can create a mutually
              beneficial partnership.
            </p>

            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
                </div>
                <div class="method-content">
                  <span class="method-label">Email Us</span>
                  <a href="mailto:umattinfo@gmail.com" class="method-value">umattinfo@gmail.com</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
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
                <div class="method-content">
                  <span class="method-label">Location</span>
                  <span class="method-value">University of Manitoba, Winnipeg</span>
                </div>
              </div>
            </div>

            <div class="trust-badges">
              <div class="trust-badge">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Registered Student Group</span>
              </div>
              <div class="trust-badge">
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Tax Receipts Available</span>
              </div>
            </div>
          </div>

          <div class="form-container">
            <form v-if="!submitted" class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    placeholder="Your Company"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" v-model="form.phone" placeholder="(204) 123-4567" />
                </div>
              </div>

              <div class="form-group">
                <label for="tier">Interest Level</label>
                <select id="tier" v-model="form.tier">
                  <option value="" disabled>Select a sponsorship tier</option>
                  <option value="premier">Premier Partner ($5,000+)</option>
                  <option value="gold">Gold Supporter ($2,500 - $4,999)</option>
                  <option value="silver">Silver Supporter ($1,000 - $2,499)</option>
                  <option value="bronze">Bronze Supporter ($500 - $999)</option>
                  <option value="custom">Custom / In-Kind Support</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Tell us about your interest in sponsoring UMATT..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="spinner"></span>
                {{ isSubmitting ? 'Sending...' : 'Send Inquiry' }}
                <svg
                  v-if="!isSubmitting"
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
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              <div v-if="errorMessage" class="api-error-message">
                {{ errorMessage }}
              </div>
            </form>

            <div v-else class="success-state">
              <div class="success-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>We've received your inquiry and will be in touch within 2-3 business days.</p>
              <button class="reset-btn" @click="resetForm">Send Another Inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sponsor-page {
  font-family: 'Poppins', sans-serif;
}

/* ============================================
   HERO SECTION
   ============================================ */
.sponsor-hero {
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

.download-cta {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.download-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark, #e6a000) 100%);
  color: var(--color-brown);
  border: none;
  box-shadow: 0 4px 15px rgba(242, 169, 0, 0.25);
  position: relative;
  overflow: hidden;
}

.download-cta .btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.download-cta .btn:hover::before {
  left: 100%;
}

.download-cta .btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(242, 169, 0, 0.4), 0 0 50px rgba(242, 169, 0, 0.3);
  background: linear-gradient(135deg, var(--color-gold-dark, #e6a000) 0%, var(--color-gold) 100%);
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
   WHY SPONSOR SECTION
   ============================================ */
.why-sponsor {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: var(--card-bg, white);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
}

.benefit-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--color-gold);
}

.benefit-number {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  opacity: 0.06;
  line-height: 1;
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: var(--color-blue-medium);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(56, 94, 157, 0.2);
}

.benefit-card:hover .benefit-icon {
  background: var(--color-gold);
  color: var(--color-brown);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(242, 169, 0, 0.4), 0 0 30px rgba(242, 169, 0, 0.2);
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.benefit-description {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.7;
}

/* ============================================
   COMPETITION INFO SECTION
   ============================================ */
.competition-info {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.competition-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.competition-image-wrapper {
  position: relative;
}

.competition-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.competition-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.competition-image:hover img {
  transform: scale(1.05);
}

.floating-card {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: white;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-icon {
  font-size: 2rem;
}

.card-text {
  display: flex;
  flex-direction: column;
}

.card-text strong {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.card-text span {
  font-size: 0.85rem;
  color: var(--text-tertiary);
}

.competition-content .section-label,
.competition-content .section-title {
  text-align: left;
}

.competition-description {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.detail-item:hover {
  border-color: var(--color-gold);
  transform: translateY(-2px);
}

.detail-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.detail-icon.blue {
  background: var(--color-blue-medium);
  color: white;
}

.detail-icon.gold {
  background: var(--color-gold);
  color: var(--color-brown);
}

.detail-content {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

/* ============================================
   SPONSORSHIP TIERS SECTION
   ============================================ */
.sponsorship-tiers {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.tier-card {
  background: var(--card-bg, white);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--border-light);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.tier-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.tier-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.tier-card.featured {
  border-color: var(--color-gold);
  transform: scale(1.05);
  z-index: 2;
}

.tier-card.featured.visible {
  transform: scale(1.05);
}

.tier-card.featured:hover {
  transform: scale(1.08) translateY(-5px);
}

.tier-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
}

.tier-card.bronze .tier-accent {
  background: #cd7f32;
}
.tier-card.silver .tier-accent {
  background: #a8a8a8;
}
.tier-card.gold .tier-accent {
  background: var(--color-gold);
}
.tier-card.gold-alt .tier-accent {
  background: #d4af37;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: -2rem;
  background: var(--color-gold);
  color: var(--color-brown);
  padding: 0.35rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  transform: rotate(45deg);
}

.tier-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
}

.tier-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.tier-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-blue-medium);
}

.tier-card.featured .tier-price {
  color: var(--color-gold);
}

.tier-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex-grow: 1;
}

.tier-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.6rem 0;
  font-size: 0.9rem;
  color: var(--text-tertiary);
  border-bottom: 1px solid var(--border-light);
}

.tier-benefits li:last-child {
  border-bottom: none;
}

.tier-benefits svg {
  color: var(--color-gold);
  flex-shrink: 0;
  margin-top: 2px;
}

.tier-button {
  display: block;
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border-light);
  transition: all 0.3s ease;
}

.tier-button:hover {
  background: var(--color-blue-medium);
  color: white;
  border-color: var(--color-blue-medium);
}

.tier-button.primary {
  background: var(--color-gold);
  color: var(--color-brown);
  border-color: var(--color-gold);
}

.tier-button.primary:hover {
  background: var(--color-gold-dark);
  border-color: var(--color-gold-dark);
  transform: translateY(-2px);
}

/* Custom Support Card */
.custom-support {
  opacity: 0;
  transform: translateY(20px);
}

.custom-support.visible {
  opacity: 1;
  transform: translateY(0);
}

.custom-card {
  background: linear-gradient(135deg, var(--color-blue-medium), #2c4a7d);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: white;
}

.custom-icon {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.custom-content {
  flex-grow: 1;
}

.custom-content h4 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.custom-content p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

.custom-button {
  background: var(--color-gold);
  color: var(--color-brown);
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.custom-button:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
}

/* ============================================
   FAQ SECTION
   ============================================ */
.faq-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.faq-section .container {
  max-width: 800px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--card-bg, white);
  border-radius: 14px;
  border: 1px solid var(--border-light);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--color-gold);
}

.faq-item.active {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.faq-question:hover {
  color: var(--color-blue-medium);
}

.faq-icon {
  width: 32px;
  height: 32px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.faq-item.active .faq-icon {
  background: var(--color-gold);
  color: var(--color-brown);
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.faq-item.active .faq-answer {
  max-height: 300px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  color: var(--text-tertiary);
  line-height: 1.7;
  margin: 0;
}

/* ============================================
   CONTACT SECTION
   ============================================ */
.contact-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info .section-label,
.contact-info .section-title {
  text-align: left;
}

.contact-description {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: var(--bg-tertiary);
}

.method-icon {
  width: 50px;
  height: 50px;
  background: var(--color-blue-medium);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.method-content {
  display: flex;
  flex-direction: column;
}

.method-label {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.method-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
}

a.method-value:hover {
  color: var(--color-blue-medium);
}

.trust-badges {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.trust-badge svg {
  color: var(--color-gold);
}

/* Form Container */
.form-container {
  background: var(--card-bg, white);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid var(--border-light);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid var(--border-light);
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-blue-medium);
  box-shadow: 0 0 0 4px rgba(56, 94, 157, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.15rem;
  background: var(--color-gold);
  color: var(--color-brown);
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(242, 169, 0, 0.35);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-btn .spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-top-color: var(--color-brown);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.api-error-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  text-align: center;
}

/* Success State */
.success-state {
  text-align: center;
  padding: 3rem 1rem;
}

.success-icon {
  color: var(--color-gold);
  margin-bottom: 1.5rem;
}

.success-state h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.success-state p {
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.reset-btn {
  background: var(--color-blue-medium);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: var(--color-blue-dark);
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
@media (max-width: 1100px) {
  .tiers-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tier-card.featured {
    transform: none;
    grid-column: span 2;
  }

  .tier-card.featured.visible {
    transform: none;
  }

  .tier-card.featured:hover {
    transform: translateY(-8px);
  }
}

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
    max-width: 500px;
    margin: 0 auto;
  }

  .image-decoration {
    display: none;
  }

  .hero-stats {
    gap: 2rem;
    flex-wrap: wrap;
  }

  .competition-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .competition-content .section-label,
  .competition-content .section-title {
    text-align: center;
  }

  .competition-description {
    text-align: center;
  }

  .floating-card {
    position: relative;
    bottom: 0;
    right: 0;
    margin-top: -30px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-info .section-label,
  .contact-info .section-title {
    text-align: center;
  }

  .contact-description {
    text-align: center;
  }

  .custom-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .sponsor-hero {
    min-height: auto;
  }

  .hero-content {
    padding: 5rem 1.5rem 3rem;
  }

  .hero-stats {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .why-sponsor,
  .competition-info,
  .sponsorship-tiers,
  .faq-section,
  .contact-section {
    padding: 4rem 0;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .tiers-grid {
    grid-template-columns: 1fr;
  }

  .tier-card.featured {
    grid-column: span 1;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1.25rem;
  }

  .form-container {
    padding: 1.5rem;
  }

  .custom-card {
    padding: 1.5rem;
  }

  .tier-card {
    padding: 1.5rem;
  }
}
</style>
