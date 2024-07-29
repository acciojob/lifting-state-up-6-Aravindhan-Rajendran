import React, { useState } from 'react';
import TodoList from './TodoList';
import '../styles/App.css'; // Make sure this path is correct

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false },
  ]);

const handleComplete = (id) => {
  console.log('Completing todo with id:', id); // Debug log
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: true } : todo
  ));
};
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
