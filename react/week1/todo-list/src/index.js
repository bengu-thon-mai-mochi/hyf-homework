import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const todoList = [
  {
    id: 1,
    description:  "Volunteer",
    dueDate: "Wed March 27 2020"
  }, 
  {
    id: 2,
    description:  "Work on homework",
    dueDate: "Fri March 29 2020"
  },
  {
    id: 3,
    description:  "Meet with Alex",
    dueDate: "Tue March 26 2020"
  }
]

function Header(){
  return( 
    <header>
      <h1 className="header">____To-do list:</h1>
    </header>
  )
}

class List extends Component {
  render() {
    const listOftodos = this.props.todos;
    const result = listOftodos.map(todo => {
      return <li key={todo.id} className="list-item"> 
                  <span className="date-style"> {todo.dueDate} </span> 
                  <span className="description-style"> {todo.description} </span>
                  <button className="delete-button"> Done! </button>
              </li>
       });
    return <ul>{result}</ul>;
  }
}

class App extends Component {
  render() {
    return <div>
              <Header />
              <List todos={todoList} />
            </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root 
);

serviceWorker.unregister();
