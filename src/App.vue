<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { routes } from '@/router'
import { generic } from '@/assets/strings'
import Menubar from 'primevue/menubar'
import Card from 'primevue/card'
import Tag from 'primevue/tag'


/* =================================================================================================
 * App.vue
 * =================================================================================================
 * This is the entry point to our Single Page Application (SPA) that gets rendered by VueJs.
 * Components declared here (i.e. HTML within the <template> tag) will always be visible in
 * the 'app' (ex. the menu bar and footer). The <RouterView> is a special element that renders
 * a particular 'view' based on the current URL path (ex. http://website/displayed-view). The
 * mappings between URLs/views is located in `/src/router/index.ts`.
 */

</script>

<template>
  <header>
    <nav>
      <Menubar :model="routes">
        <template #item="{ item }">
          <RouterLink :to="item.path" class="router-link">{{ item.name }}</RouterLink>
        </template>
        <template #end>
          <template v-for="social in generic.socials" :key="social.url">
            <a :href="social.url" target="_blank">
              <i :class="social.icon" class="social-icon"></i>
            </a>
          </template>
        </template>
      </Menubar>
    </nav>
  </header>
  <RouterView class="router-view"/> <!-- renders 'views' based on current path url/path -->
  <footer>
    <div style="margin-top: 0.5em">
      <Card>
        <template #content>
          <p>
            {{ generic.credits.content }}
          </p>
          <template v-for="contributor in generic.credits.contributors" :key="contributor.link">
            <a :href="contributor.link" target="_blank">
              <Tag severity="secondary" class="credit-tag" :value="contributor.name" />
            </a>
          </template>
        </template>
      </Card>
    </div>
  </footer>
</template>

<style scoped>
header {
  margin-bottom: 6px;
}

nav, .social-icon {
  line-height: 2;
  font-size: 1.5rem;
  text-align: center;
}

nav a {
  display: inline-block;
  color: var(--color-text);
}

.router-link {
  padding: 0 1rem;
}

.social-icon {
  margin: auto 0.5rem;
}

.credit-tag {
  margin: 0 0.2rem;
}
</style>
