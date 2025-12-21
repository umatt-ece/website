<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'How are sponsorship funds utilized?',
    answer:
      'Sponsorship funds directly support design and manufacturing costs, competition travel expenses, equipment purchases, and educational resources for team members. Every dollar helps our students gain hands-on engineering experience.',
    isOpen: false
  },
  {
    question: 'What recognition do sponsors receive?',
    answer:
      'Depending on sponsorship level, recognition includes logo placement on our tractors, team apparel, presentations, social media, competition materials, and recruiting opportunities. Higher tiers receive more prominent placement and additional engagement opportunities.',
    isOpen: false
  },
  {
    question: 'Can we sponsor with in-kind donations?',
    answer:
      'Yes! We welcome in-kind donations of materials, equipment, manufacturing services, and technical expertise. These contributions are valued at market rate when determining your sponsorship tier benefits.',
    isOpen: false
  },
  {
    question: 'When is the best time to sponsor?',
    answer:
      'While we welcome support year-round, sponsorships finalized by September provide maximum visibility throughout our design and build phase leading up to the spring competition.',
    isOpen: false
  },
  {
    question: 'How can sponsors engage with the team?',
    answer:
      "Sponsors can visit our workshop, attend team presentations, participate in design reviews, host team visits to their facilities, and connect with students for recruitment purposes. We're flexible and eager to build meaningful partnerships.",
    isOpen: false
  }
])

function toggleFaq(index) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<template>
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Common Questions</span>
        <h2 class="section-title">Frequently Asked <span class="highlight">Questions</span></h2>
      </div>

      <div class="faq-list">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ active: faq.isOpen }"
        >
          <button class="faq-question" @click="toggleFaq(index)">
            <span>{{ faq.question }}</span>
            <div class="faq-icon">
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
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </button>
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 6rem 0;
  background: var(--bg-secondary);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
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
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--text-primary);
}

.section-title .highlight {
  color: var(--color-gold);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--color-gold);
}

.faq-item.active {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.faq-question:hover {
  color: var(--color-blue-medium);
}

.faq-icon {
  width: 28px;
  height: 28px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.faq-item.active .faq-icon {
  background: var(--color-gold);
  color: var(--color-black);
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    padding 0.4s ease;
}

.faq-item.active .faq-answer {
  max-height: 500px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  color: var(--text-tertiary);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .faq-section {
    padding: 4rem 0;
  }

  .faq-question {
    padding: 1.25rem;
    font-size: 1rem;
  }

  .faq-answer p {
    padding: 0 1.25rem 1.25rem;
  }
}
</style>
