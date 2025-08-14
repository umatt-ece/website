<script setup>
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';
import BenefitsGrid from '../components/BenefitsGrid.vue';
import BenefitCard from '../components/BenefitCard.vue';
import { joinBenefits } from '../constants';

// Form data
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  program: '',
  year: '',
  interest: '',
  experience: '',
  resumeLink: '', // Replace resume file with link
  agreed: false
});

// Form validation
const formErrors = ref({});
const formSubmitted = ref(false);
const formSuccess = ref(false);
const isSubmitting = ref(false);

// Show resume instructions
const showResumeInstructions = ref(false);

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

// Form step navigation
const currentStep = ref(1);
const totalSteps = 4;
const stepTitles = [
  'Personal Information',
  'Academic Information',
  'Interest & Experience',
  'Review & Submit'
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
  } else if (!formData.value.email.endsWith('myumanitoba.ca')) {
    errors.email = 'Please use your myumanitoba.ca email address';
  }
  
  if (!formData.value.program) errors.program = 'Program is required';
  if (!formData.value.year) errors.year = 'Year is required';
  if (!formData.value.interest) errors.interest = 'Area of interest is required';
  if (!formData.value.experience.trim()) errors.experience = 'Please tell us about your experience';
  if (!formData.value.agreed) errors.agreed = 'You must agree to the terms';

  formErrors.value = errors;
  return Object.keys(errors).length === 0;
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
    // Prepare data for EmailJS
    const templateParams = {
      title: formData.value.firstName + ' ' + formData.value.lastName,
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      email: formData.value.email,
      program: formData.value.program,
      year: formData.value.year,
      interest: formData.value.interest,
      experience: formData.value.experience,
      resumeLink: formData.value.resumeLink, // Send the raw link
      hasResumeLink: formData.value.resumeLink ? true : false,
      submissionDate: new Date().toLocaleString(),
      currentYear: new Date().getFullYear()
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey);

    // Send email using EmailJS
    await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    
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
      resumeLink: '', // Updated from resume: null
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

