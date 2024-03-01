<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="flex border-b-2 py-2 w-64">
    <div
      class="h-12 w-12 bg-slate-300 rounded-full flex justify-center align-center"
    >
      {{ id }}
    </div>
    <div class="ml-4">
      <h2>{{ name }}</h2>
      <span class="text-xs">{{ role }}</span>
    </div>
  </div>
</template>
