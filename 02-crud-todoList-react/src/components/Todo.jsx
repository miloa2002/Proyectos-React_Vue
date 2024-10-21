
const Todo = ({todo, deleteTodo, updateId}) => {
  
  return (
      <div className="item">
        <span>{todo.title}</span>
        <button className="edit-btn" onClick={() => updateId(todo)}>Editar</button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Eliminar</button>
      </div>
  );
};

export default Todo;
