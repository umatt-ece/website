<script setup>
import { ref, onMounted } from 'vue';

// Tier data
const sponsorshipTiers = [
  {
    name: "Premier Partner",
    price: "$5,000+",
    description: "Our highest level of sponsorship with maximum visibility and benefits",
    benefits: [
      "Prominent logo placement on tractor",
      "Large logo on team apparel",
      "Recognition in all presentations",
      "Social media highlights",
      "Featured in competition materials",
      "Team engagement opportunities",
      "Exclusive recruiting access",
      "Tractor demonstration opportunity"
    ],
    color: "#F2A900"
  },
  {
    name: "Gold Supporter",
    price: "$2,500-$4,999",
    description: "Significant visibility and engagement with our team",
    benefits: [
      "Logo placement on tractor",
      "Logo on team apparel",
      "Recognition in presentations",
      "Social media recognition",
      "Featured in competition materials",
      "Team engagement opportunities"
    ],
    color: "#D4AF37"
  },
  {
    name: "Silver Supporter",
    price: "$1,000-$2,499",
    description: "Great exposure with our growing engineering team",
    benefits: [
      "Logo placement on tractor",
      "Logo on team apparel",
      "Recognition in presentations",
      "Social media recognition"
    ],
    color: "#C0C0C0"
  },
  {
    name: "Bronze Supporter",
    price: "$500-$999",
    description: "Valuable support for our student initiatives",
    benefits: [
      "Logo placement on tractor",
      "Logo on team apparel",
      "Social media recognition"
    ],
    color: "#CD7F32"
  }
];

// Competition information
const competitionInfo = {
  name: "International Quarter Scale Tractor Student Design Competition",
  location: "Peoria, Illinois",
  organizedBy: "American Society of Agricultural and Biological Engineers (ASABE)",
  participants: "Approximately 20-30 universities from across North America",
  description: "The competition challenges students to design, build, and present a quarter-scale tractor. Teams are evaluated on design innovation, performance testing, maneuverability, and engineering practices."
};

// Success metrics
const impactMetrics = [
  { number: "20+", label: "Participating Universities" },
  { number: "1st", label: "Place Overall (2021)" },
  { number: "100+", label: "Students Trained Since Inception" },
  { number: "15+", label: "Past Sponsors" }
];

// FAQ items
const faqItems = ref([
  {
    question: "How are sponsorship funds utilized?",
    answer: "Sponsorship funds directly support design and manufacturing costs, competition travel expenses, equipment purchases, and educational resources for team members.",
    isOpen: false
  },
  {
    question: "What recognition do sponsors receive?",
    answer: "Depending on sponsorship level, recognition includes logo placement on tractors, team apparel, presentations, social media, competition materials, and recruiting opportunities.",
    isOpen: false
  },
  {
    question: "Can we sponsor with in-kind donations or services?",
    answer: "Yes, we welcome in-kind donations of materials, equipment, manufacturing services, and technical expertise. These contributions are valued at market rate when determining sponsorship tier.",
    isOpen: false
  },
  {
    question: "When is the best time to sponsor?",
    answer: "While we welcome support year-round, sponsorships finalized by September provide maximum visibility throughout our design and build phase leading up to competition.",
    isOpen: false
  }
]);

// Form data
const contactForm = ref({
  name: '',
  companyName: '',
  email: '',
  phone: '',
  interestLevel: '',
  message: ''
});

const formStatus = ref({
  submitted: false,
  success: false,
  message: ''
});

// Toggle FAQ open/closed
function toggleFaq(index) {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
}

// Handle form submission
function submitForm() {
  // This would normally connect to a backend service
  formStatus.value.submitted = true;
  formStatus.value.success = true;
  formStatus.value.message = "Thank you for your interest! Our team will contact you soon to discuss partnership opportunities.";
  
  // Reset form
  contactForm.value = {
    name: '',
    companyName: '',
    email: '',
    phone: '',
    interestLevel: '',
    message: ''
  };
}

// Animation on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    { threshold: 0.15 }
  );
  
  // Observe all elements with animation classes
  document.querySelectorAll('.fade-in, .slide-up, .slide-in-right, .slide-in-left')
    .forEach((el) => {
      observer.observe(el);
    });
});
</script>

