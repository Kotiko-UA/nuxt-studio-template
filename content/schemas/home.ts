import { z } from 'zod/v4'

export const pagesSchema = z.object({
  title: z.string().default('Home'),
  count: z.number().int().nonnegative().default(0),
  image: z.string().url().or(z.string()),
  image_second: z.string().url().or(z.string()).default('images/red_cat_2.jpg'),
  list: z
    .array(
      z.object({
        image: z.string().url().or(z.string()),
        text: z.string(),
        value: z.number(),
      })
    )
    .default([]),
})
