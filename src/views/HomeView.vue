<script setup lang="ts">
import Card from 'primevue/card'
import { home } from '@/assets/strings'
import Image from 'primevue/image'
import Fieldset from 'primevue/fieldset'
import Button from 'primevue/button'

</script>

<template>
  <div class="card">
    <Card class="card-view">
      <template #content>
        <!-- UMATT Banner -->
        <Image src="/images/umatt-banner.png" alt="" width="1000" class="centered full-width" />
        <!-- Vision Statement -->
        <div class="inset-5">
          <Fieldset :legend="home.vision.title">
            <div class="inset-1">
              <div>
                <p>
                  {{ home.vision.content }}
                </p>
              </div>
              <br>
              <Button as="router-link"
                      :label="home.learnMore"
                      to="/about"
                      class="med-button"
                      severity="secondary"/>
            </div>
          </Fieldset>
        </div>
        <br>
        IMAGE CAROUSEL

        list of images
      </template>
    </Card>
  </div>
</template>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
}

.full-width {
  object-fit: cover;
  width: 100%;
}

.inset-1 {
  padding: 0 1rem;
}

.inset-5 {
  padding: 0 5rem;
}
</style>
