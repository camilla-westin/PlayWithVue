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
        <RouterLink to="/shop" class="text-white text-sm">Shop</RouterLink>
      </li>
    </ul>
  </nav>
</template>
