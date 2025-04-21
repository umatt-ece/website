<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMenuOpen }">
    <!-- Container with max width -->
    <div class="navbar__container">
      <!-- Logo area -->
      <router-link to="/" class="navbar__brand" @click="closeMenu">
        <img src="@/assets/images/logo.png" alt="UMATT Logo" class="navbar__logo" />
        <div class="navbar__titles">
          <span class="navbar__title">UMATT</span>
          <span class="navbar__subtitle">University of Manitoba Association of Tiny Tractors</span>
        </div>
      </router-link>

      <!-- Mobile toggle button -->
      <button 
        class="navbar__toggle" 
        @click="toggleMenu" 
        aria-label="Toggle navigation menu"
        :aria-expanded="isMenuOpen.toString()"
      >
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
        <span class="navbar__toggle-bar"></span>
      </button>

      <!-- Navigation and actions -->
      <div class="navbar__content" :class="{ 'navbar__content--visible': isMenuOpen }">
        <!-- Main navigation -->
        <nav class="navbar__nav" aria-label="Main navigation">
          <ul class="navbar__nav-list">
            <li v-for="(item, index) in navItems" :key="index" class="navbar__nav-item">
              <router-link 
                :to="item.to" 
                class="navbar__nav-link" 
                :class="{ 'navbar__nav-link--active': isActive(item.to) }"
                @click="closeMenu"
              >
                <i :class="['navbar__nav-icon', item.icon]"></i>
                <span class="navbar__nav-text">{{ item.label }}</span>
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Action buttons -->
        <div class="navbar__actions">
          <router-link to="/join" class="navbar__button" @click="closeMenu">
            <i class="pi pi-user-plus navbar__button-icon"></i>
            <span class="navbar__button-text">Join Us</span>
          </router-link>
        </div>
      </div>

      <!-- Menu backdrop overlay for mobile -->
      <div class="navbar__backdrop" @click="closeMenu"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();
const isScrolled = ref(false);
const isMenuOpen = ref(false);

// Navigation items
const navItems = [
  { 
    label: 'Home', 
    icon: 'pi pi-home',
    to: '/' 
  },
  { 
    label: 'About', 
    icon: 'pi pi-info-circle',
    to: '/about'
  },
  {
    label: 'Team', 
    icon: 'pi pi-users',
    to: '/team'
  },
  {
    label: 'Sponsor', 
    icon: 'pi pi-briefcase',
    to: '/sponsor'
  },
  { 
    label: 'Contact', 
    icon: 'pi pi-envelope',
    to: '/contact'
  }
];

// Check if route is active
const isActive = (path: string) => {
  return route.path === path;
};

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

// Close mobile menu 
const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};

// Handle window scroll for navbar styling
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// Listen for window resize to close menu on larger screens
const handleResize = () => {
  if (window.innerWidth >= 1024 && isMenuOpen.value) {
    closeMenu();
  }
};

// Setup and cleanup event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  document.body.style.overflow = ''; // Ensure body scroll is restored
});
</script>

<style>
/* 
  Mobile-first navbar using BEM naming convention
  Variables are defined inline for component encapsulation
*/

/* Base navbar */
.navbar {
  --navbar-height: 4rem;
  --navbar-height-scrolled: 3.5rem;
  --navbar-bg: #ffffff;
  --navbar-border: #F2A900;
  --navbar-shadow: rgba(0, 0, 0, 0.08);
  --navbar-shadow-scrolled: rgba(0, 0, 0, 0.15);
  --text-primary: #4A3114;
  --text-secondary: #385E9D;
  --text-active: #385E9D;
  --accent-color: #F2A900;
  --transition-speed: 0.3s;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--navbar-bg);
  box-shadow: 0 2px 8px var(--navbar-shadow);
  border-bottom: 3px solid var(--navbar-border);
  z-index: 1000;
  transition: height var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
  will-change: height, box-shadow;
}

/* When scrolled down */
.navbar--scrolled {
  --navbar-shadow: var(--navbar-shadow-scrolled);
  height: var(--navbar-height-scrolled);
}

/* Main container */
.navbar__container {
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* Brand/logo section */
.navbar__brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  z-index: 20;
  padding: 0.25rem 0;
}

.navbar__brand:hover {
  opacity: 0.9;
}

.navbar__brand:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 4px;
}

.navbar__logo {
  height: calc(var(--navbar-height) * 0.6);
  width: auto;
  margin-right: 0.75rem;
  transition: height var(--transition-speed) ease;
  will-change: height;
}

