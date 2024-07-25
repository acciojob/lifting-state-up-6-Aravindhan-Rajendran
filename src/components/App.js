import TodoList from "./TodoList.js";
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       <h1>Parent Component</h1>
    <h2>Child Component</h2>
    <ul>
    <li>Learn React<button onClick={handleComplete}>Complete</button></li>
    <li>Build a React app<button onClick={handleComplete}>Complete</button></li>
    <li>Deploy the React App<button onClick={handleComplete}>Complete</button></li>
    </ul>
    </div>
  )
}

export default App
