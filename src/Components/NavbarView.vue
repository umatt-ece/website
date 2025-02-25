<template>
    <Menubar :model="items" >
      <template #start>
        <!-- Logo and club name on the extreme left -->
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        <span class="club-name">UMATT</span>
      </template>
      <template #item="slotProps">
        <!-- Custom menu item using design tokens -->
        <a
          href="#"
          class="menu-item flex items-center"
        >
          <i :class="slotProps.item.icon" class="mr-2"></i>
          <span>{{ slotProps.item.label }}</span>
        </a>
      </template>
    </Menubar>
  </template>
  
<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";


const items = ref([
  { label: 'Home', icon: 'pi pi-home' },
  { label: 'About', icon: 'pi pi-info' },
  { label: 'Team', icon: 'pi pi-users' },
  { label: 'Join Us', icon: 'pi pi-user-plus' },
  { label: 'Sponsor', icon: 'pi pi-dollar' },
  { label: 'Contact', icon: 'pi pi-envelope' },
]);

</script>
  
  <style scoped>
  
  /* Navbar Container */
  .p-menubar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 4rem;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-white);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid var(--umatt-c-gold);
    padding: 0 1rem;
  }
  
  /* Logo Styling */
  .logo {
    height: 3rem;
    margin-right: 0.5rem;
  }
  
  /* Club Name Styling */
  .club-name {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--umatt-c-brown);
  }
  
  /* Menu Item Styling */
  .menu-item {
    padding: 0.5rem 1rem;
    transition: background-color 300ms, color 300ms;
    color: var(--umatt-c-brown);
    border-radius: 0.375rem; /* Fixed border-radius in normal state */
  }
  
  .menu-item:hover {
    background-color: var(--umatt-c-brown);
    color: var(--background-white);
    border-radius: 0.375rem; /* Same fixed border-radius on hover */
  }
  
  </style>
  