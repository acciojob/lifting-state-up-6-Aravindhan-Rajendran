import React, { useState } from 'react';
import TodoList from './TodoList';
import '../styles/App.css'; // Corrected import statement

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false },
  ]);

const handleComplete = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

  return (
    <div>
      <h1>My Todo App</h1> {/* Added a header for the whole app */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
