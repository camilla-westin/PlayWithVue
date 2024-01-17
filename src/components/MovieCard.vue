<script setup>
import StarRating from "@/components/StarRating.vue";
import { ref } from "vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const selectedRating = ref(0);

const handleRating = (rating) => {
  selectedRating.value = rating;
};
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
        <StarRating
          :selectedRating="selectedRating"
          @ratingClicked="handleRating"
        />
      </div>
      <span class="text-xs">Rating: {{ selectedRating }}/5</span>
    </div>
  </div>
</template>
