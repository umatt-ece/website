<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isOpen }">
    <div class="navbar__container">
      <!-- Logo and team name -->
      <div class="navbar__brand">
        <router-link to="/" class="navbar__brand-link">
          <img src="@/assets/images/logo.png" alt="UMATT Logo" class="navbar__logo" />
          <div class="navbar__title">
            <span class="navbar__name">UMATT</span>
            <span class="navbar__full-name"
              >University of Manitoba Association of Tiny Tractors</span
            >
          </div>
        </router-link>
      </div>

      <!-- Mobile toggle button -->
      <button class="navbar__toggle" @click="toggleMenu" aria-label="Toggle navigation menu">
        <span class="navbar__toggle-icon"></span>
      </button>

      <!-- Navigation links -->
      <div class="navbar__menu">
        <ul class="navbar__list">
          <li class="navbar__item" v-for="item in navItems" :key="item.label">
            <router-link :to="item.path" class="navbar__link" @click="closeMenu">
              <i :class="item.icon" class="navbar__icon"></i>
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>

        <!-- CTA Buttons - Mobile (inside menu) -->
        <div class="navbar__cta navbar__cta--mobile">
          <router-link to="/join" class="navbar__cta-btn navbar__cta-btn--join" @click="closeMenu">
            <i class="pi pi-user-plus"></i>
            <span>Join Us</span>
          </router-link>
          <router-link
            to="/sponsor"
            class="navbar__cta-btn navbar__cta-btn--sponsor"
            @click="closeMenu"
          >
            <i class="pi pi-heart"></i>
            <span>Sponsor</span>
          </router-link>
        </div>
      </div>

      <!-- CTA Buttons - Desktop -->
      <div class="navbar__cta navbar__cta--desktop">
        <router-link to="/join" class="navbar__cta-btn navbar__cta-btn--join">
          <i class="pi pi-user-plus"></i>
          <span>Join Us</span>
        </router-link>
        <router-link to="/sponsor" class="navbar__cta-btn navbar__cta-btn--sponsor">
          <i class="pi pi-heart"></i>
          <span>Sponsor</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOpen = ref(false)
const onTopHome = ref(false)

