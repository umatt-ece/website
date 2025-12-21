<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  tier: '',
  message: ''
})

const submitted = ref(false)

function handleSubmit() {
  // In production, this would send to a backend
  submitted.value = true
  form.value = {
    name: '',
    company: '',
    email: '',
    phone: '',
    tier: '',
    message: ''
  }
}

function resetForm() {
  submitted.value = false
}
</script>

<template>
  <section id="contact-section" class="contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-info">
          <span class="section-label">Get Started</span>
          <h2 class="section-title">Ready to <span class="highlight">Partner</span> With Us?</h2>
          <p class="section-description">
            Fill out the form and our team will reach out to discuss how we can create a mutually
            beneficial partnership.
          </p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">
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
              <div class="method-content">
                <span class="method-label">Location</span>
                <span class="method-value">University of Manitoba, Winnipeg</span>
              </div>
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

            <button type="submit" class="submit-btn">
              Send Inquiry
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
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          <div v-else class="success-state">
            <div class="success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
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
</template>

<style scoped>
.contact-section {
  padding: 6rem 0;
  background: var(--bg-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  position: sticky;
  top: 100px;
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
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-title .highlight {
  color: var(--color-gold);
}

.section-description {
  font-size: 1rem;
  color: var(--text-tertiary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.method-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-blue-medium), #2c4a7d);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.method-content {
  display: flex;
  flex-direction: column;
}

.method-label {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  margin-bottom: 0.25rem;
}

.method-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
}

.method-value:hover {
  color: var(--color-blue-medium);
}

.form-container {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-light);
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
  padding: 0.875rem 1rem;
  border: 2px solid var(--border-light);
  border-radius: 10px;
  font-size: 1rem;
  background: var(--input-bg);
  color: var(--input-text);
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-blue-medium);
  box-shadow: 0 0 0 4px rgba(56, 94, 157, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-tertiary);
}

.form-group select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 16px;
  padding-right: 2.5rem;
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
  padding: 1rem 2rem;
  background: var(--color-gold);
  color: var(--color-black);
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
  box-shadow: 0 10px 30px rgba(242, 169, 0, 0.3);
}

.success-state {
  text-align: center;
  padding: 2rem;
}

.success-icon {
  color: #22c55e;
  margin-bottom: 1.5rem;
}

.success-state h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.success-state p {
  color: var(--text-tertiary);
  margin-bottom: 1.5rem;
}

.reset-btn {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--color-blue-medium);
  border: 2px solid var(--color-blue-medium);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: var(--color-blue-medium);
  color: white;
}

@media (max-width: 968px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-info {
    position: static;
  }
}

@media (max-width: 576px) {
  .contact-section {
    padding: 4rem 0;
  }

  .form-container {
    padding: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