.navbar--scrolled .navbar__logo {
  height: calc(var(--navbar-height-scrolled) * 0.6);
}

.navbar__titles {
  display: flex;
  flex-direction: column;
}

.navbar__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.1;
}

.navbar__subtitle {
  display: none; /* Hidden on mobile */
  font-size: 0.7rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

/* Mobile toggle button */
.navbar__toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;
  transition: transform 0.2s ease;
}

.navbar__toggle:hover {
  transform: scale(1.05);
}

.navbar__toggle:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 4px;
}

.navbar__toggle-bar {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--transition-speed) ease,
              opacity var(--transition-speed) ease;
  will-change: transform, opacity;
}

/* Animation for toggle button */
.navbar--open .navbar__toggle-bar:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.navbar--open .navbar__toggle-bar:nth-child(2) {
  opacity: 0;
}

.navbar--open .navbar__toggle-bar:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

/* Navigation content area */
.navbar__content {
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  width: 100%;
  height: calc(100vh - var(--navbar-height));
  background-color: var(--navbar-bg);
  transform: translateX(100%);
  transition: transform var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  will-change: transform;
  visibility: hidden;
}

.navbar__content--visible {
  visibility: visible;
}

.navbar--open .navbar__content {
  transform: translateX(0);
}

.navbar--scrolled .navbar__content {
  top: var(--navbar-height-scrolled);
  height: calc(100vh - var(--navbar-height-scrolled));
}

/* Backdrop overlay */
.navbar__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-speed) ease,
              visibility 0s linear var(--transition-speed);
  will-change: opacity;
  backdrop-filter: blur(2px);
}

.navbar--open .navbar__backdrop {
  opacity: 1;
  visibility: visible;
  transition: opacity var(--transition-speed) ease,
              visibility 0s linear 0s;
}

/* Navigation styling */
.navbar__nav {
  padding: 1.5rem 1rem 1rem;
}

.navbar__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.navbar__nav-item {
  width: 100%;
  overflow: hidden;
}

.navbar__nav-link {
  display: flex;
  align-items: center;
  padding: 0.875rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease,
              color 0.2s ease;
  position: relative;
  overflow: hidden;
}

.navbar__nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 4px;
  height: 0;
  background-color: var(--accent-color);
  transition: height 0.2s ease;
}

.navbar__nav-link:hover,
.navbar__nav-link:focus-visible {
  background-color: rgba(74, 49, 20, 0.08);
  color: var(--text-active);
}

.navbar__nav-link:hover::before {
  height: 100%;
}

.navbar__nav-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: -2px;
}

.navbar__nav-link--active {
  color: var(--text-active);
  font-weight: 600;
  background-color: rgba(56, 94, 157, 0.08);
}

.navbar__nav-link--active::before {
  height: 100%;
}

.navbar__nav-icon {
  margin-right: 0.75rem;
  font-size: 1.125rem;
  color: currentColor;
  flex-shrink: 0;
}

.navbar__nav-text {
  line-height: 1.4;
}

/* Action buttons - improved styling */
.navbar__actions {
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: auto; /* Push to bottom on mobile */
}

.navbar__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px; /* Prevent excessive width on mobile */
  padding: 0.75rem 1.25rem; /* More consistent padding */
  background-color: var(--text-secondary);
  color: white;
  border: none;
  border-radius: 0.5rem; /* Less extreme border-radius */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease,
              transform 0.2s ease,
              box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle initial shadow */
  height: 2.75rem; /* Consistent height */
}

.navbar__button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg, 
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: left 0.6s ease;
}

