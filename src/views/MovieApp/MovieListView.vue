<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import { items } from "@/data/movies.json";
import MovieCard from "@/components/MovieApp/MovieCard.vue";
import AddMovie from "@/components/MovieApp/AddMovie.vue";

const movieItems = ref(items);
const formIsShown = ref(false);
const totalMovies = ref();
const movieRatings = ref([]);
const editMovieData = ref(null);
const editModeActive = ref(false);

watchEffect(() => {
  totalMovies.value = movieItems.value.length;
});

const showForm = () => {
  formIsShown.value = true;
};

const handleMovieSubmitted = (movieData) => {
  if (editModeActive.value) {
    const existingMovieIndex = movieItems.value.findIndex(
      (movie) => movie.id === movieData.id
    );

    if (existingMovieIndex !== -1) {
      movieItems.value[existingMovieIndex] = {
        id: movieData.id,
        name: movieData.name,
        description: movieData.description,
        image: movieData.image,
        genres: movieData.genres,
        inTheaters: movieData.inTheaters,
      };
    }
    editModeActive.value = false;
  } else {
    movieItems.value.push({
      id: generateUniqueId(),
      name: movieData.name,
      description: movieData.description,
      image: movieData.image,
      genres: movieData.genres,
      inTheaters: movieData.inTheaters,
    });
  }

  formIsShown.value = false;
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

const handleFormCancelled = () => {
  formIsShown.value = false;
};

const handleDeletedMovie = (id) => {
  movieItems.value = movieItems.value.filter((movie) => movie.id !== id);
};

const handleRatingClick = (rating) => {
  movieRatings.value.push(rating);
};

const averageRating = computed(() => {
  if (movieRatings.value.length === 0) {
    return 0;
  }

  const totalRating = movieRatings.value.reduce((acc, curr) => acc + curr);
  return (totalRating / movieRatings.value.length).toFixed(1);
});

const handleMovieEdit = (data) => {
  const { id, edit } = data;
  const currentMovie = movieItems.value.find((movie) => movie.id === id);

  if (currentMovie && edit) {
    editMovieData.value = {
      id: currentMovie.id,
      name: currentMovie.name,
      description: currentMovie.description,
      image: currentMovie.image,
      genres: currentMovie.genres,
      inTheaters: currentMovie.inTheaters,
    };
    editModeActive.value = edit;
    formIsShown.value = true;
  }
};
</script>

<template>
  <div class="flex justify-between flex-wrap items-center">
    <h1 class="text-white text-3xl font-semibold">Movies</h1>
    <div class="flex gap-3 items-center">
      <div class="text-white text-sm">
        Total Movies: {{ totalMovies }} / Average rating: {{ averageRating }}
      </div>
      <button
        @click="showForm"
        class="bg-vue-green py-2 px-3 text-white font-medium my-4 rounded"
      >
        + Add Movie
      </button>
    </div>
  </div>
  <ul class="grid grid-cols-3 gap-4 mt-8">
    <li v-for="movie in movieItems" :key="movie.id" class="bg-white rounded-lg">
      <MovieCard
        :movie="movie"
        @movieDeleted="handleDeletedMovie"
        @ratingClicked="handleRatingClick"
        @editIsClicked="handleMovieEdit"
      />
    </li>
  </ul>

  <AddMovie
    v-show="formIsShown"
    @movieSubmitted="handleMovieSubmitted"
    @formCancelled="handleFormCancelled"
    :editMovieData="editMovieData"
    :editMode="editModeActive"
    :formActive="formIsShown"
  />
</template>
