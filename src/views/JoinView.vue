<script setup>
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import { RouterLink } from 'vue-router'

// Form data
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  program: '',
  year: '',
  interest: '',
  experience: '',
  resumeLink: '',
  agreed: false
})

// Form validation
const formErrors = ref({})
const formSubmitted = ref(false)
const formSuccess = ref(false)
const isSubmitting = ref(false)
const showResumeInstructions = ref(false)

// Options
const programs = [
  'Engineering - Biosystems',
  'Engineering - Mechanical',
  'Engineering - Electrical',
  'Engineering - Computer',
  'Engineering - Other',
  'Agriculture',
  'Computer Science',
  'Business',
  'Other'
]

const years = ['1st', '2nd', '3rd', '4th', '5th+', 'Graduate']

const interestAreas = [
  'Design',
  'Manufacturing',
  'Electronics',
  'Software',
  'Project Management',
  'Marketing/Business',
  'Testing'
]

// Benefits data
const benefits = [
  {
    icon: 'tools',
    title: 'Hands-On Experience',
    description: 'Work on real engineering projects with cutting-edge technology and machinery.'
  },
  {
    icon: 'users',
    title: 'Networking',
    description:
      'Connect with industry professionals, sponsors, and like-minded engineering students.'
  },
  {
    icon: 'trophy',
    title: 'Competitions',
    description: 'Represent UM at national and international quarter-scale tractor competitions.'
  },
  {
    icon: 'book',
    title: 'Skill Development',
    description: 'Develop technical and soft skills that complement your classroom education.'
  },
  {
    icon: 'briefcase',
    title: 'Career Advancement',
    description: 'Build an impressive portfolio and gain experience valued by employers.'
  },
  {
    icon: 'heart',
    title: 'Team Community',
    description: 'Join a supportive community of passionate students working towards shared goals.'
  }
]

// Form step navigation
const currentStep = ref(1)
const totalSteps = 4
const stepTitles = ['Personal Info', 'Academic', 'Experience', 'Review']

const validateForm = () => {
  const errors = {}

  if (!formData.value.firstName.trim()) errors.firstName = 'First name is required'
  if (!formData.value.lastName.trim()) errors.lastName = 'Last name is required'

  if (!formData.value.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.email = 'Please enter a valid email address'
  } else if (!formData.value.email.endsWith('myumanitoba.ca')) {
    errors.email = 'Please use your myumanitoba.ca email address'
  }

  if (!formData.value.program) errors.program = 'Program is required'
  if (!formData.value.year) errors.year = 'Year is required'
  if (!formData.value.interest) errors.interest = 'Area of interest is required'
  if (!formData.value.experience.trim()) errors.experience = 'Please tell us about your experience'
  if (!formData.value.agreed) errors.agreed = 'You must agree to the terms'

  formErrors.value = errors
  return Object.keys(errors).length === 0
}

