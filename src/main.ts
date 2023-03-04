import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { router } from './router'
import { i18n } from './i18n'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/styles/common.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/atkinson-hyperlegible'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(createPinia())
app.use(createHead())

app.mount('#app')
