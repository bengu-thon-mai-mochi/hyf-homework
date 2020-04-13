import React, {Component} from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const todoAPI = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
          todos: [],
        }
    };

    componentDidMount(){
        fetch(todoAPI)
            .then(res => res.json())
            .then(data => this.setState ({ todos: data }))
    };

    addTodo = () => {
        const { todos } = this.state;
        const newTodo = {
            description: "Random text",
            id: new Date(),
            isChecked: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]});
    };

    deleteTodo = (id) => {
        const { todos } = this.state;
        const filteredArray = todos.filter(todo => todo.id !== id)
        this.setState({todos: filteredArray});
    };

    todoItemClicked = (id, value) => {
        const { todos } = this.state;
       
        const updatedTodos = todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    isChecked: value
                }
            } 
            return todo;
        })
        this.setState({todos: updatedTodos })
    }; 

    render(){
        const { todos } = this.state;
        if(todos.length > 0){
            const todoItems = todos.map((todo) => {
                return (
                    <TodoItem 
                        description={todo.description}
                        id={todo.id}
                        deleteTodo={this.deleteTodo}
                        todoItemClicked={this.todoItemClicked}
                        isChecked={todo.isChecked}
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
