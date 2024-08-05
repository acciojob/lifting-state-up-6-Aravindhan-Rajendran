const handleComplete = (id) => {
  console.log('Completing todo with id:', id);
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: true } : todo
  ));
};

const TodoList = ({ todos, handleComplete }) => {
  console.log('Rendering todos:', todos);
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};
