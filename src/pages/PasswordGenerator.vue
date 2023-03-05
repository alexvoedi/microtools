<script setup lang="ts">
const length = ref<number>(32)

const AVAILABLE_CHARACTERS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
}

const symbols = ref<Array<keyof typeof AVAILABLE_CHARACTERS>>([
  'lowercase',
  'uppercase',
  'numbers',
])

const password = ref('')

const generatePassword = () => {
  const characters = symbols.value.map(symbol => AVAILABLE_CHARACTERS[symbol]).join('')

  password.value = Array.from(crypto.getRandomValues(new Uint32Array(length.value)))
    .map(x => characters[x % characters.length])
    .join('')
}

onMounted(() => {
  generatePassword()
})
</script>

<template>
  <h1 class="heading">
    Password Generator
  </h1>

  <div class="space-y-6">
    <label class="grid grid-cols-[auto_1fr_120px] gap-8 items-center justify-center">
      <span class="text-xl">Length</span>
      <base-slider v-model="length" :min="1" :max="256" :step="1" />
      <base-number-input v-model="length" :min="1" :max="256" :step="1" />
    </label>

    <div class="flex gap-8 items-center">
      <label class="flex items-center gap-2">
        <base-checkbox v-model="symbols" value="lowercase" />
        <span class="text-lg">Lowercase</span>
      </label>

      <label class="flex items-center gap-2">
        <base-checkbox v-model="symbols" value="uppercase" />
        <span class="text-lg">Uppercase</span>
      </label>

      <label class="flex items-center gap-2">
        <base-checkbox v-model="symbols" value="numbers" />
        <span class="text-lg">Numbers</span>
      </label>

      <label class="flex items-center gap-2">
        <base-checkbox v-model="symbols" value="symbols" />
        <span class="text-lg">Symbols</span>
      </label>
    </div>

    <div>
      <base-button aria-label="generate password" @click="generatePassword()">
        Generate Password
      </base-button>
    </div>

    <div>
      <base-textarea :model-value="password" readonly class="w-full font-mono cursor-pointer break-all" :rows="5" copyable />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
</style>
