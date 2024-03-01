ScrollList component has the ul and li elements, and the PersonCard component is
the li element. The list prop is passed to the ScrollList component from the
parent component. The v-slot directive is used to pass the item prop to the
PersonCard component. The item prop is used to pass the data to the PersonCard
component. The PersonCard component is a child component of the ScrollList
component. 

//TODO 
Rendera lista med personer 

Listan ska ha fast höjd så den får scroll 

Skapa inputfält där man kan fylla i index så scrollas man ner till den personen 

Fokus på listan när sidan laddas. 

//App.vue 

	//Osäker på all denna kod men det väsentliga är att v-slot ska användas med PersonCard på nått sätt.

<ScrollList :list="list" v-slot="{ item }">
    <PersonCard :name="item.name" /> 
</ScrollList>

//ScrollList.vue
<template>
  <ul>
    //Här skulle man lägga in en v-for för att loopa igenom listan och skapa en
    li för varje item i listan
  </ul>
</template>

//PersonCard.vue
<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>
