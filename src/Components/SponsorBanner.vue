<template>
  <section class="banner-section">
    <div class="banner-container">
      <div class="title">
        <h1>{{title}}</h1>
      </div>
      <div class="slider" >
        <ul :style="ulStyle">
          <li v-for="(sponsor, index) in Sponsors" :key="sponsor.name" :style="{ animationDelay: `calc(var(--time) / var(--quantity) * -${index})` }">
            <a :href="sponsor.url" target="_blank" rel="noopener noreferrer" :title="sponsor.name">
              <img :src="sponsor.logo" :alt="sponsor.name" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, computed } from 'vue';

const title = ref('Our Sponsors');
const Sponsors = ref([
  { name: 'Elmers', logo: '/src/assets/images/sponsor-elmers.webp', url: 'https://elmersmfg.com/' },
  { name: 'ASABE', logo: '/src/assets/images/sponsor-asabe.jpg', url: 'https://www.asabe.org/' },
  { name: 'Engineering Endowment Fund', logo: '/src/assets/images/sponsor-eng-endowment.png', url: 'https://endowment.eng.umanitoba.ca/' },
  { name: 'Extreme Machine Corp.', logo: '/src/assets/images/sponsor-extreme-machine-corp.jpg', url: 'https://extrememachinecorp.com/' },
  { name: 'Friends of Engineering', logo: '/src/assets/images/sponsor-friends-of-engineering.png', url: 'https://friendsofengineering.ca/' },
  { name: 'Macdon Industries Ltd.', logo: '/src/assets/images/sponsor-macdon.png', url: 'https://www.macdon.com/' },
  { name: 'Vehicle Technology Centre', logo: '/src/assets/images/sponsor-vehicle-technology-centre.png', url: 'https://vtci.ca/' },
]);

const ulStyle = computed(() => ({
  
  '--time': `${Sponsors.value.length * 3}s`,
  '--delay': `-${Sponsors.value.length}s`,
  '--quantity': Sponsors.value.length,

}));
</script>

<style scoped lang = "scss">
@use '/src/styles/base.scss' as *;

.banner-section{
  position: relative;
  // margin: 2rem 0;
  padding: 2rem 0;
  background: $yellow;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
}

.banner-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: clamp(1rem, 5vw, 2.5rem);
  overflow: hidden;
  
}
.title{
  text-align: center;
  margin: 1rem 0;
  font-size: clamp(1.2rem, 5vw, 2rem);
}
.slider{
    height: clamp(100px, 20vw, 200px);
    overflow: hidden;
}


ul{
  --logo-width: clamp(100px, 20vw, 200px);
  width: 100%;
  height: 100%;
  min-width: calc(var(--logo-width) * var(--quantity));
  display: flex;
  position: relative;
}
li {
  
  list-style: none;
  position:absolute;
  width: var(--logo-width);
  height: 100%;
  left:100%;
  object-fit: contain;
  object-position:center ;
  animation: run var(--time) linear infinite;
  
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position:center ;
}




@keyframes run {
 to{
  left:calc(var(--logo-width)*-1);
 }
}
</style>