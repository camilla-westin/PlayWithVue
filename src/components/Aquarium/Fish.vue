<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  fish: {
    type: Object,
    required: true,
  },
});

let hungerstatus = ref(100);

const feedFish = () => {
  hungerstatus.value = 100;
};

onMounted(() => {
  let interval = setInterval(() => {
    if (hungerstatus.value > 0) {
      hungerstatus.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div class="fish text-center" @click="feedFish">
    <img
      v-if="hungerstatus != 0"
      :src="`/Aquarium/${fish.type}.png`"
      alt="Fish"
      class="w-24"
    />
    <img v-else :src="`/Aquarium/dead.png`" alt="Dead fish" class="w-24" />
    <p class="bg-white text-black opacity-80 py-2 w-24 text-center text-xs">
      {{ fish.name }}
    </p>
    <div class="w-24 h-2">
      <div class="h-2 w-24 bg-gray-200">
        <div
          :style="{ width: `${hungerstatus}%`, backgroundColor: 'red' }"
          class="h-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
