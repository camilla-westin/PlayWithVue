<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["removeTodo"]);

const handleRemoveClick = (id) => {
  emit("removeTodo", id);
};
</script>
<template>
  <li
    :key="todo.id"
    :class="{
      'line-through': todo.completed,
      'bg-gray-100': true,
      'rounded-sm': true,
      'h-12': true,
      'p-2': true,
      'mb-2': true,
    }"
  >
    <input
      v-show="!todo.completed"
      type="checkbox"
      class="mr-2"
      @click="handleRemoveClick(todo.id)"
    />
    {{ todo.text }}
  </li>
</template>
