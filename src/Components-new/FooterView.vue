<script setup>
</script>

<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-logo">
          <img src="http://b.io/ext_18-" alt="UMATT Logo" class="logo-img" />
          <p class="footer-description">
            Building the future of agricultural engineering, one tiny tractor at a time.
          </p>
        </div>
      </div>
      <nav class="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#what-we-do">What We Do</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="footer-section contact-us">
        <h3>Contact Us</h3>
        <address>
          <div class="contact-item">
            <pi class="pi pi-envelope"></pi>
            <a href="mailto:info@umatt.ca">info@umatt.ca</a>
          </div>
          <div class="contact-item">
            <pi class="pi pi-phone"></pi>
            <a href="tel:+12045550123">(204) 555-0123</a>
          </div>
          <div class="contact-item">
            <pi class="pi pi-map"></pi>
            <p>University of Manitoba, Winnipeg, MB</p>
          </div>
        </address>
      </div>
      <div class="footer-section follow-us">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#" aria-label="Facebook"><pi class="pi pi-facebook"></pi></a>
          <a href="#" aria-label="Twitter"><pi class="pi pi-twitter"></pi></a>
          <a href="#" aria-label="Instagram"><pi class="pi pi-instagram"></pi></a>
          <a href="#" aria-label="LinkedIn"><pi class="pi pi-linkedin"></pi></a>
        </div>
      </div>
    </div>
    <p class="footer-bottom-text">
      © 2025 University of Manitoba Association of Tiny Tractors. All rights reserved.
    </p>
  </footer>
</template>
<style scoped>
  .footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 5%;
  background-color: #1e2a47; /* dark yellow background color */
  color: #fff;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
}

.footer-section {
  width: 30%;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 10px;
}

.footer-description {
  margin-top: 1rem;
  font-size: 1rem;
  color: #fff;
}

.quick-links h3 {
  font-size: 1.25rem;
  font-weight: bold;
}

.quick-links ul {
  list-style: none;
  padding-left: 0;
}

.quick-links li {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.quick-links a {
  color: #fff;
  text-decoration: none;
}

.contact-us h3 {
  font-size: 1.25rem;
  font-weight: bold;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.contact-item a,
.contact-item p {
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
}

.social-icons a {
  font-size: 1.5rem;
  color: #fff;
  margin-right: 1rem;
}

.footer-bottom-text {
  text-align: center;
  font-size: 1rem;
  color: #fff;
  margin-top: 2rem;
}

</style>
