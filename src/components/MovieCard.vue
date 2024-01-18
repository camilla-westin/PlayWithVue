<script setup>
import StarRating from "@/components/StarRating.vue";
import { ref, defineEmits } from "vue";
import { StarIcon, TrashIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["movieDeleted"]);

const selectedRating = ref(0);
const isRated = ref(false);

const handleRating = (rating) => {
  selectedRating.value = rating;
  isRated.value = true;
};

const deleteClicked = (id) => {
  emit("movieDeleted", id);
};
</script>

<template>
  <div class="relative">
    <div class="relative h-72 overflow-hidden">
      <div class="absolute top-2 right-2 z-10 text-slate-400">
        <StarIcon class="h-10" :class="{ 'text-yellow-500': isRated }" />
        <span v-if="isRated" class="absolute top-2 right-4 text-black">{{
          selectedRating
        }}</span>
        <span class="absolute top-2 right-4 text-black" v-else>-</span>
      </div>
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
      <button @click="deleteClicked(movie.id)">
        <TrashIcon class="h-4 absolute bottom-2 right-2 text-slate-500" />
      </button>
    </div>
  </div>
</template>
