<script setup lang="ts"></script>

<template>
  <div class="h-full grid grid-cols-[auto_1fr] max-w-1200px mx-auto">
    <app-sidebar></app-sidebar>

    <main class="px-12 py-12">
      <router-view></router-view>
    </main>
  </div>
</template>

<style></style>
