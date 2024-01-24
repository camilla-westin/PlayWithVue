<script setup>
import TicTacToe from "@/components/games/TicTacToe.vue";
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 class="text-3xl font-semibold">Games</h1>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <TicTacToe />
      </VCol>
    </VRow>
  </VContainer>
</template>
