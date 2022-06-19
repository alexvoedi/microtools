<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold tracking-tighter">{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<style></style>
