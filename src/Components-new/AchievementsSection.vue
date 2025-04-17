<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Add these image imports
import arikImage from '@/assets/images/headshot-arik.png';
import kamImage from '@/assets/images/headshot-kam.png';

// Constants for achievements data
const achievements = [
  {
    id: 1,
    title: "2021 Champions",
    description: "Overall Competition Winners at the International Quarter Scale Tractor Student Design Competition",
    icon: {
      viewBox: "0 0 55 48",
      path: "M38.1562 0H17.1562C14.6719 0 12.6469 2.04375 12.7406 4.51875C12.7594 5.01562 12.7781 5.5125 12.8063 6H2.90625C1.65937 6 0.65625 7.00313 0.65625 8.25C0.65625 16.9312 3.79688 22.9688 8.01562 27.0656C12.1687 31.1063 17.2313 33.1406 20.9625 34.1719C23.1562 34.7812 24.6562 36.6094 24.6562 38.4469C24.6562 40.4062 23.0625 42 21.1031 42H18.6562C16.9969 42 15.6562 43.3406 15.6562 45C15.6562 46.6594 16.9969 48 18.6562 48H36.6562C38.3156 48 39.6562 46.6594 39.6562 45C39.6562 43.3406 38.3156 42 36.6562 42H34.2094C32.25 42 30.6562 40.4062 30.6562 38.4469C30.6562 36.6094 32.1469 34.7719 34.35 34.1719C38.0906 33.1406 43.1531 31.1063 47.3063 27.0656C51.5156 22.9688 54.6562 16.9312 54.6562 8.25C54.6562 7.00313 53.6531 6 52.4062 6H42.5062C42.5344 5.5125 42.5531 5.025 42.5719 4.51875C42.6656 2.04375 40.6406 0 38.1562 0ZM5.24063 10.5H13.1531C14.0063 18.9469 15.8906 24.5906 18.0187 28.3688C15.6844 27.3375 13.2563 25.8844 11.1562 23.8406C8.15625 20.925 5.71875 16.7156 5.25 10.5H5.24063ZM44.1656 23.8406C42.0656 25.8844 39.6375 27.3375 37.3031 28.3688C39.4312 24.5906 41.3156 18.9469 42.1687 10.5H50.0813C49.6031 16.7156 47.1656 20.925 44.175 23.8406H44.1656Z"
    }
  },
  {
    id: 2,
    title: "Best Design Award",
    description: "Recognized for innovative engineering solutions and exceptional design quality",
    icon: {
      viewBox: "0 0 37 48",
      path: "M17.2782 0.515723C18.3094 -0.168652 19.6594 -0.168652 20.6907 0.515723L22.3594 1.6126C22.9219 1.97822 23.5782 2.15635 24.2438 2.11885L26.2407 1.99697C27.4782 1.92197 28.6407 2.59697 29.1938 3.70322L30.0938 5.49385C30.3938 6.09385 30.8813 6.57197 31.4719 6.87197L33.2813 7.78135C34.3875 8.33447 35.0625 9.49697 34.9875 10.7345L34.8657 12.7313C34.8282 13.397 35.0063 14.0626 35.3719 14.6157L36.4782 16.2845C37.1625 17.3157 37.1625 18.6657 36.4782 19.697L35.3719 21.3751C35.0063 21.9376 34.8282 22.5939 34.8657 23.2595L34.9875 25.2564C35.0625 26.4939 34.3875 27.6564 33.2813 28.2095L31.4907 29.1095C30.8907 29.4095 30.4125 29.897 30.1125 30.4876L29.2032 32.297C28.65 33.4032 27.4875 34.0782 26.25 34.0032L24.2532 33.8814C23.5875 33.8439 22.9219 34.022 22.3688 34.3876L20.7 35.4939C19.6688 36.1782 18.3188 36.1782 17.2875 35.4939L15.6094 34.3876C15.0469 34.022 14.3907 33.8439 13.725 33.8814L11.7282 34.0032C10.4907 34.0782 9.32815 33.4032 8.77503 32.297L7.87503 30.5064C7.57503 29.9064 7.08753 29.4282 6.4969 29.1282L4.68753 28.2189C3.58128 27.6657 2.90628 26.5032 2.98128 25.2657L3.10315 23.2689C3.14065 22.6032 2.96253 21.9376 2.5969 21.3845L1.50003 19.7064C0.815652 18.6751 0.815652 17.3251 1.50003 16.2938L2.5969 14.6251C2.96253 14.0626 3.14065 13.4063 3.10315 12.7407L2.98128 10.7438C2.90628 9.50635 3.58128 8.34385 4.68753 7.79072L6.47815 6.89072C7.07815 6.58135 7.56565 6.09385 7.86565 5.49385L8.76565 3.70322C9.31878 2.59697 10.4813 1.92197 11.7188 1.99697L13.7157 2.11885C14.3813 2.15635 15.0469 1.97822 15.6 1.6126L17.2782 0.515723ZM26.4844 18.0001C26.4844 16.011 25.6942 14.1033 24.2877 12.6968C22.8812 11.2903 20.9735 10.5001 18.9844 10.5001C16.9953 10.5001 15.0876 11.2903 13.6811 12.6968C12.2746 14.1033 11.4844 16.011 11.4844 18.0001C11.4844 19.9892 12.2746 21.8969 13.6811 23.3034C15.0876 24.7099 16.9953 25.5001 18.9844 25.5001C20.9735 25.5001 22.8812 24.7099 24.2877 23.3034C25.6942 21.8969 26.4844 19.9892 26.4844 18.0001ZM1.10628 41.4189L5.1469 31.8095C5.16565 31.8188 5.17503 31.8282 5.1844 31.847L6.0844 33.6376C7.18128 35.8126 9.4594 37.1345 11.8969 36.9939L13.8938 36.872C13.9125 36.872 13.9407 36.872 13.9594 36.8907L15.6282 37.997C16.1063 38.3064 16.6125 38.5501 17.1375 38.7189L13.6125 47.0907C13.3969 47.6064 12.9188 47.9532 12.3657 48.0001C11.8125 48.047 11.2782 47.7939 10.9782 47.3251L7.9594 42.7032L2.70003 43.4814C2.16565 43.5564 1.63128 43.3407 1.29378 42.9189C0.956277 42.497 0.890652 41.9157 1.0969 41.4189H1.10628ZM24.3563 47.0814L20.8313 38.7189C21.3563 38.5501 21.8625 38.3157 22.3407 37.997L24.0094 36.8907C24.0282 36.8814 24.0469 36.872 24.075 36.872L26.0719 36.9939C28.5094 37.1345 30.7875 35.8126 31.8844 33.6376L32.7844 31.847C32.7938 31.8282 32.8032 31.8188 32.8219 31.8095L36.8719 41.4189C37.0782 41.9157 37.0032 42.4876 36.675 42.9189C36.3469 43.3501 35.8032 43.5657 35.2688 43.4814L30.0094 42.7032L26.9907 47.3157C26.6907 47.7845 26.1563 48.0376 25.6032 47.9907C25.05 47.9439 24.5719 47.5876 24.3563 47.0814Z"
    }
  },
  {
    id: 3,
    title: "Top Performance",
    description: "Consistently ranked among the top teams for durability and reliability testing",
    icon: {
      viewBox: "0 0 51 48",
      path: "M28.0375 1.6875C27.5406 0.65625 26.4906 0 25.3375 0C24.1843 0 23.1437 0.65625 22.6375 1.6875L16.6093 14.0906L3.14684 16.0781C2.02184 16.2469 1.08434 17.0344 0.737469 18.1125C0.390594 19.1906 0.671844 20.3812 1.47809 21.1781L11.2468 30.8438L8.94059 44.5031C8.75309 45.6281 9.22184 46.7719 10.15 47.4375C11.0781 48.1031 12.3062 48.1875 13.3187 47.6531L25.3468 41.2312L37.375 47.6531C38.3875 48.1875 39.6156 48.1125 40.5437 47.4375C41.4718 46.7625 41.9406 45.6281 41.7531 44.5031L39.4375 30.8438L49.2062 21.1781C50.0125 20.3812 50.3031 19.1906 49.9468 18.1125C49.5906 17.0344 48.6625 16.2469 47.5375 16.0781L34.0656 14.0906L28.0375 1.6875Z"
    }
  }
];

