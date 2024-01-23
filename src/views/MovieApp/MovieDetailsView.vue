<script setup>
import { ref, computed } from "vue";
import { items } from "@/data/movies.json";

const props = defineProps({
  id: Number,
});

const movies = ref(items);

const movie = computed(() => movies.value.find((m) => m.id === props.id));
</script>

<template>
  <div class="pt-32">
    <article class="flex gap-8 max-w-screen-sm">
      <div class="w-1/3">
        <img :src="movie.image" :alt="movie.name" />
      </div>
      <div class="w-2/3">
        <h1 class="text-3xl text-white">{{ movie.name }}</h1>
        <ul class="flex flex-wrap gap-2 mt-4">
          <li
            v-for="genre in movie.genres"
            :key="genre"
            class="text-xs bg-vue-purple rounded-xl text-white p-2 py-1"
          >
            {{ genre }}
          </li>
        </ul>
        <p class="mt-4 text-white">{{ movie.description }}</p>
        <p class="mt-4 text-white text-sm">Rating: {{ movie.rating }}</p>
      </div>
    </article>
  </div>
</template>
