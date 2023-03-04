<script setup lang="ts"></script>

<template>
  <the-header />

  <div class="container mx-auto px-4 py-8 grid grid-cols-[240px_1fr] gap-8">
    <the-nav />

    <main>
      <router-view />
    </main>
  </div>

  <the-footer />
</template>

<style lang="postcss">
body, html, #app {
  @apply text-white bg-gray-700 min-h-screen;
}

#app {
  @apply grid grid-rows-[auto_1fr_auto];
}
</style>
