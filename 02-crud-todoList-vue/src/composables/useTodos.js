import { ref, reactive } from "vue"

export default function useTodos() {
    const todos = ref([])
    const todo = reactive({
        id: null,
        title: ""
    })

    function createTodo() {
        todos.value.push({...todo, id: Date.now()})
    }

    function deleteTodo(id) {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    function updateTodo(id) {
        let findTodo = todos.value.find(todo => todo.id === id)
        Object.assign(todo, findTodo)
    }

    return {
        todos,
        todo,
        createTodo,
        deleteTodo,
        updateTodo
    }
}