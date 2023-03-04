<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)
</script>

<template>
  <textarea v-model="modelValue" />
</template>

<style lang="postcss" scoped>
textarea {
  @apply bg-gray-600 text-white px-3 py-1 rounded text-lg resize-none word-break-all;
}

textarea:focus {
  @apply outline-none;
}

textarea:focus:not(:read-only) {
  @apply ring-2 ring-2 ring-primary-700;
}
</style>
