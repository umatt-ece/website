<script setup>
// Constants for card data
const involvementCards = [
  {
    id: 1,
    title: "Join the Team",
    description: "Be part of our dynamic student team and gain hands-on experience in engineering design and competition.",
    icon: {
      viewBox: "0 0 46 36",
      path: "M6.90625 9C6.90625 6.61305 7.85446 4.32387 9.54229 2.63604C11.2301 0.948212 13.5193 0 15.9062 0C18.2932 0 20.5824 0.948212 22.2702 2.63604C23.958 4.32387 24.9062 6.61305 24.9062 9C24.9062 11.3869 23.958 13.6761 22.2702 15.364C20.5824 17.0518 18.2932 18 15.9062 18C13.5193 18 11.2301 17.0518 9.54229 15.364C7.85446 13.6761 6.90625 11.3869 6.90625 9ZM0.15625 33.9117C0.15625 26.9859 5.76719 21.375 12.693 21.375H19.1195C26.0453 21.375 31.6562 26.9859 31.6562 33.9117C31.6562 35.0648 30.7211 36 29.568 36H2.24453C1.09141 36 0.15625 35.0648 0.15625 33.9117ZM35.5938 21.9375V17.4375H31.0938C30.1586 17.4375 29.4062 16.6852 29.4062 15.75C29.4062 14.8148 30.1586 14.0625 31.0938 14.0625H35.5938V9.5625C35.5938 8.62734 36.3461 7.875 37.2812 7.875C38.2164 7.875 38.9688 8.62734 38.9688 9.5625V14.0625H43.4688C44.4039 14.0625 45.1562 14.8148 45.1562 15.75C45.1562 16.6852 44.4039 17.4375 43.4688 17.4375H38.9688V21.9375C38.9688 22.8727 38.2164 23.625 37.2812 23.625C36.3461 23.625 35.5938 22.8727 35.5938 21.9375Z",
    },
    buttonText: "Apply Now",
    buttonLink: "/join"
  },
  {
    id: 2,
    title: "Become a Sponsor",
    description: "Support innovation in engineering and help develop the next generation of engineering talent and solutions.",
    icon: {
      viewBox: "0 0 46 28",
      path: "M23.2234 1.99062L16.4172 7.50313C15.2852 8.41719 15.0672 10.0625 15.925 11.2367C16.832 12.4883 18.5969 12.7344 19.8133 11.7852L26.7953 6.35703C27.2875 5.97734 27.9906 6.06172 28.3773 6.55391C28.7641 7.04609 28.6727 7.74922 28.1805 8.13594L26.7109 9.275L36.4844 18.275V5H36.4352L36.1609 4.82422L31.0562 1.55469C29.9805 0.865625 28.7219 0.5 27.4422 0.5C25.9094 0.5 24.4187 1.02734 23.2234 1.99062ZM24.8266 10.7375L21.1914 13.5641C18.9766 15.2938 15.7633 14.8438 14.1039 12.5656C12.543 10.4211 12.9367 7.42578 14.9969 5.75938L20.8469 1.02734C20.0313 0.682812 19.1523 0.507031 18.2594 0.507031C16.9375 0.5 15.6508 0.89375 14.5469 1.625L9.48438 5V20.75H11.4672L17.8938 26.6141C19.2719 27.8727 21.4023 27.7742 22.6609 26.3961C23.0477 25.9672 23.3078 25.468 23.4414 24.9477L24.6367 26.0445C26.0078 27.3031 28.1453 27.2117 29.4039 25.8406C29.7203 25.4961 29.9523 25.0953 30.1 24.6805C31.4641 25.5945 33.3203 25.4047 34.4664 24.1531C35.725 22.782 35.6336 20.6445 34.2625 19.3859L24.8266 10.7375ZM1.60938 5C0.990625 5 0.484375 5.50625 0.484375 6.125V20.75C0.484375 21.9945 1.48984 23 2.73438 23H4.98438C6.22891 23 7.23438 21.9945 7.23438 20.75V5H1.60938ZM3.85938 18.5C4.15774 18.5 4.44389 18.6185 4.65487 18.8295C4.86585 19.0405 4.98438 19.3266 4.98438 19.625C4.98438 19.9234 4.86585 20.2095 4.65487 20.4205C4.44389 20.6315 4.15774 20.75 3.85938 20.75C3.56101 20.75 3.27486 20.6315 3.06388 20.4205C2.8529 20.2095 2.73438 19.9234 2.73438 19.625C2.73438 19.3266 2.8529 19.0405 3.06388 18.8295C3.27486 18.6185 3.56101 18.5 3.85938 18.5ZM38.7344 5V20.75C38.7344 21.9945 39.7398 23 40.9844 23H43.2344C44.4789 23 45.4844 21.9945 45.4844 20.75V6.125C45.4844 5.50625 44.9781 5 44.3594 5H38.7344ZM40.9844 19.625C40.9844 19.3266 41.1029 19.0405 41.3139 18.8295C41.5249 18.6185 41.811 18.5 42.1094 18.5C42.4077 18.5 42.6939 18.6185 42.9049 18.8295C43.1158 19.0405 43.2344 19.3266 43.2344 19.625C43.2344 19.9234 43.1158 20.2095 42.9049 20.4205C42.6939 20.6315 42.4077 20.75 42.1094 20.75C41.811 20.75 41.5249 20.6315 41.3139 20.4205C41.1029 20.2095 40.9844 19.9234 40.9844 19.625Z",
    },
    buttonText: "Partner With Us",
    buttonLink: "/sponsor"
  },
  {
    id: 3,
    title: "Get in Touch",
    description: "Have questions or want to learn more? Our team is ready to help you discover how to get involved with UMATT.",
    icon: {
      viewBox: "0 0 46 36",
      path: "M15.4532 24.75C23.5321 24.75 30.0782 19.2094 30.0782 12.375C30.0782 5.54063 23.5321 0 15.4532 0C7.37426 0 0.828162 5.54063 0.828162 12.375C0.828162 15.0891 1.86176 17.5992 3.61254 19.6453C3.36644 20.3062 3.00082 20.8898 2.6141 21.382C2.2766 21.818 1.93207 22.1555 1.67894 22.3875C1.55238 22.5 1.44691 22.5914 1.3766 22.6477C1.34144 22.6758 1.31332 22.6969 1.29926 22.7039L1.28519 22.718C0.898475 23.0063 0.729725 23.5125 0.884412 23.9695C1.0391 24.4266 1.46801 24.75 1.95316 24.75C3.48597 24.75 5.03285 24.3563 6.31957 23.8711C6.96644 23.625 7.57113 23.3508 8.09848 23.0695C10.2571 24.1383 12.7672 24.75 15.4532 24.75ZM32.3282 12.375C32.3282 20.2711 25.3602 26.2195 17.1055 26.9297C18.8141 32.1609 24.4813 36 31.2032 36C33.8891 36 36.3993 35.3883 38.5649 34.3195C39.0922 34.6008 39.6899 34.875 40.3368 35.1211C41.6235 35.6063 43.1704 36 44.7032 36C45.1883 36 45.6243 35.6836 45.7719 35.2195C45.9196 34.7555 45.7579 34.2492 45.3641 33.9609L45.35 33.9469C45.336 33.9328 45.3078 33.9188 45.2727 33.8906C45.2024 33.8344 45.0969 33.75 44.9704 33.6305C44.7172 33.3984 44.3727 33.0609 44.0352 32.625C43.6485 32.1328 43.2829 31.5422 43.0368 30.8883C44.7875 28.8492 45.8211 26.3391 45.8211 23.618C45.8211 17.093 39.8516 11.7422 32.2789 11.2781C32.3071 11.6367 32.3211 12.0023 32.3211 12.368L32.3282 12.375Z",
    },
    buttonText: "Contact Us",
    buttonLink: "/contact"
  }
];

