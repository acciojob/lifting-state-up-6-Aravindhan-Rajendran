import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Redux', completed: false },
        { id: 3, text: 'Build a project', completed: false }
      ]
    };
  }

  handleComplete = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    }));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} handleComplete={this.handleComplete} />
      </div>
    );
  }
}

export default App;
