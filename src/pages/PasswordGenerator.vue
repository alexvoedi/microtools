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
      <label>
        <input v-model="symbols" type="checkbox" value="lowercase">
        <span>Lowercase</span>
      </label>

      <label>
        <input v-model="symbols" type="checkbox" value="uppercase">
        <span>Uppercase</span>
      </label>

      <label>
        <input v-model="symbols" type="checkbox" value="numbers">
        <span>Numbers</span>
      </label>

      <label>
        <input v-model="symbols" type="checkbox" value="symbols">
        <span>Symbols</span>
      </label>
    </div>

    <div>
      <button class="btn btn-primary" @click="generatePassword">
        Generate Password
      </button>
    </div>

    <base-textarea :model-value="password" readonly class="w-full font-mono" :rows="5" />
  </div>
</template>

<style>

</style>
