<script setup>
import { ref } from "vue";
import FishForm from "./FishForm.vue";

const fishies = ref([]);

const addFish = (fishData) => {
  fishies.value.push(fishData);
  console.log(fishies.value);
};
</script>

<template>
  <VContainer>
    <div class="aquarium-container">
      <div class="aquarium-sidebar">
        <FishForm @submit-fish="addFish" />
      </div>
      <div class="aquarium"></div>
    </div>
  </VContainer>
</template>

<style scoped>
.aquarium-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 650px;
}

.aquarium-sidebar {
  background: #203d7e;
  height: 100%;
  width: 200px;
}
.aquarium {
  background: url(../../public/Aquarium/bg.jpg);
  background-size: cover;
  height: 100%;
  width: 1024px;
}
</style>
