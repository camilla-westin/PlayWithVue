<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
import { defineProps } from "vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="relative h-96 overflow-hidden">
      <img :src="movie.image" class="absolute top-0 left-0" />
    </div>
    <div class="p-3">
      <h2 class="font-medium py-2">{{ movie.name }}</h2>
      <ul class="flex gap-2 pb-3">
        <li
          v-for="genre in movie.genres"
          :key="genre"
          class="text-xs bg-vue-purple rounded-xl text-white p-2 py-1"
        >
          {{ genre }}
        </li>
      </ul>
      <p class="text-xs">{{ movie.description }}</p>

      <div class="flex row gap-1 mt-4">
        <span v-for="index in movie.rating" :key="index"
          ><StarIcon class="h-4 text-yellow-500"
        /></span>
      </div>
      <span class="text-xs">Rating: {{ movie.rating }}/5</span>
    </div>
  </div>
</template>
