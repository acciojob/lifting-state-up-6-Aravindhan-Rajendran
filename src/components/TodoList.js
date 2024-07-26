import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <>
      <h2>Todo List</h2> {/* Changed title for clarity */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
