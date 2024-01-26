<script setup>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Navigation/Sidebar.vue";
</script>

<template>
  <VApp>
    <Sidebar />
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>
