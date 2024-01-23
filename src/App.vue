<script setup>
import { RouterView } from "vue-router";
import NavContainer from "@/components/Navigation/NavigationContainer.vue";
</script>

<!-- <template>
  <header>
    <div class="wrapper">
      <NavContainer />
    </div>
  </header>
  <main class="bg-vue-almostblack p-4 min-h-screen">
    <div class="max-w-screen-md m-auto relative">
      <RouterView />
    </div>
  </main>
</template> -->

<template>
  <VApp>
    <!--side bar-->
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>
