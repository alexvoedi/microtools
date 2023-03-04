<script setup lang="ts">
defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <button class="px-3 py-2 bg-gray-600 rounded transition" hover="bg-gray-500" @click="$emit('click')">
    <slot />
  </button>
</template>

<style>

</style>
