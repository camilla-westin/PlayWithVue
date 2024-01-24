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
    <VContainer>
      <VRow justify="start">
        <VCol col="3" offset="1"
          ><VImg :src="movie.image" max-width="240" cover></VImg>
          <p class="mt-4 text-sm">Rating: {{ movie.rating }}</p></VCol
        >
        <VCol cols="8">
          <VCard width="560">
            <h1 class="mt-2 text-3xl pl-3 pt-4">{{ movie.name }}</h1>
            <p class="p-4">{{ movie.description }}</p>
            <div class="px-3 pb-6">
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
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
