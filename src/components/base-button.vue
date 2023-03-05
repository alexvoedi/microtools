<script setup lang="ts">
defineProps<{
  ariaLabel?: string
}>()

defineEmits<{
  (event: 'click'): void
}>()
</script>

<template>
  <button class="px-3 py-2 bg-gray-600 rounded transition" hover="bg-gray-500" :aria-label="ariaLabel" @click="$emit('click')">
    <slot />
  </button>
</template>

<style>

</style>
