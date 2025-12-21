<script setup>
import AboutHeroSection from '@/components/AboutHeroSection.vue'
import AboutMissionSection from '@/components/AboutMissionSection.vue'
import AboutWhatWeDoSection from '@/components/AboutWhatWeDoSection.vue'
import AboutJourneySection from '@/components/AboutJourneySection.vue'
import AboutTeamSection from '@/components/AboutTeamSection.vue'
import AboutCommunitySection from '@/components/AboutCommunitySection.vue'
import AboutJoinSection from '@/components/AboutJoinSection.vue'
</script>

<template>
  <div class="about-page">
    <AboutHeroSection />
    <AboutMissionSection />
    <AboutWhatWeDoSection />
    <AboutJourneySection />
    <AboutTeamSection />
    <AboutCommunitySection />
    <AboutJoinSection />
  </div>
</template>

<style scoped>
.about-page {
  font-family: Poppins, sans-serif;
}
</style>
