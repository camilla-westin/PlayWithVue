<script setup>
import QuoteGenerator from "@/components/QuoteGenerator.vue";
import Carousel from "@/components/Carousels/VCarousel.vue";
</script>
<template>
  <VContainer>
    <VRow>
      <h1 class="text-3xl font-semibold">About</h1>
      <QuoteGenerator />
      <Carousel />
    </VRow>
  </VContainer>
</template>

<style></style>
