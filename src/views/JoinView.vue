<script setup>
import { ref, onMounted } from 'vue';

// Form data
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  program: '',
  year: '',
  interest: '',
  experience: '',
  resume: null,
  agreed: false
});

// Form validation
const formErrors = ref({});
const formSubmitted = ref(false);
const formSuccess = ref(false);
const isSubmitting = ref(false);

// Available programs and years for select inputs
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
];

const years = ['1st', '2nd', '3rd', '4th', '5th+', 'Graduate'];

const interestAreas = [
  'Design',
  'Manufacturing',
  'Electronics',
  'Software',
  'Project Management',
  'Marketing/Business',
  'Testing'
];

const validateForm = () => {
  const errors = {};
  
  if (!formData.value.firstName.trim()) errors.firstName = 'First name is required';
  if (!formData.value.lastName.trim()) errors.lastName = 'Last name is required';
  
  // Email validation
  if (!formData.value.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.email = 'Please enter a valid email address';
  } else if (!formData.value.email.includes('umanitoba.ca')) {
    errors.email = 'Please use your umanitoba.ca email address';
  }
  
  if (!formData.value.program) errors.program = 'Program is required';
  if (!formData.value.year) errors.year = 'Year is required';
  if (!formData.value.interest) errors.interest = 'Area of interest is required';
  if (!formData.value.experience.trim()) errors.experience = 'Please tell us about your experience';
  if (!formData.value.agreed) errors.agreed = 'You must agree to the terms';

  formErrors.value = errors;
  return Object.keys(errors).length === 0;
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.value.resume = file;
  }
};

