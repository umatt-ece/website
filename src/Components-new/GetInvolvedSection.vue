<script setup>
</script>

<template>
  <section id="get-involved" class="get-involved-container" aria-labelledby="get-involved-title">
    <div class="get-involved-content">
      <h2 id="get-involved-title" class="get-involved-title">Get Involved</h2>
      <p class="get-involved-description">
        Join our team of innovative engineers and be part of something extraordinary. We welcome
        students, sponsors, and community partners.
      </p>
      <div class="get-involved-options">
        <div class="get-involved-option">
          <h3>Join the Team</h3>
          <p>Be part of our dynamic student team</p>
          <a href="#apply" class="get-involved-button">Apply Now</a>
        </div>
        <div class="get-involved-option">
          <h3>Become a Sponsor</h3>
          <p>Support innovation in engineering</p>
          <a href="#sponsor" class="get-involved-button">Partner With Us</a>
        </div>
        <div class="get-involved-option">
          <h3>Get in Touch</h3>
          <p>Have questions? Contact us</p>
          <a href="#contact" class="get-involved-button">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.get-involved-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 5%;
  background-color: var(--umatt-c-brown); /* dark yellow background color */
  color: #000;
}

.get-involved-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.get-involved-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #000;
}

.get-involved-description {
  margin-top: 2rem;
  font-size: 1.25rem;
  text-align: center;
  color: #000;
}

.get-involved-options {
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  flex-wrap: wrap;
}

.get-involved-option {
  flex: 1;
  min-width: 250px;
  max-width: 33%;
  background-color: rgba(255, 255, 255, 0.1); /* White with slight opacity */
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: #000;
}

.get-involved-option h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.get-involved-option p {
  margin-top: 1rem;
  font-size: 1rem;
}

.get-involved-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #ffcc00; /* Yellow button color */
  border-radius: 5px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
}

.get-involved-button:hover {
  background-color: #e6b800; /* Darker yellow for hover effect */
}
</style>