// Go to next step with validation
const goToNextStep = () => {
  // Validate current step
  const errors = {};
  
  if (currentStep.value === 1) {
    if (!formData.value.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.value.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.value.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
      errors.email = 'Please enter a valid email address';
    } else if (!formData.value.email.includes('umanitoba.ca')) {
      errors.email = 'Please use your myumanitoba.ca email address';
    }
  } else if (currentStep.value === 2) {
    if (!formData.value.program) errors.program = 'Program is required';
    if (!formData.value.year) errors.year = 'Year is required';
  } else if (currentStep.value === 3) {
    if (!formData.value.interest) errors.interest = 'Area of interest is required';
    if (!formData.value.experience.trim()) errors.experience = 'Please tell us about your experience';
  }
  
  formErrors.value = errors;
  
  // If no errors, proceed to next step
  if (Object.keys(errors).length === 0) {
    if (currentStep.value < totalSteps) {
      currentStep.value++;
      // Scroll to top of form
      setTimeout(() => {
        document.querySelector('.form-steps-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
};

// Go to previous step
const goToPreviousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    // Scroll to top of form
    setTimeout(() => {
      document.querySelector('.form-steps-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
};

// Go to specific step (only allow going to previous completed steps)
const goToStep = (step) => {
  if (step < currentStep.value) {
    currentStep.value = step;
    // Scroll to top of form
    setTimeout(() => {
      document.querySelector('.form-steps-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
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
  
  // Select specific text elements for animations
  document.querySelectorAll('.animate-text, .animate-fade, .animate-slide, .animate-zoom, .animate-pop')
    .forEach((el) => {
      observer.observe(el);
    });
});
</script>

<template>
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
    
  </section>
  
  <!-- Why Join Section -->
  <section id="why-join" class="why-join-section">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title animate-text">Why Join <span class="highlight">UMATT</span>?</h2>
        <div class="title-underline animate-slide delay-200"></div>
      </header>
      
      <div class="content-columns">
        <div class="text-column">
          <p class="lead-text animate-fade delay-300">
            Joining UMATT provides university students with practical, hands-on learning experience 
            that complements classroom education and prepares you for your future career.
          </p>
          <p class="animate-fade delay-400">
            As part of UMATT, you'll immerse yourself in a hands-on learning environment, honing 
            both technical and soft skills in areas of design, manufacturing, and marketing. This 
            experience fosters growth in teamwork, leadership, and project management which 
            complement the theoretical concepts taught in classrooms with practical, real-world 
            application.
          </p>
          <p class="animate-fade delay-500">
            With our small yet growing team of approximately a dozen core students, UMATT 
            provides members with a diverse and involved experience, enabling a larger variety 
            of opportunities not possible on some of the larger, more established groups.
          </p>
        </div>
        
        <div class="image-column">
          <div class="image-frame animate-zoom delay-300">
            <img src="@/assets/images/competition-group-photo-2024.jpg" alt="UMATT team working on tractor" class="team-image">
            
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Benefits Section -->
  <section id="benefits" class="benefits-section">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title animate-text">Member <span class="highlight">Benefits</span></h2>
        <div class="title-underline animate-slide delay-200"></div>
        <p class="section-description animate-fade delay-300">
          UMATT membership offers numerous advantages that enhance your university experience and career prospects
        </p>
      </header>
      
      <BenefitsGrid :benefits="joinBenefits">
        <template #benefit="{ benefit }">
          <!-- Here we apply animation classes to the vanilla BenefitCard -->
          <div :class="`animate-pop delay-${(benefit.id * 100)}`">
            <BenefitCard :benefit="benefit" />
          </div>
        </template>
      </BenefitsGrid>
    </div>
  </section>
  
  <!-- Application Form Section -->
  <section id="application-form" class="application-section">
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
      
      <!-- Replace the existing application form with this carousel version -->
      <form v-else class="application-form" @submit.prevent="submitForm">
        <div class="form-steps-container">
          <!-- Breadcrumbs navigation -->
          <div class="form-breadcrumbs">
            <div 
              v-for="(title, index) in stepTitles" 
              :key="index"
              class="breadcrumb-step"
              :class="{
                'active': index + 1 === currentStep,
                'completed': index + 1 < currentStep,
                'clickable': index + 1 < currentStep
              }"
              @click="goToStep(index + 1)"
            >
              <div class="step-indicator">
                <span v-if="index + 1 < currentStep" class="step-check">✓</span>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <span class="step-title">{{ title }}</span>
            </div>
          </div>
          
          <!-- Progress bar -->
          <div class="progress-container">
            <div class="progress-bar" :style="{width: `${(currentStep - 1) / (totalSteps - 1) * 100}%`}"></div>
          </div>

          <!-- Form steps content -->
          <div class="form-grid">
            <!-- Step 1: Personal Information -->
            <div v-if="currentStep === 1" class="form-section">
              <h3 class="form-section-title">Personal Information</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name<span class="required"> *</span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="formData.firstName"
                    :class="{ 'error': formErrors.firstName }"
                  >
                  <p v-if="formErrors.firstName" class="error-message">{{ formErrors.firstName }}</p>
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name<span class="required"> *</span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="formData.lastName"
                    :class="{ 'error': formErrors.lastName }"
                  >
                  <p v-if="formErrors.lastName" class="error-message">{{ formErrors.lastName }}</p>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">University Email<span class="required"> *</span></label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  placeholder="e.g., john.doe@myumanitoba.ca"
                  :class="{ 'error': formErrors.email }"
                >
                <p v-if="formErrors.email" class="error-message">{{ formErrors.email }}</p>
              </div>
            </div>
            
            <!-- Step 2: Academic Information -->
            <div v-if="currentStep === 2" class="form-section">
              <h3 class="form-section-title">Academic Information</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="program">Program/Major<span class="required"> *</span></label>
                  <select 
                    id="program" 
                    v-model="formData.program"
                    :class="{ 'error': formErrors.program }"
                  >
                    <option value="" disabled>Select your program</option>
                    <option v-for="program in programs" :key="program" :value="program">
                      {{ program }}
                    </option>
                  </select>
                  <p v-if="formErrors.program" class="error-message">{{ formErrors.program }}</p>
                </div>
                
                <div class="form-group">
                  <label for="year">Year of Study<span class="required"> *</span></label>
                  <select 
                    id="year" 
                    v-model="formData.year"
                    :class="{ 'error': formErrors.year }"
                  >
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
            <div v-if="currentStep === 3" class="form-section">
              <h3 class="form-section-title">Interest and Experience</h3>
              
              <div class="form-group">
                <label for="interest">Primary Area of Interest<span class="required"> *</span></label>
                <select 
                  id="interest" 
                  v-model="formData.interest"
                  :class="{ 'error': formErrors.interest }"
                >
                  <option value="" disabled>Select your area of interest</option>
                  <option v-for="area in interestAreas" :key="area" :value="area">
                    {{ area }}
                  </option>
                </select>
                <p v-if="formErrors.interest" class="error-message">{{ formErrors.interest }}</p>
              </div>
              
              <div class="form-group">
                <label for="experience">Relevant Experience/Skills<span class="required"> *</span></label>
                <textarea 
                  id="experience" 
                  v-model="formData.experience"
                  rows="4"
                  placeholder="Describe any relevant experience, skills, or projects you've worked on..."
                  :class="{ 'error': formErrors.experience }"
                ></textarea>
                <p v-if="formErrors.experience" class="error-message">{{ formErrors.experience }}</p>
              </div>
              
              <div class="form-group">
                <label for="resumeLink">Resume Link (Google Drive, OneDrive, etc.)</label>
                <input 
                  type="url" 
                  id="resumeLink" 
                  v-model="formData.resumeLink"
                  placeholder="https://drive.google.com/..."
                  class="link-input"
                >
                <div class="instructions-toggle" @click="showResumeInstructions = !showResumeInstructions">
                  <span>{{ showResumeInstructions ? 'Hide' : 'Show' }} sharing instructions</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    :class="{ 'rotate-icon': showResumeInstructions }"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div v-show="showResumeInstructions" class="link-instructions">
                  <p class="instruction-title">How to share your resume:</p>
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
            <div v-if="currentStep === 4" class="form-section">
              <h3 class="form-section-title">Review & Submit</h3>
              
              <div class="review-summary">
                <div class="review-section">
                  <h4>Personal Information</h4>
                  <div class="review-item">
                    <span class="review-label">Name:</span>
                    <span class="review-value">{{ formData.firstName }} {{ formData.lastName }}</span>
                  </div>
                  <div class="review-item">
                    <span class="review-label">Email:</span>
                    <span class="review-value">{{ formData.email }}</span>
                  </div>
                </div>
                
                <div class="review-section">
                  <h4>Academic Information</h4>
                  <div class="review-item">
                    <span class="review-label">Program:</span>
                    <span class="review-value">{{ formData.program }}</span>
                  </div>
                  <div class="review-item">
                    <span class="review-label">Year:</span>
                    <span class="review-value">{{ formData.year }}</span>
                  </div>
                </div>
                
                <div class="review-section">
                  <h4>Interest & Experience</h4>
                  <div class="review-item">
                    <span class="review-label">Interest Area:</span>
                    <span class="review-value">{{ formData.interest }}</span>
                  </div>
                  <div class="review-item">
                    <span class="review-label">Resume:</span>
                    <span class="review-value">
                      {{ formData.resumeLink ? 'Link provided' : 'No link provided' }}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="form-group checkbox-group">
                <div class="checkbox-container">
                  <input 
                    type="checkbox" 
                    id="agreed" 
                    v-model="formData.agreed"
                    :class="{ 'error': formSubmitted && formErrors.agreed }"
                  >
                  <span class="checkmark"></span>
                </div>
                <label for="agreed">
                  I understand that by submitting this application, I am expressing interest in joining UMATT. 
                  If selected, I will commit to participating in team activities and contributing to the project. <span class="required">*</span>
                </label>
              </div>
              <p v-if="formSubmitted && formErrors.agreed" class="error-message">{{ formErrors.agreed }}</p>
            </div>
          </div>
          
          <!-- Form navigation -->
          <div class="form-navigation">
            <button 
              type="button" 
              class="nav-button prev-button" 
              v-if="currentStep > 1"
              @click="goToPreviousStep"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Previous
            </button>
            
            <button 
              type="button" 
              class="nav-button next-button" 
              v-if="currentStep < totalSteps"
              @click="goToNextStep"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            
            <button 
              type="submit" 
              class="submit-button" 
              v-if="currentStep === totalSteps"
              :disabled="isSubmitting"
            >
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
</template>

<style scoped>

/* Hero section styles */
.required {
  color: var(--error-red, #ff0000);
}
.join-hero-section {
  position: relative;
  height: calc(80vh - var(--navbar-height));
  min-height: 400px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: clamp(2rem, 2.5vw, 2.5rem);
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
  background-color: #fafafa;
  position: relative;
  padding: 2rem 0;
}

.application-form {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.application-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.form-steps-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-breadcrumbs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  position: relative;
}

.breadcrumb-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 24%;
  position: relative;
  z-index: 2;
}

.step-indicator {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #777;
  border: 2px solid #ddd;
  transition: all 0.3s ease;
}

.step-title {
  font-size: 0.85rem;
  color: #777;
  font-weight: 500;
  text-align: center;
  transition: color 0.3s ease;
}

/* Active step */
.breadcrumb-step.active .step-indicator {
  background-color: var(--color-gold, #F2A900);
  border-color: var(--color-gold, #F2A900);
  color: #000;
  box-shadow: 0 0 0 4px rgba(242, 169, 0, 0.25);
  transform: scale(1.1);
}

.breadcrumb-step.active .step-title {
  color: var(--umatt-c-text-dark, #333);
  font-weight: 600;
}

/* Completed step */
.breadcrumb-step.completed .step-indicator {
  background-color: var(--color-blue-medium, #385E9D);
  border-color: var(--color-blue-medium, #385E9D);
  color: white;
}

.breadcrumb-step.completed .step-title {
  color: var(--color-blue-medium, #385E9D);
}

/* Clickable step */
.breadcrumb-step.clickable {
  cursor: pointer;
}

.breadcrumb-step.clickable:hover .step-indicator {
  transform: scale(1.1);
}

/* Progress bar */
.progress-container {
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  margin-top: -23px;
  margin-bottom: 2rem;
  margin-left: 2%;
  margin-right: 2%;
  width: 96%;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(to right, #F2A900, #f5c346, #fad47a);
  width: 0;
  transition: width 0.5s ease;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(255,255,255,0.3) inset;
}

/* Form styling - Add these rules */
.form-section {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  border-left: 4px solid var(--color-gold, #F2A900);
  margin-bottom: 1rem;
}

.form-section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--umatt-c-text-dark, #333);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(242, 169, 0, 0.3);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  position: relative;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.6rem;
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
  color: var(--umatt-c-text-dark, #333);
  background-color: #fff;
  transition: all 0.3s;
  width: 100%;
  box-sizing: border-box;
}

/* Fix for autofill blue background */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  -webkit-text-fill-color: #333 !important;
}

/* Error styling */
.error-message {
  color: #d32f2f;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

input.error, select.error, textarea.error {
  border-color: #d32f2f;
  background-color: rgba(211, 47, 47, 0.05);
}

/* File upload styling */
.file-upload-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f5f5f5;
  border: 1px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.95rem;
  color: #666;
}

.file-name {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-gold, #F2A900);
  font-weight: 500;
}

/* Success message */
.success-message {
  background: #f1f9f1;
  border-left: 4px solid #4caf50;
  padding: 2.5rem;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto 2rem;
  max-width: 800px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}

.success-message h3 {
  color: #2e7d32;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.success-message p {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
}

.success-icon {
  color: #4caf50;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.success-icon svg {
  filter: drop-shadow(0 2px 4px rgba(76, 175, 80, 0.3));
}

/* Submit button styling */
.submit-button {
  background: linear-gradient(45deg, #F2A900 0%, #f5c346 100%);
  color: #000;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px -8px rgba(242, 169, 0, 0.5);
  min-width: 200px;
}

.submit-button:hover {
  transform: translateY(-3px);
  background: linear-gradient(45deg, #e69d00 0%, #e5b32a 100%);
  box-shadow: 0 15px 25px -5px rgba(242, 169, 0, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-button span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* Review section styling improvements */
.review-summary {
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.review-section {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
}

.review-section:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.review-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-blue-medium, #385E9D);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.review-item {
  display: flex;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.review-label {
  font-weight: 600;
  width: 120px;
  flex-shrink: 0;
  color: #444;
}

.review-value {
  color: #222;
}

/* Form navigation buttons */
.form-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #ddd;
  background: #fff;
  color: var(--umatt-c-text-medium, #555);
}

.prev-button {
  border-color: #ddd;
}

.prev-button:hover {
  background: #f5f5f5;
}

.next-button {
  background: var(--color-blue-medium, #385E9D);
  color: white;
  border-color: var(--color-blue-medium, #385E9D);
}

.next-button:hover {
  background: #2d4a7d;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px -5px rgba(56, 94, 157, 0.4);
}

/* Loading spinner */
.spinner {
  animation: rotate 2s linear infinite;
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.spinner .path {
  stroke: #000;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .step-title {
    display: none;
  }
  
  .form-breadcrumbs {
    margin-bottom: 2.5rem;
  }
  
  .progress-container {
    margin-top: -20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-button, .submit-button {
    width: 100%;
    justify-content: center;
  }
  .application-form{
    padding-inline:.75rem;
  }
  .content-columns{
    grid-template-columns: 1fr;
  }
  .container{
    padding-inline: 1rem;
  }
  .form-steps-container{
    gap:1rem;
  }
  .form-navigation{
    margin-top: 1rem;
  }
}

/* Additional styles */
.link-input {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  color: var(--umatt-c-text-dark, #333);
  background-color: #fff;
  transition: all 0.3s;
  width: 100%;
  box-sizing: border-box;
}

.instructions-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: var(--color-blue-medium, #385E9D);
  background-color: #f0f4f9;
  transition: background-color 0.2s ease;
}

.instructions-toggle:hover {
  background-color: #e0eaf5;
}

.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.link-instructions {
  margin-top: 0.75rem;
  padding: 1rem;
  background-color: #f8faff;
  border: 1px solid #e0eaf5;
  border-left: 3px solid var(--color-blue-medium, #385E9D);
  border-radius: 4px;
  font-size: 0.9rem;
  color: #333;
  animation: slideDown 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.instruction-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-blue-medium, #385E9D);
}

.link-instructions ol {
  padding-left: 1.5rem;
  margin: 0.5rem 0 0 0;
}

.link-instructions li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
  color: #444;
}

/* Animation classes */
.animate-pop {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animate-pop.visible {
  opacity: 1;
  transform: scale(1);
}

.delay-100 { transition-delay: 0.1s; }
.delay-200 { transition-delay: 0.2s; }
.delay-300 { transition-delay: 0.3s; }
.delay-400 { transition-delay: 0.4s; }
.delay-500 { transition-delay: 0.5s; }
.delay-600 { transition-delay: 0.6s; }
</style>