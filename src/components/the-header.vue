<script setup lang="ts">

</script>

<template>
  <div class="border-b border-gray-600">
    <header class="container mx-auto px-4 h-20 flex items-center justify-between ">
      <header-brand />

      <div>
        <router-link :to="{ name: 'home' }" class="transition flex items-center justify-center" hover="text-primary-500">
          <span class="ico-mdi-home text-xl" />
        </router-link>
      </div>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-primary-500
}
</style>