const submitForm = async () => {
  formSubmitted.value = true

  if (!validateForm()) {
    const firstError = document.querySelector('.error-message')
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return
  }

  isSubmitting.value = true

  try {
    const templateParams = {
      title: formData.value.firstName + ' ' + formData.value.lastName,
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      email: formData.value.email,
      program: formData.value.program,
      year: formData.value.year,
      interest: formData.value.interest,
      experience: formData.value.experience,
      resumeLink: formData.value.resumeLink,
      hasResumeLink: formData.value.resumeLink ? true : false,
      submissionDate: new Date().toLocaleString(),
      currentYear: new Date().getFullYear()
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    await emailjs.send(serviceId, templateId, templateParams, publicKey)

    formSuccess.value = true
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      program: '',
      year: '',
      interest: '',
      experience: '',
      resumeLink: '',
      agreed: false
    }
    formSubmitted.value = false

    setTimeout(() => {
      const successMessage = document.querySelector('.success-message')
      if (successMessage) {
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error submitting your application. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const goToNextStep = () => {
  const errors = {}

  if (currentStep.value === 1) {
    if (!formData.value.firstName.trim()) errors.firstName = 'First name is required'
    if (!formData.value.lastName.trim()) errors.lastName = 'Last name is required'
    if (!formData.value.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
      errors.email = 'Please enter a valid email address'
    } else if (!formData.value.email.includes('umanitoba.ca')) {
      errors.email = 'Please use your myumanitoba.ca email address'
    }
  } else if (currentStep.value === 2) {
    if (!formData.value.program) errors.program = 'Program is required'
    if (!formData.value.year) errors.year = 'Year is required'
  } else if (currentStep.value === 3) {
    if (!formData.value.interest) errors.interest = 'Area of interest is required'
    if (!formData.value.experience.trim())
      errors.experience = 'Please tell us about your experience'
  }

  formErrors.value = errors

  if (Object.keys(errors).length === 0) {
    if (currentStep.value < totalSteps) {
      currentStep.value++
      setTimeout(() => {
        document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }
}

const goToPreviousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    setTimeout(() => {
      document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }
}

const goToStep = (step) => {
  if (step < currentStep.value) {
    currentStep.value = step
  }
}

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
  <div class="join-page">
    <!-- Hero Section -->
    <section class="join-hero">
      <div class="hero-background">
        <div class="hero-image-bg"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badge">
          <span>🚀 Start Your Journey</span>
        </div>
        <h1 class="hero-title">Join <span class="highlight">UMATT</span></h1>
        <p class="hero-description">
          Become part of our innovative team designing and building quarter-scale autonomous
          tractors. Gain hands-on experience and make lifelong connections.
        </p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-number">25+</span>
            <span class="hero-stat-label">Active Members</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-number">5</span>
            <span class="hero-stat-label">Departments</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-number">100%</span>
            <span class="hero-stat-label">Learning Growth</span>
          </div>
        </div>
        <a href="#application-form" class="btn btn-primary">
          Apply Now
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
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>

    <!-- Why Join Section -->
    <section class="why-join-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Why Join Us</span>
          <h2 class="section-title">Why Join <span class="highlight">UMATT?</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            UMATT provides university students with practical, hands-on learning that complements
            classroom education and prepares you for your career.
          </p>
        </div>

        <div class="why-join-content">
          <div class="why-join-text">
            <p class="lead-text">
              As part of UMATT, you'll immerse yourself in a hands-on learning environment, honing
              both technical and soft skills in design, manufacturing, and marketing.
            </p>
            <p>
              This experience fosters growth in teamwork, leadership, and project management which
              complement the theoretical concepts taught in classrooms with practical, real-world
              application.
            </p>
            <p>
              With our small yet growing team of approximately a dozen core students, UMATT provides
              members with a diverse and involved experience, enabling a larger variety of
              opportunities not possible on some of the larger, more established groups.
            </p>
            <div class="why-join-cta">
              <RouterLink to="/about" class="text-link">
                Learn more about us
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
          </div>
          <div class="why-join-image">
            <div class="image-wrapper">
              <img
                src="@/assets/images/competition-group-photo-2024.jpg"
                alt="UMATT team at competition"
              />
              <div class="image-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Member Benefits</span>
          <h2 class="section-title">What You'll <span class="highlight">Gain</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            UMATT membership offers numerous advantages that enhance your university experience and
            career prospects.
          </p>
        </div>

        <div class="benefits-grid">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="benefit-card animate-on-scroll"
          >
            <div class="benefit-icon" :class="index % 2 === 0 ? 'blue' : 'gold'">
              <svg
                v-if="benefit.icon === 'tools'"
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
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                />
              </svg>
              <svg
                v-else-if="benefit.icon === 'users'"
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
              <svg
                v-else-if="benefit.icon === 'trophy'"
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
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <svg
                v-else-if="benefit.icon === 'book'"
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
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <svg
                v-else-if="benefit.icon === 'briefcase'"
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
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <svg
                v-else
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

    <!-- Application Form Section -->
    <section id="application-form" class="application-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Apply Now</span>
          <h2 class="section-title">Join Our <span class="highlight">Team</span></h2>
          <div class="title-underline"></div>
          <p class="section-subtitle">
            Fill out the form below to express your interest in joining UMATT. We'll review your
            application and get back to you soon.
          </p>
        </div>

        <!-- Success Message -->
        <div v-if="formSuccess" class="success-message">
          <div class="success-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>Application Submitted Successfully!</h3>
          <p>
            Thank you for your interest in joining UMATT. We'll review your application and get back
            to you soon.
          </p>
          <RouterLink to="/" class="btn btn-primary">Back to Home</RouterLink>
        </div>

        <!-- Application Form -->
        <form v-else class="form-card" @submit.prevent="submitForm">
          <!-- Step Indicators -->
          <div class="step-indicators">
            <div
              v-for="(title, index) in stepTitles"
              :key="index"
              class="step-indicator"
              :class="{
                active: index + 1 === currentStep,
                completed: index + 1 < currentStep
              }"
              @click="goToStep(index + 1)"
            >
              <div class="step-number">
                <span v-if="index + 1 < currentStep" class="check-icon">✓</span>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <span class="step-title">{{ title }}</span>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="progress-bar-container">
            <div
              class="progress-bar"
              :style="{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }"
            ></div>
          </div>

          <!-- Step 1: Personal Information -->
          <div v-if="currentStep === 1" class="form-step">
            <h3 class="step-heading">Personal Information</h3>

            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name <span class="required">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  v-model="formData.firstName"
                  :class="{ error: formErrors.firstName }"
                  placeholder="Enter your first name"
                />
                <p v-if="formErrors.firstName" class="error-message">{{ formErrors.firstName }}</p>
              </div>

              <div class="form-group">
                <label for="lastName">Last Name <span class="required">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  v-model="formData.lastName"
                  :class="{ error: formErrors.lastName }"
                  placeholder="Enter your last name"
                />
                <p v-if="formErrors.lastName" class="error-message">{{ formErrors.lastName }}</p>
              </div>
            </div>

            <div class="form-group">
              <label for="email">University Email <span class="required">*</span></label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="yourname@myumanitoba.ca"
                :class="{ error: formErrors.email }"
              />
              <p v-if="formErrors.email" class="error-message">{{ formErrors.email }}</p>
            </div>
          </div>

          <!-- Step 2: Academic Information -->
          <div v-if="currentStep === 2" class="form-step">
            <h3 class="step-heading">Academic Information</h3>

            <div class="form-row">
              <div class="form-group">
                <label for="program">Program/Major <span class="required">*</span></label>
                <select
                  id="program"
                  v-model="formData.program"
                  :class="{ error: formErrors.program }"
                >
                  <option value="" disabled>Select your program</option>
                  <option v-for="program in programs" :key="program" :value="program">
                    {{ program }}
                  </option>
                </select>
                <p v-if="formErrors.program" class="error-message">{{ formErrors.program }}</p>
              </div>

              <div class="form-group">
                <label for="year">Year of Study <span class="required">*</span></label>
                <select id="year" v-model="formData.year" :class="{ error: formErrors.year }">
                  <option value="" disabled>Select your year</option>
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
                <p v-if="formErrors.year" class="error-message">{{ formErrors.year }}</p>
              </div>
            </div>
          </div>

          <!-- Step 3: Interest and Experience -->
          <div v-if="currentStep === 3" class="form-step">
            <h3 class="step-heading">Interest & Experience</h3>

            <div class="form-group">
              <label for="interest">Primary Area of Interest <span class="required">*</span></label>
              <select
                id="interest"
                v-model="formData.interest"
                :class="{ error: formErrors.interest }"
              >
                <option value="" disabled>Select your area of interest</option>
                <option v-for="area in interestAreas" :key="area" :value="area">
                  {{ area }}
                </option>
              </select>
              <p v-if="formErrors.interest" class="error-message">{{ formErrors.interest }}</p>
            </div>

            <div class="form-group">
              <label for="experience"
                >Relevant Experience/Skills <span class="required">*</span></label
              >
              <textarea
                id="experience"
                v-model="formData.experience"
                rows="4"
                placeholder="Describe any relevant experience, skills, or projects you've worked on..."
                :class="{ error: formErrors.experience }"
              ></textarea>
              <p v-if="formErrors.experience" class="error-message">{{ formErrors.experience }}</p>
            </div>

            <div class="form-group">
              <label for="resumeLink">Resume Link (Optional)</label>
              <input
                type="url"
                id="resumeLink"
                v-model="formData.resumeLink"
                placeholder="https://drive.google.com/..."
              />
              <button
                type="button"
                class="toggle-instructions"
                @click="showResumeInstructions = !showResumeInstructions"
              >
                <span>{{ showResumeInstructions ? 'Hide' : 'Show' }} sharing instructions</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  :class="{ rotated: showResumeInstructions }"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div v-if="showResumeInstructions" class="instructions-box">
                <p><strong>How to share your resume:</strong></p>
                <ol>
                  <li>Upload your resume to Google Drive or OneDrive</li>
                  <li>Right-click the file and select "Share" or "Get link"</li>
                  <li>Set permissions to "Anyone with the link can view"</li>
                  <li>Copy the link and paste it above</li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Step 4: Review & Submit -->
          <div v-if="currentStep === 4" class="form-step">
            <h3 class="step-heading">Review & Submit</h3>

            <div class="review-card">
              <div class="review-section">
                <h4>Personal Information</h4>
                <div class="review-row">
                  <span class="review-label">Name:</span>
                  <span class="review-value">{{ formData.firstName }} {{ formData.lastName }}</span>
                </div>
                <div class="review-row">
                  <span class="review-label">Email:</span>
                  <span class="review-value">{{ formData.email }}</span>
                </div>
              </div>

              <div class="review-section">
                <h4>Academic Information</h4>
                <div class="review-row">
                  <span class="review-label">Program:</span>
                  <span class="review-value">{{ formData.program }}</span>
                </div>
                <div class="review-row">
                  <span class="review-label">Year:</span>
                  <span class="review-value">{{ formData.year }}</span>
                </div>
              </div>

              <div class="review-section">
                <h4>Interest & Experience</h4>
                <div class="review-row">
                  <span class="review-label">Interest Area:</span>
                  <span class="review-value">{{ formData.interest }}</span>
                </div>
                <div class="review-row">
                  <span class="review-label">Resume:</span>
                  <span class="review-value">{{
                    formData.resumeLink ? 'Link provided' : 'Not provided'
                  }}</span>
                </div>
              </div>
            </div>

            <div class="checkbox-group">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formData.agreed"
                  :class="{ error: formSubmitted && formErrors.agreed }"
                />
                <span class="checkmark"></span>
                <span class="checkbox-text">
                  I understand that by submitting this application, I am expressing interest in
                  joining UMATT. If selected, I will commit to participating in team activities and
                  contributing to the project. <span class="required">*</span>
                </span>
              </label>
              <p v-if="formSubmitted && formErrors.agreed" class="error-message">
                {{ formErrors.agreed }}
              </p>
            </div>
          </div>

          <!-- Form Navigation -->
          <div class="form-navigation">
            <button
              type="button"
              class="btn btn-secondary"
              v-if="currentStep > 1"
              @click="goToPreviousStep"
            >
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
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Previous
            </button>
            <div v-else></div>

            <button
              type="button"
              class="btn btn-primary"
              v-if="currentStep < totalSteps"
              @click="goToNextStep"
            >
              Next
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
            </button>

            <button
              type="submit"
              class="btn btn-submit"
              v-if="currentStep === totalSteps"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="spinner"></span>
              <span>{{ isSubmitting ? 'Submitting...' : 'Submit Application' }}</span>
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Contact Banner - Simple Style -->
    <section class="contact-banner">
      <div class="container">
        <div class="banner-content">
          <div class="banner-text">
            <h3 class="banner-title">Have Questions?</h3>
            <p class="banner-description">We're here to help with any questions about joining UMATT.</p>
          </div>
          <div class="banner-actions">
            <a href="mailto:umattinfo@gmail.com" class="banner-email">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              umattinfo@gmail.com
            </a>
            <RouterLink to="/about" class="banner-link">
              Learn more about us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.join-page {
  font-family: 'Poppins', sans-serif;
}

/* ============================================
   HERO SECTION - Full-viewport with background image
   ============================================ */
.join-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  z-index: 0;
}

.hero-image-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/competition-team-photo-2024.jpg') no-repeat center center;
  background-size: cover;
  animation: subtle-zoom 20s ease-in-out infinite alternate;
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
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 8rem 2rem 6rem;
  max-width: 850px;
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
  box-shadow: 0 8px 25px rgba(242, 169, 0, 0.3);
  animation: fade-in-down 0.8s ease-out;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.25rem;
  line-height: 1.1;
  animation: fade-in-down 0.8s ease-out 0.1s both;
}

.hero-title .highlight {
  color: var(--color-gold);
  text-shadow: 0 2px 20px rgba(242, 169, 0, 0.4);
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fade-in-up 0.8s ease-out 0.2s both;
}

/* Inline Hero Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
  animation: fade-in-up 0.8s ease-out 0.3s both;
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

@keyframes subtle-zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
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

/* ============================================
   WHY JOIN SECTION
   ============================================ */
.why-join-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.why-join-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.why-join-text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.lead-text {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.7;
}

.why-join-text p {
  font-size: 1rem;
  color: var(--text-tertiary);
  line-height: 1.8;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-blue-medium);
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.text-link:hover {
  color: var(--color-gold);
  gap: 0.75rem;
}

.why-join-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-wrapper:hover img {
  transform: scale(1.03);
}

.image-accent {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 120px;
  height: 120px;
  background: var(--color-gold);
  border-radius: 16px;
  z-index: -1;
}

/* ============================================
   BENEFITS SECTION
   ============================================ */
.benefits-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: var(--card-bg, white);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
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

.benefit-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.benefit-icon.blue {
  background: var(--color-blue-medium);
  color: white;
}

.benefit-icon.gold {
  background: var(--color-gold);
  color: var(--color-brown);
}

.benefit-title {
  font-size: 1.2rem;
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
   APPLICATION SECTION
   ============================================ */
.application-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.success-message {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
  background: #f0fff4;
  border: 1px solid #86efac;
  border-radius: 16px;
}

.success-icon {
  color: #22c55e;
  margin-bottom: 1.5rem;
}

.success-message h3 {
  font-size: 1.5rem;
  color: #166534;
  margin-bottom: 1rem;
}

.success-message p {
  color: var(--text-tertiary);
  margin-bottom: 2rem;
}

.form-card {
  max-width: 800px;
  margin: 0 auto;
  background: var(--card-bg, white);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-light);
}

/* Step Indicators */
.step-indicators {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  cursor: pointer;
}

.step-number {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--text-tertiary);
  transition: all 0.3s ease;
}

.step-indicator.active .step-number {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-brown);
  transform: scale(1.1);
  box-shadow: 0 0 0 4px rgba(242, 169, 0, 0.2);
}

.step-indicator.completed .step-number {
  background: var(--color-blue-medium);
  border-color: var(--color-blue-medium);
  color: white;
}

.step-title {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  font-weight: 500;
  text-align: center;
}

.step-indicator.active .step-title {
  color: var(--text-primary);
  font-weight: 600;
}

.step-indicator.completed .step-title {
  color: var(--color-blue-medium);
}

/* Progress Bar */
.progress-bar-container {
  height: 6px;
  background: var(--bg-secondary);
  border-radius: 3px;
  margin: 0 5% 2.5rem;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-gold), var(--color-gold-light));
  border-radius: 3px;
  transition: width 0.4s ease;
}

/* Form Steps */
.form-step {
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 16px;
  border-left: 4px solid var(--color-gold);
}

.step-heading {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(242, 169, 0, 0.2);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}

.required {
  color: #ef4444;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--border-light);
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--text-primary);
  background: white;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-blue-medium);
  box-shadow: 0 0 0 3px rgba(56, 94, 157, 0.1);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #ef4444;
  background: #fef2f2;
}

