<script setup>

defineProps({
    item: {
        type: Object
    },
    deleteTodo: {
        type: Function
    },
    updateTodo: {
        type: Function
    }
})

</script>

<template>
    <div class="item">
        <span>{{ item.title }}</span>
        <button class="edit-btn" @click="updateTodo(item.id)">Editar</button>
        <button class="delete-btn" @click="deleteTodo(item.id)">Eliminar</button>
    </div>
</template>