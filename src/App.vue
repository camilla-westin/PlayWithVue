<script setup>
import { RouterView } from "vue-router";
import NavContainer from "@/components/Navigation/NavigationContainer.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <NavContainer />
    </div>
  </header>
  <main class="bg-vue-almostblack p-4">
    <div class="max-w-screen-md m-auto relative">
      <RouterView />
    </div>
  </main>
</template>
