<script setup lang="ts">
const props = defineProps<{
  modelValue: Array<unknown> | boolean
  value: boolean | object | string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: Array<unknown> | Boolean): void
}>()

const modelValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <input v-model="modelValue" type="checkbox" :value="value">
</template>

<style lang="postcss" scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;

  @apply rounded border-2 border-gray-400 flex items-center justify-center cursor-pointer;

  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
}

input[type="checkbox"]::before {
  @apply bg-primary-600 transition;
  content: "";
  width: 12px;
  height: 12px;
  transform: scale(0);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  @apply outline-0;
}

input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);

  color: var(--form-control-disabled);
  cursor: not-allowed;
}
</style>
