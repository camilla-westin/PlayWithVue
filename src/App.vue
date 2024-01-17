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

  <RouterView />
</template>