const navItems = [
  { label: 'Home', icon: 'pi pi-home', path: '/' },
  { label: 'About', icon: 'pi pi-info', path: '/about' },
  { label: 'Team', icon: 'pi pi-users', path: '/team' },
  { label: 'Contact', icon: 'pi pi-envelope', path: '#footer' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // Prevent scrolling when menu is open
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const onTopHomeView = () => {
  const onHome = router.currentRoute.value.path === '/home'
  const onTop = window.scrollY === 0

  if (onHome && onTop) {
    isScrolled.value = false
  } else {
    isScrolled.value = true
  }

  onTopHome.value = onTop && onHome
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
  onTopHomeView() // Initial check for onTopHome
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Restore scrolling
})
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
  border-bottom: 3px solid var(--color-gold, #f2a900);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1rem, 5vw, 2.5rem);
  max-width: 1440px;
  margin: 0 auto;
  height: var(--navbar-height);
}

.navbar__brand {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.navbar__brand-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
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
  color: var(--color-brown, #4f2c1d);
  line-height: 1.1;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.02em;
}

.navbar__full-name {
  display: none;
  font-size: 0.75rem;
  color: var(--color-gray-600, #4b5563);
  transition: color 0.3s ease;
}

.navbar__brand:hover .navbar__full-name {
  color: var(--color-blue-medium, #385e9d);
}

.navbar__toggle {
  display: none;
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
  background-color: var(--color-brown, #4f2c1d);
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
  gap: 0.5rem;
}

.navbar__link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: var(--color-brown, #4f2c1d);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
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
  background-color: var(--color-gold, #f2a900);
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
  color: var(--color-brown, #4f2c1d);
  background-color: rgba(242, 169, 0, 0.15);
  transform: translateY(-2px);
  outline: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
}

.navbar__icon {
  margin-right: 0.4rem;
  transition: transform 0.3s ease;
  color: var(--color-gold, #f2a900);
  font-size: 0.9rem;
}

.navbar__link:hover .navbar__icon {
  transform: translateY(-2px);
}

/* ============================================
   CTA BUTTONS
   ============================================ */
.navbar__cta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.navbar__cta--mobile {
  display: none;
}

.navbar__cta--desktop {
  display: flex;
}

.navbar__cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.navbar__cta-btn i {
  font-size: 0.85rem;
}

.navbar__cta-btn--join {
  background: var(--color-blue-medium, #385e9d);
  color: white;
  box-shadow: 0 4px 12px rgba(56, 94, 157, 0.3);
}

.navbar__cta-btn--join:hover {
  background: #2d4d82;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(56, 94, 157, 0.4);
}

.navbar__cta-btn--sponsor {
  background: var(--color-gold, #f2a900);
  color: var(--color-brown, #4f2c1d);
  box-shadow: 0 4px 12px rgba(242, 169, 0, 0.3);
}

.navbar__cta-btn--sponsor:hover {
  background: #d99500;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(242, 169, 0, 0.4);
}

/* ============================================
   XL SCREENS (1280px+): Logo left, Nav center, CTAs right
   ============================================ */
@media (min-width: 1280px) {
  .navbar__container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .navbar__brand {
    justify-self: start;
  }

  .navbar__menu {
    justify-self: center;
  }

  .navbar__cta--desktop {
    justify-self: end;
  }

  .navbar__full-name {
    display: block;
  }

  .navbar {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* ============================================
   LG SCREENS (1024px-1279px): Logo left, Nav + CTAs right
   ============================================ */
@media (min-width: 1024px) and (max-width: 1279px) {
  .navbar__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar__brand {
    flex-shrink: 0;
  }

  .navbar__menu {
    margin-left: auto;
    margin-right: 1rem;
  }

  .navbar__cta--desktop {
    flex-shrink: 0;
  }

  .navbar__full-name {
    display: block;
  }
}

/* ============================================
   MD AND BELOW (<1024px): Mobile side panel
   ============================================ */
@media (max-width: 1023px) {
  .navbar__toggle {
    display: block;
  }

  .navbar__cta--desktop {
    display: none;
  }

  .navbar__menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    max-width: 400px;
    height: 100vh;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
    padding: calc(var(--navbar-height) + 2rem) 2rem 2rem;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
  }

  .navbar--open .navbar__menu {
    right: 0;
  }

  .navbar__list {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    width: 100%;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.4s ease 0.1s;
  }

  .navbar--open .navbar__list {
    opacity: 1;
    transform: translateX(0);
  }

  .navbar__item {
    width: 100%;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.4s ease;
  }

  .navbar--open .navbar__item:nth-child(1) {
    transition-delay: 0.1s;
    opacity: 1;
    transform: translateX(0);
  }
  .navbar--open .navbar__item:nth-child(2) {
    transition-delay: 0.15s;
    opacity: 1;
    transform: translateX(0);
  }
  .navbar--open .navbar__item:nth-child(3) {
    transition-delay: 0.2s;
    opacity: 1;
    transform: translateX(0);
  }
  .navbar--open .navbar__item:nth-child(4) {
    transition-delay: 0.25s;
    opacity: 1;
    transform: translateX(0);
  }

  .navbar__link {
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1.05rem;
    border-radius: 12px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .navbar__link::after {
    display: none;
  }

  .navbar__link:hover,
  .navbar__link:focus {
    background: var(--color-gold, #f2a900);
    color: var(--color-brown, #4f2c1d);
    transform: translateX(4px);
  }

  .navbar__link:hover .navbar__icon {
    color: var(--color-brown, #4f2c1d);
    transform: translateX(0);
  }

  /* Mobile CTA Buttons at bottom */
  .navbar__cta--mobile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    margin-top: auto;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease 0.3s;
  }

  .navbar--open .navbar__cta--mobile {
    opacity: 1;
    transform: translateY(0);
    width: 100%;
  }

  .navbar__cta--mobile .navbar__cta-btn {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem;
    font-size: 1.05rem;
    border-radius: 12px;
  }

  .navbar__cta--mobile .navbar__cta-btn--join {
    box-shadow: 0 6px 20px rgba(56, 94, 157, 0.35);
  }

  .navbar__cta--mobile .navbar__cta-btn--sponsor {
    box-shadow: 0 6px 20px rgba(242, 169, 0, 0.35);
  }

  .navbar__container {
    padding: 0 1rem;
    /* height: var(--navbar-height-mobile); */
  }

  .navbar--scrolled {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

/* ============================================
   SMALL SCREENS
   ============================================ */
@media (max-width: 500px) {
  .navbar__logo {
    height: 2.8rem;
  }

  .navbar__name {
    font-size: 1.2rem;
  }

  .navbar__container {
    height: var(--navbar-height-small);
  }

  .navbar__menu {
    max-width: 100%;
    padding: calc(var(--navbar-height-small) + 1.5rem) 1.5rem 1.5rem;
  }
}

@media (max-width: 350px) {
  .navbar__name {
    font-size: 1.1rem;
  }

  .navbar__logo {
    height: 2.5rem;
  }

  .navbar__container {
    padding: 0 0.75rem;
    height: var(--navbar-height-xs);
  }
}

/* ============================================
   ACCESSIBILITY
   ============================================ */
.navbar__link:focus-visible,
.navbar__cta-btn:focus-visible {
  outline: 2px solid var(--color-gold, #f2a900);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(242, 169, 0, 0.3);
}

/* Hover effects for desktop */
@media (min-width: 1024px) {
  .navbar:hover {
    transform: translateY(1px);
  }

  .navbar--scrolled:hover {
    border-bottom-color: var(--color-blue-medium, #385e9d);
  }
}
</style>
