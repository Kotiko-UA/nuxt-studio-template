<script setup lang="ts">
type HomeData = {
  title: string
  count: number
  image: string
  image_second: string
  list: { image: string; text: string; value: number }[]
}

const { data: home } = await useAsyncData<HomeData | null>('home', async () => {
  const entry = await queryCollection('home').first()
  // У type: 'data' фактичні поля лежать у meta.body (вже з правильними типами)
  return (entry?.meta?.body ?? null) as HomeData | null
})
</script>

<template>
  <section v-if="home">
    <h1>{{ home.title }}</h1>
    <p>Count: {{ home.count }}</p>
    <img :src="home.image" alt="" />
    <div v-for="item in home.list">
      <div>{{ item.text }}</div>
      <div>{{ item.value }}</div>
    </div>
  </section>
  <p v-else>Home not found</p>
</template>
