<script setup lang="ts">
defineProps<{
  text: string;
  to: string;
}>();
</script>

<template>
  <router-link
    :to="{ name: to }"
    class="text-true-gray-400 font-semibold text-sm"
  >
    <button>
      {{ text }}
    </button>
  </router-link>
</template>

<style lang="postcss">
.router-link-exact-active {
  @apply text-true-gray-100;
}
</style>