.error-message {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.toggle-instructions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: var(--bg-secondary);
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  color: var(--color-blue-medium);
  cursor: pointer;
  transition: background 0.2s ease;
}

.toggle-instructions:hover {
  background: var(--border-light);
}

.toggle-instructions svg {
  transition: transform 0.3s ease;
}

.toggle-instructions svg.rotated {
  transform: rotate(180deg);
}

.instructions-box {
  margin-top: 0.75rem;
  padding: 1rem;
  background: #f0f7ff;
  border: 1px solid #bfdbfe;
  border-left: 3px solid var(--color-blue-medium);
  border-radius: 8px;
  font-size: 0.9rem;
}

.instructions-box ol {
  margin: 0.5rem 0 0 1.25rem;
  padding: 0;
}

.instructions-box li {
  margin-bottom: 0.4rem;
  color: var(--text-tertiary);
}

/* Review Card */
.review-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.review-section {
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-light);
}

.review-section:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}

.review-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-blue-medium);
  margin-bottom: 0.75rem;
}

.review-row {
  display: flex;
  margin-bottom: 0.5rem;
}

.review-label {
  font-weight: 600;
  width: 120px;
  color: var(--text-tertiary);
}

.review-value {
  color: var(--text-primary);
}

/* Checkbox */
.checkbox-group {
  margin-top: 1rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
}

