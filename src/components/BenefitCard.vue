<script setup>
defineProps({
  benefit: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="benefit-card">
    <div class="benefit-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" 
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="benefit-svg"
           v-html="benefit.icon">
      </svg>
    </div>
    <h3 class="benefit-title">{{ benefit.title }}</h3>
    <p class="benefit-description">{{ benefit.description }}</p>
  </div>
</template>

<style scoped>
.benefit-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 3px solid transparent;
}

.benefit-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-bottom-color: var(--color-gold, #F2A900);
}

.benefit-icon {
  margin-bottom: 1.5rem;
  color: var(--color-blue-medium, #385E9D);
  background: rgba(56, 94, 157, 0.08);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.benefit-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0) 70%, rgba(255,255,255,0.2) 100%);
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.benefit-card:hover .benefit-icon {
  color: var(--color-gold, #F2A900);
  background: rgba(242, 169, 0, 0.08);
  transform: scale(1.02);
  box-shadow: 0 0 15px rgba(242, 169, 0, 0.15);
}

.benefit-card:hover .benefit-icon::after {
  opacity: 1;
}

.benefit-svg {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.benefit-card:hover .benefit-svg {
  transform: scale(1.08);
}

/* Path and shape animations - more subtle */
.benefit-svg path,
.benefit-svg polyline,
.benefit-svg circle,
.benefit-svg line,
.benefit-svg polygon {
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  transition: stroke-dashoffset 0.8s ease-out;
}

.benefit-card:hover .benefit-svg path,
.benefit-card:hover .benefit-svg polyline,
.benefit-card:hover .benefit-svg circle,
.benefit-card:hover .benefit-svg line,
.benefit-card:hover .benefit-svg polygon {
  stroke-dashoffset: 0;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--umatt-c-text-dark, #333);
  transition: color 0.4s ease;
}

.benefit-card:hover .benefit-title {
  color: var(--color-blue-medium, #385E9D);
}

.benefit-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--umatt-c-text-medium, #555);
  opacity: 0.9;
  transition: opacity 0.4s ease;
}

.benefit-card:hover .benefit-description {
  opacity: 1;
}
</style>