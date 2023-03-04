<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
}>()
</script>

<template>
  <router-link :to="to" class="transition" hover="text-primary-500">
    <slot />
  </router-link>
</template>

<style lang="postcss">
.router-link-active {
  @apply text-primary-500
}
</style>
