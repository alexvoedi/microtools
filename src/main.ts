import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import VueTippy from 'vue-tippy'
import { router } from './router'
import { i18n } from './i18n'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/common.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/atkinson-hyperlegible'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

const app = createApp(App)
const head = createHead()
const pinia = createPinia()

app.use(router)
app.use(i18n)
app.use(pinia)
app.use(head)
app.use(VueTippy, {
  defaultProps: {
    animation: 'scale',
  },
})

app.mount('#app')
