<script setup>
import BenefitCard from './BenefitCard.vue';

defineProps({
  benefits: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="benefits-grid">
    <slot 
      v-for="benefit in benefits" 
      :key="benefit.id"
      :benefit="benefit"
      name="benefit"
    >
      <BenefitCard :benefit="benefit" />
    </slot>
  </div>
</template>

<style scoped>
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}


</style>