<template>
  <div class="sponsor-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content fade-in">
          <h1 class="hero-title">Partner with <span class="highlight">Innovation</span></h1>
          <p class="hero-subtitle">
            Support the next generation of agricultural engineers and gain visibility 
            with future industry leaders
          </p>
          <div class="hero-badges">
            <div class="hero-badge">
              <span>Award-Winning Team</span>
            </div>
            <div class="hero-badge">
              <span>University of Manitoba</span>
            </div>
            <div class="hero-badge">
              <span>Quarter-Scale Tractor Competition</span>
            </div>
          </div>
          <div class="hero-cta">
            <a href="#sponsorship-packages" class="primary-button">
              View Sponsorship Opportunities
            </a>
            <a href="#contact-form" class="secondary-button">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Sponsor Section -->
    <section class="why-sponsor-section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Why Sponsor <span class="highlight">UMATT</span>?</h2>
          <div class="title-underline"></div>
        </div>

        <div class="benefits-grid">
          <!-- Benefit Card 1 -->
          <div class="benefit-card slide-up" style="--delay: 0.1s">
            <div class="benefit-icon-container">
              <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="benefit-title">Brand Visibility</h3>
            <p class="benefit-description">
              Showcase your brand to future engineers, industry professionals, and academic institutions across North America.
            </p>
          </div>
          
          <!-- Benefit Card 2 -->
          <div class="benefit-card slide-up" style="--delay: 0.2s">
            <div class="benefit-icon-container">
              <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 9V3H15M21 3L12 12M10 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H18C19.1046 21 20 20.1046 20 19V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="benefit-title">Talent Recruitment</h3>
            <p class="benefit-description">
              Connect directly with skilled engineering students who have demonstrated practical problem-solving abilities.
            </p>
          </div>
          
          <!-- Benefit Card 3 -->
          <div class="benefit-card slide-up" style="--delay: 0.3s">
            <div class="benefit-icon-container">
              <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="benefit-title">Technical Feedback</h3>
            <p class="benefit-description">
              Gain insights through direct interaction with innovative designs and solutions from emerging engineers.
            </p>
          </div>
          
          <!-- Benefit Card 4 -->
          <div class="benefit-card slide-up" style="--delay: 0.4s">
            <div class="benefit-icon-container">
              <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 8V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 11H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="benefit-title">Community Impact</h3>
            <p class="benefit-description">
              Support practical education and help develop the next generation of skilled professionals in your industry.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Competition Overview Section -->
    <section class="competition-section">
      <div class="container">
        <div class="two-column-layout">
          <div class="image-column slide-in-left">
            <div class="image-frame">
              <img 
                src="@/assets/images/competition-team-photo-2024.jpg" 
                alt="UMATT team at competition" 
                class="competition-image"
              />
              <div class="image-caption">
                2024 UMATT Team at Competition
              </div>
            </div>
          </div>
          
          <div class="text-column slide-in-right">
            <h2 class="competition-title">About the <span class="highlight">Competition</span></h2>
            <div class="competition-details">
              <div class="detail-item">
                <strong>Event:</strong> {{ competitionInfo.name }}
              </div>
              <div class="detail-item">
                <strong>Location:</strong> {{ competitionInfo.location }}
              </div>
              <div class="detail-item">
                <strong>Organized By:</strong> {{ competitionInfo.organizedBy }}
              </div>
              <div class="detail-item">
                <strong>Participants:</strong> {{ competitionInfo.participants }}
              </div>
            </div>
            
            <p class="competition-description">
              {{ competitionInfo.description }}
            </p>
            
            <div class="metrics-container">
              <div v-for="(metric, index) in impactMetrics" :key="index" class="metric-item">
                <div class="metric-number">{{ metric.number }}</div>
                <div class="metric-label">{{ metric.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsorship Packages Section -->
    <section id="sponsorship-packages" class="packages-section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Sponsorship <span class="highlight">Packages</span></h2>
          <div class="title-underline"></div>
          <p class="section-description">
            Choose the partnership level that aligns with your organization's goals and budget
          </p>
        </div>
        
        <div class="packages-grid">
          <div 
            v-for="(tier, index) in sponsorshipTiers" 
            :key="index"
            class="package-card slide-up"
            :style="{ '--delay': `${index * 0.1 + 0.1}s`, borderTop: `5px solid ${tier.color}` }"
          >
            <div class="package-header">
              <h3 class="package-title">{{ tier.name }}</h3>
              <div class="package-price">{{ tier.price }}</div>
            </div>
            
            <p class="package-description">{{ tier.description }}</p>
            
            <div class="package-divider"></div>
            
            <ul class="package-benefits">
              <li v-for="(benefit, benefitIndex) in tier.benefits" :key="benefitIndex">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#385E9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ benefit }}
              </li>
            </ul>
            
            <a href="#contact-form" class="package-button">Become a Sponsor</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Frequently Asked <span class="highlight">Questions</span></h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="faq-container">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index" 
            class="faq-item slide-up"
            :style="{ '--delay': `${index * 0.1 + 0.1}s` }"
            :class="{ 'open': item.isOpen }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              {{ item.question }}
              <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact-form" class="contact-section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Interested in <span class="highlight">Partnering</span> With Us?</h2>
          <div class="title-underline"></div>
          <p class="section-description">
            Fill out the form below and our team will reach out to discuss sponsorship opportunities
          </p>
        </div>
        
        <div class="form-container slide-up">
          <form class="contact-form" @submit.prevent="submitForm" v-if="!formStatus.submitted">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="contactForm.name" 
                  placeholder="Your Name" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="companyName">Company Name *</label>
                <input 
                  type="text" 
                  id="companyName" 
                  v-model="contactForm.companyName" 
                  placeholder="Your Company" 
                  required
                >
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="contactForm.email" 
                  placeholder="your.email@company.com" 
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="contactForm.phone" 
                  placeholder="(123) 456-7890"
                >
              </div>
            </div>
            
            <div class="form-group">
              <label for="interestLevel">Sponsorship Interest Level</label>
              <select id="interestLevel" v-model="contactForm.interestLevel">
                <option value="" disabled selected>Select an option</option>
                <option value="Premier Partner">Premier Partner ($5,000+)</option>
                <option value="Gold Supporter">Gold Supporter ($2,500-$4,999)</option>
                <option value="Silver Supporter">Silver Supporter ($1,000-$2,499)</option>
                <option value="Bronze Supporter">Bronze Supporter ($500-$999)</option>
                <option value="Custom">Custom Support / In-kind Donation</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Additional Information</label>
              <textarea 
                id="message" 
                v-model="contactForm.message" 
                placeholder="Let us know about any specific questions or interests you have"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button">Submit Inquiry</button>
          </form>
          
          <div class="form-success" v-else>
            <div class="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="success-title">Thank You!</h3>
            <p class="success-message">{{ formStatus.message }}</p>
            <button class="secondary-button" @click="formStatus.submitted = false">Send Another Inquiry</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2 class="cta-title">Ready to Support Innovation in Agriculture?</h2>
          <p class="cta-description">
            Join our community of supporters and help shape the future of agricultural engineering while gaining valuable exposure to emerging talent.
          </p>
          <div class="cta-buttons">
            <a href="#contact-form" class="primary-button">Become a Sponsor</a>
            <a href="mailto:umattinfo@gmail.com" class="secondary-button">Contact Us Directly</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

/* Global styles for this page */
.sponsor-page {
  font-family: Poppins, sans-serif;
  color: var(--text-primary);
  line-height: 1.6;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 2rem;
}

.highlight {
  color: var(--color-gold);
  position: relative;
  font-weight: 700;
}

.primary-button, .secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.85rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  box-shadow: var(--shadow-sm);
}

.primary-button {
  background-color: var(--color-gold);
  color: var(--color-black);
}

.primary-button:hover {
  background-color: var(--color-gold-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.secondary-button {
  background-color: transparent;
  color: var(--color-blue-medium);
  border: 2px solid var(--color-blue-medium);
}

.secondary-button:hover {
  background-color: var(--color-blue-medium);
  color: var(--text-light);
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

/* Section header styles */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: var(--color-gold);
  margin: 0.75rem auto 1.5rem;
  border-radius: 2px;
}

.section-description {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.125rem;
  color: var(--text-tertiary);
}

/* Animation classes */
.fade-in, .slide-up, .slide-in-right, .slide-in-left {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up {
  transform: translateY(30px);
  transition-delay: var(--delay, 0s);
}

.slide-in-right {
  transform: translateX(30px);
}

.slide-in-left {
  transform: translateX(-30px);
}

.animate-in {
  opacity: 1;
  transform: translate(0);
}

/* Hero section */
.hero-section {
  position: relative;
  padding: 8rem 0;
  background-image: url('@/assets/images/competition-group-photo-2024.jpg');
  background-size: cover;
  background-position: center;
  color: var(--text-light);
  text-align: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(56, 94, 157, 0.95), rgba(56, 94, 157, 0.8));
}

.hero-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(8px);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-badge {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.hero-cta .secondary-button {
  border-color: var(--text-light);
  color: var(--text-light);
}

.hero-cta .secondary-button:hover {
  background-color: var(--text-light);
  color: var(--color-blue-medium);
}

/* Why Sponsor Section */
.why-sponsor-section {
  padding: 5rem 0;
  background-color: var(--bg-primary);
  position: relative;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-light);
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-hover-shadow);
  border-color: var(--color-gold);
}

.benefit-icon-container {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: rgba(56, 94, 157, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--color-blue-medium);
  transition: all 0.3s ease;
}

.benefit-card:hover .benefit-icon-container {
  background-color: var(--color-blue-medium);
  color: var(--text-light);
}

.benefit-icon {
  width: 30px;
  height: 30px;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.benefit-description {
  color: var(--text-tertiary);
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Competition Section */
.competition-section {
  padding: 5rem 0;
  background-color: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.image-column {
  position: relative;
}

.image-frame {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--card-shadow-lg);
  position: relative;
  border: 5px solid var(--color-white);
}

.competition-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-frame:hover .competition-image {
  transform: scale(1.05);
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: var(--text-light);
  font-size: 0.875rem;
  text-align: center;
}

.text-column {
  display: flex;
  flex-direction: column;
}

.competition-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.competition-details {
  margin-bottom: 1.5rem;
  background-color: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.detail-item {
  margin-bottom: 0.75rem;
}

.detail-item strong {
  color: var(--color-blue-medium);
  font-weight: 600;
}

.competition-description {
  margin-bottom: 2rem;
  color: var(--text-tertiary);
  background-color: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.metrics-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
}

.metric-item {
  text-align: center;
  background-color: var(--bg-primary);
  padding: 1.5rem 1rem;
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
  border-bottom: 3px solid var(--color-gold);
}

.metric-item:hover {
  transform: translateY(-5px);
}

.metric-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-gold);
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  font-weight: 500;
}

/* Sponsorship Packages Section */
.packages-section {
  padding: 5rem 0;
  background-color: var(--bg-primary);
  position: relative;
}

.packages-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(90deg, var(--color-gold), var(--color-blue-medium));
  opacity: 0.1;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.package-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.package-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--card-hover-shadow);
}

.package-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.package-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.package-price {
  font-size: 1.25rem;
  color: var(--color-blue-medium);
  font-weight: 600;
}

.package-description {
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.package-divider {
  height: 2px;
  background-color: var(--border-light);
  margin-bottom: 1.5rem;
}

.package-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;
}

.package-benefits li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: var(--text-tertiary);
}

