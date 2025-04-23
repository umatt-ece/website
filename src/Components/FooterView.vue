<script setup>
</script>

<template>
  <footer class="footer-container">
    <div class="footer-wrapper">
      <div class="footer-content">
        <section class="footer-section logo-section">
          <div class="footer-logo">
            <img src="@/assets/images/logo.png" alt="UMATT Logo" class="logo-img" />
            <p class="footer-description">
              Building the future of agricultural engineering, one tiny tractor at a time.
            </p>
          </div>
        </section>
        
        <section class="footer-section">
          <h3 class="footer-heading">Quick Links</h3>
          <nav class="quick-links">
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#what-we-do">What We Do</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </section>
        
        <section class="footer-section">
          <h3 class="footer-heading">Contact Us</h3>
          <address class="contact-us">
            <div class="contact-item">
              <pi class="pi pi-envelope" aria-hidden="true"></pi>
              <a href="mailto:info@umatt.ca">info@umatt.ca</a>
            </div>
            <div class="contact-item">
              <pi class="pi pi-phone" aria-hidden="true"></pi>
              <a href="tel:+12045550123">(204) 555-0123</a>
            </div>
            <div class="contact-item">
              <pi class="pi pi-map" aria-hidden="true"></pi>
              <span>University of Manitoba, Winnipeg, MB</span>
            </div>
          </address>
        </section>
        
        <section class="footer-section">
          <h3 class="footer-heading">Follow Us</h3>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><pi class="pi pi-facebook"></pi></a>
            <a href="#" aria-label="Twitter"><pi class="pi pi-twitter"></pi></a>
            <a href="#" aria-label="Instagram"><pi class="pi pi-instagram"></pi></a>
            <a href="#" aria-label="LinkedIn"><pi class="pi pi-linkedin"></pi></a>
          </div>
        </section>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p class="footer-bottom-text">
        © 2025 University of Manitoba Association of Tiny Tractors. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  
  background-color: #1e2a47;
  color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-wrapper {
  padding: 3rem 5% 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.logo-section {
  grid-column: span 1;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-img {
  width: auto;
  height: auto;
  max-width: 120px;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

.footer-description {
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #e0e0e0;
}

/* Heading styles */
.footer-heading {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #00A3E0;
}

/* Quick links styling */
.quick-links ul {
  list-style: none;
  padding-left: 0;
}

.quick-links li {
  padding: 0.5rem 0;
  transition: transform 0.2s ease;
}

.quick-links li:hover {
  transform: translateX(3px);
}

.quick-links a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.2s ease;
  display: block;
}

.quick-links a:hover,
.quick-links a:focus {
  color: #fff;
  text-decoration: underline;
  outline: none;
}

/* Contact us styling */
.contact-us {
  font-style: normal;
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  transition: transform 0.2s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
}

.contact-item a,
.contact-item span {
  color: #e0e0e0;
  font-size: 0.95rem;
  text-decoration: none;
  margin: 0;
}

.contact-item a:hover,
.contact-item a:focus {
  color: #fff;
  text-decoration: underline;
  outline: none;
}

/* Social icons styling */
.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-icons a:hover,
.social-icons a:focus {
  background-color: #00A3E0;
  transform: translateY(-3px);
  outline: none;
}

/* Footer bottom */
.footer-bottom {
  padding: 1.5rem 5%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-text {
  text-align: center;
  font-size: 0.9rem;
  color: #bababa;
  margin: 0;
}

/* Responsive adjustments */

/* Medium to large screens (tablet and small desktop) */
@media (max-width: 1100px) {
  .footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "logo logo"
      "links contact"
      "social social";
    gap: 2rem;
    justify-items: center;
  }
  
  .logo-section {
    grid-area: logo;
  }
  
  .footer-section:nth-child(2) {
    grid-area: links;
  }
  
  .footer-section:nth-child(3) {
    grid-area: contact;
  }
  
  .footer-section:nth-child(4) {
    grid-area: social;
  }
  
  .footer-logo {
    align-items: center;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .footer-description {
    max-width: 400px;
  }
  
  /* Center elements in first and last sections */
  .logo-section, 
  .footer-section:nth-child(4) {
    align-items: center;
    text-align: center;
  }
  
  .footer-section:nth-child(4) .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .social-icons {
    justify-content: center;
  }
}

/* Mobile screens */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "logo"
      "links"
      "contact"
      "social";
    text-align: center;
    gap: 2.5rem;
  }
  
  .footer-section {
    align-items: center;
  }
  
  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .quick-links ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0 1.5rem;
  }
  
  .contact-item {
    justify-content: center;
  }
}

/* Small mobile screens */
@media (max-width: 480px) {
  .footer-wrapper {
    padding: 2.5rem 1rem 1rem;
  }
  
  .quick-links ul {
    flex-direction: column;
  }
  
  .quick-links li {
    padding: 0.6rem 0;
  }
}
</style>
