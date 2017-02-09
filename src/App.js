import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// React component
class App extends Component {
  constructor() {
   super() // call constructure of the Component class
   // State object contains data structures component needs to render properly
   // Like instance variable
   this.state = {
     todos: [
       {id: 1, name: 'Learn JSX', isComplete: true},
       {id: 2, name: 'Build an Awesome App', isComplete: true},
       {id: 3, name: 'Ship It', isComplete: false}
     ],
     currentTodo: ''
   }
   // Ensure that this refers to the correct context when calling this.setState
   this.handleInputChange = this.handleInputChange.bind(this)
  }
  // Handle to read input event and update the value on state
  handleInputChange(e) {
    // Update the value
    this.setState({
      currentTodo: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos list</h2>
        </div>
        <div className="Todo-App">
          <form>
            {/* Bind handleInputChange to onChange event*/}
            <input type="text" onChange={this.handleInputChange} value={this.state.currentTodo}/>
          </form>
          <div className="Todo-List">
            <ul>
            {/* A JSX comment: Must use curly brace to separate javascript from jsx */}
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
                </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