const submitForm = async () => {
  formSubmitted.value = true;
  
  if (!validateForm()) {
    // Scroll to first error
    const firstError = document.querySelector('.error-message');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success
    formSuccess.value = true;
    
    // Reset form
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      program: '',
      year: '',
      interest: '',
      experience: '',
      resume: null,
      agreed: false
    };
    formSubmitted.value = false;
    
    // Scroll to success message
    setTimeout(() => {
      const successMessage = document.querySelector('.success-message');
      if (successMessage) {
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    
  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error submitting your application. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};

// Animation on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll('.observe-me').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <main class="join-page">
    <!-- Hero Section -->
    <section class="join-hero-section">
      <div class="hero-background">
        <div class="overlay"></div>
      </div>
      
      <div class="content-wrapper">
        <div class="hero-content">
          <h1 class="hero-title">Join <span class="highlight">UMATT</span></h1>
          <p class="hero-subtitle">
            Become part of our innovative team designing and building quarter-scale tractors
          </p>
          <a href="#application-form" class="cta-button primary">
            Apply Now
            <span class="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <div class="scroll-text">Scroll to learn more</div>
        <div class="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
    
    <!-- Why Join Section -->
    <section id="why-join" class="why-join-section observe-me">
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">Why Join <span class="highlight">UMATT</span>?</h2>
          <div class="title-underline"></div>
        </header>
        
        <div class="content-columns">
          <div class="text-column">
            <p class="lead-text">
              Joining UMATT provides university students with practical, hands-on learning experience 
              that complements classroom education and prepares you for your future career.
            </p>
            <p>
              As part of UMATT, you'll immerse yourself in a hands-on learning environment, honing 
              both technical and soft skills in areas of design, manufacturing, and marketing. This 
              experience fosters growth in teamwork, leadership, and project management which 
              complement the theoretical concepts taught in classrooms with practical, real-world 
              application.
            </p>
            <p>
              With our small yet growing team of approximately a dozen core students, UMATT 
              provides members with a diverse and involved experience, enabling a larger variety 
              of opportunities not possible on some of the larger, more established groups.
            </p>
          </div>
          
          <div class="image-column">
            <div class="image-frame">
              <img src="@/assets/images/competition-group-photo-2024.jpg" alt="UMATT team working on tractor" class="team-image">
              <div class="image-accent top-right"></div>
              <div class="image-accent bottom-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section id="benefits" class="benefits-section observe-me">
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">Member <span class="highlight">Benefits</span></h2>
          <div class="title-underline"></div>
          <p class="section-description">
            UMATT membership offers numerous advantages that enhance your university experience and career prospects
          </p>
        </header>
        
        <div class="benefits-grid">
          <!-- Benefit Card 1 -->
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 class="benefit-title">Hands-on Experience</h3>
            <p class="benefit-description">
              Apply theoretical knowledge to solve real engineering challenges and build a working quarter-scale tractor
            </p>
          </div>
          
          <!-- Benefit Card 2 -->
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22,6 12,11 2,6"></polyline>
                <path d="M12 22V11"></path>
                <path d="M22 16.92v-8.4a2 2 0 0 0-1.33-1.88l-8-3.2a2 2 0 0 0-1.34 0l-8 3.2A2 2 0 0 0 2 8.52v8.4a2 2 0 0 0 1.33 1.88l8 3.2a2 2 0 0 0 1.34 0l8-3.2A2 2 0 0 0 22 16.92z"></path>
              </svg>
            </div>
            <h3 class="benefit-title">Leadership Opportunities</h3>
            <p class="benefit-description">
              Develop project management, teamwork, and leadership skills essential for career advancement
            </p>
          </div>
          
          <!-- Benefit Card 3 -->
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3 class="benefit-title">Network Expansion</h3>
            <p class="benefit-description">
              Connect with industry professionals, sponsors, and alumni who can help guide your career path
            </p>
          </div>
          
          <!-- Benefit Card 4 -->
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
            <h3 class="benefit-title">Career Advantage</h3>
            <p class="benefit-description">
              Stand out to employers with tangible experience and demonstrable skills from competition participation
            </p>
          </div>
          
          <!-- Benefit Card 5 -->
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="benefit-title">Community</h3>
            <p class="benefit-description">
              Join a supportive community of like-minded students passionate about engineering and innovation
            </p>
          </div>
          
          <!-- Benefit Card 6 -->
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3 class="benefit-title">Competition Experience</h3>
            <p class="benefit-description">
              Participate in the exciting ASABE International ¼ Scale Competition in Peoria, Illinois
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Application Form Section -->
    <section id="application-form" class="application-section observe-me">
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">Apply to <span class="highlight">Join UMATT</span></h2>
          <div class="title-underline"></div>
          <p class="section-description">
            Fill out the form below to apply to join the University of Manitoba Association of Tiny Tractors
          </p>
        </header>
        
        <div v-if="formSuccess" class="success-message">
          <div class="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>Application Submitted Successfully!</h3>
          <p>Thank you for your interest in joining UMATT. We'll review your application and get back to you soon.</p>
        </div>
        
        <form v-else class="application-form" @submit.prevent="submitForm">
          <div class="form-grid">
            <!-- Personal Information -->
            <div class="form-section">
              <h3 class="form-section-title">Personal Information</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="formData.firstName"
                    :class="{ 'error': formSubmitted && formErrors.firstName }"
                  >
                  <p v-if="formSubmitted && formErrors.firstName" class="error-message">{{ formErrors.firstName }}</p>
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="formData.lastName"
                    :class="{ 'error': formSubmitted && formErrors.lastName }"
                  >
                  <p v-if="formSubmitted && formErrors.lastName" class="error-message">{{ formErrors.lastName }}</p>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">University Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  placeholder="your.name@umanitoba.ca"
                  :class="{ 'error': formSubmitted && formErrors.email }"
                >
                <p v-if="formSubmitted && formErrors.email" class="error-message">{{ formErrors.email }}</p>
              </div>
            </div>
            
            <!-- Academic Information -->
            <div class="form-section">
              <h3 class="form-section-title">Academic Information</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="program">Program/Major *</label>
                  <select 
                    id="program" 
                    v-model="formData.program"
                    :class="{ 'error': formSubmitted && formErrors.program }"
                  >
                    <option value="" disabled selected>Select your program</option>
                    <option v-for="program in programs" :key="program" :value="program">
                      {{ program }}
                    </option>
                  </select>
                  <p v-if="formSubmitted && formErrors.program" class="error-message">{{ formErrors.program }}</p>
                </div>
                
                <div class="form-group">
                  <label for="year">Year of Study *</label>
                  <select 
                    id="year" 
                    v-model="formData.year"
                    :class="{ 'error': formSubmitted && formErrors.year }"
                  >
                    <option value="" disabled selected>Select your year</option>
                    <option v-for="year in years" :key="year" :value="year">
                      {{ year }}
                    </option>
                  </select>
                  <p v-if="formSubmitted && formErrors.year" class="error-message">{{ formErrors.year }}</p>
                </div>
              </div>
            </div>
            
            <!-- Interest and Experience -->
            <div class="form-section">
              <h3 class="form-section-title">Interest and Experience</h3>
              
              <div class="form-group">
                <label for="interest">Primary Area of Interest *</label>
                <select 
                  id="interest" 
                  v-model="formData.interest"
                  :class="{ 'error': formSubmitted && formErrors.interest }"
                >
                  <option value="" disabled selected>Select your area of interest</option>
                  <option v-for="area in interestAreas" :key="area" :value="area">
                    {{ area }}
                  </option>
                </select>
                <p v-if="formSubmitted && formErrors.interest" class="error-message">{{ formErrors.interest }}</p>
              </div>
              
              <div class="form-group">
                <label for="experience">Relevant Experience/Skills *</label>
                <textarea 
                  id="experience" 
                  v-model="formData.experience"
                  rows="4"
                  placeholder="Describe any relevant experience, skills, or projects you've worked on..."
                  :class="{ 'error': formSubmitted && formErrors.experience }"
                ></textarea>
                <p v-if="formSubmitted && formErrors.experience" class="error-message">{{ formErrors.experience }}</p>
              </div>
              
              <div class="form-group">
                <label for="resume">Resume (PDF, optional)</label>
                <input 
                  type="file" 
                  id="resume" 
                  @change="handleFileChange"
                  accept=".pdf"
                >
              </div>
            </div>
          </div>
          
          <!-- Terms and Submit -->
          <div class="form-footer">
            <div class="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="agreed" 
                v-model="formData.agreed"
                :class="{ 'error': formSubmitted && formErrors.agreed }"
              >
              <label for="agreed">
                I understand that by submitting this application, I am expressing interest in joining UMATT. 
                If selected, I will commit to participating in team activities and contributing to the project. *
              </label>
              <p v-if="formSubmitted && formErrors.agreed" class="error-message">{{ formErrors.agreed }}</p>
            </div>
            
            <div class="submit-container">
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                <span v-if="isSubmitting">
                  <svg class="spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                  </svg>
                  Submitting...
                </span>
                <span v-else>Submit Application</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Main styles */
.join-page {
  background: var(--umatt-c-background-light, #f5f5f5);
}

/* Hero section styles */
.join-hero-section {
  position: relative;
  height: calc(70vh - var(--navbar-height));
  min-height: 400px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: var(--navbar-height);
  color: var(--color-white, #ffffff);
  font-family: 'Poppins', sans-serif;
}

/* Background elements */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.45) 50%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('@/assets/images/competition-team-photo-2024.jpg') no-repeat center center;
  background-size: cover;
}

/* Content styles */
.content-wrapper {
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  opacity: 0;
  animation: fade-in 1s ease-out forwards 0.3s;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 400;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.5;
}

.highlight {
  color: var(--color-gold, #F2A900);
  position: relative;
  display: inline-block;
}

/* CTA Button */
.cta-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.75rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  z-index: 2;
}

.cta-button.primary {
  background: linear-gradient(45deg, #2d4a7d 0%, var(--color-blue-medium, #385E9D) 100%);
  color: var(--color-white, #ffffff);
  box-shadow: 
    0 10px 20px -10px rgba(56, 94, 157, 0.5),
    0 1px 3px rgba(0, 0, 0, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.1) inset;
}

.cta-button.primary:hover {
  background: linear-gradient(45deg, #243d68 0%, #2d4a7d 100%);
  transform: translateY(-3px);
  box-shadow: 
    0 14px 24px -8px rgba(56, 94, 157, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.2) inset;
}

.button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fade-in 1s ease-out forwards 1.5s;
  z-index: 10;
}

.scroll-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.scroll-arrow {
  position: relative;
  width: 24px;
  height: 24px;
}

.scroll-arrow span {
  position: absolute;
  top: 0;
  left: 8px;
  width: 8px;
  height: 8px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  border-right: 2px solid rgba(255, 255, 255, 0.8);
  transform: rotate(45deg);
  animation: scroll-down 2s infinite;
  opacity: 0;
}

.scroll-arrow span:nth-child(1) {
  animation-delay: 0s;
}

.scroll-arrow span:nth-child(2) {
  top: 6px;
  animation-delay: 0.15s;
}

.scroll-arrow span:nth-child(3) {
  top: 12px;
  animation-delay: 0.3s;
}

@keyframes scroll-down {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(8px, 8px);
  }
}

/* Section styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--umatt-c-text-dark, #333);
  margin-bottom: 1rem;
}

.title-underline {
  height: 4px;
  width: 80px;
  background: var(--color-gold, #F2A900);
  margin: 0 auto;
}

.section-description {
  max-width: 800px;
  margin: 1.5rem auto 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--umatt-c-text-medium, #555);
}

/* Why Join Section */
.why-join-section {
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.content-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.text-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.lead-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--umatt-c-text-dark, #333);
  line-height: 1.6;
}

.text-column p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--umatt-c-text-medium, #555);
}

.image-column {
  position: relative;
}

.image-frame {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-5deg) rotateX(3deg);
}

.team-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s ease;
}

.image-frame:hover .team-image {
  transform: scale(1.05);
}

.image-accent {
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 1;
}

.image-accent.top-right {
  top: -20px;
  right: -20px;
  background-color: var(--color-gold, #F2A900);
  border-radius: 50%;
}

.image-accent.bottom-left {
  bottom: -20px;
  left: -20px;
  background-color: var(--color-blue-light, #60A3D9);
  border-radius: 12px;
}

/* Benefits Section */
.benefits-section {
  background-color: var(--umatt-c-background-medium, #f0f0f0);
  position: relative;
  overflow: hidden;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 4px solid transparent;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  border-bottom-color: var(--color-gold, #F2A900);
}

.benefit-icon {
  margin-bottom: 1.5rem;
  color: var(--color-blue-medium, #385E9D);
  background: rgba(56, 94, 157, 0.1);
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--umatt-c-text-dark, #333);
}

.benefit-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--umatt-c-text-medium, #555);
}

/* Application Form Section */
.application-section {
  background-color: #fff;
  position: relative;
}

.application-form {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--umatt-c-text-dark, #333);
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(242, 169, 0, 0.3);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: var(--umatt-c-text-dark, #333);
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-blue-medium, #385E9D);
  box-shadow: 0 0 0 3px rgba(56, 94, 157, 0.2);
  outline: none;
}

.form-group input[type="file"] {
  padding: 0.75rem 0;
}

.checkbox-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 1rem;
}

.checkbox-group label {
  font-size: 0.9rem;
  font-weight: normal;
  margin-bottom: 0;
}

.checkbox-group input[type="checkbox"] {
  margin-top: 0.15rem;
}

.form-footer {
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
}

.submit-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.submit-button {
  background: var(--color-gold, #F2A900);
  color: #000;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;
  min-width: 200px;
}

.submit-button:hover {
  background: #d99400;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(242, 169, 0, 0.25);
}

.submit-button:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.error {
  border-color: #e74c3c !important;
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

/* Success Message */
.success-message {
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.success-icon {
  margin: 0 auto 1.5rem;
  color: #2ecc71;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 50%;
}

.success-message h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.success-message p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

/* Loading spinner */
.spinner {
  animation: rotate 2s linear infinite;
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

.path {
  stroke: currentColor;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

/* Animation classes */
.observe-me {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.observe-me.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .content-columns {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .image-column {
    order: -1;
  }
  
  .image-frame {
    transform: none;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .container {
    padding: 3rem 1.25rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .benefit-card {
    padding: 1.5rem;
  }
  
  .application-form {
    padding: 1.5rem;
  }
}
</style>