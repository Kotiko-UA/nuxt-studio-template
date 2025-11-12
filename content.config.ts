import { defineContentConfig, defineCollection } from '@nuxt/content'
import { homeSchema } from '~/content/schemas'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'data',
      source: 'home.json',
      schema: homeSchema,
    }),
  },
})
