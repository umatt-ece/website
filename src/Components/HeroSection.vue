<script setup>
import { ref } from 'vue';
import SpeedDial from 'primevue/speeddial';
import { Button } from 'primevue';
const description = ref('Engineering the Future of Agriculture');

const items = [
  {
    label: 'Facebook',
    icon: 'pi pi-facebook',
    command: () => {
      window.open('https://facebook.com', '_blank');
    },
  },
  {
    label: 'Twitter',
    icon: 'pi pi-twitter',
    command: () => {
      window.open('https://twitter.com', '_blank');
    },
  },
  {
    label: 'LinkedIn',
    icon: 'pi pi-linkedin',
    command: () => {
      window.open('https://linkedin.com', '_blank');
    },
  },
];
</script>

<template>
  <div class="hero-container">
    <div class="hero">
      <div class="hero__content">
        <h1>
          <svg width="100%" height="100%" viewBox="0 0 154 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="154" height="35" />
            <path d="M4.968 0.543999V21.712C4.968 24.688 5.688 26.896 7.128 28.336C8.6 29.776 10.632 30.496 13.224 30.496C15.784 30.496 17.784 29.776 19.224 28.336C20.696 26.896 21.432 24.688 21.432 21.712V0.543999H25.8V21.664C25.8 24.448 25.24 26.8 24.12 28.72C23 30.608 21.48 32.016 19.56 32.944C17.672 33.872 15.544 34.336 13.176 34.336C10.808 34.336 8.664 33.872 6.744 32.944C4.856 32.016 3.352 30.608 2.232 28.72C1.144 26.8 0.6 24.448 0.6 21.664V0.543999H4.968ZM67.0226 0.783998V34H62.6546V9.232L51.6146 34H48.5426L37.4546 9.184V34H33.0866V0.783998H37.7906L50.0786 28.24L62.3666 0.783998H67.0226ZM94.2064 26.56H79.6144L76.9264 34H72.3184L84.4144 0.735999H89.4544L101.502 34H96.8944L94.2064 26.56ZM92.9584 23.008L86.9104 6.112L80.8624 23.008H92.9584ZM127.366 0.543999V4.096H118.246V34H113.878V4.096H104.71V0.543999H127.366ZM153.335 0.543999V4.096H144.215V34H139.847V4.096H130.679V0.543999H153.335Z" />
          </svg>
        </h1>
        <p>{{ description }}</p>
      </div>
      <SpeedDial :model="items" direction="up" :transitionDelay="80" :style="{ position: 'absolute',right: '1rem' , bottom: 0 }" pt:menuitem="m-2">
        <template #button="{ toggleCallback }">
            <Button outlined class="border" @click="toggleCallback">
                <img src="@/assets/images/logo.png" alt="logo" class="logo">
            </Button>
        </template>
        <template #item="{ item, toggleCallback }">
            <div class="speed-dial-item" @click="toggleCallback">
                <span :class="item.icon" />
                <span>
                    {{ item.label }}
                </span>
            </div>
        </template>
    </SpeedDial>
    </div>
  </div>
</template>

<style scoped>
.speed-dial-item {
  display: grid;
  color: #ffffff; /* Change to white for better contrast */
  grid-template-columns: 1fr 3fr;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7); /* Add background color for better readability */
  border-radius: 8px;
  cursor: pointer;
}

.speed-dial-item span {
  font-size: 1.5rem;
}

.speed-dial-item span:nth-child(2) {
  font-size: 1rem;
}

.speed-dial-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Lighten on hover */
}

.speed-dial-item:active {
  background-color: rgba(255, 255, 255, 0.3); /* Lighten more on active */
}

.speed-dial-item::before {
  content: '';
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  position: absolute;
  bottom: 0;
}
.hero-container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('@/assets/images/competition-group-photo-2024.jpg') no-repeat center center/cover;
  animation: zoom-in 7s ease-in-out forwards;
}

.hero {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  text-align: center;
}

.hero__content {
  margin-top: 2rem;
  padding: 2rem;
  z-index: 2;
}

.hero h1 {
  font-size: clamp(2rem, 10vw, 4rem);
  margin-top: 10px;
}

.hero p {
  margin-top: 1rem;
  font-size: 1.5em;
  color: #e0e0e0;
  margin-top: 10px;
  animation: fade-in 2s ease-in-out 3s forwards;
  opacity: 0;
}

svg path {
  fill: transparent;
  stroke: #c2b57b;
  stroke-width: 0.3;
  stroke-dasharray: 251;
  stroke-dashoffset: 251;
  animation: draw 4s ease-in-out forwards, fill 2s ease-in-out 4s forwards;
}



.logo {
  width: 120px;
  height: auto;
  opacity: 0;
  animation: fade-in 3s ease-in-out 6s forwards,pulse 2s infinite;
}





@keyframes zoom-in {
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 120%;
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fill {
  to {
    fill: #e4ba00;
  }
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>