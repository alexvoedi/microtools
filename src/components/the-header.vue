<script setup lang="ts">

</script>

<template>
  <div class="border-b border-gray-600">
    <header class="container mx-auto px-4 h-20 flex items-center justify-between ">
      <header-brand />

      <div>
        <router-link :to="{ name: 'home' }" class="text-xl">
          <span class="ico-mdi-home" />
        </router-link>
      </div>
    </header>
  </div>
</template>

<style>

</style>
