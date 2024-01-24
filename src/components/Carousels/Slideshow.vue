<script setup>
import { ref, onMounted } from "vue";
import SlideshowImages from "@/data/images.json";

const images = ref([]);
const currentIndex = ref(0);

onMounted(async () => {
  try {
    images.value = SlideshowImages;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const showNextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const showPrevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<template>
  <div class="relative my-4 p-4">
    <ul class="flex flex-col items-center justify-center h-2/3 overflow-hidden">
      <li
        v-for="(image, index) in images"
        :key="image.id"
        v-show="index === currentIndex"
        class="relative flex items-center justify-center h-2/3 w-full"
      >
        <img :src="image.src" :alt="image.alt" class="max-w-full" />
      </li>
    </ul>

    <button
      @click="showNextImage"
      class="absolute top-1/2 right-8 text-xs bg-blue-300 text-blue-800 h-12 w-12 rounded-full"
    >
      Next
    </button>
    <button
      @click="showPrevImage"
      class="absolute top-1/2 left-8 text-xs bg-blue-300 text-blue-800 h-12 w-12 rounded-full"
    >
      Prev
    </button>
  </div>
</template>