.checkbox-label input[type='checkbox'] {
  width: 20px;
  height: 20px;
  margin-top: 0.15rem;
  accent-color: var(--color-blue-medium);
}

.checkbox-text {
  font-size: 0.95rem;
  color: var(--text-tertiary);
  line-height: 1.6;
}

/* Form Navigation */
.form-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-light);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
}

.btn-primary {
  background: var(--color-gold);
  color: var(--color-brown);
}

.btn-primary:hover {
  background: var(--color-gold-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(242, 169, 0, 0.3);
}

.btn-secondary {
  background: white;
  color: var(--text-tertiary);
  border: 1px solid var(--border-light);
}

.btn-secondary:hover {
  background: var(--bg-secondary);
}

.btn-submit {
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
  color: var(--color-brown);
  min-width: 200px;
  justify-content: center;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(242, 169, 0, 0.4);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-top-color: var(--color-brown);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

/* ============================================
   CONTACT BANNER SECTION (Unique to Join Page)
   ============================================ */
.contact-banner {
  background: linear-gradient(135deg, #5D4037 0%, #4E342E 100%);
  padding: 3.5rem 2rem;
  position: relative;
  overflow: hidden;
}

.contact-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(242, 169, 0, 0.1) 0%, transparent 60%);
  pointer-events: none;
}

.contact-banner .container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.banner-text {
  flex: 1;
  min-width: 280px;
}

.banner-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}

