import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Окрема "data"-колекція для сторінки Home
    home: defineCollection({
      type: 'data',
      // можна зберігати один файл: content/home.json
      source: 'home.json',
      schema: z.object({
        // приклад текстового поля
        title: z.string().default('Home'),

        // приклад цифрового поля
        count: z.number().int().nonnegative().default(0),

        // зображення (рядок-URL або шлях до /public)
        image: z.string().url().or(z.string()),
        image_second: z
          .string()
          .url()
          .or(z.string())
          .default('images/red_cat_2.jpg'),

        // список елементів: картинка, текстове поле, цифрове поле
        list: z
          .array(
            z.object({
              image: z.string().url().or(z.string()), // /public або повний URL
              text: z.string(),
              value: z.number(),
            })
          )
          .default([]),
      }),
    }),
  },
})
