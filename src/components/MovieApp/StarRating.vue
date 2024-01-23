<script setup>
import Star from "@/components//MovieApp/Star.vue";
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  selectedRating: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits();

const updateRating = (rating) => {
  emit("ratingClicked", rating);
};
</script>

<template>
  <!-- <div class="flex row gap-1">
    <Star
      v-for="index in 5"
      :key="index"
      :starIndex="index"
      :selectedRating="selectedRating"
      @click="updateRating(index)"
    />
  </div> -->
  <VRating
    hover
    :length="5"
    :size="32"
    :model-value="selectedRating"
    empty-icon="mdi-heart-outline"
    half-icon="mdi-heart-half-full"
    active-color="red-lighten-3"
    full-icon="mdi-heart"
    @click="updateRating(index)"
  />
</template>
