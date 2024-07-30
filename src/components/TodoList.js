import React from 'react';

function TodoList({ todos, handleComplete }) {
    return (
        <ul>
 {todos.map(todo => (
  <li key={todo.id} className={todo.completed ? 'completed' : ''}>
    {todo.text}
    console.log('Todo completed:', todo.completed); // Debug log
    {!todo.completed && (
      <button onClick={() => handleComplete(todo.id)}>
        Complete
      </button>
    )}
  </li>
))}
        </ul>
    );
}

export default TodoList;
