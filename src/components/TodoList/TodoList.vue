<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

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
    completed: false,
  });
  newTodo.value = "";
}

function removeTodo(id) {
  const completedTodo = todos.value.find((todo) => todo.id === id);
  completedTodo.completed = true;
  completedTodos.value.push(completedTodo);
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
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @remove-todo="removeTodo(todo.id)"
      />
    </ul>

    <ul>
      <TodoItem
        v-for="(todo, index) in completedTodos"
        :key="index"
        :todo="todo"
      />
    </ul>
  </div>
</template>