// Constant for arrow icon in buttons
</script>

<template>
  <section id="get-involved" class="get-involved-section" aria-labelledby="get-involved-title">
    <div class="container">
      <header class="section-header">
        <h2 id="get-involved-title" class="section-title">Get <span class="highlight">Involved</span></h2>
        <div class="title-underline"></div>
        <p class="section-description">
          Join our team of innovative engineers and be part of something extraordinary. 
          We welcome students, sponsors, and community partners.
        </p>
      </header>
      
      <div class="cards-container">
        <div v-for="card in involvementCards" :key="card.id" class="card">
          <div class="card-icon-wrapper">
            <svg width="100%" height="auto" :viewBox="card.icon.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path :d="card.icon.path" fill="#F2A900"/>
            </svg>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-description">{{ card.description }}</p>
            <a :href="card.buttonLink" class="card-button">
              <span>{{ card.buttonText }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.get-involved-section {
  padding: 6rem 2rem;
  background-color: var(--umatt-c-brown, #5D4037);
  position: relative;
  overflow: hidden;
}

/* Add subtle texture overlay */
.get-involved-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.highlight {
  color: var(--umatt-c-gold, #F2A900);
  position: relative;
  display: inline-block;
}

.title-underline {
  width: 80px;
  height: 4px;
  background: var(--umatt-c-gold, #F2A900);
  margin: 0.5rem auto 1.5rem;
  border-radius: 2px;
}

.section-description {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  width: clamp(300px, 250vw, 350px);
  height: clamp(400px, 45vh, 500px);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  border-color: var(--umatt-c-gold, #F2A900);
}

.card-icon-wrapper {
  padding: 2.5rem 2rem 0;
  display: flex;
  justify-content: center;
}

.card-icon-wrapper svg {
  height: 60px;
  width: auto;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.card:hover .card-icon-wrapper svg {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem 2rem 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;
}

.card-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 40px;
  height: 3px;
  background-color: var(--umatt-c-gold, #F2A900);
  border-radius: 1.5px;
}

.card-description {
  font-size: 1.075rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  flex: 1;
}

.card-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--umatt-c-gold, #F2A900);
  color: #3d2d24;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  align-self: flex-start;
}

.card-button svg {
  transition: transform 0.3s ease;
}

.card-button:hover {
  background-color: #ffbb33;
  box-shadow: 0 5px 15px rgba(242, 169, 0, 0.3);
}

.card-button:hover svg {
  transform: translateX(3px);
}

/* Responsive styles */
@media (max-width: 1200px) {
  .section-title {
    font-size: 2.75rem;
  }
  
  .cards-container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .get-involved-section {
    padding: 4rem 1.5rem;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
  
  .section-description {
    font-size: 1.1rem;
  }
  
  .cards-container {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .card {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .get-involved-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-description {
    font-size: 1rem;
  }
}
</style>