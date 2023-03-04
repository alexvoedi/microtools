<script setup lang="ts">
useHead({
  title: 'microtools',
  meta: [
    { name: 'description', content: 'A collection of little helpers' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'og:title', content: 'microtools' },
    { name: 'og:description', content: 'A collection of micro tools' },
    { name: 'og:image', content: '' },
    { name: 'og:url', content: 'https://alexvoedi.dev/microtools/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@alexvoedi' },
    { name: 'twitter:creator', content: '@alexvoedi' },
    { name: 'twitter:title', content: 'microtools' },
    { name: 'twitter:description', content: 'A collection of little helpers' },
    { name: 'twitter:image', content: '' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/microtools/favicon.svg' },
  ],
})
</script>

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
