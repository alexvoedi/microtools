<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  placeholder?: string
  autofocus?: boolean
  clearable?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)

const clear = () => {
  modelValue.value = ''
}
</script>

<template>
  <div class="input">
    <span class="text-xl">
      <slot name="icon" />
    </span>
    <input v-model="modelValue" type="text" :placeholder="placeholder" :autofocus="autofocus">
    <button v-if="clearable" aria-label="clear input" @click="clear()">
      <span class="ico-mdi-close text-xl" />
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.input {
  @apply bg-gray-600 px-3 py-2 rounded grid grid-cols-[auto_1fr_auto] items-center gap-2;
}

.input:focus-within {
  @apply outline-none ring-2 ring-2 ring-primary-700;
}

input[type="text"] {
  @apply bg-gray-600 text-white;
}

input[type="text"]:focus {
  @apply outline-none;
}
</style>
