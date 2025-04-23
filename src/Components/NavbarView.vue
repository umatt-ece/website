<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isOpen }">
    <div class="navbar__container">
      <!-- Logo and team name -->
      <div class="navbar__brand">
        <img src="@/assets/images/logo.png" alt="UMATT Logo" class="navbar__logo" />
        <div class="navbar__title">
          <span class="navbar__name">UMATT</span>
          <span class="navbar__full-name">University of Manitoba Association of Tiny Tractors</span>
        </div>
      </div>

      <!-- Mobile toggle button -->
      <button class="navbar__toggle" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="navbar__toggle-icon"></span>
      </button>

      <!-- Navigation links -->
      <div class="navbar__menu">
        <ul class="navbar__list">
          <li class="navbar__item" v-for="item in navItems" :key="item.label">
            <a :href="item.href" class="navbar__link" @click="closeMenu">
              <i :class="item.icon" class="navbar__icon"></i>
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isOpen = ref(false);
const onTopHome = ref(false);


const navItems = [
  { label: 'Home', icon: 'pi pi-home', href: '/' },
  { label: 'About', icon: 'pi pi-info', href: '/about' },
  { label: 'Team', icon: 'pi pi-users', href: '/team' },
  { label: 'Contact', icon: 'pi pi-envelope', href: '/contact' },
];


const actionItems = [
{ label: 'Join Us', icon: 'pi pi-user-plus', href: '#join' },
  { label: 'Sponsor', icon: 'pi pi-dollar', href: '#sponsor' },
 
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  // Prevent scrolling when menu is open
  document.body.style.overflow = isOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};


const onTopHomeView = () => {
  const onHome = router.currentRoute.value.path === '/home';
  const onTop = window.scrollY === 0;

  if (onHome && onTop) {
    isScrolled.value = false;
  } else {
    isScrolled.value = true;
  }

  onTopHome.value = onTop && onHome;

  
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
  onTopHomeView(); // Initial check for onTopHome

});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = ''; // Restore scrolling
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.4s var(--transition-timing, cubic-bezier(0.16, 1, 0.3, 1));
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.92));
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.navbar--scrolled {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid var(--color-gold, #F2A900);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1rem, 5vw, 2.5rem);
  max-width: 1440px;
  margin: 0 auto;
  height: 4.5rem;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  transition: transform 0.3s ease;
}

.navbar__brand:hover {
  transform: translateY(-2px);
}

.navbar__logo {
  height: 3.2rem;
  width: auto;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.navbar__logo:hover {
  transform: scale(1.08) rotate(2deg);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.15));
}

.navbar__title {
  display: flex;
  flex-direction: column;
}

.navbar__name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-brown, #4F2C1D);
  line-height: 1.1;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.02em;
}

