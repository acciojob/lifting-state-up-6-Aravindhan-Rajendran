import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initial state with an array of todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Get a job', completed: false }
  ]);

  // Function to handle completing a todo item
  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
