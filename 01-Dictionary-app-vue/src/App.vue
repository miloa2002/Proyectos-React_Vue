<script setup>
import Result from "./components/Result.vue"
import { ref } from "vue"
import Alert from "./components/Alert.vue";

const word = ref("")
const data = ref({})
const error = ref("")

const fetchData = async () => {
  if(word.value === "") {
    error.value = "El campo no puede estar vacío"
    return;
  }

  try {
    const resposne = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
    const result = await resposne.json()
    error.value = "";
    data.value = result
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <div class="container">
    <Alert v-if="error">
      {{ error }}
    </Alert>
    <form @submit.prevent="fetchData" class="form">
      <input v-model="word" type="text" class="search" placeholder="serene" />
      <button class="search-button">Search</button>
    </form>
    <Result v-for="dictionary in data" :dictionary="dictionary" />
  </div>
</template>