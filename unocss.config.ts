import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      prefix: 'ico-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    fontFamily: {
      head: ['Montserrat', 'sans-serif'],
      body: ['\'Atkinson Hyperlegible\'', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#ecfdf6',
        100: '#d2f9e8',
        200: '#a9f1d6',
        300: '#70e5c1',
        400: '#37d0a5',
        500: '#13b68e',
        600: '#09a884',
        700: '#06765f',
        800: '#085d4c',
        900: '#074d40',
      },
      gray: {
        50: 'rgb(248, 248, 248)',
        100: 'rgb(200, 200, 200)',
        200: 'rgb(176, 176, 176)',
        300: 'rgb(128, 128, 128)',
        400: 'rgb(96, 96, 96)',
        500: 'rgb(72, 72, 72)',
        600: 'rgb(48, 48, 48)',
        700: 'rgb(24, 24, 24)',
        800: 'rgb(16, 16, 16)',
        900: 'rgb(0, 0, 0)',
      },
    },
  },
})
