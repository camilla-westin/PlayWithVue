<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Movies from "@/data/movies.json";

const route = useRoute();
const movieItems = ref({ items: [] });

onMounted(async () => {
  const movieId = route.params.id;

  try {
    movieItems.value = Movies;

    const foundMovie = movieItems.value.items.find((movie) => {
      return movie.id === Number(movieId);
    });

    if (foundMovie) {
      movieItems.value = foundMovie;
    } else {
      console.error("Movie not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <div class="pt-32">
    <article class="flex gap-8 max-w-screen-sm">
      <div class="w-1/3">
        <img :src="movieItems.image" :alt="movieItems.name" />
      </div>
      <div class="w-2/3">
        <h1 class="text-3xl text-white">{{ movieItems.name }}</h1>
        <ul class="flex flex-wrap gap-2 mt-4">
          <li
            v-for="genre in movieItems.genres"
            :key="genre"
            class="text-xs bg-vue-purple rounded-xl text-white p-2 py-1"
          >
            {{ genre }}
          </li>
        </ul>
        <p class="mt-4 text-white">{{ movieItems.description }}</p>
        <p class="mt-4 text-white text-sm">Rating: {{ movieItems.rating }}</p>
      </div>
    </article>
  </div>
</template>
