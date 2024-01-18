<script setup>
import { ref, onMounted } from "vue";
import Movies from "@/data/movies.json";
import MovieCard from "@/components/MovieCard.vue";
import AddMovie from "@/components/AddMovie.vue";

const movieItems = ref([]);
const formIsShown = ref(false);

onMounted(async () => {
  try {
    movieItems.value = Movies;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const showForm = () => {
  formIsShown.value = true;
};

const handleMovieSubmitted = (movieData) => {
  movieItems.value.items.push({
    id: generateUniqueId(),
    name: movieData.name,
    description: movieData.description,
    image: movieData.image,
    genres: movieData.genres,
    inTheaters: movieData.inTheaters,
  });

  formIsShown.value = false;
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

const handleFormCancelled = () => {
  formIsShown.value = false;
};
</script>

<template>
  <div class="flex justify-between flex-wrap items-center">
    <h1 class="text-white text-3xl font-semibold">Movies</h1>
    <button
      @click="showForm"
      class="bg-vue-green py-2 px-3 text-white font-medium my-4 rounded"
    >
      + Add Movie
    </button>
  </div>
  <ul class="flex flex-wrap place-items-flex gap-4 mt-8">
    <li
      v-for="movie in movieItems.items"
      :key="movie.id"
      class="w-1/3 bg-white rounded-lg"
    >
      <MovieCard :movie="movie" />
    </li>
  </ul>

  <AddMovie
    v-show="formIsShown"
    @movieSubmitted="handleMovieSubmitted"
    @formCancelled="handleFormCancelled"
  />
</template>
