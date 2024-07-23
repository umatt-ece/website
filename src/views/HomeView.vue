<script setup lang="ts">
import Card from 'primevue/card'
import { generic, home } from '@/assets/strings'
import { gallery, sponsors } from '@/assets/images'
import Image from 'primevue/image'
import Fieldset from 'primevue/fieldset'
import Button from 'primevue/button'
import Carousel from 'primevue/carousel'
import Tag from 'primevue/tag'


</script>

<template>
  <div class="card">
    <Card class="card-view">
      <template #content>
        <!-- UMATT Banner -->
        <div class="flex-h-centered">
          <Image src="/images/logo.png" alt="" width="300" />
          <span class="title"><b>{{ home.title }}</b></span>
        </div>

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

        <Carousel :value="gallery" :numVisible="1" :numScroll="1" circular :autoplayInterval="3000">
          <template #item="item">
            <img src="/images/competition-group-photo-2024.jpg" :alt="item.alt" class="gallery"/>
          </template>
        </Carousel>
        <br>

<!--        <div class="sponsor-list">-->
<!--          <template v-for="sponsor in sponsors">-->
<!--            <a :href="sponsor.link" target="_blank">-->
<!--              <img :src="'/image/' + sponsor.image" :alt="sponsor.alt" class="sponsor"/>-->
<!--            </a>-->
<!--          </template>-->
<!--        </div>-->

        <h1 style="text-align: center">{{ home.sponsors }}</h1>
        <br>

        <div class="sponsor-list">
          <a href="" class="sponsor-item" target="_blank">
            <img src="/images/sponsor-asabe.jpg" alt="ASABE" class="sponsor-logo"/>
          </a>
          <a href="" class="sponsor-item" target="_blank">
            <img src="/images/sponsor-elmers.webp" alt="Elmers Manufacturing" class="sponsor-logo"/>
          </a>
          <a href="" class="sponsor-item" target="_blank">
            <img src="/images/sponsor-eng-endowment.png" alt="Eng Endowment" class="sponsor-logo"/>
          </a>
          <a href="" class="sponsor-item" target="_blank">
            <img src="/images/sponsor-extreme-machine-corp.jpg" alt="Extreme Machine Corp" class="sponsor-logo"/>
          </a>
          <a href="" class="sponsor-item" target="_blank">
            <img src="/images/sponsor-friends-of-engineering.png" alt="Friends of Engineering" class="sponsor-logo"/>
          </a>
          <a href="" class="sponsor-item" target="_blank">
            <img src="/images/sponsor-macdon.png" alt="MacDon" class="sponsor-logo"/>
          </a>
          <a href="" class="sponsor-item" target="_blank">
            <img src="/images/sponsor-vehicle-technology-centre.png" alt="Vehicle Technology Centre" class="sponsor-logo"/>
          </a>
        </div>

        <div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.flex-h-centered {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.title {
  display: flex;
  align-items: center;
  max-width: 50%;
  font-size: 48px;
}

.inset-1 {
  padding: 0 1rem;
}

.inset-5 {
  padding: 0 5rem;
}

.gallery {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
}

.sponsor-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sponsor-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 1rem;
}

.sponsor-logo {
  max-width: 50%;
}
</style>
