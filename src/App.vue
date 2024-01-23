<script setup>
import { RouterView } from "vue-router";
import NavContainer from "@/components/Navigation/NavigationContainer.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <VApp>
    <Sidebar />
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>
