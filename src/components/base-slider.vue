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
  <input v-model.number="modelValue" type="range" :step="step" :min="min" :max="max">
</template>

<style lang="postcss" scoped>
input[type="range"] {
  @apply transition;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  opacity: 80%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  @apply bg-gray-600;
  border-radius: 4px;
  height: 8px;
}

input[type="range"]:hover {
  opacity: 100%;
}

input[type="range"]::-webkit-slider-thumb {
  @apply bg-primary-600;
  -webkit-appearance: none;
  appearance: none;
  margin-top: -12px;
  height: 32px;
  width: 16px;
  border-radius: 8px;
}

input[type="range"]::-webkit-slider-thumb:hover {
  @apply bg-primary-500;
}

input[type="range"]:focus::-webkit-slider-thumb {
  @apply outline-1 outline-primary-600;
  outline-offset: 2px;
}

input[type="range"]::-moz-range-track {
  @apply bg-gray-600;
  border-radius: 4px;
  height: 8px;
}

input[type="range"]::-moz-range-thumb {
  @apply bg-primary-600;
  border: none;
  border-radius: 8px;
  height: 32px;
  width: 16px;
}

input[type="range"]:focus::-moz-range-thumb {
  @apply outline-1 outline-primary-600;
  outline-offset: 2px;
}
</style>