.package-benefits li svg {
  margin-right: 0.75rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
  stroke: var(--color-blue-medium);
}

.package-button {
  display: inline-block;
  text-align: center;
  background-color: var(--color-blue-medium);
  color: var(--text-light);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.package-button:hover {
  background-color: var(--color-gold);
  color: var(--color-black);
}

/* FAQ Section */
.faq-section {
  padding: 5rem 0;
  background-color: var(--bg-secondary);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background-color: var(--bg-primary);
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  border: 1px solid var(--border-light);
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  color: var(--text-primary);
}

.faq-question:hover {
  background-color: rgba(56, 94, 157, 0.05);
}

.faq-icon {
  transition: transform 0.3s ease;
  color: var(--color-gold);
  flex-shrink: 0;
}

.faq-item.open .faq-question {
  background-color: rgba(56, 94, 157, 0.05);
}

.faq-item.open .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  padding: 0 1.5rem;
}

.faq-item.open .faq-answer {
  max-height: 1000px; /* Use larger value to accommodate any content length */
  transition: max-height 1s ease-in-out;
}

.faq-answer p {
  margin: 0;
  padding-bottom: 1.5rem;
  color: var(--text-tertiary);
}

/* Contact Form Section */
.contact-section {
  padding: 5rem 0;
  background-color: var(--bg-primary);
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-light);
}

