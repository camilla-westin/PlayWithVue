<script setup>
import StarRating from "@/components/MovieApp/StarRating.vue";
import { ref, defineEmits, defineProps, onMounted } from "vue";
import { StarIcon, TrashIcon, PencilSquareIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["movieDeleted", "ratingClicked", "editIsClicked"]);

const selectedRating = ref();
const isRated = ref(false);

onMounted(() => {
  selectedRating.value = props.movie.rating;
  if (selectedRating.value > 0) {
    isRated.value = true;
  }
});

const handleRating = (rating) => {
  selectedRating.value = rating;
  isRated.value = true;
  emit("ratingClicked", rating);
};

const deleteClicked = (id) => {
  emit("movieDeleted", id);
};

const editClicked = (id) => {
  const edit = true;
  emit("editIsClicked", { id, edit });
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

      <div class="flex justify-between items-end mt-4">
        <div>
          <StarRating
            :selectedRating="selectedRating"
            @ratingClicked="handleRating"
          />
          <span class="text-xs">Rating: {{ selectedRating }}/5</span>
        </div>

        <div class="flex items-center gap-1">
          <button @click="editClicked(movie.id)">
            <PencilSquareIcon
              class="h-4 text-slate-500 hover:text-vue-green hover:transition-colors"
            />
          </button>
          <button @click="deleteClicked(movie.id)">
            <TrashIcon
              class="h-4 text-slate-500 hover:text-vue-green hover:transition-colors"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
