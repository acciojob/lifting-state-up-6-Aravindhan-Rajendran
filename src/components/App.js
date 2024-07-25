import React, { useState } from 'react';
import TodoList from './TodoList.js';
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React App', completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
TodoList.js
This is the child component that will render the todo items and handle the "complete" button click.

jsx
Copy code
import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <>
      <h2>Child Component</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button 
              onClick={() => handleComplete(todo.id)}
              disabled={todo.completed}
            >
              {todo.completed ? 'Completed' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
