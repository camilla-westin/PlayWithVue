<script setup>
import { onMounted, ref } from "vue";

const quotes = ref([]);

onMounted(async () => {
  try {
    const category = "happiness";
    const apiKey = import.meta.env.VITE_NINJA_API_KEY;

    const response = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      quotes.value = data;
    } else {
      console.error("Error fetching data:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <div class="flex items-center justify-center my-6">
    <div class="text-center bg-pink-100 py-6 px-32">
      <h2 class="text-center font-medium pb-4">Quote of the day</h2>
      <div v-for="quote in quotes" :key="quote.id">
        <span class="font-bold text-lg md:text-xl italic block"
          >"{{ quote.quote }}"</span
        >
        <span class="pt-3 text-sm block">- {{ quote.author }}</span>
      </div>
    </div>
  </div>
</template>
