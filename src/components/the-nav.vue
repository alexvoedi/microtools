<script setup lang="ts">
const links = shallowRef([
  {
    to: { name: 'password-generator' },
    text: 'Password Generator',
  },
])
</script>

<template>
  <nav class="flex flex-col gap-2">
    <nav-link v-for="(link, index) of links" :key="index" :to="link.to">
      {{ link.text }}
    </nav-link>
  </nav>
</template>

<style lang="postcss">
</style>
