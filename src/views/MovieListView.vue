<script setup>
import { ref, onMounted } from "vue";
import Movies from "@/data/movies.json";
import MovieCard from "@/components/MovieCard.vue";

const movieItems = ref([]);

onMounted(async () => {
  try {
    movieItems.value = Movies;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <h1 class="text-white text-xl font-semibold">Movies</h1>
  <ul class="flex gap-4 mt-8">
    <li
      v-for="movie in movieItems.items"
      :key="movie.id"
      class="w-1/3 bg-white rounded-lg"
    >
      <MovieCard :movie="movie" />
    </li>
  </ul>
</template>
