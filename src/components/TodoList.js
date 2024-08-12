import React from 'react';

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
            <span>{todo.text}</span>
          <span style={{ display: todo.completed ? 'none' : '' }}>
              {todo.button}
          </span>
          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
