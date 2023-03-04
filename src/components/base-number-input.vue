<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: number
  step?: number
  min?: number
  max?: number
}>(), {
  step: 1,
  min: 1,
  max: 256,
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)
</script>

<template>
  <input v-model="modelValue" type="number" :min="1" :max="256" :step="1">
</template>

<style lang="postcss" scoped>
input[type="number"] {
  @apply bg-gray-600 text-white px-3 py-1 rounded text-lg;
}

input[type="number"]:focus {
  @apply outline-none ring-2 ring-2 ring-primary-700;
}
</style>
