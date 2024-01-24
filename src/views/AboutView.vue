<script setup>
import QuoteGenerator from "@/components/QuoteGenerator.vue";
import Carousel from "@/components/Carousels/VCarousel.vue";
import Calculator from "@/components/Calculator.vue";
</script>
<template>
  <VContainer>
    <VRow>
      <h1 class="text-3xl font-semibold">About</h1>
    </VRow>
    <VRow>
      <Calculator />

      <Carousel />
      <QuoteGenerator />
    </VRow>
  </VContainer>
</template>

<style></style>
