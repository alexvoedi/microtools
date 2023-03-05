<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  rows?: number
  copyable?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits)

const copy = () => {
  navigator.clipboard.writeText(modelValue.value)
}
</script>

<template>
  <div class="relative wrapper">
    <textarea v-model="modelValue" :rows="rows" />
    <button v-if="copyable" v-tippy="{ content: 'Copied!', trigger: 'click', delay: [null, 1000] }" class="absolute top-2 right-3 opacity-0 transition" @click="copy()">
      <span class="ico-mdi-clipboard text-xl text-gray-300 transition" hover="text-white" />
    </button>
  </div>
</template>

<style lang="postcss" scoped>
textarea {
  @apply bg-gray-600 text-white px-4 py-2 rounded text-lg resize-none word-break-all w-full h-full;
}

textarea:focus {
  @apply outline-none;
}

textarea:focus:not(:read-only) {
  @apply ring-2 ring-2 ring-primary-700;
}

.wrapper:hover button {
  @apply opacity-100;
}
</style>
