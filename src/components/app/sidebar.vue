<script setup lang="ts">
const items = [
  {
    text: "Random number",
    to: "random-number",
  },
];
</script>

<template>
  <nav class="w-240px border-r border-r-true-gray-600 px-8 py-12">
    <app-sidebar-nav-item
      v-for="(item, index) in items"
      :key="index"
      :text="item.text"
      :to="item.to"
    ></app-sidebar-nav-item>
  </nav>
</template>

<style></style>
