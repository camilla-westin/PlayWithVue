<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps({
  fish: {
    type: Object,
    required: true,
  },
});

let hungerstatus = ref(100);
const fishDOMEl = ref();
const aquariumEl = ref();

const position = ref({
  x: 0,
  y: 0,
});
const minMilliseconds = 4000;
const maxMilliseconds = 10_000;
const generateTimeout = () =>
  Math.floor(Math.random() * maxMilliseconds) + minMilliseconds;
const timeout = ref(0);
const transition = computed(() => `all ${timeout.value / 1000}s linear`);

function doTimeout() {
  timeout.value = generateTimeout();
  setTimeout(() => {
    moveFish();
    doTimeout();
  }, timeout.value);
}

function moveFish() {
  directionRight.value = !directionRight.value;
  position.value = {
    x: generateXPosition(),
    y: generateYPosition(),
  };
}

function generateXPosition() {
  const x =
    Math.random() * aquariumEl.value.offsetWidth - fishDOMEl.value.clientWidth;
  const xPadded = x < 0 ? 0 : x;
  if (position.value.x === 0) return xPadded;

  if (
    // only move in the opposite direction
    directionRight.value &&
    xPadded > position.value.x &&
    // and move at least 200 pixels horizontally
    xPadded + 200 > position.value.x
  ) {
    return xPadded;
  } else if (
    // only move in the opposite direction
    !directionRight.value &&
    xPadded < position.value.x &&
    // and move at least 200 pixels horizontally
    xPadded - 200 < position.value.x
  ) {
    return xPadded;
  } else {
    return generateXPosition();
  }
}

function generateYPosition() {
  const y =
    Math.random() * aquariumEl.value.offsetHeight -
    fishDOMEl.value.clientHeight;
  const yPadded = y < 0 ? 0 : y;

  // move this fish at least 200 pixels vertically
  if (yPadded > position.value.y && yPadded + 200 > position.value.y) {
    return yPadded;
  } else if (yPadded < position.value.y && yPadded - 200 < position.value.y) {
    return yPadded;
  } else {
    return generateYPosition();
  }
}

onMounted(() => {
  aquariumEl.value = document.querySelector("#aquarium");

  moveFish();
  setTimeout(() => {
    moveFish();
    doTimeout();
  }, 2);
});

const directionRight = ref(generateDirection());
function generateDirection() {
  return Math.random() > 0.5;
}

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
  <div
    class="fish text-center w-32"
    @click="feedFish"
    ref="fishDOMEl"
    :style="{
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: transition,
    }"
  >
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
          :style="{ width: `${hungerstatus}%` }"
          class="h-full"
          :class="{
            'bg-red-600': hungerstatus < 30,
            'bg-yellow-600': hungerstatus >= 30 && hungerstatus < 70,
            'bg-green-600': hungerstatus >= 70,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
