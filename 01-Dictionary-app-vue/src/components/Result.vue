<script setup>
const data = defineProps({
  dictionary: {
    type: Object
  }
})

console.log(data.dictionary);

</script>

<template>
    <div class="result">
      <h2 class="title-result">{{dictionary.word}}</h2>
      <p v-for="antonyms in dictionary.meanings[2]?.antonyms" class="part-of-speech">antonyms: {{antonyms}}</p>
      <p class="definition">{{dictionary.meanings[0].definitions[0].definition}}</p>
    </div>
</template>