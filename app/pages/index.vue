<script setup lang="ts">
type HomeData = {
  title: string
  count: number
  image: string
  image_second: string
  list: { image: string; text: string; value: number }[]
}

const { data: home } = await useAsyncData<HomeData | null>(
  'home-data',
  async () => {
    const entry = await queryCollection('home').first() // <-- однаковий запит для SSR/CSR
    return (entry?.meta?.body ?? null) as HomeData | null // <-- беремо ТІЛЬКИ meta.body
  },
  {
    server: true, // рендеримо на сервері
    lazy: false, // не відкладати
    default: () => null,
  }
)
</script>

<template>
  <section v-if="home">
    <h1>{{ home.title }}</h1>
    <p>Count: {{ home.count }}</p>
    <img :src="home.image" alt="" />
    <div v-for="(item, i) in home.list" :key="`${item.text}-${i + 1}`">
      <div>{{ item.text }}</div>
      <div>{{ item.value }}</div>
    </div>
  </section>
  <p v-else>Home not found</p>
</template>