// Constants for testimonials data - FIX IMAGE PATHS
const testimonials = [
  {
    id: 1,
    quote: "UMATT has been an incredible learning experience that has prepared me for my engineering career. The hands-on projects gave me skills I couldn't get in the classroom.",
    author: {
      name: "Arik M.",
      title: "Mechanical Engineering Student",
      image: arikImage // Use imported image
    }
  },
  {
    id: 2,
    quote: "The hands-on experience and teamwork at UMATT are unmatched. It's where theory meets practice, and I've developed leadership skills that employers value highly.",
    author: {
      name: "Kameron Ronald",
      title: "Team Lead",
      image: kamImage // Use imported image
    }
  }
];

// Constant for quotes icon SVG path
const quoteIconPath = "M0 20H7.2V12.8H2.4C2.4 9.6 4.8 5.6 7.2 4L4.8 0C1.6 2.4 0 8 0 12.8V20ZM16.8 20H24V12.8H19.2C19.2 9.6 21.6 5.6 24 4L21.6 0C18.4 2.4 16.8 8 16.8 12.8V20Z";

// Carousel state
const currentIndex = ref(0);
const slides = ref([]);
const indicators = ref([]);
const prevButton = ref(null);
const nextButton = ref(null);

// Carousel methods
const showSlide = (index) => {
  slides.value.forEach(slide => slide.classList.remove('active'));
  indicators.value.forEach(indicator => indicator.classList.remove('active'));
  
  slides.value[index].classList.add('active');
  indicators.value[index].classList.add('active');
};

const goToNextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  showSlide(currentIndex.value);
};

const goToPrevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  showSlide(currentIndex.value);
};

const goToSlide = (index) => {
  currentIndex.value = index;
  showSlide(currentIndex.value);
};

onMounted(() => {
  // Get carousel elements
  slides.value = document.querySelectorAll('.carousel-slide');
  indicators.value = document.querySelectorAll('.carousel-indicator');
  prevButton.value = document.querySelector('.carousel-prev');
  nextButton.value = document.querySelector('.carousel-next');
  
  // Set up event listeners
  if (prevButton.value) {
    prevButton.value.addEventListener('click', goToPrevSlide);
  }
  
  if (nextButton.value) {
    nextButton.value.addEventListener('click', goToNextSlide);
  }
  
  // Set up indicators
  indicators.value.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });
});

onUnmounted(() => {
  // Remove event listeners
  if (prevButton.value) prevButton.value.replaceWith(prevButton.value.cloneNode(true));
  if (nextButton.value) nextButton.value.replaceWith(nextButton.value.cloneNode(true));
  indicators.value.forEach(indicator => {
    if (indicator) indicator.replaceWith(indicator.cloneNode(true));
  });
});
</script>

<template>
  <section id="achievements" class="achievements-section" aria-labelledby="achievements-title">
    <div class="container">
      <header class="section-header">
        <h2 id="achievements-title" class="section-heading">
          Our <span class="highlight">Achievements</span> & Impact
        </h2>
        <div class="heading-underline"></div>
        <p class="section-intro">Recognized excellence in agricultural engineering innovation and design.</p>
      </header>
      
      <!-- Achievement Cards -->
      <div class="achievements-container">
        <div 
          v-for="achievement in achievements" 
          :key="achievement.id" 
          class="achievement-card"
        >
          <div class="achievement-icon-wrapper">
            <svg width="100%" height="auto" :viewBox="achievement.icon.viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path :d="achievement.icon.path" fill="#F2A900"/>
            </svg>
          </div>
          <div class="achievement-content">
            <h3 class="achievement-title">{{ achievement.title }}</h3>
            <p class="achievement-description">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Testimonials Section -->
      <div class="testimonials-section">
        <h3 class="testimonials-heading">What Our Members Say</h3>
        
        <!-- Desktop view: Grid layout for larger screens -->
        <div class="testimonials-container">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="testimonial-card"
          >
            <div class="quote-icon">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="quoteIconPath" fill="#F2A900" fill-opacity="0.3"/>
              </svg>
            </div>
            <blockquote class="testimonial-quote">
              "{{ testimonial.quote }}"
            </blockquote>
            <div class="testimonial-author">
              <img :src="testimonial.author.image" :alt="`${testimonial.author.name}, ${testimonial.author.title}`" />
              <div class="testimonial-author-info">
                <span class="author-name">{{ testimonial.author.name }}</span>
                <span class="author-title">{{ testimonial.author.title }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile view: Carousel for smaller screens -->
        <div class="testimonials-carousel">
          <div class="carousel-wrapper">
            <div class="carousel-track">
              <div 
                v-for="(testimonial, index) in testimonials" 
                :key="testimonial.id"
                :class="['carousel-slide', index === 0 ? 'active' : '']"
              >
                <div class="testimonial-card">
                  <div class="quote-icon">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :d="quoteIconPath" fill="#F2A900" fill-opacity="0.3"/>
                    </svg>
                  </div>
                  <blockquote class="testimonial-quote">
                    "{{ testimonial.quote }}"
                  </blockquote>
                  <div class="testimonial-author">
                    <img :src="testimonial.author.image" :alt="`${testimonial.author.name}, ${testimonial.author.title}`" />
                    <div class="testimonial-author-info">
                      <span class="author-name">{{ testimonial.author.name }}</span>
                      <span class="author-title">{{ testimonial.author.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Carousel navigation controls -->
            <div class="carousel-controls">
              <button type="button" class="carousel-prev" aria-label="Previous testimonial">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                </svg>
              </button>
              <div class="carousel-indicators">
                <button 
                  v-for="(testimonial, index) in testimonials" 
                  :key="testimonial.id"
                  type="button" 
                  :class="['carousel-indicator', index === 0 ? 'active' : '']" 
                  :aria-label="`Slide ${index + 1}`"
                ></button>
              </div>
              <button type="button" class="carousel-next" aria-label="Next testimonial">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 7.41L10 6L16 12L10 18L8.59 16.59L13.17 12L8.59 7.41Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements-section {
  padding: 5rem 1.5rem;
  background: var(--background-white, #ffffff);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-heading {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--black, #000000);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.highlight {
  color: var(--umatt-c-medium-blue, #385E9D);
}

.heading-underline {
  width: 80px;
  height: 4px;
  background: var(--umatt-c-gold, #F2A900);
  border-radius: 2px;
  margin: 0.75rem auto;
}

.section-intro {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

/* Achievement cards */
.achievements-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);
  margin-bottom: 4rem;
}

.achievement-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  width:clamp(300px, 30vw, 350px);
  height: clamp(300px, 30vw, 350px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.achievement-icon-wrapper {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: rgba(242, 169, 0, 0.1);
  border-radius: 50%;
  padding: 1.25rem;
}

.achievement-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.achievement-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--black, #000000);
}

.achievement-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

/* Testimonials section */
.testimonials-section {
  padding: 3rem 0 1rem;
  position: relative;
}

.testimonials-heading {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: var(--black, #000000);
  position: relative;
}

.testimonials-heading::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  background: var(--umatt-c-gold, #F2A900);
  left: 50%;
  bottom: -0.75rem;
  transform: translateX(-50%);
  border-radius: 2px;
}

.testimonials-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.testimonial-card {
  position: relative;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.quote-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.testimonial-quote {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #333;
  margin: 0 0 1.5rem 0;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.testimonial-author img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 2px solid var(--umatt-c-gold, #F2A900);
  object-fit: cover; /* Ensures proper image proportions */
  background-color: #f0f0f0; /* Placeholder background if image fails to load */
}

.testimonial-author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  color: #333333 !important; /* Force color to ensure visibility */
  margin-bottom: 0.25rem;
}

.author-title {
  display: block;
  font-size: 0.875rem;
  color: #555;
}

/* Testimonial Carousel Styling */
.testimonials-carousel {
  display: none; /* Hidden by default, shown on small/medium screens */
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: none;
}

.carousel-slide.active {
  opacity: 1;
  display: block;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.carousel-prev, 
.carousel-next {
  background: var(--umatt-c-medium-blue, #385E9D);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
}

.carousel-prev:hover, 
.carousel-next:hover {
  background: var(--umatt-c-gold, #F2A900);
}

.carousel-indicators {
  display: flex;
  gap: 0.5rem;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.3s;
}

.carousel-indicator.active {
  width: 12px;
  height: 12px;
  background: var(--umatt-c-gold, #F2A900);
}



@media (max-width: 1024px) {
  .section-heading {
    font-size: 2.25rem;
  }
  
  .testimonials-container {
    display: none;
  }
  
  .testimonials-carousel {
    display: block;
  }
}

@media (max-width: 768px) {
  .achievements-section {
    padding: 4rem 1.25rem;
  }
  
  .section-heading {
    font-size: 2rem;
  }
  
  .achievement-card {
    padding: 1.5rem;
  }
  
  .achievement-icon-wrapper {
    width: 70px;
    height: 70px;
  }
  
  .testimonials-container {
    display: none;
  }
  
  .testimonials-carousel {
    display: block;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .achievements-section {
    padding: 3rem 1rem;
  }
  
  .section-heading {
    font-size: 1.75rem;
  }
  
  .section-intro {
    font-size: 1rem;
  }
  
 
  
  .achievement-title {
    font-size: 1.25rem;
  }
  
  .testimonials-heading {
    font-size: 1.5rem;
  }
  
  .testimonial-quote {
    font-size: 1rem;
  }
}
</style>


