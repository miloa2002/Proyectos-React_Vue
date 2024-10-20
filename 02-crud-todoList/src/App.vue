<script setup>
import { ref } from 'vue';
import useTodos from './composables/useTodos';
import Alert from './components/Alert.vue';
import Item from './components/Item.vue';

const { todo, todos, createTodo, deleteTodo, updateTodo } = useTodos()

const error = ref("")

const handleSubmit = () => {
  if (todo.title === "") {
    error.value = "El campo no puede ir vacío"

    setTimeout(() => {
      error.value = ""
    }, 3000)
    return
  }

  if (todo.id) {
    const findIndexTodo = todos.value.findIndex(item => item.id === todo.id)
    todos.value[findIndexTodo] = { ...todo }
  } else {
    createTodo()
  }

  Object.assign(todo, {
    id: null,
    title: ""
  })
}

</script>

<template>
  <Alert v-if="error">{{ error }}</Alert>
  <div class="container">
    <h2>Todo list</h2>
    <form @submit.prevent="handleSubmit" class="input-container form">
      <input v-model="todo.title" class="input-text" type="text" placeholder="Añadir un item">
      <button>{{ todo.id ? "Editar item" : "Añadir item" }}</button>
    </form>
    <div class="content-todos">
      <Item v-for="item in todos" :item="item" :key="item.id" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
    </div>
  </div>
</template>
