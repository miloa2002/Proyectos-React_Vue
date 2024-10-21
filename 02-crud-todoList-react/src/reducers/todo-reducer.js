
export function todoReducer(state, action) {
    if(action.type === 'add-todo') {

        let updatedTodos = []

        if(state.activeId) {
            updatedTodos = state.todos.map(todo => todo.id === state.activeId ? action.payload : todo)
        }else {
            updatedTodos = [...state.todos, action.payload]
        }
        
        return {
            ...state,
            todos: updatedTodos,
            activeId: ''
        }
    }

    if(action.type === 'delete-todo') {

        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }
    }

    if(action.type === 'set-id') {

        return {
            ...state,
            activeId: action.payload
        }
    }
}