.navbar__button:hover,
.navbar__button:focus-visible {
  background-color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.navbar__button:hover::before {
  left: 100%;
}

.navbar__button:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

.navbar__button:active {
  transform: translateY(0);
}

.navbar__button-icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.navbar__button-text {
  font-size: 0.95rem; /* Consistent font size */
  white-space: nowrap; /* Prevent text wrapping */
}

/* Desktop adjustments for button */
@media (min-width: 1024px) {
  .navbar__actions {
    padding: 0 0 0 1rem;
    border-top: none;
    margin-top: 0;
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  
  .navbar__button {
    width: auto;
    padding: 0.5rem 1.25rem;
    border-radius: 2rem; /* Return to pill shape on desktop */
    height: 2.5rem; /* Slightly smaller height on desktop */
    min-width: 120px; /* Ensure minimum width */
  }
}

/* Tablet adjustments */
@media (min-width: 640px) {
  .navbar__container {
    padding: 0 1.5rem;
  }
  
  .navbar__subtitle {
    display: block;
  }
  
  .navbar__title {
    font-size: 1.5rem;
  }
  
  .navbar__content {
    width: 60%;
    max-width: 360px;
    border-left: 1px solid rgba(0, 0, 0, 0.06);
  }
  
  .navbar__nav-link::before {
    width: 5px;
  }
}

/* Desktop layout */
@media (min-width: 1024px) {
  .navbar__container {
    padding: 0 2rem;
  }
  
  .navbar__toggle {
    display: none;
  }
  
  .navbar__content {
    position: static;
    height: 100%;
    width: auto;
    transform: none !important;
    flex-direction: row;
    align-items: center;
    overflow: visible;
    border: none;
    background-color: transparent;
    box-shadow: none;
    visibility: visible;
  }
  
  .navbar__nav {
    padding: 0;
    margin-left: 2rem;
  }
  
  .navbar__nav-list {
    flex-direction: row;
    gap: 0.35rem;
  }
  
  .navbar__nav-item {
    width: auto;
  }
  
  .navbar__nav-link {
    padding: 0.5rem 1rem;
    position: relative;
  }
  
  .navbar__nav-link::before {
    content: '';
    position: absolute;
    left: 1rem;
    right: 1rem;
    bottom: 0.3rem;
    width: auto;
    height: 0;
    background-color: var(--accent-color);
    transition: height 0.2s ease;
  }
  
  .navbar__nav-link--active::before {
    height: 2px;
  }
  
  .navbar__nav-link:hover::before {
    height: 2px;
  }
  
  .navbar__actions {
    padding: 0 0 0 1rem;
    border-top: none;
    margin-top: 0;
    margin-left: auto;
  }
  
  .navbar__button {
    width: auto;
    padding: 0.5rem 1.25rem;
  }
  
  .navbar__backdrop {
    display: none;
  }
}

/* Large screens */
@media (min-width: 1280px) {
  .navbar__nav {
    margin-left: 3rem;
  }
  
  .navbar__nav-link {
    padding: 0.5rem 1.25rem;
  }
  
  .navbar__nav-icon {
    font-size: 1rem;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .navbar,
  .navbar__logo,
  .navbar__toggle-bar,
  .navbar__content,
  .navbar__backdrop,
  .navbar__nav-link,
  .navbar__button,
  .navbar__button::before {
    transition: none !important;
    animation: none !important;
  }
}

/* Add these fixes to your existing styles */

/* Fix for medium laptop screens - adjust padding and spacing */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Reduced container padding */
  .navbar__container {
    padding: 0 1rem;
  }
  
  /* Smaller logo */
  .navbar__logo {
    height: calc(var(--navbar-height) * 0.5);
  }
  
  /* Narrower navigation */
  .navbar__nav {
    margin-left: 1rem;
  }
  
  /* Tighter navigation spacing */
  .navbar__nav-list {
    gap: 0.15rem;
  }
  
  /* More compact navigation items */
  .navbar__nav-link {
    padding: 0.5rem 0.65rem;
    font-size: 0.9rem;
  }
  
  .navbar__nav-icon {
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
  
  /* Smaller button */
  .navbar__button {
    min-width: auto;
    padding: 0.5rem 0.75rem;
  }
  
  /* Hide subtitle on medium screens that are too narrow */
  @media (max-width: 900px) {
    .navbar__subtitle {
      display: none;
    }
    
    .navbar__title {
      font-size: 1.3rem;
    }
  }
}

/* Make navigation wrap if needed */
@media (min-width: 1024px) and (max-width: 1200px) {
  .navbar__nav-list {
    flex-wrap: wrap;
  }
  
  .navbar__nav-link {
    padding: 0.5rem 0.75rem;
  }
}

/* Ensure nav container doesn't overflow */
@media (min-width: 1024px) {
  .navbar__content {
    max-width: calc(100% - 200px); /* Reserve space for logo */
  }
  
  /* Add this to allow wrapping for tighter spaces */
  .navbar__nav-list {
    flex-wrap: wrap;
    row-gap: 0.5rem;
  }
}

/* Add a conditional vertical layout for very tight horizontal spaces */
@media (min-width: 1024px) and (max-width: 1150px) {
  /* Allow vertical stacking of nav and buttons when space is tight */
  .navbar__content {
    flex-wrap: wrap;
    justify-content: flex-end;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  
  .navbar__actions {
    margin-top: 0.35rem;
    width: 100%;
    justify-content: flex-end;
    padding-left: 0;
  }
}
</style>
