import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

import defaults from './vuetify/defaults'
import { icons } from './vuetify/icons'
import theme from './vuetify/theme'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      ...labs,
      ...components,
    },
    directives,
    display: {
      mobileBreakpoint: 'sm',
    },
    ssr: true,
    defaults,
    icons,
    theme,
  })

  app.vueApp.use(vuetify)
})
