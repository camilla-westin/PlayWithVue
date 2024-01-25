<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <v-list density="compact" nav>
    <router-link to="/">
      <v-list-item
        prepend-icon="mdi-home-variant"
        color="#000000"
        title="Home"
        value="home"
      ></v-list-item>
    </router-link>
    <router-link to="/about">
      <v-list-item
        prepend-icon="mdi-information"
        title="About"
        value="about"
      ></v-list-item>
    </router-link>
    <router-link to="/movies">
      <v-list-item
        prepend-icon="mdi-movie"
        title="Movies"
        value="movies"
        color="#000000"
      ></v-list-item>
    </router-link>
    <router-link to="/games">
      <v-list-item
        prepend-icon="mdi-gamepad-variant"
        title="TicTacToe"
        value="tictactoe"
        color="#000000"
      ></v-list-item>
    </router-link>
    <router-link to="/aquarium">
      <v-list-item
        prepend-icon="mdi-fish"
        title="Aquarium"
        value="aquarium"
        color="#000000"
      ></v-list-item>
    </router-link>
  </v-list>
</template>
