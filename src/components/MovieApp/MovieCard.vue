<script setup>
import StarRating from "@/components/MovieApp/StarRating.vue";
import { ref, defineEmits, defineProps, onMounted } from "vue";
import {
  TrashIcon,
  PencilSquareIcon,
  HeartIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["movieDeleted", "editIsClicked", "ratingClicked"]);

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
  <VCard>
    <div v-if="isRated" class="absolute top-2 right-2 z-10 text-slate-400">
      <HeartIcon class="h-10" :class="{ 'text-red-300': isRated }" />
      <span class="absolute top-2 right-4 text-black">{{
        selectedRating
      }}</span>
    </div>
    <VImg :src="movie.image" max-height="470" cover></VImg>
    <VCardTitle class="mt-2">{{ movie.name }}</VCardTitle>
    <div class="px-3">
      <VChip
        variant="outlined"
        v-for="genre in movie.genres"
        :key="genre"
        class="mr-2"
        color="#8451d6"
      >
        {{ genre }}
      </VChip>
    </div>

    <VCardText>{{ movie.description }}</VCardText>
    <VDivider color="info" :thickness="2"></VDivider>
    <VRating
      hover
      :length="5"
      :size="24"
      :model-value="selectedRating"
      v-model="selectedRating"
      empty-icon="mdi-heart-outline"
      half-icon="mdi-heart-half-full"
      active-color="red-lighten-3"
      full-icon="mdi-heart"
      @click="handleRating(selectedRating)"
      class="px-3 pt-3"
    />
    <VRow>
      <VCol>
        <v-card-actions>
          <v-btn>
            <RouterLink :to="`/movie/${movie.id}`">Read more</RouterLink></v-btn
          >
        </v-card-actions>
      </VCol>
      <VCol class="text-right">
        <VBtn
          @click="editClicked(movie.id)"
          icon="mdi-pencil"
          size="small"
          class="mr-3"
        >
        </VBtn>
        <VBtn
          @click="deleteClicked(movie.id)"
          icon="mdi-delete"
          size="small"
          class="mr-3"
        >
        </VBtn>
      </VCol>
    </VRow>
  </VCard>
</template>
