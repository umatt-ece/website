<template>
    <div class="sponsors-container">
      <div class="sponsors-title">
        <h2>Our Sponsors</h2>
      </div>
      <div class="sponsors-carousel">
        <div class="carousel-track" :style="{ animationDuration: animationDuration + 's' }">
          <div
            v-for="(sponsor, index) in SponsorList"
            :key="index"
            class="carousel-item"
          >
            <a :href="sponsor.url" target="_blank" rel="noopener noreferrer" class="sponsor-link">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
              <span class="sponsor-name">{{ sponsor.name }}</span>
            </a>
          </div>
          <!-- Duplicate items for seamless looping -->
          <div
            v-for="(sponsor, index) in SponsorList"
            :key="'duplicate-' + index"
            class="carousel-item"
          >
            <a :href="sponsor.url" target="_blank" rel="noopener noreferrer" class="sponsor-link">
              <img :src="sponsor.logo" :alt="sponsor.name" class="sponsor-logo" />
              <span class="sponsor-name">{{ sponsor.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const SponsorList = ref([
    {
      name: 'Elmers',
      logo: '/src/assets/images/sponsor-elmers.webp',
      url: 'https://elmersmfg.com/',
    },
    {
      name: 'ASABE',
      logo: '/src/assets/images/sponsor-asabe.jpg',
      url: 'https://www.asabe.org/',
    },
    {
      name: 'Engineering Endowment Fund',
      logo: '/src/assets/images/sponsor-eng-endowment.png',
      url: 'https://endowment.eng.umanitoba.ca/',
    },
    {
      name: 'Extreme Machine Corp.',
      logo: '/src/assets/images/sponsor-extreme-machine-corp.jpg',
      url: 'https://extrememachinecorp.com/',
    },
    {
      name: 'Friends of Engineering',
      logo: '/src/assets/images/sponsor-friends-of-engineering.png',
      url: 'https://friendsofengineering.ca/',
    },
    {
      name: 'Macdon Industries Ltd.',
      logo: '/src/assets/images/sponsor-macdon.png',
      url: 'https://www.macdon.com/',
    },
    {
      name: 'Vehicle Technology Centre',
      logo: '/src/assets/images/sponsor-vehicle-technology-centre.png',
      url: 'https://vtci.ca/',
    },
  ]);
  
  const animationDuration = 20; // Duration in seconds
  </script>
  
  <style scoped>
  .sponsors-container {
    width: 100%;
    height:18rem;
    margin: 2rem auto;
    padding: 20px;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .sponsors-title {
    margin-bottom: 20px;
  }
  
  .sponsors-title h2 {
    font-size: 2.5rem;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .sponsors-carousel {
    overflow: hidden;
    margin-top:2rem;
    width: 100%;
    padding: 1.5rem 0;
  }
  
  .carousel-track {
    display: flex;
    width: calc(200%);
    animation: scroll infinite linear;
  }
  
  .sponsors-carousel:hover .carousel-track {
    animation-play-state: paused; /* Pause animation on hover */
  }
  
  .carousel-item {
    position: relative;
    flex: 0 0 auto;
    width: 150px;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .sponsor-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  
  .sponsor-logo {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;
  }
  
  .sponsor-link:hover .sponsor-logo {
    transform: scale(1.1);
  }
  
  .sponsor-name {
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
  
  .sponsor-link:hover .sponsor-name {
    opacity: 1;
    visibility: visible;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  </style>
  