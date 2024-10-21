import { useState, useReducer } from "react"
import Alert from "./components/Alert"
import { todoReducer } from "./reducers/todo-reducer"
import Todo from "./components/Todo"

function App() {


  const initialState = {
    todos: [],
    activeId: ''
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const [error, setError] = useState("")
  const [newTodo, setNewTodo] = useState({
    title: "",
    id: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newTodo.title === "") {
      setError("El campo no puede ir vacío")
      setTimeout(() => {
        setError("")
      }, 2000);
      return
    }

    dispatch({type: 'add-todo', payload: {...newTodo, id:Date.now()}})
    setNewTodo({
      title: "",
      id: null
    })
  }

  const deleteTodo = (id) => {
    dispatch({type: "delete-todo", payload: id})
  }

  const updateId = (todo) => {
    setNewTodo(todo)
    dispatch({type: "set-id", payload: todo.id})
  }

  return (
    <>
      {error && <Alert>{error}</Alert>}
      <div className="container">
        <h2>Todo list</h2>
        <form onSubmit={handleSubmit} className="input-container form">
            <input value={newTodo.title} onChange={e => setNewTodo({...newTodo, title: e.target.value})} className="input-text" type="text" placeholder="Añadir un item" />
            <button>Añadir item</button>
        </form>
        <div className="content-todos">
          {
            state.todos.map(todo => (
              <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} updateId={updateId} />
            ))
          }
        </div>
    </div>
    </>
  )
}

export default App
