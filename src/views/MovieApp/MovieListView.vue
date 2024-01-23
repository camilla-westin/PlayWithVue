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
  <VContainer>
    <VRow justify="space-between">
      <VCol><h1 class="text-3xl font-semibold">Movies</h1></VCol>
      <VCol>
        <VRow align="center" justify="end">
          <VCol
            ><div class="text-sm text-right">
              Total Movies: {{ totalMovies }} / Average rating:
              {{ averageRating }}
            </div></VCol
          >
          <VCol class="text-right v-col-3">
            <VBtn @click="showForm" prepend-icon="mdi-plus" variant="tonal"
              >Add movie</VBtn
            ></VCol
          >
        </VRow>
      </VCol>
    </VRow>
    <VRow>
      <VCol
        v-for="movie in movieItems"
        :key="movie.id"
        class="bg-white rounded-lg v-col-4"
      >
        <MovieCard
          :movie="movie"
          @movieDeleted="handleDeletedMovie"
          @ratingClicked="handleRatingClick"
          @editIsClicked="handleMovieEdit"
        />
      </VCol>
    </VRow>
  </VContainer>

  <AddMovie
    v-show="formIsShown"
    @movieSubmitted="handleMovieSubmitted"
    @formCancelled="handleFormCancelled"
    :editMovieData="editMovieData"
    :editMode="editModeActive"
    :formActive="formIsShown"
  />
</template>
