<script setup>
import { ref } from "vue";

defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const container = ref(null);
const indexToScroll = ref(0);

function scrollToIndex() {
  const itemHeight = 66;

  if (container.value) {
    const scrollPosition = indexToScroll.value * itemHeight;
    container.value.scrollTop = scrollPosition;
  }
}
</script>

<template>
  <div
    ref="container"
    class="h-72 w-64 overflow-y-scroll overflow-x-hidden border-2 block"
  >
    <ul>
      <li v-for="item in list" :key="item.id">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
  <div class="block py-2">
    <input
      v-model.number="indexToScroll"
      type="text"
      class="w-32 p-2 border mr-2"
    />
    <button class="bg-blue-500 py-2 px-4 rounded" @click="scrollToIndex">
      Scroll to
    </button>
  </div>
</template>
