<script setup>
import { ref } from "vue";
import FishForm from "./FishForm.vue";
import Fish from "./Fish.vue";

const fishies = ref([]);

const addFish = (fishData) => {
  fishies.value.push(fishData);
};
</script>

<template>
  <VContainer>
    <div class="aquarium-container">
      <div class="aquarium-sidebar">
        <FishForm @submit-fish="addFish" />
      </div>
      <div class="aquarium">
        <div v-for="(fish, index) in fishies" :key="index">
          <Fish :fish="fish" />
        </div>
      </div>
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
  width: 300px;
}
.aquarium {
  background: url(/Aquarium/bg.jpg);
  background-size: cover;
  height: 100%;
  width: 1024px;
}
</style>
