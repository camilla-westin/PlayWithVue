<script setup>
import { ref } from "vue";

const newTodo = ref("");
const todos = ref([]);
const completedTodos = ref([]);

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

function addTodo() {
  todos.value.push({
    id: randomId(),
    text: newTodo.value,
  });
  newTodo.value = "";
}

function removeTodo(id) {
  completedTodos.value.push(todos.value.find((todo) => todo.id === id));
  todos.value = todos.value.filter((todo) => todo.id !== id);
}
</script>

<template>
  <div class="w-2/3">
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a new todo"
      class="w-full p-2 border rounded-sm my-2"
    />

    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        class="bg-gray-100 rounded-sm h-12 p-2 mb-2"
      >
        <input type="checkbox" class="mr-2" @click="removeTodo(todo.id)" />
        {{ todo.text }}
      </li>
    </ul>

    <ul>
      <li
        v-for="(todo, index) in completedTodos"
        class="line-through bg-gray-100 rounded-sm h-12 p-2 mb-2"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>
