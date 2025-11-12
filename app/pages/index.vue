<script setup lang="ts">
type HomeData = {
  title: string
  count: number
  image: string
  image_second: string
  list: { image: string; text: string; value: number }[]
}

const entry = (await queryCollection('home').first()) as HomeData | null
</script>

<template>
  <section v-if="entry">
    <h1>{{ entry.title }}</h1>
    <p>Count: {{ entry.count }}</p>
    <img :src="entry.image" alt="" />
    <div v-for="(item, i) in entry.list" :key="`${item.text}-${i + 1}`">
      <div>{{ item.text }}</div>
      <div>{{ item.value }}</div>
    </div>
  </section>
  <p v-else>Home not found</p>
</template>
