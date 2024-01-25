<script setup>
import { ref } from "vue";

const name = ref("");
const type = ref("");
const fishTypes = ref([
  "golden-purple-fish",
  "goldfish",
  "guppie",
  "tropical-fish",
  "tuna",
]);

const emit = defineEmits(["submitFish"]);

const onSubmit = () => {
  const fishData = {
    name: name.value,
    type: type.value,
    hungerstatus: "100",
  };

  emit("submitFish", fishData);

  name.value = "";
  type.value = "";
};

const selectType = (selectedType) => {
  type.value = selectedType;
};
</script>

<template>
  <form class="p-4" @submit.prevent="onSubmit">
    <div class="fish-types flex flex-wrap">
      <div
        class="fish-type w-1/2"
        v-for="(fishType, index) in fishTypes"
        :key="index"
        @click="selectType(fishType)"
      >
        <img
          :src="`/Aquarium/${fishType}.png`"
          alt="Fish"
          class="hover:bg-slate-100 my-2 cursor-pointer transition"
          :class="{ 'bg-slate-100': type === fishType }"
        />
      </div>
    </div>

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
      type="submit"
      class="bg-red-800 hover:bg-red-700 transition text-white text-sm py-3 px-4 rounded mt-4 w-full"
    >
      Submit
    </button>
  </form>
</template>
