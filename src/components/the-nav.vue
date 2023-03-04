<script setup lang="ts">
import Fuse from 'fuse.js'

const links = shallowRef([
  {
    to: { name: 'password-generator' },
    text: 'Password Generator',
    description: 'Generate a random password',
  },
])

const searchTerm = ref('')

const filteredLinks = computed(() => {
  const fuse = new Fuse(links.value, {
    keys: ['text', 'description'],
    shouldSort: true,
    threshold: 0.5,
  })

  if (searchTerm.value) {
    const results = fuse.search(searchTerm.value)

    return results.map(result => result.item)
  }
  else { return links.value }
})
</script>

<template>
  <nav class="flex flex-col gap-2 space-y-4">
    <base-input v-model="searchTerm" placeholder="Search" clearable autofocus>
      <template #icon>
        <span class="ico-mdi-magnify" />
      </template>
    </base-input>

    <nav-link v-for="(link, index) of filteredLinks" :key="index" :to="link.to">
      {{ link.text }}
    </nav-link>
  </nav>
</template>

<style lang="postcss">
</style>