.contact-form {
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-medium);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: var(--input-bg);
  color: var(--input-text);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--input-focus-border);
  outline: none;
  box-shadow: 0 0 0 3px rgba(56, 94, 157, 0.1);
}

.submit-button {
  background-color: var(--color-blue-medium);
  color: var(--text-light);
  padding: 0.9rem 2rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: var(--shadow-sm);
}

.submit-button:hover {
  background-color: var(--color-gold);
  color: var(--color-black);
  box-shadow: var(--shadow-md);
}

/* Success message */
.form-success {
  text-align: center;
  padding: 2.5rem;
  background-color: var(--color-success-light);
  border-radius: 12px;
  border-left: 5px solid var(--color-success);
}

.success-icon {
  color: var(--color-success);
  margin-bottom: 1.5rem;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-success);
}

.success-message {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

/* Call to Action Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--color-blue-medium), #2c4a7d);
  color: var(--text-light);
  border-top: 5px solid var(--color-gold);
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.cta-buttons .secondary-button {
  border-color: var(--text-light);
  color: var(--text-light);
}

.cta-buttons .secondary-button:hover {
  background-color: var(--text-light);
  color: var(--color-blue-medium);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .section-title, .cta-title {
    font-size: 2.25rem;
  }
  
  .two-column-layout {
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 6rem 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .two-column-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .image-column {
    order: 2;
  }
  
  .text-column {
    order: 1;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .benefit-card, .package-card {
    padding: 1.75rem;
  }
  
  .metrics-container {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title, .cta-title, .competition-title {
    font-size: 1.75rem;
  }
  
  .container {
    padding: 0 1.25rem;
  }
  
  .form-container {
    padding: 1.5rem;
  }
  
  .section-header {
    margin-bottom: 2.5rem;
  }
  
  .benefit-card {
    padding: 1.5rem;
  }
  
  .hero-content {
    padding: 1.5rem;
  }
  
  .hero-cta {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
  
  .hero-cta .primary-button,
  .hero-cta .secondary-button {
    width: 100%;
  }
}
</style>