<script setup>
import { ref } from "vue";

const name = ref("");

const emit = defineEmits(["submitFish"]);

const onSubmit = () => {
  const fishData = {
    name: name.value,
  };

  emit("submitFish", fishData);

  name.value = "";
};
</script>
<template>
  <form class="p-4" @submit.prevent="onSubmit">
    <label for="name" class="text-white font-semibold text-sm">Name</label>
    <input
      type="text"
      id="name"
      class="px-3 py-2 rounded text-xs w-full bg-white"
      placeholder="Text"
      aria-labelledby="name"
      v-model="name"
    />
    <button
      role="submit"
      class="bg-red-800 hover:bg-red-600 transition text-white w-full py-2 px-3 mt-4 rounded text-sm"
    >
      Add Fish
    </button>
  </form>
</template>
<style scoped></style>
