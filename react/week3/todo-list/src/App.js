import React from 'react';
import TodoList from './TodoList';
import Counter from './Counter';
import Border from './Border';

function App(){
  return (
      <Border color="blue">
        <Counter />
        <TodoList />
      </Border>
  )
}

export default App;
