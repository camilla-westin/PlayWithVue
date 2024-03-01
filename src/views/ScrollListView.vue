<script setup>
import { ref } from "vue";
import ScrollList from "@/components/ScrollList/ScrollList.vue";
import PersonCard from "@/components/ScrollList/PersonCard.vue";
import People from "@/data/people.json";

const list = ref(People);
</script>

<template>
  <VContainer>
    <VRow>
      <h1 class="text-3xl font-semibold">Scroll list</h1>
    </VRow>
    <VRow>
      <section class="py-6">
        <ScrollList :list="list" v-slot="{ item }">
          <PersonCard :id="item.id" :name="item.name" :role="item.role" />
        </ScrollList>
      </section>
    </VRow>
  </VContainer>
</template>