.navbar__full-name {
  display: none;
  font-size: 0.75rem;
  color: var(--color-gray-600, #4B5563);
  transition: color 0.3s ease;
}

.navbar__brand:hover .navbar__full-name {
  color: var(--color-blue-medium, #385E9D);
}

.navbar__toggle {
  display: none; /* Hidden on desktop */
  background: transparent;
  border: none;
  cursor: pointer;
  width: 2.8rem;
  height: 2.8rem;
  position: relative;
  z-index: 101;
  padding: 0;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.navbar__toggle:hover {
  background-color: rgba(242, 169, 0, 0.1);
}

.navbar__toggle-icon,
.navbar__toggle-icon::before,
.navbar__toggle-icon::after {
  display: block;
  position: absolute;
  width: 1.75rem;
  height: 2px;
  background-color: var(--color-brown, #4F2C1D);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.navbar__toggle-icon {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.navbar__toggle-icon::before,
.navbar__toggle-icon::after {
  content: '';
  left: 0;
}

.navbar__toggle-icon::before {
  top: -8px;
}

.navbar__toggle-icon::after {
  bottom: -8px;
}

/* Toggle button animation */
.navbar--open .navbar__toggle-icon {
  background-color: transparent;
}

.navbar--open .navbar__toggle-icon::before {
  top: 0;
  transform: rotate(45deg);
}

.navbar--open .navbar__toggle-icon::after {
  bottom: 0;
  transform: rotate(-45deg);
}

.navbar__menu {
  display: flex;
  align-items: center;
}

.navbar__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.65rem;
}

.navbar__link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.1rem;
  color: var(--color-brown, #4F2C1D);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 0.375rem;
  position: relative;
  overflow: hidden;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: var(--color-gold, #F2A900);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 3px 3px 0 0;
}

.navbar__link:hover::after, 
.navbar__link:focus::after {
  width: 80%;
}

.navbar__link:hover, 
.navbar__link:focus {
  color: var(--color-brown, #4F2C1D);
  background-color: rgba(242, 169, 0, 0.15);
  transform: translateY(-2px);
  outline: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
}

.navbar__icon {
  margin-right: 0.5rem;
  transition: transform 0.3s ease;
  color: var(--color-gold, #F2A900);
}

.navbar__link:hover .navbar__icon {
  transform: translateY(-2px);
}

/* Desktop+ screens */
@media (min-width: 1024px) {
  .navbar__full-name {
    display: block;
  }

  /* Add a subtle animation when the navbar first appears */
  .navbar {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
}

/* Responsive styles */
@media (max-width: 900px) {
  .navbar__toggle {
    display: block; /* Show on mobile */
  }
  
  .navbar__menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(248, 248, 248, 0.98));
    padding-top: 5rem;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .navbar--open .navbar__menu {
    right: 0;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
  }
  
  .navbar__list {
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
    width: 100%;
    padding: 2rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease 0.1s;
  }
  
  .navbar--open .navbar__list {
    opacity: 1;
    transform: translateY(0);
  }
  
  .navbar__item {
    width: 100%;
    max-width: 300px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease;
  }
  
  .navbar--open .navbar__item:nth-child(1) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
  .navbar--open .navbar__item:nth-child(2) { transition-delay: 0.15s; opacity: 1; transform: translateY(0); }
  .navbar--open .navbar__item:nth-child(3) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
  .navbar--open .navbar__item:nth-child(4) { transition-delay: 0.25s; opacity: 1; transform: translateY(0); }
  .navbar--open .navbar__item:nth-child(5) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
  .navbar--open .navbar__item:nth-child(6) { transition-delay: 0.35s; opacity: 1; transform: translateY(0); }
  
  .navbar__link {
    width: 100%;
    justify-content: center;
    font-size: 1.1rem;
    padding: 0.85rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .navbar__link::after {
    display: none;
  }
  
  .navbar__link:hover, 
  .navbar__link:focus {
    background-color: var(--color-brown, #4F2C1D);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .navbar__link:hover .navbar__icon {
    color: var(--color-gold, #F2A900);
  }
  
  .navbar__container {
    padding: 0 1rem;
    height: 4rem;
  }
  
  /* Enhance mobile menu appearance */
  .navbar--scrolled {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

/* Medium-small screens */
@media (max-width: 500px) {
  .navbar__logo {
    height: 2.8rem;
  }
  
  .navbar__name {
    font-size: 1.2rem;
  }
  
  .navbar__container {
    height: 3.8rem;
  }
}

/* Very small screens */
@media (max-width: 350px) {
  .navbar__name {
    font-size: 1.1rem;
  }
  
  .navbar__logo {
    height: 2.5rem;
  }
  
  .navbar__container {
    padding: 0 0.75rem;
    height: 3.5rem;
  }
}

/* Animation for navbar appearance */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}


/* Improved focus styles for accessibility */
.navbar__link:focus-visible {
  outline: 2px solid var(--color-gold, #F2A900);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(242, 169, 0, 0.3);
}

/* Add a subtle hover effect to the navbar container on desktop */
@media (min-width: 901px) {
  .navbar:hover {
    transform: translateY(1px);
  }
  
  .navbar--scrolled:hover {
    border-bottom-color: var(--color-blue-medium, #385E9D);
  }
}
</style>
``` 
