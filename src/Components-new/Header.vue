<script setup>

</script>

<template>
  <header
    class="flex relative flex-col px-20 -mb-36 w-full bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mb-2.5 max-md:max-w-full"
  >
    <nav
      class="flex flex-col justify-center px-6 py-4 w-full  bg-opacity-0 max-md:px-5 max-md:max-w-full"
      aria-label="Main Navigation"
    >
      <div
        class="flex flex-wrap gap-5 justify-between w-full  bg-opacity-0 max-md:max-w-full"
      >
        <a
          href="/"
          class="flex flex-col items-center pb-5 w-12 h-12 text-xs text-center text-black whitespace-nowrap  bg-opacity-0"
          aria-label="UMATT Logo"
        >
          <div class="bg-zinc-100">IMG<br />48×48</div>
        </a>
        <ul
          class="flex flex-wrap gap-8 pt-0.5 pb-2.5 my-auto text-base leading-none text-black  bg-opacity-0 max-md:max-w-full"
        >
          <li><a href="#home" class="self-start">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#what-we-do">What We Do</a></li>
          <li><a href="#mission-vision" class="basis-auto">Mission & Vision</a></li>
          <li><a href="#achievements" class="basis-auto">Achievements</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
          <li><a href="#contact" class="self-start">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
