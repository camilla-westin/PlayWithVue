<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav role="navigation" aria-label="Main Navigation">
    <ul>
      <li>
        <RouterLink to="/" class="text-white text-sm">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="text-white text-sm">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/movies" class="text-white text-sm">Movies</RouterLink>
      </li>
    </ul>
  </nav>
</template>