.banner-description {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.banner-email {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  background: var(--color-gold);
  color: #3d2d24;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.banner-email:hover {
  background: #ffbb33;
  box-shadow: 0 8px 20px rgba(242, 169, 0, 0.3);
  transform: translateY(-2px);
}

.banner-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
}

.banner-link:hover {
  color: var(--color-gold);
  border-bottom-color: var(--color-gold);
}

.banner-link svg {
  transition: transform 0.3s ease;
}

.banner-link:hover svg {
  transform: translateX(4px);
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
@media (max-width: 768px) {
  .join-hero {
    min-height: 85vh;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .why-join-section,
  .benefits-section,
  .application-section {
    padding: 4rem 1.5rem;
  }

  .contact-banner {
    padding: 3rem 1.5rem;
  }

  .banner-content {
    flex-direction: column;
    text-align: center;
  }

  .banner-actions {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .banner-email {
    width: 100%;
    justify-content: center;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .why-join-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .why-join-image {
    order: -1;
  }

  .image-accent {
    width: 80px;
    height: 80px;
    bottom: -10px;
    right: -10px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: 1.5rem;
  }

  .step-title {
    display: none;
  }

  .step-indicators {
    margin-bottom: 1.5rem;
  }

  .progress-bar-container {
    margin-bottom: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-step {
    padding: 1.5rem;
  }

  .form-navigation {
    flex-direction: column;
    gap: 1rem;
  }

  .form-navigation .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 5rem 1.25rem 3rem;
  }

  .container {
    padding: 0 1.25rem;
  }

  .step-number {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  .contact-banner {
    padding: 2.5rem 1rem;
  }

  .banner-title {
    font-size: 1.5rem;
  }

  .banner-description {
    font-size: 0.95rem;
  }
}
</style>
