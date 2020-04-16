import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddForm from './AddForm'
import TodoItem from './TodoItem';
import './TodoList.css';

const todoAPI = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

class TodoList extends Component {
    state = {
          todos: [],
          selectedDate: new Date(),
          isEditing: false
    };

    componentDidMount(){
        fetch(todoAPI)
            .then(res => res.json())
            .then(data => this.setState ({ todos: data }))
            .catch(err => console.log(err))
    };

    setDescription = (event) => {
        this.setState({...this.state, description: event.target.value});
    };

    handleAdd = () => {
        if(this.state.description === undefined ||  this.state.description === ""){
            alert('please add todo');
        } else {
            const newTodo = {
                description: this.state.description,
                id: new Date(),
                isChecked: false,
                deadline: this.state.selectedDate
            };
            this.addTodo(newTodo);
        };
    };

    addTodo = (newData) => {
        const { todos } = this.state;

        this.setState({todos: [...todos, newData]});
    };

    selectDate = (date) => {
        if(date < new Date()){
            alert("This doesn't make sense, please enter a due date for today or later.")
        } else {
            this.setState({selectedDate: date});
        };
    };

    deleteTodo = (id) => {
        const { todos } = this.state;
        const filteredArray = todos.filter(todo => todo.id !== id);
        this.setState({todos: filteredArray});
    };

    todoItemClicked = (id, value) => {
        const { todos } = this.state;
        
        const updatedTodos = todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    isChecked: value
                };
            };
            return todo;
        });

        this.setState({todos: updatedTodos});
    }; 


    setIsEditing = (id) => {
        const { todos } = this.state;
        
        const updatedTodos = todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    isEditing: !todo.isEditing
                };
            };
            return todo;
        });

        this.setState({todos: updatedTodos});
    };

    rewriteDescription = (id, event) => {
        const { todos } = this.state;
        const input = event.target.value;
        const updatedTodos = todos.map(todo => {
            if(todo.id === id){
                    return {
                    ...todo,
                    description: input
                }
            } 
            return todo;
        });

        this.setState({todos: updatedTodos});
    };

    render() {
        const { todos } = this.state;

        return(
            <>
                <AddForm 
                    handleAdd={this.handleAdd}
                    selectedDate={this.state.selectedDate}
                    setDescription={this.setDescription}
                    selectDate={this.selectDate}
                />
                {todos.length > 0 ? (
                    <ul className='list-container'>
                        {
                            todos.map((todo) => 
                                <TodoItem 
                                    description={todo.description}
                                    id={todo.id}
                                    deadline={todo.deadline}
                                    deleteTodo={this.deleteTodo}
                                    todoItemClicked={this.todoItemClicked}
                                    isChecked={todo.isChecked}
                                    isEditing={todo.isEditing}
                                    setIsEditing={this.setIsEditing}
                                    rewriteDescription={this.rewriteDescription}
                                />
                            )
                        }
                    </ul>
                ) : ( 
                       <p>There's no to-dos on your list. Please add it by clicking button above.</p>
                )}
            </>
        );
    };

} ;

export default TodoList;

TodoList.propTypes = {
    description: PropTypes.string.isRequired,
}