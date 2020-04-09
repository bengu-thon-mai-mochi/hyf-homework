import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(){
        super();
        this.state = {isChecked: false};
    }

    todoItemClicked = event => {
        this.setState({ isChecked: event.target.checked });
    }

    render() {
        const {description, id, deleteTodo} = this.props;
        const { isChecked } = this.state;
        return (
            <li className='todo-item-container'>
                <h4 className={isChecked ? 'checked' : ''} >{description}</h4>   
                <button onClick={() => deleteTodo(id)}>Delete!</button>
                <label>Check</label>
                <input type="checkbox" id="check" checked={isChecked} onChange={this.todoItemClicked}/>
            </li>
        )
    }
}

export default TodoItem;