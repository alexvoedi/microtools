<script setup lang="ts">

</script>

<template>
  <div class="border-b border-gray-600">
    <header class="container mx-auto px-4 h-20 flex items-center justify-between ">
      <header-brand />

      <div class="flex gap-6 text-2xl">
        <router-link :to="{ name: 'home' }" class="transition flex items-center justify-center" hover="text-primary-600">
          <span class="ico-mdi-home" />
        </router-link>

        <a href="https://github.com/alexvoedi/microtools" class="transition flex items-center justify-center" hover="text-primary-600">
          <span class="ico-mdi-github" />
        </a>
      </div>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-primary-600
}
</style>
