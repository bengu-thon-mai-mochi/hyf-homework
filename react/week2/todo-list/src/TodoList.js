import React, {Component} from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
          todos: [
            {
              "id": 1,
              "description": "Get out of bed",
              "isChecked": false 
            },
            {
              "id": 2,
              "description": "Brush teeth",
              "isChecked": false
            },
            {
              "id": 3,
              "description": "Eat breakfast",
              "isChecked": false
            }
          ],
        }
    };

    addTodo = () => {
        const newTodo = {
            id: Date.now(),
            description: "Random Text",
            isChecked: false
        };

        this.setState({ todos: [...this.state.todos, newTodo]});
    };

    deleteTodo = (id) => {
        const filteredTodo = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos: filteredTodo});
    };

    render(){
        const { todos } = this.state;
        if(todos.length > 0){
            const todoItems = todos.map(todo => {
                return (
                    <TodoItem 
                        description={todo.description}
                        id={todo.id}
                        deleteTodo={this.deleteTodo}
                    />
                );
            });  
            return (
                <>
                    <button onClick={this.addTodo}>Add to-do!</button>
    
                    <ul className='list-container'>
                        {todoItems}
                    </ul>
                </>
            );
        };
        return( 
            <>
                <button onClick={this.addTodo}>Add to-do!</button>
                <p>There's no to-dos on your list. Please add it by clicking button above</p>
            </>
        );
    }


} 

export default TodoList;
