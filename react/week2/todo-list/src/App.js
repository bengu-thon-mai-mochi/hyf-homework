import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor(){
    super()
    this.state = {counter: 0}
  };
  
  componentDidMount = () => {
    this.counterFunc = setInterval(
      () => this.incrementCounter(),
    1000
    );
  };

  incrementCounter = () => {
    this.setState((state) => {
      const incremented = state.counter++
      return {counter : incremented}
    })
  };

  render(){
    return (
      <main className="App">
        <h1>TodoList</h1>
        <p>You've spent {this.state.counter} seconds on this app</p>
        <TodoList />
      </main>
    )
  };
}

export default App;
