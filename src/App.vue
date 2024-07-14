<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menubar from 'primevue/menubar'
import { routes } from '@/router'
import { generic } from '@/assets/strings'

</script>

<template>
  <header class="menu-bar">
    <nav>
      <Menubar :model="routes">
        <template #item="{ item }">
          <RouterLink :to="item.path" class="menu-item">{{ item.name }}</RouterLink>
        </template>
        <template #end>
          <template v-for="social in generic.socials">
            <a :href="social.url" target="_blank">
              <i :class="social.icon" class="social-item"></i>
            </a>
          </template>
<!--          <a :href="generic.socials.instagram.link" target="_blank">-->
<!--            <i :class="generic.socials.instagram.icon" class="social-item"></i>-->
<!--          </a>-->
<!--          <a :href="generic.socials.facebook.link" target="_blank">-->
<!--            <i :class="generic.socials.facebook.icon" class="social-item"></i>-->
<!--          </a>-->
<!--          <a :href="generic.socials.linkedin.link" target="_blank">-->
<!--            <i :class="generic.socials.linkedin.icon" class="social-item"></i>-->
<!--          </a>-->
        </template>
      </Menubar>
    </nav>
  </header>
  <RouterView />

<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
</template>

<style scoped>
header {
  margin-bottom: 6px;
}


nav, .social-item {
  line-height: 2;
  font-size: 1.5rem;
  text-align: center;
}

nav a {
  display: inline-block;
  color: var(--color-text);
}

.menu-item {
  padding: 0 1rem;
}

.social-item {
  margin: auto 0.5rem;
}

/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
*/
</style>
