<script setup>
import { ref, computed } from "vue";
import SlideShowImages from "@/data/images.json";

const images = ref([]);
const formattedImages = computed(() =>
  SlideShowImages.map((image) => ({
    id: image.id,
    src: image.src,
  }))
);

images.value = formattedImages.value;
</script>

<template>
  <v-carousel>
    <v-carousel-item
      v-for="image in images"
      :key="image.id"
      :src="image.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
