<template>
  <section class="details">
    <button @click="$router.back()" class="back">← Back</button>

    <div v-if="news">
      <h1>{{ news.name }}</h1>
      <p><strong>Category:</strong> {{ news.company }}</p>

      <p class="note">
        This is placeholder text. In a real system, you might show nutrition facts,
        serving size, ingredients, benefits, etc.
      </p>
    </div>

    <div v-else>
      <p>News not found.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

const stored = localStorage.getItem("news")
const news = stored ? JSON.parse(stored) : []

const product = ref(news[id])
</script>

<style scoped>
.details {
  max-width: 600px;
  margin: 2rem auto;
}
.back {
  margin-bottom: 1rem;
}
.note {
  margin-top: 1rem;
  font-style: italic;
}
</style>