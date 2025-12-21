<script setup>
import SponsorHeroSection from '@/components/SponsorHeroSection.vue'
import WhySponsorSection from '@/components/WhySponsorSection.vue'
import CompetitionInfoSection from '@/components/CompetitionInfoSection.vue'
import SponsorshipTiersSection from '@/components/SponsorshipTiersSection.vue'
import SponsorFAQSection from '@/components/SponsorFAQSection.vue'
import SponsorContactSection from '@/components/SponsorContactSection.vue'
</script>

<template>
  <div class="sponsor-page">
    <SponsorHeroSection />
    <WhySponsorSection />
    <CompetitionInfoSection />
    <SponsorshipTiersSection />
    <SponsorFAQSection />
    <SponsorContactSection />
  </div>
</template>

<style scoped>
.sponsor-page {
  font-family: Poppins, sans-serif;
}
</style>
