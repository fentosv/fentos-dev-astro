import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/static'
import image from '@astrojs/image'
import preact from '@astrojs/preact'
// https://astro.build/config

export default defineConfig({
  integrations: [
    preact(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  output: 'static',
  adapter: vercel(),
})
