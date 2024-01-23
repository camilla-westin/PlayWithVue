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
  formActive: {
    type: Boolean,
    default: false,
  },
});

const movieId = ref("");
const movieName = ref("");
const movieDescription = ref("");
const movieImg = ref("");
const movieGenres = ref([]);
const inputname = ref(null);

const emit = defineEmits(["movieSubmitted", "formCancelled"]);

const clearForm = () => {
  movieId.value = null;
  movieName.value = null;
  movieDescription.value = null;
  movieImg.value = null;
  movieGenres.value = null;

  emit("formCancelled", "false");
};

const validateForm = () => {
  if (!movieName.value || !movieDescription.value) {
    console.error("Please fill in both fields");
    return false;
  }
  return true;
};

watch(
  () => props.formActive,
  (newValue) => {
    if (newValue === true) {
      setTimeout(() => {
        inputname.value.focus();
      }, 100);
    }
  }
);

const onSubmit = () => {
  if (!validateForm()) return;

  const movieData = {
    id: props.editMovieData ? props.editMovieData.id : generateUniqueId(),
    name: movieName.value,
    description: movieDescription.value,
    image: movieImg.value,
    genres: movieGenres.value,
  };

  emit("movieSubmitted", movieData);

  clearForm();
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

watch(
  () => props.editMovieData,
  (newValue) => {
    if (newValue) {
      movieName.value = newValue.name || "";
      movieDescription.value = newValue.description || "";
      movieImg.value = newValue.image || "";
      movieGenres.value = newValue.genres || [];
    } else {
      movieName.value = "";
      movieDescription.value = "";
      movieImg.value = "";
      movieGenres.value = [];
    }
  },
  { immediate: true }
);
</script>

<template>
  <Transition name="fade" :duration="500">
    <div
      class="modal fixed top-0 left-0 h-screen w-screen z-10 flex justify-center items-center"
    >
      <div class="form w-1/2 bg-white z-20 p-10">
        <h2 class="text-2xl font-semibold mb-2">Add movie</h2>
        <VForm @submit.prevent="onSubmit">
          <VTextField label="Name" ref="inputname" v-model="movieName">
          </VTextField>
          <VTextarea label="Description" v-model="movieDescription">
          </VTextarea>
          <VTextField label="Image Url" v-model="movieImg"></VTextField>
          <v-select
            label="Select genre"
            :items="['Drama', 'Crime', 'Action', 'Sci-fi', 'Comedy', 'Horror']"
            multiple
            v-model="movieGenres"
          ></v-select>
          <VRow justify="space-between" class="mt-4 px-3">
            <VBtn @click="clearForm">Cancel</VBtn>
            <VBtn type="submit">
              <span v-if="editMode">Update</span>
              <span v-else>+ Add</span>
            </VBtn>
          </VRow>
        </VForm>
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
