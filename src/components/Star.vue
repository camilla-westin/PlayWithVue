<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
import { ref, computed } from "vue";

const props = defineProps({
  starIndex: {
    type: Number,
    required: true,
  },
  selectedRating: {
    type: Number,
    required: true,
  },
});

const isFilled = computed(() => props.starIndex <= props.selectedRating);

const starClass = computed(() => ({
  "text-yellow-500": isFilled.value,
}));
</script>

<template>
  <button @click="updateRating" :class="starClass">
    <StarIcon
      class="h-4"
      :class="{ 'text-yellow-500': isFilled, 'text-slate-400': !isFilled }"
    />
  </button>
</template>
