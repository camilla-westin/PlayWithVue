<script setup>
import { reactive, ref } from "vue";

const movieName = ref("");
const movieDescription = ref("");
const movieImg = ref("");
const movieGenres = ref([]);
const movieInTheathers = ref("");
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
    name: movieName.value,
    description: movieDescription.value,
    image: movieImg.value,
    genres: movieGenres.value,
    inTheathers: movieInTheathers.value,
  };

  emit("movieSubmitted", movieData);

  movieName.value = null;
  movieDescription.value = null;
  movieImg.value = null;
  movieGenres.value = null;
  movieInTheathers.value = null;
};

const cancelForm = () => {
  movieName.value = null;
  movieDescription.value = null;
  movieImg.value = null;
  movieGenres.value = null;
  movieInTheathers.value = null;

  emit("formCancelled", "false");
};
</script>

<template>
  <div
    class="modal fixed top-0 left-0 h-screen w-screen z-10 flex justify-center items-center"
  >
    <div class="w-1/2 bg-vue-dark-grey z-20 p-6">
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
            @click="cancelForm"
            class="bg-slate-200 py-1 px-3 font-medium my-4 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="bg-vue-green py-1 px-3 text-white font-medium my-4 rounded"
          >
            + Add
          </button>
        </div>
      </form>
    </div>
  </div>
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
</style>
