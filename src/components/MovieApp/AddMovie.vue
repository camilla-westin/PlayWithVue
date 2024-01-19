<script setup>
import { reactive, ref, watch } from "vue";

const props = defineProps({
  editMovieData: {
    type: Object,
    default: null,
  },
  editMode: {
    type: Boolean,
    default: false,
  },
});

// Create separate refs for each field
const movieId = ref("");
const movieName = ref("");
const movieDescription = ref("");
const movieImg = ref("");
const movieGenres = ref([]);
const movieInTheathers = ref("");

// Watch for changes in editMovieData and update the refs accordingly
watch(
  () => props.editMovieData,
  (newValue) => {
    if (newValue) {
      movieName.value = newValue.name || "";
      movieDescription.value = newValue.description || "";
      movieImg.value = newValue.image || "";
      movieGenres.value = newValue.genres || [];
      movieInTheathers.value = newValue.inTheathers || "";
    } else {
      // Reset the refs when editMovieData is null
      movieName.value = "";
      movieDescription.value = "";
      movieImg.value = "";
      movieGenres.value = [];
      movieInTheathers.value = "";
    }
  },
  { immediate: true } // Trigger the watch callback immediately
);

const movieGenresOptions = reactive([
  { text: "Drama", value: "Drama" },
  { text: "Crime", value: "Crime" },
  { text: "Action", value: "Action" },
  { text: "Comedy", value: "Comedy" },
]);

const emit = defineEmits(["movieSubmitted", "formCancelled"]);

const onSubmit = () => {
  if (!movieName.value || !movieDescription.value) {
    console.error("Fyll i båda fält");
    return;
  }

  const movieData = {
    id: props.editMovieData ? props.editMovieData.id : generateUniqueId(),
    name: movieName.value,
    description: movieDescription.value,
    image: movieImg.value,
    genres: movieGenres.value,
    inTheathers: movieInTheathers.value,
  };

  emit("movieSubmitted", movieData);

  clearForm();
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

const clearForm = () => {
  movieId.value = null;
  movieName.value = null;
  movieDescription.value = null;
  movieImg.value = null;
  movieGenres.value = null;
  movieInTheathers.value = null;

  emit("formCancelled", "false");
};
</script>

<template>
  <Transition name="fade" :duration="500">
    <div
      class="modal fixed top-0 left-0 h-screen w-screen z-10 flex justify-center items-center"
    >
      <div class="form w-1/2 bg-vue-dark-grey z-20 p-6">
        <h2 class="text-2xl text-white font-semibold">Add movie</h2>
        <form id="movieform" @submit.prevent="onSubmit">
          <div>
            <label for="name">Name</label>
            <input
              id="name"
              v-model="movieName"
              placeholder="Movie name.."
              type="text"
            />
          </div>
          <div>
            <label for="description">Description</label>
            <textarea
              id="description"
              v-model="movieDescription"
              placeholder="Description.."
            />
          </div>
          <div>
            <label for="image">Image url</label>
            <input
              id="image"
              v-model="movieImg"
              placeholder="Url to image.."
              type="text"
            />
          </div>

          <div>
            <label for="genres">Genres</label>
            <select v-model="movieGenres" id="genres" multiple>
              <option
                v-for="option in movieGenresOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.value }}
              </option>
            </select>
          </div>

          <div>
            <legend>In theathers</legend>
            <div class="flex gap-2">
              <input
                type="radio"
                id="yes"
                value="true"
                v-model="movieInTheathers"
              />
              <label for="yes">Yes</label>

              <input
                type="radio"
                id="no"
                value="false"
                v-model="movieInTheathers"
              />
              <label for="no">No</label>
            </div>
          </div>
          <div class="flex justify-between flex-wrap">
            <button
              type="button"
              @click="clearForm"
              class="bg-slate-200 py-1 px-3 font-medium my-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-vue-green py-1 px-3 text-white font-medium my-4 rounded"
            >
              <span v-if="editMode">Update</span>
              <span v-else>+ Add</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
label,
legend {
  display: block;
  color: white;
  font-size: 14px;
  padding-bottom: 5px;
  margin-top: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
}

textarea,
select {
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
}

.modal {
  background-color: rgba(0, 0, 0, 0.8);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .form,
.fade-leave-active .form {
  transition: transform 0.6s ease;
}

.fade-enter-from .form,
.fade-leave-to .form {
  transform: translateY(50px);
}
</style>
